/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * UserSettingsOptions represents options to change user settings
 */
export type UserSettingsOptions = {
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

