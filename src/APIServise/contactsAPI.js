import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const BASE_URL = 'https://connections-api.herokuapp.com';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerUser = createAsyncThunk("auth/register", async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
})

const logIn = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const logOut = createAsyncThunk('auth/logout', async ({ rejectWithValue }) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return rejectWithValue(error);
  }
});

async function getUserInfo() {
  // const { data } = await axios.get(`${BASE_URL}/contacts`);
  // return data;
}

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
