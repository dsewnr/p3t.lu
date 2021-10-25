---
title: "我的 Mac 開發環境 (terminal)"
redirect_from:
  - /posts/mac-dev-env/
author: "dsewnr"
#cover: "/img/cover.jpg"
tags: ["Mac", "dev", "environment", "terminal", "Alacritty", "fish", "shell", "tmux", "Neovim", "editor"]
date: 2021-06-02T03:10:21+08:00
draft: false
---

如果只能用一行文字來表示就是 Alacritty + fish + tmux + Neovim + Tmuxinator

### [Alacritty](https://github.com/alacritty/alacritty)
之前是 Linux 使用者，因為愛玩也用了不少桌面環境，也都乖乖的用著桌面環境的預設 terminal，後來不小心得知有 GPU 加速的 terminal，才試了 [kitty](https://github.com/kovidgoyal/kitty) 和 Alacritty，一用真的驚為天人啊！這才是正常該有的速度吧！

kitty 相較 Alacritty 功能更完備，但不知道是不是因為功能太多速度就稍稍降下了，後來還是選擇用較陽春的 Alacritty。

換到 Mac 後也用了好一陣子很多人唯一解 [iTerm2](https://iterm2.com/)，一開始覺得設定什麼的都很簡單，該有的都有了，但用久了就覺得好像卡卡的，後來又換回用 Alacritty 了，那到底我是如何知道速度的呢？就是裝起來快速的按幾下 enter 應該就會有感覺了 XD
### [fish](https://github.com/fish-shell/fish-shell)
shell 我也是用過不少，從剛接觸 Unix-like 還懵懂無知時的 sh，用 FreeBSD 時習慣的 csh/tcsh，用 Linux 時習慣的 bash，後來用 Linux 桌面環境時才發現的屌物 zsh，到現在的 fish！為什麼會選擇用 fish 呢？快！不裝任何 plugin 已經是好用的程度了，要裝 plugin 也可透過 [Oh My Fish](https://github.com/oh-my-fish/oh-my-fish) 安裝，另外 fish 的語法跟 bash/zsh 有點不一樣，一開始 shell rc 要從 bash or zsh 轉換到 fish 可能會花點時間…
### [tmux](https://github.com/tmux/tmux)
讀大學的時候是喜歡用 [screen](https://www.gnu.org/software/screen/)，那時最常用 screen + [irssi](https://github.com/irssi/irssi) 在遠端機器上掛 IRC，畢業後第一份工作是系統工程師，需要不時監控著一大堆的 log，使用 tmux 可以輕易的分割視窗並任意的在視窗間跳躍，愛怎麼切就怎麼切，喜歡怎麼跳就怎麼跳，當時就是靠 tmux 吃飯der，需要在 terminal 下生存的人極度建議要會使用，而 tmux 的外掛我是用 [Tmux Plugin Manager](https://github.com/tmux-plugins/tpm) 來做管理。
### [Neovim](https://github.com/neovim/neovim)
Neovim 我的主力編輯器，之前用過 [Sublime Text](https://www.sublimetext.com/)、[Geany](https://www.geany.org/)、[Notepad++](https://notepad-plus-plus.org/)、[Atom](https://atom.io/)、[Visual Studio Code](https://code.visualstudio.com/)，最後還是回到單純的美好… (其實一點也不單純)，花了不少心血調教怎麼捨得放棄 QQ，我的 rc file 在「[分享我的 Vim 設定檔 (vimrc)](/vimrc/)」中有分享，原本是寫了一個可以讓 Vim 與 Neovim 共用的，但後來因為 Neovim 支援 Lua 太香就把 Neovim 變主力了！
### [Tmuxinator](https://github.com/tmuxinator/tmuxinator)
讓我可以一行指令就把工作環境開好！
