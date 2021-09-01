import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "./redux/auth";
import { contactsOperations } from "redux/contacts";
import HomeView from "./components/HomeView/HomeView";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactsList from "./components/ContactsList/ContactsList";
import SearchContacts from "./components/SearchContacts/SearchContacts";
import AppBar from "./components/AppBar/AppBar";
import RegisterView from "./components/RegisterView/RegisterView";
import LogInView from "./components/LogInView/LogInView";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "components/PublicRoute";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function refreshPage() {
      await dispatch(authOperations.getUserInfo());
      await dispatch(contactsOperations.DB_fetchContacts());
    }
    refreshPage();
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(authOperations.getUserInfo());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(contactsOperations.DB_fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <PrivateRoute path="/contacts">
          <ContactForm />
          <SearchContacts />
          <ContactsList />
        </PrivateRoute>

        {/* <PublicRoute> */}
        <PublicRoute path="/register" restricted>
          <RegisterView />
        </PublicRoute>
        {/* </PublicRoute> */}

        {/* <PublicRoute> */}
        <PublicRoute path="/login" restricted>
          <LogInView />
        </PublicRoute>
        {/* </PublicRoute> */}
      </Switch>
    </>
  );
};

export default App;
