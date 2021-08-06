import React, { Component } from 'react';

class Cards extends Component {
    state = {  }
    render() { 
        return (  
            <div className='container' >
                
                <div className='row' style={{boxSizing:'border-box'}}>
                    <div style={infect} className='col-md-4 '>
                        <h3>Infected</h3>
                        <p>Total Confirmed: {this.props.details.TotalConfirmed} </p> 
                    </div>
                    <div style={recovered} className='col-md-4'>
                        <h3>Recovered</h3>
                        <p>Total Recovered: {this.props.details.TotalRecovered} </p> 
                    </div>
                    <div style={death} className='col-md-4'>
                        <h3>Deaths</h3>
                        <p>Total Deaths: {this.props.details.TotalDeaths} </p> 
                    </div>
                </div>
                
            </div>
        );
    }
}
const recovered={
    border: '1px solid',
    borderBottom: '10px solid green'
}
const death={
    border: '1px solid',
    borderBottom: '10px solid red'
}
const infect={
    border: '1px solid',
    borderBottom: '10px solid blue'
}
 
  
export default Cards;