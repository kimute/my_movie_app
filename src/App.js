import React from 'react';

// React call render() component from class
class App extends React.Component{
  state = {
    isLoading: true
  };
  componentDidMount(){
    // delay function
    setTimeout(() => {
      this.setState({isLoading: false});
    })

  }
  render(){
    console.log("I'm rendering");
    // ES6
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}
export default App;
