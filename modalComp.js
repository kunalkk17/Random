import React from "react";
import { Search, Grid, Header, Segment, Modal, Image,Button,Icon, Label } from 'semantic-ui-react'

 class ModalComp extends React.Component{

    constructor() {
        super()
        this.state = {
          open:false
        }
    }


    show = (dimmer) => () => {
        this.setState({ dimmer, open: true })
        //console.log(userProfileindex)
      }
    
      closeUserProfile = () => this.setState({ open: false })

    render(){
        const { open, dimmer} = this.state
        
        return(
            <div>
                <Button onClick={this.show(true)} >Show Modal</Button>

                <Modal dimmer={dimmer} 
                       open={open} 
                       onClose={this.closeUserProfile}>
    <Modal.Header>
      
      Kunal<div><Label>IT Department</Label><Label>Employee Id : 1000</Label></div></Modal.Header>
    <Modal.Content image>
      
      <Modal.Description>
        <Header>Rewards History</Header>
       <p>Bla bla bla</p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button negative onClick={this.closeUserProfile}>
      <i class='chevron left icon'></i> Back 
      </Button>
    </Modal.Actions>
  </Modal>
                
            </div>
        )

    }
       
}

export default ModalComp ;