import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Species = () => {
    const [apiData, setApiData] = useState([]);
    const { id } = useParams();
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/species/${id}`)
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
                <h1>Type: {apiData.name}</h1>
                <p>Classification: {apiData.classification}</p>
                <p>Average height: {apiData.average_height}</p>
                <p>Language: {apiData.language}</p>
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

export default Species;