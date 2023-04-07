import React from 'react';
import { HeadProps, PageProps } from 'gatsby';

export const mockHeadProps = (data: any): HeadProps => {
    return {
        data: data,
        location: {
            pathname: ''
        },
        params: {},
        pageContext: {}
    };
};

export const mockPageProps = (data: any): PageProps => {
    return {
        data: data,
        path: '',
        uri: '',
        location: Object.create(window).location['state'],
        navigate: jest.fn(),
        children: undefined,
        params: {},
        pageResources: {
            component: (<></>) as unknown as React.Component,
            json: {
                data: data,
                pageContext: {}
            },
            page: {
                componentChunkName: '',
                path: '',
                webpackCompilationHash: '',
                matchPath: undefined
            }
        },
        pageContext: {},
        serverData: {}
    };
};
