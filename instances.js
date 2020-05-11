import React from "react";
import {List, Button,Icon, Header, Segment} from 'semantic-ui-react'
import Navbar from "./navbar";
import InstanceModal from "./instanceModal";

 class Instances extends React.Component{

    constructor(){
        super();
        this.state={
        }
    }



    render(){
        const myStyle = {
            marginLeft: "15%",
            marginRight: "15%",
          };
        return(
            <div>
                <Navbar></Navbar>
                <div style={myStyle}>
                <Segment clearing color='red'>
                        <Header as='h3' floated='left'>
                        Available Instances
                        </Header>
                        <InstanceModal newInstance={true}></InstanceModal>
                        {/* <Button primary floated='right'><Icon name='add'></Icon>Add Instance</Button> */}
                    </Segment>
                <List divided relaxed>
    <List.Item>
      <List.Icon name='code branch' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>1233.2400.360:5400
        <Button size="tiny"positive floated='right'>Connect</Button>
        
        <InstanceModal newInstance={false}></InstanceModal>
        </List.Header>
        
        <List.Description as='a'>Updated 10 mins ago</List.Description>
        
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='code branch' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Semantic-Org/Semantic-UI-Docs
        <Button size="tiny" positive floated='right'>Connect</Button>
        <Button size="tiny" floated='right'><Icon name='settings'></Icon>Manage</Button>
        </List.Header>
        <List.Description as='a'>Updated 22 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='code branch' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor
        <Button size="tiny" positive floated='right'>Connect</Button>
        <Button size="mini" floated='right'><Icon name='settings'></Icon>Manage</Button>
        </List.Header>
        <List.Description as='a'>Updated 34 mins ago</List.Description>
      </List.Content>
    </List.Item>
  </List>
                </div>
               
            </div>
        )

    }
       
}

export default Instances ;