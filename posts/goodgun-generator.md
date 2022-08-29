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
flask는 