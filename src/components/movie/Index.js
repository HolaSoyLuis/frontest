import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { getAll } from "./Movie";
// import View from "./View";
// import Edit from "./Edit";
import Create from "./Create";
import Delete from "./Delete";

const Index = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchedData = getAll();
        fetchedData.then(response => response.json())
        .then(incomingData => {
            setData(incomingData);
        })
    });

    const renderedData = data.map(item => {
        return (
            <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.year}</td>
                <td>{item.duration}</td>
                {/*
                <td>
                    <Link to={"/movies/" + item.id} className="btn btn-info" />
                </td>
                */}
                <td>
                    <Link to={"/movies/" + item.id} className="btn btn-info" >Edit</Link>
                </td>
                <td><Delete id={item.id} /></td>
            </tr>
        );
    });

    return (
        <Fragment>
            <div className="container my-2">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <h5>Movies</h5>
                                <span className="badge badge-sm bg-success" style={{cursor: "pointer"}} data-bs-toggle="modal" data-bs-target="#createForm">+</span>
                            </div>
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Year</th>
                                            <th>Duration</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderedData}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="createForm" tabIndex="-1" aria-labelledby="createFormLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="createFormLabel">Nuevo registro</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Create />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Index;
