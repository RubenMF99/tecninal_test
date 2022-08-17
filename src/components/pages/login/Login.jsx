import { useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import axios from 'axios';
//import useAuth from "../../hooks/useAuth";
const Login = () => {
  //State de usuario
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  
  let navigate = useNavigate();

  const { email, password } = user;
  //state de autenticacion
  //const {setAuthUser} = useAuth();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([email,password].includes('')) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios",
      });
      return;
    }

    userExisted()
  };
  const userExisted = async ()=>{
    try{
      const url = import.meta.env.VITE_APP_RUTA;
      const response = await axios.post(`${url}/login`,user,{header:{"Content-Type":"application/json"}});
      localStorage.setItem('token',response.data.token);
      setAuthUser(response.data.user); 
     if(response.data.user.codigo  && response.data.user.rol === "Estudiante" || response.data.user.rol === "estudiante")
     {
       navigate("/dashboard");
     }else if(response.data.user.codigo  && response.data.user.rol === "Administrador" || response.data.user.rol === "administrador" ){
       navigate("/dashboard-admin");
     }
      
    }catch(error){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El usuario o la contraseña no existen',
          });
        console.log(error);
    }
}
  return (
      <>
      <div className="row justify-content-center">
        <div className="col-auto p-5">
            <h1 className="text-center text-color mb-5 mt-5 ">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="row justify-content-center ">
              <div className="col-md-6 m-3">
                <label className="text-color">Correo </label>
                <input
                  name="email"
                  className="form-control secundary-color"
                  type="text"
                  placeholder="example@email.com"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6  m-3">
                <label className="text-color">Contraseña</label>
                <input
                  name="password"
                  className="form-control secundary-color mb-5"
                  type="password"
                  placeholder="**************"
                  maxLength="10"
                  onChange={handleChange}
                  value={password}
                />
              </div>
              <div className=" form-group col-md-6">
                <button
                  type="submit"
                  className="btn  primary-color text-white btn-lg btn-block btn-tam "
                >
                  Iniciar Sesion
                </button>
              </div>
            </div>
          </form>
        </div>
        </div>
    </>
  );
};


export default Login;