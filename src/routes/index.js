const { Router } = require('express')
const router = Router()
const { generateQR } = require('../controller/qr.controller')

router.get('/', async(req, res) => {
  try {
    //const opt = req.body
    const opt = 'No parameters'
    const buffer = await generateQR(opt)

    return res.send({message: 'Download successfully!'});
  } catch(e) {
    console.log(e)
  }
})

module.exports = router
