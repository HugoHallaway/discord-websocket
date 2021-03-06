const { Client } = require('discord.js')
const WS = require('./ws/ws')

// load config.json
const config = require('./config.json')

// Create Discord Bot Client
var client = new Client()
// inject config into client instance object
client.config = config

// Create Websocket instance with token '123456',
// port 5665 and passing the discord client instance
var ws = new WS(config.ws.token, config.ws.port, client)

// If the bot is ready, this event will be fired
client.on('ready', () => {
    client.user.setStatus('dnd')   // Nothing (delete it)= Online, `idle`= Idle (Inactive(), `dnd`= Do not disturb
    client.user.setActivity(config.status, { type: 'WATCHING' })
        .then(presence => console.log(`Activity set to \"${config.status}\"`))
    console.log(`Connected as ${client.user.tag}`)
    console.log(`Profil picture of your BOT \"${client.user.avatarURL}\"`)
})

// Logging in Discord Bot at the API
client.login(config.token)
