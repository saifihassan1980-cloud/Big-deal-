const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

const TOKEN = process.env.TOKEN;

// Debug check
console.log("TOKEN CHECK:", TOKEN ? "FOUND ✅" : "MISSING ❌");

if (!TOKEN) {
  console.log("❌ TOKEN missing!");
  process.exit(1);
}

client.once("ready", () => {
  console.log(`🔥 Bot Online: ${client.user.tag}`);
});

client.login(TOKEN).catch((err) => {
  console.error("❌ Login Error:", err);
});
