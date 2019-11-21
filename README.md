## 配置

项目基于node开发,react+antd的后台管理系统

环境要求：

1.nodejs

2.nginx

## 安装

1.安装node_module

```sh
npm i
```

2.nginx配置，在 /usr/local/etc/nginx/nginx.conf 中加入(server_name可自由配置)

```sh
server {

      listen       1234;
      server_name  localhost;

      location / {
            proxy_pass http://localhost:9999/;
      }

      location ~ /(api|simg)/ {
            proxy_pass http://op.mianchao-inc.com;
      }
}
```

## 启动

1.启动服务 

```sh
npm start
```

2.启动打包服务 

```sh
npm run build
```

3.在浏览器打开前面配置的server_name+listen地址即可

## iconfont

icon 使用阿里矢量图

icon 配置在文件`./src/less/iconfont.less`

```css
<i classname="iconfont xx-name"></i>
```

## less

全局less文件文件`./src/less/variable.less`


如有问题请发邮件：`2496436621@qq.com`
