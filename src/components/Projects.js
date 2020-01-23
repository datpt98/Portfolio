import React from 'react';
import { Container } from 'react-bootstrap';

const Projects = () => {
	return(
		<Container>
			<br/><br/>
			<h2> My Projects </h2>
			<br/><br/>


			<div className="projects">
				<img src='./img/finance-tracker.png' alt='FinanceTracker'/>

				<div className="middle">
					<a href="https://github.com/datpt98/finance-tracker" target="blank">
						<button>Source Code</button>
					</a>
					<a href="https://finance-tracker12.herokuapp.com/" target="blank">
						<button>Live Demo</button>
					</a>
				</div>

				<div className="details">				
					<h5>Finance Tracker</h5>
					<p>A Finance Tracker application that is built on Ruby on Rails, Devise and Bootstrap</p>
				</div>
			</div>

			<br/><br/>

			<div className="projects">
				<img src='./img/e-food.png' alt='E-food'/>

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
					<p>An online store that supplies time-efficient and cost-saving foods, using ReactJS</p>
				</div>
			</div>

			<br/><br/>

			<div>
				<div className="projects">
					<img src='./img/alpha-blog.png' alt='AlphaBlog' />

					<div className="middle">
						<a href="https://github.com/datpt98/alpha-blog" target="blank">
							<button>Source Code</button>
						</a>
						<a href="https://alpha-blog12.herokuapp.com/" target="blank">
							<button>Live Demo</button>
						</a>
					</div>

					<div className="details">				
						<h5>Alpha Blog</h5>
						<p>A Blog application that is built on Ruby on Rails and Bootstrap</p>
					</div>
				</div>
			</div>

			<br/><br/>

			<div>
				<div className="projects">
					<img src='./img/message-me.png' alt='KK' />

					<div className="middle">
						<a href="https://github.com/datpt98/message-me" target="blank">
							<button>Source Code</button>
						</a>
					</div>

					<div className="details">				
						<h5>Message Me</h5>
						<p>A Real-time message application that is built on Ruby on Rails, ActionCable and SemanticUI</p>
					</div>
				</div>
			</div>

			<br/><br/>

			<div>
				<div className="projects">
					<img src='./img/kouvolan.png' alt='KK' />

					<div className="middle">
						<a href="https://www.kouvolankorttelikodit.fi/" target="blank">
							<button>Live Demo</button>
						</a>
					</div>

					<div className="details">				
						<h5>Kouvolan Korttelikodit</h5>
						<p>An website for Kouvolan Korttelikodit Oy using Wordpress</p>
					</div>
				</div>
			</div>


			<br/><br/>
			
			<div className="projects">
				<div className="imgContainer">
					<img src='./img/tetris.png' alt='Tetris' />
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
					<p>An Tetris React-based game utilizing ReactJS and React Hooks</p>
				</div>
			</div>
			<br/>
		</Container>
	)
}

export default Projects;