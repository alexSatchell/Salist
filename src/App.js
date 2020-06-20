import React from 'react';
import { Layout } from './styling/styles';
import { GlobalStyles } from './styling/gloabl';
import Navbar from './components/Nav';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Layout>
      <GlobalStyles />
      <Navbar />
    </Layout>
  );
};

export default App;
