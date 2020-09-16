import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div style={{textAlign: 'center', padding: '40px'}}>
        <h1>About</h1>
        <p style={{fontFamily: 'Oxygen, sans-serif', fontSize: '17px', fontWeight: '500'}}>Hi, I am Adewale, finding patterns in problems and providing solutions to them are the highlight of my day. 
          I get joy from doing this daily. 
          I had a background in Biochemistry and part of the skill I took from there is knowing the root cause of a problem 
          and finding solution to it. This skill has helped me in particular since I started programming as I must design and 
          build an application or website that is fail-safe. Hence testing is important
          I am skilled in Technical skills such as HTML & CSS, JavaScript, Ruby on Rails, React & Redux and Soft skills such as
           Communication, Team Collaboration, Pair Programming, Remote Working. I can work as a front end, back end or in the full
            stack position and I am open to learning also.
          In my free time, I play video games or play the guitar.
          I am open to new opportunities and challenges. So feel free to send a mail to <span style={{fontWeight: '800', color: '#f44b91'}}>didymus7007@gmail.com </span> 
          and you can check out my repository here on <Link style={{fontWeight: '800'}} to='https://github.com/didymus707'>Github</Link></p>  
      </div>
    )
  }
}

export default About
