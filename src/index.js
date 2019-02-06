import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // only time we do direct assignment to state object
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        <div>Error: {this.state.errorMessage}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
