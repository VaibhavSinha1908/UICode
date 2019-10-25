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