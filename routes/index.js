const express = require('express')
const router = express.Router()
const Clothing = require('../models/index')

router.get('/',async (req,res) => {
   try{
       const clothings = await Clothing.find()
       res.json(clothings)
   }catch(err){
       res.status(500).json({
           message: err.message
       })
   }
})

router.get('/:id',getClothes,(req,res) => {
   res.send(req.cloth.name)
})

router.post('/',async (req,res) => {
   const clother = new Clothing({
       name: req.body.name,
       no_of_items: req.body.no_of_items
   })

   try{
     const newCloth = await clother.save()
     res.status(201).json(newCloth)
   }catch (err){
     res.status(400).json({message : err.message})
   }
})

router.patch('/:id',getClothes,async (req,res) => {
   if(req.body.name != null){
      res.cloth.name = req.body.name
   }
   if(req.body.no_of_items != null){
      res.cloth.no_of_items = req.body.no_of_items
   }
   try{
      const updatedClothes = await res.cloth.save()
      res.json(updatedClothes)
   } catch (err) {
      res.status(400).json({ message : err.message })
   }
})

router.delete('/:id',getClothes,async (req,res) => {
   try{
      await res.cloth.remove()
      res.json({
        message : "Deleted message successfully"
      })
   } catch (err){
     res.status(500).json({ message : err.message })
   }
})


async function getClothes(req,res,next){
  let cloth
   try{
      cloth = await Clothing.findById(req.params.id)
      if(cloth == null){
        return res.status(404).json({ message : 'Cannot find clothes' })
      }
   } catch (err) {
      return res.status(500).json({ message: err.message })
   }

   res.cloth = cloth
   next()
}

module.exports = router
