/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * MarkdownOption markdown options
 */
export type MarkdownOption = {
    /**
     * Context to render
     *
     * in: body
     */
    Context?: string;
    /**
     * Mode to render
     *
     * in: body
     */
    Mode?: string;
    /**
     * Text markdown to render
     *
     * in: body
     */
    Text?: string;
    /**
     * Is it a wiki page ?
     *
     * in: body
     */
    Wiki?: boolean;
};

