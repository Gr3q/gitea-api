/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Repository } from './Repository';

/**
 * SearchResults results of a successful search
 */
export type SearchResults = {
    data?: Array<Repository>;
    ok?: boolean;
};

