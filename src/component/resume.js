import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './edu';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
             
                src="https://i.ibb.co/T2LKN0B/IMG-2172-1-min.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Frank John</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Tanzania , Dar es Salaam , kinondoni</p>
            <h5>Phone</h5>
            <p>+255 717 537 615</p>
            <h5>Email</h5>
            <p>frank2nyyy@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2015}
              endYear={2018}
              schoolName="University of Dar es Salaam"
              schoolDescription="persued my university studies on Bsh. Electronic science and Communication"
               />

               <Education
                 startYear={2013}
                 endYear={2015}
                 schoolName="Tambaza High School"
                 schoolDescription="studied PCM 'PHYSICS CHEMISTRY AND DVANCED MATHEMATICS' "
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>
              <Experience
              startYear={2016}
              endYear={2017}
              jobName="TANESCO "
              jobDescription="working in a NETWORKING and Maintanance "
              />

            <Experience
              startYear={2017}
              endYear={2018}
              jobName="TTCL "
              jobDescription="working in Radio and Transimission department "
              />

              <Experience
                startYear={2018}
                endYear={2019}
                jobName="Global Publishers Developer"
                jobDescription="Working as a VAS technical developer and maintanance of all digital platform"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="Ruby on Rails"
                  progress={75}
                  />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={100}
                    />
                    <Skills
                      skill="React"
                      progress={50}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
