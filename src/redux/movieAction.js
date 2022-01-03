import axios from "axios"

export const onGetMovieSuccess = (data)=>{
    return{
        type:"ON_GETMOVIE_SUCCESS",
        payload:data
    }
}

const MOVIES_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9cfc295537684b6dcd1fd57ead573ac4';


export const onGetMovie = () => {
    return (dispatch) => {
         axios.get(MOVIES_API)
        .then((data) => {
            dispatch(onGetMovieSuccess(data.data))
        })
        .catch((error)=>{
            console.log(error)
        })
    }
   
}
