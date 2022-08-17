/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * User represents a user
 */
export type User = {
    /**
     * Is user active
     */
    active?: boolean;
    /**
     * URL to the user's avatar
     */
    avatar_url?: string;
    created?: string;
    /**
     * the user's description
     */
    description?: string;
    email?: string;
    /**
     * user counts
     */
    followers_count?: number;
    following_count?: number;
    /**
     * the user's full name
     */
    full_name?: string;
    /**
     * the user's id
     */
    id?: number;
    /**
     * Is the user an administrator
     */
    is_admin?: boolean;
    /**
     * User locale
     */
    language?: string;
    last_login?: string;
    /**
     * the user's location
     */
    location?: string;
    /**
     * the user's username
     */
    login?: string;
    /**
     * Is user login prohibited
     */
    prohibit_login?: boolean;
    /**
     * Is user restricted
     */
    restricted?: boolean;
    starred_repos_count?: number;
    /**
     * User visibility level option: public, limited, private
     */
    visibility?: string;
    /**
     * the user's website
     */
    website?: string;
};

