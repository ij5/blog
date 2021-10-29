---
title: "리액트 중첩된 함수 안에서 state 업데이트"
date: 2021-10-29T12:45:16Z
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


React의 함수형 컴포넌트에서 중첩된 함수 내 list state를 
업데이트 할 경우 데이터가 제대로 업데이트가 되지 않는 문제가 발생한다.

해결 방법: 

```javascript
setListState([...listState, data])
```
를 
```javascript
setListState(currentListState => [...currentListState, data]);
```
로 바꿔줘야 한다.

이거 찾느라 몇시간 고생했다.