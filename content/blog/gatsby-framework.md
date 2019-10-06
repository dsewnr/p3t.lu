---
title: "Gatsby Framework"
author: "dsewnr"
#cover: "/img/cover.jpg"
tags: ["Gatsby", "Framework", "Blog", "React", "AMP", "PWA"]
date: 2019-10-06T03:51:01+08:00
draft: false
---

最近看到 Gatsby 都會想到這個廣告，小時候還蠻紅的… 但本肥宅不是 TA QQ

<iframe width="560" height="315" src="https://www.youtube.com/embed/4Kc3LgL65qA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

參加讀書會聽到，同事一直講，推上一直看到，引起來我好奇心

- [Github](https://github.com/gatsbyjs/gatsby) 38.8K 個星星
- React 速度快體驗好 (有感覺嗎？)
- [Plugin](https://www.gatsbyjs.org/plugins/) 豐富，包括 [AMP](https://www.gatsbyjs.org/plugins/?=amp) 支援
- 支援 CMSs, markdown, data 多種 datasource

更多資訊請到 [www.gatsbyjs.org](https://www.gatsbyjs.org/) 看

---

使用 [gatsby-starter-blog-amp-to-pwa](https://www.gatsbyjs.org/starters/tomoyukikashiro/gatsby-starter-blog-amp-to-pwa/) 開始建置，花了一個晚上從 [HUGO](https://gohugo.io/) 搬過來，有遇到一些問題：
1. 文章的路徑改變，看起來沒有簡單的修改方法
2. 原生沒有 markdown anchor 的支持
3. 可能需要修改 md 內圖片路徑
4. 我挑的主題沒有 tag，可能要自己裝+改？研究中
5. sitemap 要另外安裝外掛
6. AMP 圖片顯示上有點問題，換外掛解決/捨棄優化
7. 我的標籤雲不見了，要找找看有沒有得用

除了上述這些比較明顯的問題，如果不硬要用 AMP 主題的話，應該是不會遇到太多麻煩，我猜 XD


