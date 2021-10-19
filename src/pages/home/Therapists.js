import React, { useEffect, useState } from "react";
import Therapist from "./Therapist";

const Therapists = () => {
  const [therapists, setTherapists] = useState([]);
  const displayTherapists = therapists.slice(0, 4);

  useEffect(() => {
    fetch("therapists.JSON")
      .then((response) => response.json())
      .then((data) => setTherapists(data));
  }, []);
  return (
    <div className="md:w-9/12 w-11/12 mx-auto my-16">
      <h1 className="text-gray-300 md:text-5xl text-2xl font-serif ">
        Therapists___
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-5">
        {displayTherapists.map((therapist) => (
          <Therapist key={therapist.image} therapist={therapist}></Therapist>
        ))}
      </div>
    </div>
  );
};

export default Therapists;
