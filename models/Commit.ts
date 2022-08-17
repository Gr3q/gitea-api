/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommitAffectedFiles } from './CommitAffectedFiles';
import type { CommitMeta } from './CommitMeta';
import type { CommitStats } from './CommitStats';
import type { RepoCommit } from './RepoCommit';
import type { User } from './User';

export type Commit = {
    author?: User;
    commit?: RepoCommit;
    committer?: User;
    created?: string;
    files?: Array<CommitAffectedFiles>;
    html_url?: string;
    parents?: Array<CommitMeta>;
    sha?: string;
    stats?: CommitStats;
    url?: string;
};

