---
id: dplus-zettasoft
title: Dplus Intertrade (Zettasoft)
sidebar_position: 1
description: Software Developer at Dplus Intertrade (Zettasoft) — Jan 2024 to present
---

# Dplus Intertrade (Zettasoft)

**Software Developer**
Jan 2024 – Present · Bangkok, Thailand

*In-house software arm of Dplus Intertrade ผู้จัดจำหน่ายอุปกรณ์เสริมโทรศัพท์มือถือ*

## บทบาทและความรับผิดชอบ

Main developer ของ platform ตู้ตัดฟิล์มกันรอยมือถือ (film-cutter platform) ครอบคลุมทุก layer ตั้งแต่ mobile, frontend web, backend API ไปจนถึง infrastructure

## Film-cutter Platform (งานหลัก)

### Mobile (React Native)
- สร้าง app 2 ตัวที่ใช้จริงใน production — customer-facing app บน Google Play และ Apple App Store และ in-store tablet app สำหรับควบคุม hardware ผ่าน native modules

### Frontend Web
- สร้าง admin tools ด้วย Preact + antd + MobX สำหรับ operations workflows (inventory, credit, tickets, bookings)

### Backend
- REST API ด้วย Go (Gin) และ Node.js (Express) บน MSSQL ด้วย stored procedures
- Rewrite service จาก Node.js เป็น Go เพื่อ deployment ที่ lean ขึ้นบน Kubernetes

### Hardware Integration
- สร้าง Go Bluetooth Low Energy (BLE) bridge เพื่อให้ตู้ตัดฟิล์มสั่งงานจาก web ได้ ไม่ใช่แค่ from on-device tablet เท่านั้น

### Platform & Infrastructure
- Migrate services จาก PM2 → Docker → self-managed Kubernetes ด้วย Helm + ArgoCD GitOps
- แปลง ad-hoc batch scripts เป็น Kubernetes CronJobs

### Collaboration
- ทำงานโดยตรงกับ non-technical stakeholders (operations, sales) ในการ gather requirements
- ดูแล release planning ครอบคลุม web, mobile, และ backend

## Tech Team Contribution

ออกแบบ standard internal frontend boilerplate — **Vite + Preact + TypeScript + antd + react-query + zustand + react-hook-form + yup + Vitest + Husky** — ปัจจุบันเป็น default starting point สำหรับโปรเจค web ใหม่ทุกโปรเจค

## งานก่อนหน้าในตำแหน่งเดิม

- **CRM frontend** — order management และ sales-order screens รวมถึง requirement gathering และ change request handling
- **External partner training portal**
- **Mobile attendance & HR module** — check-in/out, expense claims, leave requests

## Tech Stack

| หมวด | เครื่องมือที่ใช้ |
| --- | --- |
| Frontend | Preact, TypeScript, antd, MobX, react-query, zustand, react-hook-form, yup |
| Mobile | React Native (Android & iOS), native modules, Bluetooth Low Energy |
| Backend | Go (Gin), Node.js (Express), JWT / OAuth2 |
| Database | MSSQL (stored procedures), MySQL, PostgreSQL |
| Infrastructure | Docker, Kubernetes, Helm, ArgoCD (GitOps), CI/CD |
