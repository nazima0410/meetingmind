import React, { useEffect } from 'react';

export default function Dashboard() {
  useEffect(() => {

  // Simple micro-interaction for commitment checkbox styling
  document.querySelectorAll('#commitments-list input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const parentLabel = e.target.nextElementSibling;
      const titleSpan = parentLabel.querySelector('span:first-child');
      if (e.target.checked) {
        titleSpan.classList.add('line-through', 'text-on-surface-variant');
      } else {
        titleSpan.classList.remove('line-through', 'text-on-surface-variant');
      }
    });
  });
  }, []);
  return (
    <>
<main className="relative pt-16 bg-surface"><div className="max-w-7xl mx-auto p-space-lg lg:p-space-xl"><div className="flex flex-col w-full gap-space-xl">
{/* Top Greeting & Real-time Synthesis Banner */}
<section className="flex flex-col md:flex-row md:items-center justify-between gap-space-lg bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm">
<span className="font-headline-xl text-headline-xl text-on-surface">Good morning, Elena</span>
<span className="text-2xl animate-bounce">👋</span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-surface-container text-tertiary font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-container mr-1.5"></span>
          AUTONOMOUS SYNC ACTIVE
        </span>
</div>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
        You have <span className="font-label-md text-on-surface font-semibold">3 meetings today</span>. RecallMeet has synthesized <span className="font-label-md text-primary font-semibold">14 memories</span> and flagged <span className="font-label-md text-tertiary-container font-semibold">4 commitments</span> to eliminate your blindspots before walking in.
      </p>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<button className="flex items-center gap-1.5 px-space-md py-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px] text-primary">psychology</span>
        Quick Memory Query
      </button>
<a className="flex items-center gap-1.5 px-space-md py-2.5 bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md rounded-lg transition-all shadow-sm shadow-primary/20" data-path="prepare" href="#">
<span className="material-symbols-outlined text-[18px]">bolt</span>
        Review Today's Briefings
      </a>
</div>
</section>
{/* Core Pipeline Architecture Story Strip */}
<section className="bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-low p-space-md rounded-xl shadow-sm">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
{/* Step 1 */}
<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container-lowest/80 backdrop-blur-sm shadow-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[22px]">calendar_today</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider">Step 01 • Ingestion</span>
<span className="font-headline-sm text-headline-sm text-on-surface truncate">42 Meetings Tracked</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Full audio & transcripts synced</span>
</div>
</div>
{/* Step 2 */}
<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container-lowest/80 backdrop-blur-sm shadow-sm">
<div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-[22px]">cognition</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider">Step 02 • Extraction</span>
<span className="font-headline-sm text-headline-sm text-on-surface truncate">186 Synthesized Memories</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Preferences, risks & promises</span>
</div>
</div>
{/* Step 3 */}
<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-surface-container-lowest/80 backdrop-blur-sm shadow-sm">
<div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary-container shrink-0">
<span className="material-symbols-outlined text-[22px]">fact_check</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider">Step 03 • Accuracy</span>
<span className="font-headline-sm text-headline-sm text-on-surface truncate">94% Recall Confidence</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Cross-verified stakeholder logs</span>
</div>
</div>
{/* Step 4 */}
<div className="flex items-center gap-space-md p-space-sm rounded-lg bg-primary-container text-on-primary shadow-sm">
<div className="w-10 h-10 rounded-lg bg-on-primary/10 flex items-center justify-center text-on-primary shrink-0">
<span className="material-symbols-outlined text-[22px]">verified</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-code-sm text-code-sm text-on-primary-container uppercase tracking-wider">Step 04 • Executive Ready</span>
<span className="font-headline-sm text-headline-sm text-on-primary truncate">Zero Blindspots</span>
<span className="font-body-sm text-body-sm text-on-primary-container truncate">Ready for 100% impact today</span>
</div>
</div>
</div>
</section>
{/* Today's Upcoming Meetings Dossier Grid */}
<section className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[24px]">schedule</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Today's Briefing Dossiers</h2>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-code-sm text-code-sm">3 SESSIONS</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Auto-assembled from previous interactions</span>
</div>
{/* Cards Container */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg items-stretch">
{/* High Priority Card: Acme Corp */}
<div className="lg:col-span-1 bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-container via-secondary to-primary"></div>
<div className="flex flex-col gap-space-md">
{/* Card Header & Badges */}
<div className="flex items-start justify-between gap-space-sm">
<div className="flex flex-wrap items-center gap-1.5">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold tracking-wide animate-pulse">
<span className="material-symbols-outlined text-[14px]">alarm</span>
                IN 45 MINS
              </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-low text-on-surface-variant font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[14px]">videocam</span>
                Zoom
              </span>
</div>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">verified</span>
              100% Prepared
            </span>
</div>
{/* Meeting Information */}
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-primary uppercase font-semibold tracking-wider">Acme Corp</span>
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
              Q3 Enterprise Expansion & Renewal
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">10:30 AM • 45 mins • High Stakes ($180k ARR)</p>
</div>
{/* Participants with Photos */}
<div className="flex flex-col gap-space-xs bg-surface-container-low p-space-sm rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Key Attendees</span>
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="flex -space-x-2 overflow-hidden">
<img className="inline-block h-8 w-8 rounded-full object-cover shadow-sm" data-alt="Close up professional portrait of Sarah Williams, executive woman with warm confident expression, dark blazer against neutral modern studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnioK5uWfqwP4CuaFCDOhNh8HaUedF0cncnEAR75AANfRya3IaHY0yAC7EFblSgh2MQr96nkaEI6ynmfHgNIX8giscq5l-JafHw9Xbmnf32pPCvaMmY2eRut0BdQrsZpS1fZxyOVM2l48YkJGLRiYWqsVl8OpSgoaM6-yQurBUxOKsrypz5XrMNZrq5GKfwcPeJC1T5YqUYvJFPLrWyGt69Wa2UDky3Ju5iNK8UmCl5YGWA4PEdjHj"/>
<img className="inline-block h-8 w-8 rounded-full object-cover shadow-sm" data-alt="Professional studio headshot portrait of David Chen, technical engineering director in clean navy polo, thoughtful composure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDahF1LFRJvID4Rlmd9ghELcoKc1czNuzXx-RiyYd1V7_yNSm9vHuApYerm0AIB2j0xQ6jkxPwv86UUXWsI4iPArCt89V_L8PXbUGh_mt9uqOlUe3SJuIU8SblmJ-vgrPzT5YCtdTn3Q96vfmfCLjaXYet2CztF4F0vX_SfBJiD7_OPGS0FPS90zROxKSN640Cz0iy61Js3DX-ZqeWiSN6YZN0wFL1X3WMi9DY1WOwSrG7mgF6vlAgp"/>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Sarah Williams & David Chen</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">VP Product • Head of Eng</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-code-sm text-code-sm">
                6 memories
              </span>
</div>
</div>
{/* Recalled Memory Pill Snapshot */}
<div className="p-space-sm rounded-lg bg-surface-container/60 flex items-start gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">lightbulb</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Critical Continuity Flag</span>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[12px] line-clamp-2">
                "Sarah indicated budget approval occurs in June; avoid deep price haggling until David signs off on SOC2 audit."
              </p>
</div>
</div>
</div>
<div className="mt-space-lg pt-space-sm flex items-center justify-between gap-space-sm">
<a className="w-full py-2.5 px-space-md bg-primary-container hover:bg-primary text-on-primary rounded-lg font-label-md text-label-md flex items-center justify-center gap-space-xs shadow-md transition-all" data-path="prepare" href="#">
<span className="material-symbols-outlined text-[18px]">bolt</span>
            Open Meeting Briefing
          </a>
</div>
</div>
{/* Card 2: Apex BioTech */}
<div className="lg:col-span-1 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
<div className="flex flex-col gap-space-md">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex flex-wrap items-center gap-1.5">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">schedule</span>
                2:00 PM
              </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-low text-on-surface-variant font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[14px]">videocam</span>
                Google Meet
              </span>
</div>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">pending_actions</span>
              2 Commitments Pending
            </span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold tracking-wider">Apex BioTech</span>
<h3 className="font-headline-md text-headline-md text-on-surface">
              Security & Compliance Review
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">2:00 PM • 30 mins • Technical Discovery</p>
</div>
<div className="flex flex-col gap-space-xs bg-surface-container-low p-space-sm rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Key Attendee</span>
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<img className="h-8 w-8 rounded-full object-cover shadow-sm" data-alt="Profile headshot of Dr. Marcus Vance, senior scientist executive with silver hair wearing refined optical glasses in a sharp modern boardroom setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWqRo6t25tZFySnxzX1EvhBx7U4vWP2NZd3PE56sTIN_-hFPpyK2xRW_muK5yJulmVbH1MXxzdup8mQuKPuBqiSE6uv4P8eEJJh4dF_Zwud2DjWeZw1ZQY5AmJWIyZ8rsHzEhkV1YGSRvTGwEJCd6VNA_5y4UYJY7DSgtHvr6m4_7f9ocgQPhQLg4v2zVsus_IFDpvvnPm8EMZP40Qv0exFcHhjqIQpx_gfGLq4ITTq23VAmbq7ssU"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Dr. Marcus Vance</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Chief Information Security Officer</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-code-sm text-code-sm">
                4 memories
              </span>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container/60 flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">warning</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Unresolved Question</span>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[12px] line-clamp-2">
                You committed to delivering their SOC2 Type II penetration test report before today's review session.
              </p>
</div>
</div>
</div>
<div className="mt-space-lg pt-space-sm flex items-center justify-between gap-space-sm">
<a className="w-full py-2.5 px-space-md bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-md text-label-md flex items-center justify-center gap-space-xs transition-colors" data-path="prepare" href="#">
<span className="material-symbols-outlined text-[18px]">edit_note</span>
            Review Preparation
          </a>
</div>
</div>
{/* Card 3: Vanguard Logistics */}
<div className="lg:col-span-1 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
<div className="flex flex-col gap-space-md">
<div className="flex items-start justify-between gap-space-sm">
<div className="flex flex-wrap items-center gap-1.5">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">schedule</span>
                4:30 PM
              </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-low text-on-surface-variant font-code-sm text-code-sm">
<span className="material-symbols-outlined text-[14px]">phone_in_talk</span>
                Phone Bridge
              </span>
</div>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">person_add</span>
              New Stakeholder
            </span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold tracking-wider">Vanguard Logistics</span>
<h3 className="font-headline-md text-headline-md text-on-surface">
              Discovery & Needs Assessment
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">4:30 PM • 45 mins • Inbound Pipeline</p>
</div>
<div className="flex flex-col gap-space-xs bg-surface-container-low p-space-sm rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Key Attendee</span>
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<img className="h-8 w-8 rounded-full object-cover shadow-sm" data-alt="Portrait photo of Priya Sharma, logistics operations leader with energetic confident stance in an architectural minimalist glass office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgnNIO2fKR2wgM1KE5-AQDtG3PCaA1SByY32TWcwaaZZo5K6_8ulx7jy_JD1hD7rpm51Q8oSkDH0FcOk_tTpQE-s3w9A1OeE3LA6Io8E4IAvWcMYGsqNB9PTF5buhrYfgPWDg-d6mHxSl1Qf6yA88qhMjaHOnJ4r_KJUL50lWCzTBvGGMudOPqGOMSJ0ALRsHRyxq9_2ftpd5MYASs5fOjzsrz_O0uzRfu5ydZOKcR2MYTuryBOf8W"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Priya Sharma</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">VP Global Supply Chain</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-code-sm text-code-sm">
                1 note
              </span>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container/60 flex items-start gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">history_edu</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Pre-call Context</span>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[12px] line-clamp-2">
                Referred by Mark Sanders. Priya specifically asked about legacy ERP API integrations via webhook.
              </p>
</div>
</div>
</div>
<div className="mt-space-lg pt-space-sm flex items-center justify-between gap-space-sm">
<a className="w-full py-2.5 px-space-md bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-md text-label-md flex items-center justify-center gap-space-xs transition-colors" data-path="prepare" href="#">
<span className="material-symbols-outlined text-[18px]">quick_reference</span>
            Prepare Dossier
          </a>
</div>
</div>
</div>
</section>
{/* Lower Section: Action Commitments Checklist & Real-time Memory Feed */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
{/* Left Column: Pending Commitments & Commitments Tracker (7 cols) */}
<div className="lg:col-span-7 flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[22px]">checklist</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Unfulfilled Commitments</h2>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Extracted across past 14 days</span>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
{/* Interactive Action Items */}
<div className="flex flex-col gap-space-sm" id="commitments-list">
{/* Commitment Item 1 */}
<div className="flex items-start gap-space-md p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-all">
<input className="mt-1 h-4 w-4 rounded accent-primary cursor-pointer" id="task-1" type="checkbox"/>
<label className="flex flex-col flex-1 cursor-pointer" htmlFor="task-1">
<span className="font-body-md text-body-md font-semibold text-on-surface">
                Send revised API benchmark report to Sarah Williams (Acme)
              </span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Pledged during Acme Sprint Debrief • Crucial for today's 10:30 AM expansion call
              </span>
<div className="flex items-center gap-space-sm mt-space-xs">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
                  DUE TODAY (BEFORE CALL)
                </span>
<span className="font-code-sm text-code-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">link</span> Ref: Acme Sync May 12
                </span>
</div>
</label>
<img className="w-7 h-7 rounded-full object-cover shrink-0 mt-0.5" data-alt="Small thumbnail avatar of Sarah Williams VP Product" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKucFaxtsP7Z29k0IrIdxX6r4bVmLOX5olVFb4HF6z1eJxE7Od3QHnSi_3_iOsEQ3qCnvvvXD9dpApp7x4XKWsbf9f83Z3TxiQ4QBj10SIdLC-t6aXjyb9oCszeDkCNF8u-DNWId81-Hek0YUHgW1mGh06nSbVrnFbCfW2ekjpGNATrCLsvxx2sTLiptoyjMOgqqHHlEJ3w1qygF24niiD5_rv2NXdcmGpwGdlCWBpVI6pfg99cT-d"/>
</div>
{/* Commitment Item 2 */}
<div className="flex items-start gap-space-md p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-all">
<input className="mt-1 h-4 w-4 rounded accent-primary cursor-pointer" id="task-2" type="checkbox"/>
<label className="flex flex-col flex-1 cursor-pointer" htmlFor="task-2">
<span className="font-body-md text-body-md font-semibold text-on-surface">
                Confirm SOC2 Type II audit timeline with Marcus Vance (Apex)
              </span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Required for bio-data compliance stage pass • Coordination with Infosec team
              </span>
<div className="flex items-center gap-space-sm mt-space-xs">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">
                  DUE FRIDAY
                </span>
<span className="font-code-sm text-code-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">link</span> Ref: Apex Security Check
                </span>
</div>
</label>
<img className="w-7 h-7 rounded-full object-cover shrink-0 mt-0.5" data-alt="Small thumbnail avatar of Dr Marcus Vance CISO" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh05aKJBsh3eJQQoDspEQWQo2cLK_YfaHKcNrKfid-N9-_f9Hv7WPXAXn6D-Ufw7c1vkRf6LJZUwX2a6BZWk2P3s64_QXkMgUtXMZfRIqbAFBzED6AeJUhWPBu-kWiRigENRneyXio67YGcFwJ6VW12IAkyoxsA1KCMmTj4z3hJG8iIUusCE7f_2S01utn40fc7y52WsHHNSKUgBlJa4Tv-dZ2TViUgwK4TAgCFgg1TmAmSx-6LZeb"/>
</div>
{/* Commitment Item 3 (Completed) */}
<div className="flex items-start gap-space-md p-space-md rounded-lg bg-surface-container-low/50 opacity-75 hover:opacity-100 transition-all">
<input checked="" className="mt-1 h-4 w-4 rounded accent-tertiary-container cursor-pointer" id="task-3" type="checkbox"/>
<label className="flex flex-col flex-1 cursor-pointer" htmlFor="task-3">
<span className="font-body-md text-body-md font-semibold text-on-surface line-through text-on-surface-variant">
                Share pricing calculator sheet with David Chen
              </span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Delivered via Slack attachment on Tuesday morning
              </span>
<div className="flex items-center gap-space-sm mt-space-xs">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                  COMPLETED
                </span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Dispatched 9:15 AM yesterday</span>
</div>
</label>
<img className="w-7 h-7 rounded-full object-cover shrink-0 mt-0.5" data-alt="Small thumbnail avatar of David Chen Head of Eng" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBez1wtkN5wQkahAx97pLs2GNuwwFXuq1_ZqHAKO2AxEQyd24sevbCLTckk6v-5ZILFyW9uT-BT6HVu_dxPF5QxvdN8Hr2oPmysAbOSvoZE1lmt0axK0ZvfgczroijZFZ9-KOm7ecf1o1o2kcYt8PUl-vWJeI7GKVlmOZd8sxrHtd4WzMLfdifnjkzs2_15dg3Web5dGVOqJwvNN2Z-ugvSRcIIbeHtgLI5kV359_2PmmThD_9ZqRfB"/>
</div>
</div>
<div className="flex items-center justify-between pt-space-xs">
<span className="font-body-sm text-body-sm text-on-surface-variant">Showing 3 of 4 detected promises</span>
<button className="font-label-md text-label-md text-primary hover:underline flex items-center gap-1">
            View All Past Commitments
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
{/* Quick Executive Memory Metric Card with SVG Visualizer */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-lg">
<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">Recall Reliability Pulse</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Continuous Memory Retention Index</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
            Tracking participant alignment and reducing repetitive re-introductions across quarters.
          </p>
</div>
{/* Inline SVG Visualization (Under 2KB) */}
<div className="flex items-center gap-space-md shrink-0">
<div className="flex flex-col items-center">
<svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="94, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<span className="-mt-14 font-headline-md text-headline-md text-on-surface font-bold">94%</span>
<span className="mt-4 font-label-sm text-label-sm text-on-surface-variant">ACCURACY</span>
</div>
<div className="flex flex-col gap-1 border-l-0">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
<span className="font-code-sm text-code-sm text-on-surface">Verified context</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-surface-container-high"></span>
<span className="font-code-sm text-code-sm text-on-surface-variant">Heuristic flags</span>
</div>
<span className="font-body-sm text-body-sm text-tertiary-container font-semibold mt-1">↑ +6.2% vs last month</span>
</div>
</div>
</div>
</div>
{/* Right Column: Memory Bank Activity & Live Feed (5 cols) */}
<div className="lg:col-span-5 flex flex-col gap-space-md">
{/* 3 Stat Tiles */}
<div className="grid grid-cols-3 gap-space-sm">
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Memories</span>
<span className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">186</span>
<span className="font-code-sm text-code-sm text-tertiary-container mt-1">↑ 18 new</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Companies</span>
<span className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">14</span>
<span className="font-code-sm text-code-sm text-on-surface-variant mt-1">Active sync</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Dossiers</span>
<span className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1">32</span>
<span className="font-code-sm text-code-sm text-primary mt-1">Key leaders</span>
</div>
</div>
{/* Real-time Synthesis Feed */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[22px]">hub</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Recent Memories Extracted</h3>
</div>
<span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
</div>
<div className="flex flex-col gap-space-md">
{/* Feed Item 1: Preference */}
<div className="flex flex-col gap-space-xs p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold">
<span className="material-symbols-outlined text-[16px]">tune</span>
                STAKEHOLDER PREFERENCE
              </span>
<span className="font-code-sm text-code-sm text-on-surface-variant">May 14 • Acme Sync</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface">
              "Sarah Williams strongly prefers asynchronous Loom walkthroughs before any live pricing renegotiation calls."
            </p>
<div className="flex items-center gap-space-sm text-on-surface-variant pt-1">
<span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded">High Confidence (98%)</span>
<span className="font-body-sm text-body-sm text-[12px]">Impacts 10:30 AM Meeting</span>
</div>
</div>
{/* Feed Item 2: Decision */}
<div className="flex flex-col gap-space-xs p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary-container font-semibold">
<span className="material-symbols-outlined text-[16px]">verified</span>
                RECORDED DECISION
              </span>
<span className="font-code-sm text-code-sm text-on-surface-variant">May 10 • Apex Review</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface">
              "Apex BioTech executive board approved a 45-seat pilot tier pending final validation of HIPAA & SOC2 audits."
            </p>
<div className="flex items-center gap-space-sm text-on-surface-variant pt-1">
<span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded">Direct Quote</span>
<span className="font-body-sm text-body-sm text-[12px]">Impacts 2:00 PM Meeting</span>
</div>
</div>
{/* Feed Item 3: Commitment */}
<div className="flex flex-col gap-space-xs p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-semibold">
<span className="material-symbols-outlined text-[16px]">handshake</span>
                OWNER COMMITMENT
              </span>
<span className="font-code-sm text-code-sm text-on-surface-variant">May 08 • Acme Q2</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface">
              "Elena Rostova agreed to provide a custom 99.99% uptime enterprise SLA tier agreement addendum."
            </p>
<div className="flex items-center gap-space-sm text-on-surface-variant pt-1">
<span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded">Assigned to Elena</span>
<span className="font-body-sm text-body-sm text-[12px]">Pending document delivery</span>
</div>
</div>
</div>
<a className="w-full py-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-md text-label-md flex items-center justify-center gap-space-xs transition-colors mt-space-xs" data-path="memory-bank" href="#">
<span className="material-symbols-outlined text-[18px]">database</span>
          Explore Full Memory Bank
        </a>
</div>
</div>
</section>
</div>
</div></main>
    </>
  );
}