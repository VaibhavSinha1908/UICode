import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  //ctor
  constructor(props) {
    super(props);
    this.state = { lat: null, ErrorMessage: "" }; //initialize the state object in ctor.

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

  componentDidMount() {
    console.log("my component did mount and render");
  }

  componentDidUpdate() {
    console.log("My Component just got updated - it rerendered.");
  }

  //React says we have to define render!!!
  render() {
    //render will be very very very frequently. Very Bad place to initialize something.

    if (this.state.ErrorMessage && !this.state.lat) {
      return <div>Error: {this.state.ErrorMessage}</div>;
    }
    if (!this.state.ErrorMessage && this.state.lat) {
      return <div>latitude: {this.state.lat}</div>;
    }
    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
