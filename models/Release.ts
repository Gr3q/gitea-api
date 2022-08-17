/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attachment } from './Attachment';
import type { User } from './User';

/**
 * Release represents a repository release
 */
export type Release = {
    assets?: Array<Attachment>;
    author?: User;
    body?: string;
    created_at?: string;
    draft?: boolean;
    html_url?: string;
    id?: number;
    name?: string;
    prerelease?: boolean;
    published_at?: string;
    tag_name?: string;
    tarball_url?: string;
    target_commitish?: string;
    url?: string;
    zipball_url?: string;
};

