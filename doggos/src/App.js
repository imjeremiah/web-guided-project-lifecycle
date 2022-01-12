import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogImages: [],
        breed: ''
    }


    componentDidMount() {
        axios.get('https://dog.ceo/api/breed/retriever/golden/images')
            .then(res => {
                this.setState({
                    dogImages: res.data.message
                });
            })
            .catch(err => {
                console.error(err);
            })
    }

    // handleChange = (e) => {
    //     this.setState({
    //         ...this.state,
    //         breed: e.target.value === 'chihuahua' ? 'husky' : e.target.value
    //     })
    // }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            breed: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.dogImages !== prevState.dogImages) {
            if(this.state.breed === 'chihuahua') {
                axios.get('https://dog.ceo/api/breed/husky/images')
                    .then(res => {
                        this.setState({
                            ...this.state,
                            dogImages: res.data.message,
                            breed: 'husky'
                        });
                });
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://dog.ceo/api/breed/${this.state.breed}/images`)
        .then(res => {
            this.setState({
                ...this.state,
                dogImages: res.data.message
            });
        })
        .catch(err => {
            console.error(err);
        })
    }

    render() {
    
        return (
            <div>
                <h1>Hello Doggos</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange}/>
                    <button>Fetch Dogs</button>
                </form>
                <div id='dogImages'>
                    {
                        this.state.dogImages.map(image => {
                            return <img width={200} src={image} alt={image} key={image} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default App;
