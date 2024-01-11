
export const checkValidateForm=(email, Password)=>{
    const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
   
   const isValidPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);

    if(!isEmailValid) return 'Email is not valid';
    if(!isValidPassword) return 'Password is not valid';

    return null;
}