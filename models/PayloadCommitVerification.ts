/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PayloadUser } from './PayloadUser';

/**
 * PayloadCommitVerification represents the GPG verification of a commit
 */
export type PayloadCommitVerification = {
    payload?: string;
    reason?: string;
    signature?: string;
    signer?: PayloadUser;
    verified?: boolean;
};

