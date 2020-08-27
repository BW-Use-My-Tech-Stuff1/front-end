import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'


export default function TechRentalCard(props) {
    const { tech, getTech } = props;
    const history = useHistory()

    const removeTech = () =>{
        axiosWithAuth()
        .delete(`/tech/${tech.id}`)
        .then(res=>console.log(res))
        .catch(err=> console.log(err))
        getTech()

    }

	return (
		<div>
			<h1>{tech.techName}</h1>
			<p>{tech.description}</p>
			<p>{tech.price}</p>
			<button onClick={()=>history.push(`/updatetech/${tech.id}`)}>Edit Tech</button>
			<button onClick={()=>removeTech()}>Delete Tech</button>
		</div>
	);
}
