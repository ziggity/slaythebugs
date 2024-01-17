const PhishingAttempt = {
	name: 'PhishingAttempt',
	type: 'attack',
	energy: 1,
	target: 'enemy',
	damage: (Math.floor(Math.random() * 10)) + 1,
	description: 'Deal a random dmg range of 10',
	image: 'https://i.ibb.co/njDfYT2/phishingattack.jpg',}

export const upgrade = (card) => {
	return {
		...card,
		damage: 15,
		description: 'Deal 15 Damage.',
	}
}

export default PhishingAttempt

