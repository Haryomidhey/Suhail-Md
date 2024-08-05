const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348137545706";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_39_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDg1LFxuICAgICAgICAzMixcbiAgICAgICAgMTEzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc3LFxuICAgICAgICA2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDczLFxuICAgICAgICAxMDQsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI5LFxuICAgICAgICA4OSxcbiAgICAgICAgODUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIsXG4gICAgICAgIDI0LFxuICAgICAgICA2OCxcbiAgICAgICAgNzksXG4gICAgICAgIDc2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkzLFxuICAgICAgICA4MyxcbiAgICAgICAgODksXG4gICAgICAgIDE4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDksXG4gICAgICAgIDg0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDg2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI4LFxuICAgICAgICA0NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3MixcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1MixcbiAgICAgICAgMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNixcbiAgICAgICAgNjksXG4gICAgICAgIDUxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjEwLFxuICAgICAgICA3MixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTczLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzksXG4gICAgICAgIDI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDYzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxODksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTksXG4gICAgICAgIDExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDczLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5NixcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibHJwbVRLNlAwZUJLL1BpaWpoYkFTZEdNSWh1TnN0Z3E2cHp1eXAwUWk4az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieHBZdm42MlpUcEs5S0dBN2gzNVpPUVwiLFxuICBcInBob25lSWRcIjogXCJmNDBiZjMyMy1lMmU5LTQ5ZDctYmEzYi1iMDM4MmQzYzQxNzdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQyLFxuICAgICAgMTQwLFxuICAgICAgMTM5LFxuICAgICAgMjM1LFxuICAgICAgMjI1LFxuICAgICAgMTE0LFxuICAgICAgMjE4LFxuICAgICAgMTIxLFxuICAgICAgMjA5LFxuICAgICAgMjA3LFxuICAgICAgODIsXG4gICAgICAyNDYsXG4gICAgICAyMzYsXG4gICAgICAyNDAsXG4gICAgICAyMjcsXG4gICAgICA1MyxcbiAgICAgIDE4NixcbiAgICAgIDE0MSxcbiAgICAgIDUxLFxuICAgICAgOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NyxcbiAgICAgIDEwMCxcbiAgICAgIDE2OSxcbiAgICAgIDk5LFxuICAgICAgMTI1LFxuICAgICAgMTI0LFxuICAgICAgMTU2LFxuICAgICAgMjQsXG4gICAgICAyNDUsXG4gICAgICAxODgsXG4gICAgICAyNTEsXG4gICAgICAxNSxcbiAgICAgIDIzOSxcbiAgICAgIDE2NCxcbiAgICAgIDEzLFxuICAgICAgMzYsXG4gICAgICAyNixcbiAgICAgIDE0MSxcbiAgICAgIDE0NCxcbiAgICAgIDIwOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBQ0tHUEtOMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzNzU0NTcwNjoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjkzNDM3MDMxNTkwMjM6MThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTSt5MCtzRkVMbUF4TFVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMMDVCTTBtcXdVekcvWWkwUlppd0dYSW8zRmozeHVQZit3RzFIUmpMa3o4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIldOWG91M04zQXZkMVNGakVydkJubUc4WmtBSkJ1Vm9DaWozWkp1SWJhaWZ5cDlkcVlKSUduUjBURVQ5ZUhkR3BSTjdQb0wxeDlPSE5VZi8vbktmRURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkM4dmdqSHdRUDhJcWkwdXNUbnplK2ppaXFhdUZ6L3FXWWdjRDBEaFdaWmJqRGxrMlc3cW03M1VGa2R6NUJieHVobjRqeGR5RVlPZ2JmcVE2Qno1eGdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzc1NDU3MDY6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI4NzU5NjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJdlpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUl2Wi5qc29uIjogIntcImtleURhdGFcIjpcIm9QK0V4MDNnejNQRVVKOCt1eTVqV2dZSGk2U3JMVUJRSlFmN2h1VnNsYWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU2NzkzODg5NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjQ3MDY1ODE2NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
