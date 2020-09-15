import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img 
                src="'https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png" 
                alt="avater"
                style={{height: '200px'}}
              />
            </div>
            <h2 style={{paddingTop: '2em'}}>Adewale Orotayo</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga dolorum doloremque unde vitae amet temporibus atque neque et illo quidem officia quisquam, voluptate molestias nesciunt quo sunt odit reprehenderit!Illum voluptatibus quaerat asperiores possimus facilis vel inventore fugit ad optio mollitia sint itaque quo incidunt esse in vero deleniti numquam, doloribus magnam. Maxime voluptas fuga suscipit consequuntur iste perspiciatis?</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>9177, Didymus Way, Jscript</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Phone</h5>
            <p>+234-803-117-0480</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Email</h5>
            <p>didymus7007@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Website</h5>
            <p>didymus7007.com</p>
            {/* <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/> */}
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear='2019'
              endYear='2020'
              schoolName='Microverse'
              schoolDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga dolorum doloremque unde vitae amet temporibus atque neque et illo quidem officia quisquam, voluptate molestias nesciunt quo sunt odit reprehenderit!Illum voluptatibus quaerat asperiores possimus facilis vel inventore fugit ad optio mollitia sint itaque quo incidunt esse in vero deleniti numquam, doloribus'
            />
            <Education 
              startYear='2011'
              endYear='2015'
              schoolName='Ekiti State University'
              schoolDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga dolorum doloremque unde vitae amet temporibus atque neque et illo quidem officia quisquam, voluptate molestias nesciunt quo sunt odit reprehenderit!Illum voluptatibus quaerat asperiores possimus facilis vel inventore fugit ad optio mollitia sint itaque quo incidunt esse in vero deleniti numquam, doloribus'
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Experience</h2>
            <Experience
              startYear='2011'
              endYear='2015'
              jobName='Ekiti State University'
              jobDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga dolorum doloremque unde vitae amet temporibus atque neque et illo quidem officia quisquam, voluptate molestias nesciunt quo sunt odit reprehenderit!Illum voluptatibus quaerat asperiores possimus facilis vel inventore fugit ad optio mollitia sint itaque quo incidunt esse in vero deleniti numquam, doloribus'
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Skills</h2>
            <Skills
              skill='HTML/CSS'
              progress={90}
            />
            <Skills
              skill='Javascript'
              progress={60}
            />
            <Skills
              skill='Ruby on Rails'
              progress={80}
            />
            <Skills
              skill='React'
              progress={15}
            />
            <Skills
              skill='NodeJS'
              progress={10}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume
