# CSCI571-HW8

## project structure

- **/App** - Folder that Contains your angular js applications
  - **/AppName** - Folder containing files related to specific application.
    - /**contorllers** - Folder containing controllers related to specific app.
      - **abcController.js** - JS file containing logic for abcController.
    - **/directives** - Folder containing directives related to specific app.
    - **/animations** - Folder containing animations related to specific app
      **.** **.** **.**
    - **/services** - Folder containing services related to specific app.
    - **app.js** - JS file containing your routes handled by this app, application initialization and configs.
    - **/views** - Folder containing html view files.
  - **/commonDirectives** - Folder containing common directives.
    - **OverlayDirective.js** - JS containing logic for overlay directive.
  - **/commonViews** - Folder containing common html view files.
  - **coreApp.js** - JS file containing your core app initialization, configurations and routes that are common for all apps (for example dashboard, aboutus, contactus etc.)Dendrohyrax arboreus
- **/server** - Folder containing your node js server.
  - **/libs** - Folder containing your custom libraries.
  - **/models** - Folder containing schemas for your database models (like in mongo db -define different schemas for different document).
  - **/routes** - Folder containing routes handled by node js server.
  - **/plugins** - Folder containing your custom plugins (like database plugin, processRequest plugin etc.)
  - **/spec** - Folder containing specifications.
  - **/tests** - Folder containing test applications
  - **server.js** - JS file containing your server logic.
  - **package.json** - Package.json file.

# 实用链接

## Eslint & TypeScript

How To Lint and Format Code with ESLint in Visual Studio Code https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code#step-5-%E2%80%94-customizing-eslint-configuration

Express 应用程序生成器https://expressjs.com/zh-cn/starter/generator.html

[typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

TypeScript lint https://ts.xcatliu.com/engineering/lint.html

## NodeJS & NPM

https://cloud.google.com/appengine/docs/standard/nodejs/

https://code.visualstudio.com/docs/nodejs/nodejs-tutorial

https://Node.js.org/en/

[Difference between npx and npm?](https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm)



https://www.techiediaries.com/angular/responsive-image-breakpoints-cdk-breakpointobserver-angular-9-8/

      if (state.breakpoints[Breakpoints.XSmall]) {
          //  console.log( 'Matches XSmall viewport');
          //  this.htmlStyles = "dummy1";
      }
      if (state.breakpoints[Breakpoints.Small]) {
          //  console.log( 'Matches Small viewport');
      }
      if (state.breakpoints[Breakpoints.Medium]) {
          //  console.log( 'Matches Medium  viewport');
      }
      if (state.breakpoints[Breakpoints.Large]) {
    
          // console.log( 'Matches Large viewport');
      }
      if (state.breakpoints[Breakpoints.XLarge]) {
    
        //  console.log( 'Matches XLarge viewport');   
      }
 if (state.breakpoints[Breakpoints.XSmall]) {
          //  console.log( 'Matches XSmall viewport');
          //  this.htmlStyles = "dummy1";
      }
      if (state.breakpoints[Breakpoints.Small]) {
          //  console.log( 'Matches Small viewport');
      }
      if (state.breakpoints[Breakpoints.Medium]) {
          //  console.log( 'Matches Medium  viewport');
      }
      if (state.breakpoints[Breakpoints.Large]) {

          // console.log( 'Matches Large viewport');
      }
      if (state.breakpoints[Breakpoints.XLarge]) {
    
        //  console.log( 'Matches XLarge viewport');   
      }