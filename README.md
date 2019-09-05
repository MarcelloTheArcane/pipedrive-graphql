# GraphQL wrapper for Pipedrive

[Pipedrive](https://pipedrive.com)

## Getting started

### Install dependencies:

```bash
# Yarn
yarn
```

```bash
# NPM
npm install
```

This repository uses [Yarn](https://yarnpkg.com).

### Create `.env` file:

```env
PIPEDRIVE_API_KEY=<...>
BASIC_AUTH_KEY=<...>
```

[How to find your Pipedrive API key](https://pipedrive.readme.io/docs/how-to-find-the-api-token?utm_source=api_reference)

> This branch uses **Basic Authentication**. For **JWT Authentication** see the `master` branch.

### Run:

For testing, you can use the following command:

```bash
# Yarn
yarn serve
```

```bash
# NPM
npm run serve
```

### Deploy:

Deploy to a server of your choice. It must run the `start` script:

```bash
# Yarn
yarn start
```

```bash
# NPM
npm run start
```

## Deploys

You can deploy this to [Zeit Now](https://zeit.co) or [Heroku](https://heroku.com) straight out of the box.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

You'll need to configure the environment variables depending on your system.

- [Zeit Now environment variables documentation](https://zeit.co/docs/v2/build-step#adding-secrets)
   
    `now.json` is preconfigured - all you have to do is add the variable via the command line:

    ```bash
    now secrets add pipedrive-api-key <...>
    now secrets add basic-auth-key <...>
    ```

- [Heroku environment variables documentation](https://devcenter.heroku.com/articles/config-vars)
    
    Deploy with the button above, then visit the [Heroku dashboard](https://dashboard.heroku.com) to set the variables.
