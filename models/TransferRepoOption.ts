/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * TransferRepoOption options when transfer a repository's ownership
 */
export type TransferRepoOption = {
    new_owner: string;
    /**
     * ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.
     */
    team_ids?: Array<number>;
};

