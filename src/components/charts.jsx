import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'
class Charts extends Component {
    state = {
        dailydata : this.props.dailyCases,
        testdata: [100, 200, 300],
        testdata1: [10, 20, 30],
        testdata2: [1, 2, 3]
        
            
    }
            
    render() { 
        return ( 
            <Line
                data={{
                    labels : this.state.testdata,
                
                    datasets :[{
                        data: this.state.testdata1,
                        borderColor: 'red',
                        label: 'infected',
                        fill : true
                        },
                        {
                        data: this.state.testdata2,
                        borderColor: 'red',
                        label: 'deaths',
                        backgroundColor: 'red',
                        fill : true
                    }]
                }}
            />
            
        );
    }
}
 
export default Charts;