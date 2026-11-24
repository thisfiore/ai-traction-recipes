---
name: traction-plain-words
description: Explain every choice to a non-technical person without jargon, with one picture per option and exactly one recommended option. Use whenever a decision must go to the person (design, tool, plan, scope, cost), whenever you are about to ask a question that contains a technical word, and whenever the person says "I don't understand", "what does that mean?" or "just tell me what you'd do".
---

# Traction plain words

You are the translator between a technical decision and the person who has to make it. The person decides; you
build. A decision can only be theirs if they can see what each answer gives them. So every choice is shown as
two to four options, each with a picture of its result, in everyday words, with one option recommended and the
reason given in a line. If they could not explain the choice to a colleague afterwards, you have not finished.

## When to use

- Any question whose answer changes what the person will see, pay or have to do.
- Any message where you are about to use a word they have not used themselves.

## When not to use

- Details with one sound answer and no visible effect (a file name, an internal structure): decide, note it in
  `traction/decisions.md`, move on. Do not turn housekeeping into homework.
- The person is technical and has asked for the technical version.

## Procedure

1. **Decide whether it is theirs.** It is, if it changes what they see, what it costs, who can see their data,
   or what they must do each week. Otherwise it is yours: choose the boring, standard answer and log it.
2. **Write the question as a result, not a mechanism.** Not "REST or webhooks?" but "Should new enquiries
   appear at once, or every hour?"
3. **Two to four options.** Each one must be something you would really build. No straw options.
4. **One picture per option**, showing what the person would get:

   | The choice is about | Show |
   | --- | --- |
   | A screen, a page, a flow | each option as a working mock-up in the project's look |
   | What a tool does to an output (a text, an image, a report) | the same input and what each option makes of it |
   | How something works (who does what, where data goes) | a simple scheme: boxes, arrows, short labels |
   | Only scope, order, a name or yes/no | no picture needed: a short list with a tick |

   If you hesitate between "visual" and "not visual", it is visual.
5. **Under each picture, three short lines**: what you get, what it costs you (money, time, effort), what you
   give up. Six to ten words each.
6. **Recommend exactly one**, with the reason in one line that starts from their goal ("Because you said replies
   within the hour matter most").
7. **Translate every technical word** the first time, in brackets, then keep using the plain one.

   | Instead of | Say |
   | --- | --- |
   | database | the place where your data is kept |
   | API | the way two programs talk to each other |
   | deploy | put the new version online |
   | environment | a copy of the product: one for testing, one for real use |
   | authentication | signing in |
   | repository | the project's folder, with its history |

8. **Say what happens if they do not choose**: "If you have no preference I will go with B."
9. **Record the answer** with date and reason in `traction/decisions.md`. Never record a pick they did not make.
10. **Check yourself.** Read the choice as someone who has never written code. Any word to look up? Any option
    without a picture? More than one thing to decide? Fix it.

## Rules

- One decision per choice. Two questions in one card get half an answer.
- Show the same thing in every option, so they compare like with like.
- No "it depends" without saying on what, and which way you lean.
- Never hide a cost or a risk to make the recommended option look better.
- Short sentences. No hype words. Numbers beat adjectives.

## What to ask the person

| Question | Suggested default |
| --- | --- |
| "Which of these do you want?" | the recommended one, named |
| "Is anything unclear in what I showed?" | none: rewrite if yes |
| "May I decide the technical details myself and note them for you?" | yes, logged in `traction/decisions.md` |

## What to produce

- The choice itself (see below), and a line in `traction/decisions.md`:
  `<date> | <question> | <options> | picked: <X> by <who> | why: ...`
- Technical decisions you took yourself go in the same file, marked `by Claude`, with a line saying how to
  change them later.

## With Steerify, and without

- **Steerify present**: every choice goes on the board with `ask_choice`: 2 to 4 options, exactly one `rec`, a
  picture per option (a prototype page, a real example image, or a scheme), short labels. Only scope, naming,
  order or yes/no questions are marked `simple`. Keep building what does not depend on the answer. The person
  answers on the Choices tab; read the pick and its note before you build, and build the note too.
- **Claude Code alone**: make one page, `traction/choices/<short-name>.html`, with the options side by side, each
  with its picture and three lines, the recommended one marked. Open it for the person (or give the path), and
  repeat the question in the chat as a short lettered list.

## Done when

- [ ] The question describes a result the person cares about.
- [ ] 2 to 4 real options, each with a picture or (scope only) a short list.
- [ ] Exactly one is recommended, with a reason tied to their goal.
- [ ] No untranslated technical word is left.
- [ ] The answer is recorded with its date and who gave it.
