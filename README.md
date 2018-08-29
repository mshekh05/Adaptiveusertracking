# Generator express
[![Build Status](https://img.shields.io/travis/petecoop/generator-express.svg)](https://travis-ci.org/petecoop/generator-express)
[![NPM Version](https://img.shields.io/npm/v/generator-express.svg)](https://www.npmjs.org/package/generator-express)
[![NPM Downloads](https://img.shields.io/npm/dm/generator-express.svg)](https://www.npmjs.org/package/generator-express)


An Expressjs generator for Yeoman, based on the express command line tool.

## Features

- Basic or MVC style file structure
- CoffeeScript Support
- Gulp or Grunt build tools with file watching and livereload
- .editorconfig for consistent coding styles within text editors
- Support View engines:
  - [Jade](http://jade-lang.com/)
  - [Handlebars](http://handlebarsjs.com/)
  - [Swig](http://paularmstrong.github.io/swig/)
  - [EJS](http://ejs.co/)
  - [Marko](http://markojs.com/)
  - [Nunjucks](http://mozilla.github.io/nunjucks/)
- Supported CSS pre-processors
  - SASS (both node-sass and ruby sass)
  - LESS
  - Stylus
- Supported Databases (with MVC structure):
 - MongoDB
 - MySQL
 - PostgreSQL
 - RethinkDB
 - SQLite

## Getting started

- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator **globally**: `npm install -g generator-express`
- Run: `yo express` and select Basic. Add `--coffee` if you require CoffeeScript.
- Run: `grunt` or `gulp` to run the local server at `localhost:3000`, the grunt/gulp tasks include live reloading for views, css in public/css and restarting the server for changes to app.js or js in routes/

## MVC apps

A generator for creating MVC style apps in express. Giving you the choice between the supported databases.

To get going:

- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator **locally**: `npm install generator-express`
- Run: `yo express`, select MVC and select your database of choice. Add `--coffee` if you require CoffeeScript.
- Ensure that the selected database is running on your machine, if running elsewhere the connection string can be changed in `config/config.js`
- Run: `grunt` or `gulp` to run the local server - defaults to `localhost:3000` - port can be changed in `config/config.js`. The grunt/gulp tasks include live reloading as before.

## Options

- `--coffee`

  Uses CoffeeScript.

- `--skip-install`

  Skips the automatic execution of `bower` and `npm` after
  scaffolding has finished.

## Testing
Tests are written with mocha.
- Install: `npm install -g mocha`
- Run: `mocha` or `npm test`

## Contributing
Contributors are welcome, please fork and send pull requests! If you have any ideas on how to make this project better then please submit an issue.

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)





Module Docstring
"""

__author__ = "Your Name"
__version__ = "0.1.0"
__license__ = "MIT"

import argparse


def main(args):
    """ Main entry point of the app """
    print("hello world")
    print(args)


if __name__ == "__main__":
    """ This is executed when run from the command line """
    parser = argparse.ArgumentParser()

    # Required positional argument
    parser.add_argument("arg", help="Required positional argument")

    # Optional argument flag which defaults to False
    parser.add_argument("-f", "--flag", action="store_true", default=False)

    # Optional argument which requires a parameter (eg. -d test)
    parser.add_argument("-n", "--name", action="store", dest="name")

    # Optional verbosity counter (eg. -v, -vv, -vvv, etc.)
    parser.add_argument(
        "-v",
        "--verbose",
        action="count",
        default=0,
        help="Verbosity (-v, -vv, etc)")

    # Specify output of "--version"
    parser.add_argument(
        "--version",
        action="version",
        version="%(prog)s (version {version})".format(version=__version__))

    args = parser.parse_args()
    main(args)








input id="upload" type="file">

<label for="upload">
    
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
        <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/>
    </svg>
    
    <span> Choose a file&hellip;</span>
    
</label>



body {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
}

[type="file"] {
    height: 0.1px; width: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    
    + label {
        background-color: #d3394c;
        color: #f1e5e6;
        cursor: pointer;
        display: inline-block;
        font-size: 1.25rem;
        font-weight: 700;
        overflow: hidden;
        padding: 0.625rem 1.25rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        
        svg {
            fill: currentColor;
            height: 1em; width: 1em;
            margin-top: -0.25em;
            margin-right: 0.25em;
            vertical-align: middle;
        }
        
        &:hover {
            background-color: #722040;
        }
    }
    
    &:focus + label {
        background-color: #722040;
        outline: 1px dotted #000;
    }
}



