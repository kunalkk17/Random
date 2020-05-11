import React, { Component } from 'react'
import { Input, Menu, Button, Icon } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const myStyle = {
        marginLeft: "20%",
        //marginRight: "15%",
        width: "60%"
      };
    const { activeItem } = this.state

    return (
      <Menu  secondary>
        
        <Menu.Item style={myStyle}>
            <Input size='large' icon='search' placeholder='Search...' />
          </Menu.Item>
        <Menu.Menu position='right'>
          
         {/* <Button primary><Icon name='add'></Icon>Add Instance</Button> */}
        </Menu.Menu>
      </Menu>
    )
  }
}