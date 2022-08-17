/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * EditUserOption edit user options
 */
export type EditUserOption = {
    active?: boolean;
    admin?: boolean;
    allow_create_organization?: boolean;
    allow_git_hook?: boolean;
    allow_import_local?: boolean;
    description?: string;
    email?: string;
    full_name?: string;
    location?: string;
    login_name: string;
    max_repo_creation?: number;
    must_change_password?: boolean;
    password?: string;
    prohibit_login?: boolean;
    restricted?: boolean;
    source_id: number;
    visibility?: string;
    website?: string;
};

