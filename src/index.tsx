import React from 'react';
import { BedtimeComponentProps, StoriesProps } from 'types/stories';
import './styles.css';

export const BedtimeForChild = ({ parentName, child, stories }: BedtimeComponentProps) => {
	const favoriteNeice = parentName === 'leanna' && (child === "Millie Mae Cobleigh's" || child === "Millie Mae's" || child === "Millie's") ? true : false;
	const notSingleStory = stories.length !== 1;

	return (
		<>
			<span className='fade' />
			<article className='bedtime'>
				<section className={`author ${notSingleStory ? 'gap' : ''}`}>
					<span className='author-title'>
						<p>{child}</p>
						<p className='text-wrap text-center'>{notSingleStory ? 'Bedtime Stories' : `${stories[0]?.title} Bedtime Story`}</p>
					</span>
					{notSingleStory && favoriteNeice ? (
						<p className='author-favorite-neice'>
							<small>by your</small>
							<br />
							Uncle Alex
						</p>
					) : notSingleStory ? (
						<p className='author-alex'>
							<small>by</small> Alex Graham
						</p>
					) : null}
				</section>
				<section className={`stories ${notSingleStory ? 'multi-story' : ''}`}>{notSingleStory ? <Stories stories={stories} /> : <SingleStory story={stories[0]} />}</section>
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

const SingleStory = ({ story }: { story: StoriesProps | undefined }) => {
	if (story) {
		return (
			<div className='story-content'>
				<img src={story.cover} alt='' className='story-cover' />
				<article className='story-details' style={{ backgroundColor: `${story.bookBackgroundColor}75` }}>
					<BookLines bookString={story.bookString} />
					<p className='story-end'>The End</p>
				</article>
			</div>
		);
	} else {
		return (
			<div className='story-content'>
				<article className='story-details' style={{ backgroundColor: `#94a3b875` }}>
					<BookLines bookString='' />
				</article>
			</div>
		);
	}
};

const BookLines = ({ bookString }: { bookString: string }) => {
	if (bookString.length !== 0) {
		const lines = bookString?.split(`\n\n`);
		return lines?.map((line, i) => (
			<React.Fragment key={i}>
				<p>{line}</p>
				<br />
			</React.Fragment>
		));
	} else {
		return (
			<div>
				<p>Our Apologies</p>
				<br />
				<p>There is no content for this book, please try another.</p>
			</div>
		);
	}
};

export { CinderellaBookObject, CinderellaBookString } from './samples/cinderella';
export { GingerbreadManBookObject, GingerbreadManBookString } from './samples/gingerbread-man';
export { GoldilocksBookObject, GoldilocksBookString } from './samples/goldilocks';
export { GreenEggsAndHamBookObject, GreenEggsAndHamBookString } from './samples/green-eggs-and-ham';
export { JackBeanstalkBookObject, JackBeanstalkBookString } from './samples/jack-beanstalk';
export { LittleRedRidingHoodBookObject, LittleRedRidingHoodBookString } from './samples/little-red-riding-hood';
export { TheLoraxBookObject, TheLoraxBookString } from './samples/lorax';
export { MagicBlanketBookObject, MagicBlanketBookString } from './samples/magic-blanket';
export { SleepyOwlBookObject, SleepyOwlBookString } from './samples/sleepy-owl';
export { ThreeLittlePigsBookObject, ThreeLittlePigsBookString } from './samples/three-little-pigs';
export { TortoiseHareBookObject, TortoiseHareBookString } from './samples/tortoise-hare';
export { TwinkleTwinkleBookObject, TwinkleTwinkleBookString } from './samples/twinkle-twinkle';
