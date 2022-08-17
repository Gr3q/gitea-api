/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileCommitResponse } from './FileCommitResponse';
import type { PayloadCommitVerification } from './PayloadCommitVerification';

/**
 * FileDeleteResponse contains information about a repo's file that was deleted
 */
export type FileDeleteResponse = {
    commit?: FileCommitResponse;
    content?: any;
    verification?: PayloadCommitVerification;
};

