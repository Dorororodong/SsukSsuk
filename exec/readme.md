# ๐ง๋น๋ ๋ฐ ๋ฐฐํฌ

## ๐จ ๋น๋

### 1. back- end

> [node.js ์ค์น(16.14.0 LTS)](https://nodejs.org/ko/)  ์ค์น
> `npm install` ์ ํตํด node-modules ๋ค์ด  
> `npm start`๋ฅผ ํตํด node.js ์คํ  

### 2. front-end

> `npm install`์ ํตํด node-modules ์ค์น  
> `npm start`๋ฅผ ํตํด ์คํ  

### 3. Rasbarry Pi
 > ํ๊ธ ์ค์น  
 > pyQt5 ์ค์น  
 > Qtsql ์ค์น  
 > senseHat/senseEmu ์ค์น  
 > bcrypt  ์ค์น  
 > hashlib  ์ค์น   
 > firebase ์ค์น   
 > PiCamera ์ค์น  
 > matchbox-keyboard ์ค์น  
 > ๋ชจ๋  ๋ชจ๋ ์ค์น ํ `sudo python3 [๋ค์ด๋ฐ์ ํด๋ ๊ฒฝ๋ก]/login.py` ๋ก ์คํ  
 
 </br>

## ๐พ ๋ฐฐํฌ

### ๐๐ป์ค์น

> mysql(8.0.28) ์ค์น

> node(16.14.0)์ npm(8.3.1) ์ค์น

> docker(20.10.12) ์ค์น

> nginx(1.18.0) ์ค์น

### ๐๐ป DataBase

> mysql ์ ์  
> ID : jeans  
> pw : cjdcnsdmsqkfhwlrma  

### ๐๐ป back-end

> ์์ฑํด๋ Dockerfile์ ์ด์ฉ
>
> - `docker build . t back:0.1` ๋ฅผ ํตํด docker ์ด๋ฏธ์ง ์์ฑ
> - `docker run -i -t -d -p 3001:3001 --name nodeserver back:0.1` docker ์ปจํ์ด๋ ์คํ
> - host:3001์ ์ ์ํด ์คํ์ ํ์ธํ๋ค.

### ๐๐ป front-end

> - `npm install --save --legacy-peer-deps` ์ ์ด์ฉํด node-modules์ package-lock.json ์์ฑ
> - `npm install @nivo/core` ๋ฅผ ํตํด @nivo/core ์ค์น
> - `npm run build`๋ฅผ ์คํ ๋น๋ ํ์ผ ์์ฑ
> - nginx conf ํ์ผ์ server-name ์์ 
> - `systemctl start nginx`๋ฅผ ์ด์ฉ nginx ์คํ
> - https ์ ์ฉ์ ์ํด certbot์ ์ด์ฉํด ssl ์ธ์ฆ์ ๋ฐ๊ธ
> - ๋ค์ nginx conf ํ์ผ์ ์์ 
>
> ```
> server {
> 	root [front ๋น๋ํ์ผ ๊ฒฝ๋ก];
>
> 	index index.html;
>
> 	server_name [๋๋ฉ์ธ ์ฃผ์];
>
> 	location / {
> 		try_files $uri $uri/ /index.html =404;
> 	}
>
>     	listen [::]:443 ssl ipv6only=on; # managed by Certbot
>     	listen 443 ssl; # managed by Certbot
>
>     	ssl_certificate /etc/letsencrypt/live/i6a103.p.ssafy.io/fullchain.pem; # managed by Certbot
>     	ssl_certificate_key /etc/letsencrypt/live/i6a103.p.ssafy.io/privkey.pem; # managed by Certbot
>    		include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
>    		ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
>
> 	location /api {
>         	proxy_pass http://[๋๋ฉ์ธ์ฃผ์]:3001;
> 	    }
> }
> server {
>    if ($host = [๋๋ฉ์ธ์ฃผ์]) {
>        return 301 https://$host$request_uri;
>     } # managed by Certbot
>
> 	listen 80;
> 	listen [::]:80;
>
> 	server_name [๋๋ฉ์ธ์ฃผ์];
>     return 404; # managed by Certbot
> }
> ```
>
> ์์ ๊ฐ์ด nginx conf ์์   
> `systemctl reload nginx` ๋ช๋ น์ด ์คํ nginx๋ฅผ reloadํ์ฌ https ์ ์ฉ๊ณผ ์คํ์ ํ์ธํ๋ค.


</br>

---

# ๐ ์ธ๋ถ ์๋น์ค

### AWS S3

> ์ด๋ฏธ์ง๋ฅผ ์ ์ฅํ๊ธฐ ์ํ backend/env ํด๋์ jsonํ์์ผ๋ก ํ์ํ ์ ๋ณด ๆ

### Firebase

> ๋ผ์ฆ๋ฒ ์ดํ์ด์์ ์ค์๊ฐ ์ด๋ฏธ์ง๋ฅผ ์ ์กํ๊ธฐ์ํด ์ด์ฉํ๋ ์ด๋ฏธ์ง ์๋ฒ, ํ์์ ๋ณด frontend/.env.local ๆ
