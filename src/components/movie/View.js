import React, { useState, useEffect } from "react";
import { get } from "./Movie";

const View = ({id}) => {

    const [data, setData] = useState({
        id: 0,
        title: "",
        year: "",
        duration: ""
    });

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

    return (
        <div className="container my-2">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-title">Movie id: {data.id}</div>
                        <div className="card-body">
                            <form>
                                <div className="row mb-2">
                                    <div className="col">
                                        <label htmlFor="title">Title:</label>
                                        <input type="text" name="title" id="title" value={data.title} placeholder="Enter the title" className="form-control" readOnly />
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-md-6">
                                        <label htmlFor="duration">Duration</label>
                                        <input type="time" name="duration" id="duration" value={data.duration} className="form-control" readOnly />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="year">Year</label>
                                        <input type="date" name="year" id="year" value={data.year} className="form-control" readOnly />
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

/*
this component will not be used beacuse i have just 1 Route in "/movies/:id"
and that Route will render the Edit view and component
*/