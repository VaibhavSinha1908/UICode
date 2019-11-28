<<<<<<< HEAD
import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
    // console.log(response.data.results);
  };

  render() {
    return (
      <div id="App" className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
=======
import React from 'react';
import SearchBar from './SearchBar';


class App extends React.Component {

    onSearchSubmit(term) {
        console.log(term);
    }

    render() {
        return (<div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar runMeOnUserSubmits={this.onSearchSubmit} />
        </div>);
    }
}

export default App;
>>>>>>> 478b69f98b38874cf51d23f8159b9ff40806ecfb
