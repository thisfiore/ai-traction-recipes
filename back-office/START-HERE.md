# Recipe: the back office

AI Traction, second edition · Build 6 (Chapter 25) · draft recipe, 22 November 2026

This folder is a ready start for one build of the book. You fill in a few plain files, hand the folder to
Steerify, and paste one message. From there Claude asks, proposes and builds, and you decide.

It has not been run from start to finish yet. Treat it as a draft.

## What you end up with

A clerk who prepares. You sign.

- A table of what was read: for every invoice and receipt, supplier or customer, date, amount, tax, category,
  and a link to the document. Lines Claude is not sure about are marked.
- Who is late: the unpaid invoices past their date, each with a draft reminder waiting for your OK.
- Costs by category, this month against last month.
- A list of contracts: who with, start, end or renewal, notice needed to leave, and the page where each is
  written. A reminder before a renewal date.
- One page a week, whose totals match the table, and a list of questions for your accountant.

Three rules, not negotiable: it works on copies (Claude never writes into your accounting software or your
bank); a person approves every step; it keeps a trail (for every line: which document, what was read, who
approved it).

## Before you start: fill in the files

[TO DO: how long this takes. Not measured yet.]

**Copies only.** The originals stay where they are.

| File or folder | What goes in |
|---|---|
| `inbox/` | Copies of the month's invoices and receipts. |
| `contracts/` | Copies of your contracts. |
| `categories.md` | Your categories, with examples. |
| `customers.csv` | Who you invoiced, how much, the due date. |
| `reminders/` | Three payment reminders you wrote and liked. |
| `bank/` | [TO DO: the chapter's scheme shows a bank export among the copies; its folder list does not. Optional.] |
| `for-the-accountant/` | Empty. The weekly page and the questions land here. |
| `today.md` | How the paperwork is done today, by whom, and the hours it takes. |

## The skills this recipe needs

From the AI Traction skills pack: `traction-brief`, `traction-process-map`, `traction-smallest-test`,
`traction-plain-words`, `traction-focused-test`, `traction-cost-check`, `traction-handover`,
`traction-sample-data`, `traction-privacy-check` (these documents carry bank details and personal data).

The message below makes Claude check first, and stop if one is missing.
To install the pack, see Chapter 16 (Step 4). [TO DO: download address of the skills pack.]

## Start

1. Drag this folder onto Steerify and press **Set up with Claude**.
2. When the Claude session opens, paste the whole message below as your first request.

## The message to paste

```
This project is the back office from the book AI Traction (Chapter 25).

First, check the skills. These must be installed, in ~/.claude/skills or in .claude/skills in this folder:
traction-brief, traction-process-map, traction-smallest-test, traction-plain-words, traction-focused-test,
traction-cost-check, traction-handover, traction-sample-data, traction-privacy-check.
If any is missing, stop, tell me which ones, and help me install the AI Traction skills pack. Do nothing else.

What I want: a clerk who prepares, and I sign. Read the invoices and receipts in inbox/, write down what is
in them, sort them (categories.md), list who is late (customers.csv) and draft a polite reminder in the
style of reminders/. Read the contracts in contracts/ and tell me which ones renew next month.
Every week, one page: in, out, due, overdue, and a list of questions for my accountant.

My material is in this folder: inbox/, contracts/, categories.md, customers.csv, reminders/, today.md.
Read all of it first.

Rules, not negotiable:
1. Work only on the copies in this folder. Never write into my accounting software or my bank.
2. Change nothing and send nothing without my OK. I approve what was read, how it was sorted, and each
   reminder before it goes.
3. If you cannot read an amount or a date for certain, say so and do not guess.
4. For every line, the document it came from, what was read, and who approved it.
5. Never pay, file, sign, delete, or decide anything about tax. Never touch payroll.
   Never decide what a clause means: show me the clause.
6. List questions for my accountant.

How I want to work:
- I am not technical. Use plain words (traction-plain-words).
- Start with the interview (traction-brief), with the "never" list in it. Ask me one thing at a time.
- Then the smallest test by hand (traction-smallest-test): twenty documents, including a photo taken badly
  and one in another language. The table: supplier, date, amount, tax, category. I check all twenty lines
  against the paper. Then one contract: its dates, its notice period, and the page where each is written.
  Tell me which kinds of document failed.
- Then the estimate (traction-process-map): the hours the paperwork costs today.
- Then propose the requirements and a roadmap. One whole month, checked by whoever does the books today,
  for two months, before it becomes weekly.
- Show me every choice as pictures, with one option suggested.
- First tests run on invented invoices and an invented contract (traction-sample-data).
- Before any real document: traction-privacy-check. Before making it weekly: traction-cost-check.

Do not build yet. Tell me what you understood, and what is missing from my files.
```

## What happens next

| You see | You do |
|---|---|
| Claude's summary of what it understood | Correct it |
| Questions, one at a time | Answer in a line |
| A table of twenty documents | Check every line against the paper |
| One contract's dates and notice | Open the pages it points to |
| A list of requirements and a roadmap | Confirm, edit or park each line |
| Choices as pictures (expect about three) | Pick one, or blend two with a note |
| Finished work on the To test tab | OK, Refine or Broken |

The choices you can expect: where the result lives (a spreadsheet you already use, or a small private page with
the document on one side and what was read on the other), how reminders go out (as drafts in your mailbox), how
the accountant gets it. Ask your accountant which format they want.

## The checks on the To test tab

- Twenty test documents against their table.
- An unreadable amount: marked, and no number is guessed.
- An invoice already paid: no reminder.
- The weekly totals match the table.
- A contract's renewal date: the one written in the contract.

## When it is done

- Before any reminder goes, you look at the bank yourself. A reminder to a customer who paid yesterday costs
  more than a late payment.
- A weekly task (Tasks tab), ending with the page you OK or send back.
- `/traction-privacy-check`, then a one-page guide for a colleague (`/traction-handover`).

## Never handed over

Paying anyone or moving money. Sending a reminder without your OK. Signing, changing or ending a contract.
Deciding what a clause means (if it matters, a lawyer reads it). Changing or deleting a record. Tax filings and
tax decisions, and anything your accountant signs. Payroll. It prepares. Your accountant decides.

## Check for your own case

Where the copies are kept, the data terms of your Claude plan, and how long you must keep the documents.

## Needs

A Claude plan that includes Claude Code, Steerify (free, open source, steerify.dev), the AI Traction skills pack,
copies of your documents, and your accountant, who stays.
Steerify is independent and not affiliated with Anthropic.
Steerify runs on a Mac with macOS 15 or later (steerify.dev, version 0.5.6, November 2026). Without a Mac, the recipe also works with Claude Code alone: open the folder in Claude Code and paste the first message.
