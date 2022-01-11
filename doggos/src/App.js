import React from 'react';
import axios from 'axios';

import ImageList from './components/ImageList';

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

    componentDidUpdate(prevProps, prevState) {
        //1. check to see if there is an update.
        //2. check to if dogImages updated.
        //3. check if breed === chihuahua
        //4. do an axios call on husky
        console.log("State Changed");
        if (prevState.dogImages !== this.state.dogImages) {
            console.log("DogImages changed");
            if (this.state.breed === "chihuahua") {
                console.log("Chihauhua selected :(");
                axios.get("https://dog.ceo/api/breed/husky/images")
                    .then(resp=> {
                        this.setState({
                            ...this.state,
                            dogImages: resp.data.message,
                            breed: "husky"
                        })
                    })
            }
        }

        // if (this.state.breed === "chihuahua") {
        //     this.setState({
        //         ...this.state,
        //         breed: "husky"
        //     })
        // }
    }

    handleChange = (e) => {
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
        const breed = this.state.breed;

        axios.get(`https://dog.ceo/api/breed/${breed}/images`)
            .then(resp => {
                this.setState({
                    ...this.state,
                    dogImages: resp.data.message,
                    breed: ''
                })
            })
    }

    render() {
        return (<div>
            <h1>Dog Image Query 3000</h1>
            <form>
                <input value={this.state.breed} onChange={this.handleChange}/>
                <button onClick={this.handleSearch}>Fetch Dogs</button>
            </form>
            <ImageList dogImages={this.state.dogImages}/>
        </div>);
    }
}

export default App;