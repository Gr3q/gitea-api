/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * CreateGPGKeyOption options create user GPG key
 */
export type CreateGPGKeyOption = {
    /**
     * An armored GPG key to add
     */
    armored_public_key: string;
    armored_signature?: string;
};

