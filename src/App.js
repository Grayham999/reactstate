import React, { Component } from 'react';
import './App.css';
import Gimage from './meeeee.jpeg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Grayham Anopueme",
        bio: "A passionate developer!!!!",
        imgSrc: Gimage,
        profession: "Software Engineer"
      },
      shows: false,
      mountedTime: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        mountedTime: prevState.mountedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState({ shows: !this.state.shows });
  }

  render() {
    const { person, shows, mountedTime } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.toggleShow}>
            {shows ? "Hide Profile" : "Show Profile"}
          </button>
          {shows && (
            <div>
              <h1>{person.fullName}</h1>
              <p>{person.bio}</p>
              <img src={person.imgSrc} alt="Profile" />
              <p>{person.profession}</p>
            </div>
          )}
          <p>Component mounted since: {mountedTime} seconds</p>
        </header>
      </div>
    );
  }
}

export default App;
