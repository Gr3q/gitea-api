/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * UserSettings represents user settings
 */
export type UserSettings = {
    description?: string;
    diff_view_style?: string;
    full_name?: string;
    hide_activity?: boolean;
    /**
     * Privacy
     */
    hide_email?: boolean;
    language?: string;
    location?: string;
    theme?: string;
    website?: string;
};

