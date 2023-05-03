import { useState } from "react";
export const useLogin = () => {
    const [idlogin, setIdlogin] = useState('')
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(true);
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertValidationError, setShowAlertValidationError] = useState(false);
   
    const onChangeUser = (event) => { setUser(event.target.value)} 
    const onChangePassword = (event) => { setPassword(event.target.value)} 
   
    const register = ()=>{
      setShowLogin(false)
      setShowRegister(true)
    }
  
    const timeOutAlert = () => {
      setTimeout(()=>{
        setShowAlert(false)
      }, 4000)
    }
  
    const timeOutAlertValidation = () => {
      setTimeout(()=>{
        setShowAlertValidationError(false)
      }, 4000)
    };
   
    return {
      idlogin,
      user,
      password,
      showRegister,
      setShowRegister,
      showLogin,
      setShowLogin,
      showAlert,
      setShowAlert,
      showAlertValidationError,
      onChangeUser,
      onChangePassword,
      register,
      timeOutAlert,
      timeOutAlertValidation,
      setShowAlertValidationError
     
    }
  }