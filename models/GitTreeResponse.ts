/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GitEntry } from './GitEntry';

/**
 * GitTreeResponse returns a git tree
 */
export type GitTreeResponse = {
    page?: number;
    sha?: string;
    total_count?: number;
    tree?: Array<GitEntry>;
    truncated?: boolean;
    url?: string;
};

