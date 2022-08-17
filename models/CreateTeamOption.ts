/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * CreateTeamOption options for creating a team
 */
export type CreateTeamOption = {
    can_create_org_repo?: boolean;
    description?: string;
    includes_all_repositories?: boolean;
    name: string;
    permission?: CreateTeamOption.permission;
    units?: Array<string>;
    units_map?: Record<string, string>;
};

export namespace CreateTeamOption {

    export enum permission {
        READ = 'read',
        WRITE = 'write',
        ADMIN = 'admin',
    }


}

