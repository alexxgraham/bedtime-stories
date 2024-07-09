import { StoriesProps } from '~/types/stories';
import MagicBlanketCover from './covers/MagicBlanket.jpg';

export const MagicBlanketBookString = `
In a small village nestled between rolling hills and whispering forests, there lived a young girl named Lily. Lily was known for her kindness and her love for adventure.


One day, while exploring an old attic in her grandmother's house, Lily stumbled upon a dusty trunk tucked away in a corner. Inside the trunk, she found a beautiful, shimmering blanket made of the softest silk, woven with threads of silver and gold.


Her grandmother explained, "This is the Magic Blanket. It has been in our family for generations. When you sleep under it, it will take you to a magical land filled with love, happiness, and everything good."


Excited by her grandmother's words, Lily couldn't wait to try the Magic Blanket. That night, she snuggled under its comforting embrace, closing her eyes with anticipation.


As she drifted off to sleep, Lily found herself floating through a sky filled with twinkling stars. Below her, a lush green meadow stretched out endlessly, dotted with colorful flowers and sparkling streams.


Lily landed softly in this magical land, where friendly creatures greeted her with smiles and songs. Fairies danced in the moonlight, their wings shimmering with every graceful movement.


She wandered through enchanted forests where trees whispered secrets of ancient wisdom. Every corner of this land radiated warmth and joy, filling Lily's heart with a deep sense of peace.


In this magical land, Lily discovered a village where laughter echoed through cobblestone streets. Kindness flowed freely, and every person she met had a story to share.


Time seemed to stand still in this wondrous place, where dreams came alive and worries melted away like morning mist.


When Lily awoke the next morning, she found herself back in her room, the Magic Blanket wrapped snugly around her. She smiled, knowing that whenever she needed a journey to a land of love and happiness, the Magic Blanket would be there.


From that day on, Lily cherished the Magic Blanket and shared its stories with others, spreading the magic of love and happiness wherever she went.


And so, dear friends, if you ever find yourself in need of a little magic, remember Lily and her extraordinary adventures with the Magic Blanket.`;

export const MagicBlanketBookObject = ({ relativeUrl }: { relativeUrl?: string }): StoriesProps => {
	return {
		title: 'The Magic Blanket',
		author: 'Alex',
		cover: MagicBlanketCover,
		ageRating: '0+',
		bookLink: relativeUrl ? `${relativeUrl}/MagicBlanket` : 'MagicBlanket',
		bookString: MagicBlanketBookString,
		bookBackgroundColor: '#fde68a',
	};
};
