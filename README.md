<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AngularGatos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2, h3 {
            color: #333;
        }
        code {
            background-color: #f4f4f4;
            padding: 5px;
            border-radius: 4px;
            display: block;
            margin: 10px 0;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            margin: 5px 0;
        }
        a {
            color: #007BFF;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <h1>AngularGatos</h1>
    <p>This project was developed as part of a final assignment for a course I took on learning Angular. The theme is a cat information page that provides details about different kinds of cats using the Cat API.</p>

   <h2>Development Server</h2>
    <p>To start a local development server, run:</p>
    <code>
        ng serve
    </code>
    <p>Once the server is running, open your browser and navigate to <a href="http://localhost:4200/" target="_blank">http://localhost:4200/</a>. The application will automatically reload whenever you modify any of the source files.</p>

  <h2>Code Scaffolding</h2>
    <p>Angular CLI includes powerful code scaffolding tools. To generate a new component, run:</p>
    <code>
        ng generate component component-name
    </code>
    <p>For a complete list of available schematics (such as <code>components</code>, <code>directives</code>, or <code>pipes</code>), run:</p>
    <code>
        ng generate --help
    </code>

  <h2>Building</h2>
    <p>To build the project run:</p>
    <code>
        ng build
    </code>
    <p>This will compile your project and store the build artifacts in the <code>dist/</code> directory. By default, the production build optimizes your application for performance and speed.</p>

  <h2>Running Unit Tests</h2>
    <p>To execute unit tests with the <a href="https://karma-runner.github.io" target="_blank">Karma</a> test runner, use the following command:</p>
    <code>
        ng test
    </code>

   <h2>Running End-to-End Tests</h2>
    <p>For end-to-end (e2e) testing, run:</p>
    <code>
        ng e2e
    </code>
    <p>Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.</p>

   <h2>Additional Resources</h2>
    <p>For more information on using the Angular CLI, including detailed command references, visit the <a href="https://angular.dev/tools/cli" target="_blank">Angular CLI Overview and Command Reference</a> page.</p>
</body>
</html>
