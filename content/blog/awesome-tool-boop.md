---
title: "發現超好用小工具 Boop！如果沒有它，在 CLI 要如何解決？"
author: "dsewnr"
#cover: "/img/cover.jpg"
tags: ["boop", "tool", "security", "cli"]
date: 2020-06-16T23:33:21+08:00
draft: false
---

![](/images/awesome-tool-boop-ui.png)

睡前在推特上閒晃看到 [Boop](https://boop.okat.best/) 這個小工具，馬上把自己能分享的管道全部傳一輪，容我簡短的罵個髒話，幹幹幹幹幹幹，這真的是太讚了！！！平常工作與生活中就很常有這種需求，把字串轉來轉去，解開來又編回去之類的，我個人是蠻在意把一些有機敏資訊的字串貼到隨便 google 來的網頁上做轉換，所以也找了幾個能在 CLI 的解決方法，是說這些字串留在 shell history 中我也是覺得很母湯，打完我還會手動去把 history 清乾淨，這個 Boop 的出現真的是完完全全打中我的點啊啊啊啊啊啊啊啊！Boop 太好用了，有哪些功能就請各位自行去玩玩看啦！看它熱門的程度未來會支援的功能絕對會更加豐富，以下就來介紹一下平常在 CLI 會用到的解決方案 XD (試想一下未來有一天你沒 Boop 的時候該怎麼辦？)

## Base64
encode
```
⟩ echo 'base64' | base64
YmFzZTY0Cg==
```
decode
```
⟩ echo 'YmFzZTY0Cg==' | base64 --decode
base64
```

## URL
encode
```
⟩ python3 -c "import sys, urllib.parse as ul;print(ul.quote_plus(sys.argv[1]))" 'param1=god&param2=dog'
param1%3Dgod%26param2%3Ddog
```
decode
```
⟩ python3 -c "import sys, urllib.parse as ul;print(ul.unquote_plus(sys.argv[1]))" 'param1%3Dgod%26param2%3Ddog'
param1=god&param2=dog
```

## HTML
encode
```
⟩ python3 -c "import sys, html;print(html.escape(sys.argv[1]))" 'A>B&C'
A&gt;B&amp;C
```
decode
```
⟩ python3 -c "import sys, html;print(html.unescape(sys.argv[1]))" 'A&gt;B&amp;C'
A>B&C
```

## Format JSON
```
⟩ echo '{"key1":"value1","key2":123,"key3":["v","a","l","u","e","3"]}' | jq
{
  "key1": "value1",
  "key2": 123,
  "key3": [
    "v",
    "a",
    "l",
    "u",
    "e",
    "3"
  ]
}
```

## Count Characters
```
⟩ echo '0123456789
  9876543210' | wc -c
      22
```

## MD5 Checksum
```
⟩ echo 'test' | md5sum
d8e8fca2dc0f896fd7cb4cb0031ba249  -
```

## 總結
以上就是幾個日常比較常用到的方法，有些用到 Python 其實有點作弊，不過 alias 起來也是可以用的嚇嚇叫的！然後 Boop 真的很讚，能用快點用，用好用滿！
