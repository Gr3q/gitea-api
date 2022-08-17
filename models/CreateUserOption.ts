/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * CreateUserOption create user options
 */
export type CreateUserOption = {
    email: string;
    full_name?: string;
    login_name?: string;
    must_change_password?: boolean;
    password: string;
    restricted?: boolean;
    send_notify?: boolean;
    source_id?: number;
    username: string;
    visibility?: string;
};

