import React, { useEffect } from 'react';

export default function Meetings() {
  useEffect(() => {

  (function() {
    const searchInput = document.getElementById('meeting-search-input');
    const clearBtn = document.getElementById('clear-search');
    
    if (searchInput && clearBtn) {
      searchInput.addEventListener('input', function(e) {
        if (e.target.value.length > 0) {
          clearBtn.classList.remove('hidden');
        } else {
          clearBtn.classList.add('hidden');
        }
      });
      
      clearBtn.addEventListener('click', function() {
        searchInput.value = '';
        clearBtn.classList.add('hidden');
        searchInput.focus();
      });
    }
  })();
  }, []);
  return (
    <>
<main className="relative pt-16 bg-surface"><div className="max-w-7xl mx-auto p-space-lg lg:p-space-xl"><div className="flex flex-col w-full gap-space-lg">
{/* Header Banner & Action Center */}
<section className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="font-display-lg text-headline-xl text-on-surface tracking-tight">All Meetings</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-code-sm text-code-sm">
          43 Synchronized
        </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
        Track past discussions, view extracted memories, and orchestrate deep intelligence prep for upcoming strategic interactions.
      </p>
</div>
{/* Quick Action / Add Notes Button */}
<div className="flex items-center gap-space-sm self-start md:self-auto shrink-0">
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md shadow-sm transition-all hover:scale-[1.01] active:scale-[0.99]" data-path="add-notes" href="#">
<span className="material-symbols-outlined text-[18px]">add_notes</span>
<span>+ Log New Meeting Notes</span>
</a>
</div>
</section>
{/* Filter & Intelligent Search Surface */}
<section className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">
{/* Real-time Omnisearch */}
<div className="flex-1 relative min-w-[280px]">
<div className="flex items-center w-full bg-surface-container-low px-3 py-2 rounded-lg">
<span className="material-symbols-outlined text-on-surface-variant text-[20px] mr-2">search</span>
<input className="w-full bg-transparent border-none outline-none font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant" id="meeting-search-input" placeholder="Search by company, title, or participant..." type="text"/>
<button className="hidden text-on-surface-variant hover:text-on-surface p-0.5" id="clear-search">
<span className="material-symbols-outlined text-[16px]">close</span>
</button>
</div>
</div>
{/* Selectable Criteria Filters */}
<div className="flex flex-wrap items-center gap-space-sm">
{/* Company Dropdown */}
<div className="relative">
<select className="appearance-none bg-surface-container-low text-on-surface font-label-md text-label-md pl-3 pr-8 py-2 rounded-lg cursor-pointer outline-none hover:bg-surface-container transition-colors">
<option value="all">Company: All Companies</option>
<option value="acme">Acme Corp</option>
<option value="apex">Apex BioTech</option>
<option value="vanguard">Vanguard Logistics</option>
<option value="horizon">Horizon Labs</option>
</select>
<span className="material-symbols-outlined pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px]">expand_more</span>
</div>
{/* Timeframe Dropdown */}
<div className="relative">
<select className="appearance-none bg-surface-container-low text-on-surface font-label-md text-label-md pl-3 pr-8 py-2 rounded-lg cursor-pointer outline-none hover:bg-surface-container transition-colors">
<option value="upcoming">Timeframe: Upcoming</option>
<option value="past-30">Past 30 Days</option>
<option value="all-time">All Time</option>
</select>
<span className="material-symbols-outlined pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px]">expand_more</span>
</div>
{/* Status Dropdown */}
<div className="relative">
<select className="appearance-none bg-surface-container-low text-on-surface font-label-md text-label-md pl-3 pr-8 py-2 rounded-lg cursor-pointer outline-none hover:bg-surface-container transition-colors">
<option value="all">Status: All Statuses</option>
<option value="prepared">Briefing Prepared</option>
<option value="needs-prep">Needs Prep</option>
<option value="completed">Completed</option>
<option value="extracted">Memory Extracted</option>
</select>
<span className="material-symbols-outlined pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px]">expand_more</span>
</div>
<button className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors flex items-center justify-center" title="Reset Filters">
<span className="material-symbols-outlined text-[18px]">restart_alt</span>
</button>
</div>
</section>
{/* Segmented Tabs Navigation & Metric Counters */}
<section className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="inline-flex p-1 bg-surface-container-low rounded-xl gap-1">
<button className="px-4 py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md shadow-sm transition-all flex items-center gap-1.5">
<span>Upcoming</span>
<span className="px-1.5 py-0.2 bg-primary-fixed text-primary font-label-sm text-label-sm rounded-full">5</span>
</button>
<button className="px-4 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all flex items-center gap-1.5">
<span>Past Meetings</span>
<span className="px-1.5 py-0.2 bg-surface-container text-on-surface-variant font-label-sm text-label-sm rounded-full">38</span>
</button>
<button className="px-4 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span>
<span>Requires Review</span>
<span className="px-1.5 py-0.2 bg-error-container text-on-error-container font-label-sm text-label-sm rounded-full">2</span>
</button>
</div>
{/* Active View Selector */}
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="font-code-sm text-code-sm text-on-surface-variant">Sort: Earliest First</span>
<span className="material-symbols-outlined text-[18px]">swap_vert</span>
</div>
</section>
{/* Comprehensive Meeting Cards Mosaic / List Container */}
<section className="flex flex-col gap-space-md">
{/* Card 1: Acme Corp (Highlighted Imminent Meeting) */}
<article className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
<div className="flex items-start gap-space-md min-w-0">
{/* Company Logo Avatar */}
<div className="relative shrink-0">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary font-headline-sm text-headline-sm overflow-hidden shadow-inner">
<span className="font-bold tracking-tight">AC</span>
</div>
<span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary text-[10px] font-bold">✓</span>
</div>
{/* Details */}
<div className="flex flex-col gap-1 min-w-0">
<div className="flex flex-wrap items-center gap-2">
<h3 className="font-headline-md text-headline-md text-on-surface truncate">
              Acme Corp — Q3 Enterprise Expansion
            </h3>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">bolt</span>
              Briefing Ready (6 memories synthesized)
            </span>
</div>
{/* Schedule & Time Badge */}
<div className="flex flex-wrap items-center gap-space-md font-body-sm text-body-sm text-on-surface-variant">
<div className="flex items-center gap-1 text-primary font-medium">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span>Today, 10:30 AM <strong className="ml-1 px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-code-sm text-code-sm font-normal">In 40m</strong></span>
</div>
<span className="text-outline-variant">•</span>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">corporate_fare</span>
<span>Acme Corp</span>
</div>
<span className="text-outline-variant">•</span>
{/* Attendees Avatars & List */}
<div className="flex items-center gap-1.5">
<div className="flex -space-x-1.5 overflow-hidden">
<img className="inline-block h-6 w-6 rounded-full object-cover shadow-xs" data-alt="Corporate headshot of Sarah Williams, Senior VP of Growth, professional studio lighting, neutral minimalist background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiMo-rOGRC1zwqo1-jh1Wh7ls_SislVgnV8DuDsnWj9AbcFNDLPvOPoYdbxp3L_Ip74t648O-4HS8XrKYFKLDhgF6XgmJIsKXdU0WRGr23LfHyd5Ld6JQZGQ5Te4HlTvTItSY4W0cMlXXb8eDsKc5-Auvey7behenCgKjqRj1QDuPaH47vOwuaeuj5z7gbrjQpsfTZFYw2pS1sOxLlGJukhApg4zi-aX2bITaywu-fyzJB1qFxNVvK"/>
<img className="inline-block h-6 w-6 rounded-full object-cover shadow-xs" data-alt="Portrait of David Chen, Enterprise Solutions Director, clean rim lighting, slate navy tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBFK73bDEaUSlFJ36NBYrN3X2iNX0w-XWCTrK5n-mTWgKnHzaRdB2Ybx3C8yYInzu-mRQjc3MlGhNSxZ5ICmQOxznrXND7V7WE4qwl1xJFyLVPfKEQ_DXmSIKjIQhrspUtig9-TufPlkhX27Fm6eFQkZ3ec9YzfYt30jtK08lfp6wF6ycmPHEFxdaUndMbIkQOrfS7lBkW7XXXyklnqVtzyqE5Wcc0-HIK0YkfpHq094sPXzTX9cUq"/>
<div className="h-6 w-6 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex items-center justify-center">ER</div>
</div>
<span className="truncate">Sarah Williams, David Chen, Elena Rostova</span>
</div>
</div>
</div>
</div>
{/* Action Panel */}
<div className="flex flex-wrap items-center gap-space-sm shrink-0 lg:self-center">
<a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md shadow-sm transition-all" data-path="prepare" href="#">
<span className="material-symbols-outlined text-[18px]">auto_read_pause</span>
<span>Prepare Briefing</span>
</a>
<a className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors" data-path="meetings" href="#">
<span>View Details</span>
</a>
<a className="inline-flex items-center p-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-path="add-notes" href="#" title="Add Quick Notes">
<span className="material-symbols-outlined text-[18px]">edit_note</span>
</a>
</div>
</article>
{/* Card 2: Apex BioTech (Amber Attention Required) */}
<article className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary-container"></div>
<div className="flex items-start gap-space-md min-w-0">
{/* Company Logo Avatar */}
<div className="relative shrink-0">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary font-headline-sm text-headline-sm overflow-hidden">
<span className="font-bold tracking-tight">AB</span>
</div>
</div>
<div className="flex flex-col gap-1 min-w-0">
<div className="flex flex-wrap items-center gap-2">
<h3 className="font-headline-md text-headline-md text-on-surface truncate">
              Apex BioTech — Security & Compliance Review
            </h3>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">pending_actions</span>
              2 Pending Commitments
            </span>
</div>
<div className="flex flex-wrap items-center gap-space-md font-body-sm text-body-sm text-on-surface-variant">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span>Today, 2:00 PM (In 4h 10m)</span>
</div>
<span className="text-outline-variant">•</span>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">corporate_fare</span>
<span>Apex BioTech</span>
</div>
<span className="text-outline-variant">•</span>
<div className="flex items-center gap-1.5">
<div className="flex -space-x-1.5 overflow-hidden">
<img className="inline-block h-6 w-6 rounded-full object-cover shadow-xs" data-alt="Portrait of Dr. Marcus Vance, Chief Information Security Officer, wearing round glasses in front of an architectural glass office wall." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA7KlKcUxHOfem3ZZx0C1cEbOuPvboKkLfpKPdKVg6X9DpHHiJo-Ut6P5iGR5Wud6mirKkQpYBERJ7mGygLueuXHH_7WV8Pm0R73skxgO9OlT_vZS72OaarWIdSRDYyxBnVGMyB737R-VMHV2mmVWVQJwEYwyMzunEyvscsjqHnQz7CFG85Cb79Ewn3A0axTT7gM3vVPa0WFRtR1O53_1xGw0Iz67ZCj1bHO1hUusUtk-lki2imy4d"/>
<div className="h-6 w-6 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex items-center justify-center">ER</div>
</div>
<span className="truncate">Dr. Marcus Vance, Elena Rostova</span>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-sm shrink-0 lg:self-center">
<a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-container-low text-primary hover:bg-surface-container font-label-md text-label-md transition-all" data-path="prepare" href="#">
<span className="material-symbols-outlined text-[18px]">psychology</span>
<span>Prepare Briefing</span>
</a>
<a className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors" data-path="memory-bank" href="#">
<span>View Notes</span>
</a>
</div>
</article>
{/* Card 3: Vanguard Logistics (Tomorrow's Scheduled Alignment) */}
<article className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-outline-variant"></div>
<div className="flex items-start gap-space-md min-w-0">
<div className="relative shrink-0">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface-variant font-headline-sm text-headline-sm overflow-hidden">
<span className="font-bold tracking-tight">VL</span>
</div>
</div>
<div className="flex flex-col gap-1 min-w-0">
<div className="flex flex-wrap items-center gap-2">
<h3 className="font-headline-md text-headline-md text-on-surface truncate">
              Vanguard Logistics — Q2 Business Review
            </h3>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">auto_awesome</span>
              Briefing Ready (4 memories)
            </span>
</div>
<div className="flex flex-wrap items-center gap-space-md font-body-sm text-body-sm text-on-surface-variant">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">calendar_today</span>
<span>Tomorrow, 11:00 AM</span>
</div>
<span className="text-outline-variant">•</span>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">corporate_fare</span>
<span>Vanguard Logistics</span>
</div>
<span className="text-outline-variant">•</span>
<div className="flex items-center gap-1.5">
<div className="flex -space-x-1.5 overflow-hidden">
<div className="h-6 w-6 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm flex items-center justify-center">PS</div>
<div className="h-6 w-6 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center justify-center">LO</div>
</div>
<span className="truncate">Priya Sharma, Liam O'Connor</span>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-sm shrink-0 lg:self-center">
<a className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-container-low text-primary hover:bg-surface-container font-label-md text-label-md transition-all" data-path="prepare" href="#">
<span className="material-symbols-outlined text-[18px]">auto_read_pause</span>
<span>Prepare Briefing</span>
</a>
</div>
</article>
{/* Card 4: Horizon Labs (Completed & Synthesized) */}
<article className="p-space-lg rounded-xl bg-surface-container-lowest/80 shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary-container"></div>
<div className="flex items-start gap-space-md min-w-0">
<div className="relative shrink-0">
<div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-on-tertiary-fixed-variant font-headline-sm text-headline-sm overflow-hidden">
<span className="font-bold tracking-tight">HL</span>
</div>
</div>
<div className="flex flex-col gap-1 min-w-0">
<div className="flex flex-wrap items-center gap-2">
<h3 className="font-headline-md text-headline-md text-on-surface truncate">
              Horizon Labs — Annual Renewal & Expansion
            </h3>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container text-tertiary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">verified</span>
              5 Memories Extracted
            </span>
</div>
<div className="flex flex-wrap items-center gap-space-md font-body-sm text-body-sm text-on-surface-variant">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">event_available</span>
<span>May 16 (Completed)</span>
</div>
<span className="text-outline-variant">•</span>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">corporate_fare</span>
<span>Horizon Labs</span>
</div>
<span className="text-outline-variant">•</span>
<div className="flex items-center gap-1.5">
<div className="flex -space-x-1.5 overflow-hidden">
<div className="h-6 w-6 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center justify-center">RG</div>
<div className="h-6 w-6 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center justify-center">TM</div>
</div>
<span className="truncate">Rachel Green, Tom Miller</span>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-sm shrink-0 lg:self-center">
<a className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors" data-path="recall-ai" href="#">
<span className="material-symbols-outlined text-[18px]">neurology</span>
<span>View Summary & Memories</span>
</a>
<a className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors" data-path="prepare" href="#">
<span>Prepare Follow-up</span>
</a>
</div>
</article>
{/* Card 5: Acme Corp (Technical Follow-up Archive) */}
<article className="p-space-lg rounded-xl bg-surface-container-lowest/80 shadow-sm hover:shadow-md transition-all relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-tertiary-container"></div>
<div className="flex items-start gap-space-md min-w-0">
<div className="relative shrink-0">
<div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface-variant font-headline-sm text-headline-sm overflow-hidden">
<span className="font-bold tracking-tight">AC</span>
</div>
</div>
<div className="flex flex-col gap-1 min-w-0">
<div className="flex flex-wrap items-center gap-2">
<h3 className="font-headline-md text-headline-md text-on-surface truncate">
              Acme Corp — May Sync & Technical Follow-up
            </h3>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container text-tertiary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">fact_check</span>
              3 Memories Extracted
            </span>
</div>
<div className="flex flex-wrap items-center gap-space-md font-body-sm text-body-sm text-on-surface-variant">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">event_available</span>
<span>May 14 (Completed)</span>
</div>
<span className="text-outline-variant">•</span>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">corporate_fare</span>
<span>Acme Corp</span>
</div>
<span className="text-outline-variant">•</span>
<div className="flex items-center gap-1.5">
<img className="inline-block h-6 w-6 rounded-full object-cover shadow-xs" data-alt="Portrait photo of Sarah Williams, VP Growth at Acme Corp, smiling against a bright modern corporate loft backdrop." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiu9f8FPAHgYQOhSt-PQK1lBnRHY2vTKxZsKIDV8KrMeFgkixchHXTiZWMOiqvyd-URM8eqpXNc9ODBtPrMFSlXyR3Sz3Zs8kpuOaib02O50qn4daA1Hk4MUZAqb7fUJZl77SX5Vgg5csaLg0ROrUt6aHLt_C0NKa-21vT0koB--qHDXD27vbX3SNeIBp2rQChtxQtgmlB1P9Yi1jo6YJXCRIxAVMLduY-0wMZ9LJGPuAIoMT1S1kB"/>
<span className="truncate">Sarah Williams</span>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-sm shrink-0 lg:self-center">
<a className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors" data-path="memory-bank" href="#">
<span className="material-symbols-outlined text-[18px]">description</span>
<span>View Notes</span>
</a>
</div>
</article>
</section>
{/* Interactive Continuous Memory Telemetry Metric Panel */}
<section className="p-space-lg rounded-xl bg-gradient-to-r from-surface-container-low via-surface-container-lowest to-surface-container-low shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[24px]">hub</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Live Graph Continuity Active</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Auto-vectorization correlates past promises, commitments, and agenda items across meetings.
        </p>
</div>
</div>
<div className="flex items-center gap-6 shrink-0">
<div className="flex flex-col items-end">
<span className="font-code-sm text-code-sm text-on-surface-variant uppercase">Synthesized Ratio</span>
<span className="font-headline-sm text-headline-sm text-primary">98.4%</span>
</div>
<div className="h-8 w-px bg-surface-container-high hidden md:block"></div>
<div className="flex flex-col items-end">
<span className="font-code-sm text-code-sm text-on-surface-variant uppercase">Commitment Recalls</span>
<span className="font-headline-sm text-headline-sm text-tertiary">34 Active</span>
</div>
</div>
</section>
{/* Pagination & Quick Stats Footer */}
<footer className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pt-space-sm pb-space-lg">
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
<span className="inline-flex w-2 h-2 rounded-full bg-primary-container"></span>
<span>Showing <strong className="text-on-surface font-semibold">5</strong> of <strong className="text-on-surface font-semibold">43</strong> meetings</span>
<span className="text-outline-variant">·</span>
<span><strong className="text-primary font-semibold">186 memories</strong> linked across <strong className="text-on-surface font-semibold">14 companies</strong></span>
</div>
{/* Pagination Controls */}
<div className="inline-flex items-center gap-1.5 self-start sm:self-auto">
<button className="p-2 rounded-lg bg-surface-container-low text-outline-variant cursor-not-allowed" disabled="">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="w-8 h-8 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center shadow-xs">
        1
      </button>
<button className="w-8 h-8 rounded-lg hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center transition-colors">
        2
      </button>
<button className="w-8 h-8 rounded-lg hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center transition-colors">
        3
      </button>
<span className="px-1 text-on-surface-variant">...</span>
<button className="w-8 h-8 rounded-lg hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center justify-center transition-colors">
        9
      </button>
<button className="p-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</footer>
</div>
</div></main>
    </>
  );
}