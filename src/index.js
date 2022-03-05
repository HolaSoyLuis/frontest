import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import App from "./App";
import Home from "./components/Home";
import AuthorIndex from "./components/author/Index";
import MovieIndex from "./components/movie/Index";

// import AuthorEdit from "./components/author/Edit";
import MovieEdit from "./components/movie/Edit";

const NotFound = () => <h1>404 Not Found</h1>

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="home" element={<Home />} />
                <Route path="authors" element={<AuthorIndex />} >
                    {/* <Route index element={<InvoiceIndex />} /> */}
                    {/* <Route path=":id" element={<AutorEdit />} /> */}
                </Route>
                <Route path="movies" element={<MovieIndex />} >
                    {/* <Route index element={<InvoiceIndex />} /> */}
                    <Route path=":id" element={<MovieEdit />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
    ,
    document.getElementById("root")
);

reportWebVitals();