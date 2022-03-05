import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "./Movie";

const Form = () => {

    const [data, setData] = useState({
        title: "",
        duration: "",
        year: ""
    });

    const navigate = useNavigate();

    const handleData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        create(data);
        // console.log("sended data");
        // navigate("/movies");
        // console.log("redirected");
        window.location.reload(false);
    }

    return (
        <form autoComplete="false" onSubmit={handleSubmit}>
            <div className="row mb-2">
                <div className="col">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" placeholder="Enter the title" onChange={handleData} className="form-control" />
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-md-6">
                    <label htmlFor="duration">Duration</label>
                    <input type="time" name="duration" id="duration" onChange={handleData} className="form-control" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="year">Year</label>
                    <input type="date" name="year" id="year" onChange={handleData} className="form-control" />
                </div>
            </div>
            <div className="row mb-2">
                <div className="col text-center">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </div>
        </form>
    );
}

export default Form;