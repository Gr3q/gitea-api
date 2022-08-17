/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * EditReleaseOption options when editing a release
 */
export type EditReleaseOption = {
    body?: string;
    draft?: boolean;
    name?: string;
    prerelease?: boolean;
    tag_name?: string;
    target_commitish?: string;
};

