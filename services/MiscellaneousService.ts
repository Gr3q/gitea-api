/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MarkdownOption } from '../models/MarkdownOption';
import type { NodeInfo } from '../models/NodeInfo';
import type { ServerVersion } from '../models/ServerVersion';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MiscellaneousService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Render a markdown document as HTML
     * @returns string MarkdownRender is a rendered markdown document
     * @throws ApiError
     */
    public renderMarkdown({
        body,
    }: {
        body?: MarkdownOption,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/markdown',
            body: body,
            errors: {
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Render raw markdown as HTML
     * @returns string MarkdownRender is a rendered markdown document
     * @throws ApiError
     */
    public renderMarkdownRaw({
        body,
    }: {
        /**
         * Request body to render
         */
        body: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/markdown/raw',
            body: body,
            errors: {
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Returns the nodeinfo of the Gitea application
     * @returns NodeInfo NodeInfo
     * @throws ApiError
     */
    public getNodeInfo(): CancelablePromise<NodeInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/nodeinfo',
        });
    }

    /**
     * Get default signing-key.gpg
     * @returns string GPG armored public key
     * @throws ApiError
     */
    public getSigningKey(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/signing-key.gpg',
        });
    }

    /**
     * Returns the version of the Gitea application
     * @returns ServerVersion ServerVersion
     * @throws ApiError
     */
    public getVersion(): CancelablePromise<ServerVersion> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/version',
        });
    }

}
