import React, { Component } from 'react';
import 'antd/dist/antd.css'
import Sider from './components/Nav'
import TopHeader from './components/TopHeader'
import ContentPage from './components/ContentPage'
import { BrowserRouter as Router} from "react-router-dom";
import styled from 'styled-components'

const Page = styled.div`
  display:flex;
  flex-direction: column;
  height:100vh;
`
const Content = styled.div`
  display:flex;
  flex:1;
`

class App extends Component {
  render() {
    return (
      <Router>
        <Page>
          <TopHeader />
          <Content>
             <Sider />
             <ContentPage />
          </Content>
        </Page>
      </Router>
    );
  }
}

export default App;
