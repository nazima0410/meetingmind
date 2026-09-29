import React, { useEffect } from 'react';

export default function Prep() {
  useEffect(() => {

    // Handle Mark Reviewed state toggle
    const reviewedBtn = document.getElementById('markReviewedBtn');
    const reviewedLabel = document.getElementById('reviewedLabel');
    let isReviewed = false;

    if (reviewedBtn && reviewedLabel) {
      reviewedBtn.addEventListener('click', () => {
        isReviewed = !isReviewed;
        if (isReviewed) {
          reviewedBtn.classList.remove('bg-surface-container-high', 'text-on-surface');
          reviewedBtn.classList.add('bg-tertiary-fixed', 'text-on-tertiary-fixed');
          reviewedLabel.textContent = 'Briefing Reviewed ✓';
        } else {
          reviewedBtn.classList.remove('bg-tertiary-fixed', 'text-on-tertiary-fixed');
          reviewedBtn.classList.add('bg-surface-container-high', 'text-on-surface');
          reviewedLabel.textContent = 'Mark Reviewed';
        }
      });
    }

    // Modal Interaction
    const askRecallBtn = document.getElementById('askRecallBtn');
    const aiModal = document.getElementById('aiModal');
    const closeAiModal = document.getElementById('closeAiModal');
    const doneAiBtn = document.getElementById('doneAiBtn');
    const aiInput = document.getElementById('aiInput');
    const aiResponseText = document.getElementById('aiResponseText');
    const submitQueryBtn = document.getElementById('submitQueryBtn');

    function openModalWithQuery(query) {
      if (aiModal && aiInput) {
        aiInput.value = query || '';
        aiModal.classList.remove('hidden');
      }
    }

    window.promptRecall = function(text) {
      openModalWithQuery(text);
      if (aiResponseText) {
        aiResponseText.innerHTML = 'Synthesizing persistent memory regarding: "<strong>' + text + '</strong>"...<br/><br/>Found 3 historical references. In the April 28 deep-dive, David stated that European multi-region architecture is essential for their GDPR compliance roadmap.';
      }
    };

    if (askRecallBtn) {
      askRecallBtn.addEventListener('click', () => {
        openModalWithQuery('');
      });
    }

    if (closeAiModal) {
      closeAiModal.addEventListener('click', () => {
        aiModal.classList.add('hidden');
      });
    }

    if (doneAiBtn) {
      doneAiBtn.addEventListener('click', () => {
        aiModal.classList.add('hidden');
      });
    }

    if (submitQueryBtn && aiInput) {
      submitQueryBtn.addEventListener('click', () => {
        const val = aiInput.value.trim();
        if (val && aiResponseText) {
          aiResponseText.innerHTML = 'Searching across 6 transcripts for: "<em>' + val + '</em>"...<br/><br/>Sarah and David both agreed to complete the vendor risk questionnaire by end of week, pending SOC2 Type II confirmation.';
        }
      });
    }
  }, []);
  return (
    <>
<main className="relative pt-16 bg-surface"><div className="max-w-7xl mx-auto p-space-lg lg:p-space-xl"><div className="flex flex-col w-full">
{/* Intelligence Status Notification Top Bar */}
<div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary-container/10 via-surface-container-high to-surface-container p-space-md shadow-sm mb-space-lg">
<div className="relative z-10 flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary-container text-on-primary shadow-sm">
<span className="material-symbols-outlined text-[18px]">bolt</span>
</span>
<div className="flex flex-col sm:flex-row sm:items-center sm:gap-space-sm">
<span className="font-headline-sm text-headline-sm text-on-surface">Synthesis Complete</span>
<span className="hidden sm:inline text-outline-variant font-label-md">•</span>
<span className="font-label-md text-label-md text-primary font-semibold">6 historical interactions synthesized across 74 days</span>
</div>
</div>
<div className="flex items-center gap-space-xs bg-surface-container-lowest/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
<span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
<span className="font-code-sm text-code-sm text-on-surface font-medium">Confidence: 98.4%</span>
</div>
</div>
{/* Ambient Graphic Background Layer */}
<div className="absolute right-0 top-0 -mt-6 -mr-6 w-48 h-48 bg-primary-container/5 rounded-full blur-2xl pointer-events-none"></div>
</div>
{/* Executive Header & Quick Actions */}
<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-space-lg mb-space-xl">
<div className="flex flex-col gap-space-xs max-w-3xl">
<div className="flex flex-wrap items-center gap-space-sm mb-1">
<span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider">
          Enterprise Account
        </span>
<span className="flex items-center gap-1 font-label-md text-label-md text-error bg-error-container/40 px-2 py-0.5 rounded">
<span className="material-symbols-outlined text-[16px]">schedule</span>
          Starts in 38m (10:30 AM)
        </span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
        Acme Corp — Q3 Enterprise Expansion & Renewal Strategy
      </h1>
<div className="flex flex-wrap items-center gap-y-2 gap-x-space-md text-on-surface-variant font-body-sm text-body-sm mt-1">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
<span>Today, 10:30 AM – 11:15 AM (45 min)</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">video_camera_front</span>
<a className="text-primary hover:underline font-label-md" href="#">zoom.us/j/9482103984</a>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">group</span>
<span>4 Participants (2 Internal · 2 Acme)</span>
</div>
</div>
</div>
{/* Quick Actions Toolbar */}
<div className="flex flex-wrap items-center gap-space-sm shrink-0 self-start lg:self-center">
<button className="flex items-center gap-2 bg-primary-container hover:bg-primary text-on-primary px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95" id="askRecallBtn">
<span className="material-symbols-outlined text-[19px]">neurology</span>
<span className="font-label-md text-label-md font-semibold">Ask Recall AI</span>
</button>
<button className="flex items-center gap-1.5 bg-surface-container-lowest hover:bg-surface-container-low text-on-surface px-3.5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all">
<span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
<span className="font-label-md text-label-md">Export Briefing</span>
</button>
<button className="flex items-center gap-1.5 bg-surface-container-high hover:bg-surface-container-highest text-on-surface px-3.5 py-2.5 rounded-xl transition-all" id="markReviewedBtn">
<span className="material-symbols-outlined text-[18px] text-tertiary">check_circle</span>
<span className="font-label-md text-label-md" id="reviewedLabel">Mark Reviewed</span>
</button>
</div>
</div>
{/* "What Matters Most Today" Executive Alert Card */}
<div className="relative overflow-hidden rounded-2xl bg-surface-container-low p-space-lg shadow-sm mb-space-xl">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container"></div>
<div className="flex flex-col md:flex-row md:items-start gap-space-md">
<div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary-fixed text-primary">
<span className="material-symbols-outlined text-[26px]">psychology_alt</span>
</div>
<div className="flex flex-col gap-1.5 flex-1 min-w-0">
<div className="flex items-center justify-between flex-wrap gap-2">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">What Matters Most Today</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed-dim/40 text-on-secondary-fixed-variant font-label-sm text-label-sm uppercase font-semibold">Priority Directive</span>
</div>
<span className="font-code-sm text-code-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">history</span> Cross-referenced 3 hrs ago
          </span>
</div>
<p className="font-body-lg text-body-lg text-on-surface leading-relaxed mt-1">
          Sarah’s team experienced friction with last week’s <strong className="text-on-surface font-semibold">API latency spike</strong>, but David Chen confirmed the <strong className="text-on-surface font-semibold">enterprise pilot budget of $120k</strong> is officially unlocked if custom SLA is guaranteed. Sarah expects a concise 20-minute discussion, avoiding repetitive pitch decks.
        </p>
<div className="flex flex-wrap items-center gap-space-md pt-2 mt-1">
<span className="inline-flex items-center gap-1.5 font-label-md text-label-md text-tertiary">
<span className="material-symbols-outlined text-[16px]">verified</span>
            Contract Signature Target: July 15
          </span>
<span className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary">
<span className="material-symbols-outlined text-[16px]">speed</span>
            Key metric: 99.95% Availability SLA
          </span>
</div>
</div>
</div>
</div>
{/* Two-Column Deep Context Layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/* LEFT COLUMN (Approx 60%: 7 Cols Desktop) */}
<div className="lg:col-span-7 flex flex-col gap-space-xl">
{/* Section 1: Accumulated Memory Bank */}
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[22px]">database</span>
<h2 className="font-headline-md text-headline-md text-on-surface">What We Remember</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Accumulated Memory Bank</span>
</div>
<div className="flex flex-col gap-space-sm">
{/* Memory 1 */}
<div className="group relative rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow-md transition-all">
<div className="flex items-center justify-between gap-2 mb-2">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded-full">
<span className="material-symbols-outlined text-[14px]">psychology</span>
                Extracted from May 14 Sync
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Preference · Sarah Williams</span>
</div>
<p className="font-body-md text-body-md text-on-surface">
<strong className="font-semibold text-primary">Direct Communication Style:</strong> Sarah Williams prefers direct email communication and high-level summaries over lengthy spreadsheets. Does not respond well to unexpected feature tours.
            </p>
<div className="mt-3 pt-2 flex items-center justify-between text-on-surface-variant">
<span className="font-code-sm text-code-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">record_voice_over</span> Direct quote: "Keep the summary under 1 slide."
              </span>
<button className="font-label-sm text-label-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">View Transcript →</button>
</div>
</div>
{/* Memory 2 */}
<div className="group relative rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow-md transition-all">
<div className="flex items-center justify-between gap-2 mb-2">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded-full">
<span className="material-symbols-outlined text-[14px]">psychology</span>
                Extracted from April 28 Deep-Dive
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Decision · Security & Architecture</span>
</div>
<p className="font-body-md text-body-md text-on-surface">
<strong className="font-semibold text-primary">SSO Standardized:</strong> On April 28, Acme agreed to standardize on our enterprise SSO add-on with Okta integration. Bypassed custom SAML workflow requirements.
            </p>
<div className="mt-3 pt-2 flex items-center justify-between text-on-surface-variant">
<span className="font-code-sm text-code-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">task_alt</span> Confirmed by David Chen & InfoSec
              </span>
<button className="font-label-sm text-label-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">View Transcript →</button>
</div>
</div>
{/* Memory 3 */}
<div className="group relative rounded-xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow-md transition-all">
<div className="flex items-center justify-between gap-2 mb-2">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm font-semibold bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded-full">
<span className="material-symbols-outlined text-[14px]">psychology</span>
                Extracted from May 14 Sync
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Strategic Context · David Chen</span>
</div>
<p className="font-body-md text-body-md text-on-surface">
<strong className="font-semibold text-primary">Executive Pressure:</strong> David Chen is being evaluated on engineering velocity metrics this quarter; emphasize automated sync and reduced CI/CD maintenance cycles.
            </p>
<div className="mt-3 pt-2 flex items-center justify-between text-on-surface-variant">
<span className="font-code-sm text-code-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">trending_up</span> Driver: Q3 OKR #2 (DevOps Efficiency)
              </span>
<button className="font-label-sm text-label-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">View Transcript →</button>
</div>
</div>
</div>
</div>
{/* Section 2: Recommended Talking Points & Agenda */}
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[22px]">format_list_numbered</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Recommended Talking Points & Agenda</h2>
</div>
<span className="font-code-sm text-code-sm text-on-surface-variant">25 Min Core Allocation</span>
</div>
<div className="rounded-2xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-space-md">
{/* Item 1 */}
<div className="flex items-start gap-space-md">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-headline-sm text-headline-sm">
                1
              </div>
<div className="w-0.5 h-12 bg-surface-container-high my-1"></div>
</div>
<div className="flex flex-col gap-1 flex-1 pb-2">
<div className="flex items-center justify-between flex-wrap gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Address May 12 API Latency Resolution (5 min)</h3>
<span className="px-2 py-0.5 rounded bg-error-container/60 text-on-error-container font-label-sm text-label-sm">Shows Accountability</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
                Take immediate ownership before Sarah raises it. Walk through the Redis cache bottleneck fix deployed Saturday night and explain our new edge fallback architecture.
              </p>
<div className="mt-2 bg-surface-container-low p-2.5 rounded-lg text-on-surface-variant font-code-sm text-code-sm">
                Target Message: "P99 latency lowered to 34ms across all endpoints as of Sunday 04:00 UTC."
              </div>
</div>
</div>
{/* Item 2 */}
<div className="flex items-start gap-space-md">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-headline-sm text-headline-sm">
                2
              </div>
<div className="w-0.5 h-12 bg-surface-container-high my-1"></div>
</div>
<div className="flex flex-col gap-1 flex-1 pb-2">
<div className="flex items-center justify-between flex-wrap gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Present Custom 99.95% Enterprise SLA Guarantee (10 min)</h3>
<span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">David Chen Unblocker</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
                Review the customized legal rider drafted by legal. Points to cover: multi-zone redundancy, dedicated escalation engineer, and 15-minute response SLA.
              </p>
</div>
</div>
{/* Item 3 */}
<div className="flex items-start gap-space-md">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-headline-sm text-headline-sm">
                3
              </div>
</div>
<div className="flex flex-col gap-1 flex-1">
<div className="flex items-center justify-between flex-wrap gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Align on Q3 Contract Expansion Timeline (10 min)</h3>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">Commercial Close</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
                Firm up the signature pathway for the $120,000 ARR pilot expansion before their procurement blackout starting July 20.
              </p>
</div>
</div>
</div>
</div>
{/* Section 3: Suggested Proactive Questions */}
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary text-[22px]">contact_support</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Suggested Proactive Questions to Ask</h2>
</div>
<span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">Calculated Rapport</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="rounded-xl bg-surface-container-low p-space-md shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-label-md text-label-md text-primary font-semibold">For Sarah Williams (VP Product)</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic">
                “Sarah, last time you mentioned team onboarding was a bottleneck—did the automated Slack connector help alleviate that for the product org?”
              </p>
</div>
<div className="mt-4 flex items-center gap-1 font-code-sm text-code-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[15px]">lightbulb</span>
              Ties directly to April 14 onboarding sync
            </div>
</div>
<div className="rounded-xl bg-surface-container-low p-space-md shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-md text-label-md text-secondary font-semibold">For David Chen (Head of Eng)</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic">
                “David, how is the architecture review committee leaning regarding the dedicated VPC deployment vs. tenant isolation?”
              </p>
</div>
<div className="mt-4 flex items-center gap-1 font-code-sm text-code-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[15px]">lightbulb</span>
              Addresses security evaluation blockers
            </div>
</div>
</div>
</div>
</div>
{/* RIGHT COLUMN (Approx 40%: 5 Cols Desktop) */}
<div className="lg:col-span-5 flex flex-col gap-space-xl">
{/* Section: Open Commitments & Deliverables */}
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[22px]">checklist</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Commitment Tracker</h2>
</div>
<span className="font-code-sm text-code-sm text-on-surface-variant">2 Open · 1 Resolved</span>
</div>
<div className="rounded-2xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-space-sm">
{/* Commitment 1 */}
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed-dim/50 text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">pending_actions</span> Pending
              </span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Assigned: Elena (You)</span>
</div>
<div className="font-body-md text-body-md text-on-surface font-medium">
              Send updated custom SLA tier agreement to David
            </div>
<div className="flex items-center justify-between pt-1">
<span className="font-label-sm text-label-sm text-tertiary flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">attach_file</span> Ready to share (Draft prepared)
              </span>
<button className="font-label-sm text-label-sm text-primary hover:underline">Preview Rider</button>
</div>
</div>
{/* Commitment 2 */}
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-2 opacity-80">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">check</span> Completed
              </span>
<span className="font-code-sm text-code-sm text-on-surface-variant">May 10</span>
</div>
<div className="font-body-md text-body-md text-on-surface line-through">
              Shared security architecture diagram & SOC2 Type II report
            </div>
</div>
{/* Commitment 3 */}
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed-dim/50 text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">hourglass_empty</span> In Progress
              </span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Due Today</span>
</div>
<div className="font-body-md text-body-md text-on-surface font-medium">
              Confirm European AWS region availability (Frankfurt eu-central-1)
            </div>
<div className="font-code-sm text-code-sm text-on-surface-variant">
              Requires verbal signoff during architecture discussion.
            </div>
</div>
</div>
</div>
{/* Section: Relevant Stakeholders (Dossiers) */}
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[22px]">contacts</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Participant Dossiers</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">External</span>
</div>
<div className="flex flex-col gap-space-sm">
{/* Person 1: Sarah Williams */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<img className="w-12 h-12 rounded-full object-cover shadow-sm" data-alt="Professional studio headshot portrait of Sarah Williams, VP Product at a tech company, confident professional expression, modern natural soft lighting, neutral background with subtle corporate office blur, dressed in tailored blazer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcMVX7gdZxINq10uxlJvgIAnlID5VzDj1uxzSCwm8gecwCCJNJNvQPhalURtd_YVcIYCATrJNGSeva8TDmzug5Lc5IPWhscYoWBiGkNdEJzRadza7nDqjk5aiSIAUMw4QaBMiqO814HdnUdr1z4HK-Zd7Iu8lLEcxxLRSpGEgbKb_Qd3TD_sSGAwDPdTpOTXZGf2iR0de5IV0dxf7uY27lGCB4SgLwOjOQ0XQ-gjLbHCByOBy6VYPL"/>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">Sarah Williams</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">VP of Product · Acme Corp</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
                Highly Positive
              </span>
</div>
<div className="grid grid-cols-2 gap-2 bg-surface-container-low p-2 rounded-lg text-on-surface">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">History</span>
<span className="font-headline-sm text-headline-sm font-semibold">5 meetings</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Talk/Listen</span>
<span className="font-headline-sm text-headline-sm font-semibold">68% / 32%</span>
</div>
</div>
<div className="flex items-start gap-1.5 font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-[16px] text-primary shrink-0 mt-0.5">tips_and_updates</span>
<span><strong className="font-medium">Key Trait:</strong> Highly metric-driven, abhors corporate fluff. Appreciates when you get straight to commercial realities and timeline specifics.</span>
</div>
</div>
{/* Person 2: David Chen */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<img className="w-12 h-12 rounded-full object-cover shadow-sm" data-alt="Headshot photo of David Chen, Head of Engineering, mid 30s, smart casual black crewneck shirt, glasses, calm and analytical posture in a bright modern tech engineering office setting with soft indigo backlighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5ERMMleyxz9ZDdRM6MAeuX6_0Gt3WcHV_tvcWlstt5iwzK_kHtUNY9uoTWG6nyVBscA3llvJg8_8DxB_bxjsFPRA__wj0EKdUVuEcK5riOlbiXmpnbPWy2JzEB-k4dbmZovXr6NoCIA04sgeKi22IqQEaABkion22OfKsDs9YNV-o8PceDbQbz81HEoGjznDiFyV4H5uA3dUbS9IGZhQ90YQkSyisQAct06a_attHlgAZSPn_G_u-"/>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm text-on-surface">David Chen</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Head of Engineering · Acme Corp</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                Analytical
              </span>
</div>
<div className="grid grid-cols-2 gap-2 bg-surface-container-low p-2 rounded-lg text-on-surface">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">History</span>
<span className="font-headline-sm text-headline-sm font-semibold">3 meetings</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Key Focus</span>
<span className="font-headline-sm text-headline-sm font-semibold">Uptime & Latency</span>
</div>
</div>
<div className="flex items-start gap-1.5 font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-[16px] text-secondary shrink-0 mt-0.5">verified_user</span>
<span><strong className="font-medium">Key Trait:</strong> Rigorous technical evaluator. Concerned strictly with architectural resilience and SLA payout clauses.</span>
</div>
</div>
</div>
</div>
{/* Section: Previous Meeting Timeline (Context Chain) */}
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-outline text-[22px]">timeline</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Context Chain</h2>
</div>
<span className="font-code-sm text-code-sm text-on-surface-variant">Past 90 Days</span>
</div>
<div className="rounded-2xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-space-md">
{/* Timeline Entry 1 */}
<div className="relative pl-6">
<div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary-fixed"></div>
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface">Q2 Performance Review</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">May 14</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Reviewed API throughput growth and initial budget threshold approval.</p>
<div className="mt-1 flex items-center gap-2">
<span className="font-label-sm text-label-sm text-primary bg-primary-fixed px-2 py-0.5 rounded">3 memories synthesized</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">32 min audio</span>
</div>
</div>
</div>
{/* Timeline Entry 2 */}
<div className="relative pl-6">
<div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-secondary ring-4 ring-secondary-fixed"></div>
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface">Tech Architecture Deep-dive</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Apr 28</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">David Chen explored multi-region VPC and Okta SSO compatibility.</p>
<div className="mt-1 flex items-center gap-2">
<span className="font-label-sm text-label-sm text-secondary bg-secondary-fixed px-2 py-0.5 rounded">4 memories synthesized</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">54 min audio</span>
</div>
</div>
</div>
{/* Timeline Entry 3 */}
<div className="relative pl-6">
<div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-outline ring-4 ring-surface-container-high"></div>
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-on-surface">Enterprise Pilot Kickoff</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Mar 15</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Scope established for 40-seat pilot test across core product teams.</p>
<div className="mt-1 flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">5 memories synthesized</span>
<span className="font-code-sm text-code-sm text-on-surface-variant">45 min audio</span>
</div>
</div>
</div>
</div>
</div>
{/* Quick AI Prompt Suggestion Box */}
<div className="rounded-xl bg-surface-container-high/60 p-space-md shadow-sm">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-primary text-[20px]">smart_toy</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Instant AI Query Idea</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">
          Need a rapid recap before entering Zoom? Click to query Recall AI right now:
        </p>
<button className="w-full text-left bg-surface-container-lowest hover:bg-surface-container-low text-on-surface p-2.5 rounded-lg font-code-sm text-code-sm shadow-sm transition-all flex items-center justify-between group" onclick="promptRecall('Summarize all past concerns raised by David Chen regarding uptime SLAs')">
<span className="truncate">"Summarize all past concerns David had on uptime"</span>
<span className="material-symbols-outlined text-[16px] text-primary group-hover:translate-x-0.5 transition-transform">send</span>
</button>
</div>
</div>
</div>
{/* Interactive Modal / Slide-over Dialog for Recall AI queries */}
<div className="fixed inset-0 z-50 flex items-center justify-center bg-on-background/40 backdrop-blur-sm hidden" id="aiModal">
<div className="bg-surface-container-lowest w-full max-w-xl mx-4 rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
<div className="flex items-center justify-between p-space-md bg-surface-container-low">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">neurology</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Recall AI Query</h3>
<p className="font-code-sm text-code-sm text-on-surface-variant">Context: Acme Corp (6 Interactions)</p>
</div>
</div>
<button className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors" id="closeAiModal">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<div className="p-space-lg flex flex-col gap-space-md">
<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Ask any memory question</label>
<div className="flex items-center bg-surface-container px-3 py-2 rounded-xl">
<input className="w-full bg-transparent border-none outline-none font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant" id="aiInput" placeholder="e.g. What were the specific terms discussed on May 14?" type="text"/>
<button className="bg-primary-container text-on-primary p-1.5 rounded-lg hover:bg-primary transition-colors" id="submitQueryBtn">
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
{/* Simulated Response Box */}
<div className="rounded-xl bg-surface-container-low p-space-md flex flex-col gap-2" id="aiResultBox">
<div className="flex items-center gap-1.5 text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">verified</span> Memory Synthesizer Result:
          </div>
<p className="font-body-sm text-body-sm text-on-surface leading-relaxed" id="aiResponseText">
            During the May 14 call, David Chen explicitly noted: <em>"If we have a confirmed 99.95% uptime SLA guarantee in our hands, my engineering sign-off is immediate, unlocking the Q3 allocation."</em>
</p>
<div className="text-on-surface-variant font-code-sm text-code-sm pt-2 flex items-center gap-2">
<span>Source: Audio transcript @ 18m:22s</span>
<span>•</span>
<span className="text-tertiary">Verified verbatim</span>
</div>
</div>
</div>
<div className="p-space-md bg-surface-container-low flex justify-end">
<button className="px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors" id="doneAiBtn">
          Insert into Talking Points
        </button>
</div>
</div>
</div>
{/* Client-side Interactive Logic */}

</div></div></main>
    </>
  );
}