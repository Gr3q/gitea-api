/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * IssueTemplate represents an issue template for a repository
 */
export type IssueTemplate = {
    about?: string;
    content?: string;
    file_name?: string;
    labels?: Array<string>;
    name?: string;
    ref?: string;
    title?: string;
};

