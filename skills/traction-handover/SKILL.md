---
name: traction-handover
description: Write a plain handover guide so a colleague, partner or supplier can take the project over without the person who built it. Use when a project goes live, when someone new joins or the owner is going away, before handing work to an agency or developer, at the end of a build phase, and when the person asks "how do I explain this to...?" or "what happens if I'm not here?".
---

# Traction handover

You make the project survive a change of hands. Every process that works has a clear responsible person, and
that person will not always be the one who built it. You write one guide a newcomer can follow on day one: what
this is, how to use it, how to change it, what to do when it breaks, and where every account and key lives
(never the keys themselves). Then you prove the guide works by following it from scratch.

## When to use

- The project is live or about to be.
- A colleague, partner or supplier is taking over, in part or in full.
- Before a holiday, a role change, or the end of a contract.

## When not to use

- A prototype that may be thrown away next week (a five-line note is enough).
- The guide exists and is current: update the changed section only.

## Procedure

1. **Ask who will read it.** A colleague who will run it, or a technical person who will change it? Write the
   first half for the first, the second half for the second. Explain each technical word once.
2. **Collect the facts from the project**, not from memory: `traction/` files (brief, decisions, costs, privacy,
   brand), the README, the settings, the list of outside services, the release steps.
3. **Write "What this is" in five lines**: what it does, for whom, what goes in, what comes out, who checks.
   Take it from the brief.
4. **Write the daily use**: the three to seven things a user does, each as short numbered steps with a picture.
5. **Write "Where a person decides"**: every point where the machine waits for a human, who that human is, and
   what happens if they do nothing.
6. **Write the map of accounts.** For every service: what it is for, whose name the account is in, where the
   bill goes, where the key or password is kept (the password manager entry, not the secret). Flag any account
   in a private person's name: that is a risk to fix before handover.
7. **Write "When something goes wrong"**: the five most likely problems, how you notice each, the first thing
   to try, and who to call. Include how to go back to the previous version.
8. **Write "How to change it"**: where the project lives, how to start it on a new computer, how to test, how a
   new version goes online. Commands exactly as typed. If Claude Code is used, say which skills and how to open
   the project.
9. **Write what is not done**: known issues, ideas parked, decisions still open.
10. **Test the guide.** Follow it yourself from an empty folder (or have a fresh session do it). Every step that
    fails or needs knowledge not in the guide is a hole: fix the guide, not the reader.
11. **Walk the new owner through it** if they are available, and add their questions as an FAQ.
12. **Name the new responsible person and the date** at the top. A handover without a name has not happened.

## What to ask the person

| Question | Suggested default |
| --- | --- |
| "Who takes this over, and are they technical?" | a non-technical colleague |
| "Who answers for it from now on?" | the business owner until someone is named |
| "Where do you keep passwords?" | a shared password manager; if none, set one up first |
| "Who should be called when it stops working?" | the person who built it, for the first month |
| "Is anything still in your personal name: accounts, cards, domains?" | assume yes and list them |

## What to produce

`traction/HANDOVER.md` (and a link to it from the project's README):

```
# <Project>: handover guide        Owner from <date>: <name>      Written: <date>
1. What this is (five lines)
2. Using it day to day (steps with pictures)
3. Where a person decides (who, what, what if not)
4. Accounts and bills: | Service | For | Account holder | Bill goes to | Key kept in |
5. What it costs to run (from traction/costs.md)
6. Data and privacy in short (from traction/privacy.md)
7. When something goes wrong: | Sign | First thing to try | Who to call |  + how to go back a version
8. Changing it: where it lives, start, test, release
9. Not done yet, and open decisions
10. Questions people asked
```

No passwords, keys or personal data in this file. Ever.

## With Steerify, and without

- **Steerify present**: the board already holds half of the story. Take the decisions from the Choices tab
  (what was picked and why), the agreed scope from the requirements, what is done and what is next from the
  roadmap, and the proof from approved **To test** items; link to them, do not copy them. The guide is a roadmap
  item of kind `tutorial`, delivered to To test with one test: "Follow section 8 on a clean computer". Tell the
  new owner that opening the project in Steerify shows them the same board.
- **Claude Code alone**: build the same sections from `traction/decisions.md` and the other `traction/` files.

## Done when

- [ ] A named owner and a date are at the top.
- [ ] A newcomer can use it, fix the five common problems and release a change with the guide alone.
- [ ] You followed the guide from scratch and it worked.
- [ ] Every account has a holder and a place where its key is kept; no secret is in the file.
- [ ] Open issues and open decisions are listed.
