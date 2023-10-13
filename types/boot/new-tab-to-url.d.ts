import { Browser } from "puppeteer";
export default function newTabToURL(
  browser: Browser,
  url: string
): Promise<{
  page: any;
  response: any;
}>;
