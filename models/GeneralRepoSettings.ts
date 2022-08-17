/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * GeneralRepoSettings contains global repository settings exposed by API
 */
export type GeneralRepoSettings = {
    http_git_disabled?: boolean;
    lfs_disabled?: boolean;
    migrations_disabled?: boolean;
    mirrors_disabled?: boolean;
    stars_disabled?: boolean;
    time_tracking_disabled?: boolean;
};

