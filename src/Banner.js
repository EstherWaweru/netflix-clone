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
        }
        fetchData();
    },[])
    return (
        <header> 
            {/*  BackgroundImage */}
            {/* title */}
            {/* div -> Play Mylist */}
             {/* descriptiom */}
        </header>
    );
}
export default Banner;