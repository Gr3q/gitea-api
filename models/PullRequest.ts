/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { Milestone } from './Milestone';
import type { PRBranchInfo } from './PRBranchInfo';
import type { StateType } from './StateType';
import type { User } from './User';

/**
 * PullRequest represents a pull request
 */
export type PullRequest = {
    allow_maintainer_edit?: boolean;
    assignee?: User;
    assignees?: Array<User>;
    base?: PRBranchInfo;
    body?: string;
    closed_at?: string;
    comments?: number;
    created_at?: string;
    diff_url?: string;
    due_date?: string;
    head?: PRBranchInfo;
    html_url?: string;
    id?: number;
    is_locked?: boolean;
    labels?: Array<Label>;
    merge_base?: string;
    merge_commit_sha?: string;
    mergeable?: boolean;
    merged?: boolean;
    merged_at?: string;
    merged_by?: User;
    milestone?: Milestone;
    number?: number;
    patch_url?: string;
    state?: StateType;
    title?: string;
    updated_at?: string;
    url?: string;
    user?: User;
};

