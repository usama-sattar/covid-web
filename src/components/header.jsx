import React, { Component } from 'react';

class Header extends Component {
    render() { 
        return ( 
            <div style={styling}>
                <h1>
                    Covid-19
                </h1>
            </div>
         );
    }
}
const styling ={
    backgroundColor :'#9dcef7',
    textAlign:'center'
}
 
export default Header;