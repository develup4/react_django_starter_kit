import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Presenter from 'src/routes/write_contract/presenter';
import { toast } from 'react-toastify';

export default () => {
  const [contracts, SetContracts] = useState([]);

  const GetContracts = async () => {
    console.log('request');
    try {
      const response = await axios.get('/api/v1/contracts/');
      console.log(response);
      //SetContracts(response?.data);
    } catch (e) {
      toast.error(e);
    } finally {
    }
  };
  useEffect(() => GetContracts(), []);

  return <Presenter contracts={contracts} />;
};
