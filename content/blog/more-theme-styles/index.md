---
featured: false
type: blog
title: Another Theme Styles
date: 2015-05-01T22:12:03.284Z
description: 'This one shows you all the markdown possibilities'
tags:
    - purple
    - green
    - blue
headerImage: headerimg.png
related:
    - /code-tutorial/
---

## Paragraphs

A standard paraagraph: Quodsi blandit petentium ut vim. Dico illud ne eum, in quando quidam assueverit eos. Est erroribus urbanitas eu. At natum nonumy comprehensam sed...

    A standard paraagraph: Quodsi blandit...

This paragraph has some `code` in it.

    This paragraph has some `code` in it.

## Quotes

> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

    > Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> ## This is a header.
>
> 1. This is the first list item.
> 2. This is the second list item.
>
> Here's some example code:
>
>     Markdown.generate();

    > ## This is a header.
    > 1. This is the first list item.
    > 2. This is the second list item.
    >
    > Here's some example code:
    >
    >     Markdown.generate();

## Lists

-   Red
-   Green
-   Blue
-   `code goes` here in this line
-   **bold** goes here
-   **italics** go here

```markdown
-   Red
-   Green
-   Blue

*   Red
*   Green
*   Blue

-   `code goes` here in this line
-   **bold** goes here
-   **italics** go here
```

1. Buy flour and salt
1. Mix together with water
1. Bake
1. `code goes` here in this line
1. **bold** goes here

```markdown
1. Buy flour and salt
1. Mix together with water
1. Bake
1. `code goes` here in this line
1. **bold** goes here
```

## Line

---

    * * *

    ***

    *****

    - - -

    ---------------------------------------

## Links

This is [an example](http://example.com 'Example') link.

[This link](http://example.com) has no title attr.

This is [an example][id] reference-style link.

[id]: http://example.com 'Optional Title'

    This is [an example](http://example.com "Example") link.

    [This link](http://example.com) has no title attr.

    This is [an example] [id] reference-style link.

    [id]: http://example.com "Optional Title"

## Font Styles

_italics_

    *single asterisks*
    _single underscores_

**bold**

    **double asterisks**
    __double underscores__

## Images

![Placeholder](./500.png 'Image Title')

    ![Placeholder](./500.png 'Image Title')

![Broken Image w Alt Text](https://placehold.it/200x50 'Image Title')

    ![Broken Image w Alt Text](https://placehold.it/200x50 "Image Title")

## Table

| Number | Title                                    | Year |
| :----- | :--------------------------------------- | ---: |
| 1      | Harry Potter and the Philosopher’s Stone | 2001 |
| 2      | Harry Potter and the Chamber of Secrets  | 2002 |
| 3      | Harry Potter and the Prisoner of Azkaban | 2004 |

    | Number | Title                                    | Year |
    | :----- | :--------------------------------------- | ---: |
    | 1      | Harry Potter and the Philosopher’s Stone | 2001 |
    | 2      | Harry Potter and the Chamber of Secrets  | 2002 |
    | 3      | Harry Potter and the Prisoner of Azkaban | 2004 |

## Collapsable Section

<details>
  <summary>Bocconcini pecorino taleggio</summary>

Bocconcini pecorino taleggio. Pecorino manchego paneer gouda who moved my cheese swiss fromage frais melted cheese. Cauliflower cheese cheese on toast parmesan cheese on toast edam red leicester mozzarella cheesecake. Paneer cut the cheese say cheese.

</details>

    <details>
        <summary>Bocconcini pecorino taleggio</summary>

        Bocconcini pecorino taleggio ...

    </details>

## Code Blocks

```js
function doF(cb) {
    console.log('doF');
}

doF();
```

    ```js
    function doF(cb) {
        console.log('doF');
    }

    doF();
    ```

```js{2,8-11}{numberLines: true}
function doF(cb) {
    console.log('doF');
}

function doB() {
    console.log('doB');
}

function doC(cb) {
    console.log('doC');
    setTimeout(cb);
}

doF();
```

    ```js{2,8-11}{numberLines: true}
        function doF(cb) {
        ...
        doF();
    ```

## Headings

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

    # Header 1
    ## Header 2
    ### Header 3
    #### Header 4
    ##### Header 5
    ###### Header 6
