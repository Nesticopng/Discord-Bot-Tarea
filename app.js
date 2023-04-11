require('dotenv').config()
const axios = require('axios')

const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({intents:[ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]})

client.on('ready',()=>{
    console.log("El bot esta listo")
})

client.on('messageCreate',async(message)=>{
    if(message.content === 'Hola'){
        message.reply({
            content:'Bienvenido al Servidor'
        })
    } else if(message.content === 'quote'){
        let resp = await axios.get('https://api.quotable.io/random')
        const quote = resp.data.content
        message.reply({
            content:quote
        })
    }else if(message.content ==='Buenas'){
        message.reply({
            content:'Bienvenido al Servidor'
        })
    }
})

client.login(process.env.DISCORD_BOT_ID)