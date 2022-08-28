---
title: Go 웹소켓의 "concurrent write to websocket connection" 에러를 고치는 법
publish_date: 2021-10-27
tags: ["코딩"]
---

go언어의 웹소켓은 동시에 read나 write 작업을 할 수 없다.
read하기 전에 `mutex.lock()`을 호출하고 write가 끝날때 unlock을 호출하면 문제를 해결할 수 있다.

