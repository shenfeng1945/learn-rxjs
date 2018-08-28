import React,{Component} from 'react'
import styled from 'styled-components'
import {Route} from 'react-router-dom'
// import Outputs from './Outputs'
import From from './CreationObservables/From'


const Content = styled.div`
  flex:1;
//   display:flex;
  overflow:scroll;
`
// const RoutePage = styled.div`
//   flex:3;
// `

class ContentPage extends Component {
    render(){
        return (
          <Content>
             {/* <RoutePage> */}
               <Route exact path="/" component={From} />
               <Route exact path="/hello" component={From}/>
             {/* </RoutePage> */}
             {/* <Outputs /> */}
          </Content>
        )
    }
}
export default ContentPage