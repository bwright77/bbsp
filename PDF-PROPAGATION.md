# PDF Impact Report — Propagation Pass

**Handoff document · 2026-07-07**
Source of truth: the live site (`index.html` @ commit `7b0d06a`, deployed to main).
Target: the BBSP Impact Report PDF (built in Claude Design) and, secondarily, the master copy Google Doc (`1PhRwd8VKVMrHe5S53uvvJzzKHJLpSd4jgpUy_Etwcgc`, "PDF Copy" tab), which is now substantially stale.

**How to use this:** work section by section against the PDF Copy tab's numbering (01–13). Every `>> COPY NEEDED` flag in that tab is now resolved — the resolution is in this document. Where exact copy is given below, it is verbatim from the live site and should be used as written.

**Recommended workflow:** export the Claude Design page source (HTML/CSS/assets + print settings) into this repo per the earlier discussion, so future passes are text edits rather than re-authoring. Until then, this doc is the complete change list.

---

## 0. Canonical numbers (apply everywhere they appear)

These supersede all figures in the PDF Copy tab. Rulings by Benjamin/Tangier, cross-checked against the mini-grant roster sheet (`BBSP_MiniGrants_Roster_and_Impact`).

| Figure | Correct value | PDF tab currently says |
|---|---|---|
| Cities / states (program-wide) | **59 cities · 31 states** | 49 cities · 31 states (cover, sidebar, map strapline, deck) |
| Total grants | 125 | 125 ✓ |
| Dollars deployed | **$2.6M+** (keep the plus) | $2.6M+ ✓ |
| Mini + Living Lab breakdown | **79 mini + 9 Living Lab** | "79 + 7" |
| Living Labs program | **9 grants · $200,000 each · 2 cohorts (2021–23, 2024–26) · 8 cities, Philadelphia twice** | not stated |
| Mini grants program | **80 grants · ~$793,889 (say "nearly $800,000") · 8 annual rounds (2019–2026) · 58 communities · 31 states · awards $5,000–$21,500** | not stated |
| Fellows | **43 Transportation Justice Fellows graduated** ("graduated," not "developed") | "43 (NACTO)" |
| Roundtables | **13 Equity in SMM Roundtable gatherings** | "13 Roundtable sessions" |
| Grantee impact reports | **4 Grantee Impact Reports published** (stat grid) — archive card stays "5 Grantee Impact Stories (Living Lab)"; both intentional, do not reconcile | "5 Grantee case studies" |
| New-rider stat (G·13) | **4,000+ new people rode shared bikes and scooters at outreach events** | "100+ New riders in a single 6-month period" |
| Healthcare savings | $36M+ annual U.S. | ✓ (but see §5 for the citation) |
| Honolulu mini grant | **$13,500 · Spring 2023** | 2022 |
| Do-not-reconcile note | 125 total vs. 79+9 breakdown remain intentionally separate; a third grant category is deliberately not enumerated | (note exists — keep) |

City-count conventions, for anyone auditing: 59 = granular named places, all grant types (published figure, used everywhere); 49 = metro-folded (do not use); 58 = mini-grant communities after the 2026 cohort (13 grants) added Cleveland, Youngstown, Salt Lake City, San Diego, San Rafael.

---

## 1. Cover (PDF §01)

- Kicker "49 cities · Philadelphia to Honolulu" → **"59 cities · Philadelphia to Honolulu"**.
- Deck: "125 grants and $2.6M+ deployed across **59** cities in 31 states — and an industry where equity programming moved from a footnote to the norm."
- Footer partner treatment: see §12 (funder is now **JPB Foundation**; Freedom Together logo removed from partner lockups).
- Photo caption "POGOH community ride · Pittsburgh, PA" — fine, but consider the new POGOH photo (see photo manifest, §13).

## 2. About / Hero (PDF §02)

Replace the body paragraph with the site's two-paragraph lead:

> The Better Bike Share Partnership launched in 2014 as a one-of-a-kind collaborative between the City of Philadelphia, PeopleForBikes, and NACTO to advance equity in shared micromobility. Specifically, for over a decade, BBSP successfully removed barriers to access and ridership for communities of color, increased diversity in the shared micromobility industry and helped transform the way bike and scooter share programs design and implement their systems.
>
> The legacy of BBSP is not just in its programs, but in the network of leaders and practitioners it strengthened across the country. BBSP created a collaborative community where cities, nonprofits, operators, and advocates could share ideas, learn from one another, and improve how shared mobility systems serve their communities. BBSP also developed and supported a new generation of transportation leaders from a wide range of backgrounds and experiences through initiatives like the Transportation Justice Fellowship.

Sidebar stats: apply §0 numbers (59 cities, 43 fellows graduated, etc.).

## 3. Where it started (PDF §03)

- First body line: "BBSP knew there was a gap in who was being served by bike share when the first systems launched." (drop "took off around 2008 and 2010").
- Other three paragraphs unchanged; the "Philadelphia used early funding…" paragraph is now EMPHASIZED on the site (semibold, with the closing sentence "That blueprint became the BBSP playbook." in the green accent) — treat it as the section's payoff line in print, not a footnote.
- Section label (§04 banner): "The **numbers** that say it all" (plural).

## 4. Impact by the numbers (PDF §05)

Rebuild the stat grid from §0. Full current grid, in order:

1. $2.6M+ — Awarded to projects increasing SMM access in communities of color
2. 125 — Total grants awarded since BBSP's inception in 2014
3. 79 mini + 9 Living Lab — Mini & Living Lab grants awarded · cumulative since 2014
4. 59 — Cities reached across the U.S.
5. 31 — States with active BBSP work
6. 43 — Transportation Justice Fellows graduated
7. 500+ — Stories published over 10 years
8. 16 — Best-practice guides
9. 13 — Equity in SMM Roundtable gatherings
10. 3 — National research projects (Drexel · PSU · CSU)
11. $100K+ — Contributed to equity content and increasing diversity at national conferences · NABSA & NACTO Designing Cities
12. 4 — Grantee Impact Reports published
13. 4,000+ — New people who rode shared bikes and scooters during outreach events
14. $36M+ — Annual U.S. healthcare savings (see §5 citation)

Bublr pull quote unchanged; attribution is "Bublr Access Pass user · Milwaukee, WI" — **no "1 of 49 cities"**.

## 5. The $36M citation (closes PDF's `>> COPY NEEDED` on the source link)

Attribution line (corner marker): **G·14 · SOURCE: COLORADO STATE UNIVERSITY**, linked to the DOI.
Full citation (use verbatim; Clockston is first author; volume 202, not "July 2021"):

> Clockston, R.L.M. & Rojas-Rueda, D., Colorado State University. "Health impacts of bike-sharing systems in the U.S.," *Environmental Research* 202 (2021), 111709. doi:10.1016/j.envres.2021.111709 · via BBSP, "Bike Share is a Boon for Public Health" (Aug 2021).

DOI URL: `https://doi.org/10.1016/j.envres.2021.111709`. Do NOT add any trip-count sub-stat near this figure.

## 6. Four pillars (PDF §06)

Deck: "Each program reinforced the others. Grants funded critical outreach and education; storytelling spread what worked; peer convenings let practitioners trade ideas, present their work, and learn valuable insights; the Transportation Justice Fellowship seeded the next decade of BIPOC leaders."

- **Program 01 · Grantmaking** — full site paragraph (variety of grant programs: Challenge, Emergency Response, Mini, Living Lab; funding for outreach is hard to secure; BBSP grants grew ridership among people of color and socially vulnerable communities, provided consistent presence, unlocked other funding). Metric: $2.6M+ across 125 grants · 59 cities.
- **Program 02 · Storytelling** — site paragraph (500 stories documenting successful equity work; uplifting overlooked voices; seeding replication). The "written primarily by Odochi Akwani" sentence was dropped. Metric: 500+ stories.
- **Program 03 · Peer-to-Peer Learning Opportunities** (retitled from "Shared Micromobility Roundtable") — two site paragraphs: (a) peer gatherings/study tours, ~40-person Roundtable, NACTO Designing Cities + NABSA socials; (b) thirteen Roundtables over 10 years; final 2026 Roundtable in Tucson, 40 practitioners from 20 cities; Lane Santa Cruz + Vanessa Gallego (FUGA) dialogue. Metric: 13 gatherings · 20 cities at Tucson 2026.
- **Program 04 · Transportation Justice Fellowship (led by NACTO)** — two site paragraphs: fellowship description (8–12 fellows/year, skills-building, coaching, programming Designing Cities) + "43 fellows **graduated**…" Metric: 43 fellows.

The PDF's standalone "§07 Mini-Grants spread TO BE WRITTEN" is now covered by the reworked Mini Grants section — see §8.

## 7. Living Labs — replaces "Stories from the ground" (PDF §08)

Section reframe: **Living Labs only** ("Stories from the ground · Living Labs" / headline "The big investments."). Deck:

> Living Labs were BBSP's deepest investments — nine multi-year grants of $200,000 each, across two cohorts and eight cities (Philadelphia twice), that gave cities, transit agencies, nonprofit operators, and community organizations the time to pilot, pivot, and accelerate programs otherwise impossible. A true Living Lab, these projects tested ideas and found what really worked for their communities. We've selected four case studies — two from each cohort — that show what that time and trust made possible on the ground.

Cohort listings (print as two columns):
- **2021–23 cohort:** Indego (Philadelphia) · MoGo (Detroit) · PBOT/BIKETOWN (Portland) · Red Bike (Cincinnati) · the Northwest Center (Chicago) — link: "a compilation of their work" → `https://betterbikeshare.org/wp-content/uploads/2024/04/BBSP-Living-Labs-Report-3_7_24.pdf` (TREC/PSU, MacArthur & McNeil, 2024)
- **2024–26 cohort:** Indego (Philadelphia) · POGOH (Pittsburgh) · TUGO (Tucson) · the Los Angeles Living Lab Coalition (BikeLA, Los Angeles Walks, Walk-n-Rollers, CicLAvia, LA Metro Bike Share). Impact Reports: POGOH `https://storymaps.arcgis.com/stories/b6f6928fddb64cfa8fbcd8dbba563feb` · TUGO `https://storymaps.arcgis.com/stories/8ac2d792afd04c43be3ce8013d850234` · Indego & Los Angeles coming July 2026 (swap in links when published).

### Story 1 — Chicago, IL · Living Lab · 2021–2023 · "Bikes for Belmont Cragin."
Subtitle unchanged. Caption: "Belmont Cragin Youth Transit Ambassadors · Chicago" (not "Youth Leadership Council"). Narrative second sentence is now:
> Youth Transit Ambassadors (YTAs) ran workshops, led community rides, successfully advocated for bike lanes and bike share stations, and participated in state capitol visits to inform their electeds of the transportation needs in their neighborhood.
Stats and "detail that sticks" unchanged. Pull quote punctuation: "…mean to us. I can't wait…" (period, not comma). End with: Read the final report → TREC compilation PDF.

### Story 2 — Cincinnati, OH · Living Lab · 2021–2024 · "Red Bike GO."
**New subtitle:** "Neighborhood by neighborhood, ambassador by ambassador — building a system the community owns."
Stats: the men's-shelter stat label ends "…+ a men's shelter which was used heavily as soon as it was installed."
**Pull quote** (replaces the Doug McClintock "detail that sticks" — this story now has NO "detail that sticks"; the Elese quote is a pull quote in the same style as Marizol's in the Chicago story, cite line "— Elese Daniel · Red Bike Engagement Manager"):
> "People need a friend in the process – someone to vouch for the new thing, someone to show them how it works, how it might be most useful. We've got bikes, we'll put them out there, they'll be accessible, but the Ambassadors are the connection. They're the familiar face who shows you how to check out a bike, they help you raise your seat for a more comfortable ride, they tell you the safest route to the park. Everyone needs a bike friend."
End with: Read the final report → TREC compilation PDF.

### Story 3 — Pittsburgh, PA · Living Lab · 2024–2026 · "Advancing Equitable Outreach in Homewood." (NEW)
Subtitle: "POGOH, operated by Bike Share Pittsburgh, launched its Living Lab to address disparities in access to mobility in Homewood."
Narrative:
> Through this initiative, the POGOH Living Lab worked alongside residents, schools, and community organizations to understand the real barriers to bike share use, build trust through consistent local engagement, create pathways for new riders — especially youth and families — and expand infrastructure to better serve community needs.
Stats: **97.5%** increase in ridership over the Living Lab grant period · **277%** increase in station use in Homewood · **15%** increase in "Mobility Justice" memberships · **5,847** people reached directly by ambassadors (source: BBSP story, Mar 2025 — 85 events in 2024).
Detail that sticks (two paragraphs):
> POGOH's Living Lab centered on a holistic, community-driven approach — pairing education, events, and partnerships to reduce barriers and build long-term engagement in Homewood. Through direct engagement led by POGOH outreach staff and community ambassadors, new station locations were identified — all within Homewood or a half-mile radius — strengthening connectivity and making the system more accessible for daily use. Expansion planning wasn't just about adding stations, but about placing them where they could have the greatest impact.
>
> As a result, ridership to and from bike share stations in Homewood increased by 277% during the Living Lab grant period.
Photo: POGOH neighborhood group ride (see manifest). End with: Read the final report → POGOH StoryMap.

### Story 4 — Tucson, AZ · Living Lab · 2024–2026 · "TUGO Para Nuestros Barrios." (NEW)
Subtitle: "Bike share planned by the neighborhoods that were left out."
Narrative:
> TUGO Bike Share used its Living Lab grant to reallocate existing stations in Tucson's south and west sides through community-led planning — residents shaping where stations go and what happens around them, not the other way around.
Stats: **5** stations relocated to westside barrios — Barrio Hollywood, Santiago Hills, Barrio El Rio, Silvercroft, and Brichta — guided by the Tugo Equity Priority Index · **23** community events and rides — block parties, barrio walks, and twice-monthly Mobility Rituals · **70+** first-time riders introduced to the system through Living Lab events · **64%** increase in "Tugo For All" equity memberships.
Detail that sticks:
> Engagement here wasn't transactional — it was Community Mobility Rituals: barrio walks, block parties, and the monthly Bicicleteada del Sur. And when intensified immigration enforcement brought fear to the barrios, the team adapted in real time — protecting privacy, prioritizing emotional safety, and proving that equitable mobility is built on trust as much as infrastructure.
Photo: TUGO community ride (see manifest). End with: Read the final report → TUGO StoryMap.

**The Honolulu "Everybody Rides" story moves out of this section** — it leads the Mini Grants section (§8).

## 8. Mini Grants — replaces "From the archive · the ripple" (PDF §09)

Label: "Mini Grants · 2019–2026". Headline: **"80 grants. 53 communities."** → now **"80 grants. 58 COMMUNITIES."** (58 after the 2026 cohort). Deck:

> Mini grants put anywhere from $5,000 to $21,500 of hands-on, in-person community engagement exactly where it was needed — and grew ridership in bike and scooter share everywhere they landed. Eight annual rounds. Nearly $800,000. Thirty-one states.

Nine story cards (print the URL under each as the PDF ripple section did). **Guadalajara is removed** (moves to International Legacy). Honolulu leads:

1. **Honolulu, HI — Everybody Rides** ($13,500 · Spring 2023): "A $13,500 mini grant let Bike Share Hawaii completely revamp their low-income access program in four months — 500+ people engaged across 7 neighborhoods, with a statewide Transportation Equity Learning Series invitation as a direct outcome. A year of work, done in a season." → betterbikeshare.org/2023/09/08/increasing-access-to-bike-share-in-honolulu/
2. **Indianapolis, IN — IndyRidesFree**: "Mini grants in 2019 and 2020 funded Pacers Bikeshare youth programs through the Indianapolis Cultural Trail. Today Pacers Bikeshare is fully free: in Jan 2026 — cold and snowy — it logged 6,000+ trips in a single month; it had taken five Januaries (2019–23) to reach that total combined." → /2026/03/19/two-years-of-free-bikeshare-in-indianapolis/
3. **Omaha, NE — The North Omaha Trail**: "Two mini grants (2019–20) backed Heartland Bike Share's outreach and community art bikes in the heart of Omaha's Black community — birthplace of Malcolm X. A collaborative trail now connects this historically divested neighborhood to multimodal transit, centering culture in the design." → /2026/02/12/north-omaha-trail-connects-communities-and-centers-its-culture/
4. **Tulsa, OK — This Machine, North Tulsa**: "Three straight mini grants (2020–22) backed This Machine's outreach: bilingual engagement in Kendall-Whittier, five new stations in historically Black North Tulsa — built on trust with churches and community groups in the centennial year of the Tulsa Race Massacre — and equity memberships." → /2021/08/18/community-ambassadors-make-a-difference/
5. **Portland, OR — suma × BIKETOWN**: "Mini-grant in 2024; by 2025 expanded to subsidize BIKETOWN rides to 5¢/min for low-income users (vs. 35¢). One full-time bike commuter calls it essential transportation — for work, school, groceries, friends." → /2026/03/12/subsidizing-essential-needs-is-essential-to-this-portland-nonprofit/
6. **Pacoima · Los Angeles, CA — Electro Bici e-bike library**: "A 2021 mini grant helped People for Mobility Justice and Pacoima Beautiful pilot a free e-bike lending library for low-income San Fernando Valley residents — 100 pedal-assist e-bikes plus safety classes, maintenance training, and Know Your Rights workshops. A 2023 mini grant later backed BikeLA's community bike-access classes." → /2021/06/22/electric-bikes-for-mobility-justice/ (BikeLA classes: /2023/10/06/increasing-bike-share-for-underrepresented-los-angelenos/)
7. **Fort Worth, TX — Trinity Metro Bikes**: "A 2019 mini grant backed Fort Worth B-Cycle's equity access work. After a new contract, Trinity Metro Bikes is now expanding across Fort Worth with the city's 'Moving a Million Plan' — connecting underserved residents to daily transportation." → /2025/11/17/trinity-metro-bikes-expands-access-with-city-and-university-partnerships/
8. **Detroit, MI — MoGo × DivDat**: "Three mini grants (2019, 2020, 2024) kept MoGo's community outreach constant. Along the way, MoGo partnered with DivDat — Detroit's bill-payment kiosk network — to let riders pay for memberships in cash. No resident loses access over how they pay." → /2022/12/16/mogo-adjusts-to-better-serve-cash-paying-customers/
9. **Passaic, NJ — EZ Ride safety education**: "Backed by a 2025 mini grant, ten miles from NYC, EZ Ride launched a program teaching residents to safely use a new free bike share — reaching communities who had never had access to this kind of transportation before." → /2025/08/28/teaching-safe-cycling-in-passaic-new-jersey/

If the PDF includes the mini-grants map: 44 plotted points (35 dots + 9 highlighted), representing 58 communities; 2026 cohort adds Cleveland, Youngstown, Salt Lake City, San Diego (San Rafael folds into the Bay Area point).

## 9. The coalition — Roundtables + Fellowship combined (PDF §10 fellowship banner)

New section between Mini Grants and International Legacy. Label: "The coalition · Roundtables + Fellowship". Headline: "The mission moves forward because the **people** do." Three paragraphs:

> BBSP's most durable output isn't a program — it's people, connected. Thirteen Roundtables over ten years brought city staff, transit agencies, nonprofit operators, and community organizers into one room: an intimate working space of 40 practitioners trading what worked, what didn't, and what to try next — reinforced by peer gatherings at NACTO's Designing Cities Conference and NABSA's annual conference.
>
> The Transportation Justice Fellowship deepened that bench. 43 early- and mid-career leaders of color — trained, coached, and connected across cohorts — are now embedded throughout the transportation field, operationalizing equity from the inside and programming the field's biggest convenings themselves.
>
> When the final Roundtable convened in Tucson in 2026, it wasn't a farewell — it was a handoff. The funding ends; the coalition doesn't. BBSP's mission carries forward in every city where these practitioners and fellows now lead.

Keep the Fielding Hong pull quote and the Fellowship cohort photo (see manifest).

## 10. International legacy (was "National legacy") (PDF §10)

- Label: **International legacy**. Headline: "Beyond local wins, an **international playbook**."
- Body paragraph 1: "…BBSP's true legacy lies in its **reach**… and how systems are designed **across North America**." (was "in the United States")
- NEW paragraph 2 (reworded 2026-07-07 for accuracy — the gender-responsive guide was created by BKT/MiBici with the collective Transeúntas, NOT by BBSP; BBSP's role was spreading the word. The earlier Hamilton, Ontario mention was removed entirely — unsourced):
> **The playbook travels.** (subsection header, accent on "travels.")
> In both directions: when Guadalajara's MiBici expanded with eight new stations sited by women riders through a gender-responsive planning guide, BBSP spread the word — putting the work in front of practitioners across North America so the next system could learn from it.
> (Guadalajara story link: /2025/05/21/in-guadalajara-womens-safety-informs-bike-share-expansion/ — this absorbs the deleted Guadalajara ripple card. NOTE: the master doc's old ripple card claimed the guide was "BBSP-developed" — that is incorrect per the story itself; do not reintroduce. Do not reintroduce Hamilton either unless Tangier supplies a source.)
- **Tangier's quote, updated final sentence:** "…Biking is better in **North America** because of the Better Bike Share Partnership."
- **Section order (final, 2026-07-07):** label + headline + lead paragraph → Waffiyyah Murray pull quote → "What we built with partners" (two-up row) → the playbook-travels paragraph framed by the MiBici photo → Tangier pull quote closes the section. Both quotes use the Living Labs pull-quote treatment (thin sidebar + subtle tint, body-size type, mono cite) with distinct sidebar colors — green for Waffiyyah, signal orange for Tangier. No display-type emphasis on either quote.
- "What we built with partners": two items only — NABSA Workforce Diversity Toolkit contributor (link: `https://nabsa.net/resources/diversity/`; muted subheading beneath the item: "Best Practices for More Diverse and Inclusive Workplaces"); $100K+ to DEIB content and increasing diversity at NABSA/NACTO conferences (the third "directly funded BIPOC participation" bullet was folded in).
- **The two `>> COPY NEEDED` incomplete sentences in PDF §10 are dead** — do not use; the Tangier quote replaced them.
- **The national-legacy stat trio (31% NABSA / +20% Indego / "norm.") has been REMOVED from the site** — drop it from the PDF as well.

## 11. Credits (PDF §11) — "With gratitude."

Section is now its own visual band (site: beige) titled "**With gratitude.**", label "Credits · The BBSP team", intro: "Not an org chart — an acknowledgment. The people whose hands shaped BBSP." (no "in its closing chapters").

Bios (all updated — use verbatim):
- **Tangier Barnes Wright** — Deputy Director, Shared Micromobility · PeopleForBikes — "Led PeopleForBikes' shared micromobility portfolio and helped steward BBSP's national strategy. Helped design and implement all BBSP program areas."
- **Odochi Akwani** — Writer & Content Manager · PeopleForBikes (second position, no "ten years") — "Led BBSP's storytelling and content work in the final years and wrote stories that became BBSP's public record — the through-line of a decade of work."
- **Waffiyyah Murray** — Indego Program Manager · City of Philadelphia — "One of the matriarchs and founding partners of BBSP, she helped design and implement many of the program's core strategies while playing a pivotal role in advancing and sharing best practices for equitable bike share. Her leadership was instrumental in ensuring that shared micromobility systems across the nation could benefit from BBSP's research, resources, and community-centered approach."
- **Cary Bearn** — Senior Manager, Multimodal Design & Programs · NACTO — unchanged.
- **Fielding Hong** — Senior Manager, Field Building · NACTO — "Built the Transportation Justice Fellowship into a durable peer network across 5 years and contributed to cultivating a national example of how to advance equity in transportation."
- **Camille Boggan** — Program Manager, Policy & Practice · NACTO — existing bio + "Led design and implementation of the BBSP Roundtables."
- **Meghan Alvarez** — Transportation Engagement Coordinator · City of Philadelphia — "Supported BBSP's nationwide grantmaking while leading novel engagement programs for Indego at the City of Philadelphia and representing our programs at conferences throughout North America."
- **Lor Song** (NEW) — Education Programs Manager · Bicycle Coalition of Greater Philadelphia — "Core organizer and manager of community outreach, educational programming, and equity-focused initiatives. Bike ride leader extraordinaire who demonstrated how to lead through inclusivity."

**Alumni acknowledgment** (closes PDF §11's `>> COPY NEEDED` decision — styled as a large pull quote):
> BBSP would also like to thank Aaron Ritz, Aminah Ricks, Carniesha Kwashie, Farrah Daniel, Kate Fillin-Yeh, Kiran Herbert, Nicole Payne, Rani Narula-Woods, Stefani Cox, Yadira Cabrera, Zoe Kircos — and everyone who helped bring the vision of BBSP to life.

Partner strip directly after: label "**A partnership of**" with logos PeopleForBikes · City of Philadelphia · NACTO · NABSA. **No Freedom Together Foundation** (declined credit here).

## 12. The archive + What's next + footer (PDF §12–13)

- Archive deck ends "Build on it!" Cards: 500+ Stories ("documenting best practices for equitable implementation of shared micromobility") · 16 Best-practice guides · 5 Grantee Impact Stories (Living Lab) · 3 National research (Drexel · PSU · CSU) · 13 Roundtable session recaps (2016–2026).
- What's next: first two paragraphs unchanged; the third is now the emphasized CTA (equal-or-greater weight than siblings): "If this work speaks to you — if you're a funder, a city, an operator, or an advocate who believes it should continue — **we'd love to hear from you.**"
- **Contact block** (closes PDF §13's `>> COPY NEEDED` recipient) — four orgs with logos:
  - PeopleForBikes — advocacy, policy, infrastructure, participation → **info@peopleforbikes.org**
  - NACTO — equitable infrastructure design and implementation → **nacto.org**
  - Indego — community engagement best practices and equitable bike share expansion → **rideindego.com/about/contact/**
  - NABSA — growing bike share in North America; the industry's membership organization → **nabsa.net/contact/**
  - (No email-capture form; the print CTA routes to these contacts.)
- Footer funding credit: "**Funded by the JPB Foundation**" (was Freedom Together Foundation — also update the cover's funder line and any metadata).

## 13. Photo manifest (all in `assets/images/` unless noted)

| Slot | File | Notes |
|---|---|---|
| Fellowship cohort (coalition section) | `fellowship-cohort.jpg` | group on stone steps · caption "Transportation Justice Fellows · NACTO Designing Cities Conference · Denver, CO" |
| Chicago story | `case-chicago-belmont-cragin.jpg` | YTAs with Divvy expansion map (from BBSP 2022 story) |
| Cincinnati story | `case-cincinnati-redbike.jpg` | Red Bike outreach tent · caption "Red Bike · Cincinnati community outreach" |
| Pittsburgh story | `case-pittsburgh-pogoh-ride.jpg` | neighborhood group ride (via Drive, July 2026) |
| Tucson story | `case-tucson-tugo-ride.jpg` | community ride on yellow TUGO bikes (from TUGO StoryMap) |
| Honolulu card | `case-honolulu-bsh.jpg` | Biki riders at Waikiki |
| Tulsa card | `ripple-tulsa-thismachine.jpg` | "Travel with Care" mural (from BBSP 2021 story) |
| LA card | `ripple-la-bikela.jpg` | BikeLA street-skills class (from BBSP 2023 story) |
| Tangier headshot | `team-tangier-wright.jpg` | updated July 2026 |
| Lor Song headshot | `team-lor-song.jpg` | new |
| Indego logo | `assets/logos/indego.png` | new (for contact block) |
| International Legacy banner | `legacy-mibici-guadalajara.jpg` | women on MiBici bikes before the Guadalajara mural (from the BBSP story) · caption "MiBici riders · Guadalajara, MX" |

**Still pending from Tangier (placeholders remain):** a better "Original BBSP team · NABSA 2019" photo (`origin-bbsp-team.jpg`) and an updated Odochi Akwani headshot (`team-odochi-akwani.jpg`).

## 14. Out of scope / open at handoff time

- **Indego & Los Angeles Living Lab impact reports** publish July 2026 — swap the "coming July 2026" text for links in §7 when live (a task chip exists to do this on the site).
- **Hamilton, Ontario** mention has no citation link yet.
- **Email Run-of-Show** (master doc third tab) remains entirely unwritten — separate effort.
- Google Doc sync: both tabs of `1PhRwd8VKVMrHe5S53uvvJzzKHJLpSd4jgpUy_Etwcgc` should be updated to match this document once the PDF pass lands, so all three surfaces agree.
