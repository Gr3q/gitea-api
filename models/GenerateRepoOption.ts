/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * GenerateRepoOption options when creating repository using a template
 */
export type GenerateRepoOption = {
    /**
     * include avatar of the template repo
     */
    avatar?: boolean;
    /**
     * Default branch of the new repository
     */
    default_branch?: string;
    /**
     * Description of the repository to create
     */
    description?: string;
    /**
     * include git content of default branch in template repo
     */
    git_content?: boolean;
    /**
     * include git hooks in template repo
     */
    git_hooks?: boolean;
    /**
     * include labels in template repo
     */
    labels?: boolean;
    /**
     * Name of the repository to create
     */
    name: string;
    /**
     * The organization or person who will own the new repository
     */
    owner: string;
    /**
     * Whether the repository is private
     */
    private?: boolean;
    /**
     * include topics in template repo
     */
    topics?: boolean;
    /**
     * include webhooks in template repo
     */
    webhooks?: boolean;
};

