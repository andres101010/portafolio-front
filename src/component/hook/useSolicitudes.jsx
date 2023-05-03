import { useState, useEffect } from "react";
// import axios from "axios";
import { getData } from "../services/ContactServices";
export const useSolicitudes = () => {
    const [data, setData] = useState([]);
    const [serch, setSerch] = useState("");
    const [showTable, SetshowTable] = useState(true);
    const [showForm, Setshowform] = useState(false);
    const [showAlertSolicitud, SetshowAlertSolicitud] = useState(false);
    const [showAlertErrorSolicitud, SetshowAlertErrorSolicitud] = useState(false);
    const [showAlertEliminar, SetshowAlertEliminar] = useState(false);
    const [showAlertErrorEliminar, SetshowAlertErrorEliminar] = useState(false);
//     const getData = async ()=>{
//       const resp = await axios.get('http://localhost:3001/solicitudes')
//       setData(resp.data)
//   };
  
  const showModificacion = () => {
    Setshowform(true)
    SetshowTable(false)
  };
  
  const cancelar = () => {
    Setshowform(false)
    SetshowTable(true)
  };
  
  const timeAlertShowSolicitud = () => {
     setTimeout(()=>{
       SetshowAlertSolicitud(false)
       SetshowAlertEliminar(false)
     },3000)
  }
  const timeAlertShowSolicitudError = () => {
     setTimeout(()=>{
       SetshowAlertErrorSolicitud(false)
       SetshowAlertErrorEliminar(false)
     },3000)
  }
  
  const cargarSolicitudes = async () => {
     const response = await getData()
      setData(response)
      console.log(response)
  }
  useEffect(()=>{
    cargarSolicitudes()
  },[]);
  
  const result = !serch ? data : data.filter((datos)=> datos.nombre.toLocaleLowerCase().includes(serch.toLocaleLowerCase()));
  
  return{
    data,
    showTable,
    SetshowTable,
    showForm,
    Setshowform,
    showModificacion,
    cancelar,
    showAlertSolicitud,
    SetshowAlertSolicitud,
    showAlertErrorSolicitud,
    SetshowAlertErrorSolicitud,
    timeAlertShowSolicitud,
    timeAlertShowSolicitudError,
    getData,
    showAlertEliminar,
    SetshowAlertEliminar,
    showAlertErrorEliminar,
    SetshowAlertErrorEliminar,
    setSerch,
    result,
    cargarSolicitudes
  }
  };