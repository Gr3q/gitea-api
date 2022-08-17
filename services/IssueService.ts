/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddTimeOption } from '../models/AddTimeOption';
import type { Comment } from '../models/Comment';
import type { CreateIssueCommentOption } from '../models/CreateIssueCommentOption';
import type { CreateIssueOption } from '../models/CreateIssueOption';
import type { CreateLabelOption } from '../models/CreateLabelOption';
import type { CreateMilestoneOption } from '../models/CreateMilestoneOption';
import type { EditDeadlineOption } from '../models/EditDeadlineOption';
import type { EditIssueCommentOption } from '../models/EditIssueCommentOption';
import type { EditIssueOption } from '../models/EditIssueOption';
import type { EditLabelOption } from '../models/EditLabelOption';
import type { EditMilestoneOption } from '../models/EditMilestoneOption';
import type { EditReactionOption } from '../models/EditReactionOption';
import type { Issue } from '../models/Issue';
import type { IssueDeadline } from '../models/IssueDeadline';
import type { IssueLabelsOption } from '../models/IssueLabelsOption';
import type { Label } from '../models/Label';
import type { Milestone } from '../models/Milestone';
import type { Reaction } from '../models/Reaction';
import type { TimelineComment } from '../models/TimelineComment';
import type { TrackedTime } from '../models/TrackedTime';
import type { User } from '../models/User';
import type { WatchInfo } from '../models/WatchInfo';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IssueService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Search for issues across the repositories that the user has access to
     * @returns Issue IssueList
     * @throws ApiError
     */
    public issueSearchIssues({
        state,
        labels,
        milestones,
        q,
        priorityRepoId,
        type,
        since,
        before,
        assigned,
        created,
        mentioned,
        reviewRequested,
        owner,
        team,
        page,
        limit,
    }: {
        /**
         * whether issue is open or closed
         */
        state?: string,
        /**
         * comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded
         */
        labels?: string,
        /**
         * comma separated list of milestone names. Fetch only issues that have any of this milestones. Non existent are discarded
         */
        milestones?: string,
        /**
         * search string
         */
        q?: string,
        /**
         * repository to prioritize in the results
         */
        priorityRepoId?: number,
        /**
         * filter by type (issues / pulls) if set
         */
        type?: string,
        /**
         * Only show notifications updated after the given time. This is a timestamp in RFC 3339 format
         */
        since?: string,
        /**
         * Only show notifications updated before the given time. This is a timestamp in RFC 3339 format
         */
        before?: string,
        /**
         * filter (issues / pulls) assigned to you, default is false
         */
        assigned?: boolean,
        /**
         * filter (issues / pulls) created by you, default is false
         */
        created?: boolean,
        /**
         * filter (issues / pulls) mentioning you, default is false
         */
        mentioned?: boolean,
        /**
         * filter pulls requesting your review, default is false
         */
        reviewRequested?: boolean,
        /**
         * filter by owner
         */
        owner?: string,
        /**
         * filter by team (requires organization owner parameter to be provided)
         */
        team?: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Issue>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/issues/search',
            query: {
                'state': state,
                'labels': labels,
                'milestones': milestones,
                'q': q,
                'priority_repo_id': priorityRepoId,
                'type': type,
                'since': since,
                'before': before,
                'assigned': assigned,
                'created': created,
                'mentioned': mentioned,
                'review_requested': reviewRequested,
                'owner': owner,
                'team': team,
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * List a repository's issues
     * @returns Issue IssueList
     * @throws ApiError
     */
    public issueListIssues({
        owner,
        repo,
        state,
        labels,
        q,
        type,
        milestones,
        since,
        before,
        createdBy,
        assignedBy,
        mentionedBy,
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
         * whether issue is open or closed
         */
        state?: 'closed' | 'open' | 'all',
        /**
         * comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded
         */
        labels?: string,
        /**
         * search string
         */
        q?: string,
        /**
         * filter by type (issues / pulls) if set
         */
        type?: 'issues' | 'pulls',
        /**
         * comma separated list of milestone names or ids. It uses names and fall back to ids. Fetch only issues that have any of this milestones. Non existent milestones are discarded
         */
        milestones?: string,
        /**
         * Only show items updated after the given time. This is a timestamp in RFC 3339 format
         */
        since?: string,
        /**
         * Only show items updated before the given time. This is a timestamp in RFC 3339 format
         */
        before?: string,
        /**
         * Only show items which were created by the the given user
         */
        createdBy?: string,
        /**
         * Only show items for which the given user is assigned
         */
        assignedBy?: string,
        /**
         * Only show items in which the given user was mentioned
         */
        mentionedBy?: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Issue>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'state': state,
                'labels': labels,
                'q': q,
                'type': type,
                'milestones': milestones,
                'since': since,
                'before': before,
                'created_by': createdBy,
                'assigned_by': assignedBy,
                'mentioned_by': mentionedBy,
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Create an issue. If using deadline only the date will be taken into account, and time of day ignored.
     * @returns Issue Issue
     * @throws ApiError
     */
    public issueCreateIssue({
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
        body?: CreateIssueOption,
    }): CancelablePromise<Issue> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/issues',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                412: `APIError is error format response`,
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * List all comments in a repository
     * @returns Comment CommentList
     * @throws ApiError
     */
    public issueGetRepoComments({
        owner,
        repo,
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
         * if provided, only comments updated since the provided time are returned.
         */
        since?: string,
        /**
         * if provided, only comments updated before the provided time are returned.
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
    }): CancelablePromise<Array<Comment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues/comments',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'since': since,
                'before': before,
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Get a comment
     * @returns Comment Comment
     * @throws ApiError
     */
    public issueGetComment({
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
         * id of the comment
         */
        id: number,
    }): CancelablePromise<Comment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues/comments/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Delete a comment
     * @returns void
     * @throws ApiError
     */
    public issueDeleteComment({
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
         * id of comment to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/issues/comments/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Edit a comment
     * @returns Comment Comment
     * @throws ApiError
     */
    public issueEditComment({
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
         * id of the comment to edit
         */
        id: number,
        body?: EditIssueCommentOption,
    }): CancelablePromise<Comment> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/issues/comments/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Get a list of reactions from a comment of an issue
     * @returns Reaction ReactionList
     * @throws ApiError
     */
    public issueGetCommentReactions({
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
         * id of the comment to edit
         */
        id: number,
    }): CancelablePromise<Array<Reaction>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues/comments/{id}/reactions',
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
     * Add a reaction to a comment of an issue
     * @returns Reaction Reaction
     * @throws ApiError
     */
    public issuePostCommentReaction({
        owner,
        repo,
        id,
        content,
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
         * id of the comment to edit
         */
        id: number,
        content?: EditReactionOption,
    }): CancelablePromise<Reaction> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/issues/comments/{id}/reactions',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            body: content,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }

    /**
     * Remove a reaction from a comment of an issue
     * @returns any APIEmpty is an empty response
     * @throws ApiError
     */
    public issueDeleteCommentReaction({
        owner,
        repo,
        id,
        content,
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
         * id of the comment to edit
         */
        id: number,
        content?: EditReactionOption,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/issues/comments/{id}/reactions',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            body: content,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }

    /**
     * Get an issue
     * @returns Issue Issue
     * @throws ApiError
     */
    public issueGetIssue({
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
         * index of the issue to get
         */
        index: number,
    }): CancelablePromise<Issue> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues/{index}',
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
     * Delete an issue
     * @returns void
     * @throws ApiError
     */
    public issueDelete({
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
         * index of issue to delete
         */
        index: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/issues/{index}',
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
     * Edit an issue. If using deadline only the date will be taken into account, and time of day ignored.
     * @returns Issue Issue
     * @throws ApiError
     */
    public issueEditIssue({
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
         * index of the issue to edit
         */
        index: number,
        body?: EditIssueOption,
    }): CancelablePromise<Issue> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/issues/{index}',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
                412: `APIError is error format response`,
            },
        });
    }

    /**
     * List all comments on an issue
     * @returns Comment CommentList
     * @throws ApiError
     */
    public issueGetComments({
        owner,
        repo,
        index,
        since,
        before,
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
         * index of the issue
         */
        index: number,
        /**
         * if provided, only comments updated since the specified time are returned.
         */
        since?: string,
        /**
         * if provided, only comments updated before the provided time are returned.
         */
        before?: string,
    }): CancelablePromise<Array<Comment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues/{index}/comments',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            query: {
                'since': since,
                'before': before,
            },
        });
    }

    /**
     * Add a comment to an issue
     * @returns Comment Comment
     * @throws ApiError
     */
    public issueCreateComment({
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
         * index of the issue
         */
        index: number,
        body?: CreateIssueCommentOption,
    }): CancelablePromise<Comment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/issues/{index}/comments',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }

    /**
     * @deprecated
     * Delete a comment
     * @returns void
     * @throws ApiError
     */
    public issueDeleteCommentDeprecated({
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
         * this parameter is ignored
         */
        index: number,
        /**
         * id of comment to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/issues/{index}/comments/{id}',
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
     * @deprecated
     * Edit a comment
     * @returns Comment Comment
     * @throws ApiError
     */
    public issueEditCommentDeprecated({
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
         * this parameter is ignored
         */
        index: number,
        /**
         * id of the comment to edit
         */
        id: number,
        body?: EditIssueCommentOption,
    }): CancelablePromise<Comment> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/issues/{index}/comments/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
                'id': id,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Set an issue deadline. If set to null, the deadline is deleted. If using deadline only the date will be taken into account, and time of day ignored.
     * @returns IssueDeadline IssueDeadline
     * @throws ApiError
     */
    public issueEditIssueDeadline({
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
         * index of the issue to create or update a deadline on
         */
        index: number,
        body?: EditDeadlineOption,
    }): CancelablePromise<IssueDeadline> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/issues/{index}/deadline',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Get an issue's labels
     * @returns Label LabelList
     * @throws ApiError
     */
    public issueGetLabels({
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
         * index of the issue
         */
        index: number,
    }): CancelablePromise<Array<Label>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues/{index}/labels',
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
     * Replace an issue's labels
     * @returns Label LabelList
     * @throws ApiError
     */
    public issueReplaceLabels({
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
         * index of the issue
         */
        index: number,
        body?: IssueLabelsOption,
    }): CancelablePromise<Array<Label>> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/repos/{owner}/{repo}/issues/{index}/labels',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }

    /**
     * Add a label to an issue
     * @returns Label LabelList
     * @throws ApiError
     */
    public issueAddLabel({
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
         * index of the issue
         */
        index: number,
        body?: IssueLabelsOption,
    }): CancelablePromise<Array<Label>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/issues/{index}/labels',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            body: body,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }

    /**
     * Remove all labels from an issue
     * @returns void
     * @throws ApiError
     */
    public issueClearLabels({
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
         * index of the issue
         */
        index: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/issues/{index}/labels',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }

    /**
     * Remove a label from an issue
     * @returns void
     * @throws ApiError
     */
    public issueRemoveLabel({
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
         * index of the issue
         */
        index: number,
        /**
         * id of the label to remove
         */
        id: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/issues/{index}/labels/{id}',
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
     * Get a list reactions of an issue
     * @returns Reaction ReactionList
     * @throws ApiError
     */
    public issueGetIssueReactions({
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
         * index of the issue
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
    }): CancelablePromise<Array<Reaction>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues/{index}/reactions',
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
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }

    /**
     * Add a reaction to an issue
     * @returns Reaction Reaction
     * @throws ApiError
     */
    public issuePostIssueReaction({
        owner,
        repo,
        index,
        content,
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
         * index of the issue
         */
        index: number,
        content?: EditReactionOption,
    }): CancelablePromise<Reaction> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/issues/{index}/reactions',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            body: content,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }

    /**
     * Remove a reaction from an issue
     * @returns any APIEmpty is an empty response
     * @throws ApiError
     */
    public issueDeleteIssueReaction({
        owner,
        repo,
        index,
        content,
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
         * index of the issue
         */
        index: number,
        content?: EditReactionOption,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/issues/{index}/reactions',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            body: content,
            errors: {
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }

    /**
     * Delete an issue's existing stopwatch.
     * @returns void
     * @throws ApiError
     */
    public issueDeleteStopWatch({
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
         * index of the issue to stop the stopwatch on
         */
        index: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/issues/{index}/stopwatch/delete',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            errors: {
                403: `Not repo writer, user does not have rights to toggle stopwatch`,
                404: `APINotFound is a not found empty response`,
                409: `Cannot cancel a non existent stopwatch`,
            },
        });
    }

    /**
     * Start stopwatch on an issue.
     * @returns any APIEmpty is an empty response
     * @throws ApiError
     */
    public issueStartStopWatch({
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
         * index of the issue to create the stopwatch on
         */
        index: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/issues/{index}/stopwatch/start',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            errors: {
                403: `Not repo writer, user does not have rights to toggle stopwatch`,
                404: `APINotFound is a not found empty response`,
                409: `Cannot start a stopwatch again if it already exists`,
            },
        });
    }

    /**
     * Stop an issue's existing stopwatch.
     * @returns any APIEmpty is an empty response
     * @throws ApiError
     */
    public issueStopStopWatch({
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
         * index of the issue to stop the stopwatch on
         */
        index: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/issues/{index}/stopwatch/stop',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            errors: {
                403: `Not repo writer, user does not have rights to toggle stopwatch`,
                404: `APINotFound is a not found empty response`,
                409: `Cannot stop a non existent stopwatch`,
            },
        });
    }

    /**
     * Get users who subscribed on an issue.
     * @returns User UserList
     * @throws ApiError
     */
    public issueSubscriptions({
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
         * index of the issue
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
    }): CancelablePromise<Array<User>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues/{index}/subscriptions',
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
     * Check if user is subscribed to an issue
     * @returns WatchInfo WatchInfo
     * @throws ApiError
     */
    public issueCheckSubscription({
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
         * index of the issue
         */
        index: number,
    }): CancelablePromise<WatchInfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues/{index}/subscriptions/check',
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
     * Subscribe user to issue
     * @returns any Already subscribed
     * @throws ApiError
     */
    public issueAddSubscription({
        owner,
        repo,
        index,
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
         * index of the issue
         */
        index: number,
        /**
         * user to subscribe
         */
        user: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/repos/{owner}/{repo}/issues/{index}/subscriptions/{user}',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
                'user': user,
            },
            errors: {
                304: `User can only subscribe itself if he is no admin`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Unsubscribe user from issue
     * @returns any Already unsubscribed
     * @throws ApiError
     */
    public issueDeleteSubscription({
        owner,
        repo,
        index,
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
         * index of the issue
         */
        index: number,
        /**
         * user witch unsubscribe
         */
        user: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/issues/{index}/subscriptions/{user}',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
                'user': user,
            },
            errors: {
                304: `User can only subscribe itself if he is no admin`,
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * List all comments and events on an issue
     * @returns TimelineComment TimelineList
     * @throws ApiError
     */
    public issueGetCommentsAndTimeline({
        owner,
        repo,
        index,
        since,
        page,
        limit,
        before,
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
         * index of the issue
         */
        index: number,
        /**
         * if provided, only comments updated since the specified time are returned.
         */
        since?: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
        /**
         * if provided, only comments updated before the provided time are returned.
         */
        before?: string,
    }): CancelablePromise<Array<TimelineComment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/issues/{index}/timeline',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            query: {
                'since': since,
                'page': page,
                'limit': limit,
                'before': before,
            },
        });
    }

    /**
     * List an issue's tracked times
     * @returns TrackedTime TrackedTimeList
     * @throws ApiError
     */
    public issueTrackedTimes({
        owner,
        repo,
        index,
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
         * index of the issue
         */
        index: number,
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
            url: '/repos/{owner}/{repo}/issues/{index}/times',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            query: {
                'user': user,
                'since': since,
                'before': before,
                'page': page,
                'limit': limit,
            },
            errors: {
                404: `APINotFound is a not found empty response`,
            },
        });
    }

    /**
     * Add tracked time to a issue
     * @returns TrackedTime TrackedTime
     * @throws ApiError
     */
    public issueAddTime({
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
         * index of the issue
         */
        index: number,
        body?: AddTimeOption,
    }): CancelablePromise<TrackedTime> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/issues/{index}/times',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            body: body,
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }

    /**
     * Reset a tracked time of an issue
     * @returns void
     * @throws ApiError
     */
    public issueResetTime({
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
         * index of the issue to add tracked time to
         */
        index: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/issues/{index}/times',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
            },
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }

    /**
     * Delete specific tracked time
     * @returns void
     * @throws ApiError
     */
    public issueDeleteTime({
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
         * index of the issue
         */
        index: number,
        /**
         * id of time to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/issues/{index}/times/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'index': index,
                'id': id,
            },
            errors: {
                400: `APIError is error format response`,
                403: `APIForbiddenError is a forbidden error response`,
            },
        });
    }

    /**
     * Get all of a repository's labels
     * @returns Label LabelList
     * @throws ApiError
     */
    public issueListLabels({
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
    }): CancelablePromise<Array<Label>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/labels',
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
     * Create a label
     * @returns Label Label
     * @throws ApiError
     */
    public issueCreateLabel({
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
        body?: CreateLabelOption,
    }): CancelablePromise<Label> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/labels',
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
     * Get a single label
     * @returns Label Label
     * @throws ApiError
     */
    public issueGetLabel({
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
         * id of the label to get
         */
        id: number,
    }): CancelablePromise<Label> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/labels/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
        });
    }

    /**
     * Delete a label
     * @returns void
     * @throws ApiError
     */
    public issueDeleteLabel({
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
         * id of the label to delete
         */
        id: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/labels/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
        });
    }

    /**
     * Update a label
     * @returns Label Label
     * @throws ApiError
     */
    public issueEditLabel({
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
         * id of the label to edit
         */
        id: number,
        body?: EditLabelOption,
    }): CancelablePromise<Label> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/labels/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            body: body,
            errors: {
                422: `APIValidationError is error format response related to input validation`,
            },
        });
    }

    /**
     * Get all of a repository's opened milestones
     * @returns Milestone MilestoneList
     * @throws ApiError
     */
    public issueGetMilestonesList({
        owner,
        repo,
        state,
        name,
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
         * Milestone state, Recognized values are open, closed and all. Defaults to "open"
         */
        state?: string,
        /**
         * filter by milestone name
         */
        name?: string,
        /**
         * page number of results to return (1-based)
         */
        page?: number,
        /**
         * page size of results
         */
        limit?: number,
    }): CancelablePromise<Array<Milestone>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/milestones',
            path: {
                'owner': owner,
                'repo': repo,
            },
            query: {
                'state': state,
                'name': name,
                'page': page,
                'limit': limit,
            },
        });
    }

    /**
     * Create a milestone
     * @returns Milestone Milestone
     * @throws ApiError
     */
    public issueCreateMilestone({
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
        body?: CreateMilestoneOption,
    }): CancelablePromise<Milestone> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/repos/{owner}/{repo}/milestones',
            path: {
                'owner': owner,
                'repo': repo,
            },
            body: body,
        });
    }

    /**
     * Get a milestone
     * @returns Milestone Milestone
     * @throws ApiError
     */
    public issueGetMilestone({
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
         * the milestone to get, identified by ID and if not available by name
         */
        id: string,
    }): CancelablePromise<Milestone> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/repos/{owner}/{repo}/milestones/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
        });
    }

    /**
     * Delete a milestone
     * @returns void
     * @throws ApiError
     */
    public issueDeleteMilestone({
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
         * the milestone to delete, identified by ID and if not available by name
         */
        id: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/repos/{owner}/{repo}/milestones/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
        });
    }

    /**
     * Update a milestone
     * @returns Milestone Milestone
     * @throws ApiError
     */
    public issueEditMilestone({
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
         * the milestone to edit, identified by ID and if not available by name
         */
        id: string,
        body?: EditMilestoneOption,
    }): CancelablePromise<Milestone> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/repos/{owner}/{repo}/milestones/{id}',
            path: {
                'owner': owner,
                'repo': repo,
                'id': id,
            },
            body: body,
        });
    }

}
