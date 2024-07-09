export type BedtimeComponentProps = {
	parentName?: string;
	child: string;
	stories: StoriesProps[];
};

export type StoriesProps = {
	title: string;
	author: string;
	cover: string;
	ageRating: string;
	bookLink: string;
	bookString: string;
	bookBackgroundColor: string;
};
