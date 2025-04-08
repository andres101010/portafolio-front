import { useState } from "react";
export const useContact = () => {
    const [alertContact, setAlertContact] = useState(false);
    const [alertContactSuccess, setAlertContactSuccess] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false)
   

    const timeContactAlert = () => {
      setTimeout(()=>{
        setAlertContact(false)
      }, 2000)
    };
    const timeContactAlertSuccess = () => {
      setTimeout(()=>{
        setAlertContactSuccess(false)
      }, 4000)
    };

  
        return { alertContact,
                 setAlertContact,
                 alertContactSuccess,
                 setAlertContactSuccess,
                 timeContactAlert,
                 timeContactAlertSuccess,
                 showSpinner,
                 setShowSpinner
                 
        }
}