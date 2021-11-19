---
title: "Rust로 프로그래밍 언어 만들기 - 1"
date: 2021-11-17T14:24:28Z
# weight: 1
# aliases: ["/first"]
tags: ["rust", "programming-language"]
author: "Jaehee Lee"
# author: ["Me", "You"] # multiple authors
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: false
description: "Desc Text."
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
    image: "https://i.ibb.co/3NS8Dkv/image.png" # image path/url
    alt: "Rust" # alt text
    caption: "Rust" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: false # only hide on current single page
# editPost:
#     URL: "https://github.com/jhlee838/blog/content"
#     Text: "Suggest Changes" # edit text
#     appendFilePath: true # to append file path to Edit link
---

## 동기
중2~중3때 뭔가 멋져보여서 무작정 파이썬으로 프로그래밍 언어를 만들었던 기억이 있다. 당시 만든 언어는 파이썬으로 만든지라 매우 느리고 조잡했다.
지금 rust로 만들어도 조잡하겠지만, 프로그래밍 언어의 구조를 파악하고 이해한다는 것에 의미를 두어 다시 만들어보고자 한다.

## Rust를 선택한 이유
별 거 없다. Rust를 배우기 시작한지 채 일주일도 지나지 않았고, 이 언어의 매력때문에 선택했다.
게다가 C/C++와 경쟁하는 언어답게 속도가 매우 빠르다!


## Parser Generator 선택하기
파서를 직접 짜는 것은 매우 반복적이고 귀찮은 일이다. 그래서 나온게 parser generator인데, 이 라이브러리들은 반복적인 작업을 줄여준다. 대표적으로 yacc / bison 등이 있다.

다음은 사용 후보에 오른 rust 라이브러리들이다.
* lalrpop
* nom
* pest

최종적으로 [lalrpop](https://crates.io/crates/lalrpop)을 선택했는데, 맨 처음에 발견한 라이브러리 이기도 하고 rust를 기반으로 제작된 많은 언어들(RustPython, gluon-lang 등)이 lalrpop을 사용하고 있기 때문이다.


## Parser 제작
```rust

```