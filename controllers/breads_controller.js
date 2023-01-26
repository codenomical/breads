const express = require('express')
const breads = express.Router()

const Bread = require('../models/bread.js')

// INDEX updated
// breads.get('/', (req, res) => {
//     res.render('index')
//   // res.send(Bread)
// })

breads.get('/', (req, res) => {
   res.render('index', {breads: Bread, title: 'Index Page'})
    // res.send(bread)
  })
  

// SHOW (remember /:arrayIndex is a placeholder.)
breads.get('/:arrayIndex', (req, res) => {
    const breadIndex = req.params.arrayIndex
    const currentBread = Bread[breadIndex];
    if(!currentBread) { // falsy
      res.render('error404')
    } else {
        res.render('Show', {
          bread: currentBread,
          index: breadIndex
        })
      }
   })
  
   // Ealier code. Check previous vidoes to connect info 
  // 01.25.23 update

  //   if (Bread[req.params.arrayIndex]) {
  //   res.render('Show', {
  //     bread: Bread[req.params.arrayIndex]
  //   })
  // } else {
  //   res.send('404')
  // }
  // })

  // DELETE (Splice method ie. such as array.splice (1st sets position), (2nd will delete it), and (3rd will be the added value).
breads.delete('/:indexArray', (req, res) => {
  Bread.splice(req.params.indexArray, 1)
  res.status(303).redirect('/breads')
})


module.exports = breads