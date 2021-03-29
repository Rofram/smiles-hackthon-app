import React from 'react';
import {Text} from 'react-native'

import {
	Container, 
	FirstTexT,
	ButtonComprar, 
	ButtonResgatar,
	Card,
	Value,
	TextValue,
	Note, 
	Line, 
	TextSecondary,
	TextWhite,
	CardContainer,
	ContainerButton
} from './styles';

const ConsultarMilhas: React.FC = () => {
	return(
		<Container>

			<Card>

				<FirstTexT>
					Você possui
				</FirstTexT>
				
				<CardContainer>
					<Value>
						5.689
					</Value>
					<TextValue>
						milhas*
					</TextValue>

					<Note>*saldo do início da aquisição do plano até a data de hoje</Note>
				</CardContainer>
				

				<Line />

				<TextSecondary>
				O quanto de milhas você precisa para a sua próxima viagem?
				</TextSecondary>

				<ContainerButton>
					<ButtonComprar>
						<TextWhite>Comprar</TextWhite>
					</ButtonComprar>

					<ButtonResgatar>
						<TextWhite>Resgatar</TextWhite>
					</ButtonResgatar>
				</ContainerButton>
			</Card>
		</Container>
	);
}

export default ConsultarMilhas;