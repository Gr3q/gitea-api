/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateHookOptionConfig } from './CreateHookOptionConfig';

/**
 * CreateHookOption options when create a hook
 */
export type CreateHookOption = {
    active?: boolean;
    branch_filter?: string;
    config: CreateHookOptionConfig;
    events?: Array<string>;
    type: CreateHookOption.type;
};

export namespace CreateHookOption {

    export enum type {
        DINGTALK = 'dingtalk',
        DISCORD = 'discord',
        GITEA = 'gitea',
        GOGS = 'gogs',
        MSTEAMS = 'msteams',
        SLACK = 'slack',
        TELEGRAM = 'telegram',
        FEISHU = 'feishu',
        WECHATWORK = 'wechatwork',
        PACKAGIST = 'packagist',
    }


}

