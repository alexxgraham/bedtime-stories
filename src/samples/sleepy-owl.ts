import { StoriesProps } from '~/types/stories';
// import SleepyOwlCover from './covers/SleepyOwl.jpg';

export const SleepyOwlBookString = `
Once upon a time, in a dense forest nestled between towering trees and sparkling streams, lived a wise old owl named Ollie.


Ollie was known far and wide for his wisdom and sharp eyesight. Every night, he would soar through the skies, keeping watch over the forest and its inhabitants.


One chilly evening, after a long day of helping other animals solve their problems and disputes, Ollie felt an unusual heaviness in his eyelids. It was the first time in ages that Ollie felt so tired.


"I must rest," he thought, but owls are not like other birds. They cannot simply perch on a branch and sleep. No, they must keep flying or risk falling from the sky.


Ollie tried flapping his wings slower, hoping to glide effortlessly and catch a few winks of sleep. But the more he tried to slow down, the more the wind pushed against him, keeping him aloft.


He flew around in circles, trying to find a safe spot to rest. The other forest creatures noticed Ollie's predicament and gathered below, whispering worriedly.


"What will Ollie do?" asked a rabbit.


"He can't keep flying forever," said a squirrel.


Just then, a wise old turtle named Tully spoke up. "I think I can help," he said slowly, for turtles are not known for their speed.


Tully instructed the other animals to gather leaves, twigs, and soft moss. They created a makeshift platform in the tallest tree, high enough for Ollie to perch safely.


With great effort, Ollie managed to land on the platform. He closed his eyes and immediately felt the weight of sleep wash over him.


The other animals watched over Ollie through the night, ensuring he slept peacefully. In the morning, Ollie woke up refreshed and grateful to his friends for their help.


From that day on, Ollie learned to pace himself and take short breaks during his nightly flights. And whenever he felt sleepy, he knew his friends in the forest would be there to lend a helping hand.


And so, Ollie the owl continued to watch over the forest, wiser and more rested than ever before.`;

export const SleepyOwlBookObject = ({ relativeUrl }: { relativeUrl?: string }): StoriesProps => {
	return {
		title: 'The Sleepy Owl',
		author: 'Alex',
		cover: '/assets/covers/SleepyOwl.jpg',
		ageRating: '0+',
		bookLink: relativeUrl ? `${relativeUrl}/SleepyOwl` : 'SleepyOwl',
		bookString: SleepyOwlBookString,
		bookBackgroundColor: '#99f6e4',
	};
};
