const express = require('express');
const router = express.Router();
const UserData = require('./dataBase');
const multer = require('multer');
const path = require('path');
const carRegister = require('./Car.js');
const session = require('express-session');
const CarData = require('./filtercarDB')
const Cart = require('./Cart')
const mongoose = require('mongoose')

router.use(
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: false
    })
  );



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
                password,
                fisrtname:'---------------',
                Lastname:'-----------------',
                DOB:'--------------------',
                username:'-------------------',
                country:'--------------------',
                state:'-------------------------',
                City:'----------------------',
                Area:'------------------',
                pineCode:'------------------',
                About:'---------------------'
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

// -----------------------------Login route-------------------------------------------
router.post('/login', async (req, res) => {
    const {  email, password } = req.body;
    const logUser = await UserData.findOne({ email: email });
  
    if (!logUser) {
      res.status(400).send("Invalid user data");
    } else if (email === logUser.email && password === logUser.password) {
      req.session.logUser = logUser;
      res.status(200).send(logUser._id); 
      console.log("Logged in");
    } else {
      res.status(400).send("Invalid credentials");
      console.log("Invalid details");
    }
  });
  
  //-------------------------- Dashboard route----------------------------------------
  router.route('/dashboard/:id').get( async (req, res) => {

    const USERID = new mongoose.Types.ObjectId(req.params.id);
    try{
    const getSpecifi  = await UserData.findById(USERID)
    res.send(getSpecifi)
    }
    catch(err){
      res.status(401).send("not found")
    }
    
  });
  
//---------------------------Profile  Update----------------------------------------------------

router.put('/profile/:id', async (req, res) => {
    const logUser = req.params.id;
    const { fisrtname, Lastname,DOB,username,country,state,City,Area,pineCode,About } = req.body;
    console.log(req.body)
  
    try {
     //-------------find user---------------------
      const user = await UserData.findById(logUser);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      //------------from Body ------------------------------
      user.fisrtname = fisrtname;
      user.Lastname = Lastname;
      user.DOB = DOB;
      user.country = country;
      user.username = username;
      user.state = state;
      user.City = City;
      user.Area = Area;
      user.pineCode = pineCode;
      user.About = About;

  
      // ---------------------Save Changes---------------------
      await user.save();
  
      res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


//---------------------delete profile --------------------------------
router.delete('/users/:id', async (req, res) => {
    try {
        user_Id = req.params.id;
        console.log(user_Id)
      const deletedUser = await UserData.findByIdAndDelete(user_Id);
  
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });




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



//--------------------Filter api -------------------------------------------
//post

router.route('/PostAllCARDATA').post(
  async (req,res)=>{

      const {image,company,Model,Price} = req.body;
      const posted = await CarData.insertMany(
        {
          image,
          company,
          Model,
          Price
        }
      ).then(
        (resp)=>res.send(resp)
      ).catch(
        (err)=>{
          console.log('error')
        }
      )


  }
)



//get api

router.route('/getallcars').get(
 async (req,res)=>{
    const getAll = await CarData.find({})
    .then(
      (response)=>res.send(response)
    )
  }
)




//----------------------Cart routes-------------------------------------------


router.route('/postCartitems').post(
  async(req,res)=>{
    const {image,company,Model,Price} = req.body;
    const Post = await Cart.insertMany({
      image,company,Model,Price

    }).then(
      (respond)=>res.send(respond)
    ).catch(
      ()=>res.send("Error in cart addition")
    )
  }
)


//----get----

router.route('/getCart').get(
  async(req,res)=>{
    const allCart= await Cart.find({})
    res.send(allCart)
  }
    
  
)


//delete

router.route('/delete/:id').delete(
  async(req,res)=>{
      Key=req.params.id;
     
    console.log(Key)
    const Delete = await Cart.findByIdAndDelete(Key).then(
      (res)=>{res.state(200).send("Done deleted")}
    ).catch((err)=>{
      res.send(err)
    })
  }
)








module.exports = router;
