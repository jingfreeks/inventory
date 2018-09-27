module.exports = {
    "extends": "airbnb-base",
    "parser": "babel-eslint",
    "plugins": ['react'],
    "env": {
      "node": true,
      "jasmine": true,
    },
    "rules": {   
      "react/jsx-uses-react": "error",   
      "react/jsx-uses-vars":
      "error",
      "arrow-body-style": ["error", "always"],
      "import/no-unresolved": "off",
      "id-length": 0,
      "indent": [1, 4],
      "no-console": 0,
      "no-unused-vars": [1, {"vars": "local", "args": "none"}],
      "strict": 0,
      "skipBlankLines": true,
      "ignoreComments":false,
      "class-methods-use-this": [2, {
        "exceptMethods": [
          "render",
          "getInitialState",
          "getDefaultProps",
          "getChildContext",
          "componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "componentDidUpdate",
          "componentWillUnmount",
        ],
      }],
      "import/prefer-default-export": "off",
      "linebreak-style": 0,
      "global-require": 0,
      "eol-last": 0,
      "object-curly-newline": ["error","never", {
        "arraysInObjects":true,
        "objectsInObjects":true,
        "ObjectExpression": "always",
        "ObjectPattern": { "multiline": true },
        "ImportDeclaration": "never",
        "ExportDeclaration": { "multiline": true, "minProperties": 3 }
      }]     
    },  

    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true,
      },
    
    },
    "ecmaFeatures": {
      "jsx": true,
    },
  };