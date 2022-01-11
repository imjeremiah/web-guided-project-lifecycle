import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogImages: []
    }

    componentDidMount() {
        axios.get("https://dog.ceo/api/breed/husky/images")
            .then(resp=> {
                this.setState({
                    ...this.state,
                    dogImages: resp.data.message
                });
            });
    }

    handleSearch = (e) => {
        e.preventDefault();
        //1. get our breed input.
        //2. do an axios call
        //3. save the response from the call to our state
        const breed = "boxer";

        axios.get(`https://dog.ceo/api/breed/${breed}/images`)
            .then(resp => {
                this.setState({
                    ...this.state,
                    dogImages: resp.data.message
                })
            })
    }

    render() {
        return (<div>
            <h1>Dog Image Query 3000</h1>
            <form>
                <input/>
                <button onClick={this.handleSearch}>Fetch Dogs</button>
            </form>
            <div>
                {
                    this.state.dogImages.map(image=> {
                        return <img key={image} width="300" src={image}/>
                    })
                }
            </div>
        </div>);
    }
}

export default App;