---
title: "GatsbyJS + GitHub Actions 懶人寫部落格"
author: "dsewnr"
#cover: "/img/cover.jpg"
tags: ["GatsbyJS", "GitHub", "Actions", "Automation"]
date: 2022-04-25T22:06:52+08:00
draft: false
---

這篇文件不是要說如何使用 GatsbyJS，而是要來說一下 [Gatsby Publish](https://github.com/marketplace/actions/gatsby-publish) 這個 GitHub Action 有多方便！

因為 [p3t.lu](https://p3t.lu) 是放在 GitHub Pages，也就是 GitHub Pages 上放的都是 GatsbyJS build 完後的靜態檔案，也就是說在放上去 GitHub Pages 前要先在某台機器上把靜態檔案 build 好，也就是說在要 build 就要在那台電腦上裝好 GatsbyJS 及其相依的套件讓該 GatsbyJS 專案可以順利運作。

撇除掉要建立 GatsbyJS 專案裝好環境，發佈新文章的流程就是：
1. 在本機編輯 Markdown 檔案
2. 在本機透過 `gatsby develop` 看結果
3. 在本機透過 `gatsby build` 出成品
4. 把成品推到 GitHub `gh-pages` branch (可裝 GatsbyJS plugin 在 build 的時候完成這一動)

以上就是一個典型的/我之前在用的發佈文章方式，因為那些文章都是"當時"的心得，時間一直在前進，我們的人生也一直在往前走，想法也會隨著時間而改變，文章內容當然也要與時俱進，所以不時也需要且必要的去更新一下舊文，但因為有時候只是要加幾句心得、改個字…等等，就會很懶得還要去使用"特定電腦"做這件事，最好是隨時隨地隨手想到就可以辦到…

於是就開始尋找懶人方法，看了好幾種方法最後看到了 [Gatsby Publish](https://github.com/marketplace/actions/gatsby-publish) 這個 GitHub Action。用了它之後我只要可以編輯 Markdown 檔案 commit 後推到 GitHub 後再等一下就可以看到結果了，或是連電腦 git 指令都不用，直接上 github.com 編輯 Markdown 後並 commit 就可以完成，實在是夠懶夠方便 XD

使用方法上也是夠簡單，照著 [Gatsby Publish](https://github.com/marketplace/actions/gatsby-publish) 的說明應該兩三下就弄好了，或是可以參考我的設定 [https://github.com/dsewnr/p3t.lu/blob/master/.github/workflows/gatsby-publish.yml](https://github.com/dsewnr/p3t.lu/blob/master/.github/workflows/gatsby-publish.yml)，其實沒設定什麼…

#### 總之各位是使用 GatsbyJS 而且又把站放在 GitHub Pages 的，一定要來試一試！會非常的快樂wwww

![](/images/gatsby-publish-github-action-0.jpg)
