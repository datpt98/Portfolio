import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
	return(
		<div className="sidebar">
			<div className="vertical-center" >
				<Link to="/home" className="sideContent">
					<div>
						<i class="fas fa-home"></i> <br/>
				  	<b>Home</b>
					</div>
				</Link>
				<Link to="/projects" className="sideContent">
					<div>
						<i class="fas fa-project-diagram"></i> <br/>		  
				  	<b>Projects</b>
					</div>
				</Link>
				<Link to="/contact" className="sideContent">
					<div>
						<i class="fas fa-envelope"></i> <br/>
				  	<b>Contact</b>
				  </div>
				</Link>
			</div>
		</div>
	)
}
	
export default SideBar;