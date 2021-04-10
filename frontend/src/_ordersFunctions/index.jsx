import axios from "axios";

const user = JSON.parse(localStorage.getItem("currentUser"));
const token = user ? `Bearer ${user.token}` : "";

export async function getAllOrders(number, size) {
  try {
    let res = await axios.get(
      "http://localhost:8080/api/order/all?pageSize=" +
        size +
        "&pageNumber=" +
        number,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json ",
        },
      }
    );
    console.log("GET ALL ORDERS");
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteSelectedOrder(id) {
  try {
    let res = await axios.delete(
      "http://localhost:8080/api/order/delete/" + id,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json ",
        },
      }
    );
    console.log("DELETE SELECTED ORDER");
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function addCarToOrder(car) {
  try {
    let res = await axios.put(
      "http://localhost:8080/api/order/addCar/",
      {
        userId: user.id,
        carToAdd: car,
      },
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json ",
        },
      }
    );
    console.log("Put CAR TO  ORDER");
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getHistory(number, size) {
  try {
    let res = await axios.get(
      "http://localhost:8080/api/order/history/" +
        user.id +
        "?pageSize=" +
        size +
        "&pageNumber=" +
        number,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json ",
        },
      }
    );
    console.log("GET HISTORY");
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getBasket() {
  try {
    let res = await axios.get(
      "http://localhost:8080/api/order/basket/" + user.id,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json ",
        },
      }
    );
    console.log("GET BASKET");
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
