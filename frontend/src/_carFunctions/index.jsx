import axios from "axios";

const user = JSON.parse(localStorage.getItem("currentUser"));
const token = user ? `Bearer ${user.token}` : "";

export async function getAllCars(number, size) {
  try {
    let res = await axios.get(
      "http://localhost:8080/api/car/all?pageSize=" +
        size +
        "&pageNumber=" +
        number,
      {
        headers: {
          "Content-Type": "application/json ",
        },
      }
    );
    console.log("GET ALL CARS");
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getAllCarsByName(number, size, search) {
  try {
    let res = await axios.get(
      "http://localhost:8080/api/car/search?pageSize=" +
        size +
        "&pageNumber=" +
        number +
        "&search=" +
        search,
      {
        headers: {
          "Content-Type": "application/json ",
        },
      }
    );
    console.log("GET ALL CARS");
    if (search !== "") {
      res.data.number = 0;
    }
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getSelectedCar(carID) {
  try {
    let res = await axios.get("http://localhost:8080/api/car/" + carID, {
      headers: {
        "Content-Type": "application/json ",
      },
    });
    console.log("GET SELECTED CARS");
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteCar(car) {
  try {
    let res = await axios.delete(
      "http://localhost:8080/api/car/delete/" + car.id,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json ",
        },
      }
    );
    console.log("DELETE SELECTED CARS");
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getAllBrands() {
  try {
    let res = await axios.get("http://localhost:8080/api/carBrand/all", {
      headers: {
        Authorization: token,
        "Content-Type": "application/json ",
      },
    });
    console.log("GET ALL CAR BRANDS");
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
