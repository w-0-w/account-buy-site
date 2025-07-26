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

#SSL-START SSL related configuration
    #error_page 404/404.html;
    ssl_certificate    /www/server/panel/vhost/cert/account_buy_site/fullchain.pem;
    ssl_certificate_key    /www/server/panel/vhost/cert/account_buy_site/privkey.pem;
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    add_header Strict-Transport-Security "max-age=31536000";
    error_page 497  https://$host$request_uri;
    #SSL-END

chmod -R 777 ./build

user root;

```bash
# https://zhuanlan.zhihu.com/p/15685308934

# 查看列表
screen -ls

# 进入
screen -r fe_next

# 回到主界面
ctrl + a,d

# 这将启动一个新的 screen 会话并为其命名，有助于在多个会话之间进行区分。
screen -S session_name
```

* Screen 的状态有两种，Attached 和 Detached，分别表示前台运行和后台运行。
* 使用 screen -r 会话名（或者会话编号）可以将 Detached 状态的屏幕会话状态修改为 前台运行，并同时切换到这个会话中。
* 如果会话状态已经是 Attached 状态，使用命令 screen -r name（或者会话编号）将会报错：
  * There is no screen to be resumed matching 767(会话编号).
  * 如果需要切换到状态为 Attached 的会话下，需要先执行 screen -d 会话名 将会话状态修改为 Detached。
  * 将当前会话转为后台运行可以使用快捷键ctrl + a,d。



----

server {
    listen 80;
    # listen 443 ssl http2;
    server_name next.accountbuy.cc accountbuy.cc www.accountbuy.cc accountboy.cc www.accountboy.cc accountbuuy.cc www.accountbuuy.cc acountboy.cc www.acountboy.cc acountbuy.cc www.acountbuy.cc;

    #location /en-US/ {
    #    # 全局禁止缓存
    #    add_header Cache-Control "no-store, no-cache, must-revalidate, private";
    #    add_header Pragma "no-cache";
    #    add_header Expires "0";
    #    index en-US.html;
    #    root /root/web-root/account-buy-site/build;
    #    try_files $uri $uri/ /en-US.html;
    #}

    #location / {
    #    # 全局禁止缓存
    #    add_header Cache-Control "no-store, no-cache, must-revalidate, private";
    #    add_header Pragma "no-cache";
    #    add_header Expires "0";
    #    index index.html;
    #    root /root/web-root/account-buy-site/build;
    #    try_files $uri $uri/ /index.html;
    #}

    location / {
        proxy_pass http://127.0.0.1:3456;
    }

    access_log  /www/wwwlogs/fe_account_buy_site.log;
    error_log  /www/wwwlogs/fe_account_buy_site.error.log;
}