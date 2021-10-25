---
title: "Upgrade chromedp to v0.4.0"
author: "dsewnr"
#cover: "/img/cover.jpg"
tags: ["Golang", "Chrome", "chromedp", "Headless"]
categories: ["Dev"]
date: 2019-08-27T15:57:31+08:00
draft: false
---

看一個 bug 順便 review 一下早先寫的 code，想到 Chrome 版本都與時俱進了…

<!--more-->

應該要來升級一下 package 跟上才對

於是就把 [chromedp](https://github.com/chromedp/chromedp) 版本從 v0.1.3 升到 [v0.4.0](https://github.com/chromedp/chromedp/tree/v0.4.0)

local 測了一下我的應用沒什麼問題

意外的是速度變快了！(肉眼看 stdout 實測快很多)

然後發現 [kafka-go](https://github.com/segmentio/kafka-go) 原來有 `LastOffset` 可以用了 XD
