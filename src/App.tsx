import React, { useState, useEffect } from 'react';
import { 
  Smile,
  BookOpen,
  Terminal,
  Cpu,
  TrendingUp,
  Globe2,
  Sparkles,
  ChevronRight,
  ArrowLeft,
  Lightbulb,
  CheckCircle2,
  Quote,
  Clock,
  ArrowDown,
  Image as ImageIcon,
  Users,
  Eye,
  Smartphone,
  ShieldAlert,
  Compass,
  Activity,
  ScanLine,
  Hash,
  MousePointer2,
  ArrowRight,
  Monitor,
  Play
} from 'lucide-react';

// ==========================================
// GUI 專題：視窗式影片嵌入組件 (深色全寬版)
// ==========================================
const VideoEmbed = () => (
  <section className="w-full bg-slate-950 border-y border-slate-800 my-20">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-400"></span>
            <p className="font-mono text-xs font-bold text-orange-400 uppercase tracking-[0.35em]">
              Video Interface
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-6">
            先看見介面，<br />
            才讀懂革命
          </h2>

          <p className="text-base md:text-lg text-slate-300 leading-loose mb-8">
            從命令列到滑鼠，從視窗到圖形介面，GUI 的革命不是讓電腦變強，而是讓人第一次覺得自己能理解電腦。這支影片，是進入本期專題前的第一個入口。
          </p>

          <div className="space-y-3 border-t border-slate-700 pt-6">
            <div className="flex items-center justify-between gap-4 font-mono text-xs">
              <span className="text-slate-500 uppercase tracking-[0.25em]">Watch Time</span>
              <span className="text-slate-200">3:51</span>
            </div>
            <div className="flex items-center justify-between gap-4 font-mono text-xs">
              <span className="text-slate-500 uppercase tracking-[0.25em]">Mode</span>
              <span className="text-slate-200">GUI History</span>
            </div>
            <div className="flex items-center justify-between gap-4 font-mono text-xs">
              <span className="text-slate-500 uppercase tracking-[0.25em]">Status</span>
              <span className="text-orange-300">Ready to Play</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="rounded-[1.75rem] border border-slate-700 bg-slate-900 p-3 md:p-4 shadow-2xl">
            <div className="mb-3 flex items-center justify-between border-b border-slate-700 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
              </div>

              <p className="font-mono text-[10px] md:text-xs text-slate-500 tracking-[0.25em] uppercase">
                SMILE / GUI_VIDEO_PLAYER
              </p>
            </div>

            <div className="w-full aspect-video overflow-hidden rounded-2xl bg-black">
              <iframe
                className="w-full h-full block"
                src="https://www.youtube.com/embed/J6FbvGPzYUs"
                title="GUI 革命影片導覽"
                frameBorder="0"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm">
            <p className="text-slate-500">
              影像導覽：從操作門檻到直覺介面的演進。
            </p>

            <a
              href="https://youtu.be/J6FbvGPzYUs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-orange-400 hover:text-orange-300 transition-colors"
            >
              在 YouTube 開啟 →
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
);

// ==========================================
// 社群專題：社群動態牆式影片嵌入組件 (獨立 CSS 鎖死版)
// ==========================================
const SocialVideoEmbed = () => (
  <>
    <style>{`
      .social-video-lock,
      .social-video-lock * {
        box-sizing: border-box;
        writing-mode: horizontal-tb !important;
        text-orientation: mixed !important;
      }

      .social-video-lock {
        width: 100% !important;
        max-width: none !important;
        margin: 80px 0 !important;
        padding: 0 !important;
        background: #f8fafc;
        border-top: 1px solid #e2e8f0;
        border-bottom: 1px solid #e2e8f0;
        overflow: hidden;
        position: relative;
        display: block !important;
      }

      .social-video-inner {
        width: 100% !important;
        max-width: 1280px !important;
        margin: 0 auto !important;
        padding: 96px 48px !important;
        display: grid !important;
        grid-template-columns: minmax(0, 7fr) minmax(0, 5fr) !important;
        gap: 64px !important;
        align-items: center !important;
      }

      .social-video-card {
        width: 100% !important;
        min-width: 0 !important;
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 32px;
        box-shadow: 0 24px 60px rgba(15, 23, 42, 0.16);
        overflow: hidden;
      }

      .social-video-profile {
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        gap: 16px !important;
        padding: 18px 24px;
        border-bottom: 1px solid #f1f5f9;
      }

      .social-video-profile-left {
        display: flex !important;
        align-items: center !important;
        gap: 12px !important;
        min-width: 0 !important;
      }

      .social-video-avatar {
        width: 44px;
        height: 44px;
        flex: 0 0 44px;
        border-radius: 999px;
        background: #020617;
        color: #fb923c;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
      }

      .social-video-name {
        margin: 0;
        font-weight: 800;
        color: #0f172a;
        line-height: 1.2;
      }

      .social-video-handle {
        margin: 2px 0 0;
        font-size: 12px;
        color: #64748b;
      }

      .social-video-frame-wrap {
        background: #020617;
        padding: 16px;
      }

      .social-video-frame {
        width: 100% !important;
        aspect-ratio: 16 / 9;
        background: black;
        border-radius: 20px;
        overflow: hidden;
      }

      .social-video-frame iframe {
        width: 100% !important;
        height: 100% !important;
        display: block !important;
        border: 0 !important;
      }

      .social-video-body {
        padding: 18px 24px 22px;
      }

      .social-video-actions {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        gap: 12px !important;
        flex-wrap: wrap !important;
        margin-bottom: 14px;
        font-size: 14px;
        font-weight: 800;
        color: #334155;
      }

      .social-video-actions-left {
        display: flex !important;
        gap: 18px !important;
        flex-wrap: wrap !important;
      }

      .social-video-caption {
        margin: 0;
        color: #1e293b;
        line-height: 1.8;
      }

      .social-video-youtube {
        display: inline-flex;
        margin-top: 12px;
        font-size: 14px;
        font-weight: 800;
        color: #f97316;
        text-decoration: none;
      }

      .social-video-text {
        width: 100% !important;
        min-width: 0 !important;
      }

      .social-video-kicker {
        display: flex !important;
        align-items: center !important;
        gap: 12px !important;
        margin-bottom: 24px;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 0.35em;
        text-transform: uppercase;
        color: #f97316;
        white-space: nowrap;
      }

      .social-video-dot {
        width: 8px;
        height: 8px;
        flex: 0 0 8px;
        border-radius: 999px;
        background: #f97316;
      }

      .social-video-title {
        margin: 0 0 24px;
        font-family: Georgia, 'Times New Roman', serif;
        font-size: clamp(40px, 5vw, 64px);
        line-height: 1.05;
        font-weight: 900;
        color: #020617;
      }

      .social-video-desc {
        margin: 0 0 32px;
        font-size: 18px;
        line-height: 2;
        color: #475569;
      }

      .social-video-insights {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }

      .social-video-insight {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        gap: 24px !important;
        padding-bottom: 14px;
        border-bottom: 1px solid #e2e8f0;
      }

      .social-video-insight small {
        flex: 0 0 auto;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 12px;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: #94a3b8;
      }

      .social-video-insight strong {
        text-align: right;
        color: #1e293b;
        font-weight: 900;
      }

      .social-float-a,
      .social-float-b {
        position: absolute;
        pointer-events: none;
        background: rgba(255,255,255,0.78);
        border: 1px solid #e2e8f0;
        color: #94a3b8;
        font-size: 12px;
        font-weight: 800;
        padding: 12px 16px;
        border-radius: 16px;
        box-shadow: 0 12px 30px rgba(15,23,42,0.08);
      }

      .social-float-a {
        left: 40px;
        top: 48px;
        transform: rotate(-5deg);
      }

      .social-float-b {
        right: 48px;
        bottom: 64px;
        transform: rotate(4deg);
      }

      @media (max-width: 1024px) {
        .social-video-inner {
          grid-template-columns: 1fr !important;
          padding: 72px 28px !important;
          gap: 48px !important;
        }

        .social-video-text {
          order: -1;
        }

        .social-float-a,
        .social-float-b {
          display: none;
        }
      }

      @media (max-width: 640px) {
        .social-video-inner {
          padding: 56px 20px !important;
        }

        .social-video-title {
          font-size: 38px;
        }

        .social-video-desc {
          font-size: 16px;
        }

        .social-video-insight {
          align-items: flex-start !important;
          flex-direction: column;
          gap: 6px !important;
        }

        .social-video-insight strong {
          text-align: left;
        }
      }
    `}</style>

    <section className="social-video-lock">
      <div className="social-float-a">Recommended for you</div>
      <div className="social-float-b">Someone liked this</div>

      <div className="social-video-inner">
        <div className="social-video-card">
          <div className="social-video-profile">
            <div className="social-video-profile-left">
              <div className="social-video-avatar">S</div>
              <div>
                <p className="social-video-name">SMILE Social Lab</p>
                <p className="social-video-handle">@smile.interface · 推薦給你</p>
              </div>
            </div>
            <div style={{ color: '#94a3b8', fontSize: 22, lineHeight: 1 }}>...</div>
          </div>

          <div className="social-video-frame-wrap">
            <div className="social-video-frame">
              <iframe
                src="https://www.youtube.com/embed/QbwmLUrDLcM"
                title="社群平台影片導覽"
                frameBorder="0"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="social-video-body">
            <div className="social-video-actions">
              <div className="social-video-actions-left">
                <span>♥ 12.8K</span>
                <span>💬 428</span>
                <span>↗ Share</span>
              </div>
              <span>Save</span>
            </div>

            <p className="social-video-caption">
              <strong>SMILE Social Lab</strong>：演算法不是幫你找朋友，而是幫注意力找到出口。
            </p>

            <a
              href="https://youtu.be/QbwmLUrDLcM"
              target="_blank"
              rel="noopener noreferrer"
              className="social-video-youtube"
            >
              在 YouTube 開啟 →
            </a>
          </div>
        </div>

        <div className="social-video-text">
          <div className="social-video-kicker">
            <span className="social-video-dot"></span>
            <span>Social Feed</span>
          </div>

          <h2 className="social-video-title">
            先被推薦，<br />
            才開始選擇
          </h2>

          <p className="social-video-desc">
            社群平台看似讓我們自由滑動，但每一次停留、點讚、留言與重播，都在訓練下一次被推到眼前的內容。這支影片，是進入本期社群專題前的第一則推薦貼文。
          </p>

          <div className="social-video-insights">
            <div className="social-video-insight">
              <small>Insight 01</small>
              <strong>Feed is not neutral</strong>
            </div>
            <div className="social-video-insight">
              <small>Insight 02</small>
              <strong>Attention becomes data</strong>
            </div>
            <div className="social-video-insight">
              <small>Insight 03</small>
              <strong>Algorithm shapes culture</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

// ==========================================
// 主應用程式 Component
// ==========================================
export default function App() {
  const [currentView, setCurrentView] = useState(0);
  
  // 外掛狀態：用來獨立控制社群平台專題
  const [socialMode, setSocialMode] = useState(false);
  const [socialView, setSocialView] = useState(0);

  // 新增功能：首頁互動時間軸的狀態
  const [activeEra, setActiveEra] = useState(0);

  // 當切換視圖時，平滑滾動到頂部
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, socialMode, socialView]);

  // ==========================================
  // 新增功能：首頁互動時間軸資料
  // ==========================================
  const timelineData = [
    { year: "1968", title: "一切展示之母", desc: "Douglas Engelbart 展示了滑鼠、視窗與超文本，為現代圖形介面奠定基礎，人類第一次看見「點擊」的可能。", icon: <MousePointer2 size={24} /> },
    { year: "1984", title: "Macintosh 誕生", desc: "Apple 將圖形介面帶入個人電腦市場，讓「直覺操作」成為現實，開啟了數位平權的黎明。", icon: <Monitor size={24} /> },
    { year: "2004", title: "社群網路起點", desc: "Facebook 創立，社交重心從單純列表轉向「動態分享」，揭開了數位身分表演的序幕。", icon: <Users size={24} /> },
    { year: "2016", title: "演算法接管", desc: "社群平台棄用時間排序改用演算法，從「朋友動態」轉向「注意力爭奪」，我們成為流量工廠的一部分。", icon: <Activity size={24} /> },
    { year: "2026", title: "隱形介面與 AI", desc: "生成式 AI 崛起，我們正從「所見即所得」走向「所思即所得」的新紀元，重新拿回第一人稱。", icon: <Sparkles size={24} /> },
  ];

  // ==========================================
  // 內容資料庫 1 (原版 GUI 專題，完全不動)
  // ==========================================
  const seriesData = [
    {
      id: 1,
      vol: "Vol. 01",
      category: "歷史序幕",
      title: "漆黑螢幕裡的微光：從指令枷鎖到「點擊」革命的黎明",
      icon: <Terminal size={20} />,
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80", 
      imageAlt: "專注於電腦螢幕前的工程師，象徵科技發展背後的人類探索與不懈努力",
      summary: [
        "在 50 年前，用電腦是一場「不能出錯的考試」，必須記住一堆指令，打錯一個字系統便直接不理你。",
        "1968 年「The Mother of All Demos」展示，人類第一次看見用「點擊」控制電腦的可能。",
        "從理解機器到被機器理解，科技開始變得有溫度，這是一場跨越半世紀的數位平權黎明。"
      ],
      content: (
        <>
          <p className="lead text-xl text-slate-800 font-medium mb-8 leading-relaxed">
            在今天，使用電腦幾乎不需要學習。打開檔案、拖曳圖片、點擊畫面，一切操作都像呼吸一樣自然。然而，在半個世紀以前，使用電腦並不是一種直覺行為，而是一場不能出錯的考驗。早期的電腦操作建立在命令列介面之上，使用者必須記住大量指令，並且精準輸入。只要出現一個錯誤，系統便無法回應。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            再往前回溯，在打孔卡片與大型主機的年代，電腦甚至不是一般人可以接觸的工具，而是一種昂貴、遙遠且難以理解的存在。直到 1968 年，一場後來被稱為 The Mother of All Demos 的展示出現，人類第一次看見另一種可能：電腦不需要被「學會」，而可以被「理解」。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            鋼鐵怪獸的時代
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            在 1960 年代，電腦還不是你我桌上的輕薄工具，而是一頭真正的「鋼鐵怪獸」。它們被安置在專屬的冷氣機房裡，體積動輒佔據整個房間，低沉而持續的運轉聲，彷彿在無聲地彰顯其龐大力量與不容輕易駕馭的特性。
          </p>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            這些機器價格昂貴到一種誇張的程度，不是一般公司買得起，更不用說個人。只有政府機構、大型企業或研究單位才有資格「養」這樣一台設備。而且還不是買了就好，還得配一群專業工程師隨時待命，就像請了一整隊醫生在旁邊照顧一位脾氣不太好的怪獸。對多數人來說，電腦並不是可以隨手使用的工具，而是一種帶著距離感的存在——聽過它的厲害，卻無從接觸，也不知道該如何使用。
          </p>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            更有趣的，是當時寫程式的方式。現在我們打開筆電、敲幾下鍵盤就能跑程式，但在那個年代，工程師必須使用「打孔卡片」來輸入指令。每一張卡片上都打著規則的孔洞，代表一段程式碼。寫一個完整程式，可能需要一整疊卡片。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            想像一下這個畫面：你辛辛苦苦寫了一整天，把上百張卡片排好順序，準備交給電腦讀取。結果——不小心掉到地上就必須全部重來。而且最慘的是，你還不一定記得原本的順序。這種情況並不是笑話，而是當時工程師的日常。有人甚至會在卡片角落偷偷寫編號，或用橡皮筋綁好，因為一個小失誤，就可能讓整天的努力瞬間歸零。在這樣的操作環境下，電腦並不是一個「方便」的工具，而是一個對錯誤極度敏感的系統。錯了，就是重來；而重來，往往意味著大量時間與成本的浪費。因此，使用電腦不只是技術問題，更是一種心理壓力測試。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            如同背單字般的指令枷鎖（CLI）
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            隨著螢幕與鍵盤逐漸普及，電腦開始從封閉的機房走向可以「直接操作」的階段，也就是命令列介面（CLI, Command Line Interface）的時代。表面上看起來，人類終於可以透過鍵盤與電腦互動，但實際上，這種改變更像是把門打開了一條縫——你進得去，但不代表你看得懂裡面在做什麼。
          </p>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            在 CLI 的 世界裡，畫面通常是一片黑底，搭配單調的文字。沒有圖示、沒有滑鼠，也沒有任何直覺提示。整個介面就像一張沒有題目說明的考卷，而電腦也不會提醒你哪一題比較重要——它只會等你寫答案。當你想把一個檔案從某個磁碟機複製到另一個位置時，並不是點擊、拖曳就能完成，而是需要輸入一整串完整且精確的指令，例如：<code>COPY A:\REPORT.TXT B:\BACKUP\REPORT.TXT</code>。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            看起來好像只是打一行字，但實際上，每一個字母、符號與空格都不能出錯。只要少打一個字、多一個空格，系統就會直接回傳錯誤訊息，而且通常只會在螢幕上冷冷地顯示錯誤訊息，就像現實中被指出「做錯了」，卻沒有任何人告訴你錯在哪、該怎麼改。與其說是在使用工具，不如說是在學習如何用機器的語言思考——人去適應電腦，而不是電腦來適應人。
          </p>

          <div className="my-14 p-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-3xl shadow-sm">
            <p className="text-2xl font-serif font-bold text-amber-900 italic mb-6 leading-relaxed">
              「如果說 CLI 時代是在『學習如何讓電腦理解人』，那麼接下來的革命，則是反過來思考：如何讓電腦更容易被人理解與操作。」
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            一場名為「一切展示之母」的革命
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            1968 年，Douglas Engelbart 在舊金山的一場展示中，提出了一種截然不同的人機互動方式。這場展示後來被稱為 The Mother of All Demos，被視為現代互動式電腦的起點。
          </p>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            在當時，大多數人對電腦的印象仍停留在輸入指令、等待結果的模式，而這場展示卻像是把電腦「變得可以被操作」。他使用一個帶有滾輪的木製裝置，控制螢幕上的游標移動——當裝置移動時，畫面中的指標也跟著移動；當按下按鈕時，畫面上的內容可以被選取與操作。這個裝置，就是後來被稱為「滑鼠」的發明。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            與其說這是一個新工具，不如說是一種全新的操作邏輯：人不再只是輸入指令，而是可以「直接與畫面互動」。原本抽象的電腦操作，開始變得具體而可見。除了滑鼠之外，他還展示了超文本、視訊通訊以及多人協作等概念。這場展示的意義，並不只在於單一技術的突破，而是在於提出了一個關鍵轉變——電腦不必只是冷冰冰地服從指令，它可以被設計成更貼近人類直覺的工具。這個想法，也成為後來圖形化介面（GUI）發展的起點，也改變了人與電腦之間的關係。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            從實驗室走向世界：誰讓「未來」真正發生？
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            如果說 Douglas Engelbart 在展示中描繪了未來，那麼接下來的問題是：誰讓這個未來真正發生？1970 年代，Xerox PARC（全錄帕羅奧多研究中心）成為這場變革的實驗場。在這裡，研究人員打造出名為 Alto 的電腦系統，首次將「視窗」、「圖示」與「滑鼠操作」整合在同一個環境中。使用者不再需要記憶指令，而是可以透過點擊與移動，直接操作畫面上的內容。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            轉折點出現在 1980 年代初。Steve Jobs 在參訪 Xerox PARC 後，看見了這種全新的操作方式，並意識到它的潛力。他將這些概念帶回 Apple，進一步簡化與重新設計，最終推出了 Macintosh。Macintosh 並不是第一個擁有圖形介面的電腦，但它是第一個真正讓一般人「能用、也願意用」的產品。隨後，Microsoft 也迅速跟進，推出 Windows 系統，將這種操作方式推廣至更廣泛的市場，讓當初的「未來想像」，成為多數人日常生活的一部分。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            數位平權的黎明
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            這個觀念在之後的數十年間逐漸發展。使用者不再需要理解複雜的指令，而是可以透過畫面中的圖示與視窗，直接操作系統。原本需要「學習」才能使用的電腦，開始變成可以「直覺上手」的工具。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            在這個過程中，電腦逐漸從少數人掌握的專業設備，轉變為多數人可以使用的日常工具。操作方式變得更直觀，學習成本也大幅降低——電腦開始不再「考驗人」，而是開始「幫助人」。正因如此，這樣的轉變被視為數位平權的重要起點。科技不再只屬於少數專業人士，而是逐步走入家庭、學校與辦公室，成為日常生活的一部分。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            結語：從理解機器，到被機器理解
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            回顧這段歷史，可以發現，真正改變世界的，並不只是技術本身，而是人與科技之間關係的轉變。在早期，人類必須主動學習機器的語言，記憶指令、適應規則，才能完成最基本的操作；而隨著圖形化介面的出現，這樣的關係開始出現轉折——機器不再只是被操作的對象，而是開始以更貼近人類直覺的方式被設計，使操作變得自然且容易理解。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            從打孔卡片，到命令列指令，再到滑鼠點擊，這不僅是一段技術演進的歷程，更是一個科技逐漸向人類靠近的過程。那個在漆黑螢幕上閃爍的游標，不只是畫面中的一個元素，而是一個轉變的起點。它象徵著科技開始嘗試理解人類，而不再只是要求人類去理解它。當操作不再是門檻，而是一種直覺，人與科技之間的距離，也真正被拉近了。
          </p>
        </>
      ),
      sidebarStats: {
        title: "學習曲線的斷崖式下降",
        points: [
          { label: "CLI 時代學習成本", value: "需數月培訓，充滿挫折感與恐懼" },
          { label: "GUI 時代學習成本", value: "數分鐘即可上手，釋放直覺" },
          { label: "操作心理學轉變", value: "從「害怕犯錯」變成「勇於探索」" },
          { label: "知識權力轉移", value: "從工程師壟斷，轉向大眾賦權" }
        ]
      }
    },
    {
      id: 2,
      vol: "Vol. 02",
      category: "底層解碼",
      title: "視窗背後的科學藝術：拆解讓秦始皇都能上網的「直覺」技術",
      icon: <Cpu size={20} />,
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200", 
      imageAlt: "位元映射技術就像是由無數微小像素組成的數位馬賽克拼圖",
      summary: [
        "電腦學會講人話：位元映射顯示讓電腦從脾氣不好的打字機變成會畫畫的畫家。",
        "直覺是一場善意的騙局：將現實世界的資料夾、垃圾桶搬進螢幕，不用學新的，拿原本會的來用。",
        "科技沒有變簡單，只是把複雜藏得很好，讓理解電腦這件事變得不再必要。"
      ],
      content: (
        <>
          <p className="lead text-xl text-slate-800 font-medium mb-8 leading-relaxed">
            如果說現代人有什麼「與生俱來」的能力，那大概就是——看到圖示就想點，看到資料夾就想拖。<br/>
            這種幾乎不用教的直覺操作，讓電腦從一台難以親近的機器，變成連小孩與長輩都能輕鬆駕馭的日常工具。甚至有人打趣地說：就算秦始皇今天復活，只要給他一台電腦和一隻滑鼠，十分鐘內也能學會上網。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            這不是人類突然變聰明了，而是電腦終於學會「講人話」。<br/>
            而這一切的起點，其實來自一項聽起來不太浪漫的技術——位元映射顯示（Bitmapped Display）。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            螢幕的真面目：一塊拼命加班的馬賽克
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            先說一個可能會讓人瞬間出戲的事實：<br/>
            你每天盯著的螢幕，其實是一面超高級馬賽克牆。
          </p>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            位元映射技術做的事情很簡單（也很狠）：<br/>
            把整個螢幕拆成無數個超小方格——像素，然後讓電腦逐一控制它們的顏色與亮度。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            換句話說：<br/>
            圖示？很多點<br/>
            視窗？更多點<br/>
            你覺得很精緻的UI？超級多點<br/>
            這些點以驚人的速度被更新，快到人眼完全察覺不到，於是我們看到的，就成了一個流暢、完整的畫面。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700 font-bold italic">
            科學的浪漫，有時候就是這麼樸實無華：<br/>
            把世界拆碎，再拼回去。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            電腦升級：從打字機變成畫家
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            在位元映射出現之前，電腦比較像一台脾氣不太好的打字機。<br/>
            你輸入什麼，它就印什麼；<br/>
            你打錯，它也不會安慰你。
          </p>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            畫面只有文字，沒有圖示，沒有視窗，更沒有什麼「拖曳」這種優雅的行為。整個使用體驗，大概介於「寫作業」和「解數學題」之間。
          </p>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            但當電腦開始能控制每一個像素後，事情就不一樣了。<br/>
            工程師突然解鎖了一個新技能：<br/>
            「我們可以畫東西了欸？」
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            於是——<br/>
            按鈕出現了（而且看起來真的可以按）<br/>
            視窗出現了（還能拖來拖去）<br/>
            圖示出現了（而且長得很像現實世界的東西）<br/>
            電腦正式從「只會打字」的工具，晉升為「會畫畫」的存在。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            為什麼你不用學，也會用？（關鍵在這）
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            真正高明的地方，不在於畫得多漂亮，而在於畫得「剛剛好讓你不用學」。<br/>
            設計者做了一件很聰明的事：<br/>
            直接抄現實世界。
          </p>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            資料夾 → 就畫成資料夾<br/>
            垃圾桶 → 就長得像垃圾桶<br/>
            按鈕 → 就讓你一看就想按
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            這種設計的潛台詞是：<br/>
            「不用學新的，拿你原本會的來用就好。」<br/>
            於是你會很自然地：<br/>
            把檔案拖進資料夾（像收納東西）<br/>
            把不要的東西丟進垃圾桶（非常合理）<br/>
            點擊按鈕（因為它看起來就在說：點我）<br/>
            整個過程，你沒有在「學電腦」，你只是在人生經驗上稍微延伸一下。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            所謂直覺，其實是精心設計的「騙局」
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            我們很愛說：「這個介面很直覺。」<br/>
            但說穿了，這是一場非常成功的「善意詐騙」。<br/>
            因為在你輕鬆點擊的背後，其實發生了一大堆你完全不想知道的事情：<br/>
            記憶體在跑、系統在算、畫面在重繪、程式在執行……
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            總之很忙，但你完全不用管。<br/>
            你只會看到：<br/>
            👉 點一下<br/>
            👉 有反應<br/>
            結束。<br/>
            科技沒有變簡單，它只是把複雜藏得很好。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            秦始皇真的可以上網（某種程度上）
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            回到那個經典說法——秦始皇也能上網。<br/>
            這句話之所以成立，是因為現在的電腦操作，已經不依賴「知識」，而是依賴「感覺」。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            一個三歲小孩會滑手機，不是因為他懂科技；<br/>
            一位長輩會點影片，也不是因為他讀過說明書。<br/>
            他們只是看得懂：<br/>
            「這個可以點」<br/>
            「那個可以拖」<br/>
            「這個看起來會打開」<br/>
            當科技做到這一步時，門檻基本上就消失了。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            小結：最厲害的設計，是讓你忘記它存在
          </h3>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            位元映射顯示技術，乍看只是讓畫面變精緻；<br/>
            但實際上，它讓「理解電腦」這件事，變得不再必要。<br/>
            從像素的精密控制，到直覺的自然生成，<br/>
            中間完成的是一場低調但徹底的革命：<br/>
            電腦不再要求人類適應它，<br/>
            而是開始努力讓自己看起來「很好懂」。<br/>
            於是我們今天才能一邊滑手機，一邊完全不覺得自己在使用什麼高科技。<br/>
            ——畢竟，如果一項技術真的夠成功，<br/>
            它最終的樣子，通常是：看起來什麼都沒發生。
          </p>
        </>
      ),
      sidebarStats: {
        title: "隱藏複雜的藝術",
        points: [
          { label: "過去的電腦 (打字機)", value: "畫面只有文字，體驗介於寫作業和解數學題之間" },
          { label: "現在的電腦 (畫家)", value: "用無數像素拼湊出流暢畫面，解鎖畫圖技能" },
          { label: "直覺設計的潛台詞", value: "不用學新的，拿你原本的生活經驗來用就好" },
          { label: "最成功的科技", value: "看起來就像什麼都沒發生一樣自然" }
        ]
      }
    },
    {
      id: 3,
      vol: "Vol. 03",
      category: "商業角力",
      title: "矽谷巨頭的愛恨接力：Xerox、Apple 與 Microsoft 的商戰火花",
      icon: <TrendingUp size={20} />,
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200", 
      imageAlt: "企業巨頭間的競爭與致敬，推動了整個科技時代的進步",
      summary: [
        "Xerox 最早畫出未來，卻深陷實驗室，證明了發明與商業化是兩種不同的能力。",
        "Apple 扮演「翻譯者」，把冷硬的技術包裝成 Macintosh，讓大眾看見科技的親和力。",
        "Microsoft 靠著相容與授權，把 Windows 鋪滿全世界，讓圖形介面成為市場標準。",
        "許峰雄專訪：改變世界的不是最早發明技術的人，而是把技術變便宜、變簡單的人。"
      ],
      content: (
        <>
          <p className="lead text-xl text-slate-800 font-medium mb-8 leading-relaxed">
            如果科技史也要選一個最經典的劇情，那 GUI 很有資格入圍。<br/>
            因為它不是那種「某家公司天降神作，從此改變世界」的故事；它比較像一場很現實的接力賽：前面的人先把未來畫出來，中間的人把未來修得比較好看，後面的人則負責把未來送進每一張辦公桌、每一間教室、每一個家庭。GUI 之所以會變成今天這麼理所當然的存在，靠的從來不是單一英雄，而是三家公司用不同方式，把同一件事一步一步推到世界面前。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            Xerox：最早看到未來的人，偏偏沒有把它賣成今天
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            很多人一講到圖形介面，腦中第一個浮現的是 Apple。這不能算錯，只是如果要往前追，故事得先從 Xerox PARC 說起。1970 年，Xerox 成立 PARC，想做「未來辦公室」；接下來幾年，這裡陸續長出 Alto、Smalltalk，還有後來大家熟到不行的那套邏輯：螢幕上可以有視窗、可以用滑鼠指向、可以不是每一步都靠背指令。簡單說，當外面的世界還在跟黑底綠字硬碰硬時，PARC 裡面已經有人把二十年後的生活先偷跑了一遍。
          </p>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            但 Xerox 最戲劇化的地方也在這裡：它做得出來，卻沒有真的把它變成世界通用的產品。1981 年推出的 Xerox Star 的確是早期商業化 GUI 系統之一，可是市場反應有限，最後沒有打開大眾局面。這不是因為技術不夠厲害，而是因為「做出未來」跟「把未來賣出去」根本是兩種能力。研究室擅長證明可能性，市場要的卻是另一套東西：價格、定位、體驗、時機，少一樣都可能翻車。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            所以 Xerox 在這段歷史裡最有名的，不只是它做得早，而是它讓全世界看到一件事：科技圈真的會發生那種「答案明明握在手上，最後卻不是自己交卷」的情況。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            Apple：把未來從實驗室請到人間
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            接下來輪到 Apple。<br/>
            1979 年，Steve Jobs 率 Apple 團隊參訪 PARC，看到 Alto 與 Smalltalk 的展示後，立刻意識到這不只是工程師之間的新玩具，而是整個個人電腦下一步該長成的樣子。後來的 Lisa 和 Macintosh，某種程度上就是把這套研究室語言翻譯成一般人比較聽得懂的產品語言。
          </p>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            Apple 在這裡真正厲害的地方，不在於「我最早」，而在於「我最會翻譯」。<br/>
            技術這種東西，很多時候不是死於不夠強，而是死於一看就很難親近。Apple 做的事情，是把那些原本帶著濃濃實驗室味道的東西，整理成比較像日常用品的樣子。Lisa 在 1983 年先登場，Macintosh 在 1984 年接著推出；尤其 Macintosh，後來甚至被 Apple 自己形容為革新個人科技的重要節點。它不是第一台 GUI 電腦，卻是最成功把 GUI 變成大眾想像的人之一。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            這個差別其實很關鍵。<br/>
            Xerox 比較像是發明了舞台機關的人，Apple 則像那個知道怎麼把燈光打好、把布景排順、讓觀眾願意坐下來看完整場戲的人。前者證明未來存在，後者讓大家開始相信：這東西不是科幻，是我真的可以用的東西。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            Microsoft：你們先驚艷世界，我來把世界變成我的使用者
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            如果說 Apple 讓 GUI 變得令人嚮往，那 Microsoft 做的，就是把它變成一種無法迴避的現實。Windows 1.0 在 1985 年推出，之後一路演進；到 1990 年的 Windows 3.0 站穩腳步，再到 1995 年 Windows 95 推出開始選單與工作列，GUI 才真正大規模進入主流生活。這一段，Microsoft 自己的歷史資料也寫得很直白：Windows 95 是個 game-changer，開始選單與工作列後來都成了 Windows 電腦的核心元素。
          </p>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            Microsoft 最值得寫進這段歷史的，不是「做得最夢幻」，而是「做得最能擴散」。<br/>
            Apple 的優勢是完整、精緻、體驗一致；Microsoft 的優勢則是另一種現實到不行的東西：授權、相容、規模。當 Windows 能夠跑在大量不同廠商的 PC 上時，GUI 就不再只是某個品牌的漂亮特色，而是整個市場的共同語言。這時候技術才真正開始從「好厲害」變成「很平常」，而一項技術一旦走到「很平常」這一步，通常就表示它真的贏了。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            說得更白一點，Apple 比較像在教世界什麼叫漂亮的未來，Microsoft 則是負責把那個未來鋪滿地板，讓每個人走路都踩得到。
          </p>

          <div className="my-12 p-6 md:p-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl shadow-sm">
            <p className="text-xl font-serif font-bold text-amber-900 italic mb-4 leading-relaxed">
              「Xerox 厲害在先看見；Apple 厲害在先講人話；Microsoft 厲害在先把規模做出來。這三種本事缺哪一種都不行。」
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            三家公司，其實在演三種完全不同的本事
          </h3>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            把 Xerox、Apple、Microsoft 放在一起看，會發現這根本不是單純的誰抄誰、誰贏誰那麼扁平。<br/>
            Xerox 厲害在先看見；Apple 厲害在先講人話；Microsoft 厲害在先把規模做出來。這三種本事缺哪一種都不行。只有實驗室，技術會停在少數人手上；只有漂亮產品，可能還是賣不到夠多人；只有擴張能力，沒有先前那一大串技術累積，也不可能憑空長出來。GUI 最後能變成今天這個樣子，本來就不是一家公司單打獨鬥的成果，而是一整段「發明—轉譯—普及」的連鎖反應。<br/><br/>
            所以這段歷史最有意思的地方，反而不是誰最委屈、誰最光彩，而是它讓人看懂一件事：<br/>
            科技真正改變世界，靠的往往不是「第一個做出來」，而是「第一個讓夠多人真的用起來」。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            我們也問了許峰雄：在 GUI 這段歷史裡，誰才真正改變了世界？
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            針對這個問題，我們也訪問了知名電腦科學家許峰雄。<br/>
            他的回答其實先打破了一個很常見的直覺：GUI 並不是 Apple 或 Microsoft 憑空發明出來的。<br/>
            在他的說法裡，GUI 相關概念其實早在 1970 年代就已經出現，很多技術當時已經存在於大學、研究機構與電腦科學相關部門裡。也就是說，Apple 和 Microsoft 的重要性，不在於它們是最早的發明者，而在於它們後來把這些原本停留在少數專業環境裡的東西，真正帶進市場，帶到一般人面前。
          </p>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            他特別提到，很多技術不是不存在，而是長期只存在在「有能力接觸的人」手中。研究室裡有，學校裡有，少數高階環境裡也有，但一般人用不到，也買不起。原因不只是技術問題，更是價格問題。當那些具備類似 GUI 概念的設備還停留在幾萬美元等級時，它們注定只會屬於少數機構；一直到價格下降到一般消費者可以負擔的區間後，市場才真正被打開。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            所以如果說 Xerox、Apple、Microsoft 分別代表了不同階段，那許峰雄的觀點更像是在提醒我們：這段歷史真正該看的，不只是誰先做出來，而是誰讓它跨過研究室和市場之間那道門檻。Apple 和 Microsoft 的歷史位置，正在於它們讓 GUI 不再只是存在，而是開始被使用、被接受、被普及。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            他也補了一個很關鍵的點：GUI 的成功，不只是因為有人會推廣，更是因為它的好處一用就知道。相較於文字指令，圖形介面更直觀，也更貼近人的理解方式。很多時候，使用者不是被說服了才接受，而是親手用過之後，立刻就知道差在哪裡。這種「體驗本身就能說服人」的特性，正是 GUI 能快速進入大眾生活的重要原因。
          </p>
          <div className="my-14 p-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-3xl shadow-sm">
            <p className="text-2xl font-serif font-bold text-amber-900 italic mb-6 leading-relaxed">
              換句話說，許峰雄給我們的答案其實很清楚：<br/>
              改變世界的，不一定是最早發明技術的人，而是把技術變便宜、變簡單、變成一般人真的願意用的人。
            </p>
          </div>
        </>
      ),
      sidebarStats: {
        title: "三強鼎立與普及門檻",
        points: [
          { label: "Xerox (技術原創)", value: "證明未來存在，卻缺乏將技術賣向大眾的商業轉譯能力" },
          { label: "Apple (體驗轉譯)", value: "最會翻譯的舞台總監，將實驗室產物變成日常用品" },
          { label: "Microsoft (全球普及)", value: "最能擴散的戰略家，透過授權與相容建立全市場標準" },
          { label: "專家觀點 (許峰雄)", value: "降價與易用性，才是讓技術跨越研究室門檻的真正關鍵" }
        ]
      }
    },
    {
      id: 4,
      vol: "Vol. 04",
      category: "社會反思",
      title: "當直覺成為本能：GUI 普及後的社會震盪與文化反思",
      icon: <Globe2 size={20} />,
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200", 
      imageAlt: "辦公室自動化與資訊交流的改變，帶來了前所未有的社會文化震盪",
      summary: [
        "科技的普及伴隨著陣痛，專業工程師曾強烈抗拒滑鼠帶來的「效率倒退」。",
        "「所見即所得」引發職場殘酷洗牌，打字員消失，傳統技能面臨貶值危機。",
        "當專業技能變得連小學生都會用，原本賴以維生的白領階級產生巨大的集體焦慮。",
        "GUI 已演變為人類感官的延伸，徹底模糊了數位環境與真實世界的界線。"
      ],
      content: (
        <>
          <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            時代的希望：從「專業工具」走向「家庭成員」
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            GUI（Graphical User Interface，圖形化輔助使用者操作介面）可說是讓電子裝置可以「飛入尋常百姓家」的一個超重要變革。如果沒有 GUI 邏輯的出現，現在大家有可能還要繼續去記 DOS 的指令才能順暢地操作電腦（也就是所謂的 CLI）。目前最為知名的 GUI 作業系統為 Windows 與 MAC OS X，現在使用的「消費型電子產品」，全部都會預載 GUI。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            當滑鼠與視窗出現時，它不只是技術的突破，更揭開了科技新時代的序幕。人們開始想像，電腦不再只是計算機器，而是能走入家庭、學校與辦公室的「希望」。這種轉變讓原本對科技感到陌生、有距離感的一般大眾，開始期待科技能提升效率、促進溝通，甚至改變資訊交流的方式。
            <br/><br/>
            只不過，科技的普及，從來都不只是一場放著煙火、所有人皆大歡喜的歡樂派對，它無可避免地伴隨著劇烈的陣痛。當操作電腦的門檻因為 GUI 的出現而降至趨近於零時，它帶來的就不再只是科技產業的軟硬體升級，而是一場人類社會結構的權力大洗牌，以及隨之而來的深遠文化震盪。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            1. 被討厭的勇氣：為什麼當時的電腦專業人士反彈最大？
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            雖然 GUI 大幅降低了進入門檻，讓連三歲小孩都能上手，但在當時卻引發了不少反彈與爭議。你可能很難想像，當直覺、好用的滑鼠與視窗剛推出時，並沒有立刻獲得所有人的掌聲。事實上，它在科技圈內部遭遇了巨大的抵制。當時許多習慣於盲打指令的資深工程師與數據輸入員，對這個需要用手去推動的設計嗤之以鼻。
          </p>
          
          <ul className="space-y-4 mb-8 text-justify leading-loose text-slate-700 list-disc pl-6 marker:text-amber-500">
            <li><strong>「效率低下」的標籤：</strong>對於習慣文字指令的專業電腦使用者而言，他們認為輸入指令的速度、精確度與靈活性遠勝過在那邊點來點去的圖形介面。在他們眼裡，GUI 雖然易上手，卻可能大幅降低工作效率。</li>
            <li><strong>「腦袋空空」的隱憂：</strong>部分早期使用者擔心，過度依賴直覺式的圖形操作，會讓使用者對電腦的運作原理缺乏深層理解。他們害怕複雜的系統被簡化為表面的點擊，長期下來會限制使用者的問題解決能力。</li>
            <li><strong>「技能轉型」的壓力：</strong>隨著電腦走進辦公室，傳統工作方式受到衝擊，部分流程被自動化取代，這讓當時的勞動族群（尤其是打字員）感到極大的技能轉型壓力。</li>
          </ul>

          <div className="my-12">
            <div className="w-full bg-slate-100 rounded-2xl aspect-video flex items-center justify-center border border-slate-200 overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80" 
                alt="早期電腦與圖形介面的歷史縮影" 
                className="w-full h-full object-cover" 
              />
            </div>
            <p className="text-sm text-slate-500 mt-4 text-center font-bold">圖1. 早期電腦與圖形介面的歷史縮影 (Apple 1984 Macintosh 概念)</p>
          </div>

          <p className="mb-8 text-justify leading-loose text-slate-700">
            有了 GUI，任何人只要在螢幕上反白文字、點擊「B（粗體）」或更改字體大小，就能用印表機印出完美的報告。這引發了一場無聲卻殘酷的職場革命。龐大的打字員部門被瞬間裁撤，傳統排版工人的技能貶值；而另一端，高高在上的企業主管與中階白領，也不得不低下頭，開始學習如何親自操作滑鼠、發送電子郵件、製作投影片簡報。科技，以一種不可逆的趨勢，強迫整個社會進行技能轉型，這是一次跨越階級的大洗牌。
          </p>

          <div className="my-12 p-6 md:p-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl shadow-sm">
            <p className="text-xl font-serif font-bold text-amber-900 italic mb-2 leading-relaxed">
              「舉個實際例子：就像是現在 AI 開始取代文組工作一樣，原本高高在上的專業技能，突然變得連小學生都會用，自然會讓這些原本賴此維生的員工感到害怕，畢竟自己的專業被科技簡化，甚至取代了。」
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            2. 進化與無形：從「實體按鍵」到「虛擬美學」的跨越
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            歷史上，GUI 本是專門為桌上型電腦之間的互動而設計，隨著觸控螢幕的誕生，GUI 也逐漸轉為可觸控式的「手指友好」GUI。隨著智慧型手機和智慧型手錶等行動裝置技術的進步，運用在這些行動裝置上的 GUI 已被稱為「美學創新」。螢幕上顯示的視覺元素更有助於促進和改善產品和終端使用者的互動。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            隨著採用電子觸控螢幕的各種電腦設備（包括智慧型手機、智慧型手錶、家用電器、穿戴裝置和醫療設備等）使用人數不斷增加，GUI 於這些技術上的設計也不斷發展。從技術角度來看，這些設計是使用將元素顯示到電子螢幕上的軟體來實現的。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div>
              <div className="w-full bg-slate-100 rounded-2xl aspect-square flex items-center justify-center border border-slate-200 overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80" 
                  alt="智慧型手機滑動觸控介面" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <p className="text-sm text-slate-500 mt-4 text-center font-bold">圖2. 智慧型手機的滑動解鎖 GUI 革命</p>
            </div>
            <div>
              <div className="w-full bg-slate-100 rounded-2xl aspect-square flex items-center justify-center border border-slate-200 overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
                  alt="學校電子白板提供的沉浸式數位學習" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <p className="text-sm text-slate-500 mt-4 text-center font-bold">圖3. 電子白板提供的沉浸式數位學習</p>
            </div>
          </div>

          <p className="mb-8 text-justify leading-loose text-slate-700">
            時至今日，GUI 的影響力早已超越了當年的「視窗與資料夾」。隨著技術演進，我們正經歷一場從「物理形狀」轉向「無實體環境」的設計革命。現代的 GUI 不再只是螢幕上的按鍵，而是演變成智慧型手機、穿戴裝置，甚至是虛擬實境（VR）與全像投影（Holographic Imagery）中的核心元素。
          </p>

          <div className="my-12">
            <div className="w-full bg-slate-100 rounded-2xl aspect-video flex items-center justify-center border border-slate-200 overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
                alt="簡潔的按鍵式 GUI 介面" 
                className="w-full h-full object-cover" 
              />
            </div>
            <p className="text-sm text-slate-500 mt-4 text-center font-bold">圖4. 現代軟體提供簡潔的按鍵式 GUI，降低操作 AI 門檻</p>
          </div>

          <p className="mb-8 text-justify leading-loose text-slate-700">
            這種轉變讓「介面」成為了一種美學創新與數位資產。現在全球各國（如歐盟、日本、新加坡等）都在爭相修訂法律，保護這些「虛擬設計」的專利，因為 GUI 已經與產品的操作密不可分。當我們與科技的互動從「敲鍵盤」轉化為「滑動解鎖」，再到未來可能的「虛擬空間互動」時，GUI 實際上已經從單純的工具，進化成人類感官的延伸，徹底模糊了數位與真實世界的界線。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            3. 文化反思：數位平權的代價
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            從今日回頭看，GUI 的普及確實是「數位平權」的起點，讓電腦從計算機變成了生活必需品。然而，這種「直覺化」也帶來了新的社會討論，例如不同族群之間的資訊落差與社會不平等問題。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            當時人們對科技未來的想像，如今已成為我們習以為常的數位生活。但我們也必須反思：當科技變得太容易「點擊」時，我們是否也逐漸失去了對工具背後邏輯的探索慾望？這場「寧靜革命」，留給我們的除了便利，還有在 AI 浪潮下重新建立人機互動關係的課題。
          </p>
        </>
      ),
      sidebarStats: {
        title: "社會震盪與美學進化",
        points: [
          { label: "專業的抗拒", value: "工程師認為滑鼠是「效率低下」且讓人「腦袋空空」的設計" },
          { label: "職場的洗牌", value: "打字員消失，如同今日 AI 帶來的技能貶值焦慮" },
          { label: "介面的進化", value: "從物理形狀轉向無實體環境，GUI 成為受保護的數位資產" },
          { label: "文化的反思", value: "越直覺的操作，是否讓我們失去探索底層邏輯的慾望？" }
        ]
      }
    },
    {
      id: 5,
      vol: "Vol. 05",
      category: "未來展望",
      title: "終章：下一個介面在哪裡？在 AI 浪潮中預見未來的互動模式",
      icon: <Sparkles size={20} />,
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200", 
      imageAlt: "面對未知的 AI 浪潮，人類需要保持探索未來的勇氣與會心一笑",
      summary: [
        "回望半世紀的 GUI 革命，科技的演進始終朝著一個終極目標邁進：消除人與資訊之間的隔閡。",
        "AI 浪潮引領「所思即所得」的序幕，未來的隱形介面將直接理解並執行人類意圖。",
        "面對職場洗牌與技術變革，我們需要從「操作者」轉型為「定義者」，在 AI 時代重新開機。"
      ],
      content: (
        <>
          <p className="lead text-xl text-slate-800 font-medium mb-8 leading-relaxed">
            回望這段橫跨半個世紀的 GUI 革命史，我們看見的不僅是硬體效能的突破，更是一場人類如何與機器「和解」的漫長過程。從 1960 年代那頭需要專人伺候、躲在冷氣機房裡的「鋼鐵怪獸」，到今日我們指尖下流暢的滑動與點擊，科技的演進始終朝著一個終極目標邁進：消除人與資訊之間的隔閡。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            數位革命的迴聲：從「學習語言」到「重塑本能」
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            當初 Douglas Engelbart 在「一切展示之母」中握住那個木製滑鼠時，他所挑戰的其實是當時社會對「工具」的定義。在 CLI 統治的年代，使用電腦意味著你擁有一種接近魔法師的特權——你必須背誦咒語般的指令，才能驅動龐大的運算力量。那是一個「人去適應機器」的時代，任何一點直覺的閃現，都會被漆黑螢幕上冰冷的錯誤訊息給澆熄。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            然而，GUI 的出現徹底翻轉了這套邏輯。透過「位元映射顯示技術」，螢幕不再只是文字的載體，而是一塊可以自由揮灑的畫布。Xerox PARC 種下了創新的種子，Apple 為技術賦予了人文的靈魂，而 Microsoft 則將這套語言普及到全世界的每一個角落。這場「安靜卻深遠」的革命，讓科技從少數天才的專利，變成了全民的「數位平權」。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            AI 時代的黎明：當「意圖」取代「點擊」
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            如今，我們正站在與 1980 年代極為相似的轉捩點上。如果說 GUI 的核心是「所見即所得」，那麼當前 AI 浪潮所引領的轉變，則是「所思即所得」的序幕。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            在生成式 AI 普及的今天，我們與機器的互動模式正在發生第二次根本性的質變。過去我們需要尋找正確的「視窗」或「圖示」來啟動功能，這本質上仍是人在配合機器的分類邏輯。現在，下一個改變生活的介面，很可能是一個「隱形介面」。未來，你可能不再需要打開特定的 App，只需要對著裝置表達你的意圖，AI 就會跨越所有視覺圖層，直接理解並執行任務。
          </p>

          <div className="my-14 p-8 bg-amber-50 border-l-4 border-amber-500 rounded-r-3xl shadow-sm">
            <p className="text-2xl font-serif font-bold text-amber-900 italic mb-6 leading-relaxed">
              「這正是介面設計的最高境界：最好的介面，就是讓使用者『感覺不到介面的存在』。」
            </p>
            <p className="text-sm font-bold text-amber-700 uppercase tracking-widest">— SMILE 未來探索編輯台</p>
          </div>

          <p className="mb-8 text-justify leading-loose text-slate-700">
            就像當年人們第一次見到滑鼠時那種「這也可以？」的震撼感，現在的讀者在面對 AI 時，同樣能感受到技術門檻瞬間崩塌的衝擊。這不再是學習如何操作工具，而是工具在學習如何服務人類。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            隱形的介面：從螢幕走向感官的延伸
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            展望未來，介面的演進將不再侷限於二維螢幕的尺寸。隨著技術成熟，GUI 正在從「平面的點擊」進化為「空間的互動」。未來的「視窗」可能就懸浮在你的視野中，而「滑鼠」則被眼神追蹤與手勢辨識所取代。這不僅是美學的創新，更是「數位平權」的進一步延伸。當互動方式變得極度自然，甚至連語言障礙、生理限制都能被技術優雅地化解時，我們才真正接近了「科技服務所有人」的理想。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            但這也帶來了新的思考：當科技變得太過直覺，我們是否正逐漸失去對事物背後邏輯的探索慾望？正如當年專業使用者擔心 GUI 會讓使用者對電腦原理缺乏理解，今日我們也必須警惕，過度依賴 AI 介面是否會削弱人類批判性思考與問題解決的能力。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            數位平權的下半場：心態的重新開機
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            回顧歷史，每一場科技革命都伴隨著職場的殘酷洗牌。GUI 普及時，打字員與排版工人的技能貶值，引發了巨大的職場焦慮。現在，AI 介面正在對文組工作與中階白領發起類似的挑戰。面對這股浪潮，我們需要為未來的 AI 介面做好以下心態準備：
          </p>
          <ul className="space-y-4 mb-8 text-justify leading-loose text-slate-700 list-disc pl-6 marker:text-amber-500">
            <li><strong>從「操作者」轉型為「定義者」：</strong>不要執著於學習特定的軟體按鈕，而要訓練自己「定義問題」的能力。</li>
            <li><strong>保持對技術的敏銳與批判：</strong>在享受 AI 帶來的便利之餘，要能洞察技術背後的限制與風險。</li>
            <li><strong>擁抱持續成長的生活方式：</strong>將科技視為輔助，而非替代。這不只是懷舊，更是為了現在與未來做準備。</li>
          </ul>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-amber-500 inline-block"></span>
            結語：我們正在書寫的未來
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            1984 年 Apple Macintosh 的廣告曾暗示，電腦將成為「大腦的腳踏車」。在那之後的五十年間，我們學會了如何在視窗中漫遊。現在，AI 則是為這台腳踏車裝上了火箭引擎。
          </p>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            科技的溫度，始終來自於對「人」的理解。當我們在螢幕上反白文字、或是與 AI 進行深層對話時，我們其實都在參與這場始於半世紀前的革命。那顆在漆黑螢幕上閃爍的游標，現在已經化為無處不在的智能夥伴，提醒著我們：科技不再考驗人類，它正在嘗試溫柔地理解我們。
          </p>
          <p className="text-justify leading-loose text-slate-700">
            下一個介面在哪裡？它或許不在你的口袋裡，也不在你的桌面上，而是在你與世界互動的每一個直覺瞬間。這場革命仍在繼續，而我們每一個人，都是這段歷史的共同作者。
          </p>
        </>
      ),
      sidebarStats: {
        title: "互動模式的演化與反思",
        points: [
          { label: "1.0 CLI 命令列", value: "人去適應機器，背誦咒語般的指令" },
          { label: "2.0 GUI 圖形介面", value: "所見即所得，推動全民的數位平權" },
          { label: "3.0 AI 隱形介面", value: "所思即所得，工具主動學習服務人類" },
          { label: "未來生存心態", value: "從「操作者」轉型為「定義者」" }
        ]
      }
    }
  ];

  // ==========================================
  // 內容資料庫 2 (全新新增：社群平台專題)
  // ==========================================
  const socialSeriesData = [
    {
      id: 1,
      vol: "Vol. 01",
      category: "社交演化史",
      title: "從「聯絡工具」到「流量工廠」：記錄人類社交本能被科技重新格式化的過程",
      iconName: "Globe2",
      imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
      imageAlt: "科技年表紀錄社群媒體演進的歷史軌跡",
      metrics: { views: "4.2M", retention: "89%", trigger: "Timeline_Shift" },
      summary: [
        "1997-2010 啟蒙時代：我們是玩家，主動在網路上尋找失散的老友與建立連結。",
        "2011-2016 轉變期：身分表演開始精細化，我們逐漸被社群媒體控制並切換角色。",
        "2017-現在 工廠時代：當我們滑個不停時，我們從生活的主人變成了提供數據的 NPC。"
      ],
      content: (
        <>
          <p className="lead text-xl text-indigo-900/80 font-medium mb-8 leading-relaxed">
            從「聯絡工具」到「流量工廠」，記錄人類社交本能被科技重新格式化的過程。這是一場長達近 30 年的演化，每一步都悄悄改變了我們觀看世界與呈現自我的方式。
          </p>

          <div className="my-10 p-6 md:p-8 bg-indigo-50/50 border border-indigo-100 rounded-2xl relative overflow-hidden shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2 relative z-10">
              <span className="w-2 h-6 bg-indigo-500 inline-block rounded-sm"></span>
              社群演化編年史
            </h3>
            
            <div className="border-l-2 border-indigo-200 pl-6 space-y-8 py-2 ml-2 relative z-10">
              <div className="relative">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[31px] top-1.5 ring-4 ring-indigo-50"></div>
                <div className="text-indigo-600 font-black text-xl font-mono tracking-tight">1994 <span className="text-xs ml-2 px-2 py-0.5 bg-indigo-100/80 text-indigo-800 rounded font-bold uppercase tracking-widest align-middle">入口時代</span></div>
                <h4 className="text-base md:text-lg font-bold text-slate-800 mt-1 mb-2">Yahoo! 誕生</h4>
                <p className="text-slate-600 text-sm leading-relaxed"><strong className="text-fuchsia-600 font-mono tracking-widest mr-1">MEDIA:</strong>網路的起點。當時我們不滑社群軟體，我們「搜尋」網站。Yahoo做為當時的入口網站，如同現在的Google一樣，建立了人類獲取資訊的新階層。</p>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[31px] top-1.5 ring-4 ring-indigo-50"></div>
                <div className="text-indigo-600 font-black text-xl font-mono tracking-tight">1997 <span className="text-xs ml-2 px-2 py-0.5 bg-indigo-100/80 text-indigo-800 rounded font-bold uppercase tracking-widest align-middle">概念萌芽</span></div>
                <h4 className="text-base md:text-lg font-bold text-slate-800 mt-1 mb-2">SixDegrees</h4>
                <p className="text-slate-600 text-sm leading-relaxed"><strong className="text-indigo-400 font-mono tracking-widest mr-1">SCIENCE:</strong>驗證「六度分隔理論」，人類第一次意識到可以透過二進位連結全世界。</p>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[31px] top-1.5 ring-4 ring-indigo-50"></div>
                <div className="text-indigo-600 font-black text-xl font-mono tracking-tight">1998 <span className="text-xs ml-2 px-2 py-0.5 bg-indigo-100/80 text-indigo-800 rounded font-bold uppercase tracking-widest align-middle">即時傳訊</span></div>
                <h4 className="text-base md:text-lg font-bold text-slate-800 mt-1 mb-2">Yahoo! Messenger</h4>
                <p className="text-slate-600 text-sm leading-relaxed"><strong className="text-amber-500 font-mono tracking-widest mr-1">INNOVATION:</strong>網路交談從「留言板」變成「即時對話」。</p>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[31px] top-1.5 ring-4 ring-indigo-50"></div>
                <div className="text-indigo-600 font-black text-xl font-mono tracking-tight">1999 <span className="text-xs ml-2 px-2 py-0.5 bg-indigo-100/80 text-indigo-800 rounded font-bold uppercase tracking-widest align-middle">通訊霸主</span></div>
                <h4 className="text-base md:text-lg font-bold text-slate-800 mt-1 mb-2">MSN Messenger</h4>
                <p className="text-slate-600 text-sm leading-relaxed"><strong className="text-emerald-500 font-mono tracking-widest mr-1">LEARNING:</strong>台灣人的集體記憶。「叮咚！有人在嗎？」與自訂暱稱，是人類第一次練習如何在線上建立「人設」。</p>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[31px] top-1.5 ring-4 ring-indigo-50"></div>
                <div className="text-indigo-600 font-black text-xl font-mono tracking-tight">1999 <span className="text-xs ml-2 px-2 py-0.5 bg-indigo-100/80 text-indigo-800 rounded font-bold uppercase tracking-widest align-middle">部落格元年</span></div>
                <h4 className="text-base md:text-lg font-bold text-slate-800 mt-1 mb-2">無名小站</h4>
                <p className="text-slate-600 text-sm leading-relaxed"><strong className="text-amber-500 font-mono tracking-widest mr-1">INNOVATION:</strong>台灣社交界的傳奇。「誰來我家」，開啟了大規模的虛擬身分表演與比較心理。</p>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[31px] top-1.5 ring-4 ring-indigo-50"></div>
                <div className="text-indigo-600 font-black text-xl font-mono tracking-tight">2002 <span className="text-xs ml-2 px-2 py-0.5 bg-indigo-100/80 text-indigo-800 rounded font-bold uppercase tracking-widest align-middle">數位名錄</span></div>
                <h4 className="text-base md:text-lg font-bold text-slate-800 mt-1 mb-2">Friendster</h4>
                <p className="text-slate-600 text-sm leading-relaxed"><strong className="text-emerald-500 font-mono tracking-widest mr-1">LEARNING:</strong>大眾開始學習如何在虛擬世界定義「朋友」，而非僅是現實延伸。</p>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[31px] top-1.5 ring-4 ring-indigo-50"></div>
                <div className="text-indigo-600 font-black text-xl font-mono tracking-tight">2003 <span className="text-xs ml-2 px-2 py-0.5 bg-indigo-100/80 text-indigo-800 rounded font-bold uppercase tracking-widest align-middle">家族聚會</span></div>
                <h4 className="text-base md:text-lg font-bold text-slate-800 mt-1 mb-2">Yahoo! 奇摩家族</h4>
                <p className="text-slate-600 text-sm leading-relaxed"><strong className="text-fuchsia-600 font-mono tracking-widest mr-1">MEDIA:</strong>興趣社群的始祖。這種「家族式」的歸屬感，是後來 Facebook 社團功能的雛形。</p>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[31px] top-1.5 ring-4 ring-indigo-50"></div>
                <div className="text-indigo-600 font-black text-xl font-mono tracking-tight">2004 <span className="text-xs ml-2 px-2 py-0.5 bg-indigo-100/80 text-indigo-800 rounded font-bold uppercase tracking-widest align-middle">牆上的社交</span></div>
                <h4 className="text-base md:text-lg font-bold text-slate-800 mt-1 mb-2">Facebook 誕生</h4>
                <p className="text-slate-600 text-sm leading-relaxed"><strong className="text-amber-500 font-mono tracking-widest mr-1">INNOVATION:</strong>推出「塗鴉牆 (Wall)」，社交重心從單純列表轉向「動態分享」，揭開表演序幕。</p>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[31px] top-1.5 ring-4 ring-indigo-50"></div>
                <div className="text-indigo-600 font-black text-xl font-mono tracking-tight">2008 <span className="text-xs ml-2 px-2 py-0.5 bg-indigo-100/80 text-indigo-800 rounded font-bold uppercase tracking-widest align-middle">河道社交</span></div>
                <h4 className="text-base md:text-lg font-bold text-slate-800 mt-1 mb-2">Plurk (噗浪)</h4>
                <p className="text-slate-600 text-sm leading-relaxed"><strong className="text-amber-500 font-mono tracking-widest mr-1">INNOVATION:</strong>台灣學生的最愛。「卡瑪值 (Karma)」將社交活躍度數據化，將流量變成遊戲幣以解鎖內容。</p>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[31px] top-1.5 ring-4 ring-indigo-50"></div>
                <div className="text-indigo-600 font-black text-xl font-mono tracking-tight">2009 <span className="text-xs ml-2 px-2 py-0.5 bg-indigo-100/80 text-indigo-800 rounded font-bold uppercase tracking-widest align-middle">移動通訊</span></div>
                <h4 className="text-base md:text-lg font-bold text-slate-800 mt-1 mb-2">WhatsApp 出現</h4>
                <p className="text-slate-600 text-sm leading-relaxed"><strong className="text-fuchsia-600 font-mono tracking-widest mr-1">MEDIA:</strong>簡訊（SMS）開始被免費網路訊息取代，社交開始進入「隨時待命」的時代。</p>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[31px] top-1.5 ring-4 ring-indigo-50"></div>
                <div className="text-indigo-600 font-black text-xl font-mono tracking-tight">2010 <span className="text-xs ml-2 px-2 py-0.5 bg-indigo-100/80 text-indigo-800 rounded font-bold uppercase tracking-widest align-middle">濾鏡美學</span></div>
                <h4 className="text-base md:text-lg font-bold text-slate-800 mt-1 mb-2">Instagram 誕生</h4>
                <p className="text-slate-600 text-sm leading-relaxed"><strong className="text-amber-500 font-mono tracking-widest mr-1">INNOVATION:</strong>我們開始練習「要發甚麼讓親朋好友看到」，開始有了排版、策畫貼文內容的概念、模板，就好像是在策展一樣。</p>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[31px] top-1.5 ring-4 ring-indigo-50"></div>
                <div className="text-indigo-600 font-black text-xl font-mono tracking-tight">2011 <span className="text-xs ml-2 px-2 py-0.5 bg-indigo-100/80 text-indigo-800 rounded font-bold uppercase tracking-widest align-middle">通訊語法</span></div>
                <h4 className="text-base md:text-lg font-bold text-slate-800 mt-1 mb-2">LINE 登台</h4>
                <p className="text-slate-600 text-sm leading-relaxed"><strong className="text-amber-500 font-mono tracking-widest mr-1">INNOVATION:</strong>貼圖誕生。創造了一種新的數位情緒語法，讓社交進入「貼圖=情緒」的階段。</p>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[31px] top-1.5 ring-4 ring-indigo-50"></div>
                <div className="text-indigo-600 font-black text-xl font-mono tracking-tight">2011 <span className="text-xs ml-2 px-2 py-0.5 bg-indigo-100/80 text-indigo-800 rounded font-bold uppercase tracking-widest align-middle">私域轉型</span></div>
                <h4 className="text-base md:text-lg font-bold text-slate-800 mt-1 mb-2">Messenger 分離</h4>
                <p className="text-slate-600 text-sm leading-relaxed"><strong className="text-fuchsia-600 font-mono tracking-widest mr-1">MEDIA:</strong>FB訊息功能獨立。標誌著社群與通訊分流：我們在FB表演，在Messenger上對話聊天。</p>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[31px] top-1.5 ring-4 ring-indigo-50"></div>
                <div className="text-indigo-600 font-black text-xl font-mono tracking-tight">2013 <span className="text-xs ml-2 px-2 py-0.5 bg-indigo-100/80 text-indigo-800 rounded font-bold uppercase tracking-widest align-middle">大遷徙時代</span></div>
                <h4 className="text-base md:text-lg font-bold text-slate-800 mt-1 mb-2">無名/Yahoo部落格關閉</h4>
                <p className="text-slate-600 text-sm leading-relaxed"><strong className="text-cyan-500 font-mono tracking-widest mr-1">EXPLORATION:</strong>一個時代的終結。這迫使台灣使用者全面轉向 Facebook，社交環境從「個人化部落格」轉向「公開貼文」。</p>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[31px] top-1.5 ring-4 ring-indigo-50"></div>
                <div className="text-indigo-600 font-black text-xl font-mono tracking-tight">2016 <span className="text-xs ml-2 px-2 py-0.5 bg-indigo-100/80 text-indigo-800 rounded font-bold uppercase tracking-widest align-middle">算法元年</span></div>
                <h4 className="text-base md:text-lg font-bold text-slate-800 mt-1 mb-2">IG 演算法排序</h4>
                <p className="text-slate-600 text-sm leading-relaxed"><strong className="text-indigo-400 font-mono tracking-widest mr-1">SCIENCE:</strong>棄用時間排序。主動權轉移，我們開始看「演算法覺得我們想看的內容」。</p>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[31px] top-1.5 ring-4 ring-indigo-50"></div>
                <div className="text-indigo-600 font-black text-xl font-mono tracking-tight">2017 <span className="text-xs ml-2 px-2 py-0.5 bg-indigo-100/80 text-indigo-800 rounded font-bold uppercase tracking-widest align-middle">興趣分發</span></div>
                <h4 className="text-base md:text-lg font-bold text-slate-800 mt-1 mb-2">TikTok 化</h4>
                <p className="text-slate-600 text-sm leading-relaxed"><strong className="text-cyan-500 font-mono tracking-widest mr-1">EXPLORATION:</strong>徹底改變邏輯——從「人際關係網路」進化到「數據收集庫」。使用者正式進入「幫演算法打工」的 NPC 模式。</p>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[31px] top-1.5 ring-4 ring-indigo-50"></div>
                <div className="text-indigo-600 font-black text-xl font-mono tracking-tight">2021 <span className="text-xs ml-2 px-2 py-0.5 bg-indigo-100/80 text-indigo-800 rounded font-bold uppercase tracking-widest align-middle">短影收割</span></div>
                <h4 className="text-base md:text-lg font-bold text-slate-800 mt-1 mb-2">Reels 登場</h4>
                <p className="text-slate-600 text-sm leading-relaxed"><strong className="text-emerald-500 font-mono tracking-widest mr-1">LEARNING:</strong>Meta 全面轉向短影音。平台真正賣的不再是關係，而是使用者的「三秒注意力」。</p>
              </div>

              <div className="relative">
                <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[31px] top-1.5 ring-4 ring-indigo-50"></div>
                <div className="text-indigo-600 font-black text-xl font-mono tracking-tight">2023 <span className="text-xs ml-2 px-2 py-0.5 bg-indigo-100/80 text-indigo-800 rounded font-bold uppercase tracking-widest align-middle">即時反思</span></div>
                <h4 className="text-base md:text-lg font-bold text-slate-800 mt-1 mb-2">Threads & AI</h4>
                <p className="text-slate-600 text-sm leading-relaxed"><strong className="text-cyan-500 font-mono tracking-widest mr-1">EXPLORATION:</strong>經歷過度包裝後，大眾渴望更原生的文字互動，並反思如何拿回第一人稱主動權。</p>
              </div>

            </div>
          </div>
          
          {/* 次引言 Style (Editorial Inline Supplement) - 第 1 篇 */}
          <div className="my-10 pl-5 md:pl-6 border-l-[3px] border-indigo-500 bg-indigo-500/5 py-4 pr-6 rounded-r-lg">
            <div className="text-indigo-400 font-mono text-[10px] tracking-[0.2em] uppercase mb-3 font-bold flex items-center gap-2">
               <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div> 王志仁觀察
            </div>
            <p className="text-slate-300 font-serif text-base leading-relaxed text-justify m-0">
              如果只依靠市場力量，平台的發展往往會走向大者恆大。大型科技公司透過收購與投資，將潛在競爭者提早納入版圖，平台集中化因此愈發明顯。
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-16 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-500 inline-block rounded-sm"></span>
            SMILE 隨刊筆記：年表背後的行為深度解析
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            這次細分後的年表，能幫我們帶出三個關鍵的「社交斷代」：
          </p>
          
          <div className="space-y-6 mb-12">
            <div className="bg-slate-50 border-l-4 border-indigo-400 p-5 rounded-r-xl">
              <h4 className="font-bold text-indigo-900 text-lg mb-2">1. 1997-2010：社群平台啟蒙時代</h4>
              <p className="text-slate-700 text-sm leading-relaxed mb-3"><strong>重點：連結。</strong></p>
              <p className="text-slate-600 text-sm leading-relaxed italic border-t border-indigo-100 pt-3">SMILE 反思：這時期的我們是玩家，主動在 Facebook 尋找失散的老友。</p>
            </div>

            <div className="bg-slate-50 border-l-4 border-fuchsia-400 p-5 rounded-r-xl">
              <h4 className="font-bold text-fuchsia-900 text-lg mb-2">2. 2011-2016：平台轉變期</h4>
              <p className="text-slate-700 text-sm leading-relaxed mb-3"><strong>重點：LINE 和 Messenger 承載了真實的情感（客廳），而 IG 承載了華麗的人設，我們開始逐漸被社群媒體控制。</strong></p>
              <p className="text-slate-600 text-sm leading-relaxed italic border-t border-fuchsia-100 pt-3">SMILE 反思：身分表演開始精細化，出現網路明星、知名藝人紛紛創辦社群網站，無論是誰，幾乎都在學習如何切換不同角色。</p>
            </div>

            <div className="bg-slate-50 border-l-4 border-amber-400 p-5 rounded-r-xl">
              <h4 className="font-bold text-amber-900 text-lg mb-2">3. 2017-現在：工廠時代</h4>
              <p className="text-slate-700 text-sm leading-relaxed mb-3"><strong>重點：演算法分發。</strong></p>
              <p className="text-slate-600 text-sm leading-relaxed italic border-t border-amber-100 pt-3">SMILE 反思：當我們在 Reels 或 TikTok 滑個不停時，我們從「生活的主人」變成了提供數據的 NPC，我們正被演算法綁架，彷彿進入「工廠時代」。</p>
            </div>
          </div>

          <div className="my-14 p-8 bg-slate-900 rounded-2xl shadow-sm relative overflow-hidden">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2 relative z-10">
              <Globe2 className="text-indigo-400" size={20}/> 補充：六度分隔理論
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed relative z-10 text-justify">
              由美國社會學家 Stanley Milgram 於 1967 年提出。這個理論主張「即使是世上任何素不相識的兩個人，也能透過六個以內的中間人讓他們建立聯繫」。
            </p>
            <p className="text-slate-300 text-sm leading-relaxed relative z-10 text-justify mt-4">
              同時意味著，雖然人們的社交網絡常常看起來是天南地北、互不重疊的，不過在現今這個高度全球化且網際網路發達的時代裡，通過人際關係網絡的幫忙，就能產生一定的聯繫或是關係，也會因此發現每個人之間的距離其實並不遙遠。
            </p>
          </div>
        </>
      ),
      sidebarStats: {
        title: "社交斷代史觀測",
        points: [
          { label: "1997-2010 啟蒙時代", value: "玩家主動尋找連結" },
          { label: "2011-2016 轉變期", value: "身分表演精細化，多重角色切換" },
          { label: "2017-現在 工廠時代", value: "從生活主人變成演算法的 NPC" }
        ]
      }
    },
    {
      id: 2,
      vol: "Vol. 02",
      category: "身分與展演",
      title: "活在第三人稱的自己：社群時代的身分表演",
      iconName: "Users",
      imageUrl: "https://images.unsplash.com/photo-1618365908648-e71bd5716cba?auto=format&fit=crop&q=80&w=1200",
      imageAlt: "在霓虹光影與鏡頭前精心設計的自我，社群時代的虛擬身分展演",
      metrics: { views: "8.1M", retention: "92%", trigger: "Social_Validation" },
      summary: [
        "你發的不是內容，而是人設。社群讓每個人擅長經營「哪種真實值得被看見」。",
        "生活被附加了「展示價值」，原本第一人稱的人生，慢慢混入了第三人稱視角。",
        "最值得擔心的不是經營形象，而是我們是否在迎合外部評價中，成為了演算法的 NPC。"
      ],
      content: (
        <>
          <p className="lead text-xl text-indigo-900/80 font-medium mb-8 leading-relaxed">
            在社群時代，我們早就不只是單純地發照片、發限時、分享近況。更多時候，我們是在決定：我要成為哪一種被看見的人。你不是單純在發照片，你是在決定：我要看起來努力嗎？我要看起來鬆弛嗎？我要看起來很有品味，還是有點厭世比較酷？我要真的快樂，還是至少看起來過得不錯？
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-500 inline-block rounded-sm"></span>
            你以為你在分享，其實你在塑造
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            於是，你發的不是內容，而是人設。差別只在於，有些人設叫「精緻自律」，有些叫「隨性真實」，有些則高級到看起來毫不費力，但其實每張都精挑細選。社群最有趣的地方，不是讓人變虛假，而是讓每個人都越來越擅長經營「哪一種真實比較值得被看見」。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-500 inline-block rounded-sm"></span>
            從過生活，到讓生活看起來值得觀看
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            過去，生活比較像自己與世界的直接互動。今天吃了什麼、去了哪裡、心情如何，本質上是感受。但社群出現後，很多事情開始多了一層新問題：這值得發嗎？
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            於是，一頓飯不只是吃飯，可能是品味。一次旅行不只是出門，可能是生活方式。一次健身不只是運動，可能是自律證明。生活沒有消失，只是逐漸被附加了「展示價值」。我們開始不只是在活，也在同步思考：這樣活，看起來怎麼樣？原本是第一人稱的人生，慢慢混入第三人稱視角。你一邊生活，一邊觀看自己。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-500 inline-block rounded-sm"></span>
            真實，變成一種高級表演
          </h3>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            最弔詭的是，現在連「做自己」都可能是一種風格。看起來自然，可能是設計過的自然。看起來鬆弛，可能是精準挑選過的鬆弛。看起來不在乎，甚至可能是一種更高段的在乎。於是，身分表演不再只是刻意包裝，而是連真實本身，都可能被包裝成某種更容易被接受的樣子。這不是欺騙，而是一種時代下的生存反應。當每個人都可能被觀看，我們自然會開始思考：哪個版本的我，比較容易被理解？哪個版本的我，比較值得留下？
          </p>

          <div className="my-14 p-8 bg-indigo-50/50 border-l-4 border-indigo-500 rounded-r-2xl shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none"></div>
            <p className="text-2xl font-serif font-bold text-indigo-900 italic mb-6 leading-relaxed relative z-10">
              「真正值得擔心的，從來不是經營形象本身。而是我們是否在這個過程裡，慢慢失去作為『玩家』的主動性。」
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-500 inline-block rounded-sm"></span>
            玩家，還是 NPC？
          </h3>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            原本你應該是人生的玩家。你做選擇、你犯錯、你探索。但社群時代很容易讓人變成另一種狀態：你開始根據觀眾反應調整角色。這樣發比較討喜嗎？這樣說比較安全嗎？這樣的我，比較容易被喜歡嗎？於是，你不是停止活著，而是開始越來越像在操作一個「適合社群生存」的角色。你依然在線上，但某些時候，比起玩家，更像 NPC。不是沒有自我，而是太習慣照著外部機制修正自己。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-500 inline-block rounded-sm"></span>
            在被觀看的世界裡，還能不能做自己？
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            社群並沒有創造「在意他人眼光」這件事。人本來就會在意。但它確實把這件事放大了。放大到我們可能在每個瞬間都意識到：我正在被看。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            而當注意力長期停留在外部評價上，我們就容易忘記一件事——生活原本不是為了展示，而是為了經歷。所以，「社群時代的身分表演」真正要問的，不是人們有沒有在演。而是當演算法、觀看與評價無所不在時，我們是否還記得：自己不是為了符合人設而存在，而是那個真正握著搖桿、能決定自己怎麼活的人。
          </p>
        </>
      ),
      sidebarStats: {
        title: "社群時代的心理效應",
        points: [
          { label: "展示價值", value: "一頓飯不只是吃飯，可能是品味的證明" },
          { label: "高級真實", value: "連「做自己」與「鬆弛感」都可能是一種被包裝的風格" },
          { label: "NPC 化", value: "根據觀眾反應調整角色，失去作為玩家的主動性" }
        ]
      }
    },
    {
      id: 3,
      vol: "Vol. 03",
      category: "注意力經濟",
      title: "免費的社群，昂貴的注意力：平台真正販售的是什麼？",
      iconName: "Smartphone",
      imageUrl: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1200",
      imageAlt: "在黑暗中發光的智慧型手機螢幕，象徵無形的注意力收割",
      metrics: { views: "12.5M", retention: "98%", trigger: "Dopamine_Loop" },
      summary: [
        "社群平台並非慈善事業，我們沒有用金錢支付，而是用「注意力」作為交換的籌碼。",
        "演算法的核心目標不是推薦最重要的資訊，而是找出「最容易讓你停下來」的內容。",
        "如果你沒有付費，那你很可能不是顧客，而是產品的一部分，被整理、預測並變現。"
      ],
      content: (
        <>
          <p className="lead text-xl text-indigo-900/80 font-medium mb-8 leading-relaxed">
            我們常常以為，社群媒體最吸引人的地方，是它的免費。不用付月費，不用買門票，不用額外下載什麼昂貴服務，只要打開手機，就可以立刻看見朋友的生活、最新的迷因、短影片、熱門話題，還有一個彷彿永遠滑不完的世界。它太方便，也太自然了，自然到我們幾乎很少真正問過：既然我們沒有付錢，那平台到底靠什麼賺錢？
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            這個問題看起來很基本，卻也是整個社群平台最核心、最不願意被人仔細追問的地方。因為當一個服務龐大到足以支撐無數伺服器、工程師、廣告系統、內容推薦機制與全球使用者，它就不可能真的只是出於單純的分享理想而存在。平台當然不是慈善事業。它可以免費，不代表它沒有代價；很多時候，只是那個代價不是用金錢直接付，而是用另一種更不容易立刻察覺的方式慢慢交換出去。那個被交換的東西，往往就是我們的注意力。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-500 inline-block rounded-sm"></span>
            變成訊號的注意力
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            注意力這個詞，聽起來很抽象，好像只是「專心」或「看多久」而已。但在今天的社群平台裡，注意力早就不是單純的心理狀態，而是一種非常具體、可以被計算、分析、預測，甚至直接變現的資源。
          </p>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            你多看三秒，是資料。你停在某一則影片上沒有立刻滑掉，是資料。你點進某張照片、按了讚、重播一段內容、留言、收藏、轉發，甚至只是短暫猶豫要不要往下滑，對平台來說，這些都不是無意義的動作。它們都是訊號。它們在告訴平台：你對什麼有反應，你容易被什麼吸住，你願意把時間花在哪裡。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            而平台真正厲害的地方，就在於它不只是接收這些訊號，它還會立刻學習，然後用更精準的方式把更多相似內容送到你面前。所以你以為你只是在滑社群，但其實每滑一次，你都在幫平台做一件事：教它怎麼更懂你。懂你喜歡什麼，懂你討厭什麼，懂你對什麼上癮，懂你會在哪裡停下來，懂什麼樣的內容最有機會繼續把你留住。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-500 inline-block rounded-sm"></span>
            讓你留下來，是唯一的目標
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            這也是為什麼，今天的社群平台早就不只是「讓人交流的工具」。如果說早期的 Facebook、Instagram，核心還比較接近朋友間的連結與生活分享，那麼現在的社群平台，更像是一座精密運作的注意力工廠。它表面上讓你自由滑動、自由選擇、自由觀看，但在背後，整套系統其實都在朝一個很明確的方向運作：讓你留下來更久。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            因為只要你停留得夠久，平台就能塞進更多內容，也能安排更多廣告。你花在平台上的每一分鐘，對平台來說都不是空白時間，而是商業價值持續累積的時間。你以為你在消磨時間，平台卻在把這段時間換算成收益。所以，平台真正關心的，很多時候不是你有沒有看見朋友，不是你有沒有獲得更好的資訊，也不一定是你有沒有真的更快樂。它更在意的是：你有沒有停下來。你停了多久。你下一則會不會繼續看。你會不會不知覺再多留五分鐘、十分鐘、半小時。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-500 inline-block rounded-sm"></span>
            演算法的本質：抓住眼球
          </h3>
          
          {/* 第 3 篇引言 B：向右浮動的極輕量邊註 (Slim Side Note) */}
          <aside className="my-8 md:float-right md:w-64 md:ml-10 md:mb-6 border-t border-indigo-400/30 pt-4">
            <h4 className="text-indigo-400 font-mono text-[10px] tracking-[0.2em] uppercase mb-2 font-bold">平台比你更懂你停在哪裡</h4>
            <p className="text-slate-400 text-sm font-serif leading-relaxed text-justify m-0 italic">
              在碎片化的網路時代，越容易被消化的內容，就越容易被接受。相較於文字，聲音與影音更符合平台競逐注意力的需求，這也使內容型態與分發邏輯一併改變。
            </p>
          </aside>

          <p className="mb-6 text-justify leading-loose text-slate-700">
            而要做到這件事，平台需要的不只是內容，而是演算法。演算法本身，並不是一個帶有善惡的詞。它原本只是平台用來整理、篩選與推薦內容的方式。在內容量爆炸的時代，沒有演算法，社群平台幾乎也無法運作。問題不是演算法存在，而是它被放進了什麼樣的商業目標裡。
          </p>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            當平台的目標是提升使用者停留時間，演算法就不會只是單純幫你找到「最重要」的內容，而更可能是幫你找到「最容易讓你停下來」的內容。這兩者聽起來很像，實際上卻差很多。真正重要的內容，可能不一定刺激、不一定情緒強烈，也不一定讓人立刻想點開。但最容易讓人停下來的內容，往往有幾個明顯特徵：夠誇張、夠好看、夠激烈、夠情緒化、夠貼近慾望、夠容易引起比較、焦慮或憤怒。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            所以到最後，被優先放大的，未必是最有價值的內容，而是最能抓住人眼球的內容。這也是為什麼，我們現在滑社群時越來越容易有一種感覺：明明只是想放鬆一下，卻總是被一些特別強烈的東西吸住。不是因為我們真的主動去找那些內容，而是因為平台很清楚，那些內容更有機會讓人繼續看下去。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700 clear-both">
            從這個角度來看，社群平台真正販售的，從來不只是廣告版位，而是被整理過、預測過、切分過的使用者注意力。廣告主買的，不只是「一個地方可以放廣告」，而是「一群很可能會對這個東西有反應的人」。而平台之所以能把這件事做得越來越精準，就是因為它長期蒐集、分析、學習我們的行為。它知道誰會看什麼、誰對什麼敏感、誰在什麼時間最容易點開某種內容，甚至知道什麼樣的順序安排，最有可能提高一則貼文或一則廣告的效果。換句話說，平台真正厲害的商品，不是內容本身，而是它對人的掌握能力。
          </p>

          <div className="my-14 p-8 bg-indigo-50/50 border-l-4 border-indigo-500 rounded-r-2xl shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none"></div>
            <p className="text-2xl font-serif font-bold text-indigo-900 italic mb-6 leading-relaxed relative z-10">
              「如果你沒有付費，那你很可能不是顧客，而是產品的一部分。」
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-500 inline-block rounded-sm"></span>
            你以為你在選，其實是平台在幫你選
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            這句話並不表示使用者真的像商品一樣被單純賣掉。更準確地說，是使用者的行為、停留、偏好與注意力，被平台整理成有商業價值的資源，再出售給需要精準觸及受眾的市場。平台賣的不是你這個人本身，而是你可被預測、可被影響、可被轉化的那一部分。
          </p>

          {/* 插入專家引用 A：主引言 Pull Quote */}
          <blockquote className="my-16 py-10 border-y border-slate-700/50 text-center max-w-4xl mx-auto relative px-6 md:px-12">
            <div className="text-indigo-400 font-mono text-[10px] tracking-[0.3em] font-bold uppercase mb-6 flex justify-center items-center gap-3">
              千人千面
            </div>
            <p className="text-3xl md:text-4xl font-serif font-black text-white leading-[1.4] text-balance">
              「今天的平台不再是一對多的大眾媒體，而是進入一對一客製化的內容分發。表面上大家都在用同一個平台，實際上，每個人看到的都是不同版本的世界。」
            </p>
          </blockquote>

          <p className="mb-6 text-justify leading-loose text-slate-700">
            而最值得警覺的是，這整個過程常常進行得非常自然，甚至自然到讓人誤以為這只是單純的「個人喜好」。比如說，你可能原本只是多看了幾眼某種類型的內容，演算法很快就會記住。之後，你的推薦頁面開始越來越集中、越來越偏向某特定方向。你看得越多，它推得越多；它推得越多，你停留得也越久。久而久之，你會覺得，好像自己真的就只對這些東西有興趣，好像世界本來就長這樣。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            但事實上，那很可能只是平台一步一步把你推進一個更窄、更強化、更容易讓你停留的內容環境裡。於是，看起來像是你在選，其實很多時候，是平台在幫你把能選的東西變得越來越集中。看起來像是你主動喜歡某些內容，但在長時間的互動之後，也可能是平台持續放大那些內容，讓它們看起來比其他東西更重要、更值得看、更難忽略。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-500 inline-block rounded-sm"></span>
            參與世界建構的演算法
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            所以這篇真正想問的，不只是平台有沒有在推播內容，而是：當平台持續優化的是「怎麼讓你停更久」，它到底是在服務你，還是在訓練你？這個問題之所以重要，是因為它直接改變了社群媒體的本質。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            如果平台真的只是中立工具，那它做的事情應該比較像幫你連結朋友、整理資訊、協助交流。可一旦平台的核心邏輯變成「最大化停留時間」，那麼它對內容的排序、推薦、放大與壓縮，就不再只是技術問題，而是價值問題。它決定什麼值得被推到你眼前。它決定什麼樣的情緒更容易被放大。它決定什麼類型的人、什麼類型的生活、什麼類型的內容，比較容易佔據公共視野。而當這些決定大量發生時，平台就不再只是讓人看世界，而是開始參與「世界應該長什麼樣子」的建構。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            這也是為什麼，社群平台從來不只是科技產品那麼簡單。它同時也是一套文化系統、一套注意力分配系統，甚至是一套價值排序系統。它會讓某些東西一直被看見，某些東西越來越難被注意；會讓某些話題顯得特別重要，某些經驗顯得像不存在一樣。而我們每一次的停留、點擊與滑動，都在參與這套系統的運轉。也因此，社群的「免費」其實從來不是真的沒有代價。我們沒有用錢支付，但我們用時間支付；我們沒有明碼標價，但我們用習慣支付；我們沒有簽下一份看得見的契約，但我們把自己的注意力、偏好、情緒與行為痕跡，一點一點留在平台裡，讓它們變成一種可以被運算與變現的資產。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-500 inline-block rounded-sm"></span>
            平台不需要逼迫你，只需要夠懂你
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            而最複雜的地方就在這裡：平台不需要逼迫你，它只需要夠懂你。它不用命令你留下來，它只要把最可能讓你停下來的東西，剛剛好地送到你眼前。你不是被強迫，而是被精準地接住。可也正因為如此，這種影響才更難被察覺，也更難被抵抗。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            所以，今天當我們重新問「平台真正賣的是什麼」時，答案可能不只是廣告，也不只是數據。它真正賣的，是一種對人類注意力的掌握力；是一種能夠預測我們會看什麼、停多久、被什麼吸引、會不會被說服的能力。而當這種能力越來越強，平台就越不只是工具，而更像一個可以默默塑造我們觀看方式的系統。如果第四篇要談的是，社群如何影響我們看待自己，那麼第三篇更想先指出一件事：在我們開始懷疑自己之前，平台早就已經先學會怎麼抓住我們。它先抓住你的時間。再抓住你的目光。再抓住你的習慣。最後，連你以為是自己做出的選擇，也可能慢慢落在它設計好的軌道裡。
          </p>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            這並不是說使用者完全沒有主體性，也不是說每一次滑動都只是被動受控。但至少，我們應該開始承認：我們以為自己在使用平台的同時，平台也正在使用我們。它利用我們的反應優化自己，利用我們的停留壯大自己，利用我們的注意力換取收益，然後再用更成熟、更精密的方式，把我們留得更久。於是，問題就不再只是「為什麼我停不下來」，而是：到底是誰，把停不下來這件事設計得這麼自然？
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            這篇報導想留下的，不只是對平台的批判，而是一個更根本的提醒。我們今天所面對的社群平台，早已不是單純的交流場域。它是一套把注意力視為資源、把停留視為指標、把使用者行為視為可持續開採資料的商業系統。它之所以看起來如此貼近我們，不只是因為它懂科技，而是因為它越來越懂人。而也正因如此，我們才更需要回頭問：當平台比我們自己還清楚，什麼東西最能讓我們停下來時，我們到底還剩下多少主動權？
          </p>

          <div className="my-14 p-8 bg-indigo-50/50 border-l-4 border-indigo-500 rounded-r-2xl shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none"></div>
            <p className="text-2xl font-serif font-bold text-indigo-900 italic mb-6 leading-relaxed relative z-10">
              「社群平台表面上免費，真正昂貴的，從來都是我們交出去的注意力。」
            </p>
          </div>
        </>
      ),
      sidebarStats: {
        title: "注意力經濟的運作邏輯",
        points: [
          { label: "訊號捕捉", value: "每一次點擊、停留與猶豫，都在教平台如何更懂你" },
          { label: "停留指標", value: "平台的首要 KPI：你停了多久、會不會再多留五分鐘" },
          { label: "價值變現", value: "把你的偏好與情緒痕跡，轉化為可出售的商業資產" }
        ]
      }
    },
    {
      id: 4,
      vol: "Vol. 04",
      category: "數據與監控",
      title: "你以為你在看別人，其實你也在被定義",
      iconName: "Eye",
      imageUrl: "https://images.unsplash.com/photo-1541560052-5e137f229371?auto=format&fit=crop&q=80&w=1200", 
      imageAlt: "螢幕光反射在人類眼睛裡，象徵演算法背後的無形標籤與數位追蹤",
      metrics: { views: "9.3M", retention: "85%", trigger: "Filter_Bubble" },
      summary: [
        "社群媒體不只是一個觀看別人的地方，它逐漸變成了一個讓人反覆審視自己的地方。",
        "演算法根據我們的注意力與焦慮量身打造世界，讓外在價值標準顯得自然而然。",
        "奪回自主權的第一步，是認知到我們不該把別人的樣子直接當成定義自己的答案。"
      ],
      content: (
        <>
          <p className="lead text-xl text-indigo-900/80 font-medium mb-8 leading-relaxed">
            打開社群媒體，常常只是很普通的一個瞬間。可能是在等公車的時候，可能是在上課前的幾分鐘，也可能是在一天終於結束、躺到床上之後，想讓自己放空一下。手指往下滑，畫面一張一張掠過：有人去旅行、有人和朋友聚餐、有人剪了新髮型、有人開始健身、有人找到實習、有人發了一張看起來毫不費力卻又很好看的自拍。這些內容看起來都不特別沉重，甚至可以說再自然不過。它們像是一種陪伴，也像是一種生活裡的小小縫隙，讓人短暫逃離眼前的疲憊。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-500 inline-block rounded-sm"></span>
            被看見的片段，與被塑形的我們
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            我們以為自己只是在看別人。只是看別人的近況、別人的生活、別人的選擇，像是站在一個安全距離之外，靜靜地把別人的人生片段收進眼裡。可很多時候，事情沒有那麼簡單。因為當我們不斷看著別人的時候，我們其實也正在一點一點地，被那些畫面重新塑形。
          </p>
          
          {/* 插入專家引用 C：極輕量的向左浮動邊註 (Marginal Note) */}
          <aside className="my-6 md:float-left md:w-48 md:mr-10 md:mb-6 border-l-2 border-indigo-500/30 pl-4">
            <p className="text-slate-500 text-sm font-serif italic leading-relaxed m-0 text-left">
              平台推送的，不只是你想看的內容，也是在持續塑造你理解世界的方式。
            </p>
          </aside>

          <p className="mb-6 text-justify leading-loose text-slate-700">
            有些改變很明顯。比如你會突然開始在意自己的外表，開始覺得自己是不是不夠好看、不夠上鏡、不夠有魅力。有些改變卻很安靜，安靜到你幾乎不會發現。你只是慢慢開始覺得，自己的生活好像太普通了，自己的步調好像太慢了，自己的日常好像不夠值得被記錄，也不夠值得被看見。於是，社群媒體不只是一個讓人觀看別人的地方。它也逐漸變成了一個讓人開始反覆審視自己的地方。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700 clear-both">
            這是一種很微妙的經驗。你原本可能只是想放鬆，結果滑著滑著，心裡卻開始浮出一些說不太清楚的感覺。不是巨大的悲傷，也不是明確的痛苦，而是一種淡淡的失落、一點點不安，還有某種說不上來的空。你看見別人過得很精彩，看見別人總是有故事可以分享，有照片可以發，有值得被羨慕的時刻可以展示。然後你突然低頭看自己的生活，會忍不住想：為什麼我今天什麼都沒有？為什麼我好像沒有那麼多值得分享的東西？為什麼別人看起來都過得比我更像他們自己？
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-500 inline-block rounded-sm"></span>
            不完整的切片，與量身打造的焦慮
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            問題是，這些情緒並不是因為我們真的過得很差，而是因為我們越來越習慣，把自己的全部，拿去和別人被挑選過的片段相比。社群上的人生，本來就不是完整的人生。它更像是經過整理、篩選、修飾之後的版本。是最好看的照片、最值得紀念的瞬間、最成功的結果、最適合被放上版面的情緒。那些疲憊、混亂、停滯、失敗、自我懷疑，並不是不存在，而是很少出現在我們滑動的畫面裡。於是，一個人每天看到的，不是現實生活真正的樣子，而是一個個被修整成理想狀態的生活切片。
          </p>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            我們其實都知道這件事。我們知道照片會修，文案會想，限時動態只會挑最值得發的那幾秒。可即使如此，當這樣的內容一則一則、一天天地出現在眼前，人還是很難完全不受影響。理智上知道那不是全部，感受上卻還是會被拉走。最後，我們不一定真的相信別人的人生沒有痛苦，但我們會開始懷疑，為什麼自己的人生看起來沒有那麼好看。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            而更值得注意的是，社群媒體真正改變的，往往不只是我們看待別人的方式，而是我們看待自己的方式。今天的社群平台，早就不只是單純讓人和朋友保持聯絡的工具。它同時也是一套會不斷觀察你的系統。你停在哪一張照片比較久、你會點開什麼樣的影片、你對哪種內容特別容易有反應、你對什麼題材特別在意，平台都在記錄。然後，它再依照這些痕跡，把更多相似內容推回到你面前。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            如果你對身材內容停留比較久，它就讓你看到更多身材。如果你對成就感到敏感，它就給你更多成功故事。如果你對愛情、生活風格、外貌、金錢、旅行特別有反應，那麼你的世界就會越來越被這些畫面包圍。於是，你看到的，慢慢不再只是世界本來的樣子，而是平台替你組出來的樣子。一個根據你的注意力、你的欲望、你的焦慮、你的停留時間量身打造出來的世界。
          </p>

          <div className="my-14 p-8 bg-indigo-50/50 border-l-4 border-indigo-500 rounded-r-2xl shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none"></div>
            <p className="text-2xl font-serif font-bold text-indigo-900 italic mb-6 leading-relaxed relative z-10">
              「這件事最可怕的地方，不是它強迫你相信什麼，而是它會讓某些價值看起來像是自然而然的。」
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-500 inline-block rounded-sm"></span>
            交出定義權的我們
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            你不會突然聽見一個聲音對你說：你一定要更漂亮、更成功、更有魅力、更有故事。但你會在反覆的觀看之中，慢慢覺得：好像真的應該這樣。好像一個人如果沒有被看見，就不夠有存在感。好像生活如果沒有看起來很精彩，就不算真的過得好。好像人如果沒有持續進步、持續變美、持續證明自己，就會被落下。
          </p>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            這些標準，並不是某一天突然出現的。它們是在一次又一次的推播、推薦、停留與比較之中，被悄悄建立起來的。所以，社群真正影響的，從來不只是情緒，而是價值感本身。一個人怎麼認識自己，本來就不可能完全只從內心出發。人總是會受到他人眼光、社會期待與外外在環境影響。但社群平台讓這件事變得更密集、更直接，也更難逃。因為它不像過去的媒體，只是在固定時間播放某些內容；它是隨時都在、隨手可得，而且會根據你是誰，不斷調整它給你的東西。
          </p>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            也因此，我們現在面對的，不只是資訊太多，而是評價太多、標準太多、值得羨慕的模板太多。你一打開手機，就能看見無數種「比較好的生活」：比較好的外表、比較好的關係、比較好的工作、比較好的品味、比較好的日常。它們不一定真的屬於你，卻會在長久的接觸中，慢慢成為你拿來衡量自己的尺。久而久之，人會開始變得很辛苦。因為你不是活在自己的節奏裡，而是活在一個隨時都能看到別人進度條的環境裡。你不是單純在過生活，而是也在想，這樣的生活看起來夠不夠好。你不是只在感受自己，而是同時在想，別人會怎麼理解這樣的你。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            然後最疲憊的地方就來了：當一個人太習慣透過外界來確認自己，他就會慢慢失去用自己的感受理解自己的能力。這也是為什麼，很多人明明沒有發生什麼特別嚴重的事，卻總覺得很累。那種累，不一定是身體上的，而是一種持續被拉扯的消耗。你一邊知道社群上的東西不是真正的全部，一邊卻又忍不住受它影響；你一邊告訴自己不要比較，一邊卻還是會在深夜裡因為某張照片、某則貼文、某個別人的人生片段，而開始懷疑自己是不是不夠好。你沒有真的輸給誰，可是心裡卻一直有一種落後的感覺。你沒有真的缺少什麼，可是卻常常覺得自己好像少了點什麼。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-500 inline-block rounded-sm"></span>
            重新回到第一人稱
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            而這種感覺，很可能不是因為你真的不夠，而是因為你太常把自己放進一套不屬於你的標準裡。社群的厲害之處，不只是讓我們看到很多人，而是讓我們不知不覺把那些人變成參考答案。你開始覺得，某種身材才算理想，某種愛情才算幸福，某種工作才算有前途，某種生活方式才算值得嚮往。可問題是，這些東西原本未必是你真正想要的，它們只是因為被看得太多、被推得太頻繁，最後變成你以為自己也應該追求的東西。
          </p>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            到最後，我們甚至可能分不清楚：這真的是我想成為的樣子，還是只是我被看久了之後，以為自己想成為的樣子？從這個角度來看，社群媒體最深的影響，也許不是讓人分心，不是讓人上癮，甚至不只是讓人焦慮。而是它讓人慢慢活成一個適合被觀看的人。你會開始在意自己夠不夠值得發出去，夠不夠適合被看見，夠不夠符合某種社群語境下「有魅力」或「有價值」的樣子。你發一則限時動態，不只是分享，而是在測試別人的反應；你選一張照片，不只是記錄，而是在衡量什麼樣的自己比較能被接受。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            久而久之，我們不只是使用社群，而是也被社群訓練。訓練成一個知道怎麼展示自己、怎麼包裝自己、怎麼讓自己更像平台喜歡的樣子的人。那些不夠完整、不夠亮眼、不夠容易被理解的部分，就慢慢被收起來。不是因為它們不重要，而是因為它們不適合出現在這個系統裡。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            如果說前幾篇報導處理的是平台怎麼變、演算法怎麼運作，那麼這一篇更想追問的是：當這一切真正進到人的日常之後，最後被改變的，到底是什麼？也許答案不是我們的習慣，而是我們的自我認知。不是我們花了多少時間滑手機，而是我們越來越習慣，透過外界的標準理解自己。所以，這篇報導真正想談的，不只是大家都會說的社群焦慮。它更想談的是，在這個時代裡，我們怎麼一步一步把定義自己的權力交了出去。
          </p>

          <div className="my-14 p-8 bg-indigo-50/50 border-l-4 border-indigo-500 rounded-r-2xl shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none"></div>
            <p className="text-2xl font-serif font-bold text-indigo-900 italic mb-6 leading-relaxed relative z-10">
              「你以為你在看別人，其實你也在被定義。」
            </p>
          </div>

          <p className="mb-6 text-justify leading-loose text-slate-700">
            交給觀看數。交給按讚數。交給別人的反應。交給平台決定什麼應該被推到你眼前。也交給那一套看起來很自然、其實卻經過流量邏輯篩選過的價值系統。當一個人太常從別人的畫面裡理解自己，他就會越來越難回到自己的第一人稱。他看得到自己，卻不是從自己眼裡看；他感受得到生活，卻很難不先想到這樣的生活看起來怎麼樣。最後，連自我認同都不再是一件很內在的事，而像是被放在外面，等待別人與平台共同決定。
          </p>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            但這篇報導想留下的，不只是警告。因為真正重要的，也許不是完全離開社群，而是重新意識到，自己正在經歷什麼。當你開始知道，眼前這些內容不只是單純的資訊，而是一整套會塑造價值感、慾望與自我認識的機制時，你或許才有機會，把一部分主導權慢慢拿回來。
          </p>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            那個主導權，不一定是馬上戒掉社群，也不是假裝自己完全不受影響。而是多留下一點空間，問自己：<br/>
            我現在羨慕的，真的是我想要的嗎？<br/>
            我現在焦慮的，真的是我缺少的嗎？<br/>
            我現在覺得自己不夠好的原因，真的是來自自己，還是來自我一直活在別人的畫面裡？
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            也許只有當我們願意這樣反問，才有可能慢慢從第三人稱回到第一人稱。不是不再看別人，而是不再把別人的樣子，直接當成定義自己的答案。不是否定社群的存在，而是在這個充滿觀看的時代裡，努力保住一個還能由自己命名的自己。因為如果有一天，我們連看待自己的方式，都完全交給了平台與他人的眼光，那麼真正被奪走的，可能從來不只是注意力，而是我們定義自己的能力。
          </p>
        </>
      ),
      sidebarStats: {
        title: "被觀看與被定義",
        points: [
          { label: "比較陷阱", value: "把自己的全部，拿去和別人被挑選過的片段相比" },
          { label: "量身打造的焦慮", value: "平台記錄你的停留時間，推播放大的欲望與焦慮" },
          { label: "失去第一人稱", value: "習慣透過外界標準理解自己，交出定義自我的權力" }
        ]
      }
    },
    {
      id: 5,
      vol: "Vol. 05",
      category: "未來反思",
      title: "重新拿回第一人稱：如何不再只是演算法裡的 NPC？",
      iconName: "Compass",
      imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1200", 
      imageAlt: "放下手機，重新找回生活中的第一人稱視角，奪回注意力的掌控權",
      metrics: { views: "15.2M", retention: "99%", trigger: "Mindful_Choice" },
      summary: [
        "當我們為了「適合被觀看」而生活，我們正慢慢讓出主導權，成為演算法劇本裡的 NPC。",
        "社群媒體的數位平權帶來了比較心理的悖論，我們學會了社交技巧，卻忘了如何感受生活。",
        "重新拿回第一人稱，需要我們建立「不被觀看」的時刻，將社群媒體回歸為工具的本質。"
      ],
      content: (
        <>
          <p className="lead text-xl text-indigo-900/80 font-medium mb-8 leading-relaxed">
            在遊戲術語中，「NPC」是按照既定程式運行的配角。回望社群媒體的演化，當我們從「主動搜尋」資訊的 Yahoo 時代，進入到「被動餵食」流量的 TikTok 時代，我們與科技的關係發生了微妙的質變。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-500 inline-block rounded-sm"></span>
            演算法的「劇本」：我們何時變成了 NPC？
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            演算法不再只是幫你找朋友，它開始預測你的欲望、定義你的審美，甚至在你還沒意識到焦慮前，就先幫你推播了「別人過得比你好」的證明。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            當我們開始為了「適合被觀看」而調整生活腳本：去那間店是因為它好拍，出國旅行是為了那則限時動態，我們其實正慢慢讓出人生的主導權。我們活得越來越精緻，卻也越來越像演算法劇本裡的一個數據點——一個負責貢獻點擊與留存率的 NPC。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-500 inline-block rounded-sm"></span>
            數位平權的悖論：門檻降為零，濾鏡卻變厚
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            社群革命帶來的數位平權讓我們能突破地理限制與全世界連結，但這種便利也帶來了悖論。現在每個人都能隨手拍出「大片」，都能透過 AI 濾鏡獲得理想的外貌。然而，當數位技術讓每個人都能參與這場表演時，我們卻陷入了更深的比較心理。
          </p>
          <p className="mb-8 text-justify leading-loose text-slate-700">
            社群媒體原本的初衷是「建立連結」，現在卻成了「展示差異」的競技場。這種環境強迫我們學習如何修圖、如何撰寫有流量的文案，最後我們學會了所有社交技巧，卻忘了如何誠實地感受生活。我們在虛擬世界裡追求「讚」，卻在現實世界中感到貧瘠。
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-500 inline-block rounded-sm"></span>
            奪回主動權：從「被動刷新」到「主動關閉」
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            要如何重新拿回第一人稱？這是一場關於 Exploration（探索）的心態革命：
          </p>
          <ul className="space-y-6 mb-8 text-justify leading-loose text-slate-700 pl-2">
            <li className="flex items-start gap-3">
              <span className="font-bold text-indigo-500 mt-1">1.</span>
              <div>
                <strong>覺察演算法的界限：</strong><br/>意識到你看到的「動態牆」並非世界的全貌，而是一面根據你的偏好精密打造的鏡子。當你感到焦慮時，試著問自己：這真的是我想要的，還是演算法要我以為我想要的？
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-indigo-500 mt-1">2.</span>
              <div>
                <strong>建立「不被觀看」的時刻：</strong><br/>找回那些「不適合發動態」的瞬間。有些感動只需要留給當下的自己，而不是交給社群去評分。當你不再為了「被看見」而生活，你才真正開始生活。
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-indigo-500 mt-1">3.</span>
              <div>
                <strong>將社群媒體回歸「工具」本質：</strong><br/>重新審視那些追蹤名單。社交媒體應該是開啟視野的「工具」，而不是禁錮自我的圍牆。主動去搜尋你感興趣的知識，而不是等待演算法餵養。
              </div>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-indigo-500 inline-block rounded-sm"></span>
            在二進位世界裡，找回有溫度的自己
          </h3>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            這份專題報導從 1994 年的網頁起點出發，見證了人類社交本能被重新格式化的過程。科技本身沒有善惡，它只是人類本能的放大器。GUI 革命讓我們「看見」了世界，而社群革命讓我們「連結」了世界。
          </p>
          <p className="mb-6 text-justify leading-loose text-slate-700">
            現在，我們需要的不是拒絕科技，而是學會與它保持一段「清醒的距離」。下一次，當你下意識地打開社群軟體、準備刷新動態時，請先停下三秒鐘，問問鏡頭外的自己：現在的我，是這場演算法遊戲的主角，還是只是在配合演出的 NPC？
          </p>

          <div className="my-14 p-8 bg-indigo-50/50 border-l-4 border-indigo-500 rounded-r-2xl shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none"></div>
            <p className="text-2xl font-serif font-bold text-indigo-900 italic mb-6 leading-relaxed relative z-10">
              「重新拿回第一人稱，並不需要關掉所有帳號，而是要讓你的生活，再次大於你的社交媒體。這場安靜的革命，就在你決定放下手機、感受真實世界溫度的那個直覺瞬間開始。」
            </p>
          </div>
          
          {/* 第 5 篇引言 D：結尾收束引用 (End Note) */}
          <div className="mt-20 mb-12 py-12 border-t-2 border-b border-slate-200 max-w-2xl mx-auto flex flex-col items-center relative overflow-hidden">
            <div className="absolute -top-12 -left-12 opacity-5 text-indigo-500 pointer-events-none">
              <Quote size={200} />
            </div>
            <div className="text-indigo-600 font-mono text-[10px] tracking-[0.3em] uppercase mb-6 font-bold flex items-center gap-3">
              <span className="w-12 h-[1px] bg-indigo-300"></span>
              打破推薦的舒適圈
              <span className="w-12 h-[1px] bg-indigo-300"></span>
            </div>
            <p className="text-slate-800 font-serif text-lg md:text-xl leading-loose text-center m-0 text-balance relative z-10 font-bold italic">
              平台推薦雖然帶來方便，但副作用是資訊繭房。當系統不斷推送我們熟悉、偏好、會停留的內容時，我們接觸外部世界的方式，也會逐漸被收窄。真正重要的，也許不是拒絕使用平台，而是主動接觸不同觀點，重新把自己拉回更開放的世界。
            </p>
          </div>
        </>
      ),
      sidebarStats: {
        title: "奪回控制權的行動指南",
        points: [
          { label: "意識覺醒", value: "認知到自己正在被演算法引導情緒與時間" },
          { label: "主動選擇", value: "關閉無效推播，帶著明確目的使用科技工具" },
          { label: "真實體驗", value: "降低對第三人稱視角的依賴，專注當下感受" },
          { label: "科技定位", value: "讓手機退回工具的角色，而非生活的主宰" }
        ]
      }
    }
  ];

  // Helper function for icon rendering
  const getIcon = (name, size) => {
    switch (name) {
      case "Terminal": return <Terminal size={size} />;
      case "Cpu": return <Cpu size={size} />;
      case "TrendingUp": return <TrendingUp size={size} />;
      case "Globe2": return <Globe2 size={size} />;
      case "Sparkles": return <Sparkles size={size} />;
      case "Users": return <Users size={size} />;
      case "Smartphone": return <Smartphone size={size} />;
      case "Eye": return <Eye size={size} />;
      case "Compass": return <Compass size={size} />;
      default: return <BookOpen size={size} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-800 selection:bg-amber-200 selection:text-amber-900 pb-0 relative">
      
      {/* ==========================================
          頂部導覽列 (動態適應當前專題色系)
      ========================================== */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${((!socialMode && currentView === 0) || (socialMode && socialView === 0)) ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700' : 'bg-white border-b border-slate-200 shadow-sm'}`}>
        <div className="w-full px-6 md:px-12 py-4 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => {
              setCurrentView(0);
              setSocialMode(false);
              setSocialView(0);
            }}
          >
            {/* Logo 顏色切換：GUI 模式為琥珀色，Social 模式為靛藍色 */}
            <div className={`${((!socialMode && currentView === 0) || (socialMode && socialView === 0)) ? (socialMode ? 'text-indigo-400' : 'text-amber-400') : (socialMode ? 'text-indigo-600' : 'text-amber-500')} transition-colors`}>
              <Smile size={28} strokeWidth={2.5} />
            </div>
            <h1 className={`text-xl md:text-2xl font-black tracking-widest font-serif ${((!socialMode && currentView === 0) || (socialMode && socialView === 0)) ? 'text-white' : 'text-slate-900'}`}>
              SMILE <span className={`text-xs md:text-sm font-medium tracking-[0.3em] hidden sm:inline-block ml-2 border-l ${((!socialMode && currentView === 0) || (socialMode && socialView === 0)) ? 'border-slate-600 text-slate-400' : 'border-slate-300 text-slate-400'} pl-3`}>科技誌</span>
            </h1>
          </div>
          <div className="text-xs md:text-sm font-bold tracking-widest flex items-center gap-2 uppercase">
            {((!socialMode && currentView === 0) || (socialMode && socialView === 0)) ? (
              <span className={`hidden md:flex items-center gap-1.5 ${socialMode ? 'text-indigo-400/80' : 'text-amber-400/80'}`}>
                <Globe2 size={14} /> WORLD CLASS EDITORIAL
              </span>
            ) : (
              <button 
                onClick={() => {
                  if (socialMode) {
                    setSocialView(0);
                  } else {
                    setCurrentView(0);
                  }
                }}
                className="flex items-center gap-1.5 hover:bg-slate-50 transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 text-slate-600 shadow-sm"
              >
                <ArrowLeft size={14} /> 返回期數總覽
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ==========================================
          篇章一：GUI 革命 (完全獨立保留，不動舊邏輯與結構)
      ========================================== */}
      {!socialMode && (
        <>
          {currentView === 0 && (
            <main className="w-full animate-in fade-in duration-700">
              
              {/* GUI 滿版 Hero 視覺 */}
              <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
                  alt="Technology Background" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900"></div>
                
                <div className="relative z-10 w-full max-w-6xl px-6 md:px-12 text-center md:text-left flex flex-col md:flex-row items-center gap-12 mt-12">
                   <div className="md:w-3/5 text-left">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-bold tracking-[0.2em] mb-6">
                         <Sparkles size={12} />
                         SMILE MANIFESTO
                      </div>
                      <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-serif text-white leading-[1.1] mb-6 text-balance">
                        把複雜的科技，<br/>化為一個會心的微笑。
                      </h2>
                      <p className="text-base md:text-lg text-slate-300 font-light leading-relaxed max-w-2xl text-balance">
                        科技新聞往往充滿艱深的術語。但科技不只是冷冰冰的技術，它代表著創新與未來。我們希望透過輕鬆易懂的報導，將複雜轉化為理解的瞬間。
                      </p>
                   </div>
                   <div className="md:w-2/5 hidden md:flex justify-end opacity-20">
                      <Smile size={300} className="text-amber-500" strokeWidth={1} />
                   </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 flex flex-col items-center gap-2 animate-bounce cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                   <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Discover</span>
                   <ArrowDown size={16} />
                </div>
              </section>

              {/* S.M.I.L.E 核心價值 */}
              <section className="bg-slate-900 text-white border-y border-slate-800">
                 <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-800">
                     {[
                       { l: "S", w: "Science", desc: "深入科學底層原理" },
                       { l: "M", w: "Media", desc: "專業媒體轉化語言" },
                       { l: "I", w: "Innovation", desc: "洞悉創新商業動力" },
                       { l: "L", w: "Learning", desc: "消弭摩擦持續學習" },
                       { l: "E", w: "Exploration", desc: "無懼探索未知未來" }
                     ].map((item, i) => (
                       <div key={i} className="flex flex-col items-center pt-8 md:pt-0 group cursor-default">
                          <div className="text-3xl font-black text-slate-700 group-hover:text-amber-500 transition-colors duration-500 mb-2 font-serif">{item.l}</div>
                          <div className="text-sm font-bold tracking-widest text-slate-200 mb-1 uppercase">{item.w}</div>
                          <div className="text-xs text-slate-500 font-light">{item.desc}</div>
                       </div>
                     ))}
                 </div>
              </section>

              {/* 歷史時間軸 */}
              <section className="bg-white py-12 md:py-20 overflow-hidden relative border-b border-slate-100">
                 <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10 flex flex-col md:flex-row gap-10 md:gap-12">
                    
                    <div className="md:w-1/4">
                       <div className="sticky top-28">
                         <h3 className="text-[10px] font-bold tracking-[0.2em] text-amber-600 mb-3 uppercase flex items-center gap-1.5">
                           <Clock size={12} /> Timeline
                         </h3>
                         <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight font-serif mb-5">
                            人機互動<br/>半世紀狂想
                         </h2>
                         <div className="border-l-2 border-amber-500 pl-3">
                           <p className="text-slate-500 leading-relaxed text-xs md:text-sm">
                              從指令到 AI，一場跨越半世紀的介面接力。讓我們先鳥瞰這段人類讓機器「聽懂人話」的偉大歷史。
                           </p>
                         </div>
                       </div>
                    </div>

                    <div className="md:w-3/4">
                       <div className="border-l-2 border-slate-100 ml-3 md:ml-0 pl-6 md:pl-8 space-y-8 py-2">
                         {timelineData.map((item, idx) => (
                           <div key={idx} className="relative group flex flex-col md:flex-row md:items-start gap-1 md:gap-4">
                             
                             <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 text-[2.5rem] md:text-[3.5rem] font-black text-slate-200 opacity-80 z-0 font-serif pointer-events-none select-none tracking-tighter transition-transform group-hover:-translate-y-1 duration-300">
                               {item.year}
                             </div>
                             
                             <div className="relative z-10 w-full pt-1.5">
                               <div className="absolute w-2.5 h-2.5 bg-slate-200 rounded-full -left-[29px] md:-left-[37px] top-3 ring-4 ring-white shadow-sm group-hover:bg-amber-500 transition-colors"></div>
                               
                               <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1.5">
                                  <div className="flex items-center gap-2">
                                      <span className="font-black text-amber-600/90 font-serif text-lg md:text-xl tracking-tight leading-none">{item.year}</span>
                                      <span className="bg-slate-50 text-slate-500 px-1.5 py-0.5 text-[9px] font-bold tracking-widest uppercase rounded-sm border border-slate-200 group-hover:bg-amber-50 group-hover:text-amber-700 transition-colors shadow-sm">
                                        {item.tag}
                                      </span>
                                  </div>
                                  <h4 className="text-sm md:text-base font-bold text-slate-900 font-serif group-hover:text-amber-600 transition-colors ml-0 md:ml-1 leading-snug">
                                    {item.title}
                                  </h4>
                               </div>
                               
                               <p className="text-slate-600 text-xs md:text-sm leading-relaxed max-w-2xl">
                                 {item.desc}
                               </p>
                             </div>
                           </div>
                         ))}
                       </div>
                    </div>
                 </div>
              </section>

              {/* GUI 影片導覽區塊 (Editorial Video Section) */}
              <VideoEmbed />

              {/* GUI 專題文章網格 */}
              <section className="bg-[#F8F9FA] py-20 md:py-28 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                  <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                      <div className="text-amber-600 font-bold tracking-[0.2em] text-xs mb-3 flex items-center gap-2 uppercase">
                        <BookOpen size={14} /> Featured Series
                      </div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 font-serif">
                        GUI 革命：滑鼠與視窗如何改變世界
                      </h2>
                    </div>
                    <p className="text-slate-500 font-medium text-xs md:text-sm text-left md:text-right max-w-xs">
                      全系列共 5 期深度長篇，帶您解構科技史上最偉大的人機互動革命。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
                    {seriesData.map((issue, index) => (
                      <div 
                        key={issue.id} 
                        onClick={() => setCurrentView(issue.id)}
                        className={`bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 cursor-pointer flex flex-col group rounded-xl overflow-hidden ${index === 0 ? 'md:col-span-2 md:flex-row' : ''}`}
                      >
                        <div className={`relative overflow-hidden bg-slate-900 ${index === 0 ? 'md:w-1/2 h-64 md:h-auto' : 'h-48 w-full'}`}>
                          {issue.imageUrl ? (
                            <img 
                              src={issue.imageUrl} 
                              alt={issue.imageAlt} 
                              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
                              onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200'; }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center"><ImageIcon size={40} className="text-slate-600" /></div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
                          <div className="absolute top-5 left-5">
                             <span className="bg-amber-500 text-white px-2.5 py-1 rounded-sm font-bold tracking-widest text-[9px] uppercase shadow-sm">
                               {issue.category}
                             </span>
                          </div>
                        </div>
                        
                        <div className={`p-6 md:p-8 flex flex-col justify-center ${index === 0 ? 'md:w-1/2' : 'w-full'}`}>
                          <div className="text-[9px] font-bold text-slate-400 mb-2 tracking-[0.2em] uppercase flex items-center gap-1.5">
                            {issue.icon} {issue.vol}
                          </div>
                          <h3 className={`font-bold text-slate-900 leading-snug group-hover:text-amber-600 transition-colors mb-3 font-serif ${index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                            {issue.title}
                          </h3>
                          <p className="text-xs md:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-6">
                            {issue.summary[0]} {issue.summary[1]}
                          </p>
                          
                          <div className="mt-auto flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-amber-600 uppercase group-hover:text-amber-700">
                            <span>閱讀專文</span>
                            <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 外掛式入口：引導至第二篇章社群平台 */}
              <section className="bg-gradient-to-b from-[#F8F9FA] to-slate-100 py-20 md:py-28 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-6 text-center">
                  <div className="text-indigo-600 font-bold tracking-[0.2em] text-xs mb-4 flex items-center justify-center gap-2 uppercase">
                    <Sparkles size={14} /> New Series
                  </div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-slate-900 font-serif mb-6">
                    SMILE 專題二部曲：<br/>社群平台與注意力經濟
                  </h2>
                  <p className="text-slate-600 text-base md:text-lg mb-10 leading-relaxed">
                    當演算法接管了資訊的分發權，我們該如何重新奪回生活的第一人稱視角？<br className="hidden md:block"/>探索科技如何深刻地重塑我們的社交與自我認知。
                  </p>
                  <button 
                    onClick={() => {
                      setSocialMode(true);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-3 bg-slate-900 text-white hover:bg-indigo-600 px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-slate-900/10 text-sm md:text-base hover:-translate-y-1"
                  >
                    進入全新篇章 <ChevronRight size={18} />
                  </button>
                </div>
              </section>

            </main>
          )}

          {/* GUI 單期閱讀頁 */}
          {currentView > 0 && (
            <main className="max-w-6xl mx-auto px-6 pt-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 mb-6 uppercase tracking-widest">
                <span className="cursor-pointer hover:text-amber-600 transition-colors" onClick={() => setCurrentView(0)}>SMILE 系列專題</span>
                <ChevronRight size={10} />
                <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded-sm">{seriesData[currentView - 1].category}</span>
              </div>

              <div className="mb-10 pb-8 border-b border-slate-200">
                <div className="text-amber-600 font-bold tracking-widest text-xs mb-4 flex items-center gap-2 uppercase">
                  <div className="bg-amber-100 p-1.5 rounded-sm text-amber-600 shadow-sm">{seriesData[currentView - 1].icon}</div>
                  {seriesData[currentView - 1].vol}
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-slate-900 font-serif mb-8 max-w-4xl">
                  {seriesData[currentView - 1].title}
                </h2>
                
                <div className="w-full aspect-[16/9] md:aspect-[2.5/1] bg-slate-900 overflow-hidden relative shadow-sm border border-slate-200 rounded-xl">
                  {seriesData[currentView - 1].imageUrl ? (
                    <img 
                      src={seriesData[currentView - 1].imageUrl} 
                      alt={seriesData[currentView - 1].imageAlt}
                      className="w-full h-full object-cover object-center opacity-90"
                      onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200'; }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center"><ImageIcon size={40} className="text-slate-600" /></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-6 md:p-8">
                    <span className="text-white/90 font-medium text-sm md:text-base drop-shadow-md border-l-2 border-amber-500 pl-3">
                      {seriesData[currentView - 1].imageAlt}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-10">
                
                <div className="lg:w-2/3">
                  <div className="bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-xl p-6 md:p-8 mb-12 relative overflow-hidden shadow-sm">
                    <div className="absolute -top-2 -right-2 p-2 opacity-5 text-amber-900 pointer-events-none">
                      <Smile size={100} />
                    </div>
                    <h3 className="text-base md:text-lg font-bold mb-4 flex items-center gap-2 text-amber-800 relative z-10 border-b border-amber-200/50 pb-3">
                      <Lightbulb className="text-amber-500" size={18} /> SMILE 導讀：三分鐘原來如此
                    </h3>
                    <ul className="space-y-3 relative z-10">
                      {seriesData[currentView - 1].summary.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="text-amber-500 shrink-0 mt-0.5" size={16} />
                          <span className="text-slate-700 leading-relaxed text-sm md:text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <article className="prose prose-base md:prose-lg text-slate-700 max-w-none mb-16 font-serif">
                    {seriesData[currentView - 1].content}
                  </article>

                  <div className="flex flex-col sm:flex-row justify-between items-center bg-slate-50 p-5 border border-slate-200 gap-4 rounded-xl">
                    {currentView > 1 ? (
                      <button 
                        onClick={() => setCurrentView(currentView - 1)}
                        className="flex items-center gap-2 text-slate-500 hover:text-amber-600 font-bold transition-colors w-full sm:w-auto justify-center text-xs md:text-sm bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-sm tracking-widest"
                      >
                        <ArrowLeft size={14} /> 上一篇
                      </button>
                    ) : <div className="hidden sm:block"></div>}
                    
                    {currentView < seriesData.length ? (
                      <button 
                        onClick={() => setCurrentView(currentView + 1)}
                        className="flex items-center gap-2 bg-slate-900 text-white hover:bg-amber-500 px-5 py-2.5 rounded-full font-bold transition-all shadow-sm w-full sm:w-auto justify-center text-xs md:text-sm tracking-widest"
                      >
                        下一篇：{seriesData[currentView].category} <ChevronRight size={14} />
                      </button>
                    ) : (
                      <button 
                        onClick={() => setCurrentView(0)}
                        className="flex items-center gap-2 bg-amber-500 text-white hover:bg-amber-600 px-5 py-2.5 rounded-full font-bold transition-all shadow-sm w-full sm:w-auto justify-center text-xs md:text-sm tracking-widest"
                      >
                        回到首頁 <Smile size={14} />
                      </button>
                    )}
                  </div>
                </div>

                <aside className="lg:w-1/3">
                  <div className="bg-white p-6 md:p-8 shadow-sm border border-slate-200 sticky top-24 rounded-xl">
                    <div className="flex items-center gap-2 text-amber-600 font-bold text-[9px] tracking-[0.2em] uppercase mb-4 border-b border-slate-100 pb-3">
                      <Sparkles size={12} /> SMILE 觀點解析
                    </div>
                    <h4 className="font-bold text-lg md:text-xl mb-6 leading-snug font-serif text-slate-900">
                      {seriesData[currentView - 1].sidebarStats.title}
                    </h4>
                    
                    <div className="space-y-5 text-sm">
                      {seriesData[currentView - 1].sidebarStats.points.map((point, idx) => (
                        <div key={idx} className="border-b border-slate-50 pb-4 last:border-0 last:pb-0">
                          <div className="text-slate-400 mb-1 flex items-center gap-1.5 text-[9px] tracking-[0.1em] uppercase font-bold">
                            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                            {point.label}
                          </div>
                          <div className="font-medium text-sm md:text-base text-slate-800 leading-snug pl-3">
                            {point.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-5 border-t border-slate-100 text-center">
                      <Smile size={20} className="text-amber-300 mx-auto mb-2" />
                      <p className="text-[10px] md:text-xs text-slate-400 leading-relaxed italic">
                        「在歷史脈絡中，看見科技改變生活的軌跡。」
                      </p>
                    </div>
                  </div>
                </aside>

              </div>
            </main>
          )}
        </>
      )}

      {/* ==========================================
          篇章二：社群平台與注意力經濟 (全新差異化視覺：Feed / 訊號 / 數位感)
      ========================================== */}
      {socialMode && (
        <>
          {socialView === 0 && (
            <main className="w-full animate-in fade-in duration-700">
              
              {/* Social 滿版 Hero 視覺：演算法與凝視感 */}
              <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950">
                <img 
                  src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=2000" 
                  alt="Social Media Technology" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-slate-900/70 to-slate-950/90"></div>
                
                {/* 裝飾性演算標籤 */}
                <div className="absolute top-1/4 left-1/4 text-indigo-500/30 font-mono text-xs animate-pulse hidden md:block select-none pointer-events-none">[USER_ID: 94827_TRACKED]</div>
                <div className="absolute bottom-1/3 right-1/4 text-cyan-500/20 font-mono text-xs blur-[1px] hidden md:block select-none pointer-events-none">{`{feed_status: "infinite_scroll"}`}</div>

                <div className="relative z-10 w-full max-w-6xl px-6 md:px-12 text-center md:text-left flex flex-col md:flex-row items-center gap-12 mt-12">
                   <div className="md:w-3/5 text-left">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-xs font-bold tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                         <ShieldAlert size={12} />
                         SMILE CHAPTER 02
                      </div>
                      <h2 className="text-4xl md:text-6xl lg:text-7xl font-black font-sans tracking-tight text-white leading-[1.1] mb-6 text-balance drop-shadow-lg">
                        社群平台：<br/>注意力經濟與身分焦慮
                      </h2>
                      <p className="text-base md:text-lg text-indigo-100/70 font-light leading-relaxed max-w-2xl text-balance">
                        我們以為自己在使用平台，其實是平台在決定我們看見什麼。當演算法接管了資訊的分發權，我們該如何重新奪回生活的第一人稱視角？
                      </p>
                   </div>
                   <div className="md:w-2/5 hidden md:flex justify-end opacity-40">
                      <Smartphone size={300} className="text-indigo-500" strokeWidth={1} />
                   </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 flex flex-col items-center gap-2 animate-bounce cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                   <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-indigo-400">Explore Feed</span>
                   <ArrowDown size={16} className="text-indigo-400" />
                </div>
              </section>

              {/* === 社群動態牆式影片嵌入區塊 === */}
              <SocialVideoEmbed />

              {/* 專題文章網格 (改版為: 1 主卡 + 側邊推薦 Feed 結構) */}
              <section className="bg-slate-50 py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-6 md:px-12">

                  <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-indigo-100 pb-6">
                    <div>
                      <div className="text-indigo-600 font-bold tracking-[0.2em] text-xs mb-3 flex items-center gap-2 uppercase font-mono">
                        <Activity size={14} className="text-fuchsia-500" /> ALGORITHM FEED
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black leading-tight text-slate-900 font-sans tracking-tight">
                        為你推薦：被演算法重塑的世界
                      </h2>
                    </div>
                    <p className="text-indigo-900/50 font-mono text-[10px] text-left md:text-right uppercase tracking-[0.2em]">
                      [ 5 Items Loaded_ ]
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                    
                    {/* 左側大主卡 (第一期) */}
                    <div className="lg:col-span-8">
                       <div 
                         onClick={() => setSocialView(socialSeriesData[0].id)}
                         className="bg-white border border-indigo-100 hover:border-indigo-400/50 shadow-sm hover:shadow-[0_12px_40px_rgba(79,70,229,0.15)] transition-all duration-500 cursor-pointer flex flex-col group rounded-2xl overflow-hidden h-full"
                       >
                         <div className="relative overflow-hidden bg-slate-900 h-72 md:h-96 w-full">
                           <img 
                             src={socialSeriesData[0].imageUrl} 
                             alt={socialSeriesData[0].imageAlt} 
                             className="w-full h-full object-cover opacity-70 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-1000 group-hover:scale-105" 
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-900/20 to-transparent opacity-80"></div>
                           
                           {/* 懸浮數據標籤 */}
                           <div className="absolute top-6 left-6 flex gap-2">
                              <span className="bg-indigo-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded text-[10px] font-mono tracking-widest uppercase shadow-md flex items-center gap-1.5">
                                <ScanLine size={12} /> {socialSeriesData[0].category}
                              </span>
                           </div>
                           <div className="absolute bottom-6 right-6 flex gap-3 text-indigo-200/80 font-mono text-[10px]">
                              <span className="flex items-center gap-1"><Eye size={12}/> {socialSeriesData[0].metrics.views}</span>
                              <span className="flex items-center gap-1"><TrendingUp size={12}/> {socialSeriesData[0].metrics.retention}</span>
                           </div>
                         </div>
                         
                         <div className="p-8 md:p-10 flex flex-col justify-center flex-1">
                           <div className="text-[10px] font-bold text-indigo-400 mb-3 tracking-[0.2em] uppercase flex items-center gap-1.5 font-mono">
                             {getIcon(socialSeriesData[0].iconName, 14)} {socialSeriesData[0].vol}
                           </div>
                           <h3 className="font-black text-slate-900 tracking-tight leading-snug group-hover:text-indigo-600 transition-colors mb-4 text-3xl md:text-4xl">
                             {socialSeriesData[0].title}
                           </h3>
                           <p className="text-sm text-slate-500 leading-relaxed mb-8">
                             {socialSeriesData[0].summary[0]} {socialSeriesData[0].summary[1]}
                           </p>
                           
                           <div className="mt-auto flex items-center gap-1.5 text-[11px] font-bold tracking-widest text-indigo-500 uppercase group-hover:text-indigo-600 bg-indigo-50 w-fit px-4 py-2 rounded-full">
                             <span>進入閱讀</span>
                             <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                           </div>
                         </div>
                       </div>
                    </div>

                    {/* 右側資訊流卡片 (第 2-5 期) */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                       <h3 className="text-xs font-mono text-slate-400 uppercase tracking-[0.2em] mb-2 hidden lg:block">Up Next_</h3>
                       {socialSeriesData.slice(1).map((issue) => (
                         <div 
                           key={issue.id} 
                           onClick={() => setSocialView(issue.id)}
                           className="bg-white border border-indigo-50/50 hover:border-indigo-300 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-row group rounded-xl overflow-hidden h-36"
                         >
                           <div className="w-1/3 relative overflow-hidden bg-slate-900 border-r border-indigo-50">
                             <img 
                               src={issue.imageUrl} 
                               alt={issue.imageAlt} 
                               className="w-full h-full object-cover opacity-60 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-110" 
                             />
                           </div>
                           <div className="w-2/3 p-5 flex flex-col justify-center relative">
                             {/* 背景點綴 */}
                             <div className="absolute top-0 right-0 p-2 opacity-5 text-indigo-900"><Hash size={40}/></div>
                             
                             <div className="text-[8px] font-bold text-indigo-400 mb-1.5 tracking-[0.2em] uppercase font-mono truncate">
                               {issue.category}
                             </div>
                             <h3 className="font-bold text-slate-800 leading-snug group-hover:text-indigo-600 transition-colors text-sm line-clamp-3 mb-2">
                               {issue.title}
                             </h3>
                             <div className="mt-auto text-[9px] text-slate-400 font-mono flex items-center gap-1.5">
                               <MousePointer2 size={10} className="group-hover:text-indigo-500 transition-colors" /> Click to open
                             </div>
                           </div>
                         </div>
                       ))}
                    </div>

                  </div>

                </div>
              </section>

              {/* 首頁：專家特訪精修版 (Editorial Framework) */}
              <section className="bg-white py-16 md:py-24 border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-20">
                  <div className="lg:w-1/2 flex flex-col justify-start">
                    <div className="text-indigo-400 font-mono text-[10px] tracking-[0.3em] font-bold uppercase mb-6 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> 專家視角 / Expert Perspective
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight font-serif mb-6">
                      王志仁觀察：<br/><span className="text-indigo-600 text-2xl md:text-4xl mt-3 block font-serif">平台正在把每個人推向不同版本的世界</span>
                    </h3>
                    
                    {/* 人物介紹 - Byline style */}
                    <div className="pl-4 border-l-2 border-indigo-500 mb-8">
                      <p className="text-slate-600 font-sans text-sm leading-relaxed">
                        <strong className="text-slate-800">王志仁</strong>，現任《數位時代》總編輯，長期關注科技產業、平台變遷與數位媒體發展。從網路時代、行動時代到 AI 時代，他持續觀察科技如何改變內容分發、使用者行為與人們理解世界的方式。
                      </p>
                    </div>

                    <p className="text-slate-700 leading-relaxed font-serif text-lg text-justify">
                      今天的平台早已不只是提供內容的工具，而是一套會分析使用者、分發內容、放大偏好，並逐漸改變人們觀看世界方式的系統。當每個人都被推向不同版本的資訊環境時，我們看到的，不一定只是世界本身，也可能是平台替我們篩選過的世界。
                    </p>
                  </div>

                  {/* 三個觀點 - Editorial notes style (not cards) */}
                  <div className="lg:w-1/2 flex flex-col gap-8 md:pt-4">
                    <div className="border-t border-slate-300 pt-5">
                      <div className="text-indigo-600 font-mono text-[10px] font-bold mb-3 tracking-widest uppercase">01 —</div>
                      <h4 className="text-slate-900 font-bold text-xl mb-3 font-serif">大平台只會更大</h4>
                      <p className="text-slate-600 text-sm leading-relaxed text-justify">如果只靠市場力量發展，社群平台往往會走向大者恆大。大型科技公司會透過收購、投資，把潛在競爭者提早納入版圖，平台集中化因此愈發明顯。</p>
                    </div>
                    <div className="border-t border-slate-300 pt-5">
                      <div className="text-indigo-600 font-mono text-[10px] font-bold mb-3 tracking-widest uppercase">02 —</div>
                      <h4 className="text-slate-900 font-bold text-xl mb-3 font-serif">千人千面已成為內容分發常態</h4>
                      <p className="text-slate-600 text-sm leading-relaxed text-justify">今天的平台不再是一對多的大眾媒體，而是透過使用者行為分析，進入一對一客製化的內容分發。表面上大家都在用同一個平台，但實際上，每個人看到的都是不同版本的世界。</p>
                    </div>
                    <div className="border-t border-slate-300 pt-5">
                      <div className="text-indigo-600 font-mono text-[10px] font-bold mb-3 tracking-widest uppercase">03 —</div>
                      <h4 className="text-slate-900 font-bold text-xl mb-3 font-serif">推薦越方便，資訊繭房越明顯</h4>
                      <p className="text-slate-600 text-sm leading-relaxed text-justify">平台推薦雖然提供了效率與便利，卻也可能把使用者包進資訊繭房之中。當系統不斷推送我們熟悉、偏好、會停留的內容時，我們接觸外部世界的方式，也會逐漸被收窄。</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 返回 GUI 專題入口 */}
              <section className="bg-indigo-950 py-16 md:py-20 border-t border-indigo-900">
                <div className="max-w-4xl mx-auto px-6 text-center">
                  <h2 className="text-xl md:text-2xl font-bold text-indigo-200 font-serif mb-6">
                    想切換回理性的歷史視角嗎？
                  </h2>
                  <button 
                    onClick={() => {
                      setSocialMode(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 bg-indigo-600 text-white hover:bg-indigo-500 px-6 py-3 rounded-full font-bold transition-all shadow-md text-sm hover:-translate-y-1"
                  >
                    返回 GUI 革命專題 <ArrowLeft size={16} />
                  </button>
                </div>
              </section>
            </main>
          )}

          {/* 社群 單期閱讀頁 */}
          {socialView > 0 && (
            <main className="w-full bg-white pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* 社群平台文章專屬 Hero (全滿版，數據覆蓋感) */}
              <div className="relative w-full h-[65vh] md:h-[75vh] bg-slate-950 flex flex-col justify-end pb-12 md:pb-16 border-b-4 border-indigo-500">
                <img 
                  src={socialSeriesData[socialView - 1].imageUrl} 
                  alt={socialSeriesData[socialView - 1].imageAlt}
                  className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent z-10"></div>
                
                {/* 網格背景點綴 */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] z-10 pointer-events-none"></div>

                <div className="relative z-20 w-full max-w-4xl mx-auto px-6">
                  {/* Signal Strip */}
                  <div className="flex flex-wrap gap-4 mb-6">
                     <span className="inline-flex items-center gap-1.5 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-1 rounded text-[10px] font-mono tracking-widest uppercase">
                       <ScanLine size={12} /> {socialSeriesData[socialView - 1].category}
                     </span>
                     <span className="inline-flex items-center gap-1.5 bg-slate-800/50 text-slate-300 border border-slate-700 px-2 py-1 rounded text-[10px] font-mono tracking-widest uppercase">
                       ID: {socialSeriesData[socialView - 1].vol}
                     </span>
                     <span className="inline-flex items-center gap-1.5 bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20 px-2 py-1 rounded text-[10px] font-mono tracking-widest uppercase hidden sm:inline-flex">
                       TRIGGER: {socialSeriesData[socialView - 1].metrics.trigger}
                     </span>
                  </div>

                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight font-sans tracking-tight drop-shadow-lg mb-6">
                    {socialSeriesData[socialView - 1].title}
                  </h1>

                  <div className="flex items-center gap-6 text-[10px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5"><Eye size={14} className="text-indigo-400"/> VIEWS_ {socialSeriesData[socialView - 1].metrics.views}</span>
                    <span className="flex items-center gap-1.5"><Activity size={14} className="text-fuchsia-400"/> RETENTION_ {socialSeriesData[socialView - 1].metrics.retention}</span>
                  </div>
                </div>
              </div>

              {/* 正文區塊 (單欄沉浸式配置，打破雙欄) */}
              <div className="w-full max-w-3xl mx-auto px-6 pt-12 md:pt-16">
                
                {/* 導航麵包屑 */}
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 mb-10 uppercase tracking-widest font-mono">
                  <span className="cursor-pointer hover:text-indigo-500 transition-colors" onClick={() => setSocialView(0)}>RETURN_HOME</span>
                  <span className="text-slate-300">/</span>
                  <span className="text-indigo-500">{socialSeriesData[socialView - 1].vol}</span>
                </div>

                {/* 橫向專題解析區塊 (修改為報刊編輯欄目語氣) */}
                <div className="mb-14 p-6 md:p-8 bg-slate-900 rounded-2xl shadow-[0_8px_30px_rgba(99,102,241,0.1)] border border-indigo-900/50 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 p-4 opacity-[0.02] text-white"><Hash size={200}/></div>
                  <div className="flex items-center gap-3 mb-6 border-b border-indigo-900/50 pb-4 relative z-10">
                    <span className="flex items-center gap-1.5 text-indigo-400 font-mono text-[10px] tracking-[0.2em] uppercase bg-indigo-950/80 px-2.5 py-1 rounded border border-indigo-800/50">
                      <Eye size={12} /> Platform Effects
                    </span>
                    <span className="text-slate-300 font-bold text-xs tracking-widest">
                      演算法下的心理效應
                    </span>
                  </div>
                  <h4 className="font-bold text-lg text-slate-100 mb-6 font-serif relative z-10">
                    {socialSeriesData[socialView - 1].sidebarStats.title}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                    {socialSeriesData[socialView - 1].sidebarStats.points.map((point, idx) => (
                      <div key={idx} className="bg-slate-800/40 p-5 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
                        <div className="text-indigo-300 mb-2 text-[11px] tracking-widest uppercase font-bold flex items-center gap-2">
                          <span className="w-1 h-1 bg-indigo-400 rounded-full"></span>
                          {point.label}
                        </div>
                        <div className="font-medium text-sm md:text-base text-slate-200 leading-snug">
                          {point.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 系統摘要區塊 */}
                <div className="mb-12 border-l-4 border-indigo-500 pl-6 py-2">
                  <h3 className="text-[10px] font-mono text-indigo-500 tracking-[0.2em] uppercase mb-4 font-bold">
                    [ SYSTEM_SUMMARY_GENERATED ]
                  </h3>
                  <ul className="space-y-3">
                    {socialSeriesData[socialView - 1].summary.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ChevronRight className="text-indigo-300 shrink-0 mt-0.5" size={16} />
                        <span className="text-slate-700 leading-relaxed text-sm md:text-base font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 實際正文 */}
                <article className="prose prose-base md:prose-lg prose-indigo text-slate-700 max-w-none font-serif mb-20 relative clear-both overflow-hidden overflow-visible">
                  {socialSeriesData[socialView - 1].content}
                </article>

                {/* 底部導航 (社群 Feed 風格) */}
                <div className="mt-16 pt-10 border-t border-dashed border-slate-300 flex flex-col items-center gap-6 clear-both">
                  <div className="text-[10px] font-mono text-slate-400 tracking-[0.2em] uppercase">
                    --- End of Session ---
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
                    {socialView > 1 && (
                      <button 
                        onClick={() => setSocialView(socialView - 1)}
                        className="flex-1 max-w-xs flex items-center justify-center gap-2 text-slate-500 hover:text-indigo-600 font-bold transition-colors text-xs bg-white px-6 py-4 rounded-xl border border-slate-200 shadow-sm uppercase tracking-widest font-mono"
                      >
                        <ArrowLeft size={14} /> 向上滑動
                      </button>
                    )}
                    
                    {socialView < socialSeriesData.length ? (
                      <button 
                        onClick={() => setSocialView(socialView + 1)}
                        className="flex-1 max-w-xs flex items-center justify-center gap-2 bg-indigo-600 text-white hover:bg-indigo-500 px-6 py-4 rounded-xl font-bold transition-all shadow-md text-xs uppercase tracking-widest font-mono hover:-translate-y-1"
                      >
                        繼續滑動 (Next) <ArrowDown size={14} className="animate-bounce" />
                      </button>
                    ) : (
                      <button 
                        onClick={() => setSocialView(0)}
                        className="flex-1 max-w-xs flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-indigo-600 px-6 py-4 rounded-xl font-bold transition-all shadow-md text-xs uppercase tracking-widest font-mono hover:-translate-y-1"
                      >
                        回到推薦首頁 <ScanLine size={14} />
                      </button>
                    )}
                  </div>
                </div>

              </div>
            </main>
          )}
        </>
      )}

      {/* ==========================================
          頁尾
      ========================================== */}
      <footer className="w-full bg-slate-900 text-slate-400 mt-20 pt-16 pb-12 flex flex-col items-center text-center border-t border-slate-800">
        <div className={`mb-6 ${socialMode ? 'text-indigo-500' : 'text-amber-500'} opacity-80 transition-colors duration-500`}>
          <Smile size={40} strokeWidth={1.5} />
        </div>
        <div className="font-serif font-black text-xl text-white mb-8 tracking-widest">
          「在理解科技的那一刻，露出一個小小的微笑。」
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-12">
          <span className={`cursor-default ${socialMode ? 'hover:text-indigo-400' : 'hover:text-amber-500'} transition-colors`}>Science</span> • 
          <span className={`cursor-default ${socialMode ? 'hover:text-indigo-400' : 'hover:text-amber-500'} transition-colors`}>Media</span> • 
          <span className={`cursor-default ${socialMode ? 'hover:text-indigo-400' : 'hover:text-amber-500'} transition-colors`}>Innovation</span> • 
          <span className={`cursor-default ${socialMode ? 'hover:text-indigo-400' : 'hover:text-amber-500'} transition-colors`}>Learning</span> • 
          <span className={`cursor-default ${socialMode ? 'hover:text-indigo-400' : 'hover:text-amber-500'} transition-colors`}>Exploration</span>
        </div>
        <div className="text-[10px] md:text-xs font-light text-slate-600 w-full border-t border-slate-800 pt-6 max-w-6xl px-6 flex justify-between">
          <span>© 2026 SMILE 科技誌. 連結科技與大眾的橋樑。</span>
          <span className="hidden md:block font-mono">SYS_VERSION: 2.0.1</span>
        </div>
      </footer>

    </div>
  );
}