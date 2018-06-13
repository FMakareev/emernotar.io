# ESLint guide, tips

Follow the [Airbnb JavaScript Style Guide] (https://github.com/airbnb/javascript).
The project has configured ** precommit ** and ** prepush **, each time you try to make a commit or push plugin ** lint-staged **
will check the directory ** src ** and ** tools ** for the style guide and if there are errors in the console
will show in which files and what type of errors respectively until the errors are corrected to do
** commit ** or ** push ** will not work.

## Motivation

It is necessary to standardize the style of writing code in order to make it easier to maintain, build, and in the future
it is possible to analyze. In the style guide, in addition to the general rules for the design of steps, quotes, etc. same
there are useful practices of writing code.

## Useful links:

> If you have problems or questions about eslint warnings or errors 99% of the answers in the rules or issue sections
 
* [eslint rules] (https://eslint.org/docs/rules/)
* [eslint-plugin-import] (https://github.com/benmosher/eslint-plugin-import)
* [eslint-plugin-jsx-a11y] (https://github.com/evcohen/eslint-plugin-jsx-a11y)
* [eslint-plugin-prettier] (https://github.com/prettier/eslint-plugin-prettier)
* [eslint-plugin-react] (https://github.com/yannickcr/eslint-plugin-react)


Recipes

> If in the course of work you encounter not very obvious things related to ESLint, then do not be lazy and add this case to the list

1. Global variables used in the file must be declared on the first line of the file
separated by a comma in the comments [more] (https://eslint.org/docs/3.0.0/rules/no-restricted-globals#disallow-specific-global-variables-no-restricted-globals):

`` `
 / * global ENDPOINT_CLIENT * /
 
 function onClick () {
     console.log (ENDPOINT_CLIENT);
 }
 
 fdescribe ("foo", onClick);
`` `

2. ESLint does not like the method react [dangerouslySetInnerHTML] (https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)
[More details on this here] (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md)
so in the file where you use this method, you need to put the following comment

`` `javascript
/ * eslint-disable react / no-danger * /

`` `