---
name: traction-sample-data
description: Create realistic made-up test data and a separate test project before anything touches real data. Use before the first build or test run, when a screen or a result must be shown and no safe data exists, when the person offers real customer files "to try it on", and whenever a test would otherwise write to, email from, or charge a real account.
---

# Traction sample data

You give the project a safe place to make mistakes. Before any real customer list, inbox or invoice is touched,
you build a small set of invented data that looks and behaves like the real thing, and a test project that is
kept apart from real use. Everything gets built, shown and judged on that. Real data comes in later, on purpose,
with the person's OK.

## When to use

- At the start of every build, before the first screen or the first batch.
- Whenever real data contains details about people (names, emails, phone numbers, addresses, payments, health).
- When you need pictures for a choice or a test and the real data is not yours to show.

## When not to use

- Public, non-personal material the person owns (their own published product texts, their price list): real
  items make a better test. Ask first, then use them.
- Sample data already exists in `traction/sample-data/` and covers the case you are testing.

## Procedure

1. **Learn the shape of the real data without copying it.** Ask for the column names, or look at two or three
   rows with the person's OK and note only the structure: which fields, how long, which are often empty.
2. **List the cases the data must contain**, with the person:

   | Kind | Examples |
   | --- | --- |
   | Ordinary | the request you get twenty times a week |
   | Awkward | very long text, missing field, two requests in one, another language |
   | Wrong | a duplicate, an impossible date, a file of the wrong type |
   | To refuse or hand over | an angry complaint, a legal threat, something outside your service |

3. **Write the data.** 20 to 30 records for building screens; about 100 for a batch test (see
   `traction-smallest-test`). Make it look real: plausible names, amounts and dates, the business's own tone
   and vocabulary, the real spread between small and large.
4. **Make it obviously fake to a machine and harmless to a person.**
   - Emails end in `@example.com`. No real phone numbers, addresses, tax codes or card numbers.
   - No real customer, supplier or employee names. Invent them.
   - Give every record a tag such as `sample: true` or an id that starts with `TEST-`, so it can be found and
     deleted later.
5. **Build the test project**: a copy of the product kept apart from real use, with its own data store and its
   own settings. If the product sends email or messages, the test project sends only to the person's own address
   or to nowhere. If it takes payments, it uses the payment provider's test mode.
6. **Write one command or one button that refills the test data** from scratch, so every test starts from the
   same state.
7. **Name the cases.** Give each important record a short name ("late invoice", "angry customer in German") and
   list them, so a test can say "open *late invoice*" and land on the right one.
8. **Show the person a sample** of ten records: "Does this look like your real work? What is missing?"
9. **Write down the rule for real data**: when it may be used, who says yes, and what is removed first.

## What to ask the person

| Question | Suggested default |
| --- | --- |
| "Can you show me the column names of your real file, or two example rows?" | column names only |
| "Which cases come up most? Which ones go wrong?" | I propose a list; you correct it |
| "Is there anything in the real data I must never see?" | treat all details about people as off limits |
| "Where should test emails go?" | your own address only |
| "How many examples do you want to look at?" | 10 to check realism, 100 for the test |

## What to produce

```
traction/sample-data/
  README.md        what is in here, how to refill it, the named cases, the rule for real data
  <name>.csv|json  the records, each tagged as sample
  refill.<ext>     one command that restores the test data
```

The README's list of named cases is what `traction-focused-test` points at.

## With Steerify, and without

- **Steerify present**: the test project's address is recorded with `set_environments`, so every link in
  **To test** opens the test copy and never the real one. Sample data is what you use for the pictures in choices
  and for test screenshots. "Use real data from now on?" is a choice on the board (`simple`, with the rule in
  its text), never something you decide. The sample set is a roadmap item of kind `test`.
- **Claude Code alone**: keep the test project in its own folder or its own settings file, say in the chat where
  it runs, and show the ten-record sample as a table.

## Done when

- [ ] No real person's details appear anywhere in the sample.
- [ ] The set contains ordinary, awkward, wrong and to-refuse cases, and the person says it looks like their work.
- [ ] Every record can be recognised as sample data and removed.
- [ ] The test project cannot email, message or charge anyone real.
- [ ] One command refills the data; the named cases are listed.
