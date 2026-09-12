import CONFIG from './config'
import { themeConsoleStyle } from '@/lib/themeConsoleStyle'

/**
 * Endspace Theme - Global Styles (JSX)
 * Light Industrial / Endfield-inspired aesthetic
 */

export const Style = () => {
  return (
    <style jsx global>{`
      /* ============================================
         全站字体 - 狸叶黑体（本地自托管）
         文件: /public/fonts/LeeeafHei-Regular.ttf
         ============================================ */
      @font-face {
        font-family: 'LeeeafHei';
        src: url('/fonts/LeeeafHei-Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }

      /* ============================================
         CSS Custom Properties - Light Industrial Theme
         ============================================ */
      :root {
        /* Ethereal Whites & Grays */
        --endspace-bg-base-light: #F3F7EF;
        --endspace-bg-base-dark: #004469;
        --endspace-bg-primary-light: #ffffff;
        --endspace-bg-primary-dark: #0B527B;
        --endspace-bg-base: #F3F7EF;
        --endspace-bg-primary: #ffffff;
        --endspace-bg-secondary: #eaf0e4;
        --endspace-bg-tertiary: #dde7d5;

        /* Dark Text (High Contrast) */
        --endspace-text-primary-light: #1a2413;
        --endspace-text-primary-dark: #38BDF8;
        --endspace-text-secondary-light: #4f5a45;
        --endspace-text-secondary-dark: #9CCFEE;
        --endspace-text-primary: #1a2413;
        --endspace-text-secondary: #4f5a45;
        --endspace-text-muted: #8a9480;

        /* Article Body Text - 日间纯黑，夜间跟随主题文字色 */
        --endspace-article-text: #000;
        --endspace-article-text-secondary: #1a1a1a;

        /* ============================================
           全站字体 —— 改字体只需改下面两行
           --endspace-font-sans: 正文/标题字体栈（第一个是主字体）
           --endspace-font-mono: 等宽字体（.tech-text 的日期/标签数字用）
           注意：#theme-endspace 是 id 选择器，优先级高于 Tailwind 的
           .font-sans 类，所以 blog.config 的 FONT_STYLE 与 conf/font.config.js
           的 FONT_SANS/FONT_SERIF 在本主题下都不生效，必须改这里。
           要用网络字体（如霞鹜文楷）：先在 conf/font.config.js 的 FONT_URL
           填字体 CSS 地址，再把字体名加到下面栈的最前面。
           ============================================ */
        --endspace-font-sans: 'LeeeafHei', 'Inter', 'PingFang SC', -apple-system,
          BlinkMacSystemFont, 'Microsoft YaHei', 'Noto Sans SC',
          'Helvetica Neue', Helvetica, Arial, sans-serif;
        --endspace-font-mono: 'JetBrains Mono', 'Cascadia Code', 'Courier New',
          monospace;
        /* 文章正文专用字体栈 —— 不含狸叶黑体，文章内容不使用上传字体 */
        --endspace-font-article: 'Inter', 'PingFang SC', -apple-system,
          BlinkMacSystemFont, 'Microsoft YaHei', 'Noto Sans SC',
          'Helvetica Neue', Helvetica, Arial, sans-serif;

        /* 分类/标签药丸（.ef-btn）底色 - 日间纯白，夜间深灰面板 */
        --endspace-btn-bg: #ffffff;

        /* Accents (Subtle Industrialism) -> Light: #B6E23A / Dark: #0F127A */
        --endspace-accent-yellow-light: #B6E23A;
        --endspace-accent-yellow-dark: #0F127A;
        --endspace-accent-yellow: #B6E23A;
        --endspace-accent-yellow-dim-light: rgba(182, 226, 58, 0.15);
        --endspace-accent-yellow-dim-dark: rgba(56, 189, 248, 0.12);
        --endspace-accent-yellow-dim: rgba(182, 226, 58, 0.15);
        --endspace-accent-cyan: #B6E23A; /* OVERRIDE: Cyan usage -> Accent */
        --endspace-accent-cyan-dim: rgba(182, 226, 58, 0.1); /* OVERRIDE: Cyan dim -> Accent dim */

        /* Borders & Lines */
        --endspace-border-base-light: #dce5d5;
        --endspace-border-base-dark: #1E6B99;
        --endspace-border-base: #dce5d5;
        --endspace-border-active: #B6E23A; /* Active border -> Accent */
        --endspace-grid-color: rgba(0,0,0,0.03);

        /* Shadows - Enhanced 3D Depth */
        --endspace-shadow-base:
          0 1px 2px rgba(0, 0, 0, 0.04),
          0 2px 4px rgba(0, 0, 0, 0.04),
          0 4px 8px rgba(0, 0, 0, 0.04);
        --endspace-shadow-hover:
          0 4px 8px rgba(0, 0, 0, 0.08),
          0 8px 16px rgba(0, 0, 0, 0.06),
          0 16px 32px rgba(0, 0, 0, 0.04),
          0 0 0 1px var(--endspace-accent-yellow);
      }

      /* ============================================
         Viewport Scaling (Responsive Font Size)
         ============================================ */
      html {
        /* CSS fallback for viewport scaling when JS not loaded */
        /* Desktop: scale based on viewport width relative to 1440px base (larger content) */
        font-size: clamp(14px, calc(16px * (100vw / 1440)), 24px);
      }

      /* Portrait/Mobile orientation: different scaling base */
      @media (orientation: portrait), (max-width: 767px) {
        html {
          font-size: clamp(14px, calc(16px * (100vw / 390)), 20px);
        }
      }

      /* ============================================
         Global Base Styles
         ============================================ */
      .dark #theme-endspace {
        color-scheme: dark;
        --endspace-bg-base: var(--endspace-bg-base-dark);
        --endspace-bg-primary: var(--endspace-bg-primary-dark);
        --endspace-bg-secondary: #0E5E8B;
        --endspace-bg-tertiary: #12678F;
        --endspace-text-primary: var(--endspace-text-primary-dark);
        --endspace-text-secondary: var(--endspace-text-secondary-dark);
        --endspace-text-muted: #6FA6C6;
        --endspace-article-text: var(--endspace-text-primary);
        --endspace-article-text-secondary: var(--endspace-text-secondary);
        --endspace-btn-bg: #0D4E77;
        --endspace-border-base: var(--endspace-border-base-dark);
        --endspace-accent-yellow: var(--endspace-accent-yellow-dark);
        --endspace-accent-yellow-dim: var(--endspace-accent-yellow-dim-dark);
        --endspace-accent-cyan: var(--endspace-accent-yellow-dark);
        --endspace-accent-cyan-dim: var(--endspace-accent-yellow-dim-dark);
        --endspace-grid-color: rgba(56, 189, 248, 0.05);
      }

      #theme-endspace {
        --endspace-bg-base: var(--endspace-bg-base-light);
        --endspace-bg-primary: var(--endspace-bg-primary-light);
        --endspace-text-primary: var(--endspace-text-primary-light);
        --endspace-text-secondary: var(--endspace-text-secondary-light);
        --endspace-border-base: var(--endspace-border-base-light);
        --endspace-accent-yellow: var(--endspace-accent-yellow-light);
        --endspace-accent-yellow-dim: var(--endspace-accent-yellow-dim-light);
        --endspace-accent-cyan: var(--endspace-accent-yellow);
        --endspace-accent-cyan-dim: var(--endspace-accent-yellow-dim);
        --endspace-border-active: var(--endspace-accent-yellow);
        background-color: var(--endspace-bg-base);
        color: var(--endspace-text-primary);
        font-family: var(--endspace-font-sans);
        overflow-x: hidden;
        /* 全站只使用 TargetCursor 旋转光标（body.endspace-target-cursor-on 时
           cursor:none 隐藏原生光标），不再使用内置 SVG 箭头光标 */
      }

      /* Target Cursor 启用时屏蔽系统原生光标（含上面的 SVG 箭头光标）
         文本输入类元素保留 text 光标 */
      body.endspace-target-cursor-on,
      body.endspace-target-cursor-on #theme-endspace,
      body.endspace-target-cursor-on * {
        cursor: none !important;
      }
      body.endspace-target-cursor-on input,
      body.endspace-target-cursor-on textarea,
      body.endspace-target-cursor-on select,
      body.endspace-target-cursor-on [contenteditable='true'] {
        cursor: text !important;
      }

      /* Technical Grid Background */
      #theme-endspace::before {
        content: '';
        position: fixed;
        inset: 0;
        background-image:
          linear-gradient(var(--endspace-grid-color) 1px, transparent 1px),
          linear-gradient(90deg, var(--endspace-grid-color) 1px, transparent 1px);
        background-size: 40px 40px;
        z-index: -1;
        pointer-events: none;
      }

      /* ============================================
         Typography & Technical Text
         ============================================ */
      .tech-text {
        font-family: var(--endspace-font-mono);
        letter-spacing: 0.5px;
        text-transform: uppercase;
        font-weight: 500;
      }

      .tech-num {
        font-family: 'Oswald', sans-serif;
        letter-spacing: 1px;
      }

      .endspace-search-highlight {
        color: #1a2413;
        background: linear-gradient(
          90deg,
          var(--endspace-accent-yellow-dim),
          rgba(182, 226, 58, 0.35)
        );
        padding: 0 0.25rem;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
      }

      .dark #theme-endspace .endspace-search-highlight {
        color: #38BDF8;
      }

      .archive-section {
        position: relative;
      }

      .endspace-section-title {
        color: var(--endspace-text-primary) !important;
        width: 100%;
        gap: 1rem;
        margin-bottom: 1.5rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid var(--endspace-border-base) !important;
        justify-content: flex-start;
      }

      #theme-endspace .endspace-section-title,
      #theme-endspace .endspace-section-title * {
        color: var(--endspace-text-primary) !important;
      }

      .endspace-section-meta {
        color: var(--endspace-text-secondary);
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0.04em;
        padding-top: 1.35rem;
        white-space: nowrap;
      }

      .endspace-archive-heading {
        position: relative;
        display: flex;
        align-items: flex-end;
        gap: 0.75rem;
        width: 100%;
        margin-bottom: 1.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--endspace-border-base) !important;
      }

      .endspace-archive-heading-title {
        color: var(--endspace-text-primary) !important;
        position: relative;
        z-index: 10;
      }

      @media (max-width: 767px) {
        .endspace-section-title {
          align-items: flex-start;
          flex-direction: column;
          gap: 0.25rem;
        }

        .endspace-section-meta {
          padding-top: 0;
        }

        .endspace-archive-heading {
          align-items: flex-start;
          flex-direction: column;
          gap: 0.25rem;
        }
      }

      /* ============================================
         "Float" Container Styles (Glassmorphism -> Solid Block)
         ============================================ */
      .endspace-frame {
        background: var(--endspace-bg-primary); /* Solid background for floating block effect */
        border: 1px solid var(--endspace-border-base);
        position: relative;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow:
           0 10px 30px -10px rgba(0,0,0,0.1),
           0 4px 6px -2px rgba(0,0,0,0.05); /* Enhanced shadow for lift */
        z-index: 10;
      }

      /* Corner Markers (Minimalist L-shape) */
      .endspace-frame::before {
        content: '';
        position: absolute;
        top: -1px; left: -1px;
        width: 0; height: 0;
        border-top: 3px solid var(--endspace-text-primary);
        border-left: 3px solid var(--endspace-text-primary);
        transition: all 0.3s ease;
        opacity: 0;
        z-index: 20;
      }
      .endspace-frame::after {
        content: '';
        position: absolute;
        bottom: -1px; right: -1px;
        width: 0; height: 0;
        border-bottom: 3px solid var(--endspace-text-primary);
        border-right: 3px solid var(--endspace-text-primary);
        transition: all 0.3s ease;
        opacity: 0;
        z-index: 20;
      }

      /* Active State: Heavy Corners appear */
      .endspace-frame:hover {
        border-color: var(--endspace-border-active);
        box-shadow: var(--endspace-shadow-hover);
        transform: translateY(-2px);
      }
      .endspace-frame:hover::before, .endspace-frame:hover::after {
        opacity: 1;
        width: 16px; height: 16px;
      }

      /* ============================================
         Card Styles - Enhanced 3D Depth
         ============================================ */
      .endspace-card {
        background: var(--endspace-bg-primary); /* Solid background */
        border: 1px solid var(--endspace-border-base);
        position: relative;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: var(--endspace-shadow-base);
      }

      .endspace-card:hover {
        border-color: var(--endspace-border-active);
        box-shadow:
          0 20px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04),
          0 0 0 1px var(--endspace-accent-yellow); /* Glow border */
        transform: translateY(-4px) scale(1.01);
        z-index: 20;
      }

      /* ============================================
         Notion Content Overrides (Light Mode)
         ============================================ */
      #notion-article {
        color: var(--endspace-text-primary);
        font-size: 1.05rem;
        line-height: 1.75;
      }

      #theme-endspace #article-wrapper,
      #theme-endspace #notion-article,
      #theme-endspace #notion-article .notion,
      #theme-endspace #notion-article .notion-text,
      #theme-endspace #notion-article .notion-blank,
      #theme-endspace #notion-article .notion-h,
      #theme-endspace #notion-article .notion-header,
      #theme-endspace #notion-article .notion-sub_header,
      #theme-endspace #notion-article .notion-sub_sub_header,
      #theme-endspace #notion-article .notion-page,
      #theme-endspace #notion-article .notion-list,
      #theme-endspace #notion-article .notion-list-disc,
      #theme-endspace #notion-article .notion-list-numbered,
      #theme-endspace #notion-article .notion-toggle,
      #theme-endspace #notion-article .notion-quote,
      #theme-endspace #notion-article .notion-callout,
      #theme-endspace #notion-article .notion-bookmark,
      #theme-endspace #notion-article .notion-bookmark-title,
      #theme-endspace #notion-article .notion-collection,
      #theme-endspace #notion-article .notion-collection-row,
      #theme-endspace #notion-article .notion-property,
      #theme-endspace #notion-article .notion-property-text,
      #theme-endspace #notion-article .notion-property-title,
      #theme-endspace #notion-article .notion-simple-table,
      #theme-endspace #notion-article .notion-table,
      #theme-endspace #notion-article .notion-code,
      #theme-endspace #notion-article .notion-equation {
        color: var(--endspace-article-text) !important;
        /* 文章内容不使用上传的狸叶黑体 */
        font-family: var(--endspace-font-article) !important;
      }

      #theme-endspace #notion-article p,
      #theme-endspace #notion-article li,
      #theme-endspace #notion-article span,
      #theme-endspace #notion-article figcaption,
      #theme-endspace #notion-article .notion-text,
      #theme-endspace #notion-article .notion-list,
      #theme-endspace #notion-article .notion-list-disc,
      #theme-endspace #notion-article .notion-list-numbered,
      #theme-endspace #notion-article .notion-toggle,
      #theme-endspace #notion-article .notion-bookmark-description,
      #theme-endspace #notion-article .notion-bookmark-link,
      #theme-endspace #notion-article .notion-collection-row-body,
      #theme-endspace #notion-article .notion-simple-table-cell {
        color: var(--endspace-article-text-secondary) !important;
      }

      #theme-endspace #notion-article h1,
      #theme-endspace #notion-article h2,
      #theme-endspace #notion-article h3,
      #theme-endspace #notion-article h4,
      #theme-endspace #notion-article h5,
      #theme-endspace #notion-article h6,
      #theme-endspace #notion-article strong,
      #theme-endspace #notion-article .notion-bookmark-title {
        color: var(--endspace-text-primary) !important;
      }

      /* Headers - 干净的工业风标题（无 RGB 色散/重影） */
      #notion-article h1, #notion-article h2, #notion-article h3 {
        color: var(--endspace-text-primary);
        font-weight: 800;
        margin-top: 2.5em;
        margin-bottom: 1em;
        position: relative;
        padding-left: 1rem;
        letter-spacing: 0.02em; /* Slightly wider spacing for the 'digital' look */
        text-shadow: none;
        opacity: 1;
        transition: color 0.2s ease;
      }

      /* Hover: 只做极轻微的物理位移（不再有阴影合并特效） */
      #notion-article h1:hover, #notion-article h2:hover, #notion-article h3:hover {
        transform: translateX(2px);
      }

      #notion-article h1::before,
      #notion-article h2::before,
      #notion-article h3::before {
        content: '';
        position: absolute;
        left: 0; top: 0.2em; bottom: 0.2em;
        width: 6px;
        background: var(--endspace-accent-yellow);
        box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
      }

      /* Bar also reacts to hover */
      #notion-article h1:hover::before,
      #notion-article h2:hover::before,
      #notion-article h3:hover::before {
        background: var(--endspace-text-primary);
        width: 8px;
        box-shadow: none;
      }

      /* Quotes */
      #notion-article blockquote {
        background: var(--endspace-bg-secondary);
        border-left: 3px solid var(--endspace-text-primary);
        color: var(--endspace-text-secondary);
        padding: 1.2rem 1.5rem;
        margin: 2rem 0;
        font-style: italic;
      }

      /* Lists */
      #notion-article ul li, #notion-article ol li {
        margin-bottom: 0.5em;
        color: var(--endspace-text-secondary);
      }
      #notion-article ul li::marker {
        color: var(--endspace-accent-cyan);
        font-weight: bold;
      }

      /* Links in Content */
      #notion-article a {
        color: var(--endspace-text-primary);
        text-decoration: none;
        border-bottom: 2px solid var(--endspace-accent-cyan-dim);
        transition: all 0.2s;
        font-weight: 600;
      }
      #notion-article a:hover {
        background: var(--endspace-accent-cyan-dim);
        border-bottom-color: var(--endspace-accent-cyan);
      }

      /* Code Blocks */
      #notion-article pre {
        background: #18181b !important;
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 4px !important;
        box-shadow: var(--endspace-shadow-base);
      }

      /* ============================================
         Buttons (Cut Corner Aesthetic)
         ============================================ */
      .endspace-btn {
        background: transparent;
        border: 2px solid var(--endspace-border-active);
        color: var(--endspace-text-primary);
        padding: 0.6rem 1.5rem;
        font-family: var(--endspace-font-mono);
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.85em;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: all 0.2s;
      }

      .endspace-btn:hover {
        background: var(--endspace-border-active);
        color: #0a0a0a;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      }

      .endspace-button-primary {
        background: var(--endspace-border-active);
        border: none;
        color: #0a0a0a;
        padding: 0.75rem 1.5rem;
        font-family: var(--endspace-font-mono);
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.85em;
        cursor: pointer;
        transition: all 0.2s;
      }

      .endspace-button-primary:hover {
        background: #2563eb;
        transform: translateY(-1px);
      }

      /* ============================================
         Tech Decorations Utilities (Minimalist)
         ============================================ */
      .scan-line {
        width: 100%;
        height: 1px;
        background: var(--endspace-border-base);
        margin: 1rem 0;
      }

      /* Spectrum bar decoration */
      .spectrum-bar {
        height: 2px;
        background: linear-gradient(90deg,
          var(--endspace-accent-cyan) 0%,
          var(--endspace-accent-yellow) 50%,
          var(--endspace-accent-cyan) 100%
        );
      }

      /* Loading Animation (Spinner) */
      @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      .loading-radar {
        width: 24px; height: 24px;
        border: 2px solid var(--endspace-border-base);
        border-top-color: var(--endspace-text-primary);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
      }

      /* Tech corner decoration */
      .tech-corner {
        position: relative;
      }
      .tech-corner::before {
        content: '';
        position: absolute;
        top: 0; left: 0;
        width: 8px; height: 8px;
        border-top: 2px solid var(--endspace-accent-cyan);
        border-left: 2px solid var(--endspace-accent-cyan);
      }
      .tech-corner::after {
        content: '';
        position: absolute;
        bottom: 0; right: 0;
        width: 8px; height: 8px;
        border-bottom: 2px solid var(--endspace-accent-cyan);
        border-right: 2px solid var(--endspace-accent-cyan);
      }

      /* ============================================
         Mobile Responsive Styles
         ============================================ */

      /* Safe area support for notched devices */
      .safe-area-bottom {
        padding-bottom: env(safe-area-inset-bottom);
      }
      .safe-area-top {
        padding-top: env(safe-area-inset-top);
      }

      /* Mobile-specific adjustments */
      @media (max-width: 767px) {
        /* Smaller grid on mobile */
        #theme-endspace::before {
          background-size: 30px 30px;
        }

        /* Reduce padding on mobile */
        .endspace-frame {
          padding: 1rem !important;
        }

        /* Smaller technical text */
        .tech-text {
          font-size: 0.75rem;
          letter-spacing: 0.3px;
        }

        /* Ensure minimum touch targets */
        button, a, [role="button"] {
          min-height: 44px;
        }

        /* Notion content adjustments */
        #notion-article {
          font-size: 1.1rem;
          line-height: 1.75;
        }

        #notion-article p {
          margin-bottom: 1.25em;
        }
      }

      /* ============================================
         Player Styles
         ============================================ */
      .endspace-player-glow {
        box-shadow: 0 0 10px var(--endspace-accent-yellow);
      }

      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .endspace-player-rotating {
        animation: rotate 8s linear infinite;
      }

      /* ============================================
         Scan Line & HUD Animations
         ============================================ */

      /* Horizontal Scan Line */
      @keyframes ef-scan-horizontal {
        0% { transform: translateY(-100%); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(100vh); opacity: 0; }
      }

      .ef-scan-line {
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg,
          transparent,
          var(--endspace-accent-cyan) 20%,
          var(--endspace-accent-cyan) 80%,
          transparent
        );
        animation: ef-scan-horizontal 4s linear infinite;
        pointer-events: none;
        opacity: 0.5;
      }

      /* Vertical Scan Line */
      @keyframes ef-scan-vertical {
        0% { transform: translateX(-100%); opacity: 0; }
        10% { opacity: 0.8; }
        90% { opacity: 0.8; }
        100% { transform: translateX(100vw); opacity: 0; }
      }

      .ef-scan-line-v {
        position: absolute;
        top: 0;
        width: 1px;
        height: 100%;
        background: linear-gradient(180deg,
          transparent,
          var(--endspace-accent-cyan) 30%,
          var(--endspace-accent-cyan) 70%,
          transparent
        );
        animation: ef-scan-vertical 6s linear infinite;
        pointer-events: none;
        opacity: 0.3;
      }

      /* Pulse Glow Animation */
      @keyframes ef-pulse-glow {
        0%, 100% {
          box-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
        }
        50% {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.3);
        }
      }

      .ef-pulse-glow {
        animation: ef-pulse-glow 3s ease-in-out infinite;
      }

      /* ============================================
         Endfield Button Styles
         ============================================ */

      /* Button with Left Highlight Bar */
      .ef-button {
        position: relative;
        background: var(--endspace-bg-primary);
        border: 1px solid var(--endspace-border-base);
        padding: 0.75rem 1.5rem 0.75rem 2rem;
        font-family: var(--endspace-font-mono);
        font-weight: 600;
        text-transform: uppercase;
        font-size: 0.85em;
        cursor: pointer;
        overflow: hidden;
        transition: all 0.2s ease;
      }

      .ef-button::before {
        content: '';
        position: absolute;
        left: 0.5rem;
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 55%;
        background-color: var(--endspace-accent-yellow);
        transition: all 0.2s ease;
      }

      .ef-button:hover {
        background: var(--endspace-border-active);
        color: #0a0a0a;
        border-color: var(--endspace-border-active);
      }

      .ef-button:hover::before {
        height: 70%;
        background-color: #0a0a0a; /* 悬停底色是强调色，小条变黑保持可见 */
      }

      /* ============================================
         Card Enhancement Styles
         ============================================ */

      /* Enhanced Card with texture */
      .ef-card {
        position: relative;
        background: var(--endspace-bg-primary);
        border: 1px solid var(--endspace-border-base);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .ef-card:hover {
        border-color: var(--endspace-accent-yellow);
        box-shadow: 0 8px 32px rgba(59, 130, 246, 0.15);
        transform: translateY(-2px);
      }

      /* Index Number Badge - Industrial Style */
      .ef-index-badge {
        position: absolute;
        top: -1px;
        left: -1px;
        padding: 0.25rem 0.5rem;
        background: var(--endspace-accent-yellow);
        color: #000;
        font-family: var(--endspace-font-mono);
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.5px;
      }

      /* ============================================
         HUD Corner Decorations
         ============================================ */

      .ef-hud-corners {
        position: relative;
      }

      /* Top Left HUD */
      .ef-hud-tl::before {
        content: '';
        position: fixed;
        top: 1rem;
        left: 1rem;
        width: 3rem;
        height: 3rem;
        border-top: 2px solid rgba(6, 182, 212, 0.4);
        border-left: 2px solid rgba(6, 182, 212, 0.4);
        pointer-events: none;
        z-index: 50;
      }

      /* Bottom Right HUD */
      .ef-hud-br::after {
        content: '';
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        width: 3rem;
        height: 3rem;
        border-bottom: 2px solid rgba(6, 182, 212, 0.4);
        border-right: 2px solid rgba(6, 182, 212, 0.4);
        pointer-events: none;
        z-index: 50;
      }

      /* ============================================
         Glowing Border Animation
         ============================================ */

      @keyframes ef-border-glow {
        0%, 100% {
          border-color: var(--endspace-border-base);
          box-shadow: none;
        }
        50% {
          border-color: var(--endspace-accent-cyan);
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.3);
        }
      }

      .ef-glow-border:hover {
        animation: ef-border-glow 2s ease-in-out infinite;
      }

      /* ============================================
         NieR: Automata Style Title (Reusable)
         注：已移除 RGB 色散/重影阴影，改为干净的强调色左条
         ============================================ */
      .nier-title {
        position: relative;
        font-weight: 800;
        letter-spacing: 0.05em;
        text-shadow: none;
      }

      /* ============================================
         3D Button Effects
         ============================================ */
      .endspace-btn-3d {
        position: relative;
        background: var(--endspace-bg-primary);
        border: 2px solid var(--endspace-accent-yellow);
        color: var(--endspace-text-primary);
        padding: 0.75rem 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow:
          0 4px 0 rgba(98, 240, 245, 0.6),
          0 6px 12px rgba(0, 0, 0, 0.15);
      }

      .endspace-btn-3d:hover {
        transform: translateY(-2px);
        box-shadow:
          0 6px 0 rgba(98, 240, 245, 0.7),
          0 10px 20px rgba(0, 0, 0, 0.2);
      }

      .endspace-btn-3d:active {
        transform: translateY(2px);
        box-shadow:
          0 2px 0 rgba(98, 240, 245, 0.5),
          0 3px 6px rgba(0, 0, 0, 0.1);
      }

      /* ============================================
         Sidebar & Navigation 3D Depth
         ============================================ */
      .endspace-sidebar-3d {
        box-shadow:
          4px 0 8px rgba(0, 0, 0, 0.05),
          8px 0 16px rgba(0, 0, 0, 0.03);
      }

      /* ============================================
         NieR: Automata Style Navigation Transition
         ============================================ */
      /* ============================================
         NieR: Automata Style Navigation Transition
         ============================================ */
      .nier-nav-item {
        position: relative;
        overflow: hidden;
        transition: color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        z-index: 1;
        /* Default Text Color */
        color: var(--endspace-text-muted);
        border-radius: 1px; /* Rounded corners as seen in screenshot */
        margin-bottom: 2px; /* Slight spacing between items */
      }

      /* Sliding Background Layer */
      .nier-nav-item::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background: var(--endspace-bg-tertiary); /* Hover: adaptive grey */
        transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        z-index: -1;
      }

      /* Active / Hover State Text Color */
      .nier-nav-item:hover, .nier-nav-item.active {
        color: var(--endspace-text-primary) !important;
      }

      .endspace-notion-menu-image {
        display: inline-block;
        width: 1.25rem;
        height: 1.25rem;
        object-fit: contain;
        opacity: 0.68;
        filter: grayscale(1) brightness(0.45);
        transition: filter 0.2s ease, opacity 0.2s ease;
      }

      .endspace-notion-menu-image-monochrome {
        filter: grayscale(1) brightness(0.45);
      }

      .endspace-notion-menu-image.is-active,
      .nier-nav-item:hover .endspace-notion-menu-image {
        filter: brightness(0) saturate(100%) !important;
        opacity: 1 !important;
      }

      .endspace-notion-menu-class-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1.25rem;
        height: 1.25rem;
        color: #666;
        font-size: 1rem;
        line-height: 1;
        flex: 0 0 auto;
        transition: color 0.2s ease, opacity 0.2s ease;
      }

      .endspace-notion-menu-class-icon.is-active,
      .nier-nav-item:hover .endspace-notion-menu-class-icon {
        color: #000;
        opacity: 1;
      }

      .endspace-notion-menu-svg-icon {
        width: 1.25rem;
        height: 1.25rem;
        color: #666;
        fill: none;
        stroke: currentColor;
        flex: 0 0 auto;
        transition: color 0.2s ease, opacity 0.2s ease;
      }

      .endspace-notion-menu-svg-icon.is-active,
      .nier-nav-item:hover .endspace-notion-menu-svg-icon {
        color: #000;
        opacity: 1;
      }

      .endspace-menu-icon-wrap svg.icon {
        width: 1.25rem;
        height: 1.25rem;
        color: #666;
        fill: currentColor;
      }

      .endspace-notion-menu-dot {
        display: inline-flex;
        width: 0.55rem;
        height: 0.55rem;
        border-radius: 9999px;
        background: #666;
        flex: 0 0 auto;
        transition: background-color 0.2s ease;
      }

      .endspace-notion-menu-dot.is-active,
      .nier-nav-item:hover .endspace-notion-menu-dot {
        background: #000;
      }

      .endspace-notion-menu-emoji {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1.5rem;
        font-size: 1.15rem;
        line-height: 1;
        filter: grayscale(1);
        opacity: 0.68;
        transition: filter 0.2s ease, opacity 0.2s ease;
      }

      .endspace-notion-menu-emoji.is-active,
      .nier-nav-item:hover .endspace-notion-menu-emoji {
        filter: none;
        opacity: 1;
      }

      /* Hover State: Slide to full width */
      .nier-nav-item:hover::before {
        width: 100%;
      }

      /* Active State: Always full width with Distinct Color */
      .nier-nav-item.active::before {
        width: 100%;
        background: var(--endspace-bg-tertiary); /* Active: adaptive grey */
      }

      /* Target the icon specifically if needed to ensure color fill */
      .nier-nav-item svg, .nier-nav-item .icon-container {
        transition: color 0.3s ease;
        z-index: 2;
      }

      #theme-endspace .endspace-menu-icon-wrap,
      #theme-endspace .endspace-menu-icon-wrap i,
      #theme-endspace .endspace-menu-icon-wrap svg {
        color: #666;
        fill: currentColor;
        stroke: currentColor;
        transition: color 0.2s ease;
      }

      #theme-endspace .nier-nav-item.active .endspace-menu-icon-wrap,
      #theme-endspace .nier-nav-item:hover .endspace-menu-icon-wrap,
      #theme-endspace .nier-nav-item.active .endspace-menu-icon-wrap i,
      #theme-endspace .nier-nav-item:hover .endspace-menu-icon-wrap i,
      #theme-endspace .nier-nav-item.active .endspace-menu-icon-wrap svg,
      #theme-endspace .nier-nav-item:hover .endspace-menu-icon-wrap svg {
        color: #000 !important;
      }

      /* Removed specific active override to keep consistent grey background */

      /* Also update the base hover/active shared rule to use this darker grey */

      /* ============================================
         Endfield Category Button Styles
         ============================================ */
      /* ============================================
         Endfield Unified Button Styles
         ============================================ */
      /* ============================================
         Endfield Unified Button Styles (High Priority)
         ============================================ */
      .ef-btn {
        display: inline-flex !important;
        align-items: center;
        gap: 0.75rem; /* Space between indicator and text */
        padding: 0.5rem 1rem 0.5rem 0.75rem;
        background-color: var(--endspace-btn-bg) !important; /* 日间纯白 / 夜间深灰面板 */
        border-radius: 1px;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        width: fit-content;
        min-width: min-content;
        border: 1px solid var(--endspace-border-base); /* 白底需要边界 */
        text-decoration: none !important; /* Remove default link underline */
        position: relative;
        z-index: 10;
      }

      .ef-btn:hover {
        background-color: var(--endspace-accent-yellow) !important; /* Hover: Accent */
        border-color: var(--endspace-accent-yellow);
        border-radius: 3px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transform: translateY(-1px);
      }

      /* Indicator Element */
      .ef-btn-indicator {
        display: block;
        width: 4px;
        height: 18px;
        background-color: var(--endspace-accent-yellow); /* Accent */
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); /* Rectangle */
      }

      .ef-btn:hover .ef-btn-indicator {
        width: 12px;
        height: 12px;
        background-color: #0a0a0a; /* 悬停底色是强调色，指示条变黑保持可见 */
        clip-path: polygon(0 0, 100% 50%, 0 100%); /* Triangle */
      }

      /* Text Styles */
      .ef-btn-text {
        color: var(--endspace-text-secondary) !important;
        font-weight: 600;
        font-size: 0.95rem;
        letter-spacing: 0.05em;
        white-space: nowrap;
        transition: color 0.3s ease;
      }

      .ef-btn:hover .ef-btn-text {
        color: #0a0a0a !important;
      }

      .archive-filter-btn:hover {
        background-color: var(--endspace-accent-yellow) !important;
        border-color: var(--endspace-accent-yellow);
        box-shadow: var(--endspace-shadow-hover);
      }

      .archive-filter-btn:hover .ef-btn-indicator {
        background-color: #000;
      }

      .archive-filter-btn:hover .ef-btn-text {
        color: #000 !important;
      }

      /* ============================================
         Dark Mode 矫正层
         组件里存在大量硬编码的浅色 Tailwind 工具类
         （bg-white / bg-gray-* / text-gray-* / border-gray-*），
         夜间模式下统一矫正：
         - 浅色底 → 深色面板
         - 灰字 → 提亮
         - text-black → 由下方专门规则处理（区分是否在强调色底上）
         注意：bg-black 系列不动 —— bg-black/40 是图片遮罩，
         改了会变成实心色块
         ============================================ */
      .dark #theme-endspace [class*='bg-white'] {
        background-color: #0B527B !important;
      }
      .dark #theme-endspace [class*='bg-gray-100'] {
        background-color: #0A4C73 !important;
      }
      .dark #theme-endspace [class*='bg-gray-200'] {
        background-color: #0E5E8B !important;
      }
      .dark #theme-endspace [class*='bg-gray-300'] {
        background-color: #12678F !important;
      }
      .dark #theme-endspace [class*='bg-gray-400'] {
        background-color: #10587F !important;
      }
      .dark #theme-endspace [class*='border-gray-'] {
        border-color: #1E6B99 !important;
      }
      .dark #theme-endspace [class*='text-gray-300'] {
        color: #BFE3F7 !important;
      }
      .dark #theme-endspace [class*='text-gray-400'],
      .dark #theme-endspace [class*='text-gray-500'],
      .dark #theme-endspace [class*='text-gray-600'],
      .dark #theme-endspace [class*='text-gray-700'] {
        color: #8FBEDD !important;
      }
      /* 旧强调黄 #FBFB46 已在组件层替换为 var(--endspace-accent-yellow)，
         此处不再需要类名矫正 */

      /* ============================================
         夜间 text-black 矫正
         组件里 text-black 有两种语义：
         (1) 强调色底上的黑字 —— 必须保持黑
         (2) 深色面板/深色页上的黑字 —— 夜间不可读，要提亮
         策略：夜间先一律提亮，再对「强调色底」做例外回黑
         ============================================ */
      .dark #theme-endspace [class*='text-black'] {
        color: var(--endspace-text-primary) !important;
      }

      /* 例外 1：自身是强调色底（常态或悬停）
         ⚠️ 必须用 [class~=] 精确 token 匹配。
         用 [class*=] 会让 'bg-[var(--endspace-accent-yellow)]' 子串匹配到
         容器上的 'hover:bg-[var(--endspace-accent-yellow)]'，
         导致整张卡片内的 text-black 被永久锁成黑色 —— 夜间就是黑底黑字看不见。
         夜间强调色为深蓝 #0F127A，其上的文字应为浅蓝而非黑色 */
      .dark #theme-endspace [class~='bg-[var(--endspace-accent-yellow)]'][class~='text-black'],
      .dark #theme-endspace [class~='hover:bg-[var(--endspace-accent-yellow)]']:hover [class~='text-black'],
      .dark #theme-endspace [class~='hover:bg-[var(--endspace-accent-yellow)]'][class~='hover:text-black']:hover {
        color: #38BDF8 !important;
      }

      /* 例外 2：group / group/item 悬停时父级露出强调色底
         （卡片 swoosh 扫过、搜索结果整行高亮等）
         用 [class*=] 子串匹配以覆盖透明度变体
         group-hover:text-black/60、/70 —— 这些也是「强调色底上的黑字」语义 */
      .dark #theme-endspace .group:hover [class*='group-hover:text-black'],
      .dark #theme-endspace .group:hover [class~='group-hover:bg-[var(--endspace-accent-yellow)]'] [class~='text-black'],
      .dark #theme-endspace [class*='group/item']:hover [class*='group-hover/item:text-black'] {
        color: #38BDF8 !important;
      }

      /* 夜间强调色底上的黑字组件（日间强调色亮、黑字正确，需在夜间反转） */
      .dark #theme-endspace .ef-btn:hover .ef-btn-text,
      .dark #theme-endspace .archive-filter-btn:hover .ef-btn-text,
      .dark #theme-endspace .endspace-btn:hover,
      .dark #theme-endspace .endspace-button-primary,
      .dark #theme-endspace .ef-button:hover {
        color: #38BDF8 !important;
      }
      .dark #theme-endspace .ef-btn:hover .ef-btn-indicator,
      .dark #theme-endspace .archive-filter-btn:hover .ef-btn-indicator,
      .dark #theme-endspace .ef-button:hover::before {
        background-color: #38BDF8 !important;
      }

      /* 侧边栏菜单图标：夜间用亮色/荧光绿代替黑色 */
      .dark #theme-endspace .endspace-notion-menu-image {
        filter: grayscale(1) brightness(1.9);
      }
      .dark #theme-endspace .endspace-notion-menu-image.is-active,
      .dark #theme-endspace .nier-nav-item:hover .endspace-notion-menu-image {
        filter: grayscale(1) brightness(2.6) saturate(0) !important;
        opacity: 1 !important;
      }
      .dark #theme-endspace .endspace-notion-menu-class-icon,
      .dark #theme-endspace .endspace-notion-menu-svg-icon,
      .dark #theme-endspace .endspace-menu-icon-wrap,
      .dark #theme-endspace .endspace-menu-icon-wrap i,
      .dark #theme-endspace .endspace-menu-icon-wrap svg {
        color: #8FBEDD;
      }
      .dark #theme-endspace .endspace-notion-menu-dot {
        background: #8FBEDD;
      }
      .dark #theme-endspace .endspace-notion-menu-class-icon.is-active,
      .dark #theme-endspace .nier-nav-item:hover .endspace-notion-menu-class-icon,
      .dark #theme-endspace .endspace-notion-menu-svg-icon.is-active,
      .dark #theme-endspace .nier-nav-item:hover .endspace-notion-menu-svg-icon,
      .dark #theme-endspace .nier-nav-item:hover .endspace-menu-icon-wrap,
      .dark #theme-endspace .nier-nav-item:hover .endspace-menu-icon-wrap i,
      .dark #theme-endspace .nier-nav-item:hover .endspace-menu-icon-wrap svg,
      .dark #theme-endspace .nier-nav-item.active .endspace-menu-icon-wrap,
      .dark #theme-endspace .nier-nav-item.active .endspace-menu-icon-wrap i,
      .dark #theme-endspace .nier-nav-item.active .endspace-menu-icon-wrap svg {
        color: #38BDF8 !important;
      }
      .dark #theme-endspace .endspace-notion-menu-dot.is-active,
      .dark #theme-endspace .nier-nav-item:hover .endspace-notion-menu-dot {
        background: #38BDF8;
      }

      ${themeConsoleStyle('endspace', CONFIG)}
  `}</style>
  )
}
