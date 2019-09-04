import React from 'react';
import axios from "axios";
import './App.css';
import GithubCard from './components/GithubCard';
import Search from './components/Search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "rleslie1015",
      user: [],
      followers: []
    }
  }
  
  changeUserName = (userName) => {
    this.setState({ userName })
  }

  fetchUser=()=> {
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    .then(res => {
      // console.log(res);
      this.setState({ user: res.data});
    })
    .catch(err => {
      console.log(err);
    })
  }

  fetchFollowers =() => {
    axios.get(`https://api.github.com/users/${this.state.userName}/followers`)
    .then(res => {
      // console.log(res);
      this.setState({ followers: res.data});
    })
    .catch(err => {
      console.log(err);
    })
  }
  componentDidMount() {
    this.fetchUser();
    this.fetchFollowers();
    }

  componentDidUpdate(prevProps, prevState){
    if(prevState.userName !== this.state.userName){
      this.fetchUser();
      this.fetchFollowers();
    } 
  }
  render() {
    return (
      <div className="App">
        <Search changeUserName={this.changeUserName} />
        <GithubCard user={this.state.user} followers={this.state.followers}/>
      </div>
    );
  }
}
export default App;
