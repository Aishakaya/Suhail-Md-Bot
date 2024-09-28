const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_16_11_09_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODQsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkwLFxuICAgICAgICAzMSxcbiAgICAgICAgMyxcbiAgICAgICAgNixcbiAgICAgICAgMTc1LFxuICAgICAgICA1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTksXG4gICAgICAgIDQyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY2LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyLFxuICAgICAgICAzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDUsXG4gICAgICAgIDExNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMixcbiAgICAgICAgMjExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDg0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzcsXG4gICAgICAgIDMxLFxuICAgICAgICAzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUzLFxuICAgICAgICA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU5LFxuICAgICAgICA1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM4LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxLFxuICAgICAgICAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNSxcbiAgICAgICAgNTksXG4gICAgICAgIDc1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MCxcbiAgICAgICAgODYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNyxcbiAgICAgICAgODIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXbnFHOFVDOFlUL2cyUytQNW9JVVVXOGJSN0JhaHFKZFhua0dPR3V6bFlVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpeHdyRm42eFRBQzhkRlpMT1RQTEVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdlZWVlNjBmLTUwNDgtNDU2MC1hZjUyLTQ0OTZiZjk3NDEyZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTIsXG4gICAgICAxMDUsXG4gICAgICAxNjIsXG4gICAgICA2MixcbiAgICAgIDEwMCxcbiAgICAgIDIyLFxuICAgICAgMjU1LFxuICAgICAgMTI5LFxuICAgICAgNzUsXG4gICAgICA1NixcbiAgICAgIDE3MyxcbiAgICAgIDIyLFxuICAgICAgMjQxLFxuICAgICAgMjA1LFxuICAgICAgNjQsXG4gICAgICA4MyxcbiAgICAgIDEzLFxuICAgICAgMTU0LFxuICAgICAgMTcsXG4gICAgICA4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NCxcbiAgICAgIDI3LFxuICAgICAgMjQ5LFxuICAgICAgNDMsXG4gICAgICAxNixcbiAgICAgIDY0LFxuICAgICAgMTY3LFxuICAgICAgMjMsXG4gICAgICAyNTMsXG4gICAgICA0NCxcbiAgICAgIDIzMCxcbiAgICAgIDE5NSxcbiAgICAgIDIzNyxcbiAgICAgIDY5LFxuICAgICAgMjQ3LFxuICAgICAgNzksXG4gICAgICA5OCxcbiAgICAgIDE2NixcbiAgICAgIDE3NSxcbiAgICAgIDEyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHVzVZSFRHUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwMDQ4NjU5MjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQWlzaGF0IE11aGFtbWFkIGtheWEoINin2YUg2YjYp9mE2YrYr9inKVwiLFxuICAgIFwibGlkXCI6IFwiOTYyNjc0OTc2Njg3ODg6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJbkltZDRHRUwreTI3Y0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNQVHhCdmZneUkzQ2tJZVBiVXV4OSt1K3lWelh4S1cxTFArQ0ZFV2N4Z289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRGRHYlhCcTRsUzFlSm9Gdk95SlVXaURZdjJ0Q0kzTE04ZHY1dldicGdOck9qc25BN1R5SXB4aTRCcWZKTVFxeFpYQkRsRmxOV2V3R09tSFFLcHcyRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTmFSUUMveGJlcGM1WmpSeU5peTRObkNRMHc2a252STQ5bEtwZlhybmdlbmhpcFZ6WUFhNzByOTJUcnpvakhqV1BUbzBjSlIwOFdTUlRPTlBKdGREaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwMDQ4NjU5MjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzQ1MzUwOFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
