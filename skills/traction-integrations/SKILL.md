---
name: traction-integrations
description: Connect outside services (email, payments, AI models, storage, calendars, other tools) safely, with keys never in the code, every paid call counted and a plan for when the service is down. Use before adding or changing any connection to an outside service or API, when a key, token or password is about to be written anywhere, when the person pastes a key into the chat, and when something failed because another service was slow or unavailable.
---

# Traction integrations

You connect the product to services it does not control, without handing them the keys to the house. Each
outside service is a door: someone else can close it, slow it, or change its price. For every one you decide
what it is for, where its key lives (never in the code), what it may see, what each call costs, and what the
product does when the service does not answer. The owner should be able to read the list and know what they are
paying for and what breaks if it stops.

## DEFAULTS

One experienced builder's defaults for small teams (the book's author), not universal truths.

| Decision | Default | Why | Change it when |
| --- | --- | --- | --- |
| Where keys live | On the server only, in the host's settings; never in the app, the code or the project's history | An app or a repository can be copied; a key in it is public | Do not change this one |
| Who calls outside services | The back end, through one small module per service | One place to add limits, counting and a fallback; keys stay on the server | Rarely: keep it unless a named need says otherwise |
| Cost visibility | Every paid call is metered: recorded with the vendor's real usage figures into a cost record | Nothing is invisible in the cost report; surprises show up the same day | A free service with no usage limits |
| Email | Mailjet | Proven in the author's projects | Another email service is already paid for |
| Payments | Stripe on the web; in-app purchases through the app stores on mobile | The payment provider handles the card details | An existing payment contract |
| File storage | S3, with a CDN for public files | The common standard | Few small files |
| Phone notifications | Expo push service | Comes with the mobile toolkit | No mobile app |
| Error tracking | Sentry, on only when its key is set | Tells you when a connection starts failing | Another tracker is in place |
| Claude's access to the product | An MCP server (tools Claude can call) offered by the back end | Claude operates the product under the same rules as a person | Data Claude must not reach |
| AI model provider and model size | [AUTHOR DEFAULT: to confirm] | Apply: the smallest model that passes the test batch, clear data terms, price per 100 items, documentation | The criteria point to a clear winner for this project: record it in `traction/decisions.md` |
| Secret manager for the team's own passwords | [AUTHOR DEFAULT: to confirm] | Apply: mature, shared vaults, works on every device the team uses | The criteria point to a clear winner for this project: record it in `traction/decisions.md` |

## When to use

- Before the first call to any outside service, and when adding a new one.
- Whenever a secret appears: a key, a token, a password, a connection address with a password in it.

## When not to use

- Reading a public web page once for research.
- Services used only by hand, outside the product.

## Procedure

1. **Ask whether it is needed.** Can something already in the project do it? Each service is a bill, a privacy
   line and a point of failure.
2. **Read the official documentation** for the current way to connect. Do not rely on memory: these change.
   Note the page and date.
3. **Check cost and data terms** before signing up: `traction-cost-check` for the price at the brief's volumes,
   `traction-privacy-check` for what the service does with the data.
4. **The account belongs to the business.** Created with a company address, bill to the company, at least two
   people able to get in. Never in Claude's or a supplier's name.
5. **Handle the key correctly.**
   - The person creates the key and puts it in the host's settings (and in a local settings file that is
     excluded from the project's history). You name the setting; you do not need to see its value.
   - If a key is pasted into the chat or lands in the code: say so at once, and have it replaced (revoked and
     reissued) at the provider. Removing it from the file is not enough.
   - One key per environment (test, live), with the narrowest rights the service offers. Use the provider's
     test mode in the test environment.
6. **Wrap the service in one module**: one function per thing you ask it. Nothing else in the project calls the
   service directly.
7. **Plan for failure** in that module:

   | Situation | What the product does |
   | --- | --- |
   | Slow | waits a set time, then gives up cleanly |
   | Temporary error | retries a few times, waiting longer each time |
   | Down | keeps the work in a queue or marks it "to send", tells the user plainly, carries on with the rest |
   | Limit reached | slows down, never loops |
   | Answer makes no sense | rejects it, logs it, does not pass it on |
   | Repeat | sending twice has the same effect as once |

8. **Check what comes back**, especially from AI models: validate shape and content before it is saved or shown.
9. **Verify incoming calls.** If the service calls you back (a "webhook"), check its signature and ignore
   repeats.
10. **Meter every paid call** with the usage the vendor reports, tagged with the feature that made it.
11. **Test without the real thing**: test mode or a stand-in for automatic tests; one real call in the test
    environment before delivery; one test with the service switched off.
12. **Add it to the list.**

## What to ask the person

| Question | Suggested default |
| --- | --- |
| "Do you already have an account with this service?" | no: you create it with a company email, I guide you |
| "Who else should be able to get into the account?" | one more person you trust |
| "If it is down for an hour, what should happen?" | hold the work and send when it is back |
| "Should I stop and ask before adding any new service?" | yes |
| "Where do you keep passwords today?" | a shared password manager; set one up if none |

## What to produce

`traction/integrations.md`:

```
| Service | Used for | Account holder | Key setting name (never the value) | Test mode? | Data it receives | Cost unit | If it is down |
```

plus the service module, its tests, and an example settings file listing the setting names with empty values.

## With Steerify, and without

- **Steerify present**: adding a paid or data-receiving service is a choice on the board: options (including
  "do without"), one recommended, each with a scheme of where the data goes and its monthly cost. "What if it is
  down" is a requirement. Deliver to **To test** with a test for the working case and one for the failure
  ("Turn the service off: you see 'Will send when back'"). Never put a key in a choice, a delivery or a note.
- **Claude Code alone**: ask in the chat before adding the service, and show the list row when done.

## Done when

- [ ] No secret is in the code, the chat, the project's history or any `traction/` file.
- [ ] The account is the business's, with two people able to access it.
- [ ] All calls go through one module, with a time limit, retries and a plain message when it fails.
- [ ] Every paid call is metered.
- [ ] Tested once for real in the test environment and once with the service off; the list is updated.
