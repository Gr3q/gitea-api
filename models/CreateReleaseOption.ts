/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * CreateReleaseOption options when creating a release
 */
export type CreateReleaseOption = {
    body?: string;
    draft?: boolean;
    name?: string;
    prerelease?: boolean;
    tag_name: string;
    target_commitish?: string;
};

