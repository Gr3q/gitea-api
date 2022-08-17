/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Label } from './Label';
import type { Milestone } from './Milestone';
import type { PullRequestMeta } from './PullRequestMeta';
import type { RepositoryMeta } from './RepositoryMeta';
import type { StateType } from './StateType';
import type { User } from './User';

/**
 * Issue represents an issue in a repository
 */
export type Issue = {
    assignee?: User;
    assignees?: Array<User>;
    body?: string;
    closed_at?: string;
    comments?: number;
    created_at?: string;
    due_date?: string;
    html_url?: string;
    id?: number;
    is_locked?: boolean;
    labels?: Array<Label>;
    milestone?: Milestone;
    number?: number;
    original_author?: string;
    original_author_id?: number;
    pull_request?: PullRequestMeta;
    ref?: string;
    repository?: RepositoryMeta;
    state?: StateType;
    title?: string;
    updated_at?: string;
    url?: string;
    user?: User;
};

