import axios from "axios";
// import { createAsyncThunk } from '@reduxjs/toolkit';

// const BASE_URL = 'https://connections-api.herokuapp.com';
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

async function fetchContacts() {
  // const { data } = await axios.get(`${BASE_URL}/contacts`);
  const { data } = await axios.get("/contacts");
  return data;
}

async function postContact(name, number) {
  // const { data } = await axios.post(`${BASE_URL}/contacts`, {
  const { data } = await axios.post("/contacts", {
    name: `${name}`,
    number: `${number}`,
  });
  return data;
}

async function deleteContact(id) {
  // await axios.delete(`${BASE_URL}/contacts/${id}`);
  await axios.delete(`/contacts/${id}`);

  return id;
}

export { fetchContacts, postContact, deleteContact };
