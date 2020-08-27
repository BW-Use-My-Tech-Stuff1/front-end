import React from "react";
import { Route } from "react-router-dom";
import AddTechItem from "./components/AddTechItem"; 
import Dashboard from './components/Dashboard'

const App = () => {
 

  return (
    <>
      <Route
        path="/addtech"
        component={() => <AddTechItem />}
      />
      <Dashboard />

    </>
  );
};

export default App;
