const Yup =require('yup');


exports.schema=Yup.object().shape({
  fname: Yup.string().required('فیلد نام  الزامی میباشد').min(2,"نام شما نباید کمتر از 2 کارکتر باشد").max(24,"نام شما نباید بیش از 24 کارکتر باشد"),
  lname: Yup.string().required('فیلد نام خانوادگی الزامی میباشد').min(2,"نام خانوادگی نباید کمتر از 2 کارکتر باشد").max(24,"نام خانوادگی نباید بیش از 24 کارکتر باشد"),
  number: Yup.number().required('فیلد شماره همراه الزامی میباشد').min(11,"شماره تماس صحیح نمیباشد "),
});