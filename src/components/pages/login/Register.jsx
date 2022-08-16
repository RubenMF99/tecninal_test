import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { Link } from "react-router-dom";
const Register = () => {
  const [data, setData] = useState({
    companyname: "",
    direction: "",
    NIT: "",
    cell: "",
  });
  const { companyname, direction, NIT, cell } = data;
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([companyname, direction, NIT, cell].includes("")) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son Obligatorios",
      });
      return;
    }
    inserDataCompany();
    setData({
      companyname: "",
      direction: "",
      NIT: "",
      cell: "",
    });
  };

  const inserDataCompany = async () => {
    try {
      const url = `${import.meta.env.VITE_APP_RUTA}/company/`;
      const result = await axios.post(url, data);
      Swal.fire({
        icon: "success",
        title: "Exitoso",
        text: "Los Datos fueron agregados Correctamente",
      });
    } catch (error) {
      console.log(error);
    }
  };
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

                  className="form-control secundary-color"
                  type="text"
                  placeholder="example@email.com"
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
                />
              </div>
              <div className=" form-group col-md-6">
                <button
                  className="btn primary-color text-white btn-tam btn-lg btn-block "
                  type="submit"
                >
                  Enviar Datos
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
