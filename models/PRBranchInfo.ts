/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Repository } from './Repository';

/**
 * PRBranchInfo information about a branch
 */
export type PRBranchInfo = {
    label?: string;
    ref?: string;
    repo?: Repository;
    repo_id?: number;
    sha?: string;
};

