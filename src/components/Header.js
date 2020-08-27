import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<React.Fragment>
			<header>
				<Link to='/login' className='navbar'>
					Log In
				</Link>
				<Link to='/signup' className='navbar'>
					Sign Up
				</Link>
				<Link to='/addtech' className='navbar'>
					Add Tech
				</Link>
				<Link to='/techlist' className='navbar'>
					Tech Equipment
				</Link>
			</header>
		</React.Fragment>
	);
}
