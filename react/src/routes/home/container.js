import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { loadingState } from 'src/global';
import axios from 'axios';
import HomePresenter from 'src/routes/home/presenter';
import { toast } from 'react-toastify';

export default () => {
  const [loading, setLoading] = useRecoilState(loadingState);
  const RequestTest = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/v1/users/');
      console.log(response);
    } catch (e) {
      toast.error(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => RequestTest(), []);
  console.log(loading);

  return <HomePresenter />;
};
