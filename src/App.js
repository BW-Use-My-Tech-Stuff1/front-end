import React, { useState } from "react";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import TechRentalList from "./components/TechRentalList";
import AddTechItem from "./components/AddTechItem";

const App = () => {
  const [techEquipments, setTechEquipments] = useState([]);
  
  const addTech = (newTech) => {
    setTechEquipments([...techEquipments, newTech]);
  };

  return (
    <>
      {/* <Header />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute path="/tech" component={TechRentalList} />
      <PrivateRoute
        path="/addtech"
        component={() => <AddTechItem addTech={addTech} />}
      />
      <PrivateRoute path="/techlist" component={TechRentalList} /> */}
      <Route
        path="/addtech"
        component={() => <AddTechItem addTech={addTech} />}
      />
    </>
  );
};

export default App;
