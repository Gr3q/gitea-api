/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

/**
 * RepoCollaboratorPermission to get repository permission for a collaborator
 */
export type RepoCollaboratorPermission = {
    permission?: string;
    role_name?: string;
    user?: User;
};

