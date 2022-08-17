/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

/**
 * PullReviewComment represents a comment on a pull request review
 */
export type PullReviewComment = {
    body?: string;
    commit_id?: string;
    created_at?: string;
    diff_hunk?: string;
    html_url?: string;
    id?: number;
    original_commit_id?: string;
    original_position?: number;
    path?: string;
    position?: number;
    pull_request_review_id?: number;
    pull_request_url?: string;
    resolver?: User;
    updated_at?: string;
    user?: User;
};

