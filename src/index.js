const Discord = require('discord.js');
const bot = new Discord.Client();
const { Player } = require("discord-player");
const player = new Player(bot);
bot.player = player;

const token = 'ODMwNTQyNjIwODcwNTc0MTUx.YHINFw.dE4W8PiztbKwhHbOtWEmRCK-sFs';
bot.login(token);

bot.on('ready', () => {
    console.log('Bot is online!');
});

bot.on('message', async message => {
    const prefix ='?';

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'play') {
        const track = bot.player.play(message, args[0], message.member.user.tag);
       message.channel.send(`Agora tocando ${track.name}! - Pedida por ${track.requestedBy}`);
    }

    if (command === 'stop') {
         const track = await bot.player.stop(message);
        message.channel.send('To Fora!');
    }
})