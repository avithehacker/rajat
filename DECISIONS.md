# DECISIONS.md
## Molecule Association of Designers — Design Audit and Rationale

*Written as a design brief. Each decision is justified, not merely described.*

---

## Round 2 — Content Architecture Audit

*The visual language (cream, orange, ruled lines, Braun grid) is correct. The bottleneck is content: what appears, where it appears, and how many times it appears. These changes address structure and copy, not aesthetics.*

---

### The Five Diagnoses

**1. Content duplication.** The marquee repeated every fact in the stats row. The homepage had a curriculum summary that duplicated the course page. The about page had Rajat's portrait twice in the same scroll. The about page featured the full course spec card, which was already on the homepage. Every repeated piece of content becomes less credible on each repetition.

**2. Wrong information order on the homepage.** The previous order was: Hero → Stats → Pillars → Curriculum (detailed) → Course card + Pricing. A visitor who reached the course card had already read the full curriculum. The CTA "See Full Curriculum" asked them to go somewhere they'd already been. The homepage was doing the course page's job, and doing it poorly.

**3. Negative framing.** "Most courses teach you what design looks like. Molecule teaches you how design works" is a we-vs-them contrast claim. "Not theory abstracted from practice. Not practice without structure" makes two negative statements before making a single positive one. "Not concepts. Not certificates of attendance" is the same pattern on the course page. Rams: good design is honest — state what a thing IS, not what it avoids being.

**4. Dead content.** "Seats Remaining: 100" is Base (70) + Pro (30) = 100. Any visitor can do this arithmetic. Displaying the sum as if it were information adds a cell to the price row without adding knowledge. "Newsletter: Coming soon" is a column in the footer promising a product that doesn't exist. These are not honest — they pad the page rather than inform it.

**5. Orphaned elements.** "See the Course" appeared as a link above the h1 on the about page. Its position (before the headline, inside the copy column) suggested it was either a breadcrumb or a label. It was neither — it was just a CTA stranded above the content hierarchy.

---

### The Changes, Each with a Reason

**Homepage: Hero lede rewritten.**
*Was:* "Most courses teach you what design looks like. Molecule teaches you how design works. Live cohorts, systems-first curriculum, led by a practitioner with 13 years in the field."
*Became:* "Five weeks. Twelve live sessions with Rajat Patel. You build a complete design system in Figma — tokens, components, states, documentation — the way real product teams do it."
*Why this is better:* The new lede tells the visitor exactly what they will do, for how long, and with whom. It answers the purchase question — "what will I get?" — before asking for a click. Three sentences: scope, format, deliverable. The old lede contrasted Molecule against unnamed competitors and then listed feature labels without describing any specific experience.

**Homepage: Marquee removed entirely.**
*Was:* A scrolling strip of facts and labels on a cream background.
*Why removed:* Every fact in the marquee (India's First 360° Design Ecosystem, 500+ Cohort Students, 2000+ Designers Taught, 13 Years of Real Practice) appears in the stats row directly below it. The marquee scrolls too fast to read casually — it must be watched, not scanned. It added animation without adding information. It was decoration calling itself content.

**Homepage: Curriculum summary section removed.**
*Was:* Section 02 — a three-stage learn-list (Foundation / Systems / Career) with bullet-point detail.
*Why removed:* The course page already has a five-week curriculum with full detail. The homepage summary was a weaker, partial version of the same content. A visitor who read the homepage summary then clicked to the course page would read curriculum twice — worse, the homepage version would have reduced their motivation to read the course page version. The homepage's job is to compel. The course page's job is to inform. Mixing them served neither.

**Homepage: Section index renumbered (03 → 02).**
*Was:* Section 03 — Course.
*Became:* Section 02 — Course.
*Why:* After removing the curriculum section, the course feature is now the second section after the pillars. The number reflects the actual position. Numbering is navigation — it should be accurate.

**Homepage: Pillars section intro rewritten.**
*Was:* "The 360° ecosystem: three things that work together so you don't finish a course and forget everything the week after."
*Became:* "Three things that reinforce each other. Knowledge from live sessions. Practice through weekly builds. Community that stays useful after the cohort ends."
*Why:* The old line ended on a negative outcome (forgetting everything). The new line names each element directly — Knowledge, Practice, Community — previewing the three cards below. It explains rather than warns.

**Homepage: "Seats Remaining: 100" cell removed from price tease.**
*Why:* This number is the sum of 70 + 30. It does not tell the visitor how many seats are left — it tells them how many existed. At 100% occupancy or 0% occupancy, the number would read "100" either way. It is a false signal of scarcity or a mathematical footnote. Neither serves the visitor.

**Homepage: Price tease CTA changed from "Compare Plans" to "Enrol Now" with direct anchor.**
*Was:* "Compare Plans" → interface-anatomy.html
*Became:* "Enrol Now" → interface-anatomy.html#plans
*Why:* A visitor looking at two prices with seat counts has already compared the plans — the tease row did that for them. "Compare Plans" sends them somewhere to do something they've just done. "Enrol Now" is honest about what the next action is, and the anchor link drops them directly onto the pricing section of the course page, cutting one scroll.

**About: "See the Course" link removed.**
*Was:* A link at the top of the about-hero copy column, above the h1.
*Why removed:* The element had no defined role. It was not a breadcrumb (the nav handles that), not a label (labels don't link), and not a CTA (its position above the h1 made it visually subordinate to itself). It was an orphan. The about page ends with a dedicated course CTA — that is the correct place for the conversion prompt.

**About: Hero sub-copy rewritten.**
*Was:* "Not theory abstracted from practice. Not practice without structure. The real thing — how design decisions get made inside teams, under constraints, with trade-offs."
*Became:* "How design decisions get made inside real teams, under constraints, with trade-offs. That is what the Molecule curriculum is built from."
*Why:* Two negatives ("Not theory... Not practice...") before a single positive is the structure of a disclaimer, not a claim. The new copy goes directly to the specific thing Molecule provides: the mechanism of real design decisions. Same information, active frame.

**About: Duplicate portrait removed.**
*Was:* The about page had Rajat's portrait in the about-hero (full-height, left column) and again in the bio section (second portrait, same image, same page).
*Why removed:* One portrait establishes presence. Two portraits of the same person on the same page establish nothing additional — they just repeat. The about-hero portrait is the correct place: it is large, it is first, it has the name plate. The bio section becomes a text section, which is what it actually is.

**About: Bio restructured as single-column text.**
*Was:* Two-column grid with portrait left, text right.
*Became:* Full-width text section with name, social links, and three paragraphs. Max-width 680px on paragraph text for readable line length.
*Why:* The portrait serves its function in the hero. The bio section is purely informational — it is three paragraphs about Rajat's background. Putting a second portrait next to three paragraphs of text about the same person does not reinforce the text; it repeats the image. Text alone is sufficient here, and the absence of the portrait makes the text the focus.

**About: Course CTA simplified from full spec card to strip.**
*Was:* A full `.course-feature` card with course image, six spec-rows (Type, Course, Description, Format, Base price, Pro price), and a CTA button.
*Why changed:* The full spec card appears on the homepage. This was the third occurrence of the same block (homepage → about page → course page, where the course page is the canonical source). On the about page, a visitor has already seen the homepage — showing the course card again in identical form communicates nothing new. The strip (course name + one line description + one CTA) gives them a path forward without repeating information they've already received.

**Course page: Deliverables sub-copy rewritten.**
*Was:* "Four concrete deliverables. Not concepts. Not certificates of attendance. Things you can open in Figma, put in a portfolio, and explain in an interview."
*Became:* "Four things you will have when the cohort ends. Open in Figma, present in a portfolio, explain in an interview."
*Why:* "Not concepts. Not certificates of attendance." is, again, a negative frame. It also implicitly says "other courses give you these bad things" — an unverifiable claim about competitors. The new copy simply states what you will have and what you can do with it.

**Course page: Plans section gets id="plans".**
*Why:* The homepage price tease CTA now links directly to interface-anatomy.html#plans. Without the anchor, the link drops the visitor at the top of the course page and asks them to scroll to find pricing they already saw. The anchor is infrastructure for the link — it makes the link honest.

**Course page: Pro plan label changed.**
*Was:* "30 Seats Only"
*Became:* "Recommended · 30 Seats"
*Why:* Two equal-weight plan cards with no hierarchy signal leave the decision entirely open — which is often the same as leaving it unmade. One word ("Recommended") gives the visitor a starting point. It does not coerce — it orients. Combined with the dark card treatment (which already signals premium), the label makes the recommendation explicit rather than implicit.

**Footer: Newsletter column removed across all three pages.**
*Was:* A footer column labeled "Newsletter" with the text "Coming soon."
*Why removed:* "Coming soon" is not content — it is a placeholder. It occupies a column in the footer grid to signal that something will eventually exist there. Rams: good design is honest. A column promising something that does not yet exist is not honest. When the newsletter exists, the column can be added. Until then, its presence is padding.

---

### What Was Not Changed

The visual language remains untouched: cream background, #e55000 orange for function only, Darker Grotesque 800 display type, Geist body, no shadows, no rounded corners, ruled borders as structure. These decisions were correct in Round 1 and remain correct. The problem was never how the design looked — it was what it was saying, in what order, and how many times.

---

*"Good design makes a product understandable." — Dieter Rams, Principle 3*
*Every content decision above is an application of this principle: remove what obscures, clarify what remains.*

---

## 1. The Single Organizing Principle

**Content IS the interface.**

Every visual decision in this redesign serves the information, not the other way around. Ruled lines replace decorative borders. A cream ground replaces background fills. One orange accent replaces gradients and colour variety. The type scale is controlled — never monumental — because the content itself should feel significant, not the type size.

Rams: "Good design makes a product understandable." If you must explain a design decision by appealing to aesthetics, it is not a good decision.

---

## 2. Content Audit Results

### Homepage

| Section | What was wrong |
|---|---|
| Hero headline | "Save months of trial and error" — describes avoidance, not the product. Negative frame. |
| Skills marquee | Listed discipline names (UI Design, UX Design) that add nothing. Anyone could claim them. |
| Fourth stat | "24 Recognitions Received" — vague, unverifiable, low specificity. |
| Feature pillars | "Live Cohorts / Systems First / Career Proof Output" — marketing labels, not plain descriptions. |
| Project cards | Six equal-weight cards with decorative placeholder visuals. Too many. No hierarchy. |
| Pricing | Hidden entirely on a separate page. Creates unnecessary friction for a purchasing decision. |

### About page

| Section | What was wrong |
|---|---|
| Scrolling banner | "Learn UX from someone who's done the work" — assertion without proof. The facts prove it. The banner was decoration. |
| Hero headline | "10+ years building products, systems, and teams" — good specificity on years, but generic otherwise. Could describe many people. |
| Three articles | Overlapping territory. "Why people learn from me" and "Teaching is core to my work" both covered the same ground. Combined, they were verbose. |

### Course page

| Section | What was wrong |
|---|---|
| Deliverables | Not present. Users saw the process (curriculum) but not the outcome. |
| Orbit animation | Used on the homepage hero where it competed with the portrait. Decorative without function in that context. |

---

## 3. The Ten Changes

**1. Hero headline rewritten.**
*Was:* "Save months of trial and error"
*Became:* "Design education built on real practice."
*Principle:* Good design is honest. State the function. Do not lead with what you avoid — lead with what you are.

**2. Skills marquee replaced with an info strip.**
*Was:* Discipline names on an orange background — "UI Design · UX Design · ..."
*Became:* Factual identity claims on `var(--bg-2)` — "India's First 360° Design Ecosystem · Founded by Rajat Patel · 500+ Cohort Students · 2000+ Designers Taught"
*Principle:* Good design is honest. Content must be specific and verifiable. The orange background was decoration; the cream panel is information.

**3. Fourth stat changed.**
*Was:* "24 Recognitions Received"
*Became:* "2000+ Designers Taught"
*Principle:* Good design is thorough down to the last detail. 2000+ is documented in the existing bio. "24 recognitions" was vague and unverifiable. Specific numbers command more trust.

**4. Feature pillars renamed to plain language.**
*Was:* "Live Cohorts / Systems First / Career Proof Output"
*Became:* "Knowledge / Practice / Community"
*Principle:* Good design makes a product understandable. Plain words work harder than marketing labels. The three pillars now map directly to the "360° ecosystem" claim — they explain what 360° means.

**5. Six project cards replaced with three learning stages.**
*Was:* Six equal-weight project cards with decorative blank visuals.
*Became:* Three learning stages as a spec-table list (Foundation, Systems, Career) showing numbered weeks, a topic, and what you learn in each phase.
*Principle:* Good design is as little design as possible. Six cards were too many. Three stages show progression and remove visual redundancy. The spec-table structure is more honest — it looks like what it is: a curriculum outline.

**6. Pricing surfaced on the homepage.**
*Was:* Hidden on interface-anatomy.html with no hint on the homepage.
*Became:* A four-column price-tease row below the course feature card — Base ₹20,000 · Pro ₹25,000 · Seats · CTA.
*Principle:* Good design is honest. Hiding price creates friction and distrust. Surfacing it with context (seat counts) helps people make a faster, better-informed decision.

**7. About hero headline made specific.**
*Was:* "10+ years building products, systems, and teams"
*Became:* "A practitioner who teaches design the way it actually works."
*Principle:* Good design is honest. The new headline describes the method, not just the tenure. It tells you something specific about what you will receive.

**8. Three about articles consolidated to two.**
*Was:* "Why people learn from me" / "My experience, briefly" / "Teaching is core to my work"
*Became:* "The approach" / "The record"
*Principle:* Good design is thorough down to the last detail. Two precise articles are more useful than three overlapping ones. "The record" is a factual list. "The approach" is the reasoning. No repetition.

**9. Deliverables section added to the course page.**
*Was:* Course page opened with the hero, then went directly to curriculum.
*Became:* Deliverables section sits between the hero and the curriculum. Four concrete items: design system in Figma, portfolio-ready capstone, certificate, community access.
*Principle:* Good design makes a product understandable. Users need the outcome before the process. They decide to buy based on what they will have, then read the curriculum to understand how they get there.

**10. Orbit animation moved from homepage to course page only.**
*Was:* Orbit animation ran on the homepage hero, competing with the portrait of Rajat.
*Became:* Orbit removed from homepage entirely. Retained on the course page hero art panel, subtler opacity (0.06 border, 0.10 mark), slower rotation (40s / 65s).
*Principle:* Good design is as little design as possible. On the homepage, the portrait is the hero. The orbit was decoration competing with content. On the course page dark panel, it serves as blueprint-style art in a context without a photograph.

---

## 4. Visual Language Rationale

**One orange, used only for function.**
`#e55000` (Braun orange) appears in: active nav underline, CTA buttons, section index labels, week badges, marquee highlighted facts, article labels. It does not appear in: hero backgrounds, section fills, card backgrounds, typography (except labels). When one colour marks everything, it marks nothing. When it marks function only, it becomes a reliable signal.

**No shadows.**
Shadows imply depth and elevation — a fiction of physicality. The flat grid with ruled lines communicates structure without lying about what a screen is.

**No rounded corners.**
`border-radius: 0` on all structural elements. `border-radius: 0` on buttons (explicitly `border-radius: 0`). Square corners are consistent with the Braun industrial language and remove a decorative choice that adds nothing functional.

**No background fills on cards.**
Cards are defined by ruled borders, not by a filled background. The hover state uses `var(--bg-2)` — a slight tone shift, not a new colour. This keeps the hierarchy flat until interaction.

**Ruled lines as the only structure.**
1px borders at `var(--line-2)` (22% opacity, warm near-black) divide columns, rows, and sections. The grid is visible but not aggressive. It communicates organization the way a product spec sheet does.

---

## 5. What Was Removed and Why

| Removed | Reason |
|---|---|
| Skills marquee (orange background) | Orange background was decoration, not information. Replaced with factual info strip on `var(--bg-2)`. |
| "24 Recognitions Received" | Unspecified and unverifiable. "2000+ Designers Taught" is documented and specific. |
| Scrolling "Learn UX from someone who's done the work" banner | Pure assertion with no supporting fact. The bio and the record article provide the proof. The assertion itself added nothing. |
| Six project cards | Visual repetition. Six equal cards with blank placeholder visuals communicated nothing. Three learning stages with actual curriculum content communicate the structure of the course. |
| Orbit animation on homepage | Competed with the portrait. Decorative without function in that context. The portrait IS the hero on the homepage. The orbit was visual noise. |
| "Career Proof Output" as a pillar label | Marketing language. Replaced with "Community" — the actual third element of the 360° ecosystem claim. |

---

## 6. Information Hierarchy Decisions

**Why pricing appears on the homepage:**
A prospective student needs to know: what is this, who teaches it, what will I learn, and what does it cost. All four of those are now answered on the homepage. Sending someone to a separate page to discover the price creates friction that has no benefit to the seller or the buyer. The price-tease row surfaces numbers without requiring navigation.

**Why deliverables appear before the curriculum:**
People decide to buy based on outcomes, not on processes. "After 5 weeks you will have a complete design system in Figma" is a purchase reason. "Week 3: Strategy, Audits and Style Guides" is an execution detail. The order of the content now matches the order of the decision.

**Why stats come after the claim:**
The hero headline makes a claim ("design education built on real practice"). The info strip contextualizes it (India's first, founded by, 500+ students). The stats then measure it (13 years, 500 cohort students, 1200 sessions, 2000+ taught). Each section substantiates the one before it. This is the order in which evidence should follow assertion.

**Why three learning stages, not five week rows, on the homepage:**
The homepage is not the course page. Its job is to communicate structure and arc, not detail. Three stages (Foundation, Systems, Career) communicate the progression. The course page then shows the five individual weeks. Homepage communicates concept; course page communicates specifics.

---

## 7. Typography Decisions

**Why not massive type:**
Large type is easy. It fills space without contributing information. The type scale here is controlled: h1 maxes at 96px, h2 at 64px, h3 at 26px. The content earns its size by what it says, not by how large it is rendered.

**Why uppercase labels:**
Uppercase 10px labels (`.f-label`) serve as metadata — they categorize and index content without competing with the content itself. Like Braun product markings, they identify without decorating.

**Why letter-spacing:**
Letter-spacing is applied to uppercase labels and navigation (0.08–0.18em range) because uppercase letterforms at small sizes need optical relief to remain legible. It is not applied to display type (where it would reduce legibility) or body text. Every instance of letter-spacing has a functional reason.

**Why Darker Grotesque 800 for display and Geist for body:**
Darker Grotesque at weight 800 has the tight tracking and geometric clarity of Braun's Akzidenz-derived wordmarks. Geist is a system-neutral grotesque that reads clearly at small sizes without personality that would compete. The two typefaces work together because they share the same functional neutrality.

---

## 8. Performance

**Lazy loading:**
All images that appear below the fold carry `loading="lazy"`. Hero images do not — they are critical path. Portrait in the bio section is explicitly lazy.

**No external dependencies:**
All fonts are served from `/assets/fonts/` as TTF files with `font-display: swap`. No Google Fonts, no CDN dependencies, no external scripts.

**Single IntersectionObserver instance:**
The scroll reveal and counter animation share a single `io` instance in `script.js`. One observer observing all relevant elements is cheaper than one per element.

**CSS animations over JS:**
The info strip drift animation, orbit rotation, theme-toggle thumb transition, and nav active underline are all pure CSS. JS handles only: theme toggle (colour wipe), mobile nav, and counter animation. Everything else is CSS.

**prefers-reduced-motion:**
Scroll reveal animations are wrapped in `@media (prefers-reduced-motion: no-preference)`. Users who have set this preference in their OS receive no animation — content is immediately visible at full opacity.

---

*Molecule Association of Designers. Founded by Rajat Patel.*
*"Good design is honest." — Dieter Rams, Principle 6*
