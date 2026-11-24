# Recipe: the week plan

AI Traction, second edition · Build 5 (Chapter 24) · draft recipe, 22 November 2026

This folder is a ready start for one build of the book. You fill in a few plain files, hand the folder to
Steerify, and paste one message. From there Claude asks, proposes and builds, and you decide.

It has not been run from start to finish yet. Treat it as a draft.

## What you end up with

- **The Monday plan.** One page, written from the work list the team already keeps: each person's week, the
  deliveries with their dates, and anything that does not fit.
- **Reminders.** A short message to the owner of a delivery, a few days before its date. One reminder, to one
  person, about one thing.
- **The Friday check.** Done, not done, moved. It becomes the start of next Monday's plan.

One rule holds it together: **Claude proposes, people assign.** It never gives a person's work to someone else,
never changes a date and never tells a customer anything. It shows the problem and one or two ways out.

If you run Build 2, the recap of each call already says who does what and by when: those lines arrive here.

## Before you start: fill in the files

[TO DO: how long this takes. Not measured yet.]

First decide where the work list lives: one place, a spreadsheet or the tool the team already uses, reached
through its connector. Do not buy a new tool for this build.

| File or folder | What goes in |
|---|---|
| `work-list/` | The list of open jobs (what, who, by when), or a weekly export of it. Or nothing, if a connector reads your tool. |
| `team.md` | Who does what kind of work, and the days each person works. |
| `rules.md` | What counts as too much for one person, and how many days before a date the reminder goes. |
| `today.md` | How the plan is made today, by whom, and the hours it takes. |

## The skills this recipe needs

From the AI Traction skills pack: `traction-brief`, `traction-process-map`, `traction-smallest-test`,
`traction-plain-words`, `traction-focused-test`, `traction-cost-check`, `traction-handover`,
`traction-privacy-check` (workload is information about colleagues), and `traction-sample-data` (an invented team
for the first tests; [TO DO: the chapter uses it, the site's skill list for this build does not have it yet]).
Only if the list is reached through a connector: `traction-integrations`.

The message below makes Claude check first, and stop if one is missing.
To install the pack, see Chapter 16 (Step 4). [TO DO: download address of the skills pack.]

## Start

1. Drag this folder onto Steerify and press **Set up with Claude**.
2. When the Claude session opens, paste the whole message below as your first request.

## The message to paste

```
This project is the week plan from the book AI Traction (Chapter 24).

First, check the skills. These must be installed, in ~/.claude/skills or in .claude/skills in this folder:
traction-brief, traction-process-map, traction-smallest-test, traction-plain-words, traction-focused-test,
traction-cost-check, traction-handover, traction-privacy-check, traction-sample-data.
If any is missing, stop, tell me which ones, and help me install the AI Traction skills pack. Do nothing else.

What I want: on Monday, one page for the team: who does what this week, what is due, and where there is
too much on one person. Before a delivery is late, one reminder to the person who owns it. On Friday, a
short check: done, not done, moved. It starts next Monday's plan.

My material is in this folder: work-list/, team.md, rules.md, today.md. Read all of it first.

Rules, not negotiable:
1. Read the list. Never change it without my OK.
2. Never move work from one person to another. Propose it to me.
3. Write facts about work, never judgments about people.
4. Reminders go only to the person who owns the delivery. One reminder per delivery.
5. Nothing goes to a customer.
6. A job with no owner is listed as "nobody's". Do not hand it to someone.

How I want to work:
- I am not technical. Use plain words (traction-plain-words).
- Start with the interview (traction-brief). Ask me one thing at a time.
- Then the smallest test by hand (traction-smallest-test): from the open jobs, the week on one page,
  person by person, and what is at risk. We read it standing up, in ten minutes. Then ask me: did the page
  say anything the person who usually makes the plan did not already know?
- Then a batch: the last four weeks, as they were on each Monday, four plans. Compare them with what really
  happened. If the plan would not have seen the late deliveries coming, the problem is the list: tell me
  what the team should write down, before you build anything.
- Then the estimate (traction-process-map): the hours the plan costs today, usually one person's.
- Then propose the requirements and a roadmap.
- Show me every choice as pictures, with one option suggested.
- First tests run on an invented team (traction-sample-data).
- Before the team sees anything: traction-privacy-check. Decide with me who may see the plan.

Do not build yet. Tell me what you understood, and what is missing from my files.
```

## What happens next

| You see | You do |
|---|---|
| Claude's summary of what it understood | Correct it |
| Questions, one at a time | Answer in a line |
| This week on one page | Read it with the team, standing up |
| Four plans for the last four weeks | Would they have seen the late deliveries? |
| A list of requirements and a roadmap | Confirm, edit or park each line |
| Choices as pictures (expect about three) | Pick one, or blend two with a note |
| Finished work on the To test tab | OK, Refine or Broken |

The choices you can expect: what the page looks like (by person or by delivery), how reminders arrive (in the
team's chat, by email, or only on the page), who receives the plan.

## The checks on the To test tab

- A person with too much in one week: flagged.
- A delivery due in three days with nothing done: flagged.
- A job with no owner: listed as "nobody's", and Claude does not hand it to someone.
- The page is read in two minutes.

## When it is done

- Two tasks (Tasks tab): the Monday plan and the Friday check. Each ends with a result a person OKs before the
  team sees it.
- A one-page guide (`/traction-handover`): the plan no longer depends on the one person who used to make it.

## Check for your own case

- Whether your planning tool offers a connector, and whether it can be set to read only.
- The rules on employee data that apply to you.
- If on the third Monday nobody opens the plan, make it shorter, or stop it.

## Needs

A Claude plan that includes Claude Code, Steerify (free, open source, steerify.dev), the AI Traction skills pack,
and the work list your team already keeps.
Steerify is independent and not affiliated with Anthropic.
Steerify runs on a Mac with macOS 15 or later (steerify.dev, version 0.5.6, November 2026). Without a Mac, the recipe also works with Claude Code alone: open the folder in Claude Code and paste the first message.
