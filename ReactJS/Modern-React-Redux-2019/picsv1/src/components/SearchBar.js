<<<<<<< HEAD
import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault(); //will prevent browser to submit the form automatically.
    console.log(this.state.term + " from search bar component.");
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
=======
import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onFormSubmit = (event) => {    //Arrow Function (ES5/6 feature) automatically bind the value of 'this' with all the code within the function.
        event.preventDefault(); //Prevents the Auto Submit of the form upon hitting enter.
        this.props.runMeOnUserSubmits(this.state.term);
    }


    render() {
        return (<div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Image Search</label>
                    {<input value={this.state.term} type="text" onChange={e => this.setState({ term: e.target.value.toLocaleUpperCase() })}></input> /* Do NOT USE this.onInputChange() as this will make the method to be invoked when the page renders */}
                </div>
            </form>

        </div>);
    }
}

export default SearchBar;
>>>>>>> 478b69f98b38874cf51d23f8159b9ff40806ecfb
