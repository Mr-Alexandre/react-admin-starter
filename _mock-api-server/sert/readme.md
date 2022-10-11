## Create sertificates

Firstly run:

```bash
openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365
```

Secondary run:

```bash
openssl rsa -in keytmp.pem -out key.pem
```
