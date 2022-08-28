---
title: 리액트 중첩된 함수 안에서 state 업데이트
publish_date: 2021-10-29
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