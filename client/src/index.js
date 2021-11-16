import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import ParentApp from './ParentApp';


ReactDOM.render(
  <BrowserRouter>
      <ParentApp />
  </BrowserRouter>,
  document.getElementById('root')
);
