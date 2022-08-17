/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommitUser } from './CommitUser';

/**
 * WikiCommit page commit/revision
 */
export type WikiCommit = {
    author?: CommitUser;
    commiter?: CommitUser;
    message?: string;
    sha?: string;
};

