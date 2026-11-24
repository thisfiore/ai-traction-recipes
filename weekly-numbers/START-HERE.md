# Recipe: the weekly numbers

AI Traction, second edition · Build 4 (Chapter 23) · draft recipe, 22 November 2026

This folder is a ready start for one build of the book. You fill in a few plain files, hand the folder to
Steerify, and paste one message. From there Claude asks, proposes and builds, and you decide.

It has not been run from start to finish yet. Treat it as a draft.

## What you end up with

Every Monday, one page, always in the same shape: a headline, five numbers, each compared with last week and with
the same week last year, and at most three points to act on. Between Mondays you hear nothing, unless a number
crosses a line you set.

If you run Builds 1, 2 or 3, they keep a record of what went out and what came back. This build reads it: after
three months, their guessed growth lever becomes a count.

## Before you start: fill in the files

[TO DO: how long this takes. Not measured yet.]

| File or folder | What goes in |
|---|---|
| `numbers.md` | Your five numbers, and how each one is worked out. |
| `lines.md` | The lines that should trigger an alert. Start with two. |
| `exports/` | This year's exports from your tools (website, newsletter, social, ads, inquiries and sales). |
| `last-year/` | Last year's exports, for the comparison. |

## The skills this recipe needs

From the AI Traction skills pack: `traction-brief`, `traction-process-map`, `traction-smallest-test`,
`traction-plain-words`, `traction-focused-test`, `traction-cost-check`, `traction-handover`,
`traction-sample-data`, and `traction-privacy-check` (a report gets forwarded: totals, no names;
[TO DO: the chapter uses it, the site's skill list for this build does not have it yet]).
Only when a connector replaces the exports: `traction-integrations`.

The message below makes Claude check first, and stop if one is missing.
To install the pack, see Chapter 16 (Step 4). [TO DO: download address of the skills pack.]

## Start

1. Drag this folder onto Steerify and press **Set up with Claude**.
2. When the Claude session opens, paste the whole message below as your first request.

## The message to paste

```
This project is the weekly numbers from the book AI Traction (Chapter 23).

First, check the skills. These must be installed, in ~/.claude/skills or in .claude/skills in this folder:
traction-brief, traction-process-map, traction-smallest-test, traction-plain-words, traction-focused-test,
traction-cost-check, traction-handover, traction-sample-data, traction-privacy-check.
If any is missing, stop, tell me which ones, and help me install the AI Traction skills pack. Do nothing else.

What I want: every Monday, one page. A headline, my five numbers (numbers.md), each compared with last
week and with the same week last year, and at most three points to act on. Between Mondays, an alert only
when a number crosses one of my lines (lines.md).

My material is in this folder: numbers.md, lines.md, exports/, last-year/. Read all of it first.

Rules, not negotiable:
1. Read only. Never change a tool or a file.
2. Every number can be traced back to rows in an export.
3. If data is missing or looks wrong, say so at the top and do not fill the gap.
4. Say what happened. Mark any guess about why as a guess.
5. At most three points.
6. Totals, never names of customers.

How I want to work:
- I am not technical. Use plain words (traction-plain-words).
- Start with the interview (traction-brief). Ask me one thing at a time.
- Then the smallest test by hand (traction-smallest-test): last week from two of my tools, one page.
  Tell me which two numbers to check with a calculator. If they do not match, we stop and find out why.
- Then a batch: the last eight weeks, eight pages. Ask me whether any of them would have told me
  something I did not know in time. If not, we change the five numbers before building anything.
- Then propose the requirements and a roadmap. Park a dashboard, more than five numbers, and forecasts.
- Show me every choice as pictures, with one option suggested. For the first month suggest the simplest
  answer: I drop the exports into the folder myself. A connector comes later.
- First tests run on invented exports, including one with a missing day (traction-sample-data).
- Before forwarding any page: traction-privacy-check. Before making it weekly: traction-cost-check.

Do not build yet. Tell me what you understood, and what is missing from my files.
```

## What happens next

| You see | You do |
|---|---|
| Claude's summary of what it understood | Correct it |
| Questions, one at a time | Answer in a line |
| One page for last week | Check two numbers with a calculator |
| Eight pages for eight weeks | Would any have told you something in time? |
| A list of requirements and a roadmap | Confirm, edit or park each line |
| Choices as pictures (expect about three) | Pick one, or blend two with a note |
| Finished work on the To test tab | OK, Refine or Broken |

The choices you can expect: which five numbers, how the data gets in, what deserves an alert.

## The checks on the To test tab

- Two numbers recalculated by hand: they match.
- An export with a missing day: a warning at the top, and no normal report.
- A number that crosses a line: an alert.
- The page fits on one screen.

## When it is done

- A Monday task (Tasks tab): each run ends with the page, which you OK or send back.
- For the first month, you check two numbers by hand every week.
- A one-page guide for a colleague (`/traction-handover`).

## Needs

A Claude plan that includes Claude Code, Steerify (free, open source, steerify.dev), the AI Traction skills pack,
and exports from the tools you already use.
Steerify is independent and not affiliated with Anthropic.
Steerify runs on a Mac with macOS 15 or later (steerify.dev, version 0.5.6, November 2026). Without a Mac, the recipe also works with Claude Code alone: open the folder in Claude Code and paste the first message.
