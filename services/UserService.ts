/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessToken } from '../models/AccessToken';
import type { CreateAccessTokenOption } from '../models/CreateAccessTokenOption';
import type { CreateEmailOption } from '../models/CreateEmailOption';
import type { CreateGPGKeyOption } from '../models/CreateGPGKeyOption';
import type { CreateKeyOption } from '../models/CreateKeyOption';
import type { CreateOAuth2ApplicationOptions } from '../models/CreateOAuth2ApplicationOptions';
import type { CreateRepoOption } from '../models/CreateRepoOption';
import type { DeleteEmailOption } from '../models/DeleteEmailOption';
import type { Email } from '../models/Email';
import type { GPGKey } from '../models/GPGKey';
import type { OAuth2Application } from '../models/OAuth2Application';
import type { PublicKey } from '../models/PublicKey';
import type { Repository } from '../models/Repository';
import type { StopWatch } from '../models/StopWatch';
import type { Team } from '../models/Team';
import type { TrackedTime } from '../models/TrackedTime';
import type { User } from '../models/User';
import type { UserHeatmapData } from '../models/UserHeatmapData';
import type { UserSettings } from '../models/UserSettings';
import type { UserSettingsOptions } from '../models/UserSettingsOptions';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get the authenticated user
     * @returns User User
     * @throws ApiError
     */
    public userGetCurrent(): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user',
        });
    }

    /**
     * List the authenticated user's oauth2 applications
     * @returns OAuth2Application OAuth2ApplicationList represents a list of OAuth2 applications.
     * @throws ApiError
     */
    public userGetOauth2Application({
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
    }): CancelablePromise<Array<OAuth2Application>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/applications/oauth2',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * creates a new OAuth2 application
     * @returns OAuth2Application OAuth2Application
     * @throws ApiError
     */
    public userCreateOAuth2Application({
        body,
    }: {
        body: CreateOAuth2ApplicationOptions,
    }): CancelablePromise<OAuth2Application> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/applications/oauth2',
            body: body,
            errors: {
                400: `APIError is error format response`,
            },
        });
    }

    /**
     * get an OAuth2 Application
     * @returns OAuth2Application OAuth2Application
     * @throws ApiError
     */
    public userGetOAuth2Application({
        id,
    }: {
        /**
         * Application ID to be found
         */
        id: number,
    }): CancelablePromise<OAuth2Application> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/applications/oauth2/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * delete an OAuth2 Application
     * @returns void
     * @throws ApiError
     */
    public userDeleteOAuth2Application({
        id,
    }: {
        /**
         * token to be deleted
         */
        id: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/user/applications/oauth2/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * update an OAuth2 Application, this includes regenerating the client secret
     * @returns OAuth2Application OAuth2Application
     * @throws ApiError
     */
    public userUpdateOAuth2Application({
        id,
        body,
    }: {
        /**
         * application to be updated
         */
        id: number,
        body: CreateOAuth2ApplicationOptions,
    }): CancelablePromise<OAuth2Application> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/user/applications/oauth2/{id}',
            path: {
                'id': id,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * List the authenticated user's email addresses
     * @returns Email EmailList
     * @throws ApiError
     */
    public userListEmails(): CancelablePromise<Array<Email>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/emails',
        });
    }

    /**
     * Add email addresses
     * @returns Email EmailList
     * @throws ApiError
     */
    public userAddEmail({
        body,
    }: {
        body?: CreateEmailOption,
    }): CancelablePromise<Array<Email>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/emails',
            body: body,
            errors: {
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Delete email addresses
     * @returns void
     * @throws ApiError
     */
    public userDeleteEmail({
        body,
    }: {
        body?: DeleteEmailOption,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/user/emails',
            body: body,
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * List the authenticated user's followers
     * @returns User UserList
     * @throws ApiError
     */
    public userCurrentListFollowers({
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
            url: '/user/followers',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * List the users that the authenticated user is following
     * @returns User UserList
     * @throws ApiError
     */
    public userCurrentListFollowing({
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
            url: '/user/following',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Check whether a user is followed by the authenticated user
     * @returns void
     * @throws ApiError
     */
    public userCurrentCheckFollowing({
        username,
    }: {
        /**
         * username of followed user
         */
        username: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/following/{username}',
            path: {
                'username': username,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Follow a user
     * @returns void
     * @throws ApiError
     */
    public userCurrentPutFollow({
        username,
    }: {
        /**
         * username of user to follow
         */
        username: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/user/following/{username}',
            path: {
                'username': username,
            },
        });
    }

    /**
     * Unfollow a user
     * @returns void
     * @throws ApiError
     */
    public userCurrentDeleteFollow({
        username,
    }: {
        /**
         * username of user to unfollow
         */
        username: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/user/following/{username}',
            path: {
                'username': username,
            },
        });
    }

    /**
     * Get a Token to verify
     * @returns string APIString is a string response
     * @throws ApiError
     */
    public getVerificationToken(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/gpg_key_token',
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Verify a GPG key
     * @returns GPGKey GPGKey
     * @throws ApiError
     */
    public userVerifyGpgKey(): CancelablePromise<GPGKey> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/gpg_key_verify',
            errors: {
                404: `APINotFound is a not found empty response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * List the authenticated user's GPG keys
     * @returns GPGKey GPGKeyList
     * @throws ApiError
     */
    public userCurrentListGpgKeys({
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
    }): CancelablePromise<Array<GPGKey>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/gpg_keys',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Create a GPG key
     * @returns GPGKey GPGKey
     * @throws ApiError
     */
    public userCurrentPostGpgKey({
        form,
    }: {
        form?: CreateGPGKeyOption,
    }): CancelablePromise<GPGKey> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/gpg_keys',
            body: form,
            errors: {
                404: `APINotFound is a not found empty response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Get a GPG key
     * @returns GPGKey GPGKey
     * @throws ApiError
     */
    public userCurrentGetGpgKey({
        id,
    }: {
        /**
         * id of key to get
         */
        id: number,
    }): CancelablePromise<GPGKey> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/gpg_keys/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Remove a GPG key
     * @returns void
     * @throws ApiError
     */
    public userCurrentDeleteGpgKey({
        id,
    }: {
        /**
         * id of key to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/user/gpg_keys/{id}',
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
     * List the authenticated user's public keys
     * @returns PublicKey PublicKeyList
     * @throws ApiError
     */
    public userCurrentListKeys({
        fingerprint,
        page,
        limit,
    }: {
        /**
         * fingerprint of the key
         */
        fingerprint?: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<PublicKey>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/keys',
            query: {
                'fingerprint': fingerprint,
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Create a public key
     * @returns PublicKey PublicKey
     * @throws ApiError
     */
    public userCurrentPostKey({
        body,
    }: {
        body?: CreateKeyOption,
    }): CancelablePromise<PublicKey> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/keys',
            body: body,
            errors: {
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Get a public key
     * @returns PublicKey PublicKey
     * @throws ApiError
     */
    public userCurrentGetKey({
        id,
    }: {
        /**
         * id of key to get
         */
        id: number,
    }): CancelablePromise<PublicKey> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/keys/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Delete a public key
     * @returns void
     * @throws ApiError
     */
    public userCurrentDeleteKey({
        id,
    }: {
        /**
         * id of key to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/user/keys/{id}',
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
     * List the repos that the authenticated user owns
     * @returns Repository RepositoryList
     * @throws ApiError
     */
    public userCurrentListRepos({
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
    }): CancelablePromise<Array<Repository>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/repos',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Create a repository
     * @returns Repository Repository
     * @throws ApiError
     */
    public createCurrentUserRepo({
        body,
    }: {
        body?: CreateRepoOption,
    }): CancelablePromise<Repository> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/repos',
            body: body,
            errors: {
                409: `The repository with the same name already exists.`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Get user settings
     * @returns UserSettings UserSettings
     * @throws ApiError
     */
    public getUserSettings(): CancelablePromise<Array<UserSettings>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/settings',
        });
    }

    /**
     * Update user settings
     * @returns UserSettings UserSettings
     * @throws ApiError
     */
    public updateUserSettings({
        body,
    }: {
        body?: UserSettingsOptions,
    }): CancelablePromise<Array<UserSettings>> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/user/settings',
            body: body,
        });
    }

    /**
     * The repos that the authenticated user has starred
     * @returns Repository RepositoryList
     * @throws ApiError
     */
    public userCurrentListStarred({
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
    }): CancelablePromise<Array<Repository>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/starred',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Whether the authenticated is starring the repo
     * @returns void
     * @throws ApiError
     */
    public userCurrentCheckStarring({
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
            method: 'GET',
            url: '/user/starred/{owner}/{repo}',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Star the given repo
     * @returns void
     * @throws ApiError
     */
    public userCurrentPutStar({
        owner,
        repo,
    }: {
        /**
         * owner of the repo to star
         */
        owner: string,
        /**
         * name of the repo to star
         */
        repo: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/user/starred/{owner}/{repo}',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * Unstar the given repo
     * @returns void
     * @throws ApiError
     */
    public userCurrentDeleteStar({
        owner,
        repo,
    }: {
        /**
         * owner of the repo to unstar
         */
        owner: string,
        /**
         * name of the repo to unstar
         */
        repo: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/user/starred/{owner}/{repo}',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * Get list of all existing stopwatches
     * @returns StopWatch StopWatchList
     * @throws ApiError
     */
    public userGetStopWatches({
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
    }): CancelablePromise<Array<StopWatch>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/stopwatches',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * List repositories watched by the authenticated user
     * @returns Repository RepositoryList
     * @throws ApiError
     */
    public userCurrentListSubscriptions({
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
    }): CancelablePromise<Array<Repository>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/subscriptions',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * List all the teams a user belongs to
     * @returns Team TeamList
     * @throws ApiError
     */
    public userListTeams({
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
    }): CancelablePromise<Array<Team>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/teams',
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * List the current user's tracked times
     * @returns TrackedTime TrackedTimeList
     * @throws ApiError
     */
    public userCurrentTrackedTimes({
        page,
        limit,
        since,
        before,
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
         * Only show times updated after the given time. This is a timestamp in RFC 3339 format
         */
        since?: string,
        /**
         * Only show times updated before the given time. This is a timestamp in RFC 3339 format
         */
        before?: string,
    }): CancelablePromise<Array<TrackedTime>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/times',
            query: {
                'page': page,
                'limit': limit,
                'since': since,
                'before': before,
            },
        });
    }

    /**
     * Search for users
     * @returns any SearchResults of a successful search
     * @throws ApiError
     */
    public userSearch({
        q,
        uid,
        page,
        limit,
    }: {
        /**
         * keyword
         */
        q?: string,
        /**
         * ID of the user to search for
         */
        uid?: number,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<{
        data?: Array<User>;
        ok?: boolean;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/search',
            query: {
                'q': q,
                'uid': uid,
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Get a user
     * @returns User User
     * @throws ApiError
     */
    public userGet({
        username,
    }: {
        /**
         * username of user to get
         */
        username: string,
    }): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/{username}',
            path: {
                'username': username,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * List the given user's followers
     * @returns User UserList
     * @throws ApiError
     */
    public userListFollowers({
        username,
        page,
        limit,
    }: {
        /**
         * username of user
         */
        username: string,
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
            url: '/users/{username}/followers',
            path: {
                'username': username,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * List the users that the given user is following
     * @returns User UserList
     * @throws ApiError
     */
    public userListFollowing({
        username,
        page,
        limit,
    }: {
        /**
         * username of user
         */
        username: string,
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
            url: '/users/{username}/following',
            path: {
                'username': username,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Check if one user is following another user
     * @returns void
     * @throws ApiError
     */
    public userCheckFollowing({
        username,
        target,
    }: {
        /**
         * username of following user
         */
        username: string,
        /**
         * username of followed user
         */
        target: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/{username}/following/{target}',
            path: {
                'username': username,
                'target': target,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * List the given user's GPG keys
     * @returns GPGKey GPGKeyList
     * @throws ApiError
     */
    public userListGpgKeys({
        username,
        page,
        limit,
    }: {
        /**
         * username of user
         */
        username: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<GPGKey>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/{username}/gpg_keys',
            path: {
                'username': username,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Get a user's heatmap
     * @returns UserHeatmapData UserHeatmapData
     * @throws ApiError
     */
    public userGetHeatmapData({
        username,
    }: {
        /**
         * username of user to get
         */
        username: string,
    }): CancelablePromise<Array<UserHeatmapData>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/{username}/heatmap',
            path: {
                'username': username,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * List the given user's public keys
     * @returns PublicKey PublicKeyList
     * @throws ApiError
     */
    public userListKeys({
        username,
        fingerprint,
        page,
        limit,
    }: {
        /**
         * username of user
         */
        username: string,
        /**
         * fingerprint of the key
         */
        fingerprint?: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<PublicKey>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/{username}/keys',
            path: {
                'username': username,
            },
            query: {
                'fingerprint': fingerprint,
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * List the repos owned by the given user
     * @returns Repository RepositoryList
     * @throws ApiError
     */
    public userListRepos({
        username,
        page,
        limit,
    }: {
        /**
         * username of user
         */
        username: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Repository>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/{username}/repos',
            path: {
                'username': username,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * The repos that the given user has starred
     * @returns Repository RepositoryList
     * @throws ApiError
     */
    public userListStarred({
        username,
        page,
        limit,
    }: {
        /**
         * username of user
         */
        username: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Repository>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/{username}/starred',
            path: {
                'username': username,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * List the repositories watched by a user
     * @returns Repository RepositoryList
     * @throws ApiError
     */
    public userListSubscriptions({
        username,
        page,
        limit,
    }: {
        /**
         * username of the user
         */
        username: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Repository>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/{username}/subscriptions',
            path: {
                'username': username,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * List the authenticated user's access tokens
     * @returns AccessToken AccessTokenList represents a list of API access token.
     * @throws ApiError
     */
    public userGetTokens({
        username,
        page,
        limit,
    }: {
        /**
         * username of user
         */
        username: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<AccessToken>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/{username}/tokens',
            path: {
                'username': username,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Create an access token
     * @returns AccessToken AccessToken represents an API access token.
     * @throws ApiError
     */
    public userCreateToken({
        username,
        userCreateToken,
    }: {
        /**
         * username of user
         */
        username: string,
        userCreateToken?: CreateAccessTokenOption,
    }): CancelablePromise<AccessToken> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/users/{username}/tokens',
            path: {
                'username': username,
            },
            body: userCreateToken,
            errors: {
                400: `APIError is error format response`,
            },
        });
    }

    /**
     * delete an access token
     * @returns void
     * @throws ApiError
     */
    public userDeleteAccessToken({
        username,
        token,
    }: {
        /**
         * username of user
         */
        username: string,
        /**
         * token to be deleted, identified by ID and if not available by name
         */
        token: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/users/{username}/tokens/{token}',
            path: {
                'username': username,
                'token': token,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
                422: `APIError is error format response`,
            },
        });
    }

}
