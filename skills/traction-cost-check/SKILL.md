---
name: traction-cost-check
description: Estimate what a project costs to run each month and flag expensive choices before they are made. Use before adding any paid service, AI model, hosting plan or subscription, before a batch run over many items, when moving from a test to daily use, when the person asks "what will this cost me?", and before any choice whose options differ in running cost.
---

# Traction cost check

You make sure nobody is surprised by a bill. The AI Traction method separates the cost of setting something up
from the cost of running it: what it costs to process 100 items, month after month. You estimate that running
cost from real prices and real volumes, compare it with the saving in the brief, and raise your hand before a
choice that would make it jump. You never quote a price from memory.

## When to use

- Before any paid service enters the project, or a plan is upgraded.
- Before running a batch (cost of the run, in advance).
- When the level of automation goes up, or volumes grow.

## When not to use

- Free, local work with no outside service involved.
- A cost check for the same setup was done this month and nothing has changed.

## Procedure

1. **List everything that bills.** Go through the project and name each paid thing:

   | Kind | Typical unit |
   | --- | --- |
   | AI model use | per amount of text read and written, or per image, minute of audio or video |
   | Hosting (where the product runs) | per month, by size |
   | Data storage and backups | per month, by size |
   | Email and messages | per message, or a monthly tier |
   | Other services (payments, maps, scheduling) | per transaction or per seat |
   | Subscriptions for people | per user per month |

2. **Get the volumes from the brief**: items per month, size of an item, how many steps each item goes through,
   how many people use it. Use the person's numbers; missing ones are `[YOUR NUMBER]`.
3. **Look up today's price** on each provider's own pricing page. Write the price, the page address and the date
   next to it. Prices change often: if you cannot open the page, write `[TO VERIFY]`, not a remembered figure.
4. **Measure, do not guess, where you can.** Run 10 items, read what was actually used, multiply. Mark the
   result "measured on 10 items on <date>". This is the 100-item running cost the method asks for.
5. **Build the table**: per line, unit price × volume = monthly cost. Add a low and a high case (half and
   double the volume).
6. **Compare with the brief.** Running cost per year against saving per year. If running cost eats more than
   about a fifth of the saving, say so clearly.
7. **Flag the expensive choices.** Stop and ask before any of these:
   - a cost that grows with every item and has no ceiling;
   - the largest AI model where a smaller one passes the test;
   - doing a step for every item when a sample or a rule would do;
   - a yearly contract, a minimum spend, or a plan with a steep next tier;
   - a second paid service that does what one already in the project does;
   - anything that keeps billing when nobody is using it.
8. **Offer the cheaper way** for each flag, with what is lost. Show it as a choice (`traction-plain-words`).
9. **Set a ceiling.** Agree a monthly limit with the person and, where the provider allows it, set a spending
   limit or an alert in the provider's account. Say where to look at the bill.
10. **Write it down** and say when to check again (after the first full month, and whenever volumes double).

## What to ask the person

| Question | Suggested default |
| --- | --- |
| "How many of these a month, roughly?" | the figure in the brief |
| "What monthly amount would you be comfortable with?" | a tenth of the monthly saving |
| "Should I stop and ask before any new paid service?" | yes, always |
| "Who gets the bills and holds the accounts?" | the business owner, never Claude |
| "Is slower but cheaper acceptable here?" | yes, unless a customer is waiting |

## What to produce

`traction/costs.md`:

```
# Running cost: <project>            checked on <date>
| What | Provider | Unit price (source, date) | Volume / month | Cost / month | Measured or estimated |
Total / month: low ... expected ... high ...       Per 100 items: ...
Against the brief: saving / year ... vs running cost / year ...
Flags: <choice> → <cheaper way> → <what you lose>
Ceiling agreed: ... / month; alert set at: ...; bills arrive at: ...
Check again: <when>
```

Set-up cost (your time, a partner's quote) is listed apart; it is not running cost.

## With Steerify, and without

- **Steerify present**: every flag is a choice on the board (`ask_choice`): the options side by side, each with
  a small picture of its monthly cost at low, expected and high volume (three bars with the figures) and what
  you get for it; one recommended. The agreed ceiling is a requirement of the chapter. A cost check before going
  live is a roadmap item.
- **Claude Code alone**: print the table and the flags in the chat and do not add the paid service until the
  person says yes.

## Done when

- [ ] Every paid item is listed with a price, its source page and the date, or marked `[TO VERIFY]`.
- [ ] Volumes come from the person or are marked `[YOUR NUMBER]`.
- [ ] Low, expected and high monthly totals are shown, and the cost per 100 items.
- [ ] Every flag has a cheaper alternative and the person has chosen.
- [ ] A monthly ceiling is agreed and, where possible, set at the provider.
