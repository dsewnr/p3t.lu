---
title: "Gatsby Framework"
redirect_from:
  - /posts/gatsby-framework/
author: "dsewnr"
#cover: "/img/cover.jpg"
tags: ["Gatsby", "Framework", "Blog", "React", "AMP", "PWA"]
date: 2019-10-06T03:51:01+08:00
draft: false
---

參加讀書會聽到，同事一直講，推上一直看到，引起來我好奇心

- [Github](https://github.com/gatsbyjs/gatsby) 38.8K 個星星
- React 速度快體驗好 (有感覺嗎？)
- [Plugin](https://www.gatsbyjs.org/plugins/) 豐富，包括 [AMP](https://www.gatsbyjs.org/plugins/?=amp) 支援
- 支援 CMSs, markdown, data 多種 datasource

更多資訊請到 [www.gatsbyjs.org](https://www.gatsbyjs.org/)

---

其實看到 Gatsby 都會想到這個廣告，小時候還蠻紅的… 但本肥宅不是 TA QQ

<iframe width="560" height="315" src="https://www.youtube.com/embed/4Kc3LgL65qA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" sandbox="allow-same-origin allow-scripts allow-presentation" layout="fill" allowfullscreen></iframe>

---

使用 [gatsby-starter-blog-amp-to-pwa](https://www.gatsbyjs.org/starters/tomoyukikashiro/gatsby-starter-blog-amp-to-pwa/) 開始建置，花了一個晚上從 [HUGO](https://gohugo.io/) 搬過來，有遇到一些問題：
1. 文章的路徑改變，看起來沒有簡單的修改方法
2. 原生沒有 markdown anchor 的支持
3. 可能需要修改 md 內圖片路徑
4. 我挑的主題沒有 tag，可能要自己裝+改？研究中
5. sitemap 要另外安裝外掛
6. AMP 圖片顯示上有點問題，換外掛解決/捨棄優化
7. 我的標籤雲不見了，要找找看有沒有得用
8. 預設的 YouTube iframe 屬性不足，html2amp 後 AMP validation 不會過

除了上述這些比較明顯的問題，如果不硬要用 AMP 主題的話，應該是不會遇到太多麻煩，我猜 XD

---

[2019/11/21 Updated] 因為 AMP 的圖片的問題心裡有個疙瘩，後來決定把問題解決然後回饋回去 [feat(gatsby-remark-images): add disableBgImage option #19152](https://github.com/gatsbyjs/gatsby/pull/19152)。這邊不得不提一下 GatsbyJS 的社群會那麼大又活躍不是沒有原因的，給貢獻者的文件寫的非常好，然後貢獻者可以得到一個免費的紀念品！

### 從美國寄來的 Gatsby swag
![](/images/gatsby-framework-swag.jpg)

