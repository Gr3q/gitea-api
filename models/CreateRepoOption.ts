/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * CreateRepoOption options when creating repository
 */
export type CreateRepoOption = {
    /**
     * Whether the repository should be auto-initialized?
     */
    auto_init?: boolean;
    /**
     * DefaultBranch of the repository (used when initializes and in template)
     */
    default_branch?: string;
    /**
     * Description of the repository to create
     */
    description?: string;
    /**
     * Gitignores to use
     */
    gitignores?: string;
    /**
     * Label-Set to use
     */
    issue_labels?: string;
    /**
     * License to use
     */
    license?: string;
    /**
     * Name of the repository to create
     */
    name: string;
    /**
     * Whether the repository is private
     */
    private?: boolean;
    /**
     * Readme of the repository to create
     */
    readme?: string;
    /**
     * Whether the repository is template
     */
    template?: boolean;
    /**
     * TrustModel of the repository
     */
    trust_model?: CreateRepoOption.trust_model;
};

export namespace CreateRepoOption {

    /**
     * TrustModel of the repository
     */
    export enum trust_model {
        DEFAULT = 'default',
        COLLABORATOR = 'collaborator',
        COMMITTER = 'committer',
        COLLABORATORCOMMITTER = 'collaboratorcommitter',
    }


}

