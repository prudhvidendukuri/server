const express = require('express');

const router = express.Router();
const Model = require('../model/model')
router.get('/get/:name',async (req,res)=>{
    try {
        const searchData = await Model.find({name: req.params.name});
        res.json(searchData);
        // if(searchData.length ){
        //     res.json(`found ${searchData.length} entries`);
        //     console.log(searchData);
        // }else{
        //     res.json(`didn't find any results`);
        // }
    } catch (error) {
        res.sendStatus(404);
    }

})

router.post('/post',async(req,res)=>{
    
    const sendData = new Model({
        name:req.body.name,
        password:req.body.text,
        others:req.body.others
    })

    try {
        
        const savingData = await sendData.save();
        res.json(savingData);
    } catch (error) {
        res.sendStatus(404);
    }
})

module.exports = router;