---
name: traction-smallest-test
description: Choose the lowest automation level (0 manual, 1 batch, 2 workflow, 3 software) that proves an idea, and define the first batch of about 100 items. Use when the person wants to start building, asks "how big should the first version be?", proposes a full system or app as a first step, or when a brief exists and no test has been run yet.
---

# Traction smallest test

You stop the project from starting too big. The AI Traction method has four automation levels, each slower and
dearer than the one before. Your job is to pick the lowest level that can prove the idea works, shrink the
perimeter until it fits, and define a first batch of about 100 real items with a clear pass mark. The person
learns quality, variability and running cost before spending on anything larger.

## The four levels

| Level | What it is | It proves | Typical use |
| --- | --- | --- | --- |
| 0 Manual | You and Claude solve a handful of real cases by hand | It can be done; which approach works; where a check is needed | 5 to 10 items |
| 1 Batch | The same steps run over a list or a folder, not connected to anything | Quality over many cases; consistency; running cost of 100 items | about 100 items; jobs done monthly or per launch |
| 2 Workflow | Runs by itself on a trigger, keeps a state (to do, doing, done), sends data to other tools | It holds up day after day | the right end point for most small businesses |
| 3 Software | A tailor-made system with its own screens | Few limits, at the price of time and money | only after levels 0 to 2 have paid off |

## When to use

- Before the first build of any project.
- When the plan on the table is level 2 or 3 and nothing has been tested at level 0 or 1.

## When not to use

- A test at this level has already passed and the person has decided to go one level up.
- A change to something already running in production.

## Procedure

1. **Read** `traction/brief.md` and `traction/process-map.md`. Take the first step to automate from the map.
2. **Start at level 0, always.** Solve 5 to 10 real cases by hand, with the person watching the results. Try two
   or three approaches (different instructions, more or fewer inputs). Keep a note of what you changed each time:
   a recipe without the quantities cannot be repeated.
3. **Shrink the perimeter.** Ask the book's three questions: Can this be tested in a narrower perimeter? Can
   variables and features be removed? How can the first test be leaner and faster? One category, one language,
   one channel.
4. **Pick the level** with this rule: the lowest one that answers the open question.

   | Open question | Level |
   | --- | --- |
   | "Can AI do this at all, to our standard?" | 0 |
   | "Is it good on many different cases? What does it cost to run?" | 1 |
   | "Will it run every day without us?" | 2 |
   | "Do we need our own screens and logic?" | 3, and only with levels 0 to 2 behind you |

5. **Define the batch.** About 100 items, chosen to include the ordinary cases, the awkward ones and a few that
   should be refused. Real items if they hold no personal data; otherwise use `traction-sample-data` first.
6. **Set the pass mark before running.** What "good" means for one item, in the person's words, and how many of
   the 100 must reach it. Who judges, and how long it will take them.
7. **Estimate time and cost** of the test, and of the next level if it passes. Use `traction-cost-check` for the
   running cost. Fill the complexity table below.
8. **Say what happens next**: pass → go one level up; fail → fix and rerun, or park the idea in the backlog.
9. **Get the person's OK** on level, batch and pass mark. Then build only that.

## What to ask the person

| Question | Suggested default |
| --- | --- |
| "Which slice shall we test first?" | the slice with most volume and least risk |
| "Can I use 100 real ones, or do they contain customer details?" | sample data until told otherwise |
| "What makes one result good enough to use?" | "I would send it with small edits or none" |
| "How many out of 100 must be good?" | 80, to be adjusted after level 0 |
| "Who will look at the results, and when?" | the person who does the job today |

## What to produce

`traction/first-test.md`:

```
# First test: <slice>
Question it answers: ...
Level: <0-3>, because ...          Left out for now: ...
Batch: <how many>, from <where>, mix: ordinary / awkward / to refuse
Good means: ...                    Pass mark: <n> of <total>, judged by <who>
What we track: instructions used, inputs given, changes between runs

| Complexity level | Time estimate | Cost estimate | Owner |
| Level 0: 10 items by hand | ... | ... | internal |
| Level 1: batch of 100 | ... | ... | ... |
| Level 2: workflow, full perimeter | ... | ... | ... |

If it passes: ...   If it fails: ...
```

Estimates you cannot ground are written `[TO VERIFY BY A REAL RUN]`.

## With Steerify, and without

- **Steerify present**: the level is a choice on the board (`ask_choice`): 2 to 4 options, one recommended, each
  with a picture of **what the person would get** at that level (for example: a sheet of 10 results; a folder of
  100 with a summary; a workflow scheme). The batch test becomes a `core` roadmap item; the next level a `later`
  one. When the batch has run, deliver it to **To test** with `traction-focused-test`.
- **Claude Code alone**: show the level table with your recommendation in the chat, write the file, wait for a yes.

## Done when

- [ ] Level 0 was run on real or sample cases before any higher level was proposed.
- [ ] The chosen level is the lowest that answers the open question, and the reason is written.
- [ ] The batch, the meaning of "good" and the pass mark were agreed before the run.
- [ ] Time, cost and owner are filled for this level and the next.
