/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NodeInfoServices } from './NodeInfoServices';
import type { NodeInfoSoftware } from './NodeInfoSoftware';
import type { NodeInfoUsage } from './NodeInfoUsage';

/**
 * NodeInfo contains standardized way of exposing metadata about a server running one of the distributed social networks
 */
export type NodeInfo = {
    metadata?: any;
    openRegistrations?: boolean;
    protocols?: Array<string>;
    services?: NodeInfoServices;
    software?: NodeInfoSoftware;
    usage?: NodeInfoUsage;
    version?: string;
};

