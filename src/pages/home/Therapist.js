import React from "react";

const Therapist = (props) => {
  const { name, image } = props.therapist;
  return (
    <div className=" text-center p-5 m-3 shadow overflow-hidden">
      <div className="overflow-hidden border rounded-md">
        <img
          className="therapist-image  overflow-hidden"
          src={image}
          alt={name}
        />
      </div>
      <h1 className="py-3 text-2xl font-serif">{name}</h1>
    </div>
  );
};

export default Therapist;
