import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.JSON")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, [services]);
  return [services];
};

export default useServices;
