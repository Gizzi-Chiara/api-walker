import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Starships = () => {
    const [apiData, setApiData] = useState([]);
    const { id } = useParams();
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then((response) => {
                setIsError(false);
                console.log(response.data);
                setApiData(response.data);
            })
            .catch((err) => {
                console.log(err);
                setIsError(true);
            })
    }, [id]);

    if (!isError) {
        return (
            <div className="character">
                <h1>Name: {apiData.name}</h1>
                <p>Model: {apiData.model}</p>
                <p>Manufacturer: {apiData.manufacturer}</p>
                <p>Cost: {apiData.cost_in_credits}</p>
                <p>Max atmosphering speed: {apiData.max_atmosphering_speed}</p>
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

export default Starships;