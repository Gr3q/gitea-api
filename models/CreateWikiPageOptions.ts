/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * CreateWikiPageOptions form for creating wiki
 */
export type CreateWikiPageOptions = {
    /**
     * content must be base64 encoded
     */
    content_base64?: string;
    /**
     * optional commit message summarizing the change
     */
    message?: string;
    /**
     * page title. leave empty to keep unchanged
     */
    title?: string;
};

