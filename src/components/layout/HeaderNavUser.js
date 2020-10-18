import React from 'react';

export const HeaderNavUser = ({ name, photoURL }) => {
	return (
		<div className="headernavuser">
			<div className="headernavuser__name">
				<span>Hello, <strong>{ name }</strong></span>	
			</div> 
			{
				photoURL ?
					<div className="headernavuser__image">
						<img src={ photoURL } alt={ name }/>
					</div>
				:
					<div className="headernavuser__defaultImage">
						<span>{ name?.slice(0, 1) }</span>
					</div>
			}

		</div>
	)
}