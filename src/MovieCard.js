import React from 'react'
import { useHistory,Link } from 'react-router-dom'
const IMG_API ='https://image.tmdb.org/t/p/w1280'

function MovieCard({id,vote_average,title,poster_path,overview}) {
   const history = useHistory()

    const Click =(id) => {
      history.push(`/details/${id}`)
    }
    return (
        <div className="movie">
            <Link to={{
                pathname:`/details/${id}`,
                state:{
                 user_id:id,
                 img:IMG_API+poster_path,
                 title:title,
                 vote_average:vote_average,
                 overview:overview
                }
            }}>
             <img src={IMG_API + poster_path} alt={title}/>

             <div className="movie_info">
             <h3>{title}</h3>
            <span >{vote_average}</span>
             </div>
            <div className="movie_over">
                <h2>overview</h2>
                <p>{overview}</p>
            </div>
            </Link>
        </div>
    )
}

export default MovieCard
