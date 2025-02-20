export declare const log: {
  error: (...args: unknown[]) => void;
  ok: (...args: unknown[]) => void;
  warn: (...args: unknown[]) => void;
  info: (...args: unknown[]) => void;
};
declare const colors: {
  reset: string;
  bright: string;
  dim: string;
  underscore: string;
  blink: string;
  reverse: string;
  hidden: string;
  fgBlack: string;
  fgRed: string;
  fgGreen: string;
  fgYellow: string;
  fgBlue: string;
  fgMagenta: string;
  fgCyan: string;
  fgWhite: string;
  bgBlack: string;
  bgRed: string;
  bgGreen: string;
  bgYellow: string;
  bgBlue: string;
  bgMagenta: string;
  bgCyan: string;
  bgWhite: string;
};
export declare function colorizeText(text: string, color: keyof typeof colors): string;
export {};
