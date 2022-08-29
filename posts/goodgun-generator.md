---
title: 굳건이 생성기 만들기
publish_date: 2022-08-29
tags: ["코딩", "인공지능"]
---

# 계기
캐릭터에 굳건이 얼굴을 합성하는 것이 너무 귀찮게 느껴져서 만들게 되었다.
사실 반쯤은 장난으로 시작했다.
그하학

# 시작
언어는 파이썬으로 결정했다.
어찌보면 당연한 것이, 대부분의 머신러닝 프로젝트들은 파이썬으로 제작되었다.
또한 파이썬은 개발속도가 빨라 장난으로 시작한 프로젝트를 빨리 끝내버리고 싶었기 떄문이다.

처음에 관련 라이브러리를 검색하느라 시간이 꽤 오래걸렸다.
인간의 얼굴에 합성하는 것이 아닌, 2D 캐릭터의 얼굴에 합성해야 한다.
많은 파이썬 얼굴 랜드마크 라이브러서는 실제 인간의 얼굴을 기준으로 만들어져 있어서 2D 캐릭터 얼굴 인식이 안된다.
애니메이션 얼굴인식 라이브러리는 극소수에 불과했는데 그 중 하나는 인식이 잘 안됐었다.

결국 파이토치와 mmdet, mmpose를 사용한 랜드마크 인식 라이브러리를 찾았다.

# 코딩
```python
from io import BytesIO, StringIO
import cv2
from anime_face_detector import create_detector
from werkzeug.wsgi import FileWrapper
from flask import Flask, request, Response, send_file
import math
import numpy as np
```
먼제 필요한 라이브러리들을 import 해준다.

```python
def get_deg(arr):
    rad = math.atan2(arr[3]-arr[1],arr[2]-arr[0])
    PI = math.pi
    deg = (rad*180)/PI
    return deg
```
두 점의 x, y 좌표를 이용하여 각도를 구하는 함수이다.

```python
detector = create_detector('yolov3', device='cpu')
```
랜드마크 감지는 yolo 라이브러리를 사용한다.

```python
gg = cv2.imread('gg.png', cv2.IMREAD_UNCHANGED)
gg = cv2.cvtColor(gg, cv2.COLOR_BGRA2RGBA)
```
굳건이 이미지를 불러온다.
내 실력이 부족한지, cv2가 이상한지는 잘 모르겠지만 이미지를 불러올 때 회전되어 불러오지는 경우가 있었다.
png이기 때문에 `IMREAD_UNCHANGED`를 사용하면 알파 값 까지 불러와지는 것 같다.



# generate 함수
```python
def generate(image_file: BytesIO) -> bytes:
```
generate 함수를 정의해준다. BytesIO 형식으로 이미지 파일이 주어지고, 생성된 이미지는 bytes 형식으로 리턴한다.

```python
preds = detector(img)
```
위에서 만든 detector를 사용하여 얼굴의 랜드마크를 감지한다.

```python
if len(preds) == 0:
    return False
```
만약 감지된 얼굴이 하나도 없으면 False를 리턴한다.

```python

```

`작성 중...`

# 결과
[DEMO](https://ij5-goodgun-streamlit-app-p3n4m8.streamlitapp.com)
[Github](https://github.com/ij5/goodgun)

streamlit에 배포했다.
코드는 github에서 볼 수 있다.

