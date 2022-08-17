/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Comment } from './Comment';
import type { Issue } from './Issue';
import type { Label } from './Label';
import type { Milestone } from './Milestone';
import type { Team } from './Team';
import type { TrackedTime } from './TrackedTime';
import type { User } from './User';

/**
 * TimelineComment represents a timeline comment (comment of any type) on a commit or issue
 */
export type TimelineComment = {
    assignee?: User;
    assignee_team?: Team;
    body?: string;
    created_at?: string;
    dependent_issue?: Issue;
    html_url?: string;
    id?: number;
    issue_url?: string;
    label?: Label;
    milestone?: Milestone;
    new_ref?: string;
    new_title?: string;
    old_milestone?: Milestone;
    old_project_id?: number;
    old_ref?: string;
    old_title?: string;
    project_id?: number;
    pull_request_url?: string;
    ref_action?: string;
    ref_comment?: Comment;
    /**
     * commit SHA where issue/PR was referenced
     */
    ref_commit_sha?: string;
    ref_issue?: Issue;
    /**
     * whether the assignees were removed or added
     */
    removed_assignee?: boolean;
    resolve_doer?: User;
    review_id?: number;
    tracked_time?: TrackedTime;
    type?: string;
    updated_at?: string;
    user?: User;
};

