<div align="center">

<img width="400" alt="Droide App" src="assets/droide-banner.jpg" />

# <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSIzIiB5PSIxMSIgd2lkdGg9IjE4IiBoZWlnaHQ9IjEwIiByeD0iMiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iNSIgcj0iMiIvPjxwYXRoIGQ9Ik0xMiA3djQiLz48Y2lyY2xlIGN4PSI4IiBjeT0iMTYiIHI9IjEuMiIgZmlsbD0iIzdjM2FlZCIgc3Ryb2tlPSIjN2MzYWVkIi8+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMS4yIiBmaWxsPSIjN2MzYWVkIiBzdHJva2U9IiM3YzNhZWQiLz48cGF0aCBkPSJNOSAxOWg2Ii8+PC9zdmc+" width="28" height="28" style="vertical-align:middle" alt="robot"> Droide — Advanced AI Assistant

**Modern &nbsp;·&nbsp; Mobile-First &nbsp;·&nbsp; Multi-Provider &nbsp;·&nbsp; Agentic**

[![Build APK](https://github.com/yourusername/droid-apk/actions/workflows/build-apk.yml/badge.svg)](https://github.com/yourusername/droid-apk/actions/workflows/build-apk.yml)
![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20Web-blue)
![Stack](https://img.shields.io/badge/Stack-React%20%2B%20TypeScript%20%2B%20Capacitor-blueviolet)
![License](https://img.shields.io/badge/License-MIT-green)

> A fully-featured, native-grade AI assistant app powered by Google Gemini and any OpenAI-compatible API. Built with React + TypeScript + Vite, packaged as a native Android APK via Capacitor — with agentic tools, memory, skills, code execution, artifacts, and much more.

</div>

---

## <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48bGluZSB4MT0iOSIgeTE9IjYiIHgyPSIyMCIgeTI9IjYiLz48bGluZSB4MT0iOSIgeTE9IjEyIiB4Mj0iMjAiIHkyPSIxMiIvPjxsaW5lIHgxPSI5IiB5MT0iMTgiIHgyPSIyMCIgeTI9IjE4Ii8+PGNpcmNsZSBjeD0iNCIgY3k9IjYiIHI9IjEuNSIgZmlsbD0iIzdjM2FlZCIgc3Ryb2tlPSIjN2MzYWVkIi8+PGNpcmNsZSBjeD0iNCIgY3k9IjEyIiByPSIxLjUiIGZpbGw9IiM3YzNhZWQiIHN0cm9rZT0iIzdjM2FlZCIvPjxjaXJjbGUgY3g9IjQiIGN5PSIxOCIgcj0iMS41IiBmaWxsPSIjN2MzYWVkIiBzdHJva2U9IiM3YzNhZWQiLz48L3N2Zz4=" width="22" height="22" style="vertical-align:middle" alt="list"> Table of Contents

- [Overview](#-overview)
- [Features](#-features)
  - [Core Chat](#-core-chat)
  - [Agentic Tools](#-agentic-tools)
  - [Artifacts & Code](#-artifacts--code)
  - [AI & Model Settings](#-ai--model-settings)
  - [Memory & Personalization](#-memory--personalization)
  - [Skills & Extensions (MCP)](#-skills--extensions-mcp)
  - [UI/UX & Accessibility](#-uiux--accessibility)
  - [Native Android Features](#-native-android-features)
  - [Data & Privacy](#-data--privacy)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation & Local Setup](#-installation--local-setup)
- [Building the APK](#-building-the-apk)
  - [Method 1 — GitHub Actions (Recommended)](#method-1--github-actions-recommended-zero-setup)
  - [Method 2 — Local Build](#method-2--local-build-full-control)
- [Configuration](#-configuration)
- [Project Structure](#-project-structure)
- [Future Roadmap](#-future-roadmap)
- [Community & Updates](#-community--updates)

---

## <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWdvbiBwb2ludHM9IjEyIDIgMTUuMDkgOC4yNiAyMiA5LjI3IDE3IDE0LjE0IDE4LjE4IDIxLjAyIDEyIDE3Ljc3IDUuODIgMjEuMDIgNyAxNC4xNCAyIDkuMjcgOC45MSA4LjI2IDEyIDIiIGZpbGw9IiM3YzNhZWQiIHN0cm9rZT0iIzdjM2FlZCIvPjwvc3ZnPg==" width="22" height="22" style="vertical-align:middle" alt="star"> Overview

**Droide** is a next-generation AI assistant built for people who want the power of LLMs in a beautiful, fast, and truly capable mobile app. It goes far beyond a simple chat wrapper:

- <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTAgMTNhNSA1IDAgMCAwIDcuNTQuNTRsMy0zYTUgNSAwIDAgMC03LjA3LTcuMDdsLTEuNzIgMS43MSIvPjxwYXRoIGQ9Ik0xNCAxMWE1IDUgMCAwIDAtNy41NC0uNTRsLTMgM2E1IDUgMCAwIDAgNy4wNyA3LjA3bDEuNzEtMS43MSIvPjwvc3ZnPg==" width="16" height="16" style="vertical-align:middle" alt="link"> Connect to **any AI provider** — Gemini, OpenAI, OpenRouter, Ollama, or any custom OpenAI-compatible endpoint
- <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTQuNyA2LjNhMSAxIDAgMCAwIDAgMS40bDEuNiAxLjZhMSAxIDAgMCAwIDEuNCAwbDMuNzctMy43N2E2IDYgMCAwIDEtNy45NCA3Ljk0bC02LjkxIDYuOTFhMi4xMiAyLjEyIDAgMCAxLTMtM2w2LjkxLTYuOTFhNiA2IDAgMCAxIDcuOTQtNy45NGwtMy43NiAzLjc2eiIvPjwvc3ZnPg==" width="16" height="16" style="vertical-align:middle" alt="tool"> True **agentic capabilities** — execute code, search the web, generate images, fetch weather, browse URLs, manage files, and more
- <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNOS41IDJBMi41IDIuNSAwIDAgMSAxMiA0LjV2MTVhMi41IDIuNSAwIDAgMS00Ljk2LS40NiAyLjUgMi41IDAgMCAxLTIuOTYtMy4wOCAzIDMgMCAwIDEtLjM0LTUuNTggMi41IDIuNSAwIDAgMSAxLjMyLTQuMjQgMi41IDIuNSAwIDAgMSAxLjk4LTNBMi41IDIuNSAwIDAgMSA5LjUgMnoiLz48cGF0aCBkPSJNMTQuNSAyQTIuNSAyLjUgMCAwIDAgMTIgNC41djE1YTIuNSAyLjUgMCAwIDAgNC45Ni0uNDYgMi41IDIuNSAwIDAgMCAyLjk2LTMuMDggMyAzIDAgMCAwIC4zNC01LjU4IDIuNSAyLjUgMCAwIDAtMS4zMi00LjI0IDIuNSAyLjUgMCAwIDAtMS45OC0zQTIuNSAyLjUgMCAwIDAgMTQuNSAyeiIvPjwvc3ZnPg==" width="16" height="16" style="vertical-align:middle" alt="brain"> **Persistent memory** — the AI learns and remembers facts about you across sessions
- <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48bGluZSB4MT0iMTYuNSIgeTE9IjkuNCIgeDI9IjcuNSIgeTI9IjQuMjEiLz48cGF0aCBkPSJNMjEgMTZWOGEyIDIgMCAwIDAtMS0xLjczbC03LTRhMiAyIDAgMCAwLTIgMGwtNyA0QTIgMiAwIDAgMCAzIDh2OGEyIDIgMCAwIDAgMSAxLjczbDcgNGEyIDIgMCAwIDAgMiAwbDctNEEyIDIgMCAwIDAgMjEgMTZ6Ii8+PHBvbHlsaW5lIHBvaW50cz0iMy4yNyA2Ljk2IDEyIDEyLjAxIDIwLjczIDYuOTYiLz48bGluZSB4MT0iMTIiIHkxPSIyMi4wOCIgeDI9IjEyIiB5Mj0iMTIiLz48L3N2Zz4=" width="16" height="16" style="vertical-align:middle" alt="package"> **Skills & MCP marketplace** — install hundreds of Model Context Protocol extensions
- <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSI1IiB5PSIyIiB3aWR0aD0iMTQiIGhlaWdodD0iMjAiIHJ4PSIyIiByeT0iMiIvPjxsaW5lIHgxPSIxMiIgeTE9IjE4IiB4Mj0iMTIuMDEiIHkyPSIxOCIvPjwvc3ZnPg==" width="16" height="16" style="vertical-align:middle" alt="smartphone"> **Native Android APK** — compiled with Capacitor for a smooth, native feel
- <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIxNiAxOCAyMiAxMiAxNiA2Ii8+PHBvbHlsaW5lIHBvaW50cz0iOCA2IDIgMTIgOCAxOCIvPjwvc3ZnPg==" width="16" height="16" style="vertical-align:middle" alt="code"> **Artifacts** — render live interactive HTML, SVG, and Mermaid diagrams inline in chat

---

## <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWdvbiBwb2ludHM9IjEzIDIgMyAxNCAxMiAxNCAxMSAyMiAyMSAxMCAxMiAxMCAxMyAyIiBmaWxsPSIjN2MzYWVkIiBzdHJva2U9IiM3YzNhZWQiLz48L3N2Zz4=" width="22" height="22" style="vertical-align:middle" alt="zap"> Features

### <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjEgMTVhMiAyIDAgMCAxLTIgMkg3bC00IDRWNWEyIDIgMCAwIDEgMi0yaDE0YTIgMiAwIDAgMSAyIDJ6Ii8+PC9zdmc+" width="18" height="18" style="vertical-align:middle" alt="message"> Core Chat

| Feature | Description |
|---|---|
| **Multi-session Management** | Create, rename, pin, archive, and delete unlimited chat sessions |
| **Folder Organization** | Group sessions into custom folders for project-based workflows |
| **Project Workspaces** | Dedicated project contexts with separate settings and history |
| **Streaming Responses** | Real-time token streaming with a live typing cursor indicator |
| **Message Editing** | Edit any previously sent message; full edit history is preserved |
| **Regenerate Response** | Re-roll any assistant message with one tap |
| **Message Deletion** | Delete individual messages from anywhere in the conversation |
| **Copy & Share** | Copy raw text or share formatted messages via the native share sheet |
| **Auto-Title Generation** | Sessions are automatically titled based on conversation content |
| **Pinned Sessions** | Pin your most important chats to the top of the sidebar |
| **Archiving** | Archive old sessions to keep the sidebar clean without losing history |
| **Thinking Indicator** | Animated "Thinking..." indicator with elapsed time counter |
| **Scroll-to-Bottom FAB** | Floating button to instantly jump to the latest message |
| **Word / Token Counter** | Real-time word and token count for the input field |

---

### <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTQuNyA2LjNhMSAxIDAgMCAwIDAgMS40bDEuNiAxLjZhMSAxIDAgMCAwIDEuNCAwbDMuNzctMy43N2E2IDYgMCAwIDEtNy45NCA3Ljk0bC02LjkxIDYuOTFhMi4xMiAyLjEyIDAgMCAxLTMtM2w2LjkxLTYuOTFhNiA2IDAgMCAxIDcuOTQtNy45NGwtMy43NiAzLjc2eiIvPjwvc3ZnPg==" width="18" height="18" style="vertical-align:middle" alt="tool"> Agentic Tools

Droide uses Google Gemini's native function-calling API to execute real tools — not simulated responses:

| Tool | Capability |
|---|---|
| `googleSearch` | Live internet search via Google Search grounding |
| `execute_code` | Run sandboxed code in Python, JavaScript, TypeScript, Rust, Go, C, C++, Bash |
| `generate_image` | Generate images from text prompts |
| `get_weather` | Real-time weather via Open-Meteo API (lat/lon based) |
| `search_places` | Maps & places search powered by OpenStreetMap / Nominatim |
| `get_sports_data` | Live sports scores and standings (NBA, NFL, MLB, NHL, EPL, MLS) via ESPN |
| `read_url_content` | Fetch and read full web page content via proxy (deep research) |
| `save_file` | Save Markdown, text, CSV, or code files to local session storage |
| `manage_memory` | Learn or forget facts about the user for persistent personalization |
| `clear_chat_history` | Programmatically clear the current session |
| `get_current_time` | Get the current date and time in the user's timezone |
| `update_app_settings` | Dynamically change theme, font size, and other settings via chat |
| `save_prompt` | Save new personas and prompts to the Prompt Library via chat |
| `install_skill` | Install new skills and integrations directly through conversation |

> **Tool Access Modes**: Choose between `needed` (auto), `always`, or `never` in Settings → Capabilities.

---

### <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIxNiAxOCAyMiAxMiAxNiA2Ii8+PHBvbHlsaW5lIHBvaW50cz0iOCA2IDIgMTIgOCAxOCIvPjwvc3ZnPg==" width="18" height="18" style="vertical-align:middle" alt="code"> Artifacts & Code

- **HTML Artifacts** — The AI can generate full interactive HTML + Tailwind CSS pages rendered live inside a sandboxed iframe in chat
- **SVG Illustrations** — Inline vector graphics rendered directly in the message
- **Mermaid Diagrams** — Flowcharts, sequence diagrams, class diagrams, ER diagrams rendered from Markdown
- **AI-Powered Artifacts** — Artifacts can themselves call the Gemini API for interactive AI-driven mini-apps
- **Syntax-Highlighted Code Blocks** — All code blocks use `react-syntax-highlighter` with line numbers and a copy button
- **Code Execution** — Run code blocks directly from the chat with one tap via the Piston API sandbox
- **Artifact Viewer** — Dedicated full-screen artifact viewer with zoom and share controls

---

### <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNOS41IDJBMi41IDIuNSAwIDAgMSAxMiA0LjV2MTVhMi41IDIuNSAwIDAgMS00Ljk2LS40NiAyLjUgMi41IDAgMCAxLTIuOTYtMy4wOCAzIDMgMCAwIDEtLjM0LTUuNTggMi41IDIuNSAwIDAgMSAxLjMyLTQuMjQgMi41IDIuNSAwIDAgMSAxLjk4LTNBMi41IDIuNSAwIDAgMSA5LjUgMnoiLz48cGF0aCBkPSJNMTQuNSAyQTIuNSAyLjUgMCAwIDAgMTIgNC41djE1YTIuNSAyLjUgMCAwIDAgNC45Ni0uNDYgMi41IDIuNSAwIDAgMCAyLjk2LTMuMDggMyAzIDAgMCAwIC4zNC01LjU4IDIuNSAyLjUgMCAwIDAtMS4zMi00LjI0IDIuNSAyLjUgMCAwIDAtMS45OC0zQTIuNSAyLjUgMCAwIDAgMTQuNSAyeiIvPjwvc3ZnPg==" width="18" height="18" style="vertical-align:middle" alt="brain"> AI & Model Settings

- **Google Gemini** — Primary AI provider with full streaming, function calling, and vision support
- **Custom API Providers** — Add any OpenAI-compatible endpoint (OpenRouter, Ollama, LM Studio, Together AI, etc.) with name, base URL, and API key
- **Model Selector** — Switch between models mid-conversation; auto-fetches available models from custom providers
- **Temperature Control** — Adjust response creativity (0.0 – 2.0)
- **Top-P Control** — Fine-tune token probability sampling
- **Personas** — Switch between built-in personas: Droide (default), Coder, Writer, Tutor — or create your own
- **Adaptive Thinking** — Toggle a multi-step cognitive framework that makes the AI pivot perspectives, challenge assumptions, and reflect on its reasoning
- **System Prompt Editor** — Full custom system prompt with live character count
- **Custom Instructions** — Persistent custom instructions appended to every conversation
- **Formatting Preferences** — Control prose style (concise / detailed / narrative), list style, and response length
- **Writing Style** — Set a global writing style preference
- **Censored Mode** — Per-model content safety toggle
- **Stream Responses** — Toggle real-time streaming on or off

---

### <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48ZWxsaXBzZSBjeD0iMTIiIGN5PSI1IiByeD0iOSIgcnk9IjMiLz48cGF0aCBkPSJNMjEgMTJjMCAxLjY2LTQgMy05IDNzLTktMS4zNC05LTMiLz48cGF0aCBkPSJNMyA1djE0YzAgMS42NiA0IDMgOSAzczktMS4zNCA5LTNWNSIvPjwvc3ZnPg==" width="18" height="18" style="vertical-align:middle" alt="memory"> Memory & Personalization

- **Persistent Memory** — The AI uses `manage_memory` to remember facts about you (name, preferences, work context) across all sessions stored in IndexedDB
- **Memory Manager UI** — View, search, and delete all stored memories from the Memory Menu
- **User Profile** — Set your full name, nickname, avatar, and work description; used to personalize responses
- **Bengali Language Mode** — `forceBengali` setting instructs the AI to always respond in Bengali
- **Chat Font & Font Size** — Choose from a curated list of fonts and set a custom font size
- **Caret / Cursor Style** — Customize the text cursor style: bar, underscore, block, dot, or slash
- **Theme** — Light, Dark, or System (follows device preference)

---

### <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIgMjJ2LTUiLz48cGF0aCBkPSJNOSA4VjIiLz48cGF0aCBkPSJNMTUgOFYyIi8+PHBhdGggZD0iTTE4IDh2NWE0IDQgMCAwIDEtNCA0aC00YTQgNCAwIDAgMS00LTRWOHoiLz48L3N2Zz4=" width="18" height="18" style="vertical-align:middle" alt="plug"> Skills & Extensions (MCP)

- **Extension Marketplace** — Browse and install hundreds of curated MCP (Model Context Protocol) server integrations
- **Categories** — Developer Tools, Databases, Cloud Providers, Productivity, Communication, Finance, Analytics, Security, AI & ML, E-commerce, CRM, Design, DevOps, and more
- **Community MCPs** — Live GitHub search fetches the latest community-built MCP servers sorted by stars
- **Custom MCP** — Add any custom MCP server by URL or GitHub repository link
- **Prompt Library** — Save, browse, and apply custom personas and system prompts
- **Installed Skills List** — View all installed skills with name, description, and install date

---

### <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSI1IiB5PSIyIiB3aWR0aD0iMTQiIGhlaWdodD0iMjAiIHJ4PSIyIiByeT0iMiIvPjxsaW5lIHgxPSIxMiIgeTE9IjE4IiB4Mj0iMTIuMDEiIHkyPSIxOCIvPjwvc3ZnPg==" width="18" height="18" style="vertical-align:middle" alt="smartphone"> UI/UX & Accessibility

- **Mobile-First Design** — Designed from scratch for small screens with native-grade touch targets
- **Framer Motion Animations** — Smooth entrance/exit animations throughout the entire app
- **Animated Thinking Cursor** — Character-by-character wave animation during AI thinking
- **Haptic Feedback** — Native vibration on key interactions (Android)
- **Voice Dictation** — Speech-to-text input via the Web Speech API
- **Vision / Image Upload** — Attach images to messages; full multimodal support (JPEG, PNG, WebP, GIF, video, audio)
- **File Attachment** — Attach and share files (archives auto-extracted), with a rich file type icon registry
- **Format Toolbar** — Quick shortcuts for bold, italic, code, and other Markdown formatting
- **Skeleton Loaders** — Smooth skeleton loading states for sessions and messages
- **Toast Notifications** — Non-intrusive feedback toasts for actions and errors
- **Task Completion Notifications** — In-app and sound notification when a long-running task finishes

---

### <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNNSAxNmE3IDcgMCAwIDEgMTQgMCIvPjxsaW5lIHgxPSIxMiIgeTE9IjE2IiB4Mj0iMTIiIHkyPSIyMCIvPjxsaW5lIHgxPSI5IiB5MT0iMjAiIHgyPSIxNSIgeTI9IjIwIi8+PGNpcmNsZSBjeD0iOC41IiBjeT0iMTEiIHI9IjEiIGZpbGw9IiM3YzNhZWQiIHN0cm9rZT0iIzdjM2FlZCIvPjxjaXJjbGUgY3g9IjE1LjUiIGN5PSIxMSIgcj0iMSIgZmlsbD0iIzdjM2FlZCIgc3Ryb2tlPSIjN2MzYWVkIi8+PC9zdmc+" width="18" height="18" style="vertical-align:middle" alt="android"> Native Android Features

- **Capacitor Integration** — Web app wrapped as a native Android APK using Capacitor v8
- **Splash Screen** — Custom branded splash screen with immersive full-screen mode
- **Status Bar** — Themed status bar matching the app color
- **Keyboard Handling** — Native keyboard show/hide events handled via `@capacitor/keyboard`
- **App ID** — `com.droide.app`
- **GitHub Actions CI** — Automated APK build on every push to `main`

---

### <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIgMjJzOC00IDgtMTBWNWwtOC0zLTggM3Y3YzAgNiA4IDEwIDggMTB6Ii8+PC9zdmc+" width="18" height="18" style="vertical-align:middle" alt="shield"> Data & Privacy

- **Local-First Storage** — All sessions, settings, and memories are stored locally in the browser's `localStorage` and `IndexedDB` — no account required
- **Data Export** — Export all your chat data and settings as a JSON file
- **Shared Chats** — Manage and delete any shared conversation links
- **Location Metadata** — Optional toggle to include location context in AI prompts
- **Network Egress Control** — Toggle whether agentic tools can make outbound network requests
- **Censored Mode** — Per-model safety filter toggle
- **Privacy Settings Tab** — Dedicated privacy section in Settings with granular controls

---

## <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIi8+PHBhdGggZD0iTTE5LjQgMTVhMS42NSAxLjY1IDAgMCAwIC4zMyAxLjgybC4wNi4wNmEyIDIgMCAwIDEgMCAyLjgzIDIgMiAwIDAgMS0yLjgzIDBsLS4wNi0uMDZhMS42NSAxLjY1IDAgMCAwLTEuODItLjMzIDEuNjUgMS42NSAwIDAgMC0xIDEuNTFWMjFhMiAyIDAgMCAxLTIgMiAyIDIgMCAwIDEtMi0ydi0uMDlBMS42NSAxLjY1IDAgMCAwIDkgMTkuNGExLjY1IDEuNjUgMCAwIDAtMS44Mi4zM2wtLjA2LjA2YTIgMiAwIDAgMS0yLjgzIDAgMiAyIDAgMCAxIDAtMi44M2wuMDYtLjA2QTEuNjUgMS42NSAwIDAgMCA0LjY4IDE1YTEuNjUgMS42NSAwIDAgMC0xLjUxLTFIM2EyIDIgMCAwIDEtMi0yIDIgMiAwIDAgMSAyLTJoLjA5QTEuNjUgMS42NSAwIDAgMCA0LjYgOWExLjY1IDEuNjUgMCAwIDAtLjMzLTEuODJsLS4wNi0uMDZhMiAyIDAgMCAxIDAtMi44MyAyIDIgMCAwIDEgMi44MyAwbC4wNi4wNkExLjY1IDEuNjUgMCAwIDAgOSA0LjY4YTEuNjUgMS42NSAwIDAgMCAxLTEuNTFWM2EyIDIgMCAwIDEgMi0yIDIgMiAwIDAgMSAyIDJ2LjA5YTEuNjUgMS42NSAwIDAgMCAxIDEuNTEgMS42NSAxLjY1IDAgMCAwIDEuODItLjMzbC4wNi0uMDZhMiAyIDAgMCAxIDIuODMgMCAyIDIgMCAwIDEgMCAyLjgzbC0uMDYuMDZBMS42NSAxLjY1IDAgMCAwIDE5LjQgOWExLjY1IDEuNjUgMCAwIDAgMS41MSAxSDIxYTIgMiAwIDAgMSAyIDIgMiAyIDAgMCAxLTIgMmgtLjA5YTEuNjUgMS42NSAwIDAgMC0xLjUxIDF6Ii8+PC9zdmc+" width="22" height="22" style="vertical-align:middle" alt="settings"> Tech Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React 19 + TypeScript |
| **Build Tool** | Vite 6 |
| **Styling** | Tailwind CSS v4 |
| **Animation** | Framer Motion (motion/react) |
| **AI SDK** | `@google/genai` v2 |
| **Markdown Rendering** | `react-markdown` + `remark-gfm` |
| **Code Highlighting** | `react-syntax-highlighter` |
| **PDF Export** | `jspdf` |
| **ZIP Handling** | `jszip` |
| **Local Database** | IndexedDB via `idb` |
| **Icons** | `lucide-react` |
| **Server** | Express + `tsx` (dev proxy for Gemini API) |
| **Native Wrapper** | Capacitor v8 (Android + iOS) |
| **CI/CD** | GitHub Actions |

---

## <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48bGluZSB4MT0iMTYuNSIgeTE9IjkuNCIgeDI9IjcuNSIgeTI9IjQuMjEiLz48cGF0aCBkPSJNMjEgMTZWOGEyIDIgMCAwIDAtMS0xLjczbC03LTRhMiAyIDAgMCAwLTIgMGwtNyA0QTIgMiAwIDAgMCAzIDh2OGEyIDIgMCAwIDAgMSAxLjczbDcgNGEyIDIgMCAwIDAgMiAwbDctNEEyIDIgMCAwIDAgMjEgMTZ6Ii8+PHBvbHlsaW5lIHBvaW50cz0iMy4yNyA2Ljk2IDEyIDEyLjAxIDIwLjczIDYuOTYiLz48bGluZSB4MT0iMTIiIHkxPSIyMi4wOCIgeDI9IjEyIiB5Mj0iMTIiLz48L3N2Zz4=" width="22" height="22" style="vertical-align:middle" alt="package"> Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** v22 or higher — [nodejs.org](https://nodejs.org)
- **npm** v10 or higher (comes with Node.js)
- **Git** — [git-scm.com](https://git-scm.com)
- **Google Gemini API Key** — [Get one free at Google AI Studio](https://aistudio.google.com/app/apikey)

**For building the Android APK locally (optional):**
- **Java JDK 21** (Zulu or OpenJDK) — [Adoptium](https://adoptium.net)
- **Android Studio** (for SDK tools) — [developer.android.com](https://developer.android.com/studio)
- **Android SDK** with Build Tools 34+

---

## <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNNC41IDE2LjVjLTEuNSAxLjI2LTIgNS0yIDVzMy43NC0uNSA1LTJjLjcxLS44NC43LTIuMTMtLjA5LTIuOTFhMi4xOCAyLjE4IDAgMCAwLTIuOTEtLjA5eiIvPjxwYXRoIGQ9Im0xMiAxNS0zLTNhMjIgMjIgMCAwIDEgMi0zLjk1QTEyLjg4IDEyLjg4IDAgMCAxIDIyIDJjMCAyLjcyLS43OCA3LjUtNiAxMWEyMi4zNSAyMi4zNSAwIDAgMS00IDJ6Ii8+PHBhdGggZD0iTTkgMTJINHMuNTUtMy4wMyAyLTRjMS42Mi0xLjA4IDUgMCA1IDAiLz48cGF0aCBkPSJNMTIgMTV2NXMzLjAzLS41NSA0LTJjMS4wOC0xLjYyIDAtNSAwLTUiLz48L3N2Zz4=" width="22" height="22" style="vertical-align:middle" alt="rocket"> Installation & Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/droid-apk.git
cd droid-apk
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure your API key

```bash
cp .env.example .env.local
```

Open `.env.local` and add your Gemini API key:

```env
GEMINI_API_KEY=your_gemini_api_key_here
APP_URL=http://localhost:3000
```

### 4. Run the development server

```bash
npm run dev
```

The app will be available at **http://localhost:3000**

> The dev server runs an Express proxy (`server.ts`) that forwards Gemini API requests through the backend to avoid browser CORS restrictions.

### 5. Build for production (web)

```bash
npm run build
```

The production build will be output to the `dist/` folder.

---

## <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSI1IiB5PSIyIiB3aWR0aD0iMTQiIGhlaWdodD0iMjAiIHJ4PSIyIiByeT0iMiIvPjxsaW5lIHgxPSIxMiIgeTE9IjE4IiB4Mj0iMTIuMDEiIHkyPSIxOCIvPjwvc3ZnPg==" width="22" height="22" style="vertical-align:middle" alt="smartphone"> Building the APK

Droide uses **Capacitor** to package the web app as a native Android APK. There are two methods:

---

### Method 1 — GitHub Actions (Recommended, Zero Setup)

The repository includes a pre-configured GitHub Actions workflow that automatically builds a debug APK on every push to `main`. No local Android environment required.

**Steps:**

1. **Fork or push** this repository to your GitHub account.

2. **Add your Gemini API key** as a GitHub repository secret:
   - Go to `Settings` → `Secrets and variables` → `Actions` → `New repository secret`
   - Name: `GEMINI_API_KEY`
   - Value: your API key

3. **Push to `main`** (or trigger manually via `Actions` → `Build Android APK` → `Run workflow`).

4. **Download the APK:**
   - Go to `Actions` → Select the latest workflow run
   - Download the **`Droide-App-APK`** artifact
   - Install `app-debug.apk` on your Android device (enable "Install from unknown sources" in settings)

> The workflow file is at `.github/workflows/build-apk.yml`

---

### Method 2 — Local Build (Full Control)

#### Step 1 — Build the web app

```bash
npm run build
```

#### Step 2 — Add Android platform

```bash
npx cap add android
```

#### Step 3 — Sync web assets to Android

```bash
npx cap copy android
```

#### Step 4 — Fix Kotlin dependency conflicts (one-time)

Append the following to `android/app/build.gradle`:

```gradle
configurations.all {
    resolutionStrategy {
        force 'org.jetbrains.kotlin:kotlin-stdlib:1.8.22'
        force 'org.jetbrains.kotlin:kotlin-stdlib-common:1.8.22'
    }
    exclude group: 'org.jetbrains.kotlin', module: 'kotlin-stdlib-jdk7'
    exclude group: 'org.jetbrains.kotlin', module: 'kotlin-stdlib-jdk8'
}
```

#### Step 5 — Set up JDK 21

Make sure `JAVA_HOME` points to JDK 21:

```bash
export JAVA_HOME=/path/to/jdk-21
```

#### Step 6 — Build the debug APK

```bash
cd android
chmod +x gradlew
./gradlew assembleDebug
```

The APK will be at:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

#### Step 7 — (Optional) Open in Android Studio

```bash
npx cap open android
```

This opens the project in Android Studio for signing, debugging, and generating a release APK.

---

#### Building a Signed Release APK

For publishing to Google Play or distributing outside debug mode:

```bash
# Generate a keystore (one-time)
keytool -genkey -v -keystore droide-release.jks \
  -keyalg RSA -keysize 2048 -validity 10000 -alias droide

# In Android Studio:
# Build → Generate Signed Bundle / APK → APK → select keystore → Release
```

---

## <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIi8+PHBhdGggZD0iTTE5LjQgMTVhMS42NSAxLjY1IDAgMCAwIC4zMyAxLjgybC4wNi4wNmEyIDIgMCAwIDEgMCAyLjgzIDIgMiAwIDAgMS0yLjgzIDBsLS4wNi0uMDZhMS42NSAxLjY1IDAgMCAwLTEuODItLjMzIDEuNjUgMS42NSAwIDAgMC0xIDEuNTFWMjFhMiAyIDAgMCAxLTIgMiAyIDIgMCAwIDEtMi0ydi0uMDlBMS42NSAxLjY1IDAgMCAwIDkgMTkuNGExLjY1IDEuNjUgMCAwIDAtMS44Mi4zM2wtLjA2LjA2YTIgMiAwIDAgMS0yLjgzIDAgMiAyIDAgMCAxIDAtMi44M2wuMDYtLjA2QTEuNjUgMS42NSAwIDAgMCA0LjY4IDE1YTEuNjUgMS42NSAwIDAgMC0xLjUxLTFIM2EyIDIgMCAwIDEtMi0yIDIgMiAwIDAgMSAyLTJoLjA5QTEuNjUgMS42NSAwIDAgMCA0LjYgOWExLjY1IDEuNjUgMCAwIDAtLjMzLTEuODJsLS4wNi0uMDZhMiAyIDAgMCAxIDAtMi44MyAyIDIgMCAwIDEgMi44MyAwbC4wNi4wNkExLjY1IDEuNjUgMCAwIDAgOSA0LjY4YTEuNjUgMS42NSAwIDAgMCAxLTEuNTFWM2EyIDIgMCAwIDEgMi0yIDIgMiAwIDAgMSAyIDJ2LjA5YTEuNjUgMS42NSAwIDAgMCAxIDEuNTEgMS42NSAxLjY1IDAgMCAwIDEuODItLjMzbC4wNi0uMDZhMiAyIDAgMCAxIDIuODMgMCAyIDIgMCAwIDEgMCAyLjgzbC0uMDYuMDZBMS42NSAxLjY1IDAgMCAwIDE5LjQgOWExLjY1IDEuNjUgMCAwIDAgMS41MSAxSDIxYTIgMiAwIDAgMSAyIDIgMiAyIDAgMCAxLTIgMmgtLjA5YTEuNjUgMS42NSAwIDAgMC0xLjUxIDF6Ii8+PC9zdmc+" width="22" height="22" style="vertical-align:middle" alt="settings"> Configuration

### `capacitor.config.ts`

```typescript
const config: CapacitorConfig = {
  appId: 'com.droide.app',        // Android package name
  appName: 'Droide',              // Display name on device
  webDir: 'dist',                 // Vite build output folder
  plugins: {
    SplashScreen: { ... },        // Splash screen config
    StatusBar: { ... }            // Status bar color/style
  }
};
```

### Environment Variables (`.env.local`)

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | Yes | Your Google Gemini API key |
| `APP_URL` | Optional | Base URL of the deployed app |

### In-App Settings

All settings are configured directly in the app's Settings panel (tap the <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIi8+PHBhdGggZD0iTTE5LjQgMTVhMS42NSAxLjY1IDAgMCAwIC4zMyAxLjgybC4wNi4wNmEyIDIgMCAwIDEgMCAyLjgzIDIgMiAwIDAgMS0yLjgzIDBsLS4wNi0uMDZhMS42NSAxLjY1IDAgMCAwLTEuODItLjMzIDEuNjUgMS42NSAwIDAgMC0xIDEuNTFWMjFhMiAyIDAgMCAxLTIgMiAyIDIgMCAwIDEtMi0ydi0uMDlBMS42NSAxLjY1IDAgMCAwIDkgMTkuNGExLjY1IDEuNjUgMCAwIDAtMS44Mi4zM2wtLjA2LjA2YTIgMiAwIDAgMS0yLjgzIDAgMiAyIDAgMCAxIDAtMi44M2wuMDYtLjA2QTEuNjUgMS42NSAwIDAgMCA0LjY4IDE1YTEuNjUgMS42NSAwIDAgMC0xLjUxLTFIM2EyIDIgMCAwIDEtMi0yIDIgMiAwIDAgMSAyLTJoLjA5QTEuNjUgMS42NSAwIDAgMCA0LjYgOWExLjY1IDEuNjUgMCAwIDAtLjMzLTEuODJsLS4wNi0uMDZhMiAyIDAgMCAxIDAtMi44MyAyIDIgMCAwIDEgMi44MyAwbC4wNi4wNkExLjY1IDEuNjUgMCAwIDAgOSA0LjY4YTEuNjUgMS42NSAwIDAgMCAxLTEuNTFWM2EyIDIgMCAwIDEgMi0yIDIgMiAwIDAgMSAyIDJ2LjA5YTEuNjUgMS42NSAwIDAgMCAxIDEuNTEgMS42NSAxLjY1IDAgMCAwIDEuODItLjMzbC4wNi0uMDZhMiAyIDAgMCAxIDIuODMgMCAyIDIgMCAwIDEgMCAyLjgzbC0uMDYuMDZBMS42NSAxLjY1IDAgMCAwIDE5LjQgOWExLjY1IDEuNjUgMCAwIDAgMS41MSAxSDIxYTIgMiAwIDAgMSAyIDIgMiAyIDAgMCAxLTIgMmgtLjA5YTEuNjUgMS42NSAwIDAgMC0xLjUxIDF6Ii8+PC9zdmc+" width="14" height="14" style="vertical-align:middle" alt="settings"> icon):

- **General** — Theme, font, font size, language, caret style, user profile
- **Privacy** — Memory, location metadata, data sharing, network egress
- **Capabilities** — Artifacts, code execution, tool access mode, AI artifacts, inline visualizations
- **Connectors** — Custom API providers and MCP server configurations

---

## <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjIgMTlhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDVsMiAzaDlhMiAyIDAgMCAxIDIgMnoiLz48L3N2Zz4=" width="22" height="22" style="vertical-align:middle" alt="folder"> Project Structure

```
droid-apk/
├── .github/
│   └── workflows/
│       └── build-apk.yml          # GitHub Actions APK build pipeline
├── assets/
│   └── telegram-qr.jpg            # Telegram community QR code
├── public/
│   ├── icon.svg                   # App icon
│   └── manifest.json              # PWA manifest
├── src/
│   ├── App.tsx                    # Main app component (core logic)
│   ├── main.tsx                   # React entry point
│   ├── index.css                  # Global styles & CSS variables
│   ├── types.ts                   # TypeScript type definitions
│   ├── components/
│   │   ├── ArtifactViewer.tsx     # Inline artifact renderer (HTML/SVG/Mermaid)
│   │   ├── CodeBlock.tsx          # Syntax-highlighted code with run button
│   │   ├── MemoryMenu.tsx         # Persistent memory manager UI
│   │   ├── SkillsMenu.tsx         # Skills/extensions browser UI
│   │   ├── chat/
│   │   │   ├── BrandLogo.tsx      # Droide brand logo component
│   │   │   ├── ChatHeader.tsx     # Top navigation bar
│   │   │   └── ChatInput.tsx      # Message input with format toolbar
│   │   ├── common/
│   │   │   ├── ScrollToBottomFAB.tsx
│   │   │   └── Skeleton.tsx       # Skeleton loading components
│   │   └── modals/
│   │       ├── DeleteSessionModal.tsx
│   │       ├── ExtensionMarketplace.tsx   # MCP server marketplace
│   │       ├── ModelSelector.tsx
│   │       ├── ProjectWorkspaceModal.tsx
│   │       ├── PromptLibraryModal.tsx
│   │       └── SettingsModal.tsx
│   ├── constants/
│   │   └── fonts.ts               # Curated font list
│   ├── data/
│   │   └── mcpServers.ts          # Built-in MCP server catalog
│   ├── lib/
│   │   ├── archive.ts             # ZIP/archive extraction utilities
│   │   ├── db.ts                  # IndexedDB manager via idb
│   │   ├── fileIconRegistry.tsx   # File type → icon mapping
│   │   └── subagents.ts           # Sub-agent definitions
│   └── services/
│       └── gemini.ts              # Gemini API service, tools, streaming
├── server.ts                      # Express dev server / Gemini API proxy
├── capacitor.config.ts            # Capacitor native app config
├── vite.config.ts                 # Vite build configuration
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Dependencies & npm scripts
└── .env.example                   # Environment variable template
```

---

## <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWdvbiBwb2ludHM9IjMgNiA5IDMgMTUgNiAyMSAzIDIxIDE4IDE1IDIxIDkgMTggMyAyMSAzIDYiLz48bGluZSB4MT0iOSIgeTE9IjMiIHgyPSI5IiB5Mj0iMTgiLz48bGluZSB4MT0iMTUiIHkxPSI2IiB4Mj0iMTUiIHkyPSIyMSIvPjwvc3ZnPg==" width="22" height="22" style="vertical-align:middle" alt="map"> Future Roadmap

The following features are planned for upcoming versions of Droide. Join the Telegram community to vote on priorities and suggest new ideas.

### <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNOS41IDJBMi41IDIuNSAwIDAgMSAxMiA0LjV2MTVhMi41IDIuNSAwIDAgMS00Ljk2LS40NiAyLjUgMi41IDAgMCAxLTIuOTYtMy4wOCAzIDMgMCAwIDEtLjM0LTUuNTggMi41IDIuNSAwIDAgMSAxLjMyLTQuMjQgMi41IDIuNSAwIDAgMSAxLjk4LTNBMi41IDIuNSAwIDAgMSA5LjUgMnoiLz48cGF0aCBkPSJNMTQuNSAyQTIuNSAyLjUgMCAwIDAgMTIgNC41djE1YTIuNSAyLjUgMCAwIDAgNC45Ni0uNDYgMi41IDIuNSAwIDAgMCAyLjk2LTMuMDggMyAzIDAgMCAwIC4zNC01LjU4IDIuNSAyLjUgMCAwIDAtMS4zMi00LjI0IDIuNSAyLjUgMCAwIDAtMS45OC0zQTIuNSAyLjUgMCAwIDAgMTQuNSAyeiIvPjwvc3ZnPg==" width="18" height="18" style="vertical-align:middle" alt="brain"> AI & Intelligence
- [ ] **Claude / Anthropic support** — Native API integration alongside Gemini
- [ ] **Local LLM via Ollama** — Fully offline, on-device inference
- [ ] **Multi-modal reasoning** — Video and audio file analysis in chat
- [ ] **Agent chaining** — Chain multiple AI agents for complex autonomous tasks
- [ ] **Long-context memory** — RAG-based semantic search over entire chat history
- [ ] **Scheduled AI tasks** — Set jobs to run at specific times (daily summaries, reminders, etc.)

### <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSI1IiB5PSIyIiB3aWR0aD0iMTQiIGhlaWdodD0iMjAiIHJ4PSIyIiByeT0iMiIvPjxsaW5lIHgxPSIxMiIgeTE9IjE4IiB4Mj0iMTIuMDEiIHkyPSIxOCIvPjwvc3ZnPg==" width="18" height="18" style="vertical-align:middle" alt="smartphone"> Mobile & Native
- [ ] **iOS IPA support** — Full iOS build via Capacitor
- [ ] **Android home screen widget** — Quick-chat widget without opening the app
- [ ] **Push notifications** — Background task completion alerts via FCM
- [ ] **Biometric lock** — Fingerprint / face authentication gate
- [ ] **Offline queue** — Queue messages when offline, auto-send on reconnect

### <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjEgMTVhMiAyIDAgMCAxLTIgMkg3bC00IDRWNWEyIDIgMCAwIDEgMi0yaDE0YTIgMiAwIDAgMSAyIDJ6Ii8+PC9zdmc+" width="18" height="18" style="vertical-align:middle" alt="message"> Chat & UX
- [ ] **Full PDF export** — Export conversation as a formatted PDF document
- [ ] **Voice responses (TTS)** — Text-to-speech playback of AI replies
- [ ] **Conversation branching** — Fork from any message to explore alternate paths
- [ ] **In-chat PDF/audio/video viewer** — Native media previews inside chat
- [ ] **Full-text search** — Search across all sessions and messages
- [ ] **Real-time collaboration** — Share a live session link with another person
- [ ] **Message reactions** — React to messages with emoji

### <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIgMjJ2LTUiLz48cGF0aCBkPSJNOSA4VjIiLz48cGF0aCBkPSJNMTUgOFYyIi8+PHBhdGggZD0iTTE4IDh2NWE0IDQgMCAwIDEtNCA0aC00YTQgNCAwIDAgMS00LTRWOHoiLz48L3N2Zz4=" width="18" height="18" style="vertical-align:middle" alt="plug"> Integrations
- [ ] **Google Drive** — Read and write files from Drive
- [ ] **Notion** — Read and update pages and databases
- [ ] **GitHub** — Browse repos, create issues, review PRs via chat
- [ ] **Google Calendar** — Read events and create meetings from chat
- [ ] **Gmail** — Read and compose email via the AI
- [ ] **Custom webhook tools** — Define custom HTTP tools the AI can call

### <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMy41IiBjeT0iNi41IiByPSIuNSIgZmlsbD0iIzdjM2FlZCIgc3Ryb2tlPSIjN2MzYWVkIi8+PGNpcmNsZSBjeD0iMTcuNSIgY3k9IjEwLjUiIHI9Ii41IiBmaWxsPSIjN2MzYWVkIiBzdHJva2U9IiM3YzNhZWQiLz48Y2lyY2xlIGN4PSI4LjUiIGN5PSI3LjUiIHI9Ii41IiBmaWxsPSIjN2MzYWVkIiBzdHJva2U9IiM3YzNhZWQiLz48Y2lyY2xlIGN4PSI2LjUiIGN5PSIxMi41IiByPSIuNSIgZmlsbD0iIzdjM2FlZCIgc3Ryb2tlPSIjN2MzYWVkIi8+PHBhdGggZD0iTTEyIDJDNi41IDIgMiA2LjUgMiAxMnM0LjUgMTAgMTAgMTBjLjkyNiAwIDEuNjQ4LS43NDYgMS42NDgtMS42ODggMC0uNDM3LS4xOC0uODM1LS40MzctMS4xMjUtLjI5LS4yODktLjQzOC0uNjUyLS40MzgtMS4xMjVhMS42NCAxLjY0IDAgMCAxIDEuNjY4LTEuNjY4aDEuOTk2YzMuMDUxIDAgNS41NTUtMi41MDMgNS41NTUtNS41NTRDMjEuOTY1IDYuMDEyIDE3LjQ2MSAyIDEyIDJ6Ii8+PC9zdmc+" width="18" height="18" style="vertical-align:middle" alt="palette"> Customization
- [ ] **Theme editor** — Build and share custom color themes
- [ ] **Custom launcher icon** — Replace the default app icon
- [ ] **Plugin SDK** — Public SDK for third-party Droide plugins
- [ ] **Layout modes** — Compact, comfortable, and spacious message density options

### <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cmVjdCB4PSIzIiB5PSIxMSIgd2lkdGg9IjE4IiBoZWlnaHQ9IjExIiByeD0iMiIgcnk9IjIiLz48cGF0aCBkPSJNNyAxMVY3YTUgNSAwIDAgMSAxMCAwdjQiLz48L3N2Zz4=" width="18" height="18" style="vertical-align:middle" alt="lock"> Security & Privacy
- [ ] **At-rest encryption** — Encrypt all locally stored data
- [ ] **Self-hosted server** — Deploy your own Droide backend for full control
- [ ] **API key vault** — Secure encrypted keychain storage for provider keys

---

## <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxsaW5lIHgxPSIyIiB5MT0iMTIiIHgyPSIyMiIgeTI9IjEyIi8+PHBhdGggZD0iTTEyIDJhMTUuMyAxNS4zIDAgMCAxIDQgMTAgMTUuMyAxNS4zIDAgMCAxLTQgMTAgMTUuMyAxNS4zIDAgMCAxLTQtMTAgMTUuMyAxNS4zIDAgMCAxIDQtMTB6Ii8+PC9zdmc+" width="22" height="22" style="vertical-align:middle" alt="globe"> Community & Updates

Stay up to date with new features, beta APK releases, bug fixes, and community discussion:

<div align="center">

### Join the Telegram Community

<img src="assets/telegram-qr.jpg" width="260" alt="Telegram QR Code — @DZDEV25" />

**[@DZDEV25](https://t.me/DZDEV25)**

Scan the QR code above or tap the link to join.
Get early APK releases, report bugs, suggest features, and connect with other Droide users.

</div>

---

## License

This project is licensed under the **MIT License**.

---

<div align="center">

Made with <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMjAuODQgNC42MWE1LjUgNS41IDAgMCAwLTcuNzggMEwxMiA1LjY3bC0xLjA2LTEuMDZhNS41IDUuNSAwIDAgMC03Ljc4IDcuNzhsMS4wNiAxLjA2TDEyIDIxLjIzbDcuNzgtNy43OCAxLjA2LTEuMDZhNS41IDUuNSAwIDAgMCAwLTcuNzh6IiBmaWxsPSIjN2MzYWVkIiBzdHJva2U9IiM3YzNhZWQiLz48L3N2Zz4=" width="14" height="14" style="vertical-align:middle" alt="heart"> by the Droide team &nbsp;·&nbsp; **[Telegram @DZDEV25](https://t.me/DZDEV25)**

</div>
