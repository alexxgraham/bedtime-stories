import { StoriesProps } from '~/types/stories';
// import TheLoraxCover from './covers/TheLorax.jpg';

export const TheLoraxBookString = `
At the far end of town


where the Grickle-grass grows


and the wind smells slow-and-sour when it blows


and no birds ever sing excepting old crows...


is the Street of the Lifted Lorax.


And deep in the Grickle-grass, some people say,


if you look deep enough you can still see, today,


where the Lorax once stood


just as long as it could


before somebody lifted the Lorax away.


What was the Lorax?


And why was it there?


And why was it lifted and taken somewhere


from the far end of town where the Grickle-grass grows?


The old Once-ler still lives here.


Ask him. He knows.


You won't see the Once-ler.


Don't knock at his door.


He stays in his Lerkim on top of his store.


He lurks in his Lerkim, cold under the roof,


where he makes his own clothes


out of miff-muffered moof.


And on special dank midnights in August,


he peeks


out of the shutters


and sometimes he speaks


and tells how the Lorax was lifted away.


He'll tell you, perhaps...


if you're willing to listen,


how the Once-ler made his Gluppity-Glupp


and Schloppity-Schlopp


and what's more he'll tell you that his pants are too tight.


He'll say that there's nothin' -That's not quite right.


It was the Lorax said...


Then he'll tell you that he...


slapped the Lorax on the seat of the pants


on his pants are too tight.


And then he got mad.


He got terribly mad.


He yelled at the Lorax, "Now listen here, Dad!


All you do is yap-yap and say, 'Bad! Bad! Bad! Bad!'"


Well, I have my rights, sir, and I'm telling you


I intend to go on doing just what I do!


And, for your information, you Lorax, I'm figgering


On biggering


and BIGGERING


and BIGGERING


and BIGGERING,


turning MORE Truffula Trees into Thneeds


which everyone, EVERYONE, EVERYONE needs!


And at that very moment, we heard a loud whack!


From outside in the fields came a sickening smack


of an axe on a tree. Then we heard the tree fall.


The very last Truffula Tree of them all!


No more trees. No more Thneeds. No more work to be done.


So, in no time, my uncles and aunts, everyone,


all waved me good-bye. They jumped into my cars


and drove away under the smoke-smuggered stars.


Now all that was left 'neath the bad smelling sky


was my big empty factory...


the Lorax...


and I.


The Lorax said nothing. Just gave me a glance...


just gave me a very sad, sad backward glance...


as he lifted himself by the seat of his pants.


And I'll never forget the grim look on his face


when he heisted himself and took leave of this place,


through a hole in the smog, without leaving a trace.


And all that the Lorax left here in this mess


was a small pile of rocks, with one word...


"UNLESS."


Whatever that meant, well, I just couldn't guess.


That was long, long ago.


But each day since that day


I've sat here and worried


and worried away.


Through the years, while my buildings


have fallen apart,


I've worried about it


with all of my heart.


"But now," says the Once-ler,


"Now that you're here,


the word of the Lorax seems perfectly clear.


UNLESS someone like you


cares a whole awful lot,


nothing is going to get better.


It's not.


"SO...


Catch!" calls the Once-ler.


He lets something fall.


"It's a Truffula Seed.


It's the last one of all!


You're in charge of the last of the Truffula Seeds.


And Truffula Trees are what everyone needs.


Plant a new Truffula. Treat it with care.


Give it clean water. And feed it fresh air.


"Grow a forest. Protect it from axes that hack.


Then the Lorax


and all of his friends


may come back."`;

export const TheLoraxBookObject = ({ relativeUrl }: { relativeUrl?: string }): StoriesProps => {
	return {
		title: 'The Lorax',
		author: 'Dr. Seuss',
		cover: '/assets/covers/TheLorax.jpg',
		ageRating: '3+',
		bookLink: relativeUrl ? `${relativeUrl}/TheLorax` : 'TheLorax',
		bookString: TheLoraxBookString,
		bookBackgroundColor: '#fde68a',
	};
};
