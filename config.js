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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUdKK2EyMjNPMDJ2SnpJeVltQ2x3YU5USEdsK29zL3VyaE9NbU9uNXdYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUlQbzIvQTdleEVYNlpSY002UURuTWtiVDNQWm4rdlN5SlgyOWZCQVUyTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQ3owSThqUmpBS2ZYWFhXc1FsSHFWVE45OHp4V2IxUS93M0pqa2Y1cEVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEVDdQM0xTa3B5RFN2U3ZEdEJuM2NZYzQ4RmlGbVUxcXFJcWpVd0tYVzBjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJHZFcva0xXc0pwRWQ4SHpXTVJneXRVSzRnMzdaS0pqL3JLbzlaVExISFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iit5VUZHOTlMWUJaUVdDbVBGVEhSb1l4NzRSSmtCTlU3dldldmxVYTN5MW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0pBV1owRm5jT1h2cWs0bjBUc0NVM1JIUnJnYnN1VU9xRlFJdnZiVGVHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia002bUFTY1VOVVlPRHdkUjQreGZ1R2ZCQWhMSkgrbnY2RFNKRyttNm15QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFrbGpKOWNqNXpSMWdQVXZOaVMxM2U4UG5nSXZTRmFic3hUTStJRXUrYzlRUUlEKzhWQTlnM3NhQ2xRdTRQM21HRVdCSkFxZ2lkd1JFTXNnTm8wRUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAxLCJhZHZTZWNyZXRLZXkiOiJtSzBXSy9wLytobnlUbnVNVE5hQVVBQXZHRHp2UTdBY0hKaHA5SlcwUFBBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjNVg5b1RySlFmYWRfQ215d20yOWhBIiwicGhvbmVJZCI6IjEwOTQ0ODMzLTQxYmQtNDk3Yi05MDQzLTAyMTdjZTFhMjA2OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPa005OEUyamMxbjlBeitUQVFZTm1WcGtDSlk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1k5M0d0SFl1aUdwenNyL1VhcGxJN3pybFhFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdNVzhYQVhSIiwibWUiOnsiaWQiOiIyMzQ3MDQ1NTA1MDk2OjI3QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNTFo0ckVGRUl5cWg3a0dHQTBnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJaY09GWUJNODR0MlJ4N3NLUEZ2Y0h0OGZTUlF2QXNGaTFsNTl3b0wwdWxRPSIsImFjY291bnRTaWduYXR1cmUiOiJwRWN6SG9ZNVIvTkduNDFrbndOcWJpM2k0TFVSM2lJYVo0cUoxOFdYWXdGd0d3SEk5STJib2tsSmNwTkF3amJGelBEQ3dtb0gwbUlRdk54Qi9JbGtBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNENpa2h5c2N3Q2ZaYjd6UGprQUNvV041TmpZUXN3QnJYcmN0UDNDam1wN1RxanBpdnJUNHB2UzJIclhUSUZqbjVuOC9iVHF1eWVzT3BxUDlZenBLQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQ1NTA1MDk2OjI3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldYRGhXQVRQT0xka2NlN0NqeGIzQjdmSDBrVUx3TEJZdFplZmNLQzlMcFUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzAyNzA0ODksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSHcwIn0="
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
