import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        dogImages: [
            "https://images.dog.ceo/breeds/husky/20180901_150234.jpg",
            "https://images.dog.ceo/breeds/husky/20180904_185604.jpg",
            "https://images.dog.ceo/breeds/husky/20180924_193829.jpg",
            "https://images.dog.ceo/breeds/husky/MsMilo_Husky1.jpg",
            "https://images.dog.ceo/breeds/husky/n02110185_10047.jpg",
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
                        // console.log(image);
                        <img width="300" src={image}/>
                    })
                }
                {/* <img width="300" src="https://images.dog.ceo/breeds/husky/MsMilo_Husky1.jpg"/>
                <img width="300" src="https://images.dog.ceo/breeds/husky/MsMilo_Husky1.jpg"/>
                <img width="300" src="https://images.dog.ceo/breeds/husky/MsMilo_Husky1.jpg"/>
                <img width="300" src="https://images.dog.ceo/breeds/husky/MsMilo_Husky1.jpg"/> */}
            </div>
        </div>);
    }
}

export default App;