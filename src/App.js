import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddbookForm from './Addbookform';
import AllItems from './AllItems';
import Users from './Users'


 
 class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        users: [

          {title: "Faceless",  author: "ama darko",  genre: "drama",  publisher: "UIG"},
          {title: "Twelve night",  author: "william skakespear",  genre: "nov",  publisher: "uk"},
          {title: "la bell dame san merci",  author: "simon pierre",  genre: "epi",  publisher: "B.I.C"},
          {title: "The wanted",  author: "irene lucas",  genre: "poetry",  publisher: "le menn"},

        ]
      }

    }

    addNewUser = (user) => {
      this.setState({users: [...this.state.users, user]})
    }

    render(){
      return (
        <div>
          <AddbookForm addUser ={this.addNewUser} />
          <AllItems userInfo={this.state.users} />
        </div>

  
     );
   }
 }
 
 export default App;
 
