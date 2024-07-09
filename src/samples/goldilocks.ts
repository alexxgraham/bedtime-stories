import { StoriesProps } from '~/types/stories';
import GoldilocksThreeBrownBearsCover from './covers/GoldilocksThreeBrownBears.jpg';

export const GoldilocksBookString = `
Once upon a time, there were three bears who lived in a house in the forest.


There was Father Bear, Mother Bear, and Baby Bear.


One morning, they made porridge for breakfast, but it was too hot to eat.


So they decided to take a walk in the forest while their porridge cooled.


Now, there was a little girl named Goldilocks who lived near the forest.


She had golden hair and she liked to explore.


As she wandered through the woods, she came upon the bears' house.


She knocked on the door, but no one answered.


So she pushed the door open and went inside.


There on the table were three bowls of porridge.


Goldilocks was hungry, so she tasted the porridge in the first bowl.


"This porridge is too hot!" she exclaimed.


So she tasted the porridge in the second bowl.


"This porridge is too cold," she said.


So she tasted the last bowl of porridge.


"Ahhh, this porridge is just right," she said happily, and she ate it all up.


After she'd eaten the porridge, Goldilocks decided she was feeling a little tired.


She saw three chairs in the living room.


Goldilocks sat in the first chair to rest her feet.


"This chair is too big!" she exclaimed.


So she sat in the second chair.


"This chair is too big, too!" she whined.


So she tried the last and smallest chair.


"Ahhh, this chair is just right," she sighed.


But just as she settled down into the chair to rest, it broke into pieces.


Goldilocks was very tired by this time, so she went upstairs to the bedroom.


There were three beds in the room.


She lay down in the first bed, but it was too hard.


Then she lay down in the second bed, but it was too soft.


Then she lay down in the third bed, and it was just right.


Goldilocks fell asleep.


While she was sleeping, the three bears came home from their walk.


They saw at once that someone had been eating their porridge.


"Who's been eating my porridge?" growled Father Bear.


"Who's been eating my porridge?" said Mother Bear.


"Who's been eating my porridge and eaten it all up?" cried Baby Bear.


Then they went into the living room.


"Who's been sitting in my chair?" growled Father Bear.


"Who's been sitting in my chair?" said Mother Bear.


"Who's been sitting in my chair and broken it?" cried Baby Bear.


They went upstairs to the bedroom.


"Who's been sleeping in my bed?" growled Father Bear.


"Who's been sleeping in my bed?" said Mother Bear.


"Who's been sleeping in my bed?" cried Baby Bear, and Goldilocks woke up.


She was so frightened that she jumped out of bed and ran out of the room.


Downstairs, through the kitchen, and out of the house she ran.


And she never came back to the forest again.


And the three bears never saw her again.`;

export const GoldilocksBookObject = ({ relativeUrl }: { relativeUrl?: string }): StoriesProps => {
	return {
		title: 'Goldilocks & The 3 Bears',
		author: 'Robert Southey',
		cover: GoldilocksThreeBrownBearsCover,
		ageRating: '0+',
		bookLink: relativeUrl ? `${relativeUrl}/Goldilocks+ThreeBears` : 'Goldilocks+ThreeBears',
		bookString: GoldilocksBookString,
		bookBackgroundColor: '#fed7aa',
	};
};
