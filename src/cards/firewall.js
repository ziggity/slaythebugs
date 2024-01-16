const Firewall =  {
	name: 'Firewall',
	type: 'skill',
	energy: 1,
	target: 'player',
	block: 5,
	description: 'Gain 5 Block.',
	image: 'src/assets/images/firewall.jpeg',
}

export const upgrade = (card) => {
	return {
		...card,
		block: 8,
		description: 'Gain 8 Block.',
	}
}

export default Firewall