import React, { Component } from 'react'

import Cards from './components/cards'

import Header from './components/header'

import Charts from './components/charts'




class App extends Component {
  
state = {
      detail : [],
      cases :[],
    }

 
componentDidMount(){
   
fetch(`https://api.covid19api.com/summary`)
   
 .then(response => response.json())
   
 .then(res => (console.log(res) , this.setState({ cases: res.Global})))

  
   }
 
 render() { 
   
 return(
        <div>
       
   <Header/>
      
   <Cards details={this.state.cases} /> 
     
     <Charts dailyCases ={this.state.cases}/>
      
    </div>
    );

  }
}
 
export default App;