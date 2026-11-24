// Content engine: the AI Traction sample for Chapter 20 of the book.
// A made-up accounting studio, made-up content. No server, no AI inside: it shows the six stages and what a person decides.
const STAGES = [['brief', 'Brief'], ['ideas', 'Ideas'], ['drafts', 'Drafts'], ['production', 'Production'], ['review', 'Review'], ['publishing', 'Publishing']];
const FILES = [['voice/', 1], ['pictures/', 1], ['brand.md'], ['offers.md'], ['facts.md'], ['never.md'], ['calendar.md']];
const IDEAS = [
  ['The year-end checklist', 'Five things to send us before 12 December, one post each, then a recap.', 1],
  ['The receipts people forget', 'One forgotten receipt a day, with the reason it matters.'],
  ['A December day in the studio', 'Behind the scenes: who does what when the deadlines pile up.'],
  ['Questions we get every December', 'The ten questions clients ask, answered in plain words.']];
// type, date label, title, text, picture style, status
const P = (type, d, title, text, pic, st, extra) => Object.assign({ type, d, title, text, pic, st }, extra || {});
let pieces = [
  P('post', 'Mon 1', 'The year-end checklist starts today', 'December is short. Over the next three weeks we post the five things to send us before 12 December.\n\nSave this post: the list grows here.', 'a', 'ok'),
  P('post', 'Wed 3', '1 of 5: your invoices, all of them', 'Send us every invoice you issued this year, including the ones not paid yet.\n\nOne folder, one email. We do the sorting.', 'b', 'ok'),
  P('post', 'Fri 5', '2 of 5: the receipts you forgot', 'The train ticket in your coat. The software you pay monthly. The coffee with a client.\n\nIf you paid it for work, we want to see it.', 'c', 'ok'),
  P('post', 'Mon 8', '3 of 5: what you bought to work', 'A laptop, a desk, a phone. Tell us what you bought and when.\n\nYou can deduct up to 5,000 for equipment.', 'a', 'wait', { check: ['You can deduct up to 5,000 for equipment.', 'This figure is not in facts.md.'] }),
  P('post', 'Wed 10', '4 of 5: changes in your life', 'New home, new child, new partner in the business? Some changes matter for your accounts.\n\nTell us before the year ends, not after.', 'b', 'wait'),
  P('post', 'Fri 12', '5 of 5: today is the day', 'Today is 12 December: the last day to send us your documents for a calm year-end.\n\nLate is still better than never. Write to us.', 'c', 'ok'),
  P('post', 'Mon 15', 'The whole checklist in one picture', 'Invoices, receipts, purchases, life changes, and one date.\n\nKeep it for next year.', 'a', 'ok'),
  P('post', 'Tue 16', 'What happens to your documents now', 'We read everything twice. If something is missing we call you, we do not guess.', 'b', 'ok'),
  P('post', 'Wed 17', 'New here? The first call is free', 'In January new freelancers get a free 20-minute call with one of us.\n\nBook it from the link in our profile.', 'c', 'back', { note: 'Say "with Marta or Paolo", people like names.' }),
  P('post', 'Thu 18', 'Our hours over the holidays', 'The studio is closed from 24 December to 2 January. Emails are read on the 29th.', 'a', 'ok'),
  P('post', 'Fri 19', 'Thank you for this year', 'Four people, a few hundred clients, one long December. Thank you for trusting us with your numbers.', 'b', 'wait'),
  P('post', 'Mon 22', 'See you in January', 'We start again on 2 January. The first thing we do is call the people who wrote to us over the break.', 'c', 'wait'),
  P('newsletter', 'Tue 2', 'Five things to send us before 12 December', 'Dear client,\n\nyear-end comes faster than anyone likes. Here are the five things we need from you, and the one date to remember.\n\n1. Every invoice you issued.\n2. The receipts you forgot.\n3. What you bought to work.\n4. Changes in your life.\n5. All of it by 12 December.\n\nReply to this email if you have a question. A person answers.', 'a', 'ok', { subject: 'Five things, one date: 12 December', pre: 'The short list for a calm year-end.' }),
  P('article', 'Thu 4', 'A calm year-end, in five steps', 'Every December the same thing happens: the documents arrive on the last day, all together. This year we tried to make it simpler. Five steps, one for each week of the month, and a single date to remember.', 'b', 'wait', { words: 640 })];
const LAST = [['November', '11 posts, 1 newsletter, 1 article', 'Theme: invoices that never get paid']];
let stage = (location.hash || '#brief').slice(1); if (!STAGES.some(s => s[0] === stage)) stage = 'brief';
let idea = 0, sel = 3;
const $ = id => document.getElementById(id);
const h = (s, ...v) => s.reduce((a, x, i) => a + x + (v[i] == null ? '' : v[i]), '');
const esc = t => String(t).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
const TAG = { ok: ['ok', 'Approved'], wait: ['wait', 'Waiting for you'], back: ['back', 'Sent back'] };
const tag = p => `<span class="tag ${TAG[p.st][0]}">${TAG[p.st][1]}</span>`;
const body = p => { let t = esc(p.text); if (p.check) t = t.replace(esc(p.check[0]), `<mark class="chk">[CHECK] ${esc(p.check[0])}</mark>`); return t; };
const head = (n, title, lead, claude, you) => `<div class="kick">Stage ${n} of 6</div><h1>${title}</h1><p class="lead">${lead}</p>
  <div class="who"><div><b>Claude does the work</b>${claude}</div><div class="you"><b>A person decides</b>${you}</div></div>`;
const preview = p => p.type === 'newsletter'
  ? `<div class="mail"><div class="top">Subject<b>${esc(p.subject)}</b>${esc(p.pre)}</div><div class="in"><h2>${esc(p.title)}</h2><div style="white-space:pre-line">${body(p)}</div></div><div class="un">Northside Accounting · You get this because you are a client · Unsubscribe</div></div>`
  : `<div class="post"><div class="hd"><div class="av">N</div><div><b>Northside Accounting</b><span>${p.type === 'article' ? 'Article' : 'Post'} · ${p.d} December</span></div></div>
     <p><b>${esc(p.title)}</b>\n${body(p)}</p><div class="pic ${p.pic}"><i></i></div><div class="cap"><span>pictures/office-${p.pic}.jpg</span><span>${p.words ? p.words + ' words' : p.text.length + ' / 1,300 characters'}</span></div></div>`;
const V = {
  brief: () => head(1, 'The brief', 'One short brief a month. Claude asks what is missing and writes it back in a fixed form.', 'Asks what is missing; writes the brief back', 'What you want to say, to whom, by when') + `
    <div class="grid2"><div class="card"><label>What we want to say</label><div class="val">Year-end is close. Tell people the five things to send us by 12 December, and that new freelancers get a free first call in January.</div></div>
    <div class="card"><label>To whom</label><div class="val">Freelancers and small local businesses: our clients, and people who are not clients yet.</div></div></div>
    <div class="grid3"><div class="card"><label>By when</label><div class="val">1 to 22 December</div></div><div class="card"><label>How much</label><div class="val">12 posts, 1 newsletter, 1 article</div></div><div class="card"><label>Where</label><div class="val">One channel, one language</div></div></div>
    <div class="card"><label>Claude asked, before starting</label>
      <div class="q"><b>Is 12 December for everyone, or only for clients on the yearly plan?</b><span>You: for everyone.</span></div>
      <div class="q"><b>May I mention prices?</b><span>You: only what is in offers.md.</span></div></div>
    <div class="card"><label>The rules, every month</label><ol class="rules"><li>Nothing goes out without my OK.</li><li>Every fact comes from my files, or is marked [CHECK].</li><li>No invented customers, quotes or numbers.</li><li>Only my own pictures.</li></ol></div>
    <div class="row"><button class="btn pri" data-go="ideas">The brief is right</button></div>`,
  ideas: () => head(2, 'Ideas', 'Three to five angles, and a plan with dates. You pick one.', 'Proposes the angles and a plan with dates', 'Which idea; whether the plan is right') + `
    <div class="grid2">${IDEAS.map((x, i) => `<div class="card idea ${i === idea ? 'on' : ''}" data-idea="${i}" role="button" tabindex="0" aria-pressed="${i === idea}">${x[2] ? '<span class="tag red">Suggested</span>' : ''}<h3>${x[0]}</h3><p>${x[1]}</p></div>`).join('')}</div>
    <label style="margin-top:16px">The plan for December</label>
    <div class="plan">${pieces.map(p => `<div class="${p.type === 'newsletter' ? 'n' : p.type === 'article' ? 'a' : ''}"><b>${p.d.toUpperCase()}</b>${p.type === 'post' ? esc(p.title).slice(0, 26) + (p.title.length > 26 ? '…' : '') : p.type[0].toUpperCase() + p.type.slice(1)}</div>`).join('')}</div>
    <div class="row"><button class="btn pri" data-go="drafts">Go with "${IDEAS[idea][0]}"</button></div>`,
  drafts: () => head(3, 'Drafts', 'Every piece, written from your facts, in your voice. A claim that is not in your files is marked [CHECK].', 'Writes every piece; marks what it could not find', 'Nothing yet: you read them at the review') + `
    <div class="split"><div class="list">${pieces.map((p, i) => `<div class="item ${i === sel ? 'on' : ''}" data-sel="${i}" role="button" tabindex="0" aria-pressed="${i === sel}"><div class="d">${p.d}</div><div class="t"><b>${esc(p.title)}</b>${p.check ? '<span><mark class="chk">1 CHECK</mark></span>' : ''}</div></div>`).join('')}</div>
    <div><div class="card"><label>${pieces[sel].type} · ${pieces[sel].d} December</label><b style="font-size:17px">${esc(pieces[sel].title)}</b><div style="white-space:pre-line;margin-top:8px">${body(pieces[sel])}</div></div>
    ${pieces[sel].check ? `<div class="note"><b>Why it is marked.</b> ${esc(pieces[sel].check[1])} Add it to facts.md, change the sentence, or remove it.</div>` : '<div class="note">Every fact in this piece is in your files.</div>'}</div></div>`,
  production: () => head(4, 'Production', 'A draft is not a piece. Each one gets its length, format, picture and layout.', 'Turns each draft into the finished piece', 'Which pictures may be used') + `
    <div class="split"><div class="list">${pieces.map((p, i) => `<div class="item ${i === sel ? 'on' : ''}" data-sel="${i}" role="button" tabindex="0" aria-pressed="${i === sel}"><div class="d">${p.d}</div><div class="t"><b>${esc(p.title)}</b><span>${p.type}</span></div></div>`).join('')}</div>
    <div class="grid2" style="grid-template-columns:1fr 210px;align-items:start"><div>${preview(pieces[sel])}</div>
    <div class="spec"><div><span>Format</span><b>${pieces[sel].type}</b></div><div><span>Picture</span><b>from pictures/</b></div><div><span>Length</span><b>${pieces[sel].words ? pieces[sel].words + ' words' : pieces[sel].text.length + ' characters'}</b></div><div><span>Link</span><b>${pieces[sel].type === 'newsletter' ? 'unsubscribe' : 'profile'}</b></div></div></div></div>`,
  review: () => { const p = pieces[sel], c = k => pieces.filter(x => x.st === k).length; return head(5, 'Review', 'Each piece the way it will look. You say OK, edit it, or send it back with a note.', 'Shows each piece as it will look', 'OK, edit or send back, piece by piece') + `
    <div class="sum"><div><b>${c('ok')}</b><span>Approved</span></div><div><b>${c('wait')}</b><span>Waiting for you</span></div><div><b>${c('back')}</b><span>Sent back</span></div></div>
    <div class="split"><div class="list">${pieces.map((x, i) => `<div class="item ${i === sel ? 'on' : ''}" data-sel="${i}" role="button" tabindex="0" aria-pressed="${i === sel}"><div class="d">${x.d}</div><div class="t"><b>${esc(x.title)}</b><span>${tag(x)}</span></div></div>`).join('')}</div>
    <div>${preview(p)}${p.check ? `<div class="note"><b>[CHECK]</b> ${esc(p.check[1])}</div>` : ''}${p.note ? `<div class="note"><b>Your note.</b> ${esc(p.note)}</div>` : ''}
    <div class="row"><button class="btn ok" data-st="ok">OK</button><button class="btn" data-st="wait">Edit</button><button class="btn back" data-st="back">Send back</button></div></div></div>`; },
  publishing: () => head(6, 'Publishing', 'Approved pieces are scheduled, or put in a delivery folder. What went out is recorded, so next month does not repeat it.', 'Schedules what you approved; keeps the record', 'The last OK') + `
    <table><tr><th>When</th><th>Piece</th><th>Kind</th><th>State</th></tr>${pieces.map(p => `<tr><td>${p.d} Dec</td><td>${esc(p.title)}</td><td>${p.type}</td><td>${p.st === 'ok' ? '<span class="tag ok">Scheduled</span>' : '<span class="tag wait">Not scheduled: no OK yet</span>'}</td></tr>`).join('')}</table>
    <div class="note">A piece without your OK is never scheduled.</div>
    <label style="margin-top:18px">What went out before</label><table>${LAST.map(x => `<tr><td>${x[0]}</td><td>${x[1]}</td><td>${x[2]}</td></tr>`).join('')}</table>
    <div class="row"><button class="btn pri" data-go="brief">Last OK: schedule December</button></div>`
};
function render() {
  $('stages').innerHTML = STAGES.map((s, i) => `<button class="${s[0] === stage ? 'on' : ''}" data-go="${s[0]}"${s[0] === stage ? ' aria-current="step"' : ''}><i>${i + 1}</i>${s[1]}${s[0] === 'review' ? `<em>${pieces.filter(p => p.st === 'wait').length}</em>` : ''}</button>`).join('');
  $('files').innerHTML = FILES.map(f => `<li class="${f[1] ? 'dir' : ''}">${f[0]}</li>`).join('');
  $('main').innerHTML = V[stage]();
}
document.addEventListener('click', e => {
  const t = e.target.closest('[data-go],[data-idea],[data-sel],[data-st]'); if (!t) return;
  if (t.dataset.go) { stage = t.dataset.go; try { location.hash = stage; } catch (_) {} }
  if (t.dataset.idea) idea = +t.dataset.idea;
  if (t.dataset.sel) sel = +t.dataset.sel;
  if (t.dataset.st) { pieces[sel].st = t.dataset.st; const n = pieces.findIndex((p, i) => i > sel && p.st === 'wait'); if (t.dataset.st !== 'wait' && n >= 0) sel = n; }
  // Keep the keyboard where it was: re-rendering replaces the buttons.
  const key = ['go', 'idea', 'sel', 'st'].find(k => t.dataset[k] != null);
  const inNav = !!t.closest('#stages');
  render();
  if (t.dataset.st) { const L = { ok: 'Approved', wait: 'Left for editing', back: 'Sent back' }; $('live').textContent = `${L[t.dataset.st]}. Now showing: ${pieces[sel].title}.`; }
  const again = document.querySelector(`${inNav ? '#stages ' : '#main '}[data-${key}="${t.dataset[key]}"]`);
  if (again) again.focus(); else if (t.dataset.go) $('main').focus();
});
// Enter or Space on the list items and idea cards, as on a button.
document.addEventListener('keydown', e => {
  const t = e.target.closest('[role="button"]');
  if (t && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); t.click(); }
});
addEventListener('hashchange', () => { const s = location.hash.slice(1); if (V[s]) { stage = s; render(); } });
// the AI Traction rabbit, as pixels
const RB = ['.......###....', '.......######.', '........#.###.', '........#####.', '.......######.', '......#######.', '.....########.', '....#########.', '...##########.', '..######R####.', '.############.', '.###########..', '.##########...', '.#########....', '..###..###....', '..##....##....', '.##.....##....', '.#......#.....'];
$('rabbit').innerHTML = `<svg viewBox="0 0 14 18" shape-rendering="crispEdges">${RB.map((r, y) => [...r].map((c, x) => c === '.' ? '' : `<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${c === 'R' ? '#E4002B' : '#111'}"/>`).join('')).join('')}</svg>`;
const q = new URLSearchParams(location.search); if (q.get('sel')) sel = +q.get('sel');
render();
