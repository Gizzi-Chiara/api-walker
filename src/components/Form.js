import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const [category, setCategory] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(category, id);
        navigate(`/${category}/${id}`)
    }

    return (
        <div>
            <form className='top' onSubmit={handleSubmit}>
                <div className='selector'>
                    <label className='search'>Search: </label>
                    <select className="form-select selection" defaultValue={"DEFAULT"} onChange={(e) => setCategory(e.target.value)}>
                        <option value={"DEFAULT"} >Select one</option>
                        <option value="people" id="people">People</option>
                        <option value="films" id="films">Films</option>
                        <option value="starships" id="starships">Starships</option>
                        <option value="vehicles" id="vehicles">Vehicles</option>
                        <option value="species" id="species">Species</option>
                        <option value="planets" id="planets">Planets</option>
                    </select>
                </div>
                <div>
                    <label id='id-label'>Id: </label>
                    <input type="text" placeholder='Write a name' onChange={(e) => setId(e.target.value)}></input>
                    <input type="submit" value="Search" className='btn btn-primary'></input>
                </div>
            </form>
        </div>
    );
}

export default Form;