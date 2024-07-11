import { StoriesProps } from '~/types/stories';
// import GingerbreadManCover from './covers/GingerbreadMan.jpg';

export const GingerbreadManBookString = `
Once upon a time, an old woman and her husband lived alone in a little old house.


The couple had no children, and being lonely, the woman decided to make a boy out of gingerbread.


She rolled out the dough, shaped it into a gingerbread man, and decorated him with icing for his eyes and buttons, and currants for his mouth.


When she put him into the oven to bake, she said to herself, "Now I shall have a little boy of my own."


As soon as the gingerbread man was done, he jumped out of the oven and began to run away.


"Stop!" the old woman called out, "I want to eat you."


But the gingerbread man just laughed and said, "Run, run, as fast as you can! You can't catch me, I'm the Gingerbread Man!"


So the old woman chased him.


The gingerbread man ran past a pig, a cow, and a horse, all of whom wanted to eat him.


But he ran faster, chanting, "Run, run, as fast as you can! You can't catch me, I'm the Gingerbread Man!"


Then he came to a river, and he couldn't swim.


A sly fox came up and said, "I can help you cross."


"Jump on my tail," the fox said.


So the gingerbread man jumped on the fox's tail.


But as they crossed the river, the water got deeper.


"Jump on my back," the fox said.


The gingerbread man did, and the fox swam on.


But just as they reached the other side, the fox tossed the gingerbread man into the air.


And he opened his mouth and snapped the gingerbread man up.


And that was the end of the Gingerbread Man.`;

export const GingerbreadManBookObject = ({ relativeUrl }: { relativeUrl?: string }): StoriesProps => {
	return {
		title: 'The Gingerbread Man',
		author: 'Old Eng. Folk Tale, unk',
		cover: '/assets/covers/GingerbreadMan.jpg',
		ageRating: '3+',
		bookLink: relativeUrl ? `${relativeUrl}/TheGingerbreadMan` : 'TheGingerbreadMan',
		bookString: GingerbreadManBookString,
		bookBackgroundColor: '#fed7aa',
	};
};
