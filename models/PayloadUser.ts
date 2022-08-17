/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * PayloadUser represents the author or committer of a commit
 */
export type PayloadUser = {
    email?: string;
    /**
     * Full name of the commit author
     */
    name?: string;
    username?: string;
};

