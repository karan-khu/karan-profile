---
id: interview-flow
title: Interview Flow
sidebar_position: 6
description: ลำดับการพูดในการสัมภาษณ์ — จัดเนื้อจาก resume ใหม่ให้พูดลื่น (รอบเทคนิค)
---

# Interview Flow — ลำดับการพูด

เอกสารนี้คือ **ลำดับการนำเสนอ** สำหรับรอบสัมภาษณ์เทคนิค (ทีม tech ล้วน ไม่มี HR)
เนื้อหาเดียวกับ resume แต่จัด "อะไรพูดก่อน–หลัง" ใหม่ให้ลื่นและให้คนฟังจำได้

:::tip ธงหลัก (พูดให้ครบทุกช่วง)
**"Full-Stack ที่ ship จริงทุก layer"** — mobile · web · backend · infra
ทุกเรื่องที่เล่า ให้วิ่งกลับมาที่ธงนี้ คนเดียวที่ดูแลของจริงตั้งแต่หน้าจอถึง Kubernetes
:::

## หลักการเรียงลำดับ

1. **เปิดด้วยธง** — ให้เขาจับภาพรวมได้ใน 30 วินาทีแรก
2. **ลึกที่ flagship ก่อน** — film-cutter platform คือเรื่องที่โชว์ครบทุก layer ใช้เป็นแกน
3. **กว้างตามทีหลัง** — งานอื่น/skill อื่น เอามาเสริมเมื่อถูกถาม อย่าเทหมดตั้งแต่ต้น
4. **ปิดด้วยคำถามกลับ** — โชว์ว่าสนใจระบบเขาจริง

---

## 1. เปิดตัว (60–90 วินาที)

> พูดช้า ชัด จบใน 1–1.5 นาที อย่ายาว เก็บรายละเอียดไว้ตอนเขาถาม

"สวัสดีครับ ผมการัณย์ครับ เป็น Software Developer ประสบการณ์เกือบ 3 ปีที่ Dplus Intertrade (Zettasoft)

จุดที่ผมคิดว่าเป็นตัวเองที่สุดคือ ผมเป็น full-stack ที่ **ส่งของขึ้น production จริงครบทุก layer** — ตั้งแต่ mobile app ที่อยู่บน Play Store / App Store, admin web, backend ทั้ง Go และ Node.js ไปจนถึง infrastructure ที่ migrate ขึ้น Kubernetes เอง

งานหลักของผมคือเป็น developer หลักของแพลตฟอร์มเครื่องตัดฟิล์มที่เชื่อมต่อกับ hardware จริง ซึ่งทำให้ผมได้แตะตั้งแต่หน้าจอผู้ใช้ลงไปถึง BLE และ deployment

วันนี้ยินดีลงรายละเอียดส่วนไหนก็ได้ที่ทีมสนใจครับ"

:::note ทำไมเรียงแบบนี้
ชื่อ → ธง (full-stack ทุก layer) → flagship 1 ประโยค → เปิดให้เขาเลือกถาม
ไม่ไล่ timeline ไม่ท่อง stack ยาว เพราะทีม tech อยากเจาะ ไม่อยากฟัง list
:::

---

## 2. Experience — เรียงตามน้ำหนัก ไม่ใช่ตามเวลา

เวลาเล่าประสบการณ์ ให้ไล่จาก **เรื่องที่ impressive + เกี่ยวกับแบงก์ที่สุด** ก่อน
แบงก์ให้น้ำหนัก reliability, การทำงานกับระบบใหญ่/legacy, security, release ที่มีวินัย

### 2.1 Flagship — Film-cutter platform (เล่าเป็นแกน)

ลำดับการเล่าภายในเรื่องนี้ (พูดตามนี้ทีละชั้น):

1. **บริบท** — แพลตฟอร์มภายในสำหรับร้านฟิล์มมือถือ ที่ต้องคุม hardware เครื่องตัดจริง
2. **Mobile** — 2 แอป production: แอปลูกค้า (Play Store + App Store) และแอป tablet ในร้านที่คุม hardware ผ่าน native modules
3. **Web** — admin tool (Preact + antd + MobX) สำหรับ operations: inventory, เครดิต, ใบแจ้งซ่อม, การจอง
4. **Backend** — REST API ด้วย Go (Gin) และ Node.js บน MSSQL + stored procedure
5. **จุดพีคที่ต้องเล่าให้ลึก (เลือกมา 1–2 ตามที่เขาสนใจ):**
   - **BLE bridge (Go):** ทำให้สั่งตัดผ่านเว็บได้ จากเดิมสั่งได้แค่จาก tablet บนเครื่อง — โชว์การแก้ปัญหา hardware + reliability
   - **Node → Go rewrite:** เขียน service ใหม่เพื่อให้ deploy บน K8s เบาลง — โชว์การตัดสินใจเชิงเทคนิคที่มีเหตุผล
   - **K8s migration:** PM2 → Docker → self-managed Kubernetes (Helm + ArgoCD GitOps) + แปลง batch script เป็น CronJob — โชว์ infra/ops ตัวจริง

:::tip เทคนิคตอนเล่าจุดพีค
เล่าแบบ **ปัญหา → ทางที่เลือก → ทำไมเลือกทางนั้น → ผลลัพธ์**
อย่าเล่าแค่ "ทำอะไร" ทีม tech อยากรู้ "ทำไมถึงตัดสินใจแบบนั้น" — นี่คือจุดที่ได้คะแนน
:::

### 2.2 ผลงานฝั่งทีม (เสริมหลัง flagship)

ออกแบบ **frontend boilerplate มาตรฐาน** (Vite + Preact + TS + antd + react-query + zustand + react-hook-form + yup + Vitest + Husky) ที่กลายเป็น starting point ของทุก web project ใหม่
→ โชว์ว่าคิดเผื่อทั้งทีม ไม่ใช่แค่ตัวเอง (แบงก์ชอบเรื่อง standard/maintainability)

### 2.3 ความกว้าง (พูดสั้น ๆ ถ้าถูกถามว่าทำอะไรมาอีก)

- CRM — order management / sales-order (เก็บ requirement + รับ change request)
- Partner training portal
- Mobile attendance & HR (check-in/out, เบิกค่าใช้จ่าย, ลางาน)

:::note ลำดับช่วยอะไร
flagship ลึก → ทีม → กว้าง = เริ่มจากเรื่องที่โชว์ตัวเองสุด แล้วค่อยขยายความครอบคลุม
ถ้าเล่ากว้างก่อน คนฟังจะจับ "จุดเด่น" ไม่ได้
:::

---

## 3. Skills — ผูกกับเรื่อง อย่าอ่าน list

อย่าไล่อ่านตาราง stack ให้ดึง skill ออกมา**ตอนเล่าเรื่อง** แทน:

- **Go** → เล่าผ่าน BLE bridge + rewrite (ภาษาหลักของ backend จริง)
- **TypeScript/React/Preact** → เล่าผ่าน admin web + mobile + boilerplate
- **K8s / Helm / ArgoCD** → เล่าผ่าน migration
- **MSSQL / stored procedure** → เล่าผ่าน backend ที่ทำกับ data layer จริง

> ถ้าโดนถามตรง ๆ ว่า "ถนัดอะไรสุด" ตอบ: **Go กับ TypeScript** เป็นภาษาที่ใช้ส่ง production บ่อยสุด
> และเสริมว่ากำลังให้ความสนใจฝั่ง backend/infra มากขึ้น (สอดคล้องกับธง)

:::tip จุดที่แบงก์อาจถามแล้วต้องเตรียม
- **Security / auth** → พูดได้: JWT / OAuth2, การคุม access ใน admin tool
- **DB transaction / consistency** → โยงประสบการณ์ MSSQL + stored procedure
- **scale / ระบบใหญ่** → ยอมรับตามจริงว่าเป็น internal platform ไม่ใช่ traffic ระดับแบงก์
  แต่ชูว่า "เข้าใจ infra จริง migrate K8s เองได้" และเรียนรู้เร็ว
:::

---

## 4. Education & Teaching — สั้น เน้น "เรียนรู้ต่อเนื่อง"

- **ป.ตรี วิทยาการคอมพิวเตอร์** — ม.ราชภัฏกาญจนบุรี (2019–2023), GPA 3.01
- **Guest Lecturer — Golang** (มี.ค. 2026) คอร์ส 3 วันที่มหาวิทยาลัยเดิม
  → โชว์ว่าเข้าใจ Go ลึกพอจะ "สอน" ได้ ไม่ใช่แค่ใช้
- **Certifications** — Ultimate Golang Backend (2025), .NET + Next.js Microservices (2023)

> ใช้ teaching + cert เป็นหลักฐานว่า **เรียนรู้ต่อเนื่องด้วยตัวเอง** — ตอบโจทย์ข้อกังวลเรื่องประสบการณ์ยังไม่เยอะ

---

## 5. ปิดท้าย — คำถามกลับ (เตรียมไป 3–4 ข้อ)

ทีม tech ชอบคนที่ถามเรื่องระบบ เลือกถาม 2–3 ข้อ:

- ทีมวาง architecture / stack หลักเป็นอะไร และกำลังจะไปทางไหน?
- release process กับ on-call / incident เป็นยังไง?
- งานที่ตำแหน่งนี้รับผิดชอบจริง ๆ คือ frontend, backend หรือเต็ม full-stack?
- ความท้าทายทางเทคนิคที่ทีมเจออยู่ตอนนี้คืออะไร?

:::tip ถ้าโดนถามเรื่องที่ตอบไม่ได้
อย่าเดามั่ว — ตอบ "ส่วนนี้ผมยังไม่เคยทำตรง ๆ แต่ที่ใกล้เคียงคือ ... และผมเรียนรู้เรื่องใหม่ได้เร็ว"
ความซื่อสัตย์ + ตัวอย่างที่ใกล้เคียง ได้คะแนนกว่าการเดา
:::
