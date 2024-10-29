//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "adamswasiu850@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/2tgnpj.jpeg";
global.devs = "2347045505096";
global.sudo = process.env.SUDO || "2347045505096";
global.owner = process.env.OWNER_NUMBER || "2347045505096";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/t54mcd.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEd5R1I2bmNwSkVuNWNZN3BqNGE3VmNna2NJbkNiTjBOOEZZYW1vaVNtQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiendIZlJ1THd1S1h0d3hrYllNcHE3TXE2bVpiNGxCZVZSSzhEN2FSQWN3Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVUDE0NEVsV3NUeW5QeXdsTHh6VjNNeWxuTHFYYXh4TFN5Q0RYZmptOEVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDYzZBUUJ2eWVyM0lwTTNnVnVNTGk2NUdLbW9ZRU82eTJnQmJaU213SXo4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlEZU1jN2Q3WEM0QkZmSW8zbWt0NDFQZnF2M2pnZHlCQ05DZVZkSXoxWGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFVYWxWVUlMeEdiWU5pYVhmMURUay9YRjlBMTlIS2ZBZVdYdXpIVzBWaFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEVnNk0vSk1SaDlaVFA1QVZWb0toajZWMDFyaXh5dXdybnBpbEJOVGQxST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1h0SGZLeWZYWG1tZUp4d2RxT0l6V2J1R2FxaXZEQUMxekZXWTg1djJRMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxTWTZwcG1SRDNWUUE4NEJEeElGZUtwYmNmcDlyWG9ZcXllOUdtVzRvMFhTU1MwV3U2YlJIZlQyLys3TlZHS25KbG92ZE00alBBTDE4Zkc2aWpHdkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAzLCJhZHZTZWNyZXRLZXkiOiJuT2dUalpuRWY2YUhWOGpjTmlITlhCMUM3M0lyUHE0TlBadURlL0d3Q1VjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1bVY4MU5iMlExLWZQYzFUc2dzUGFBIiwicGhvbmVJZCI6IjMzNjhhOWQyLTZjNDYtNDE3YS1iMGUyLWM3NjMwNmMzOWZjOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiMGRlZWpIS0N6aTFUUlYwMitDY0w1NitERkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidE9nOHlNaVRiNmJkQVdwTDdndmFLWThqVHAwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhNNzdMQzdBIiwibWUiOnsiaWQiOiIyMzQ3MDQ1NTA1MDk2OjI1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNTFo0ckVGRUp6cmhMa0dHQXNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJaY09GWUJNODR0MlJ4N3NLUEZ2Y0h0OGZTUlF2QXNGaTFsNTl3b0wwdWxRPSIsImFjY291bnRTaWduYXR1cmUiOiJJQjk5U2VpL2hwdUdkUUZYTjBHK0lxbDk1QlZCRUwvUURNcUFGMXRCNlQ0Qks3WnQ0S2dkSmlWcmNQSmJoOCtzbjUzNnlQT0RaS2NxS3FKamVMbHhEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTjM1OWI1eTN3TEdkZmFrN3V3UWRGakxFdmdvT1Q5S1lqSWpGQTV6STlWRDY2NmxRR0FlNFVvZStTNG1ycDhSVVNFTVE4T0lYelk5R0lsNlc1UG4vREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQ1NTA1MDk2OjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldYRGhXQVRQT0xka2NlN0NqeGIzQjdmSDBrVUx3TEJZdFplZmNLQzlMcFUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzAyMjk2NzN9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BLOOD™`",
  author: process.env.PACK_AUTHER || "BLOOD",
  packname: process.env.PACK_NAME || "L O R D K A Y",
  botname: process.env.BOT_NAME || "BLOOD",
  ownername: process.env.OWNER_NAME || "LORDKAY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
