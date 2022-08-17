/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommitMeta } from './CommitMeta';
import type { CommitUser } from './CommitUser';
import type { PayloadCommitVerification } from './PayloadCommitVerification';

export type RepoCommit = {
    author?: CommitUser;
    committer?: CommitUser;
    message?: string;
    tree?: CommitMeta;
    url?: string;
    verification?: PayloadCommitVerification;
};

