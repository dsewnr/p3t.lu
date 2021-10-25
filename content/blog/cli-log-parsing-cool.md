---
title: "面對 Log 檔的思路"
redirect_from:
  - /posts/cli-log-parsing-cool/
author: "dsewnr"
cover: "/images/cli-log-parsing-cool-cover.jpg"
tags: ["Log", "Parse", "Analyze", "Unix-Like", "CLI"]
categories: ["Share"]
date: 2019-09-28T10:13:38+08:00
draft: false
---

最近有種感覺，因為雲端服務的蓬勃發展，在 Unix-Like 中荒野求生的需求越來越少，解析 log 檔好像已經漸漸的沒那麼被重視？需要？還是這其實是我的錯覺… 或是換句話說，這個技能正在失傳。

<!--more-->

是不是錯覺不知道，也可能是我職涯發展的關係，越來越少遇到擁有這項技能的人，在我大三修的系統管理課堂中，老師帶我們看了一些終端機指令的原始碼後，講了句讓我到現在都還印象深刻的話：「這些程式都是經過長時間的驗證流傳到現在，不要重複造輪子，自己寫也未必會寫的比它好。」


無論如何來分享一下我面對一個 Log 檔的思路吧。

---

## 本篇有用到的指令
file、ls、cat、head、grep、awk、sort、uniq

---

## 情境開始

假設今天遇到了一個 log 檔
```
$ file access.log
access.log: ASCII text, with very long lines
```
確定是文字檔

## 檔案大小

首先來確認一下檔案大小
```
$ ls -lh access.log
-rw-r----- 1 dsewnr dsewnr 249K  9月 28 10:10 access.log
```
OK，檔案沒很大

直接印出內容看，或用編輯器直接打開來看
```
$ cat access.log
... (略)
85.105.133.146 - - [27/Sep/2019:06:34:42 +0800] "GET / HTTP/1.0" 200 415 "-" "-"
216.244.66.240 - - [27/Sep/2019:06:35:54 +0800] "GET /robots.txt HTTP/1.1" 301 185 "-" "Mozilla/5.0 (compatible; DotBot/1.1; http://www.opensiteexplorer.org/dotbot, help@moz.com)"
66.249.79.227 - - [27/Sep/2019:06:37:33 +0800] "GET /ads.txt HTTP/1.1" 301 185 "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
14.186.29.249 - - [27/Sep/2019:06:38:12 +0800] "GET ../../mnt/custom/ProductDefinition HTTP" 400 173 "-" "-"
216.244.66.242 - - [27/Sep/2019:06:41:34 +0800] "GET /robots.txt HTTP/1.1" 301 185 "-" "Mozilla/5.0 (compatible; DotBot/1.1; http://www.opensiteexplorer.org/dotbot, help@moz.com)"
18.233.194.247 - - [27/Sep/2019:06:44:54 +0800] "GET /robots.txt HTTP/1.1" 301 185 "-" "Mozilla/5.0 (compatible; AdsrvrBot)"
216.244.66.226 - - [27/Sep/2019:06:46:50 +0800] "GET /robots.txt HTTP/1.1" 404 169 "-" "Mozilla/5.0 (compatible; DotBot/1.1; http://www.opensiteexplorer.org/dotbot, help@moz.com)"
148.64.56.126 - - [27/Sep/2019:06:49:09 +0800] "GET /tidal/%E6%BC%81%E6%B8%AF%E8%8A%B1%E8%93%AE HTTP/1.1" 301 185 "-" "Mozilla/5.0 (compatible; GrapeshotCrawler/2.0; +http://www.grapeshot.co.uk/crawler.php)"
66.249.79.229 - - [27/Sep/2019:06:51:16 +0800] "GET / HTTP/1.1" 301 185 "-" "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
54.36.149.83 - - [27/Sep/2019:07:01:57 +0800] "GET / HTTP/1.1" 301 185 "-" "Mozilla/5.0 (compatible; AhrefsBot/6.1; +http://ahrefs.com/robot/)"
```

那假設今天的**檔案很大**，是幾 G 幾十 G 甚至是破百 G 呢？

cat 下去螢幕刷到天荒地老，編輯器一開當在那邊，會是什麼問題？

硬碟 I/O 不夠快，記憶體不夠大，是我的問題嗎(x)

## 特徵

Log 檔很大！問題就很大！

那就要來想辦法折解問題，把問題變小，把 log 檔變小。

假設有明確的特徵，先用 grep 把有特徵的 log 重導向到新的檔案

例如特徵是某個 IP 好了
```
$ grep 210.52.224.155 access.log > access.log.210.52.224.155
$ cat access.log.210.52.224.155
...(略)
210.52.224.155 - - [28/Sep/2019:01:14:37 +0800] "GET / HTTP/1.0" 200 415 "-" "-"
210.52.224.155 - - [28/Sep/2019:01:14:47 +0800] "GET /nmaplowercheck1569604487 HTTP/1.1" 404 169 "-" "Mozilla/5.0 (compatible; Nmap Scripting Engine; https://nmap.org/book/nse.html)"
210.52.224.155 - - [28/Sep/2019:01:14:47 +0800] "GET / HTTP/1.0" 200 415 "-" "-"
210.52.224.155 - - [28/Sep/2019:01:14:47 +0800] "GET / HTTP/1.0" 200 415 "-" "-"
210.52.224.155 - - [28/Sep/2019:01:14:47 +0800] "POST /sdk HTTP/1.1" 404 169 "-" "Mozilla/5.0 (compatible; Nmap Scripting Engine; https://nmap.org/book/nse.html)"
210.52.224.155 - - [28/Sep/2019:01:14:47 +0800] "GET / HTTP/1.1" 200 415 "-" "-"
210.52.224.155 - - [28/Sep/2019:01:14:47 +0800] "GET /evox/about HTTP/1.1" 404 169 "-" "Mozilla/5.0 (compatible; Nmap Scripting Engine; https://nmap.org/book/nse.html)"
210.52.224.155 - - [28/Sep/2019:01:14:47 +0800] "GET /HNAP1 HTTP/1.1" 404 169 "-" "Mozilla/5.0 (compatible; Nmap Scripting Engine; https://nmap.org/book/nse.html)"
210.52.224.155 - - [28/Sep/2019:01:15:02 +0800] "GET / HTTP/1.1" 200 415 "-" "Mozilla/5.0 (compatible; Wappalyzer)"
210.52.224.155 - - [28/Sep/2019:01:15:03 +0800] "GET / HTTP/1.1" 200 415 "-" "Chrome/54.0 (Windows NT 10.0)"
210.52.224.155 - - [28/Sep/2019:01:15:16 +0800] "GET / HTTP/1.1" 301 185 "-" "Mozilla/5.0 (compatible; Wappalyzer)"
210.52.224.155 - - [28/Sep/2019:01:15:17 +0800] "GET / HTTP/1.1" 301 185 "-" "Chrome/54.0 (Windows NT 10.0)"
210.52.224.155 - - [28/Sep/2019:01:15:28 +0800] "GET / HTTP/1.1" 301 185 "-" "Mozilla/5.0 (compatible; Wappalyzer)"
210.52.224.155 - - [28/Sep/2019:01:15:29 +0800] "GET / HTTP/1.1" 301 185 "-" "Chrome/54.0 (Windows NT 10.0)"
210.52.224.155 - - [28/Sep/2019:01:15:44 +0800] "GET / HTTP/1.1" 301 185 "-" "Mozilla/5.0 (compatible; Wappalyzer)"
210.52.224.155 - - [28/Sep/2019:01:15:45 +0800] "GET / HTTP/1.1" 301 185 "-" "Chrome/54.0 (Windows NT 10.0)"
210.52.224.155 - - [28/Sep/2019:01:15:46 +0800] "GET / HTTP/1.1" 301 185 "-" "Mozilla/5.0 (compatible; Wappalyzer)"
210.52.224.155 - - [28/Sep/2019:01:15:48 +0800] "GET / HTTP/1.1" 301 185 "-" "Chrome/54.0 (Windows NT 10.0)"
210.52.224.155 - - [28/Sep/2019:01:15:49 +0800] "GET / HTTP/1.1" 301 185 "-" "Mozilla/5.0 (compatible; Wappalyzer)"
210.52.224.155 - - [28/Sep/2019:01:15:50 +0800] "GET / HTTP/1.1" 301 185 "-" "Chrome/54.0 (Windows NT 10.0)"
```
把有包含該 IP 的 log 找出來了

更進一步只想知道狀態碼不是 200 的 log
```
$ awk '{if($9!=200){print $0}}' access.log.210.52.224.155 > access.log.210.52.224.155-200
$ cat access.log.210.52.224.155-200
210.52.224.155 - - [28/Sep/2019:01:14:47 +0800] "GET /nmaplowercheck1569604487 HTTP/1.1" 404 169 "-" "Mozilla/5.0 (compatible; Nmap Scripting Engine; https://nmap.org/book/nse.html)"
210.52.224.155 - - [28/Sep/2019:01:14:47 +0800] "POST /sdk HTTP/1.1" 404 169 "-" "Mozilla/5.0 (compatible; Nmap Scripting Engine; https://nmap.org/book/nse.html)"
210.52.224.155 - - [28/Sep/2019:01:14:47 +0800] "GET /evox/about HTTP/1.1" 404 169 "-" "Mozilla/5.0 (compatible; Nmap Scripting Engine; https://nmap.org/book/nse.html)"
210.52.224.155 - - [28/Sep/2019:01:14:47 +0800] "GET /HNAP1 HTTP/1.1" 404 169 "-" "Mozilla/5.0 (compatible; Nmap Scripting Engine; https://nmap.org/book/nse.html)"
210.52.224.155 - - [28/Sep/2019:01:15:16 +0800] "GET / HTTP/1.1" 301 185 "-" "Mozilla/5.0 (compatible; Wappalyzer)"
210.52.224.155 - - [28/Sep/2019:01:15:17 +0800] "GET / HTTP/1.1" 301 185 "-" "Chrome/54.0 (Windows NT 10.0)"
210.52.224.155 - - [28/Sep/2019:01:15:28 +0800] "GET / HTTP/1.1" 301 185 "-" "Mozilla/5.0 (compatible; Wappalyzer)"
210.52.224.155 - - [28/Sep/2019:01:15:29 +0800] "GET / HTTP/1.1" 301 185 "-" "Chrome/54.0 (Windows NT 10.0)"
210.52.224.155 - - [28/Sep/2019:01:15:44 +0800] "GET / HTTP/1.1" 301 185 "-" "Mozilla/5.0 (compatible; Wappalyzer)"
210.52.224.155 - - [28/Sep/2019:01:15:45 +0800] "GET / HTTP/1.1" 301 185 "-" "Chrome/54.0 (Windows NT 10.0)"
210.52.224.155 - - [28/Sep/2019:01:15:46 +0800] "GET / HTTP/1.1" 301 185 "-" "Mozilla/5.0 (compatible; Wappalyzer)"
210.52.224.155 - - [28/Sep/2019:01:15:48 +0800] "GET / HTTP/1.1" 301 185 "-" "Chrome/54.0 (Windows NT 10.0)"
210.52.224.155 - - [28/Sep/2019:01:15:49 +0800] "GET / HTTP/1.1" 301 185 "-" "Mozilla/5.0 (compatible; Wappalyzer)"
210.52.224.155 - - [28/Sep/2019:01:15:50 +0800] "GET / HTTP/1.1" 301 185 "-" "Chrome/54.0 (Windows NT 10.0)"
```
把有包含該 IP 並且狀態碼不是 200 的 log 找出來了

或是再更進一步只想知道狀態碼不是 200 並且時間是在一點十四分的 log
```
$ awk '{if($9!=200){print $0}}' access.log.210.52.224.155-200 | grep 28\/Sep\/2019:01:14 > access.log.210.52.224.155-200-201909280114
$ cat access.log.210.52.224.155-200-201909280114
210.52.224.155 - - [28/Sep/2019:01:14:47 +0800] "GET /nmaplowercheck1569604487 HTTP/1.1" 404 169 "-" "Mozilla/5.0 (compatible; Nmap Scripting Engine; https://nmap.org/book/nse.html)"
210.52.224.155 - - [28/Sep/2019:01:14:47 +0800] "POST /sdk HTTP/1.1" 404 169 "-" "Mozilla/5.0 (compatible; Nmap Scripting Engine; https://nmap.org/book/nse.html)"
210.52.224.155 - - [28/Sep/2019:01:14:47 +0800] "GET /evox/about HTTP/1.1" 404 169 "-" "Mozilla/5.0 (compatible; Nmap Scripting Engine; https://nmap.org/book/nse.html)"
210.52.224.155 - - [28/Sep/2019:01:14:47 +0800] "GET /HNAP1 HTTP/1.1" 404 169 "-" "Mozilla/5.0 (compatible; Nmap Scripting Engine; https://nmap.org/book/nse.html)"
```
把有包含該 IP 並且狀態碼不是 200 且時間是在一點十四分的 log 找出來了

就是這樣一層一層過濾讓 log 檔越變越小直到找到目標。

## 分析

假設今天想知道哪個 IP 造訪次數最多

先用 head 指令大概瞄一下 log 檔的長像
```
$ head -n 100 access.log
...(略)
66.240.205.34 - - [27/Sep/2019:08:38:53 +0800] "Gh0st\xAD\x00\x00\x00\xE0\x00\x00\x00x\x9CKS``\x98\xC3\xC0\xC0\xC0\x06\xC4\x8C@\xBCQ\x96\x81\x81\x09H\x07\xA7\x16\x95e&\xA7*\x04$&g+\x182\x94\xF6\xB000\xAC\xA8rc\x00\x01\x11\xA0\x82\x1F\x5C`&\x83\xC7K7\x86\x19\xE5n\x0C9\x95n\x0C;\x84\x0F3\xAC\xE8sch\xA8^\xCF4'J\x97\xA9\x82\xE30\xC3\x91h]&\x90\xF8\xCE\x97S\xCBA4L?2=\xE1\xC4\x92\x86\x0B@\xF5`\x0CT\x1F\xAE\xAF]" 400 173 "-" "-"
66.249.79.48 - - [27/Sep/2019:08:40:59 +0800] "GET /tidal/%E6%96%B0%E7%AB%B9%E5%B8%82%E9%A6%99%E5%B1%B1%E5%8D%80?PageSpeed=noscript HTTP/1.1" 301 185 "-" "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.96 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
154.126.215.85 - - [27/Sep/2019:08:41:33 +0800] "GET / HTTP/1.1" 200 415 "-" "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36"
157.55.39.31 - - [27/Sep/2019:08:43:02 +0800] "GET /robots.txt HTTP/1.1" 301 185 "-" "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)"
```
看起來是空白分隔的，有 IP、時間、請求方法、路徑、通訊協定…等

把 IP 截取出來
```
$ awk '{print $1}' access.log
...(略)
202.39.54.2
63.143.42.249
63.143.42.249
216.244.66.240
216.244.66.240
157.55.39.89
63.143.42.249
63.143.42.249
63.143.42.249
63.143.42.249
148.64.56.116
216.244.66.242
63.143.42.249
63.143.42.249
216.244.66.240
207.46.13.209
63.143.42.249
63.143.42.249
```
把 IP 截取出來，並排序
```
$ awk '{print $1}' access.log | sort
...(略)
79.35.38.172
81.201.62.105
83.110.151.181
83.219.146.185
84.19.90.115
85.105.133.146
86.122.156.239
89.64.61.182
89.64.61.182
91.134.248.253
91.148.141.162
91.206.33.25
91.217.254.53
94.46.176.10
94.46.176.10
94.46.176.10
94.46.176.10
95.161.230.138
```
把 IP 截取出來，並排序，然後算出現的次數
```
$ awk '{print $1}' access.log | sort | uniq -c
...(略)
      2 66.249.79.96
      1 72.139.68.174
      1 77.89.245.118
      1 78.128.113.18
      2 79.239.51.30
      1 79.35.38.172
      1 81.201.62.105
      1 83.110.151.181
      1 83.219.146.185
      1 84.19.90.115
      1 85.105.133.146
      1 86.122.156.239
      2 89.64.61.182
      1 91.134.248.253
      1 91.148.141.162
      1 91.206.33.25
      1 91.217.254.53
      4 94.46.176.10
      1 95.161.230.138
```
把 IP 截取出來，並排序，然後算出現的次數
```
$ awk '{print $1}' access.log | sort | uniq -c | sort -n -k 1
...(略)
      4 52.11.94.217
      4 94.46.176.10
      5 148.64.56.113
      5 148.64.56.123
      5 192.99.15.139
      7 216.244.66.239
      7 64.140.200.40
      9 112.29.140.226
     10 66.249.79.51
     13 216.244.66.242
     14 144.76.4.41
     20 210.52.224.155
     33 192.99.14.117
     33 192.99.6.138
     35 216.244.66.226
     37 66.249.79.48
     50 192.151.145.82
     54 144.76.60.198
     54 158.69.245.202
     72 216.244.66.240
    549 63.143.42.249
```
這樣就可以知道每個 IP 造訪幾次了！

---

以上是目前想到最基本的應用，還有很多很多好用的指令還沒提到，各種指令組合變化又可以解決更多不同的問題。

有想到再寫 :P
