import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class History extends Component{
    state = {
        indices: []
    };

    getValues() {
        var indices = sessionStorage.getItem("indices");
        this.state.indices = indices;
    }

    renderSeenIndexes() {
        var indices = "";
        for (var i in this.state.indices){
            indices += this.state.indices[i];
        }
        return indices;
    }

    render() {
    return (
      <header>
        <div className="view  jarallax tes" data-jarallax='{"speed": 0.2}'>
          <div className="mask rgba-purple-slight d-flex justify-content-center align-items-center">
            <div className="container">
              <div className="row wow fadeIn">
                <div className="col-md-12 text-center">
                  <a className="btn btn-purple btn-rounded cs" href="/">
                    Strona główna
                  </a>
                  <a className="btn btn-purple btn-rounded cs" href="/fibcal">
                    Kalkulator
                  </a>
                  <div className="container">
                    <div>
                      {this.getValues()}
                        <a
                          className="App-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Lista 10 ostatnich indeksów dla których były liczone wartości:
                        </a>
                        <p id="history">{this.renderSeenIndexes()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
    }
  };

export default History;