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

#### 2021/05/25 update

今天在用的時候得到一段訊息：

<font color="red">FutureWarning: The pandas.np module is deprecated and will be removed from pandas in a future version. Import numpy directly instead</font>

為了因應未來新版本變更改寫成下面寫法即可
```
df = df.replace({np.nan: None})
```
