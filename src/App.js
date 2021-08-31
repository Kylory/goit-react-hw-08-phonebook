import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "./redux/auth";
import HomeView from "./components/HomeView/HomeView";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactsList from "./components/ContactsList/ContactsList";
import SearchContacts from "./components/SearchContacts/SearchContacts";
import AppBar from "./components/AppBar/AppBar";
import RegisterView from "./components/RegisterView/RegisterView";
import LogInView from "./components/LogInView/LogInView";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getUserInfo());
  }, [dispatch]);

  return (
    <>
      <AppBar />

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
          <RegisterView />
        </Route>

        <Route path="/login">
          <LogInView />
        </Route>
      </Switch>
    </>
  );
};

export default App;
