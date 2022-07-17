const express = require('express')
const router = express.Router()
const multer = require('multer');


const user = require("../models/signUp");
const document = require("../models/document");

router.post("/", function(req,res){
    const newUser = new user({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    console.log(newUser.name);   
    newUser.save();
    res.send(newUser);
   
});


//------------------------------>New user<------------------------//

router.post("/user",(req,res)=>{
    console.log(req.body)
user.deleteOne({email:req.body.email},function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("deleted")
}
});
});


//---------------------------------->uploaing files to database<----------------------//

const videoStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../media/video/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.replace(/ /g, '_'));
  }
});

const videoUpload = multer({
  storage: videoStorage,
  limits: {
    fileSize: 1024 * 1024 * 50    // 50 MB
  }
});

router.post('/upload/video', videoUpload.single('file'), (req, res, next) => {
  res.status(200).json({
    message: 'Video upload successful'
  });
});


const pdfStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../media/pdfs/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.replace(/ /g, '_'));
  }
});

const pdfUpload = multer({
  storage: pdfStorage,
  limits: {
    fileSize: 1024 * 1024 * 50    // 50 MB
  }
});

router.post('/upload/paper', pdfUpload.single('file'), (req, res, next) => {
  res.status(200).json({
    message: 'Video upload successful'
  });
});

router.post('/upload/document',(req,res)=>{
  const {title, description, pdf, video} = req.body;
  const newDocument = new document(req.body);
  newDocument.save();
});


//--------------------------><-------------------------//

router.get("/getList", (req,res)=>{
  document.find({},(err,list)=>{
    res.send(list)
  });
})


router.post('/getUser',(req,res)=>{
  document.find({"email":req.body.email},(err,user)=>{
    if(err){
      res.send(err)
    }
    else{
      console.log(user)
    res.send(user)}
  })
})

module.exports = router;