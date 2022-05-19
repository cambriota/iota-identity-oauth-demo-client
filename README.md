# iota-identity-oauth-demo-client

Very simple example client for the "Login With IOTA" _(written in Vue.js)_

### Docker

Copy the file `.env.development` --> `.env.production.local` (the docker build will use the "production" values)
For more info on the different modes see the official Vue docs: [https://cli.vuejs.org/guide/mode-and-env.html](https://cli.vuejs.org/guide/mode-and-env.html)

```shell
docker build . -t iota-identity-oauth-demo-client
docker run -d -p 3000:80 --rm iota-identity-oauth-demo-client
```

Visit [http://localhost:3000/demo/](http://localhost:3000/demo/)

## Local development

```
yarn install
yarn serve
```
