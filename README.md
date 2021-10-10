<p align="center">
  <a href="http://wodoplatform.io/" target="blank"><img src="https://github.com/wodo-platform/wodo-docs/blob/main/images/wodo_logo.png" width="320" alt="Wodo Platform" /></a>
</p>

<h2> Wodo Platform NodeJs Template Application </h2>

<div align="center">
  <h4>
    <a href="#">
      Website
    </a>
    <span> | </span>
    <a href="#">
      Product Docs
    </a>
    <span> | </span>
    <a href="#">
      Architecture Docs
    </a>
    <span> | </span>
    <!-- <a href="#"> -->
    <!--   CLI -->
    <!-- </a> -->
    <!-- <span> | </span> -->
    <a href="#/CONTRIBUTING.md">
      Contributing
    </a>
    <span> | </span>
    <a href="#">
      Reddit
    </a>
    <span> | </span>
    <a href="#">
      Twitter
    </a>
  </h4>
</div>

<h3> Table of Contents </h3> 

- [About](#about)
- [Installation](#installation)
  - [Adding wodo-nodejs-persistance dependency](#adding-wodo-nodejs-persistance-dependency)
- [Running the app](#running-the-app)
- [Building docker image](#building-docker-image)
- [CI and Github Workflows](#ci-and-github-workflows)

----

## About

This is a template/boilerplate repository to speed up development process. New nodejs application/repositories can be created bsaed on this template. NestJS and prisma frameworks are enabled. 

## Installation

All dependency management and nestjs configurations are already done in the template repo. To add database access capabilities,  wodo-nodejs-persistance is added to the npm dependency list and prisma client lib is genereated based on prisma.schema file resides in wodo-nodejs-persistance dependency.

###  Adding wodo-nodejs-persistance dependency

To be able to add wodo-nodejs-persistance as npm dependency, you need to authenticate to git remote npm package repository by logging in to npm, use the npm login command, replacing USERNAME with your GitHub username, TOKEN with your personal access token, and PUBLIC-EMAIL-ADDRESS with your email address.

If GitHub Packages is not your default package registry for using npm and you want to use the npm audit command, we recommend you use the --scope flag with the owner of the package when you authenticate to GitHub Packages.

```bash
$ npm login --scope=@wodo-platform --registry=https://npm.pkg.github.com --u serhattanrikut --p your_token 
```

Once you login successfully, you can run "npm install" command and start to develop your features. 



## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Building docker image

Along with build and run functionality on your command line, we need to build docker images as well. It means we need to build your project from scratch while preparing docker images. You need to run "npm login" command during docker build process. In order to achive that we can use .npmrc file that is already generated when you run "npm login" in your $user_home folder. Please copy this file under your project root and channge _authToken value with ${NPM_TOKEN} in the file. You can also use the deault .npmrc already available in the root folder of the demo/template reprepo. We will provide the token as argument to the docker build process. 

In your repo root folder, run the following command with your own git token. It will build docker image and add it to your configured docker registery on your laptop

```bash
$ docker build -t wp-nodejs-demo-service --build-arg NPM_TOKEN=your_token . 
```

To run the nodejs app on your local laptop, you can run the wollowinf command

```bash
$ docker run -dp 8080:3000 wp-nodejs-demo-service
```

Open the url "http://localhost:8080/api/demos" and "http://localhost:8080/docs" in your browser to see API and swagger doc.

## CI and Github Workflows

In order to build and package your repo through CI/CD, please have a a look at the file .github/workflows/pipeline.yml under the root project folder. It is preconfigured githubflow. Whenever you push a change onto the main branch, it is triggered. It will be improved to be able to package and release artifacts based on a release process later.
