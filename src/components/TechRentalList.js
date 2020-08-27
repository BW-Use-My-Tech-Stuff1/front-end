import React from 'react';
import TechRentalCard from './TechRentalCard';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function TechRentalList(props) {
    
    const { techEquipments, setTechEquipments} = props;
  

   

	const getTech = () => {
		axiosWithAuth()
			.get('/tech')
			.then((res) => {
				// console.log(res)
				setTechEquipments(res.data);
			})
			.catch((err) => console.log('this is the', err));
	};

	return (
		<div>
			{techEquipments.map((tech) => (
				<TechRentalCard getTech={getTech} techEquipments={techEquipments} setTechEquipment={setTechEquipments} key={tech.id} tech={tech} />
			))}

			<button onClick={getTech}>Get Available Tech Equipment</button>
		</div>
	);
}
