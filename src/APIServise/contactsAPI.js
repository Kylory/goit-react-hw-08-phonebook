import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

async function fetchContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

async function postContact(name, number) {
  const { data } = await axios.post("/contacts", {
    name: `${name}`,
    number: `${number}`,
  });
  return data;
}

async function deleteContact(id) {
  await axios.delete(`/contacts/${id}`);

  return id;
}

export { fetchContacts, postContact, deleteContact };
