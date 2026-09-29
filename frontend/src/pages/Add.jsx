import React, { useEffect } from 'react';

export default function Add() {
  useEffect(() => {

  function triggerSimulation() {
    const btn = document.getElementById('extract-trigger-btn');
    const btnText = document.getElementById('btn-text');
    const successCard = document.getElementById('success-section');

    btnText.textContent = "Synthesizing Memories...";
    btn.classList.add('opacity-90', 'cursor-wait');

    setTimeout(() => {
      btnText.textContent = "Saved & Extracted ✓";
      btn.classList.remove('cursor-wait');
      btn.classList.add('bg-tertiary-container');

      // Scroll smoothly to success dossier on smaller viewports
      if (window.innerWidth < 1280) {
        successCard.scrollIntoView({ behavior: 'smooth' });
      }

      // Pulse animation effect on the extracted memories
      successCard.classList.add('ring-2', 'ring-tertiary/40');
      setTimeout(() => {
        successCard.classList.remove('ring-2', 'ring-tertiary/40');
        btnText.textContent = "Save & Extract Memory";
        btn.classList.remove('bg-tertiary-container');
      }, 2500);
    }, 700);
  }

  function filterView(mode) {
    const editor = document.getElementById('editor-section');
    const success = document.getElementById('success-section');
    const btnAll = document.getElementById('view-mode-all');
    const btnEditor = document.getElementById('view-mode-editor');
    const btnSuccess = document.getElementById('view-mode-success');

    // Reset tab active states
    [btnAll, btnEditor, btnSuccess].forEach(btn => {
      btn.classList.remove('bg-surface-container-lowest', 'text-on-surface', 'shadow-sm');
      btn.classList.add('text-on-surface-variant');
    });

    if (mode === 'editor') {
      editor.classList.remove('hidden', 'xl:col-span-7');
      editor.classList.add('xl:col-span-12');
      success.classList.add('hidden');
      btnEditor.classList.add('bg-surface-container-lowest', 'text-on-surface', 'shadow-sm');
      btnEditor.classList.remove('text-on-surface-variant');
    } else if (mode === 'success') {
      success.classList.remove('hidden', 'xl:col-span-5');
      success.classList.add('xl:col-span-12');
      editor.classList.add('hidden');
      btnSuccess.classList.add('bg-surface-container-lowest', 'text-on-surface', 'shadow-sm');
      btnSuccess.classList.remove('text-on-surface-variant');
    }
  }

  function showBothViews() {
    const editor = document.getElementById('editor-section');
    const success = document.getElementById('success-section');
    const btnAll = document.getElementById('view-mode-all');
    const btnEditor = document.getElementById('view-mode-editor');
    const btnSuccess = document.getElementById('view-mode-success');

    [btnAll, btnEditor, btnSuccess].forEach(btn => {
      btn.classList.remove('bg-surface-container-lowest', 'text-on-surface', 'shadow-sm');
      btn.classList.add('text-on-surface-variant');
    });

    editor.classList.remove('hidden', 'xl:col-span-12');
    editor.classList.add('xl:col-span-7');
    success.classList.remove('hidden', 'xl:col-span-12');
    success.classList.add('xl:col-span-5');

    btnAll.classList.add('bg-surface-container-lowest', 'text-on-surface', 'shadow-sm');
    btnAll.classList.remove('text-on-surface-variant');
  }
  }, []);
  return (
    <>
<main className="relative pt-16 bg-surface"><div className="max-w-7xl mx-auto p-space-lg lg:p-space-xl"><div className="flex flex-col w-full">
{/* Top Orchestration Bar */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs text-primary font-label-sm uppercase tracking-wider mb-1">
<span className="material-symbols-outlined text-[15px]" style="font-variation-settings: 'FILL' 1;">neurology</span>
<span>Semantic Memory Ingestion Engine</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary/40 mx-1"></span>
<span className="text-on-surface-variant font-code-sm">v2.4 Live Index</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">Log Meeting & Extract Persistent Memory</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mt-0.5">
        RecallMeet automatically parses commitments, latent client preferences, executive decisions, and friction vectors into unified client intelligence dossiers.
      </p>
</div>
{/* Mode Toggle / Indicator */}
<div className="flex items-center gap-space-sm bg-surface-container p-1 rounded-xl shrink-0 self-start lg:self-auto">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md shadow-sm transition-all flex items-center gap-1.5" id="view-mode-all" onclick="showBothViews()">
<span className="material-symbols-outlined text-[16px]">splitscreen</span>
<span>Full Workflow</span>
</button>
<button className="px-space-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md transition-all flex items-center gap-1.5" id="view-mode-editor" onclick="filterView('editor')">
<span className="material-symbols-outlined text-[16px]">edit_note</span>
<span>Editor Form</span>
</button>
<button className="px-space-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md transition-all flex items-center gap-1.5" id="view-mode-success" onclick="filterView('success')">
<span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
<span>Extraction Dossier</span>
</button>
</div>
</div>
{/* Primary Workspace Layout */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
{/* LEFT: Meeting Capture & Structuring Form (xl: 7 Cols) */}
<section className="xl:col-span-7 flex flex-col gap-space-md" id="editor-section">
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg relative overflow-hidden">
{/* Section Header */}
<div className="flex items-center justify-between pb-space-md mb-space-md border-b-0">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">fact_check</span>
</div>
<div>
<span className="font-headline-sm text-headline-sm text-on-surface block">Meeting Metadata & Raw Debrief</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">SOURCE: INTERNAL DEBRIEF · CONFIDENTIAL</span>
</div>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-high rounded-full">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Ready for Sync</span>
</div>
</div>
<form className="flex flex-col gap-space-md" onsubmit="event.preventDefault(); triggerSimulation();">
{/* Meeting Title */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface font-medium flex items-center justify-between">
<span>Meeting Title</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Auto-generated from calendar invite</span>
</label>
<input className="w-full bg-surface-container-low px-space-md py-2.5 rounded-lg text-on-surface font-headline-sm text-headline-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all" type="text" value="Acme Corp — Post-Launch Feedback & Q3 Renewal"/>
</div>
{/* Metadata Triad (Company, Date/Time, Tier) */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
{/* Company Selection */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface">Client Organization</label>
<div className="flex items-center gap-2 bg-surface-container-low px-3 py-2 rounded-lg">
<span className="material-symbols-outlined text-primary text-[18px]">business</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Acme Corp</span>
<span className="ml-auto font-label-sm text-[10px] bg-secondary-fixed text-on-secondary-fixed-variant px-1.5 py-0.5 rounded font-mono uppercase tracking-wider">Tier 1</span>
</div>
</div>
{/* Date & Time */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface">Timestamp</label>
<div className="flex items-center gap-2 bg-surface-container-low px-3 py-2 rounded-lg text-on-surface">
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">event</span>
<span className="font-body-sm text-body-sm">Today, May 18 · 10:30 AM</span>
</div>
</div>
{/* Context Classification */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface">Session Intent</label>
<div className="flex items-center gap-2 bg-surface-container-low px-3 py-2 rounded-lg text-on-surface">
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">handshake</span>
<span className="font-body-sm text-body-sm truncate">Contract & Renewal</span>
</div>
</div>
</div>
{/* Participants with Avatars */}
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface">Attending Stakeholders (3)</label>
<span className="font-label-sm text-primary cursor-pointer hover:underline">+ Link Contact</span>
</div>
<div className="flex flex-wrap gap-2 p-2 bg-surface-container-low rounded-lg">
{/* Attendee 1 */}
<div className="flex items-center gap-2 bg-surface-container-lowest px-2.5 py-1.5 rounded-lg shadow-sm">
<img className="w-6 h-6 rounded-full object-cover" data-alt="Corporate headshot of executive woman Sarah Williams, natural bright studio lighting with cool slate background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAes9vXGax06uVe7GV-zeoNxNPu5xgBlLXmDI-ktVSN9j7E_7y8A5WZ1nEMnCikHIX2o11g1jrVchgDAQokmpbHUNdMuMF1zTqBnP5HHtOY4t03BdSHp9gKbvKPflRFfxutpugxsuBTREzf_cLlFZ03atyALVe2JprmCLT5BoPX683Cci93-ihFwBhJ7pNHzi5YaB3MOKuCzetSbUp7s-duGElQpdZeYFJ7o9EmoiN05fFuZoUGpMpa"/>
<div className="flex flex-col leading-none">
<span className="font-label-md text-[12px] text-on-surface font-semibold">Sarah Williams</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">VP Product · Acme</span>
</div>
<span className="w-2 h-2 rounded-full bg-tertiary-container ml-1" title="Confirmed Present"></span>
</div>
{/* Attendee 2 */}
<div className="flex items-center gap-2 bg-surface-container-lowest px-2.5 py-1.5 rounded-lg shadow-sm">
<img className="w-6 h-6 rounded-full object-cover" data-alt="Headshot of tech director David Chen wearing dark navy turtleneck in modern architectural tech office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_iiw2tCjjFAFDqj-UUqjN9MD76fW8jwYD8HgNX2m2OZG5e8XahQCPLwIs4CeE_VG5kTyQo-eKWHvCCRR8UlaaKmOFFdzH3myW-DpDQJ6t_HI5d2UKfamoONNpRWzkctyPlwEJA5Sl37bv8qgjyjuEr_8-PTxfYk3Nfwy8FTc4-S9YmE23X2g1iL0P0dEiT6qn0wOoY2_PWt5Fk3nzsgstp9209xW5lbEOacjzVcpjgEpdTOO0ARKy"/>
<div className="flex flex-col leading-none">
<span className="font-label-md text-[12px] text-on-surface font-semibold">David Chen</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">Head of Eng · Acme</span>
</div>
<span className="w-2 h-2 rounded-full bg-tertiary-container ml-1" title="Confirmed Present"></span>
</div>
{/* Attendee 3 (Internal) */}
<div className="flex items-center gap-2 bg-primary-fixed/50 px-2.5 py-1.5 rounded-lg">
<img className="w-6 h-6 rounded-full object-cover" data-alt="Professional modern portrait of Elena Rostova, senior partner, minimalist clean framing with soft ambient window light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn9vRhgUEyElyg_M3kmDbMQeyUuESyeFBQKRY0SLvifXAnnDHMrG2yjn9VkjV6Tyaa57-X-a4Cy8s8mMU0mqQzy46jX6xj03koify_GMlciLOLu-eh5ERyM6sXzgk5YjGTdZV8XM0PlBNEmP9y9bseSuLS4cKcEXU7DyVPpj4wOXlrdktKHKHsNFY8mXSwqNa1pitRna7C06_GxoBYOu9rb1VTTbIypUonwVBDfTL_DFFNn-LKXI5d"/>
<div className="flex flex-col leading-none">
<span className="font-label-md text-[12px] text-primary font-semibold">Elena Rostova</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">Senior Partner (Host)</span>
</div>
</div>
</div>
</div>
{/* Rich Notes Area with Semantic Highlighting Simulation */}
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface flex items-center gap-2">
<span>Meeting Debrief & Verbatim Transcript Excerpts</span>
<span className="bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant font-code-sm text-[11px]">Markdown Enabled</span>
</label>
<div className="flex items-center gap-2 text-on-surface-variant text-[13px]">
<span className="material-symbols-outlined text-[16px]">spellcheck</span>
<span className="font-code-sm text-[11px]">88 words</span>
</div>
</div>
<div className="relative bg-surface-container-low rounded-xl p-space-md focus-within:bg-surface-container-lowest focus-within:ring-2 focus-within:ring-primary-container transition-all">
<textarea className="w-full bg-transparent border-0 outline-none font-body-md text-body-md text-on-surface resize-none leading-relaxed" id="meeting-notes-input" placeholder="Paste call debrief, raw thoughts, or transcript snippets..." rows="8">Sarah joined on time. Expressed great satisfaction with the pilot stability over the past 2 weeks. Mentioned she hates long slide decks for renewals, prefers bulleted summaries in Notion or email.

David raised an engineering requirement: they require dedicated single-tenant VPC or SOC2 Type II compliance pack before enterprise rollout.

Commitments agreed upon:
1. Elena to send updated custom SLA contract draft by Thursday 5pm.
2. Sarah to introduce our security lead to their compliance officer next Tuesday.

Pricing: Sarah agreed to the $120k annual tier if SLA credit clause is included.</textarea>
{/* Floating Contextual Tooltip Overlay inside textarea simulating engine comprehension */}
<div className="mt-space-sm pt-space-sm flex flex-wrap items-center gap-2 text-on-surface-variant font-label-sm text-[11px] bg-surface-container/60 p-2 rounded-lg">
<span className="flex items-center gap-1 text-primary font-medium">
<span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                  Entities detected:
                </span>
<span className="bg-surface-container-lowest px-2 py-0.5 rounded text-on-surface shadow-xs">#Preference (Sarah)</span>
<span className="bg-surface-container-lowest px-2 py-0.5 rounded text-on-surface shadow-xs">#TechReq (VPC/SOC2)</span>
<span className="bg-surface-container-lowest px-2 py-0.5 rounded text-on-surface shadow-xs">#Commitment (Elena: May 22)</span>
<span className="bg-surface-container-lowest px-2 py-0.5 rounded text-on-surface shadow-xs">#DealTerm ($120k ARR)</span>
</div>
</div>
</div>
{/* Bottom Action Suite */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-sm">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px] text-tertiary">lock_reset</span>
<span className="font-body-sm text-[12px]">Indexed into encrypted Vector Store ID: <span className="font-code-sm text-on-surface">ACM-9082</span></span>
</div>
<div className="flex items-center gap-space-sm w-full sm:w-auto">
<button className="px-space-md py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md transition-all" type="button">
                Discard Draft
              </button>
<button className="w-full sm:w-auto px-space-lg py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group relative overflow-hidden" id="extract-trigger-btn" type="submit">
<span className="material-symbols-outlined text-[18px] transition-transform group-hover:rotate-12" style="font-variation-settings: 'FILL' 1;">auto_fix_high</span>
<span id="btn-text">Save & Extract Memory</span>
<div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
</button>
</div>
</div>
</form>
</div>
{/* Quick Tips Explainer Card */}
<div className="bg-surface-container-low rounded-xl p-space-md flex items-start gap-space-md">
<div className="w-9 h-9 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0">
<span className="material-symbols-outlined text-[20px]">psychology_alt</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-[14px] text-on-surface font-semibold">How Persistent Memory Extraction Works</span>
<p className="font-body-sm text-[13px] text-on-surface-variant mt-0.5">
            RecallMeet cross-references unstructured meeting notes against past conversations with Acme Corp. New commitments are dispatched to your schedule, while communication habits and commercial boundaries update Sarah Williams' living dossier.
          </p>
</div>
</div>
</section>
{/* RIGHT: Live Extracted Memories & Dossier Sync State (xl: 5 Cols) */}
<section className="xl:col-span-5 flex flex-col gap-space-md" id="success-section">
{/* Primary Success Announcement Banner */}
<div className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg relative overflow-hidden">
{/* Colored Intelligence Edge Accent */}
<div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-tertiary via-tertiary-container to-secondary-container"></div>
<div className="flex items-start gap-space-md">
<div className="w-10 h-10 rounded-xl bg-tertiary-container/15 flex items-center justify-center text-tertiary shrink-0">
<span className="material-symbols-outlined text-[24px]" style="font-variation-settings: 'FILL' 1;">arrow_back_ios_new</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-label-sm text-tertiary uppercase font-mono tracking-wider">Sync State: Complete</span>
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-on-surface-variant">Latency: 280ms</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight mt-0.5">
              4 Persistent Memories Extracted & Indexed
            </h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Parsed from debrief and cataloged into <span className="text-on-surface font-semibold">Acme Corp’s Master Dossier</span>. Ready for future call briefings.
            </p>
</div>
</div>
{/* Extraction Health Mini-Metric Bar */}
<div className="grid grid-cols-3 gap-2 mt-space-md p-space-sm bg-surface-container-low rounded-lg text-center">
<div className="flex flex-col">
<span className="font-headline-md text-[18px] text-tertiary font-bold">98.2%</span>
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase">Confidence</span>
</div>
<div className="flex flex-col">
<span className="font-headline-md text-[18px] text-primary-container font-bold">2 Items</span>
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase">Commitments</span>
</div>
<div className="flex flex-col">
<span className="font-headline-md text-[18px] text-secondary font-bold">1 Client Cue</span>
<span className="font-label-sm text-[10px] text-on-surface-variant uppercase">Behavioral</span>
</div>
</div>
{/* Extracted Memory Cards Stack */}
<div className="flex flex-col gap-space-sm mt-space-md">
{/* Memory 1: Behavioral Preference */}
<div className="bg-surface-container-low/70 hover:bg-surface-container-low p-space-md rounded-xl transition-all group">
<div className="flex items-center justify-between mb-1.5">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-sm text-[11px] text-secondary uppercase font-semibold">Preference Detected</span>
</div>
<span className="font-label-sm text-[10px] bg-secondary-fixed text-on-secondary-fixed-variant px-2 py-0.5 rounded-full font-mono">Confidence: 98%</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-medium leading-snug">
              “Sarah Williams prefers concise bulleted summaries via email/Notion over slide decks.”
            </p>
<div className="flex items-center justify-between mt-space-sm pt-space-xs text-on-surface-variant font-label-sm text-[11px]">
<span className="flex items-center gap-1 text-on-surface font-medium">
<img className="w-4 h-4 rounded-full object-cover" data-alt="Profile icon of Sarah Williams VP Product" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIRN8PLVPd-tqqHgIYtoYFobTHpf9lscYvukdMDi16aloIeNrZQPsyCKt9QlALRoIifV3p8fQYQcPcymFCw3sNQX6Z43eoVpLp3bYjCzjwKkvN8iEqkrsxk1eDb7VT5B6fZY4ekdGwqBZkhM22d1ON6C4s_gYEmCxSrewf6Tz1QaKZp6f20D4IVPQZkHsLprw9Gn2YwhExIUrsUMh4Vo9CRyYAN7dJIPfvbvi5AAEaGCUlk3-FDXye"/>
                Sarah Williams · VP Product
              </span>
<span className="text-tertiary flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">history_edu</span>
                Pinned to Dossier
              </span>
</div>
</div>
{/* Memory 2: Key Commercial Decision */}
<div className="bg-surface-container-low/70 hover:bg-surface-container-low p-space-md rounded-xl transition-all">
<div className="flex items-center justify-between mb-1.5">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<span className="font-label-sm text-[11px] text-primary-container uppercase font-semibold">Decision Recorded</span>
</div>
<span className="font-label-sm text-[10px] bg-surface-container-high text-on-surface px-2 py-0.5 rounded-full font-mono">Confidence: 95%</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-medium leading-snug">
              “Accepted $120k annual enterprise tier conditioned on SLA credit clause.”
            </p>
<div className="flex items-center justify-between mt-space-sm pt-space-xs text-on-surface-variant font-label-sm text-[11px]">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">price_check</span>
                Deal Impact: High · ARR Stage 4
              </span>
<span className="bg-surface-container-highest px-2 py-0.5 rounded text-on-surface font-mono text-[10px]">#PricingRenewal</span>
</div>
</div>
{/* Memory 3: Internal Commitment (Elena) */}
<div className="bg-surface-container-low/70 hover:bg-surface-container-low p-space-md rounded-xl transition-all">
<div className="flex items-center justify-between mb-1.5">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-[11px] text-tertiary uppercase font-semibold">Commitment (Internal)</span>
</div>
<span className="font-label-sm text-[10px] bg-error-container text-on-error-container px-2 py-0.5 rounded font-mono font-medium">Due: Thu 5:00 PM</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-medium leading-snug">
              “Elena to send updated custom SLA contract draft by Thursday 5:00 PM.”
            </p>
<div className="flex items-center justify-between mt-space-sm pt-space-xs text-on-surface-variant font-label-sm text-[11px]">
<span className="flex items-center gap-1.5 text-on-surface font-medium">
<span className="w-4 h-4 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-[9px] font-bold">ER</span>
                Assignee: Elena Rostova
              </span>
<span className="text-primary font-medium flex items-center gap-1 cursor-pointer hover:underline">
<span className="material-symbols-outlined text-[13px]">alarm_add</span>
                Synced to Tasks
              </span>
</div>
</div>
{/* Memory 4: External Commitment (Sarah) */}
<div className="bg-surface-container-low/70 hover:bg-surface-container-low p-space-md rounded-xl transition-all">
<div className="flex items-center justify-between mb-1.5">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
<span className="font-label-sm text-[11px] text-secondary-container uppercase font-semibold">Commitment (Client Side)</span>
</div>
<span className="font-label-sm text-[10px] bg-surface-container-high text-on-surface px-2 py-0.5 rounded font-mono">Due: Next Tuesday</span>
</div>
<p className="font-body-md text-body-md text-on-surface font-medium leading-snug">
              “Sarah to introduce security lead to compliance officer next Tuesday.”
            </p>
<div className="flex items-center justify-between mt-space-sm pt-space-xs text-on-surface-variant font-label-sm text-[11px]">
<span className="flex items-center gap-1.5 text-on-surface font-medium">
<span className="w-4 h-4 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center text-[9px] font-bold">SW</span>
                Assignee: Sarah Williams
              </span>
<span className="text-on-surface-variant text-[10px] uppercase font-mono">Follow-up trigger armed</span>
</div>
</div>
</div>
{/* Post-Extraction Action Tray */}
<div className="flex flex-col gap-2.5 mt-space-lg pt-space-md border-t-0">
<button className="w-full bg-primary-container hover:bg-primary text-on-primary py-2.5 px-space-md rounded-lg font-label-md flex items-center justify-center gap-2 shadow-sm transition-all">
<span className="material-symbols-outlined text-[18px]">folder_shared</span>
<span>View Acme Corp Memory Dossier</span>
</button>
<div className="grid grid-cols-2 gap-2">
<button className="bg-surface-container hover:bg-surface-container-high text-on-surface py-2 px-space-sm rounded-lg font-label-md text-center transition-all flex items-center justify-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">edit</span>
<span>Edit Memories</span>
</button>
<button className="bg-surface-container hover:bg-surface-container-high text-on-surface py-2 px-space-sm rounded-lg font-label-md text-center transition-all flex items-center justify-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">schedule_send</span>
<span>Prep Next Call</span>
</button>
</div>
</div>
</div>
{/* Dossier Historical Sync Graphic Card */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md">
<div className="flex items-center justify-between mb-3">
<span className="font-headline-sm text-[14px] text-on-surface font-semibold">Acme Corp Longitudinal Graph</span>
<span className="font-code-sm text-[11px] text-primary">14 Meetings Logged</span>
</div>
{/* Inline Mini SVG Progress / Relationship Evolution Sparkline */}
<div className="w-full h-16 bg-surface-container-low rounded-lg p-2 flex items-center justify-between">
<svg className="w-full h-full overflow-visible" fill="none" preserveaspectratio="none" viewBox="0 0 320 40">
<path d="M 0,35 Q 40,25 80,28 T 160,18 T 240,12 T 320,6" fill="none" stroke="#4f46e5" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M 0,35 Q 40,25 80,28 T 160,18 T 240,12 T 320,6 L 320,40 L 0,40 Z" fill="#4f46e5" fill-opacity="0.08"></path>
<circle cx="80" cy="28" fill="#4f46e5" r="3.5"></circle>
<circle cx="160" cy="18" fill="#4f46e5" r="3.5"></circle>
<circle cx="240" cy="12" fill="#4f46e5" r="3.5"></circle>
<circle cx="320" cy="6" fill="#006e4b" r="4.5" stroke="#ffffff" strokeWidth="1.5"></circle>
</svg>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-code-sm text-[10px] mt-2 px-1">
<span>Mar 12: Discovery</span>
<span>Apr 04: Tech Review</span>
<span>May 02: SLA Terms</span>
<span className="text-tertiary font-semibold">Today: Extracted</span>
</div>
</div>
</section>
</div>
</div>
</div></main>
    </>
  );
}