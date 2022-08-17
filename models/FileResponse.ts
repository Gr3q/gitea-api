/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContentsResponse } from './ContentsResponse';
import type { FileCommitResponse } from './FileCommitResponse';
import type { PayloadCommitVerification } from './PayloadCommitVerification';

/**
 * FileResponse contains information about a repo's file
 */
export type FileResponse = {
    commit?: FileCommitResponse;
    content?: ContentsResponse;
    verification?: PayloadCommitVerification;
};

