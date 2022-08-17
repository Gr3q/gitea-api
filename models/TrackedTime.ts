/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Issue } from './Issue';

/**
 * TrackedTime worked time for an issue / pr
 */
export type TrackedTime = {
    created?: string;
    id?: number;
    issue?: Issue;
    /**
     * deprecated (only for backwards compatibility)
     */
    issue_id?: number;
    /**
     * Time in seconds
     */
    time?: number;
    /**
     * deprecated (only for backwards compatibility)
     */
    user_id?: number;
    user_name?: string;
};

