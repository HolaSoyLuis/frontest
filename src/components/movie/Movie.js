import {SERVER} from "../Server";

const getAll = (title) => {
    let endpoint = "";
    if(title) endpoint = SERVER + "/movies?title=" + title;
    else endpoint = SERVER + "/movies";
    const response = fetch(endpoint);
    return response;
}

const get = (id) => {
    return fetch(SERVER + "/movies/" + id);
}

const create = ({title, year, duration}) => {
    const response = fetch(SERVER + "/movies", {
        method: "POST",
        data: {
            title: title,
            year: year,
            duration: duration
        }
    });
    return response;
}

const update = ({id, title, year, duration}) => {
    const response = fetch(SERVER + "/movies/" + id, {
        method: "PUT",
        data: {
            title: title,
            year: year,
            duration: duration
        }
    });
    return response;
}

const drop = (id) => {
    const response = fetch(SERVER + "/movies/" + id, {method: "DELETE"});
    return response;
}

export {getAll, get, create, update, drop};