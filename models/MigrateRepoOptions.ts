/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * MigrateRepoOptions options for migrating repository's
 * this is used to interact with api v1
 */
export type MigrateRepoOptions = {
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
    /**
     * Name of User or Organisation who will own Repo after migration
     */
    repo_owner?: string;
    service?: MigrateRepoOptions.service;
    /**
     * deprecated (only for backwards compatibility)
     */
    uid?: number;
    wiki?: boolean;
};

export namespace MigrateRepoOptions {

    export enum service {
        GIT = 'git',
        GITHUB = 'github',
        GITEA = 'gitea',
        GITLAB = 'gitlab',
    }


}

