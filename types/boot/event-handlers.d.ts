import { Browser, Page } from "puppeteer";
import { JobResult } from "../scrape";
export type PageLogic = (browser: Browser, page: Page) => Promise<string[]>;
export declare const eventHandlers: {
  /**
   * This is the main handler that will be called when the browser navigates to any new page.
   * It will load the logic for the page and then call the logic.
   * @param browser the browser instance
   */
  setupBrowserOnTargetChanged: (browser: any, settings: any) => (target: Target) => Promise<void>;
  logicLoaded: (browser: Browser) => (logic: PageLogic, page: Page) => Promise<string[]>;
  logicFailed: () => (error: Error) => void;
  scrapeComplete: (resolve: any, reject: any) => (results: JobResult) => Promise<any>;
};
export default eventHandlers;
