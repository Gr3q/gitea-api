/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WikiCommit } from './WikiCommit';

/**
 * WikiCommitList commit/revision list
 */
export type WikiCommitList = {
    commits?: Array<WikiCommit>;
    count?: number;
};

