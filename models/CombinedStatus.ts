/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommitStatus } from './CommitStatus';
import type { CommitStatusState } from './CommitStatusState';
import type { Repository } from './Repository';

/**
 * CombinedStatus holds the combined state of several statuses for a single commit
 */
export type CombinedStatus = {
    commit_url?: string;
    repository?: Repository;
    sha?: string;
    state?: CommitStatusState;
    statuses?: Array<CommitStatus>;
    total_count?: number;
    url?: string;
};

