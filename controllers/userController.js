const User=require('../models/user')

exports.getRegister= (req,res)=>{
  try {
    
    res.render('register.ejs',{
      pagetitle:"ثبت حساب کاربری",
    });

  } catch (err) {
    console.log(err);
  }
}

exports.postLogin=async(req,res)=>{
  const errors=[];
  try {

    const {username,number,password,configpassword}=req.body;
    const user=await User.findOne({number});
    if(!number.length == 11){
          errors.push({message:"شماره تماس را صحیح  وارد کنید"})
      
       res.render('register.ejs',{
        pagetitle:"ثبت حساب کاربری",
        errors,
      });
    }
       
    if(!user){

      await User.create({username,number,password});
      await User.save();
      res.redirect('/homepage');
    }
     return res.redirect('/user/login');
    
  } catch (err) {
    console.log(err);
    err.inner.forEach((e) => {
        errors.push({
            name: e.path,
            message: e.message,
        });
    });

    return res.render('register.ejs',{
      pagetitle:"ثبت حساب کاربری",
      errors,
    });

  
  }
}