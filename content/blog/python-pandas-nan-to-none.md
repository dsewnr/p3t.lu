---
title: 'Pandas NaN to None'
author: 'dsewnr'
#cover: "/img/cover.jpg"
tags: ['Python', 'Pandas', 'Numpy']
date: 2019-10-22T16:55:16+08:00
draft: false
---

上次處理資料找了一次答案，今天處理資料又用到，記錄一下。

## Python Pandas 讀取 csv 檔把 NaN 轉成 None

```
import pandas as pd
import numpy as np

df = pd.read_csv("xxx.csv", encoding='utf8', header=None, low_memory=False)
df = df.replace({pd.np.nan: None})
```
