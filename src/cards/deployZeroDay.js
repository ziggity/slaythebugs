const DeployZeroDay = {
	name: 'DeployZeroDay',
	type: 'skill',
	energy: 1,
	target: 'enemy',
	block: 0,
    action: 3,
	description: 'Exploit the 0 day attack, apply 2x debuff to enemy take 2x dmg per tick',
	image: 'https://i.ibb.co/3zJs5CB/bria-8c9533c1cc63736b.jpg',}

export const upgrade = (card) => {
	return {
		...card,
		block: 0,
		description: 'Remove two cards from your deck from the game',
	}
}

export default DeployZeroDay