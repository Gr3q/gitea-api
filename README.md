## gitea-api

[Gitea](https://gitea.io/en-us/) API client. 

Generated with [GitHub - ferdikoomen/openapi-typescript-codegen: NodeJS library that generates Typescript or Javascript clients based on the OpenAPI specification](https://github.com/ferdikoomen/openapi-typescript-codegen).



This package follows the Gitea versioning - meaning you should get the same version of this package that matches your instance's version (for `1.16.9` you should install `1.16.9-2`).

**NOTE: THIS PACKAGE IS BROKEN 1.16.5-2 AND BELOW**. It works fine above.

I will try to keep the package up to date with new released versions.

## To install

`npm i gitea-api`

## To use

```typescript
import { GiteaApi } from "gitea-api";

const client = new GiteaApi({
    BASE: 'https://gitea.domain.com',
    WITH_CREDENTIALS: true,
    TOKEN: ""
});
```

## Development

Generated with (from repo folder):

```bash
cd ..
npm --global i openapi-typescript-codegen
openapi -c fetch -o ./gitea-api/ -i {gitea-url}/swagger.v1.json --name="GiteaApi" --useOptions
```