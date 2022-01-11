import React from 'react';
import axios from 'axios';

import ImageList from './components/ImageList';
import SearchForm from './components/SearchForm';

class App extends React.Component {
    state = {
        dogImages: [],
        breed: "",
        isLoading: true
    }

    componentDidMount() {
        axios.get("https://dog.ceo/api/breed/husky/images")
            .then(resp=> {
                this.setState({
                    ...this.state,
                    dogImages: resp.data.message,
                    isLoading: false
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
            console.log(this.state.breed);

            if (this.state.breed === "chihuahua") {
                console.log("Chihauhua selected :(");

                this.setState({
                    ...this.state,
                    isLoading: true
                });

                axios.get("https://dog.ceo/api/breed/husky/images")
                    .then(resp=> {
                        this.setState({
                            ...this.state,
                            dogImages: resp.data.message,
                            breed: "husky",
                            isLoading: false
                        })
                    })
            }
        }
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            breed: e.target.value
        });
    }

    handleSearch = (e) => {
        e.preventDefault();
        const breed = this.state.breed;

        this.setState({
            ...this.state,
            isLoading: true
        });

        axios.get(`https://dog.ceo/api/breed/${breed}/images`)
            .then(resp => {
                this.setState({
                    ...this.state,
                    dogImages: resp.data.message,
                    isLoading: false
                })
            })
    }

    render() {
        return (<div>
            <h1>Dog Image Query 3000</h1>
            <SearchForm breed={this.state.breed} handleChange={this.handleChange} handleSearch={this.handleSearch} />
            {
                this.state.isLoading ? <h1>Loading</h1> : <ImageList dogImages={this.state.dogImages}/>
            }
        </div>);
    }
}

export default App;