'use strict';

const mongoose = require('mongoose');

const artSchema = mongoose.Schema({

    title: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,

    },

    slug: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
    },
    thumbnail:String,
});
const artModelSchema=mongoose.model('art_pecies',artSchema);

module.exports=artModelSchema;