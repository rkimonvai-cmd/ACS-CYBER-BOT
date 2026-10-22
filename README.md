# 🤖 ACS TONMOY MD BOT

**WhatsApp Pairing Code Generator** — Premium Dark Cyber Dashboard।

- 🌐 **Frontend:** Vercel (Static HTML/CSS/JS)
- ⚙️ **Backend:** Render (Node.js + Express.js + Baileys)
- 🗄️ **Source Code:** GitHub
- 🗣️ **Interface Language:** বাংলা
- © 2026 **ACS TONMOY**

> ⚠️ এই Tool শুধুমাত্র **নিজের** অথবা **স্পষ্ট অনুমতি থাকা** WhatsApp Account
> Link করার জন্য ব্যবহার করুন। এখানে কোনো Fake Pairing Code, Authentication
> Bypass, বা অনুমতি ছাড়া Account Access করার Feature নেই।

---

## ১. প্রজেক্ট Structure

এই Repository তে তিনটি অংশ আছে:

```
/ (repo root)
│
├── vercel-frontend/        👉 Vercel এ Deploy করার জন্য (Pure HTML/CSS/JS)
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── config.js           (Render Backend URL এখানে বসবে)
│   ├── vercel.json
│   ├── .gitignore
│   ├── README.md
│   └── assets/logo.png
│
├── render-backend/         👉 Render এ Deploy করার জন্য (Node.js + Express)
│   ├── index.js
│   ├── package.json
│   ├── .env.example
│   ├── .gitignore
│   ├── render.yaml
│   ├── routes/ (health.js, active.js, code.js)
│   ├── services/ (whatsapp.js, sessionStore.js)
│   └── middleware/ (rateLimiter.js, validate.js, errorHandler.js)
│
└── src/                    👉 এই Sandbox এর জন্য Next.js Reference Implementation
    (একই Feature এর Full-Stack Demo — Dashboard + API Routes + PostgreSQL)
```

### কেন দুটো আলাদা Implementation আছে?

আপনার চাহিদা অনুযায়ী Production Deployment হবে **Vercel (Frontend)** +
**Render (Backend)** — এর জন্য `vercel-frontend/` ও `render-backend/` Folder
দুটো সরাসরি ব্যবহার করুন এবং GitHub এ Push করুন।

এই Sandbox/Development পরিবেশটি একটি Next.js + PostgreSQL ভিত্তিক Platform
হওয়ায়, `src/` Folder এ একই Dashboard ও API (`/api/health`, `/api/active`,
`/api/code`) এর একটি সম্পূর্ণ কার্যকরী Reference Version রাখা হয়েছে, যেন
এখানেই সরাসরি Preview দেখে পরীক্ষা করতে পারেন। Production এ যাওয়ার সময়
`vercel-frontend/` ও `render-backend/` Folder দুটোই ব্যবহার করুন।

---

## ২. Features

- Premium Dark Cyber Dashboard — Black ও Dark Blue Gradient + Cyan Neon Glow
- Fully Responsive (Mobile ও Desktop)
- ACS TONMOY Header, Logo ও Branding
- Server Status Card (প্রকৃত Health Check)
- WhatsApp Pairing Code Generator (Country Code + Phone Number)
- Loading Animation, Copy Button, Success/Error Notification
- Help Section ও Footer
- Rate Limiting, Input Validation, CORS, নিরাপদ Error Handling
- প্রকৃত Baileys Library দিয়ে WhatsApp Pairing Code Generation (কোনো Fake Code নেই)

---

## ৩. API Documentation

| Method | Endpoint  | বিবরণ |
|--------|-----------|-------|
| GET    | `/health` | Backend সচল কি না যাচাই করে |
| GET    | `/active` | WhatsApp Bot এর প্রকৃত Connection Status ও পরিসংখ্যান |
| POST   | `/code`   | Phone Number দিয়ে প্রকৃত Pairing Code Request করে |

**POST /code** এর Request Body:

```json
{ "phoneNumber": "1812345678", "countryCode": "880" }
```

Frontend ও Backend উভয় জায়গায় একই Response Format ব্যবহার করা হয়েছে, যাতে
Vercel Frontend থেকে Render Backend Call করলে সঠিকভাবে কাজ করে।

---

## ৪. 📱 Android Mobile দিয়ে সম্পূর্ণ Deployment (ধাপে ধাপে বাংলা Tutorial)

নিচের পুরো কাজ **Android Phone** থেকেই করা সম্ভব। প্রয়োজনীয় App:
**GitHub App / Chrome Browser**।

### ধাপ ১ — GitHub এ Repository তৈরি করা

1. Chrome/GitHub App দিয়ে [github.com](https://github.com) এ Login করুন।
2. উপরে ডান দিকে **+** আইকনে ট্যাপ করে **New repository** নির্বাচন করুন।
3. Repository Name দিন: `acs-tonmoy-md-bot`
4. **Public** বা **Private** নির্বাচন করুন, তারপর **Create repository** চাপুন।

### ধাপ ২ — Frontend ও Backend ফাইল Upload করা

1. তৈরি হওয়া Repository তে যান → **Add file** → **Upload files**।
2. এই প্রজেক্টের `vercel-frontend/` Folder এর সব ফাইল (এবং Folder Structure বজায় রেখে `assets/logo.png`) Upload করুন।
3. একইভাবে `render-backend/` Folder এর সব ফাইল আলাদা করে Upload করুন (একই Repository তে আলাদা Folder হিসেবে রাখলে সমস্যা নেই, অথবা চাইলে Backend এর জন্য আলাদা দ্বিতীয় Repository তৈরি করতে পারেন)।
4. নিচে Commit Message লিখুন (যেমন: `Initial commit - ACS TONMOY MD BOT`) এবং **Commit changes** চাপুন।

> 📌 মোবাইল থেকে Folder সহ Upload করতে সমস্যা হলে, GitHub এর Mobile Browser
> Desktop Mode চালু করে Upload করলে সুবিধা হবে। অথবা **Working Copy** /
> **Termux + git** এর মতো App ব্যবহার করে `git push` করতে পারেন।

### ধাপ ৩ — Vercel এ Frontend Deploy করা

1. [vercel.com](https://vercel.com) এ গিয়ে GitHub Account দিয়ে Sign Up/Login করুন।
2. Dashboard এ **Add New...** → **Project** চাপুন।
3. আপনার `acs-tonmoy-md-bot` Repository **Import** করুন (প্রথমবার GitHub Connect করতে অনুমতি দিতে হবে)।
4. **Configure Project** পেজে:
   - **Framework Preset:** `Other` নির্বাচন করুন।
   - **Root Directory:** `vercel-frontend` সেট করুন (Edit বাটনে ট্যাপ করে Folder বেছে নিন)।
   - **Build Command:** খালি রাখুন।
   - **Output Directory:** `.` (ডট) রাখুন অথবা খালি রাখুন।
5. **Deploy** বাটনে ট্যাপ করুন। কিছুক্ষণের মধ্যে Deployment সম্পন্ন হবে।
6. Deploy শেষে পাওয়া URL (যেমন `https://acs-tonmoy-md-bot.vercel.app`) খুলে Website পরীক্ষা করুন।

### ধাপ ৪ — Render এ Backend Deploy করা

1. [render.com](https://render.com) এ গিয়ে GitHub দিয়ে Sign Up/Login করুন।
2. Dashboard এ **New +** → **Web Service** নির্বাচন করুন।
3. আপনার GitHub Repository Connect/Select করুন।
4. Configuration দিন:
   - **Root Directory:** `render-backend`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Health Check Path:** `/health`
5. **Environment Variables** যোগ করুন:
   - `ALLOWED_ORIGINS` = আপনার Vercel URL (যেমন `https://acs-tonmoy-md-bot.vercel.app`)
   - `RATE_LIMIT_MAX` = `3`
   - `RATE_LIMIT_WINDOW_MINUTES` = `5`
6. **Create Web Service** চাপুন। Render স্বয়ংক্রিয়ভাবে Build ও Deploy শুরু করবে।
7. **Logs** ট্যাব থেকে Deployment সফল হয়েছে কি না দেখুন (`🚀 ACS TONMOY Backend চালু হয়েছে` লেখা দেখা গেলে Backend সচল)।
8. Service এর উপরে দেখানো URL (যেমন `https://acs-tonmoy-backend.onrender.com`) কপি করুন।

### ধাপ ৫ — Frontend এর সাথে Backend সংযোগ করা

1. GitHub App/Browser দিয়ে আপনার Repository তে যান → `vercel-frontend/config.js` ফাইল Edit করুন।
2. `BACKEND_URL` এর মান পরিবর্তন করে ধাপ ৪ এ পাওয়া Render URL বসান:
   ```js
   window.ACS_TONMOY_CONFIG = {
     BACKEND_URL: "https://acs-tonmoy-backend.onrender.com",
   };
   ```
3. **Commit changes** করুন। Vercel স্বয়ংক্রিয়ভাবে নতুন Deployment তৈরি করে ফেলবে (কয়েক সেকেন্ড-মিনিট সময় লাগতে পারে)।
4. Vercel Website আবার খুলে দেখুন — **Server Status Card** এ এখন প্রকৃত Backend Status দেখাবে।

### ধাপ ৬ — পরীক্ষা করা

1. Vercel Website Open করুন।
2. Server Status "Online ✅" দেখাচ্ছে কি না দেখুন।
3. Country Code নির্বাচন করে নিজের Phone Number দিয়ে **Generate Pairing Code** চাপুন।
4. WhatsApp থেকে Settings → Linked Devices → Link a Device → Link with phone number এ গিয়ে Code টি বসান।

---

## ৫. Environment Variables সারাংশ

### Frontend (`vercel-frontend/config.js`)

| Variable | বিবরণ |
|----------|-------|
| `BACKEND_URL` | Render Backend এর Public URL |

### Backend (`render-backend/.env`)

| Variable | বিবরণ |
|----------|-------|
| `PORT` | Render স্বয়ংক্রিয়ভাবে সরবরাহ করে |
| `ALLOWED_ORIGINS` | অনুমোদিত Frontend URL (Comma দিয়ে একাধিক) |
| `RATE_LIMIT_MAX` | প্রতি IP তে সর্বোচ্চ Request সংখ্যা |
| `RATE_LIMIT_WINDOW_MINUTES` | Rate Limit এর সময়সীমা (মিনিটে) |

---

## ৬. নিরাপত্তা (Security)

- ✅ API Rate Limiting (IP ভিত্তিক)
- ✅ Phone Number Validation
- ✅ CORS Whitelist Configuration
- ✅ `.env` ও WhatsApp Session Data `.gitignore` দ্বারা সুরক্ষিত — GitHub এ Upload হয় না
- ✅ Error Response এ Sensitive তথ্য প্রকাশ করা হয় না
- ✅ কোনো API Key/Secret Frontend Code এ রাখা হয়নি
- ❌ কোনো Fake Pairing Code বা Authentication Bypass নেই

---

## ৭. সীমাবদ্ধতা (Limitations)

- **Render Free Plan:** কিছুক্ষণ ব্যবহার না হলে Service Spin Down হয়ে যায়; পরবর্তী
  Request এ পুনরায় চালু হতে কিছু সময় লাগে।
- **Temporary Storage:** Render Free Instance এর Disk স্থায়ী নয়। Service
  Restart/Redeploy হলে WhatsApp Session মুছে যেতে পারে এবং পুনরায় Pairing
  করতে হতে পারে। স্থায়ী Session চাই হলে Persistent Disk বা External
  Database/Storage যুক্ত করতে হবে।
- WhatsApp এর নিজস্ব Rate Limit/Policy অনুযায়ী অতিরিক্ত Pairing Request ব্যর্থ
  হতে পারে — এটি একটি স্বাভাবিক এবং প্রত্যাশিত আচরণ, এখানে কোনো Bypass করা হয়নি।

---

## ৮. Local এ পুরো প্রজেক্ট চালানো (ঐচ্ছিক — Developer দের জন্য)

```bash
# Backend
cd render-backend
npm install
cp .env.example .env
npm start   # http://localhost:5000

# Frontend (অন্য টার্মিনালে)
cd vercel-frontend
# config.js তে BACKEND_URL = http://localhost:5000 বসান
npx serve .   # অথবা যেকোনো Static Server
```

---

**© 2026 ACS TONMOY** — সর্বস্বত্ব সংরক্ষিত।
