import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactsOperations, contactsSelectors } from "redux/contacts";
import { Button, TextField } from "@material-ui/core";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [stateName, setStateName] = useState("");
  const [stateNumber, setStateNumber] = useState("");

  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setStateName(value);
        break;

      case "number":
        setStateNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contacts && contacts.find((contact) => contact.name === stateName)) {
      return alert(stateName + " is already in contacts");
    } else if (!stateName) {
      return alert("Type some name");
    } else if (!stateNumber) {
      return alert("Type some number");
    }

    dispatch(
      contactsOperations.addContact({ name: stateName, number: stateNumber })
    );

    (async () => {
      await dispatch(
        contactsOperations.DB_postContact({
          name: stateName,
          number: stateNumber,
        })
      );
      await dispatch(contactsOperations.DB_fetchContacts());
    })();

    reset();
  };

  const reset = () => {
    setStateName("");
    setStateNumber("");
  };

  return (
    <form
      className={styles.contactForm}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <TextField
        className={styles.name}
        onChange={handleChange}
        name="name"
        type="text"
        value={stateName}
        size="small"
        label="Name"
        variant="outlined"
      />

      <TextField
        className={styles.number}
        onChange={handleChange}
        name="number"
        type="text"
        value={stateNumber}
        size="small"
        label="Number"
        variant="outlined"
      />
      <Button
        className={styles.button}
        type="submit"
        size="small"
        variant="contained"
      >
        Add contact
      </Button>
    </form>

    // <form className={styles.contactForm} onSubmit={handleSubmit}>
    //   <label>
    //     Name
    //     <input
    //       name="name"
    //       type="text"
    //       value={stateName}
    //       onChange={handleChange}
    //     />
    //   </label>

    //   <label>
    //     Number
    //     <input
    //       name="number"
    //       type="text"
    //       value={stateNumber}
    //       onChange={handleChange}
    //     />
    //   </label>

    //   <button type="submit">Add contact</button>
    // </form>
  );
}
