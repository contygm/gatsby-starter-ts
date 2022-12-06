# Content

The blog content will be stored on this branch. This will keep the content commits seperate from the main branch. 

## Blog Post Frontmatter

This below is the expected frontmatter for a Blog Post. 

```markdown

---
title: A Blog Title
date: 2022-06-01T22:12:03.284Z
type: blog
description: a longer blog description about the blog
headerImage: ./headerImgExample.png
featured: Boolean
tags:
    - green
    - yellow
    - blue
related:
    - /one-blog/
    - /two-blog/
    - /three-blog/
---

```

## Wiki Post Frontmatter

```markdown
---
title: ATEEZ
date: 2022-06-01T22:12:03.284Z
description: a wiki post description
type: wiki
thumbnail: ./thumbnail.png
featured: false
tags: 
    - green
    - yellow
    - blue
summary:
    - field: Color
      value: BlueRed
    - field: Color
      value: BlueRed
---
```
