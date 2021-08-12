const express = require("express");
const datas = require("./model");
const router = express.Router();

const validateId = (req,res,next) =>{
    datas.getRecipeById(req.params.id)
    .then(data=>{
        if(!data){
            next({
                status:404,
                message:"data with that id doesn't exist"
            })
        }else{
            req.recipe = data;
            next();
        }
    })
}

router.get("/:id", validateId, (req,res,next)=>{
    res.json(req.recipe);
})


router.use((err,req,res,next)=>{
    res.status(err.status||500).json({
        str:"Something went wrong",
        message:err.message
    })
})

module.exports = router;