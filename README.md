## Instructions

In this lab you will find something else when you run `learn-test`.  When you run `learn-test` you will first see some HTML that we wrote in `index.html`, which represents information from a competitor of Scuber.  You will still see your tests underneath this HTML `learn-test`.  We'll be testing against this `index.html` document, but you should still write your code in `index.js`. You will write the following functions, to pull information about neighborhoods that the competitor lists as popular, and about the it's future strategy.  Write the following functions:

- Define a function `selectElementById` that uses the `document.getElementById` method to given an id.
- Define a function `selectElementsByClassName` that uses the `document.getElementsByClassName` method to return elements given a class name.
- Define a function `getFirstSelector(selector)`, which accepts a selector and returns the first element that matches.
- Define a function `rankedLis()` that retrieves the list elements from the first two unordered list groups, but not the second one. Remember that `#` is used for IDs in selectors and `.` is used for class selectors — but you knew that from the previous lessons and because you [read the docs](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), right? :) ).

- Define a function `companyStrategy()` that pulls out the most deeply nested child
from `div#grand-node`. (As an extra challenge, you can implement your function in such a way that it will always retrieve the most deeply nested child.  You may want to look up breadth first search for an idea of how to do this.)

Have fun, and good luck!

## Resources

- [document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [document.querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [Selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors)
- [Breadth First Search](https://en.wikipedia.org/wiki/Breadth-first_search)
