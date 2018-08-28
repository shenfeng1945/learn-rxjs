import React,{Component} from 'react'
import styled from 'styled-components'

const Title = styled.h2`
   font-weight:bold;
   cursor:pointer;
`
const Header = styled.header`
  padding:20px 0 20px 40px;
  border-bottom:1px solid #e8e8e8;
`

class TopHeader extends Component {
    render(){
        return (
            <Header>
                <Title>
                   Learn-Rxjs
                </Title>
            </Header>
        )
    }
}
export default TopHeader