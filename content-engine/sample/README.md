# Content engine: the AI Traction sample

The sample that goes with Chapter 20 of *AI Traction* (second edition), Build 1.

It is a small app with no server and no AI inside. It shows the six stages of a content engine (brief, ideas,
drafts, production, review, publishing) on one made-up month for a made-up accounting studio, so you can see
what the finished thing looks like before you build your own with Claude and Steerify.

- Run it: `python3 -m http.server 8223`, then open http://localhost:8223 (no build step). Or open `index.html`.
- Everything in it is invented: the studio, the people, the posts, the figures. One figure is wrong on purpose,
  to show how a claim that is not in your files gets marked `[CHECK]`.
- Nothing is saved and nothing is sent. Reload to start again.
- Each stage has its own address (`#brief`, `#ideas`, `#drafts`, `#production`, `#review`, `#publishing`),
  and `?sel=3` opens a given piece: the book's screenshots are taken that way.
- Same shape as Steerify's demo projects (`index.html`, `app.js`, `style.css`): drop the folder onto Steerify
  and press **Set up with Claude** to turn it into a project with a board.

Free to copy and adapt. Signed AI Traction; Steerify is an independent open source project, not affiliated with Anthropic.
