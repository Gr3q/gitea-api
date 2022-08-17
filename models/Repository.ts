/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalTracker } from './ExternalTracker';
import type { ExternalWiki } from './ExternalWiki';
import type { InternalTracker } from './InternalTracker';
import type { Permission } from './Permission';
import type { RepoTransfer } from './RepoTransfer';
import type { User } from './User';

/**
 * Repository represents a repository
 */
export type Repository = {
    allow_merge_commits?: boolean;
    allow_rebase?: boolean;
    allow_rebase_explicit?: boolean;
    allow_squash_merge?: boolean;
    archived?: boolean;
    avatar_url?: string;
    clone_url?: string;
    created_at?: string;
    default_branch?: string;
    default_merge_style?: string;
    description?: string;
    empty?: boolean;
    external_tracker?: ExternalTracker;
    external_wiki?: ExternalWiki;
    fork?: boolean;
    forks_count?: number;
    full_name?: string;
    has_issues?: boolean;
    has_projects?: boolean;
    has_pull_requests?: boolean;
    has_wiki?: boolean;
    html_url?: string;
    id?: number;
    ignore_whitespace_conflicts?: boolean;
    internal?: boolean;
    internal_tracker?: InternalTracker;
    language?: string;
    languages_url?: string;
    mirror?: boolean;
    mirror_interval?: string;
    mirror_updated?: string;
    name?: string;
    open_issues_count?: number;
    open_pr_counter?: number;
    original_url?: string;
    owner?: User;
    parent?: Repository;
    permissions?: Permission;
    private?: boolean;
    release_counter?: number;
    repo_transfer?: RepoTransfer;
    size?: number;
    ssh_url?: string;
    stars_count?: number;
    template?: boolean;
    updated_at?: string;
    watchers_count?: number;
    website?: string;
};

