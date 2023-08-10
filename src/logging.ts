import util from "util";
export const log = {
  error: function errorLog(...args: unknown[]) {
    _log("error", ...args);
  },
  ok: function okLog(...args: unknown[]) {
    _log("ok", ...args);
  },
  warn: function warnLog(...args: unknown[]) {
    _log("warn", ...args);
  },
  info: function infoLog(...args: unknown[]) {
    _log("info", ...args);
  },
};
function _log(type: "error" | "ok" | "warn" | "info", ...args: unknown[]) {
  const colorMap = {
    error: ["trace", "fgRed"],
    ok: ["log", "fgGreen"],
    warn: ["warn", "fgYellow"],
    info: ["info", "dim"],
  };

  // turn all args into strings
  const message = args
    .map((arg) => {
      if (typeof arg == "string") {
        return arg;
      } else {
        return util.inspect(arg, { showHidden: false, depth: null });
        // return JSON.stringify(arg, null, "\t");
      }
    })
    .join(" ");

  console[colorMap[type][0]](colorizeText(`\t⚠ ${message}`, colorMap[type][1] as keyof typeof colors));
}

const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  blink: "\x1b[5m",
  reverse: "\x1b[7m",
  hidden: "\x1b[8m",

  fgBlack: "\x1b[30m",
  fgRed: "\x1b[31m",
  fgGreen: "\x1b[32m",
  fgYellow: "\x1b[33m",
  fgBlue: "\x1b[34m",
  fgMagenta: "\x1b[35m",
  fgCyan: "\x1b[36m",
  fgWhite: "\x1b[37m",

  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m",
};
export function colorizeText(text: string, color: keyof typeof colors): string {
  return colors[color].concat(text).concat(colors.reset);
}
