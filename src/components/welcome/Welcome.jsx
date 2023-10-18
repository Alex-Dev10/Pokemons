import React from "react";
import "./style.css";
import welcome from "../../Resources/welcome.png";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
   
      <div className="container-fluid welcome   ">
    
        <div>
          <div className="row ">
            <div className="col-12 col-md-5 WelcomeTitle">
              <span> Welcome to</span>
              <h1>Pokedex</h1>
            </div>
            <div className="col-12 col-md-7 WelcomePicture">
              <img className="img-fluid" src={welcome} alt="" />
            </div>
          </div>
        </div>

        <div className="text-center ">
        <Link to='/Home'>  <button className="btn btn-primary mt-4">
            Start{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-arrow-right-circle"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>
          </button></Link>
        </div>
      </div>
   
  );
};