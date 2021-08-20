import React,{useState , useEffect} from 'react';
import requests from './requests';
import axios from './axios';
function Banner(){
    // state
    const [movie,setMovie] = useState([]);
    //useEffect for  picking a random movie
    useEffect(()=>{
        async function fetchData(){
        const request = await axios.get(requests.fetchNetflixOriginals) ;
        setMovie(request.data.results[
            Math.floor(Math.random() * request.data.results.length -1)]);
        return request;
        }
        fetchData();
    },[])
    console.log(movie);
    return (
        <header className = "banner"
        style = {{
            backgroundSize:"cover",
            backgroundImage:`url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition:"center center",
        }}
        > 
            <div className="banner_contents">
             {/* title */}
             <h1>
                 { movie?.name || movie?.title || movie?.original_name}
             </h1>
            </div>
            <div className = "banner_buttons">
                <button className = "banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">
                {movie?.overview}
            </h1>
        </header>
    );
}
export default Banner;