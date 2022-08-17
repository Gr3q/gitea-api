/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * AddTimeOption options for adding time to an issue
 */
export type AddTimeOption = {
    created?: string;
    /**
     * time in seconds
     */
    time: number;
    /**
     * User who spent the time (optional)
     */
    user_name?: string;
};

