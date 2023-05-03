import { useState } from "react";
export const useGlobalState = ()=>{
    const [isAllowed, setIsallowed] = useState(false);
    //Estados y funciones de solicitudes y contactos
    const [idsolicitudes, setIdSolicitudes] = useState("");
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [solicitud, setSolicitud] = useState("");
    const [comentario, setComentario] = useState("");
    const changeNombre = (event) => {setNombre(event.target.value)};
    const changeCorreo = (event) => {setCorreo(event.target.value)};
    const changeTelefono = (event) => {setTelefono(event.target.value)};
    const changeSolicitud = (event) => {setSolicitud(event.target.value)};
    const changeComentario = (event) => {setComentario(event.target.value)};
    //***************************************************** */
    const getDataAllowed = (value)=>{
      if(value === ""){
        setIsallowed(false)
      }else{
        setIsallowed(true)
      }
    };
    return{
      getDataAllowed,
      isAllowed,
      setIsallowed,
      nombre,
      setNombre,
      correo,
      setCorreo,
      telefono,
      setTelefono,
      solicitud,
      setSolicitud,
      comentario,
      setComentario,
      changeNombre,
      changeCorreo,
      changeTelefono,
      changeSolicitud,
      changeComentario,
      idsolicitudes,
      setIdSolicitudes
    }
  }