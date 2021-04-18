import React from 'react'
const IMG_API ='https://image.tmdb.org/t/p/w1280'

function MovieCard({vote_average,title,poster_path,overview}) {
    return (
        <div className="movie">
             <img src={IMG_API + poster_path} alt={title}/>

             <div className="movie_info">
             <h3>{title}</h3>
            <span >{vote_average}</span>
             </div>
            <div className="movie_over">
                <h2>overview</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default MovieCard