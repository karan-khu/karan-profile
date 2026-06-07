---
id: frontend-boilerplate
title: Frontend Boilerplate (Vite + Preact)
sidebar_position: 2
description: ออกแบบและพัฒนา standard internal frontend boilerplate ด้วย Vite + Preact + TypeScript — default starting point สำหรับ web project ใหม่ทุกโปรเจคของทีม
---

# Frontend Boilerplate — Vite + Preact + TypeScript

**Tech Team Contribution · Dplus Intertrade (Zettasoft)**
Author & Maintainer · Bangkok, Thailand

*Standard internal frontend boilerplate ที่ออกแบบและพัฒนาเอง ใช้เป็น default starting point สำหรับ web project ใหม่ทุกโปรเจคของทีม*

## ภาพรวม

หลังจากทำ frontend ให้หลายโปรเจคในทีม (CRM, admin tools, training portal) ผมเห็นปัญหาว่าแต่ละโปรเจคเริ่มต้นใหม่ทุกครั้ง — เซ็ต structure, auth, form, table, theme ซ้ำ ๆ ใช้ pattern คนละแบบ ทำให้ onboarding ช้าและดูแลยาก

จึงออกแบบ **frontend boilerplate กลาง** ที่รวม pattern, reusable component และ tooling ที่ทีมใช้บ่อยไว้ในที่เดียว ลดเวลา setup โปรเจคใหม่จากหลายวันเหลือระดับชั่วโมง และทำให้ทุกโปรเจคมีโครงสร้าง + คุณภาพโค้ดเป็นมาตรฐานเดียวกัน ปัจจุบันเป็น starting point มาตรฐานของ web project ใหม่ทุกตัว

> 🖥️ รัน `bun dev` แล้วเปิด `localhost:3000` จะเห็น showcase ของ component และ pattern ทั้งหมดในรูปแบบ interactive example

![Template Layout — Search + Table Builder](/img/boilerplate/template-example.png)
*ตัวอย่างหน้า Search + Table ที่ generate จาก Builder Pattern (โลโก้และข้อมูลภายในบริษัทถูกเซ็นเซอร์)*

![Form Builder showcase](/img/boilerplate/form-builder.png)
*ตัวอย่าง Form component ที่ครอบ antd ให้ใช้กับ react-hook-form ได้ทันที*

## แนวคิดหลักในการออกแบบ

### 🏗️ Builder Pattern
หัวใจของ boilerplate คือ **Builder Pattern** สำหรับสร้าง Form และ Table แบบ declarative — เขียน config สั้น ๆ แทนการ markup ซ้ำ ๆ ทำให้สร้างหน้าจอใหม่ได้เร็วและอ่านง่าย

**Form Builder**
```typescript
import formBuilder from "@/utils/helpers/form.helper";

const FORM_CONFIG = formBuilder((builder) => {
  builder
    .input("name", "ชื่อ", {
      span: 12,
      rules: (yup) => yup.string().required(),
    })
    .select("type", "ประเภท", {
      span: 12,
      inputProps: { options: TYPE_OPTIONS },
    })
    .textArea("description", "รายละเอียด", { span: 24 });
});
```

**Table Builder**
```typescript
import tableBuilder from "@/utils/helpers/table.helper";

const TABLE_COLUMNS = tableBuilder<DataType>((column) => {
  column.text("name", "ชื่อ", { hasSearchFilter: true });
  column.tag("status", "สถานะ", { options: STATUS_OPTIONS });
  column.actionButton("จัดการ", [
    { useFor: "EDIT", onClick: handleEdit },
    { useFor: "DELETE", onClick: handleDelete },
  ]);
}).build();
```

**Template Layout (Search + Table)** — รวม search form กับ table เข้าด้วยกันเป็น pattern เดียวที่ใช้ซ้ำได้ทั้งระบบ
```typescript
<TemplateLayout
  searchLayout={{ forms: SEARCH_FORM.layout, schema: SEARCH_FORM.schema }}
  tableLayout={{ columns: TABLE_COLUMNS, dataSource: data, hasExportExcel: true }}
  onSearch={handleSearch}
/>
```

### 🧩 Reusable Components
ชุด component ที่ครอบ antd ไว้ให้ใช้กับ react-hook-form ได้ทันที — input, number, select, multi-select, date / date-range / month / year picker, time picker, upload (พร้อม image crop & preview), rate, color, switch, checkbox, radio, รวมถึง editable table cells และ export-to-excel component

## ฟีเจอร์หลัก

### 📋 Form System
- Input types ครบ: text, number, select, date, upload ฯลฯ
- Validation ผ่าน Yup schema
- Responsive grid layout ปรับ layout อัตโนมัติบน mobile
- Form DevTools สำหรับ debugging

### 📊 Table System
- Column types: text, number, tag, date, action buttons
- Built-in search, sort, filter
- Export to Excel
- Editable table cells
- Mobile responsive — แสดงเป็น Card view อัตโนมัติ
- รองรับ server-side paging (table paging sync)

### 🎨 Theme & UI
- Dark / Light mode พร้อม theme preset หลายแบบ
- Ant Design + styled-components
- Icon system รวม font ภาษาไทย (Anuphan)
- Responsive ทุกขนาดหน้าจอ พร้อม collapsible sidebar

### 🔐 Authentication
- JWT-based authentication
- Route protection / guarded routes
- User session management ผ่าน cookie + zustand store

### 📈 Data & Charts
- Data fetching ด้วย react-query (พร้อม devtools)
- Chart components (ApexCharts): line, bar, area, pie, donut

## Architecture & Tooling

- **State management:** zustand แบบ slice-based (app / auth / theme / route) ครอบด้วย immer
- **Data layer:** react-query + axios instance กลาง (interceptor, error handling)
- **Routing:** react-router-dom พร้อม route config / menu config ที่ generate sidebar อัตโนมัติ
- **HOC & Providers:** appProvider, errorBoundary, reactQuery, formDevTool แยกชั้นชัดเจน
- **Custom hooks:** useResponsive, useHookTable, useParam, useMenuState
- **Type Safety:** TypeScript ครอบคลุมทั้งระบบ แยก `_types/` เป็นสัดส่วน
- **Code quality:** ESLint + Prettier + Husky + lint-staged (pre-commit hook ตรวจอัตโนมัติ)
- **Testing:** Vitest
- **Deployment:** Dockerfile (multi-stage + nginx) พร้อม GitLab CI pipeline
- **DX:** VS Code snippets และเอกสาร AI agent (`.ai/`, `.cursor/rules/`) สำหรับให้ AI ช่วยพัฒนาตาม convention ของทีม

## Impact

- ⏱️ ลดเวลา setup โปรเจคใหม่จากหลายวันเหลือระดับชั่วโมง
- 📐 ทุกโปรเจคในทีมใช้ structure และ pattern เดียวกัน — onboarding และ code review ง่ายขึ้น
- ♻️ Form / Table ที่เคยเขียนซ้ำทุกหน้ากลายเป็น config สั้น ๆ ลด boilerplate code จริง ๆ
- 🤖 มีเอกสาร AI agent ในตัว ทำให้ทีมใช้ AI ช่วยเขียนโค้ดได้ตรงตาม convention

## Tech Stack

| หมวด | เครื่องมือที่ใช้ |
| --- | --- |
| Core | Vite, Preact, TypeScript |
| UI | Ant Design, styled-components, motion |
| Form | react-hook-form, yup |
| Data | react-query (TanStack Query), axios |
| State | zustand, immer |
| Charts | ApexCharts |
| Routing | react-router-dom |
| Quality | ESLint, Prettier, Husky, lint-staged, Vitest |
| Build & Deploy | Bun, Docker, nginx, GitLab CI |
