---
name: traction-brand-rules
description: Keep tone of voice, colours, type and logo use on brand by reading and maintaining one brand file. Use before writing any customer-facing text (posts, emails, replies, page copy), before designing or styling any screen, page, image or document, when the person says "this doesn't sound like us" or "wrong colour", and at project start when no brand file exists yet.
---

# Traction brand rules

You make everything the project produces look and sound like the business it belongs to. All brand knowledge
lives in one file, `traction/brand.md`. You read it before writing a line of copy or styling a screen, you apply
it the same way every time, and when the person corrects you, you update the file so the correction sticks. No
brand file yet? You build one from what the business already publishes, and the person approves it.

## When to use

- Before any text a customer will read, and before any visual work.
- When the person corrects tone, wording, colour or type: fix the work, then fix the file.
- At the start of a project: check the file exists.

## When not to use

- Internal notes, logs, code comments.
- The person has asked for an experiment that is deliberately off brand. Label the result as such.

## Procedure

**If `traction/brand.md` does not exist, create it:**

1. **Collect what exists**: the website, the logo files, a brand guide if there is one, five to ten things they
   have already published and are proud of, and two or three they dislike.
2. **Read the voice from the good examples.** Who they speak to, how formal, sentence length, humour or none,
   which words come back, how they open and close. Quote short real phrases as examples.
3. **Take colours and type from the source**, not by eye: the site's style sheet, the logo file, the guide.
   Record exact colour codes and font names. A value you could not confirm is written `[TO CONFIRM]`.
4. **Draft the file** (format below) and show it as a sample, not a document: one short post, one email and one
   screen header made with the rules. Ask: "Does this sound and look like you?"
5. **Correct and save** once they say yes.

**Every time you write or design:**

6. **Read `traction/brand.md` first.** The whole file; it is short on purpose.
7. **Apply it.** Voice rules to every text, including buttons, error messages and automatic emails. Colours and
   type to every screen, image and document. Use the named colours and sizes; do not invent new ones.
8. **Check before showing**:

   | Check | Pass |
   | --- | --- |
   | Voice | reads like their examples; none of the "never say" words |
   | Colour | only colours from the file; text readable on its background |
   | Type | only the listed fonts and sizes |
   | Logo | right version, clear space kept, not stretched or recoloured |
   | Names | product and company names spelled exactly as in the file |
   | Language | the right language and form of address for this audience |

9. **When the brand file does not cover a case**, pick the closest rule, say so, and propose a new line for the
   file.
10. **When the person corrects you**, change the work, then add the rule to the file with the date. One
    correction should never be needed twice.

## What to ask the person

| Question | Suggested default |
| --- | --- |
| "Do you have a brand guide, or shall I read your website?" | read the website and logo files |
| "Show me three things you published that sound like you. And one that doesn't." | the latest posts and the home page |
| "How do you address customers: formal or informal?" | as on the current website |
| "Any words you never want to see?" | none; I add them as you correct me |
| "Who has the last word on brand?" | the person you are talking to |

## What to produce

`traction/brand.md`, one page:

```
# Brand: <business>
Who we talk to: ...                  Language and address: ...
Voice: 3-5 rules, each with a real example ("Say: ... / Not: ...")
Always: ...          Never say: ...
Names: exact spelling of company, products, people
Colours: name | code | used for        (primary, accent, background, text, warning)
Type: font | sizes | used for
Logo: files and where they are | clear space | never do
Pictures: style in one line, two examples
Source of each value: site / guide / told by <who> on <date>
Changes: <date> <rule added or changed>
```

## With Steerify, and without

- **Steerify present**: the brand colours and type also go into the board's design kit (`kit/`: tokens,
  components, sample data), so every prototype shown in a choice already looks like the business. The first
  approval of the brand is a choice with pictures: the sample post, email and header side by side, 2 to 3
  directions, one recommended. Brand rules the person agrees to are requirements of the chapter.
- **Claude Code alone**: keep `traction/brand.md` as the single source. If the project has a style sheet or
  theme file, make it take its values from the brand file's values, and note the link in both.

## Done when

- [ ] `traction/brand.md` exists, fits a page, and the person approved it from real samples.
- [ ] Every colour and font has an exact value and a source.
- [ ] The work in front of the person passes the six checks.
- [ ] Any correction made today is written in the file.
