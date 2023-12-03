function userCredential(req, res, next) {
  console.log("user: (alex)");
  console.log("email: (alex@gmail.com)");
  console.log("password: (alex123456)");
  console.log("age: (19)");
  next();
}

export default userCredential;
