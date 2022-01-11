import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogImages: [],
        breed: ""
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

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            ...this.state,
            breed: e.target.value
        });
    }

    handleSearch = (e) => {
        e.preventDefault();
        //1. get our breed input.
        //2. do an axios call
        //3. save the response from the call to our state
        const breed = e.target.value;

        axios.get(`https://dog.ceo/api/breed/${breed}/images`)
            .then(resp => {
                this.setState({
                    ...this.state,
                    dogImages: resp.data.message
                })
            })
    }

    render() {
        console.log(this.state.breed);
        return (<div>
            <h1>Dog Image Query 3000</h1>
            <form>
                <input onChange={this.handleChange}/>
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