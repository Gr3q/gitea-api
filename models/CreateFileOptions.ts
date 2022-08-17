/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommitDateOptions } from './CommitDateOptions';
import type { Identity } from './Identity';

/**
 * CreateFileOptions options for creating files
 * Note: `author` and `committer` are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)
 */
export type CreateFileOptions = {
    author?: Identity;
    /**
     * branch (optional) to base this file from. if not given, the default branch is used
     */
    branch?: string;
    committer?: Identity;
    /**
     * content must be base64 encoded
     */
    content: string;
    dates?: CommitDateOptions;
    /**
     * message (optional) for the commit of this file. if not supplied, a default message will be used
     */
    message?: string;
    /**
     * new_branch (optional) will make a new branch from `branch` before creating the file
     */
    new_branch?: string;
    /**
     * Add a Signed-off-by trailer by the committer at the end of the commit log message.
     */
    signoff?: boolean;
};

