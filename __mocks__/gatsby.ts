import React from 'react';
const gatsby = jest.requireActual('gatsby');

// NOTE: This mocks the graphql() function, Link component, and StaticQuery component.
// Allow testing components that use Link or GraphQL
// https://stackoverflow.com/questions/54941990/how-to-strongly-type-jest-mocks
// https://stackoverflow.com/questions/48759035/mock-dependency-in-jest-with-typescript
module.exports = {
    ...gatsby,
    graphql: jest.fn(),
    Link: jest.fn().mockImplementation(
        // these props are invalid for an `a` tag
        ({
            activeClassName,
            activeStyle,
            getProps,
            innerRef,
            partiallyActive,
            ref,
            replace,
            to,
            ...rest
        }) =>
            React.createElement('a', {
                ...rest,
                href: to
            })
    ),
    StaticQuery: jest.fn(),
    useStaticQuery: jest.fn().mockImplementation(() => ({
        site: {
            siteMetadata: {
                title: `Starter`,
                siteUrl: `https://www.domain.com`,
                author: {
                    name: `Writer B. Author`,
                    description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit'
                },
                businessName: 'The Company',
                phone: '999-999-9999',
                email: 'email@email.com',
                description: 'a super duper site!',
                image: '/nothing.png'
            }
        }
    }))
};
