import clsx from 'clsx';
import React from 'react';
import './styles.css';

type StoriesProps = {
	title: string;
	author: string;
	cover: string;
	ageRating: string;
	bookLink: string;
	bookString: string;
	bookBackgroundColor: string;
};

export const cn = (...inputs: string[]) => {
	return clsx(inputs);
};

export const BedtimeForChild = ({ parentName, child, stories }: { parentName: string; child: string; stories: StoriesProps[] }) => {
	const favoriteNeice = (parentName === 'leanna' && child === "Millie Mae Cobleigh's") || child === "Millie Mae's" || child === "Millie's" ? true : false;
	const singleStory = stories.length !== 1;

	return (
		<>
			<span className='fade' />
			<article className='bedtime'>
				<section className={`author ${!singleStory ? 'gap' : ''}`}>
					<span className='author-title'>
						<p>{child}</p>
						<p className='text-wrap text-center'>{!singleStory ? 'Bedtime Stories' : `${stories[0]?.title} Bedtime Story`}</p>
					</span>
					{!singleStory && favoriteNeice ? (
						<p className='author-favorite-neice'>
							<small>by your</small>
							<br />
							Uncle Alex
						</p>
					) : !singleStory ? (
						<p className='author-alex'>
							<small>by</small> Alex Graham
						</p>
					) : null}
				</section>
				<section className={`stories ${!singleStory ? 'multi-story' : ''}`}>
					{!singleStory ? (
						<Stories stories={stories} />
					) : (
						<div className='story-content'>
							<img src={stories[0]?.cover} alt='' className='story-cover' />
							<article className='story-details' style={{ backgroundColor: `${stories[0]?.bookBackgroundColor}75` }}>
								<BookLines bookString={stories[0]?.bookString} />
								<p className='story-end'>The End</p>
							</article>
						</div>
					)}
				</section>
			</article>
		</>
	);
};

const Stories = ({ stories }: { stories: StoriesProps[] }) => {
	return stories
		.sort((a, b) => (Number(a.ageRating.charAt(0)) < Number(b.ageRating.charAt(0)) ? -1 : 1))
		.map((story, i) => (
			<a href={story.bookLink} key={i} className='story-link' style={{ backgroundColor: `${story.bookBackgroundColor}75` }}>
				<p className='story-title'>{story.title}</p>
				<img src={story.cover} alt='' className='story-image' />
				<p className='story-age-rating' style={{ backgroundColor: story.bookBackgroundColor }}>
					{story.ageRating}
				</p>
			</a>
		));
};

const BookLines = ({ bookString }: { bookString: string | undefined }) => {
	const lines = bookString?.split(`\n\n`);
	return lines?.map((line, i) => (
		<React.Fragment key={i}>
			<p>{line}</p>
			<br />
		</React.Fragment>
	));
};

export { CinderellaBookString } from './samples/cinderella';
export { GingerbreadManBookString } from './samples/gingerbread-man';
export { GoldilocksBookString } from './samples/goldilocks';
export { GreenEggsAndHamBookString } from './samples/green-eggs-and-ham';
export { JackBeanstalkBookString } from './samples/jack-beanstalk';
export { LittleRedRidingHoodBookString } from './samples/little-red-riding-hood';
export { TheLoraxBookString } from './samples/lorax';
export { MagicBlanketBookString } from './samples/magic-blanket';
export { SleepyOwlBookString } from './samples/sleepy-owl';
export { ThreeLittlePigsBookString } from './samples/three-little-pigs';
export { TortoiseHareBookString } from './samples/tortoise-hare';
export { TwinkleTwinkleBookString } from './samples/twinkle-twinkle';
