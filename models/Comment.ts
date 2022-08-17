/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

/**
 * Comment represents a comment on a commit or issue
 */
export type Comment = {
    body?: string;
    created_at?: string;
    html_url?: string;
    id?: number;
    issue_url?: string;
    original_author?: string;
    original_author_id?: number;
    pull_request_url?: string;
    updated_at?: string;
    user?: User;
};

