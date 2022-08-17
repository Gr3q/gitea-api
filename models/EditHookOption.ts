/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * EditHookOption options when modify one hook
 */
export type EditHookOption = {
    active?: boolean;
    branch_filter?: string;
    config?: Record<string, string>;
    events?: Array<string>;
};

