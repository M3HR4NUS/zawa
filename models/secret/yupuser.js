const Yup =require('yup');


exports.schema=Yup.object().shape({
  username: Yup.string().required('فیلد نام کاربری الزامی میباشد').min(2,"نام کاربری نباید کمتر از 2 کارکتر باشد").max(24,"نام کاربری نباید بیش از 24 کارکتر باشد"),
  number: Yup.number().required('فیلد شماره همراه الزامی میباشد').min(11,"شماره تماس صحیح نمیباشد "),
  password: Yup.string()
  .min(6, "کلمه عبور نباید کمتر از 6 کاراکتر باشد")
  .max(24, "کلمه عبور نباید بیشتر از 24 کاراکتر باشد")
  .required("کلمه عبور الزامی می باشد"),
confirmPassword: Yup.string()
  .required("تکرار کلمه عبور الزامی می باشد")
  .oneOf([Yup.ref("password"), null], "کلمه های عبور یکسان نیستند"),
});