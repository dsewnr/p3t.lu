---
title: "買了 GCP 的承諾使用折扣 (Committed Use Discounts)"
redirect_from:
  - /posts/gcp-committed-use-discounts/
author: "dsewnr"
#cover: "/img/cover.jpg"
tags: ["GCP", "VM", "cost", "discount"]
date: 2021-06-04T03:10:21+08:00
draft: false
---
上上個月不小心發現養在 GCP 上的 VM 變慢了，於是就順手升級了機器規格，結果這個月收到帳單的時候嚇了一跳… 原本我估計的費用還要高出不少… 根本快增加了一倍 XD

![](/images/gcp-committed-use-discounts-0.png)

於是就買了 GCP 的承諾使用折扣 (committed use discounts)，想說機器剛升級且蠻懶的短期內也不會有什麼大變化，就直接買了個三年！

![](/images/gcp-committed-use-discounts-2.png)

買完隔天就生效了，可以從介面看到承諾使用折扣的使用率

![](/images/gcp-committed-use-discounts-1.png)

可以看到承諾使用折扣生效後的費用馬上降下來…

![](/images/gcp-committed-use-discounts-3.png)

不知道這個月可以降下多少費用，還是其實買完費用會更高… 這個月過了再來更新吧 XD

---

### 購買時遇到問題？

如果在購買過程中遇到下列錯誤訊息
```
Quota 'COMMITMENTS' exceeded. Limit: 0.0 in region
```
可以到左邊選單 > IAM 與管理 > 配額，然後搜尋 commitments

![](/images/gcp-committed-use-discounts-4.png)

按所有配額

![](/images/gcp-committed-use-discounts-5.png)

選擇你要的位置按編輯配額

![](/images/gcp-committed-use-discounts-6.png)

右邊表單填入需要增加的限制及說明

![](/images/gcp-committed-use-discounts-7.png)

填入姓名、email、電話

![](/images/gcp-committed-use-discounts-8.png)

送出之後就是去收 email 等結果啦！

---

#### 2021/07/02 update

費用降回來了，付差不多的價格機器規格還升級！！！

![](/images/gcp-committed-use-discounts-9.png)

BTW, 升級前的規格是 CPU: 1 Core 和 Memory: 3.5 GB
