 const express = require("express");
 const { Client, LocalAuth } = require("whatsapp-web.js");
 const app = express();
 const port = 3001;

 app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
 });

 const allSessions = {};
 const client = new Client({
   puppeteer: {
     headless: false,
   },
   authStrategy: new LocalAuth({
     clientID: "clientID",
   }),
 });

 client.on("qr", (qr) => {
   console.log("QR RECEIVED", qr);
 });

 client.on("ready", () => {
   console.log("Client is ready");
   client.getChats().then((chats) => {
     const kolli = chats.find(
       (chat) => chat.name === "Kolli Gobardan Durga Redd Ait Ecell"
     );

     client.sendMessage(
       kolli.id._serialized,
       "hello this a automated message from Nexfin"
     );
     console.log(kolli);
   });
 });

 client.initialize();
