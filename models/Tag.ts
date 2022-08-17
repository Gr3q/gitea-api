/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommitMeta } from './CommitMeta';

/**
 * Tag represents a repository tag
 */
export type Tag = {
    commit?: CommitMeta;
    id?: string;
    message?: string;
    name?: string;
    tarball_url?: string;
    zipball_url?: string;
};

