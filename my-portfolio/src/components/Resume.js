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
            <h4 style={{color: 'grey'}}>Full Stack Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Hi, I am Adewale, finding patterns in problems and providing solutions to them are the highlight of my day. I get joy from doing this daily. I had a background in Biochemistry and part of the skill I took from there is knowing the root cause of a problem and finding solution to it. This skill has helped me in particular since I started programming as I must design and build an application or website that is fail-safe. Hence testing is important I am skilled in Technical skills such as HTML & CSS, JavaScript, Ruby on Rails, React & Redux and Soft skills such as Communication, Team Collaboration, Pair Programming, Remote Working. I can work as a front end, back end or in the full stack position and I am open to learning also.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Osogbo, Nigeria</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Phone</h5>
            <p>+234-803-117-0480</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Email</h5>
            <p>didymus7007@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Website</h5>
            <p>didymus7007.com</p>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear='2019'
              endYear='2020'
              schoolName='Microverse'
              degree='Full Stack Developer'
              schoolDescription='Spent a 1000+ hours working on Data structures and Algorithms, Pair Programming, Networking, Student Mentoring and worked with languages such as HTML/CSS, Javascript and Ruby. Also worked on framweworks such as Ruby on Rails ans React & Redux'
            />
            <Education
              startYear='August'
              endYear='December, 2018'
              schoolName='Udacity'
              degree='Front End Nanodegree'
              schoolDescription='Learnt the necessary skills needed to develop a variety of websites and applications. At the end of the program, I learnt the skills needed to construct responsive websites using CSS, Flexbox and CSS Grid, develop interactive websites and UI (User Interface) applications using JavaScript and HTML and improved offline performance of websites using Service Worker.'
            />
            <Education 
              startYear='2011/2012'
              endYear='2015/2016'
              schoolName='Ekiti State University'
              degree='BSc. Biochemistry'
              schoolDescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga dolorum doloremque unde vitae amet temporibus atque neque et illo quidem officia quisquam, voluptate molestias nesciunt quo sunt odit reprehenderit!Illum voluptatibus quaerat asperiores possimus facilis vel inventore fugit ad optio mollitia sint itaque quo incidunt esse in vero deleniti numquam, doloribus'
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Experience</h2>
            <Experience
              startYear='June'
              endYear='December, 2019'
              jobName='Mentor'
              jobDescription='Helped mentor new developers understand concepts related to Web development such as Flexbox, CSS Grid, Javascript and worked with a team to organize meetups'
            />
            <Experience
              startYear='March'
              endYear='December 2017'
              jobName='Quality Assurance Officer'
              jobDescription='Prevented faulty goods from being dispatched from the company thereby increasing sales and customer satisfaction'
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
