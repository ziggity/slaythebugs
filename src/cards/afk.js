
const AFK = {
	name: 'AFK',
	type: 'skill',
	energy: 1,
	target: 'player',
	block: -15,
    action: 1,
	description: 'Apply a debuff of -15 block for the round but draw a new hand',
	image: 'https://i.ibb.co/HqtMWp7/afk.jpg',}

export const upgrade = (card) => {
	return {
		...card,
		block: -5,
		description: 'Deal -5 block debuff.',
	}
}

export default AFK
