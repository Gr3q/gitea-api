/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PayloadCommit } from './PayloadCommit';

/**
 * Branch represents a repository branch
 */
export type Branch = {
    commit?: PayloadCommit;
    effective_branch_protection_name?: string;
    enable_status_check?: boolean;
    name?: string;
    protected?: boolean;
    required_approvals?: number;
    status_check_contexts?: Array<string>;
    user_can_merge?: boolean;
    user_can_push?: boolean;
};

