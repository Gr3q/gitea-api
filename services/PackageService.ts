/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Package } from '../models/Package';
import type { PackageFile } from '../models/PackageFile';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PackageService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets all packages of an owner
     * @returns Package PackageList
     * @throws ApiError
     */
    public listPackages({
        owner,
        page,
        limit,
        type,
        q,
    }: {
        /**
         * owner of the packages
         */
        owner: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
        /**
         * package type filter
         */
        type?: 'composer' | 'conan' | 'container' | 'generic' | 'helm' | 'maven' | 'npm' | 'nuget' | 'pypi' | 'rubygems',
        /**
         * name filter
         */
        q?: string,
    }): CancelablePromise<Array<Package>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/packages/{owner}',
            path: {
                'owner': owner,
            },
            query: {
                'page': page,
                'limit': limit,
                'type': type,
                'q': q,
            },
        });
    }

    /**
     * Gets a package
     * @returns Package Package
     * @throws ApiError
     */
    public getPackage({
        owner,
        type,
        name,
        version,
    }: {
        /**
         * owner of the package
         */
        owner: string,
        /**
         * type of the package
         */
        type: string,
        /**
         * name of the package
         */
        name: string,
        /**
         * version of the package
         */
        version: string,
    }): CancelablePromise<Package> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/packages/{owner}/{type}/{name}/{version}',
            path: {
                'owner': owner,
                'type': type,
                'name': name,
                'version': version,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Delete a package
     * @returns void
     * @throws ApiError
     */
    public deletePackage({
        owner,
        type,
        name,
        version,
    }: {
        /**
         * owner of the package
         */
        owner: string,
        /**
         * type of the package
         */
        type: string,
        /**
         * name of the package
         */
        name: string,
        /**
         * version of the package
         */
        version: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/packages/{owner}/{type}/{name}/{version}',
            path: {
                'owner': owner,
                'type': type,
                'name': name,
                'version': version,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Gets all files of a package
     * @returns PackageFile PackageFileList
     * @throws ApiError
     */
    public listPackageFiles({
        owner,
        type,
        name,
        version,
    }: {
        /**
         * owner of the package
         */
        owner: string,
        /**
         * type of the package
         */
        type: string,
        /**
         * name of the package
         */
        name: string,
        /**
         * version of the package
         */
        version: string,
    }): CancelablePromise<Array<PackageFile>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/packages/{owner}/{type}/{name}/{version}/files',
            path: {
                'owner': owner,
                'type': type,
                'name': name,
                'version': version,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

}
