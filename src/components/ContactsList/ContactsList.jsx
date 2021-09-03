import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactsSelectors, contactsOperations } from "redux/contacts";
import { authSelectors } from "redux/auth";
import styles from "./ContactsList.module.css";

export default function ContactsList() {
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  // const loading = useSelector(contactsSelectors.isLoading);
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);
  const error = useSelector(contactsSelectors.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(contactsOperations.DB_fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  async function deleteItem(id) {
    dispatch(contactsOperations.deleteContact(id));
    await dispatch(contactsOperations.DB_deleteContact(id));
  }

  return (
    <>
      {error ? (
        <div className={styles.error}>{error.message}, no conection to DB</div>
      ) : (
        <ul className={styles.ContactsList}>
          {filteredContacts &&
            filteredContacts.map((contact) => (
              <li key={contact.id}>
                {contact.name}
                {": "}
                {contact.number}
                <button
                  onClick={() => {
                    deleteItem(contact.id);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      )}
    </>
  );
}
