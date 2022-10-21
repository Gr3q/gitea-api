/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddCollaboratorOption } from '../models/AddCollaboratorOption';
import type { AnnotatedTag } from '../models/AnnotatedTag';
import type { Attachment } from '../models/Attachment';
import type { Branch } from '../models/Branch';
import type { BranchProtection } from '../models/BranchProtection';
import type { CombinedStatus } from '../models/CombinedStatus';
import type { Commit } from '../models/Commit';
import type { CommitStatus } from '../models/CommitStatus';
import type { ContentsResponse } from '../models/ContentsResponse';
import type { CreateBranchProtectionOption } from '../models/CreateBranchProtectionOption';
import type { CreateBranchRepoOption } from '../models/CreateBranchRepoOption';
import type { CreateFileOptions } from '../models/CreateFileOptions';
import type { CreateForkOption } from '../models/CreateForkOption';
import type { CreateHookOption } from '../models/CreateHookOption';
import type { CreateKeyOption } from '../models/CreateKeyOption';
import type { CreatePullRequestOption } from '../models/CreatePullRequestOption';
import type { CreatePullReviewOptions } from '../models/CreatePullReviewOptions';
import type { CreateReleaseOption } from '../models/CreateReleaseOption';
import type { CreateRepoOption } from '../models/CreateRepoOption';
import type { CreateStatusOption } from '../models/CreateStatusOption';
import type { CreateTagOption } from '../models/CreateTagOption';
import type { CreateWikiPageOptions } from '../models/CreateWikiPageOptions';
import type { DeleteFileOptions } from '../models/DeleteFileOptions';
import type { DeployKey } from '../models/DeployKey';
import type { DismissPullReviewOptions } from '../models/DismissPullReviewOptions';
import type { EditAttachmentOptions } from '../models/EditAttachmentOptions';
import type { EditBranchProtectionOption } from '../models/EditBranchProtectionOption';
import type { EditGitHookOption } from '../models/EditGitHookOption';
import type { EditHookOption } from '../models/EditHookOption';
import type { EditPullRequestOption } from '../models/EditPullRequestOption';
import type { EditReleaseOption } from '../models/EditReleaseOption';
import type { EditRepoOption } from '../models/EditRepoOption';
import type { FileDeleteResponse } from '../models/FileDeleteResponse';
import type { FileResponse } from '../models/FileResponse';
import type { GenerateRepoOption } from '../models/GenerateRepoOption';
import type { GitBlobResponse } from '../models/GitBlobResponse';
import type { GitHook } from '../models/GitHook';
import type { GitTreeResponse } from '../models/GitTreeResponse';
import type { Hook } from '../models/Hook';
import type { IssueTemplate } from '../models/IssueTemplate';
import type { MergePullRequestOption } from '../models/MergePullRequestOption';
import type { MigrateRepoOptions } from '../models/MigrateRepoOptions';
import type { Note } from '../models/Note';
import type { PullRequest } from '../models/PullRequest';
import type { PullReview } from '../models/PullReview';
import type { PullReviewComment } from '../models/PullReviewComment';
import type { PullReviewRequestOptions } from '../models/PullReviewRequestOptions';
import type { Reference } from '../models/Reference';
import type { Release } from '../models/Release';
import type { RepoCollaboratorPermission } from '../models/RepoCollaboratorPermission';
import type { Repository } from '../models/Repository';
import type { RepoTopicOptions } from '../models/RepoTopicOptions';
import type { SearchResults } from '../models/SearchResults';
import type { SubmitPullReviewOptions } from '../models/SubmitPullReviewOptions';
import type { Tag } from '../models/Tag';
import type { Team } from '../models/Team';
import type { TopicName } from '../models/TopicName';
import type { TopicResponse } from '../models/TopicResponse';
import type { TrackedTime } from '../models/TrackedTime';
import type { TransferRepoOption } from '../models/TransferRepoOption';
import type { UpdateFileOptions } from '../models/UpdateFileOptions';
import type { User } from '../models/User';
import type { WatchInfo } from '../models/WatchInfo';
import type { WikiCommitList } from '../models/WikiCommitList';
import type { WikiPage } from '../models/WikiPage';
import type { WikiPageMetaData } from '../models/WikiPageMetaData';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RepositoryService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Migrate a remote git repository
     * @returns Repository Repository
     * @throws ApiError
     */
    public repoMigrate({
        body,
    }: {
        body?: MigrateRepoOptions,
    }): CancelablePromise<Repository> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/migrate',
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                409: `The repository with the same name already exists.`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Search for repositories
     * @returns SearchResults SearchResults
     * @throws ApiError
     */
    public repoSearch({
        q,
        topic,
        includeDesc,
        uid,
        priorityOwnerId,
        teamId,
        starredBy,
        _private,
        isPrivate,
        template,
        archived,
        mode,
        exclusive,
        sort,
        order,
        page,
        limit,
    }: {
        /**
         * keyword
         */
        q?: string,
        /**
         * Limit search to repositories with keyword as topic
         */
        topic?: boolean,
        /**
         * include search of keyword within repository description
         */
        includeDesc?: boolean,
        /**
         * search only for repos that the user with the given id owns or contributes to
         */
        uid?: number,
        /**
         * repo owner to prioritize in the results
         */
        priorityOwnerId?: number,
        /**
         * search only for repos that belong to the given team id
         */
        teamId?: number,
        /**
         * search only for repos that the user with the given id has starred
         */
        starredBy?: number,
        /**
         * include private repositories this user has access to (defaults to true)
         */
        _private?: boolean,
        /**
         * show only pubic, private or all repositories (defaults to all)
         */
        isPrivate?: boolean,
        /**
         * include template repositories this user has access to (defaults to true)
         */
        template?: boolean,
        /**
         * show only archived, non-archived or all repositories (defaults to all)
         */
        archived?: boolean,
        /**
         * type of repository to search for. Supported values are "fork", "source", "mirror" and "collaborative"
         */
        mode?: string,
        /**
         * if `uid` is given, search only for repos that the user owns
         */
        exclusive?: boolean,
        /**
         * sort repos by attribute. Supported values are "alpha", "created", "updated", "size", and "id". Default is "alpha"
         */
        sort?: string,
        /**
         * sort order, either "asc" (ascending) or "desc" (descending). Default is "asc", ignored if "sort" is not specified.
         */
        order?: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<SearchResults> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/search',
            query: {
                'q': q,
                'topic': topic,
                'includeDesc': includeDesc,
                'uid': uid,
                'priority_owner_id': priorityOwnerId,
                'team_id': teamId,
                'starredBy': starredBy,
                'private': _private,
                'is_private': isPrivate,
                'template': template,
                'archived': archived,
                'mode': mode,
                'exclusive': exclusive,
                'sort': sort,
                'order': order,
                'page': page,
                'limit': limit,
            },
            errors: {
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Get a repository
     * @returns Repository Repository
     * @throws ApiError
     */
    public repoGet({
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
    }): CancelablePromise<Repository> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * Delete a repository
     * @returns void
     * @throws ApiError
     */
    public repoDelete({
        owner,
        repo,
    }: {
        /**
         * owner of the repo to delete
         */
        owner: string,
        /**
         * name of the repo to delete
         */
        repo: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}',
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
     * Edit a repository's properties. Only fields that are set will be changed.
     * @returns Repository Repository
     * @throws ApiError
     */
    public repoEdit({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo to edit
         */
        owner: string,
        /**
         * name of the repo to edit
         */
        repo: string,
        /**
         * Properties of a repo that you can edit
         */
        body?: EditRepoOption,
    }): CancelablePromise<Repository> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/repos/{owner}/{repo}',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Get an archive of a repository
     * @returns any success
     * @throws ApiError
     */
    public repoGetArchive({
        owner,
        repo,
        archive,
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
         * the git reference for download with attached archive format (e.g. master.zip)
         */
        archive: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/archive/{archive}',
            path: {
                'owner': owner,
                'repo': repo,
                'archive': archive,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Return all users that have write access and can be assigned to issues
     * @returns User UserList
     * @throws ApiError
     */
    public repoGetAssignees({
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
    }): CancelablePromise<Array<User>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/assignees',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * List branch protections for a repository
     * @returns BranchProtection BranchProtectionList
     * @throws ApiError
     */
    public repoListBranchProtection({
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
    }): CancelablePromise<Array<BranchProtection>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/branch_protections',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * Create a branch protections for a repository
     * @returns BranchProtection BranchProtection
     * @throws ApiError
     */
    public repoCreateBranchProtection({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body?: CreateBranchProtectionOption,
    }): CancelablePromise<BranchProtection> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/branch_protections',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Get a specific branch protection for the repository
     * @returns BranchProtection BranchProtection
     * @throws ApiError
     */
    public repoGetBranchProtection({
        owner,
        repo,
        name,
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
         * name of protected branch
         */
        name: string,
    }): CancelablePromise<BranchProtection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/branch_protections/{name}',
            path: {
                'owner': owner,
                'repo': repo,
                'name': name,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Delete a specific branch protection for the repository
     * @returns void
     * @throws ApiError
     */
    public repoDeleteBranchProtection({
        owner,
        repo,
        name,
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
         * name of protected branch
         */
        name: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/branch_protections/{name}',
            path: {
                'owner': owner,
                'repo': repo,
                'name': name,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Edit a branch protections for a repository. Only fields that are set will be changed
     * @returns BranchProtection BranchProtection
     * @throws ApiError
     */
    public repoEditBranchProtection({
        owner,
        repo,
        name,
        body,
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
         * name of protected branch
         */
        name: string,
        body?: EditBranchProtectionOption,
    }): CancelablePromise<BranchProtection> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/branch_protections/{name}',
            path: {
                'owner': owner,
                'repo': repo,
                'name': name,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found empty response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * List a repository's branches
     * @returns Branch BranchList
     * @throws ApiError
     */
    public repoListBranches({
        owner,
        repo,
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
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Branch>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/branches',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Create a branch
     * @returns Branch Branch
     * @throws ApiError
     */
    public repoCreateBranch({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body?: CreateBranchRepoOption,
    }): CancelablePromise<Branch> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/branches',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                404: `The old branch does not exist.`,
                409: `The branch with the same name already exists.`,
            },
        });
    }

    /**
     * Retrieve a specific branch from a repository, including its effective branch protection
     * @returns Branch Branch
     * @throws ApiError
     */
    public repoGetBranch({
        owner,
        repo,
        branch,
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
         * branch to get
         */
        branch: string,
    }): CancelablePromise<Branch> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/branches/{branch}',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Delete a specific branch from a repository
     * @returns void
     * @throws ApiError
     */
    public repoDeleteBranch({
        owner,
        repo,
        branch,
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
         * branch to delete
         */
        branch: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/branches/{branch}',
            path: {
                'owner': owner,
                'repo': repo,
                'branch': branch,
            },
            errors: {
                403: `APIError is error format response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * List a repository's collaborators
     * @returns User UserList
     * @throws ApiError
     */
    public repoListCollaborators({
        owner,
        repo,
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
            url: '/repos/{owner}/{repo}/collaborators',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Check if a user is a collaborator of a repository
     * @returns void
     * @throws ApiError
     */
    public repoCheckCollaborator({
        owner,
        repo,
        collaborator,
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
         * username of the collaborator
         */
        collaborator: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/collaborators/{collaborator}',
            path: {
                'owner': owner,
                'repo': repo,
                'collaborator': collaborator,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Add a collaborator to a repository
     * @returns void
     * @throws ApiError
     */
    public repoAddCollaborator({
        owner,
        repo,
        collaborator,
        body,
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
         * username of the collaborator to add
         */
        collaborator: string,
        body?: AddCollaboratorOption,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/repos/{owner}/{repo}/collaborators/{collaborator}',
            path: {
                'owner': owner,
                'repo': repo,
                'collaborator': collaborator,
            },
            body: body,
            errors: {
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Delete a collaborator from a repository
     * @returns void
     * @throws ApiError
     */
    public repoDeleteCollaborator({
        owner,
        repo,
        collaborator,
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
         * username of the collaborator to delete
         */
        collaborator: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/collaborators/{collaborator}',
            path: {
                'owner': owner,
                'repo': repo,
                'collaborator': collaborator,
            },
            errors: {
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Get repository permissions for a user
     * @returns RepoCollaboratorPermission RepoCollaboratorPermission
     * @throws ApiError
     */
    public repoGetRepoPermissions({
        owner,
        repo,
        collaborator,
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
         * username of the collaborator
         */
        collaborator: string,
    }): CancelablePromise<RepoCollaboratorPermission> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/collaborators/{collaborator}/permission',
            path: {
                'owner': owner,
                'repo': repo,
                'collaborator': collaborator,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Get a list of all commits from a repository
     * @returns Commit CommitList
     * @throws ApiError
     */
    public repoGetAllCommits({
        owner,
        repo,
        sha,
        path,
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
         * SHA or branch to start listing commits from (usually 'master')
         */
        sha?: string,
        /**
         * filepath of a file/dir
         */
        path?: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results (ignored if used with 'path')
         */
        limit?: number,
    }): CancelablePromise<Array<Commit>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/commits',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'sha': sha,
                'path': path,
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
                409: `EmptyRepository`,
            },
        });
    }

    /**
     * Get a commit's combined status, by branch/tag/commit reference
     * @returns CombinedStatus CombinedStatus
     * @throws ApiError
     */
    public repoGetCombinedStatusByRef({
        owner,
        repo,
        ref,
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
         * name of branch/tag/commit
         */
        ref: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<CombinedStatus> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/commits/{ref}/status',
            path: {
                'owner': owner,
                'repo': repo,
                'ref': ref,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                400: `APIError is error format response`,
            },
        });
    }

    /**
     * Get a commit's statuses, by branch/tag/commit reference
     * @returns CommitStatus CommitStatusList
     * @throws ApiError
     */
    public repoListStatusesByRef({
        owner,
        repo,
        ref,
        sort,
        state,
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
         * name of branch/tag/commit
         */
        ref: string,
        /**
         * type of sort
         */
        sort?: 'oldest' | 'recentupdate' | 'leastupdate' | 'leastindex' | 'highestindex',
        /**
         * type of state
         */
        state?: 'pending' | 'success' | 'error' | 'failure' | 'warning',
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<CommitStatus>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/commits/{ref}/statuses',
            path: {
                'owner': owner,
                'repo': repo,
                'ref': ref,
            },
            query: {
                'sort': sort,
                'state': state,
                'page': page,
                'limit': limit,
            },
            errors: {
                400: `APIError is error format response`,
            },
        });
    }

    /**
     * Gets the metadata of all the entries of the root dir
     * @returns ContentsResponse ContentsListResponse
     * @throws ApiError
     */
    public repoGetContentsList({
        owner,
        repo,
        ref,
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
         * The name of the commit/branch/tag. Default the repository’s default branch (usually master)
         */
        ref?: string,
    }): CancelablePromise<Array<ContentsResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/contents',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'ref': ref,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Gets the metadata and contents (if a file) of an entry in a repository, or a list of entries if a dir
     * @returns ContentsResponse ContentsResponse
     * @throws ApiError
     */
    public repoGetContents({
        owner,
        repo,
        filepath,
        ref,
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
         * path of the dir, file, symlink or submodule in the repo
         */
        filepath: string,
        /**
         * The name of the commit/branch/tag. Default the repository’s default branch (usually master)
         */
        ref?: string,
    }): CancelablePromise<ContentsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/contents/{filepath}',
            path: {
                'owner': owner,
                'repo': repo,
                'filepath': filepath,
            },
            query: {
                'ref': ref,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Update a file in a repository
     * @returns FileResponse FileResponse
     * @throws ApiError
     */
    public repoUpdateFile({
        owner,
        repo,
        filepath,
        body,
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
         * path of the file to update
         */
        filepath: string,
        body: UpdateFileOptions,
    }): CancelablePromise<FileResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/repos/{owner}/{repo}/contents/{filepath}',
            path: {
                'owner': owner,
                'repo': repo,
                'filepath': filepath,
            },
            body: body,
            errors: {
                403: `APIError is error format response`,
                404: `APINotFound is a not found empty response`,
                422: `APIError is error format response`,
            },
        });
    }

    /**
     * Create a file in a repository
     * @returns FileResponse FileResponse
     * @throws ApiError
     */
    public repoCreateFile({
        owner,
        repo,
        filepath,
        body,
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
         * path of the file to create
         */
        filepath: string,
        body: CreateFileOptions,
    }): CancelablePromise<FileResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/contents/{filepath}',
            path: {
                'owner': owner,
                'repo': repo,
                'filepath': filepath,
            },
            body: body,
            errors: {
                403: `APIError is error format response`,
                404: `APINotFound is a not found empty response`,
                422: `APIError is error format response`,
            },
        });
    }

    /**
     * Delete a file in a repository
     * @returns FileDeleteResponse FileDeleteResponse
     * @throws ApiError
     */
    public repoDeleteFile({
        owner,
        repo,
        filepath,
        body,
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
         * path of the file to delete
         */
        filepath: string,
        body: DeleteFileOptions,
    }): CancelablePromise<FileDeleteResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/contents/{filepath}',
            path: {
                'owner': owner,
                'repo': repo,
                'filepath': filepath,
            },
            body: body,
            errors: {
                400: `APIError is error format response`,
                403: `APIError is error format response`,
                404: `APIError is error format response`,
            },
        });
    }

    /**
     * Apply diff patch to repository
     * @returns FileResponse FileResponse
     * @throws ApiError
     */
    public repoApplyDiffPatch({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body: UpdateFileOptions,
    }): CancelablePromise<FileResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/diffpatch',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
        });
    }

    /**
     * Get the EditorConfig definitions of a file in a repository
     * @returns any success
     * @throws ApiError
     */
    public repoGetEditorConfig({
        owner,
        repo,
        filepath,
        ref,
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
         * filepath of file to get
         */
        filepath: string,
        /**
         * The name of the commit/branch/tag. Default the repository’s default branch (usually master)
         */
        ref?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/editorconfig/{filepath}',
            path: {
                'owner': owner,
                'repo': repo,
                'filepath': filepath,
            },
            query: {
                'ref': ref,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * List a repository's forks
     * @returns Repository RepositoryList
     * @throws ApiError
     */
    public listForks({
        owner,
        repo,
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
            url: '/repos/{owner}/{repo}/forks',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Fork a repository
     * @returns Repository Repository
     * @throws ApiError
     */
    public createFork({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo to fork
         */
        owner: string,
        /**
         * name of the repo to fork
         */
        repo: string,
        body?: CreateForkOption,
    }): CancelablePromise<Repository> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/forks',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                409: `The repository with the same name already exists.`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Gets the blob of a repository.
     * @returns GitBlobResponse GitBlobResponse
     * @throws ApiError
     */
    public getBlob({
        owner,
        repo,
        sha,
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
         * sha of the commit
         */
        sha: string,
    }): CancelablePromise<GitBlobResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/git/blobs/{sha}',
            path: {
                'owner': owner,
                'repo': repo,
                'sha': sha,
            },
            errors: {
                400: `APIError is error format response`,
            },
        });
    }

    /**
     * Get a single commit from a repository
     * @returns Commit Commit
     * @throws ApiError
     */
    public repoGetSingleCommit({
        owner,
        repo,
        sha,
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
         * a git ref or commit sha
         */
        sha: string,
    }): CancelablePromise<Commit> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/git/commits/{sha}',
            path: {
                'owner': owner,
                'repo': repo,
                'sha': sha,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Get a commit's diff or patch
     * @returns string APIString is a string response
     * @throws ApiError
     */
    public repoDownloadCommitDiffOrPatch({
        owner,
        repo,
        sha,
        diffType,
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
         * SHA of the commit to get
         */
        sha: string,
        /**
         * whether the output is diff or patch
         */
        diffType: 'diff' | 'patch',
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/git/commits/{sha}.{diffType}',
            path: {
                'owner': owner,
                'repo': repo,
                'sha': sha,
                'diffType': diffType,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Get a note corresponding to a single commit from a repository
     * @returns Note Note
     * @throws ApiError
     */
    public repoGetNote({
        owner,
        repo,
        sha,
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
         * a git ref or commit sha
         */
        sha: string,
    }): CancelablePromise<Note> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/git/notes/{sha}',
            path: {
                'owner': owner,
                'repo': repo,
                'sha': sha,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Get specified ref or filtered repository's refs
     * @returns Reference ReferenceList
     * @throws ApiError
     */
    public repoListAllGitRefs({
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
    }): CancelablePromise<Array<Reference>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/git/refs',
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
     * Get specified ref or filtered repository's refs
     * @returns Reference ReferenceList
     * @throws ApiError
     */
    public repoListGitRefs({
        owner,
        repo,
        ref,
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
         * part or full name of the ref
         */
        ref: string,
    }): CancelablePromise<Array<Reference>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/git/refs/{ref}',
            path: {
                'owner': owner,
                'repo': repo,
                'ref': ref,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Gets the tag object of an annotated tag (not lightweight tags)
     * @returns AnnotatedTag AnnotatedTag
     * @throws ApiError
     */
    public getAnnotatedTag({
        owner,
        repo,
        sha,
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
         * sha of the tag. The Git tags API only supports annotated tag objects, not lightweight tags.
         */
        sha: string,
    }): CancelablePromise<AnnotatedTag> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/git/tags/{sha}',
            path: {
                'owner': owner,
                'repo': repo,
                'sha': sha,
            },
            errors: {
                400: `APIError is error format response`,
            },
        });
    }

    /**
     * Gets the tree of a repository.
     * @returns GitTreeResponse GitTreeResponse
     * @throws ApiError
     */
    public getTree({
        owner,
        repo,
        sha,
        recursive,
        page,
        perPage,
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
         * sha of the commit
         */
        sha: string,
        /**
         * show all directories and files
         */
        recursive?: boolean,
        /**
         * page number; the 'truncated' field in the response will be true if there are still more items after this page, false if the last page
         */
        page?: number,
        /**
         * number of items per page
         */
        perPage?: number,
    }): CancelablePromise<GitTreeResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/git/trees/{sha}',
            path: {
                'owner': owner,
                'repo': repo,
                'sha': sha,
            },
            query: {
                'recursive': recursive,
                'page': page,
                'per_page': perPage,
            },
            errors: {
                400: `APIError is error format response`,
            },
        });
    }

    /**
     * List the hooks in a repository
     * @returns Hook HookList
     * @throws ApiError
     */
    public repoListHooks({
        owner,
        repo,
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
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Hook>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/hooks',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Create a hook
     * @returns Hook Hook
     * @throws ApiError
     */
    public repoCreateHook({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body?: CreateHookOption,
    }): CancelablePromise<Hook> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/hooks',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
        });
    }

    /**
     * List the Git hooks in a repository
     * @returns GitHook GitHookList
     * @throws ApiError
     */
    public repoListGitHooks({
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
    }): CancelablePromise<Array<GitHook>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/hooks/git',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * Get a Git hook
     * @returns GitHook GitHook
     * @throws ApiError
     */
    public repoGetGitHook({
        owner,
        repo,
        id,
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
         * id of the hook to get
         */
        id: string,
    }): CancelablePromise<GitHook> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/hooks/git/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Delete a Git hook in a repository
     * @returns void
     * @throws ApiError
     */
    public repoDeleteGitHook({
        owner,
        repo,
        id,
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
         * id of the hook to get
         */
        id: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/hooks/git/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Edit a Git hook in a repository
     * @returns GitHook GitHook
     * @throws ApiError
     */
    public repoEditGitHook({
        owner,
        repo,
        id,
        body,
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
         * id of the hook to get
         */
        id: string,
        body?: EditGitHookOption,
    }): CancelablePromise<GitHook> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/hooks/git/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Get a hook
     * @returns Hook Hook
     * @throws ApiError
     */
    public repoGetHook({
        owner,
        repo,
        id,
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
         * id of the hook to get
         */
        id: number,
    }): CancelablePromise<Hook> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/hooks/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Delete a hook in a repository
     * @returns void
     * @throws ApiError
     */
    public repoDeleteHook({
        owner,
        repo,
        id,
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
         * id of the hook to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/hooks/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Edit a hook in a repository
     * @returns Hook Hook
     * @throws ApiError
     */
    public repoEditHook({
        owner,
        repo,
        id,
        body,
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
         * index of the hook
         */
        id: number,
        body?: EditHookOption,
    }): CancelablePromise<Hook> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/hooks/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            body: body,
        });
    }

    /**
     * Test a push webhook
     * @returns void
     * @throws ApiError
     */
    public repoTestHook({
        owner,
        repo,
        id,
        ref,
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
         * id of the hook to test
         */
        id: number,
        /**
         * The name of the commit/branch/tag, indicates which commit will be loaded to the webhook payload.
         */
        ref?: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/hooks/{id}/tests',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            query: {
                'ref': ref,
            },
        });
    }

    /**
     * Get available issue templates for a repository
     * @returns IssueTemplate IssueTemplates
     * @throws ApiError
     */
    public repoGetIssueTemplates({
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
    }): CancelablePromise<Array<IssueTemplate>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/issue_templates',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * List a repository's keys
     * @returns DeployKey DeployKeyList
     * @throws ApiError
     */
    public repoListKeys({
        owner,
        repo,
        keyId,
        fingerprint,
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
         * the key_id to search for
         */
        keyId?: number,
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
    }): CancelablePromise<Array<DeployKey>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/keys',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'key_id': keyId,
                'fingerprint': fingerprint,
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Add a key to a repository
     * @returns DeployKey DeployKey
     * @throws ApiError
     */
    public repoCreateKey({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body?: CreateKeyOption,
    }): CancelablePromise<DeployKey> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/keys',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Get a repository's key by id
     * @returns DeployKey DeployKey
     * @throws ApiError
     */
    public repoGetKey({
        owner,
        repo,
        id,
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
         * id of the key to get
         */
        id: number,
    }): CancelablePromise<DeployKey> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/keys/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
        });
    }

    /**
     * Delete a key from a repository
     * @returns void
     * @throws ApiError
     */
    public repoDeleteKey({
        owner,
        repo,
        id,
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
         * id of the key to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/keys/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }

    /**
     * Get languages and number of bytes of code written
     * @returns number LanguageStatistics
     * @throws ApiError
     */
    public repoGetLanguages({
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
    }): CancelablePromise<Record<string, number>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/languages',
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
     * Get a file or it's LFS object from a repository
     * @returns any Returns raw file content.
     * @throws ApiError
     */
    public repoGetRawFileOrLfs({
        owner,
        repo,
        filepath,
        ref,
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
         * filepath of the file to get
         */
        filepath: string,
        /**
         * The name of the commit/branch/tag. Default the repository’s default branch (usually master)
         */
        ref?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/media/{filepath}',
            path: {
                'owner': owner,
                'repo': repo,
                'filepath': filepath,
            },
            query: {
                'ref': ref,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Sync a mirrored repository
     * @returns any APIEmpty is an empty response
     * @throws ApiError
     */
    public repoMirrorSync({
        owner,
        repo,
    }: {
        /**
         * owner of the repo to sync
         */
        owner: string,
        /**
         * name of the repo to sync
         */
        repo: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/mirror-sync',
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
     * List a repo's pull requests
     * @returns PullRequest PullRequestList
     * @throws ApiError
     */
    public repoListPullRequests({
        owner,
        repo,
        state,
        sort,
        milestone,
        labels,
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
         * State of pull request: open or closed (optional)
         */
        state?: 'closed' | 'open' | 'all',
        /**
         * Type of sort
         */
        sort?: 'oldest' | 'recentupdate' | 'leastupdate' | 'mostcomment' | 'leastcomment' | 'priority',
        /**
         * ID of the milestone
         */
        milestone?: number,
        /**
         * Label IDs
         */
        labels?: Array<number>,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<PullRequest>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'state': state,
                'sort': sort,
                'milestone': milestone,
                'labels': labels,
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Create a pull request
     * @returns PullRequest PullRequest
     * @throws ApiError
     */
    public repoCreatePullRequest({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body?: CreatePullRequestOption,
    }): CancelablePromise<PullRequest> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                409: `APIError is error format response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Get a pull request
     * @returns PullRequest PullRequest
     * @throws ApiError
     */
    public repoGetPullRequest({
        owner,
        repo,
        index,
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
         * index of the pull request to get
         */
        index: number,
    }): CancelablePromise<PullRequest> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{index}',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Update a pull request. If using deadline only the date will be taken into account, and time of day ignored.
     * @returns PullRequest PullRequest
     * @throws ApiError
     */
    public repoEditPullRequest({
        owner,
        repo,
        index,
        body,
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
         * index of the pull request to edit
         */
        index: number,
        body?: EditPullRequestOption,
    }): CancelablePromise<PullRequest> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/pulls/{index}',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                409: `APIError is error format response`,
                412: `APIError is error format response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Get a pull request diff or patch
     * @returns string APIString is a string response
     * @throws ApiError
     */
    public repoDownloadPullDiffOrPatch({
        owner,
        repo,
        index,
        diffType,
        binary,
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
         * index of the pull request to get
         */
        index: number,
        /**
         * whether the output is diff or patch
         */
        diffType: 'diff' | 'patch',
        /**
         * whether to include binary file changes. if true, the diff is applicable with `git apply`
         */
        binary?: boolean,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{index}.{diffType}',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
                'diffType': diffType,
            },
            query: {
                'binary': binary,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Get commits for a pull request
     * @returns Commit CommitList
     * @throws ApiError
     */
    public repoGetPullRequestCommits({
        owner,
        repo,
        index,
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
         * index of the pull request to get
         */
        index: number,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Commit>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{index}/commits',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Check if a pull request has been merged
     * @returns void
     * @throws ApiError
     */
    public repoPullRequestIsMerged({
        owner,
        repo,
        index,
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
         * index of the pull request
         */
        index: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{index}/merge',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            errors: {
                404: `pull request has not been merged`,
            },
        });
    }

    /**
     * Merge a pull request
     * @returns any APIEmpty is an empty response
     * @throws ApiError
     */
    public repoMergePullRequest({
        owner,
        repo,
        index,
        body,
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
         * index of the pull request to merge
         */
        index: number,
        body?: MergePullRequestOption,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls/{index}/merge',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            body: body,
            errors: {
                405: `APIEmpty is an empty response`,
                409: `APIError is error format response`,
            },
        });
    }

    /**
     * Cancel the scheduled auto merge for the given pull request
     * @returns void
     * @throws ApiError
     */
    public repoCancelScheduledAutoMerge({
        owner,
        repo,
        index,
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
         * index of the pull request to merge
         */
        index: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/pulls/{index}/merge',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * create review requests for a pull request
     * @returns PullReview PullReviewList
     * @throws ApiError
     */
    public repoCreatePullReviewRequests({
        owner,
        repo,
        index,
        body,
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
         * index of the pull request
         */
        index: number,
        body: PullReviewRequestOptions,
    }): CancelablePromise<Array<PullReview>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls/{index}/requested_reviewers',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found empty response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * cancel review requests for a pull request
     * @returns void
     * @throws ApiError
     */
    public repoDeletePullReviewRequests({
        owner,
        repo,
        index,
        body,
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
         * index of the pull request
         */
        index: number,
        body: PullReviewRequestOptions,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/pulls/{index}/requested_reviewers',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found empty response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * List all reviews for a pull request
     * @returns PullReview PullReviewList
     * @throws ApiError
     */
    public repoListPullReviews({
        owner,
        repo,
        index,
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
         * index of the pull request
         */
        index: number,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<PullReview>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{index}/reviews',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Create a review to an pull request
     * @returns PullReview PullReview
     * @throws ApiError
     */
    public repoCreatePullReview({
        owner,
        repo,
        index,
        body,
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
         * index of the pull request
         */
        index: number,
        body: CreatePullReviewOptions,
    }): CancelablePromise<PullReview> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls/{index}/reviews',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found empty response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Get a specific review for a pull request
     * @returns PullReview PullReview
     * @throws ApiError
     */
    public repoGetPullReview({
        owner,
        repo,
        index,
        id,
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
         * index of the pull request
         */
        index: number,
        /**
         * id of the review
         */
        id: number,
    }): CancelablePromise<PullReview> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{index}/reviews/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Submit a pending review to an pull request
     * @returns PullReview PullReview
     * @throws ApiError
     */
    public repoSubmitPullReview({
        owner,
        repo,
        index,
        id,
        body,
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
         * index of the pull request
         */
        index: number,
        /**
         * id of the review
         */
        id: number,
        body: SubmitPullReviewOptions,
    }): CancelablePromise<PullReview> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls/{index}/reviews/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
                'id': id,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found empty response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Delete a specific review from a pull request
     * @returns void
     * @throws ApiError
     */
    public repoDeletePullReview({
        owner,
        repo,
        index,
        id,
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
         * index of the pull request
         */
        index: number,
        /**
         * id of the review
         */
        id: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/pulls/{index}/reviews/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
                'id': id,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Get a specific review for a pull request
     * @returns PullReviewComment PullCommentList
     * @throws ApiError
     */
    public repoGetPullReviewComments({
        owner,
        repo,
        index,
        id,
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
         * index of the pull request
         */
        index: number,
        /**
         * id of the review
         */
        id: number,
    }): CancelablePromise<Array<PullReviewComment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/pulls/{index}/reviews/{id}/comments',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Dismiss a review for a pull request
     * @returns PullReview PullReview
     * @throws ApiError
     */
    public repoDismissPullReview({
        owner,
        repo,
        index,
        id,
        body,
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
         * index of the pull request
         */
        index: number,
        /**
         * id of the review
         */
        id: number,
        body: DismissPullReviewOptions,
    }): CancelablePromise<PullReview> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls/{index}/reviews/{id}/dismissals',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
                'id': id,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Cancel to dismiss a review for a pull request
     * @returns PullReview PullReview
     * @throws ApiError
     */
    public repoUnDismissPullReview({
        owner,
        repo,
        index,
        id,
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
         * index of the pull request
         */
        index: number,
        /**
         * id of the review
         */
        id: number,
    }): CancelablePromise<PullReview> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls/{index}/reviews/{id}/undismissals',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
                'id': id,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Merge PR's baseBranch into headBranch
     * @returns any APIEmpty is an empty response
     * @throws ApiError
     */
    public repoUpdatePullRequest({
        owner,
        repo,
        index,
        style,
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
         * index of the pull request to get
         */
        index: number,
        /**
         * how to update pull request
         */
        style?: 'merge' | 'rebase',
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/pulls/{index}/update',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            query: {
                'style': style,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
                409: `APIError is error format response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Get a file from a repository
     * @returns any Returns raw file content.
     * @throws ApiError
     */
    public repoGetRawFile({
        owner,
        repo,
        filepath,
        ref,
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
         * filepath of the file to get
         */
        filepath: string,
        /**
         * The name of the commit/branch/tag. Default the repository’s default branch (usually master)
         */
        ref?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/raw/{filepath}',
            path: {
                'owner': owner,
                'repo': repo,
                'filepath': filepath,
            },
            query: {
                'ref': ref,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * List a repo's releases
     * @returns Release ReleaseList
     * @throws ApiError
     */
    public repoListReleases({
        owner,
        repo,
        draft,
        preRelease,
        perPage,
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
         * filter (exclude / include) drafts, if you dont have repo write access none will show
         */
        draft?: boolean,
        /**
         * filter (exclude / include) pre-releases
         */
        preRelease?: boolean,
        /**
         * page size of results, deprecated - use limit
         */
        perPage?: number,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Release>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/releases',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'draft': draft,
                'pre-release': preRelease,
                'per_page': perPage,
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Create a release
     * @returns Release Release
     * @throws ApiError
     */
    public repoCreateRelease({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body?: CreateReleaseOption,
    }): CancelablePromise<Release> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/releases',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found empty response`,
                409: `APIError is error format response`,
            },
        });
    }

    /**
     * Get a release by tag name
     * @returns Release Release
     * @throws ApiError
     */
    public repoGetReleaseByTag({
        owner,
        repo,
        tag,
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
         * tag name of the release to get
         */
        tag: string,
    }): CancelablePromise<Release> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/releases/tags/{tag}',
            path: {
                'owner': owner,
                'repo': repo,
                'tag': tag,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Delete a release by tag name
     * @returns void
     * @throws ApiError
     */
    public repoDeleteReleaseByTag({
        owner,
        repo,
        tag,
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
         * tag name of the release to delete
         */
        tag: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/releases/tags/{tag}',
            path: {
                'owner': owner,
                'repo': repo,
                'tag': tag,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
                405: `APIEmpty is an empty response`,
            },
        });
    }

    /**
     * Get a release
     * @returns Release Release
     * @throws ApiError
     */
    public repoGetRelease({
        owner,
        repo,
        id,
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
         * id of the release to get
         */
        id: number,
    }): CancelablePromise<Release> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/releases/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Delete a release
     * @returns void
     * @throws ApiError
     */
    public repoDeleteRelease({
        owner,
        repo,
        id,
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
         * id of the release to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/releases/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
                405: `APIEmpty is an empty response`,
            },
        });
    }

    /**
     * Update a release
     * @returns Release Release
     * @throws ApiError
     */
    public repoEditRelease({
        owner,
        repo,
        id,
        body,
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
         * id of the release to edit
         */
        id: number,
        body?: EditReleaseOption,
    }): CancelablePromise<Release> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/releases/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * List release's attachments
     * @returns Attachment AttachmentList
     * @throws ApiError
     */
    public repoListReleaseAttachments({
        owner,
        repo,
        id,
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
         * id of the release
         */
        id: number,
    }): CancelablePromise<Array<Attachment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/releases/{id}/assets',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
        });
    }

    /**
     * Create a release attachment
     * @returns Attachment Attachment
     * @throws ApiError
     */
    public repoCreateReleaseAttachment({
        owner,
        repo,
        id,
        attachment,
        name,
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
         * id of the release
         */
        id: number,
        /**
         * attachment to upload
         */
        attachment: Blob,
        /**
         * name of the attachment
         */
        name?: string,
    }): CancelablePromise<Attachment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/releases/{id}/assets',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            query: {
                'name': name,
            },
            formData: {
                'attachment': attachment,
            },
            errors: {
                400: `APIError is error format response`,
            },
        });
    }

    /**
     * Get a release attachment
     * @returns Attachment Attachment
     * @throws ApiError
     */
    public repoGetReleaseAttachment({
        owner,
        repo,
        id,
        attachmentId,
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
         * id of the release
         */
        id: number,
        /**
         * id of the attachment to get
         */
        attachmentId: number,
    }): CancelablePromise<Attachment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/releases/{id}/assets/{attachment_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
                'attachment_id': attachmentId,
            },
        });
    }

    /**
     * Delete a release attachment
     * @returns void
     * @throws ApiError
     */
    public repoDeleteReleaseAttachment({
        owner,
        repo,
        id,
        attachmentId,
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
         * id of the release
         */
        id: number,
        /**
         * id of the attachment to delete
         */
        attachmentId: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/releases/{id}/assets/{attachment_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
                'attachment_id': attachmentId,
            },
        });
    }

    /**
     * Edit a release attachment
     * @returns Attachment Attachment
     * @throws ApiError
     */
    public repoEditReleaseAttachment({
        owner,
        repo,
        id,
        attachmentId,
        body,
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
         * id of the release
         */
        id: number,
        /**
         * id of the attachment to edit
         */
        attachmentId: number,
        body?: EditAttachmentOptions,
    }): CancelablePromise<Attachment> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/releases/{id}/assets/{attachment_id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
                'attachment_id': attachmentId,
            },
            body: body,
        });
    }

    /**
     * Return all users that can be requested to review in this repo
     * @returns User UserList
     * @throws ApiError
     */
    public repoGetReviewers({
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
    }): CancelablePromise<Array<User>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/reviewers',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * Get signing-key.gpg for given repository
     * @returns string GPG armored public key
     * @throws ApiError
     */
    public repoSigningKey({
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
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/signing-key.gpg',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * List a repo's stargazers
     * @returns User UserList
     * @throws ApiError
     */
    public repoListStargazers({
        owner,
        repo,
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
            url: '/repos/{owner}/{repo}/stargazers',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Get a commit's statuses
     * @returns CommitStatus CommitStatusList
     * @throws ApiError
     */
    public repoListStatuses({
        owner,
        repo,
        sha,
        sort,
        state,
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
         * sha of the commit
         */
        sha: string,
        /**
         * type of sort
         */
        sort?: 'oldest' | 'recentupdate' | 'leastupdate' | 'leastindex' | 'highestindex',
        /**
         * type of state
         */
        state?: 'pending' | 'success' | 'error' | 'failure' | 'warning',
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<CommitStatus>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/statuses/{sha}',
            path: {
                'owner': owner,
                'repo': repo,
                'sha': sha,
            },
            query: {
                'sort': sort,
                'state': state,
                'page': page,
                'limit': limit,
            },
            errors: {
                400: `APIError is error format response`,
            },
        });
    }

    /**
     * Create a commit status
     * @returns CommitStatus CommitStatus
     * @throws ApiError
     */
    public repoCreateStatus({
        owner,
        repo,
        sha,
        body,
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
         * sha of the commit
         */
        sha: string,
        body?: CreateStatusOption,
    }): CancelablePromise<CommitStatus> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/statuses/{sha}',
            path: {
                'owner': owner,
                'repo': repo,
                'sha': sha,
            },
            body: body,
            errors: {
                400: `APIError is error format response`,
            },
        });
    }

    /**
     * List a repo's watchers
     * @returns User UserList
     * @throws ApiError
     */
    public repoListSubscribers({
        owner,
        repo,
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
            url: '/repos/{owner}/{repo}/subscribers',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Check if the current user is watching a repo
     * @returns WatchInfo WatchInfo
     * @throws ApiError
     */
    public userCurrentCheckSubscription({
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
    }): CancelablePromise<WatchInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/subscription',
            path: {
                'owner': owner,
                'repo': repo,
            },
            errors: {
                404: `User is not watching this repo or repo do not exist`,
            },
        });
    }

    /**
     * Watch a repo
     * @returns WatchInfo WatchInfo
     * @throws ApiError
     */
    public userCurrentPutSubscription({
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
    }): CancelablePromise<WatchInfo> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/repos/{owner}/{repo}/subscription',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * Unwatch a repo
     * @returns void
     * @throws ApiError
     */
    public userCurrentDeleteSubscription({
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
            url: '/repos/{owner}/{repo}/subscription',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * List a repository's tags
     * @returns Tag TagList
     * @throws ApiError
     */
    public repoListTags({
        owner,
        repo,
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
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results, default maximum page size is 50
         */
        limit?: number,
    }): CancelablePromise<Array<Tag>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/tags',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Create a new git tag in a repository
     * @returns Tag Tag
     * @throws ApiError
     */
    public repoCreateTag({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body?: CreateTagOption,
    }): CancelablePromise<Tag> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/tags',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                404: `APINotFound is a not found empty response`,
                405: `APIEmpty is an empty response`,
                409: `APIConflict is a conflict empty response`,
            },
        });
    }

    /**
     * Get the tag of a repository by tag name
     * @returns Tag Tag
     * @throws ApiError
     */
    public repoGetTag({
        owner,
        repo,
        tag,
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
         * name of tag
         */
        tag: string,
    }): CancelablePromise<Tag> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/tags/{tag}',
            path: {
                'owner': owner,
                'repo': repo,
                'tag': tag,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Delete a repository's tag by name
     * @returns void
     * @throws ApiError
     */
    public repoDeleteTag({
        owner,
        repo,
        tag,
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
         * name of tag to delete
         */
        tag: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/tags/{tag}',
            path: {
                'owner': owner,
                'repo': repo,
                'tag': tag,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
                405: `APIEmpty is an empty response`,
                409: `APIConflict is a conflict empty response`,
            },
        });
    }

    /**
     * List a repository's teams
     * @returns Team TeamList
     * @throws ApiError
     */
    public repoListTeams({
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
    }): CancelablePromise<Array<Team>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/teams',
            path: {
                'owner': owner,
                'repo': repo,
            },
        });
    }

    /**
     * Check if a team is assigned to a repository
     * @returns Team Team
     * @throws ApiError
     */
    public repoCheckTeam({
        owner,
        repo,
        team,
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
         * team name
         */
        team: string,
    }): CancelablePromise<Team> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/teams/{team}',
            path: {
                'owner': owner,
                'repo': repo,
                'team': team,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
                405: `APIError is error format response`,
            },
        });
    }

    /**
     * Add a team to a repository
     * @returns void
     * @throws ApiError
     */
    public repoAddTeam({
        owner,
        repo,
        team,
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
         * team name
         */
        team: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/repos/{owner}/{repo}/teams/{team}',
            path: {
                'owner': owner,
                'repo': repo,
                'team': team,
            },
            errors: {
                405: `APIError is error format response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Delete a team from a repository
     * @returns void
     * @throws ApiError
     */
    public repoDeleteTeam({
        owner,
        repo,
        team,
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
         * team name
         */
        team: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/teams/{team}',
            path: {
                'owner': owner,
                'repo': repo,
                'team': team,
            },
            errors: {
                405: `APIError is error format response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * List a repo's tracked times
     * @returns TrackedTime TrackedTimeList
     * @throws ApiError
     */
    public repoTrackedTimes({
        owner,
        repo,
        user,
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
         * optional filter by user (available for issue managers)
         */
        user?: string,
        /**
         * Only show times updated after the given time. This is a timestamp in RFC 3339 format
         */
        since?: string,
        /**
         * Only show times updated before the given time. This is a timestamp in RFC 3339 format
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
    }): CancelablePromise<Array<TrackedTime>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/times',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'user': user,
                'since': since,
                'before': before,
                'page': page,
                'limit': limit,
            },
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }

    /**
     * @deprecated
     * List a user's tracked times in a repo
     * @returns TrackedTime TrackedTimeList
     * @throws ApiError
     */
    public userTrackedTimes({
        owner,
        repo,
        user,
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
         * username of user
         */
        user: string,
    }): CancelablePromise<Array<TrackedTime>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/times/{user}',
            path: {
                'owner': owner,
                'repo': repo,
                'user': user,
            },
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }

    /**
     * Get list of topics that a repository has
     * @returns TopicName TopicNames
     * @throws ApiError
     */
    public repoListTopics({
        owner,
        repo,
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
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<TopicName> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/topics',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Replace list of topics for a repository
     * @returns void
     * @throws ApiError
     */
    public repoUpdateTopics({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body?: RepoTopicOptions,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/repos/{owner}/{repo}/topics',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                422: `APIInvalidTopicsError is error format response to invalid topics`,
            },
        });
    }

    /**
     * Add a topic to a repository
     * @returns void
     * @throws ApiError
     */
    public repoAddTopic({
        owner,
        repo,
        topic,
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
         * name of the topic to add
         */
        topic: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/repos/{owner}/{repo}/topics/{topic}',
            path: {
                'owner': owner,
                'repo': repo,
                'topic': topic,
            },
            errors: {
                422: `APIInvalidTopicsError is error format response to invalid topics`,
            },
        });
    }

    /**
     * Delete a topic from a repository
     * @returns void
     * @throws ApiError
     */
    public repoDeleteTopic({
        owner,
        repo,
        topic,
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
         * name of the topic to delete
         */
        topic: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/topics/{topic}',
            path: {
                'owner': owner,
                'repo': repo,
                'topic': topic,
            },
            errors: {
                422: `APIInvalidTopicsError is error format response to invalid topics`,
            },
        });
    }

    /**
     * Transfer a repo ownership
     * @returns Repository Repository
     * @throws ApiError
     */
    public repoTransfer({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo to transfer
         */
        owner: string,
        /**
         * name of the repo to transfer
         */
        repo: string,
        /**
         * Transfer Options
         */
        body: TransferRepoOption,
    }): CancelablePromise<Repository> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/transfer',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Accept a repo transfer
     * @returns Repository Repository
     * @throws ApiError
     */
    public acceptRepoTransfer({
        owner,
        repo,
    }: {
        /**
         * owner of the repo to transfer
         */
        owner: string,
        /**
         * name of the repo to transfer
         */
        repo: string,
    }): CancelablePromise<Repository> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/transfer/accept',
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
     * Reject a repo transfer
     * @returns Repository Repository
     * @throws ApiError
     */
    public rejectRepoTransfer({
        owner,
        repo,
    }: {
        /**
         * owner of the repo to transfer
         */
        owner: string,
        /**
         * name of the repo to transfer
         */
        repo: string,
    }): CancelablePromise<Repository> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/transfer/reject',
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
     * Create a wiki page
     * @returns WikiPage WikiPage
     * @throws ApiError
     */
    public repoCreateWikiPage({
        owner,
        repo,
        body,
    }: {
        /**
         * owner of the repo
         */
        owner: string,
        /**
         * name of the repo
         */
        repo: string,
        body?: CreateWikiPageOptions,
    }): CancelablePromise<WikiPage> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/wiki/new',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }

    /**
     * Get a wiki page
     * @returns WikiPage WikiPage
     * @throws ApiError
     */
    public repoGetWikiPage({
        owner,
        repo,
        pageName,
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
         * name of the page
         */
        pageName: string,
    }): CancelablePromise<WikiPage> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/wiki/page/{pageName}',
            path: {
                'owner': owner,
                'repo': repo,
                'pageName': pageName,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Delete a wiki page
     * @returns void
     * @throws ApiError
     */
    public repoDeleteWikiPage({
        owner,
        repo,
        pageName,
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
         * name of the page
         */
        pageName: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/wiki/page/{pageName}',
            path: {
                'owner': owner,
                'repo': repo,
                'pageName': pageName,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Edit a wiki page
     * @returns WikiPage WikiPage
     * @throws ApiError
     */
    public repoEditWikiPage({
        owner,
        repo,
        pageName,
        body,
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
         * name of the page
         */
        pageName: string,
        body?: CreateWikiPageOptions,
    }): CancelablePromise<WikiPage> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/wiki/page/{pageName}',
            path: {
                'owner': owner,
                'repo': repo,
                'pageName': pageName,
            },
            body: body,
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }

    /**
     * Get all wiki pages
     * @returns WikiPageMetaData WikiPageList
     * @throws ApiError
     */
    public repoGetWikiPages({
        owner,
        repo,
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
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<WikiPageMetaData>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/wiki/pages',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Get revisions of a wiki page
     * @returns WikiCommitList WikiCommitList
     * @throws ApiError
     */
    public repoGetWikiPageRevisions({
        owner,
        repo,
        pageName,
        page,
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
         * name of the page
         */
        pageName: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
    }): CancelablePromise<WikiCommitList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/wiki/revisions/{pageName}',
            path: {
                'owner': owner,
                'repo': repo,
                'pageName': pageName,
            },
            query: {
                'page': page,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Create a repository using a template
     * @returns Repository Repository
     * @throws ApiError
     */
    public generateRepo({
        templateOwner,
        templateRepo,
        body,
    }: {
        /**
         * name of the template repository owner
         */
        templateOwner: string,
        /**
         * name of the template repository
         */
        templateRepo: string,
        body?: GenerateRepoOption,
    }): CancelablePromise<Repository> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{template_owner}/{template_repo}/generate',
            path: {
                'template_owner': templateOwner,
                'template_repo': templateRepo,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
                409: `The repository with the same name already exists.`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Get a repository by id
     * @returns Repository Repository
     * @throws ApiError
     */
    public repoGetById({
        id,
    }: {
        /**
         * id of the repo to get
         */
        id: number,
    }): CancelablePromise<Repository> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repositories/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * search topics via keyword
     * @returns TopicResponse TopicListResponse
     * @throws ApiError
     */
    public topicSearch({
        q,
        page,
        limit,
    }: {
        /**
         * keywords to search
         */
        q: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<TopicResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/topics/search',
            query: {
                'q': q,
                'page': page,
                'limit': limit,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
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

}
