# Deploy

```sh
ssh root@38.55.18.138 -p 14516
zy6P8K6m

cd /root/web-root/account-buy-site && npm run deploy
```

nginx
/www/server/nginx

nginx log
/www/wwwl....

nginx conf
/www/server/panel/vhost/nginx/fe_account_buy_site.conf

chmod -R 777 ./build

user root;

```bash
# 查看列表
screen -ls

# 进入
screen -r fe_next

# 回到主界面
ctrl + a,d
```

* Screen 的状态有两种，Attached 和 Detached，分别表示前台运行和后台运行。
* 使用 screen -r 会话名（或者会话编号）可以将 Detached 状态的屏幕会话状态修改为 前台运行，并同时切换到这个会话中。
* 如果会话状态已经是 Attached 状态，使用命令 screen -r name（或者会话编号）将会报错：
  * There is no screen to be resumed matching 767(会话编号).
  * 如果需要切换到状态为 Attached 的会话下，需要先执行 screen -d 会话名 将会话状态修改为 Detached。
  * 将当前会话转为后台运行可以使用快捷键ctrl + a,d。