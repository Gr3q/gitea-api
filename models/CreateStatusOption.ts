/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommitStatusState } from './CommitStatusState';

/**
 * CreateStatusOption holds the information needed to create a new CommitStatus for a Commit
 */
export type CreateStatusOption = {
    context?: string;
    description?: string;
    state?: CommitStatusState;
    target_url?: string;
};

