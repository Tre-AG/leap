# Leap — Project Plan

## Vision

Leap is a fun, interactive, video-game-style experience that helps everyday people discover how AI can make their lives easier — without requiring them to already know or care about AI.

The core insight: there's a massive gap between "AI power users" and the average person. Existing AI content assumes you're already bought in and curious. Leap flips the model — instead of people searching for AI solutions, Leap surfaces their real-life friction points and maps AI solutions to them. The magic moment is: "Wait — AI can help with *that*?"

---

## Core Principles

- **Meet people where they are.** No jargon, no assumptions about prior AI knowledge.
- **Fun over functional.** The experience should feel like a game, not a survey. Think 16Personalities meets Telltale Games.
- **Show, don't sell.** The tool genuinely helps people. Consulting opportunities emerge naturally, not through a hard sell.
- **Lowest hanging fruit first.** Recommendations start with the simplest, lowest-friction wins that people can act on immediately.
- **AI stays invisible.** The name doesn't reference AI. The experience focuses on *their problems*, not on technology.
- **AI as amplifier, not just automation.** Beyond saving time, AI helps people contribute more, think better, and punch above their weight.
- **Built to evolve.** V1 is a single playthrough. The vision includes progression, levels, and returning for more.

---

## Creative Direction & Visual Identity

### Theme: Anthropomorphic Frogs
The name "Leap" connects directly to the visual identity — the mascots and character avatars are anthropomorphic frogs (frogs dressed as humans, with human personalities and expressions). This creates a playful, disarming tone that signals "this is fun, not a tech quiz."

### Character Avatars
Each character class has its own frog persona:

| Class | Frog Avatar |
|-------|-------------|
| **The Student** | Frog with a backpack, headphones around neck, coffee in hand |
| **The Professional** | Frog in a suit and tie, slightly loosened, briefcase in hand |
| **The Entrepreneur** | Frog in a hoodie with a laptop and a lightbulb or idea spark |
| **The Parent** | Frog juggling multiple items — phone, lunchbox, car keys, calendar |
| **The Creative** | Frog with a beret, paintbrush, or musical instrument |

### Why Frogs Work
- **Ties to the name.** "Leap" = frogs. Immediate brand connection.
- **Disarming.** Answering questions about your work habits through a cute frog character feels lighter and less like being evaluated.
- **Memorable and shareable.** People love sharing things with fun visual identities. "I got the Professional frog" is more shareable than "I got the Professional profile."
- **Expressive.** Frogs can react to choices throughout the experience — little animations, facial expressions, thought bubbles — making it feel alive.
- **Scalable.** Easy to add new frog characters, accessories, or seasonal variations as the product evolves.

### Frog Character Design
- **Same base frog, different costumes and poses.** All characters share the same light green frog with pale cream belly and big glossy dark brown eyes. Differentiation comes from clothing, accessories, props, and unique poses. Each frog has distinct personality through body language and expression.
- **Art style:** Between flat cartoon and clean modern illustration. Soft shading, smooth gradients, not completely flat but not highly detailed. Feels like a polished app mascot or a character from a premium casual game. Not too childish, not too realistic. Inspired by Pokemon game art blended with clean modern illustration.
- **Generated using Google Nanobanana** with carefully iterated prompts to maintain style consistency across all five characters.
- **Character details (V1):**
  - **Student:** Standing, brown leather backpack, headphones around neck, holding coffee cup. Neutral friendly expression.
  - **Professional:** Sitting in office wheely chair (legs crossed), white collared shirt with rolled-up sleeves, loosened navy tie, reading glasses on head, ID badge lanyard, "Still Hopping" coffee mug, stack of folders in lap. Relaxed confident smirk.
  - **Entrepreneur:** Standing, gray zip-up hoodie, trendy sneakers, one earbud in, holding laptop and phone, sticky notes. Excited grin.
  - **Parent:** Mid-walk, blue zip-up jacket, overstuffed canvas tote bag with kid's toy poking out, kid's drawing stuck to back, holding coffee and car keys/phone. Tired but warm expression.
  - **Creative:** Standing next to wooden easel with colorful painting, beret, paint-splattered apron, holding paintbrush and palette, paint smudges on cheeks, pencil behind ear. Friendly thoughtful smile.
- **Color palette:** Natural greens with soft accent colors. Muted tones, nothing too bright or saturated. Consistent across all five characters.
- **Asset files:** Student.png, Professional.png, Entrepreneur.png, Parent.png, Creative.png

### Visual Tone
- **Light, clean, airy.** White/off-white primary background (#f8fbf8). Pleasant green accents. NOT dark mode. The feel should be inviting and warm, not techy.
- **Design direction:** Monument Valley elegance (clean, geometric, subtle) combined with bubbly toy-like UI elements (rounded corners, soft shadows) and light airy green palette.
- **Color palette:** White base, soft natural greens, with subtle accent colors per character class. Muted tones throughout, nothing overly saturated.
- **Typography:** Nunito as primary font. Warm, rounded, friendly without being childish.
- **Style:** Clean modern illustration meets indie game. The frog characters set the tone and the UI should feel like it exists in the same world.
- **Storybook feel:** The entire experience should feel like turning pages in an interactive story. Each screen is a "page" with the frog character present, reacting, and guiding. Not a form. Not a quiz. A journey.
- **Animations:** Subtle fade transitions, gentle hover effects, floating geometric accents in the background. Frog characters react to choices to make it feel alive and responsive.
- **UI elements:** Rounded corners (16-24px), soft shadows, bubbly card-based layout. Nothing sharp or corporate.

### Storytelling Elements
- The experience is framed as a journey — "your frog" is discovering things alongside you
- Flavor moments feature the frog character reacting or commenting
- Results page shows your frog "leveling up" or getting equipped with new tools
- Each result card is a "page" you move through, not a list you scroll
- Future versions could include frog customization, accessories earned through progression

*This section is a living creative brief. Update as the visual identity evolves.*

---

## Target Audience

### V1: Friends, Family & Their Networks
- Free to use
- Five character classes: Student, Professional, Entrepreneur, Parent, Creative
- Broad audience — anyone who uses technology but hasn't explored AI beyond basic ChatGPT
- The Entrepreneur class focuses on aspiring builders and side-hustlers, not established business owners
- Goal: test the concept, gather feedback, build credibility and testimonials

### V2 (Future): Business Owner Tracks
- Dedicated character classes for established business owners (small business, medium/large, corporate, industry-specific)
- Monetizable through consulting
- Clear pain points: scheduling, invoicing, marketing, customer communication
- Easy to demonstrate ROI
- Least likely to discover AI solutions on their own

### V3 (Future): Expanded Audience & Community
- Shareable AI profiles
- Mini tutorials and video walkthroughs
- Community features — challenges, leaderboards
- Expanded progression system
- **User profiles as a "living character sheet"** — once user accounts and profiles exist, the rich `usageMethods` data (prompt formulas, techniques, common mistakes) that's currently used as prompt context should be surfaced on the profile page. The reasoning: during a playthrough, users are in discovery mode and want the quick win. On a profile page, they're in learning/deepening mode and want to actually get good at using the tools. Profiles become expandable — users can click into each of their recommended tools to see detailed prompts, advanced techniques, pitfalls, and updates. This also gives users a reason to return (their profile grows richer over time as tools evolve via the automated data update system), and fits the game metaphor: playthrough = "meet your frog, get your starting gear," profile = "your character sheet where you upgrade your skills." The `usageMethods` data in `tools.json` was intentionally left out of the in-game Quick Win UI for this reason — it's valuable but belongs in a deeper experience, not cluttering the main flow.

---

## Product Structure

### The Experience Flow

The experience has three acts, inspired by video game design. The total experience should take 5-7 minutes and feel like a journey, not a questionnaire. Flavor moments are choice-based story beats mixed between scenarios, keeping the experience feeling like a game rather than a survey.

**Core Design Principle: Action, Not Reflection.** Every screen should put the user in a moment and ask what they DO, never how they FEEL. This applies to scenarios, flavor moments, and interactive screens. Think Telltale's The Walking Dead, Until Dawn, or The Witcher 3 dialogue choices. The user is always driving the story, never filling out a form. The recommendation engine builds a profile from their actions without them realizing it.

**Flavor Moment Design Rules:**
- Appear after Scenarios 2, 4, and 6 (3 per playthrough)
- Each class has its own set of flavor moments
- They are choice-based story beats, NOT encouragement ("you're doing great") or survey questions
- They put the user in a specific, concrete moment and ask what they do
- They should feel like small character-defining decisions, not productivity questions
- Some secretly collect behavioral data that feeds the recommendation engine
- They should have nothing to do with the subject matter of the quiz (work, AI, tools)
- They are about being a person, not about being productive

#### Act 1 — Character Selection
The user picks their "class" which sets the context for everything that follows:

| Class | Description |
|-------|-------------|
| **The Student** | Learning, studying, building skills |
| **The Professional** | Working a job, building a career |
| **The Entrepreneur** | Building something of their own — side hustles, projects, independent path |
| **The Parent** | Managing a household, raising kids, juggling everything |
| **The Creative** | Making things, freelancing, expressing ideas |

The selection should feel like picking a character in a game — visual, immediate, and identity-affirming.

---

#### Act 2 — Discovery Phase

A mix of Telltale-style scenario choices, flavor moments, and interactive specifics. The user feels like they're playing through a story about their life. Behind the scenes, we're building a detailed behavioral and situational profile.

**Design Principle:** Data collection should be invisible. Flavor moments (funny, relatable non-data beats) are mixed between scenarios so it never feels like a survey. Some flavor moments can secretly collect data too.

---

### Scenarios (The Professional — Pilot Class)

Each scenario presents a relatable moment with four choices. Each choice maps to behavioral tags that shape the AI's recommendations. The scenarios are designed so the user feels like they're reflecting on their own life, not being tested.

---

#### Scenario 1 — The Monday Morning
*Reveals: planning style and structure preference*

> "It's Monday morning. You have a full week ahead — meetings, deadlines, and a few things you've been putting off. What's your move?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| Open your calendar and map out the entire week before doing anything else | high-structure, proactive, planning-oriented | Already has systems — AI should make them faster and smarter. Calendar optimization, automated prioritization, smart scheduling. |
| Glance at what's coming up and start with whatever's due first | moderate-structure, deadline-driven, practical | Functional but reactive. AI should surface what matters before it's urgent — smart reminders, weekly digests, deadline flagging. |
| Dive straight into your inbox — that's where the fires are | low-structure, reactive, email-dependent | Workflow driven by other people's needs. Hit email hard — AI drafting, inbox summarization, priority sorting. Help them carve out focus time. |
| Honestly? Hope for the best and figure it out as you go | low-structure, avoidant, overwhelm-prone | Most overwhelmed, most likely to benefit, needs the absolute simplest entry point. One tool, one habit, lowest friction. |

---

#### Scenario 2 — The Difficult Email
*Reveals: communication approach and writing habits*

> "You need to send a tricky email — pushing back on a deadline, giving feedback, or asking for something awkward. What do you do?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| Write it carefully, reread it five times, then finally hit send | communication-perfectionist, high-effort-writing, tone-anxious | Spends too much energy on writing. AI drafting and tone adjustment tools would be a massive win. |
| Draft something quick and just get it over with | communication-efficient, low-patience, action-oriented | Doesn't agonize but might land poorly. AI for quick tone checks — not full drafts, just "review this before I send." |
| Ask a coworker or friend to read it first | collaboration-seeking, second-opinion-dependent, social-processor | Already wants a thought partner. Frame AI as a judgment-free sounding board available anytime. |
| Put it off and hope the situation resolves itself | communication-avoidant, procrastination-prone, conflict-averse | The barrier is getting started, not writing skill. AI lowers activation energy — "tell it what you want to say casually, let it draft the professional version." |

---

#### Scenario 3 — The Meeting Aftermath
*Reveals: information capture and follow-through habits*

> "You just got out of a long meeting with action items and important details. What happens next?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| I took detailed notes and I'll organize them right after | high-capture, organized, documentation-oriented | Already doing the work manually. AI meeting summarization and note organization saves significant time while matching their instinct. |
| I'll remember the important stuff — no need to write everything down | low-capture, memory-reliant, overconfident-retention | Certainly losing information. Don't say "take better notes" — frame as "what if the important stuff was captured automatically?" AI transcription, auto-summarization. |
| I jotted a few things on a sticky note or in my phone | partial-capture, scattered-systems, informal-tracking | Captures some things but in fragmented places. Focus on consolidation — AI tools that pull scattered notes into one place, voice-to-organized-notes. |
| Wait, there were action items? | very-low-capture, disengaged, overwhelm-indicator | Needs the simplest intervention. An AI tool that records and summarizes meetings without them doing anything. |

---

#### Scenario 4 — The Skill Gap
*Reveals: learning style and growth approach*

> "There's something at work you know you should get better at — maybe a tool, a skill, or a type of task. How do you typically handle it?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| Research it on my own time — YouTube, articles, courses | self-directed-learner, high-initiative, time-investing | Already willing to learn. AI accelerates dramatically — personalized tutoring, concept explanation at their level, custom study plans. Receptive to advanced AI use cases. |
| Figure it out as I go when I actually need it | just-in-time-learner, practical, low-patience-for-theory | Learns by doing, not studying. Recommend AI as a real-time problem solver — "when you're stuck, just ask AI to walk you through it." |
| Ask someone who already knows how | social-learner, delegation-minded, relationship-oriented | AI as thought partner and mentor fits naturally. Frame as having access to an expert anytime without bothering a coworker. Also: AI as practice partner. |
| Keep meaning to learn it but never find the time | growth-stalled, time-poor, aspiration-gap | Show that AI compresses learning time dramatically. "What used to take an hour of research, AI can help you understand in 5 minutes." |

---

#### Scenario 5 — The Opportunity to Contribute
*Reveals: creative ambition, confidence, and contribution style*

> "Your team is working on a problem and there's a chance for you to contribute something beyond your usual role. What's your instinct?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| I'd love to but I don't feel like I have enough expertise | confidence-gap, potential-untapped, knowledge-barrier | AI as research and ideation amplifier. "You don't need to be an expert — use AI to quickly research, generate ideas, and develop a perspective worth sharing." |
| I usually have ideas but struggle to articulate them well | ideas-rich, communication-bottleneck, presentation-gap | AI as polishing and structuring tool. Take rough ideas and turn them into clear proposals, presentations, or talking points. |
| I jump in — I like contributing even if my idea isn't fully formed | high-initiative, confident, rough-around-edges | AI helps refine before sharing — fact-check ideas, strengthen arguments, anticipate counterpoints. Go from good to great contributions. |
| I'd contribute more if I had time to prepare something good | quality-focused, time-constrained, perfectionism-adjacent | AI as prep accelerator. "What used to take two hours to research and put together, AI can help you do in 20 minutes." |

---

#### Scenario 6 — The Repetitive Task
*Reveals: approach to recurring work and automation readiness*

> "There's a task at work you do over and over — weekly reports, updating spreadsheets, sending similar emails. How do you deal with it?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| I've built a system or template to make it faster | systems-thinker, efficiency-oriented, automation-ready | Already primed for AI automation. Show how AI takes manual systems further — templates that write themselves, auto-generating reports, pattern-based email drafts. |
| I just grind through it every time | brute-force, low-optimization, routine-tolerant | Doesn't realize how much time they're wasting because it's become normal. Quantify it — "if this takes 30 min/week, that's 26 hours a year." Then show the AI alternative. |
| I rush through it and it probably shows | quality-sacrificing, time-pressured, shortcut-taker | AI lets them do it fast AND well. "You don't have to choose between quick and good anymore." AI drafting, formatting, error-checking for repetitive deliverables. |
| I genuinely forget or put it off until someone asks | avoidant, accountability-gap, needs-automation-most | Needs automation more than anyone but will resist complexity. Recommend the simplest reminders and auto-generation. One step, not a system. |

---

#### Scenario 7 — Information Overload
*Reveals: information management and overwhelm level*

> "By mid-afternoon you've got unread emails, messages, open tabs, meeting notes, and a half-finished task. What's the state of things?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| I'm mostly on top of it — things are organized | high-organization, low-friction-current, optimization-candidate | Managing well but could be faster. Focus on speed improvements — faster email processing, smarter note search, automated filing. |
| It's messy but I know where everything is... mostly | controlled-chaos, functional-disorganization, search-dependent | Relies on memory and search to find things in the mess. AI tools that improve search, surface relevant info automatically, consolidate scattered information. |
| I've lost track of at least one thing that's going to bite me later | slipping-through-cracks, overwhelm-moderate, capture-failure | Needs better capture and surfacing. AI tools that track commitments, flag forgotten follow-ups, create automatic to-do lists from emails and messages. |
| I feel overwhelmed but I just keep going | overwhelm-high, coping-not-managing, burnout-adjacent | Don't add more tools to their overwhelm. Recommend one thing that reduces noise — AI email summarization or end-of-day digest of what matters. |

---

#### Scenario 8 — The Work-Life Bleed
*Reveals: work-life dynamic and personal admin needs*

> "Your workday is over. What's the thing that follows you home?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| A to-do list of personal stuff I couldn't get to during the day | personal-admin-backlog, time-poor-personal, work-crowds-life | Needs AI help with personal admin — meal planning, errand management, appointment scheduling, bill tracking. The stuff that piles up because work takes all their energy. |
| Work I didn't finish that I'll probably think about all evening | work-spillover, boundary-issues, completion-anxiety | AI can help close loops faster during the day. End-of-day summary tools, AI that quickly finishes drafts or preps for tomorrow before they leave. |
| Nothing specific but a general feeling of being behind | ambient-stress, unclear-priorities, lacks-visibility | They don't know what's making them anxious because they lack clarity. AI tools for progress tracking, priority dashboards, weekly review prompts. |
| I'm pretty good at shutting off when the day is done | healthy-boundaries, compartmentalized, work-contained | Work life is more under control. Focus on optimization and growth — contribution and skill-building angles rather than survival. |

---

### Scenarios (The Student)

Each scenario presents a relatable moment from student life with four choices mapping to behavioral tags.

---

#### Scenario 1 — The Assignment
*Reveals: work approach and time management*

> "You've got a big assignment due in a week. How do you handle it?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| Break it into pieces and start early — I like being ahead | high-structure, proactive, planning-oriented | Already has good habits. AI makes their process faster — research assistance, outline generation, draft feedback. |
| I'll start a few days before — enough time without overdoing it | moderate-structure, steady, practical | AI helps them be more efficient in the time they spend — faster research, better first drafts. |
| I know I'll procrastinate, but I always pull it off last minute | low-structure, procrastinator, pressure-performer | AI lowers the activation energy to start. Brainstorm, outline, rough draft in minutes. |
| I honestly forget about it until it's almost too late | low-structure, avoidant, overwhelm-prone | Needs simplest possible system. AI reminders and "give me a starting point for this topic" as a lifeline. |

---

#### Scenario 2 — The Difficult Concept
*Reveals: learning style and help-seeking behavior*

> "You're studying something and you just don't get it. What's your move?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| Reread the material and look up other sources until it clicks | self-directed, persistent, research-oriented | AI as personalized tutor — "explain this like I'm 10" or "give me 3 different analogies." Matches their instinct to dig deeper. |
| Watch a YouTube video — someone out there explains it better | visual-learner, external-resource-seeker, passive-intake | AI generates explanations tailored to their level. Also can recommend which resources are worth their time. |
| Ask a classmate or go to office hours | social-learner, help-seeker, relationship-oriented | AI as always-available study partner. No scheduling, no embarrassment. Complement to human help, not replacement. |
| Skip it and hope it's not on the exam | avoidant, selective-effort, risk-taker | AI makes understanding things fast and painless. Lower the barrier to just asking. |

---

#### Scenario 3 — The Group Project
*Reveals: collaboration style and accountability*

> "You're assigned a group project. What role do you usually end up playing?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| I take charge and organize everything — someone has to | leader, organizer, high-responsibility | AI helps them delegate and manage more efficiently — project plans, task breakdowns, templates. |
| I do my part well but don't want to run the whole thing | contributor, reliable, independent-worker | AI helps them punch above their weight on their section — better research, stronger writing, more polished deliverables. |
| I'm the ideas person — great in the brainstorm, less great on the follow-through | creative, ideator, execution-gap | AI bridges the gap between ideas and output — structured drafts without the painful execution phase. |
| I'm not proud of it, but I'm mostly hoping the group carries me | low-accountability, passive, minimal-effort | No judgment — AI actually makes contributing easier than avoiding it. A solid first draft in 10 minutes is less effort than the awkward dance of doing nothing. |

---

#### Scenario 4 — The Exam
*Reveals: study habits and preparation approach*

> "You've got a big exam coming up. How do you usually prepare?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| I make study guides, flashcards, and review notes well in advance | high-preparation, systematic, organized-learner | AI supercharges their process — generate flashcards from notes, create practice questions, summarize dense material. |
| I review my notes a couple times and hope the main ideas stuck | moderate-preparation, passive-review, confidence-based | AI makes review more effective — "quiz me on this" or "what are the 5 most important concepts?" Active recall instead of passive reading. |
| I cram the night before — it's stressful but it works (mostly) | low-preparation, crammer, pressure-performer | AI as ultimate cramming partner — "I have 4 hours, give me key concepts and test me." |
| I kind of wing it and see what happens | minimal-preparation, avoidant, low-investment | Even 20 minutes with AI is better than nothing. "Give me a 10-minute crash course on [topic]." |

---

#### Scenario 5 — The Blank Page
*Reveals: writing process and creative confidence*

> "You need to write a paper or essay. You're staring at a blank document. What happens?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| I outline first, then write section by section — structure keeps me on track | structured-writer, outline-first, methodical | AI accelerates — generate outlines from a thesis, suggest structures, fill in rough drafts per section. |
| I just start writing and figure out the structure as I go | freeform-writer, discovery-based, momentum-driven | AI helps after the draft — reorganize, tighten arguments, suggest better structure. Let them write, then polish. |
| I write the intro last because I never know how to start | start-blocker, middle-out, intro-anxious | AI eliminates the hardest part — "give me 3 opening paragraphs for a paper about [topic]." |
| I stare at it for way too long, write a sentence, delete it, repeat | paralyzed-writer, perfectionism-block, high-anxiety | AI as "just get words on the page" tool. Dictate thoughts messily, let AI organize. Starting from something beats starting from nothing. |

---

#### Scenario 6 — The Career Question
*Reveals: future orientation and professional development approach*

> "Someone asks you 'what do you want to do after graduation?' What's going through your head?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| I have a clear plan — I know what field and what steps to take | career-clear, goal-oriented, planning-ahead | AI helps execute — resume drafting, interview prep, industry research, networking strategies. |
| I have a general direction but the specifics are fuzzy | career-leaning, exploring, directionally-aware | AI for exploration — research paths, compare roles, understand required skills. Practice interviews for roles they're considering. |
| I have too many interests and can't narrow it down | career-scattered, multi-interested, decision-paralysis | AI for structured decision-making — pros/cons, "what careers match my interests?" Research what different roles actually look like day-to-day. |
| I try not to think about it honestly | career-avoidant, anxious, overwhelmed-by-future | Don't push career planning. Small steps — "help me update my LinkedIn" or "what are 3 skills useful in any career?" |

---

#### Scenario 7 — The Overwhelm
*Reveals: stress management and prioritization under pressure*

> "It's midterms week. Exams, papers, and a project all due within days. How are you handling it?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| I made a schedule weeks ago — stressed but on track | high-planning, proactive-stress-management, ahead-of-deadlines | AI helps maintain their system under pressure — quick research, draft generation, study tools. Time savings compound when every hour counts. |
| I'm triaging — figuring out what's worth the most and prioritizing | strategic, triage-oriented, practical-under-pressure | AI as force multiplier on highest-priority items. Targeted, high-impact assistance. |
| I'm doing everything at once and nothing well | scattered, multitasking, stress-reactive | AI helps them focus — "I have 3 hours and here's everything due, help me make a plan." Handle lower-stakes tasks so they can focus on what matters. |
| I'm spiraling and considering dropping something | overwhelm-crisis, anxiety-driven, near-breaking-point | Be gentle. One thing: "Tell AI what you're dealing with and ask it to help you triage. Getting it organized can make it feel manageable." |

---

#### Scenario 8 — The Skill They Want
*Reveals: growth mindset and self-development approach*

> "There's a skill you wish you were better at — for school, career, or personal interest. How do you usually approach learning new things?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| I find courses, tutorials, and books — I like learning systematically | systematic-learner, course-seeker, structured-growth | AI as personalized curriculum — "create a 2-week learning plan" or "explain then quiz me." |
| I learn by doing — just throw me in and I'll figure it out | experiential-learner, hands-on, trial-and-error | AI as real-time coach — "I'm stuck here, what should I do?" Just-in-time help while practicing. |
| I watch other people do it and pick up what I can | observational-learner, passive-absorption, example-driven | AI generates examples, walkthroughs, step-by-step breakdowns. "Show me how an expert would approach this." |
| I keep meaning to start but I never get around to it | growth-stalled, aspiration-gap, activation-barrier | AI makes starting trivially easy. "I want to learn [skill] but only have 10 minutes — give me a starting point." |

---

### Scenarios (The Entrepreneur)

Each scenario presents a relatable moment for someone looking to build something of their own — a side hustle, a project, an independent path. This is the aspiring builder, not the established business owner.

---

#### Scenario 1 — The Idea Phase
*Reveals: where they are in their journey and creative confidence*

> "When it comes to starting something of your own — a side project, a hustle, a business — where are you at?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| I have a specific idea I'm working on or ready to start | idea-committed, action-oriented, direction-clear | AI helps them execute — research the market, validate the idea, create a plan, build what they need. |
| I have a few ideas but I can't decide which one to go with | idea-multiple, decision-paralysis, needs-validation | AI as decision partner — evaluate each idea against skills, market, and time. Help them pick and commit. |
| I want to build something but I haven't figured out what yet | idea-searching, aspiration-strong, direction-unclear | AI for exploration — "based on my skills and interests, what could I build or sell?" |
| I like the idea of it but I don't know where to even begin | idea-dreamer, activation-barrier, overwhelmed-by-starting | AI makes starting less intimidating — "I want to make money on the side, I'm good at [X], what could I do this week?" |

---

#### Scenario 2 — The Skills You've Got
*Reveals: self-awareness and confidence about what they bring to the table*

> "Everyone's got something they're good at — even if they don't think of it as a 'business skill.' What's yours?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| I'm good with people — communicating, networking, selling ideas | people-skilled, communication-strong, relationship-builder | AI amplifies people skills — content creation, outreach templates, personal branding, pitch decks. |
| I'm good at making things — writing, design, building, creating content | maker, creative-skilled, output-oriented | AI as production multiplier — create more, faster, at higher quality. Bottleneck is time, not talent. |
| I'm good at figuring things out — research, problem-solving, learning fast | analytical, resourceful, self-taught | AI turbocharges research — market analysis, competitive research, finding opportunities others miss. |
| I'm not sure what I'd offer — I don't feel like I have a marketable skill | low-confidence, skill-blind, needs-discovery | Biggest unlock AI provides. Help identify skills they don't realize are valuable — reframe experience as expertise. |

---

#### Scenario 3 — The Time Reality
*Reveals: available bandwidth and current life situation*

> "How much time do you realistically have to work on something of your own?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| A lot of free time right now — I could go all in | time-rich, available, full-commitment-possible | AI helps them use it wisely — structured plans, daily actions, building consistently. Don't let unstructured time become wasted time. |
| A few hours a week — evenings and weekends around a job or school | time-limited, side-hustle-mode, working-around-commitments | Every hour counts. AI maximizes limited windows — batch creation, quick research, 15-minute sprints. |
| Not much — already stretched thin but I still want to try | time-scarce, overcommitted, aspirational | Be realistic. AI helps do small things consistently — 15 minutes a day. Tiny progress beats no progress. |
| I could make time if I knew it was worth it — I need to see potential first | time-conditional, proof-seeking, risk-averse | AI helps validate before committing — quick research, test an idea in a weekend, see if there's demand. |

---

#### Scenario 4 — The Money Situation
*Reveals: financial reality and investment capacity*

> "What's your budget situation for getting something off the ground?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| I've got some savings or money I can invest | funded, willing-to-invest, resourced | Can recommend paid tools when genuinely best. But still lead with free — save money for things AI can't do. |
| I can spend a little — a subscription or two if it's worth it | budget-limited, selective-spending, value-conscious | One or two paid recommendations max. Emphasize free tiers and tools that punch above their price. |
| Basically nothing — whatever I do needs to be free or close to it | budget-zero, bootstrap-only, free-tools-essential | Every recommendation must be free. ChatGPT free tier replaces what used to cost hundreds in services. |
| I'd rather invest time than money right now | time-over-money, sweat-equity, learning-oriented | Free tools plus time investment. AI helps them learn skills instead of paying someone. |

---

#### Scenario 5 — The Putting Yourself Out There Problem
*Reveals: comfort with visibility and self-promotion*

> "Building something usually means putting yourself out there — social media, networking, telling people what you're working on. How does that feel?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| I'm comfortable — I already post and share what I'm up to | visibility-comfortable, self-promoter, already-public | AI helps them do more faster — content ideas, repurposing, audience growth. They have confidence; AI gives volume. |
| I can do it but it doesn't come naturally — I have to push myself | visibility-reluctant, willing-but-uncomfortable, needs-encouragement | AI lowers friction — draft posts they edit, suggest topics, "write this in my voice." |
| I hate it — self-promotion makes me cringe | visibility-averse, self-promotion-allergic, imposter-syndrome | Reframe as sharing, not selling. AI drafts valuable content rather than self-promotional content. |
| I don't even know what I'd say or where I'd post | visibility-lost, no-platform, needs-strategy | AI as brand advisor — "I'm building [thing] for [audience], where should I show up and what should I talk about?" |

---

#### Scenario 6 — The Learning Curve
*Reveals: skill gaps and approach to learning what they need*

> "Starting something on your own means learning things you've never done — marketing, finance, design. How do you deal with that?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| I love learning new things — videos, courses, figuring it out | self-directed-learner, growth-oriented, resourceful | AI accelerates learning — personalized tutorials, instant answers applied to their specific situation. |
| I learn what I need in the moment — I'll figure out invoicing when I need to send one | just-in-time-learner, practical, on-demand | AI is perfect — real-time problem solving. "I need to send my first invoice, walk me through it." |
| I'd rather find someone to do the things I'm not good at | delegation-minded, collaboration-seeker, knows-limitations | AI is that someone for many tasks. Design, copy, research, bookkeeping basics. Handles 80% of what they'd outsource. |
| I get overwhelmed by how much I don't know | skill-overwhelmed, imposter-syndrome, paralyzed-by-gaps | Don't present it as "learn all these things." Present it as "AI handles the stuff you don't know." |

---

#### Scenario 7 — The First Dollar
*Reveals: monetization readiness and relationship with selling*

> "Have you made money from something you built or created yourself? Could be anything — freelancing, selling something, a side gig."

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| Yeah — I've freelanced, sold things, or done gig work | revenue-experienced, proven-ability, has-foundation | They've crossed the hardest line. AI helps scale — raise prices, find customers, systematize. |
| A little — some money but nothing consistent | revenue-sporadic, early-stage, needs-consistency | AI helps with consistency — regular outreach, content schedules, follow-up systems, clearer offers. |
| No, but I have an idea of what I'd charge for | revenue-zero, pricing-aware, pre-launch | AI helps take the final step — draft an offer, create a landing page, write first outreach. |
| I have no idea how I'd make money from what I do | revenue-clueless, monetization-blind, needs-discovery | AI explores possibilities — "I'm good at [skill], what are 5 ways people make money doing this?" |

---

#### Scenario 8 — The Big Picture
*Reveals: motivation and vision for their entrepreneurial life*

> "When you imagine your life a few years from now, what does the ideal version look like?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| Working for myself full-time — I want to be my own boss | full-independence, ambitious, long-term-builder | Take goals seriously. AI helps build the foundation now — skills, audience, systems. |
| A side income that gives freedom and options — don't need to quit my day job | side-income, flexibility-seeker, security-conscious | AI builds something sustainable alongside current life. Maximize output in minimal time. |
| Doing work I actually care about, even if it pays less | purpose-driven, meaning-seeker, values-over-money | AI finds the intersection of passion and pay. Handles business stuff so they focus on the work. |
| More control over my life — tired of others deciding my schedule and income | autonomy-seeking, frustration-driven, independence-motivated | Channel frustration into action. AI makes first steps concrete and achievable. |

---

### Scenarios (The Parent)

Each scenario presents a relatable moment from the daily life of a parent juggling kids, household, work, and personal life.

---

#### Scenario 1 — The Morning Chaos
*Reveals: household management style and planning approach*

> "It's a weekday morning. Kids need to get ready, lunches need to happen, and you need to get out the door. What does this look like?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| We have a routine — everyone knows what to do and it mostly runs itself | high-structure, systems-built, routine-established | AI enhances existing systems — automated grocery lists, meal planning by schedule, smart reminders for exceptions. |
| I'm directing traffic the entire time — it works but I'm the engine | manager-mode, high-effort, central-coordinator | AI takes some load — shared calendars, automated reminders for kids, checklists that don't require them driving every step. |
| It's a scramble every single day and I don't know how we make it | reactive, chaotic, surviving | Don't suggest systems. One thing that removes one daily decision. AI for meal planning alone could save 30 minutes of mental energy daily. |
| My partner handles most of the morning — I deal with other parts | shared-responsibility, delegated, role-divided | Focus recommendations on their specific slice of responsibility. |

---

#### Scenario 2 — The Dinner Question
*Reveals: decision fatigue and meal/household planning*

> "It's 4pm. Someone's going to ask 'what's for dinner?' What's going through your head?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| I already know — I plan meals for the week | meal-planner, proactive, organized | AI makes existing planning faster — generate meal plans from what's in the fridge, dietary needs, and the week's schedule. |
| I've got go-to meals and I'll figure it out in the next hour | repertoire-based, moderate-planning, good-enough | AI expands their rotation — "5 easy weeknight meals using chicken." New variety, same effort. |
| I dread this question every single day | decision-fatigued, meal-stressed, daily-struggle | Poster child for AI help. "Tell me what your family likes, I'll plan the week including a grocery list." |
| We order takeout more than I'd like to admit | convenience-dependent, time-poor, guilt-carrying | No judgment. AI meets them where they are — "20 minutes of Sunday prep that makes weeknights take 10 minutes." |

---

#### Scenario 3 — The Mental Load
*Reveals: invisible labor and cognitive burden*

> "Doctor appointments, school events, permission slips, birthday parties, groceries, that thing you were supposed to call about... How do you keep track?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| I have a system — calendar, lists, reminders. A lot but organized | system-dependent, high-organization, managed-load | AI makes their system smarter — natural language to calendar, smart reminders, automated recurring tasks. |
| It's mostly in my head and that's terrifying | memory-reliant, no-system, high-risk | AI as brain dump — "I'll tell you everything I need to remember, organize it and remind me." Externalize the mental load. |
| I write things down in 5 different places | scattered-capture, fragmented, good-intentions | Consolidation is the win. Voice notes to organized lists, photos of permission slips to calendar reminders. |
| My partner and I split it but things still fall through | shared-load, communication-gaps, coordination-failure | AI as family coordination layer — shared lists, automated handoffs, nothing lost between two systems. |

---

#### Scenario 4 — The Kid Moment
*Reveals: parenting challenges and where they need support*

> "Your kid comes to you with something — a homework question, a social problem, a big feeling. What do you do?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| I try to help even if I have to quietly Google the answer | engaged, resourceful, hands-on | AI as better Google — "explain long division for a 9-year-old" or "my kid's friend was mean, how do I talk about this?" |
| I sit with them and listen but I don't always know the right thing to say | emotionally-present, uncertain, supportive-but-unsure | AI helps find words — "my 12-year-old is being bullied, give me conversation starters that aren't preachy." |
| I tell them to ask their teacher — I'm not equipped for everything | hands-off, boundaries-set, pragmatic | AI gives quick wins for moments they do engage — "explain this science concept simply" takes 10 seconds. |
| I feel guilty because I'm usually too tired to give them my full attention | guilt-carrying, exhausted, attention-stretched | AI handles other stuff draining their energy so they have more left for these moments. |

---

#### Scenario 5 — The Personal Time
*Reveals: self-care and personal identity beyond parenting*

> "When was the last time you did something just for you — not for the kids, not for work?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| I make time regularly — it keeps me sane | self-prioritizing, boundaries-set, healthy-balance | AI protects and enhances that time — handle logistics that creep in, plan activities. |
| Occasionally but I always feel guilty about it | guilt-prone, occasional-self-care, permission-needed | AI frees up time so self-care doesn't feel like stealing. An hour saved on admin = an hour guilt-free. |
| I honestly can't remember | self-neglecting, depleted, identity-lost-in-parenting | Most important thing AI can do is give them back time. Even 30 minutes reclaimed is 30 minutes for themselves. |
| Scrolling my phone after the kids are in bed counts, right? | micro-escapes, low-bar, surviving | Validate that. AI handles evening tasks — tomorrow's schedule, meal decisions — so downtime is actually downtime. |

---

#### Scenario 6 — The Scheduling Nightmare
*Reveals: calendar complexity and coordination challenges*

> "Between your schedule, your partner's, kids' activities, and everything else — how does the family calendar work?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| Shared digital calendar — it's the source of truth | digital-calendar, shared-system, coordinated | AI enhances — conflict detection, smart scheduling, "find a 2-hour window where nothing is happening." |
| I keep track and tell everyone where to be | single-point-of-failure, coordinator, information-hub | AI distributes the load — automated reminders to family, shared lists, reducing "did you remember" conversations. |
| We try to coordinate but double-bookings happen regularly | coordination-gaps, miscommunication, system-failure | AI as family scheduler — "everything happening this week, what conflicts need solving?" Visibility first. |
| We just wing it week by week | no-system, reactive, low-planning | Start simple. AI for "what's happening this week" — dump what you know, get organized view back. |

---

#### Scenario 7 — The Household Admin
*Reveals: approach to logistics of running a home*

> "Bills, groceries, home maintenance, car stuff, insurance, that thing you've been meaning to call about for two weeks — how's all that going?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| Mostly on autopilot — auto-pay, recurring orders, maintenance schedule | automated, systems-oriented, on-top-of-it | AI for exceptions — the non-routine stuff. "What furnace filter do we need and where's cheapest?" |
| I handle it as it comes up but stay mostly current | reactive-functional, bill-by-bill, managing | AI for proactive nudges — "what home maintenance should I do this month?" Without building a whole system. |
| There are at least 3 things on that list I've been avoiding | procrastinating, avoidant, task-pile-up | AI makes annoying tasks easy — "draft a script for calling my insurance about [issue]." Remove friction causing avoidance. |
| My partner handles most of this | role-divided, complementary, specialized | Focus on their domain, whatever that is. Interactive screen selections will tell us. |

---

#### Scenario 8 — The Worry
*Reveals: parenting concerns and emotional load*

> "What's the thing about parenting that takes up more mental space than you'd like?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| Am I doing enough? Are my kids getting what they need from me? | adequacy-anxiety, quality-concerned, emotionally-invested | AI reduces noise. Less time on logistics = more energy for presence. Also: research on child development topics they worry about. |
| Screen time, social media, technology — I worry about what it's doing to them | tech-anxious, safety-concerned, digitally-worried | AI helps navigate kids' tech use — age-appropriate guidelines, conversation starters, screen time frameworks. |
| Money — providing, saving for their future, affording activities | financially-stressed, provider-anxiety, cost-conscious | Every recommendation must be free. AI helps save money — budget meal planning, finding deals, comparing prices. |
| The balance — I feel like I'm failing at everything a little bit | balance-overwhelmed, spreading-thin, guilt-pervasive | Most compassionate response. Don't add to their plate. AI quietly handles background tasks. One tool, one area, least effort. |

---

### Scenarios (The Creative)

Each scenario presents a relatable moment from the life of someone who makes things — writing, design, music, video, art, content. Focus is on the creative process and identity, not the business side.

---

#### Scenario 1 — The Creative Process
*Reveals: how they approach their work and where they get stuck*

> "You're starting a new creative project. What does the beginning usually look like?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| I dive right in — I figure things out as I create | intuitive, momentum-driven, discovery-based | AI as brainstorming partner that keeps up with their energy — rapid ideas, mood boards, reference gathering. Don't slow them down. |
| I plan it out first — research, sketches, outlines, then I start | structured-creative, research-first, methodical | AI accelerates prep — research, references, outline drafts. Shorten the runway between planning and creating. |
| I have the idea but getting started is the hardest part | start-blocker, perfectionism-prone, overthinking | AI breaks blank page paralysis — "give me 5 rough starting points." Imperfect starts beat no starts. |
| I wait for inspiration — I can't force it | inspiration-dependent, flow-chaser, inconsistent-output | AI sparks inspiration on demand — style references, "what if" prompts, creative constraints that unlock ideas. |

---

#### Scenario 2 — The Feedback Problem
*Reveals: relationship with criticism and creative confidence*

> "You've made something and you want to know if it's good. What do you do?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| Share it with trusted people and ask for honest feedback | feedback-seeking, community-connected, open-to-critique | AI as additional feedback layer — "critique this like a [target audience]" or "what's the weakest part?" Anytime, without waiting. |
| Post it and see how people react — engagement tells me what I need to know | audience-validated, metrics-driven, public-feedback | AI helps understand audience — content strategy, what resonates and why. |
| Compare it to others' work and usually feel like mine isn't as good | comparison-prone, self-critical, imposter-syndrome | AI as confidence tool — "help me see what's strong about this before I tear it apart." Develop unique voice instead of measuring against others. |
| I don't usually share — it feels too personal | private-creator, vulnerability-averse, sharing-blocked | AI helps create in less personally exposed ways — baby steps toward visibility. |

---

#### Scenario 3 — The Unglamorous Work
*Reveals: tolerance for the non-creative parts of creating*

> "Every creative project has boring parts — editing, revisions, organizing files, formatting. How do you handle it?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| I'm pretty good about it — I edit thoroughly and keep things organized | disciplined-finisher, detail-oriented, process-complete | AI speeds up tedious parts — auto-formatting, batch editing, proofreading. They have discipline; AI saves hours. |
| I do it but I hate every second — it's where my creative energy goes to die | grudging-finisher, admin-resentful, energy-drain | Perfect AI use case — hand off momentum-killing tasks. "Clean up this draft," "format this for [platform]." |
| I rush through it — good enough is good enough | rusher, quality-sacrificing, next-project-oriented | AI lets them rush without quality drop — quick polish, consistency checks, professional formatting. |
| I avoid it and it piles up — folders full of unedited, unorganized work | avoidant, backlog-accumulating, completion-gap | AI as backlog buster — "batch process these 20 items." Small organizing tasks that feel manageable vs. facing the whole pile. |

---

#### Scenario 4 — The Time to Create
*Reveals: how they prioritize creative work in their life*

> "When it comes to finding time for your creative work, what's the reality?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| I make it a priority — regular schedule or routine for creating | creation-prioritized, routine-established, disciplined | AI maximizes creative time — handle research and setup beforehand so their window is pure creation. |
| I squeeze it in — lunch breaks, late nights, weekends | time-scarce, passion-persistent, stealing-moments | AI maximizes short windows — "I have 30 minutes, help me pick up where I left off." Quick context-setting. |
| It depends on mood and energy — sometimes prolific, sometimes weeks go by | inconsistent, energy-dependent, burst-creator | AI captures ideas in low-energy moments so high-energy ones are productive. Lower activation energy on low days. |
| I don't create as much as I want to — life gets in the way | creation-starved, guilt-carrying, aspiration-gap | AI reclaims time from other life areas so creative time becomes possible. Not "create more" — "spend less time on everything else." |

---

#### Scenario 5 — The Creative Block
*Reveals: how they handle stalls and dry spells*

> "You're stuck. The ideas aren't coming, the work feels stale, or you can't get motivated. What do you do?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| Push through — discipline matters more than inspiration | discipline-driven, grind-mentality, output-focused | AI fuels the grind — prompts to break blocks, variations, "10 different directions for this." |
| Step away and do something else until it passes | break-taker, reset-seeker, process-trusting | AI is there when they come back — "I was working on [thing] and got stuck at [point], help me see it fresh." |
| Consume other people's work to get inspired | input-seeker, inspiration-absorber, reference-driven | AI as curated inspiration — "work similar to mine but from a different angle" or "what are people doing with [technique]?" |
| I spiral — start wondering if I'm even good at this | block-to-crisis, confidence-fragile, existential-doubt | AI gently breaks the spiral — "instead of judging it, just give me one small next step." Focus on what's working. |

---

#### Scenario 6 — The Tools of the Trade
*Reveals: technical comfort and relationship with creative tools*

> "When it comes to the tools and software for your creative work, how do you feel?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| I know my tools well — invested time in learning them | tool-proficient, invested, workflow-established | Don't disrupt toolkit. AI complements existing tools — AI features within what they use, or AI that feeds into their workflow. |
| I use the basics but there's more I could learn | tool-functional, surface-level, growth-potential | AI teaches their own tools — "5 features in [tool] most people don't know." AI tools alongside what they use. |
| I feel behind — tools and techniques I should learn but haven't | tool-anxious, skill-gap, falling-behind | AI as patient teacher — "I use [tool], what should I learn next?" No judgment, practical, at their pace. |
| I keep things simple on purpose — don't need fancy tools | tool-minimalist, craft-focused, anti-complexity | Respect this completely. Only recommend AI that genuinely simplifies. Don't push complexity. |

---

#### Scenario 7 — The Unfinished Projects
*Reveals: completion patterns and creative discipline*

> "Be honest — how many half-finished creative projects do you have sitting around right now?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| Not many — I finish what I start before moving on | completer, disciplined, follow-through-strong | AI helps finish faster — polish, finalize, prepare for sharing. Their strength is completion; AI compresses the timeline. |
| A few — I circle back eventually | slow-finisher, rotating-attention, eventual-completer | AI helps pick back up — "here's where I left off, what's remaining?" Context restoration for cold projects. |
| More than I'd like to admit — great at starting, not at finishing | serial-starter, completion-struggle, shiny-object | AI bridges the finish gap — "I'm 70% done, help me push through the last 30%." Handle tedious finishing tasks. |
| Everything is unfinished — I've never completed and shared something I'm proud of | completion-blocked, sharing-blocked, perfectionism-paralysis | Most important unlock. AI defines "done enough" — "what would it take to get this to a shareable state?" Lower the bar from perfect to finished. |

---

#### Scenario 8 — The Dream
*Reveals: creative ambition and long-term vision*

> "If you could spend your time doing exactly the creative work you want, no constraints, what would that look like?"

| Choice | Tags | Recommendation Signal |
|--------|------|----------------------|
| Close to what I'm doing — just more of it and getting better | satisfied-direction, growth-focused, more-of-same | AI for leveling up — skill development, better feedback, pushing craft forward. Mastery and volume. |
| I'd go deeper into one thing instead of juggling multiple projects | focus-seeking, depth-over-breadth, niche-aspiring | AI builds toward focus — identify viable niche, build expertise content, position as specialist. |
| I'd try something completely different from what I'm doing now | pivot-curious, exploration-driven, restless | AI for creative exploration — "I do [current], curious about [new], how do I experiment?" Lower risk of trying new things. |
| I don't know — I just want to create and I want it to matter | purpose-seeking, meaning-driven, vision-unclear | AI helps explore what "mattering" means — self-discovery through conversation, not career planning. |

---

### Flavor Moments (All Classes)

Three choice-based story beats per class, appearing after Scenarios 2, 4, and 6. These are character-defining moments unrelated to work or AI. Every choice is an action. Some secretly collect behavioral data.

#### The Professional

**Flavor 1 — The Elevator** *(after Scenario 2)*

> You're in the elevator. Someone you half-recognize gets in.

| Choice |
|--------|
| Smile and say hi. Keep it short. |
| Go for the full conversation. I can talk to anyone. |
| Phone comes out. Very important email happening right now. |
| Nod. Silence. We both understand. |

**Flavor 2 — The Friday Ping** *(after Scenario 4)*

> Friday at 4:55. Someone pings you with a "quick question."

| Choice |
|--------|
| Knock it out so it's not hanging over the weekend |
| "Can this wait until Monday?" |
| Pretend I didn't see it |
| Open it, sigh, start typing |

**Flavor 3 — The Lunch Decision** *(after Scenario 6)*

> Nobody can decide where to go for lunch.

| Choice |
|--------|
| I pick. Someone has to. |
| Throw out three options and make them choose |
| "I'm fine with whatever" and mean it |
| Already eating at my desk |

---

#### The Student

**Flavor 1 — The Invitation** *(after Scenario 2)*

> Your friend wants to hang out but you told yourself you'd be productive tonight.

| Choice |
|--------|
| I go. I wasn't going to be productive anyway. |
| Say no, then sit on my phone for three hours instead |
| Try to do both. Study at their place. Never works. |
| Actually stay in and get stuff done. It happens sometimes. |

**Flavor 2 — The Classroom** *(after Scenario 4)*

> The professor asks a question to the whole class. You know the answer.

| Choice |
|--------|
| Raise my hand. Why not. |
| Wait to see if someone else says it first |
| I know it but there's no way I'm volunteering |
| Start to raise my hand, then put it back down |

**Flavor 3 — The Library** *(after Scenario 6)*

> You walk into the library and every seat is taken except the one next to someone you vaguely know.

| Choice |
|--------|
| Sit down and say hey. It's just a seat. |
| Sit down, headphones in, pretend I didn't see them |
| Find a different spot even if it's worse |
| Leave and go somewhere else entirely |

---

#### The Entrepreneur

**Flavor 1 — The Dinner Question** *(after Scenario 2)*

> You're at dinner and someone asks "so what's new?"

| Choice |
|--------|
| Tell them about the thing I'm working on. This is my opening. |
| Keep it vague. It's not ready to talk about yet. |
| Mention my day job. The project stays private for now. |
| "Not much, you?" and redirect |

**Flavor 2 — The Competitor** *(after Scenario 4)*

> You see an ad for something weirdly similar to your idea.

| Choice |
|--------|
| Click on it. I need to know everything about them. |
| Start making a mental list of how mine is different |
| Text someone: "Look at this. Should I be worried?" |
| Close the app. Ignorance is bliss right now. |

**Flavor 3 — The Feedback** *(after Scenario 6)*

> Someone you respect gives you honest feedback on your idea and it's not all positive.

| Choice |
|--------|
| Ask follow-up questions. I want specifics. |
| Thank them, go home, start adjusting |
| Thank them, go home, stare at the ceiling |
| Push back. I think they missed something. |

---

#### The Parent

**Flavor 1 — The Solo Drive** *(after Scenario 2)*

> You're in the car alone. No kids.

| Choice |
|--------|
| Turn the music up. Loud. |
| Sit in silence for a minute. Just silence. |
| Call someone I've been meaning to catch up with |
| Drive-through. I've earned this. |

**Flavor 2 — The Pickup Line** *(after Scenario 4)*

> Another parent at pickup is going on about their kid's coding camp, travel soccer, and Mandarin lessons.

| Choice |
|--------|
| Nod along and ask questions. Maybe I should look into it. |
| Nod along while mentally planning dinner |
| "That's awesome" and change the subject |
| One-up them with something my kid did |

**Flavor 3 — The Kid Quote** *(after Scenario 6)*

> Your kid says something so funny you wish you could tell someone right now.

| Choice |
|--------|
| Text it to my partner or best friend immediately |
| Post it. The world needs to hear this. |
| Try to memorize it. I'll definitely forget. |
| Just laugh and stay in the moment |

---

#### The Creative

**Flavor 1 — The Afterglow** *(after Scenario 2)*

> You walk out of a museum, a concert, or a show that was genuinely incredible.

| Choice |
|--------|
| Go home and start making something immediately |
| Call someone and talk about it for 20 minutes |
| Wander for a bit. Let it sit. |
| Pull out my phone and start taking notes |

**Flavor 2 — The Compliment** *(after Scenario 4)*

> Someone gives you a real, genuine compliment on your work.

| Choice |
|--------|
| "Thank you." Let it land. |
| "Oh, it's not that good" before I can stop myself |
| "Thanks! Here's what I'd change though..." |
| Screenshot it. I'm saving this for a bad day. |

**Flavor 3 — The Late Night** *(after Scenario 6)*

> It's 1am. You're in the zone. You have stuff tomorrow morning.

| Choice |
|--------|
| Keep going. The zone doesn't come on command. |
| Set a timer. 30 more minutes, then I'm done. |
| Stop, but leave everything exactly where it is for tomorrow |
| Keep going. Hate myself in the morning. Worth it. |

---

### Interactive Specifics (5 Screens)

After scenarios, the experience shifts to gathering concrete information. Still interactive and visual — tapping tiles, sliders, drag-and-drop — not text fields.

#### Screen 1 — Your Tools
Visual logo grid of common tools and apps. Tap everything you use regularly.

Options include: Gmail, Outlook, Google Calendar, Apple Calendar, Slack, Microsoft Teams, Excel, Google Sheets, Notion, Trello, Asana, Word, Google Docs, pen & paper, sticky notes, physical planner, Notes app, Reminders app, WhatsApp, and others.

*Why this matters:* Recommendations need to plug into their existing ecosystem, not send them somewhere completely new.

#### Screen 2 — Your Responsibilities
What are you mainly responsible for at work? Tap to select. Options adapted per character class.

Professional options: managing a team, client communication, project management, creating reports or documents, sales, customer support, research, design, budgeting and finance, marketing, scheduling and coordination, data analysis, training or onboarding others.

*Why this matters:* Gives the AI much better context for tailoring recommendations to what they actually do.

#### Screen 3 — Your Time Drains
Select the tasks that eat more time than they should. Rank your top 3.

Options: email, scheduling and calendar management, writing documents or reports, preparing for meetings, data entry or updating spreadsheets, searching for information or files, creating presentations, social media or marketing, invoicing or expense tracking, taking and organizing notes, following up with people, formatting or editing documents.

*Why this matters:* Directly identifies where AI can save the most time.

#### Screen 4 — Your Wishlist
"If you could snap your fingers and have any of these, which would you pick?" Select up to 3.

Options: someone to handle my email, a personal assistant for scheduling, help coming up with ideas, someone to organize all my files and notes, a way to learn new skills faster, help writing things that sound polished, a way to stay on top of everything without constant effort, someone to handle the boring repetitive stuff, help making better decisions faster, a way to contribute more at work.

*Why this matters:* Reveals aspirational goals — what they want, not just what they struggle with. Unlocks the most surprising and motivating recommendations.

#### Screen 5 — Your Readiness
Three quick inputs on one screen.

- **Tech comfort level:** Slider with fun labels ("I still print MapQuest directions" → "I automate my coffee maker")
- **AI tools used:** Multi-select of mainstream AI tools (ChatGPT, Claude, Gemini, Copilot (Microsoft), Perplexity). Zero selections valid. Used to personalize which tool is recommended per Quick Win.
- **Time willingness:** Quick choice (just give me the 5-minute version / I can spend 30 minutes trying something / I'm happy to dig in and learn)

*Why this matters:* Calibrates how ambitious or simple the recommendations should be.

---

### Data Structure

Each user generates a structured profile that gets sent to the AI:

```
Character Class: Professional

Behavioral Profile:
- Structure Level: high / moderate / low
- Communication Style: perfectionist / efficient / collaborative / avoidant
- Capture Habits: thorough / memory-reliant / scattered / minimal
- Learning Style: self-directed / just-in-time / social / stalled
- Contribution Mode: confidence-gap / articulation-gap / proactive / time-constrained
- Repetitive Task Approach: systems-builder / brute-force / rusher / avoider
- Information Management: organized / controlled-chaos / slipping / overwhelmed
- Work-Life Dynamic: personal-backlog / work-spillover / ambient-stress / healthy-boundaries

Tools Used: [Gmail, Google Calendar, Slack, Excel, ...]
Responsibilities: [client communication, project management, reports, ...]
Top Time Drains: [email, meeting prep, scheduling, ...]
Wishlist: [help with ideas, personal assistant for scheduling, ...]
Tech Comfort: [1-5 scale]
Prior AI Usage: [none / a little / occasional / regular]
Time Willingness: [5 min / 30 min / deep dive]
```

---

#### Act 3 — The Reveal (Personalized AI Guide)

The results page should feel like unlocking a character profile or loadout — not reading a report. Results are presented one section at a time as "pages" you move through, not a scrollable list.

**Structure of the output:**

1. **Your Profile Summary** — A brief, personalized reflection of who they are and how they operate, based on their choices. This mirrors the 16Personalities moment of "wow, that's so me." (2-3 sentences)

2. **Your AI Opportunities** — 2-3 broad areas where AI can help them, written in plain language and tied directly to what they shared. Not generic categories but specific to their situation. Each is its own card.

3. **Your Quick Wins** — 3-5 specific, immediately actionable things they can do this week. Presented one at a time as cards with navigation. Each one includes:
   - What it is in plain English
   - Why it matters for them specifically
   - Which tool to use (with free vs. paid note)
   - A simple "how to start" first step
   - A copy-paste example prompt (when applicable)
   - Ordered from easiest to more involved

4. **Go Deeper (Future)** — For each quick win, an expandable section showing:
   - A mini conversation example (like a text thread) demonstrating back-and-forth with AI
   - Key techniques: being specific, giving context, iterating, pushing back, asking for alternatives
   - The goal is teaching people that AI is a conversation partner, not a search bar

5. **How to Think About AI (Future)** — A broader mindset section covering:
   - It's a conversation, not a vending machine — follow up, refine, push back
   - Give context about who you are and what you need
   - Ask for alternatives ("give me three versions")
   - Tell it what you didn't like ("make it shorter / more casual / less formal")
   - The more specific you are, the better the output

6. **Your Next Steps** — A soft invitation to go further. "Want help getting started? Have questions?" Contact info and booking link. No hard sell — just an open door.

---

## Categories of AI Solutions to Recommend

The recommendation engine maps user friction points to these categories. Each contains vetted, approachable tools — primarily free or freemium with low learning curves.

### 1. Personal Admin & Life Management
Meal planning, budgeting, travel planning, drafting messages, managing recurring tasks and appointments.

### 2. Organization & Capture
Turning scattered notes into systems, tracking experiences and preferences, summarizing accumulated info, smart reminders.

### 3. Communication & Writing
Drafting and refining emails, preparing for difficult conversations, resumes and cover letters, professional bios, translating tone.

### 4. Learning & Skill Building
AI as tutor, study partner, practice interviewer, language conversation partner. Explaining complex topics simply.

### 5. Planning & Decision Support
Comparing options, pros/cons analysis, calendar optimization, project planning, task breakdown and prioritization.

### 6. Content & Creative
Social media content, brainstorming, basic design, writing assistance for blogs, posts, newsletters.

### 7. Small Automations
Email sorting, template generation, data entry reduction, meeting notes and action items.

---

## Technical Architecture

### Build Principles (Avoiding Backtracking)

The project is structured in three independent layers so that changing one doesn't break the others:

1. **Content Layer** — All questionnaire content (scenarios, choices, tags, interactive screen options) lives in separate data/config files, not hardcoded in components. Changing a scenario means editing a JSON file, not touching UI code.

   **Data file structure (complete, in project files):**
   - `data/scenarios/professional.json` — 8 scenarios with choice IDs, text, and behavioral tags
   - `data/scenarios/student.json` — same structure
   - `data/scenarios/entrepreneur.json` — same structure
   - `data/scenarios/parent.json` — same structure
   - `data/scenarios/creative.json` — same structure
   - `data/flavors.json` — 15 flavor moments (3 per class), organized by class ID, with afterScenario positioning
   - `data/interactive.json` — tool grid options, responsibilities per class, time drains (max 5), wishlist (max 3), readiness settings
   - `data/tools.json` — 16 vetted tools with cost, ecosystem, skillFloor, maturity, bestFor, caveats, teachingPoints

   **Designed for future extensibility:** Tag weighting, branching paths, dynamic tool updates, and optional tags on flavor moments can all be added without restructuring existing files.

2. **Prompt Layer** — The AI prompt template is isolated in its own file/function. It receives structured user data and generates recommendations. Tweaking the output means changing the prompt, not the app logic.

3. **UI Layer** — Modular components (scenario screen, selection screen, slider screen, results screen) that can be rearranged, added, or removed without rebuilding. Content flows in from the data layer.

### Tech Stack (V1)
- **Frontend:** Next.js + React
- **Styling:** Tailwind CSS
- **AI Engine:** Claude API (Anthropic)
- **Hosting:** Vercel (free tier for V1)
- **Database:** None (V1) — results generated on the fly
- **Auth:** None (V1) — no user accounts yet

### Architecture Flow
1. Frontend presents the interactive questionnaire
2. User responses collected as structured data (tags, selections, choices)
3. On completion, data sent to backend API route
4. API route constructs a detailed prompt with all user data and sends to Claude
5. Claude generates personalized recommendations
6. Results rendered on a clean output page

### Design Priorities
- Progress indicator throughout
- Visual, interactive elements — minimal text input
- Animations and transitions that feel game-like
- Mobile-first (most access via shared link on phone)
- Results page designed to be screenshot-friendly for sharing
- Clean, modern aesthetic — not techy or corporate

### Development Tools
- **Claude Chat:** Brainstorming, planning, content creation, prompt design
- **Claude Desktop Code Tab:** Primary code editing tool (migrated from Claude Code WSL in Apr 2026). Parallel sessions with automatic Git worktree isolation, visual diffs, Windows-native. Project connected at `C:\Users\trevo\leap` with worktree mode on
- **Claude Code (WSL):** Still available as fallback. Nothing from the migration broke the old workflow
- **Git:** Commit often with clear messages for easy rollback. All commits attributed solely to Trevor (no Co-Authored-By lines, enforced via CLAUDE.md and desktop Code tab memory)

---

## Curated Tool Recommendations

See **leap-tool-knowledge.md** for the full tool knowledge layer. This is a living cache that the recommendation engine draws from, organized by use case with detailed entries covering cost, ecosystem compatibility, skill floor, maturity level, review sentiment, behavioral profile matching, caveats, and teaching points.

### Recommendation Philosophy
- Default to teaching people how to use big, free, established tools (ChatGPT, Claude) deeply — not recommending 5 new apps
- No tool is permanently off-limits. If it fits, recommend it — with honest context
- Newer or less-tested tools get appropriate disclaimers about maturity and risks
- Match to ecosystem (Google users get Google-compatible tools)
- Calibrate to tech comfort and readiness level

### Automated Freshness System
The tool knowledge layer is kept current by a background refresh job — not manual reviews:
- Scheduled job runs daily (or every 2-3 days) using AI + web search
- Checks existing tools for pricing changes, feature updates, shutdowns, and review shifts
- Scans for new tools gaining traction in each category
- Updates the knowledge layer automatically; recommendation engine always reads from fresh data
- User experience stays fast — no real-time searching during recommendation generation
- Estimated cost: under $1/day at current API pricing

### Tool Categories Covered
1. AI Assistants (ChatGPT, Claude, Gemini, Copilot)
2. Writing & Communication (Grammarly, Hemingway)
3. Meeting & Note-Taking (Otter.ai, Fireflies.ai)
4. Task & Project Management (Notion, Todoist)
5. Email Management (SaneBox, Unroll.me)
6. Scheduling & Calendar (Calendly, Reclaim.ai)
7. Automation & Integration (Zapier)
8. Document & Knowledge Management (Google NotebookLM)
9. Design & Visual Content (Canva)

*Tool knowledge layer is a living document maintained by automated refresh. See leap-tool-knowledge.md for full update strategy and architecture.*

---

## Success Metrics (V1)

- **Completion rate:** What % of people who start actually finish?
- **Qualitative feedback:** Do recommendations surprise people? Are they useful?
- **Action rate:** Did anyone actually try a recommended tool?
- **Share rate:** Did anyone send it to a friend unprompted?
- **Contact rate:** Did anyone reach out for more help?

---

## Version Roadmap

### V1 — Friends & Family
Free, single-playthrough experience. Five character classes (Student, Professional, Entrepreneur, Parent, Creative). Interactive questionnaire with personalized AI guide. Contact info at the end. Goal: test the concept, gather feedback, build credibility. Domain: taketheleap.ai.

### V2 — Business Owner Tracks
Dedicated business owner character classes separate from The Entrepreneur (which focuses on aspiring builders and side-hustlers). Potential classes: small business owners, medium/large business, corporate, and industry-specific categories. Business-specific scenarios, ROI framing. Consulting upsell with case studies. User accounts and progression system. Returning users get deeper, more advanced recommendations.

### V3 — Expanded Audience & Community
Shareable AI profiles. Mini tutorials and video walkthroughs. Newsletter. Community features — challenges, leaderboards, comparison.

---

## Immediate Next Steps

1. ~~Define character classes and experience flow~~ ✅
2. ~~Write scenarios with behavioral tags for The Professional~~ ✅
3. ~~Design interactive specifics screens~~ ✅
4. ~~Map data structure for AI prompt~~ ✅
5. ~~Design the AI prompt template that generates recommendations~~ ✅
6. ~~Build tool knowledge layer~~ ✅
7. ~~Write scenarios for all character classes (Student, Entrepreneur, Parent, Creative)~~ ✅
8. ~~Write flavor moments for all character classes~~ ✅
9. ~~Wire prompt template to tool knowledge layer (prompt pulls from approved tools with context)~~ ✅
10. ~~Wireframe the UI~~ ✅
11. ~~Visual design: character illustrations and UI direction~~ ✅
12. ~~Data file structure: JSON files for all content layers~~ ✅
13. ~~Set up Git repo and version control workflow~~ ✅
14. ~~Build the V1 — frontend flow, API integration, results page~~ ✅ *(frontend flow compiles and runs with zero errors)*
15. ~~Revise all scenario content for story-driven flow~~ ✅ *(all 5 classes revised, March 2026)*
16. ~~Merge landing page and character selection into one page~~ ✅
17. ~~Fix text readability (font size and opacity)~~ ✅
18. ~~Fix class-specific time drains and wishlists~~ ✅ *(was Turbopack cache issue)*
19. ~~Comprehensive app review across all 5 classes~~ ✅ *(review doc created with screenshots, March 2026)*
20. ~~Update Student Scenario 2 prompt to revised version~~ ✅ *(already matched in code)*
21. ~~Replace "Almost There" subtitle~~ ✅ *(changed to "You're almost there." in Readiness.tsx)*
22. ~~Make tools grid class-specific~~ ✅ *(interactive.json now keyed by classId, component updated)*
23. ~~Remove "X of 18" step counter~~ ✅ *(removed from ProgressBar.tsx, progress bar remains)*
24. ~~Fix broken decorative icons~~ ✅ *(removed clipped accent blobs from ScenarioScreen, FlavorScreen, IntroScreen)*
25. Redesign landing page as immersive pond scene with lily pad character selection (see Landing Page Redesign section below)
26. Redesign intro screen to feel cinematic (full-width, atmospheric, not a small card)
27. Add time jump exposition screens between scenarios where planned
28. Rephrase interactive screen headers to feel more narrative
29. Redesign micro-reaction display after scenario choices — **design blocked on scenario visual redesign** *(current plan: thought bubbles coming from frog characters, which requires scenario frog poses to exist first. Deferred until after art generation.)*
30. ~~Add scaffolding for visual variety on scenario cards~~ ✅ *(Apr 2026: added optional backgroundImage field to class JSON files and optional frogPose field to scenarios and flavors. TypeScript types updated. ScenarioScreen and FlavorScreen components updated to use class background as full-page overlay when present and per-scenario frogPose via new CharacterImage component, both with error fallbacks. Asset directories created at public/backgrounds/ and public/frogs/{class}/ with .gitkeep. App looks identical until new assets are dropped in and JSON fields populated.)*
31. Populate scenario visual variety with real assets — **blocked on Nanobanana art generation** *(need per-scenario frog poses and class-level backgrounds. Decision: one themed background per class, different frog pose per scenario. Roughly 5 class backgrounds and ~42 new frog poses needed.)*
32. ~~Add Back button to Almost There readiness screen~~ ✅ *(Apr 2026, was missing while all other interactive screens had it)*
33. ~~Update Almost There subtitle~~ ✅ *(Apr 2026, changed from "This won't take long." to "How familiar are you with AI?")*
34. ~~Generate landing page art assets in Nanobanana~~ ✅ *(Apr 2026: pond background generated. 6 lily pad variations generated with distinct shapes, notch positions, and vein patterns, all matching pond's muted sage green painted style. Canva composite created showing quincunx layout. Lily pads kept as separate layers for independent hover animations in code.)*
35. Build landing page redesign with new assets — **ready for code** *(pond scene + 5 lily pads + class-specific hover animations via simple CSS, no new frog art needed for animations. Art assets done, class-to-pad mapping not yet decided.)*
31. ~~Configure Anthropic API key and test results page~~ ✅ *(API key configured in .env.local, results generating successfully)*
32. ~~Redesign results flow~~ ✅ *(Profile → AI Opportunities → Quick Wins → Summary → Save Results → What's Next)*
33. ~~Add results summary page~~ ✅ *(condensed quick wins with expandable detail, copy prompt, tool links, review answers button)*
34. ~~Add answer review page~~ ✅ *(shows scenario title, prompt, all choices with selected highlighted, interactive selections at bottom)*
35. ~~Add save results email capture screen~~ ✅ *(placeholder UI, email sending not yet wired up)*
36. ~~Fix "Not applicable" prompt display~~ ✅ *(prompt section hidden when content contains "not applicable")*
37. ~~Fix duplicate key bug on answer review page~~ ✅ *(switched to index-based keys)*
38. ~~Cache API results to prevent re-fetching~~ ✅ *(recommendations stored in GameContext, Back to Results preserves state)*
39. ~~Fix results navigation~~ ✅ *(Back from summary → last quick win, Back to Results → summary screen)*
40. ~~Replace "Get in Touch" mailto with inline feedback form on What's Next page~~ ✅ *(Formspree endpoint xnjozkow, captures email + category + message)*
41. ~~Move "Send My Results" email capture from standalone page onto Results Summary page~~ ✅ *(Save Results page removed, flow tightened to 5 steps, email captured via Formspree with source:"results" tag)*
42. ~~Test results consistency (Student + Professional runs)~~ ✅ *(Student fully consistent on tools; Professional has top 3 locked but slots 4-5 vary. Temperature lowered to 0.3 — did not fully resolve variation in slots 4-5. Accepted as "good enough for alpha" with plan to address via Automated Data Update System before launch.)*
43. ~~April 2026 AI research refresh and data integration (4 passes)~~ ✅ *(Pass 1: added 12 new tools to tools.json including Perplexity, Granola, Gamma, Sense, Saner.AI, Descript, Midjourney, ElevenLabs, Quizlet, Mindgrasp, Lovable, Reclaim.ai; removed deprecated Clockwise; updated ChatGPT/Grammarly/Fireflies entries. Pass 2: updated leap-tool-knowledge.md with matching new entries and April 2026 update log. Pass 3: added rich usageMethods field to every tool in tools.json — promptFormulas, techniques, commonMistakes, quickStart — based on cross-class AI usage research. Pass 4: wired usageMethods into recommendation prompt logic in src/lib/prompt.ts so model uses quickStart, promptFormulas, and techniques as context for generating richer Quick Wins. Verified improvements: new tools showing up organically in recommendations, prompts are more sophisticated and context-loaded. UI unchanged.)*
44. ~~Batch 1 alpha feedback fixes (4 items)~~ ✅ *(Apr 2026, via Claude Desktop Code tab with worktree isolation)*
    - Fix 1: Results API error handling — no longer dumps user back to start. Auto-retry with 1s delay, error UI renders in place with "Try again" and "Go back" buttons, GameContext answers preserved through all error paths, `undoComplete()` added to GameContext, `reset()` only called from explicit "Start Over"
    - Fix 2: Tech Comfort slider — end labels changed from clever ("I Google how to Google things" / "I automate my coffee maker") to plain ("Not much" / "A lot"), added numbered tick marks 1-5 above slider track, active number highlights in leaf-dark, `showNumbers: true` added to interactive.json config and types
    - Fix 3: Wishlist prioritization — investigated prompt.ts, found priority was NOT weighted (items were numbered but no instruction to weight by position). Removed rank-number badges, changed subtitle to "Pick your top 3", updated prompt to list as flat comma-separated set. Now a simple multi-select, no ordering
    - Fix 4: Removed "Personal admin" from parent responsibilities in interactive.json. Redundant with "Household management" and "Budgeting". 11 options remain
    - Fix 5 (post-batch): TimeDrains subtitle changed from "in order" to just "Pick your top {max}." since order doesn't matter
    - Fix 6 (post-batch): Readiness slider labels changed from "Not much" / "A lot" to "Not at all" / "Very"
45. Set up actual email sending for Save Results (Resend or SendGrid integration) — **deferred until post-UI/design work**
46. **Build Automated Data Update System for both tools AND usage methods (see dedicated section below) — MANDATORY before full launch**
47. ~~Batch 2: Creative class content rework~~ ✅ *(Apr 2026. Cut "The Unglamorous Work" scenario, folded into Finish Line. Reordered to 8-scenario arc: Starting Point → Messy Middle → Feedback Problem → Unfinished Projects → Time Problem → Creative Block → Finish Line → Finished Product. Responsibilities rewritten for creative process. Time Drains reworked from freelancer admin to creative-process friction. Wishlist reframed from business needs to creative wishes.)*
48. Batch 3: Tools vs. methods strategic shift — **IN PROGRESS** *(3A complete: aiToolsUsed multi-select. 3B next: methods.json + prompt rewrite. 3C: Quick Win UI update. See Alpha Feedback section.)*
49. Alpha test — send to 5-10 close friends/family, gather feedback
50. Iterate based on feedback
51. Broader launch

---

## Wireframe Feedback (For V1 Build)

Notes from wireframe review to apply during the build:

- **No em dashes anywhere in the product.** Use commas, periods, or rewrite sentences instead.
- **Action, not reflection.** Every choice should be something the user DOES, never how they FEEL. Review all 40 scenarios through this lens during build.
- **Expand the tools selection grid.** Current list is too short. Add more common apps and tools.
- **Time drains: top 5** instead of top 3.
- **Slider labels** need to be clear and natural, not forced humor ("Still prints MapQuest" doesn't land).
- **Each character class pulls from its own scenario set.** Wireframe had Professional hardcoded; build must load class-specific content from data layer.
- **Ranked selection pills** (like the time drain badges showing #1, #2, #3) are a good UI pattern to reuse.
- **Frog characters** are finalized. Five illustrated characters generated in Google Nanobanana with consistent style. See Frog Character Design section for details and asset filenames.

---

## V1 Build Feedback (First Playthrough)

Notes from first playthrough of the built app, to fix in next iteration:

**Text & Readability:**
- Subtitle and secondary text throughout the app is too small and too transparent. Increase font size and opacity.
- Text wrapping causes awkward orphans (single words on new lines). Use text-wrap: balance where possible.

**Design & Feel:**
- Landing page needs more visual design overall, feels too plain.
- Character images on landing page need square backgrounds with rounded corners, hover animations (bounce or scale).
- Character selection grid: bottom row (Parent and Creative) should be centered.
- Scenario pages all look the same. Need more visual variety per scenario to create a storybook feel, not a questionnaire.
- Each scenario page should look slightly different (decorative elements, accent colors, themed icons).
- Back button needed on all scenario and flavor screens so users can change their answer.
- Progress bar is good, keep it.

**Content:**
- Time drains and wishlist now class-specific (updated in interactive.json), but student options still need refinement. Some still don't fit.
- Flavor moments feel random and disconnected. They should flow more naturally from the previous scenario, like story beats rather than random interludes.
- Need more responsibility options for all classes.
- Consider adding more flavor moments or making existing ones feel more connected to the story.

**Functionality:**
- API key not yet configured. Results page shows error. Need to create .env.local with ANTHROPIC_API_KEY to test recommendations.
- Full frontend flow works end-to-end otherwise.

---

## Content Revision (March 2026)

All five character classes have been fully revised to feel like story-driven game experiences rather than surveys. Key changes:

### New Design Principles
- **Every class has an intro line** that drops the user into a specific, small moment (no grand statements, no narrator commentary). Examples: "Your alarm goes off. You don't remember setting it that early." (Student), "Your laptop opens. The notifications are already piling up." (Professional)
- **Every scenario prompt puts the user IN a moment**, not asking them to reflect. "You check your phone. There's a reminder you set for yourself." not "How do you handle assignments?"
- **Every choice is an action**, not a self-description. "Clear the notification and roll over." not "I procrastinate."
- **Flavor moments are placed where the story needs them**, not on a fixed schedule (after 2, 4, 6). They bridge scenes, provide breathing room, or shift time/context.
- **Time jump exposition lines** connect scenarios that skip forward in time. "Next morning." / "A few weeks in." / "Saturday morning."
- **Each class tells a complete arc**: Student = a semester, Professional = a work week, Entrepreneur = idea to first product, Parent = a day through weekend, Creative = starting a project to finishing it.

### Class Story Arcs

**Student (9 scenarios, 3 flavors):**
Intro > Assignment reminder > Lost in class > Group project > *Friend texts* > Exam prep > Exam room > *Post-exam decompression* > Paper due > Career fair > *Food truck* > Midterms week > Post-midterms spark

**Professional (8 scenarios, 4 flavors):**
Intro > Monday planning > Difficult email > Meeting aftermath > *"Got a minute?"* > New tool at work > *Lunch decision* > Idea outside your lane > Weekly report > *Step outside* > Afternoon chaos > *Friday 4:55 ping* > Close laptop Friday

**Entrepreneur (8 scenarios, 2 flavors):**
Intro > Pick an idea > Skills assessment > Time reality > Budget check > *Friend texts Saturday* > Visibility question > Learning curve > *Got it working, 11pm* > Show someone > Big picture

**Parent (8 scenarios, 3 flavors):**
Intro > Morning chaos > Quiet moment > Mental load > *Kid forgot lunch* > Scheduling nightmare > Dinner question > Homework help > *Kids in bed, one hour* > *Grocery run Saturday* > Household admin > Late night thoughts

**Creative (8 scenarios, 3 flavors):**
Intro > Start a project > Messy middle > Is it good? > *Friend asks about a show* > Unfinished projects > Busy week > *Old notebook* > Creative block > *Coffee shop* > Finish line > Finished product

### Structural Changes
- Classes can have different numbers of scenarios (Student: 9, Professional: 8, Entrepreneur: 8, Parent: 8, Creative: 8)
- Flavor moments use `afterScenario` field referencing the scenario number they follow, but placement is story-driven not formula-driven
- Scenario JSON files now include an `intro` field for the opening line
- Professional has 4 flavor moments instead of 3 (added "step outside" and kept Friday ping)
- All em dashes removed from content

### Files Updated
- `student.json` - 9 scenarios, all revised
- `professional.json` - 8 scenarios, all revised
- `entrepreneur.json` - 8 scenarios, all revised
- `parent.json` - 8 scenarios, all revised
- `creative.json` - 9 scenarios, all revised
- `flavors.json` - All flavor moments revised with new placement

### Still To Do
- Review interactive screens (responsibilities, time drains, wishlist) for content fit with new scenarios
- ~~API key configuration for results page~~ ✅ *(configured, generating results successfully)*
- More visual variety on scenario pages — **scaffolding complete, blocked on art generation** *(Apr 2026: code ready to accept class backgrounds and per-scenario frog poses; Nanobanana art generation still needed)*
- Landing page redesign — **art done, ready for code** *(Apr 2026: pond background + 6 lily pad variations generated. Next: build the page)*
- Intro screen redesign — **deferred** *(will need new assets, revisit after landing page)*
- Time jump exposition screens between scenarios — **skipped for alpha** *(Apr 2026 decision: scenario subtitles and prompts already handle scene-setting well enough. Will revisit if alpha testers flag abrupt transitions.)*
- Narrative framing for interactive screen headers — **mostly deferred** *(Apr 2026: only Almost There subtitle was changed. Other interactive screen headers like "What do you use?", "Your Day", "What Eats Your Time", "If You Could Snap Your Fingers..." are staying as-is for alpha.)*
- Micro-reaction display redesign — **deferred, coupled to scenario visual redesign** *(Apr 2026 plan: micro-reactions become thought bubbles from frog characters once scenario frog poses exist)*
- Build Automated Data Update System before launch (see dedicated section) — **mandatory, deferred until post-UI work**

---

## Automated Data Update System (MANDATORY Before Launch)

The current recommendation engine pulls tools AND usage guidance from static, curated JSON files (`tools.json`, `interactive.json`, plus tool knowledge). This works for alpha testing but is NOT acceptable for the final product. The AI landscape changes too quickly on multiple dimensions — new tools launch, features change, free tiers appear and disappear, pricing shifts, tools get discontinued, AND the techniques people use to get the most out of those tools evolve alongside them. A static list will become stale within weeks.

### The Problem
- Manual curation is impossible to maintain at quality — Trevor doesn't have time to continuously research and update recommendations.
- Hardcoded data risks recommending discontinued or outdated tools (and outdated usage advice) to real users, which destroys trust in the product.
- The core value proposition of Leap is giving users *the best* tool recommendations based on their situation, PLUS the best advice on how to actually use those tools effectively. Both "best tool" and "best way to use it" are moving targets.

### What Needs to Be Updated
This system needs to keep TWO categories of data current:

**1. Tool data** — which tools exist, what they cost, what they're best for, tool-specific caveats, ecosystem integrations, maturity status. Discontinuations and new entrants.

**2. Usage methods & techniques** — the prompts, workflows, tips, and patterns that actually get the most out of each tool. This is arguably even more volatile than the tool list itself. Examples of what counts as "method" data:
- Effective prompt formulas for specific tasks
- Tool-specific techniques (ChatGPT custom instructions, Claude's data-before-instructions trick, Gemini Workspace integration tips)
- Common beginner mistakes to warn users away from
- Myth-busting on techniques that sound good but don't actually work on modern models
- Class-specific workflow patterns (how students should use NotebookLM, how parents should use Sense, etc.)

Both categories feed into the Quick Win recommendations. A user shouldn't just get "use Tool X" — they should get "use Tool X like this, here's the one-line trick that actually makes it work."

### Why Not Live Web Search on Every Request
Live web search was considered but rejected for this stage because:
- Every session would burn significantly more API tokens (cost concern at scale).
- Slower response times (users wait longer for results).
- Consistency gets *worse*, not better, since the model pulls from even wider sources.
- Each new user doesn't need fresh research; the landscape doesn't shift daily.

### The Solution: Scheduled Background Updates
Build a scheduled job that periodically refreshes both tool data AND usage methods behind the scenes, so the static data is always current without burdening every user session.

### Requirements
- **Schedule:** Start with weekly updates for tool data. Methods data may need a separate cadence — possibly monthly, since it drifts slower than tool availability. May increase to daily at scale depending on how fast the landscape moves and how critical freshness becomes.
- **Infrastructure:** Vercel Cron Jobs (available on current Vercel plan, free tier supports this).
- **Research step:** Scheduled job makes API calls to Claude asking it to research (a) the current best AI tools for each class and (b) the most effective ways to use those tools, including prompt patterns, techniques, and common pitfalls.
- **Write step:** Results get written back to `tools.json`, `interactive.json`, and whatever data structure stores usage methods (may need a new file or a new schema on existing files).
- **Commit/deployment:** Either auto-commits updated JSON to the repo, or writes to a database/KV store that the app reads from at runtime.
- **Error handling:** Must handle API failures, malformed responses, and protect against bad data breaking the live product.
- **Review mechanism:** Ideally, updates go to a staging branch or flagged for manual review before going live, rather than directly pushing to production. Need to decide between fully automated vs. review-gated.
- **Logging:** Track what changed between updates so drift can be monitored across both tool data and methods data.
- **Fallback:** If the update fails or returns invalid data, the current data stays in place and alerts are sent.

### Open Questions (to resolve when building)
- Auto-commit to repo vs. database storage vs. JSON files served from Vercel Blob/KV?
- Fully automated updates vs. review-gated updates?
- How to handle tool discontinuations (tool removal vs. replacement)?
- Should tool data and methods data update on the same schedule, or separate cadences?
- Should methods data be stored per-tool, per-class, or both?
- How to version data so rollbacks are possible?
- Monitoring and alerting when updates fail or produce suspicious results?
- Should the system also update scenario content, or only tool and methods data?

### Implementation Timing
**Do NOT build this during alpha.** Alpha test with friends/family first using current static data. Use alpha feedback to refine the UI/design, then build this system as one of the final steps before public launch. The tool list and methods will not meaningfully drift during a short alpha testing window.

### Related Context
- Current static data is in `tools.json`, `interactive.json`, and `leap-tool-knowledge.md`
- A comprehensive April 2026 research snapshot covering both tools AND usage methods is available in `leap-ai-research-april-2026.md` — this can serve as the template for what the automated system should produce each cycle.
- Recommendation engine API temperature currently set to 0.3 for consistency
- Tool data is loaded fresh from JSON on each request (no caching beyond GameContext for session results)

---

## Landing Page Redesign (March 2026)

The landing page is being redesigned from a flat quiz-selector layout to an immersive, video-game-style character selection screen.

### Design Direction
- **Full-screen illustrated pond scene** filling the entire viewport
- **Painted/illustrated style** matching the existing frog character art (soft shading, smooth gradients, polished app mascot feel)
- **Serene and calm overall vibe**
- Five lily pads, one per character class, each with its frog character and a label
- Subtle animated water (nice-to-have, not priority)

### Hover Interactions
- **Subtle glow effect** on the lily pad when hovered
- **Character-specific idle animations** when hovered:
  - **Student:** Studying/writing, looking focused
  - **Professional:** Typing on laptop or reading documents
  - **Entrepreneur:** Head bobbing while typing, or headphones with music notes emanating
  - **Parent:** Walking in place while on phone, or taking a sip of coffee
  - **Creative:** Drawing/painting gesture or similar creative action

### Click Behavior
- Clicking a character/lily pad selects that class and proceeds to the intro screen

### Asset Status (Updated Apr 2026)
- **Pond background** — ✅ DONE *(generated in Nanobanana, "in the pond" perspective, no horizon, reeds and foliage framing edges, wide open water center with decorative lily pads in corners, painted illustrated style, soft morning light with gentle ripples)*
- **Lily pad assets** — ✅ DONE *(6 variations generated in Nanobanana, all matching pond's muted sage green painted storybook style, transparent backgrounds)*
  - Base: classic shape, straight radiating veins, notch right
  - Variation B: round no-notch, organic branching veins
  - Variation C: elongated oval, curved flowing veins, notch left
  - Variation D: kidney-shaped, sparse fading veins, notch top-right
  - Variation E: smaller rounder, clean simple veins, notch bottom
  - Variation F: notch top-left, organic branching veins (dense fine detail)
- **Canva composite** — created showing all 5 pads in quincunx layout (1 top, 2 middle, 2 bottom) over pond. Serves as layout reference for CSS positioning
- **Character-specific animation assets** — not yet created. Simple CSS hover animations on existing frog art (no new frog poses needed for landing page)
- **Hover glow effect treatment** — not yet implemented

### Implementation Approach (Decided Apr 2026)
- Keep lily pads as SEPARATE layers (not baked into background) so each pad can have independent hover animations, glow effects, and frog placement in code
- Pond background as full-bleed CSS background image
- Five absolutely positioned `<div>` or `<button>` elements, each containing one lily pad PNG as its content
- Frog PNG positioned relative to each lily pad container
- Hover effects (glow, scale, bob) applied to each pad container independently via CSS
- Class-to-pad mapping — not yet decided (which lily pad shape goes in which position)

### Remaining Before Code
- Decide class-to-pad mapping (which of the 6 variations goes in which of the 5 positions)
- Export final assets from Canva/Nanobanana (pond background PNG, 5 selected lily pad PNGs)
- Then build the landing page component

### Assets That Already Exist
- Five frog character illustrations (Student.png, Professional.png, Entrepreneur.png, Parent.png, Creative.png)
- Landing page component (`src/app/page.tsx`)
- React/Next.js structure for character selection and navigation

### Implementation Notes
- Animation logic will be React/CSS-based
- Layout moves from grid/card layout to positioned elements on a full-screen scene
- Mobile responsiveness will need special attention (lily pad positioning on small screens)

---

## Alpha Feedback (April 2026)

First external playtest feedback, from a user who went through the Creative class.

### Batch 1 — Small fixes (COMPLETED Apr 2026)
1. ~~Results error handling~~ ✅ — error no longer dumps user to start, retry in place with auto-retry
2. ~~AI familiarity slider~~ ✅ — numbers 1-5 added along track, labels simplified to "Not much" / "A lot"
3. ~~Wishlist prioritization~~ ✅ — converted to simple "Pick your top 3" multi-select (priority was never weighted in prompt)
4. ~~Parent "Personal Admin"~~ ✅ — removed from responsibilities

### Batch 2 — Creative class content rework (COMPLETED Apr 2026)
- Cut "The Unglamorous Work" scenario (redundant with Finish Line), folded editing/cleanup into Finish Line prompt
- Reordered from 9 to 8 scenarios: Starting Point → Messy Middle → Feedback Problem → Unfinished Projects → Time Problem → Creative Block → Finish Line → Finished Product
- Flavor placements verified (afterScenario 3, 5, 6 still correct)
- Responsibilities: added "Personal projects (just for fun)", removed corporate items, renamed several for creative focus
- Time Drains: replaced freelancer admin with creative-process friction (blank page, redoing sections, formatting, version management, software, technical parts, rough drafts, tool-switching, workspace cleanup, sourcing materials, backups)
- Wishlist: replaced business items with creative wishes (blank page, feedback, finishing projects, figuring out issues, inspiration, techniques, technical help, file organization, trying ideas, writing about work)

### Batch 3 — Tools vs. methods strategic shift (IN PROGRESS)

**Planning decisions (finalized Apr 2026):**
- Hard mainstream default: ChatGPT, Claude, Gemini only unless use case genuinely requires a specialist (live transcription, image generation, etc.)
- Smart tool picking: model picks best mainstream tool per Quick Win based on user's aiToolsUsed selections and task fit (Gemini for Google Workspace, Claude for coding, ChatGPT for brainstorming). If none selected, default to ChatGPT
- Quick Win format: outcome headline first, personalized "why this helps you," then "Do this in [Tool] (free tier works):" with steps and inline prompts. No redundant tool line at bottom
- AI Opportunities section stays as higher-level framing
- New file data/methods.json: task-type organized, tool-agnostic prompt patterns. Primary content source for Quick Wins
- Quick Wins count stays at 3-5

**Sub-batches:**
- ~~Batch 3A~~ ✅ — Replaced single-select aiUsage with multi-select aiToolsUsed (ChatGPT, Claude, Gemini, Copilot, Perplexity). Zero selections valid. Commit 8b51f9d, 7 files updated
- Batch 3B — **NEXT**: Create methods.json, rewrite prompt.ts for methods-first with mainstream defaults and smart tool picking
- Batch 3C — Update QuickWinCard.tsx and ResultsSummary.tsx for new format

---

## Development Environment

### Claude Desktop Code Tab (Primary — Apr 2026)
- Migrated from Claude Code (WSL) to Claude Desktop app's Code tab for parallel sessions with automatic Git worktree isolation
- Project connected: `C:\Users\trevo\leap` with worktree mode on
- `.claude/worktrees/` added to `.gitignore`
- `.worktreeinclude` lists `.env.local` so parallel sessions get the Anthropic API key
- CLAUDE.md at project root enforces no Co-Authored-By lines in commits
- Desktop Code tab also has per-project memory at `C:\Users\trevo\.claude\projects\C--Users-trevo-leap\memory\` — separate from CLAUDE.md, persists rules across sessions
- First session confirmed: worktree isolation works, commit rules hold after one initial correction, parallel branches merge cleanly

### Known Environment Issue: Node PATH
The bash shell used by the desktop Code tab does not have Node.js on its PATH by default. Node is installed at `C:\Program Files\nodejs` and npm at `C:\Users\trevo\AppData\Roaming\npm`, but the shell can't see them.
- **Fix needed:** Add the following to CLAUDE.md so future sessions know to set PATH before Node commands:
  > When running any Node, npm, or npx commands via bash, first prepend the Windows Node paths to PATH: `export PATH="$PATH:/c/Program Files/nodejs:/c/Users/trevo/AppData/Roaming/npm"`. The default bash PATH in this environment does not include the Windows Node install directory, but Node is installed and working at those paths.
- Alternative: edit `~/.bashrc` in the Git Bash profile to add the export permanently

### Dev Server
- Run dev server from a separate Windows terminal (PowerShell), NOT from Claude Desktop
- `cd C:\Users\trevo\leap` then `npm run dev`
- Restart procedure (needed after JSON changes due to Turbopack cache): Ctrl+C, then `rmdir /s /q .next` (or `rm -rf .next` in bash), then `npm run dev`

### Claude Code (WSL) — Still Available
- WSL Claude Code still works as fallback if needed
- Nothing from the migration broke the old workflow
- Git configured in WSL with gh CLI authenticated (GitHub username: Tre-AG)

---

## Domain & Hosting

- **Domain:** taketheleap.ai (purchased February 2026, Namecheap, 2-year registration)
- **Hosting:** Vercel (free tier for V1)
- **Domain Privacy:** Enabled (free via Namecheap)
- **Auto-Renew:** Enabled for domain registration

---

*This is a living document. Update as the project evolves.*
