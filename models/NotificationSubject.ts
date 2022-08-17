/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NotifySubjectType } from './NotifySubjectType';
import type { StateType } from './StateType';

/**
 * NotificationSubject contains the notification subject (Issue/Pull/Commit)
 */
export type NotificationSubject = {
    html_url?: string;
    latest_comment_html_url?: string;
    latest_comment_url?: string;
    state?: StateType;
    title?: string;
    type?: NotifySubjectType;
    url?: string;
};

