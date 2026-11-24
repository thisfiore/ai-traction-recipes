---
name: traction-focused-test
description: Deliver each finished piece of work to the person as one test with one picture and one link that opens exactly the case to check. Use every time you finish something the person must look at or approve, before you say "done", and when the person reports that a test link opened the wrong page or that they did not know what to look at.
---

# Traction focused test

You hand over work so that a busy, non-technical person can judge it in a minute. One piece of work becomes a
short list of tests. Each test is one thing to do, one thing they should see, one picture of exactly that, and
one link that opens on the right case. You test it yourself first and say honestly what you did and did not
check. The person's answer is OK, refine, or broken; anything else means the test was not clear enough.

## When to use

- Every delivery: a new screen, a batch of results, a fix, a report.
- A redelivery after the person asked for changes.

## When not to use

- Work in progress that the person has not asked to see.
- Questions about what to build: that is a choice (`traction-plain-words`), not a test.

## Procedure

1. **Run it yourself.** The real thing, in the test project, on the sample data. Never report something as
   working that you have not run. If you could not test a part, say which and why.
2. **Cut the delivery to one idea.** If you built three things, deliver three items. One item, one verdict.
3. **Write what changed for the person**: 2 to 4 short lines, six words or fewer each. What they can now do,
   not how it was made. ("Export button on Orders", "Uses your filters".)
4. **Write the tests**, usually 1 to 4 per item:

   | Part | Rule | Example |
   | --- | --- | --- |
   | Do | six words or fewer | "Open the late invoice" |
   | You should see | twelve words or fewer | "A red 'Late 12 days' label and a Remind button" |
   | Picture | the thing under test, cropped to it | the invoice row, not the whole window |
   | Link | opens that exact record, in that state | the invoice's own page in the test project |

5. **Point at the right case.** Use a named case from `traction/sample-data/README.md`. The link opens that
   record directly. Never a home page, a login page, or "go to Orders and search for...".
6. **Point at the right place.** Links go only to the project's known test or live addresses. Never guess an
   address from the product's name. No address known yet → find it in the project's settings or ask.
7. **Take the pictures after testing**, full size, showing the state the person will see. Crop to the feature or
   mark the area to look at. A picture of a whole window teaches nothing.
8. **List known issues plainly.** What is not done, what you would do next. No surprises later.
9. **Deliver, then stop.** Say in two to four lines what is waiting for them and where. Do not start the next
   piece on top of an unjudged one if it depends on the answer.
10. **On "refine" or "broken"**: read every note, fix, test again, redeliver the same item as a new version.
    Answer each note with what you did.

## What to ask the person

Only what the test itself cannot answer.

| Question | Suggested default |
| --- | --- |
| "OK, refine, or broken?" | none: this is their verdict |
| "If refine: what should be different?" | a note on the picture, or one sentence |
| "Where do you want to test: on your computer or on a web link?" | a web link to the test project |

## What to produce

One delivery per piece of work, with: title, what changed (2 to 4 lines), the tests (do, should see, picture,
link), what you tested yourself, known issues.

## With Steerify, and without

- **Steerify present**: deliver to the **To test** tab with the `deliver` tool (or `deliver.mjs`), following the
  Steerify skill: honest `tested[]`; one direct link per test, only to the project's environments (`deliver`
  refuses home pages and unknown hosts); every picture full size (1400 px wide or more) and focused on the feature
  (crop it, or set `focus`); `what` as 2 to 4 short bullets; `label` six words or fewer, `check` twelve or fewer;
  `issues[]` for what is open. Set `road` to the roadmap item it completes, `choices` if it builds a pick, `reqs`
  for the requirements it meets. Same id on a redelivery. Pins the person leaves on a picture are required
  changes: answer each one. Then `notify` in one line.
- **Claude Code alone**: write `traction/tests/<date>-<short-name>.md` in the format below, save the pictures
  next to it, and paste the same list in the chat.

```
# <What was delivered>
Changed: - ...  - ...
| # | Do | You should see | Picture | Link |
Tested by Claude: ...        Not tested: ...
Known issues: ...
Your verdict: OK / refine / broken, plus a note
```

## Done when

- [ ] You ran every test yourself and said so truthfully.
- [ ] One idea per delivery; each test has one action, one expected result, one picture, one link.
- [ ] Every link opens the exact case, in the test project or another known address.
- [ ] Pictures show the feature, not the whole screen.
- [ ] Known issues are listed, and the person knows what is waiting for them.
