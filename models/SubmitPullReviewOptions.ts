/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReviewStateType } from './ReviewStateType';

/**
 * SubmitPullReviewOptions are options to submit a pending pull review
 */
export type SubmitPullReviewOptions = {
    body?: string;
    event?: ReviewStateType;
};

