import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Baileys এবং এর Native/Complex Dependency গুলো Webpack Bundling থেকে
  // বাদ রাখা হয়েছে যাতে Native Node.js require ব্যবহার করে ঠিকভাবে কাজ করে।
  serverExternalPackages: [
    "@whiskeysockets/baileys",
    "whatsapp-rust-bridge",
    "libsignal",
    "pino",
  ],
};

export default nextConfig;
