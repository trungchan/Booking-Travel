import React from "react";
import { Link } from "react-router-dom";

function ErrorPage(props) {
  return (
    <div className="loading text-center">
      <div>
        <h1>Oops, 404 Notfound</h1>
        <Link to="/" className="btn btn-warning">
          Come back home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
