/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateKeyOption } from '../models/CreateKeyOption';
import type { CreateOrgOption } from '../models/CreateOrgOption';
import type { CreateRepoOption } from '../models/CreateRepoOption';
import type { CreateUserOption } from '../models/CreateUserOption';
import type { Cron } from '../models/Cron';
import type { EditUserOption } from '../models/EditUserOption';
import type { Organization } from '../models/Organization';
import type { PublicKey } from '../models/PublicKey';
import type { Repository } from '../models/Repository';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * List cron tasks
     * @returns Cron CronList
     * @throws ApiError
     */
    public adminCronList({
        page,
        limit,
    }: {
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Cron>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/cron',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }

    /**
     * Run cron task
     * @returns void
     * @throws ApiError
     */
    public adminCronRun({
        task,
    }: {
        /**
         * task to run
         */
        task: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/cron/{task}',
            path: {
                'task': task,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * List all organizations
     * @returns Organization OrganizationList
     * @throws ApiError
     */
    public adminGetAllOrgs({
        page,
        limit,
    }: {
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Organization>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/orgs',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }

    /**
     * List unadopted repositories
     * @returns string StringSlice
     * @throws ApiError
     */
    public adminUnadoptedList({
        page,
        limit,
        pattern,
    }: {
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
        /**
         * pattern of repositories to search for
         */
        pattern?: string,
    }): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/unadopted',
            query: {
                'page': page,
                'limit': limit,
                'pattern': pattern,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }

    /**
     * Adopt unadopted files as a repository
     * @returns void
     * @throws ApiError
     */
    public adminAdoptRepository({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/unadopted/{owner}/{repo}',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Delete unadopted files
     * @returns void
     * @throws ApiError
     */
    public adminDeleteUnadoptedRepository({
        owner,
        repo,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/unadopted/{owner}/{repo}',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }

    /**
     * List all users
     * @returns User UserList
     * @throws ApiError
     */
    public adminGetAllUsers({
        page,
        limit,
    }: {
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<User>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/users',
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }

    /**
     * Create a user
     * @returns User User
     * @throws ApiError
     */
    public adminCreateUser({
        body,
    }: {
        body?: CreateUserOption,
    }): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/users',
            body: body,
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Delete a user
     * @returns void
     * @throws ApiError
     */
    public adminDeleteUser({
        username,
    }: {
        /**
         * username of user to delete
         */
        username: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/users/{username}',
            path: {
                'username': username,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Edit an existing user
     * @returns User User
     * @throws ApiError
     */
    public adminEditUser({
        username,
        body,
    }: {
        /**
         * username of user to edit
         */
        username: string,
        body?: EditUserOption,
    }): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/admin/users/{username}',
            path: {
                'username': username,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Add a public key on behalf of a user
     * @returns PublicKey PublicKey
     * @throws ApiError
     */
    public adminCreatePublicKey({
        username,
        key,
    }: {
        /**
         * username of the user
         */
        username: string,
        key?: CreateKeyOption,
    }): CancelablePromise<PublicKey> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/users/{username}/keys',
            path: {
                'username': username,
            },
            body: key,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Delete a user's public key
     * @returns void
     * @throws ApiError
     */
    public adminDeleteUserPublicKey({
        username,
        id,
    }: {
        /**
         * username of user
         */
        username: string,
        /**
         * id of the key to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/users/{username}/keys/{id}',
            path: {
                'username': username,
                'id': id,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Create an organization
     * @returns Organization Organization
     * @throws ApiError
     */
    public adminCreateOrg({
        username,
        organization,
    }: {
        /**
         * username of the user that will own the created organization
         */
        username: string,
        organization: CreateOrgOption,
    }): CancelablePromise<Organization> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/users/{username}/orgs',
            path: {
                'username': username,
            },
            body: organization,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Create a repository on behalf of a user
     * @returns Repository Repository
     * @throws ApiError
     */
    public adminCreateRepo({
        username,
        repository,
    }: {
        /**
         * username of the user. This user will own the created repository
         */
        username: string,
        repository: CreateRepoOption,
    }): CancelablePromise<Repository> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/users/{username}/repos',
            path: {
                'username': username,
            },
            body: repository,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
                409: `APIError is error format response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

}
