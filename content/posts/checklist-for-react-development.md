---
title: "Checklist for React Development"
date: 2021-10-28T11:46:18Z
# weight: 1
# aliases: ["/first"]
tags: ["react"]
author: "Jaehee Lee"
# author: ["Me", "You"] # multiple authors
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: false
description: ""
# canonicalURL: "https://canonical.url/to/page"
disableHLJS: true # to disable highlightjs
disableShare: false
disableHLJS: false
hideSummary: false
searchHidden: true
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
cover:
    image: "<image path/url>" # image path/url
    alt: "<alt text>" # alt text
    caption: "<text>" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: true # only hide on current single page
# editPost:
#     URL: "https://github.com/jhlee838/blog/content"
#     Text: "Suggest Changes" # edit text
#     appendFilePath: true # to append file path to Edit link
---


# 개발 중 에러
## key 상속
React의 key attribute는 상속되지 않는다.
따라서 child component에서 key property를 사용할 수 없다.