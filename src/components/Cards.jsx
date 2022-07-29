import React from "react";
// import Single from "../assets/single.png";
// import Double from "../assets/double.png";
// import Triple from "../assets/triple.png";

const Cards = (props) => {
  return (
    <div
      className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-95 bg-gray-800 h-full duration-500`}
    >
      <img
        className={`w-20 mx-auto mt-[1.5rem] w-auto rounded-md shadow-md shadow-gray-500  bg-white`}
        src={props.img}
        alt="/"
      />
      <h2 className="text-2xl font-bold text-center py-8">{props.title}</h2>
      <div className="text-center font-medium bg-gray-800">
        <p className="py-2 border-b border-b-slate-900 mx-8">{props.desc}</p>
      </div>
    </div>
  );
};

export default Cards;
