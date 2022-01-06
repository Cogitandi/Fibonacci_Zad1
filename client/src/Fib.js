import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: '',
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all');
    this.setState({
      seenIndexes: seenIndexes.data,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', {
      index: this.state.index,
    });
    this.setState({ index: '' });
    this.fetchValues();
    this.fetchIndexes();
  };

  fetchIntoSessionStorage(){
    var indices = [];
    this.state.seenIndexes.map(({number}) => indices.push(number));
    while (indices.length > 10){
      indices.shift();
    }
    sessionStorage.setItem("indices", indices);
  }

  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join(', ');
  }

  renderValues() {
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          Dla indeksu {key} wartość jest równa {this.state.values[key]}
        </div>
      );
    }

    return entries;
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
                  <a className="btn btn-purple btn-rounded cs" href="/history">
                    Historia
                  </a>
                  <div className="container">
                    <div>
                      <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Podaj indeks</label>
                          <input
                            type="text"
                            class="form-control cs"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Podaj indeks"
                            value={this.state.index}
                            required
                            onChange={(event) =>
                              this.setState({ index: event.target.value })
                            }
                          />
                        </div>
                        <button type="submit" class="btn btn-primary">
                          Oblicz
                        </button>
                      </form>

                      <h3 className="mt-3">Wyniki:</h3>
                      {this.renderValues()}
                      {this.fetchIntoSessionStorage()}
                    </div>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Fib;
