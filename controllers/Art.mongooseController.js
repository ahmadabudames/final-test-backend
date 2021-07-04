'use strict';

const artPacies=require('../models/Art.mongooseModel');


const createNewArt=async(req,res)=>{
const{
    title,
    thumbnail,
}=req.body;

const slug =title.toLowerCase().split(' ').join('-');

artPacies.find({ slug:slug},(error,data)=>{
    if(data.length>0){
        res.send('already exist');
    }else {
        const newArt=new artPacies({

            title:title,
            slug:slug,
            thumbnail:thumbnail,
        })
        newArt.save();
        res.send(newArt);

    }
} )

}


const getNewArt=async(req,res)=>{

    artPacies.find({},(error,data)=>{
        res.send(data);
    })

    
}


const deletenewArt=async(req,res)=>{

    const slug=req.params.slug;
    artPacies.remove({slug:slug},(error,data)=>{
        if (error){
           res.send(error)
        }else{
            res.send(data);
        }
    });
    
}


const updateNewArt=async(req,res)=>{
    const{thumbnail,title}=req.body;
    const slug=req.params.slug;
    artPacies.find({slug:slug},(error,data)=>{
        if (error){
            res.send(error);
        }else{
            
         
          data[0].thumbnail=thumbnail,
          data[0].save(),
          res.send(data)
        }
    })

}


module.exports={
    createNewArt,
    getNewArt,
    deletenewArt,
    updateNewArt
}