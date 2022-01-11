import React from 'react';

class SearchForm extends React.Component {
    render() {
        return(<form>
            <input value={this.props.breed} onChange={this.props.handleChange}/>
            <button onClick={this.props.handleSearch}>Fetch Dogs</button>
        </form>);
    }
}

export default SearchForm;