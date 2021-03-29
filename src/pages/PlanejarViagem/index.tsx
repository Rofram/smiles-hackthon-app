import React from 'react';
import { Image } from 'react-native';
import { Line } from '../ConsultarMilhas/styles';

import ImagemLowAngle from '../../assets/low-angle-view-palm-trees-sunlight-ad-blue-sky-rio-de-janeiro.jpg';

import {Container} from './styles';

const PlanejarViagem: React.FC = () => {
	return(
		<Container>
			<Image source={ImagemLowAngle} />
			
		</Container>
	);
}

export default PlanejarViagem;