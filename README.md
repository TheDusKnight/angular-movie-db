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
  - **coreApp.js** - JS file containing your core app initialization, configurations and routes that are common for all apps (for example dashboard, aboutus, contactus etc.)
- **/server** - Folder containing your node js server.
  - **/libs** - Folder containing your custom libraries.
  - **/models** - Folder containing schemas for your database models (like in mongo db -define different schemas for different document).
  - **/routes** - Folder containing routes handled by node js server.
  - **/plugins** - Folder containing your custom plugins (like database plugin, processRequest plugin etc.)
  - **/spec** - Folder containing specifications.
  - **/tests** - Folder containing test applications
  - **server.js** - JS file containing your server logic.
  - **package.json** - Package.json file.