const QRCode = require('qrcode')
const path = require('path')
const url = path.join(__dirname, '../../public/')
const { v4: uuidv4 } = require('uuid')


const generateQR = async text => {
  try {
    //console.log('TEXT', text)
    const filename = uuidv4()

    const opts = {
      errorCorrectionLevel: 'H',
      type: 'image/png',
      quality: 0.3,
      margin: 1,
      color: {
        dark:"#010599FF",
        light:"#FFBF60FF"
      }
    }

    await QRCode.toFile(`${url}${filename}.png`,text, opts);
  } catch (err) {
    console.error(err)
  }
}

module.exports.generateQR = generateQR
