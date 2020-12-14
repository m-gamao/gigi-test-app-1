import React from 'react';
import Form from './components/Form.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      placeCall: "Calling ", 
      showForm: false
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({
      showForm: !this.state.showForm
    })
  }

  handleToggleButton = (event) => {
    this.setState({
      showForm: !this.state.showForm
    });    
  }

  render() {
    return (
      <div className="App">
        {this.state.showForm ?  // if this.state.showForm === true
        
          <Form 
            placeCall={this.state.placeCall}
            announcement="T-Mobile"
            handleSubmit={this.handleFormSubmit}
            />
            : //else
            <div>
              <h4>No Form shown</h4>
              <button id="btn" onClick={this.handleToggleButton}>Toggle Form</button>
            </div>
      }
      <br></br>

      </div>
    );
  }
}

export default App;