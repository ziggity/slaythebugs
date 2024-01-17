

const Wipedown = {
	name: 'Wipedown',
	type: 'skill',
	energy: 1,
	target: 'player',
	block: 0,
    action: 2,
	description: 'Remove a card from your deck from the game',
	image: 'https://i.ibb.co/mJ4R3tV/wipedownhd.png',}

export const upgrade = (card) => {
	return {
		...card,
		block: 0,
		description: 'Remove two cards from your deck from the game',
	}
}

export default Wipedown