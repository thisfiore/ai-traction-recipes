# Recipe: the content engine

AI Traction, second edition · Build 1 (Chapter 20) · draft recipe, 22 November 2026

This folder is a ready start for one build of the book. You fill in a few plain files, hand the folder to
Steerify, and paste one message. From there Claude asks, proposes and builds, and you decide.

It has not been run from start to finish yet. Treat it as a draft.

## See where you are going

Open `sample/index.html` in your browser, or the same sample online at ai-traction.com/build/content-engine/sample.
It is a small app with an invented accounting studio (Northside Accounting) and one invented month: twelve posts, a
newsletter and an article, through the six stages. There is no AI inside and nothing is sent. Yours will look
different, because Claude builds it around your files.

## What you end up with

Every month, one short brief becomes a set of finished pieces (for the studio in the book: twelve posts for one
social channel, one newsletter and one article), each read and approved by a person. You also get a record of what
went out, so next month does not repeat it.

## Before you start: fill in the files

| File or folder | What goes in |
|---|---|
| `voice/` | 15 to 20 things you wrote and liked: posts, emails, a page of your site. Any format. |
| `pictures/` | Photos you have the right to use, and your logo. |
| `brand.md` | Tone, colors, logo. You can leave it as it is: Claude drafts it from your site and your samples, and you correct it. |
| `offers.md` | Your services, and the prices you publish. |
| `facts.md` | What is true about you and fine to see in public. |
| `never.md` | Words, promises and topics you never use. |
| `calendar.md` | The dates that matter to your customers. |

Short is fine. Empty is not (except `brand.md`): Claude writes only from what is here.
Real customers' names stay out of the first tests: Claude tests on invented material first.

## The skills this recipe needs

From the AI Traction skills pack: `traction-smallest-test`, `traction-brief`, `traction-process-map`,
`traction-brand-rules`, `traction-plain-words`, `traction-sample-data`, `traction-focused-test`,
`traction-cost-check`, `traction-privacy-check`, `traction-handover`.
Only if you connect a scheduling or newsletter tool: `traction-integrations`.

You do not have to check them yourself: the message below makes Claude check first, and stop if one is missing.
To install the pack, see Chapter 16. [TO DO: download address of the skills pack.]

## Start

1. Drag this folder onto Steerify and press **Set up with Claude** (Chapter 16). A board opens next to a Claude session.
2. Paste the whole message below as your first request.

## The message to paste

```
This project is the content engine from the book AI Traction (Chapter 20).

First, check the skills. These must be installed, in ~/.claude/skills or in .claude/skills in this folder:
traction-smallest-test, traction-brief, traction-process-map, traction-brand-rules, traction-plain-words,
traction-sample-data, traction-focused-test, traction-cost-check, traction-privacy-check, traction-handover.
If any is missing, stop, tell me which ones, and help me install the AI Traction skills pack. Do nothing else.

What I want: every month, one short brief from me becomes a set of finished pieces,
each one read and approved by a person before it goes anywhere.
Six stages: brief, ideas, drafts, production, review, publishing.
Keep a record of what went out, so next month does not repeat it.
sample/ shows the finished thing on an invented studio. Use it to understand the stages, not as my content.

Size for the first month: [12 posts for ONE channel, 1 newsletter, 1 article], one language.
If I cannot review a month properly, the month is too big: make it 8 posts.

My material is in this folder: voice/, pictures/, brand.md, offers.md, facts.md, never.md, calendar.md.
Read all of it first.

Rules, not negotiable:
1. Nothing goes out without my OK.
2. Every fact comes from my files, or is marked [CHECK].
3. No invented customers, quotes or numbers.
4. Only my own pictures, from pictures/.
The engine never answers comments. People who write back get a person.

How I want to work:
- I am not technical. Use plain words (traction-plain-words).
- Start with the interview (traction-brief). Ask me one thing at a time.
- Draft brand.md from my site and my samples (traction-brand-rules). I will correct it.
- Then the smallest test by hand (traction-smallest-test): I tell you in three lines what I want to say this month,
  you propose three ideas, I pick one, you write one post, one newsletter and one short article from it.
  I read them aloud. Nothing is built before I say these are good.
- Then the estimate (traction-process-map): ask me how content is made today and the hours it takes.
  If I publish nothing today, the savings lever is zero. Count my review time as a cost.
- Then propose the requirements and a roadmap. Park video, paid ads, a second channel and a second language.
- Show me every choice as pictures, with one option suggested. For the first month suggest the simplest answer:
  files and conversation, and a folder of approved pieces that I upload myself.
- First tests run on invented material (traction-sample-data).
- Before the first real month: traction-cost-check, and traction-privacy-check (a newsletter list is a list of people).

Do not build yet. Tell me what you understood, and what is missing from my files.
```

## What happens next

| You see | You do |
|---|---|
| Claude's summary of what it understood | Correct it |
| Questions, one at a time | Answer in a line |
| A draft of brand.md | Correct it |
| Three ideas, then three sample pieces | Read them aloud. Good, or fix the material |
| The estimate: hours today, the two levers | Check the numbers you know |
| A list of requirements and a roadmap | Confirm, edit or park each line |
| Choices as pictures (expect about six) | Pick one, or blend two with a note |
| Finished work on the To test tab | OK, Refine or Broken |

The choices you can expect: what the engine is, what a brief must contain, how it learns your voice, how far
production goes, what the review looks like, how approved pieces reach the channels.

## The checks on the To test tab

- A brief with no audience and no date: it asks, it does not start.
- Three posts read aloud: you would sign them.
- Every date, number and rule: it is in your files, or it carries a [CHECK].
- A brief on a topic your files say nothing about: it asks you, it does not make something up.
- One piece left unapproved: it is not scheduled.

## When it is done

- One real month has gone out, every piece approved by you, uploaded by you.
- A monthly task (Tasks tab) runs it and ends with a short report you OK or send back.
- After the second month, a one-page guide lets a colleague run a month without you (`/traction-handover`).

## What a person still decides

Every month: the brief, the idea, the review, the last OK. Never hand over the facts, the review or the answers.
When a rule or a date changes, update `facts.md` and `calendar.md` first: that is where the engine looks.
Each platform has rules on automated posting, and some professions have rules on advertising: check yours.

## Needs

A Claude plan that includes Claude Code, Steerify (free, open source, steerify.dev) and the AI Traction skills pack.
Steerify is independent and not affiliated with Anthropic.
Without Steerify, the recipe also works with Claude Code alone: open the folder in Claude Code and paste the message.
