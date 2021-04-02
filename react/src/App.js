import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from 'src/common/components/header';
import Home from 'src/routes/home';
import Footer from 'src/common/components/footer';

axios.defaults.baseURL = 'TODO: Input server url';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
  'token',
)}`;

export const App = () => {
  return (
    <div className="font-helvetica tracking-tight mt-24">
      <Header />
      <div className="flex justify-center -mt-8">
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect from="/home" to="/" />
          <Redirect from="*" to="/404" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};
