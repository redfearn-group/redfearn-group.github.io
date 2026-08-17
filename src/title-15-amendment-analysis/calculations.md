---
layout: layouts/report-doc.njk
title: "Independent Calculations"
description: "The arithmetic behind the Title 15 Amendment Analysis. Every derived figure in the report traces to a numbered calculation here, with inputs cited and method shown."
ogSlug: title-15-calculations
built: "14 AUG 2026"
revised: "15 AUG 2026"
parent: "/title-15-amendment-analysis/"
# no template syntax in this document; skipping njk preserves the indented
# arithmetic blocks, which njk preprocessing strips before markdown-it runs
templateEngineOverride: md
---

Every derived figure in the [Title 15 Amendment Analysis](/title-15-amendment-analysis/) traces to a
numbered calculation here. **These are my computations, not sourced facts.** Inputs are cited; method
is shown; substitute your own assumptions and see whether the conclusion survives.

**This is a working document, published as filed.** It is the arithmetic behind the report, not a
second draft of the report. Where it disagrees with itself, argues with an earlier revision, or
reaches a finding that cuts against the report's framing, that is left visible on purpose. A
calculation you can only check after it has been tidied is not one you can check.

**How to read the notation.** `C-nn` identifies an individual claim in the public record and `P-nn` a
slide in the applicant's presentation deck; both are internal identifiers used to keep each claim
traceable to where it was made. `CALC-n` numbers the calculations here. `I-n` numbers the shared
inputs below.

**Two capacity bases appear in this document, and the difference matters.** The governing figure is
the permit's **393.25 MW** nameplate, 1,210 Bloom units. An earlier revision computed against
**250 MW**, which is the rack-level compute load rather than the generation the fuel cells must
supply. CALC-2 and CALC-13 were corrected to the permitted nameplate. **CALC-3, CALC-7, CALC-8 and
parts of CALC-9 and CALC-12 still run on the 250 MW basis** and are therefore floors, not ceilings:
the true figures are higher in proportion. Each is flagged where it appears. Nothing in the report
rests on a 250 MW figure where the 393.25 MW figure would change the conclusion.

**Built:** 14 AUG 2026 · **Revised and re-verified 15 AUG 2026** against the three governing primary
sources: the DAQ Intent to Approve `DAQE-IN163550001-26`, the Bloom ES 6.5 datasheet
`1016932-20260204`, and UMPA's FY2022 Integrated Resource Plan. **All shared inputs below are resolved and no parametric placeholders remain in the load-bearing
calculations. CALC-11, on water, remains parametric and is labelled as such.**

---

## Shared inputs

| # | Input | Value | Source |
|---|---|---|---|
| I-1 | Facility capacity | **393.25 MW nameplate, 1,210 units** | **DAQE-IN163550001-26 (S1), governs.** 250 MW is the rack-level compute load |
| I-2 | Average utilization | 75% | applicant testimony, 04 AUG Council |
| I-3 | Annual generation | **1,642,500 MWh** | 250 × 0.75 × 8,760 |
| I-4 | **Ordinance cap, the report's primary frame** | **500 MW per facility, 2 data-center sites** | §15.3.24 §2 and §13, Exhibit A |
| I-5 | Bloom module size | **325 kW net AC** | **ES 6.5 datasheet `1016932-20260204` (S3); S1 agrees.** RESOLVED |
| I-6 | Bloom electrical efficiency | **65–53% LHV net AC**, begin to end of life | ES 6.5 datasheet (S3). RESOLVED |
| I-7 | Natural gas CO2 factor | 53.06 kg CO2/MMBtu (HHV) | EPA emission factors |
| I-8 | NG LHV/HHV ratio | 0.902 standard; **0.9033 implied by the ES 6.5 datasheet's own heat-rate and efficiency pair** | S3 |
| I-9 | Site area | **69.478641 acres** (Assessor, parcel 67:228:0003), 69.09 by polygon = **281,200 m²**. *25 acres is the building footprint, not the parcel* | Utah County Assessor / state parcel layer. **VERIFIED** |
| I-10 | Receptor distance | **approximately 1 mile (1,609 m)** | Utah County parcel polygon, boundary to receptor. **VERIFIED** |
| I-11 | Spanish Fork city peak load | ~90 MW (city record, 04 AUG) | `C-05` |
| I-11a | Spanish Fork peak, FY2021 actual | **74.10 MW** (74,095 kW cross-check) | UMPA FY2022 IRP pp. 81–82 |
| I-11b | Spanish Fork peak, FY2027 forecast | **115.76 MW** | UMPA FY2022 IRP p. 82 |
| I-12 | Spanish Fork city area | ~15.6 sq mi = 40.4 km² | to confirm |

---

## CALC-1: Method validation against a real Utah permit

Before relying on the CO2 arithmetic below, test the method on a facility whose CO2e a regulator
has already published.

**Novva West Jordan**: 72 Jenbacher gas engines, 235.6 MW, permitted **997,261 tpy
CO2e**.

Implied intensity, assuming PTE at ~100% capacity factor:

```text
997,261 t ÷ (235.6 MW × 8,760 h) = 997,261 ÷ 2,063,856 MWh = 0.483 t CO2/MWh
```

Now predict it independently. Gas reciprocating engine at ~42% LHV efficiency:

```text
HR_LHV  = 3,412 / 0.42          = 8,124 Btu/kWh
HR_HHV  = 8,124 / 0.902         = 9,006 Btu/kWh
CO2     = 9,006 × 53.06 / 1e6   = 0.478 t CO2/MWh
```

**0.478 predicted vs. 0.483 permitted, within 1%.** The method is sound. Proceeding.

> **This validation is genuine and worth distinguishing from a weaker one.** Novva's 997,261 tpy is
> a **regulator-issued permit figure**, derived independently of the arithmetic here, so agreeing with it
> to 1% is real corroboration. **A separate check against Bloom's own datasheet is not.** That
> comparison uses the same stoichiometry and the same efficiency range as the calculation it
> validates, so close agreement is arithmetically guaranteed and proves nothing. **Where this review
> cites "agreement within 0.2%" with Bloom's datasheet, read it as an internal consistency check,
> not as independent confirmation.**

---

## CALC-2: Facility CO2, the central quantitative finding

**BASIS CORRECTED 15 AUG 2026.** Earlier revisions computed against **250 MW**, which is the
**rack-level compute load**, not the generation the fuel cells must supply. Everything below now uses
**400 MW** of Bloom Energy Server 6.5 capacity, and every input is printed on the datasheet
(`1016932-20260204`) rather than assumed.

### Inputs, all from the datasheet

| Datasheet line | Value |
|---|---|
| Nameplate power output (net AC) | **325 kW** per unit |
| Cumulative electrical efficiency | **65-53% (LHV net AC)**, begin of life to end of life |
| Heat rate (HHV) | **5,811-7,127 Btu/kWh** |
| **CO2 @ stated efficiency** | **679-833 lbs/MWh (308-378 kg/MWh)** |
| NOx | 0.003 lbs/MWh |
| CO | 0.013 lbs/MWh |
| VOC | 0.01 lbs/MWh |
| Cumulative thermal efficiency | >36%, exhaust @ >350 °C |

**Bloom publishes the CO2 figure directly.** It is not derived here.

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

### Result at the permitted 393.25 MW

**BASIS RE-CORRECTED 15 AUG 2026.** Earlier revisions used a rounded **400 MW**. The governing number
is the permit's own **393.25 MW**, 1,210 units at 325 kW (`DAQE-IN163550001-26`, S1).

| Capacity factor | MWh/yr | CO2 range | **Central** |
|---|---|---|---|
| **75%** (the applicant's stated expectation) | 2,583,652 | 796,000 - 977,000 t | **~886,000 t** |
| 85% (PTE basis) | 2,928,140 | 902,000 - 1,107,000 t | ~1,004,000 t |
| **100%** (the permit's own basis) | **3,444,870** | 1,061,000 - **1,302,000 t** |, |

**Central estimate: ~886,000 metric tons CO2/yr at 393.25 MW and 75% utilization.**

**The permit's published 1,434,855 short TPY equals 1,301,679 metric tons**, which is the 100% row's
end-of-life figure. **The reconstruction closes on the agency's own number.**

*(Prior figure at the 250 MW rack load was ~563,000 t; the 400 MW working figure gave ~901,000 t.)*

### Testing "three or four diesel trucks" (`C-34`)

A Class 8 truck at 100,000 mi/yr and 6.46 mpg burns 15,480 gal x 11.08 kg CO2/gal = **171.5 t/yr**.
Three to four trucks is **515-686 t**.

```text
permit basis, 1,301,679 t metric / 686 t = 1,897x
permit basis, 1,301,679 t metric / 515 t = 2,528x
at 75% central, 886,193 t / 686 t        = 1,292x
at 75% central, 886,193 t / 515 t        = 1,721x
```

**Wrong by three orders of magnitude on total CO2.** `C-34` is FALSE on that reading. It survives
only on the criteria-pollutant CO2e reading, which excludes CO2 by design. See `CALC-5`.

### The framing that is fair to Volition

Per unit of compute the intensity is unchanged by the load correction, and it is genuinely good:

| Scenario | t CO2/MWh | Annual at 2,583,652 MWh (393.25 MW, 75%) |
|---|---|---|
| **Volition (ES 6.5, midpoint)** | **0.343** | **~886,000 t** |
| Novva-style gas reciprocating | 0.483 | ~1,248,000 t |
| Utah grid average | **0.601** | ~1,553,000 t |

**~29% cleaner than on-site gas engines and 43% cleaner than the Utah grid, per unit of compute.**
Both things stay true: the facility adds roughly **886,000 tons** of CO2 a year to Utah
County that does not exist today, **and** it is the lowest-carbon way to run that compute among what
actually gets built in Utah.

> **The Utah grid figure is now VERIFIED at 0.601 t/MWh**, computed from EIA's own filed data for
> **2024**: total electric power industry CO2 of **21,120,098 metric tons** against net generation of
> **35,133,906 MWh**. The earlier 0.635 working figure was 5.3% high and is superseded.

---

## CALC-3: Upstream methane

CO2 at the stack is not the whole greenhouse footprint. Gas consumed at η = 60%:

```text
Heat input = 1,642,500 MWh × 6,304 Btu/kWh × 1,000 = 1.036e13 Btu = 10.36 million MMBtu
Volume     = 1.036e13 ÷ 1,036 Btu/scf ≈ 10.0 Bcf/yr
CH4 mass   = 10.0e9 scf × 0.01924 kg/scf × 0.95 CH4 ≈ 182,800 t CH4 throughput
```

| Leak rate | Basis | CH4 leaked | CO2e @ GWP100 = 29.8 | CO2e @ GWP20 = 82.5 |
|---|---|---|---|---|
| 1.4% | EPA GHGI | 2,559 t | **76,000 t** | 211,000 t |
| 2.3% | Alvarez et al. 2018, *Science* (measurement-based) | 4,204 t | **125,000 t** | **347,000 t** |

**Total CO2e range: ~625,000 t (low leak, 100-yr) to ~900,000 t (high leak, 20-yr).**

Note the same upstream penalty applies to the gas-engine and (partly) grid comparators in
CALC-2, so the *relative* ranking is largely unchanged. It matters for the absolute number.

---

## CALC-4: The gas load in context

```text
10.0 Bcf/yr ÷ 365 ≈ 27.4 MMscf/day
```

For scale: this single facility's annual gas draw is on the order of **several percent of
Utah's total statewide natural gas consumption.** That figure needs EIA verification before it
appears in the report, flagged as outstanding, but if it holds it is a materially more
informative way to express `C-17` ("zero impact on existing gas customers") than anything in
the record. The claim may well be true for the *distribution* system, given a dedicated
lateral, while still being a significant new call on regional *supply*. Those are different
questions and the record conflates them.

---

## CALC-5: The "4–5 semi trucks" test

> **Baseline note.** The **04 AUG Council** deck and the **05 AUG Planning Commission** deck state
> different figures for the same existing truck fleet. The Council deck gives ≈2 metric tons NOx and
> ≈50 kg PM2.5; the PC deck gives 101 kg and 4.2 kg. **The Council figures govern**, they are
> internally consistent (4.76 g NOx/mi, 0.119 g PM2.5/mi across 420,000 truck-miles), while the PC
> figures imply 0.24 g NOx/mi, cleaner per mile than many passenger cars. The 04 AUG Council
> deck reverts to the Council figures.

Tests `C-31` ("Equal to 4–5 Semi Trucks per year", `P-07`).

**Inputs**

```text
Facility (P-08):     5.17 short tons NOx/yr  = 4,690 kg
                     0.12 short tons PM2.5/yr =   109 kg
Existing fleet (CC-11): 420,000 truck-mi/yr, 65,000 gal diesel
                     2,000 kg NOx/yr  ·  50 kg PM2.5/yr
Implied fleet rates:  4.76 g NOx/mi  ·  0.119 g PM2.5/mi   [both plausible for Class 8]
```

**Test A, facility against the entire existing fleet**

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
> figure is an assumption of this analysis, not Volition's. **On the deck's own stated basis**, 3,500 trips/month over a
> 10-mile round trip, a truck at this site drives ~120 miles/year, and 4–5 of them emit a few
> hundred grams of NOx against the facility's 4,690 kg. On that reading the claim fails by **two
> orders of magnitude.**
>
> The two readings differ by ~40× and **the slide states no basis**, so neither can be called the
> intended one. **The defensible finding is the original one: the claim is unfalsifiable as
> written.** Test A, facility vs. the entire existing fleet, at **2.2–2.3×**, uses only the
> deck's own numbers and is the figure to rely on. **Do not quote "off by about 2×" as if it were
> settled**; quote Test A instead.

**Verdict on `C-31`: UNFALSIFIABLE AS WRITTEN.** The slide states no basis, and the two available
readings differ by roughly 40×. Report the fleet-level figure, **2.2–2.3×**, which uses only the
deck's own numbers and requires no added assumption.

**And it answers the framing question directly.** The question was whether, if the truck claim held,
the facility would be *"orders of magnitude cleaner than current traffic."* It would not, either
way. On criteria pollutants the facility is **~2.2–2.3× the entire existing 3,500-truck-per-month
operation**, so replacing the trucks with the data center is **a net increase in local NOx and
PM2.5, not a reduction**, even though the per-unit-of-output cleanliness claim is sound. The
"we remove the trucks" framing and the emissions arithmetic point in opposite directions.

**What survives as a finding:** the PC deck remains **internally** inconsistent, its own 101 kg
fleet figure cannot be reconciled with its own "4–5 semi trucks" claim two slides later. But that
is a **data error in the PC deck's baseline**, not evidence the truck claim is wildly false. Note
the direction: understating the fleet's NOx makes each truck look *cleaner*, which makes "4–5
trucks" a *smaller* quantity, which makes the equivalence *harder* to satisfy. **The error works
against Volition's own argument**, the signature of a hasty overnight revision, not a
manipulation, and it should be reported that way.

Separately, and to Volition's credit, a dedicated retrieval pass found the **absolute** NOx figure is well supported.
The Delaware Red Lion Bloom permit implies ~0.0071 tpy NOx/MW → **~1.8 tpy at 250 MW**. Volition
claims 5.17, roughly **2.9× more conservative** than a regulator-issued permit for the same
technology.

**Caveat that cuts the other way, and it is the one that matters for permitting.** The 5.17 tpy
figure is a *stated estimate*, not a permit limit. Bloom's **CARB-certified** NOx ceiling of
0.07 lb/MWh at 250 MW and an 85% capacity factor yields **~57.5 tons/yr**, above Utah's **50 tpy
R307-421** Utah County offset trigger. **§15.3.24 contains no potential-to-emit cap**, §7 requires
only that DAQ approvals be obtained and maintained. The gap between 5.17 estimated and 57.5
permitted-worst-case is the whole reason a PTE cap in the code would matter.

---

## CALC-6: The emissions comparison table audit (`C-32`)

`P-08` sets Volition's 5.17 tpy NOx against gas turbine ~5,400, recip engine ~59,700, diesel
generator 10,200–29,500, and Utah grid average ~2,600, **with no capacity, capacity factor,
or basis of equivalence stated anywhere on the slide.**

Test the recip-engine row against a real permit. **Novva**: 235.6 MW of gas recip engines,
permitted **51.28 tpy NOx**. Per MW: 0.218 tpy/MW. Scaled to 250 MW: **54 tpy.**

The slide says **~59,700 tpy** for a natural gas reciprocating engine. That is
**~1,100× higher** than what Utah actually permits for 250 MW of exactly that equipment.

Reverse-engineering what would produce 59,700 tpy: uncontrolled lean-burn gas engines emit
roughly 2–3 g NOx/bhp-hr versus Novva's SCR-controlled 0.0152 g/bhp-hr, a factor of
~130–200. Applying that to 54 tpy gives ~7,000–11,000 tpy, still far short of 59,700. To reach
59,700 requires either a much larger assumed capacity, an uncontrolled engine at high load
hours, or an error.

| Row | Slide value (tpy NOx) | Real-world check | Gap |
|---|---|---|---|
| Volition, 250 MW | 5.17 | Delaware Bloom permit → ~1.8 | conservative, ✓ |
| Gas recip engine | ~59,700 | Novva AO scaled to 250 MW → **54** | **~1,100×** |
| Gas turbine | ~5,400 | not yet checked | not yet checked |
| Diesel generator | 10,200–29,500 | pending | not yet checked |
| Utah grid average | ~2,600 | basis unstated, total statewide? per-MW? | **undefined** |

**Verdict on `C-32`: the table is not a like-for-like comparison and at least one row appears
wrong by roughly three orders of magnitude.** The "Utah grid average" row is worse than wrong
,  it has no stated basis at all, so it cannot mean anything. A reader is invited to conclude
Volition is ~11,500× cleaner than a gas engine when the defensible figure, against Utah's own
permitted comparable, is roughly **10×**.

**This matters more than it might appear.** The true comparison, ~10× cleaner than the
facility actually built in West Jordan, ~45× cleaner than the one permitted in Millard County
,  is a genuinely strong argument. Inflating it to 11,500× replaces a strong verifiable claim
with an indefensible one, and hands critics the easiest attack in the record.

---

## CALC-7: Thermal balance and the heat flux claim

### Total heat rejection

At steady state, essentially all fuel energy entering the site leaves as heat. The only
meaningful energy export is data transmission, which is negligible. A public commenter's argument
(`C-69`, `C-144`) is **thermodynamically correct.**

At η = 60%, 250 MW electrical:

```text
Fuel input        = 250 / 0.60      = 417 MW-thermal
Electrical output = 250 MW → becomes heat in the compute halls
Fuel cell waste   = 417 − 250       = 167 MW-thermal
TOTAL REJECTED    ≈ 417 MW-thermal
```

Heat recovery (`C-66`) does not change this total. Recovered heat driving absorption chillers
still rejects to atmosphere; it displaces electrical parasitic load, improving efficiency, but
the site energy balance is unchanged. **`C-66`'s "a large portion of the heat will never even
meet the atmosphere" is thermodynamically incorrect as stated.** The efficiency benefit is
real; the heat does not disappear.

### The ~13 W/m² claim (`C-63`)

> **Note on the denominator.** The Utah County Assessor record gives **69.478 acres = 281,167 m²**,
> not the ~25 acres stated in testimony. The parcel is the basis used below.

Over the parcel:

```text
417e6 W ÷ 281,167 m² = 1,483 W/m²
```

That is **114× the deck's stated ~13 W/m².** *(Over the ~92,900 m²
building footprint alone it would be ~4,490 W/m², or 345×; the parcel is the fairer denominator for
a site-wide flux and is used here.)* So what area produces 13?

```text
417e6 ÷ 13 = 3.2e7 m² = 32 km² ≈ 12.4 sq mi
```

Spanish Fork's municipal area is ~40.4 km², which yields:

```text
417e6 ÷ 40.4e6 = 10.3 W/m² , the same order as the stated 13
```

**Conclusion: the ~13 W/m² figure is the facility's total heat divided by the entire city's
area**, then compared against the standard urban anthropogenic heat flux literature range of
2–30 W/m².

**Verdict on `C-63`: MISLEADING BY JUXTAPOSITION, not false.** As a statement about *city-wide*
heat flux the comparison is coherent and even fair. But it is printed directly beside "Max of
+5°F on-site," inviting the reader to treat the two as the same basis. They differ by a factor
of ~317. A slide that said "spread across Spanish Fork's full area this is comparable to the
heat the city already produces" would be honest and would make the same point.

### The Lake Side comparison (`C-64`), this one checks out

Lake Side Power Plant, Vineyard: ~1,200 MW combined cycle, deck-cited heat rate 7,146 Btu/kWh
→ η = 3,412/7,146 = 47.7%.

```text
Lake Side waste heat = 1,200 × (1/0.477 − 1) = 1,315 MW-thermal
Volition ÷ Lake Side = 417 / 1,315 = 31.7%
```

**"Less than half of what an existing neighboring power plant already produces" is CORRECT.**
`C-64` VERIFIED. Credit where due, and note this is the one slide in the deck that discloses
its own methodological limitation.

### On-site temperature rise (`C-62`, `C-65`)

Air-mass energy balance, 417 MW into a plume crossing a 1,000 m width:

```text
ΔT = Q / (ρ · V · A · cp),  ρ ≈ 1.0 kg/m³ at ~4,600 ft, cp = 1,005 J/kg·K
```

| Wind speed | Mixing depth | ΔT |
|---|---|---|
| 5 m/s | 50 m | 1.7 K = **3.0°F** |
| 2 m/s | 50 m | 4.2 K = **7.5°F** |
| 0.5 m/s | 50 m | 16.6 K = 30°F, but see note |

At near-calm the uniform-mixing model breaks down: a 417 MW buoyant source generates strong
vertical plume rise, so heat goes up rather than accumulating laterally.

**Verdict: `C-62` (+5°F max on-site) is plausible and in the right range.** `C-65`
(<1°F beyond a quarter mile) is also plausible given plume rise and dilution.

**At approximately one mile the facility's thermal contribution will be far below 1°F, and not
perceptible.** The "heat plume following prevailing wind" argument is directionally
correct physics but the magnitude at this distance is negligible. Heat is not the impact
pathway to worry about at the receptor.

---

## CALC-8: Noise at the receptor

Tests `C-54`, `C-59`, `C-60`.

> **Source spec, confirmed.** Module rating and noise both come from the **Bloom Energy Server 6.5**
> datasheet: **325 kW net AC per unit**, and **"<65 dBA at 10 ft per unit"**, verbatim, measurement
> distance included. Volition did not invent, round, or shade it.

**Module count**

```text
250.00 MW ÷ 0.325 MW =   769 units   (rack-level compute load)
393.25 MW ÷ 0.325 MW = 1,210 units   (the permitted nameplate; matches S1 exactly)
500.00 MW ÷ 0.325 MW = 1,538 units   (ordinance cap; 1,539 would be 500.175 MW, over it)
```

**The structural problem with the deck's number is unchanged.** `P-12` states "<65 dBA, noise
at 10 ft **per unit**." A per-unit figure says nothing about an array of **770** sources, and
the property-line study was still "underway" at hearing time (`C-55`). The criticism is not
that the number is wrong, it is that a source spec is being presented where a receptor
prediction belongs.

Per-unit sound power, hemispherical radiation at r = 3.05 m:

```text
Lw       = 65 + 10·log10(2π · 3.05²) = 65 + 17.7  =  82.7 dBA re 1 pW
Lw_array = 82.7 + 10·log10(770)      = 82.7 + 28.9 = 111.6 dBA
```

At the receptor, **R = 1,609 m (approximately 1 mile)**, measured from the Utah County parcel polygon,
geometric spreading only:

```text
Lp = 111.6 − 10·log10(2π · 1,609²) = 111.6 − 72.1 = 39.5 dBA
```

### What §6's residential-boundary standard requires as a setback

§6 sets **55 dBA at a residential zone boundary, at any hour**, a stricter figure than the 65 dBA
property-line limit, and the one that would govern wherever the nearest residential zoning line
falls.

Inverting the model for the setback that standard requires, spreading only, no mitigation credit:

```text
55 dBA = 111.6 − 10·log10(2π · R²)
10·log10(2π · R²) = 56.6   →   R ≈ 300 m  (≈ 985 ft)
```

**So roughly 300 m of separation between the fuel-cell array and the residential zone boundary is
the floor for compliance before any attenuation credit.** The parcel is **69.5 acres**, about
530 m on a side if square, so this is achievable, **but it materially constrains where the array
and the cooling plant can sit**, and no site plan showing that separation exists in the public
record.

> **⚠ The source term is the weak point of this whole calculation, and it belongs up front.**
> Inverting "<65 dBA at 10 ft" via hemispherical radiation treats the unit as a **point source** , 
> but the Bloom ES 6.5 cabinet is **29'5" long**, so at a 10 ft measurement distance the source is
> three times longer than the distance. Finite-line integration gives **84.5 dBA** sound power and an
> ISO 3744 measurement surface gives **90.6**, against **82.7** for the point-source treatment.
> **All three are carried below, because the spread between them is the honest answer.**

**Array sound power**, at 770 units:

```text
Point-source inversion (as used below):  82.7 + 28.9 = 111.6 dBA   [understates]
Finite-line integration:                 84.5 + 28.9 = 113.4 dBA
ISO 3744 measurement surface:            90.6 + 28.9 = 119.5 dBA
```

Excess attenuation over 1,609 m:

| Mechanism | Adjustment |
|---|---|
| Atmospheric absorption (~500 Hz, 1.6 km) | −1 to −3 dB |
| Ground effect, soft ground | −3 to −10 dB |
| Terrain shielding (river bottoms depression, bench) | −5 to −15 dB |
| **Total** | **−9 to −28 dB** |

**Honest neutral-condition range at the receptor**, spanning both the source-term and attenuation
uncertainty:

```text
Lowest:  113.4 − 72.1 − 28 = 13.3 dBA
Highest: 119.5 − 72.1 −  9 = 38.4 dBA
```

**≈13–38 dBA.**

**That range is too wide to be decision-relevant, and saying so is the finding.** A 25 dB spread
covers everything from inaudible to clearly present. **This model cannot discriminate, and no
version of it should be quoted at a hearing.** Its only legitimate use is to establish that the
question is open, which is the argument for demanding the property-line study, not a substitute
for it.

Adding the two site-specific enhancers present at this receptor, winter inversion (+5 to +10 dB) and
nocturnal down-canyon flow (+3 to +8 dB), pushes the upper end to roughly **50 dBA** under
coincident worst-case conditions, against a typical rural night ambient of 30–40 dBA.

### The 55 dBA setback, recomputed

Inverting for §6's residential-zone-boundary standard, spreading only, no mitigation credit:

```text
Lw = 111.6 (point-source, as originally used) →  R = 270 m   [not the 300 m printed earlier]
Lw = 113.4 (finite line)                      →  R = 332 m
Lw = 119.5 (ISO 3744)                         →  R = 670 m
```

**The parcel is 69.5 acres, roughly 530 m on a side if square. The upper case does not fit.**
Barriers, enclosure, and ground effect can buy back 5–15 dB and would shrink it substantially, but
**no site plan showing any separation exists in the public record.** That is the point worth making:
not that compliance is impossible, but that **nobody has shown it is achievable on this parcel**,
and the ordinance requires no post-construction check either way.

**Sensitivity to authorized scale.** At the ordinance's 500 MW cap (1,540 units) every figure rises
**+3.0 dB**, the smallest real-world audible step. **Scale is a second-order variable; bearing,
atmospheric condition, and the source term dominate it.**

**Model validation against a measured campus, and it does not pass.** KSL measured **~70 dB at ~100 m** from Aligned's West Jordan
campus. The point-source model gives **63.6 dBA** at 100 m, **6.4 dB low**, against a source
(diesel generators and blowers) that should read *louder* per unit than fuel cells, not quieter.
**That is evidence against the source term, not for it**, and it is consistent with the finite-line
and ISO 3744 corrections above.
**The answer at the receptor, stated at the confidence the evidence supports.** Typical rural-subdivision
night ambient runs ~30–40 dBA and US-6 already raises the local floor.

- **Neutral daytime conditions: most likely at or below background.**
- **Winter inversion with nocturnal down-canyon flow: possibly audible as a steady low-level hum.**
- **The honest bottom line is that the uncertainty band is wider than the effect being measured.**
  Anyone, including this review, claiming to predict the receptor level from public information is
  overreaching.
- **Winter inversion with nocturnal down-canyon flow: plausibly at or slightly above night
  ambient, a steady low-level hum rather than an intrusion**, and most noticeable if the cooling
  equipment carries tonal content. Fan blade-pass tones are the usual culprit and are far more
  noticeable than broadband noise at the same dBA. The revised module count moves the estimate
  down ~2 dB from the original; it does not change the character of the answer.

**Residual uncertainties, in descending order of consequence:**

1. **The cooling plant, not the fuel cells, is the likely dominant source.** No spec for it exists
   in any public document. This model covers only the Bloom array and is therefore a floor, not a
   ceiling.
2. Whether 250 MW is delivered IT load or gross fuel-cell output. If parasitic load sits on top,
   the true unit count exceeds 770.
3. Real terrain, versus the flat-earth spreading assumed here.

**The property-line acoustic study is the binding document; this is a check on it, not a
substitute.** The right ask is not "is Volition lying about noise", the source number is
verbatim from the manufacturer. It is: **publish the study, make the limit receptor-located
rather than per-unit, and require the post-construction verification Volition's own Justification
Statement already says exists** (it does not).

---

## CALC-12: Potential to emit at the authorized nameplate

**Potential to emit is assessed at what the permit allows, not what the applicant intends to run.**
The delivered figure is 250 MW, but **the ordinance authorizes 500 MW per site** and the applicant's
own request referenced 400–500 MW nameplate.

**Inputs**

```text
NOx ceiling:      0.07 lb/MWh   [Bloom CARB DG certification EO DG-058, the certified
                                 ceiling, not the 5.17 tpy the deck estimates]
Capacity factor:  0.85          [conservative for PTE; the applicant stated 75% expected operation]
Hours:            8,760/yr
```

**Result**

```text
250.00 MW × 8,760 × 0.85 × 0.07 ÷ 2,000 =  65.1 tons/yr
393.25 MW × 8,760 × 0.85 × 0.07 ÷ 2,000 = 102.5 tons/yr   [the permitted nameplate]
500.00 MW × 8,760 × 0.85 × 0.07 ÷ 2,000 = 130.3 tons/yr   [the ordinance cap]
```

*(At the 75% capacity factor the applicant stated, 250 MW gives **57.5 tpy**, which still exceeds the 50 tpy
county offset trigger. The 85% case above is the appropriate basis for a potential-to-emit test.)*

**Thresholds crossed**

| Threshold | Value | 250 MW | 393.25 MW | 500 MW |
|---|---|---|---|---|
| Utah R307-421 Utah County NOx offset trigger | 50 tpy | **exceeded** | exceeded | exceeded |
| **NNSR major source, Marginal ozone area** | **100 tpy** | clear | **EXCEEDED** | **EXCEEDED** |
| PSD major source | 250 tpy | clear | clear | clear |

**Reading this honestly, because it cuts both ways.**

- **This is a ceiling, not a prediction.** Volition's stated estimate is **5.17 tpy**, roughly 11×
  below even the 250 MW ceiling case, and that estimate is **conservative** against
  Delaware's issued Bloom permits (~1.8 tpy at 250 MW). Nothing here suggests the facility will
  actually emit 130 tons.
- **But PTE is the legal test, and a zoning cap is the only durable control.** A facility permitted
  at 500 MW under §15.3.24 could, on certified-ceiling equipment at high utilization, cross the
  federal major-source threshold, which would trigger NNSR, offsets, and LAER. **The ordinance
  contains no potential-to-emit cap**, and §7 requires only that DAQ approvals be obtained and
  maintained.
- **No such cap appears anywhere in Exhibit A.** A ceiling written into the code is the only
  instrument that would foreclose this permanently.

---

## CALC-13: What the amendment authorizes, at its own stated maximum

**This is now the report's primary frame.** §15.3.24 caps generation at **"not more than 500
megawatts of nameplate generating capacity, measured per Onsite Power Generation Facility"**
(yellow-highlighted, so a Planning Commission addition), with a floor of 50 MW. §13 caps
**Data Center** sites at two citywide.

**Method: the same one Utah DAQ used.** DAQE-IN163550001-26 computes every limit as the
manufacturer's published rate × full nameplate × 8,760 hours. Applying that method at 500 MW is not
a worst case invented here; **it is the agency's own arithmetic at the ordinance's own number.**

```text
500 MW x 8,760 h = 4,380,000 MWh/yr per facility
```

| Quantity | One facility at 500 MW | Two data-center sites |
|---|---|---|
| Bloom ES 6.5 units | **1,538** (1,539 would be 500.175 MW, over the cap) | 3,076 |
| Array noise term, 10·log₁₀(N) | **31.9 dB** above one unit |, |
| **CO₂ equivalent** | **1,825,029 TPY** (1,655,640 metric t) | **3,650,057 TPY** (3,311,280 metric t) |
| Carbon monoxide | 28.47 TPY | 56.94 |
| **Nitrogen oxides** | **6.57 TPY** | **13.14** |
| Volatile organic compounds | 21.90 TPY | 43.80 |
| PM10 / PM2.5 (scaled) | 0.153 each | 0.305 |
| Sulfur dioxide (scaled) | 0.0127 | 0.025 |
| Total HAPs (scaled) | 0.369 | 0.737 |
| **Fuel input, LHV** | **769–943 MW-thermal** | **1,538–1,887 MW-thermal** |
| vs Lake Side Power Plant (~1,315 MW-th) | 58–72% | **117–143%, more than Lake Side** |
| **Natural gas** | **24.5–30.1 Bcf/yr**, 67–83 MMscf/day | **49–60 Bcf/yr** |
| Water, annual | ~318,000 gal | ~636,000 gal |
| Water, initial fill | ~636,000 gal | ~1,271,000 gal |
| Fuel cell yard, land | 14–18 acres | 28–36 acres |
| **Against the city's ~90 MW peak** | **5.6×** | **11.1×** |
| Against the FY2027 forecast peak, 115.76 MW | 4.3× | 8.6× |

**Inputs and their sources.** Bloom ES 6.5 datasheet `1016932-20260204` for 325 kW/unit, 65–53% LHV
efficiency, 5,811–7,127 Btu/kWh HHV, 0.003 lb NOx/MWh, 0.013 lb CO/MWh, 0.01 lb VOC/MWh, 378 kg
CO₂/MWh at end of life. PM, SO₂ and HAPs are **scaled linearly from DAQE-IN163550001-26** (×500/393.25)
because Bloom publishes no PM figure and calls SO₂ negligible. Gas at 1,037 Btu/cf. Water and land
scaled from the permitted design.

### The quota does not cap what people think it caps

§13, verbatim:

> *"Not more than two **Data Center with Onsite Power Generation Facility** sites… shall be approved
> and active within the corporate limits of Spanish Fork City at any time… **This limitation does not
> apply to a standalone Onsite Power Generation Facility established without an associated Data
> Center.**"*

**So the citywide ceiling is not 1,000 MW.** It is 1,000 MW of *data-center-paired* generation, plus
an **uncapped number of standalone Onsite Power Generation Facilities**, each permitted up to 500 MW.

The one real constraint on those is §2's requirement that generation be *"established only in
conjunction with, and scaled to serve, one or more principal uses lawfully established or
concurrently approved on the same site."* **A standalone facility still needs a principal use to
serve, so this is not a merchant-plant loophole.** But the principal use can be any lawful I-1 use,
and nothing in the text limits how many such pairings the city may approve.

**A second textual point.** The 500 MW cap is *"measured per Onsite Power Generation Facility,"* while
the quota is measured per **site**, defined as *"a single parcel or unified development."* **The two
are measured in different units**, and nothing states that one site may host only one facility.

> **Both points are questions for the City Attorney, not findings.** They are exactly the kind of
> ambiguity that gets resolved cheaply before adoption and expensively afterward.

---

## CALC-9: Scale against the city (`C-06`)

```text
250 MW ÷ 90 MW city peak = 2.78×
400 MW ÷ 90 MW           = 4.44×
500 MW ÷ 90 MW           = 5.56×
1000 MW ÷ 90 MW          = 11.11×   (two sites at the cap)

Against UMPA's primary-sourced figures (I-11a, I-11b):
500 MW  ÷ 74.10 MW FY2021 actual   = 6.75×
500 MW  ÷ 115.76 MW FY2027 forecast = 4.32×
1000 MW ÷ 115.76 MW FY2027 forecast = 8.64×
```

**`C-06` VERIFIED.** At 250 MW the facility generates ~2.8× the entire city's peak
consumption; at the requested 500 MW cap, ~5.6×.

This is the single most legible fact in the entire proposal and it is not in the deck. It also
reframes `C-11`: the "zero draw on the municipal grid" claim is accurate and valuable
precisely *because* the load is this large, Spanish Fork Power could not serve it under any
scenario. Staff's own testimony put a grid-connected 50 MW load at "two new substations... 30
to 40 million dollars" (`CC 2:32:52`). A 250 MW grid-tied load is not a thing Spanish Fork
could do at all.

---

## CALC-10: Fiscal

> **Sources.** Utah County Assessor parcel **67:228:0003**, Tax Area 150; Utah Admin Code
> **R884-24P-33** percent-good schedules.

**Confirmed inputs**

```text
Parcel:              67:228:0003, 69.478641 acres (NOT ~25 as testified)
Owner of record:     WDC Industrial Utah Owner LP
2026 total assessed: $50,898,400   [confirms the "~$50 million" cited on the record, 04 AUG min. p. 69]
Tax Area:            150  (point-in-polygon confirmed)
Combined rate:       0.010979
Distribution:        Nebo School District 79.7% | County+districts ~11.3% | Spanish Fork City 9.0%
```

### Year one

```text
$4.0B × 0.010979 = $43.9M gross
  → Nebo SD          ~$35.0M
  → County/districts  ~$5.0M
  → Spanish Fork City ~$3.95M
```

**`C-83`'s "approximately $40mm per year" is arithmetically sound in year one and is, if anything,
slightly conservative at the real certified rate.** The figure is not invented. **But it is gross,
and 79.7% of it is Nebo School District's, not the city's.** A Spanish Fork Council chamber heard a
number of which the city keeps roughly **9%.**

### The decay curve, on Utah's actual schedules

R884-24P-33 assigns two very different classes to the two halves of this facility:

| Year | **Class 12**, computer hardware | **Class 27**, electrical generating equipment |
|---|---|---|
| 1 | $27.2M | $42.6M |
| 2 | $20.2M |, |
| 3 | $9.2M |, |
| 4 | $4.0M |, |
| 5 | **$3.1M, residual floor** | $38.2M |
| 10 | **$3.1M** | $32.5M |

*(Each column models the entire $4B in that single class, at 0.010979. Reality is a blend.)*

**Class 12 reaches its 7% percent-good floor by year five. Class 27 retains ~76% at year ten.**

> **⚠ Two limits on this table.** **(1)** R884-24P-33 is a **personal property** schedule. A
> building retrofit is **real property** and does not depreciate on it, so the portion of the $4B
> that is construction is modeled wrongly here. **(2)** Volition has separately described the $4B
> as **excluding** tenant compute hardware. If that is right, the Class 12 collapse applies to a
> much smaller base than modeled, and the decay is far shallower than shown.
>
> **The direction of the finding survives both**, generation equipment holds value and compute does
> not, **but the magnitudes are illustrative, not predictive.** This is precisely why the pro forma
> is the thing to demand rather than something to substitute a model for.

**So the durability of the whole claim reduces to one undisclosed number: the compute/generation
split.**

```text
All-Class-12 case:  $27.2M → $3.1M/yr forever   ( ~$279k/yr to the city )
All-Class-27 case:  $42.6M → $32.5M at year 10  ( ~$2.9M/yr to the city )
```

To sustain a flat $40M/yr requires **$3.64B in assessed value every single year**, continuous
compute replacement, each refresh assessed at full value.

`C-86` (replacement sustains the base) is plausible for the generation half: The Volition representative told Council
the Bloom equipment gets *"a phased upgrade approximately seven or eight years after
installation"* (04 AUG min. p. 68), which matches Class 27 behavior. **He gave no comparable figure
for the compute side, which is the half that collapses.** Replacement is a business decision, not a
covenant. A development agreement could require a minimum assessed value; none is proposed.

**The document to demand is the tax pro forma**, Class 12/27 split, refresh assumption, assessed
value at years 1, 5, 10. A councilmember asked for exactly this on 04 AUG: *"the underlying figures needed
to be clearly documented."*

Also note `C-91`: the downside scenario of 75 MW at $1.4B implies $18.7M/MW, against $16M/MW for
the 250 MW/$4B case. Roughly consistent, the ratios do reconcile.

**Two errors to avoid, both easy to make:**

1. **Do not net the sales-tax exemption against property tax.** Utah Code **59-12-104(84)** is a
   *sales and use* tax exemption. It does not touch property tax. (And **59-12-104(80)** already
   exempts fuel cells outright, independent of any data-center status.)
2. **Do not cite $81,000,000 as a sale price.** That figure in the parcel abstract is a **trust
   deed.** Utah is a non-disclosure state; no sale price exists in the public record.

---

## CALC-11: Water plausibility **[PARAMETRIC]**

`C-42`: 250,000 gal/yr for a 250 MW closed-loop facility = 685 gal/day. For humidification
top-up on a sealed loop this is plausible; closed-loop systems genuinely do consume almost
nothing.

**But the accounting is incomplete.** At Novva West Jordan, public
utility records show ~3M gal/yr with **roughly two-thirds going to landscaping**, about 2×
the operational use. Volition's 250,000 gal figure is explicitly humidification-only and
appears to exclude site irrigation entirely.

If Spanish Fork's landscaping requirements for a 25-acre industrial site drive irrigation
demand comparable to Novva's, total site water could plausibly be **several times** the
headline figure. The unnamed commissioner who raised this (`C-52`) was asking the right
question and never got an answer.

`C-41`: the 500,000 gal initial fill against the deck's own cited basis
(155 gal/person/day × 3.39 persons = 525 gal/household/day = 191,700 gal/yr):

```text
500,000 ÷ 191,700 = 2.6 households, deck says "2 Utah households." ✓ close enough
250,000 ÷ 191,700 = 1.3 households, deck says "one household." ✓
```

**The household arithmetic checks out.** The water claims are internally consistent and the
cited sources are real. The gap is scope, not honesty.

---

## Running summary of verdicts from calculation

| Claim | Verdict from arithmetic |
|---|---|
| `C-34` CO2 = 3–4 diesel trucks | **SPLIT**, off by 1,292×–2,528× on total CO2; defensible on the criteria-pollutant basis, see CALC-2 |
| `C-31` emissions = 4–5 semi trucks | **UNFALSIFIABLE AS WRITTEN**, no basis stated; the two available readings differ by ~40×. Report the fleet-level figure, 2.2–2.3×, see CALC-5 |
| `C-32` comparison table | **MISLEADING**, recip engine row ~1,100× high vs. Utah's own permit; grid row has no stated basis |
| `C-63` ~13 W/m² | **MISLEADING BY JUXTAPOSITION**, city-area denominator printed beside an on-site figure. On-site flux is **114×** the stated value |
| `C-66` heat never meets atmosphere | **FALSE as stated**, efficiency benefit real, energy balance unchanged |
| `C-62` +5°F max on-site | **PLAUSIBLE** ✓ |
| `C-65` <1°F beyond ¼ mile | **PLAUSIBLE** ✓ |
| `C-64` less than half of Lake Side | **VERIFIED** ✓ |
| `C-69`/`C-144` public commenter on heat | **CORRECT** on the physics; magnitude at one mile negligible |
| `C-06` >2× city peak | **VERIFIED** ✓ |
| `C-83` ~$40M/yr | **CORRECT in year 1**, declining thereafter |
| `C-41`/`C-42` water arithmetic | **VERIFIED** ✓, but scope excludes landscaping |
| `C-52` landscaping water | **VERIFIED as a real gap**, ~2× operational use at Novva |
| `C-20` NOx 5.17 tpy | **CONSERVATIVE** ✓, 2.9× above the Delaware permit rate |
| `C-22` VOC 17.22 tpy | **CORROBORATED** ✓, within 6% of Delaware permit rate |
| `C-60` noise at receptor | **PROVISIONAL**, inaudible in neutral conditions, possibly marginally audible under inversion + drainage flow |
