import React from 'react';
import { Container } from 'react-bootstrap';

const Projects = () => {
	return(
		<Container>
			<br/><br/>
			<h2> My Projects </h2>
			<br/><br/>

			<div className="projects">
				<img src='./img/1.png' alt='E-food'/>

				<div className="middle">
					<a href="https://github.com/datpt98/E-food" target="blank">
						<button>Source Code</button>
					</a>
					<a href="https://tranquil-ridge-88569.herokuapp.com/" target="blank">
						<button>Live Demo</button>
					</a>
				</div>

				<div className="details">				
					<h5>E - Food</h5>
					<p>An online store that supplies time-efficient and cost-saving foods</p>
				</div>

				
			</div>

			<br/><br/>
			<div>
			<div className="projects">
				<img src='./img/2.png' alt='KK' />

				<div className="middle">
					<a href="https://www.kouvolankorttelikodit.fi/" target="blank">
						<button>Live Demo</button>
					</a>
				</div>

				<div className="details">				
					<h5>Kouvolan Korttelikodit</h5>
					<p>An website for Kouvolan Korttelikodit Oy</p>
				</div>
			</div>
			</div>
			<br/><br/>
			
			<div className="projects">
				<div className="imgContainer">
					<img src='./img/3.png' alt='Tetris' />
				</div>
				
				<div className="middle">
					<a href="https://github.com/datpt98/Tetris" target="blank">
						<button>Source Code</button>
					</a>
					<a href="http://arcane-gorge-27751.herokuapp.com/" target="blank">
						<button>Live Demo</button>
					</a>
				</div>

				<div className="details">				
					<h5>Tetris Game</h5>
					<p>An Tetris React-based game</p>
				</div>
			</div>
			<br/>
		</Container>
	)
}

export default Projects;