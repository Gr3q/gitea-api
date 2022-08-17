/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StateType } from './StateType';

/**
 * Milestone milestone is a collection of issues on one repository
 */
export type Milestone = {
    closed_at?: string;
    closed_issues?: number;
    created_at?: string;
    description?: string;
    due_on?: string;
    id?: number;
    open_issues?: number;
    state?: StateType;
    title?: string;
    updated_at?: string;
};

