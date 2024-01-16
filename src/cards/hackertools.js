const Hackertools = {
	name: 'Hackertools',
	type: 'attack',
	energy: 1,
	target: 'enemy',
	damage: 6,
	description: 'Deal 6 Damage.',
	image: 'src/assets/images/hackertools.png',
}

export const upgrade = (card) => {
	return {
		...card,
		damage: 9,
		description: 'Deal 9 Damage.',
	}
}

export default Hackertools