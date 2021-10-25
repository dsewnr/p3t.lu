---
title: "gopkg.in/mgo.v2 Is Unmaintained"
redirect_from:
  - /posts/golang-mongodb-mgo-v2-unmaintained/
author: "dsewnr"
#cover: "/img/cover.jpg"
tags: ["Golang", "MongoDB", "mgo"]
categories: ["Dev"]
date: 2019-08-09T20:59:21+08:00
draft: false
---

今天跟 [@whitglint](https://github.com/whitglint) 聊天才發現 [gopkg.in/mgo.v2](https://gopkg.in/mgo.v2) 已經沒有在維護了！

<!--more-->

這個 package 已經用了一、兩年有了吧… 也是穩穩的沒遇到啥問題，

作者推薦使用 [globalsign/mgo](https://github.com/globalsign/mgo) - Community supported fork of mgo，

剛好手邊也正好在改非核心的 code 就直接來試了，

直上後沒發現什麼問題，科科

然後看到一個 [go-bongo/bongo](https://github.com/go-bongo/bongo) ODM，有機會再來 try try
