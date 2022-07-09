const fs = require('fs')
const chalk = require('chalk')



global.bot = {
    name: 'Alexa Bot',
    version: '1.0.0',
    fase: 'beta',
    public: true,
    number: '+1 (203) 587-2508',
    packageName: "APA LO",
    prefix: '#',
    prefixs: ['','!','.','🐦','🐤','🗿']
}


global.owner = {
    name: 'MadeAja',
    number: '085333389277'
}





let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.yellowBright(`Update File'${__filename}'`))
	delete require.cache[file]
	require(file)
})