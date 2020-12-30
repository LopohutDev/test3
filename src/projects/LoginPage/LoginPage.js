import React from "react";
import Image from "./components/Picture";
import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";

function LoginPage() {
  return (
    <div className="flex">
      <div className="w-1/2 h-screen p-12">
        <div className="flex items-center justify-center w-20 h-16 text-xl font-bold text-white bg-black">
          Logo
        </div>
        <Router>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/" component={Login} />
          </Switch>
        </Router>
      </div>
      <div className="w-1/2 bg-pink-500">
        <Image />
      </div>
    </div>
  );
}

export default LoginPage;
