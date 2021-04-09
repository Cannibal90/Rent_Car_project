import { useState, useEffect } from "react";
import { getSelectedCar } from "../../_carFunctions";
import { CarToUpdate } from "./carToUpdate";

export function GetCar(props) {
  const { id } = props;
  const [isLoading, setLoading] = useState(true);
  const [car, setCar] = useState();

  useEffect(() => {
    getSelectedCar(id).then((res) => {
      setCar(res);
      setLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return <CarToUpdate car={car} />;
}
