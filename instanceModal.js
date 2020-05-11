import React, { Component } from 'react'
import { Button, Modal, Icon, Input, Label, Radio } from 'semantic-ui-react'

class InstanceModal extends Component {
  state = {
      open:false,
      passwordRequired:false
  }

  show = (size) => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  handleRadioChange = (e) => this.setState({ passwordRequired:!this.state.passwordRequired })

  render() {
    const { open, size } = this.state
    const textBoxStyle = {
        marginLeft: "15%",
        marginRight: "5%",
      };

    return (
      <span>
        {/* <Button onClick={this.show('mini')}>Mini</Button>
        <Button onClick={this.show('tiny')}>Tiny</Button>
        <Button onClick={this.show('small')}>Small</Button>
        <Button onClick={this.show('large')}>Large</Button>
        <Button onClick={this.show('fullscreen')}>Fullscreen</Button> */}
        {this.props.newInstance?<Button primary floated='right'><Icon name='add'></Icon>Add Instance</Button>:<Button size="tiny" floated='right' onClick={this.show('mini')}><Icon name='settings' ></Icon>Manage</Button>}

        <Modal size={size} open={open} onClose={this.close} closeIcon>
          <Modal.Header>Edit Instance</Modal.Header>
          <Modal.Content>
          <Label size='large'>Host:</Label>
          <Input focus placeholder='Ex: 1200.420.356' fluid/><br></br>
          <Label size='large'>Port:</Label>
          <Input focus placeholder='Ex: 5400' fluid /><br></br>
          <Label size='large'>Password:</Label>
          <Radio
            label='Required'
            name='radioGroup'
            checked={this.state.passwordRequired}
            onChange={this.handleRadioChange}
          />&emsp;&emsp;
          <Radio
            label='Not Required'
            name='radioGroup'
            checked={!this.state.passwordRequired}
            onChange={this.handleRadioChange}
          />
          {this.state.passwordRequired?<Input focus fluid placeholder='Enter Password' />:null}
          </Modal.Content>
          <Modal.Actions>
            <Button size="mini" positive ><Icon name='save' ></Icon>Save</Button>
            <Button size="mini" negative onClick={this.close} >Delete</Button>
          </Modal.Actions>
        </Modal>
      </span>
    )
  }
}

export default InstanceModal