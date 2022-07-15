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



// const {loadImage } = require('canvas')



// loadImage('tes.jpg').then((image) => {
//    const width = image.width;
//    const height = image.height;
//    const topText = 'LU ga tau';
//    const bottomText = "GUa juga ga"
//    const canvas = createCanvas(width, height)
//    const ctx = canvas.getContext('2d')


//    const fontSize = Math.floor(width / 10);
//    const yOffset = height / 25;

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

//   console.log('Sukses');
//   fs.writeFileSync('out.jpg', canvas.toBuffer())
// })

// const {createCanvas, loadImage, registerFont } = require('canvas')
// registerFont('./lib/font/Maximum Impact.ttf', { family: 'Impact' })

// // const fontSize = 46;
// loadImage('tes.jpg').then((image) => {

// 	   const width = image.width;
// 	   const height = image.height;
// 	   const topText = 'LU ga tau Kan ga tau';
// 	   const bottomText = "GUa juga ga Mana tauu"
// 	   const canvas = createCanvas(width, height)
// 	   const ctx = canvas.getContext('2d')
	
// 		let lineHeight = 1.5;
// 		const fontFamily = 'Impact';
	
// 	//    const fontSize = Math.floor(width / 10);
// 	//    console.log(yes)
// 	   const fontSize = 50;
	

// 	  canvas.width = width;
// 	  canvas.height = height;
	
    
    
//       // Prepare text
//       ctx.strokeStyle = "black";
//       ctx.lineWidth = 5;
//       ctx.fillStyle = "white";
//       ctx.textAlign = "center";
//       ctx.lineJoin = "round";
//       ctx.font = `${fontSize}px Impact`;

//       ctx.clearRect(0, 0, canvas.width, canvas.height);
// 	  ctx.drawImage(image, 0, 0);
    


// 	  let x = width / 2
// 	  let y;
//      if(topText){
//       ctx.textBaseline = "top";
// 	  y = 0
// 	  wrapText(ctx, topText, x, y, width, lineHeight, false, fontSize, fontFamily);
// 	 }
// 	 if(bottomText){
// 	  y = height;
// 	  ctx.textBaseline = 'bottom';
// 	  wrapText(ctx, bottomText, x, y, height, lineHeight, true, fontSize, fontFamily);
// 	 }

// 	console.log('Sukses');
// 	  fs.writeFileSync('out.jpg', canvas.toBuffer())
//   });

  
// const wrapText = (context, text, x, y, maxWidth, lineHeightRatio, fromBottom, fontSize, fontFamily) => {
// 	if (!text) {
// 		return;
// 	}
// 	context.font = `bold ${fontSize}pt ${fontFamily}`;

// 	const pushMethod = fromBottom ? 'unshift' : 'push';
// 	let lineHeight = lineHeightRatio * fontSize;

// 	let lines = [];
// 	let line = '';
// 	let words = text.split(' ');

// 	for (let n = 0; n < words.length; n++) {
// 		const testLine = line + ' ' + words[n];
// 		const metrics = context.measureText(testLine);
// 		const testWidth = metrics.width;

// 		if (testWidth > maxWidth) {
// 			lines[pushMethod](line);
// 			line = words[n] + ' ';
// 		} else {
// 			line = testLine;
// 		}
// 	}

// 	lines[pushMethod](line);

// 	if (lines.length > 2) {
// 		wrapText(
// 			context, text, x, y, maxWidth, lineHeightRatio, fromBottom, fontSize - 10, fontFamily);
// 	} else {
// 		for (let k in lines) {
// 			if (fromBottom) {
// 				context.strokeText(lines[k], x, y - lineHeight * k);
// 				context.fillText(lines[k], x, y - lineHeight * k);
// 			} else {
// 				context.strokeText(lines[k], x, y + lineHeight * k);
// 				context.fillText(lines[k], x, y + lineHeight * k);
// 			}
// 		}
// 	}
// };



// const hx = require('hxz-api');
// // const link = 'https://soundcloud.com/wahyu-kupit/balinese-dj-dosa-terindah-x-de?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
// hx.fbdown('https://www.facebook.com/watch?v=719683072621458').then(res => 
// { 
// console.log(res)

// }).catch(err => {console.log('error => ', err)});



const xfarr = require('xfarr-api');

// xfarr.fbdown('https://www.facebook.com/watch/?v=1261400897598197').then(res =>	{
// 	console.log(res)
// }).catch(err => {console.log('error => ', err)});

const url = 'https://i.pinimg.com/236x/86/bb/a9/86bba905d055f8c523afafca0aabc93b--seraph-of-the-end-anime-characters.jpg'

xfarr.search.chord(
	'Ngugut Jeriji'
).then(res => {console.log(res)});

// hx.youtube(link)
//     .then(result => {
//      console.log(result)
// });
// const xa = require('xfarr-api');
// tiktok
// xa.downloader.tiktok(link).then(result => {
//   console.log(result)
//   for(let i of result.media){
//     if(i.quality.includes('hd')){
//       console.log(i.url)
//     }
//   };
// });
// https://youtu.be/Nq5rzeJ5Ab4

// xa.downloader.youtube('https://youtu.be/zes3T4Gvpas').then(data => {
//   console.log(data)
// });


// let memeMaker = require('meme-maker')

// let options = {
//   image: './tes.jpg',         // Required
//   outfile: 'spiderman-meme.png',  // Required
//   topText: 'TODAY IM',            // Required
//   bottomText: 'AN ASS',           // Optional
//   font: './lib/Maximum Impact.ttf',      // Optional
//   fontSize: 50,                   // Optional
//   fontFill: '#FFF',               // Optional
//   textPos: 'center',              // Optional
//   strokeColor: '#000',            // Optional
//   strokeWeight: 2                 // Optional
// }

// memeMaker(options, function(err) {
//   if(e) throw new Error(err)
//   console.log('Image saved: ' + options.outfile)
// });


// const gm = require('gm').subClass({imageMagick: true});
// gm('./tes.jpg')
// .size(function (err, size) {
//     console.log(err)
//   if (!err)
//     console.log(size.width > size.height ? 'wider' : 'taller than you');
// });




