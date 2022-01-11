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

    componentDidUpdate() {
        //1. check to see if there is an update.
        //2. check to if dogImages updated.
        //3. check if breed === chihuahua
        //4. do an axios call on husky
        console.log("State Changed");
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
                    dogImages: resp.data.message
                })
            })
    }

    render() {
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