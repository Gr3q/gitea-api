/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

/**
 * Reaction contain one reaction
 */
export type Reaction = {
    content?: string;
    created_at?: string;
    user?: User;
};

