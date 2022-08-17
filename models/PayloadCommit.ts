/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PayloadCommitVerification } from './PayloadCommitVerification';
import type { PayloadUser } from './PayloadUser';

/**
 * PayloadCommit represents a commit
 */
export type PayloadCommit = {
    added?: Array<string>;
    author?: PayloadUser;
    committer?: PayloadUser;
    /**
     * sha1 hash of the commit
     */
    id?: string;
    message?: string;
    modified?: Array<string>;
    removed?: Array<string>;
    timestamp?: string;
    url?: string;
    verification?: PayloadCommitVerification;
};

