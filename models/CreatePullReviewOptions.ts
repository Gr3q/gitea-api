/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatePullReviewComment } from './CreatePullReviewComment';
import type { ReviewStateType } from './ReviewStateType';

/**
 * CreatePullReviewOptions are options to create a pull review
 */
export type CreatePullReviewOptions = {
    body?: string;
    comments?: Array<CreatePullReviewComment>;
    commit_id?: string;
    event?: ReviewStateType;
};

