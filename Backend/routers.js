const express = require('express');
const router = express.Router();
const UserData = require('./dataBase');
const multer = require('multer');
const path = require('path');
const carRegister = require('./Car.js');
let GETIDFORSPECIFI;



// --------------All Data ----------------------------
router.route("/").get(async (req, res) => {
    try {
        const Fetch_Data = await UserData.find({});
        res.status(200).send(Fetch_Data);
        console.log("Data fetched successfully.");
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error fetching data.");
    }
});

// --------------Register user -----------------------
router.route("/Register").post(async (req, res) => {
    try {
        const { email, phone, gender, password } = req.body;
        const checking = await UserData.findOne({ email: email });
        if (!checking) {
            const newUser = await UserData.create({
                email,
                phone,
                gender,
                password
            });
            res.send(newUser);
            console.log("Inserted 1 user.");
        } else {
            res.status(400).send("Email already exists.");
        }
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send("Error registering user.");
    }
});

//----------------------------Login--------------------------------------------

router.route("/login/").post(
    async (req,res)=>{
     const {username,email,password} = req.body
     const Log_User = await UserData.findOne({email:email}) 
     
         if(!Log_User){
             res.send("Invalid user data ....")
         }
         else if(email === Log_User.email && username===Log_User.username && password===Log_User.password){
             const userid = Log_User.id
             GETIDFORSPECIFI = userid;
             res.status(200).send(userid)
             console.log("logined")
 
             
         }
         else{
             res.status(400).send("invalid data")
             console.log("Invalid details....")
         }
        
 
         
     }
 )
//------------specifi Data ----------------------------
router.route("/dashboard").get(
    async (req,res)=>{
     
     const Specifi_User = await UserData.findById(GETIDFORSPECIFI)
         if(!Specifi_User){
             res.send("Login and try")
         }
         else{
             res.send(Specifi_User)
         }
     }
 )







// --------------------------------- Car Sell Register --------------------------

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'C:/Users/Pavan/Downloads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });
//-----car route------

router.route("/carRegister").post(upload.single('image'), async (req,res)=>{

    const {carNO,Model, company,NoKM } = req.body;
    const imagePath = req.file ? req.file.path : null;

    const formData =await carRegister.insertMany({
      carNO,
      Model,
      company,
      imagePath,
      NoKM
    }).then(
        ()=>console.log("Done...............................")
    )
    .catch((error) => {
      console.log('Error saving form data:', error);
      res.status(500).json({error: 'Error saving form data' });
    });
 

});


//-----------------------get All Cars---------------------------

router.route("/getCars").get(async (req, res) => {
    try {
        const Fetch_Data = await carRegister.find({});
        res.status(200).send(Fetch_Data);
        console.log("Data fetched successfully.");
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Error fetching data.");
    }
});



module.exports = router;
