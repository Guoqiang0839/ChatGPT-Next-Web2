/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatGPT Next Web",
  description: "Your personal ChatGPT Chat Bot.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: "ChatGPT Next Web",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script src="/serviceWorkerRegister.js" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleGenerateNote = () => {
    const chatHistory = getChatHistory(); // 获取聊天记录的函数
    sendChatHistoryToBackend(chatHistory); // 发送聊天记录到后端
    
  };

  return (
    <html lang="en">
      <head>
        {/* 现有的 head 内容 */}
      </head>
      <body>
        {children}
        <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
          <button onClick={handleGenerateNote} style={{ padding: '10px 20px' }}>
            生成笔记
          </button>
        </div>
      </body>
    </html>
  );
}

