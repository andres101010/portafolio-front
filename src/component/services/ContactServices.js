import axios from 'axios';
export const sendSolicitud = async (contact) => {
  const response = await axios.post('http://localhost:3001/contacto/crear-solicitud', contact);
  return response.data;
}
export const sendLogin = async (dataUser) => {
  const response = await axios.post('http://localhost:3001/login', dataUser);
  return response.data;
}
export const register = async (dataUser) => {
  const response = await axios.post('http://localhost:3001/login/crear-usuario', dataUser);
  return response.data;
}

export const getData = async ()=>{
  const resp = await axios.get('http://localhost:3001/solicitudes')
  return resp.data
};
export const sendUpdate = async (contact, idsolicitudes)=>{
  const resp = await axios.put(`http://localhost:3001/solicitudes/editar-solicitud/${idsolicitudes}`,contact)
  return resp.data
};
export const sendDelete = async (contact, idsolicitudes)=>{
  const resp = await axios.delete(`http://localhost:3001/solicitudes/eliminar-solicitud/${idsolicitudes}`,contact)
  return resp.data
};

