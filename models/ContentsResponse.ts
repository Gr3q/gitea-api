/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileLinksResponse } from './FileLinksResponse';

/**
 * ContentsResponse contains information about a repo's entry's (dir, file, symlink, submodule) metadata and content
 */
export type ContentsResponse = {
    _links?: FileLinksResponse;
    /**
     * `content` is populated when `type` is `file`, otherwise null
     */
    content?: string;
    download_url?: string;
    /**
     * `encoding` is populated when `type` is `file`, otherwise null
     */
    encoding?: string;
    git_url?: string;
    html_url?: string;
    name?: string;
    path?: string;
    sha?: string;
    size?: number;
    /**
     * `submodule_git_url` is populated when `type` is `submodule`, otherwise null
     */
    submodule_git_url?: string;
    /**
     * `target` is populated when `type` is `symlink`, otherwise null
     */
    target?: string;
    /**
     * `type` will be `file`, `dir`, `symlink`, or `submodule`
     */
    type?: string;
    url?: string;
};

