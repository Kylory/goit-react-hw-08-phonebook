import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

async function fetchContacts() {
  const { data } = await axios.get(`${BASE_URL}`);
  return data;
}

async function postContact(name, number) {
  const { data } = await axios.post(`${BASE_URL}`, {
    name: `${name}`,
    number: `${number}`,
  });
  return data;
}

async function deleteContact(id) {
  await axios.delete(`${BASE_URL}/${id}`);
  return id;
}

export { fetchContacts, postContact, deleteContact };
