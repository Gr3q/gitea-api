/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WikiCommit } from './WikiCommit';

/**
 * WikiPageMetaData wiki page meta information
 */
export type WikiPageMetaData = {
    html_url?: string;
    last_commit?: WikiCommit;
    sub_url?: string;
    title?: string;
};

