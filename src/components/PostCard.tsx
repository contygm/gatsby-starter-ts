import { Link } from 'gatsby';
import React from 'react';

const PostCard = (props: {post: IndexElements}) => {
	return (  
		<div className="card">
			<div className="card-image">
				<span className="tag is-primary sticky-tag">
					{props.post.frontmatter.tags[0]}
				</span>
				<figure className="image is-4by3 blog-card-image">
					<img
						src="https://bulma.io/images/placeholders/1280x960.png"
						alt="Placeholder image"
					/>
				</figure>
			</div>
			<div className="card-content">
				<div className="media">
					<div className="media-content">
						<p className="title is-4">
							{props.post.frontmatter.title}
						</p>
						<p className="subtitle is-6">
							<time
								dateTime={
									props.post.frontmatter.date
								}
							>
								{
									props.post.frontmatter.date
								}
							</time>
						</p>
					</div>
				</div>
				<div className="content">
					<p>
						{
							props.post.frontmatter.description
						}
					</p>
					<Link
						to={`/blog${props.post.fields.slug}`}
					>
						Read more...
					</Link>
				</div>
			</div>
		</div>
	);
}
 
export default PostCard;