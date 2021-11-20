import React from 'react';
import axios from 'axios';
import { Switch, Route, Redirect } from 'react-router-dom';
import WriteContractPage from 'src/routes/write_contract';
import ContractResultPage from 'src/routes/contract_result';

axios.defaults.baseURL = 'http://127.0.0.1:8000/'; // http://localhost:28172/

export const App = () => {
  return (
    <Switch>
      <Route path="/result" component={ContractResultPage} />
      <Route exact path="/" component={WriteContractPage} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};
