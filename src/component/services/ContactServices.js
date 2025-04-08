import axios from 'axios';

const url = "https://nodemailer-v8in.onrender.com"
//****Funcion para crear una nueva solicitud */
export const sendSolicitud = async (contact) => {
  const response = await axios.post(`${url}/contacto/crear-solicitud`, contact);
  return response.data;
}
//****Funcion para Iniciar sesion */
export const sendLogin = async (dataUser) => {
  const response = await axios.post('http://localhost:3001/login', dataUser);
  return response.data;
}
//**** Funcion para registrarse en la pagina */
export const register = async (dataUser) => {
  const response = await axios.post('http://localhost:3001/login/crear-usuario', dataUser);
  return response.data;
}
//****Funcion para cargar las solicitudes */
export const getData = async ()=>{
  const resp = await axios.get('http://localhost:3001/solicitudes')
  return resp.data
};
//****Funcion para editar las solicitudes */
export const sendUpdate = async (contact, idsolicitudes)=>{
  const resp = await axios.put(`http://localhost:3001/solicitudes/editar-solicitud/${idsolicitudes}`,contact)
  return resp.data
};
//****Funcion para eliminar las solicitudes */
export const sendDelete = async (contact, idsolicitudes)=>{
  const resp = await axios.delete(`http://localhost:3001/solicitudes/eliminar-solicitud/${idsolicitudes}`,contact)
  return resp.data
};

