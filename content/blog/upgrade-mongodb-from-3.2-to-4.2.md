---
title: "Upgrade MongoDB From 3.2 to 4.2"
redirect_from:
  - /posts/upgrade-mongodb-from-3/
author: "dsewnr"
#cover: "/img/cover.jpg"
tags: ["MongoDB", "Upgrade"]
categories: ["Dev"]
date: 2019-09-02T01:14:35+08:00
draft: false
---

在使用 side project 的時候發現一些功能很慢…

<!--more-->

在優化了功能之後，想說順手把 MongoDB 升級好了，沒想到坑越來越大…

官方文件建議的升級順序是 3.2 -> 3.4 -> 3.6 -> 4.2

但是在嘗試從 3.2 升到 3.4 的時候就遇到一堆麻煩事... (系統方面)

時間不早想睡覺了，反正資料沒很多就開台新機器把資料 dump 出來

把舊版全部移乾淨，裝了 4.2 再 restore 回去

It works ! (紀錄一下，這篇廢文的重點)

---

~~[順暢多了！](https://beauty-draw.0xpet.com/beauty/JcOkhN9)~~
