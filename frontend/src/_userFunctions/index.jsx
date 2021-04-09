import axios from "axios";

const user = JSON.parse(localStorage.getItem("currentUser"));
const token = user ? `Bearer ${user.token}` : "";

export async function getAllUsers() {
  try {
    let res = await axios.get("http://localhost:8080/api/user/all", {
      headers: {
        Authorization: token,
        "Content-Type": "application/json ",
      },
    });
    console.log("GET ALL USERS");
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getSelectedUser() {
  try {
    let res = await axios.get("http://localhost:8080/api/user/" + user.id, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json ",
      },
    });
    console.log("GET SELECTED USER");
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteUser(id) {
  try {
    let res = await axios.delete(
      "http://localhost:8080/api/user/delete/" + id,
      {
        headers: {
          Authorization: token,
          "Content-Type": "application/json ",
        },
      }
    );
    console.log("DELETE SELECTED USER");
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
