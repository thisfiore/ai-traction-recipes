---
name: traction-brief
description: Interview the person and write the AI Traction project brief (perimeter, drivers, inputs, saving, growth, AI Traction score). Use at the very start of a new automation or software project, when the person describes an idea in a sentence or two ("I want to automate our customer replies"), asks "is this worth doing?", or wants to compare several project ideas. Use before any building starts.
---

# Traction brief

You turn a loose idea into a one-page project brief that a non-technical person can read, correct and sign off.
The brief follows Phase 1 of the AI Traction method: a clear perimeter (what is in, what is out), the drivers that
size it, the inputs it needs, and two numbers, the yearly saving and the yearly growth, which add up to the
AI Traction score. Nothing is built in this skill. Its job is to make the next decision an informed one.

## When to use

- A new project, or an idea that has no written brief yet.
- The person has several ideas and needs to pick one.
- A project is under way but nobody can say in one sentence what it is for.

## When not to use

- A brief already exists in `traction/brief.md` and the person has agreed to it: read it, do not redo it.
- A small fix or change to something that already runs.

## Procedure

1. **Read first.** Look for a README, notes, spreadsheets, earlier files in `traction/`. Never ask what you can read.
2. **Get the project in one sentence**, in the person's words. Then rewrite it as a clear perimeter:
   what is done, for whom, on which channels. The book's test: a vague name is a NO, a described job is a YES.

   | NO (too vague) | YES (a perimeter) |
   | --- | --- |
   | "A customer care chatbot" | "Written replies to customer questions on chat, site forms and email, in 8 languages" |
   | "AI for marketing" | "Moving the weekly budget between paid campaigns and channels" |

3. **Add the drivers**: the few figures that size the job. How many items a month, how many languages, how many
   countries, how often (daily, weekly, per launch). Put them in the sentence itself.
4. **List the inputs.** What goes in (emails, a spreadsheet, photos, a price list), where it lives today, who owns
   it, and whether a sample exists. What comes out, and who checks it before it is used.
5. **Split the project into 2 to 5 processes**, one line each, with what it costs today per year. If the person
   wants the detail action by action, use `traction-process-map` and bring its totals back here.
6. **Saving lever.** For each process: cost today, can it be automated (yes, partly, no), saving per year.
   No yearly figure? Build it with the person: hours per week × hourly cost × weeks, or price per item × items.
7. **Growth lever.** Ask the three driver questions from the book and write one line for each that applies:
   - Speed and frequency: could it be done faster or more often, and would that be worth something?
   - Know-how: could a trained AI do it closer to your standard than what you have now?
   - Scale: could it reach more languages, markets or customers than you can afford today?
   Put a figure only with its assumption next to it ("10% more conversions on [YOUR NUMBER] revenue"). Label it
   preliminary.
8. **AI Traction = saving + growth, per year.** Show the sum in the score table.
9. **Cost, time and return**, when known (from `traction-smallest-test` or a supplier quote):
   return over the period = AI Traction × years − cost. The book's example: 200K a year over 3 years, minus a
   100K cost, gives 500K.
10. **Several ideas?** One row per idea in the same table. Recommend the one with high traction, a time to market
    the business can live with, and a feasibility that is easy to test. Say why in two lines.
11. **Show the brief and ask for an OK.** Change it until the person says it is right.

## Rules for numbers

- Never invent a figure. A number the person has not given is written `[YOUR NUMBER]`, with how to find it.
- Next to every figure write where it comes from: "you said", "from the March invoices", "assumption".
- Ranges are fine ("20 to 30K"). False precision is not.

## What to ask the person

Ask at most five questions at a time, in plain words. Offer the default and move on if they accept it.

| Question | Suggested default |
| --- | --- |
| "In one sentence, what should this do for you?" | none: this one is theirs |
| "How much of it is there? Per week or per month." | a rough count is enough; refine later |
| "Who does it today, and about how many hours a week?" | estimate together from one normal week |
| "What does an hour of that person cost you, all in?" | `[YOUR NUMBER]`; never guess a salary |
| "If it ran faster or more often, what would you gain?" | "nothing yet": growth stays empty, saving decides |
| "Who must approve the result before it goes out?" | the person you are talking to |

## What to produce

One file, `traction/brief.md`, no longer than a page:

```
# <Project in one sentence, with its drivers>
Perimeter   In: ...            Out (not now): ...
Inputs      <what> | <where it lives> | <owner> | <sample: yes/no>
Output      <what comes out> | checked by <who>

| Process | Cost today / year | Can automate | Saving / year | Improvement |
| Lever | Where it applies | Per year |      (Saving, Growth, AI Traction = sum)
| Project | AI Traction | Cost | Time to market | Return over <period> |
Sources and assumptions: one line per figure.
Open questions: ...
```

## With Steerify, and without

- **Steerify present** (`STEERIFY_PROJECT` is set): the brief still lives in `traction/brief.md`. Questions with
  more than one sensible answer go on the board as choices (`ask_choice`, 2 to 4 options, one recommended, a small
  picture per option; scope-only questions are `simple`). Once agreed, the perimeter becomes the objective of the
  first chapter and each "In" line a requirement (`add_chapter`), left as a draft for the person to approve.
- **Claude Code alone**: ask in the chat, write the file, and end with the score table and one question:
  "Is this right?"

## Done when

- [ ] The project reads as one sentence with its drivers, and "Out" lists what is left for later.
- [ ] Every figure has a source or is marked `[YOUR NUMBER]`.
- [ ] Saving, growth and AI Traction are in one table and the sum is correct.
- [ ] The person has read the brief and said yes.
