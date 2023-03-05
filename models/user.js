const mongoose=require('mongoose');

const {schema}=require('./secret/yupuser')


const modelscema=new mongoose.Schema({
  username:{
    type:String,
    required:true,
    minLength:2,
    maxLength:12,
    trim:true,
  },
  number:{
    type:Number,
    required:true,
    trim:true,
  },
  password:{
    type:String,
    required:true,
    minLength:6,
    maxlength:24,
  }
})

modelscema.statics.userValidation = function (body) {
  return schema.validate(body, { abortEarly: false });
};
module.exports = mongoose.model("User",modelscema);