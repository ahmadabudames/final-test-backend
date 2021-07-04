'use strict';


const superagent=require('superagent');
const artModel=require('../models/ArtModel');

const getArtData=async(req,res)=>{

    const url='http://api.artic.edu/api/v1/artworks';

    superagent.get(url).then(data=>{

        const responseData=data.body.data.map(art=>{
            return new artModel(art);
        })
        res.send(responseData);
    }).catch(error=>{
        console.log('we have error');
        console.log(error);
    })
};

module.exports={
    getArtData
}