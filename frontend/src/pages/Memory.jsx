import React, { useEffect } from 'react';

export default function Memory() {
  useEffect(() => {

  // Keyboard shortcut listener for search field
  window.addEventListener('keydown', function(e) {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      const search = document.getElementById('memorySearchInput');
      if (search) search.focus();
    }
  });
  }, []);
  return (
    <>
<main className="relative pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full">
<div className="px-margin py-space-xl flex flex-col gap-space-lg">
{/* Section 1: Header / Breadcrumb Area */}
<section className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">PERSISTENT KNOWLEDGE GRAPH • V2.4 CONTINUOUS INDEX</span>
</div>
<h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">Memory</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Everything RecallMeet has learned from your meetings.</p>
</div>
<div className="flex flex-wrap items-center gap-space-sm shrink-0">
<button className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container shadow-sm transition-all font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">share</span>
          Export Knowledge Graph
        </button>
<div className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container text-tertiary font-label-md text-label-md">
<span className="w-2 h-2 rounded-full bg-tertiary-container animate-ping"></span>
<span>Vector Sync: Active (240ms)</span>
</div>
<button className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-primary-container hover:bg-primary text-on-primary shadow-sm transition-all font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">add</span>
          Add Manual Memory
        </button>
</div>
</section>
{/* Section 2: Continuum Visual Pipeline Banner */}
<section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md relative overflow-hidden">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-secondary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">hub</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">The Continuous Memory Pipeline</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Continuous knowledge synthesis eliminates meeting repetition and safeguards relationship continuity.</p>
</div>
</div>
<span className="font-code-sm text-code-sm bg-surface-container-low px-2 py-1 rounded text-on-surface-variant self-start md:self-auto">MODEL: RECALL-HYBRID-70B • AUTO-INDEX</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-space-md pt-space-xs">
{/* Step 1 */}
<div className="flex items-start gap-space-sm p-space-sm bg-surface-container-low rounded-lg relative">
<div className="w-6 h-6 rounded-full bg-primary-fixed flex items-center justify-center font-label-sm text-label-sm text-primary shrink-0">1</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-label-md text-on-surface">Meeting</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Transcript &amp; Debrief</span>
</div>
<div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-outline-variant">
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>
{/* Step 2 */}
<div className="flex items-start gap-space-sm p-space-sm bg-secondary-fixed/40 rounded-lg relative">
<div className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center font-label-sm text-label-sm text-on-primary shrink-0">2</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-label-md text-primary">Memory</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Vector Extraction &amp; Taxonomy</span>
</div>
<div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-outline-variant">
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>
{/* Step 3 */}
<div className="flex items-start gap-space-sm p-space-sm bg-surface-container-low rounded-lg relative">
<div className="w-6 h-6 rounded-full bg-primary-fixed flex items-center justify-center font-label-sm text-label-sm text-primary shrink-0">3</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-label-md text-on-surface">Recall</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Contextual Retrieval</span>
</div>
<div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-outline-variant">
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>
{/* Step 4 */}
<div className="flex items-start gap-space-sm p-space-sm bg-surface-container-low rounded-lg">
<div className="w-6 h-6 rounded-full bg-tertiary-fixed flex items-center justify-center font-label-sm text-label-sm text-tertiary shrink-0">4</div>
<div className="flex flex-col min-w-0">
<span className="font-headline-sm text-label-md text-on-surface">Better Preparation</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Zero Blindspots</span>
</div>
</div>
</div>
</section>
{/* Section 3: Statistics Row (5 metric cards) */}
<section className="grid grid-cols-2 md:grid-cols-5 gap-space-md">
{/* Card 1 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Total Memories</span>
<span className="material-symbols-outlined text-[18px] text-primary">psychology</span>
</div>
<div className="mt-space-sm flex flex-col">
<span className="font-headline-xl text-headline-xl text-on-surface">186</span>
<div className="flex items-center gap-1 mt-1">
<span className="font-label-sm text-label-sm text-tertiary-container bg-tertiary-fixed/30 px-1.5 py-0.5 rounded">+12 this week</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">98.4% conf.</span>
</div>
</div>
</div>
{/* Card 2 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">People</span>
<span className="material-symbols-outlined text-[18px] text-secondary">groups</span>
</div>
<div className="mt-space-sm flex flex-col">
<span className="font-headline-xl text-headline-xl text-on-surface">32</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1 truncate">Key stakeholders in 14 orgs</span>
</div>
</div>
{/* Card 3 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Companies</span>
<span className="material-symbols-outlined text-[18px] text-primary-container">apartment</span>
</div>
<div className="mt-space-sm flex flex-col">
<span className="font-headline-xl text-headline-xl text-on-surface">14</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1 truncate">Active enterprise accounts</span>
</div>
</div>
{/* Card 4 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Commitments</span>
<span className="material-symbols-outlined text-[18px] text-error">assignment_late</span>
</div>
<div className="mt-space-sm flex flex-col">
<span className="font-headline-xl text-headline-xl text-on-surface">8</span>
<div className="flex items-center gap-1 mt-1">
<span className="font-label-sm text-label-sm text-error bg-error-container/40 px-1.5 py-0.5 rounded">4 pending</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">2 due this week</span>
</div>
</div>
</div>
{/* Card 5 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow col-span-2 md:col-span-1">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Preferences</span>
<span className="material-symbols-outlined text-[18px] text-tertiary">tune</span>
</div>
<div className="mt-space-sm flex flex-col">
<span className="font-headline-xl text-headline-xl text-on-surface">46</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-1 truncate">Format, tone &amp; tech cues</span>
</div>
</div>
</section>
{/* Section 4: Search & Filters */}
<section className="flex flex-col gap-space-sm">
<div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-sm bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
<div className="flex items-center bg-surface-container-low px-space-md py-2.5 rounded-lg flex-1 min-w-[280px]">
<span className="material-symbols-outlined text-on-surface-variant text-[18px] mr-space-sm">search</span>
<input className="w-full bg-transparent border-none outline-none font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant" id="memorySearchInput" placeholder="Search memories, entities, or quotes... (Press / to focus)" type="text"/>
<span className="font-code-sm text-code-sm bg-surface-container px-1.5 py-0.5 rounded text-on-surface-variant shrink-0">/</span>
</div>
<div className="flex flex-wrap items-center gap-space-xs">
<div className="relative">
<button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">domain</span>
<span>Company: <strong>Acme Corp</strong></span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</button>
</div>
<div className="relative">
<button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">verified</span>
<span>Confidence: <strong>&gt;90%</strong></span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</button>
</div>
<div className="relative">
<button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">swap_vert</span>
<span>Sort: <strong>Most Recent</strong></span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</button>
</div>
</div>
</div>
{/* Filter Tabs / Pills */}
<div className="flex items-center gap-space-xs overflow-x-auto pb-1">
<button className="px-space-md py-1.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md whitespace-nowrap shadow-sm">
          All (186)
        </button>
<button className="px-space-md py-1.5 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md whitespace-nowrap transition-colors">
          People (32)
        </button>
<button className="px-space-md py-1.5 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md whitespace-nowrap transition-colors">
          Preferences (46)
        </button>
<button className="px-space-md py-1.5 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md whitespace-nowrap transition-colors">
          Commitments (8)
        </button>
<button className="px-space-md py-1.5 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md whitespace-nowrap transition-colors">
          Decisions (54)
        </button>
<button className="px-space-md py-1.5 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md whitespace-nowrap transition-colors">
          Discussions (46)
        </button>
</div>
</section>
{/* Section 5: Two-Column Workspace (Memory Feed on Left, Inspection Drawer on Right) */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/* Left Column: Memory Feed (7 cols) */}
<div className="lg:col-span-7 flex flex-col gap-space-md">
{/* CARD 1 (Selected State) */}
<article className="bg-surface-container-lowest p-space-md rounded-xl shadow-md cursor-pointer transition-all relative overflow-hidden bg-gradient-to-r from-primary-fixed/20 via-surface-container-lowest to-surface-container-lowest">
<div className="flex items-center justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-primary font-label-sm text-label-sm uppercase tracking-wider">PREFERENCE</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container font-code-sm text-code-sm text-on-surface-variant">Conf: 98%</span>
<span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-fixed/50 text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[13px]">auto_awesome</span> Recalled by AI
              </span>
</div>
<span className="flex items-center gap-1 font-label-sm text-label-sm text-primary font-semibold">
<span className="material-symbols-outlined text-[15px]">push_pin</span> Pinned to Master Dossier
            </span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">Sarah prefers email communication.</h3>
<div className="p-space-sm rounded-lg bg-surface-container-low mb-space-sm">
<p className="font-body-md text-body-md text-on-surface-variant italic">
              “Sarah explicitly mentioned she hates long slide decks for renewals, prefers bulleted summaries in Notion or email.”
            </p>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="flex items-center gap-1 px-2 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px] text-primary">domain</span> Acme Corp
              </span>
<span className="flex items-center gap-1 px-2 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px] text-on-surface-variant">person</span> Sarah Williams (VP Product)
              </span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Sep 28, 2026</span>
</div>
<a className="flex items-center gap-1 font-label-sm text-label-sm text-primary hover:text-primary-container transition-colors" href="#">
<span className="material-symbols-outlined text-[15px]">calendar_today</span>
<span>Acme Corp — Q3 Enterprise Expansion &amp; Renewal</span>
</a>
</div>
</article>
{/* CARD 2 (Commitment) */}
<article className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-all">
<div className="flex items-center justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="px-2.5 py-0.5 rounded-full bg-error-container/60 text-on-error-container font-label-sm text-label-sm uppercase tracking-wider">COMMITMENT</span>
<span className="px-2 py-0.5 rounded-full bg-error-container text-error font-label-sm text-label-sm">Due Friday</span>
<span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[13px]">auto_awesome</span> Recalled by AI
              </span>
</div>
<span className="font-label-sm text-label-sm text-error bg-error-container/30 px-2 py-0.5 rounded">Pending • Ready to draft</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">Send API proposal.</h3>
<div className="p-space-sm rounded-lg bg-surface-container-low mb-space-sm">
<p className="font-body-md text-body-md text-on-surface-variant italic">
              “Pledged during Acme Sprint Debrief — required for technical committee review.”
            </p>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="flex items-center gap-1 px-2 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px] text-primary">domain</span> Acme Corp
              </span>
<span className="flex items-center gap-1 px-2 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px] text-on-surface-variant">badge</span> Elena Rostova (Assignee)
              </span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Due Oct 2, 2026</span>
</div>
<a className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-[15px]">event</span>
<span>Acme Corp — May Sync &amp; Technical Follow-up</span>
</a>
</div>
</article>
{/* CARD 3 (Decision) */}
<article className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-all">
<div className="flex items-center justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-tertiary font-label-sm text-label-sm uppercase tracking-wider">DECISION</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container font-code-sm text-code-sm text-on-surface-variant">Conf: 95%</span>
<span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[13px]">auto_awesome</span> Recalled by AI
              </span>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary-fixed-dim/40 text-on-tertiary-fixed font-label-sm text-label-sm">Deal Impact: High · Stage 4 Closed</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">Revised pricing was accepted.</h3>
<div className="p-space-sm rounded-lg bg-surface-container-low mb-space-sm">
<p className="font-body-md text-body-md text-on-surface-variant italic">
              “Accepted $120k annual enterprise tier conditioned on custom single-tenant SLA credit clause.”
            </p>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="flex items-center gap-1 px-2 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px] text-primary">domain</span> Acme Corp
              </span>
<span className="flex items-center gap-1 px-2 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px] text-on-surface-variant">group</span> David Chen &amp; Sarah Williams
              </span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Sep 28, 2026</span>
</div>
<a className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-[15px]">event</span>
<span>Acme Corp — Q3 Enterprise Expansion</span>
</a>
</div>
</article>
{/* CARD 4 (Discussion) */}
<article className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-all">
<div className="flex items-center justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="px-2.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">DISCUSSION</span>
<span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[13px]">auto_awesome</span> Recalled by AI
              </span>
</div>
<span className="font-label-sm text-label-sm text-primary-container bg-primary-fixed/40 px-2 py-0.5 rounded">Follow-up Prepared for Briefing</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">Sarah raised concerns about API integration pricing.</h3>
<div className="p-space-sm rounded-lg bg-surface-container-low mb-space-sm">
<p className="font-body-md text-body-md text-on-surface-variant italic">
              “Sarah expressed hesitation regarding usage overages during high-throughput enterprise batch exports.”
            </p>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="flex items-center gap-1 px-2 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px] text-primary">domain</span> Acme Corp
              </span>
<span className="flex items-center gap-1 px-2 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px] text-on-surface-variant">person</span> Sarah Williams
              </span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Sep 28, 2026</span>
</div>
<a className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-[15px]">event</span>
<span>Acme Corp — Post-Launch Feedback &amp; Q3 Renewal</span>
</a>
</div>
</article>
{/* CARD 5 (Technical Preference) */}
<article className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md cursor-pointer transition-all">
<div className="flex items-center justify-between gap-space-sm mb-space-sm">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-primary font-label-sm text-label-sm uppercase tracking-wider">PREFERENCE</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container font-code-sm text-code-sm text-on-surface-variant">Conf: 94%</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Architecture Guardrail</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">David Chen requires single-tenant VPC or SOC2 Type II compliance pack prior to rollout.</h3>
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="flex items-center gap-1 px-2 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px] text-primary">domain</span> Acme Corp
              </span>
<span className="flex items-center gap-1 px-2 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px] text-on-surface-variant">terminal</span> David Chen (Head of Eng)
              </span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Sep 26, 2026</span>
</div>
<a className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-[15px]">event</span>
<span>Acme Corp — Architecture Deep Dive</span>
</a>
</div>
</article>
</div>
{/* Right Column: Detail Inspection Drawer (5 cols) */}
<aside className="lg:col-span-5 bg-surface-container-lowest p-space-lg rounded-xl shadow-md flex flex-col gap-space-lg sticky top-20">
{/* Drawer Header */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="font-code-sm text-code-sm bg-surface-container px-2 py-1 rounded text-on-surface-variant font-medium">MEM-8842</span>
<span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-fixed/50 text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[13px]">auto_awesome</span> Recalled by AI
            </span>
</div>
<button className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors" title="Collapse detail">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
{/* Entity & Primary Statement */}
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">Stakeholder Preference</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">
            Sarah prefers email communication and concise bulleted Notion summaries over slide decks.
          </h2>
</div>
{/* Exact Verbatim Citation */}
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs relative">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider">Exact Verbatim Citation</span>
<span className="material-symbols-outlined text-[16px]">format_quote</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
            “Sarah joined on time. Expressed great satisfaction with the pilot stability over the past 2 weeks. Mentioned she hates long slide decks for renewals, prefers bulleted summaries in Notion or email.”
          </p>
</div>
{/* Detailed Metadata Grid */}
<div className="grid grid-cols-2 gap-space-md bg-surface-container-low/50 p-space-md rounded-xl">
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Source Meeting</span>
<span className="font-headline-sm text-label-md text-on-surface truncate">Acme Corp — Post-Launch Feedback</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Today, 10:30 AM</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Confidence</span>
<span className="font-headline-sm text-label-md text-tertiary-container">98.2%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">High Semantic Match</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Date Created</span>
<span className="font-body-sm text-body-sm text-on-surface">Sep 28, 2026</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">10:48 AM UTC</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Related Company</span>
<span className="font-headline-sm text-label-md text-on-surface">Acme Corp</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Enterprise Tier 1 ($120k)</span>
</div>
</div>
{/* Stakeholder Persona Card */}
<div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-xl">
<div className="flex items-center gap-space-sm">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Corporate headshot of Sarah Williams, VP of Product at Acme Corp, professional attire with soft neutral studio background, crisp modern portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1vSTcOJkfWon6pES3F0xzxC8Ry_8vHd6QAyfoFvlLkPoFPF2l8Lhxr-rigjBsjuXTF1GzbRNH8VlXye6FpVBlsLOxJFLkAeKDBy_Y9xeufP8DMtTFZ25MdFiAk2DzDbhBMd-hj4QBTWtFhZMDNt9Th8N2FkSuiEFCjy7lrrGbYmaxoGZYTaOAVBRlhEQX36onwCpk8XX3lGB8aGuAw_Yyrt__m01vHGcsNRGnE3P8KDxTHCMj_w4K"/>
<div className="flex flex-col">
<span className="font-headline-sm text-label-md text-on-surface">Sarah Williams</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">VP Product, Acme Corp</span>
</div>
</div>
<div className="flex items-center gap-1">
<a className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-colors" href="mailto:sarah@acmewidgets.com" title="Email Sarah">
<span className="material-symbols-outlined text-[16px]">mail</span>
</a>
<a className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-colors" href="#" title="LinkedIn Profile">
<span className="material-symbols-outlined text-[16px]">open_in_new</span>
</a>
</div>
</div>
{/* How This Memory Was Recalled */}
<div className="p-space-md rounded-xl bg-secondary-fixed/30 flex flex-col gap-space-xs">
<div className="flex items-center gap-space-xs text-primary">
<span className="material-symbols-outlined text-[16px]">psychology</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">How This Memory Was Recalled</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface">
            Automatically injected into today's 10:30 AM Acme Corp Meeting Briefing under “Recommended Talking Points” to advise presenter against using pitch deck.
          </p>
</div>
{/* Connected Nodes / Related Memories */}
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Connected Nodes (3)</span>
<span className="font-code-sm text-code-sm text-primary">Graph view</span>
</div>
<div className="flex flex-col gap-space-xs">
<div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer flex flex-col gap-0.5">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Discussion • Sep 28</span>
<span className="material-symbols-outlined text-[14px] text-on-surface-variant">arrow_forward</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface truncate">Sarah raised concerns about API integration pricing</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer flex flex-col gap-0.5">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-error uppercase">Commitment • Sep 28</span>
<span className="material-symbols-outlined text-[14px] text-on-surface-variant">arrow_forward</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface truncate">Elena to send updated custom SLA contract draft by Thursday</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer flex flex-col gap-0.5">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-tertiary uppercase">Decision • Sep 28</span>
<span className="material-symbols-outlined text-[14px] text-on-surface-variant">arrow_forward</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface truncate">Revised pricing was accepted ($120k ARR)</span>
</div>
</div>
</div>
{/* Action Footer */}
<div className="flex flex-col gap-space-sm pt-space-sm">
<div className="flex items-center gap-space-sm">
<button className="flex-1 py-2 px-space-md rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md">
              Edit Memory
            </button>
<button className="flex-1 py-2 px-space-md rounded-lg bg-primary-container hover:bg-primary text-on-primary shadow-sm transition-colors font-label-md text-label-md">
              View in Acme Dossier
            </button>
</div>
<button className="text-center font-label-sm text-label-sm text-error hover:underline transition-all">
            Delete / Deprecate Memory Node
          </button>
</div>
</aside>
</section>
</div>
</div>
</main>
    </>
  );
}