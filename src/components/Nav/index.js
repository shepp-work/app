import React from 'react';

import { Nav, Logo, Menu, Link } from './styles';

export default function NavComponent() {
	return (
		<Nav>
			<Link>
				<Logo />
			</Link>
			<Menu>
				<Link>Home</Link>
				<Link>Quem somos?</Link>
				<Link>Serviços</Link>
				<Link>Sou Profissional</Link>
				<Link>Agendar sessão</Link>
			</Menu>
		</Nav>
	);
}
