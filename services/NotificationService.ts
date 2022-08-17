/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationCount } from '../models/NotificationCount';
import type { NotificationThread } from '../models/NotificationThread';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class NotificationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List users's notification threads
     * @returns NotificationThread NotificationThreadList
     * @throws ApiError
     */
    public notifyGetList({
        all,
        statusTypes,
        subjectType,
        since,
        before,
        page,
        limit,
    }: {
        /**
         * If true, show notifications marked as read. Default value is false
         */
        all?: boolean,
        /**
         * Show notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread & pinned.
         */
        statusTypes?: Array<string>,
        /**
         * filter notifications by subject type
         */
        subjectType?: Array<string>,
        /**
         * Only show notifications updated after the given time. This is a timestamp in RFC 3339 format
         */
        since?: string,
        /**
         * Only show notifications updated before the given time. This is a timestamp in RFC 3339 format
         */
        before?: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<NotificationThread>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notifications',
            query: {
                'all': all,
                'status-types': statusTypes,
                'subject-type': subjectType,
                'since': since,
                'before': before,
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Mark notification threads as read, pinned or unread
     * @returns NotificationThread NotificationThreadList
     * @throws ApiError
     */
    public notifyReadList({
        lastReadAt,
        all,
        statusTypes,
        toStatus,
    }: {
        /**
         * Describes the last point that notifications were checked. Anything updated since this time will not be updated.
         */
        lastReadAt?: string,
        /**
         * If true, mark all notifications on this repo. Default value is false
         */
        all?: string,
        /**
         * Mark notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread.
         */
        statusTypes?: Array<string>,
        /**
         * Status to mark notifications as, Defaults to read.
         */
        toStatus?: string,
    }): CancelablePromise<Array<NotificationThread>> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/notifications',
            query: {
                'last_read_at': lastReadAt,
                'all': all,
                'status-types': statusTypes,
                'to-status': toStatus,
            },
        });
    }

    /**
     * Check if unread notifications exist
     * @returns NotificationCount Number of unread notifications
     * @throws ApiError
     */
    public notifyNewAvailable(): CancelablePromise<NotificationCount> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notifications/new',
        });
    }

    /**
     * Get notification thread by ID
     * @returns NotificationThread NotificationThread
     * @throws ApiError
     */
    public notifyGetThread({
        id,
    }: {
        /**
         * id of notification thread
         */
        id: string,
    }): CancelablePromise<NotificationThread> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notifications/threads/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Mark notification thread as read by ID
     * @returns NotificationThread NotificationThread
     * @throws ApiError
     */
    public notifyReadThread({
        id,
        toStatus = 'read',
    }: {
        /**
         * id of notification thread
         */
        id: string,
        /**
         * Status to mark notifications as
         */
        toStatus?: string,
    }): CancelablePromise<NotificationThread> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/notifications/threads/{id}',
            path: {
                'id': id,
            },
            query: {
                'to-status': toStatus,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * List users's notification threads on a specific repo
     * @returns NotificationThread NotificationThreadList
     * @throws ApiError
     */
    public notifyGetRepoList({
        owner,
        repo,
        all,
        statusTypes,
        subjectType,
        since,
        before,
        page,
        limit,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * If true, show notifications marked as read. Default value is false
         */
        all?: boolean,
        /**
         * Show notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread & pinned
         */
        statusTypes?: Array<string>,
        /**
         * filter notifications by subject type
         */
        subjectType?: Array<string>,
        /**
         * Only show notifications updated after the given time. This is a timestamp in RFC 3339 format
         */
        since?: string,
        /**
         * Only show notifications updated before the given time. This is a timestamp in RFC 3339 format
         */
        before?: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<NotificationThread>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/notifications',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'all': all,
                'status-types': statusTypes,
                'subject-type': subjectType,
                'since': since,
                'before': before,
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Mark notification threads as read, pinned or unread on a specific repo
     * @returns NotificationThread NotificationThreadList
     * @throws ApiError
     */
    public notifyReadRepoList({
        owner,
        repo,
        all,
        statusTypes,
        toStatus,
        lastReadAt,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        /**
         * If true, mark all notifications on this repo. Default value is false
         */
        all?: string,
        /**
         * Mark notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread.
         */
        statusTypes?: Array<string>,
        /**
         * Status to mark notifications as. Defaults to read.
         */
        toStatus?: string,
        /**
         * Describes the last point that notifications were checked. Anything updated since this time will not be updated.
         */
        lastReadAt?: string,
    }): CancelablePromise<Array<NotificationThread>> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/repos/{owner}/{repo}/notifications',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'all': all,
                'status-types': statusTypes,
                'to-status': toStatus,
                'last_read_at': lastReadAt,
            },
        });
    }

}
