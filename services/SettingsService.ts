/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GeneralAPISettings } from '../models/GeneralAPISettings';
import type { GeneralAttachmentSettings } from '../models/GeneralAttachmentSettings';
import type { GeneralRepoSettings } from '../models/GeneralRepoSettings';
import type { GeneralUISettings } from '../models/GeneralUISettings';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SettingsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get instance's global settings for api
     * @returns GeneralAPISettings GeneralAPISettings
     * @throws ApiError
     */
    public getGeneralApiSettings(): CancelablePromise<GeneralAPISettings> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/settings/api',
        });
    }

    /**
     * Get instance's global settings for Attachment
     * @returns GeneralAttachmentSettings GeneralAttachmentSettings
     * @throws ApiError
     */
    public getGeneralAttachmentSettings(): CancelablePromise<GeneralAttachmentSettings> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/settings/attachment',
        });
    }

    /**
     * Get instance's global settings for repositories
     * @returns GeneralRepoSettings GeneralRepoSettings
     * @throws ApiError
     */
    public getGeneralRepositorySettings(): CancelablePromise<GeneralRepoSettings> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/settings/repository',
        });
    }

    /**
     * Get instance's global settings for ui
     * @returns GeneralUISettings GeneralUISettings
     * @throws ApiError
     */
    public getGeneralUiSettings(): CancelablePromise<GeneralUISettings> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/settings/ui',
        });
    }

}
