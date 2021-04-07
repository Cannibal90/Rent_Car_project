import axios from "axios";
import { useState, useEffect } from "react";
import { CarToUpdate } from "./carToUpdate";

export function GetCar(props) {
  const { id } = props;
  const [isLoading, setLoading] = useState(true);
  const [car, setCar] = useState();

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const token = `Bearer ${user.token}`;
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/car/" + id, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json ",
        },
      })
      .then((response) => {
        console.log("Response: ", response.data);
        setCar(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, [id, token]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return <CarToUpdate car={car} />;
}
