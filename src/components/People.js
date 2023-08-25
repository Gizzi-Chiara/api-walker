import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const People = () => {
    const [apiData, setApiData] = useState([]);
    const { id } = useParams();
    const [isError, setIsError] = useState(false);
    const [homeWorld, setHomeWorld] = useState();
    const [homeWorldId, setHomeWorldId] = useState();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then((response) => {
                setIsError(false);
                console.log(response.data);
                setApiData(response.data);
                getHomeWorldId(response.data.homeworld);
                axios.get(response.data.homeworld)
                    .then((homeWorldResponse) => {
                        console.log(homeWorldResponse.data.name)
                        setHomeWorld(homeWorldResponse.data.name)
                    })

            })
            .catch((err) => {
                console.log(err);
                setIsError(true);
            });
    }, [id])

    const getHomeWorldId = (homeworldURL) => {
        //get 1 digit ID
        if (homeworldURL.charAt(homeworldURL.length - 3) === "/") {
            const hmId = homeworldURL.charAt(homeworldURL.length - 2)
            setHomeWorldId(hmId)
        } else {
            //get 2 digits ID
            const firstId = homeworldURL.charAt(homeworldURL.length - 3)
            const secondId = homeworldURL.charAt(homeworldURL.length - 2)
            const id = `${firstId}${secondId}`
            setHomeWorldId(id);
        }

    }

    if (!isError) {
        return (
            <div className="character">
                <h1>The character who chose you is: {apiData.name}</h1>
                <p>Height: {apiData.height}</p>
                <p>Skin color: {apiData.skin_color}</p>
                <p>Eye color: {apiData.eye_color}</p>
                <div className="url">
                    <p>Homeworld: </p>
                    <Link to={`/planets/${homeWorldId}`}> {homeWorld} </Link>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <h3>These are not the droids you are looking for!</h3>
                <img src="https://i.kym-cdn.com/editorials/icons/mobile/000/004/391/Hello_there.jpg" alt="Obi-Wan"></img>
            </div>
        )
    }
}

export default People;