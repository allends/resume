---
title: blueberry
publishDate: 2023-10-01 00:00:00
img: /assets/blueberry.png
img_alt: A cute blueberry bunch
description: |
  Simple and efficient backend framework for rust.
tags:
  - Backend
  - Rust
---
There exist a lot of backend frameworks that make developing your APIs easier. In order to learn more about how these worked, I made a backend framework called Blueberry. The overall design is lightweight and was created with simplicity in mind. Blueberry gives you a way to define routers that you can add routes to in order to build your API.

Routes are simply functions that take in a request and return some http response. They have access to all parts of the parsed request.
Middlewares are also functions that have access to these requests. They run on every request and allow you to easily implement things like authentication.
Serving static files is also made very simple by attaching a file routes directory where every file in that directory will generate a route that will serve that file.

You can view the repository here: [Blueberry github](https://github.com/allends/blueberry)