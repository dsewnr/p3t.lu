---
title: "解決我的 fish shell 變慢的問題"
redirect_from:
  - /posts/fish-shell-slow-issue/
author: "dsewnr"
#cover: "/img/cover.jpg"
tags: ["fish", "shell", "performance", "nvm"]
date: 2020-06-24T23:43:21+08:00
draft: false
---

[fish shell](https://fishshell.com/) 從之前的 Linux 使用到現在的 macOS 一直都是速度非常快的，尤其是裝了幾個常用的外掛也不曾感到變慢過。(例如 git 外掛在切換到 git 資料夾時的體感速度)

這週在讀書會帶工作坊的時候，因為要開很多 terminal 做不同的操作才意識到「靠… 怎麼變那麼慢。」，每開一個新的 shell 心裡就會靠一次… 開 shell 還要等真的是會讓人很不爽。

只好拜請 Google 大神看看有沒有解，後來找到這篇「[MacOS 10.15 Beta - Slow Fish Prompts #5980](https://github.com/fish-shell/fish-shell/issues/5980)」，雖然都是變慢但跟我的 root cause 不一樣，但裡面有提到 fish shell profiling 的方法：
```
fish --profile /tmp/profile -c fish_prompt; sort -nk2 /tmp/profile
```
然後我的執行結果如下：

```
…以上略…
138     52399   ---------> test -e (brew --prefix)/Cellar/nvm
19      59575   -> if [ (_git_branch_name) ]
63140   63140   -----> command grep --color=auto $argv
160     68979   > fish_prompt
5994    92279   ----> ps -ef | grep $SSH_AGENT_PID | grep -v grep | grep -q ssh-agent
39      92452   ---> not __ssh_agent_is_started
4       92456   --> if not __ssh_agent_is_started
99      92853   -> fish_ssh_agent
174     130993  > builtin source /Users/peter_br_lu/.config/fish/config.fish
705586  705586  -------------> bash -c "$program && echo && echo '$divider' && env" 2>&1
277     705863  ------------> set program_execution (bash -c "$program && echo && echo '$divider' && env" 2>&1)
179     738392  -----------> fenv.main $argv
12      745890  ----------> if test (count $argv) -gt 0
90      745980  ---------> fenv source $nvm_prefix/nvm.sh >/dev/null 2>&1
883646  883646  ----------> brew --prefix nvm
216     883862  ---------> set -g nvm_prefix (brew --prefix nvm)
21      1686271 --------> if type -q fenv
40      1686311 -------> init /Users/peter_br_lu/.local/share/omf/pkg/nvm
139     1686450 ------> emit init_$package $path
237     1716659 -----> for init in $init_path
431     1722284 ----> require --path {$OMF_PATH,$OMF_CONFIG}/pkg/*
517     1726529 ---> source $OMF_PATH/init.fish
275     1726911 --> source $file
589     1728200 -> for file in $__fish_config_dir/conf.d/*.fish $__fish_sysconf_dir/conf.d/*.fish $vendor_confdirs/*.fish
1378    1736909 > builtin source /usr/local/Cellar/fish/3.1.2/share/fish/config.fish
```
第一行是 time，第二行是 sum，第三行是 command

然後我就用時間排序一下
```
…以上略…
555     555     -----> set conf_path $package_path/conf.d/*.fish
586     21317   -> fish_vi_key_bindings
589     1728200 -> for file in $__fish_config_dir/conf.d/*.fish $__fish_sysconf_dir/conf.d/*.fish $vendor_confdirs/*.fish
601     601     -----> set init_path $package_path/init.fish*
606     606     -----> set complete_path $package_path/completions*
622     643     ----------> source /usr/local/Cellar/fish/3.1.2/share/fish/functions/type.fish
642     655     --> source /usr/local/Cellar/fish/3.1.2/share/fish/functions/__fish_set_locale.fish
648     648     -----> set function_path $package_path/functions*
696     5409    ----------------> for value in $argv
699     699     ----> set -l theme_function_path {$OMF_CONFIG,$OMF_PATH}/themes*/$theme{,/functions}
699     731     ----> source /usr/local/Cellar/fish/3.1.2/share/fish/functions/__fish_shared_key_bindings.fish
1372    1386    --> source /usr/local/Cellar/fish/3.1.2/share/fish/functions/fish_vi_key_bindings.fish
1378    1736909 > builtin source /usr/local/Cellar/fish/3.1.2/share/fish/config.fish
5994    92279   ----> ps -ef | grep $SSH_AGENT_PID | grep -v grep | grep -q ssh-agent
6973    6973    -----> command grep --color=auto $argv
7065    7065    -------> echo | command grep --color=auto "" >/dev/null 2>&1
7088    7088    -------------> echo $argv | sed 's/[ \t]//g'
7778    7778    --> pwd | sed "s:^$HOME:~:"
8946    8946    -----> command grep --color=auto $argv
9110    9110    --> tty
12417   12417   -------------> bash -c 'env'
15441   15441   --------> not which autojump >/dev/null ^/dev/null
16406   16406   -----> command git symbolic-ref HEAD 2> /dev/null | sed -e 's|^refs/heads/||'
19165   19165   ------> command git status -s --ignore-submodules=dirty 2> /dev/null
22741   22741   -----> command git symbolic-ref HEAD 2> /dev/null | sed -e 's|^refs/heads/||'
52261   52261   ----------> brew --prefix
63140   63140   -----> command grep --color=auto $argv
705586  705586  -------------> bash -c "$program && echo && echo '$divider' && env" 2>&1
883646  883646  ----------> brew --prefix nvm
```
從最下面往上逐一檢視

疑… nvm！！！
```
883646  883646  ----------> brew --prefix nvm
```
手動執行了一下還真的是有點慢的感覺…

所以我就試著把 [Oh My Fish!](https://github.com/oh-my-fish/oh-my-fish) 裝的 nvm 外掛移掉試試，果然變快了！如下圖：
![](/images/fish-shell-slow-issue.png)

執行時間從 2.33**s** 變成 221.41**ms**！！！

## 舒服！

好吧，只好先這樣，有要用 nvm 的時候再裝回來好惹…
