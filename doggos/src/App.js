import React from 'react';
import axios from 'axios';

class App extends React.Component {
    render() {
        return (<div>
            <h1>Dog Image Query 3000</h1>
            <form>
                <input/>
                <button>Fetch Dogs</button>
            </form>
        </div>);
    }
}

export default App;