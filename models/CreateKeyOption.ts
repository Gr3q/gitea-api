/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * CreateKeyOption options when creating a key
 */
export type CreateKeyOption = {
    /**
     * An armored SSH key to add
     */
    key: string;
    /**
     * Describe if the key has only read access or read/write
     */
    read_only?: boolean;
    /**
     * Title of the key to add
     */
    title: string;
};

