import ProxyHandler from "./proxy-handler";
import { getSpysOneIps } from "./sources/spys-one";

const proxiesDisabled = process.env.DEBUG_DISABLE_PROXIES;

// TODO turn into a class
export default async function proxies() {
  if (proxiesDisabled) {
    console.trace("Proxies disabled");
    const handler = new ProxyHandler();
    return handler;
  }

  const ips = await getSpysOneIps();
  const handler = new ProxyHandler();
  handler.storage.flattened = ips as string[];
  return handler;
}
