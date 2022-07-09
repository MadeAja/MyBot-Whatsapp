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



// const translate = require('translate-google')

// translate('I speak Chinese', {to: 'zh-cn'}).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.error(err)
// })
// const { Image, createCanvas, loadImage } = require('canvas');
const fs = require('fs');

// From a buffer:
// fs.readFile('tes.jpg', (err, squid) => {
//   if (err) throw err

   
//   const ctx = squid.getContext("2d");
//   const width = image.width;
//   const height = image.height;
//   const fontSize = Math.floor(width / 10);
//   const yOffset = height / 25;

//   // Update canvas background
//   canvas.width = width;
//   canvas.height = height;
//   ctx.drawImage(image, 0, 0);

//   // Prepare text
//   ctx.strokeStyle = "black";
//   ctx.lineWidth = Math.floor(fontSize / 4);
//   ctx.fillStyle = "white";
//   ctx.textAlign = "center";
//   ctx.lineJoin = "round";
//   ctx.font = `${fontSize}px sans-serif`;

//   // Add top text
//   ctx.textBaseline = "top";
//   ctx.strokeText(topText, width / 2, yOffset);
//   ctx.fillText(topText, width / 2, yOffset);

//   // Add bottom text
//   ctx.textBaseline = "bottom";
//   ctx.strokeText(bottomText, width / 2, height - yOffset);
//   ctx.fillText(bottomText, width / 2, height - yOffset);



const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')

// Write "Awesome!"
ctx.font = '30px Impact'
ctx.rotate(0.1)
ctx.fillText('Awesome!', 50, 100)

// Draw line under text
var text = ctx.measureText('Awesome!')
ctx.strokeStyle = 'rgba(0,0,0,0.5)'
ctx.beginPath()
ctx.lineTo(50, 102)
ctx.lineTo(50 + text.width, 102)
ctx.stroke()

// Draw cat with lime helmet
loadImage('tes.jpg').then((image) => {
  ctx.drawImage(image, 50, 0, 70, 70)
  console.log('Sukses');
  fs.writeFileSync('out.jpg', canvas.toBuffer())
})



// const canvas = createCanvas(200, 200)
// const ctx = canvas.getContext('2d')
// const topText = "Tes";
// const bottomText = "AAAA"
// loadImage('tes.jpg').then((image) => {
//     ctx.drawImage(image, 50, 0, 70, 70)
  

//     const width = image.width;
//       const height = image.height;
//       const fontSize = Math.floor(width / 10);
//       const yOffset = height / 25;
    
//       // Update canvas background
//       canvas.width = width;
//       canvas.height = height;
//       ctx.drawImage(image, 0, 0);
    
//       // Prepare text
//       ctx.strokeStyle = "black";
//       ctx.lineWidth = Math.floor(fontSize / 4);
//       ctx.fillStyle = "white";
//       ctx.textAlign = "center";
//       ctx.lineJoin = "round";
//       ctx.font = `${fontSize}px sans-serif`;
    
//       // Add top text
//       ctx.textBaseline = "top";
//       ctx.strokeText(topText, width / 2, yOffset);
//       ctx.fillText(topText, width / 2, yOffset);
    
//       // Add bottom text
//       ctx.textBaseline = "bottom";
//       ctx.strokeText(bottomText, width / 2, height - yOffset);
//       ctx.fillText(bottomText, width / 2, height - yOffset);



//       fs.write
//   })
// // });

