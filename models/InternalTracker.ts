/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * InternalTracker represents settings for internal tracker
 */
export type InternalTracker = {
    /**
     * Let only contributors track time (Built-in issue tracker)
     */
    allow_only_contributors_to_track_time?: boolean;
    /**
     * Enable dependencies for issues and pull requests (Built-in issue tracker)
     */
    enable_issue_dependencies?: boolean;
    /**
     * Enable time tracking (Built-in issue tracker)
     */
    enable_time_tracker?: boolean;
};

