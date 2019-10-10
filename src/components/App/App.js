import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      businesses:[]
    }
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term,location,sortBy){
    Yelp.search(term,location,sortBy).then((businesses)=>{
      this.setState({
        businesses:businesses
      })
    })
  }

  render(){
  return (
    <div className="App">
      <h1>Din-Din</h1>
     <SearchBar searchYelp={this.searchYelp} />
     <BusinessList businesses={this.state.businesses}/> 
     <footer> Copyright &copy; 2019 Petra Productions. All rights reserved.</footer> 
</div>
  );
}
}
export default App;
 