/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * CreatePullReviewComment represent a review comment for creation api
 */
export type CreatePullReviewComment = {
    body?: string;
    /**
     * if comment to new file line or 0
     */
    new_position?: number;
    /**
     * if comment to old file line or 0
     */
    old_position?: number;
    /**
     * the tree path
     */
    path?: string;
};

