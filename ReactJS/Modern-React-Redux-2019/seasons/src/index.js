import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  //ctor

  state = { lat: null, ErrorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        });
      },
      err => {
        console.log(err);
        this.setState({ ErrorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("My Component just got updated - it rerendered.");
  }

  renderContent = () => {
    if (this.state.ErrorMessage && !this.state.lat) {
      return <div>Error: {this.state.ErrorMessage}</div>;
    }
    if (!this.state.ErrorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept the location request." />;
  };

  //React says we have to define render!!!
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
