# Skeleton UI

[![build status][build-image]][build-url]

Skeleton for a Typescript + React project including Jest for testing.

## Getting Started

### Node

- Node 18+
- `npm i` or `make init`

## Scripts

In the project directory, you can run:

### `npm start` or `make start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build` or `make`

Builds the app for production to the `build` folder.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

### `make pipeline`

Runs a CI process -- install, build, test.

### `make rebrand`

When forking this project, this command makes it easy to replace "Skeleton UI" references with new values, given as `PACKAGE` and `TITLE`:

```sh
make rebrand PACKAGE=new-app TITLE="New App"
```

## Important Links

- [AWS Host](http://clearthehaze.com.s3-website-us-east-1.amazonaws.com)
- [Cloudflare](https://dash.cloudflare.com/login)
- [How to move to Cloudfront](https://medium.com/@wolovim/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af)
- [Adsense](https://www.google.com/adsense/new/u/0/pub-1706899473093396/home)
- [Skeleton Theme](http://getskeleton.com/#intro)
- [Tutorial on AWS Setup](https://jaykannaiyan.com/how-to-deploy-node-app-docker-aws)

## License

MIT

[build-image]: https://img.shields.io/github/actions/workflow/status/benkn/skeleton-ui/ci.yml?branch=main
[build-url]: https://github.com/benkn/skeleton-ui/actions?query=workflow%3Aci
