import React,{useState,useEffect} from "react";
import axios from "./axios";
import "./Row.css";

const baseurl = "https://image.tmdb.org/t/p/original/";
function Row({title,fetchUrl}){
    //states are like variables to store temporary data
    const [movies,setMovies] = useState([]);
    // A snippet that runs based on specific conditions/variables
    useEffect(()=>{
        //pull information when the component loads,[]blank run once
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);
    console.log(movies);
    
    return(
        <div className = "row">
            <h2>{title}</h2>
           
            {/*container*/}
            <div className = "row_posters">
                {/* several row posters */}
                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    className="row_poster"
                    src = {`${baseurl}${movie.poster_path}`} alt ={movie.name}/>
                ))}

            </div>
            
        </div>
    )
}

export default Row;