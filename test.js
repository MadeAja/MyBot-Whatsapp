// require('./config')


// console.log(global.bot.prefixs)

// let data = "\nNew Messages: \nPesan: ALSKal\nDari: MadeAja\n";
// console.log(data);


// const moment = require('moment-timezone')


// console.log(moment(new Date()).format('DD/MM/YY HH:mm:ss'))

// const body =".tes id "
// const args = body.trim().split(/ +/).slice(1);
// let a = args.slice(1).join(' ')
// if(a === "")console.log("error")

// let tes = args.trim().split(/ */).slice(2)
// console.log(args);

// console.log(args.trim.split(/ +/).slice(2).join())



const translate = require('translate-google')

translate('I speak Chinese', {to: 'zh-cn'}).then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})


