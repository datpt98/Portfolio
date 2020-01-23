import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TagCloud } from "react-tagcloud"; 
import ParticleContainer from './ParticleContainer';

const Home = () => {
	const data = [
	  { value: "JavaScript", count: 38 },
	  { value: "React", count: 30 },
	  { value: "Nodejs", count: 28 },
	  { value: "Express.js", count: 25 },
	  { value: "HTML5", count: 33 },
	  { value: "MongoDB", count: 18 },
	  { value: "CSS3", count: 25 },
	  { value: "GraphQL", count: 20 },
	  { value: "REST API", count: 30 },
	  { value: "Apollo Client", count: 25 },
	  { value: "Photoshop", count: 28 },
	  { value: "Ruby on Rails", count: 35 },
	  { value: "Bootstrap", count: 35 },
	];

	const customRenderer = (tag, size, color) => (
	  <span key={tag.value}
	        style={{
	          animation: 'blinker 3s linear infinite',
	          animationDelay: `${Math.random() * 2}s`,
	          fontSize: `${size}em`,
	          border: '2px solid #DE3C4B',
	          margin: '3px',
	          padding: '3px',
	          display: 'inline-block',
	          color: 'white',
	        }}>{tag.value}</span>
	);

	return (
		<div> 
			<ParticleContainer/>
			<div className="home">
				<Container>
					<Row className="align-items-center">
						<Col md={7} sm={12} style={{padding: '2rem'}}>
							<h1>
								Hi, <br/>
								I'm <span style={{color: "#DE3C4B"}}>Daniel</span>, <br/>
								a web developer<span style={{color: "#DE3C4B"}}>.</span>
							</h1>
							<hr/>
							<h5><strong>Full-Stack Developer</strong></h5>
							<p>Specialized in: Ruby on Rails, ReactJS, NodeJS</p>
							
							<br/>

							<a href="https://github.com/datpt98" target="blank" className="icon" style={{"white-space": "nowrap"}}>
								<i class="fab fa-github-square"></i>
								<span><b>Github</b></span>
							</a>
							<a href="https://www.linkedin.com/in/danpt12" target="blank" className="icon" style={{"white-space": "nowrap"}}>
								<i class="fab fa-linkedin"></i>
								<span><b>Linkedin</b></span>
							</a>
						</Col>
		
						<Col md={5} sm={12} style={{padding: '2rem'}} className="hide">
							<h1>My Skills</h1>

							<TagCloud tags={data}
		            minSize={0.5}
		            maxSize={2}
		            renderer={customRenderer} 
		          />
						</Col>
					</Row>
				</Container>

			</div>
		</div>
	)
}

export default Home;