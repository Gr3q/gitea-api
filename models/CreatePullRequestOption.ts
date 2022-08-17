/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * CreatePullRequestOption options when creating a pull request
 */
export type CreatePullRequestOption = {
    assignee?: string;
    assignees?: Array<string>;
    base?: string;
    body?: string;
    due_date?: string;
    head?: string;
    labels?: Array<number>;
    milestone?: number;
    title?: string;
};

