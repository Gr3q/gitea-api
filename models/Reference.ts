/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GitObject } from './GitObject';

export type Reference = {
    object?: GitObject;
    ref?: string;
    url?: string;
};

