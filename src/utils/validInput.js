
export const validation = (email,password) => {
   const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
   const isValidPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

   if(!isValidEmail){
    return 'invalid email'
   }

   if(!isValidPassword) {
    return 'invalid password'
   }

   return null
}
