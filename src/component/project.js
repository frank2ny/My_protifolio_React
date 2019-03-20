import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Portifolio</CardTitle>
            <CardText>
              This project shows the use of ReactJS framework and the implementation of react-routes 
            </CardText>
            <CardActions border>
            <a href="https://github.com/frank2ny/My_protifolio_React" target="popup">
   <Button colored >GitHub</Button>
   </a>
              
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          
        </div>


      )
    } 
  
     else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is MongoDB</h1>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/HTQ2fkY/mongo.png) center / cover'}} >React Project #3</CardTitle>
            <CardText>
              this is API project where i used MongoDB to save RECipes
            </CardText>
            <CardActions border>
            <a href="https://github.com/frank2ny/Hot_Takes" target="popup">
  <Button colored>GitHub</Button></a>
           
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          {/* <Tab>Angular</Tab>
          <Tab>VueJS</Tab> */}
          <Tab>MongoDB</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Project;
