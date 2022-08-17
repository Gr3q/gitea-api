/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Team } from './Team';
import type { User } from './User';

/**
 * RepoTransfer represents a pending repo transfer
 */
export type RepoTransfer = {
    doer?: User;
    recipient?: User;
    teams?: Array<Team>;
};

