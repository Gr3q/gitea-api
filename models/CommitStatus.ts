/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommitStatusState } from './CommitStatusState';
import type { User } from './User';

/**
 * CommitStatus holds a single status of a single Commit
 */
export type CommitStatus = {
    context?: string;
    created_at?: string;
    creator?: User;
    description?: string;
    id?: number;
    status?: CommitStatusState;
    target_url?: string;
    updated_at?: string;
    url?: string;
};

