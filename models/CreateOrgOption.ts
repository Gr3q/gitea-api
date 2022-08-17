/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * CreateOrgOption options for creating an organization
 */
export type CreateOrgOption = {
    description?: string;
    full_name?: string;
    location?: string;
    repo_admin_change_team_access?: boolean;
    username: string;
    /**
     * possible values are `public` (default), `limited` or `private`
     */
    visibility?: CreateOrgOption.visibility;
    website?: string;
};

export namespace CreateOrgOption {

    /**
     * possible values are `public` (default), `limited` or `private`
     */
    export enum visibility {
        PUBLIC = 'public',
        LIMITED = 'limited',
        PRIVATE = 'private',
    }


}

