// const { clientId, guildId, token, publicKey } = require('./config.json');
require('dotenv').config()
const TOKEN = process.env.TOKEN 

const { Client, Events, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
	},
};




// site
const express = require('express');
const app = express();
app.get('/', async (req,res) =>{
  return res.send('None')
})

app.listen(8999, () => {
})

// Log in to Discord with your client's token
client.login(TOKEN);
