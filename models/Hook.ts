/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Hook a hook is a web hook when one repository changed
 */
export type Hook = {
    active?: boolean;
    config?: Record<string, string>;
    created_at?: string;
    events?: Array<string>;
    id?: number;
    type?: string;
    updated_at?: string;
};

