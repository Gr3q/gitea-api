/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GPGKeyEmail } from './GPGKeyEmail';

/**
 * GPGKey a user GPG key to sign commit and tag in repository
 */
export type GPGKey = {
    can_certify?: boolean;
    can_encrypt_comms?: boolean;
    can_encrypt_storage?: boolean;
    can_sign?: boolean;
    created_at?: string;
    emails?: Array<GPGKeyEmail>;
    expires_at?: string;
    id?: number;
    key_id?: string;
    primary_key_id?: string;
    public_key?: string;
    subkeys?: Array<GPGKey>;
    verified?: boolean;
};

