
export const validation = (email,password,userName) => {
   const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
   const isValidPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
   const isValidName = userName.length > 3;
   console.log(isValidName);

   if(!isValidEmail){
    return 'invalid email'
   }

   if(!isValidPassword) {
    return 'invalid password'
   }

   if(!isValidName) {
    return 'invalid user name'
   }

   return 'signUp successfully'
}
