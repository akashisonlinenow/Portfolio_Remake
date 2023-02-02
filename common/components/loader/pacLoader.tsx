import React from "react";

const PacMan = () => {
  return (
    <div className="pac-loader">
      <style jsx>
        {`
          .pac-loader {
            display: flex;
            // align-items: center;
            justify-content: center;
          }
          #container {
            padding: 3rem;
          }
          .pac-man {
            // margin: 0 auto;
            // margin-top: 8em;
            border-radius: 100em 100em 0 0;
            background: #f00;
            transform-origin: bottom;
            animation: eating-top 0.5s infinite;
          }
          .pac-man,
          .pac-man::before {
            width: 70px;
            height: calc(35px);
            background: #fed75a;
          }
          .pac-man::before {
            content: "";
            display: block;
            margin-top: calc(35px);
            position: absolute;
            transform-origin: top;
            border-radius: 0 0 100em 100em;
            transform: rotate(80deg);
            animation: eating-bottom 0.5s infinite;
          }
          .pac-man::after {
            position: absolute;
            border-radius: 100em;
            content: "";
            display: block;
            height: 20px;
            width: 20px;
            margin-top: calc(25px);
            margin-left: calc(25px);
            transform-origin: center;
            animation: center 0.5s infinite, ball 0.5s -0.33s infinite linear;
          }
          @keyframes eating-top {
            0% {
              transform: rotate(-40deg);
            }
            50% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(-40deg);
            }
          }
          @keyframes eating-bottom {
            0% {
              transform: rotate(80deg);
            }
            50% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(80deg);
            }
          }
          @keyframes center {
            0% {
              transform: rotate(40deg);
            }
            50% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(40deg);
            }
          }
          @keyframes ball {
            0% {
              opacity: 0.7;
              box-shadow: 70px 0 0 0 #fed75a, 120px 0 0 0 #fed75a,
                170px 0 0 0 #fed75a, 220px 0 0 0 #fed75a;
            }
            100% {
              box-shadow: 20px 0 0 0 #fed75a, 70px 0 0 0 #fed75a,
                120px 0 0 0 #fed75a, 170px 0 0 0 #fed75a;
            }
          }
        `}
      </style>
      <div id="container">
        <div className="pac-man"></div>
      </div>
    </div>
  );
};

export default PacMan;
