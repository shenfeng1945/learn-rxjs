import React, { Component } from 'react';

class ButtonAction extends Component {
    static start$ 
    render() {
        return (
            <div style={{position:'absolute',top:'20px',right:'20px'}}>
               <button onClick={this.start.bind(this)} className="ui button primary">Start</button>                
               <button onClick={this.stop.bind(this)} className="ui button">Stop</button>                
            </div>
        );
    }
    start(){
      if(this.start$){
          this.stop()
      }
      this.start$ = this.props.start().subscribe(val=>console.log(val))
    }
    stop(){
       this.start$.unsubscribe() 
    }
}

export default ButtonAction;