---
title: '分享我的 Vim 設定檔 (vimrc)'
author: 'dsewnr'
#cover: "/img/cover.jpg"
tags: ['vim', 'Editor', 'vimrc', '設定檔', '編輯器']
date: 2019-10-18T23:26:16+08:00
draft: false
---

(**這整篇算是有紀錄以來的 vimrc 演進，最新狀態可直接 end 跳到頁尾**)

平常有用 Vim 在寫 Go, Python, PHP, JavaScript, HTML, Markdown...等，以不用滑鼠的寫作習慣這樣還算可以應付。從零想要快速進入一個「仿 IDE」的使用環境的話可以直接試試我的配置(我是用 [vim-plug](https://github.com/junegunn/vim-plug) 作 Vim plugin manager)，但 Vim 的配置就跟自己的親生小孩一樣，畢竟是自己的致愛，是很需要花時間自己養成的！自己才知道自己需要什麼~ 每個人習慣的「手路」都不一樣。也可以參考網路上大大的討論來發現新玩意兒，我比較常看的 Telegram 討論群組有 [Vim 中文](https://t.me/joinchat/EazwP0N3KINBeWdGcFACNw) 和 [Vim 正體中文社群](https://t.me/vim_tw)。

## Vim 螢幕截圖

![](/images/vim-screenshot.jpg)

## [.vimrc](https://gist.github.com/dsewnr/58dab3d3112c3cf479dfc087464ca28d)

`gist:dsewnr/58dab3d3112c3cf479dfc087464ca28d#.vimrc`

#### 2021/06/02 update

後來改用 [Neovim](https://github.com/neovim/neovim) 了，也裝了幾個 Neovim 限定的外掛，附上現在的 init.vim

## [init.vim](https://gist.github.com/dsewnr/48944ab02a1b75cf7642a8fd856eca53)

`gist:dsewnr/48944ab02a1b75cf7642a8fd856eca53#init.vim`

#### 2021/09/07 update

在最近一次高度自訂 Neovim 之後看到有人分享了 [NvChad](https://github.com/NvChad/NvChad)，看了一下發現跟我挑的 plugin 有 90% 像… 就改用 NvChad 當底，再加上自己客製化的設定，目前使用上覺得還蠻滿意的！推薦大家也用用看 NvChad，裝好就已經是一個 ready-to-use 的狀態了！
