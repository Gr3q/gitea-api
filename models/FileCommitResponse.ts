/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommitMeta } from './CommitMeta';
import type { CommitUser } from './CommitUser';

export type FileCommitResponse = {
    author?: CommitUser;
    committer?: CommitUser;
    created?: string;
    html_url?: string;
    message?: string;
    parents?: Array<CommitMeta>;
    sha?: string;
    tree?: CommitMeta;
    url?: string;
};

