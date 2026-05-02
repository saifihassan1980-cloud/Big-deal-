const { Client, GatewayIntentBits } = require("discord.js");

// 🔐 TOKEN environment se aayega
const TOKEN = process.env.TOKEN;

if (!TOKEN) {
  console.log("❌ TOKEN missing! Variables me add kar.");
  process.exit(1);
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// ✅ Bot ready
client.once("ready", () => {
  console.log(`🔥 Bot Online: ${client.user.tag}`);
});

// ✅ Simple slash command response (optional test)
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("🏓 Pong!");
  }
});

// 🔐 Login
client.login(TOKEN);
