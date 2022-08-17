/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * EditIssueOption options for editing an issue
 */
export type EditIssueOption = {
    /**
     * deprecated
     */
    assignee?: string;
    assignees?: Array<string>;
    body?: string;
    due_date?: string;
    milestone?: number;
    ref?: string;
    state?: string;
    title?: string;
    unset_due_date?: boolean;
};

