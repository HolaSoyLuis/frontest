import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { get, update } from "./Movie";

const View = ({id}) => {

    const [data, setData] = useState({
        id: 0,
        title: "",
        year: "",
        duration: ""
    });

    const navigate = useNavigate();

    useEffect(() => {
        const serverResponse = get(id);
        serverResponse.then(response => response.json())
        .then(incomingData => {
            setData(incomingData);
        });
    }, []);

    const handleData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        update(data);
        navigate("/movies");
    }

    return (
        <div className="container my-2">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-title">Movie id: {data.id}</div>
                        <div className="card-body">
                            <form autoComplete="false" onSubmit={handleSubmit}>
                                <div className="row mb-2">
                                    <div className="col">
                                        <label htmlFor="title">Title:</label>
                                        <input type="text" name="title" id="title" value={data.title} placeholder="Enter the title" onChange={handleData} className="form-control" />
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-md-6">
                                        <label htmlFor="duration">Duration</label>
                                        <input type="time" name="duration" id="duration" value={data.duration} onChange={handleData} className="form-control" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="year">Year</label>
                                        <input type="date" name="year" id="year" value={data.year} onChange={handleData} className="form-control" />
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col text-center">
                                        <button type="submit" className="btn btn-primary">Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default View;