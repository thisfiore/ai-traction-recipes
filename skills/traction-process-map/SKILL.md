---
name: traction-process-map
description: Break a business process into its single actions and build the AI Traction process table (process, actions, cost, can automate, saving, improvement). Use when the person describes how a job is done today, asks "which part of this can AI do?", when a brief needs its saving figure worked out, or before choosing what to automate first.
---

# Traction process map

You take a job the team does today and lay it out as a table of processes and single actions, each with what it
costs, whether a machine can do it, what that would save and what it would improve. This is the "micro" step of
the AI Traction method: even a rough breakdown shows where the saving is and where a person must stay in charge.
The table feeds the saving and growth figures of the brief.

## When to use

- The brief names a project but the saving is still a guess.
- The person says "we do it like this..." and describes steps.
- You must decide which step to automate first.

## When not to use

- A one-step task (nothing to map: go to `traction-smallest-test`).
- The process is already mapped in `traction/process-map.md` and nothing has changed.

## Procedure

1. **Read what exists**: `traction/brief.md`, any written procedure, a sample of the real work (three finished
   examples tell you more than a description).
2. **Ask the person to walk through one real case**, from the moment the work arrives to the moment it is done.
   Write down each thing someone does. Use their words for the steps.
3. **Group the actions into processes.** A process is a block with one clear result ("write the description",
   "translate it", "make the pictures"). Two to five processes is normal. More than seven: the perimeter is too
   wide, go back to the brief.
4. **For every action note**: who does it, how long it takes, how often, and what tool or supplier is used.
5. **Cost per process, per year.** Use the person's figures: supplier invoices, or hours × hourly cost × frequency.
   Missing figure → `[YOUR NUMBER]` and say how to find it.
6. **Can automate?** Answer per action with one of four words, and one line of reason:

   | Answer | Meaning |
   | --- | --- |
   | Yes | A machine can do it; a person samples the results |
   | Yes, with a check | A machine drafts, a person approves each one |
   | Partly | Some cases yes; say which stay with a person |
   | No | Needs judgement, a relationship or a signature |

   Not sure? Say so and mark it "to test": `traction-smallest-test` will prove it on a few real cases.
7. **Saving per process.** Cost today minus what would remain (the checks, the cases left to people, the running
   cost if you know it). Never claim 100%.
8. **Improvement.** One line per process on what gets better, not cheaper: faster replies, more languages, full
   coverage, more variants to choose from. This is the raw material for the growth lever.
9. **Mark where a person decides.** Every process keeps a named owner. Automating the work does not move the
   responsibility.
10. **Recommend the first step to automate**: high volume, clear rule, low harm if a result is wrong, easy to
    check. One step at a time, not the whole chain.
11. **Show the table and ask**: "Did I miss a step? Is any cost off?"

## What to ask the person

| Question | Suggested default |
| --- | --- |
| "Take the last one you did. What happened first? Then?" | walk through one real case, not the ideal one |
| "How long does that step take, and how many a week?" | a rough figure from a normal week |
| "Does a supplier or agency do part of it? What do they bill a year?" | take it from last year's invoices |
| "Where do mistakes usually happen?" | none: a quality check goes there |
| "Who answers for the result?" | the person who does it today |

## What to produce

`traction/process-map.md`:

```
# Process map: <project>

| Process | Actions | Cost / year | Can automate | Saving / year | Improvement |
| Write descriptions | write from photo; review | [YOUR NUMBER] | Yes, with a check | ... | short, long, SEO versions |

Totals: cost today ..., saving ..., (source of each figure)
People in the loop: <process> → <owner> → <what they check>
First step to automate: <one>, because <two lines>
To test: <actions whose answer is "not sure">
```

Then update the saving and growth lines in `traction/brief.md` so the two files agree.

## With Steerify, and without

- **Steerify present**: show the map as a picture, not only a table. Use a logical scheme (boxes joined by
  arrows, short labels, the automated steps marked) as the picture of a choice "Which step first?" (`ask_choice`,
  2 to 4 options, one recommended). Each process the person keeps becomes a requirement of the chapter; the first
  step to automate becomes a roadmap item (`add_roadmap_item`, kind `core`).
- **Claude Code alone**: write the file, print the table in the chat, and ask the closing question.

## Done when

- [ ] Every action has an owner, a time and a "can automate" answer with a reason.
- [ ] Every cost has a source or is marked `[YOUR NUMBER]`.
- [ ] No process shows a 100% saving.
- [ ] One first step is recommended, and the person agrees with the map.
- [ ] `traction/brief.md` shows the same totals.
