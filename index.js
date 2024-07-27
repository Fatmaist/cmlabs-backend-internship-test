const express = require('express')
const app = express()
const fizzbuzz = require('./fizzbuzz')

app.get('/fizzbuzz', (req, res) => {
    const result = fizzbuzz(100)
    console.log(result)
    res.send('Proses cek angka selesai, silahkan cek terminal untuk hasilnya!')
})

const port = 3000

//buka server berikut untuk dapat hasilnya http://localhost:3000/fizzbuzz
//lalu cek terminal

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})