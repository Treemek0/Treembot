// const { clientId, guildId, token, publicKey } = require('./config.json');
require('dotenv').config()
const TOKEN = process.env.TOKEN 

const { Client, Events, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const express = require('express');
const app = express();
app.get('/', async (req,res) =>{
  return res.send('None')
})

app.listen(8999, () => {
})

// Log in to Discord with your client's token
client.login(TOKEN);
