import { PageLogic } from "../event-handlers";
export type DestinationStrategy = (destination: string) => string;
export declare function resolvePagesPath(): string;
export declare function searchForImport(importing: string, startPosition?: string): Promise<PageLogic>;
export declare function renameLastPartOfPathToWildCard(query: string): string;
