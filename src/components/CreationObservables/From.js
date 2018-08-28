import React, { Component } from 'react';
import {from, timer} from 'rxjs'
import ButtonAction from '../ButtonAction'

class From extends Component {
    from = () => {
        // return from([1,2,3,4])
        return timer(0,1000)
    }
    render() {
        return (
           <div style={{position:'relative'}}>
              <h2>from</h2>  
              <h3>将数组、Promise或迭代器转换成observable</h3> 
              <ButtonAction start={this.from}/>
           </div>
        );
    }
}

export default From