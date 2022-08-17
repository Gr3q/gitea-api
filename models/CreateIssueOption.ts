/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * CreateIssueOption options to create one issue
 */
export type CreateIssueOption = {
    /**
     * deprecated
     */
    assignee?: string;
    assignees?: Array<string>;
    body?: string;
    closed?: boolean;
    due_date?: string;
    /**
     * list of label ids
     */
    labels?: Array<number>;
    /**
     * milestone id
     */
    milestone?: number;
    ref?: string;
    title: string;
};

