import React, { useEffect } from 'react';

export default function Recall() {
  useEffect(() => {

  (function() {
    // Interactive Tab Switching for Evaluation Demonstrations
    const tabs = {
      live: document.getElementById('tab-live'),
      loading: document.getElementById('tab-loading'),
      empty: document.getElementById('tab-empty'),
      guardrail: document.getElementById('tab-guardrail')
    };

    const views = {
      live: document.getElementById('view-live'),
      loading: document.getElementById('view-loading'),
      empty: document.getElementById('view-empty'),
      guardrail: document.getElementById('view-guardrail')
    };

    function setActiveTab(activeKey) {
      Object.keys(tabs).forEach(key => {
        if (!tabs[key]) return;
        if (key === activeKey) {
          tabs[key].className = 'px-3 py-1 rounded-lg text-label-md font-label-md font-semibold bg-surface-container-lowest text-primary shadow-sm transition-all';
          if (views[key]) {
            views[key].classList.remove('hidden');
            views[key].classList.add('flex');
          }
        } else {
          tabs[key].className = 'px-3 py-1 rounded-lg text-label-md font-label-md font-medium text-on-surface-variant hover:text-on-surface transition-all';
          if (views[key]) {
            views[key].classList.add('hidden');
            views[key].classList.remove('flex');
          }
        }
      });
    }

    if (tabs.live) tabs.live.addEventListener('click', () => setActiveTab('live'));
    if (tabs.loading) tabs.loading.addEventListener('click', () => setActiveTab('loading'));
    if (tabs.empty) tabs.empty.addEventListener('click', () => setActiveTab('empty'));
    if (tabs.guardrail) tabs.guardrail.addEventListener('click', () => setActiveTab('guardrail'));

    // Prompt Chips Click Action
    const promptChips = document.querySelectorAll('.prompt-chip, .starter-card');
    const inputField = document.getElementById('copilot-input');
    promptChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.getAttribute('data-prompt');
        if (inputField && query) {
          inputField.value = query;
          inputField.focus();
          // Switch to live view to experience active simulation
          setActiveTab('live');
        }
      });
    });

    // Clear Session Simulation
    const clearBtn = document.getElementById('clear-session-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        setActiveTab('empty');
        if (inputField) inputField.value = '';
      });
    }

    // Toggle Right Dossier Panel on Smaller Screens
    const toggleDossierBtn = document.getElementById('toggle-dossier-btn');
    const inspectorPanel = document.getElementById('inspector-panel');
    if (toggleDossierBtn && inspectorPanel) {
      toggleDossierBtn.addEventListener('click', () => {
        if (inspectorPanel.classList.contains('hidden')) {
          inspectorPanel.classList.remove('hidden');
          inspectorPanel.classList.add('flex');
        } else {
          inspectorPanel.classList.add('hidden');
          inspectorPanel.classList.remove('flex');
        }
      });
    }

    // Dynamic auto-expand textarea
    if (inputField) {
      inputField.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
      });
    }
  })();
  }, []);
  return (
    <>
<main className="w-full pt-16 bg-surface"><div className="flex flex-col w-full">
{/* Top Copilot Header & Utilities */}
<div className="px-margin pt-space-lg pb-space-md">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-md">
<div className="flex flex-col gap-1 min-w-0">
<div className="flex items-center gap-space-xs">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-primary font-semibold tracking-wider uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></span>
            PERSISTENT RECALL ENGINE · V2.4 VECTOR RETRIEVAL
          </span>
</div>
<div className="flex items-baseline gap-space-sm mt-1">
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-semibold">Recall AI</h1>
<span className="font-label-md text-label-md text-primary font-semibold">v2.4 Copilot</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          Ask anything about your past meetings, interpersonal commitments, negotiation clauses, and attendee sentiments with 100% verified provenance.
        </p>
</div>
<div className="flex items-center gap-space-sm shrink-0">{/* Enhanced Memory Synced Badge */}<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-lowest shadow-sm ring-1 ring-tertiary/20"><span className="flex h-2 w-2 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span></span><span className="font-label-sm text-label-sm font-semibold tracking-wide text-on-surface">● Memory synced</span><span className="text-[11px] font-code-sm text-tertiary bg-tertiary-fixed/40 px-1.5 py-0.2 rounded font-semibold">186 Nodes</span><span className="material-symbols-outlined text-[16px] text-tertiary" style="font-variation-settings: 'FILL' 1;">verified</span></div>{/* Clear Session */}<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all text-label-md font-label-md shadow-sm" id="clear-session-btn" type="button"><span className="material-symbols-outlined text-[16px]">restart_alt</span><span className="">Clear Session</span></button>{/* Live Metrics Dossier Pill */}<button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-variant transition-colors text-label-md font-label-md" id="toggle-dossier-btn" type="button"><span className="material-symbols-outlined text-[18px]">dataset</span><span className="hidden sm:inline">Entity Context</span></button></div>
</div>
{/* Visual Architecture Pipeline Banner */}
<div className="p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-sm"><div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm font-semibold uppercase tracking-wider px-space-xs"><span className="material-symbols-outlined text-[16px] text-primary">account_tree</span><span className="">Memory Pipeline</span></div><div className="flex flex-wrap items-center gap-2 text-label-sm font-label-sm"><div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface"><span className="material-symbols-outlined text-[14px] text-secondary">chat</span><span className="">User Question</span></div><span className="material-symbols-outlined text-outline text-[14px]">arrow_forward</span><div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary-container/10 text-primary-container font-semibold"><span className="material-symbols-outlined text-[14px]">psychology</span><span className="">Recall AI Copilot</span></div><span className="material-symbols-outlined text-outline text-[14px]">arrow_forward</span><div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary-fixed text-primary font-semibold"><span className="material-symbols-outlined text-[14px] text-primary">database</span><span className="">Hindsight Memories</span></div><span className="material-symbols-outlined text-outline text-[14px]">arrow_forward</span><div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-tertiary-fixed text-on-tertiary-fixed font-semibold"><span className="material-symbols-outlined text-[14px] text-tertiary">verified</span><span className="">Personalized Answer</span></div></div><div className="text-label-sm font-label-sm text-tertiary font-semibold flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">bolt</span><span className="">P99: 142ms</span></div></div>
{/* Prompt Chips Quick Selection */}
<div className="mt-space-sm flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-primary">auto_awesome</span>
        Quick Inquiries:
      </span>
<button className="prompt-chip group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest hover:bg-surface-container text-on-surface text-label-md font-label-md shadow-sm transition-all shrink-0 active:scale-[0.98]" data-prompt="What did Sarah say about pricing?" type="button">
<span className="material-symbols-outlined text-[14px] text-primary group-hover:rotate-12 transition-transform">chat_bubble_outline</span>
<span className="">What did Sarah say about pricing?</span>
</button>
<button className="prompt-chip group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest hover:bg-surface-container text-on-surface text-label-md font-label-md shadow-sm transition-all shrink-0 active:scale-[0.98]" data-prompt="What commitments are still pending with Acme?" type="button">
<span className="material-symbols-outlined text-[14px] text-primary group-hover:rotate-12 transition-transform">schedule</span>
<span className="">What commitments are still pending?</span>
</button>
<button className="prompt-chip group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest hover:bg-surface-container text-on-surface text-label-md font-label-md shadow-sm transition-all shrink-0 active:scale-[0.98]" data-prompt="What does Sarah Williams care about the most?" type="button">
<span className="material-symbols-outlined text-[14px] text-primary group-hover:rotate-12 transition-transform">person_search</span>
<span className="">What does Sarah care about?</span>
</button>
<button className="prompt-chip group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest hover:bg-surface-container text-on-surface text-label-md font-label-md shadow-sm transition-all shrink-0 active:scale-[0.98]" data-prompt="Prepare me for my next Acme executive sync on Friday." type="button">
<span className="material-symbols-outlined text-[14px] text-primary group-hover:rotate-12 transition-transform">assignment_turned_in</span>
<span className="">Prepare me for my next Acme meeting</span>
</button>
</div>
</div>
{/* Primary Intelligence Stage: Split Layout with Collapsible Side Inspector */}
<div className="px-margin pb-space-xl flex gap-space-lg items-start">
{/* Center Copilot Column */}
<div className="flex-1 flex flex-col min-w-0">
{/* Hackathon Reviewer Interactive Showcase Tabs (Interactive Demo Switcher) */}
<div className="mb-space-md p-1.5 rounded-xl bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant px-2 font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">tune</span>
            Inspection Modes:
          </span>
<button className="px-3 py-1 rounded-lg text-label-md font-label-md font-semibold bg-surface-container-lowest text-primary shadow-sm transition-all" id="tab-live" type="button">
            Live Acme Thread
          </button>
<button className="px-3 py-1 rounded-lg text-label-md font-label-md font-medium text-on-surface-variant hover:text-on-surface transition-all" id="tab-loading" type="button">
            Vector Loading State
          </button>
<button className="px-3 py-1 rounded-lg text-label-md font-label-md font-medium text-on-surface-variant hover:text-on-surface transition-all" id="tab-empty" type="button">
            Initial Empty State
          </button>
<button className="px-3 py-1 rounded-lg text-label-md font-label-md font-medium text-on-surface-variant hover:text-on-surface transition-all" id="tab-guardrail" type="button">
            Hallucination Guardrail
          </button>
</div>
<span className="font-code-sm text-code-sm text-on-surface-variant hidden lg:inline px-2">Acme_Corp_Memory_Store.vdb</span>
</div>
{/* VIEW 1: Live Chat Canvas (Default) */}
<div className="flex flex-col gap-space-lg" id="view-live">
{/* TURN 1: User Query */}
<div className="flex items-start justify-end gap-space-sm pl-12">
<div className="flex flex-col items-end max-w-xl">
<div className="flex items-center gap-2 mb-1">
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Elena Rostova</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Today, 10:14 AM</span>
</div>
<div className="p-space-md rounded-2xl rounded-tr-sm bg-primary-container text-on-primary shadow-sm font-body-md text-body-md">
              What did Sarah say about pricing?
            </div>
</div>
<img className="w-9 h-9 rounded-full object-cover shrink-0 shadow-sm mt-1" data-alt="Elena Rostova Senior Partner professional headshot in an executive office setting, confident composure, soft studio light, warm sharp look" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNtnLBXnIozFOsro9d-8royTHEFJhM7GcRBFzVx1-qXu-o-c5xKS22NRP3qAwde368m94S4rrJSWqwTa7r6j0CGVVNp_jR4NLkVBFp26EreVlv1ZYcYFG3E8B8y_vqSLjOX-1Uk5TmUgGEkE2Wilclj9pKa-OILfbtmj3JKp3pTSFNKGYVWOFBDcai7G4mY9Kc80ALaEhMXzvTsC-t8CBKVCSJauFZbTZXND2WCyubkDiOy1ArOUSQ"/>
</div>
{/* TURN 1: AI Hero Response (Rich Memory Grounded) */}
<div className="flex items-start gap-space-sm pr-4">
<div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-sm mt-1">
<span className="material-symbols-outlined text-[20px]">auto_awesome</span>
</div>
<div className="flex flex-col gap-space-sm flex-1 min-w-0">
{/* Header Label & Trace Indicator */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Recall AI</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider">Verified Memory Copilot</span>
</div>
<button className="text-on-surface-variant hover:text-on-surface p-1 rounded hover:bg-surface-container transition-colors" title="Copy response" type="button">
<span className="material-symbols-outlined text-[16px]">content_copy</span>
</button>
</div>
{/* Reasoning Step Banner (Collapsible Micro-Trace) */}
<div className="flex items-center justify-between p-2 px-3 rounded-lg bg-surface-container-low text-on-surface-variant text-label-sm font-label-sm">
<div className="flex items-center gap-2 min-w-0">
<span className="material-symbols-outlined text-primary text-[16px]">bolt</span>
<span className="truncate font-medium text-on-surface">Scanned 43 meetings · Retrieved 2 verified memories across 2 Acme sessions</span>
</div>
<span className="font-code-sm text-code-sm text-tertiary font-medium shrink-0 ml-2">140ms latency</span>
</div>
{/* Core Synthesized Answer Card */}
<div className="p-space-md rounded-2xl rounded-tl-sm bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm"><p className="font-body-lg text-body-lg text-on-surface leading-relaxed">Sarah raised concerns about pricing during your <span className="font-semibold text-on-surface">September 28</span> meeting with Acme. The revised pricing was later accepted during the executive contract renewal.</p>{/* High Visibility Recalled From Memory Header */}<div className="flex items-center justify-between mt-1 pt-1 border-t border-surface-container"><div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-primary font-label-sm text-label-sm font-semibold tracking-wide shadow-sm"><span className="text-[14px]">🧠</span><span className="">Recalled from memory · 2 relevant memories</span></div><span className="font-label-sm text-label-sm text-on-surface-variant hidden sm:inline">Directly connected to Memory Bank</span></div>{/* Evidence Cards Grid */}<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm mt-2">{/* Card 1: Acme Corp · Sep 28 · Pricing concern */}<a className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between gap-space-sm cursor-pointer group border border-transparent hover:border-primary/20 shadow-sm text-left" href="#" title="Open in Memory Bank"><div className="flex flex-col gap-1"><div className="flex items-start justify-between gap-2"><span className="font-headline-sm text-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Acme Corp · Sep 28 · Pricing concern</span><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-highest text-primary font-code-sm text-[11px] font-bold shrink-0"><span className="material-symbols-outlined text-[12px]">forum</span>Discussion · 98% conf</span></div><div className="flex items-center gap-1.5 text-on-surface-variant font-code-sm text-code-sm"><span className="material-symbols-outlined text-[14px]">event</span><span className="">Sep 28, 2026 · 14:00 - 14:45 EST</span></div></div><div className="p-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm italic relative"><span className="font-bold text-primary mr-1">“</span>Sarah raised concerns about API integration pricing and usage overages during high-throughput enterprise batch exports.<span className="font-bold text-primary ml-1">”</span></div><div className="flex items-center justify-between pt-1"><div className="flex items-center gap-1.5"><div className="flex -space-x-1.5 overflow-hidden"><img alt="Sarah Williams" className="inline-block h-5 w-5 rounded-full ring-2 ring-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7WVTDNhLbhn922iVtdaFoPlyi2mEW6LgoRxz1wlNm2Tcqr1BIWN7BVbIg4w4NytUBs_mnG5bPffwMv2WvmUTjurI0g8vpsCa2Egem-l0QUstVMZI0zwZAklZh9taHlmG_mlBzQNsef3BEmKgVL3464ML6MNDACXkGBuyjGKOAxtG6tnJNXohTbM9nVhyTdESozdjnGQXgh2psDBnkXSd__G86i7VyRs75TxbWzr6DDb2xpzyvb_RS"/><img alt="David Chen" className="inline-block h-5 w-5 rounded-full ring-2 ring-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbIUl9BR5voPym2oN5PCNbktCkoyiC_cUit2g92CZ2VvRCeJpGVSD-SwGSC45Mctx6hBKcxDEiYSeYmpAUm3bVjLWPXBTk7EzCvgmw4NoszaAZBJnO3D3m_Xh6yFCpiYlJdAdGOuuFXMUJltzqYDN2TeAjOxKyS5Vds_UOSYNSLPeifXGDOl_KWSDkQmwzBx9Zy6rJaIxnc9btfTJd1maOV7MgCDa4IRDr5qINJZwQ8Ur6jvdBb8H6"/></div><span className="font-label-sm text-label-sm text-on-surface-variant truncate">Sarah W., David C.</span></div><span className="inline-flex items-center gap-1 text-primary text-label-sm font-label-sm font-semibold group-hover:underline"><span className="">Memory Bank</span><span className="material-symbols-outlined text-[14px]">arrow_outward</span></span></div></a>{/* Card 2: Acme Corp · Sep 28 · API proposal commitment */}<a className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between gap-space-sm cursor-pointer group border border-transparent hover:border-primary/20 shadow-sm text-left" href="#" title="Open in Memory Bank"><div className="flex flex-col gap-1"><div className="flex items-start justify-between gap-2"><span className="font-headline-sm text-headline-sm font-semibold text-on-surface group-hover:text-primary transition-colors">Acme Corp · Sep 28 · API proposal commitment</span><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-code-sm text-[11px] font-bold shrink-0"><span className="material-symbols-outlined text-[12px]">assignment_turned_in</span>Commitment · Due Friday</span></div><div className="flex items-center gap-1.5 text-on-surface-variant font-code-sm text-code-sm"><span className="material-symbols-outlined text-[14px]">event</span><span className="">Sep 28, 2026 · 16:30 - 17:15 EST</span></div></div><div className="p-space-sm rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm italic relative"><span className="font-bold text-primary mr-1">“</span>Revised pricing was accepted: $120k annual enterprise tier conditioned on custom single-tenant SLA credit clause.<span className="font-bold text-primary ml-1">”</span></div><div className="flex items-center justify-between pt-1"><div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-tertiary text-[16px]">verified</span><span className="font-label-sm text-label-sm text-on-surface-variant font-medium">David Chen &amp; Sarah Williams</span></div><span className="inline-flex items-center gap-1 text-primary text-label-sm font-label-sm font-semibold group-hover:underline"><span className="">Memory Bank</span><span className="material-symbols-outlined text-[14px]">arrow_outward</span></span></div></a></div>{/* Context Action Shortcuts */}<div className="pt-2 flex flex-wrap items-center gap-2"><span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mr-1">Action Recommendations:</span><button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors shadow-sm" type="button"><span className="material-symbols-outlined text-[16px] text-primary">mail</span><span className="">Draft follow-up note to Sarah</span></button><button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors shadow-sm" type="button"><span className="material-symbols-outlined text-[16px] text-primary">description</span><span className="">View Acme Pricing Clause Dossier</span></button><button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors shadow-sm" type="button"><span className="material-symbols-outlined text-[16px] text-primary">add_task</span><span className="">Add question to today's 10:30 AM briefing</span></button></div></div>
</div>
</div>
{/* TURN 2: User Follow-up Query */}
<div className="flex items-start justify-end gap-space-sm pl-12">
<div className="flex flex-col items-end max-w-xl">
<div className="flex items-center gap-2 mb-1">
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Elena Rostova</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Today, 10:16 AM</span>
</div>
<div className="p-space-md rounded-2xl rounded-tr-sm bg-primary-container text-on-primary shadow-sm font-body-md text-body-md">
              What commitments are still pending with Acme?
            </div>
</div>
<img className="w-9 h-9 rounded-full object-cover shrink-0 shadow-sm mt-1" data-alt="Elena Rostova Senior Partner professional headshot in an executive office setting, confident composure, soft studio light, warm sharp look" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhbAAq75pfZU1LQMZROYlGnfgr7iwu1z3mxazx4Ebkby1yQiLaw0s1pdIKwqVwCgCAXoWr_8VJd_jRyx-s7t4xM6QH28RXraLNfgSi-Co6lD_hZvjvUUMag84ZD6ffs-9WTMote-wbIr8PDv9aY5Rzkb5I58oCiNcoAedwlM-60SzDCkOTmBBdSmFMg-NfPPBG8JTnJ7rJB1G3GnDCCMZ2XfzT1FbWJKjhlMii5MzVfuVg_uKpCSNP"/>
</div>
{/* TURN 2: AI Multi-Turn Answer with Structured Status Items */}
<div className="flex items-start gap-space-sm pr-4">
<div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-sm mt-1">
<span className="material-symbols-outlined text-[20px]">auto_awesome</span>
</div>
<div className="flex flex-col gap-space-sm flex-1 min-w-0">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Recall AI</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider">Commitment Tracker</span>
</div>
<span className="font-code-sm text-code-sm text-on-surface-variant">1 pending · 1 fulfilled</span>
</div>
<div className="p-space-md rounded-2xl rounded-tl-sm bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
<p className="font-body-lg text-body-lg text-on-surface">
                You have <span className="font-semibold text-error">1 open commitment due this Friday</span> and <span className="font-semibold text-tertiary">1 fulfilled commitment</span> tracked across your Acme interactions:
              </p>
{/* Commitments Structured Cards */}
<div className="flex flex-col gap-2.5">
{/* Pending Item */}
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div className="flex items-start gap-3 min-w-0">
<div className="mt-0.5 flex items-center justify-center w-5 h-5 rounded bg-surface-container-lowest text-outline">
<span className="material-symbols-outlined text-[16px]">check_box_outline_blank</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-body-md text-body-md font-semibold text-on-surface">Send updated custom SLA tier agreement to David Chen</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Mentioned in: Architecture Deep Dive · Owner: Elena Rostova</span>
</div>
</div>
<div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px] text-error">schedule</span>
                      Due Friday (in 2 days)
                    </span>
<button className="p-1 rounded text-primary hover:bg-surface-container transition-colors" title="Mark Done" type="button">
<span className="material-symbols-outlined text-[18px]">done</span>
</button>
</div>
</div>
{/* Completed Item */}
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-3 opacity-80">
<div className="flex items-start gap-3 min-w-0">
<div className="mt-0.5 flex items-center justify-center w-5 h-5 rounded bg-tertiary text-on-tertiary">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-body-md text-body-md text-on-surface line-through">Share revised pricing calculator with David &amp; Sarah</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Completed yesterday at 9:15 AM via email attachment</span>
</div>
</div>
<div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
                      Fulfilled
                    </span>
</div>
</div>
</div>
{/* Embedded Vector Provenance Strip */}
<div className="flex flex-col gap-2 pt-2 border-t border-surface-container"><div className="flex items-center justify-between"><div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-primary font-label-sm text-label-sm font-semibold tracking-wide shadow-sm"><span className="text-[14px]">🧠</span><span className="">Recalled from memory · 2 relevant meetings</span></div><span className="font-label-sm text-label-sm text-on-surface-variant hidden sm:inline">Cross-referenced memory sources</span></div><div className="flex flex-wrap items-center gap-2"><a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface text-label-md font-label-md transition-all border border-transparent hover:border-primary/20 shadow-sm group" href="#" title="Open May 12 Debrief in Memory Bank"><span className="material-symbols-outlined text-[14px] text-primary">database</span><span className="font-medium">Acme Corp · May 12 Sprint Debrief</span><span className="material-symbols-outlined text-[14px] text-outline group-hover:text-primary transition-colors">arrow_outward</span></a><a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface text-label-md font-label-md transition-all border border-transparent hover:border-primary/20 shadow-sm group" href="#" title="Open Sep 28 Architecture in Memory Bank"><span className="material-symbols-outlined text-[14px] text-primary">database</span><span className="font-medium">Acme Corp · Sep 28 Architecture Deep Dive</span><span className="material-symbols-outlined text-[14px] text-outline group-hover:text-primary transition-colors">arrow_outward</span></a><button className="ml-auto text-primary font-semibold text-label-sm font-label-sm hover:underline inline-flex items-center gap-1" type="button"><span className="material-symbols-outlined text-[14px]">compare</span><span className="">Inspect Diff</span></button></div></div>
</div>
</div>
</div>
</div>
{/* VIEW 2: Vector Search Loading State (Hidden by default, activated via tabs) */}
<div className="hidden flex-col gap-space-lg" id="view-loading">
<div className="flex items-start justify-end gap-space-sm pl-12">
<div className="flex flex-col items-end max-w-xl">
<div className="flex items-center gap-2 mb-1">
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">Elena Rostova</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Just now</span>
</div>
<div className="p-space-md rounded-2xl rounded-tr-sm bg-primary-container text-on-primary shadow-sm font-body-md text-body-md">
              Summarize all unresolved technical blockers David Chen raised during Q3.
            </div>
</div>
<img className="w-9 h-9 rounded-full object-cover shrink-0 shadow-sm mt-1" data-alt="Elena Rostova Senior Partner professional headshot in an executive office setting, confident composure, soft studio light, warm sharp look" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWZLGs94FIMvMqq3sZxlVLclu4bHIEL3sw-s6zlBH9wdSFjnc5KM0CrChbPReyYGtwb14wLY6tKUq4-zMffadDMpYTvQAR_KQigRTngjFiArD97iu3fVk3LlPaep7rdutjAoQE-aINpLEAILBM5CEu9IaMY6gLLtwsE-ZQ5q0mvc_q5Iv1PfvIrFHZSOG_xi6EM-9wPx9Mz6JehdqywAjEb1f3Tp68LGljJmDXdWYbsjApgwNmguqC"/>
</div>
<div className="flex items-start gap-space-sm pr-4">
<div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-sm mt-1 animate-pulse">
<span className="material-symbols-outlined text-[20px]">auto_awesome</span>
</div>
<div className="flex flex-col gap-space-sm flex-1 min-w-0">
{/* Pulsating Reasoning Status Bar */}
<div className="p-space-md rounded-2xl rounded-tl-sm bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></div>
<span className="font-headline-sm text-headline-sm font-semibold text-primary">Vector searching memory index...</span>
</div>
<span className="font-code-sm text-code-sm text-on-surface-variant font-mono">Embedding: text-embedding-3-large</span>
</div>
{/* Animated Pulse Skeleton */}
<div className="space-y-3">
<div className="h-4 bg-surface-container-high rounded w-3/4 animate-pulse"></div>
<div className="h-4 bg-surface-container-high rounded w-full animate-pulse"></div>
<div className="h-4 bg-surface-container-high rounded w-5/6 animate-pulse"></div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-primary animate-spin">refresh</span>
<span className="">Traversing 43 meeting graphs for entity: [David Chen] &amp; topic: [blockers]...</span>
</div>
<span className="font-code-sm text-code-sm text-primary font-semibold">68% matched</span>
</div>
</div>
</div>
</div>
</div>
{/* VIEW 3: Empty State Canvas */}
<div className="hidden flex-col items-center justify-center py-space-xl px-space-md text-center bg-surface-container-lowest rounded-2xl shadow-sm my-space-md" id="view-empty">
<div className="w-16 h-16 rounded-2xl bg-secondary-fixed flex items-center justify-center text-primary mb-space-md shadow-sm">
<span className="material-symbols-outlined text-[36px]">psychology</span>
</div>
<h2 className="font-headline-lg text-headline-lg font-semibold text-on-surface tracking-tight mb-2">
          Your Knowledge Graph Is Ready
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-space-lg">
          Ask Recall AI anything across 43 indexed client meetings, 186 persistent memory nodes, and 28 participant profiles.
        </p>
{/* Suggested Starter Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm w-full max-w-xl text-left">
<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer starter-card" data-prompt="What were the top 3 decisions made last week?">
<span className="material-symbols-outlined text-primary text-[20px] mb-1">checklist</span>
<div className="font-headline-sm text-headline-sm font-semibold text-on-surface">Weekly Executive Summary</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-1">What were the top 3 decisions made last week across all clients?</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer starter-card" data-prompt="Give me a comprehensive dossier on Sarah Williams from Acme.">
<span className="material-symbols-outlined text-primary text-[20px] mb-1">badge</span>
<div className="font-headline-sm text-headline-sm font-semibold text-on-surface">Stakeholder Dossier</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-1">Compile preferences, priorities, and past objections for Sarah Williams.</div>
</div>
</div>
</div>
{/* VIEW 4: Guardrail / Ambiguity Canvas */}
<div className="hidden flex-col gap-space-md my-space-md" id="view-guardrail">
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-error-container text-on-error-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">shield_with_heart</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md font-semibold text-on-surface">Zero-Hallucination Strict Guardrail Triggered</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Query: "Did Acme ever mention acquiring an offshore delivery hub in Manila?"</p>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md leading-relaxed">
<strong className="text-on-surface">No direct corroborating memory was found in your logged sessions.</strong>
<p className="mt-2 text-on-surface-variant">
              Recall AI refuses to synthesize speculative claims. Across 43 meetings with Acme Corp (from March 12, 2026 to present), Manila or offshore delivery centers were never mentioned by Sarah Williams, David Chen, or any other participant.
            </p>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-2">
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-tertiary text-[16px]">verified</span>
              100% Grounded in raw transcripts &amp; shared notes.
            </span>
<button className="w-full sm:w-auto px-4 py-2 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-variant transition-colors" type="button">
              Broaden Semantic Search Scope
            </button>
</div>
</div>
</div>
{/* Sticky Copilot Chat Input Bar */}
<div className="sticky bottom-4 mt-space-lg z-30">
<div className="p-2 sm:p-3 rounded-2xl bg-surface-container-lowest/95 backdrop-blur-xl shadow-lg flex flex-col gap-2">
{/* Active Context Filter Pills */}
<div className="flex items-center justify-between px-2 pt-1">
<div className="flex items-center gap-2 overflow-x-auto">
{/* Active Entity Scope Filter Pill */}
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="">Scope: Acme Corp</span>
<button className="hover:text-error transition-colors" title="Remove scope filter" type="button">
<span className="material-symbols-outlined text-[14px]">close</span>
</button>
</div>
{/* Persona Filter Pill */}
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">person</span>
<span className="">Sarah Williams + David Chen</span>
</div>
{/* Time Horizon Filter Pill */}
<div className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">date_range</span>
<span className="">Past 6 Months</span>
</div>
</div>
<span className="font-code-sm text-code-sm text-outline hidden md:inline">Grounding: Strict Verified</span>
</div>
{/* Input Row */}
<div className="flex items-end gap-2 px-1">
{/* Context Attachment Button */}
<button className="p-2.5 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors shrink-0" title="Attach Meeting or Notes" type="button">
<span className="material-symbols-outlined text-[20px]">add_circle</span>
</button>
{/* Text Field Area */}
<div className="flex-1 min-w-0">
<textarea className="w-full resize-none bg-transparent text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none py-2 px-1 max-h-32" id="copilot-input" placeholder="Ask Recall AI about meetings, people, commitments..." rows="1"></textarea>
</div>
{/* Voice Input Mic */}
<button className="p-2.5 rounded-xl text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors shrink-0" id="voice-input-btn" title="Voice Query" type="button">
<span className="material-symbols-outlined text-[20px]">mic</span>
</button>
{/* Send Action Button */}
<button className="inline-flex items-center justify-center h-10 px-4 rounded-xl bg-primary-container text-on-primary hover:bg-primary transition-all active:scale-[0.98] shadow-sm shrink-0 font-label-md text-label-md font-semibold gap-1.5" id="send-btn" type="button">
<span className="">Send</span>
<span className="material-symbols-outlined text-[16px]">arrow_upward</span>
</button>
</div>
</div>
</div>
</div>
{/* Right-Hand Knowledge Inspector & Entity State (Collapsible) */}
<aside className="w-80 shrink-0 hidden xl:flex flex-col gap-space-md" id="inspector-panel">
{/* Focused Entity Dossier Card */}
<div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-1">
<span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-primary">Active Memory Context</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed text-primary font-code-sm text-[11px] font-bold">
            Live Link
          </span>
</div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary font-bold text-headline-md shrink-0">
            AC
          </div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface truncate">Acme Corporation</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Enterprise Tier 1 · Q3 Renewal</span>
</div>
</div>
<div className="grid grid-cols-2 gap-2 pt-2 text-center">
<div className="p-2 rounded-lg bg-surface-container-low">
<div className="font-headline-sm text-headline-sm font-semibold text-on-surface">43</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Indexed Meetings</div>
</div>
<div className="p-2 rounded-lg bg-surface-container-low">
<div className="font-headline-sm text-headline-sm font-semibold text-tertiary">98.2%</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">Fact Grounding</div>
</div>
</div>
</div>
{/* Key Stakeholders Micro-Dossier */}
<div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">Stakeholder Profiles</span>
<span className="font-code-sm text-code-sm text-outline">2 Synced</span>
</div>
{/* Stakeholder 1 */}
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-1.5">
<div className="flex items-center gap-2">
<img alt="Sarah Williams" className="w-7 h-7 rounded-full object-cover shrink-0" data-alt="Sarah Williams VP Product headshot professional woman blonde hair smiling modern office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlqG5Pd28qhkHk-Cym_Es9ZKKLH3-QyPjg87OcawWWZCuRz4pOdSd9HJb9EmbQjlBDjumwBvDmin1LjZ_B_JhSKxlyRE2NWdSfDxpBzvf2ArNRCzehR40E4KNkZY2qW5GUjCXg5ZCHsG9VibTJjinEFd3pISuxDzzQJtgsAwsTipxPvSwv6nct7w9_iOl5FMMl6-_J2I1aPkVjxOqvI5zeiZN5XTOJ3ZJ7tgm9ndK4aaakLqVpM8Sr"/>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface truncate">Sarah Williams</span>
<span className="font-label-sm text-label-sm text-on-surface-variant truncate">VP Product · Key Decision Maker</span>
</div>
</div>
<div className="text-body-sm font-body-sm text-on-surface-variant bg-surface-container-lowest p-2 rounded-lg">
<span className="font-semibold text-on-surface">Core Priority:</span> Integration speed &amp; API batch SLAs without unbounded overage spikes.
          </div>
</div>
{/* Stakeholder 2 */}
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-1.5">
<div className="flex items-center gap-2">
<img alt="David Chen" className="w-7 h-7 rounded-full object-cover shrink-0" data-alt="David Chen Head of Engineering portrait Asian male spectacles technology executive" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD49EAfSO8Nfpt3vF3b0SiZPb4ap9Xpdthnn3SM3OQCUq039DoHP5zI9R4aFNMM59k9QJBgz1H7fpEHR0eIAXlpfnOdZZHtjfU0EfKFLc2OahKPto7amAff35l5D3KQtmpgB2UqErITH_JbDcZKsc3IQwK4Uq0H3TUKLE1mUpT41Gy75QABxx1nwGjpPvpOMblBa5a-AK8kst5B030ktIsDAUiaUkqDOGbqH-vlsew9t_ZPMjCsFaGV"/>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface truncate">David Chen</span>
<span className="font-label-sm text-label-sm text-on-surface-variant truncate">Head of Eng · Technical Sign-off</span>
</div>
</div>
<div className="text-body-sm font-body-sm text-on-surface-variant bg-surface-container-lowest p-2 rounded-lg">
<span className="font-semibold text-on-surface">Pending Deliverable:</span> Awaiting custom single-tenant credit addendum by this Friday.
          </div>
</div>
</div>
{/* Vector Cluster Mini Map Graphic */}
<div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">Semantic Cluster</span>
<span className="font-code-sm text-code-sm text-primary">K-Means: 4 Nodes</span>
</div>
{/* Inline SVG Visualization of Knowledge Mesh */}
<div className="relative w-full h-36 bg-surface-container-low rounded-xl overflow-hidden flex items-center justify-center p-2">
<svg className="w-full h-full text-primary" fill="none" stroke="currentColor" viewBox="0 0 240 120">
{/* Connecting Vectors */}
<line stroke="currentColor" strokeDasharray="3 3" stroke-opacity="0.25" strokeWidth="1.5" x1="40" x2="110" y1="60" y2="35"></line>
<line stroke="currentColor" stroke-opacity="0.3" strokeWidth="1.5" x1="110" x2="190" y1="35" y2="45"></line>
<line stroke="currentColor" stroke-opacity="0.25" strokeWidth="1.5" x1="110" x2="130" y1="35" y2="95"></line>
<line stroke="currentColor" stroke-opacity="0.2" strokeWidth="1.5" x1="40" x2="130" y1="60" y2="95"></line>
<line stroke="currentColor" stroke-opacity="0.35" strokeWidth="1.5" x1="130" x2="190" y1="95" y2="45"></line>
{/* Central Node (Pricing Decision) */}
<circle className="fill-primary text-on-primary shadow-sm" cx="110" cy="35" r="9"></circle>
<circle className="stroke-primary animate-ping opacity-25" cx="110" cy="35" r="14" strokeWidth="1"></circle>
{/* Periphery Nodes */}
<circle className="fill-surface-container-highest stroke-outline" cx="40" cy="60" r="6" strokeWidth="1.5"></circle>
<circle className="fill-tertiary-fixed stroke-tertiary" cx="190" cy="45" r="7" strokeWidth="1.5"></circle>
<circle className="fill-secondary stroke-primary" cx="130" cy="95" r="6" strokeWidth="1.5"></circle>
{/* Node Labels */}
<text fill="#131b2e" font-family="Geist" font-size="8" font-weight="600" text-anchor="middle" x="110" y="20">$120k Clause</text>
<text fill="#464555" font-family="Inter" font-size="7" text-anchor="middle" x="35" y="80">API Specs</text>
<text fill="#005338" font-family="Inter" font-size="7" text-anchor="middle" x="195" y="65">SLA Signed</text>
<text fill="#464555" font-family="Inter" font-size="7" text-anchor="middle" x="130" y="112">Sarah W.</text>
</svg>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Nodes anchored with high semantic affinity (&gt;0.89 cosine distance).
        </p>
</div>
{/* Quick Session Reset Advice */}
<div className="p-space-sm rounded-xl bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm flex items-start gap-2">
<span className="material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5">info</span>
<span className="">Every synthesized answer is cryptographically cross-referenced to original recording timestamps.</span>
</div>
</aside>
</div>
</div>
</main>
    </>
  );
}