# ACS TONMOY MD BOT — Frontend (Vercel)

এটি **ACS TONMOY MD BOT** প্রজেক্টের সম্পূর্ণ Static Frontend (HTML, CSS, JavaScript)।
এই Folder টি সরাসরি **Vercel** এ Deploy করার উপযোগী — কোনো Build Step বা Node.js
Server প্রয়োজন নেই।

## ফাইল গঠন

```
vercel-frontend/
├── index.html      → মূল Dashboard Page
├── style.css       → Dark Cyber Neon Theme
├── script.js       → Backend API Call করার Logic
├── config.js       → Render Backend URL বসানোর জায়গা
├── vercel.json     → Vercel Configuration
├── .gitignore
├── README.md
└── assets/
    └── logo.png    → ACS TONMOY Logo
```

## Backend URL কনফিগার করা

`config.js` ফাইল খুলে নিচের লাইনটি পরিবর্তন করুন:

```js
window.ACS_TONMOY_CONFIG = {
  BACKEND_URL: "https://your-backend.onrender.com",
};
```

নিজের Render Backend এর প্রকৃত URL বসান (শেষে `/` দেবেন না)।

> পুরোপুরি Static HTML/CSS/JS সাইটে Vercel এর Build-Time Environment Variable
> (যেমন `VITE_API_BASE_URL`) সরাসরি Browser এ পাওয়া যায় না কারণ এখানে কোনো
> Build Step নেই। তাই এই প্রজেক্টে `config.js` কে একটি নিরাপদ ও সহজে
> সম্পাদনাযোগ্য Public Configuration হিসেবে ব্যবহার করা হয়েছে। এখানে কোনো
> Secret/Password/Token রাখা হয় না — শুধু Public Backend URL থাকে।

## Vercel এ Deploy করা

সম্পূর্ণ ধাপে ধাপে বাংলা Tutorial মূল প্রজেক্টের `README.md` ফাইলে দেওয়া আছে।

সংক্ষেপে:
1. এই Folder এর সব ফাইল GitHub Repository তে Upload করুন।
2. Vercel এ গিয়ে GitHub Repository Import করুন।
3. Framework Preset → **Other** নির্বাচন করুন।
4. Build Command খালি রাখুন, Output Directory `.` রাখুন।
5. Deploy ক্লিক করুন।
