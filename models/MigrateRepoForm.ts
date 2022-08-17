/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GitServiceType } from './GitServiceType';

/**
 * MigrateRepoForm form for migrating repository
 * this is used to interact with web ui
 */
export type MigrateRepoForm = {
    auth_password?: string;
    auth_token?: string;
    auth_username?: string;
    clone_addr: string;
    description?: string;
    issues?: boolean;
    labels?: boolean;
    lfs?: boolean;
    lfs_endpoint?: string;
    milestones?: boolean;
    mirror?: boolean;
    mirror_interval?: string;
    private?: boolean;
    pull_requests?: boolean;
    releases?: boolean;
    repo_name: string;
    service?: GitServiceType;
    uid: number;
    wiki?: boolean;
};

