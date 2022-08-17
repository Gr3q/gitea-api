/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * EditPullRequestOption options when modify pull request
 */
export type EditPullRequestOption = {
    allow_maintainer_edit?: boolean;
    assignee?: string;
    assignees?: Array<string>;
    base?: string;
    body?: string;
    due_date?: string;
    labels?: Array<number>;
    milestone?: number;
    state?: string;
    title?: string;
    unset_due_date?: boolean;
};

