import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Mohammed-Rakib/data/main/services.json"
    )
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, [services]);
  return [services];
};

export default useServices;
