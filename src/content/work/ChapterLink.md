---
title: ChapterLink
publishDate: 2019-12-01 00:00:00
img: /assets/chapterlink.png
img_alt: A bright pink sheet of paper used to wrap flowers curves in front of rich blue background
description: |
  We paired with a cutting-edge music API and a team of horticulturalists
  to build AI-generated playlists that maximize houseplant health.
tags:
  - Dev
  - Branding
  - Backend
---
As a member of a greek organization in college, making sure we had everyones details in line and could track events was really difficult. I set out to design a software that would be able to manage our members, their information, their attendence, and also be able to send out messages to them. This is an ongoing project to learn large scale project development. 

At the core of this project is a frontend written in SolidJS. It is an exciting React-like framework that focuses on speed. It has no virtual DOM, which allows it to be lightweight and fast. With SolidJS I used DaisyUI, a superset of Tailwind css that makes it very easy to built pretty UIs quickly.

On the backend was Pocketbase, a backend-as-a-service written in Go that focuses on simplicity. Under the hood is SQLite and you can host it right alongside your webapp. It automatically generates standard CRUD endpoints for any schema you define in the GUI it provides with their built in admin panel. It is a great way to quickly prototype applications - it becomes extensible with Go whenever you decide you need more than CRUD operations.