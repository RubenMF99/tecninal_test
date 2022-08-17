import {useState } from "react";
import axios from 'axios';
import New from "./New";
import Swal from "sweetalert2/dist/sweetalert2.all.js";
export const NewsNo = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");

  const handleSubmit = e =>{
    e.preventDefault();
    if(search === ''){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No hay campo a buscar',
      });
      return
    }
    searchNews();
  }

  const searchNews = async() =>{
    try{
      const Search = async () => {
        const url = `https://newsapi.org/v2/everything?q=${search}&from=2022-07-17&sortBy=publishedAt&apiKey=${
          import.meta.env.VITE_API_KEY
        }`;
        const { data } = await axios.get(url);
        setNews(data.articles);
        console.log(data.articles);
      };
      Search();
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div className="row centrar">
      <h1 className="text-center mt-4 mb-5">Tus Noticias</h1>
      <div className="col-10">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Que noticias deseas ver?"
            className="form-control mt-3"
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}
          />
          <button 
            type="submit"
            className="btn btn-primary btn-block mt-3 btn-tam"
          > Buscar</button>
        </form>

      </div>
      <div className="row centrar">
        {news?.map(new_not =>(
           <New new_not={new_not} key={new_not.url}/>
        ))}
      </div>
    </div>
  );
};
export default NewsNo