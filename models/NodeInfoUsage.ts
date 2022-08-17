/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NodeInfoUsageUsers } from './NodeInfoUsageUsers';

/**
 * NodeInfoUsage contains usage statistics for this server
 */
export type NodeInfoUsage = {
    localComments?: number;
    localPosts?: number;
    users?: NodeInfoUsageUsers;
};

