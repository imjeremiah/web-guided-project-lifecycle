import React from "react";

class AppClass extends React.Component {
  constructor() {
    console.log("AppClass: Setup State.");
    super();
    this.state = {
      name: "Warren"
    };
  }

  componentDidMount() {
    console.log("AppClass: Component Has Mounted.");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("AppClass: Component Has Changed.");
    console.log("old props: ", prevProps);
    console.log("new props: ", this.props);

    console.log("old state: ", prevState);
    console.log("new state: ", this.state);

    // if(prevState.age === this.state.age) {
    //   console.log("What's wrong with Warren?");
    // }

    // if (this.state.name === "Chris") {
    //   console.log("But Chris is cool!!!");
    // }
  }

  handleNameButtonClick = (e) => {
    console.log("AppClass: Changes State");
    this.setState({
      ...this.state,
      name: "Chris"
    });
  };

  
  render() {
    console.log("AppClass: Render Dom.");
    return (
      <div>
        <h1>Hello {this.state.name}.</h1>
        <button onClick={this.handleNameButtonClick}>MAKE IS ALLISON</button>
      </div>
    );
  }
}

export default AppClass;
