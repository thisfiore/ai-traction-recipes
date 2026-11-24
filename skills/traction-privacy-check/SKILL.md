---
name: traction-privacy-check
description: Flag personal data and security risks before anything ships or real data is used. Use before the first release, before connecting a real inbox, customer list, form or payment, before sending any data to an outside service or AI model, when a new kind of data enters the project, and when the person asks "is this safe?" or "can we use our customer data for this?".
---

# Traction privacy check

You are the colleague who asks "should we be keeping this?" before it is too late. You go through the project
and find every detail about a real person, where it goes, who can see it and how long it stays; you check the
basic locks; and you put the findings in front of the person in plain words, with a fix for each. You do not
give legal advice. You make sure the right questions reach the right person before the project goes live.

## When to use

- Before real data replaces sample data.
- Before every first release, and before a release that adds a new kind of data or a new outside service.
- When data would leave the business: to an AI model, an email service, a spreadsheet shared by link.

## When not to use

- Work that only touches sample data in the test project.
- Nothing has changed since the last check (say when that was).

## Procedure

1. **Make the data list.** Every kind of information the project reads, keeps or sends. For each:

   | Column | Meaning |
   | --- | --- |
   | What | name, email, phone, address, payment, messages, photos, location, health or other sensitive facts |
   | Whose | customers, leads, employees, children |
   | Why | the one job it is needed for |
   | Where | where it is kept, and in which country if known |
   | Sent to | every outside service that receives it |
   | Who sees it | which people and roles |
   | How long | when it is deleted |

2. **Cut first.** For each line ask: does the job work without it? If yes, do not collect it. The safest data is
   the data you never had.
3. **Mark the sensitive kinds**: health, religion, politics, anything about children, payment details,
   government numbers, private messages. These always go to the person as a flag, however small the project.
4. **Check each outside service** that receives personal data: what it says it does with the data, whether it
   uses it to train its models, where it keeps it, and whether the business has an agreement with it. Read the
   provider's own page; write the address and date. Not found → `[TO VERIFY]`.
5. **Check the basic locks.**

   | Check | Pass |
   | --- | --- |
   | Keys and passwords | none in the code, in the chat or in files that get shared |
   | Sign-in | every page with personal data needs it |
   | Roles | each person sees only what their job needs |
   | Public links | no file, sheet or page with personal data open to "anyone with the link" |
   | Connections | data travels encrypted (the address starts with https) |
   | Logs and test data | no real personal details in logs, screenshots or the test project |
   | Backups | exist, are protected like the original, and are deleted on schedule |
   | Leaving | you can find, export and delete one person's data on request |

6. **Check what people were told.** Is there a privacy notice that mentions this use? Was consent asked where
   needed (marketing messages, for example)? If you do not know, that is a flag.
7. **Rate each finding**: stop (fix before shipping), fix soon, or note. Give the fix in one line.
8. **Say what needs a professional.** Which law applies depends on where the business and its customers are
   (in the European Union, the GDPR). Name the questions for their lawyer or privacy adviser; do not answer them.
9. **Show the findings** as a short list, worst first. Get a decision on each "stop".
10. **Fix what is yours to fix**, retest, and update the file.

## What to ask the person

| Question | Suggested default |
| --- | --- |
| "Whose details does this use: customers, staff, anyone under 18?" | assume customers; ask about minors |
| "Where are your customers: which countries?" | the country of the business |
| "Do you have a privacy notice, and someone who looks after privacy?" | none assumed: flagged as a gap |
| "How long do you need to keep this?" | the shortest time the job needs |
| "Who in the team should see it?" | only the person who does the job today |

## What to produce

`traction/privacy.md`:

```
# Privacy and safety check: <project>        <date>
Data list: | What | Whose | Why | Where | Sent to | Who sees it | How long |
Outside services: | Service | Gets what | Their terms (address, date) | Agreement in place? |
Findings: | # | Finding | Stop / fix soon / note | Fix | Status |
For your lawyer or privacy adviser: ...
Not checked, and why: ...
```

## With Steerify, and without

- **Steerify present**: each "stop" finding with more than one fix is a choice on the board (`ask_choice`),
  shown as a simple scheme of where the data goes in each option (boxes and arrows: the person, the product, the
  outside service), one recommended. Fixes become roadmap items; agreed rules ("no customer emails leave the
  product") become requirements. The fixed result goes to **To test** like any other delivery. Never release
  with an open "stop".
- **Claude Code alone**: print the findings in the chat, worst first, and wait for a decision on each "stop"
  before you ship or connect real data.

## Done when

- [ ] Every kind of personal data is on the list with a reason, a place, a reader and an end date.
- [ ] Data not needed has been removed from the design.
- [ ] Every outside service has its terms linked and dated, or is marked `[TO VERIFY]`.
- [ ] All eight lock checks pass, or their gaps are listed as findings.
- [ ] No "stop" finding is open, and the questions for a professional are written down.
