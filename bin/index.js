#!/usr/bin/env node
import boxen from "boxen";
import chalk from "chalk";
import { execSync } from "child_process";
import os from "os";

const freeMem = `${(os.freemem() * 0.000001).toFixed(0)}MB`;
const totalMem = `${(os.totalmem() * 0.000001).toFixed(0)}MB`;
const uptime = `${(os.uptime() / 3600).toFixed(0)} Hours, ${(
  (os.uptime() % 3600) /
  60
).toFixed(0)} Minutes`;
const shell = os.userInfo().shell.split("/");
const DE = execSync("echo $XDG_CURRENT_DESKTOP")
  .toString()
  .replace(/(\r\n|\n|\r)/gm, " ");
const WM = execSync("wmctrl -m").toString().split(": ")[1].split("\n")[0];

console.log(
  boxen(
    `OS: ${chalk.green(`${os.hostname()}`)}
USERNAME: ${chalk.hex("#8FBCBB")(`${os.userInfo().username}`)}
PLATFORM: ${chalk.blue(`${os.platform()}`)}
FREE MEM: ${chalk.red(freeMem)}
TOTAL MEM: ${chalk.red(totalMem)}
UPTIME: ${chalk.cyan(uptime)}
SHELL: ${chalk.yellow(shell[shell.length - 1])}
WM: ${chalk.hex("#8FBCBB")(`${WM}`)}
DE: ${chalk.hex("#8FBCBB")(`${DE}`)}
`,
    { padding: 1, margin: 1, borderStyle: "double" }
  )
);

// boxen(
//  ,
//   { padding: 1, margin: 1, borderStyle: "double" }
// );
