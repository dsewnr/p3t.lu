---
title: "幫忙找出中心座標的 Telegram bot"
redirect_from:
  - /posts/lets-meet-bot/
author: "dsewnr"
#cover: "/img/cover.jpg"
tags: ["Telegram", "bot", "location", "GPS", "distance"]
date: 2020-06-06T08:40:21+08:00
draft: false
---

## 前情提要
有一天在某個宅宅群組，因為有不少宅宅 relocate 到大台北地區，有宅提議說要辦個宅宅聚餐，但是呢，因為宅宅散佈在大台北各個角落，所以產生了一個問題「A 約的地點 B 說太遠，B 提議的地點 C 說不方便」，哇！這樣不知道要何年何月何日才約的成聚餐 QQ

## 求解
當時腦中就產生一個想法，不如就用算的吧！讓數據來說話最公平！於是就請大家把自己所在的座標傳到群組裡，然後趁著午休吃飯的時間 google 了一番尋找計算的方法，然後就找到這篇「[How to calculate the midpoint of several geolocations in python](https://stackoverflow.com/questions/37885798/how-to-calculate-the-midpoint-of-several-geolocations-in-python)」，計算的方法很簡單，很輕鬆的就找出中心座標！大家也接受了在這座標附近聚餐。

![](/images/lets-meet-gist.jpg)

當下就在想是不是能做成服務，然後就有人提議 chatbot，這又是另一段故事了(煙)，其實就在下面…

## Give it a try
當天晚上在家有點時間就嘗試弄了隻 prototype，下列是有用到的相關資源：
- [Telegram Bot API](https://core.telegram.org/bots/api) (就官方文件)
- [python-telegram-bot](https://github.com/python-telegram-bot/python-telegram-bot) (簡單好用的套件)
- [serveo](https://serveo.net/) (讓我可以在本機接 webhook，另外也可以參考 [ngrok](https://ngrok.com/))

![](/images/lets-meet-prototype.png)

## 隔夜 bot
隔天晚上也有點時間，就讓 prototype 成型吧！把昨天的 code 改來改去調整了一下，找了張 free icon，寫上想了好一陣子的 bot 介紹，新增了 Dockerfile，然後把它佈到雲上，最後再施了一個 domain 給它，它就上．線．了！至於為什麼 username 是 [@MeThereBot](https://t.me/MeThereBot) 呢？因為想到的都被用光了…

### [Let’s Meet Bot](https://t.me/MeThereBot)
![](/images/lets-meet-bot-welcome.png)

![](/images/lets-meet-bot-telegram.png)

## Q&A
Q: 如果有人故意定位在巴士海峽呢？  
A：誰傳這定位在群組各位他X的還不O爆他

Q：如果中心點在河裡或海裡要怎麼辦？  
A: 可以找中心附近或離中心最近交通方便的地點r

## 後記
這隻 chatbot 有個已知的問題是非常大量的人使用會爆炸！不過等有那一天到的時候再來煩惱吧… BTW, 最近在看[異獸魔都](https://www.netflix.com/title/80991903)，真的好讚！[Welcome トゥ 混沌](https://www.youtube.com/watch?v=8OLtM7-VbO8)！

![](https://i.ytimg.com/vi/BK0tDxrzUOc/maxresdefault.jpg)
