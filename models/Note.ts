/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Commit } from './Commit';

/**
 * Note contains information related to a git note
 */
export type Note = {
    commit?: Commit;
    message?: string;
};

