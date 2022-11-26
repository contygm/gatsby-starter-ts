import * as React from 'react';
import FaIconLink from './FaIconLink';
import {
    faMugHot,
    faGhost,
    faEnvelope,
	faChevronRight,
	faShare
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const StickySocialMedia = (props: {isVertical: boolean}) => {
	const [showMedia, setShowMedia] = useState(true);

	const verticalClass = props.isVertical ? "is-vertical" : "";

	const handleCollapse = () => {
		setShowMedia(!showMedia)
	}

	return (
		<div 
			className={`menu sticky box mt-4 ${verticalClass}`} 
		>
			<p className="menu-label">{props.isVertical? 'Share' : 'Share this post'}</p>
			<ul className={`has-text-black has-text-centered ${props.isVertical ? "" : "columns"}`}>
				{((props.isVertical && showMedia) || (!props.isVertical)) && <>
					<div className="column">
						<FontAwesomeIcon
							className="faicon-link"
							icon={faMugHot}
							size="lg"
						/>
					</div>
					<div className="column">
						<FontAwesomeIcon
							className="faicon-link"
							icon={faGhost}
							size="lg"
						/>
					</div>
					<div className="column">
						<FontAwesomeIcon
							className="faicon-link"
							icon={faEnvelope}
							size="lg"
						/>
					</div>
				</>
				}
				{(props.isVertical && showMedia) && 
					<div className="column has-text-grey-lighter pt-4 pb-2">
						<FontAwesomeIcon
							className="faicon-link"
							icon={faChevronRight}
							size="sm"
							onClick={handleCollapse}
						/>
					</div>
				}
				{(props.isVertical && !showMedia) &&
					<div className="has-text-grey-lighter">
						<FontAwesomeIcon
							className="faicon-link"
							icon={faShare}
							size="lg"
							onClick={handleCollapse}
						/>
					</div>
				}
			</ul>
			
		</div>
	)
}

export default StickySocialMedia;