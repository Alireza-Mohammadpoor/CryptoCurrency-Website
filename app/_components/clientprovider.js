'use client';

import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store'; // adjust path as needed

const ClientProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientProvider;
