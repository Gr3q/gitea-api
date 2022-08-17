/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

/**
 * PublicKey publickey is a user key to push code to repository
 */
export type PublicKey = {
    created_at?: string;
    fingerprint?: string;
    id?: number;
    key?: string;
    key_type?: string;
    read_only?: boolean;
    title?: string;
    url?: string;
    user?: User;
};

