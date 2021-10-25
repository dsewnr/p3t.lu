---
title: "YubiKey 5C NFC"
author: "dsewnr"
#cover: "/img/cover.jpg"
tags: ["yubico", "YubiKey", "Type-C", "NFC", "Security"]
date: 2021-08-27T03:10:21+08:00
draft: false
---

觀望 YubiKey 很久了，在推特上不時會看到有人提到，google "YubiKey 用途" 找不到太多一眼看起來有用介紹，YouTube 也只有一些開箱評論，想了解真實生活中的 use cases，一直對 YubiKey 的使用情境充滿著好奇與幻想，剛好有朋友揪省運費就...www (結果後來沒成團 XD) 但一直止不住我的好奇心，所以最後還是決定 solo 親身體驗一下了 :p 

8/14 Amazon US 下單  
8/24 TPE 到貨

期間每天想到就會刷一下追蹤包裹頁面看貨到哪了，很期待著到貨，ETA 是 8/27 最後比預計的到貨時間早了三天。

收到一個牛皮紙袋
![](/images/yubikey-5c-nfc-0.jpg)

內容物 YubiKey 5C NFC
![](/images/yubikey-5c-nfc-1.jpg)

因為 8/23 剛打完疫苗，接下來的三天副作用讓我的手無法使用… 稍微恢復後才挑了個夜晚開始了我的 YubiKey 之旅。

---

首先，當然是爬了官網上的 [Works with YubiKey catalog](https://www.yubico.com/tw/works-with-yubikey/catalog/) 一輪，把自己有用的服務都試著設定看看，然後試一下它們是怎麼運作的，一開始還以為大家都會是一樣的行為，沒想到不同的服務跟 yubico 整合上也有些差異，試了一輪之後覺得 Microsoft 整合的好棒，真的是有感的方便！

有插著 YubiKey 的情況下會多出 "Sign in with a security key" 的選項，按了之後連原本的帳號密碼都不用打就可以直接登入了！(當然 YubiKey 還有設了一個 PIN 保護著)
![](/images/yubikey-5c-nfc-4.png)

---

因為本身有在用 GPG 所以參考了 [Using Your YubiKey with OpenPGP](https://support.yubico.com/hc/en-us/articles/360013790259-Using-Your-YubiKey-with-OpenPGP) 把我的 GPG key 放進 YubiKey 裡，然後參考了 [如何在 Mac 上，把 YubiKey 與 GPG、SSH 搭配在一起](https://medium.com/@SSWilsonKao/%E5%A6%82%E4%BD%95%E5%9C%A8-mac-%E4%B8%8A-%E6%8A%8A-yubikey-%E8%88%87-gpg-ssh-%E6%90%AD%E9%85%8D%E5%9C%A8%E4%B8%80%E8%B5%B7-5f842d20ad6a) 和 [SSH authentication using a GPG smart card](https://github.com/herlo/ssh-gpg-smartcard-config) 讓 YubiKey、GPG 及 SSH 做了整合！

BTW, 本文的 commit 就是透過 YubiKey 用裡面的 GPG key 簽名並透過 GPG 匯出的 SSH key 推上 GitHub 的！
![](/images/yubikey-5c-nfc-3.png)

---

當然我也試了 [Yubico Authenticator](https://www.yubico.com/products/yubico-authenticator/)，把 YubiKey 放在 iPhone 頭上感應解鎖的確是蠻潮的，多加一層保護也肯定是更安全，但 App 體感沒 Authy 那麼好用… 而且方便性又下降了一些，所以目前是沒有強烈的理由要把 App 2FA 的服務轉移過來，再觀望觀望吧。


最後附上我的 YubiKey 5C NFC 獨照
![](/images/yubikey-5c-nfc-2.jpg)

