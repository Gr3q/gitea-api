/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReviewStateType } from './ReviewStateType';
import type { Team } from './Team';
import type { User } from './User';

/**
 * PullReview represents a pull request review
 */
export type PullReview = {
    body?: string;
    comments_count?: number;
    commit_id?: string;
    dismissed?: boolean;
    html_url?: string;
    id?: number;
    official?: boolean;
    pull_request_url?: string;
    stale?: boolean;
    state?: ReviewStateType;
    submitted_at?: string;
    team?: Team;
    user?: User;
};

