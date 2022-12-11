import * as React from 'react';

const TagsList = (props: {tags: Array<string>} ) => {
	return ( 
		<div className="tags">
			<span
				id="all"
				className="tag is-success is-light is-medium"
			>
				All
			</span>
			{props.tags.map((tag: string) => {
				return (
					<span
						key={tag}
						id={tag}
						className="tag is-success is-light is-medium"
					>
						{tag}
					</span>
				);
			})}
		</div>
	);
}
 
export default TagsList;