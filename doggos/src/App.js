import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogImages: [
            "https://images.dog.ceo/breeds/husky/20180901_150234.jpg",
            "https://images.dog.ceo/breeds/husky/20180904_185604.jpg",
            "https://images.dog.ceo/breeds/husky/20180924_193829.jpg"
        ]
    }

    render() {
        console.log(this.state);

        return (<div>
            <h1>Dog Image Query 3000</h1>
            <form>
                <input/>
                <button>Fetch Dogs</button>
            </form>
            <div>
                {
                    this.state.dogImages.map(image=> {
                        return <img width="300" src={image}/>
                    })
                }
            </div>
        </div>);
    }
}

export default App;