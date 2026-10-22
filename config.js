/**
 * ACS TONMOY MD BOT - Frontend Configuration
 * ---------------------------------------------
 * এই File এ Render এ Deploy করা Backend এর URL বসাতে হবে।
 *
 * কীভাবে বসাবেন:
 * ১. Render এ Backend Deploy করার পর আপনি একটি URL পাবেন,
 *    যেমন: https://acs-tonmoy-backend.onrender.com
 * ২. নিচের BACKEND_URL এর মান সেটি দিয়ে পরিবর্তন করুন।
 * ৩. GitHub এ Commit করে Push করুন। Vercel স্বয়ংক্রিয়ভাবে নতুন Deployment তৈরি করবে।
 *
 * বিঃদ্রঃ Pure HTML/CSS/JS সাইটে Vercel Build-Time Environment Variable
 * (যেমন VITE_API_BASE_URL) সরাসরি Browser এ পাওয়া যায় না, কারণ কোনো
 * Build Step নেই। তাই এই config.js File টিকে একটি নিরাপদ, সহজে সম্পাদনাযোগ্য
 * Configuration Source হিসেবে ব্যবহার করা হয়েছে। এখানে কোনো Secret/Password
 * রাখা হয় না — শুধুমাত্র Public Backend URL রাখা হয়।
 */
window.ACS_TONMOY_CONFIG = {
  // 👇 এখানে নিজের Render Backend URL বসান (শেষে স্ল্যাশ "/" দেবেন না)
  BACKEND_URL: "https://your-backend.onrender.com",
};
