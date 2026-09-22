---
layout: layouts/report-doc.njk
title: "Independent Calculations"
description: "The arithmetic behind the Title 15 Amendment Analysis. Every derived figure in the report traces to a numbered calculation here, with inputs cited and method shown."
ogSlug: title-15-calculations
built: "14 AUG 2026"
revised: "21 SEP 2026"
parent: "/title-15-amendment-analysis/"
# no template syntax in this document; skipping njk preserves the indented
# arithmetic blocks, which njk preprocessing strips before markdown-it runs
templateEngineOverride: md
---

Every derived figure in the [Title 15 Amendment Analysis](/title-15-amendment-analysis/) traces to a
numbered calculation here. **These are this analysis's computations, not sourced facts.** Inputs are cited; method
is shown; substitute your own assumptions and see whether the conclusion survives.

**This is a working document, published as filed.** It is the arithmetic behind the report, not a
second draft of the report. Where it disagrees with itself, argues with an earlier revision, or
reaches a finding that cuts against the report's framing, that is left visible on purpose. A
calculation you can only check after it has been tidied is not one you can check.

**Revised 14 SEP 2026 after an adversarial fact-check, on 16 SEP after a second one, on 18 SEP for the 450 MW cap and the zoning-maximum truck comparison, and on 21 SEP after a final check.** Each
calculation below runs on the proposed 393.25 MW, 1,210 units, unless it says otherwise, and each
changed result is marked **UPDATED** with its date and the earlier figure stated beside it. The main changes: short and metric
tons are no longer mixed (CALC-1, CALC-2), the diesel carbon factor is EPA's (CALC-2), upstream methane,
heat and noise are rebased to the proposed scale (CALC-3, CALC-7, CALC-8), the tax arithmetic uses the
2026 approved rate (CALC-10), the Utah gas share is computed from EIA (CALC-4), and the R307-421
offset reading is corrected (CALC-5, CALC-12). **UPDATED 16 SEP:** the second check corrected the C-20 and
C-22 verdicts, the Novva table multiple (about 700×, not 1,100×), the R307-421 reading (it applies by
location), the 75% basis, the truck rate labels and the receptor distance, and added CALC-14 for figures
the report cites here that had no working. The 17 AUG edition of this appendix, last edited 18 AUG 2026, is kept unchanged at
[/title-15-amendment-analysis/2026-08-17/calculations/](/title-15-amendment-analysis/2026-08-17/calculations/).

**How to read the notation.** `C-nn` identifies an individual claim in the public record and `P-nn` a
slide in the applicant's presentation deck; both are internal identifiers used to keep each claim
traceable to where it was made. `CALC-n` numbers the calculations here. `I-n` numbers the shared
inputs below.

**Two capacity bases appear in this document, and the difference matters.** The governing figure is
the draft permit's **393.25 MW** nameplate, 1,210 units. An earlier revision computed against
**250 MW**, which is the rack-level compute load rather than the fuel-cell nameplate the permit would
authorize. CALC-2 and CALC-13 were corrected to the proposed nameplate on 15 AUG. **UPDATED 14 SEP:**
CALC-3, CALC-7 and CALC-8 are now rebased to 393.25 MW as well; the 250 MW working is kept beside
each for comparison. CALC-5, CALC-6, CALC-9, CALC-11 and CALC-12 still carry some 250 MW working, labelled as such.

**Built:** 14 AUG 2026 · **Revised 15 AUG, 14 SEP, 16 SEP, 18 SEP and 21 SEP 2026**, checked against the three governing primary
sources: the DAQ Intent to Approve `DAQE-IN163550001-26`, the Bloom ES 6.5 datasheet
`1016932-20260204`, and UMPA's FY2022 Integrated Resource Plan. **All shared inputs below are resolved and no parametric placeholders remain in the calculations the
report relies on. CALC-11, on water, remains parametric and is labelled as such.**

---

## Shared inputs

| # | Input | Value | Source |
|---|---|---|---|
| I-1 | Facility capacity | **393.25 MW nameplate, 1,210 units** | **DAQE-IN163550001-26 (S1), p. 3, governs.** 250 MW is the rack-level compute load (18 AUG minutes, p. 22) |
| I-2 | Average utilization | 75% | the applicant's stated average of its 250 MW maximum (04 AUG minutes, 18 AUG packet p. 69), applied here to the 393.25 MW nameplate as this analysis's assumption. APPLICANT ONLY. **UPDATED 16 SEP** |
| I-3 | Annual generation | **2,583,652 MWh** at 75% of the proposed 393.25 MW nameplate, this analysis's assumption (1,642,500 at 250 MW) | 393.25 × 0.75 × 8,760. **UPDATED 14 SEP** |
| I-4 | **Ordinance cap, the report's primary frame** | **450 MW per facility, 1 data-center site** | Both 21 SEP drafts, subsections 2 and 22. **UPDATED 18 SEP** |
| I-5 | Bloom module size | **325 kW net AC** | **ES 6.5 datasheet `1016932-20260204` (S3); S1 agrees.** RESOLVED |
| I-6 | Bloom electrical efficiency | **65–53% LHV net AC**, read here as begin to end of life | ES 6.5 datasheet (S3), which prints it as "cumulative electrical efficiency" and does not label the ends. RESOLVED |
| I-7 | Natural gas CO2 factor | 53.06 kg CO2/MMBtu (HHV) | EPA GHG Emission Factors Hub (2025), Table 1 |
| I-7a | Diesel CO2 factor | **10.21 kg CO2/gal** | EPA GHG Emission Factors Hub (2025), Table 2, mobile combustion. **UPDATED 14 SEP** (was an unsourced 11.08) |
| I-8 | NG LHV/HHV ratio | 0.902, a conventional value; **0.9033 implied by the ES 6.5 datasheet's own heat-rate and efficiency pair** | 0.902 is this analysis's assumption; 0.9033 is S3's 3,412 ÷ 0.65 ÷ 5,811. They differ by 0.15% |
| I-9 | Site area | **69.478641 acres = 281,170 m²** (Assessor, parcel 67:228:0003); 69.50 acres by the state parcel polygon. *25 acres is the building footprint, not the parcel* | Utah County Assessor / state parcel layer. **VERIFIED. UPDATED 21 SEP** (the polygon was given as 69.09 acres, which does not reproduce) |
| I-10 | Receptor distances | **Nearest residential lot line about 1,300 ft (396 m) from the property boundary; nearest houses about 1,500 to 1,800 ft (457 to 549 m)**; an illustrative receptor at approximately 1 mile (1,609 m) | State parcel layer, property line to lot line; state Buildings layer (Microsoft footprints) for the houses. **UPDATED 16 SEP** (was one mile only) |
| I-11 | Spanish Fork city peak load | ~90 MW | 04 AUG minutes, 18 AUG packet p. 60 (`C-05`) |
| I-11a | Spanish Fork peak, FY2021 actual | **74.10 MW** (74,095 kW cross-check) | UMPA FY2022 IRP pp. 81–82 |
| I-11b | Spanish Fork peak, FY2027 forecast | **115.76 MW** | UMPA FY2022 IRP p. 82 |
| I-12 | Spanish Fork city area | **16.21 sq mi = 41.98 km²** (2020 Gazetteer); **17.78 sq mi = 46.04 km²** (2024 Gazetteer) | US Census Bureau Gazetteer place files, Utah, land area. **UPDATED 14 SEP** (was an unconfirmed 40.4 km²); 2024 area added 16 SEP |

---

## CALC-1: Method validation against a real Utah permit

Before relying on the CO2 arithmetic below, test the method on a facility whose CO2e a regulator
has already published.

**Novva West Jordan**: 72 Jenbacher JGS 620 gas engines, 235.6 MW, permitted **997,261 tpy
CO2e** for the whole site, emergency diesel generators included (DAQE-AN160660003-24, pp. 4 and 6).

Implied intensity, assuming PTE at ~100% capacity factor. **UPDATED 14 SEP:** DAQ's 997,261 is in
short tons; converted to metric to match the prediction below:

```text
997,261 short t × 0.907185 = 904,700 metric t
904,700 t ÷ (235.6 MW × 8,760 h) = 904,700 ÷ 2,063,856 MWh = 0.438 t CO2/MWh (metric)
```

Now predict it independently. Gas reciprocating engine, HR_HHV = 3,412 ÷ η_LHV ÷ 0.902, 53.06 kg CO2/MMBtu:

```text
at 42% LHV (earlier assumption):        HR_HHV 9,006 Btu/kWh  → 0.478 t CO2/MWh
at 43.5% (JGS620, secondary listing):   HR_HHV 8,696 Btu/kWh  → 0.461 t CO2/MWh
at 45.5% (JGS620, 60 Hz, published):    HR_HHV 8,314 Btu/kWh  → 0.441 t CO2/MWh
at 45.9% (JGS620, published maximum):   HR_HHV 8,241 Btu/kWh  → 0.437 t CO2/MWh
```

**At the engine's published natural-gas efficiency, 45.5% to 45.9% (INNIO Jenbacher's J620 page), the
prediction is 0.437 to 0.441 against 0.438 permitted, within 1%; the lower 43.5% gives 0.461, within about 5%.**
The method is sound. **UPDATED 21 SEP:** 43.5% was labelled the engine's low specification, but the
manufacturer publishes no such figure for natural gas. **UPDATED 14 SEP:** earlier revisions claimed "0.478 predicted
vs. 0.483 permitted, within 1%," which compared a metric prediction with a short-ton permit figure.

> **This validation is genuine and worth distinguishing from a weaker one.** Novva's 997,261 tpy is
> a **regulator-issued permit figure**, derived independently of the arithmetic here, so agreeing with it
> to within 1 to 5% is real corroboration. **A separate check against Bloom's own datasheet is not.** That
> comparison uses the same stoichiometry and the same efficiency range as the calculation it
> validates, so close agreement is arithmetically guaranteed and proves nothing. **Where this review
> cites "agreement within 0.1%" with Bloom's datasheet, read it as an internal consistency check,
> not as independent confirmation.**

---

## CALC-2: Facility CO2, the central quantitative finding

**BASIS CORRECTED 15 AUG 2026.** Earlier revisions computed against **250 MW**, which is the
**rack-level compute load**, not the generation the fuel cells must supply. Everything below now uses
the proposed **393.25 MW** of Bloom Energy Server 6.5 capacity (see the re-correction below), and every input is printed on the datasheet
(`1016932-20260204`) rather than assumed.

### Inputs, all from the datasheet

| Datasheet line | Value |
|---|---|
| Nameplate power output (net AC) | **325 kW** per unit |
| Cumulative electrical efficiency | **65-53% (LHV net AC)** |
| Heat rate (HHV) | **5,811-7,127 Btu/kWh** |
| **CO2 @ stated efficiency** | **679-833 lbs/MWh (308-378 kg/MWh)** |
| NOx | 0.003 lbs/MWh |
| CO | 0.013 lbs/MWh |
| VOC | 0.01 lbs/MWh |
| Cumulative thermal efficiency | >36%, exhaust @ >350 °C |

**Bloom publishes the CO2 figure directly.** It is not derived here. The datasheet does not label the ends of
the efficiency range; this analysis reads 65% as begin of life and 53% as end of life, and DAQ's Intent to
Approve takes 7,127 Btu/kWh as the maximum heat rate (II.A.2).

### Internal consistency check on the datasheet itself

Bloom prints heat rate *and* CO2. They must reconcile, and they do:

```text
5,811 Btu/kWh x 53.06 kg CO2/MMBtu = 308.3 kg/MWh = 679.8 lb/MWh   (printed: 308 / 679)
7,127 Btu/kWh x 53.06 kg CO2/MMBtu = 378.2 kg/MWh = 833.7 lb/MWh   (printed: 378 / 833)
```

**Agreement to 0.1% on both ends.** Two independently printed figures reconcile through EPA's
standard natural-gas carbon factor, so the carbon number is not marketing-adjusted. It falls out of
the fuel.

**Why no fuel cell escapes this.** A solid-oxide fuel cell fed methane produces CO2 as its
**primary** carbon product:

```text
CH4 + H2O  ->  CO + 3H2      (reforming)
CO + H2O   ->  CO2 + H2      (water-gas shift)
H2 + O2-   ->  H2O + 2e-     (anode)
```

Every carbon atom entering as methane leaves as CO2, at a fixed **2.743 kg CO2 per kg CH4**. Suppressing
*combustion* eliminates thermal NOx. It does not eliminate carbon. This is why the carbon figure is a
property of the fuel rather than of the equipment, and why it is stated here rather than derived.

### Result at the proposed 393.25 MW

**BASIS RE-CORRECTED 15 AUG 2026.** Earlier revisions used a rounded **400 MW**. The governing number
is the permit's own **393.25 MW**, 1,210 units at 325 kW (`DAQE-IN163550001-26`, S1).

| Capacity factor | MWh/yr | CO2 range | **Central** |
|---|---|---|---|
| **75%** (the applicant's average for its 250 MW maximum, applied to nameplate) | 2,583,652 | 796,000 - 977,000 t | **~886,000 t** |
| 85% (a high operating case) | 2,928,140 | 902,000 - 1,107,000 t | ~1,004,000 t |
| **100%** (the permit's own basis) | **3,444,870** | 1,061,000 - **1,302,000 t** | n/a |

**Central estimate: ~886,000 metric tons CO2/yr at 75% of the 393.25 MW nameplate** (this analysis's assumption; 75% of the applicant's 250 MW maximum gives ~563,000 t).

**The permit's published 1,434,855 short TPY (Intent to Approve, p. 4) equals 1,301,679 metric tons**, which is the 100% row's
end-of-life figure. **The reconstruction closes on the agency's own number.**

*(The 400 MW working figure gave ~901,000 t.)*

### Testing "three or four diesel trucks" (`C-34`)

A Volition representative confirmed to the Planning Commission that the projected emissions equal about three to
four diesel trucks (05 AUG minutes, p. 38). A Class 8 truck at 100,000 mi/yr and 6.46 mpg (both this analysis's
assumptions; FHWA's Highway Statistics 2023, Table VM-1, gives 58,890 mi and 6.7 mpg for the average combination
truck) burns 15,480 gal x 10.21 kg CO2/gal (EPA) = **158 t/yr**.
Three to four trucks is **474-632 t**.

```text
permit basis, 1,301,679 t metric / 632 t = 2,060x
permit basis, 1,301,679 t metric / 474 t = 2,746x
at 75% central, 886,193 t / 632 t        = 1,402x
at 75% central, 886,193 t / 474 t        = 1,870x
```

**UPDATED 14 SEP:** earlier revisions used an unsourced 11.08 kg/gal, giving 171.5 t per truck and
1,292x to 2,528x. **Wrong by three orders of magnitude on total CO2.** `C-34` is FALSE on that
reading. On criteria pollutants alone, the pollutants the permit's conditions limit, the comparison can come out
small, but that basis leaves out the permit's own CO2e row, which it states and caps only through its fuel limit
(II.B.1.d). **UPDATED 16 SEP:** the applicant conceded the understatement on 18 AUG (18 AUG slides, slide 18). The
earlier conversion of criteria pollutants to CO2-equivalent used indirect warming values for which IPCC AR6 gives no
single figure (WG1 Table 7.15 covers none of NOx, SO2, CO or VOC, and Chapter 6 treats their effects as varying by
region and sector) and is withdrawn. **UPDATED 21 SEP** (this cited Box 7.3, which declines to recommend any metric).

### The framing that is fair to Volition

Per unit of compute the intensity is unchanged by the load correction, and it is good:

| Scenario | t CO2/MWh | Annual at 2,583,652 MWh (393.25 MW, 75%) |
|---|---|---|
| **Volition (ES 6.5, midpoint)** | **0.343** | **~886,000 t** |
| Novva-style gas reciprocating | **0.438** (metric; see CALC-1) | ~1,132,000 t |
| Utah grid average | **0.601** | ~1,553,000 t |

**~22% cleaner than on-site gas engines and 43% cleaner than the Utah grid, per unit of compute**, all
in metric tons, at Bloom's midpoint. **UPDATED 16 SEP:** permit against permit, 1,434,855 ÷ 393.25 = 3,649 short t/MW
against 997,261 ÷ 235.6 = 4,233, a 14% gap; at Bloom's begin of life, 30%. **UPDATED 14 SEP:** earlier revisions used Novva's 0.483, a short-ton figure beside
metric ones, and gave ~29% and ~1,248,000 t.
Both things stay true: the facility adds roughly **886,000 metric tons** of CO2 a year to Utah
County that does not exist today, **and** it is the lowest-carbon way to run that compute among what
actually gets built in Utah for on-site power. A modern combined cycle such as Lake Side, at 0.373 to 0.381 t/MWh on
gross generation, matches it at end of life (CALC-14).

> **The Utah grid figure is now VERIFIED at 0.601 t/MWh**, computed from EIA's own filed data for
> **2024**: total electric power industry CO2 of **21,120,098 metric tons** against net generation of
> **35,133,906 MWh** (EIA State Electricity Emissions workbook and 2024 Utah Electricity Profile). The earlier 0.635
> working figure was 5.6% high and is superseded.

---

## CALC-3: Upstream methane

CO2 at the stack is not the whole greenhouse footprint. **UPDATED 14 SEP: rebased to the proposed
393.25 MW at 75% load** (earlier revisions used 250 MW). Gas consumed at η = 60% (3,412 ÷ 0.60 ÷ 0.902 =
6,305 Btu/kWh HHV), at 1,036 Btu/scf (EIA, heat content of U.S. gas delivered to consumers; Utah's 1,047 would
lower every volume here by 1%), with methane at 0.01924 kg/scf and 95% of the gas (both this analysis's
assumptions):

```text
Heat input = 2,583,652 MWh × 6,305 Btu/kWh × 1,000 = 1.629e13 Btu = 16.29 million MMBtu
Volume     = 1.629e13 ÷ 1,036 Btu/scf ≈ 15.7 Bcf/yr   (14.5 to 17.8 across 65% to 53% efficiency)
CH4 mass   = 15.7e9 scf × 0.01924 kg/scf × 0.95 CH4 ≈ 287,400 t CH4 throughput
```

| Leak rate | Basis | CH4 leaked | CO2e @ GWP100 = 29.8 | CO2e @ GWP20 = 82.5 |
|---|---|---|---|---|
| 1.4% | EPA GHGI (8.1 against 13 Tg/yr in Alvarez et al., Table 1: 2.3% × 8.1 ÷ 13) | 4,024 t | **~120,000 t** | ~332,000 t |
| 2.3% | Alvarez et al. 2018, *Science* 361:186 (measurement-based) | 6,610 t | **~197,000 t** | **~545,000 t** |

GWPs are IPCC AR6 WG1 Table 7.15, fossil methane. **Total CO2e range, stack at 75% plus upstream at the matching efficiency: ~906,000 t (low stack, low leak,
100-yr) to ~1,593,000 t (high stack, high leak, 20-yr).** **UPDATED 16 SEP** (was ~916,000 to ~1,522,000 t,
which paired each stack case with upstream methane computed at 60%). *(At 250 MW the upstream figures were 76,000 and
125,000 t, and the total line read ~625,000 to ~900,000 t.)*

Note the same upstream penalty applies to the gas-engine and (partly) grid comparators in
CALC-2, so the *relative* ranking is largely unchanged. It matters for the absolute number.

---

## CALC-4: The gas load in context

```text
393.25 MW at 75%:  15.7 Bcf/yr ÷ 365 ≈ 43 MMscf/day
```

**UPDATED 14 SEP, verified against EIA.** Utah consumed **276.5 Bcf** of natural gas in 2024 (EIA,
Natural Gas Consumption by End Use, Utah). Against that:

```text
393.25 MW at 75% load:              15.7 Bcf  =  5.7% of Utah's 2024 consumption
393.25 MW, DAQ basis (100%):        19–24 Bcf =  7.0–8.6%
450 MW cap, DAQ basis:            22.1–27.1 Bcf =  8.0–9.8%
```

DAQ's own fuel limit, 23,836 MMscf a year (Intent to Approve II.B.1.d), sits at the top of the 393.25 MW range.
*(Earlier revisions said "several percent" on a 250 MW, 10 Bcf basis and flagged it as unverified.)*
That is a more informative way to test `C-17` ("zero impact on existing residential or commercial gas
customers", 04 AUG Council deck, slide 05) than anything in the record. The claim may well be true for the *distribution* system, given a dedicated
lateral, while still being a significant new call on regional *supply*. Those are different
questions and the record conflates them.

---

## CALC-5: The "4–5 semi trucks" test

> **Baseline note.** The **04 AUG Council** deck and the **05 AUG Planning Commission** deck state
> different figures for the same existing truck fleet. The Council deck gives ≈2 metric tons NOx and
> ≈50 kg PM2.5; the PC deck gives 101 kg and 4.2 kg. **The Council figures govern**, they are
> internally consistent (4.76 g NOx/mi, 0.119 g PM2.5/mi across 420,000 truck-miles), while the PC
> figures imply 0.24 g NOx/mi, cleaner per mile than many passenger cars.
>
> **UPDATED 16 SEP: applicant only.** The 04 AUG Council deck is posted with the city's 04 AUG meeting notice
> (Utah Public Notice file 1471217), and the fleet figures above are on its slide 11. The 05 AUG Planning
> Commission deck is not posted, so its 101 kg and 4.2 kg figures rest on a copy the city has not published.

Tests `C-31` ("Equal to 4–5 Semi Trucks per year", `P-07`, a slide in no posted copy). The 05 AUG Planning
Commission minutes record the same claim, "approximately four to five semi-trucks operating for a year" (p. 35).

**Inputs**

```text
Facility (P-08):     5.17 short tons NOx/yr  = 4,690 kg
                     0.12 short tons PM2.5/yr =   109 kg
Deck fleet figure (CC-11): 420,000 truck-mi/yr, 65,000 gal diesel  [estimated from 36 loading bays; rates unstated]
                     2,000 kg NOx/yr  ·  50 kg PM2.5/yr
Implied fleet rates:  4.76 g NOx/mi  ·  0.119 g PM2.5/mi   [both plausible for Class 8]
```

**Test A, facility against the fleet figure the deck itself states**

```text
NOx:    4,690 ÷ 2,000 =  2.3×
PM2.5:    109 ÷    50 =  2.2×
```

**Test B, facility against 5 individual trucks**, at 100,000 mi/truck-year and the fleet's own
per-mile rates:

```text
NOx per truck-year:   4.76 g/mi × 100,000 mi = 476 kg
                      5 trucks = 2,380 kg    →  4,690 ÷ 2,380 = 1.97×
PM2.5 per truck-year: 0.119 g/mi × 100,000 mi = 11.9 kg
                      5 trucks =   59.5 kg   →    109 ÷ 59.5 = 1.83×
```

**The two pollutants agree independently.** Both tests land at roughly **2×**.

> **⚠ But Test B rests on an assumption that appears in no document.** The 100,000 mi/truck-year
> figure is an assumption of this analysis, not Volition's. **On the deck's own stated basis**, about 3,500 trucks a month on a
> 10-mile round trip, the fleet averages 120 miles per truck a year if the same 3,500 trucks each come once
> a month; 4 to 5 such trucks emit about 2.3 to 2.9 kg of NOx against the facility's 4,690 kg, and on that
> reading the claim fails by **three orders of magnitude.** **UPDATED 16 SEP** (was "a few hundred grams"
> and two orders).
>
> The two readings differ by roughly 800× and **the slide states no basis**, so neither can be called the
> intended one. **The defensible finding is the original one: the claim is unfalsifiable as
> written.** Test A, at **2.2–2.3×**, uses only the deck's own numbers. **Do not quote "off by
> about 2×" as if it were settled**, and do not read Test A as a site comparison; see the basis
> warning below.

**Verdict on `C-31`: UNFALSIFIABLE AS WRITTEN.** The slide states no basis, and the two available
readings differ by roughly 800×. (Separately, the Council and PC decks' fleet baselines differ by about 20×,
4.76 against 0.24 g NOx/mi.)

> **⚠ What Test A is not.** Test A measures the slide against the deck's own stated fleet figure.
> It is an internal-consistency test of the presentation, **not a comparison between the data center
> and this site.** The deck labels its 420,000 truck-miles as today's distribution use but footnotes them as
> an estimate from the building's 36 loading bays (slide 11): neither a count nor the fully tenanted warehouse.
> **Present truck traffic is unmeasured, and the applicant's own figures for it disagree** (about 3,500 trucks a
> month on its 04 AUG slide 11, 750 to 1,500 trips a month on its 18 AUG slides, 2,250 to 3,750 trucks a month on
> its 01 SEP slide, APPLICANT ONLY), so no baseline drawn from current operations is relevant to the decision in
> front of the Council. **UPDATED 16 SEP and 21 SEP** (this said the deck never states what the figure represents).
>
> **The comparison that matters is the proposed data center against the busiest warehouse use the
> current zoning allows by right**, and that one is computed from ITE rates against the verified
> 1,054,000 sq ft rather than taken from the applicant. **UPDATED 18 SEP:** the I-1 zone permits
> "Trucking and Warehousing" (§15.3.16.120 A.23), so a parcel carrier's sort hub needs no zoning change.
> At ITE's parcel hub rate of 4.007 truck trip ends per 1,000 sq ft a day, that is **about 4,223 truck
> trip ends a day, 128,560 a month** (CALC-14). A trip end is one pass through the driveway, so a truck
> arriving and leaving is two. The applicant projects 10 to 30 trucks a month for the data center, 20 to
> 60 trip ends (01 SEP deck). That calculation, not this one, is the truck finding the report relies on.
> (The 16 SEP revision anchored on the fulfillment use the building was built for, 4,490 to 7,380 truck
> trip ends a month, and counted observed rates; both were replaced on 18 SEP by the maximum the current zoning allows.)

**What survives as a finding:** the PC deck remains **internally** inconsistent, its own 101 kg
fleet figure cannot be reconciled with its own "4–5 semi trucks" claim two slides later. But that
is a **data error in the PC deck's baseline**, not evidence the truck claim is wildly false. Note
the direction: understating the fleet's NOx makes each truck look *cleaner*, which makes "4–5
trucks" a *smaller* quantity, which makes the equivalence *harder* to satisfy. **The error works
against Volition's own argument**, which points to a careless revision between the two meetings, not to
manipulation, and it should be reported that way.

Separately, and to Volition's credit, the **absolute** NOx figure is well supported.
Delaware DNREC's 2019 Red Lion permit (APC-2019/0031, per DNREC's hearing notice) allows 134 Bloom ES-5700 servers, 26.8 MW, 0.19
tpy of NOx, or 0.0071 tpy per MW: about **2.8 tpy at 393.25 MW**. DAQ's 5.17 tpy estimate for Volition is
about **1.9× that** like for like (0.0030 against 0.0016 lb/MWh; the Brookside permit, APC-2019/0032, 0.019 tpy at 2.6 MW, gives 1.8×),
conservative against regulator-issued permits for an earlier Bloom model. **UPDATED 16 SEP** (was 2.9×,
which compared 393.25 MW with a 250 MW scaling).

**Caveat that cuts the other way, and it is the one that matters for permitting.** The 5.17 tpy
figure is DAQ's estimate at Bloom's published rate. The CARB DG certification standard, 0.07 lb/MWh (17 CCR 94203(b)),
the ceiling Bloom's certified units must meet, at 250 MW yields **~57.5 tons/yr at a 75% capacity factor**
(65.2 at 85%; CALC-12). **UPDATED 16 SEP:** that would sit in R307-421-3's 1.2:1 offset tier (50 tpy and
up), which applies to any new NOx source located in Utah County (R307-421-2(1)); at 5.17 tpy no offset
applies, since R307-421-3 starts at 25 tpy. Earlier revisions called 50 tpy a county "trigger" and said
§15.3.24 had no potential-to-emit cap; the republished 18 AUG text's O.7 now holds facility-wide NOx
potential to emit to no more than the 100 tpy major-source threshold. The gap between 5.17 and a certified
ceiling is why that cap matters.

---

## CALC-6: The emissions comparison table audit (`C-32`)

`P-08` sets Volition's 5.17 tpy NOx against gas turbine ~5,400, recip engine ~59,700, diesel
generator 10,200–29,500, and Utah grid average ~2,600, **with no capacity, capacity factor,
or basis of equivalence stated anywhere on the slide.**

> **UPDATED 16 SEP: applicant only.** `P-08` is in no posted copy: the 04 AUG Council deck posted with the city's notice omits its slide 08, and the 05 AUG Planning Commission deck is not posted in the
> city's public record.

Test the recip-engine row against a real permit. **Novva**: 235.6 MW of gas recip engines,
permitted **51.28 tpy NOx** for the whole site (DAQE-AN160660003-24, p. 4; the engines' own limit, 0.15 lb/hr
each, p. 7, totals 47.3). Per MW: 0.218 tpy/MW. Scaled to the proposed 393.25 MW, the capacity behind Volition's own 5.17 on the
same slide: **86 tpy** (54 tpy at 250 MW).

The slide says **~59,700 tpy** for a natural gas reciprocating engine. That is
**~700× higher** than what Utah actually permits for 393.25 MW of exactly that equipment (~1,100× against
a 250 MW scaling). **UPDATED 16 SEP** (was ~1,100×).

Reverse-engineering 59,700 tpy: EPA's AP-42 factor for an uncontrolled four-stroke lean-burn gas engine at
90 to 105% load is 4.08 lb NOx/MMBtu (Section 3.2, Table 3.2-2). At 393.25 MW, the JGS620 heat rates in CALC-1
(8,241 to 8,696 Btu/kWh) and 8,760 hours, that is 57,900 to 61,100 tpy, which brackets 59,700. The slide's row
is an engine with no NOx control at full load all year; Novva's permitted engines carry SCR at 0.0152 g/bhp-hr
(p. 7). **UPDATED 21 SEP** (this assumed 2 to 3 g/bhp-hr uncontrolled, found 11,300 to 16,900 tpy, and called
59,700 unexplained).

| Row | Slide value (tpy NOx) | Real-world check | Gap |
|---|---|---|---|
| Volition, 393.25 MW proposed | 5.17 | Delaware Bloom permits → ~2.8 | conservative, ✓ |
| Gas recip engine | ~59,700 | Novva AO scaled to 393.25 MW → **86** | **~700×** |
| Gas turbine | ~5,400 | not yet checked | not yet checked |
| Diesel generator | 10,200–29,500 | pending | not yet checked |
| Utah grid average | ~2,600 | basis unstated, total statewide? per-MW? | **undefined** |

**Verdict on `C-32`: the table is not a like-for-like comparison, and its gas-engine row sits roughly
three orders of magnitude above what Utah permits for that equipment.** The "Utah grid average" row is worse than wrong:
it has no stated basis at all, so it cannot mean anything. A reader is invited to conclude
Volition is ~11,500× cleaner than a gas engine when the defensible figure, against Utah's own
permitted comparable, is roughly **10×**.

**This matters more than it might appear.** The true comparison, ~10× fewer tons than the
facility permitted in West Jordan (51.28 ÷ 5.17; about 17× per MW), ~45× fewer than the one permitted in Millard
County (Joule, `DAQE-AN162810001-26`, 230.12 ÷ 5.17 = 44.5; about 100× per MW), is a strong argument. Inflating it to 11,500× replaces a strong verifiable claim
with an indefensible one, and hands critics the easiest attack in the record.

---

## CALC-7: Thermal balance and the heat flux claim

### Total heat rejection

At steady state, nearly all fuel energy entering the site leaves as heat. The only
meaningful energy export is data transmission, which is negligible. A public commenter's argument
(`C-69`, `C-144`) is **thermodynamically correct.**

**UPDATED 14 SEP:** at the proposed 393.25 MW, across Bloom's 65% to 53% LHV efficiency:

```text
Fuel input = site heat release = 393.25 / 0.65 to 393.25 / 0.53 = 605 to 742 MW-thermal
```

The illustration earlier revisions used, and which the figures below that are marked "417" still
show for comparison, was η = 60% at 250 MW electrical:

```text
Fuel input        = 250 / 0.60      = 417 MW-thermal
Electrical output = 250 MW → becomes heat in the compute halls
Fuel cell waste   = 417 − 250       = 167 MW-thermal
TOTAL REJECTED    ≈ 417 MW-thermal
```

Heat recovery (`C-66`) does not change this total. Recovered heat driving absorption chillers
still rejects to atmosphere; it displaces electrical parasitic load, improving efficiency, but
the site energy balance is unchanged. **`C-66`, that "a substantial portion of the generated heat would therefore never reach the
atmosphere" (04 AUG minutes, 18 AUG packet p. 69), is thermodynamically incorrect as stated.** The efficiency benefit is
real; the heat does not disappear.

### The ~13 W/m² claim (`C-63`)

> **UPDATED 16 SEP: applicant only.** The ~13 W/m² and "+5°F on-site" are in no posted copy: the posted 04 AUG
> Council deck does not carry them, and the 05 AUG Planning Commission deck is not posted.

> **Note on the denominator.** The Utah County Assessor record gives **69.478 acres = 281,167 m²**,
> not the ~25 acres stated in testimony (04 AUG minutes, 18 AUG packet p. 68). The parcel is the basis used below.

Over the parcel:

```text
417e6 W ÷ 281,167 m² = 1,483 W/m²
```

That is **114× the deck's stated ~13 W/m².** *(Over the building footprint alone, about one million sq ft or
~92,900 m² (04 AUG minutes, 18 AUG packet p. 68), it would be ~4,490 W/m², or 345×; the parcel is the fairer denominator for
a site-wide flux and is used here.)* So what area produces 13?

```text
417e6 ÷ 13 = 3.2e7 m² = 32 km² ≈ 12.4 sq mi
```

Spanish Fork's area was 41.98 km² in the 2020 Census file and is 46.04 km² in the 2024 file (I-12,
**UPDATED 14 SEP** from 40.4), which yields:

```text
417e6 ÷ 41.98e6 = 9.93 W/m², the same order as the stated 13
605e6 to 742e6 ÷ 41.98e6 = 14.4 to 17.7 W/m²   at the proposed scale
605e6 to 742e6 ÷ 46.04e6 = 13.1 to 16.1 W/m²   on the 2024 area
553e6 ÷ 41.98e6 = 13.2 W/m²   the applicant's own full-load heat (18 AUG slides, APPLICANT ONLY)
```

**At the proposed scale** the parcel flux is 2,150 to 2,640 W/m², 166× to 203× the deck's 13. **UPDATED 16 SEP:**
the applicant's own 553 MW-thermal over the city's 2020 area reproduces the deck's 13 exactly, which is the
likely source of the figure.

**Conclusion: the ~13 W/m² figure is the facility's total heat divided by the entire city's
area**, then compared against a range for urban anthropogenic heat flux, 2–30 W/m² (UNVERIFIED: no
source for the range was retained).

**Verdict on `C-63`: MISLEADING BY JUXTAPOSITION, not false.** As a statement about *city-wide*
heat flux the comparison is coherent and even fair. But it is printed directly beside "Max of
+5°F on-site," inviting the reader to treat the two as the same basis. They differ by a factor
of ~114 at the 417 MW-thermal illustration and 166 to 203 at the proposed scale. **UPDATED 14 SEP and 16 SEP**
(earlier revisions said ~317, which matched neither basis). A slide that said "spread across Spanish Fork's full area this is comparable to the
heat the city already produces" would be accurate and would make the same point.

### The Lake Side comparison (`C-64`)

**UPDATED 14 SEP, re-sourced to EIA.** Earlier revisions used ~1,200 MW and a deck-cited heat rate of
7,146 Btu/kWh, giving 1,315 MW-thermal. Lake Side Power Plant (EIA plant 56237) is **1,246.5 MW
nameplate** (EIA-860M, JUN 2026). From EIA-923 fuel and gross generation:

```text
2025: 43,726,489 MMBtu ÷ 6,226,665 MWh → 7,022 Btu/kWh → η 48.6%
2024: 45,133,093 MMBtu ÷ 6,286,570 MWh → 7,179 Btu/kWh → η 47.5%
Rejected at full nameplate = 1,246.5 × (1/η − 1) = 1,319 to 1,376 MW-thermal
```

Lake Side exports its electricity, so its local heat is fuel minus generation. The data center
consumes its own, so all of its fuel energy ends as heat on the site. Like for like:

```text
417 MW-th illustration  ÷ 1,319–1,376 = 30–32%
605–742 MW-th proposed  ÷ 1,319–1,376 = 44–56%
```

**The claim that the facility's heat is less than half of Lake Side's holds at the 250 MW rack load; at the
proposed 393.25 MW it holds at begin of life (44 to 46%) and fails at end of life (54 to 56%).** **UPDATED 16 SEP.**
EIA's fuel figures are higher heating value and the facility's lower heating value, which understates the facility
by about 11%. On EIA's basis, from the datasheet's HHV heat rates, the facility releases 670 to 821 MW-thermal: 49 to
51% of Lake Side at begin of life, about half, and 60 to 62% at end of life. **UPDATED 21 SEP** (was "about 10%",
with no figures).
Credit where due: this is the one slide in the deck that discloses its own methodological limitation.

### On-site temperature rise (`C-62`, `C-65`)

Air-mass energy balance, heat into a plume crossing a 1,000 m width:

```text
ΔT = Q / (ρ · V · A · cp),  ρ ≈ 1.0 kg/m³ at ~4,600 ft, cp = 1,005 J/kg·K
```

| Wind speed | Mixing depth | ΔT at 417 MW-th (illustration) | **ΔT at 605–742 MW-th (proposed)** |
|---|---|---|---|
| 13.4 m/s (30 mph) | 50 m | 0.6 K = 1.1°F | **1.6–2.0°F** |
| 5 m/s | 50 m | 1.7 K = 3.0°F | **4.3–5.3°F** |
| 2 m/s | 50 m | 4.1 K = 7.5°F | **10.8–13.3°F**, but see note |
| 0.5 m/s | 50 m | 16.6 K = 30°F, but see note | see note |

At near-calm the uniform-mixing model breaks down: a buoyant source of this size generates strong
vertical plume rise, so heat goes up rather than accumulating laterally.

**UPDATED 14 SEP.** Earlier revisions printed only the 417 MW-thermal column and called the
applicant's "+5°F max on-site" (`C-62`) and "<1°F beyond a quarter mile" (`C-65`) plausible; the 05 AUG Planning
Commission minutes record them as 5 to 6 degrees beside the property and under one degree about a quarter mile
away (pp. 41 to 42). On 18 AUG
the applicant revised them to up to about nine degrees on site under certain conditions and under one
degree before about half a mile (adopted minutes p. 23). At the proposed scale this model gives 4.3 to 5.3°F at 5 m/s and 10.8 to
13.3°F at 2 m/s, which brackets the revised figure. **UPDATED 16 SEP.**

**At approximately one mile the facility's thermal contribution will be far below 1°F, and not
perceptible.** The "heat plume following prevailing wind" argument is directionally
correct physics but the magnitude at this distance is negligible. Heat is not the impact
pathway to worry about at one mile. **UPDATED 16 SEP:** at the nearest houses, about a third of a mile
away, the applicant's own 18 AUG figure (under 1°F only beyond about half a mile) does not rule out a rise
of 1°F or more, and this model cannot resolve distance decay, which is the case for the heat study.

---

## CALC-8: Noise at the receptor

Tests `C-54`, `C-59`, `C-60`.

> **Source spec, confirmed.** Module rating and noise both come from the **Bloom Energy Server 6.5**
> datasheet (`1016932-20260204`): **325 kW net AC** per unit, and **"<65 dBA @ 10 ft (3 m)"** for one
> Energy Server, verbatim, measurement distance included. Volition did not invent, round, or shade it.
> **UPDATED 21 SEP:** earlier revisions put the deck's "per unit" inside the datasheet quote.

**Module count**

```text
250.00 MW ÷ 0.325 MW =   769 units   (rack-level compute load)
393.25 MW ÷ 0.325 MW = 1,210 units   (the proposed nameplate; matches S1 exactly)
450.00 MW ÷ 0.325 MW = 1,384 units   (21 SEP cap; 1,385 would be 450.125 MW, over it)
```

**The structural problem with the deck's number is unchanged.** `P-12` states "<65 dBA, noise
at 10 ft **per unit**"; slide 13 of the posted 04 AUG Council deck reads "<65 dBA" over "Noise at 10 ft per
unit." A per-unit figure says nothing about an array of **1,210** sources, and the same slide called the
property-line study "underway" (`C-55`). The number is right. The problem is a source spec presented where a
receptor prediction belongs.

Per-unit sound power, hemispherical radiation at r = 3.05 m:

**UPDATED 14 SEP: rebased from 770 units (250 MW) to the proposed 1,210.** The 770-unit figures are
kept in brackets for comparison.

```text
Lw       = 65 + 10·log10(2π · 3.05²) = 65 + 17.7  =  82.7 dBA re 1 pW
Lw_array = 82.7 + 10·log10(1,210)    = 82.7 + 30.8 = 113.5 dBA   [770 units: 111.6]
```

At an illustrative receptor, **R = 1,609 m (approximately 1 mile)**, geometric spreading only. **UPDATED
16 SEP:** the nearest houses are much closer, 457 to 549 m; CALC-14 carries them.

```text
Lp = 113.5 − 10·log10(2π · 1,609²) = 113.5 − 72.1 = 41.4 dBA   [770 units: 39.5]
```

### What the 18 AUG text's residential-boundary standard requires as a setback

The 18 AUG text's O.6 sets **55 dBA at a residential zone boundary, at any hour**, stricter than its 65 dBA
property-line limit, and the one that would govern wherever the nearest residential zoning line falls
(18 AUG packet p. 124). **UPDATED 21 SEP:** both 21 SEP drafts remove the 65 and 55 dBA limits and apply
Chapter 9.32's existing zone limits, with the most restrictive limit at a zone boundary (subsection 8). The
setbacks below use the 18 AUG figure.

Inverting the model for the setback that standard requires, spreading only, no mitigation credit:

```text
55 dBA = 113.5 − 10·log10(2π · R²)
10·log10(2π · R²) = 58.5   →   R ≈ 336 m  (≈ 1,100 ft)   [770 units: ~270 m]
```

**So roughly 340 m of separation between the fuel-cell array and the residential zone boundary is
the floor for compliance before any attenuation credit.** The parcel is **69.5 acres**, about
530 m on a side if square, so this is achievable, **but it materially constrains where the array
and the cooling plant can sit**, and no site plan showing that separation exists in the public
record.

> **⚠ The source term is the weak point of this whole calculation, and it belongs up front.**
> Inverting "<65 dBA @ 10 ft" via hemispherical radiation treats the unit as a **point source**,
> but the Bloom ES 6.5 cabinet is **29'5" long** (datasheet), so at a 10 ft measurement distance the source is
> three times longer than the distance. Finite-line integration gives **84.5 dBA** sound power and an
> ISO 3744 measurement surface gives **90.6**, against **82.7** for the point-source treatment.
> **All three are carried below; the spread between them is the uncertainty.**

```text
Finite line, L = 8.97 m, d = 3.05 m:  82.7 − 10·log10[(2d/L) · arctan(L/2d)] = 82.7 + 1.8 = 84.5 dBA
ISO 3744 box 3.05 m out from the 8.97 × 1.32 × 2.49 m cabinet:  S = 4(ab + bc + ca) ≈ 361 m²
                                      65 + 10·log10(361) = 65 + 25.6 = 90.6 dBA
```

**Array sound power**, at 1,210 units (770-unit values in brackets):

```text
Point-source inversion (as used below):  82.7 + 30.8 = 113.5 dBA   [111.6]  understates
Finite-line integration:                 84.5 + 30.8 = 115.3 dBA   [113.4]
ISO 3744 measurement surface:            90.6 + 30.8 = 121.4 dBA   [119.5]
```

Excess attenuation over 1,609 m, this analysis's engineering estimates:

| Mechanism | Adjustment |
|---|---|
| Atmospheric absorption (~500 Hz, 1.6 km) | −1 to −3 dB |
| Ground effect, soft ground | −3 to −10 dB |
| Terrain shielding (river bottoms depression, bench) | −5 to −15 dB |
| **Total** | **−9 to −28 dB** |

**Neutral-condition range at the receptor**, spanning both the source-term and attenuation
uncertainty:

```text
Lowest:  115.3 − 72.1 − 28 = 15.2 dBA   [770 units: 13.3]
Highest: 121.4 − 72.1 −  9 = 40.3 dBA   [770 units: 38.4]
```

**≈15–40 dBA**, the range the report states.

**That range is too wide to be decision-relevant, and saying so is the finding.** A 25 dB spread
covers everything from inaudible to clearly present. **This model cannot discriminate, and no
version of it should be quoted at a hearing.** Its only legitimate use is to establish that the
question is open, which is the argument for demanding the property-line study, not a substitute
for it.

Adding the two site-specific enhancers present at this receptor, winter inversion (+5 to +10 dB) and
nocturnal down-canyon flow (+3 to +8 dB), both this analysis's assumptions, raises the top of the range to
about **58 dBA** (40.3 + 10 + 8) when both coincide, against a typical rural night ambient of 30–40 dBA, also
assumed. **UPDATED 21 SEP** (was roughly 52 dBA, and 50 before 14 SEP; neither followed from adding the two
ranges).

**UPDATED 21 SEP: there is no +6 dB ceiling.** The 16 SEP revision called these enhancers wider than a +6 dB
refractive-focusing ceiling; that ceiling is withdrawn. Stable night-time conditions over terrain can raise levels
at distance by far more than 6 dB (see the report's §20 sources), so the enhancers above are not an upper bound
either. **What it does to the range:** the neutral-condition 15 to 40 dBA at one mile, and 25 to 51 dBA at the
nearest houses (CALC-14), stand; the worst case has no upper bound this model can set. On a stable night, where
terrain and refraction focus sound on a house, the level there could exceed these figures by more than the
enhancers above allow.

### The 55 dBA setback, recomputed

Inverting for the 18 AUG text's 55 dBA residential-zone-boundary standard, spreading only, no mitigation credit, at
1,210 units (770-unit values in brackets):

```text
Lw = 113.5 (point-source) →  R ≈ 336 m   [111.6 → 270 m]
Lw = 115.3 (finite line)  →  R ≈ 414 m   [113.4 → 332 m]
Lw = 121.4 (ISO 3744)     →  R ≈ 836 m   [119.5 → 670 m]
```

**The parcel is 69.5 acres, roughly 530 m on a side if square. If the residential zone boundary sits at
the parcel line, the upper case does not fit; at the nearest residential lot line, about 396 m west, it
needs the array about 440 m inside the parcel (836 − 396).** Where the residential zoning line falls decides
it, and no site plan in the public record shows it. **UPDATED 16 SEP.**
Barriers, enclosure, and ground effect can buy back 5–15 dB and would shrink these distances substantially.
Compliance may well be possible; **nobody has shown it is achievable on this parcel**.
**UPDATED 14 SEP:** the republished 18 AUG text requires a verification test within 90 days of full
operation (O.6); earlier revisions said no post-construction check was required. **UPDATED 21 SEP:** both
21 SEP drafts instead require verification testing after each phase, on a schedule set in the site plan or
development agreement, and v.2 adds independent testing every year (subsections 8 and 18).

**Sensitivity to authorized scale.** At the 21 SEP drafts' 450 MW cap (1,384 units) every figure rises
**about +0.6 dB**, 10·log10(1,384 ÷ 1,210), over the proposed 1,210 units (+2.5 dB over the 770-unit basis earlier revisions
used). **UPDATED 18 SEP.** **Scale is a second-order variable; bearing,
atmospheric condition, and the source term dominate it.**

**A measured campus, and why it cannot validate this model.** KSL measured **~70 dB** "about a block
away" from Aligned's West Jordan campus (KSL, 10 JUL 2026); ~100 m is this analysis's stand-in for "a block." The
point-source model gives 63.6 dBA at 100 m at 770 units (65.5 at 1,210). **UPDATED 16 SEP:** Aligned is a
different facility with different equipment, so the gap cannot test the Bloom source term; the
finite-line and ISO 3744 corrections above are the reason to read every figure as a lower bound.

**The answer at a receptor one mile out, stated at the confidence the evidence supports.** Rural-subdivision
night ambient runs ~30–40 dBA (this analysis's assumption) and US-6 already raises the local floor.

- **Neutral daytime conditions: most likely at or below background.**
- **The uncertainty band is wider than the effect being measured.** Anyone, including this review,
  claiming to predict the receptor level from public information is overreaching.
- **Winter inversion with nocturnal down-canyon flow: plausibly at or above night ambient, a steady
  low-level hum, and louder wherever terrain and refraction focus it** (**UPDATED 21 SEP**; earlier revisions
  said at most slightly above ambient). It is most noticeable if the cooling equipment carries tonal content.
  Fan blade-pass tones are the usual culprit and are far more noticeable than broadband noise at the same
  dBA. The proposed module count, 1,210, moves the estimate up about 2 dB from the 770-unit basis; it does
  not change the character of the answer.

**Residual uncertainties, in descending order of consequence:**

1. **The cooling plant, not the fuel cells, is the likely dominant source.** No spec for it exists
   in any public document. This model covers only the Bloom array and is therefore a floor, not a
   ceiling.
2. Real terrain, versus the flat-earth spreading assumed here, including terrain and refraction focusing (above).
3. Where the array and the cooling plant sit on the parcel (CALC-14).

*(Resolved, and no longer an uncertainty: the draft permit sets 1,210 units, 393.25 MW nameplate, 1,210 × 325 kW
net AC; 250 MW is the compute load.)*

**The property-line acoustic study is the binding document; this is a check on it, not a
substitute.** The source number is verbatim from the manufacturer, so accuracy is not the issue. The ask:
**publish the study, make the limit receptor-located rather than per-unit, and require the post-construction
verification Volition's own Justification Statement says exists** (18 AUG packet p. 131; it did not exist on
17 AUG; **UPDATED 14 SEP:** the republished 18 AUG text's O.6 requires a test within 90 days; **UPDATED 21 SEP:**
the 21 SEP drafts leave the timing to the site plan or development agreement).

---

## CALC-12: Potential to emit at the authorized nameplate

**Potential to emit is assessed at what the permit allows, not what the applicant intends to run.**
The computing load is 250 MW, but **both 21 SEP drafts authorize 450 MW per Onsite Power Generation
Facility**. **UPDATED 18 SEP.**

**Inputs**

```text
NOx rate:         0.07 lb/MWh   [CARB DG certification standard, which Bloom's certified units
                                 must meet; not the 5.17 tpy in DAQ's Intent to Approve]
Capacity factor:  0.85          [a high operating case; potential to emit at 100% and 8,760 h gives
                                 76.7, 120.6 and 138.0 tpy]
Hours:            8,760/yr
```

Sources: 17 CCR 94203(b), Table 2, for 0.07 lb/MWh; the ES 6.5 is certified under CARB Executive Order DG-058
(datasheet note 2); DAQE-IN163550001-26 for 5.17 tpy.

**Result**

```text
250.00 MW × 8,760 × 0.85 × 0.07 ÷ 2,000 =  65.15 tons/yr
393.25 MW × 8,760 × 0.85 × 0.07 ÷ 2,000 = 102.48 tons/yr   [the proposed nameplate]
450.00 MW × 8,760 × 0.85 × 0.07 ÷ 2,000 = 117.27 tons/yr   [the 21 SEP cap]
```

*(At the 75% capacity factor the applicant stated, 250 MW gives **57.5 tpy**. A potential-to-emit test runs at
100% and 8,760 hours unless an enforceable limit applies; the 85% case is a high operating case.)*
**UPDATED 16 SEP:** the 18 AUG definition admits Controlled-Emission equipment up to **0.30 lb/MWh** (18 AUG packet p. 121; neither 21 SEP draft states a NOx rate), 4.3× the
rate used here. At 0.30 and 85%, 100 tpy is crossed at about 90 MW and 450 MW reaches about 503 tpy (CALC-14).

**Thresholds crossed**

| Threshold | Value | 250 MW | 393.25 MW | 450 MW |
|---|---|---|---|---|
| R307-421-3 offset tiers (apply by location in Utah County) | 25 tpy (1:1), 50 tpy (1.2:1) | 50+ tier | 50+ tier | 50+ tier |
| **NNSR major source, Marginal ozone area** | **100 tpy** | clear | **EXCEEDED** | **EXCEEDED** |
| PSD major source | 250 tpy | clear | clear | clear |

Sources: Utah Admin. Code R307-421-2 and R307-421-3 for the offset tiers; EPA Green Book for the Southern
Wasatch Front's Marginal ozone classification. The 100 and 250 tpy figures are the Clean Air Act's major-source
sizes for nonattainment review in a Marginal area and for PSD.

**This cuts both ways.**

- **UPDATED 14 SEP.** Earlier revisions labelled 50 tpy a county offset "trigger"; R307-421-3 sets
  25 and 50 tpy offset tiers for NOx sources located in Utah County; the modeled-impact test in
  R307-421-2(2) reaches sources outside the county. At 5.17 tpy no offset applies. **UPDATED 16 SEP.**
- **This is a ceiling, not a prediction.** DAQ's estimate for Volition is **5.17 tpy**, about 23× below the
  certification standard at the same capacity and capacity factor, and that estimate is **conservative**
  against Delaware's issued Bloom permits (~2.8 tpy at 393.25 MW). **UPDATED 14 SEP** (was 11×) **and
  16 SEP** (was 12.6×, which mixed bases, and ~1.8 tpy at 250 MW). Nothing here suggests the facility will
  actually emit 117 tons.
- **But PTE is the legal test, and a zoning cap is the only durable control.** Under the 05 AUG draft, a
  facility permitted at the cap on certified-ceiling equipment at high utilization could have crossed the
  federal major-source threshold, which would trigger NNSR, offsets, and LAER. Under the 18 AUG text it
  cannot: O.7 holds facility-wide NOx potential to emit to the threshold, so a 450 MW facility at 0.30
  lb/MWh would need hour or fuel limits holding it to roughly 17% of full-output operation (100 ÷ 591.3 tpy).
  **UPDATED 18 SEP.** **UPDATED 21 SEP:** both 21 SEP drafts keep the ceiling by another route: the facility
  must hold a DAQ approval as a minor source and may not operate under a major-source permit (subsection 4).
- **UPDATED 14 SEP: the republished 18 AUG text now carries the cap.** O.7 limits facility-wide NOx
  potential to emit to no more than the nonattainment major-source threshold by federally enforceable limits in
  the DAQ approval order (18 AUG packet pp. 124–125). Earlier revisions, written against the prior posting, said no such cap
  appeared anywhere in Exhibit A.

---

## CALC-13: What the amendment authorizes, at its own stated maximum

**This is now the report's primary frame.** Both 21 SEP drafts cap generation at **"not more than 450
megawatts of nameplate generating capacity, measured per Onsite Power Generation Facility"**, with a
floor of 50 MW (subsection 2), and subsection 22 allows one **Data Center** site citywide. **UPDATED 18 SEP.**

**Method: the same one Utah DAQ used.** DAQE-IN163550001-26 computes its CO2e, CO, NOx and VOC estimates as
the manufacturer's published rate × full nameplate × 8,760 hours; at 393.25 MW that reproduces its 22.39 tpy CO,
5.17 NOx and 17.22 VOC exactly, and its 1,434,855 tpy CO2e to within 0.01% at 833 lb/MWh (its page 4). PM,
SO₂ and HAPs come from other factors. Applying that method at 450 MW is not
a worst case invented here; **it is the agency's own arithmetic at the ordinance's own number.**

```text
450 MW x 8,760 h = 3,942,000 MWh/yr per facility
```

| Quantity | One facility at 450 MW |
|---|---|
| Bloom ES 6.5 units | **1,384** (1,385 would be 450.125 MW, over the cap) |
| Array noise term, 10·log₁₀(N) | **31.4 dB** above one unit |
| **CO₂ equivalent** | **1,642,528 TPY** (1,490,076 metric t) |
| Carbon monoxide | 25.62 TPY |
| **Nitrogen oxides** | **5.91 TPY** |
| Volatile organic compounds | 19.71 TPY |
| PM10 / PM2.5 (scaled) | 0.137 each |
| Sulfur dioxide (scaled) | 0.0114 |
| Total HAPs (scaled) | 0.332 |
| **Site heat release (fuel energy, LHV)** | **692–849 MW-thermal** |
| vs heat Lake Side rejects (1,319–1,376 MW-th, EIA; CALC-7) | 50–64% |
| **Natural gas** | **22.1–27.1 Bcf/yr**, 61–74 MMscf/day |
| Water, annual | ~286,000 gal |
| Water, initial fill | ~572,000 gal |
| **Against the city's ~90 MW peak** | **5.0×** |
| Against the FY2027 forecast peak, 115.76 MW | 3.9× |

**Inputs and their sources.** Bloom ES 6.5 datasheet `1016932-20260204` for 325 kW/unit, 65–53% LHV
efficiency, 5,811–7,127 Btu/kWh HHV, 0.003 lb NOx/MWh, 0.013 lb CO/MWh, 0.01 lb VOC/MWh, 378 kg
CO₂/MWh at end of life. CO₂e uses the 378 kg; DAQ's own figure implies 833 lb/MWh, which gives 1,641,843
TPY, 0.04% lower. PM, SO₂ and HAPs are **scaled linearly from DAQE-IN163550001-26** (0.12, 0.01 and 0.29 tpy,
×450/393.25) because Bloom publishes no PM figure and calls SOx negligible. Gas at 1,036 Btu/cf, EIA's U.S.
average heat content of gas consumed in 2025 (Utah's is 1,049, which would lower the volume about 1%). Water
scaled from the proposed design (250,000 gal/yr and a 500,000-gal fill, 04 AUG deck slide 09,
APPLICANT ONLY). **UPDATED 21 SEP:** this analysis no longer gives its own yard estimate; no applicant or regulator document
states the yard's acreage, and published comparables range widely (a 72.9 MW Bloom installation in Hilliard, Ohio, on about 6.4 acres, per AEP Ohio's Letter of
Notification to the Ohio Power Siting Board, case 25-0649-EL-BLN, 23 JUN 2025, p. 1, implies ~34.5 acres at
393.25 MW and ~39.5 at 450 MW; Bloom's stacked-array claim implies ~4, UNVERIFIED).
As a bound, 1,210 cabinets at 9 × 1.3 m
(datasheet footprint) cover about 3.5 acres before access, transformers and spacing. The water row is make-up
water, primarily for humidification (04 AUG minutes, 18 AUG packet p. 67; the 01 SEP deck calls it cooling and
humidification), and excludes site irrigation; the applicant's whole-site figure is 1 to 3 million gallons
a year (01 SEP deck, slide 05A).

### The site limit

**UPDATED 18 SEP.** Subsection 22 of both 21 SEP drafts allows one Data Center with Onsite Power Generation
Facility site citywide, provides that *"a standalone Onsite Power Generation Facility counts as a site,"*
and bars avoiding the limit by separating a data center and its generation onto separate parcels or
approvals within the same unified development.

**One textual point remains.** The 450 MW cap is *"measured per Onsite Power Generation Facility,"* while
the quota is measured per **site**, defined as *"a single parcel or unified development."* **The two
are measured in different units**, and nothing states that one site may host only one facility.

> **This is a question for the City Attorney, not a finding.** It is exactly the kind of
> ambiguity that gets resolved cheaply before adoption and expensively afterward.

---

## CALC-9: Scale against the city (`C-06`)

```text
250 MW ÷ 90 MW city peak = 2.78×
393.25 MW ÷ 90 MW        = 4.37×   (the proposed nameplate)
400 MW ÷ 90 MW           = 4.44×
450 MW ÷ 90 MW           = 5.00×   (the 21 SEP cap)

Against UMPA's primary-sourced figures (I-11a, I-11b):
450 MW  ÷ 74.10 MW FY2021 actual   = 6.07×
393.25 MW ÷ 115.76 MW FY2027 forecast = 3.40×
450 MW  ÷ 115.76 MW FY2027 forecast = 3.89×
```

**`C-06` VERIFIED.** The ~90 MW is city staff's figure in the 04 AUG minutes (18 AUG packet p. 60); 74.10 and
115.76 MW are UMPA's (FY2022 IRP pp. 81–82). At the proposed 393.25 MW the facility's nameplate is ~4.4× the city's peak (3.4× the
FY2027 forecast); at 250 MW of computing load, ~2.8×; at the 450 MW cap, ~5.0×. **UPDATED 18 SEP.**

This is the most legible fact in the proposal, and it is in none of the applicant's posted decks. It also
reframes `C-11`: the "zero draw on the municipal grid" claim is accurate and valuable
precisely *because* the load is this large: Spanish Fork Power could not serve it under any
scenario. **UPDATED 16 SEP:** the 04 AUG minutes record staff estimating that "serving a customer requiring
approximately 40 to 50 megawatts through the City's system could require at least two new substations
and a major transmission connection between existing 138-kilovolt infrastructure," at about $30 million
to $40 million (18 AUG packet p. 64). A 250 MW load is far beyond what the city's distribution system
can carry; transmission-level service would be a different proceeding.

---

## CALC-10: Fiscal

> **Sources.** Utah County Assessor parcel **67:228:0003**, Tax Area 150; Utah County Treasurer, approved rates for
> tax year 2026; Utah Admin Code **R884-24P-33**, 2026 percent-good schedules. The $4B is the applicant's (04 AUG
> deck, slide 12; 04 AUG minutes, 18 AUG packet p. 68).

**Confirmed inputs**

```text
Parcel:              67:228:0003, 69.478641 acres (NOT ~25 as testified)
Owner of record:     WDC Industrial Utah Owner LP
2026 total assessed: $50,898,400   [confirms the "~$50 million" cited on the record, 04 AUG minutes, 18 AUG packet p. 70]
Tax Area:            150  (point-in-polygon confirmed)
Combined rate:       0.009563   (tax year 2026 approved rate, Utah County Treasurer)
Distribution:        Nebo School District 75.2% | County+districts 14.8% | Spanish Fork City 10.0%
```

**UPDATED 14 SEP.** Earlier revisions used 0.010979 and 79.7 / 11.3 / 9.0%, which are the 2019 rate
and shares: the Treasurer's rate page shows 2019 unless a year is selected. The 2026 schedule is
schools 0.007190, county and districts 0.001415, city 0.000958.

### Year one

```text
$4.0B × 0.009563 = $38.3M gross
  → Nebo SD          ~$28.8M
  → County/districts  ~$5.7M
  → Spanish Fork City ~$3.83M
```

**`C-83`'s "Approximately $40mm per Year" (04 AUG deck, slide 14) is close as a gross full-build figure: $38.3M
at the 2026 approved rate before depreciation, and about $37.1M in year one if all of it is Class 27 equipment.**
**UPDATED 16 SEP.** It is also gross of any community reinvestment rebate the applicant's 18 AUG slides
propose (p. 5). The figure is not invented, **but 75.2% of it is Nebo School District's, not the city's.** A
Spanish Fork Council chamber heard a number of which the city keeps about **10%.**

### The decay curve, on Utah's actual schedules

R884-24P-33 assigns two different classes to the two halves of this facility:

| Year | **Class 12**, computer hardware | **Class 27**, electrical generating equipment |
|---|---|---|
| 1 | $23.7M (62%) | $37.1M (97%) |
| 2 | $17.6M (46%) | $36.3M (95%) |
| 3 | $8.0M (21%) | $35.2M (92%) |
| 4 | $3.4M (9%) | $34.4M (90%) |
| 5 | **$2.7M, residual floor (7%)** | $33.3M (87%) |
| 10 | **$2.7M** | $28.3M (74%) |

*(Each column models the entire $4B in that single class, at the 2026 rate of 0.009563. Reality is a
blend. **UPDATED 14 SEP** from the 2019 rate; the report's Table 21 already carried these values.)*

**Class 12 reaches its 7% percent-good floor by year five. Class 27 retains 74% at year ten** (**UPDATED 14 SEP**, was ~76%).

> **⚠ Two limits on this table.** **(1)** R884-24P-33 is a **personal property** schedule. A
> building retrofit is **real property** and does not depreciate on it, so the portion of the $4B
> that is construction is modeled wrongly here. **(2)** The applicant told Council on 18 AUG that its financial
> projections "do not include the potential additional value of customers' computing equipment" (adopted minutes
> p. 20), and its 04 AUG deck itemizes the $4B without compute (slide 12), though the 04 AUG minutes record it as
> "power generation, electrical, and computing equipment" (18 AUG packet p. 68). If the $4B **excludes** tenant
> compute, the Class 12 collapse applies to a much smaller base than modeled, and the decay is far shallower than
> shown.
>
> **The direction of the finding survives both**, generation equipment holds value and compute does
> not, **but the magnitudes are illustrative, not predictive.** This is precisely why the pro forma
> is the thing to demand rather than something to substitute a model for.

**So the durability of the whole claim reduces to one undisclosed number: the compute/generation
split.**

```text
All-Class-12 case:  $23.7M → $2.7M/yr forever   ( ~$268k/yr to the city )
All-Class-27 case:  $37.1M → $28.3M at year 10  ( ~$2.84M/yr to the city at year 10 )
```

A flat $40M/yr requires **$4.18B of assessed value every year** ($40M ÷ 0.009563; earlier revisions said
$3.64B, at the 2019 rate), which means continuous compute replacement, each refresh assessed at full value.

`C-86` (replacement sustains the base) is plausible for the generation half: The Volition representative told Council
the Bloom equipment could undergo *"a phased upgrade approximately seven or eight years after
installation"* (04 AUG minutes, 18 AUG packet p. 69), which matches Class 27 behavior. **He gave no comparable figure
for the compute side, which is the half that collapses.** Replacement is a business decision, not a
covenant. A development agreement could require a minimum assessed value; none is in the public record.

**The document to demand is the tax pro forma**, Class 12/27 split, refresh assumption, assessed
value at years 1, 5, 10. On 04 AUG a councilmember said *"the underlying figures needed
to be clearly documented,"* speaking of the electricity, water, noise and air comparisons (18 AUG packet p. 70); the tax
projection deserves the same. **UPDATED 16 SEP.**

Also note `C-91` (UNVERIFIED: no posted source found): the downside scenario of 75 MW at $1.4B implies
$18.7M/MW, against $16M/MW for the 250 MW/$4B case, 17% apart. Roughly consistent.

**Two errors to avoid, both easy to make:**

1. **Do not net the sales-tax exemption against property tax.** Utah Code **59-12-104(84)** is a
   *sales and use* tax exemption. It does not touch property tax. (And **59-12-104(80)** already
   exempts fuel cells outright, independent of any data-center status.)
2. **Do not cite $81,000,000 as a sale price.** That figure in the parcel abstract is a **trust
   deed** (entry 4222-2026, recorded 16 JAN 2026). Utah is a non-disclosure state; no sale price exists in the public record.

---

## CALC-11: Water plausibility **[PARAMETRIC]**

`C-42`: 250,000 gal/yr for a 250 MW closed-loop facility (04 AUG deck, slide 09) = 685 gal/day. For
humidification top-up on a sealed loop this is plausible; closed-loop systems consume almost nothing.

**But the accounting is incomplete.** The applicant's own 18 AUG slides put Novva West Jordan at "~3–4.7M
gal/yr by its own posted bills, two-thirds landscaping" (p. 13, APPLICANT ONLY), so landscaping runs about 2×
the operational use. Volition's 250,000 gal/yr is make-up water, primarily for humidification
(04 AUG minutes, 18 AUG packet p. 67; the 01 SEP deck calls it cooling and humidification), and excludes
site irrigation. **UPDATED 16 SEP.**

If Spanish Fork's landscaping requirements for a site this size drive irrigation
demand comparable to Novva's, total site water could plausibly be **several times** the
headline figure. The commissioner who raised this at the 05 AUG Planning Commission meeting (`C-52`) asked
the right question. **UPDATED 14 SEP:** the applicant's own 01 SEP deck now puts the data center pathway's
whole-site water at **1 to 3 million gallons a year** (slide 05A), with 250,000 as the cooling and
humidification make-up, which confirms the gap.

`C-41`: the 500,000 gal initial fill against the deck's own cited basis
(155 gal/person/day × 3.39 persons = 525.45 gal/household/day, × 365 = 191,789, about 191,800 gal/yr; APPLICANT ONLY, from slide 09 of the 04 AUG
Council deck, Utah Public Notice file 1471217):

```text
500,000 ÷ 191,800 = 2.6 households, deck says "2 Utah households for one year." ✓ close enough
250,000 ÷ 191,800 = 1.3 households, deck says "One Utah County household." ✓
```

**UPDATED 14 SEP:** the current Census figure for Spanish Fork is **3.59 persons per household**
(QuickFacts, 2020 to 2024), not the deck's Utah County figure of 3.39: 155 × 3.59 × 365 = 203,100 gal/yr, so the fill is
**2.5 households** and the annual make-up **1.2**.

**The household arithmetic checks out on the deck's basis and changes little on the current one.** The water
claims are internally consistent. The gap is scope, not arithmetic.

---

## CALC-14: Other derived figures the report cites here

**UPDATED 16 SEP.** The report cites this appendix for several figures that had no working shown.
They are collected here.

### Noise at the nearest homes

The receptor in CALC-8 is one mile out. The nearest residential lot line is about 1,300 ft (396 m)
from the property boundary and the nearest houses about 1,500 to 1,800 ft (457 to 549 m), measured
in the state parcel layer from the parcel boundary to the residential lot line and to the nearest
building footprints. **UPDATED 21 SEP:** the houses at these distances form two groups, Spanish Fork homes to
the west and 2024 homes in Mapleton to the north-northeast (lot lines from 486 m). Where the fuel cells will sit on the 69.5-acre parcel is not known, so two cases
are run: the array at the side of the parcel nearest the homes, and the array about 500 m farther in.
Same source terms (115.3 dBA finite line, 121.4 dBA ISO 3744) and the same −9 to −28 dB excess
attenuation band as CALC-8, which flatters the shorter paths:

```text
Lp = Lw − 10·log10(2π·R²) − A
396 m  (lot line, array nearest)   spreading 60.0 dB  →  27.4 to 52.5 dBA
457 m  (house, array nearest)      spreading 61.2 dB  →  26.1 to 51.2 dBA
549 m  (house, array nearest)      spreading 62.8 dB  →  24.5 to 49.6 dBA
~960 m   (far side: 457 + 500 m)   spreading 67.6 dB  →  19.7 to 44.8 dBA
~1,050 m (far side: 549 + 500 m)   spreading 68.4 dB  →  18.9 to 44.0 dBA
1,609 m (one mile, CALC-8)         spreading 72.1 dB  →  15.2 to 40.3 dBA
```

**At the nearest houses: roughly 25 to 51 dBA with the array nearest them, about 19 to 45 dBA with
it on the far side**, against the 18 AUG text's 55 dBA at the residential zone boundary (O.6; the 21 SEP drafts
defer to Chapter 9.32) and an assumed 30 to 40 dBA night ambient. This model cannot call that inaudible, and
terrain and refraction focusing could raise the upper end (CALC-8).

### Truck traffic (Table 09 in the report)

**UPDATED 18 SEP.** Each warehouse type at its highest published ITE truck rate, weekday truck trip ends per
1,000 sq ft; for LU 150, the highest of the 11th-edition rates PennDOT lists for sites of 500,000 sq ft or more
(0.54 to 0.56). X = 1,054 thousand sq ft (1,053,555 sq ft in the broker's listing). Sources: ITE, *High-Cube
Warehouse Vehicle Trip Generation Analysis*, OCT 2016, Table 5 (LU 155, 156, 157 and the transload rate);
PennDOT's JUN 2024 warehouse trip generation memo, Tables 2, 4 and 15, for the ITE 11th-edition LU 150, 154 and
155 rates; NJDOT's table of ITE 10th-edition rates, current as of 21 APR 2023, for weekend rates.

```text
LU 156 parcel hub, all trucks:        4.007X = 4,223.4   (0.982X = 1,035.0 of them five or more axles)
LU 157 cold storage:                  0.836X =   881.1
LU 155 fulfillment (one site, DEC):   0.717X =   755.7   (ITE 11th edition: 0.19 to 0.23)
LU 154 transload and storage:         0.454X =   478.5   (ITE 11th edition: 0.22)
LU 150 general warehousing:           0.56X  =   590.2
```

ITE publishes weekend rates equal to weekday for LU 155, 156 and 157 (NJDOT: 8.18, 7.75 and 2.12 per
1,000 sq ft both days, all vehicles), so those run 30.44 days a month (365.25 ÷ 12). LU 150 and 154 use 21.75
weekdays and 8.69 weekend days scaled by their weekend-to-weekday ratios (0.15/1.58 and 0.94/1.40). Trucks are
assumed to follow the all-vehicle weekend pattern.

```text
LU 156:  4,223.4 a day × 7 = 29,564 a week; × 30.44 = 128,560 a month; × 365 = 1,541,533 a year
         trucks a day, each arriving and leaving: 4,223.4 ÷ 2 = 2,112
         tractor-trailers: 1,035 trip ends a day, 31,506 a month
LU 157:  881.1 × 30.44 = 26,822 a month
LU 155:  755.7 × 30.44 = 23,004 a month
LU 154:  478.5 × (21.75 + 8.69 × 0.94/1.40) = 13,200 a month
LU 150:  590.2 × (21.75 + 8.69 × 0.15/1.58) = 13,325 a month
Data center, applicant's 10 to 30 trucks a month: 20 to 60 trip ends; 128,560 ÷ 60 to ÷ 20 = 2,143× to 6,428×
```

**Not used, kept for the record.** The 16 SEP revision anchored on LU 155 at 0.19 to 0.23 (6,096 to 7,379
trip ends a month) and on PennDOT's observed 0.14 at two Pennsylvania fulfillment centers (4,492 a
month; Table 15), with Fingerhut's plan of about 60 trucks a day as a cross-check (Deseret News, 30 OCT 2001). On 18 SEP the report moved to
the maximum under the current zoning, from industry rates only, since no count exists for this building
or a comparable Utah site. The parcel hub and fulfillment rates each rest on one site in
ITE's study, which recommends more data for both; ITE's 10th-edition LU 156 all-vehicle rate is 7.75,
against the study's 10.638, so the manual would give a lower truck figure than the one used here.

### Taxpayer comparisons (§13)

```text
City share, 2025, Tax Area 150: 10.2367%
Largest 2025 parcel bill found, 46:680:0004 (the building's owner): $495,862.10 × 10.2367% = $50,760
Offered contribution:           $500,000 ÷ $50,760 = 9.9×   ("about ten times")
City share at full build:       $3,830,000 ÷ $50,760 = 75×
Table 22, Wal-Mart net of its $2,132.91 county adjustment: $211,158.10
Table 22 total: $2,485,897.87 − $2,132.91 = $2,483,764.96; $40M ÷ that = 16.1×
Table 22 city share, combined: $253,540.69 − $218.34 = $253,322
```

The building's six parcels, 46:680:0001 to 0006, billed $558,808.18 in 2025. Sources: Utah County Treasurer,
2025 approved rates, Tax Area 150 (city 0.000986 of 0.009632); Utah County Real Property Tax Detail, 2025, for
each parcel bill (rechecked 21 SEP 2026); 01 SEP deck, slide 03, for the $500,000 community floor; the report's
Table 22 for the eleven taxpayers.

### Other ratios

```text
Hydro Extrusion share of inventoried NOx: 17.89 ÷ 22.05 = 81%
450 MW NOx (Table 03): 5.91 ÷ 22.05 = 27% of the city; ÷ 17.89 = 33% of Hydro; ÷ 4.16 = 1.4× WestRock;
  Nebo 52.35 ÷ 5.91 = 8.9×; Lake Side 176.42 ÷ 5.91 = 29.9×
Largest fuel cell plant: 393.25 ÷ 78.96 = 5.0×; 450 ÷ 78.96 = 5.7×
Nameplate multiples: 393.25 ÷ 26.5 = 14.8×; 450 ÷ 26.5 = 17.0×
Table 06, at 75% of nameplate: 450 × 0.75 × 8,760 = 2,957 GWh ÷ 297.3 GWh = 9.9×; ÷ 48.02 GWh = 61.6×
Applicant's own basis, 75% of 250 MW: 1,642.5 GWh ÷ 297.3 GWh = 5.5×
Building headroom: 393.25 ÷ 8 to 393.25 ÷ 6 = 49 to 66; 450 ÷ 8 to 450 ÷ 6 = 56 to 75
Water: 1 to 3M gal against ~5M gal = 40 to 80% lower; 250,000 against ~5M = 95% lower
Wind park capacity factor: 42,217 MWh ÷ (18.9 MW × 8,760 h) = 25.5% (2025); mean 2009 to 2025 ≈ 27%
Southaven turbines (NAACP complaint ¶214): 1,700 tpy × 2,000 ÷ (495 MW × 8,760 h) = 0.78 lb/MWh
  0.78 ÷ 0.003 (Volition's datasheet rate) ≈ 260×
Controlled-Emission ceiling at 85%: 100 tpy ÷ (0.30 × 8,760 × 0.85 ÷ 2,000) = 90 MW;
  450 MW × 0.30 × 8,760 × 0.85 ÷ 2,000 = 503 tpy
Applicant heat figure: 393.25 MW ÷ 553 MW-thermal = 71% electrical efficiency (datasheet maximum 65%)
Combined cycle check, Lake Side: 7.02 to 7.18 MMBtu/MWh × 53.06 kg = 0.373 to 0.381 t CO2/MWh
Cap against the proposal: 450 ÷ 393.25 = 1.144, 14.4% larger (the report's 14%);
  against the ~90 MW city peak, 450 ÷ 90 = 5.0× (CALC-9)
```

Sources: DAQ emissions inventory for the NOx tons (Hydro 2025, WestRock 2023, Nebo and Lake Side 2025; the
report's Tables 02 and 03); 78.96 MW is the Shinincheon Bitdream plant in South Korea, UNVERIFIED in the report;
26.5 MW is 18.9 wind + 4.0 solar + 3.6 hydro (report Table 04, from UGS Tables 5.6 to 5.8); 297.3 GWh and
48.02 GWh are the city's FY2021 energy requirement and its Large Commercial class (UMPA FY2022 IRP pp. 81–82);
6 to 8 MW is the additional power the building's leasing listing advertises; ~5M gal is the applicant's figure for
today's use and 1 to 3M gal its whole-site figure for the data center (01 SEP deck, slide 05A, APPLICANT ONLY);
42,217 MWh is EIA's 2025 net generation for the wind park (plant 56751); 553 MW-thermal is from the applicant's
18 AUG slides (p. 8, APPLICANT ONLY); 7.02 to 7.18 MMBtu/MWh is Lake Side's EIA-923 heat rate (CALC-7).

### Wind and distance measurements (§20, §5)

Night drainage flow: KSPK ASOS observations from the Iowa Environmental Mesonet, 24 APR 2021 to
13 SEP 2026, speed-weighted vector mean of night-hour winds, stated as the direction the air moves
toward: 309 to 311° on a 21 SEP recompute, depending on which night hours are counted; the report's 308 to
314° came from an earlier run of the same data. **UPDATED 21 SEP:** the nearest houses form two groups. The
Spanish Fork homes to the west bear roughly 255 to 279° from the parcel centroid, about 30 to 55° off the flow
axis; the 2024 homes in Mapleton to the north-northeast bear about 15 to 22°, about 65 to 75° off it (state
parcel layer, parcels with a recorded build year within about 560 m of the boundary). Earlier revisions gave
257 to 263° and 45 to 55°, the western group only. The Spanish Fork substation is about 1,530 to 1,600 m,
bearing about 9°, from the parcel centroid (state parcel layer and OpenStreetMap); the HIFLD transmission
layer puts its line terminal 1,635 m out at 9°.

---

## Running summary of verdicts from calculation

| Claim | Verdict from arithmetic |
|---|---|
| `C-34` CO2 = 3–4 diesel trucks | **FALSE on total CO2**, off by 2,060×–2,750× on the permit basis and 1,402×–1,870× at 75%; small only on criteria pollutants, which leave out the permit's own CO2e row; the applicant conceded the understatement on 18 AUG (**UPDATED 14 SEP**, was 1,292×–2,528×), see CALC-2 |
| `C-31` emissions = 4–5 semi trucks | **UNFALSIFIABLE AS WRITTEN**, no basis stated; the two available readings differ by roughly 800× (**UPDATED 16 SEP**, was ~40×). The 2.2–2.3× figure tests the slide against the deck's own numbers and is not a site comparison, see CALC-5 |
| `C-32` comparison table | **MISLEADING**, recip engine row ~700× high against Utah's own permit scaled to 393.25 MW (**UPDATED 16 SEP**, was ~1,100× at 250 MW); grid row has no stated basis |
| `C-63` ~13 W/m² | **MISLEADING BY JUXTAPOSITION**, city-area denominator printed beside an on-site figure. On-site flux is **166–203×** the stated value at the proposed scale; the applicant's own 553 MW over the city's area reproduces the 13 (114× at the 417 MW-th illustration) |
| `C-66` heat never meets atmosphere | **FALSE as stated**, efficiency benefit real, energy balance unchanged |
| `C-62` +5°F max on-site | **SUPERSEDED**: the applicant revised it on 18 AUG to up to ~9°F; this analysis gives 4.3–5.3°F at 5 m/s and 10.8–13.3°F at 2 m/s at the proposed scale, which brackets it (**UPDATED 14 SEP and 16 SEP**) |
| `C-65` <1°F beyond ¼ mile | **SUPERSEDED**: revised on 18 AUG to under 1°F before about half a mile |
| `C-64` less than half of Lake Side | **HOLDS at 250 MW; at 393.25 MW HOLDS at begin of life, FAILS at end of life**: 44–56% of the 1,319–1,376 MW-th Lake Side rejects (EIA) (**UPDATED 14 SEP and 16 SEP**) |
| `C-69`/`C-144` public commenter on heat | **CORRECT** on the physics; magnitude at one mile negligible, not computed at the nearest houses |
| `C-06` >2× city peak | **VERIFIED** ✓ |
| `C-83` ~$40M/yr | **CLOSE as a full-build gross figure** ($38.3M at the 2026 rate before depreciation), gross of any CRA rebate, declining thereafter (**UPDATED 16 SEP**) |
| `C-41`/`C-42` water arithmetic | **VERIFIED** on the deck's basis ✓ (2.5 and 1.2 households at the current Census 3.59); scope excludes landscaping, and the applicant's whole-site figure is 1–3M gal/yr |
| `C-52` landscaping water | **VERIFIED as a real gap**: the applicant's whole-site figure is 1–3M gal/yr against 250,000 for cooling; its 18 AUG slides put Novva's landscaping at ~2× operational use (APPLICANT ONLY) |
| `C-20` NOx 5.17 tpy | **CONSERVATIVE** ✓, about 1.8 to 1.9× the per-MWh rates in Delaware's two issued Bloom permits (**UPDATED 16 SEP**, was 2.9×, which compared 393.25 MW with 250 MW) |
| `C-22` VOC 17.22 tpy | **TIGHTER THAN COMPARABLE PERMITS**: Volition's rate, Bloom's datasheet 0.01 lb/MWh, is 32 to 37% below the two issued Delaware DNREC Bloom permits computed the DAQ way (Red Lion, APC-2019/0031, 1.73 tpy at 26.8 MW; Brookside, APC-2019/0032, 0.181 tpy at 2.6 MW). Favorable, but it leaves no margin above the datasheet rate (**UPDATED 14 SEP and 16 SEP**; the earlier "within 6%" had no derivation and is withdrawn, and the 14 SEP "CONSERVATIVE" pointed the wrong way) |
| `C-60` noise at receptor | **PROVISIONAL**: 15 to 40 dBA at one mile, at or below background in neutral conditions there; about 25 to 51 dBA at the nearest houses with the array nearest them, which this model cannot call inaudible (**UPDATED 16 SEP**); terrain and refraction focusing can raise either, with no upper bound this model can set (**UPDATED 21 SEP**), see CALC-8 and CALC-14 |
