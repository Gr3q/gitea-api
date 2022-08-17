/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NotificationSubject } from './NotificationSubject';
import type { Repository } from './Repository';

/**
 * NotificationThread expose Notification on API
 */
export type NotificationThread = {
    id?: number;
    pinned?: boolean;
    repository?: Repository;
    subject?: NotificationSubject;
    unread?: boolean;
    updated_at?: string;
    url?: string;
};

