import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

const BaseballCard = ({
    image,
    summary
}: {
    image: IGatsbyImageData;
    summary: {
        field: string;
        value: string;
    }[];
}) => {
    return (
        <section className="baseball-card-wrapper">
            <div className="baseball-card">
                <div className="baseball-card-summary">
                    <div className="media">
                        <figure className="baseball-card-img">
                            <GatsbyImage
                                alt={'summary icon'}
                                image={image}
                            />
                        </figure>
                    </div>

                    <div className="baseball-card-title-wrapper">
                        <p className="baseball-card-title">Topic</p>
                    </div>

                    <div className="baseball-card-table-wrapper">
                        <table className="baseball-card-table">
                            <tbody>
                                {summary.map((attrObj) => {
                                    return (
                                        <tr
                                            key={attrObj.field}
                                            className="baseball-card-row"
                                        >
                                            <td className="baseball-card-table-label">
                                                {attrObj.field}
                                            </td>
                                            <td>{attrObj.value}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BaseballCard;
