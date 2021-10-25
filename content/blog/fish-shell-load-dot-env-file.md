---
title: "fish shell 讀 .env 檔設成環境變數"
author: "dsewnr"
#cover: "/img/cover.jpg"
tags: ["fish", "shell", ".env"]
date: 2021-07-16T03:10:21+08:00
draft: false
---

之前因為懶都直接切 zsh 讓 zsh 幫我載入 .env 檔，因為主要還是用 fish 開發，為了方便所以上網找了一下…

然後看到這篇[「Fish shell - Load environment variables from file」](https://lewandowski.io/2016/10/fish-env/)，作者是自己寫了一個 function 來幫忙，如下：

```shell
$ cat ~/.config/fish/functions/posix-source.fish                      
function posix-source
	for i in (cat $argv)
		set arr (echo $i |tr = \n)
  		set -gx $arr[1] $arr[2]
	end
end

$ posix-source web.env
```
<br/>
看了一下該文底下網友留言蠻熱烈也提供了一些改良的方法，於是我就依我本人的使用習慣稍微從中選擇了一個適手的版本：

```shell
$ cat ~/.config/fish/functions/posix-source.fish
function posix-source
    for i in (cat $argv | grep -e '[^[:space:]]' | grep -v '^#')
        set arr (echo $i |tr = \n)
        set -gx $arr[1] $arr[2]
    end
end

$ posix-source .env
```
<br/>
快樂使用中 :)
