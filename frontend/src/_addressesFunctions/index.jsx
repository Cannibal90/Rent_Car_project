import axios from "axios";

const user = JSON.parse(localStorage.getItem("currentUser"));
const token = user ? `Bearer ${user.token}` : "";

export async function getAddressForSelectedUser(id, number, size) {
  try {
    let res = await axios.get(
      "http://localhost:8080/api/address/" +
        id +
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
    console.log("GET SELECTED ADDRESS");
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteSelectedAddress(id) {
  try {
    let res = await axios.delete(
      "http://localhost:8080/api/address/delete/" + id,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json ",
        },
      }
    );
    console.log("DELETE SELECTED ADDRESS");
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
