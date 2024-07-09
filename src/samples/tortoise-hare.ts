import { StoriesProps } from '~/types/stories';
import TortoiseHareCover from './covers/TortoiseHare.jpg';

export const TortoiseHareBookString = `
Once upon a time, there was a speedy hare who bragged about how fast he could run.


Tired of hearing him boast, the tortoise challenged him to a race.


"All right," said the hare, laughing at such an idea.


The race began, and the hare, being such a swift runner, soon left the tortoise far behind.


About halfway through the race, confident of winning, he decided to rest under a tree for some time.


The hare woke up with a start and ran as fast as he could, but it was too late.


The tortoise had crossed the finish line, and the hare was too far behind to catch up.`;

export const TortoiseHareBookObject = ({ relativeUrl }: { relativeUrl?: string }): StoriesProps => {
	return {
		title: 'The Tortoise & The Hare',
		author: 'Aesop',
		cover: TortoiseHareCover,
		ageRating: '3+',
		bookLink: relativeUrl ? `${relativeUrl}/TortoiseHare` : 'TortoiseHare',
		bookString: TortoiseHareBookString,
		bookBackgroundColor: '#fef08a',
	};
};
