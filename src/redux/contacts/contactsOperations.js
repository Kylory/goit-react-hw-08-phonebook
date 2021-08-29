import { createAsyncThunk } from "@reduxjs/toolkit";
// import * as contactsAPI from "APIServise/contactsAPI";
import { createAction } from "@reduxjs/toolkit";
import axios from "axios";
import shortid from "shortid";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

// export const DB_fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const contacts = await contactsAPI.fetchContacts();
//       return contacts;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );

export const DB_fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const DB_postContact = createAsyncThunk(
//   "contacts/postContact",
//   async ({ name, number }, { rejectWithValue }) => {
//     try {
//       const response = await contactsAPI.postContact(name, number);
//       return response;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

export const DB_postContact = createAsyncThunk(
  "contacts/postContact",
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/contacts", {
        name: `${name}`,
        number: `${number}`,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const DB_deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await contactsAPI.deleteContact(id);
//       return response;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

export const DB_deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAction(
  "contactsList/addContact",
  ({ name, number }) => ({
    payload: {
      id: shortid.generate(),
      name: name,
      number: number,
    },
  })
);

export const deleteContact = createAction("contacts/deleteContact");

export const filterContacts = createAction("contacts/filterContacts");
