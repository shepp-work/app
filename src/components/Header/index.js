import React from 'react';

import { Header, Logo, Nav, Link } from './styles';

export default function HeaderComponent() {
	return (
		<Header>
			<Link>
				<Logo />
			</Link>
			<Nav>
				<Link>Home</Link>
				<Link>Quem somos?</Link>
				<Link>Serviços</Link>
				<Link>Sou Profissional</Link>
				<Link>Agendar sessão</Link>
			</Nav>
		</Header>
	);
}
