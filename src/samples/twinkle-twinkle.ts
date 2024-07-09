import { StoriesProps } from '~/types/stories';
import LittleStarCover from './covers/TwinkleTwinkle.jpg';

export const TwinkleTwinkleBookString = `
Twinkle, twinkle, little star,
How I wonder what you are!


Up above the world so high,
Like a diamond in the sky.


When the blazing sun is gone,
When he nothing shines upon,


Then you show your little light,
Twinkle, twinkle, all the night.


Then the traveler in the dark,
Thanks you for your tiny spark,


He could not see which way to go,
If you did not twinkle so.


In the dark blue sky you keep,
And often through my curtains peep,


For you never shut your eye,
Till the sun is in the sky.


As your bright and tiny spark,
Lights the traveler in the dark,—


Though I know not what you are,
Twinkle, twinkle, little star.


Twinkle, twinkle, little star,
How I wonder what you are!


Up above the world so high,
Like a diamond in the sky.


Twinkle, twinkle, little star,
How I wonder what you are!`;

export const TwinkleTwinkleBookObject = ({ relativeUrl }: { relativeUrl?: string }): StoriesProps => {
	return {
		title: 'Twinkle Twinkle Little Star',
		author: 'Jane Taylor',
		cover: LittleStarCover,
		ageRating: '0+',
		bookLink: relativeUrl ? `${relativeUrl}/TwinkleTwinkle` : 'TwinkleTwinkle',
		bookString: TwinkleTwinkleBookString,
		bookBackgroundColor: '#c7d2fe',
	};
};
