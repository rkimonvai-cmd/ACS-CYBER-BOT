/**
 * ACS TONMOY MD BOT - Frontend Logic
 * -----------------------------------
 * এই File Render এ Deploy করা Backend এর API ("config.js" এ উল্লেখিত
 * BACKEND_URL) এর সাথে যোগাযোগ করে।
 */

const BACKEND_URL = (window.ACS_TONMOY_CONFIG && window.ACS_TONMOY_CONFIG.BACKEND_URL) || "";

const el = {
  serverDot: document.getElementById("server-dot"),
  serverPillText: document.getElementById("server-pill-text"),
  backendStatus: document.getElementById("backend-status"),
  backendSub: document.getElementById("backend-sub"),
  botStatus: document.getElementById("bot-status"),
  botSub: document.getElementById("bot-sub"),
  successCount: document.getElementById("success-count"),
  totalSub: document.getElementById("total-sub"),
  form: document.getElementById("pairing-form"),
  countryCode: document.getElementById("country-code"),
  phoneNumber: document.getElementById("phone-number"),
  generateBtn: document.getElementById("generate-btn"),
  btnSpinner: document.getElementById("btn-spinner"),
  btnText: document.getElementById("btn-text"),
  notice: document.getElementById("notice"),
  codeBox: document.getElementById("code-box"),
  pairingCode: document.getElementById("pairing-code"),
  copyBtn: document.getElementById("copy-btn"),
};

let requestInFlight = false;

function apiUrl(path) {
  if (!BACKEND_URL || BACKEND_URL.includes("your-backend.onrender.com")) {
    return null;
  }
  return `${BACKEND_URL.replace(/\/$/, "")}${path}`;
}

function showNotice(type, text) {
  el.notice.textContent = text;
  el.notice.className = `notice ${type}`;
  el.notice.classList.remove("hidden");
}

function hideNotice() {
  el.notice.classList.add("hidden");
}

async function checkStatus() {
  const healthUrl = apiUrl("/health");
  if (!healthUrl) {
    el.serverPillText.textContent = "Backend কনফিগার করা হয়নি";
    el.backendStatus.textContent = "কনফিগার করুন";
    el.backendSub.textContent = "config.js এ BACKEND_URL বসান";
    return;
  }

  try {
    const res = await fetch(healthUrl, { cache: "no-store" });
    const data = await res.json();
    const online = data.status === "ok";
    el.serverDot.classList.toggle("online", online);
    el.serverPillText.textContent = online ? "Server সচল" : "Server বন্ধ";
    el.backendStatus.textContent = online ? "Online ✅" : "Offline ❌";
    el.backendSub.textContent = data.message || "—";
  } catch (err) {
    el.serverDot.classList.remove("online");
    el.serverPillText.textContent = "সংযোগ ব্যর্থ";
    el.backendStatus.textContent = "Offline ❌";
    el.backendSub.textContent = "Backend এর সাথে সংযোগ স্থাপন করা যায়নি (CORS/Network)";
  }

  const activeUrl = apiUrl("/active");
  if (!activeUrl) return;

  try {
    const res = await fetch(activeUrl, { cache: "no-store" });
    const data = await res.json();
    const connected = data?.bot?.connected;
    el.botStatus.textContent = connected ? "Connected ✅" : "Disconnected ⚪";
    el.botSub.textContent = data?.bot?.status || "idle";
    el.successCount.textContent = data?.stats?.successfulPairings ?? 0;
    el.totalSub.textContent = `মোট Request: ${data?.stats?.totalRequests ?? 0}`;
  } catch (err) {
    el.botStatus.textContent = "অজানা";
  }
}

el.form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (requestInFlight) return;

  const digits = el.phoneNumber.value.replace(/[^0-9]/g, "");
  if (digits.length < 6) {
    showNotice("error", "সঠিক Phone Number লিখুন (Country Code ছাড়া)।");
    return;
  }

  const codeUrl = apiUrl("/code");
  if (!codeUrl) {
    showNotice(
      "error",
      "Backend URL কনফিগার করা হয়নি। অনুগ্রহ করে config.js ফাইলে Render Backend URL বসান।",
    );
    return;
  }

  requestInFlight = true;
  el.generateBtn.disabled = true;
  el.btnSpinner.classList.remove("hidden");
  el.btnText.textContent = "Pairing Code তৈরি হচ্ছে...";
  hideNotice();
  el.codeBox.classList.add("hidden");

  try {
    const res = await fetch(codeUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phoneNumber: digits,
        countryCode: el.countryCode.value,
      }),
    });
    const data = await res.json();

    if (res.ok && data.status === "success" && data.pairingCode) {
      el.pairingCode.textContent = data.pairingCode;
      el.codeBox.classList.remove("hidden");
      showNotice("success", data.message || "Pairing Code সফলভাবে তৈরি হয়েছে।");
    } else {
      showNotice("error", data.message || "Pairing Code তৈরি করা সম্ভব হয়নি।");
    }
  } catch (err) {
    showNotice(
      "error",
      "Network / CORS সমস্যা। Backend চালু আছে কিনা এবং URL সঠিক আছে কিনা পরীক্ষা করুন।",
    );
  } finally {
    requestInFlight = false;
    el.generateBtn.disabled = false;
    el.btnSpinner.classList.add("hidden");
    el.btnText.textContent = "Generate Pairing Code";
    checkStatus();
  }
});

el.copyBtn.addEventListener("click", () => {
  const code = el.pairingCode.textContent.replace(/-/g, "");
  navigator.clipboard.writeText(code).then(() => {
    el.copyBtn.textContent = "✅ কপি হয়েছে";
    setTimeout(() => (el.copyBtn.textContent = "📋 Code কপি করুন"), 2000);
  });
});

checkStatus();
setInterval(checkStatus, 15000);
