import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default () => {
    return (
	<header>
  <div className="view  jarallax tes" data-jarallax='{"speed": 0.2}'>
    <div className="mask rgba-purple-slight d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row wow fadeIn">
          <div className="col-md-12 text-center">
            <h1 className="display-4 font-weight-bold mb-0 pt-md-5 pt-5 wow fadeInUp">Realizacja zadania nr 1 w ramach laboratorium PFSwChO</h1>
            <h5 className="pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5 wow fadeInUp" data-wow-delay="0.2s">Kapica Paweł</h5>
            <div className="wow fadeInUp" data-wow-delay="0.4s">
              <a className="btn btn-purple btn-rounded" href="/fibcal">Kalkulator</a>
              <a className="btn btn-purple btn-rounded" href="/docs">Dokumentacja</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

    );
  };
