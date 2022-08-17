/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { AdminService } from './services/AdminService';
import { IssueService } from './services/IssueService';
import { MiscellaneousService } from './services/MiscellaneousService';
import { NotificationService } from './services/NotificationService';
import { OrganizationService } from './services/OrganizationService';
import { PackageService } from './services/PackageService';
import { RepositoryService } from './services/RepositoryService';
import { SettingsService } from './services/SettingsService';
import { UserService } from './services/UserService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class GiteaApi {

    public readonly admin: AdminService;
    public readonly issue: IssueService;
    public readonly miscellaneous: MiscellaneousService;
    public readonly notification: NotificationService;
    public readonly organization: OrganizationService;
    public readonly package: PackageService;
    public readonly repository: RepositoryService;
    public readonly settings: SettingsService;
    public readonly user: UserService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '/api/v1',
            VERSION: config?.VERSION ?? '1.17.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.admin = new AdminService(this.request);
        this.issue = new IssueService(this.request);
        this.miscellaneous = new MiscellaneousService(this.request);
        this.notification = new NotificationService(this.request);
        this.organization = new OrganizationService(this.request);
        this.package = new PackageService(this.request);
        this.repository = new RepositoryService(this.request);
        this.settings = new SettingsService(this.request);
        this.user = new UserService(this.request);
    }
}

