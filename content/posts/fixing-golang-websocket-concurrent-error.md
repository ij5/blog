---
title: Go 웹소켓의 "concurrent write to websocket connection" 에러를 고치는 법
date: 2021-10-27T09:39:05Z
# weight: 1
# aliases: ["/first"]
tags: ["golang", "sooda", "websocket"]
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


go언어의 웹소켓은 동시에 read나 write 작업을 할 수 없다.
read하기 전에 mutex.lock()을 호출하고 write가 끝날때 unlock을 호출하면 문제를 해결할 수 있다.

