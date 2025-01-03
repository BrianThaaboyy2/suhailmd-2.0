const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_13_01_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgzLFxuICAgICAgICA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTksXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDg2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NixcbiAgICAgICAgMjMzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODcsXG4gICAgICAgIDc5LFxuICAgICAgICA0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDgxLFxuICAgICAgICA4LFxuICAgICAgICA5MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzEsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTksXG4gICAgICAgIDY4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjksXG4gICAgICAgIDEwLFxuICAgICAgICAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQsXG4gICAgICAgIDk0LFxuICAgICAgICA4NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDkzLFxuICAgICAgICA5NixcbiAgICAgICAgMTgxLFxuICAgICAgICA3NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NixcbiAgICAgICAgNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAzNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MixcbiAgICAgICAgODUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNixcbiAgICAgICAgODUsXG4gICAgICAgIDI1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRCYmJmWVlMcDBiYWtIcHJKZjhMRjZvYm9ab2VDR3NZeURaS0luaDArUDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEyNTUyMzY4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzIwNTNFNzQzOTQ4QjJGOUJGNURCMEMyMzQ0RTYwNThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1OTI0NDE4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEyNTUyMzY4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjJFQUNFNDZCMDZBMzc5NzVCMkRFOTkxNjAwRjJENEVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1OTI0NDE4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjd5SG9RYURSU2EyTzNMUmYydlVkWlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmE3MzY4YjctMjBmMC00NzMyLWFjODgtMGY1OTRiZjBjNzRjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OSxcbiAgICAgIDUwLFxuICAgICAgMTI1LFxuICAgICAgMTU0LFxuICAgICAgNDksXG4gICAgICAzNyxcbiAgICAgIDgzLFxuICAgICAgMjM5LFxuICAgICAgNzgsXG4gICAgICAxOTksXG4gICAgICAyNDksXG4gICAgICAxODYsXG4gICAgICAxOTIsXG4gICAgICAyMSxcbiAgICAgIDIzMCxcbiAgICAgIDI0OCxcbiAgICAgIDEzMyxcbiAgICAgIDEsXG4gICAgICA2MSxcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg5LFxuICAgICAgMjUzLFxuICAgICAgMTk3LFxuICAgICAgMTE5LFxuICAgICAgMTM0LFxuICAgICAgNTYsXG4gICAgICAxOTQsXG4gICAgICA0OSxcbiAgICAgIDQxLFxuICAgICAgMjA4LFxuICAgICAgNyxcbiAgICAgIDE2LFxuICAgICAgMTA2LFxuICAgICAgMTA4LFxuICAgICAgMjE5LFxuICAgICAgNTgsXG4gICAgICAyNDksXG4gICAgICA1OSxcbiAgICAgIDQwLFxuICAgICAgMTUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNDWU1INVNCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTI1NTIzNjg4OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2NzI1ODk4NzMzMTc5Mzo1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkQuIEx1ZmZ5XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0NKa3VJSEVMcTE0THNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBUVkyQnQvSWN1VTBnT2F6R2hMak05YW5vYjVFdUozdk93REs3bmRLTFFBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkI3Q0pUdlZDVU8zR1dOWWZFWHpoZmVxSWcySDBjZ3NXcWVYYlV0aUxtQzkwb2xnMXBETEtBUG55QWtIMHkwVDFLay9saHk4bllBRlZPUTJLU2pSMUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjYzWUUySWR0R09TK2RhRG4vTm5iWEtoN005Y3d5Y0Y1bERKVzFlMUxkWDM3UDFCcW9aakxjSUV1YmZzN0J2eUJlQ2tZSWYyMlpBN0RqUXVXSWxsZmd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMjU1MjM2ODg6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1OTI0NDE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTEhVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMSFUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJleDdHN2k0djJMOG55M1IwNDY5eHNSUjJ6N0pQdkxsNVdqektqQjVHQzJJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwODQ4NjUxODQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNTkyNDQxODc1OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
