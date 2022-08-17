/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * MergePullRequestForm form for merging Pull Request
 */
export type MergePullRequestOption = {
    Do: MergePullRequestOption.Do;
    MergeCommitID?: string;
    MergeMessageField?: string;
    MergeTitleField?: string;
    delete_branch_after_merge?: boolean;
    force_merge?: boolean;
    head_commit_id?: string;
    merge_when_checks_succeed?: boolean;
};

export namespace MergePullRequestOption {

    export enum Do {
        MERGE = 'merge',
        REBASE = 'rebase',
        REBASE_MERGE = 'rebase-merge',
        SQUASH = 'squash',
        MANUALLY_MERGED = 'manually-merged',
    }


}

