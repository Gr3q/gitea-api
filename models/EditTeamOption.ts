/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * EditTeamOption options for editing a team
 */
export type EditTeamOption = {
    can_create_org_repo?: boolean;
    description?: string;
    includes_all_repositories?: boolean;
    name: string;
    permission?: EditTeamOption.permission;
    units?: Array<string>;
    units_map?: Record<string, string>;
};

export namespace EditTeamOption {

    export enum permission {
        READ = 'read',
        WRITE = 'write',
        ADMIN = 'admin',
    }


}

