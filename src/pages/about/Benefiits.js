import React from "react";
import { BsBookmarkDash } from "react-icons/bs";

const Benefiits = () => {
  return (
    <div className="mb-12">
      <ul>
        <li className="flex items-center py-3">
          <BsBookmarkDash className="mr-5 text-2xl text-green-400" />
          Eliminating or reducing pain
        </li>
        <li className="flex items-center py-3">
          <BsBookmarkDash className="mr-5 text-2xl text-green-400" /> Helps in
          avoiding surgery.
        </li>
        <li className="flex items-center py-3">
          <BsBookmarkDash className="mr-5 text-2xl text-green-400" /> Improving
          overall strength and coordination.
        </li>
        <li className="flex items-center py-3">
          <BsBookmarkDash className="mr-5 text-2xl text-green-400" /> Reducing
          the dependency on medicines
        </li>
        <li className="flex items-center py-3">
          <BsBookmarkDash className="mr-5 text-2xl text-green-400" /> Boosting
          cardiovascular functioning and lung capacity.
        </li>
        <li className="flex items-center py-3">
          <BsBookmarkDash className="mr-5 text-2xl text-green-400" /> Managing
          and preventing sports related injuries.
        </li>
      </ul>
    </div>
  );
};

export default Benefiits;
