/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * WatchInfo represents an API watch status of one repository
 */
export type WatchInfo = {
    created_at?: string;
    ignored?: boolean;
    reason?: any;
    repository_url?: string;
    subscribed?: boolean;
    url?: string;
};

