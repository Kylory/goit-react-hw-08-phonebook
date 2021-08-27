import { Switch, Route } from "react-router-dom";
import HomeView from "./components/HomeView/HomeView";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactsList from "./components/ContactsList/ContactsList";
import SearchContacts from "./components/SearchContacts/SearchContacts";
import AppBar from "./components/AppBar/AppBar";
import RegisterVuew from "./components/RegisterView/RegisterView";
import LogInView from "./components/LogInView/LogInView";

const App = () => {
  return (
    <>
      <AppBar />
      {/* <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <SearchContacts />
      <ContactsList /> */}
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/contacts">
          <ContactForm />
          <SearchContacts />
          <ContactsList />
        </Route>

        <Route path="/register">
          <RegisterVuew />
        </Route>

        <Route path="/login">
          <LogInView />
        </Route>
      </Switch>
    </>
  );
};

export default App;
