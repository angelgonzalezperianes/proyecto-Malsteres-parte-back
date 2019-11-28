const path=require('path');
const ruter=require('express').Router();
//preguntar pork de esta const
const rootDir=require('../util/path');


ruter.get('/',(req,res,next)=> {
    res.sendFile(path.join(rootDir,'views', 'index.html'));
});
module.exports= ruter;