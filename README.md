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

