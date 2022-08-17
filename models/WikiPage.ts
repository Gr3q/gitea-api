/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WikiCommit } from './WikiCommit';

/**
 * WikiPage a wiki page
 */
export type WikiPage = {
    commit_count?: number;
    /**
     * Page content, base64 encoded
     */
    content_base64?: string;
    footer?: string;
    html_url?: string;
    last_commit?: WikiCommit;
    sidebar?: string;
    sub_url?: string;
    title?: string;
};

