import { computeHeadingLevel } from "@testing-library/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { onGetMovied } from "./redux/movieAction";
import './Details.css'

const Details = (props) => {
    console.log(props, "props")
    const [data, setData] = useState([])
    const [newdata, setNewdata] = useState([])
    // const [ids,setIds] = useState("")
    const { id } = useParams()
    useEffect(() => {
        fetchdata()
        filtered()



    }, [])
    async function fetchdata() {
        const res = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9cfc295537684b6dcd1fd57ead573ac4')
            .then(res => setData(res.data.results))
            .catch((err) => console.log(err))
    }

    const filtered = () => {
        // const array = data.filter(ele => ele.id === id);
        console.log(data)
        const FilterData = data.filter((el) => {
            return el.id === id
        })
        console.log(FilterData, "filterData")
        console.log(id, "id")

    }
    let FilterData = data.filter((el) => {
        //  console.log(el.id)
        //  console.log(id)
        return el.id === id
    })
    console.log(FilterData, "filterData")


    return (
        <div className="details">
            <img className="details-img" src={props.location.state.img} alt="" />
             <div className="details-text">
            <div className="details-info">
                <h1>{props.location.state.title}</h1>
                <h2 >{props.location.state.vote_average}</h2>
            </div>
            <p>{props.location.state.overview}</p>
            </div>
        </div>
    )
}

export default Details