declare module "@korrrba/scraper-kernel-fork";
import { Browser } from "puppeteer";
export declare const events: any;
export type JobResult = Error | string | null;
export interface UserSettings {
  urls: string[] | string;
  pages: string;
  chromium?: string[];
  headful?: boolean;
}
export default function scrape(settings: UserSettings, browser?: Browser): Promise<JobResult | JobResult[]>;
