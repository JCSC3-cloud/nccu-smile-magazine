// @ts-nocheck
import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Smile, BookOpen, Terminal, Cpu, TrendingUp, Globe2, Sparkles,
  ChevronRight, ArrowLeft, Lightbulb, CheckCircle2, Quote, Clock, ArrowDown,
  Eye, Smartphone, ShieldAlert, Activity, ScanLine, Hash, MousePointer2,
  ArrowRight, Monitor, Network, Database, Radio, Users, Compass, Lock
} from "lucide-react";

const VideoEmbed = () => (
  <section className="w-full bg-slate-950 border-y border-slate-800 my-20">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-4">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-orange-400"></span>
          <p className="font-mono text-xs font-bold text-orange-400 uppercase tracking-[0.35em]">Video Interface</p>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-6">先看見介面，<br />才讀懂革命</h2>
        <p className="text-base md:text-lg text-slate-300 leading-loose mb-8">
          從命令列到滑鼠，從視窗到圖形介面，GUI 的革命不是讓電腦變強，而是讓人第一次覺得自己能理解電腦。
        </p>
        <div className="space-y-3 border-t border-slate-700 pt-6 font-mono text-xs">
          <div className="flex justify-between"><span className="text-slate-500 uppercase tracking-[0.25em]">Watch Time</span><span className="text-slate-200">3:51</span></div>
          <div className="flex justify-between"><span className="text-slate-500 uppercase tracking-[0.25em]">Mode</span><span className="text-slate-200">GUI History</span></div>
          <div className="flex justify-between"><span className="text-slate-500 uppercase tracking-[0.25em]">Status</span><span className="text-orange-300">Ready to Play</span></div>
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
            <p className="font-mono text-[10px] md:text-xs text-slate-500 tracking-[0.25em] uppercase">SMILE / GUI_VIDEO_PLAYER</p>
          </div>
          <div className="w-full aspect-video overflow-hidden rounded-2xl bg-black">
            <iframe className="w-full h-full block" src="https://www.youtube.com/embed/J6FbvGPzYUs" title="GUI 革命影片導覽" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
        </div>
        <a href="https://youtu.be/J6FbvGPzYUs" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold text-orange-400 hover:text-orange-300">在 YouTube 開啟 →</a>
      </div>
    </div>
  </section>
);

const SocialVideoEmbed = () => (
  <section className="w-full bg-slate-50 border-y border-slate-200 my-16 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 bg-white border border-slate-200 rounded-[2rem] shadow-2xl overflow-hidden">
        <div className="flex justify-between items-center p-5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-slate-950 text-orange-400 flex items-center justify-center font-black">S</div>
            <div><p className="font-black text-slate-900">SMILE Social Lab</p><p className="text-xs text-slate-500">@smile.interface · 推薦給你</p></div>
          </div>
          <span className="text-slate-400 text-xl">...</span>
        </div>
        <div className="bg-slate-950 p-4">
          <div className="aspect-video rounded-2xl overflow-hidden bg-black">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/QbwmLUrDLcM" title="社群平台影片導覽" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between text-sm font-black text-slate-700 mb-3"><span>♥ 12.8K　💬 428　↗ Share</span><span>Save</span></div>
          <p className="text-slate-700 leading-relaxed"><strong>SMILE Social Lab</strong>：演算法不是幫你找朋友，而是幫注意力找到出口。</p>
        </div>
      </div>
      <div className="lg:col-span-5">
        <div className="flex items-center gap-3 mb-6 font-mono text-xs font-bold text-orange-500 uppercase tracking-[0.35em]"><span className="w-2 h-2 rounded-full bg-orange-500"></span>Social Feed</div>
        <h2 className="text-4xl md:text-6xl font-serif font-black text-slate-950 leading-tight mb-6">先被推薦，<br />才開始選擇</h2>
        <p className="text-lg text-slate-600 leading-loose mb-8">每一次停留、點讚、留言與重播，都在訓練下一次被推到眼前的內容。</p>
        {["Feed is not neutral", "Attention becomes data", "Algorithm shapes culture"].map((x, i) => (
          <div key={x} className="flex justify-between border-b border-slate-200 py-4">
            <small className="font-mono text-slate-400 uppercase tracking-[0.25em]">Insight 0{i + 1}</small>
            <strong className="text-slate-800">{x}</strong>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AiVideoEmbed = () => (
  <section className="w-full bg-[#050505] border-y border-cyan-900/30 my-16 relative overflow-hidden grid-bg">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden border border-cyan-500/18 bg-slate-950/75 shadow-[0_0_64px_rgba(6,182,212,0.09)]">
        <div className="lg:col-span-4 p-7 md:p-9 bg-black/62 border-b lg:border-b-0 lg:border-r border-cyan-500/18">
          <div className="flex items-center gap-2 mb-7">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <p className="font-mono text-[10px] text-cyan-400 tracking-[0.24em]">AI 終章影像｜正式上線</p>
          </div>
          <div className="font-mono text-[9px] tracking-[0.26em] text-slate-500 mb-5">VIDEO FEATURE / NOW PLAYING</div>
          <h2 className="text-2xl md:text-4xl font-black text-white leading-tight font-serif mb-4">
            第三部曲影像導讀
            <span className="block text-cyan-200">AI 終章正式開播</span>
          </h2>
          {React.createElement(
            "p",
            { className: "text-slate-300 font-serif leading-loose text-base md:text-lg mb-7" },
            "這支影片作為 AI 終章的開場入口，帶讀者從 GUI、社群平台，走向「可調度的智慧」。"
          )}
          <div className="space-y-3 border-y border-cyan-900/45 py-5 font-mono text-[10px] tracking-[0.16em]">
            {[
              ["ISSUE", "03 AI"],
              ["MODE", "VIDEO FEATURE"],
              ["STATUS", "ONLINE"]
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-4">
                <span className="text-slate-600">{label}</span>
                <span className="text-cyan-100">{value}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-3 text-sm leading-relaxed">
            <div><span className="text-cyan-300 font-black">影片狀態：</span><span className="text-slate-400">第三部曲影片已開放播放</span></div>
            <div><span className="text-cyan-300 font-black">觀看模式：</span><span className="text-slate-400">YouTube Shorts 影音導讀</span></div>
            <div><span className="text-cyan-300 font-black">內容定位：</span><span className="text-slate-400">AI 時代材料 / SMILE 五篇報導導覽</span></div>
          </div>
        </div>
        <div className="lg:col-span-8 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(8,47,73,.18),transparent_60%)] px-5 py-8 md:px-8 md:py-12">
          <div className="relative w-full max-w-4xl overflow-hidden border border-cyan-900/60 bg-[#020817]/95 p-4 md:p-6 shadow-[inset_0_0_90px_rgba(8,47,73,.38),0_24px_90px_rgba(0,0,0,.36)]">
            <div className="absolute inset-0 grid-bg opacity-14 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,.08),transparent_28%,rgba(15,23,42,.55)_58%,rgba(6,182,212,.05))] pointer-events-none"></div>
            <div className="relative z-10 mb-4 flex items-center justify-between gap-4 border-b border-cyan-900/35 pb-3 font-mono text-[9px] tracking-[0.24em]">
              <span className="text-cyan-300/80">首映影像艙</span>
              <span className="text-slate-600">SMILE 03 AI</span>
              <span className="text-cyan-200/70">NOW PLAYING</span>
            </div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-[42px_1fr] gap-4 items-center">
              <div className="hidden md:flex h-full flex-col items-center justify-between border-r border-cyan-900/35 pr-3 font-mono text-[9px] tracking-[0.25em] text-slate-600">
                <span className="[writing-mode:vertical-rl]">VIDEO FEATURE</span>
                <span className="h-10 w-px bg-cyan-500/30"></span>
                <span className="[writing-mode:vertical-rl] text-cyan-300/70">AI FINAL</span>
              </div>
              <div>
                <div className="relative overflow-hidden bg-black p-2.5 shadow-[0_22px_70px_rgba(0,0,0,.52),0_0_42px_rgba(34,211,238,.10)] ring-1 ring-cyan-300/16">
                  <div className="relative overflow-hidden bg-black" style={{ aspectRatio: "16 / 9" }}>
                    <iframe
                      className="h-full w-full bg-black"
                      src="https://www.youtube.com/embed/mhNNORxQoUY?rel=0&modestbranding=1&playsinline=1"
                      title="SMILE 第三部曲 AI 終章影像導讀"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      style={{ filter: "brightness(0.82) saturate(0.9) contrast(1.04)" }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,.24),transparent_24%,transparent_76%,rgba(2,6,23,.24)),linear-gradient(180deg,rgba(2,6,23,.16),transparent_42%,rgba(2,6,23,.24)),radial-gradient(circle_at_center,transparent_45%,rgba(34,211,238,.10))]"></div>
                    <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_70px_rgba(2,6,23,.72),inset_0_0_34px_rgba(251,146,60,.08)]"></div>
                    <div className="pointer-events-none absolute left-4 top-4 border border-cyan-300/20 bg-slate-950/70 px-2.5 py-1 font-mono text-[8px] tracking-[0.22em] text-cyan-100/70">AI VIDEO</div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] tracking-[0.22em] text-slate-600">
                  <span>第三部曲｜影像導讀</span>
                  <span className="text-cyan-300/70">YouTube Shorts / 已上線</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const timelineData = [
  ["1963", "Sketchpad", "概念萌芽", "Ivan Sutherland 完成 Sketchpad，圖形互動開始萌芽。"],
  ["1968", "一切展示之母", "實驗室原型", "Engelbart 公開展示滑鼠、視窗、超文字、協作編輯與視訊互動。"],
  ["1973", "Xerox Alto", "實驗室原型", "Xerox PARC 打造 Alto，讓 bitmapped display、滑鼠與圖形介面真正結合。"],
  ["1974", "Smalltalk", "軟體環境", "Xerox PARC 的 Smalltalk 環境進一步發展出更成熟的視窗、圖示、選單與指標邏輯，讓現代 GUI 的雛形更完整。"],
  ["1981", "Xerox Star", "商業化", "第一批商業化的 GUI 辦公系統之一，把圖示、資料夾、滑鼠、網路與桌面辦公概念整合進產品。"],
  ["1983", "Apple Lisa", "商業化", "Apple 將 GUI 帶入商業市場，雖然價格高昂，但它是 GUI 從實驗室走向產品的重要過渡節點。"],
  ["1984", "Macintosh", "商業化", "Apple 透過 Macintosh 建立桌面隱喻與直覺操作，讓一般人也能真正學會使用電腦。"],
  ["1985", "Windows 1.0", "生態系萌芽", "Microsoft 正式進入圖形介面市場，GUI 競賽從單一產品走向整個 PC 生態系。"],
  ["1990", "Windows 3.0", "普及化", "圖形介面開始真正大規模擴散，Microsoft 的 GUI 路線逐漸站穩。"],
  ["1995", "Windows 95", "普及化", "開始功能表、工作列與桌面體驗被全球大量使用，GUI 成為家庭與辦公室的標準。"],
  ["2007", "iPhone 觸控革命", "觸控時代", "多點觸控讓人們從滑鼠與鍵盤轉向直接用手指操作螢幕，介面革命進入新階段。"],
  ["2011", "Siri 語音助理", "對話介面", "人機互動從圖形操作延伸到語音與自然語言，介面開始不只靠點擊。"],
  ["2022", "ChatGPT 崛起", "對話介面", "生成式 AI 崛起，讓人機互動從「點擊視窗」進一步走向「直接對話」。"]
];

const guiSeries = [
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
      但 Xerox 最戲劇化的地方也在這裡：它做得出來，卻沒有真的把它變成世界通用的產品。1981 年推出的 Xerox Star 的確是早期商業化 GUI 系統之一，可是市場反應有限，最後沒有打開大眾局面。這不是因為技術不夠厲害，而是 因為「做出未來」跟「把未來賣出去」根本是兩種能力。研究室擅長證明可能性，市場要的卻是另一套東西：價格、定位、體驗、時機，少一樣都可能翻車。
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

const socialSeries = [
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
    <div className="mt-20 mb-12 py-12 border-y-2 border-indigo-900 max-w-2xl mx-auto flex flex-col items-center relative overflow-hidden">
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

const aiSeries = [
  ["S / 01", "Science", "從工具到材料：AI 為什麼不只是另一個新科技？", "AI 不是只提高效率的工具，而可能是一種新的時代材料。"],
  ["M / 02", "Media", "搜尋之後：當答案不再被找到，而是被生成", "當答案由 AI 生成，來源、脈絡與查證過程也可能被隱藏。"],
  ["I / 03", "Innovation", "河邊的工廠：AI 不是加入流程，而是重做流程", "真正的 AI 創新不是把工具塞進舊流程，而是重新設計流程本身。"],
  ["L / 04", "Learning", "當整理知識變便宜：學生還需要學什麼？", "提問、判斷、查證、整合與形成觀點，會變成更重要的能力。"],
  ["E / 05", "Exploration", "十年後回頭看：當智慧被大量調度，人的專業將退守到哪裡？", "問題定義、責任承擔、價值判斷與人性殘留物，會成為新的專業邊界。"]
].map((x, i) => ({ id: i + 1, vol: x[0], smileKey: x[1], title: x[2], desc: x[3] }));

const aiMeta = [
  { moduleStatus: "MATERIAL_DETECTED", signal: "Intelligence as Material", coreQuestion: "AI 只是新的科技工具，還是正在成為改變時代結構的新材料？", points: [["SMILE Angle", "Science"], ["Key Shift", "從工具到時代材料"], ["Human Role", "重新理解智慧如何被配置"]] },
  { moduleStatus: "SOURCE_UNSTABLE", signal: "Generated Answers", coreQuestion: "當答案不再被我們找到，而是由 AI 生成，我們還能如何判斷資訊的真實與可信？", points: [["SMILE Angle", "Media"], ["Key Shift", "從搜尋連結到生成答案"], ["Human Role", "資訊的溯源與驗證者"]] },
  { moduleStatus: "WORKFLOW_REBUILDING", signal: "Process Redesign", coreQuestion: "AI 是在幫助我們更快完成舊工作，還是在迫使我們重新設計工作本身？", points: [["SMILE Angle", "Innovation"], ["Key Shift", "從單點加速到全局重構"], ["Human Role", "新工作流程的架構師"]] },
  { moduleStatus: "KNOWLEDGE_REWIRED", signal: "Learning Shift", coreQuestion: "當 AI 讓知識整理變得容易，學生真正需要鍛鍊的能力是什麼？", points: [["SMILE Angle", "Learning"], ["Key Shift", "從吸收知識到提出觀點"], ["Human Role", "具批判力的提問者"]] },
  { moduleStatus: "FUTURE_SIMULATING", signal: "Human Value Shift", coreQuestion: "當 AI 可以處理越來越多知識任務，人類的專業價值會轉移到哪裡？", points: [["SMILE Angle", "Exploration"], ["Key Shift", "從執行任務到承擔責任"], ["Human Role", "價值的最終定錨者"]] }
];

const aiArticleDetails = {
  1: {
    deck: "S｜Science",
    title: "從工具到材料：AI 為什麼不只是另一個新科技？",
    coreQuestion: "當智慧開始像電力一樣被調度，人類還剩下什麼？",
    summary: [
      "當智慧開始像電力一樣被調度，人類還剩下什麼？",
      "AI 或許不只是更聰明的搜尋引擎、聊天機器人或工作助手，而是正在成為智慧時代的底層材料。",
      "如果蒸汽機讓體力被大量調度，半導體讓計算能力被大量調度，那麼 AI 可能正在讓智慧本身開始被大量調度。"
    ],
    lead: [
      "如果把人類科技史想像成一場很長很長的接力賽。第一棒，是蒸汽機。第二棒，是電力與鋼鐵。第三棒，是半導體與網路。而今天，我們或許正站在第四棒的起跑線上。",
      "有趣的是，每一次技術革命剛開始的時候，人們都很難看出它真正改變的是什麼。十八世紀的人看到蒸汽機，可能只覺得那是一台比較強的機器。二十世紀的人看到電腦，也曾經以為它只是比較快的計算工具。",
      "就像今天，很多人看到 AI 時，仍然認為它只是比較厲害的搜尋引擎、比較聰明的聊天機器人，或比較方便的工作助手。但如果回頭看科技史，真正改變世界的東西，往往不是某個產品。而是某種重新定義時代的底層力量。",
      "蒸汽機改變的不是工廠。而是整個工業社會。半導體改變的不是電腦。而是整個資訊文明。那麼問題來了。AI 改變的，究竟只是工作效率？還是它正在改變另一件更根本的事情？",
      "如果說蒸汽機讓體力被大量調度。半導體讓計算能力被大量調度。那麼 AI，會不會正在讓智慧本身開始被大量調度？"
    ],
    sections: [
      {
        title: "一、蒸汽機發明時，沒有人知道城市會長成今天的樣子",
        deck: "真正改變世界的，往往不是某個產品，而是能被嵌入無數產品之中的材料。",
        paragraphs: [
          "如果你回到十八世紀。有人指著蒸汽機對你說：「這台機器未來會改變世界。」你大概很難相信。因為當時的人看到的，只是一台新的動力設備。",
          "但後來發生的事情，遠遠超出一台機器本身。蒸汽機讓工廠脫離河流。鐵路開始向外擴張。人口開始向城市集中。大型工業城市逐漸形成。它真正改變的，從來不只是動力。而是整個世界的生產方式。",
          "後來，鋼鐵大量普及。人類開始蓋起摩天大樓。跨越河流的橋樑出現。城市開始向天空生長。再後來，半導體誕生。計算能力第一次被大規模普及。每個人都有電腦。每個人都有手機。每個人都能接上網路。資訊世界於是形成。",
          "回頭看會發現：真正改變世界的，往往不是某個產品。而是那些能被嵌入無數產品之中的材料。蒸汽是工業時代的材料。鋼鐵是都市時代的材料。半導體是資訊時代的材料。那麼今天，AI 是否正在成為智慧時代的材料？"
        ]
      },
      {
        title: "二、如果 AI 不是工具，那它到底是什麼？",
        deck: "工具解決單一問題，材料改變整個系統；AI 的影響正在逐漸超越工具本身。",
        paragraphs: [
          "大部分人第一次接觸 AI 時，都會把它放進熟悉的分類裡。有人把它當搜尋引擎。有人把它當客服。有人把它當寫作工具。有人把它當報告產生器。這很正常。因為每一次新科技出現，人類都習慣用舊世界的語言理解新世界。",
          "電影剛誕生時，人們只是把攝影機對著舞台。電腦剛普及時，很多人認為它只是高級打字機。直到很久之後，人們才發現它們真正改變的不是原本的工作。",
          "AI 或許也是如此。它真正厲害的地方，可能不是幫你完成某個任務。而是開始參與智慧本身。它開始幫人整理資訊。幫人分析資料。幫人生成內容。幫人協助決策。甚至參與部分知識工作。",
          "過去科技延伸的是人的體力與操作能力。但 AI 延伸的，卻是智慧本身。這也是人類歷史上第一次，部分智慧開始被工業化。如果工具解決的是單一問題。那麼材料改變的，往往是整個系統。而 AI 的影響，似乎正在逐漸超越工具本身。"
        ]
      },
      {
        title: "三、如果科技史是一場接力賽，AI 正在接過最後一棒",
        deck: "PC 改變個人能力，Internet 改變資訊流動，AI 可能改變智慧本身的配置方式。",
        paragraphs: [
          "如果重新整理近代科技史。會發現一條很有趣的脈絡。PC 時代最大的改變，是工具個人化。過去只有企業與政府能使用的計算能力，開始進入每個人的生活。每個人都有自己的電腦。每個人都有自己的數位工具。",
          "接著進入 Internet 時代。世界開始彼此連結。資訊突破地域限制。搜尋引擎、社群平台與影音網站，重新改變資訊流動方式。於是全球開始同步化。",
          "而今天，AI 則正在接過下一棒。它不再只是傳遞資訊。而是開始生成資訊。不再只是搜尋答案。而是開始提供答案。",
          "如果說 PC 改變的是個人能力。Internet 改變的是資訊流動。那麼 AI 改變的，可能是智慧本身的配置方式。"
        ],
        pullquote: "如果說 PC 改變的是個人能力，Internet 改變的是資訊流動，那麼 AI 改變的，可能是智慧本身的配置方式。"
      },
      {
        title: "四、智慧第一次開始被工業化",
        deck: "工業革命把體力變成資源，資訊革命把計算變成資源，而 AI 正在把智慧變成資源。",
        paragraphs: [
          "工業革命做了一件事。把體力變成資源。資訊革命做了一件事。把計算變成資源。而今天，AI 正在做第三件事。它開始把智慧變成資源。",
          "寫報告。翻譯文件。整理資料。分析內容。生成企劃。許多過去需要人類親自完成的工作，開始能被 AI 協助完成。",
          "這也是歷史上第一次。智慧不再完全依附於個人。而開始變成一種可以被調度的能力。就像工廠可以使用電力。企業開始使用雲端運算。未來的組織，或許也將開始使用大量被配置的智慧。",
          "如果蒸汽機把動力變成工業資源。那麼 AI，正在把智慧變成工業資源。"
        ]
      },
      {
        title: "五、當智慧成本開始下降，世界會發生什麼事？",
        deck: "當智慧變得便宜，真正稀缺的可能不再是答案，而是問題。",
        paragraphs: [
          "蒸汽機降低了體力成本。半導體降低了計算成本。而 AI，正在降低智慧成本。這可能是整篇文章最重要的一句話。",
          "過去需要數小時整理的資料。現在可能幾分鐘就完成。過去需要專業背景才能進行的分析。現在一般人也能獲得初步協助。這並不代表專家會消失。但它代表：智慧的取得門檻正在下降。",
          "而當智慧開始變得便宜。世界也會開始改變。過去重要的是：記住知識。尋找資訊。生產標準答案。但未來真正重要的，可能變成：定義問題。理解情境。驗證資訊。整合觀點。做出判斷。",
          "因為 AI 可以給你一千個答案。但它無法告訴你：哪個答案最值得相信。如果體力不再稀缺。計算不再稀缺。那麼未來真正稀缺的，或許不再是答案。而是問題。"
        ],
        pullquote: "AI 可以給你一千個答案，但它無法告訴你：哪個答案最值得相信。"
      },
      {
        title: "六、企業真正改變的，可能不是效率，而是流程",
        deck: "真正重要的問題，不是有沒有 AI，而是誰能重新設計工作方式。",
        paragraphs: [
          "很多企業正在導入 AI。但大部分企業做的事情其實很像：把 AI 塞進舊流程裡。用 AI 做簡報。用 AI 寫報告。用 AI 回客服。用 AI 整理資料。這當然能提升效率。但這可能還不是 AI 最重要的影響。",
          "回頭看工業革命。真正改變世界的，其實不是蒸汽機。而是工廠。因為當動力成本下降後，整個生產流程被重新設計。AI 或許也正在發生同樣的事情。",
          "真正重要的問題，可能不是有沒有 AI。而是：哪些工作由人完成？哪些工作由 AI 完成？哪些決策需要人負責？哪些流程需要重新設計？",
          "未來企業競爭的關鍵，或許不是誰擁有 AI。而是誰能重新設計工作方式。"
        ]
      },
      {
        title: "七、AI 時代：分工的終點，還是再整合的開始？",
        deck: "Internet 時代在拆分世界，而 AI 時代或許正在重新把它拼回來。",
        paragraphs: [
          "過去二十年，網路世界其實一直在分工。搜尋有搜尋引擎。社交有社群平台。通訊有即時通訊軟體。影音有影音平台。每個平台都專注於自己的角色。",
          "但最近，事情似乎開始改變。社群平台加入 AI。搜尋平台加入聊天功能。通訊軟體加入智慧助理。工作軟體開始內建生成能力。原本清楚的界線，開始變得模糊。",
          "原因很簡單。因為 AI 需要同時接觸：搜尋、通訊、文件、知識、工作流程。如果說 Internet 時代改變的是資訊如何流動。那麼 AI 時代改變的，可能是智慧如何被整合。",
          "Internet 時代在拆分世界。而 AI 時代，或許正在重新把它拼回來。"
        ]
      },
      {
        title: "八、人類最後剩下的是什麼？",
        deck: "AI 負責速度，但方向仍然需要由人決定。",
        paragraphs: [
          "這或許是整篇文章最重要的問題。當搜尋知識越來越便宜。整理資料越來越便宜。生成內容越來越便宜。人類真正珍貴的能力，也開始改變。",
          "AI 可以提供答案。但它無法決定哪個問題值得回答。AI 可以生成內容。但它無法承擔內容帶來的後果。AI 可以提高速度。但方向仍然需要由人決定。",
          "因此未來真正重要的，可能不是記住多少知識。而是：問題定義能力。情境理解能力。判斷能力。跨領域整合能力。以及對結果負責的能力。",
          "如果說 AI 負責的是速度。那麼人類真正剩下的，可能是方向。"
        ]
      },
      {
        title: "S｜Science 結語",
        deck: "當 AI 能夠提供答案時，人類真正需要學會的，或許是重新學會提問。",
        paragraphs: [
          "AI 真正改變的，或許不只是工具。而是智慧如何存在。如果說：PC 時代的核心是工具個人化。Internet 時代的核心是世界連結化。那麼 AI 時代真正的核心，可能就是智慧配置化。",
          "蒸汽機讓體力不再稀缺。半導體讓計算不再稀缺。而 AI，正在讓部分智慧不再稀缺。當智慧開始像電力一樣被大量調度之後，真正重要的問題，可能不再只是：「你會不會使用 AI？」",
          "而是：當 AI 能夠提供答案時，你是否仍然知道該問什麼問題？因為 AI 改變的從來不只是效率。它真正重新定義的，是人類在智慧時代中的位置。",
          "而當 AI 開始替人回答問題。人類真正需要學會的，或許是重新學會提問。"
        ],
        pullquote: "當 AI 開始替人回答問題，人類真正需要學會的，或許是重新學會提問。"
      }
    ],
    takeaway: "當智慧開始像電力一樣被大量調度，真正重要的問題不再只是會不會使用 AI，而是人是否仍然知道該問什麼問題、如何判斷答案，以及如何為方向負責。"
  },
  2: {
    deck: "M｜Media",
    title: "搜尋之後：當答案不再被找到，而是被生成",
    summary: [
      "AI 把答案整理得又快又順，但當來源被折疊、脈絡被省略、語氣變得很肯定，我們還能怎麼判斷資訊是真的？",
      "搜尋時代給我們入口；生成時代直接端出答案。問題是，越方便的答案，越容易讓來源、日期、責任與限制一起消失。",
      "這篇 Media 專題把 AI 搜尋放回媒體素養的脈絡：流暢不是證據，條列不是查證，語氣自信更不是事實本身。"
    ],
    lead: [
      "以前查資料，像是在網路裡迷路。你打開 Google，丟出關鍵字，得到一排藍色連結。第一個看起來像廣告，第二個標題很像農場文，第三個網站排版像十年前失火後重建失敗，第四個終於有點像樣，但你還是不放心，於是又多開了兩個分頁。",
      "很煩，很慢，很像在資訊菜市場裡挑菜：這把青菜看起來新鮮嗎？這個攤位可信嗎？這價格是不是太假？但至少，你知道自己逛過哪些攤。",
      "現在不一樣了。你把問題丟給 AI，它三秒後端出一份整理好的答案：有條列、有結論、有脈絡，甚至語氣穩到像班上那種每次報告都自帶雷射筆的人。它不再給你一排門牌，要你自己走過去；它像外送員一樣，把答案送到你桌上。",
      "問題是，答案外送真的太方便了。方便到我們可能忘了問：這份答案是哪一家店做的？食材從哪裡來？有沒有過期？有沒有加錯料？還是它只是把不同來源切一切、拌一拌、淋上自信醬，端出一盒看起來很像真相的資訊便當？",
      "這就是 AI 搜尋時代最關鍵的媒體問題：當答案不再被我們找到，而是由 AI 生成，我們還能如何判斷資訊的真實與可信？"
    ],
    sections: [
      {
        title: "一、搜尋時代：我們曾經自己走進資訊迷宮",
        paragraphs: [
          "搜尋引擎時代的資訊取得，其實是一連串很麻煩的動作。你要先想關鍵字，搜尋，掃標題，點進網站，看來源，再跳出來比對其他資料。你可能會遇到 SEO 寫得很漂亮但內容很空的文章，也可能被標題騙進去看一篇其實什麼都沒講的廢文。",
          "搜尋不是完美的，它有廣告、有排名、有演算法，也有一堆看起來像知識、實際上只是把別人內容洗過一遍的資訊垃圾。可是搜尋時代還有一個重要特徵：來源是看得見的。",
          "你知道自己點進的是新聞媒體、官方網站、論壇、部落格，還是不知道誰整理的懶人包。你可以判斷這個網站可靠不可靠，可以看作者是誰，可以看日期新不新，也可以回頭檢查自己到底是從哪裡得到這個說法。",
          "換句話說，搜尋引擎給我們的不是答案，而是入口。它像是把你帶到一整條街，告訴你：這邊有十間店，你自己挑。你可能挑錯，可能買貴，可能被騙，但你至少看得見店名、招牌、裝潢和老闆的臉。",
          "而 AI 搜尋正在改變這件事。"
        ]
      },
      {
        title: "二、生成時代：AI 把來源揉成一份答案",
        paragraphs: [
          "生成式 AI 的厲害，不只是快。它真正改變資訊取得方式的地方，在於它不只是幫你找資料，而是幫你把資料整理成一個看起來完整的答案。",
          "以前搜尋引擎給你的是一排路標，AI 給你的是一張已經畫好路線的地圖，甚至還幫你把目的地用螢光筆圈起來。這聽起來很貼心，但它也讓一件事變得更模糊：答案背後的來源被折疊了。",
          "Pew Research Center 在 2025 年分析 Google 搜尋行為時發現，當使用者遇到 AI summary 時，點擊傳統搜尋結果連結的比例是 8%；沒有遇到 AI summary 時，點擊傳統搜尋結果的比例則接近 15%。也就是說，當 AI 已經把答案放在前面，使用者更可能停在生成答案本身，而不是繼續點回原始網站。",
          "這不是小事。因為過去我們雖然懶，但至少還需要在不同來源之間移動。現在 AI 把這個移動過程壓縮了。它把不同來源的資訊揉成一段話，讓讀者看見答案，卻不一定看見答案的來路。",
          "這就像以前你去餐廳吃飯，至少知道自己走進哪家店。現在是有人直接把餐盒放到你桌上，還貼心附上餐具，但你不一定知道廚房在哪裡。"
        ]
      },
      {
        title: "三、信任危機：它不是不會錯，是錯得很像對",
        paragraphs: [
          "AI 答案最麻煩的地方，不是它會錯。人也會錯，新聞也會錯，搜尋結果也會把你帶去奇怪網站。真正麻煩的是：AI 很容易把錯誤講得很順。",
          "傳統爛網站通常爛得很明顯。廣告多到像被彈窗圍毆，標題寫著「震驚！你一定不知道的十件事」，內文三行後開始賣保健食品。你就算被騙進去，也很快會有一種「我怎麼會點這個」的自我厭惡感。",
          "但 AI 不一樣。它的語氣很穩，段落很整齊，邏輯看起來很完整。它就算不確定，也可能用一種「我已經幫你讀完世界」的口吻把答案講完。於是我們不是被資訊太少困住，而是被一個太像答案的答案困住。",
          "Tow Center for Digital Journalism 在 2025 年測試八個具有即時搜尋功能的生成式搜尋工具，評估它們能不能正確找回並引用新聞內容；Nieman Lab 報導該研究時指出，這些工具在超過 60% 的測試中未能產出正確引用。",
          "這不代表 AI 不能用。但它代表我們不能因為一段話寫得順，就把它當成可靠。流暢不是證據，條列不是查證，語氣自信更不是事實本身。"
        ],
        pullquote: "如果說搜尋時代的問題是「我找不到答案」，那生成時代的問題可能是：「答案來得太快，我來不及懷疑。」"
      },
      {
        title: "四、媒體困境：原始報導變成答案背後的食材",
        paragraphs: [
          "這篇是 Media，所以我們不能只討論個人怎麼用 AI 查資料。更大的問題是：當 AI 直接生成答案，媒體的位置會發生什麼變化？",
          "新聞媒體原本做的事情，不只是把資訊放上網。",
          "一篇報導背後可能有記者訪問、查證、比對資料、編輯判斷、現場觀察，也可能有很長時間累積出來的專業理解。可是當 AI 把這些內容整理成一句回答時，讀者看到的往往是最後那份濃縮答案，不一定看見背後的採訪與查證過程。",
          "媒體在這裡就變得有點尷尬。它像是 AI 答案背後的食材供應商：有被使用，卻不一定被看見。",
          "Reuters Institute 的 2025 Digital News Report 提到，傳統新聞媒體正在面臨與公眾連結下降、信任偏低、數位訂閱停滯等壓力，同時使用者越來越依賴社群媒體、影音平台與線上聚合器取得新聞。",
          "AI 摘要與生成式搜尋不是單獨出現的危機，它比較像是在一個已經很不穩的媒體生態裡，再把「讀者會不會點回原文」這件事推得更遠。",
          "以前媒體至少還有機會站在讀者和事件之間，說：來，這是我們查到的。現在它可能被放到答案背後，變成一個不被點開、不被記住，甚至不被意識到的來源。",
          "這對媒體不是只有流量問題，也是價值問題。",
          "如果讀者只看 AI 整理後的答案，而不再接觸原始報導，那些原本用來建立信任的東西：作者、來源、採訪過程、資料脈絡、編輯責任，就會一起被壓扁。",
          "最後留下來的，可能只是一段看起來很完整的話。"
        ]
      },
      {
        title: "五、讀者不是變笨，而是被重新訓練",
        paragraphs: [
          "這裡要先公平一點。AI 生成答案確實有它的價值。它可以幫人快速理解一個陌生議題，可以把複雜資料整理成初步架構，也可以讓不熟悉某個領域的人比較快進入狀況。對學生、工作者、一般讀者來說，這種效率不是假的。",
          "問題是，效率會改變習慣。當答案太容易被送到面前，我們就會越來越少練習自己找來源、比對說法、檢查資料。這不代表讀者突然變笨，而是資訊環境正在訓練我們用另一種方式相信東西。",
          "以前我們會問：這篇文章是哪個媒體寫的？現在我們可能先問：AI 怎麼說？",
          "以前我們會看：這個資料是哪一年？現在我們可能看到一段順順的答案，就先拿去用了。",
          "以前我們至少知道自己懶。現在 AI 幫我們懶得很有秩序。它不只是提供答案，它也在塑造我們的查證肌肉。肌肉不用會退化，查證也是。"
        ]
      },
      {
        title: "六、AI 答案送到你面前，先不要急著開吃",
        paragraphs: [
          "所以，AI 時代的媒體素養，不是不用 AI。這句很重要。因為「不要用 AI」其實不太現實，也不一定比較聰明。真正需要學的，是不要把 AI 的流暢當成真相。",
          "如果 AI 答案像外送，那我們至少要養成看標籤的習慣。",
          "1. 這是誰說的？有沒有明確來源？是官方資料、新聞媒體、研究報告，還是 AI 自己整理出來的說法？如果一段答案沒有來源，它可能可以當起點，但不適合直接當結論。",
          "2. 這是什麼時候的資料？AI 很容易把舊資料講得像現在還成立。尤其是科技、法規、公司資料、政策、數據這些會變動的內容，年份不是裝飾品，是保存期限。",
          "3. 它省略了什麼？答案越短，越可能把爭議、限制、例外藏掉。一個看起來很完整的摘要，可能只是把世界剪成比較好入口的版本。",
          "4. 它有沒有把推測講成事實？「可能」、「趨勢」、「有些研究指出」不等於「一定」。AI 很會整理語氣，但讀者要自己檢查它有沒有偷偷把不確定的事情講成確定。",
          "5. 我有沒有點回原文？這是最基本，也最容易被省略的一步。沒有看原文，就不要太快把它當結論。",
          "尤其是你要寫報告、做簡報、發文、引用數據的時候，只看 AI 的二手整理，就像沒看電影只看別人限動心得，然後開始寫影評。"
        ]
      },
      {
        title: "七、媒體的新角色：不只是給答案，而是留下痕跡",
        paragraphs: [
          "如果 AI 讓答案變得更容易被生成，那媒體未來的價值可能不只是「提供資訊」。因為資訊本身會越來越多，摘要也會越來越快。讀者缺的可能不是更多答案，而是能夠判斷答案的線索。",
          "所以媒體要重新被看見，可能要更強調幾件事。",
          "第一，來源透明。讓讀者知道這個說法從哪裡來，資料怎麼取得，哪些地方還不確定。",
          "第二，脈絡完整。AI 可以摘要，但摘要很容易把歷史、權力關係、利害關係人、例外情況剪掉。媒體的價值，就是把那些被剪掉的東西放回來。",
          "第三，責任可追溯。AI 生成的答案常常像一個沒有臉的人在說話，但報導有作者、有媒體、有編輯流程，也有出錯後需要更正的責任。",
          "第四，判斷而不是拼裝。AI 很會把資訊拼在一起，但不一定知道什麼重要、什麼危險、什麼需要追問。真正的媒體工作，從來不只是整理，而是判斷。",
          "在 AI 時代，媒體不應該只把自己想成內容供應商。它更像是資訊世界裡的檢驗站，提醒讀者：這份答案看起來可以吃，但我們先看一下它到底從哪裡來。"
        ]
      },
      {
        title: "八、答案越方便，越需要慢一點相信",
        paragraphs: [
          "AI 讓答案變快，這是真的。但答案變快，不代表真相變近。",
          "搜尋時代，我們要學的是找到資料；生成時代，我們要學的是檢查答案。以前的媒體素養是知道去哪裡查，現在的媒體素養還要多一層：知道 AI 幫你整理好的東西，哪些可以信，哪些只能參考，哪些必須回到原始來源確認。",
          "這不是要我們回到不用 AI 的年代。AI 可以是很好的起點，可以幫我們打開問題，可以整理初步方向，可以讓資訊取得更有效率。但它不能取代人的判斷。",
          "答案外送很方便，但再漂亮的餐盒，也不能取代我們看店名、看成分、看保存期限的習慣。AI 可以把資訊端上桌，但要不要吞下去，仍然需要人自己決定。",
          "所以，當答案不再被我們找到，而是被生成，真正重要的問題不是「AI 可不可信」。而是：我們還有沒有能力，看見答案背後的來源、脈絡與責任？"
        ],
        pullquote: "這可能就是 AI 時代最基本，也最難的媒體素養。"
      }
    ],
    interactionBlocks: [
      {
        type: "table",
        title: "AI 答案試吃區",
        subtitle: "這份答案可以直接吃嗎？",
        rows: [
          ["來源", "它有沒有說資料從哪裡來？"],
          ["日期", "這是最新資料，還是舊資料被重新包裝？"],
          ["原文", "我有沒有點回原始報導或官方資料？"],
          ["語氣", "它是不是把不確定的事講得太肯定？"],
          ["省略", "它有沒有漏掉限制、例外或不同觀點？"]
        ]
      },
      {
        type: "questions",
        title: "答案外送五問",
        subtitle: "AI 答案送到你面前，先問五句話",
        items: ["這是誰說的？", "這是什麼時候的資料？", "它省略了什麼？", "它有沒有把推測講成事實？", "我有沒有點回原文？"]
      },
      {
        type: "quote",
        title: "太順的答案，先不要急著愛上它",
        subtitle: "AI 最會的事情之一，是把答案講得很順。但順不等於真，完整不等於準確，有條列也不等於有查證。",
        quote: "它是真的有根據，還是只是很會講？"
      }
    ],
    sources: [
      ["Pew Research Center", "使用者遇到 AI summary 時，點擊傳統搜尋結果的比例為 8%；未遇到 AI summary 時則約為 15%。", "https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/"],
      ["Nieman Lab / Tow Center", "八個生成式搜尋工具在超過 60% 的測試中未能產出正確引用。", "https://www.niemanlab.org/2025/03/ai-search-engines-fail-to-produce-accurate-citations-in-over-60-of-tests-according-to-new-tow-center-study/"],
      ["Reuters Institute", "2025 Digital News Report 指出新聞媒體面臨連結下降、低信任與數位訂閱停滯等壓力。", "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2025"]
    ]
  },
  3: {
      "deck": "I｜Innovation",
      "title": "河邊的工廠：AI 不是加入流程，而是重做流程",
      "coreQuestion": "當智慧開始像電力一樣被大量調度之後，我們究竟該如何重新設計工作？",
      "summary": [
          "如果 Science 篇告訴我們，AI 正逐漸從工具變成可以嵌入各種產業與產品中的奇蹟材料，那麼 Innovation 真正要問的是：工作要如何被重新設計？",
          "很多組織導入 AI 時，只是把新技術硬塞進舊流程，讓原本不必要的流程跑得更快。",
          "真正的創新不是把 AI 當成高級打字機，而是重新設計流程、角色分工、資訊流與決策方式。"
      ],
      "lead": [
          "如果 Science 篇告訴我們，AI 正逐漸從一個工具，變成像電力、鋼鐵、半導體一樣可以被嵌入各種產業與產品中的「奇蹟材料」。那麼 Innovation 真正要問的問題就是：當智慧開始像電力一樣被大量調度之後，我們究竟該如何重新設計工作？",
          "不知道你有沒有遇過這種荒謬的場景：你為了一個專案，用 ChatGPT 把腦中 10 個字的點子，擴寫成一封 500 字「文情並茂、禮貌周到」的信件寄給主管。主管收到後覺得字太多了，於是又打開自己的 AI，輸入：「幫我總結成一句話。」",
          "最後，這 10 個字繞了一大圈，耗費了兩端的運算資源，又回到了 10 個字。這聽起來很瞎，但這其實是許多組織目前導入 AI 的縮影。",
          "我們擁有了全新的技術，卻把它硬塞進舊的工作流程裡。我們以為自己在創新，但很多時候只是讓原本就不必要的流程跑得更快而已。"
      ],
      "sections": [
          {
              "title": "一、河邊的工廠：買了蒸汽機，卻還待在河邊？",
              "deck": "真正的創新不是換掉動力來源，而是重新思考工廠的位置、物流路徑與生產模式。",
              "paragraphs": [
                  "在創新管理領域裡，經常會提到一個著名的比喻：「河邊的工廠」。在蒸汽機普及之前，工廠必須依賴河流提供動力，因此大多建在河邊。當蒸汽機出現後，許多企業雖然購買了新的動力設備，但組織的思維模式卻沒有跟著改變。",
                  "他們換掉了動力來源，卻沒有重新思考工廠的位置、物流路徑與生產模式。直到後來人們意識到：既然動力不再依賴河流，工廠其實可以搬到城市、港口或鐵路樞紐附近。",
                  "今天我們面對 AI 也是一樣。那些過時的部門分工、冗長的公文簽核、為了開會而開會的報告，就是那條「河流」。如果你只會教員工「怎麼用 AI 快速寫報告」，卻沒想過「這個工作本身是否需要被重新設計」，那你就是那個買了蒸汽機卻還死守著河邊的老闆。"
              ],
              "pullquote": "如果你只會教員工怎麼用 AI 快速寫報告，卻沒想過這個工作本身是否需要被重新設計，那你就是買了蒸汽機卻還死守河邊的老闆。"
          },
          {
              "title": "二、低層次 AI 導入：只是把它當成「高級打字機」",
              "deck": "工作本質沒有改變，AI 只是被塞進原本流程，扮演更快的搜尋框或打字機。",
              "paragraphs": [
                  "現在社會上無論學生或是上班族，都在進行這種「低層次 AI 導入」。什麼意思？就是工作本質根本沒變，AI 只是被加進原本的工作流程中，扮演了「更聰明的搜尋框」或「更快的打字機」。",
                  "流程沒變，只變速度：以前你要花三天熬夜做精美簡報，現在你用 AI 三分鐘生成精美簡報。",
                  "量產「精緻的廢物」：因為生成內容太便宜了，所以大家開始瘋狂製造一堆廢話連篇的企劃書。看起來很專業，但其實裡面一點靈魂跟洞察都沒有。",
                  "這種做法，短期內你好像變強了，但長期來看，你只是在舊的倉鼠迴圈裡跑得更快而已。",
                  "事實上，Upwork Research Institute 在 2024 年的研究發現：96% 的高階主管（C-suite）期望 AI 能提升員工生產力，但同時有高達 77% 的員工卻表示，AI 反而讓他們的工作量「增加了」。根本原因就在這裡：大多數企業只是把 AI 硬塞進原本的工作流程，而不是重新設計流程本身，導致員工必須花費大量額外時間審閱、修正 AI 產出的內容，忙到懷疑人生。"
              ]
          },
          {
              "title": "三、高層次 AI 轉型：讓 AI 當苦力，你當總編輯",
              "deck": "高層次導入不是讓 AI 替你多做一點，而是重新分配角色、流程、資訊流與決策方式。",
              "paragraphs": [
                  "那什麼才是「高層次 AI 導入」？答案是：重新設計工作流程、角色分工、資訊流與決策方式。",
                  "當 AI 可以瞬間幫你整理、摘要、生成內容時，你就不該再把自己當成「生產線上的工人」，你要把自己升級成「總編輯」或「發包中心」。",
                  "角色大洗牌：以後做報告，不再是你負責找資料、同學 A 負責排版、同學 B 負責上台。而是「AI 負責找資料跟排版」，你跟同學 A、B 負責「判斷 AI 寫得對不對、邏輯通不通」。",
                  "逆向思考：從「我有什麼事可以叫 AI 幫忙做？」變成「既然 AI 都能做了，這個步驟我可以直接砍掉嗎？」"
              ],
              "pullquote": "真正的問題不是我有什麼事可以叫 AI 幫忙做，而是既然 AI 都能做了，這個步驟能不能直接砍掉。"
          },
          {
              "title": "四、AI 搞不定的兩大死穴：讀不懂空氣，也背不起黑鍋",
              "deck": "把知識工作交給 AI，會卡在兩個現實瓶頸：脈絡碎片化與責任不可外包。",
              "paragraphs": [
                  "既然高層次轉型這麼好，為什麼大家不趕快做？因為在實際的工作環境裡，把知識工作交給 AI 會卡在兩個很現實的瓶頸。",
                  "AI 讀不懂「空氣」（Context Fragmentation 脈絡碎片化）：真正的職場或學校，有很多「沒寫在紙上的秘密」。比如在職場上，老闆其實很不喜歡某個客戶、這個專案去年失敗過不能再提；而在學校裡，AI 可以瞬間生成一份邏輯滿分的專題架構，但它讀不懂指導教授特別偏好的某個冷門理論，也無法察覺台下報告時同學皺眉的困惑感。",
                  "這些知識分散在文件、訊息與人際互動的記憶中，AI 缺乏完整脈絡，根本抓不到這些重點。所以 AI 給出的企劃或報告往往「邏輯滿分，但超不接地氣」。",
                  "AI 出事了，誰來「背鍋」？（Verifiability 驗證困難）：AI 很會「一本正經地胡說八道」。哈佛商學院與波士頓顧問集團（BCG）在 2023 年的實驗裡，讓 758 名 BCG 顧問分組完成模擬顧問任務。結果發現：當任務落在 AI 能力邊界之外時，使用 AI 的顧問，給出錯誤解決方案的比例反而比完全不用 AI 的組別更高。",
                  "研究者將此現象形容為「Falling Asleep at the Wheel（把方向盤交給自動駕駛後睡著了）」，指的是顧問因為過度信任 AI 的產出，反而停止了自己的獨立判斷。",
                  "如果 AI 寫了一份投資策略或市場判斷，你照著做結果公司賠了一千萬，你能開除 AI 嗎？不行，被開除的還是你。策略好不好、報告有沒有洞察，這些都需要人類親自判斷，無法自動驗證。當流程被重組，我們發現最難外包給 AI 的，其實是「承擔後果的責任」。"
              ]
          },
          {
              "title": "五、未來最搶手的人才：不是 Prompt 大師，是「流程設計師」",
              "deck": "未來真正稀缺的人才，是那些能重新設計系統、發包與驗收的人。",
              "paragraphs": [
                  "現在很多人在焦慮要不要去上「AI 詠唱課（Prompt Engineering）」。但說實話，當 AI 越來越聰明，未來跟 AI 溝通就像跟人講話一樣自然，根本不需要背什麼複雜的指令。",
                  "McKinsey Global Institute 在 2023 年的報告《生成式 AI 的經濟潛力》中估計，生成式 AI 預計可自動化現今知識工作者 60% 到 70% 的日常工作活動。這意味著知識工作者的核心價值，必須從「內容生產者」轉向「內容審查員與流程設計師」。",
                  "未來真正稀缺、真正搶手的人才，是那些具備「重新設計系統能力」的人。未來的專案裡，真正困難的不再是「產出」，而是「發包與驗收」。",
                  "他們知道在一個專案裡，哪一段應該無情地丟給 AI 去高速運算，哪一段必須死死地握在人類手裡，用人的溫度去溝通、用人的道德去判斷、並用人的肩膀去扛起責任。",
                  "Microsoft 在 2024 年的《工作趨勢指數（Work Trend Index）》中也指出：真正從 AI 獲益最多的企業，並不只是發放 AI 軟體這麼簡單，而是主動重塑業務流程，大刀闊斧砍掉不必要的舊環節。",
                  "別再把你的工廠蓋在河邊了。看懂 AI 的邏輯，然後勇敢地去打破那些蠢規定吧！"
              ],
              "pullquote": "未來真正困難的不再是產出，而是發包與驗收。"
          }
      ],
      "interactionBlocks": [
          {
              "type": "questions",
              "title": "辦公室 / 報告分組 災難檢測站",
              "subtitle": "你的團隊，是不是還卡在「河邊的工廠」？請誠實勾選你們平時做報告或工作的真實狀況。",
              "items": [
                  "A. 俄羅斯娃娃現象：同事 / 同學用 AI 把短話拉長，我再用 AI 把長話縮短。",
                  "B. 精緻的廢物：報告看起來排版超美、字數超多，但其實沒有人知道重點是什麼，連報告的人也是剛剛才看。",
                  "C. 盲目填坑：當有個繁瑣的文書工作出現，大家的第一反應是「找個菜鳥來做」，而不是問「這東西能不能用 AI 自動化」。",
                  "D. 甩鍋給機器：「這不是我寫錯，是 ChatGPT 給我的資料就是這樣！」出事了沒人想負責。"
              ]
          },
          {
              "type": "quote",
              "title": "檢測結果",
              "subtitle": "如果你中了兩個以上，恭喜你，你們成功把最先進的 AI，降級成了最貴的打字機。",
              "quote": "你們擁有蒸汽機，卻還在旁邊努力踩水車。"
          }
      ],
      "sources": [
          [
              "Upwork Research Institute",
              "2024 年《AI 增能工作模型》研究指出，96% 的 C-suite 主管期望 AI 提升生產力，但 77% 的員工反映 AI 反而增加工作量。",
              "https://www.upwork.com/research/ai-powered-work"
          ],
          [
              "Harvard Business School / BCG",
              "Dell'Acqua、Mollick 等人的《Navigating the Jagged Technological Frontier》指出，任務超出 AI 能力邊界時，使用 AI 的顧問更容易給出錯誤答案。",
              "https://www.hbs.edu/faculty/Pages/item.aspx?num=64700"
          ],
          [
              "McKinsey Global Institute",
              "《生成式 AI 的經濟潛力》估計，生成式 AI 可自動化或強化知識工作者約 60% 至 70% 的日常工作活動。",
              "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier"
          ],
          [
              "Microsoft Work Trend Index",
              "2024 年《AI at Work Is Here. Now Comes the Hard Part》指出，真正從 AI 獲益最多的企業會主動重塑業務流程。",
              "https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part"
          ]
      ],
      "takeaway": "真正的 AI 創新不是把工具塞進舊流程裡，而是重新設計工作本身：讓 AI 承擔可以高速處理的部分，讓人回到定義問題、驗收結果與承擔責任的位置。"
  },
  4: {
    deck: "L｜Learning",
    title: "當整理知識變便宜：學生還需要學什麼？",
    coreQuestion: "如果知識取得變得像叫外送一樣簡單，學習到底還剩下什麼？",
    summary: [
      "AI 可以幫你整理重點、寫摘要、做簡報，甚至回答作業問題。",
      "但如果知識取得變得像叫外送一樣簡單，學習到底還剩下什麼？",
      "當整理知識變便宜，真正昂貴的可能不再是取得答案，而是提出問題、判斷答案與形成自己的觀點。"
    ],
    lead: [
      "如果大學生宿舍突然搬來一個新室友。他不用睡覺。不用吃飯。不用期中考。不用期末報告。訊息永遠秒回。而且無論你問什麼，他都會先回你：「這是一個很有趣的問題。」",
      "他可以幫你整理筆記、翻譯論文、濃縮報告、做簡報、想架構，甚至連分組報告裡那個永遠消失的組員工作都一起做完。",
      "以前大學生最常問的是：「這份報告怎麼寫？」現在比較常問的是：「這份報告到底哪些是我寫的？」",
      "AI 進入校園後，真正改變的不只是效率。而是學習裡面很多原本昂貴的事情，突然變便宜了。",
      "而當整理知識變便宜，學習本身會變成什麼樣子？"
    ],
    sections: [
      {
        title: "一、以前的學習，是一段很麻煩的路",
        deck: "以前學習很累，但也因為麻煩，學生被迫知道知識從哪裡來。",
        paragraphs: [
          "很多人以為學習是吸收知識。但對大學生來說，學習有一半時間其實是在跟知識玩躲貓貓。",
          "老師出一個題目。你打開 Google。點進十個分頁。關掉八個。剩下兩個彼此打架。最後開始懷疑到底誰在說真話。",
          "以前的學習很像在圖書館尋寶。你要自己找地圖。自己判斷方向。自己決定哪個線索值得相信。",
          "很累。但也因為如此，我們被迫知道知識從哪裡來。"
        ]
      },
      {
        title: "二、AI 讓知識整理突然變得很便宜",
        deck: "AI 最厲害的地方，不一定是創造知識，而是把知識整理得非常有效率。",
        paragraphs: [
          "AI 最厲害的地方，不一定是創造知識。而是把知識整理得非常有效率。",
          "以前看一篇四十頁的論文。像是在啃甘蔗。要慢慢咬。慢慢榨。最後才得到一點點重點。",
          "現在 AI 比較像直接遞給你一杯甘蔗汁。而且還幫你去冰。",
          "以前做報告像搬家。要自己打包。分類。整理。搬運。",
          "現在 AI 像那個已經搬過二十次家的朋友。你還在找紙箱。它已經貼好標籤了。"
        ],
        pullquote: "AI 最厲害的地方，不一定是創造知識，而是把知識整理得非常有效率。"
      },
      {
        title: "三、最容易被 AI 接手的，未必是最重要的部分",
        deck: "AI 可以濃縮一本書，但也可能把猶豫、限制與爭議一起濃縮掉。",
        paragraphs: [
          "很多學生第一次用 AI 的感覺都很類似。前五分鐘：「這也太神了吧。」半小時後：「這真的可以交出去嗎？」期末週：「拜託不要當機。」",
          "因為 AI 接手的事情，剛好都是大家最不想做的部分。整理。摘要。分類。濃縮。",
          "但這裡有個問題。如果 AI 幫你把一本書濃縮成一頁。它也可能把作者的猶豫、限制與爭議一起濃縮掉。",
          "就像看電影十分鐘解說版。你知道劇情。卻不一定真的看過電影。"
        ]
      },
      {
        title: "四、未來最值錢的能力，可能是問問題",
        deck: "當回答問題變得便宜，價值會從回答問題的人，轉向提出問題的人。",
        paragraphs: [
          "過去教育很像問答遊戲。老師負責出題。學生負責回答。",
          "但 AI 出現後，回答問題開始變得像影印店印 A4 一樣便宜。於是價值開始轉移。從回答問題的人，變成提出問題的人。",
          "因為問題問錯了，AI 再厲害也幫不了你。",
          "這有點像導航。導航很聰明。但如果你把目的地輸入墾丁，它不會突然良心發現說：「你確定嗎？你明天要在台北上課欸。」",
          "它只會非常有效率地把你送去錯的地方。"
        ],
        pullquote: "回答問題開始變得像影印店印 A4 一樣便宜，於是價值開始轉移。"
      },
      {
        title: "五、學生不是變笨，而是被重新訓練",
        deck: "AI 不代表能力消失，而是能力正在搬家：從記住答案，搬到判斷答案。",
        paragraphs: [
          "每個時代的工具都會改變人的習慣。計算機出現後，我們比較少心算。Google 出現後，我們比較少背資料。AI 出現後，我們比較少整理資訊。",
          "這不代表能力消失。而是能力正在搬家。",
          "以前重要的是記住答案。現在重要的是判斷答案。",
          "以前怕找不到資料。現在比較怕資料看起來都很合理。",
          "如果說搜尋時代的問題是：「我找不到答案。」那 AI 時代的問題可能是：「答案來得太快，我還來不及懷疑。」"
        ]
      },
      {
        title: "六、當知識整理變便宜，思考反而變貴了",
        deck: "AI 可以幫你完成一份厲害的報告，但它無法替你形成自己的想法。",
        paragraphs: [
          "如果把知識比喻成食材。過去學生要自己買菜。洗菜。切菜。備料。",
          "現在 AI 幾乎把前置作業都做完了。甚至還順便幫你擺盤。但再方便的料理包，也不能替你決定想吃什麼。",
          "同樣地。AI 可以幫你整理知識。幫你找到答案。幫你建立架構。但它無法替你形成觀點。無法替你做價值判斷。也無法替你承擔判斷錯誤的責任。",
          "如果說過去教育是在訓練學生如何取得知識。那 AI 時代的教育，或許更像是在訓練學生：當所有人都拿得到知識時，你如何決定相信什麼。以及為什麼相信。",
          "畢竟 AI 可以幫你完成一份看起來很厲害的報告。但老師最後最想問的，可能還是那一句：「所以，你自己的想法是什麼？」"
        ],
        pullquote: "當所有人都拿得到知識時，你如何決定相信什麼，以及為什麼相信。"
      }
    ],
    takeaway: "當整理知識變便宜，學習不會消失，而會轉向更難外包的能力：提出問題、判斷答案、理解脈絡、形成觀點，並為自己的想法負責。"
  },
  5: {
    deck: "E｜Exploration",
    title: "十年後回頭看：當智慧被大量調度，人的專業將退守到哪裡？",
    coreQuestion: "當「給出正確答案」的成本在技術層面上趨近於零，人類專屬的專業含金量究竟要退守到哪裡？",
    summary: [
      "當智慧被大量調度，人的專業將退守到哪裡？",
      "當前四篇報導證實 AI 正在重塑科學理解、媒體信任、工作流程與教育現場後，最後的問題會回到人本身。",
      "AI 像一把銼刀削去工具人與資料庫的贅肉，迫使人重新尋找無法被材料化的提問、判斷、責任與人性殘留物。"
    ],
    lead: [
      "站在未來十年的時間軸上，這項被稱為「可調度的智慧」的新材料，已經無情地完成了對人類社會的板塊重組。",
      "當前四篇報導證實了 AI 正在全面重塑科學理解、媒體信任、工作流程與教育現場後，我們終將迎來那個最核心、也最迴避不了的終極詰問：當「給出正確答案」的成本在技術層面上趨近於零，人類專屬的專業含金量，究竟要退守到哪裡？",
      "這從來都不是一場優雅的科技升級，而是一場充滿集體焦慮的「逆向重塑」。AI 就像一把極其鋒利的銼刀，正無情地削去人類身上扮演工具人與資料庫的贅肉，逼著我們直視那無法被材料化、最純粹的「人性殘留物」。"
    ],
    sections: [
      {
        title: "一、專業的「去聖化」與白領階級的同質化焦慮",
        deck: "當智慧成為可以訂閱、按需調度的材料，高知識儲備不再自然等於不可取代。",
        paragraphs: [
          "走進當前的企業與知識生產現場，傳統由高學歷、高知識儲備所築起的「專業壁壘」，正在成片崩塌。一個寒窗苦讀十幾年、歷經無數次國家考試或嚴格內訓的高階法務、資深會計師或軟體工程師，正目睹生成式 AI 在數秒內產出一份結構嚴密、法條引用毫無破綻的合約草案、審計報告或底層代碼。",
          "這種衝擊與過去自動化科技取代藍領勞工的邏輯完全不同。傳統機器取代的是體力與機械式操作，而生成式 AI 重擊的，恰恰是人類過去用來標榜自身高貴、精英特質的「腦力勞動」。",
          "這種現象可以被稱為專業價值的「去聖化（Desanctified）」。在過去，擁有豐富知識存量、精準記誦法條或熟練操作複雜軟體的人，在社會上被尊稱為專家，享有極高的社會地位與經濟回報。",
          "然而，當智慧變成一種可以隨時訂閱、按需調度的材料時，這些曾經耗費數年乃至數十年建立的技能壁壘，在個體層面上瞬間被抹平。這導致白領精英面臨的不是立即性的肉體失業，而是深層的專業認同崩解。",
          "過去我們引以為傲的「寒窗苦讀」，在幾秒鐘內被技術材料化了。這不是生存的危機，而是尊嚴的危機。",
          "根據劍橋大學與經濟合作暨發展組織（OECD）發表的最新勞動力研究指出，生成式 AI 的普及已經打破了傳統的學歷保護傘，在社會中引發了一場「跨教育水平的同質化焦慮（AI Anxiety）」。",
          "數據顯示，高學歷白領階層與傳統低學歷勞工在面對技術衝擊時，內心的恐懼感與邊緣化危機在 2026 年首次呈現拉平的趨勢。這種集體的心理焦慮，正深刻地搖撼著精英階層長久以來的認同體系。當大腦的工具性價值不再稀缺，白領階級必須在焦慮中重新尋找自己與機器的邊界。"
        ],
        pullquote: "過去我們引以為傲的寒窗苦讀，在幾秒鐘內被技術材料化了。這不是生存的危機，而是尊嚴的危機。"
      },
      {
        title: "二、消失的學徒：黑盒子依賴與高階能力的廢用性萎縮",
        deck: "沒有底層實踐的泥濘摸索，人類很難長出高階的直覺、遠見與審查能力。",
        paragraphs: [
          "在技術樂觀論者的敘事中，初階、重複性的任務，如寫初稿、基礎除錯、跑底層數據，外包給 AI 後，人類就能輕鬆地解脫出來，直接跳級去執行「高階決策」、「戰略思考」與「創意發想」。",
          "然而，這種理想的「人機協作」模型背後，隱藏著一個巨大的認知陷阱：沒有底層實踐的泥濘摸索，人類根本長不出高階的直覺、遠見與審查能力。",
          "這就像是「自動駕駛的代價」：如果一名司機從掌握方向盤的第一天起就完全依賴自動導航，他將永遠學不會在沒有訊號時看懂地圖、感受輪胎與路面的摩擦力、以及應對打滑等突發危機的本能。",
          "在職場上也是如此，任何行業的頂尖專家，都是從初階助理、實習生開始，透過無數次撰寫基礎會議記錄、校對合約、手動跑數據等看似枯燥的「學徒期」任務，才在潛移默化中累積出對細節的敏銳度、商業直覺與危機感。",
          "當企業為了追求極致的季度效率，開始有意識地用 AI 砍掉所有初階外圍職位，決定「不再雇用初階助理與實習生」時，便直接斬斷了傳統學徒制的孵化鏈。這種現象帶來了嚴重的「專業廢用性萎縮（Disuse Atrophy）」。",
          "美國國家經濟研究所（NBER）在探討工作者生產力的論文中揭示，生成式 AI 雖然能瞬間拉平新手與專家的效率，抹平經驗差距，但這種「盲目依賴黑盒子輸出」的捷徑，長期來看正在悄悄侵蝕人類與組織的長期創新能力。",
          "大腦不去思考，論證與查證的肌肉就會退化。十年後，當現有的這批經歷過傳統訓練、懂得如何挑出 AI 錯誤的老專家相繼退休，那些從未在底層泥濘中摸索過、只學會「對 AI 下提示詞」的全新世代，是否真的有能力開箱審查黑盒子所犯下的、那些真假難辨的精準錯誤？我們可能正親手製造一個集體判斷力集體退化的未來。"
        ]
      },
      {
        title: "三、板塊位移（上）：從「掌握解答」退守到「定義問題」",
        deck: "在智慧唾手可得的時代，社會不缺標準答案，而缺能夠指明方向的人。",
        paragraphs: [
          "面對這場空前的專業危機，人類專業的第一個退守地與新基地，是由「解答者」轉型為「定義者」。這要求我們的技能模型發生根本性的板塊位移。",
          "呼應本專題前幾篇所提到的現象：在媒體端（Media），資訊不再只是被找到，而是被直接生成答案；在教育端（Learning），大學生發現傳統的資料整理與摘要變得無比便宜。這意味著，在材料極度充裕、智慧唾手可得的時代，社會不再缺乏「給出標準答案」的機器，而是極度缺乏「能夠指明方向」的人。",
          "舊時代的專業：以「知識儲備量」為壁壘，誰能最快、最準確地從腦中調出答案，誰就是專家。新材料時代的專業：以「情境理解力」與「問題設定能力（Problem Framing）」為邊界。",
          "專業的架構師必須具備穿透複雜表象的洞察力。當客戶給出一個模糊、混亂的商業需求時，AI 只能根據字面意思給出通俗的解答；但真正的專家能透過對人類情感、政治環境、歷史脈絡的深刻理解，看穿客戶「真正沒說出口的痛點」，進而重新定義問題，將其拆解為可以調度 AI 來精準解決的高價值任務。",
          "諾貝爾經濟學獎得主 Daron Acemoglu 在其經典的任務型模型（Task-based framework）研究中就曾指出，技術自動化帶來的「替代效應」必然會重構整個組織流程，但在新舊職位交替的過程中，全社會正全面面臨嚴重的「技能錯配（Skill Mismatch）」。",
          "那些固守舊有執行邏輯、無法從「被動解答」跨越到「主動定義問題」的知識勞動者，將在這場結構大洗牌中面臨殘酷的生存考驗；而唯有成功轉型為問題設計者的人，才能真正站在材料之上，成為指揮智慧矩陣的將領。"
        ],
        pullquote: "在材料極度充裕、智慧唾手可得的時代，社會不再缺乏給出標準答案的機器，而是極度缺乏能夠指明方向的人。"
      },
      {
        title: "四、板塊位移（下）：終極的護城河——責任的不可轉讓性",
        deck: "智慧可以被生成，但信任與責任永遠無法被外包。",
        paragraphs: [
          "當智慧可以被無限量產、廉價調度並任意嵌入所有流程，人類專業的終點與最堅固的護城河，終將回歸到一個極具重量的概念：「責任的不可轉讓性（The Non-transferability of Responsibility）」。",
          "智慧可以被生成，但「信任」與「責任」永遠無法被外包。這是人機關係中最核心的政治與倫理邊界。我們不妨將鏡頭拉到醫療、法律或重大商業決策的極端情境中：AI 診斷系統可以憑藉海量病例與超強算力，給出高達 99.9% 的精準手術建議；法律 AI 可以寫出最符合利益、勝率高達 95% 的訴訟策略。",
          "然而，當那 0.1% 的醫療事故發生、或者 5% 的冤獄成真時，坐在被告席上的、要在手術同意書上簽字的、要面對病患家屬眼淚與社會排山倒海譴責的，永遠只能是人類醫生與人類法官。",
          "機器不需要承擔代價，機器不會坐牢，機器更沒有靈魂去感受內疚與道德課責。因此，人的專業，恰恰就是那個在流程最後一哩路、願意為了結果而承擔歷史、法律與道德代價的轉折點。",
          "AI 負責推導、模擬與大規模生成，而人類負責做出最終的「價值選擇（Value Judgment）」、負責與另外一個人類產生共情、並用自己的職業生涯與名譽去為結果簽字負責。這正是專業在金錢與效率之外，最不可被材料化的神聖光輝。",
          "然而，這條護城河目前正面臨著尷尬的體制悖論。正如世界經濟論壇（WEF）在最新的人本技能報告（Human-Centric Skills）中指出：儘管全球雇主與學者一致公認，創造力、批判思考、同理心與責任承擔，是未來人類對抗機器的終極核心競爭力；但在現行的商業與教育考評體制中，這些技能依然是隱形且極難被有效評估、認證與定價的。",
          "我們的大學期末考依然在用申論題背誦給分，企業的 HR 篩選系統依然在用多益分數、GPA、標準化證照等舊時代指標來衡量一個人的價值。這種「考評機制嚴重落後於時代技術」的體制悖論，導致許多學生與職場新人在高喊人本精神的同時，卻只能無奈地陷入「用 AI 應付舊體制」的虛無主義。如何重新設計人的評價體系，是我們這代人最迫切的集體任務。"
        ]
      },
      {
        title: "五、結語：逆向重塑的「人類元年」",
        deck: "這不是人類專業的黃昏，而是人類擺脫工具人詛咒、重回歷史主體性的起點。",
        paragraphs: [
          "全面回扣本專題第一篇（Science）的科技史視野。在生成式 AI 誕生之初，人類曾興奮地以為自己造出了一面明亮、巨大的鏡子，可以用來向宇宙炫耀人類的造物主智慧有多麼偉大；但十年後回頭看，這項被大量調度、深深嵌入社會結構的智慧材料，其實是一把極其鋒利的銼刀。",
          "它殘忍、冰冷、且不留情面地削去了我們過去引以為傲的記憶力、資訊整理力、文本摘要力、甚至是熟練的工具操作能力。它把人類逼入牆角，逼著我們退出那些曾經沾沾自喜的技能舒適圈。",
          "然而，當這些外圍的工具屬性、結構性贅肉被通通剝離之後，人類專業所退縮、堅守的終點，恰恰就是我們文明最初出發的起點：那是那顆願意主動提問、永不滿足的好奇心；那是那雙敢於推翻黑盒子、拒絕盲從的批判眼睛；以及，那是那副願意在不確定性中做出選擇、並為最終決定付出代價的、人類的肩膀。",
          "這絕非人類專業的終結與黃昏，而是人類真正擺脫「工具人」詛咒、重回歷史主體性的「逆向重塑」起點。歡迎來到人類真正學會如何為人的全新紀元。"
        ],
        pullquote: "這絕非人類專業的終結與黃昏，而是人類真正擺脫工具人詛咒、重回歷史主體性的逆向重塑起點。"
      }
    ],
    sources: [
      ["Chueri & Kurer", "AI, the Future of Work, and the Politics of the Welfare State. Perspectives on Politics, Cambridge University Press.", "https://www.cambridge.org/core/journals/perspectives-on-politics/article/ai-the-future-of-work-and-the-politics-of-the-welfare-state/92E806B812B86A8944003B77038DCAA8"],
      ["Agrawal, Gans & Goldfarb", "Enhancing Worker Productivity Without Automating Tasks. National Bureau of Economic Research Working Paper Series.", "https://www.nber.org/system/files/working_papers/w34781/w34781.pdf"],
      ["Acemoglu & Restrepo", "Artificial Intelligence, Automation and Work. National Bureau of Economic Research Working Paper Series.", "https://www.nber.org/system/files/working_papers/w24196/w24196.pdf"],
      ["Westover", "Human-Centric Skills in the New Economy: Preparing the Future Workforce. World Economic Forum Insight Series / Preprints.", "https://www.preprints.org/manuscript/202602.1785"]
    ],
    takeaway: "當給出答案的成本趨近於零，人類專業的核心會退守到問題定義、情境理解、價值判斷與責任承擔。AI 可以調度智慧，但人仍然必須決定方向，並為結果付出代價。"
  }
};

const withAiMeta = (issue, index = Math.max(0, (issue?.id || 1) - 1)) => {
  const meta = aiMeta[index] || aiMeta[0];
  const article = aiArticleDetails[issue?.id] || {};
  const labelMap = {
    "SMILE Angle": "SMILE 視角",
    "Key Shift": "關鍵轉變",
    "Human Role": "人的角色"
  };
  return {
    ...issue,
    ...article,
    moduleStatus: issue.moduleStatus || meta.moduleStatus,
    signal: issue.signal || meta.signal,
    coreQuestion: article.coreQuestion || issue.coreQuestion || meta.coreQuestion,
    sidebarStats: issue.sidebarStats || { points: meta.points.map(([label, value]) => ({ label: labelMap[label] || label, value })) }
  };
};

function ChapterSwitcher({ mode, onGui, onSocial, onAi, dark = false, align = "right" }) {
  const chapters = [
    { key: "gui", no: "01", title: "GUI", color: "amber", onClick: onGui },
    { key: "social", no: "02", title: "SOCIAL", color: "indigo", onClick: onSocial },
    { key: "ai", no: "03", title: "AI", color: "cyan", onClick: onAi }
  ];

  return (
    <div className={`flex items-center gap-2 rounded-xl border px-2 py-1.5 backdrop-blur-md ${align === "center" ? "justify-center" : ""} ${dark ? "border-slate-700/60 bg-slate-950/45 text-slate-500" : "border-slate-300/70 bg-white/55 text-slate-500"}`}>
      <span className="hidden md:inline font-mono text-[9px] tracking-[0.28em] text-slate-500 mr-1">篇章</span>
      {chapters.map((chapter) => {
        const active = mode === chapter.key;
        const activeClass = chapter.color === "amber"
          ? "text-amber-400"
          : chapter.color === "indigo"
            ? "text-indigo-400"
            : "text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.35)]";
        const dotClass = chapter.color === "amber" ? "bg-amber-400" : chapter.color === "indigo" ? "bg-indigo-400" : "bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.65)]";
        return (
          <React.Fragment key={chapter.key}>
            <button
              onClick={chapter.onClick}
              className={`group flex items-center gap-1.5 px-1.5 md:px-2 py-1 font-mono text-[10px] tracking-[0.18em] transition-colors ${active ? activeClass : dark ? "hover:text-slate-200" : "hover:text-slate-900"}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full transition-opacity ${active ? dotClass : "bg-slate-600/50 opacity-40 group-hover:opacity-80"}`}></span>
              <span>{chapter.no}</span>
              <span className="hidden lg:inline">{chapter.title}</span>
            </button>
            {chapter.key !== "ai" && <span className="font-mono text-slate-500/50 text-xs px-0.5 md:px-1">/</span>}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function Header({ isHome, mode, setMode, setGuiView, setSocialView, setAiView }) {
  const dark = isHome || mode === "ai";
  const goGui = () => { setMode("gui"); setGuiView(0); setSocialView(0); setAiView(0); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const goSocial = () => { setMode("social"); setSocialView(0); setAiView(0); setGuiView(0); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const goAi = () => { setMode("ai"); setAiView(0); setSocialView(0); setGuiView(0); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <header className={`fixed top-0 w-full z-50 ${dark ? "bg-slate-950/85 border-b border-slate-800" : "bg-white/95 border-b border-slate-200 shadow-sm"} backdrop-blur-md`}>
      <div className="w-full px-6 md:px-12 py-4 flex justify-between items-center">
        <button className="flex items-center gap-3 group" onClick={goGui}>
          <Smile size={28} className={mode === "social" ? "text-indigo-500" : mode === "ai" ? "text-cyan-400" : "text-amber-500"} />
          <h1 className={`text-xl md:text-2xl font-black tracking-widest font-serif ${dark ? "text-white" : "text-slate-900"}`}>
            SMILE <span className="text-xs md:text-sm font-medium tracking-[0.3em] hidden sm:inline-block ml-2 border-l border-slate-600 text-slate-400 pl-3">科技誌</span>
          </h1>
        </button>
        <div className="flex items-center gap-2 md:gap-3">
          <ChapterSwitcher mode={mode} onGui={goGui} onSocial={goSocial} onAi={goAi} dark={dark} />
          {!isHome && (
            <button onClick={() => mode === "gui" ? setGuiView(0) : mode === "social" ? setSocialView(0) : setAiView(0)} className={`flex items-center gap-1.5 px-2 py-2 text-[10px] md:text-xs font-bold tracking-widest transition-colors ${mode === "ai" ? "text-cyan-300 hover:text-white" : "text-slate-500 hover:text-slate-950"}`}>
              <ArrowLeft size={14} /> <span className="hidden md:inline">返回期數總覽</span><span className="md:hidden">返回</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

function renderArticleContent(content, fallback, dark = false) {
  const body = content || fallback;
  if (!Array.isArray(body)) return body;
  return body.map((p, i) => (
    i === 1
      ? <React.Fragment key={i}><h3>{dark ? "模組讀取" : "專題觀察"}</h3><p>{p}</p></React.Fragment>
      : <p key={i}>{p}</p>
  ));
}

function ArticlePage({ mode, issue, index, total, onPrev, onNext, onHome, onGui, onSocial, onAi, onSelect }) {
  const ai = mode === "ai";
  const social = mode === "social";
  const [readProgress, setReadProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("section-1");

  useEffect(() => {
    if (!ai) return;
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0;
      setReadProgress(progress);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, [ai, issue?.id]);

  useEffect(() => {
    if (!ai) return;
    const observed = Array.from(document.querySelectorAll("[id^='section-']")).filter((node) => node.id !== "section-0");
    if (!observed.length) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target?.id) setActiveSection(visible.target.id);
    }, { rootMargin: "-25% 0px -58% 0px", threshold: [0.05, 0.2, 0.45] });
    observed.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [ai, issue?.id]);

  if (ai) {
    const dossier = withAiMeta(issue, index);
    const deckText = Array.isArray(dossier.summary) && dossier.summary.length
      ? dossier.summary[0]
      : dossier.desc || dossier.coreQuestion;
    const sections = dossier.sections && dossier.sections.length
      ? dossier.sections
      : [
          {
            title: "專題導讀",
            paragraphs: [
              dossier.desc || dossier.coreQuestion,
              "這個模組不是一篇普通文章，而是 SMILE Core OS 中的一個系統指令。它追問 AI 如何重新分配智慧、信任、流程、學習與專業責任。"
            ]
          },
          { title: "核心問題", paragraphs: [dossier.coreQuestion] },
          { title: "報導觀察", paragraphs: ["當智慧可以被大量調度，人類的價值不只在執行，而在判斷、定義與承擔。"] },
          { title: "本篇小結", paragraphs: [dossier.coreQuestion] }
        ];
    const cleanSectionTitle = (title) => title.replace(/^.+?、/, "");
    const pullQuoteTitles = sections.filter((section) => section.pullquote).slice(0, 3).map((section) => section.title);
    const readingRoute = dossier.smileKey === "Media"
      ? "搜尋 → 生成 → 信任 → 媒體 → 查證"
      : dossier.smileKey === "Innovation"
        ? "流程 → 分工 → 決策 → 重構"
        : dossier.smileKey === "Learning"
          ? "整理 → 提問 → 判斷 → 學習"
          : dossier.smileKey === "Exploration"
            ? "任務 → 專業 → 責任 → 未來"
            : "工具 → 材料 → 智慧 → 結構";
    const insightText = dossier.smileKey === "Media"
      ? "本篇對應 SMILE 中的 Media，關注的不是 AI 搜尋工具本身，而是當答案被生成後，資訊來源、媒體角色與讀者判斷能力如何被重新定義。"
      : dossier.smileKey === "Innovation"
        ? "本篇對應 SMILE 中的 Innovation，關注 AI 如何不只是加入工作流程，而是迫使組織重新設計流程、分工與決策方式。"
        : "本篇對應 SMILE 中的 " + dossier.smileKey + "，關注的不是 AI 工具有多方便，而是它如何改變資訊、工作、學習與人的判斷方式。";
    const takeawayText = dossier.takeaway
      ? dossier.takeaway
      : dossier.smileKey === "Media"
      ? "當 AI 成為資訊入口，真正被改寫的不只是搜尋方式，而是來源被看見的方式、媒體被需要的理由，以及讀者必須鍛鍊的判斷能力。"
      : Array.isArray(dossier.summary) && dossier.summary.length
        ? dossier.summary[dossier.summary.length - 1]
        : dossier.coreQuestion;
    const keywordText = dossier.smileKey === "Media"
      ? "AI 搜尋、生成式資訊、來源可信度、媒體角色"
      : dossier.smileKey === "Innovation"
        ? "AI 流程、組織創新、工作再設計、決策方式"
        : dossier.smileKey === "Learning"
          ? "AI 學習、知識整理、提問能力、批判思考"
          : dossier.smileKey === "Exploration"
            ? "未來工作、專業價值、責任判斷、人機分工"
            : "智慧材料、AI 時代、科技本質、人類判斷";
    const buildSectionDeck = (section) => {
      if (section.deck) return section.deck;
      const title = section.title || "";
      const paragraph = (section.paragraphs && section.paragraphs[0]) || "";
      if (title.includes("搜尋時代")) return "在搜尋時代，讀者雖然辛苦，但至少看得見來源。";
      if (title.includes("生成時代")) return "AI 不是只幫我們找資料，而是把資料重新包裝成一個答案。";
      if (title.includes("信任危機")) return "最需要警覺的不是 AI 會錯，而是錯誤也可能被說得很流暢。";
      if (title.includes("媒體困境")) return "當原始報導被揉進生成答案裡，媒體的價值也被重新考驗。";
      if (title.includes("讀者")) return "資訊環境正在重新訓練我們相信答案的方式。";
      if (title.includes("答案送到")) return "AI 可以是起點，但不該取代看來源、看日期、看脈絡的習慣。";
      if (title.includes("媒體的新角色")) return "在生成式答案變多之後，媒體更需要留下可追溯的判斷痕跡。";
      if (title.includes("答案越方便")) return "答案變快，不代表真相變近；越方便，越需要慢一點相信。";
      return paragraph.length > 46 ? paragraph.slice(0, 46) + "。" : paragraph;
    };
    const hookLine = dossier.smileKey === "Science"
      ? "如果 AI 不只是工具，而是一種新的時代材料，那麼人類正在失去的不是工作，而是對智慧的壟斷。"
      : dossier.smileKey === "Media"
        ? "以前查資料，像是在網路裡迷路；現在 AI 直接把答案端上桌，但我們反而更難知道它從哪裡來。"
        : dossier.smileKey === "Innovation"
          ? "當 AI 進入組織，真正被重寫的不是某個任務，而是工作流程本身。"
          : dossier.smileKey === "Learning"
            ? "當整理知識變得便宜，學生真正要練的，不再只是答案，而是提出問題的能力。"
            : "當正確答案變得廉價，人類的專業必須退守到提問、判斷與承擔責任。";
    const actMeta = [
      { title: "問題出現", deck: "先看見這篇文章真正要處理的裂縫：新技術不是單點變化，而是整個時代結構的鬆動。" },
      { title: "結構改變", deck: "接著追蹤這個變化如何進入制度、流程與日常習慣，讓原本穩定的判斷框架開始位移。" },
      { title: "人的回應", deck: "最後回到人本身：當 AI 能替我們做更多事，人還需要保留什麼能力與責任。" }
    ];
    const actSize = Math.ceil(sections.length / 3);
    const sectionActs = actMeta.map((meta, actIndex) => ({
      ...meta,
      sections: sections.slice(actIndex * actSize, (actIndex + 1) * actSize),
      offset: actIndex * actSize
    })).filter((act) => act.sections.length);
    const checkpointText = (section) => {
      const title = section.title || "";
      if (title.includes("搜尋") || title.includes("生成")) return "這裡真正被改變的，不是答案數量，而是答案出現的方式。";
      if (title.includes("智慧成本") || title.includes("材料")) return "當智慧成本下降，人的價值會從記住答案，轉向定義問題與判斷方向。";
      if (title.includes("流程") || title.includes("工廠")) return "AI 的衝擊不只在效率，而在流程被重新設計後，人與機器如何分工。";
      if (title.includes("責任") || title.includes("人類")) return "越多智慧可以被調度，越需要有人為方向、價值與後果負責。";
      return buildSectionDeck(section);
    };
    const readerLabBlocks = dossier.interactionBlocks || [
      {
        type: "questions",
        title: "本篇三問",
        subtitle: "讀完這篇，先把問題帶回自己身上",
        items: [
          dossier.coreQuestion,
          "如果 AI 已經能處理更多答案，我真正需要練習的是什麼？",
          "這個模組提醒我重新檢查哪一種習慣、流程或判斷？"
        ]
      },
      {
        type: "quote",
        title: "編輯提醒",
        subtitle: "閱讀 AI，不只是理解工具，而是理解自己在智慧時代的位置。",
        quote: takeawayText
      }
    ];
    const nextIssue = index < total - 1 ? withAiMeta(aiSeries[index + 1], index + 1) : null;
    const nextPrompt = nextIssue
      ? "如果這一篇回答了「現在發生什麼」，下一篇會追問：這個變化如何改寫下一個模組？"
      : "五個模組已經走完，回到 AI 知識神經圖，重新看見 SMILE 終章的完整路線。";

    return (
      <main className="min-h-screen bg-[#020617] text-slate-200 pt-28 pb-24">
        <div className="fixed top-[72px] left-0 right-0 z-[9998] h-[2px] bg-slate-900">
          <div className="h-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.7)] transition-all duration-150" style={{ width: readProgress + "%" }}></div>
        </div>
        <div className="fixed inset-0 pointer-events-none grid-bg opacity-20"></div>
        <section className="relative z-10 mx-auto max-w-[1180px] px-5 md:px-8 py-8">
          <button onClick={onHome} className="mb-8 inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 hover:text-white">
            <ArrowLeft size={14} /> 回到 AI 知識神經圖 <span className="text-slate-600">/ CORE OS</span>
          </button>

          <header className="relative mb-16 border-b border-cyan-900/50 pb-14">
            <div className="absolute right-0 top-0 hidden h-72 w-72 rounded-full border border-cyan-300/10 md:block"></div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="border border-cyan-300/40 bg-cyan-300/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.24em] text-cyan-200">AI 終章專題</span>
              <span className="font-mono text-[10px] tracking-[0.24em] text-slate-500">SMILE 科技誌｜第三部曲</span>
            </div>
            <div className="font-mono text-[10px] tracking-[0.32em] text-cyan-400 mb-5">
              {dossier.deck || dossier.vol}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-[-0.04em] font-serif max-w-5xl">
              {dossier.title}
            </h1>
            <p className="mt-7 text-xl md:text-2xl leading-relaxed text-slate-300 font-serif max-w-4xl">
              {deckText}
            </p>
          </header>

          <section className="my-16">
            <p className="text-3xl md:text-5xl font-black font-serif leading-tight text-cyan-50">
              {hookLine}
            </p>
          </section>

          <section className="mb-14 border-l-4 border-cyan-300 bg-slate-950/70 p-6 md:p-7 max-w-4xl">
            <div className="font-mono text-[10px] tracking-[0.28em] text-cyan-300 mb-3">核心問題</div>
            <p className="text-xl md:text-2xl font-black text-cyan-50 leading-relaxed font-serif">
              {dossier.coreQuestion}
            </p>
          </section>

          <section className="my-14 border-y border-cyan-900/50 py-8">
            <div className="font-mono text-[10px] tracking-[0.3em] text-cyan-400 mb-6">本篇閱讀路線</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
              {sections.map((section, i) => (
                <a key={section.title} href={"#section-" + (i + 1)} className="group flex items-start gap-4">
                  <span className="font-mono text-cyan-500">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-slate-300 group-hover:text-cyan-200 transition-colors">{cleanSectionTitle(section.title)}</span>
                </a>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3 border-t border-cyan-900/40 pt-4 font-mono text-[10px] tracking-[0.2em] text-slate-500">
              <span>閱讀長度｜長篇專題</span>
              <span>路線｜{readingRoute}</span>
              <span>模組｜{dossier.smileKey}</span>
              <span>關鍵字｜{keywordText}</span>
            </div>
          </section>

          <nav className="xl:hidden mb-10 -mx-6 overflow-x-auto border-y border-cyan-900/40 px-6 py-3">
            <div className="flex min-w-max gap-3">
              {sections.map((section, i) => (
                <a key={section.title} href={"#section-" + (i + 1)} className={`border px-3 py-2 font-mono text-[10px] tracking-[0.18em] transition-colors ${activeSection === "section-" + (i + 1) ? "border-cyan-300 bg-cyan-300/15 text-white" : "border-cyan-900/50 bg-slate-950/70 text-cyan-200"}`}>
                  {String(i + 1).padStart(2, "0")}｜{cleanSectionTitle(section.title)}
                </a>
              ))}
            </div>
          </nav>

          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,720px)_260px] gap-8 xl:gap-9 items-start">
            <article className="ai-article-paper min-w-0">
              {dossier.sections ? (
                <>
                  {dossier.lead && (
                    <section id="section-0" className="ai-opening">
                      <div className="ai-opening-label">專題導讀</div>
                      <div className="ai-reading">
                        {dossier.lead.map((p, i) => (
                          <p key={i} className={i === 0 ? "lead-paragraph" : ""}>{p}</p>
                        ))}
                      </div>
                    </section>
                  )}

                  {sectionActs.map((act, actIndex) => (
                    <section key={act.title} className="mb-8">
                      <div className="my-20 border-t border-cyan-900/60 pt-10">
                        <div className="font-mono text-[10px] tracking-[0.32em] text-cyan-400 mb-4">ACT 0{actIndex + 1}</div>
                        <h2 className="text-3xl md:text-5xl font-black text-white font-serif">{act.title}</h2>
                        <p className="mt-4 text-lg text-slate-400 font-serif leading-relaxed max-w-2xl">{act.deck}</p>
                      </div>

                      {act.sections.map((section, localIndex) => {
                        const i = act.offset + localIndex;
                        return (
                          <React.Fragment key={section.title}>
                            <section id={"section-" + (i + 1)} className="scroll-mt-28 mb-24">
                              <header className="ai-section-head">
                                <div className="ai-section-number">{String(i + 1).padStart(2, "0")}</div>
                                <h2>{section.title}</h2>
                                <p>{buildSectionDeck(section)}</p>
                              </header>

                              <div className="ai-reading">
                                {section.paragraphs.map((p, idx) => (
                                  <p key={idx} className={idx === 0 ? "first-paragraph" : ""}>{p}</p>
                                ))}
                              </div>

                              {(i + 1) % 3 === 0 && (
                                <div className="my-14 border border-cyan-900/50 bg-cyan-950/10 p-6 md:p-7">
                                  <div className="font-mono text-[10px] tracking-[0.28em] text-cyan-300 mb-3">本節停靠站</div>
                                  <p className="text-xl font-black text-cyan-50 font-serif leading-relaxed">{checkpointText(section)}</p>
                                </div>
                              )}

                              {section.pullquote && pullQuoteTitles.includes(section.title) && (
                                <blockquote className="ai-pullquote">
                                  <p>「{section.pullquote}」</p>
                                </blockquote>
                              )}
                            </section>

                            {i === 0 && (
                              <div className="my-16 border-l-4 border-cyan-300 bg-slate-950/80 p-6 md:p-8">
                                <div className="font-mono text-[10px] tracking-[0.28em] text-cyan-300 mb-4">編者旁白｜SMILE 視角</div>
                                <p className="text-slate-300 leading-loose font-serif text-lg">{insightText}</p>
                              </div>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </section>
                  ))}

                  {readerLabBlocks && (
                    <section className="my-28 border-y border-cyan-900/50 py-14">
                      <div className="mb-10">
                        <div className="font-mono text-[10px] tracking-[0.3em] text-cyan-400 mb-3">讀者實驗室</div>
                        <h2 className="text-3xl md:text-5xl font-black text-white font-serif">把本篇問題帶回你的使用習慣</h2>
                        <p className="mt-4 text-slate-400 font-serif leading-relaxed">這不是測驗，而是幫你把文章中的問題，變成可以自我檢查的行動。</p>
                      </div>
                      <div className="space-y-8">
                      {readerLabBlocks.map((block) => (
                        <div key={block.title}>
                          {block.type === "table" && (
                            <div className="border border-cyan-900/50 bg-slate-950/70 p-6 md:p-7">
                              <h3 className="text-2xl font-black text-white mb-2 font-serif">{block.title}</h3>
                              <p className="text-slate-400 mb-6 leading-relaxed">{block.subtitle}</p>
                              <div className="divide-y divide-cyan-900/35">
                                {block.rows.map(([label, value]) => (
                                  <div key={label} className="grid grid-cols-1 md:grid-cols-[130px_1fr] gap-3 py-4">
                                    <strong className="text-cyan-300">{label}</strong>
                                    <span className="text-slate-300 leading-relaxed">{value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          {block.type === "questions" && (
                            <div className="border border-violet-900/50 bg-violet-950/10 p-6 md:p-7">
                              <h3 className="text-2xl font-black text-white mb-2 font-serif">{block.title}</h3>
                              <p className="text-slate-400 leading-relaxed">{block.subtitle}</p>
                              <ol className="mt-6 space-y-4">
                                {block.items.map((item, i) => (
                                  <li key={item} className="flex gap-4">
                                    <span className="font-mono text-cyan-300">{String(i + 1).padStart(2, "0")}</span>
                                    <span className="text-slate-300 leading-relaxed">{item}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>
                          )}
                          {block.type === "quote" && (
                            <div className="border-y border-cyan-900/50 py-10 text-center">
                              <div className="font-mono text-[10px] tracking-[0.28em] text-cyan-400 mb-4">編輯提醒</div>
                              <h3 className="text-2xl font-black text-white mb-4 font-serif">{block.title}</h3>
                              <p className="text-slate-400 mb-6 leading-relaxed">{block.subtitle}</p>
                              <p className="text-2xl md:text-3xl font-black font-serif text-cyan-50 leading-relaxed">「{block.quote}」</p>
                            </div>
                          )}
                        </div>
                      ))}
                      </div>
                    </section>
                  )}

                  {dossier.sources && (
                    <section className="mt-24 border-t border-cyan-900/50 pt-10">
                      <div className="font-mono text-[10px] tracking-[0.3em] text-cyan-400 mb-4">查證地圖</div>
                      <h2 className="text-3xl font-black text-white font-serif mb-8">這篇文章的判斷從哪裡來？</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {dossier.sources.map(([name, desc, url]) => (
                          <a key={name} href={url} target="_blank" rel="noreferrer" className="block border border-cyan-900/45 bg-slate-950/65 p-5 hover:border-cyan-300/70 transition-colors">
                            <h4 className="font-black text-white leading-tight">{name}</h4>
                            <p className="text-sm text-slate-400 mt-3 leading-relaxed">{desc}</p>
                            <div className="mt-4 font-mono text-[10px] tracking-[0.24em] text-cyan-400">查看來源 →</div>
                          </a>
                        ))}
                      </div>
                    </section>
                  )}
                </>
              ) : (
                <section id="section-1" className="scroll-mt-28">
                  <div className="my-12 border-l-4 border-cyan-300 bg-slate-950/70 p-6 md:p-7">
                    <div className="font-mono text-[10px] tracking-[0.28em] text-cyan-300 mb-4">SMILE 視角</div>
                    <p className="text-slate-300 leading-loose font-serif">{insightText}</p>
                  </div>
                  <div className="ai-reading">
                    {renderArticleContent(dossier.content, [
                      dossier.desc,
                      "這個模組不是一篇普通文章，而是 SMILE Core OS 中的一個系統指令。它追問 AI 如何重新分配智慧、信任、流程、學習與專業責任。",
                      "當智慧可以被大量調度，人類的價值不只在執行，而在判斷、定義與承擔。"
                    ], true)}
                  </div>
                </section>
              )}

              <section className="mt-24 relative overflow-hidden border border-cyan-300/30 bg-cyan-950/10 p-8 md:p-12">
                <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="font-mono text-[10px] tracking-[0.3em] text-cyan-300 mb-5">本篇小結</div>
                  <p className="text-2xl md:text-4xl font-black text-white leading-relaxed font-serif">{takeawayText}</p>
                </div>
              </section>

              <section className="mt-16 border-y border-cyan-900/50 py-8">
                <div className="font-mono text-[10px] tracking-[0.28em] text-cyan-400 mb-4">{nextIssue ? "下一篇預告" : "終章收束"}</div>
                {nextIssue ? (
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-end">
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.22em] text-slate-500 mb-3">{nextIssue.smileKey[0]}｜{nextIssue.smileKey}</div>
                      <h3 className="text-2xl md:text-3xl font-black text-white font-serif leading-tight">{nextIssue.title}</h3>
                      <p className="mt-4 text-slate-400 font-serif leading-relaxed">{nextPrompt}</p>
                    </div>
                    <button onClick={onNext} className="border border-cyan-900/60 bg-cyan-950/20 px-5 py-4 text-cyan-100 hover:border-cyan-400 transition-colors font-black">
                      閱讀下一篇 →
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-end">
                    <p className="text-slate-300 font-serif text-xl leading-relaxed">五個模組已經完成，回到 AI 知識神經圖，重新看見終章特刊的完整路線。</p>
                    <button onClick={onHome} className="border border-cyan-900/60 bg-cyan-950/20 px-5 py-4 text-cyan-100 hover:border-cyan-400 transition-colors font-black">
                      回到 AI 知識神經圖
                    </button>
                  </div>
                )}
              </section>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <button disabled={index === 0} onClick={index > 0 ? onPrev : undefined} className={index > 0 ? "border border-slate-800 bg-slate-950/70 px-5 py-4 text-left text-slate-300 hover:border-cyan-700 hover:text-cyan-200 transition-colors" : "border border-slate-900 bg-slate-950/30 px-5 py-4 text-left text-slate-700 cursor-not-allowed"}>
                  <div className="font-mono text-[10px] tracking-[0.22em] mb-2">上一篇</div>
                  <div className="font-black font-serif">← 上一篇模組</div>
                </button>
                <button onClick={onHome} className="border border-cyan-900/60 bg-cyan-950/20 px-5 py-4 text-center text-cyan-200 hover:border-cyan-400 transition-colors">
                  <div className="font-mono text-[10px] tracking-[0.22em] mb-2">返回</div>
                  <div className="font-black font-serif">回到 AI 知識神經圖</div>
                </button>
                <button disabled={index >= total - 1} onClick={index < total - 1 ? onNext : undefined} className={index < total - 1 ? "border border-slate-800 bg-slate-950/70 px-5 py-4 text-right text-slate-300 hover:border-cyan-700 hover:text-cyan-200 transition-colors" : "border border-slate-900 bg-slate-950/30 px-5 py-4 text-right text-slate-700 cursor-not-allowed"}>
                  <div className="font-mono text-[10px] tracking-[0.22em] mb-2">下一篇</div>
                  <div className="font-black font-serif">下一篇模組 →</div>
                </button>
              </div>
            </article>

            <aside className="hidden xl:block ai-reading-sidebar">
              <div className="ai-radar">
                <div className="ai-radar-kicker">READING RADAR</div>
                <nav aria-label="AI 章節閱讀雷達">
                  {sections.map((section, i) => {
                    const sectionId = "section-" + (i + 1);
                    const isActive = activeSection === sectionId;
                    return (
                      <React.Fragment key={section.title}>
                        <a href={"#" + sectionId} className={`ai-radar-link ${isActive ? "is-active" : ""}`}>
                          <span className="ai-radar-node" aria-hidden="true"></span>
                          <span>
                            <span className="ai-radar-number">{String(i + 1).padStart(2, "0")}</span>
                            <p className="ai-radar-title">{cleanSectionTitle(section.title)}</p>
                          </span>
                        </a>
                        {isActive && (
                          <div className="ai-radar-active-card">
                            <div className="ai-radar-active-label">正在閱讀 / ACTIVE NODE</div>
                            <p className="ai-radar-active-title">{cleanSectionTitle(section.title)}</p>
                            <p className="ai-radar-note">{buildSectionDeck(section)}</p>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </nav>
                <div className="ai-radar-meta">
                  <div>{dossier.deck || dossier.vol}</div>
                  <div>{dossier.moduleStatus}</div>
                  <button onClick={onHome} className="mt-4 text-left text-cyan-300/80 hover:text-cyan-100 transition-colors">
                    回到 AI 知識神經圖 →
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    );
  }
  if (social) {
    return (
      <main className="w-full bg-white pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <section className="relative w-full min-h-[430px] md:min-h-[520px] bg-slate-950 flex flex-col justify-end pb-12 md:pb-16 border-b-4 border-indigo-500 overflow-hidden">
          <img src={issue.imageUrl} alt={issue.imageAlt || issue.title} className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>
          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2.5 py-1 rounded text-[10px] font-mono tracking-widest uppercase"><ScanLine size={12} /> {issue.category}</span>
              <span className="inline-flex items-center gap-1.5 bg-slate-800/60 text-slate-300 border border-slate-700 px-2.5 py-1 rounded text-[10px] font-mono tracking-widest uppercase">ID: {issue.vol}</span>
              {issue.metrics && <span className="inline-flex items-center gap-1.5 bg-fuchsia-500/15 text-fuchsia-200 border border-fuchsia-500/30 px-2.5 py-1 rounded text-[10px] font-mono tracking-widest uppercase">Trigger: {issue.metrics.trigger}</span>}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.98] tracking-tight mb-7 max-w-5xl">{issue.title}</h1>
            {issue.metrics && (
              <div className="flex flex-wrap gap-5 font-mono text-[10px] tracking-widest text-indigo-200/80 uppercase">
                <span className="flex items-center gap-1.5"><Eye size={12} /> Views_ {issue.metrics.views}</span>
                <span className="flex items-center gap-1.5"><Activity size={12} /> Retention_ {issue.metrics.retention}</span>
              </div>
            )}
          </div>
        </section>
        <section className="max-w-4xl mx-auto px-6 md:px-12 pt-14 md:pt-16">
          <button onClick={onHome} className="mb-10 inline-flex items-center gap-2 text-[10px] font-bold text-slate-400 hover:text-indigo-600 uppercase tracking-widest font-mono">RETURN_HOME <span className="text-slate-300">/</span> <span className="text-indigo-500">{issue.vol}</span></button>
          {issue.sidebarStats && (
            <div className="mb-12 p-6 md:p-8 bg-slate-900 rounded-2xl shadow-[0_8px_30px_rgba(99,102,241,0.12)] border border-indigo-900/50 relative overflow-hidden">
              <div className="absolute -top-12 -right-8 text-white opacity-[0.03]"><Hash size={200} /></div>
              <div className="flex flex-wrap items-center gap-3 mb-7 border-b border-indigo-900/50 pb-4 relative z-10">
                <span className="inline-flex items-center gap-1.5 text-indigo-300 font-mono text-[10px] tracking-[0.22em] uppercase bg-indigo-950/80 px-2.5 py-1 rounded border border-indigo-800/50"><Eye size={12} /> Platform Effects</span>
                <span className="text-slate-300 font-bold text-xs tracking-widest">演算法下的心理效應</span>
              </div>
              <h4 className="font-bold text-lg text-slate-100 mb-6 font-serif relative z-10">{issue.sidebarStats.title}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
                {issue.sidebarStats.points.slice(0, 3).map((point) => (
                  <div key={point.label} className="bg-slate-800/40 p-5 rounded-xl border border-slate-700/50">
                    <div className="text-indigo-300 mb-2 text-[11px] tracking-widest uppercase font-bold flex items-center gap-2"><span className="w-1 h-1 bg-indigo-400 rounded-full"></span>{point.label}</div>
                    <div className="font-medium text-sm md:text-base text-slate-200 leading-snug">{point.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="mb-12 border-l-4 border-indigo-500 pl-6 py-2">
            <h3 className="text-[10px] font-mono text-indigo-500 tracking-[0.2em] uppercase mb-4 font-bold">[ SYSTEM_SUMMARY_GENERATED ]</h3>
            <ul className="space-y-3">
              {(issue.summary || []).map((point) => (
                <li key={point} className="flex items-start gap-3"><ChevronRight className="text-indigo-300 shrink-0 mt-0.5" size={16} /><span className="text-slate-700 leading-relaxed text-sm md:text-base font-medium">{point}</span></li>
              ))}
            </ul>
          </div>
          <article className="article max-w-none text-slate-700 font-serif mb-20">
            {renderArticleContent(issue.content, [issue.desc || ""], false)}
          </article>
          <div className="mt-16 pt-10 border-t border-dashed border-slate-300 flex flex-col sm:flex-row gap-4 justify-between">
            {index > 0 ? <button onClick={onPrev} className="px-6 py-4 rounded-xl border border-slate-200 text-slate-500 hover:text-indigo-600 text-xs font-bold uppercase tracking-widest font-mono flex items-center justify-center gap-2"><ArrowLeft size={14} /> 向上滑動</button> : <span />}
            {index < total - 1 ? <button onClick={onNext} className="px-6 py-4 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 text-xs font-bold uppercase tracking-widest font-mono flex items-center justify-center gap-2">繼續滑動 <ArrowDown size={14} /></button> : <button onClick={onHome} className="px-6 py-4 rounded-xl bg-slate-900 text-white hover:bg-indigo-600 text-xs font-bold uppercase tracking-widest font-mono">回到推薦首頁</button>}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-white text-slate-800 pt-24 min-h-screen pb-24">
      <section className="max-w-6xl mx-auto px-6 md:px-12">
        <button onClick={onHome} className="mb-5 inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-amber-600 hover:text-slate-950 uppercase"><ArrowLeft size={14} /> {issue.vol}</button>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.02] text-slate-950 font-serif mb-8 max-w-5xl">{issue.title}</h1>
        <div className="aspect-[16/9] md:aspect-[2.35/1] rounded-lg overflow-hidden bg-slate-900 mb-10 relative shadow-sm">
          <img src={issue.imageUrl} alt={issue.imageAlt || issue.title} className="w-full h-full object-cover opacity-90" />
          {issue.imageAlt && (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-5">
              <span className="text-white/90 font-bold text-xs md:text-sm border-l-2 border-amber-500 pl-3">{issue.imageAlt}</span>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-8 lg:gap-10 border-t border-slate-200 pt-10">
          <div>
            <div className="mb-12 rounded-xl border border-amber-300 bg-amber-50/55 p-6 md:p-7 relative overflow-hidden">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-amber-200 opacity-60"></div>
              <h3 className="text-sm font-black mb-5 flex items-center gap-2 text-amber-800 relative z-10"><Lightbulb className="text-amber-500" size={16} /> SMILE 導讀：三分鐘原來如此</h3>
              <ul className="space-y-3 relative z-10">
                {(issue.summary || []).map((point) => (
                  <li key={point} className="flex items-start gap-2.5"><CheckCircle2 className="text-amber-500 shrink-0 mt-0.5" size={15} /><span className="text-slate-700 leading-relaxed text-sm md:text-base">{point}</span></li>
                ))}
              </ul>
            </div>
            <article className="article max-w-none font-serif text-slate-700">
              {renderArticleContent(issue.content, [issue.desc || ""], false)}
            </article>
            <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-between border-t border-slate-200 pt-8">
              {index > 0 ? <button onClick={onPrev} className="px-5 py-3 rounded-full border border-slate-300 text-sm font-bold flex items-center justify-center gap-2"><ArrowLeft size={14} /> 上一篇</button> : <span />}
              {index < total - 1 ? <button onClick={onNext} className="px-5 py-3 rounded-full bg-slate-900 text-white text-sm font-bold flex items-center justify-center gap-2">下一篇 <ChevronRight size={14} /></button> : <button onClick={onHome} className="px-5 py-3 rounded-full bg-amber-500 text-white text-sm font-bold">回到首頁</button>}
            </div>
          </div>
          <aside>
            {issue.sidebarStats && (
              <div className="sticky top-28 rounded-xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm">
                <div className="flex items-center gap-2 text-amber-600 font-bold text-[9px] tracking-[0.2em] uppercase mb-4 border-b border-slate-100 pb-3"><Sparkles size={12} /> SMILE 觀點解析</div>
                <h4 className="font-bold text-lg md:text-xl mb-6 leading-snug font-serif text-slate-900">{issue.sidebarStats.title}</h4>
                <div className="space-y-5 text-sm">
                  {issue.sidebarStats.points.map((point) => (
                    <div key={point.label} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                      <div className="text-slate-400 mb-1 flex items-center gap-1.5 text-[9px] tracking-[0.1em] uppercase font-bold"><div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>{point.label}</div>
                      <div className="text-sm font-bold text-slate-800 leading-snug">{point.value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-slate-100 text-center"><Smile size={20} className="text-amber-300 mx-auto mb-2" /><p className="text-[10px] md:text-xs text-slate-400 leading-relaxed italic">「在歷史脈絡中，看見科技改變生活的軌跡。」</p></div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}

function GuiHome({ setMode, setGuiView, setSocialView, setAiView }) {
  const openSocial = () => {
    setMode("social");
    setSocialView(0);
    setAiView(0);
    setGuiView(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const openAi = () => {
    setMode("ai");
    setAiView(0);
    setSocialView(0);
    setGuiView(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <main className="bg-[#FDFDFD]">
      <section className="relative w-full h-[85vh] flex items-center overflow-hidden bg-slate-900">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900"></div>
        <div className="relative z-10 w-full max-w-6xl px-6 md:px-12 mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-400 text-xs font-bold tracking-[0.2em] mb-6"><Sparkles size={12} />SMILE MANIFESTO</div>
          <h2 className="text-4xl md:text-7xl font-black font-serif text-white leading-[1.1] mb-6">把複雜的科技，<br />化為一個會心的微笑。</h2>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">透過輕鬆易懂的報導，將科技史、社群平台與 AI 浪潮轉化為理解的瞬間。</p>
        </div>
        <button className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 flex flex-col items-center gap-2 animate-bounce" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}><span className="text-[10px] tracking-[0.3em] uppercase font-bold">Discover</span><ArrowDown size={16} /></button>
      </section>
      <section className="bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
          {["Science", "Media", "Innovation", "Learning", "Exploration"].map((w) => <div key={w} className="text-center"><div className="text-3xl font-black text-amber-500 mb-2 font-serif">{w[0]}</div><div className="text-sm font-bold tracking-widest">{w}</div></div>)}
        </div>
      </section>
      <section className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row gap-10">
          <div className="md:w-1/4"><h3 className="text-[10px] font-bold tracking-[0.2em] text-amber-600 mb-3 uppercase flex items-center gap-1.5"><Clock size={12} /> Timeline</h3><h2 className="text-3xl font-black text-slate-900 leading-tight font-serif">人機互動<br />半世紀狂想</h2></div>
          <div className="md:w-3/4 border-l-2 border-slate-100 pl-8 space-y-8">
            {timelineData.map(([year, title, tag, desc]) => <div key={year} className="relative"><div className="absolute w-3 h-3 bg-amber-500 rounded-full -left-[39px] top-2 ring-4 ring-white"></div><div className="font-black text-amber-600 font-serif text-xl">{year} <span className="text-[10px] font-mono text-slate-400">{tag}</span></div><h4 className="font-black text-slate-900">{title}</h4><p className="text-slate-600 text-sm leading-relaxed">{desc}</p></div>)}
          </div>
        </div>
      </section>
      <VideoEmbed />
      <IssueGrid title="GUI 革命：滑鼠與視窗如何改變世界" kicker="Featured Series" color="amber" issues={guiSeries} onOpen={setGuiView} />
      <ChapterRail onSocial={openSocial} onAi={openAi} />
    </main>
  );
}

function ChapterRail({ onSocial, onAi }) {
  const nodes = [
    { no: "02", label: "SOCIAL LAYER", title: "第二部曲", subtitle: "平台重新分配注意力", status: "延伸路線", tone: "indigo", onClick: onSocial, Icon: Users },
    { no: "03", label: "AI CORE", title: "第三部曲", subtitle: "智慧成為時代材料", status: "終章模組", tone: "cyan", onClick: onAi, Icon: Cpu }
  ];

  return (
    <section className="relative overflow-hidden border-t border-slate-800 bg-slate-950 py-20 md:py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(245,158,11,.22),transparent_32%),radial-gradient(circle_at_82%_22%,rgba(34,211,238,.18),transparent_30%),linear-gradient(135deg,#020617_0%,#0f172a_48%,#050816_100%)]"></div>
      <div className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(90deg,rgba(148,163,184,.35)_1px,transparent_1px),linear-gradient(rgba(148,163,184,.24)_1px,transparent_1px)] bg-[size:54px_54px]"></div>
      <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent magazine-mask"></div>
      <div className="absolute -right-32 -top-40 h-96 w-96 rounded-full border border-cyan-300/20 orbit-drift"></div>
      <div className="absolute -left-24 bottom-8 h-72 w-72 rounded-full border border-amber-300/20 orbit-drift"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 border border-amber-300/30 bg-amber-300/10 px-3 py-1.5 text-[10px] font-black tracking-[0.28em] text-amber-200">
              <Network size={13} />
              SMILE 三部曲路線圖
            </div>
            <h2 className="mt-6 text-4xl md:text-6xl font-serif font-black text-white leading-[1.02]">
              第一部曲完成，<br />未來開始分岔
            </h2>
            <p className="mt-6 max-w-sm text-slate-300 leading-loose">
              從介面，到平台，再到智慧材料。主軸停留在 GUI 革命，後續章節以資料軌道向外延伸。
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-sm font-mono text-[9px] tracking-[0.18em] text-slate-500">
              <div className="border-t border-amber-300/40 pt-3 text-amber-200">INTERFACE</div>
              <div className="border-t border-indigo-300/30 pt-3">NETWORK</div>
              <div className="border-t border-cyan-300/30 pt-3">INTELLIGENCE</div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative min-h-[520px] md:min-h-[430px] rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 md:p-8 shadow-[0_30px_100px_rgba(0,0,0,.45)] backdrop-blur-xl">
              <div className="absolute inset-3 rounded-[1.5rem] border border-cyan-200/10 pointer-events-none"></div>
              <div className="absolute inset-x-8 top-12 hidden h-[220px] rounded-full border border-cyan-300/20 md:block"></div>
              <div className="absolute inset-x-16 top-20 hidden h-[160px] rounded-full border border-indigo-300/20 md:block"></div>
              <div className="absolute left-[8%] right-[8%] top-[46%] hidden h-1 md:block">
                <div className="h-px w-full bg-gradient-to-r from-amber-300 via-indigo-300 to-cyan-300 rail-flow shadow-[0_0_28px_rgba(34,211,238,.45)]"></div>
              </div>
              <div className="absolute right-7 top-6 hidden md:flex flex-col items-end gap-2 font-mono text-[9px] tracking-[0.22em] text-cyan-200/70">
                <span>LIVE ROUTE / 03 NODES</span>
                <span className="text-slate-500">SIGNAL STABLE</span>
              </div>

              <div className="relative grid grid-cols-1 md:grid-cols-[1.18fr_.92fr] gap-6 md:gap-8 h-full items-center">
                <div className="relative order-1 md:order-none">
                  <div className="absolute -inset-5 rounded-full bg-amber-300/10 blur-3xl"></div>
                  <div className="relative min-h-[265px] overflow-hidden rounded-[1.5rem] border border-amber-200/35 bg-gradient-to-br from-amber-200/18 via-slate-950/88 to-slate-950 p-6 md:p-7 shadow-[0_0_70px_rgba(245,158,11,.15)]">
                    <div className="absolute inset-0 opacity-25 bg-[linear-gradient(115deg,transparent_0%,rgba(251,191,36,.4)_45%,transparent_58%)] ai-scanline"></div>
                    <div className="absolute right-6 top-6 h-16 w-16 rounded-full border border-amber-200/30"></div>
                    <div className="absolute right-12 top-12 h-2 w-2 rounded-full bg-amber-200 node-signal"></div>
                    <div className="relative z-10">
                      <div className="mb-8 flex items-center justify-between gap-4">
                        <div className="font-mono text-[10px] tracking-[0.28em] text-amber-200">01 / GUI CORE</div>
                        <div className="border border-amber-200/40 bg-amber-200/15 px-2 py-1 font-mono text-[9px] tracking-[0.18em] text-amber-100">已完成主題</div>
                      </div>
                      <div className="flex items-start gap-5">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-amber-200/60 bg-amber-200 text-slate-950 shadow-[0_0_38px_rgba(251,191,36,.45)]">
                          <Monitor size={28} />
                        </div>
                        <div>
                          <h3 className="font-serif text-3xl md:text-4xl font-black leading-tight text-white">人第一次<br className="hidden sm:block" />看懂電腦</h3>
                          <p className="mt-5 max-w-md text-sm md:text-base leading-loose text-slate-300">
                            第一部曲以 GUI 革命為主體，回到滑鼠、視窗與圖形介面如何把冷硬機器翻譯成人能理解的世界。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative order-2 space-y-4 md:space-y-5">
                  {nodes.map((node, idx) => {
                    const Icon = node.Icon;
                    const isCyan = node.tone === "cyan";
                    return (
                      <button key={node.label} onClick={node.onClick} className={`group relative w-full overflow-hidden rounded-[1.25rem] border text-left transition-all duration-300 hover:-translate-y-1 ${
                        isCyan
                          ? "border-cyan-300/30 bg-cyan-300/[0.06] hover:border-cyan-200/60"
                          : "border-indigo-300/30 bg-indigo-300/[0.06] hover:border-indigo-200/60"
                      }`}>
                        <div className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${isCyan ? "from-cyan-200 to-violet-400" : "from-indigo-200 to-fuchsia-400"}`}></div>
                        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-white/10 transition-transform duration-500 group-hover:scale-125"></div>
                        <div className="relative flex items-center gap-4 p-5 md:p-6">
                          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] shadow-[0_0_24px_rgba(255,255,255,.08)] ${
                            isCyan ? "border-cyan-200/50 text-cyan-100 bg-cyan-200/10" : "border-indigo-200/50 text-indigo-100 bg-indigo-200/10"
                          }`}>
                            <Icon size={21} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className={`font-mono text-[9px] tracking-[0.24em] ${isCyan ? "text-cyan-200" : "text-indigo-200"}`}>{node.no} / {node.label}</div>
                            <div className="mt-1 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1 sm:gap-4">
                              <h3 className="font-serif text-2xl font-black text-white">{node.title}</h3>
                              <span className={`font-mono text-[9px] tracking-[0.2em] ${isCyan ? "text-cyan-100/70" : "text-indigo-100/70"}`}>{node.status}</span>
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-slate-300">{node.subtitle}</p>
                          </div>
                          <ArrowRight size={18} className={`hidden sm:block shrink-0 transition-transform group-hover:translate-x-1 ${isCyan ? "text-cyan-200" : "text-indigo-200"}`} />
                        </div>
                      </button>
                    );
                  })}
                  <div className="grid grid-cols-6 gap-2 pt-2 opacity-70">
                    {[...Array(18)].map((_, i) => (
                      <span key={i} className={`h-1 rounded-full ${i % 3 === 0 ? "bg-amber-300/60" : i % 3 === 1 ? "bg-indigo-300/50" : "bg-cyan-300/50"}`}></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IssueGrid({ title, kicker, color, issues, onOpen }) {
  const colorClass = color === "indigo" ? "text-indigo-600" : "text-amber-600";
  const iconMap = { Globe2, Users, Smartphone, Eye, Compass };
  return (
    <section className="bg-slate-50 py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`${colorClass} font-bold tracking-[0.2em] text-xs mb-3 flex items-center gap-2 uppercase`}><BookOpen size={14} /> {kicker}</div>
        <h2 className="text-3xl md:text-5xl font-black leading-tight text-slate-900 font-serif mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {issues.map((issue, index) => {
            const Icon = issue.Icon || iconMap[issue.iconName];
            return (
              <button key={issue.id} onClick={() => onOpen(issue.id)} className={`text-left bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group rounded-xl overflow-hidden ${index === 0 ? "md:col-span-2 md:flex-row" : ""}`}>
                <div className={`relative overflow-hidden bg-slate-900 ${index === 0 ? "md:w-1/2 h-64 md:h-auto" : "h-48 w-full"}`}>
                  <img src={issue.imageUrl} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <span className={`absolute top-5 left-5 ${color === "indigo" ? "bg-indigo-600" : "bg-amber-500"} text-white px-2.5 py-1 rounded-sm font-bold tracking-widest text-[9px] uppercase`}>{issue.category}</span>
                </div>
                <div className={`p-6 md:p-8 ${index === 0 ? "md:w-1/2" : "w-full"}`}>
                  <div className="text-[9px] font-bold text-slate-400 mb-2 tracking-[0.2em] uppercase flex items-center gap-1.5">{issue.icon || (Icon && <Icon size={14} />)} {issue.vol}</div>
                  <h3 className={`${index === 0 ? "text-3xl" : "text-xl"} font-bold text-slate-900 leading-snug group-hover:${colorClass} mb-3 font-serif`}>{issue.title}</h3>
                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-6">{issue.summary ? issue.summary[0] : issue.desc}</p>
                  <div className={`${colorClass} text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5`}>閱讀專文 <ChevronRight size={12} /></div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ChapterCta({ color, dark, title, text, button, onClick }) {
  const cls = color === "cyan" ? "text-cyan-400" : "text-indigo-600";
  return (
    <section className={`${dark ? "bg-slate-950 text-white grid-bg" : "bg-gradient-to-b from-slate-50 to-slate-100"} py-20 md:py-28 border-t ${dark ? "border-cyan-900/30" : "border-slate-200"}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className={`${cls} font-bold tracking-[0.2em] text-xs mb-4 flex items-center justify-center gap-2 uppercase`}><Sparkles size={14} /> Next Chapter</div>
        <h2 className={`text-3xl md:text-6xl font-black leading-tight ${dark ? "text-white" : "text-slate-900"} font-serif mb-6`}>{title}</h2>
        <p className={`${dark ? "text-cyan-100/70" : "text-slate-600"} text-lg mb-10 leading-relaxed`}>{text}</p>
        <button onClick={onClick} className={`inline-flex items-center gap-3 ${color === "cyan" ? "bg-cyan-500/10 border border-cyan-400/50 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950" : "bg-slate-900 text-white hover:bg-indigo-600"} px-8 py-4 rounded-full font-bold transition-all shadow-xl`}>
          {button} <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}

function SocialFeatureFeed({ issues, onOpen }) {
  const [featured, ...upNext] = issues;
  return (
    <section className="bg-slate-50 py-20 md:py-28 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14 border-b border-indigo-100 pb-8 md:flex md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3 font-mono text-xs font-black uppercase tracking-[0.32em] text-indigo-600">
              <Activity size={15} className="text-fuchsia-500" />
              Algorithm Feed
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.04em] text-slate-950">
              為你推薦：被演算法重塑的世界
            </h2>
          </div>
          <div className="mt-6 font-mono text-[11px] tracking-[0.35em] text-indigo-300 md:mt-0">
            [ 5 ITEMS LOADED_ ]
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <button
            type="button"
            onClick={() => onOpen(featured.id)}
            className="group overflow-hidden rounded-[1.75rem] border border-indigo-100 bg-white text-left shadow-[0_18px_48px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-[0_24px_70px_rgba(79,70,229,0.16)] lg:col-span-8"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-indigo-950">
              <img
                src={featured.imageUrl}
                alt={featured.imageAlt || featured.title}
                className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/40 via-indigo-950/70 to-indigo-950/92"></div>
              <div className="absolute left-8 top-8 rounded-md bg-indigo-600 px-4 py-2 text-sm font-black text-white shadow-[0_12px_32px_rgba(79,70,229,0.24)]">
                {featured.category}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-52 w-52 items-center justify-center rounded-[3.2rem] border border-white/5 bg-white/[0.035] text-[13rem] font-black leading-none text-white/[0.14] shadow-[inset_0_0_80px_rgba(255,255,255,0.07),0_0_80px_rgba(79,70,229,0.2)] md:h-72 md:w-72 md:text-[18rem]">
                  N
                </div>
              </div>
              <div className="absolute bottom-8 right-8 flex items-center gap-4 font-mono text-xs text-indigo-100/80">
                <span className="inline-flex items-center gap-1"><Eye size={14} /> {featured.metrics?.views || "4.2M"}</span>
                <span>↗ {featured.metrics?.retention || "89%"}</span>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <div className="mb-7 flex items-center gap-3 font-mono text-[11px] font-black tracking-[0.32em] text-indigo-500">
                <Globe2 size={16} />
                {featured.vol.replace("Vol.", "VOL.")}
              </div>
              <h3 className="max-w-4xl text-3xl font-black leading-tight tracking-[-0.035em] text-slate-950 md:text-5xl">
                {featured.title}
              </h3>
              <p className="mt-7 max-w-3xl text-base font-bold leading-loose text-slate-500 md:text-lg">
                {featured.summary?.[0]}　{featured.summary?.[1]}
              </p>
              <div className="mt-10 inline-flex items-center gap-3 rounded-full bg-indigo-50 px-6 py-3 text-sm font-black text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                進入閱讀 <ChevronRight size={16} />
              </div>
            </div>
          </button>

          <aside className="lg:col-span-4 lg:pt-1">
            <div className="mb-8 font-mono text-sm font-black uppercase tracking-[0.32em] text-slate-400">
              UP NEXT_
            </div>
            <div className="space-y-6">
              {upNext.map((issue, i) => (
                <button
                  type="button"
                  key={issue.id}
                  onClick={() => onOpen(issue.id)}
                  className={`group flex w-full overflow-hidden rounded-2xl border bg-white text-left shadow-[0_10px_28px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:shadow-[0_18px_50px_rgba(79,70,229,0.14)] ${i === 1 ? "border-indigo-300" : "border-slate-200"}`}
                >
                        <div className="relative min-h-[138px] w-32 shrink-0 overflow-hidden bg-indigo-950 sm:w-40 lg:w-36">
                    <img
                      src={issue.imageUrl}
                      alt={issue.imageAlt || issue.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-55 grayscale transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-indigo-950/25"></div>
                  </div>
                  <div className="relative min-w-0 p-6">
                    <div className="relative z-10 mb-3 font-mono text-[10px] font-black tracking-[0.24em] text-indigo-400">
                      {issue.category}
                    </div>
                    <h4 className={`relative z-10 text-lg font-black leading-snug ${i === 1 ? "text-indigo-600" : "text-slate-950"}`}>
                      {issue.title}
                    </h4>
                    <div className="relative z-10 mt-7 flex items-center gap-2 font-mono text-xs text-slate-400">
                      <MousePointer2 size={13} className="text-indigo-400" />
                      Click to open
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function SocialHome({ setMode, setSocialView, setGuiView, setAiView }) {
  const openGui = () => {
    setMode("gui");
    setGuiView(0);
    setSocialView(0);
    setAiView(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const openAi = () => {
    setMode("ai");
    setAiView(0);
    setSocialView(0);
    setGuiView(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <main className="bg-white">
      <section className="relative w-full min-h-[640px] flex items-center bg-slate-950 overflow-hidden pt-20">
        <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-slate-900/70 to-slate-950/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-xs font-bold tracking-[0.2em] mb-6"><ShieldAlert size={12} /> SMILE CHAPTER 02</div>
          <h2 className="text-4xl md:text-7xl font-black tracking-tight text-white leading-[1.1] mb-6">社群平台：<br />注意力經濟與身分焦慮</h2>
          <p className="text-lg text-indigo-100/70 leading-relaxed max-w-2xl">我們以為自己在使用平台，其實是平台在決定我們看見什麼。</p>
        </div>
      </section>
      <SocialVideoEmbed />
      <SocialFeatureFeed issues={socialSeries} onOpen={setSocialView} />
      <section className="bg-white py-20 md:py-28 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="text-indigo-400 font-mono text-[10px] tracking-[0.3em] font-bold uppercase mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span> 專家視角 / Expert Perspective
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.05] font-serif mb-8">
              王志仁觀察：<br />
              <span className="text-indigo-600 block mt-3">平台正在把每個人推向不同版本的世界</span>
            </h3>
            <div className="pl-5 border-l-2 border-indigo-500 mb-10">
              <p className="text-slate-600 font-sans text-sm md:text-base leading-loose">
                <strong className="text-slate-800">王志仁</strong>，現任《數位時代》總編輯，長期關注科技產業、平台變遷與數位媒體發展。從網路時代、行動時代到 AI 時代，他持續觀察科技如何改變內容分發、使用者行為與人們理解世界的方式。
              </p>
            </div>
            <p className="text-slate-700 leading-loose font-serif text-xl md:text-2xl text-justify">
              今天的平台早已不只是提供內容的工具，而是一套會分析使用者、分發內容、放大偏好，並逐漸改變人們觀看世界方式的系統。當每個人都被推向不同版本的資訊環境時，我們看到的，不一定只是世界本身，也可能是平台替我們篩選過的世界。
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 gap-9 md:pt-8">
            {[
              ["01", "大平台只會更大", "如果只靠市場力量發展，社群平台往往會走向大者恆大。大型科技公司會透過收購、投資，把潛在競爭者提早納入版圖，平台集中化因此愈發明顯。"],
              ["02", "千人千面已成為內容分發常態", "今天的平台不再是一對多的大眾媒體，而是透過使用者行為分析，進入一對一客製化的內容分發。表面上大家都在用同一個平台，但實際上，每個人看到的都是不同版本的世界。"],
              ["03", "推薦越方便，資訊繭房越明顯", "平台推薦雖然提供了效率與便利，卻也可能把使用者包進資訊繭房之中。當系統不斷推送我們熟悉、偏好、會停留的內容時，我們接觸外部世界的方式，也會逐漸被收窄。"]
            ].map(([no, title, text]) => (
              <div key={no} className="border-t border-slate-300 pt-7">
                <div className="text-indigo-600 font-mono text-[10px] font-bold mb-5 tracking-widest uppercase">{no} —</div>
                <h4 className="text-slate-900 font-bold text-2xl md:text-3xl mb-4 font-serif">{title}</h4>
                <p className="text-slate-600 text-base md:text-lg leading-loose text-justify">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-950 border-y border-slate-800 py-10 md:py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="font-mono text-[10px] tracking-[0.28em] text-indigo-300 uppercase mb-2">SMILE 三部曲路線</div>
              <p className="text-slate-400 text-sm leading-relaxed">第二部曲可以往前回到介面革命，也可以繼續前往 AI 終章。</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={openGui} className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-5 py-3 text-sm font-bold text-amber-200 hover:bg-amber-400 hover:text-slate-950 transition-colors">
                <ArrowLeft size={15} /> 回到第一部曲 GUI
              </button>
              <button onClick={openAi} className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-sm font-bold text-cyan-200 hover:bg-cyan-400 hover:text-slate-950 transition-colors">
                前往第三部曲 AI <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <ChapterCta color="cyan" dark title="SMILE 終章：可調度的智慧" text="從社群平台走向 AI 核心，理解智慧如何被重新配置。" button="啟動 AI 終章" onClick={openAi} />
    </main>
  );
}

function AiHome({ setAiView, setMode, setGuiView, setSocialView }) {
  const goGui = () => { setMode("gui"); setGuiView(0); setSocialView(0); setAiView(0); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const goSocial = () => { setMode("social"); setSocialView(0); setAiView(0); setGuiView(0); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const commands = [
    ["S", "AI 為什麼不只是工具", "Science"],
    ["M", "答案被生成後，資訊如何被相信", "Media"],
    ["I", "河邊的工廠與流程重構", "Innovation"],
    ["L", "整理知識變便宜後，學生還需要學什麼", "Learning"],
    ["E", "十年後回頭看，人的專業剩下什麼", "Exploration"]
  ];
  const moduleSummaries = {
    Science: "定義 AI 的科技本質",
    Media: "追問答案生成後的信任問題",
    Innovation: "檢查工作流程如何被重做",
    Learning: "重新理解學生需要練什麼",
    Exploration: "推演人的專業價值會轉移到哪裡"
  };

  return (
    <main className="bg-[#020617] text-slate-200 overflow-hidden">
      <section className="relative min-h-[calc(100vh-72px)] bg-[#020617] text-white overflow-hidden pt-24 md:pt-28 pb-16 border-b border-cyan-900/40">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,211,238,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,.04)_1px,transparent_1px)] bg-[size:44px_44px] hero-grid-glow"></div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.18),transparent_44%),radial-gradient(circle_at_68%_28%,rgba(124,58,237,.18),transparent_34%)]"></div>
        <div className="pointer-events-none absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"></div>
        <div className="pointer-events-none absolute left-1/2 top-[48%] h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10"></div>
        <div className="pointer-events-none absolute left-1/2 top-[48%] h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/10"></div>
        <div className="pointer-events-none ai-scanline absolute left-0 right-0 top-0 h-56 bg-gradient-to-b from-transparent via-cyan-300/12 to-transparent"></div>
        <div className="pointer-events-none absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 text-[14vw] font-black leading-none tracking-[-0.08em] text-white/[0.014] select-none hidden md:block">INTELLIGENCE</div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)_280px] gap-8 lg:gap-12 items-center lg:min-h-[calc(100vh-180px)]">
          <div className="order-2 lg:order-1 lg:max-w-[280px] border border-cyan-300/[0.12] bg-slate-950/30 backdrop-blur-xl p-4 font-mono shadow-[0_0_28px_rgba(34,211,238,.035)] relative overflow-hidden opacity-80">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent"></div>
            <div className="absolute right-4 top-4 text-[9px] tracking-[0.24em] text-cyan-300/50">ISSUE INDEX</div>
            <div className="inline-flex items-center gap-2 border border-cyan-400/25 bg-cyan-400/10 px-2.5 py-1 text-[9px] tracking-[0.24em] text-cyan-200 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 node-signal"></span> 前情索引
            </div>
            <div className="text-cyan-100 tracking-[0.16em] text-sm font-black mb-2">SMILE 終章特刊</div>
            <div className="text-slate-500 tracking-[0.18em] text-[9px] mb-4">第三部曲｜AI / FINAL CHAPTER</div>
            <div className="text-slate-400 tracking-[0.14em] text-[11px] mb-3">從前兩部曲走到智慧本身</div>
            {[
              ["GUI", "人第一次看懂電腦", "amber"],
              ["SOCIAL", "平台重新分配注意力", "indigo"],
              ["AI", "智慧成為時代材料", "cyan"]
            ].map(([label, line, tone], i) => (
              <div key={label} className="grid grid-cols-[58px_1fr] gap-3 border-t border-cyan-900/30 py-2.5 hud-wake" style={{ animationDelay: `${i * 0.35}s` }}>
                <span className={tone === "cyan" ? "text-cyan-300 font-black" : tone === "indigo" ? "text-indigo-300 font-black" : "text-amber-300 font-black"}>{String(i + 1).padStart(2, "0")}｜{label}</span>
                <div>
                  <div className={i === 2 ? "text-cyan-50 font-black text-sm" : "text-slate-500 text-sm"}>{line}</div>
                </div>
              </div>
            ))}
            <div className="mt-4 border border-cyan-400/20 bg-cyan-400/[0.045] p-3 shadow-[inset_0_0_20px_rgba(34,211,238,.045)]">
              <div className="text-slate-500 text-[10px] tracking-[0.22em] mb-2">目前狀態</div>
              <div className="text-cyan-200 text-sm font-black tracking-[0.08em]">智慧成為時代材料</div>
              <div className="text-cyan-500/60 text-[9px] tracking-[0.24em] mt-2">INTELLIGENCE_AS_MATERIAL</div>
            </div>
          </div>

          <div className="order-1 lg:order-2 min-w-0 flex flex-col items-center justify-center text-center relative py-6 lg:py-10">
            <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-center">
              <div className="pointer-events-none absolute left-1/2 top-[46%] hidden -translate-x-1/2 -translate-y-1/2 select-none font-mono text-[min(11vw,118px)] font-black tracking-[-0.08em] text-cyan-100/[0.025] md:block">
                AI CORE
              </div>

              <div className="mb-5 font-mono text-[10px] tracking-[0.28em] text-cyan-300 md:tracking-[0.32em]">
                SMILE 終章特刊｜第三部曲 AI
              </div>

              <div className="relative mb-8">
                <div className="pointer-events-none absolute inset-[-70px] rounded-full border border-cyan-400/10"></div>
                <div className="pointer-events-none absolute inset-[-42px] rounded-full border border-violet-300/10 hero-orbit-spin-reverse"></div>
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[150%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent hero-line-flow"></div>
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,.13),transparent_62%)]"></div>

                <div className="hex-core hero-core-breathe relative z-10 flex h-[190px] w-[280px] flex-col items-center justify-center border border-cyan-300/38 bg-slate-950/88 px-8 shadow-[0_0_60px_rgba(34,211,238,.16)] sm:h-[210px] sm:w-[320px]">
                  <div className="font-mono text-[10px] tracking-[0.28em] text-cyan-300">AI 核心</div>
                  <Cpu size={34} className="my-4 text-cyan-100 drop-shadow-[0_0_18px_rgba(103,232,249,.65)]" />
                  <div className="font-mono text-[10px] tracking-[0.28em] text-cyan-200">AI CORE / SMILE 終章</div>
                  <div className="mt-4 border border-cyan-400/20 bg-cyan-300/[0.04] px-4 py-1.5 font-mono text-[8px] tracking-[0.22em] text-slate-400 sm:px-5 sm:py-2 sm:text-[9px]">CORE_SYNC / 03_FINAL_ONLINE</div>
                </div>
              </div>

              <div className="mb-5 font-mono text-[9px] tracking-[0.28em] text-slate-500 md:text-[10px] md:tracking-[0.3em]">
                ISSUE 03 / FINAL CHAPTER / AI AS MATERIAL
              </div>

              <h1 className="font-sans text-[clamp(42px,5.8vw,86px)] font-black leading-none tracking-[-0.055em] text-white drop-shadow-[0_0_28px_rgba(34,211,238,.14)]">
                可調度的智慧
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
                當智慧不再只是人的能力，而成為可被配置的時代材料。
              </p>

              <div className="mt-5 font-mono text-[10px] tracking-[0.36em] text-cyan-300 md:tracking-[0.38em]">
                INTELLIGENCE AS MATERIAL
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 font-mono text-[10px] tracking-[0.18em] text-slate-500">
                <span>S 科學</span><span className="text-cyan-900">/</span>
                <span>M 媒體</span><span className="text-cyan-900">/</span>
                <span>I 創新</span><span className="text-cyan-900">/</span>
                <span>L 學習</span><span className="text-cyan-900">/</span>
                <span>E 探索</span>
              </div>

              <div className="mx-auto mt-8 max-w-2xl border-t border-cyan-900/50 pt-5">
                <div className="mb-2 font-mono text-[10px] tracking-[0.28em] text-cyan-400">
                  編者導讀
                </div>
                <p className="text-sm leading-loose text-slate-300 md:text-base">
                  從介面、平台，走向智慧本身。最後一部曲，我們用 SMILE 五個問題，閱讀 AI 如何改寫資訊、工作、學習與人的專業價值。
                </p>
              </div>
            </div>
          </div>

          <div className="order-3 lg:max-w-[280px] border border-violet-300/[0.12] bg-slate-950/30 backdrop-blur-xl p-4 shadow-[0_0_28px_rgba(124,58,237,.035)] relative overflow-hidden opacity-80">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-300/55 to-transparent"></div>
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <div className="text-violet-100 font-black text-base mb-1">本期觀測</div>
                <div className="font-mono text-[10px] tracking-[0.25em] text-violet-300/45">EDITORIAL BRIEF</div>
              </div>
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,.65)] node-signal"></span>
            </div>
            {[
              ["報導模式", "終章特刊", "ISSUE MODE"],
              ["核心命題", "可調度的智慧", "THESIS"],
              ["人的角色", "判斷與責任", "HUMAN ROLE"],
              ["風險訊號", "來源 / 流程 / 價值", "RISK"]
            ].map(([label, value, code]) => (
              <div key={label} className="border-t border-violet-900/30 py-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="font-mono text-[9px] tracking-[0.2em] text-slate-500">{label}</div>
                  <div className="font-mono text-[8px] tracking-[0.18em] text-violet-300/50">{code}</div>
                </div>
                <div className="mt-2 text-sm font-black text-slate-200">{value}</div>
              </div>
            ))}
            <div className="mt-3 border border-violet-300/[0.14] bg-violet-400/[0.04] px-3 py-3">
              <div className="font-mono text-[9px] tracking-[0.24em] text-violet-300/60 mb-1">編者導言</div>
              <div className="text-sm font-black leading-relaxed text-violet-100/90">介面、平台之後，我們回到智慧本身。</div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#020617] border-b border-cyan-900/40 py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 items-center border-y border-cyan-900/45 py-6">
            <div className="font-mono text-[10px] tracking-[0.28em] text-cyan-300">三部曲進化線 <span className="text-slate-600">/ Trilogy Arc</span></div>
            <div className="space-y-5">
              <div className="grid grid-cols-3 gap-2 text-center font-mono text-[10px] tracking-[0.2em]">
                <div className="border border-amber-400/25 bg-amber-400/10 px-3 py-2 text-amber-200">GUI<br /><span className="text-slate-500">介面</span></div>
                <div className="border border-indigo-400/25 bg-indigo-400/10 px-3 py-2 text-indigo-200">SOCIAL<br /><span className="text-slate-500">平台</span></div>
                <div className="border border-cyan-300/35 bg-cyan-300/15 px-3 py-2 text-cyan-100">AI<br /><span className="text-slate-400">智慧</span></div>
              </div>
              <p className="font-serif text-sm md:text-base leading-loose text-slate-300">
                前兩部曲，我們看見介面如何讓科技被理解，也看見平台如何重新分配注意力。最後一部曲，我們回到智慧本身：當 AI 成為可被調度的時代材料，人、媒體、工作與學習都將被重新改寫。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#020617] border-b border-cyan-900/40 py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="border-y border-cyan-900/50 bg-black/25 py-6 font-mono">
            <div className="mb-5 px-1">
              <div className="text-cyan-300 text-[10px] tracking-[0.3em] mb-3">終章索引 <span className="text-slate-600">/ HEADLINE TICKER</span></div>
              <p className="font-serif text-base md:text-lg leading-relaxed text-slate-300">GUI 讓科技被理解，SOCIAL 重新分配注意力，AI 則把問題推向智慧本身。</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-cyan-900/35">
              {commands.map(([cmd, headline, label]) => (
                <div key={cmd} className="px-0 md:px-4 py-4">
                  <div className="text-cyan-300 font-black">{cmd}</div>
                  <div className="mt-2 text-white font-black tracking-[0.08em] text-sm leading-relaxed">{headline}</div>
                  <div className="text-violet-300 text-[9px] tracking-[0.2em] mt-2">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AiVideoEmbed />

      <section className="relative bg-[#020617] py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.12),transparent_45%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12 max-w-3xl">
            <div className="font-mono text-[10px] tracking-[0.32em] text-cyan-400 mb-4">智慧模組地圖 <span className="text-slate-600">/ Intelligence Map</span></div>
            <h2 className="text-3xl md:text-5xl font-black text-white">AI 知識神經圖</h2>
            <p className="mt-4 text-slate-400 font-serif leading-loose text-lg">五篇報導不是文章列表，而是圍繞 AI Core 的五個提問節點。點開每一篇，就是進入一條判斷智慧時代的路線。</p>
          </div>
          <div className="hidden lg:grid relative min-h-[720px] grid-cols-[1fr_320px_1fr] gap-10 items-center">
            <svg className="absolute inset-0 z-0 pointer-events-none" viewBox="0 0 1200 720" preserveAspectRatio="none">
              <defs>
                <linearGradient id="aiLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(34,211,238,0)" />
                  <stop offset="50%" stopColor="rgba(34,211,238,.42)" />
                  <stop offset="100%" stopColor="rgba(124,58,237,0)" />
                </linearGradient>
              </defs>
              <path d="M260 170 C420 220 470 285 600 360" stroke="url(#aiLine)" strokeWidth="1.4" fill="none" />
              <path d="M280 535 C430 500 480 430 600 360" stroke="url(#aiLine)" strokeWidth="1.4" fill="none" />
              <path d="M940 165 C790 230 730 285 600 360" stroke="url(#aiLine)" strokeWidth="1.4" fill="none" />
              <path d="M920 360 C800 360 740 360 600 360" stroke="url(#aiLine)" strokeWidth="1.4" fill="none" />
              <path d="M940 555 C790 505 730 430 600 360" stroke="url(#aiLine)" strokeWidth="1.4" fill="none" />
              <circle cx="600" cy="360" r="185" stroke="rgba(34,211,238,.16)" strokeWidth="1" fill="none" />
              <circle cx="600" cy="360" r="118" stroke="rgba(124,58,237,.14)" strokeWidth="1" fill="none" />
            </svg>
            <div className="relative z-20 space-y-7">
              {aiSeries.filter((_, idx) => idx === 0 || idx === 3).map((rawIssue, localIdx) => {
                const idx = localIdx === 0 ? 0 : 3;
                const issue = withAiMeta(rawIssue, idx);
                const shortTitle = issue.title.split("：")[0] || issue.title;
                return (
                  <button key={issue.id} onClick={() => setAiView(issue.id)} className="group w-[320px] max-w-[320px] text-left transition-transform hover:-translate-y-1">
                    <div className="border border-cyan-900/45 bg-slate-950/78 p-5 shadow-[0_0_35px_rgba(2,6,23,.38)] group-hover:border-cyan-300/60 group-hover:bg-cyan-950/30 transition-colors">
                      <div className="flex items-center justify-between gap-3 font-mono text-[10px] tracking-[0.2em] text-cyan-400">
                        <span>{issue.smileKey[0]}｜{issue.smileKey}</span>
                        <span>第 {String(idx + 1).padStart(2, "0")} 篇</span>
                      </div>
                      <h3 className="mt-3 text-xl font-black leading-tight text-white line-clamp-2">{shortTitle}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-cyan-100/70 font-serif line-clamp-2">{moduleSummaries[issue.smileKey]}</p>
                      <div className="mt-4 font-mono text-[10px] tracking-[0.2em] text-cyan-300">啟動模組 →</div>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="relative z-30 flex flex-col items-center justify-center">
              <div className="hex-core core-pulse w-64 h-64 bg-slate-950 border border-cyan-300/55 flex flex-col items-center justify-center text-center shadow-[0_0_80px_rgba(34,211,238,.16)]">
                <div className="font-black text-cyan-100 text-3xl">AI CORE</div>
                <div className="font-mono text-[9px] tracking-[0.24em] text-cyan-400 mt-3">SMILE FINAL CHAPTER</div>
                <div className="mt-5 border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2 font-mono text-[9px] tracking-[0.2em] text-cyan-100/70">五個問題匯流於此</div>
              </div>
            </div>
            <div className="relative z-20 ml-auto space-y-7">
              {aiSeries.filter((_, idx) => idx === 1 || idx === 2 || idx === 4).map((rawIssue, localIdx) => {
                const idx = localIdx === 0 ? 1 : localIdx === 1 ? 2 : 4;
                const issue = withAiMeta(rawIssue, idx);
                const shortTitle = issue.title.split("：")[0] || issue.title;
                return (
                  <button key={issue.id} onClick={() => setAiView(issue.id)} className="group w-[320px] max-w-[320px] text-left transition-transform hover:-translate-y-1">
                    <div className="border border-cyan-900/45 bg-slate-950/78 p-5 shadow-[0_0_35px_rgba(2,6,23,.38)] group-hover:border-cyan-300/60 group-hover:bg-cyan-950/30 transition-colors">
                      <div className="flex items-center justify-between gap-3 font-mono text-[10px] tracking-[0.2em] text-cyan-400">
                        <span>{issue.smileKey[0]}｜{issue.smileKey}</span>
                        <span>第 {String(idx + 1).padStart(2, "0")} 篇</span>
                      </div>
                      <h3 className="mt-3 text-xl font-black leading-tight text-white line-clamp-2">{shortTitle}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-cyan-100/70 font-serif line-clamp-2">{moduleSummaries[issue.smileKey]}</p>
                      <div className="mt-4 font-mono text-[10px] tracking-[0.2em] text-cyan-300">啟動模組 →</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="lg:hidden space-y-4">
            {aiSeries.map((rawIssue, idx) => {
              const issue = withAiMeta(rawIssue, idx);
              return (
                <button key={issue.id} onClick={() => setAiView(issue.id)} className="w-full text-left border border-cyan-900/50 bg-slate-950/70 p-5">
                  <div className="font-mono text-[10px] tracking-[0.22em] text-cyan-400 mb-2">{issue.smileKey[0]}｜{issue.smileKey} / 第 {String(idx + 1).padStart(2, "0")} 篇</div>
                  <div className="text-white font-black text-xl">{issue.title}</div>
                  <div className="text-cyan-100/70 text-sm mt-2 font-serif">{moduleSummaries[issue.smileKey]}</div>
                  <div className="text-slate-400 text-sm mt-2">{issue.coreQuestion}</div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-cyan-900/50 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12 font-mono">
          <div className="text-cyan-400 text-[10px] tracking-[0.35em] mb-2">終章系統報告</div>
          <div className="text-slate-600 text-[9px] tracking-[0.28em] mb-8">FINAL SYSTEM REPORT</div>
          <div className="space-y-5 border-y border-slate-800 py-8">
            <div className="grid grid-cols-[132px_1fr] gap-5"><span className="whitespace-nowrap text-amber-400">01 GUI</span><span className="text-slate-300">介面讓人第一次看懂電腦。</span></div>
            <div className="grid grid-cols-[132px_1fr] gap-5"><span className="whitespace-nowrap text-indigo-400">02 SOCIAL</span><span className="text-slate-300">平台重新分配注意力與身分。</span></div>
            <div className="grid grid-cols-[132px_1fr] gap-5"><span className="whitespace-nowrap text-cyan-400">03 AI</span><span className="text-slate-300">智慧成為可以被配置的時代材料。</span></div>
          </div>
          <div className="mt-10">
            <div className="text-slate-500 text-[10px] tracking-[0.28em] mb-4">最終結論 <span className="text-slate-700">/ CONCLUSION</span></div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-4xl">
              SMILE 不再只是報刊名稱，而是一套理解未來的五個問題。
            </h2>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button onClick={goGui} className="text-amber-300 border-b border-amber-400/50 pb-2 text-left">← 回到第一部曲</button>
            <button onClick={goSocial} className="text-indigo-300 border-b border-indigo-400/50 pb-2 text-left">前往第二部曲 →</button>
          </div>
        </div>
      </section>
    </main>
  );
}

function Footer({ mode }) {
  return (
    <footer className="w-full bg-slate-900 text-slate-400 pt-16 pb-12 flex flex-col items-center text-center border-t border-slate-800">
      <Smile size={40} className={mode === "social" ? "text-indigo-500 mb-6" : mode === "ai" ? "text-cyan-500 mb-6" : "text-amber-500 mb-6"} />
      <div className="font-serif font-black text-xl text-white mb-8 tracking-widest">「在理解科技的那一刻，露出一個小小的微笑。」</div>
      <div className="text-[10px] md:text-xs font-light text-slate-600 w-full border-t border-slate-800 pt-6 max-w-6xl px-6 flex justify-between">
        <span>© 2026 SMILE 科技誌. 連結科技與大眾的橋樑。</span>
        <span className="hidden md:block font-mono">SYS_VERSION: 3.0.0</span>
      </div>
    </footer>
  );
}

function App() {
  const [mode, setMode] = useState("gui");
  const [guiView, setGuiView] = useState(0);
  const [socialView, setSocialView] = useState(0);
  const [aiView, setAiView] = useState(0);

  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [mode, guiView, socialView, aiView]);

  const isHome = mode === "gui" ? guiView === 0 : mode === "social" ? socialView === 0 : aiView === 0;
  const goGui = () => { setMode("gui"); setGuiView(0); setSocialView(0); setAiView(0); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const goSocial = () => { setMode("social"); setSocialView(0); setAiView(0); setGuiView(0); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const goAi = () => { setMode("ai"); setAiView(0); setSocialView(0); setGuiView(0); window.scrollTo({ top: 0, behavior: "smooth" }); };

  let page;
  if (mode === "gui") {
    page = guiView === 0
      ? <GuiHome setMode={setMode} setGuiView={setGuiView} setSocialView={setSocialView} setAiView={setAiView} />
      : <ArticlePage mode="gui" issue={guiSeries[guiView - 1]} index={guiView - 1} total={guiSeries.length} onPrev={() => setGuiView(guiView - 1)} onNext={() => setGuiView(guiView + 1)} onHome={() => setGuiView(0)} onGui={goGui} onSocial={goSocial} onAi={goAi} onSelect={setGuiView} />;
  } else if (mode === "social") {
    page = socialView === 0
      ? <SocialHome setMode={setMode} setSocialView={setSocialView} setGuiView={setGuiView} setAiView={setAiView} />
      : <ArticlePage mode="social" issue={socialSeries[socialView - 1]} index={socialView - 1} total={socialSeries.length} onPrev={() => setSocialView(socialView - 1)} onNext={() => setSocialView(socialView + 1)} onHome={() => setSocialView(0)} onGui={goGui} onSocial={goSocial} onAi={goAi} onSelect={setSocialView} />;
  } else {
    page = aiView === 0
      ? <AiHome setAiView={setAiView} setMode={setMode} setGuiView={setGuiView} setSocialView={setSocialView} />
      : <ArticlePage mode="ai" issue={aiSeries[aiView - 1]} index={aiView - 1} total={aiSeries.length} onPrev={() => setAiView(aiView - 1)} onNext={() => setAiView(aiView + 1)} onHome={() => setAiView(0)} onGui={goGui} onSocial={goSocial} onAi={goAi} onSelect={setAiView} />;
  }

  return (
    <>
      <Header isHome={isHome} mode={mode} setMode={setMode} setGuiView={setGuiView} setSocialView={setSocialView} setAiView={setAiView} />
      {page}
      <Footer mode={mode} />
    </>
  );
}

export default App;
