/* ============================================================
   PORTFOLIO — BEHAVIOUR
   Runs on both pages. Each part checks IF its element EXISTS,
   ELSE it does nothing.

   NOTHING here holds words, photos or videos. ALL of that lives
   in content.js. Edit that file, NOT this one.
   ============================================================ */

const SITE = CONTENT.site;

/* a case marked  hidden: true  in content.js stays in the file but is not shown anywhere:
   no card, no panel, no next/previous. Filtered here once, SO every index below stays in step. */
if (CONTENT.cases && CONTENT.cases.items) CONTENT.cases.items = CONTENT.cases.items.filter(c => !c.hidden);

/* the small words the site itself uses. content.js may change any of them. */
const LABELS = Object.assign({
  backToTop: "Back to top",
  copyEmail: "Copy",
  emailCopied: "Email copied"
}, SITE.labels || {});

const CASE_LABELS = Object.assign({
  contents: "Contents",
  previous: "Previous case",
  next: "Next case",
  copy: "Copy",
  copied: "Copied",
  close: "Close",
  folder: "Project files",             // the folder that holds the documentation file
  file: "Document",                    // what kind of file it is
  openFile: "Open",                    // the button on the file
  sections: "sections",
  minRead: "min read"
}, (CONTENT.cases && CONTENT.cases.labels) || {});

const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE    = window.matchMedia("(hover: hover) and (pointer: fine)").matches;   // a mouse OR a trackpad
const STAGE_Q = window.matchMedia("(min-width: 1200px) and (min-height: 680px)"); // the wide-screen stage
const SHEET_Q = window.matchMedia("(max-width: 767px), (max-height: 520px) and (pointer: coarse)");
const EASE    = "cubic-bezier(.16,1,.3,1)";

let LENIS = null;                                   // smooth scrolling, IF it loaded
const SKY = { pause(){}, resume(){} };              // the stars fill these in

/* grey stand-ins, used WHEN content.js leaves a picture empty */
const PLACEHOLDER = {
  photo:  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><rect width='400' height='400' fill='%23090C14'/><circle cx='200' cy='158' r='64' fill='%231B2439'/><path d='M64 400c0-75 61-136 136-136s136 61 136 136z' fill='%231B2439'/></svg>",
  shot:   "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10'><rect width='16' height='10' fill='%230A0E17'/><circle cx='8' cy='5' r='2' fill='none' stroke='%23243250' stroke-width='.12'/></svg>",
  poster: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'><rect width='16' height='9' fill='%230A0E17'/><circle cx='8' cy='4.5' r='1.4' fill='none' stroke='%23243250' stroke-width='.12'/></svg>"
};

/* the drawings content.js picks by name. Stroke only: the colour
   AND the thickness come from style.css */
const ICONS = {
  mail:  "<path d='M3 6h18v12H3z'/><path d='M3 7l9 6 9-6'/>",
  nodes: "<circle cx='5' cy='12' r='2.4'/><circle cx='19' cy='6' r='2.4'/><circle cx='19' cy='18' r='2.4'/><path d='M7.3 11l9.4-4.4M7.3 13l9.4 4.4'/>",
  bag:   "<path d='M5 8h14l-1.2 12H6.2z'/><path d='M9 8V6a3 3 0 016 0v2'/>",
  code:  "<path d='M9 5L4 12l5 7M15 5l5 7-5 7'/>",
  grid:  "<path d='M4 4h16v16H4z'/><path d='M4 9h16M4 14h16M9 4v16M14 4v16'/>",
  cube:  "<path d='M12 3l8 4.5v9L12 21l-8-4.5v-9z'/><path d='M12 12l8-4.5M12 12v9M12 12L4 7.5'/>",
  chart: "<path d='M3 21h18'/><path d='M6 21V11M11 21V4M16 21v-6'/>",
  clock: "<circle cx='12' cy='12' r='9'/><path d='M12 7v5l3 2'/>",
  star:  "<path d='M12 3l2.7 5.8 6.3.8-4.6 4.4 1.2 6.3L12 17.3 6.4 20.3l1.2-6.3L3 9.6l6.3-.8z'/>",
  plug:  "<path d='M9 3v6M15 3v6M6 9h12v3a6 6 0 01-12 0z'/><path d='M12 18v3'/>"
};

/* small line drawings the site itself uses */
const UI = {
  arrow:   "<svg class='case-card__arrow' viewBox='0 0 24 24' aria-hidden='true'><path d='M5 12h14M13 6l6 6-6 6'/></svg>",
  up:      "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M12 19V5M6 11l6-6 6 6'/></svg>",
  copy:    "<svg viewBox='0 0 24 24' aria-hidden='true'><rect x='8' y='8' width='12' height='12' rx='2'/><path d='M16 8V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h3'/></svg>",
  chevron: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M6 9l6 6 6-6'/></svg>",
  picture: "<svg viewBox='0 0 24 24' aria-hidden='true'><rect x='3' y='5' width='18' height='14' rx='1'/><path d='M3 16l5-5 4 4 3-3 6 6'/><circle cx='16' cy='9' r='1.5'/></svg>",
  folder:  "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M3 6.5h6.5l2 2.5H21v10H3z'/></svg>",
  file:    "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='M6 3h8l4 4v14H6z'/><path d='M14 3v4h4M9 12h6M9 15.5h6M9 8.5h2'/></svg>"
};

document.addEventListener("DOMContentLoaded", () => {
  renderPage();          // content.js -> the page. MUST run first.
  fillSiteText();
  initSmoothScroll();
  initStars();
  initComet();
  initNav();
  initTakeover();
  initReveals();
  initPointer();
  initSkillGraph();
  initCaseModal();
  initCompose();
  initFooter();
  initCopy();
});


/* ============================================================
   00. ONE FRAME LOOP
   Everything that moves every frame (stars, comet, scroll effects,
   smooth scrolling, magnetic buttons) shares ONE requestAnimationFrame.
   IF nothing is moving THEN it stops. IF the tab is hidden THEN it waits.
   ============================================================ */
const FRAME = new Set();
let frameId = 0;

function onFrame(fn){
  FRAME.add(fn);
  if (!frameId && !document.hidden) frameId = requestAnimationFrame(tick);
}
function offFrame(fn){ FRAME.delete(fn); }

function tick(now){
  frameId = 0;
  FRAME.forEach(fn => fn(now));
  if (FRAME.size && !document.hidden) frameId = requestAnimationFrame(tick);
}
document.addEventListener("visibilitychange", () => {
  if (!document.hidden && FRAME.size && !frameId) frameId = requestAnimationFrame(tick);
});

/* the same random numbers every time, SO both pages draw the same sky */
function seeded(a){
  return function(){
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

/* 0 before "from", 1 after "to", AND soft at both ends in between */
function ramp(y, from, to){
  const x = Math.min(Math.max((y - from) / (to - from), 0), 1);
  return x * x * (3 - 2 * x);
}


/* ============================================================
   0. RENDER — content.js becomes the page
   ============================================================ */

/* --- tiny helpers --- */

function esc(s){
  return String(s == null ? "" : s)
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;");
}

/* **bold** AND [text](link) become real tags.
   Everything else IS plain text, SO no stray markup can slip in. */
function inline(s){
  /* `code` is cut out first, SO nothing inside it gets bolded or linked */
  return String(s == null ? "" : s).split(/(`[^`]+`)/g).map(part => {
    if (/^`[^`]+`$/.test(part)) return "<code>" + esc(part.slice(1, -1)) + "</code>";
    return esc(part)
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\w)/g, "$1<em>$2</em>")
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, text, url) =>
        /^https?:/i.test(url)                    // another site opens in a new tab, SO the visitor keeps their place here
          ? '<a href="' + url + '" target="_blank" rel="noopener noreferrer">' + text + '</a>'
          : /^(mailto:|#|\/|\.)/i.test(url)
            ? '<a href="' + url + '">' + text + '</a>'
            : text);
  }).join("");
}

function make(tag, cls, text){
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.innerHTML = inline(text);
  return n;
}

/* a headline rises word by word. ONLY the words move: bold AND links stay.
   "step" is the gap between words in ms. A long line uses a shorter one. */
function splitWords(el, step){
  let wi = 0;
  if (step) el.style.setProperty("--ws", step + "ms");
  const walk = node => {
    [...node.childNodes].forEach(child => {
      if (child.nodeType === 3){
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)){ frag.appendChild(document.createTextNode(part)); return; }
          const outer = document.createElement("span");
          outer.className = "word";
          const inner = document.createElement("span");
          inner.style.setProperty("--wi", wi++);
          inner.textContent = part;
          outer.appendChild(inner);
          frag.appendChild(outer);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === 1){
        walk(child);
      }
    });
  };
  walk(el);
  el.classList.add("has-words");
  return el;
}

/* ------------------------------------------------------------
   LONG TEXT — laid out exactly as it was typed, SO a whole
   document can be pasted into one "text" field.

     the first line        -> the title
     # Heading             -> the title
     ## / ### / #### Head  -> three sizes of sub-heading
     A SHORT CAPS LINE     -> a sub-heading
     a blank line          -> starts a new paragraph
     - or • at the start   -> a bullet. Indent it to nest it.
     1. at the start       -> a numbered step
     - [ ] at the start    -> a checkbox
     one line, THEN        -> that line leads the list
       a list under it
     ---                   -> a dividing line
     | a | b |             -> a table, IF the row under
     |---|---|                it is dashes
     ```                   -> a block of fixed-width text,
     ```                      spacing kept exactly, with a Copy button
   ------------------------------------------------------------ */

const BULLET  = /^[\u2022\u00b7\u2013\u2014*\-]\s+/;
const ORDERED = /^\d+[.)]\s+/;
const TASK    = /^\[( |x|X)\]\s+/;
const HEADING = /^(#{1,6})\s+(.*\S)\s*$/;
const RULE    = /^(-{3,}|\*{3,}|_{3,})$/;
const FENCE   = /^```/;
const ROW     = /^\|.*\|$/;
const DIVIDER = /^\|[\s:\-|]+\|$/;

function isCapsLine(line){
  return line.length <= 64
      && /[A-Z]/.test(line)
      && line === line.toUpperCase()
      && !/[.!?]$/.test(line);
}

const isItem = l => BULLET.test(l) || ORDERED.test(l);

/* a cell may hold a real "|" IF it is written \| */
function rowCells(line){
  return line.replace(/^\|/, "").replace(/\|$/, "")
    .split(/(?<!\\)\|/)
    .map(c => c.replace(/\\\|/g, "|").trim());
}

function tableNode(head, rows){
  const wrap = make("div", "doc__table");
  const table = document.createElement("table");
  const cols = Math.max(head.length, ...rows.map(r => r.length));
  /* a label | value table fits a phone. A wider table scrolls sideways, NOT squashed. */
  table.style.minWidth = cols <= 2 ? "0" : Math.max(460, cols * 128) + "px";

  /* an empty header row IS a label | value table: no header shown */
  if (head.some(Boolean)){
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    head.forEach(c => tr.appendChild(make("th", null, c)));
    thead.appendChild(tr);
    table.appendChild(thead);
  } else {
    table.classList.add("doc__pairs");
  }

  const tbody = document.createElement("tbody");
  rows.forEach(cells => {
    const tr = document.createElement("tr");
    cells.forEach(c => tr.appendChild(make("td", null, c)));
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  wrap.appendChild(table);
  return wrap;
}

function richText(str){
  const doc  = make("div", "doc");
  const raw  = String(str).replace(/\r\n?/g, "\n").split("\n");
  const line = i => (raw[i] || "").trim();
  const indentOf = i => (raw[i] || "").match(/^[ \t]*/)[0].replace(/\t/g, "  ").length;
  let i = 0, hasTitle = false;

  /* one list, plus any list nested deeper under its items */
  function list(start){
    const base = indentOf(start);
    const ordered = ORDERED.test(line(start));
    const el = document.createElement(ordered ? "ol" : "ul");
    let li = null, k = start;

    while (k < raw.length){
      const l = line(k);
      if (!l) break;
      const ind = indentOf(k);

      if (isItem(l)){
        if (ind < base) break;
        if (ind >= base + 2 && li){                     // deeper -> nest it
          const [sub, next] = list(k);
          li.appendChild(sub);
          k = next;
          continue;
        }
        if (ORDERED.test(l) !== ordered) break;         // a different kind of list starts

        let text = l.replace(ordered ? ORDERED : BULLET, "");
        li = document.createElement("li");
        const task = text.match(TASK);
        if (task){
          text = text.replace(TASK, "");
          li.className = "doc__task" + (task[1] === " " ? "" : " is-done");
          li.innerHTML = '<span class="doc__check" aria-hidden="true"></span>' + inline(text);
        } else {
          li.innerHTML = inline(text);
        }
        el.appendChild(li);
        k++;
        continue;
      }

      /* an indented line under an item continues that item */
      if (li && ind > base && !HEADING.test(l) && !FENCE.test(l)){
        li.insertAdjacentHTML("beforeend", "<br>" + inline(l));
        k++;
        continue;
      }
      break;
    }
    return [el, k];
  }

  /* a line that starts something of its own, SO a paragraph stops here */
  const breaks = k => {
    const l = line(k);
    return !l || RULE.test(l) || HEADING.test(l) || isItem(l) || FENCE.test(l)
        || (ROW.test(l) && DIVIDER.test(line(k + 1)));
  };

  while (i < raw.length){
    const l = line(i);

    if (!l){ i++; continue; }

    if (FENCE.test(l)){
      const body = [];
      i++;
      while (i < raw.length && !FENCE.test(line(i))){ body.push(raw[i]); i++; }
      i++;                                               // the closing ```
      const wrap = make("div", "doc__codewrap");
      const pre = make("pre", "doc__code");
      const code = document.createElement("code");
      code.textContent = body.join("\n");
      pre.appendChild(code);
      wrap.appendChild(pre);
      /* the Copy button, ONLY IF this browser lets a page copy */
      if (canCopy()){
        const b = make("button", "doc__copy", CASE_LABELS.copy);
        b.type = "button";
        b.setAttribute("data-copy", "");
        wrap.appendChild(b);
      }
      doc.appendChild(wrap);
      continue;
    }

    if (RULE.test(l)){
      doc.appendChild(document.createElement("hr"));
      i++; continue;
    }

    const head = l.match(HEADING);
    if (head){
      const level = head[1].length;
      if (level === 1 && !hasTitle){
        doc.appendChild(make("p", "doc__title", head[2]));
        hasTitle = true;
      } else {
        doc.appendChild(make(level <= 2 ? "h4" : level === 3 ? "h5" : "h6", null, head[2]));
      }
      i++; continue;
    }

    if (ROW.test(l) && DIVIDER.test(line(i + 1))){
      const columns = rowCells(l);
      i += 2;
      const body = [];
      while (i < raw.length && ROW.test(line(i))){ body.push(rowCells(line(i))); i++; }
      doc.appendChild(tableNode(columns, body));
      continue;
    }

    if (isItem(l)){
      const [el, next] = list(i);
      doc.appendChild(el);
      i = next;
      continue;
    }

    /* plain lines, gathered until something else starts */
    const run = [];
    do { run.push(line(i)); i++; } while (i < raw.length && !breaks(i));

    const leadsList = i < raw.length && isItem(line(i));

    if (!hasTitle && !doc.children.length && run.length === 1){
      doc.appendChild(make("p", "doc__title", run[0]));
      hasTitle = true;
    }
    else if (run.length === 1 && isCapsLine(run[0])){
      doc.appendChild(make("h4", null, run[0]));
    }
    else {
      const para = make("p", run.length === 1 && leadsList ? "doc__lead" : null);
      para.innerHTML = run.map(inline).join("<br>");
      doc.appendChild(para);
    }
  }

  return doc;
}

/* one line stays a plain paragraph. Many lines become a document. */
function textNode(str){
  return /\n/.test(String(str).trim()) ? richText(str) : make("p", null, str);
}

function photoNode(src, alt, cls){
  const i = document.createElement("img");
  i.src = src || PLACEHOLDER.shot;
  i.alt = alt || "";
  i.draggable = false;
  i.loading = "lazy";
  i.decoding = "async";
  if (cls) i.className = cls;
  return i;
}

/* a picture inside a case: it opens full size in a new tab, so small text stays readable.
   An optional caption sits under it. wide: true gives it the whole row. */
function shotFigure(p){
  const fig = make("figure", "shot" + (p.wide ? " shot--wide" : ""));
  const a = document.createElement("a");
  a.href = p.src;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.setAttribute("aria-label", (p.alt || "Picture") + " (opens full size)");
  a.appendChild(photoNode(p.src, p.alt));
  fig.appendChild(a);
  if (p.caption) fig.appendChild(make("figcaption", null, p.caption));
  return fig;
}

/* a picture that is not there yet: a slim tile that says what goes there */
function emptyShot(alt){
  const f = make("figure", "shot--empty");
  f.innerHTML = UI.picture;
  if (alt) f.appendChild(make("figcaption", null, alt));
  return f;
}

/* A link IS an embed. A file IS a <video>. */
function isEmbed(src){
  return /^https?:/i.test(src) && !/\.(mp4|webm|ogv|ogg|mov|m4v)(\?|#|$)/i.test(src);
}

function videoNode(src, poster){
  if (!src) return null;
  if (isEmbed(src)){
    const box = make("div", "media__frame");
    const f = document.createElement("iframe");
    f.src = src;
    f.loading = "lazy";
    f.allowFullscreen = true;
    f.title = "Video";
    f.setAttribute("allow", "accelerometer; encrypted-media; picture-in-picture; fullscreen");
    box.appendChild(f);
    return box;
  }
  const v = document.createElement("video");
  v.controls = true;
  v.preload = "none";
  v.playsInline = true;
  v.src = src;
  v.poster = poster || PLACEHOLDER.poster;
  return v;
}

/* The optional photo AND video any section may carry.
   IF neither EXISTS THEN nothing is added. */
function mediaFor(o, cls){
  const parts = [];
  if (o.photo) parts.push(photoNode(o.photo, o.photoAlt));
  const v = videoNode(o.video, o.poster);
  if (v) parts.push(v);
  if (!parts.length) return null;

  const fig = make("figure", cls || "media");
  parts.forEach(n => fig.appendChild(n));
  return fig;
}

function setTab(title, note){
  if (title) document.title = title;
  const m = document.querySelector('meta[name="description"]');
  if (m && note) m.setAttribute("content", note);
}

/* a heading's words -> a safe id, e.g. "What I built" -> "what-i-built" */
function slug(s){
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48) || "part";
}

const canCopy = () => !!((navigator.clipboard && window.isSecureContext) ||
  (document.queryCommandSupported && document.queryCommandSupported("copy")));

/* copy text. The modern way first. IF the browser refuses THEN the old way. */
function copyText(text){
  const legacy = () => new Promise((ok, no) => {
    const back = document.activeElement;
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;top:0;left:0;opacity:0;pointer-events:none";
    document.body.appendChild(ta);
    ta.select();
    let done = false;
    try { done = document.execCommand("copy"); } catch (e) {}
    ta.remove();
    if (back && back.focus) back.focus({ preventScroll: true });
    done ? ok() : no();
  });
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text).catch(legacy);
  return legacy();
}


/* --- the pages --- */

function renderPage(){
  renderNav();
  renderHome();
  renderCases();
  renderCerts();
  renderContactPage();
}

function renderNav(){
  [["home", "Home"], ["cases", "Case studies"], ["certs", "Certifications"], ["contact", "Contact me"]].forEach(([key, fallback]) => {
    const a = document.querySelector('[data-nav="' + key + '"]');
    if (a) a.textContent = (CONTENT.nav && CONTENT.nav[key]) || fallback;
  });
}

/* ------------------------------------------------------------
   CERTIFICATIONS — one card per certificate: the picture, the ID
   (with a Copy button), AND a button for each link.
   ------------------------------------------------------------ */
function renderCerts(){
  const list = document.getElementById("cert-list");
  if (!list) return;                      // NOT the certifications page -> do nothing

  const c = CONTENT.certs || { items: [] };
  const L = Object.assign({
    issuer: "Issued by", date: "Issued", id: "Certificate ID", empty: "Not added yet",
    copy: "Copy", copied: "ID copied", photoEmpty: "Certificate picture goes here", open: "Open the certificate picture"
  }, c.labels || {});
  setTab(c.tabTitle, c.tabNote);

  const head = document.getElementById("cert-intro");
  if (head){
    if (c.eyebrow) head.appendChild(make("p", "eyebrow", c.eyebrow));
    if (c.heading) head.appendChild(splitWords(make("h1", null, c.heading)));
    if (c.lede)    head.appendChild(splitWords(make("p", "lede", c.lede), 14));
  }

  (c.items || []).forEach(item => {
    const card = make("article", "cert");

    /* the picture. A real one opens full size in a new tab. */
    const media = make("div", "cert__media");
    if (item.photo){
      const a = document.createElement("a");
      a.href = item.photo;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", L.open);
      a.appendChild(photoNode(item.photo, item.photoAlt || item.title));
      media.appendChild(a);
    } else {
      media.appendChild(emptyShot(L.photoEmpty));
    }
    card.appendChild(media);

    const body = make("div", "cert__body");
    body.appendChild(make("h3", null, item.title));

    const facts = make("dl", "cert__facts");
    const fact = (k, v, mono) => {
      const row = document.createElement("div");
      row.appendChild(make("dt", null, k));
      const dd = make("dd", mono ? "is-id" : null);
      if (v) dd.appendChild(make("span", null, v));
      else { dd.classList.add("is-empty"); dd.appendChild(make("span", null, L.empty)); }
      row.appendChild(dd);
      facts.appendChild(row);
      return dd;
    };
    if (item.issuer) fact(L.issuer, item.issuer);
    if (item.date)   fact(L.date, item.date);
    const idCell = fact(L.id, item.id, true);
    if (item.id && canCopy()){
      const chip = make("button", "chip");
      chip.type = "button";
      chip.setAttribute("data-copy-text", item.id);
      chip.innerHTML = UI.copy + "<span>" + esc(L.copy) + "</span>";
      idCell.appendChild(chip);
    }
    body.appendChild(facts);

    /* every link is a button. An empty url shows greyed out, as a reminder to fill it. */
    const links = (item.links || []).slice();
    if (item.link) links.unshift({ label: "Verify certificate", url: item.link });
    if (links.length){
      const row = make("div", "cert__links");
      links.forEach((l, i) => {
        const cls = "btn" + (i ? " btn--ghost" : "");
        if (l.url){
          const a = make("a", cls, l.label || l.url);
          a.href = l.url;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          row.appendChild(a);
        } else {
          const s = make("span", cls + " btn--ghost is-off", l.label || "Link");
          s.setAttribute("aria-disabled", "true");
          row.appendChild(s);
        }
      });
      body.appendChild(row);
    }

    card.appendChild(body);
    const li = document.createElement("li");
    li.appendChild(card);
    list.appendChild(li);
  });
}

/* ------------------------------------------------------------
   CONTACT PAGE — the details on one side, a form on the other.
   The form opens the visitor's own mail app, like the pop-up does.
   ------------------------------------------------------------ */
function renderContactPage(){
  const body = document.getElementById("contact-body");
  if (!body) return;                      // NOT the contact page -> do nothing

  const c = CONTENT.contactPage || {};
  const t = CONTENT.contactBox;
  setTab(c.tabTitle, c.tabNote);

  const head = document.getElementById("contact-intro");
  if (head){
    if (c.eyebrow) head.appendChild(make("p", "eyebrow", c.eyebrow));
    if (c.heading) head.appendChild(splitWords(make("h1", null, c.heading)));
    if (c.lede)    head.appendChild(splitWords(make("p", "lede", c.lede), 14));
  }

  /* left: the lines */
  const ul = make("ul", "contact-lines");
  (c.lines || []).forEach(l => {
    const li = document.createElement("li");
    li.appendChild(make("span", "k", l.label));
    const v = make("span", "v");
    if (l.email){
      const a = document.createElement("a");
      a.setAttribute("data-site", "email");
      a.href = "#";
      v.appendChild(a);
      if (canCopy()){
        const chip = make("button", "chip");
        chip.type = "button";
        chip.setAttribute("data-copy-email", "");
        chip.innerHTML = UI.copy + "<span>" + esc(LABELS.copyEmail) + "</span>";
        v.appendChild(chip);
      }
    } else {
      v.appendChild(make("span", null, l.value));
    }
    li.appendChild(v);
    ul.appendChild(li);
  });
  body.appendChild(ul);

  /* right: the form */
  const form = make("div", "contact-form");
  form.appendChild(make("h2", null, t.heading));
  form.appendChild(make("p", "muted", t.note));
  const fields = document.createElement("div");
  fields.className = "compose";
  fields.innerHTML = `
    <div>
      <label for="pcs">${esc(t.subjectLabel)}</label>
      <input id="pcs" type="text" value="${esc(t.subject)}" autocomplete="off">
    </div>
    <div>
      <label for="pcm">${esc(t.messageLabel)}</label>
      <textarea id="pcm" placeholder="${esc(t.placeholder)}"></textarea>
    </div>
    <div class="compose__actions">
      <button class="btn" id="pSend" type="button">${esc(t.send)}</button>
    </div>`;
  form.appendChild(fields);
  body.appendChild(form);

  fields.querySelector("#pSend").addEventListener("click", () => {
    mailTo(fields.querySelector("#pcs").value, fields.querySelector("#pcm").value);
  });
}

/* hand a message to the visitor's own mail app */
function mailTo(subject, message){
  window.location.href = "mailto:" + SITE.email +
    "?subject=" + encodeURIComponent(subject || "Hello") +
    "&body=" + encodeURIComponent(message || "");
}

function renderHome(){
  const stream = document.getElementById("home-blocks");
  if (!stream) return;                    // NOT the home page -> do nothing

  const c = CONTENT.home;
  setTab(c.tabTitle, c.tabNote);

  const img = document.querySelector(".portrait__img");
  if (img){
    img.src = c.photo || PLACEHOLDER.photo;
    img.alt = c.photoAlt || "";
  }

  c.blocks.forEach((b, i) => stream.appendChild(homeBlock(b, i === 0)));
  renderSkills(stream);

  /* the "scroll" hint under the first screen. "" hides it. */
  if (c.scrollHint){
    const cue = make("div", "scroll-cue");
    cue.setAttribute("aria-hidden", "true");
    cue.appendChild(make("span", null, c.scrollHint));
    cue.appendChild(make("span", "scroll-cue__line"));
    stream.parentNode.appendChild(cue);
  }
}

function homeBlock(b, isFirst){
  const s = make("section", "block reveal");
  if (b.id) s.id = b.id;

  if (b.type === "cta"){
    const box = make("div", "cta spot");
    box.appendChild(splitWords(make("h2", null, b.heading)));
    if (b.text) box.appendChild(make("p", "muted", b.text));
    const m = mediaFor(b);
    if (m) box.appendChild(m);
    const btn = make("button", "btn", b.button || "Contact me");
    btn.type = "button";
    btn.setAttribute("data-compose", "");
    box.appendChild(btn);
    s.appendChild(box);
    return s;
  }

  if (b.eyebrow) s.appendChild(make("p", "eyebrow", b.eyebrow));
  if (b.heading) s.appendChild(splitWords(make(isFirst ? "h1" : "h2", null, b.heading)));
  if (b.lede)    s.appendChild(splitWords(make("p", "lede", b.lede), 14));

  const media = mediaFor(b);
  if (media) s.appendChild(media);

  if (b.type === "tools" && b.tools){
    const ul = make("ul", "stack stagger");
    b.tools.forEach(t => {
      const li = make("li", "spot");
      li.insertAdjacentHTML("beforeend", toolIcon(t.icon));
      li.appendChild(make("span", "name", t.name));
      ul.appendChild(li);
    });
    s.appendChild(ul);
  }

  if (b.type === "contacts" && b.lines){
    const ul = make("ul", "contact-lines stagger");
    b.lines.forEach(l => {
      const li = document.createElement("li");
      li.appendChild(make("span", "k", l.label));
      const v = make("span", "v");
      if (l.email){
        const a = document.createElement("a");
        a.setAttribute("data-site", "email");   // filled by fillSiteText()
        a.href = "#";
        v.appendChild(a);
        /* a one-tap copy next to the address, IF this browser allows it */
        if (canCopy()){
          const chip = make("button", "chip");
          chip.type = "button";
          chip.setAttribute("data-copy-email", "");
          chip.innerHTML = UI.copy + "<span>" + esc(LABELS.copyEmail) + "</span>";
          v.appendChild(chip);
        }
      } else {
        v.appendChild(make("span", null, l.value));
      }
      li.appendChild(v);
      ul.appendChild(li);
    });
    s.appendChild(ul);
  }

  if (b.bullets){
    const ul = make("ul", "rows stagger");
    b.bullets.forEach(line => {
      const li = document.createElement("li");
      li.appendChild(make("span", "dot"));
      li.appendChild(make("span", null, line));
      ul.appendChild(li);
    });
    s.appendChild(ul);
  }

  return s;
}

/* a name from the list, OR a whole <svg> pasted in by hand */
function toolIcon(icon){
  const raw = String(icon || "").trim();
  if (raw.startsWith("<svg")) return raw;
  return "<svg viewBox='0 0 24 24' aria-hidden='true'>" + (ICONS[raw] || "") + "</svg>";
}

function renderCases(){
  const list = document.getElementById("case-list");
  if (!list) return;                      // NOT the case page -> do nothing

  const c = CONTENT.cases;
  setTab(c.tabTitle, c.tabNote);

  const head = document.getElementById("case-intro");
  if (head){
    if (c.eyebrow) head.appendChild(make("p", "eyebrow", c.eyebrow));
    if (c.heading) head.appendChild(splitWords(make("h1", null, c.heading)));
    if (c.lede)    head.appendChild(splitWords(make("p", "lede", c.lede), 14));
  }

  c.items.forEach((item, i) => {
    const id = "case-" + (i + 1);

    const btn = make("button", "case-card spot");
    btn.type = "button";
    btn.dataset.case = id;
    btn.dataset.index = i;

    /* no photo -> a small drawn flow stands in */
    const media = make("div", "case-card__media");
    media.appendChild(item.photo ? photoNode(item.photo, "", "case-card__shot") : caseArt(i));
    btn.appendChild(media);

    const body = make("div", "case-card__body");
    if (item.tag)   body.appendChild(make("p", "case-card__tag", item.tag));
    body.appendChild(make("h3", null, item.title));
    if (item.blurb) body.appendChild(make("p", null, item.blurb));
    const open = make("p", "case-card__open");
    open.appendChild(make("span", null, c.openLabel || "Open case"));
    open.insertAdjacentHTML("beforeend", UI.arrow);
    body.appendChild(open);
    btn.appendChild(body);

    const li = document.createElement("li");
    li.appendChild(btn);
    list.appendChild(li);

    /* the panel this card opens */
    const tpl = document.createElement("template");
    tpl.id = id;
    tpl.content.appendChild(casePanel(item, i + 1));
    document.body.appendChild(tpl);
  });
}

function casePanel(item, n){
  const art = make("article", "case-full");
  const title = make("h2", null, item.title);
  title.tabIndex = -1;                                 // the reader lands here after next / previous
  art.appendChild(title);
  if (item.meta) art.appendChild(make("p", "meta", item.meta));

  const v = videoNode(item.video, item.poster);
  if (v) art.appendChild(v);

  if (item.photos && item.photos.length){
    const wrap = make("div", "shots");
    item.photos.forEach(p => wrap.appendChild(p.src ? shotFigure(p) : emptyShot(p.alt)));
    art.appendChild(wrap);
  }

  const used = new Set();
  const idFor = text => {
    let id = "c" + n + "-" + slug(text), k = 2;
    while (used.has(id)) id = "c" + n + "-" + slug(text) + "-" + k++;
    used.add(id);
    return id;
  };

  (item.story || []).forEach((part, pi) => {
    if (part.heading){
      const h = make("h3", null, part.heading);
      h.id = idFor(part.heading);
      art.appendChild(h);
    }
    if (part.text){
      /* a long write-up is NOT laid out here. It sits in a folder as a file,
         AND opens in a window of its own (see initCaseModal). */
      if (/\n/.test(String(part.text).trim())) art.appendChild(docFolder(part.text, n - 1, pi));
      else art.appendChild(textNode(part.text));
    }
    if (part.bullets){
      const ul = document.createElement("ul");
      part.bullets.forEach(x => ul.appendChild(make("li", null, x)));
      art.appendChild(ul);
    }
  });

  return art;
}

/* the facts a file shows about its document: its name, parts and reading time */
function docInfo(text){
  const lines = String(text).replace(/\r\n?/g, "\n").split("\n").map(l => l.trim());
  const h1 = lines.find(l => /^#\s+\S/.test(l));
  const title = (h1 ? h1.replace(/^#\s+/, "") : (lines.find(Boolean) || "Document")).replace(/[*`]/g, "");
  return {
    title,
    sections: lines.filter(l => /^##\s+\S/.test(l)).length,
    minutes: Math.max(1, Math.round(String(text).split(/\s+/).filter(Boolean).length / 220))
  };
}

/* a folder with one file in it. The file is a button: it opens the document window. */
function docFolder(text, ci, pi){
  const info = docInfo(text);
  const box = make("div", "folder");

  const head = make("div", "folder__head");
  head.insertAdjacentHTML("beforeend", UI.folder);
  head.appendChild(make("span", null, CASE_LABELS.folder));
  head.appendChild(make("span", "folder__count", "1"));
  box.appendChild(head);

  const file = make("button", "file");
  file.type = "button";
  file.dataset.doc = ci + ":" + pi;
  const icon = make("span", "file__icon");
  icon.innerHTML = UI.file;
  const words = make("span", "file__text");
  words.appendChild(make("span", "file__name", info.title));
  const bits = [CASE_LABELS.file];
  if (info.sections) bits.push(info.sections + " " + CASE_LABELS.sections);
  bits.push(info.minutes + " " + CASE_LABELS.minRead);
  words.appendChild(make("span", "file__meta", bits.join(" · ")));
  const open = make("span", "file__open");
  open.appendChild(make("span", null, CASE_LABELS.openFile));
  open.insertAdjacentHTML("beforeend", UI.arrow);
  file.append(icon, words, open);
  box.appendChild(file);
  return box;
}

/* A card with no photo gets a small drawing: a row of nodes with one
   branch, like a flow. Each card draws its own, the same every visit. */
function caseArt(i){
  const rand = seeded(1000 + i * 7919);
  const W = 320, H = 200, id = "ca" + i;
  const n = 4 + (i % 2);
  /* the nodes stay in the middle of the picture, SO a wide OR narrow card that crops
     the edges (the picture fills its box) never cuts one in half */
  const step = (W - 160) / (n - 1);
  const nodes = [];
  for (let k = 0; k < n; k++) nodes.push([80 + k * step, H / 2 + (rand() - .5) * 64]);

  const bi = 1 + Math.floor(rand() * (n - 2));                         // the node that splits
  const up = nodes[bi + 1][1] > nodes[bi][1] ? -1 : 1;                 // away from the next node, SO they never touch
  rand();
  const end = [Math.min(nodes[bi][0] + step, W - 80), Math.min(Math.max(nodes[bi][1] + up * (48 + rand() * 14), 34), H - 34)];

  const curve = (a, b) => {
    const mx = ((a[0] + b[0]) / 2).toFixed(1);
    return `M${a[0].toFixed(1)} ${a[1].toFixed(1)} C${mx} ${a[1].toFixed(1)}, ${mx} ${b[1].toFixed(1)}, ${b[0].toFixed(1)} ${b[1].toFixed(1)}`;
  };
  const main = nodes.slice(1).map((p, k) => curve(nodes[k], p)).join(" ");
  const branch = curve(nodes[bi], end);
  const gx = (18 + rand() * 40).toFixed(0), gy = (8 + rand() * 30).toFixed(0);

  const box = ([x, y], cls) =>
    `<rect class="case-art__node${cls}" x="${(x - 15).toFixed(1)}" y="${(y - 10).toFixed(1)}" width="30" height="20" rx="1"/>` +
    `<circle class="case-art__pip" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.1"/>`;

  const holder = document.createElement("div");
  holder.innerHTML =
    `<svg class="case-art" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="${id}a" cx="${gx}%" cy="${gy}%" r="75%"><stop offset="0" stop-color="#1E293B" stop-opacity=".08"/><stop offset="1" stop-color="#1E293B" stop-opacity="0"/></radialGradient>
        <radialGradient id="${id}b" cx="${100 - gx}%" cy="${100 - gy}%" r="80%"><stop offset="0" stop-color="#64748B" stop-opacity=".08"/><stop offset="1" stop-color="#64748B" stop-opacity="0"/></radialGradient>
        <linearGradient id="${id}f" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#1E293B"/><stop offset="1" stop-color="#64748B"/></linearGradient>
        <pattern id="${id}d" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".8" fill="rgba(30,41,59,.14)"/></pattern>
      </defs>
      <rect width="${W}" height="${H}" fill="#EEF1F4"/>
      <rect width="${W}" height="${H}" fill="url(#${id}d)"/>
      <path class="case-art__link" d="${main} ${branch}"/>
      <path class="case-art__flow" d="${main}" stroke="url(#${id}f)"/>
      ${nodes.map((p, k) => box(p, k === 0 ? " is-start" : k === bi ? " is-split" : "")).join("")}
      ${box(end, "")}
    </svg>`;
  return holder.firstElementChild;
}


/* ============================================================
   0c. SKILL GRAPH — a real radar chart, drawn from content.js

   Every axis sits at the same angle apart, the first one at the
   top. A value is measured straight out from the centre:
       distance = full radius * value / max
   SO a 50 reaches exactly halfway, AND two skills are comparable.
   Nothing is auto-scaled.
   ============================================================ */

const SVGNS = "http://www.w3.org/2000/svg";

/* the site's own colours, by name. Anything else IS used as typed. */
const SERIES_COLOURS = { teal: "var(--teal)", violet: "var(--violet)", rose: "var(--rose)" };

function svgEl(tag, attrs){
  const n = document.createElementNS(SVGNS, tag);
  for (const k in attrs) n.setAttribute(k, attrs[k]);
  return n;
}

function seriesColour(c){
  return SERIES_COLOURS[String(c || "").toLowerCase()] || c || "var(--teal)";
}

function radarChart(cfg){
  const axes   = cfg.axes;
  const n      = axes.length;
  const max    = Number(cfg.max) > 0 ? Number(cfg.max) : 100;
  const rings  = Math.max(1, Math.round(cfg.rings || 5));
  const series = cfg.series && cfg.series.length ? cfg.series : [{ name: "", color: "teal" }];

  const PAD = 62;                       // room for the labels outside the grid
  const R   = 128;                      // full radius = the value "max"
  const CX  = R + PAD, CY = R + PAD;
  const SIZE = (R + PAD) * 2;

  /* a point at angle "a" (degrees, 0 = up), at distance r from the centre */
  function at(a, r){
    const rad = (-90 + a) * Math.PI / 180;
    return [CX + r * Math.cos(rad), CY + r * Math.sin(rad)];
  }
  /* axis i, at distance r from the centre. First axis points up. */
  const point = (i, r) => at(i * 360 / n, r);
  const ring = r => axes.map((_, i) => point(i, r).map(v => v.toFixed(2)).join(",")).join(" ");
  const valueOf = (axis, s) => {
    const v = Array.isArray(axis.values) ? axis.values[s] : (s === 0 ? axis.value : undefined);
    return Math.min(Math.max(Number(v) || 0, 0), max);
  };

  const svg = svgEl("svg", {
    viewBox: `0 0 ${SIZE} ${SIZE}`,
    class: "radar",
    role: "img",
    "aria-label": cfg.ariaLabel || "Skill graph"
  });

  /* --- the grid: rings, THEN one spoke per axis --- */
  const grid = svgEl("g", { class: "radar__grid" });
  for (let k = rings; k >= 1; k--){
    grid.appendChild(svgEl("polygon", { points: ring(R * k / rings), class: "radar__ring", style: `--k:${k - 1}` }));
  }
  axes.forEach((_, i) => {
    const [x, y] = point(i, R);
    grid.appendChild(svgEl("line", { x1: CX, y1: CY, x2: x.toFixed(2), y2: y.toFixed(2), class: "radar__spoke", "data-i": i }));
  });
  svg.appendChild(grid);

  /* WHERE the number for each point goes.
     Straight out from the point, THEN pushed sideways off the spoke:
     one set to the left, the other to the right. SO two numbers never
     land on each other, AND neither sits on top of a dot. */
  function numberPos(i, si){
    const a  = (-90 + i * 360 / n) * Math.PI / 180;
    const r  = R * valueOf(axes[i], si) / max + 12;
    const off = (si - (series.length - 1) / 2) * 19;      // 0 IF there is one set
    return [
      CX + r * Math.cos(a) - off * Math.sin(a),
      CY + r * Math.sin(a) + off * Math.cos(a)
    ];
  }

  /* --- one shape per set of numbers --- */
  const plot = svgEl("g", { class: "radar__plot" });
  series.forEach((s, si) => {
    const colour = seriesColour(s.color);
    const pts = axes.map((axis, i) => point(i, R * valueOf(axis, si) / max));

    plot.appendChild(svgEl("polygon", {
      points: pts.map(p => p.map(v => v.toFixed(2)).join(",")).join(" "),
      class: "radar__shape",
      pathLength: 1,                                    // SO the outline can trace itself in
      style: `--c:${colour}`
    }));

    pts.forEach(([x, y], i) => {
      plot.appendChild(svgEl("circle", {
        cx: x.toFixed(2), cy: y.toFixed(2), r: 3.1,
        class: "radar__dot", style: `--c:${colour};--k:${i}`,
        "data-i": i, "data-s": si
      }));
      if (cfg.showValues !== false){
        const [lx, ly] = numberPos(i, si);
        const num = svgEl("text", {
          x: lx.toFixed(2), y: ly.toFixed(2),
          class: "radar__value", style: `--c:${colour}`,
          "text-anchor": "middle", "dominant-baseline": "middle"
        });
        num.textContent = valueOf(axes[i], si);
        plot.appendChild(num);
      }
    });
  });
  svg.appendChild(plot);

  /* --- the name of each axis, just outside the grid.
         Each one can be focused, SO a keyboard can explore the graph too. --- */
  const names = svgEl("g", { class: "radar__labels" });
  axes.forEach((axis, i) => {
    const [x, y] = point(i, R + (cfg.showValues === false ? 18 : 34));   // closer IF no numbers sit in between
    const dx = x - CX;
    const t = svgEl("text", {
      x: x.toFixed(2), y: y.toFixed(2),
      class: "radar__label",
      "text-anchor": Math.abs(dx) < 6 ? "middle" : (dx > 0 ? "start" : "end"),
      "dominant-baseline": "middle",
      "data-i": i,
      tabindex: 0,
      "aria-label": axis.label + ": " + series.map((_, si) => valueOf(axis, si)).join(" and "),
      style: `--k:${i}`
    });
    t.textContent = axis.label;
    names.appendChild(t);
  });
  svg.appendChild(names);

  /* --- one invisible slice per axis, SO the pointer finds a skill easily --- */
  const hits = svgEl("g", { class: "radar__hits" });
  const half = 180 / n;
  axes.forEach((_, i) => {
    const mid = i * 360 / n, pts = [[CX, CY]];
    for (let k = 0; k <= 4; k++) pts.push(at(mid - half + k * half / 2, R + 30));
    hits.appendChild(svgEl("polygon", {
      points: pts.map(p => p.map(v => v.toFixed(1)).join(",")).join(" "),
      class: "radar__hit", "data-i": i
    }));
  });
  svg.appendChild(hits);

  /* what the tooltip needs to know */
  svg._radar = {
    labels: axes.map(a => a.label),
    values: axes.map(a => series.map((_, si) => valueOf(a, si)))
  };

  return svg;
}

function renderSkills(stream){
  const c = CONTENT.home && CONTENT.home.skills;
  if (!c || !c.axes || c.axes.length < 3) return;      // NO axes -> NO graph

  const series = c.series && c.series.length ? c.series : [{ name: "", color: "teal" }];

  const panel = make("section", "skills");
  const card  = make("div", "skills__card");

  if (c.title) card.appendChild(make("p", "eyebrow", c.title));

  card.appendChild(radarChart({
    axes: c.axes, max: c.max, rings: c.rings, series: c.series,
    showValues: c.showValues,
    ariaLabel: (c.title || "Skill graph") + ": " + c.axes.map(a => {
      const v = Array.isArray(a.values) ? a.values : [a.value];
      return a.label + " " + v.join(" and ");
    }).join(", ")
  }));

  const tip = make("div", "radar__tip");
  tip.setAttribute("aria-hidden", "true");
  card.appendChild(tip);

  /* the key, only IF a set has a name */
  if (series.some(s => s.name)){
    const key = make("ul", "skills__key");
    series.forEach(s => {
      const li = document.createElement("li");
      li.style.setProperty("--c", seriesColour(s.color));
      li.appendChild(make("span", "skills__swatch"));
      li.appendChild(make("span", null, s.name || ""));
      key.appendChild(li);
    });
    card.appendChild(key);
  }

  if (c.note) card.appendChild(make("p", "skills__note", c.note));

  panel.appendChild(card);

  /* After the first section. On a wide screen the panel is fixed,
     SO where it sits in the page does not matter there. */
  const first = stream.children[0];
  if (first && first.nextSibling) stream.insertBefore(panel, first.nextSibling);
  else stream.appendChild(panel);

  const svg = card.querySelector(".radar");
  fitRadar(svg, panel);
  /* the skill names use a web font. Measure again once it has loaded,
     ELSE the frame fits the fallback font's widths. */
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => fitRadar(svg, panel));
}

/* The frame hugs the web AND the skill names, with no empty margin.
   SO the web is as big as the space allows, whatever names are typed.
   --ar tells the CSS how wide the drawing is for its height. */
function fitRadar(svg, panel){
  let x1 = Infinity, y1 = Infinity, x2 = -Infinity, y2 = -Infinity;
  svg.querySelectorAll(":scope > g:not(.radar__hits)").forEach(g => {
    let b;
    try { b = g.getBBox(); } catch (e) { return; }      // not laid out yet
    if (!b.width && !b.height) return;
    x1 = Math.min(x1, b.x);           y1 = Math.min(y1, b.y);
    x2 = Math.max(x2, b.x + b.width); y2 = Math.max(y2, b.y + b.height);
  });
  if (!isFinite(x1)) return;
  const m = 4;                                          // a hair of room for the dots' strokes
  const w = x2 - x1 + m * 2, h = y2 - y1 + m * 2;
  svg.setAttribute("viewBox", `${(x1 - m).toFixed(1)} ${(y1 - m).toFixed(1)} ${w.toFixed(1)} ${h.toFixed(1)}`);
  panel.style.setProperty("--ar", (w / h).toFixed(3));
}

/* the graph draws itself once. After that, every hover answers at once. */
function drawSkills(panel){
  if (!panel || panel.classList.contains("is-drawn")) return;
  panel.classList.add("is-drawn");
  const svg = panel.querySelector(".radar");
  setTimeout(() => svg && svg.classList.add("is-settled"), REDUCED ? 0 : 2400);
}

/* ============================================================
   0b. NAME AND EMAIL GO INTO EVERY SLOT
   ============================================================ */
function fillSiteText(){
  document.querySelectorAll('[data-site="name"]').forEach(n => n.textContent = SITE.name);
  document.querySelectorAll('[data-site="email"]').forEach(n => {
    n.textContent = SITE.email;
    if (n.tagName === "A") n.href = "mailto:" + SITE.email;
  });
  document.querySelectorAll("[data-label]").forEach(n => {
    const v = LABELS[n.getAttribute("data-label")];
    if (v) n.textContent = v;
  });
}


/* ============================================================
   0d. SMOOTH SCROLLING — ONLY for a mouse OR a trackpad.
   Phones keep their own scrolling, which already feels right.
   IF the library did not load THEN the page scrolls normally.
   ============================================================ */
function initSmoothScroll(){
  if (REDUCED || !FINE) return;
  const start = () => {
    if (LENIS || !window.Lenis) return;
    LENIS = new window.Lenis({ autoRaf: false, lerp: 0.075, smoothWheel: true, wheelMultiplier: 0.9, anchors: false });
    onFrame(t => LENIS.raf(t));
    if (document.body.classList.contains("is-locked")) LENIS.stop();
  };
  if (window.Lenis) start();
  else {
    const tag = document.getElementById("lenis-lib");
    if (tag) tag.addEventListener("load", start, { once: true });
  }
}

function scrollToY(y){
  if (LENIS) LENIS.scrollTo(y, { duration: 1.3 });
  else window.scrollTo({ top: y, behavior: REDUCED ? "auto" : "smooth" });
}


/* ============================================================
   1. STARS — realistic: many faint, few bright, all breathing
   ============================================================ */
function initStars(){
  const canvas = document.getElementById("stars");
  if (!canvas) return;                       // NO canvas -> NO star engine
  if (getComputedStyle(canvas.parentElement).display === "none") return;   // the theme hides the sky -> do not draw it
  const ctx = canvas.getContext("2d");

  const TINTS = ["255,255,255", "196,216,255", "255,224,200"];   // white, blue-white, warm
  const HEADROOM = 140;                      // extra height, SO a phone's address bar never forces a redraw
  let w = 0, h = 0, builtW = 0, builtH = 0, dpr = 1, stars = [], shot = null;
  let time = 0, last = 0, nextShot = 3.5, running = false;
  const par = { x: 0, y: 0, tx: 0, ty: 0 };  // the pointer, -1 -> 1, eased

  /* the glow around a bright star, painted ONCE, THEN stamped */
  const sprites = TINTS.map(rgb => {
    const c = document.createElement("canvas");
    c.width = c.height = 64;
    const g = c.getContext("2d");
    const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, `rgba(${rgb},1)`);
    gr.addColorStop(1, `rgba(${rgb},0)`);
    g.fillStyle = gr;
    g.fillRect(0, 0, 64, 64);
    return c;
  });

  function resize(){
    const vw = window.innerWidth, vh = window.innerHeight;
    /* a bar came OR went (same width, the sky still covers the screen) -> keep it as it is */
    if (vw === builtW && vh <= builtH && builtH - vh <= HEADROOM + 260) return;

    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = vw; h = vh + HEADROOM;
    builtW = w; builtH = h;
    canvas.width  = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width  = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    build();
    if (REDUCED) draw(performance.now());
  }

  function build(){
    const rand = seeded(20260918);
    const count = Math.round(w * h * 0.00016);   // density scales with the screen
    stars = [];
    for (let i = 0; i < count; i++){
      const depth = rand();                      // 0 = far, 1 = near
      const t = rand();
      stars.push({
        nx: rand(), ny: rand(), ox: 0,
        r: 0.25 + depth * 1.05,
        base: 0.18 + rand() * 0.62,
        speed: 0.35 + rand() * 1.7,              // twinkle rate
        phase: rand() * Math.PI * 2,
        drift: (0.002 + depth * 0.010) * 60,     // parallax, px per second
        depth,
        tint: t < 0.72 ? 0 : t < 0.90 ? 1 : 2,
        glint: false
      });
    }
    // SOME stars are anchors: bigger, brighter, with a cross of light
    const anchors = Math.max(4, Math.round(count * 0.014));
    for (let i = 0; i < anchors; i++){
      const s = stars[Math.floor(rand() * stars.length)];
      if (s){ s.r = 1.45 + rand() * 1.0; s.base = 0.92; s.glint = true; }
    }
    stars.sort((a, b) => a.tint - b.tint);       // one colour change per tint, NOT per star
  }

  function draw(now){
    const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
    last = now;
    time += dt;

    par.x += (par.tx - par.x) * 0.05;
    par.y += (par.ty - par.y) * 0.05;
    const sy = REDUCED ? 0 : window.scrollY * 0.03;   // a little depth AS the page scrolls

    ctx.clearRect(0, 0, w, h);
    const W = w + 6;
    let tint = -1;

    for (const s of stars){
      if (!REDUCED) s.ox += s.drift * dt;
      const twinkle = REDUCED ? 1 : (0.62 + 0.38 * Math.sin(time * s.speed + s.phase));
      const a = s.base * twinkle;

      let x = (s.nx * w + s.ox + par.x * s.depth * 16 + 3) % W; if (x < 0) x += W; x -= 3;
      let y = (s.ny * h - sy * s.depth + par.y * s.depth * 10) % h; if (y < 0) y += h;

      if (s.r > 1.0){                            // halo for the bright ones
        const d = s.r * 12;
        ctx.globalAlpha = a * 0.55;
        ctx.drawImage(sprites[s.tint], x - d / 2, y - d / 2, d, d);
      }

      if (s.tint !== tint){ tint = s.tint; ctx.fillStyle = ctx.strokeStyle = `rgb(${TINTS[tint]})`; }
      ctx.globalAlpha = a;
      ctx.beginPath(); ctx.arc(x, y, s.r, 0, 6.2832); ctx.fill();

      if (s.glint){                              // 4-point shine
        const len = s.r * 7 * twinkle;
        ctx.globalAlpha = a * 0.28;
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.moveTo(x - len, y); ctx.lineTo(x + len, y);
        ctx.moveTo(x, y - len); ctx.lineTo(x, y + len);
        ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;

    /* a shooting star, rarely, ONLY IF motion is allowed */
    if (!REDUCED){
      if (!shot && time > nextShot){
        shot = {
          x: Math.random() * w * 0.7,
          y: Math.random() * h * 0.4,
          vx: (6 + Math.random() * 4) * 60,
          vy: (2 + Math.random() * 1.6) * 60,
          life: 1
        };
      }
      if (shot){
        shot.x += shot.vx * dt; shot.y += shot.vy * dt; shot.life -= 0.84 * dt;
        const tailX = shot.x - shot.vx * 0.23, tailY = shot.y - shot.vy * 0.23;
        const g = ctx.createLinearGradient(tailX, tailY, shot.x, shot.y);
        g.addColorStop(0, "rgba(255,255,255,0)");
        g.addColorStop(1, `rgba(255,255,255,${Math.max(shot.life, 0) * 0.75})`);
        ctx.strokeStyle = g; ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.moveTo(tailX, tailY); ctx.lineTo(shot.x, shot.y); ctx.stroke();
        tint = -1;
        if (shot.life <= 0 || shot.x > w || shot.y > h){
          shot = null;
          nextShot = time + 9 + Math.random() * 14;
        }
      }
    }
  }

  function run(){ if (!running && !REDUCED){ running = true; last = 0; onFrame(draw); } }
  function stop(){ running = false; offFrame(draw); }

  /* WHILE a panel is open THEN the sky rests: it is blurred behind the panel anyway */
  SKY.pause = stop;
  SKY.resume = run;

  /* the stars lean a little toward the pointer, the near ones more */
  if (FINE && !REDUCED){
    window.addEventListener("pointermove", e => {
      par.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      par.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });
  }

  resize();
  window.addEventListener("resize", debounce(resize, 160));
  run();
}

/* ============================================================
   1b. HEADER COMET
   WHILE the page scrolls THEN a star travels the bottom line,
   start to end. It chases the target, SO the move is smooth.
   WHEN a page link is clicked THEN it returns to the start first,
   AND the next page starts it over from there.
   ============================================================ */
function initComet(){
  const nav   = document.querySelector(".nav");
  const comet = document.querySelector(".nav__comet");
  if (!nav || !comet) return;

  let current = 0, target = 0, running = false, leaving = false;
  const EASE_K = 0.12;                     // lower = longer tail of movement

  function progress(){
    const max = document.documentElement.scrollHeight - window.innerHeight;
    return max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
  }

  function loop(){
    current += (target - current) * (REDUCED ? 1 : EASE_K);
    if (Math.abs(target - current) < 0.0004){ current = target; running = false; offFrame(loop); }
    nav.style.setProperty("--comet", current.toFixed(4));
  }

  function kick(){
    if (!running){ running = true; onFrame(loop); }
  }

  function follow(){
    if (leaving) return;                   // ON exit it goes home, NOT to the scroll
    target = progress();
    kick();
  }

  window.addEventListener("scroll", follow, { passive: true });
  window.addEventListener("resize", follow);

  /* ON LOAD it sits at the start, THEN eases to where the page really is */
  nav.style.setProperty("--comet", "0");
  requestAnimationFrame(follow);

  /* ON page change: send it home, THEN leave */
  document.querySelectorAll(".nav__link, .nav__mark").forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;   // a new tab: let it be
      if (link.getAttribute("aria-current") === "page") return;           // already here
      if (REDUCED) return;                                                // no motion, just go
      e.preventDefault();
      leaving = true;
      target = 0;
      kick();
      document.body.classList.add("is-leaving");
      setTimeout(() => { window.location.href = href; }, 360);
    });
  });
}

/* ============================================================
   1c. HEADER — it settles WHEN the page scrolls, AND a soft pill
   follows the pointer across the links, THEN rests on this page.
   ============================================================ */
function initNav(){
  const nav = document.querySelector(".nav");
  if (!nav) return;

  let scrolled = null;
  const check = () => {
    const s = window.scrollY > 40;
    if (s !== scrolled){ scrolled = s; nav.classList.toggle("is-scrolled", s); }
  };
  window.addEventListener("scroll", check, { passive: true });
  check();

  const links = nav.querySelector(".nav__links");
  const pill  = nav.querySelector(".nav__pill");
  if (!links || !pill) return;
  const here = links.querySelector('[aria-current="page"]');

  function place(a, instant){
    if (!a){ pill.classList.remove("is-on"); return; }
    if (instant) pill.classList.add("no-anim");
    pill.style.setProperty("--px", a.offsetLeft + "px");
    pill.style.setProperty("--pw", a.offsetWidth + "px");
    pill.classList.add("is-on");
    if (instant){ void pill.offsetWidth; pill.classList.remove("no-anim"); }
  }

  place(here, true);
  if (FINE){
    links.addEventListener("pointerover", e => { const a = e.target.closest(".nav__link"); if (a) place(a); });
    links.addEventListener("pointerleave", () => place(here));
  }
  links.addEventListener("focusin", e => { const a = e.target.closest(".nav__link"); if (a) place(a); });
  links.addEventListener("focusout", () => place(here));
  window.addEventListener("resize", debounce(() => place(here, true), 120));
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => place(here, true));
}

/* ============================================================
   2. SCROLL TAKEOVER — wide screens only
   WHEN the page scrolls THEN, in order:
     --t   the photo fades AND slides left
     --g   the graph arrives
     --go  the graph leaves
     --w   ONLY THEN the column glides to the centre
   The numbers chase the scroll, SO every move is eased.
   The column never changes width, SO no line ever re-wraps.
   ============================================================ */
function initTakeover(){
  const portrait = document.querySelector(".portrait");
  const stream   = document.querySelector(".stream");
  if (!portrait || !stream) return;
  const skills = document.querySelector(".skills");
  const root = document.documentElement.style;

  let shown = window.scrollY, target = shown, running = false;

  /* how far the column must travel to sit in the middle */
  function measure(){
    if (!STAGE_Q.matches) return;
    const vw = document.documentElement.clientWidth;
    const ml = parseFloat(getComputedStyle(stream).marginLeft) || 0;
    root.setProperty("--glide", ((vw - stream.offsetWidth) / 2 - ml).toFixed(1) + "px");
  }

  function apply(y){
    const vh = window.innerHeight;
    const t  = ramp(y, 0,          vh * 0.65);   // the photo fades
    const g  = ramp(y, vh * 0.55,  vh * 0.98);   // THEN the graph arrives
    const go = ramp(y, vh * 1.70,  vh * 1.98);   // THEN the graph leaves
    const w  = ramp(y, vh * 1.98,  vh * 2.42);   // ONLY THEN the column glides

    root.setProperty("--t",  t.toFixed(4));
    root.setProperty("--g",  g.toFixed(4));
    root.setProperty("--go", go.toFixed(4));
    root.setProperty("--w",  w.toFixed(4));

    portrait.classList.toggle("is-gone", t > 0.97);
    if (skills){
      if (g > 0.04) drawSkills(skills);                  // the chart draws itself once
      skills.classList.toggle("is-gone", g < 0.001 || go > 0.995);
      skills.classList.toggle("is-live", g > 0.6 && go < 0.3);
    }
  }

  function step(){
    /* smooth scrolling already eases the page, SO follow it exactly */
    const k = (LENIS || REDUCED) ? 1 : 0.16;
    shown += (target - shown) * k;
    if (Math.abs(target - shown) < 0.5){ shown = target; running = false; offFrame(step); }
    apply(shown);
  }

  function follow(){
    if (!STAGE_Q.matches) return;
    target = window.scrollY;
    if (!running){ running = true; onFrame(step); }
  }

  /* On the stage the graph is fixed to the screen, SO it must NOT sit inside
     the gliding column (a moving parent would carry it along).
     Stacked, it goes back under the first section. */
  function placeGraph(){
    if (!skills) return;
    if (STAGE_Q.matches){
      if (skills.parentNode !== stream.parentNode) stream.parentNode.appendChild(skills);
    } else {
      const first = stream.querySelector(".block");
      if (first && skills.parentNode !== stream) stream.insertBefore(skills, first.nextSibling);
    }
  }

  function mode(){
    placeGraph();
    if (STAGE_Q.matches){
      measure();
      shown = target = window.scrollY;
      apply(shown);
    } else {
      ["--t", "--g", "--go", "--w"].forEach(v => root.setProperty(v, "0"));
      portrait.classList.remove("is-gone");
      if (skills) skills.classList.remove("is-gone", "is-live");
    }
  }

  window.addEventListener("scroll", follow, { passive: true });
  window.addEventListener("resize", debounce(() => { measure(); follow(); }, 120));
  if (STAGE_Q.addEventListener) STAGE_Q.addEventListener("change", mode);
  mode();
}

/* ============================================================
   3. REVEALS — each part of a section arrives in turn,
   AND the items of a list follow one after another
   ============================================================ */
function initReveals(){
  const items = document.querySelectorAll(".reveal, .skills");
  if (!items.length) return;

  /* every part gets its place in the queue */
  document.querySelectorAll(".reveal").forEach(sec => {
    [...sec.children].forEach((child, i) => {
      const d = Math.min(i * 90, 450);
      child.style.setProperty("--delay", d + "ms");
      if (child.classList.contains("stagger")){
        [...child.children].forEach((li, j) => li.style.setProperty("--delay", (d + 140 + Math.min(j, 10) * 55) + "ms"));
      }
    });
  });

  const show = el => {
    el.classList.add("is-in");
    if (el.classList.contains("skills") && !STAGE_Q.matches) drawSkills(el);
  };

  if (!("IntersectionObserver" in window)){
    items.forEach(show);                           // ELSE show it all
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting){
        show(e.target);
        io.unobserve(e.target);                    // reveal once, no flicker
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  items.forEach(el => io.observe(el));
}

/* ============================================================
   3b. POINTER — ONLY for a mouse OR a trackpad
     - a soft light follows the pointer over cards (.spot)
     - buttons lean a little toward the pointer, THEN ease back
   ============================================================ */
function initPointer(){
  if (!FINE || REDUCED) return;

  document.addEventListener("pointermove", e => {
    const el = e.target.closest && e.target.closest(".spot");
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", (e.clientX - r.left).toFixed(0) + "px");
    el.style.setProperty("--my", (e.clientY - r.top).toFixed(0) + "px");
  }, { passive: true });

  const MAG = ".btn, .foot__top";
  const pulls = new Map();                         // element -> { x, y, tx, ty }
  let running = false;

  function step(){
    pulls.forEach((m, el) => {
      m.x += (m.tx - m.x) * 0.1;
      m.y += (m.ty - m.y) * 0.1;
      if (Math.abs(m.tx - m.x) + Math.abs(m.ty - m.y) < 0.05){
        m.x = m.tx; m.y = m.ty;
        if (!m.tx && !m.ty){ el.style.translate = ""; pulls.delete(el); return; }
      }
      el.style.translate = m.x.toFixed(2) + "px " + m.y.toFixed(2) + "px";
    });
    if (!pulls.size){ running = false; offFrame(step); }
  }
  const kick = () => { if (!running){ running = true; onFrame(step); } };

  document.addEventListener("pointermove", e => {
    const el = e.target.closest && e.target.closest(MAG);
    if (!el) return;
    const r = el.getBoundingClientRect();
    const m = pulls.get(el) || { x: 0, y: 0, tx: 0, ty: 0 };
    m.tx = ((e.clientX - r.left) / r.width  - 0.5) * 6;    // up to 3px each way
    m.ty = ((e.clientY - r.top)  / r.height - 0.5) * 4;
    pulls.set(el, m);
    kick();
  }, { passive: true });

  /* pointerleave does not bubble, SO it is caught on the way down */
  document.addEventListener("pointerleave", e => {
    const el = e.target;
    if (el.matches && el.matches(MAG) && pulls.has(el)){
      const m = pulls.get(el); m.tx = 0; m.ty = 0; kick();
    }
  }, true);
}

/* ============================================================
   3c. SKILL GRAPH — point at a skill, tap it, OR tab to it:
   it lights up AND a bubble shows its score
   ============================================================ */
function initSkillGraph(){
  const panel = document.querySelector(".skills");
  if (!panel) return;
  const svg  = panel.querySelector(".radar");
  const card = panel.querySelector(".skills__card");
  const tip  = panel.querySelector(".radar__tip");
  if (!svg || !tip || !svg._radar) return;
  const data = svg._radar;
  let active = -1;

  function set(i){
    if (i === active) return;
    const was = active;
    active = i;
    svg.classList.toggle("has-active", i >= 0);
    svg.querySelectorAll(".is-active").forEach(n => n.classList.remove("is-active"));
    if (i < 0){ tip.classList.remove("is-on"); return; }

    svg.querySelectorAll('[data-i="' + i + '"]').forEach(n => n.classList.add("is-active"));
    const dot = svg.querySelector('.radar__dot[data-i="' + i + '"]');
    if (!dot) return;
    const cr = card.getBoundingClientRect(), dr = dot.getBoundingClientRect();
    tip.classList.toggle("no-move", was < 0);             // appear in place, THEN glide between skills
    tip.style.setProperty("--x", (dr.left + dr.width / 2 - cr.left).toFixed(1) + "px");
    tip.style.setProperty("--y", (dr.top - cr.top).toFixed(1) + "px");
    tip.innerHTML = esc(data.labels[i]) + "<b>" + data.values[i].join(" · ") + "</b>";
    tip.classList.add("is-on");
  }

  const pick = e => {
    const n = e.target.closest && e.target.closest(".radar__hit, .radar__label");
    return n ? Number(n.getAttribute("data-i")) : -1;
  };

  svg.addEventListener("pointerover", e => { const i = pick(e); if (i >= 0) set(i); });
  svg.addEventListener("pointerleave", e => { if (e.pointerType !== "touch") set(-1); });
  /* a tap somewhere else lets it go */
  document.addEventListener("pointerdown", e => { if (active >= 0 && !svg.contains(e.target)) set(-1); }, { passive: true });
  svg.addEventListener("focusin", e => { const i = pick(e); if (i >= 0) set(i); });
  svg.addEventListener("focusout", () => set(-1));
  window.addEventListener("scroll", () => { if (active >= 0 && STAGE_Q.matches) set(-1); }, { passive: true });
}

/* ============================================================
   4. PANEL CORE — lock the page, keep focus inside, restore focus
   ============================================================ */
let lastFocused = null;

function lockPage(modal){
  lastFocused = document.activeElement;
  document.body.classList.add("is-locked");
  if (LENIS) LENIS.stop();
  SKY.pause();
  /* the page behind can NOT be clicked OR tabbed into */
  [...document.body.children].forEach(el => {
    if (el !== modal && !el.matches("script, template, .toast, .modal--doc")) el.inert = true;
  });
}

function unlockPage(focusEl){
  document.body.classList.remove("is-locked");
  if (LENIS) LENIS.start();
  SKY.resume();
  [...document.body.children].forEach(el => { el.inert = false; });
  const f = focusEl || lastFocused;
  if (f && f.focus) f.focus({ preventScroll: true });
}

/* Tab AND Shift+Tab go round inside the panel, never out of it */
function trapFocus(modal){
  modal.addEventListener("keydown", e => {
    if (e.key !== "Tab") return;
    const f = [...modal.querySelectorAll('a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])')]
      .filter(n => n.getClientRects().length && getComputedStyle(n).visibility !== "hidden");
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
  });
}

function openModal(modal){
  modal.hidden = false;
  lockPage(modal);
  requestAnimationFrame(() => modal.classList.add("is-open"));
  const first = modal.querySelector(".modal__close");
  if (first) first.focus({ preventScroll: true });
}

function closeModal(modal){
  modal.classList.remove("is-open");
  const done = () => { if (!modal.classList.contains("is-open")) modal.hidden = true; };
  REDUCED ? done() : setTimeout(done, 420);
  unlockPage();
}

function wireModal(modal, onClose){
  const close = onClose || (() => closeModal(modal));
  modal.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]") || e.target.matches(".modal__scrim")) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) close(e);
  });
  trapFocus(modal);
}

/* ============================================================
   5. CASE STUDIES — IF a card is clicked THEN it grows into its case.
   Inside: contents that follow the reading, a progress line,
   next AND previous (also the arrow keys), a link per case
   (#case-2) that Back closes, AND copy buttons on code.
   On a phone the case is a sheet: drag the bar down to close it.
   ============================================================ */
function initCaseModal(){
  const modal = document.getElementById("case-modal");
  const cards = [...document.querySelectorAll(".case-card")];
  if (!modal || !cards.length) return;

  const items  = CONTENT.cases.items;
  const panel  = modal.querySelector(".modal__panel");
  const slot   = modal.querySelector(".modal__content");
  const bar    = modal.querySelector(".reader__bar");
  const title  = modal.querySelector(".reader__title");
  const reader = modal.querySelector(".reader");
  const tocBtn = modal.querySelector(".reader__toc-btn");
  const toc    = modal.querySelector(".reader__toc-list");
  const pager  = modal.querySelector(".reader__pager");
  const closeB = modal.querySelector(".modal__close");

  if (tocBtn) tocBtn.innerHTML = "<span>" + esc(CASE_LABELS.contents) + "</span>" + UI.chevron;
  if (closeB) closeB.setAttribute("aria-label", CASE_LABELS.close);

  let current = -1, pushed = false, busy = false, closing = false;
  let marks = [], lit = null, titleY = 0;
  let docOpen = false;                             // the documentation window sits on top of the case
  let closeDoc = () => {};                         // filled in below, IF the page has the document window

  /* --- fill the panel with case i --- */
  function fill(i){
    current = i;
    const tpl = document.getElementById("case-" + (i + 1));
    slot.replaceChildren(tpl.content.cloneNode(true));
    title.textContent = items[i].title;
    modal.setAttribute("aria-label", items[i].title);
    buildToc();
    buildPager();
    closeToc();
    panel.scrollTop = 0;
    bar.classList.remove("is-titled");
    bar.style.setProperty("--p", "0");
    lit = null;
    requestAnimationFrame(() => { measure(); onScroll(); });
  }

  const offsetOf = el => el.getBoundingClientRect().top - panel.getBoundingClientRect().top + panel.scrollTop;

  function buildToc(){
    if (!toc) return;
    toc.replaceChildren();
    slot.querySelectorAll(".case-full > h3[id], .doc h4[id]").forEach(h => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.className = "toc__link" + (h.tagName === "H4" ? " toc__link--sub" : "");
      a.href = "#" + h.id;
      a.dataset.target = h.id;
      a.textContent = h.textContent;
      li.appendChild(a);
      toc.appendChild(li);
    });
    if (tocBtn) tocBtn.hidden = !toc.children.length;
  }

  function buildPager(){
    if (!pager) return;
    pager.replaceChildren();
    const n = items.length;
    if (n < 2){ pager.hidden = true; return; }
    const one = (dir, label) => {
      const i = (current + dir + n) % n;
      const b = make("button", "pager__btn spot pager__btn--" + (dir < 0 ? "prev" : "next"));
      b.type = "button";
      b.dataset.go = dir;
      b.appendChild(make("span", "pager__dir", dir < 0 ? "← " + label : label + " →"));
      b.appendChild(make("span", "pager__title", items[i].title));
      return b;
    };
    pager.appendChild(one(-1, CASE_LABELS.previous));
    pager.appendChild(one(1, CASE_LABELS.next));
  }

  /* where each heading sits, measured once per case AND on resize */
  function measure(){
    if (!toc) return;
    marks = [...toc.querySelectorAll("a[data-target]")].map(a => {
      const h = document.getElementById(a.dataset.target);
      return h ? { a, y: offsetOf(h) } : null;
    }).filter(Boolean);
    const h2 = slot.querySelector(".case-full > h2");
    titleY = h2 ? offsetOf(h2) + h2.offsetHeight : 60;
  }

  function onScroll(){
    const top = panel.scrollTop, max = panel.scrollHeight - panel.clientHeight;
    bar.style.setProperty("--p", max > 0 ? Math.min(top / max, 1).toFixed(4) : "0");
    bar.classList.toggle("is-titled", top + bar.offsetHeight > titleY);

    /* the contents light the part being read */
    const line = top + bar.offsetHeight + Math.min(140, panel.clientHeight * 0.22);   // a part counts as "being read" a little below the bar
    let on = null;
    for (const m of marks){ if (m.y <= line) on = m; else break; }
    /* at the very end the last part lights up, EVEN IF it is too short for its heading to reach the line */
    if (marks.length && top + panel.clientHeight >= panel.scrollHeight - 4) on = marks[marks.length - 1];
    if (on !== lit){
      if (lit) lit.a.classList.remove("is-active");
      if (on){
        on.a.classList.add("is-active");
        /* keep the lit line in view inside a long rail */
        const lt = on.a.offsetTop, lb = lt + on.a.offsetHeight;
        if (lt < toc.scrollTop) toc.scrollTop = lt - 8;
        else if (lb > toc.scrollTop + toc.clientHeight) toc.scrollTop = lb - toc.clientHeight + 8;
      }
      lit = on;
    }
  }

  let ticking = false;
  panel.addEventListener("scroll", () => {
    if (!ticking){ ticking = true; requestAnimationFrame(() => { ticking = false; onScroll(); }); }
  }, { passive: true });
  if ("ResizeObserver" in window){
    new ResizeObserver(() => { if (current >= 0){ measure(); onScroll(); } }).observe(slot);
  }

  /* --- contents: open, close, jump --- */
  function closeToc(){
    if (!reader) return;
    reader.classList.remove("toc-open");
    if (tocBtn) tocBtn.setAttribute("aria-expanded", "false");
  }
  if (tocBtn) tocBtn.addEventListener("click", () => {
    const open = !reader.classList.contains("toc-open");
    reader.classList.toggle("toc-open", open);
    tocBtn.setAttribute("aria-expanded", String(open));
  });
  panel.addEventListener("click", e => {
    if (reader.classList.contains("toc-open") && !e.target.closest(".reader__toc, .reader__toc-btn")) closeToc();
  });
  if (toc) toc.addEventListener("click", e => {
    const a = e.target.closest("a[data-target]");
    if (!a) return;
    e.preventDefault();                            // the address stays #case-N
    const h = document.getElementById(a.dataset.target);
    if (h) panel.scrollTo({ top: offsetOf(h) - bar.offsetHeight - 16, behavior: REDUCED ? "auto" : "smooth" });
    closeToc();
  });

  /* --- next AND previous --- */
  if (pager) pager.addEventListener("click", e => {
    const b = e.target.closest("[data-go]");
    if (b) go(Number(b.dataset.go), true);
  });

  function go(dir, focusTitle){
    if (busy || current < 0 || items.length < 2) return;
    busy = true;
    const n = items.length, i = (current + dir + n) % n;
    const swap = () => {
      fill(i);
      history.replaceState({ case: i }, "", "#case-" + (i + 1));
      if (!REDUCED) slot.animate(
        [{ opacity: 0, transform: `translate3d(${dir * 28}px,0,0)` }, { opacity: 1, transform: "none" }],
        { duration: 460, easing: EASE });
      if (focusTitle){ const h2 = slot.querySelector("h2"); if (h2) h2.focus({ preventScroll: true }); }
      busy = false;
    };
    if (REDUCED){ swap(); return; }
    const out = slot.animate(
      [{ opacity: 1, transform: "none" }, { opacity: 0, transform: `translate3d(${-dir * 28}px,0,0)` }],
      { duration: 170, easing: "ease-in", fill: "forwards" });
    const next = () => { out.cancel(); swap(); };  // drop the fade-out, THEN bring the new case in
    out.finished.then(next, next);
  }

  document.addEventListener("keydown", e => {
    if (modal.hidden || closing || docOpen || e.altKey || e.ctrlKey || e.metaKey) return;
    if (e.target.closest && e.target.closest("input, textarea, select")) return;
    if (e.key === "ArrowRight"){ e.preventDefault(); go(1); }
    else if (e.key === "ArrowLeft"){ e.preventDefault(); go(-1); }
  });

  /* --- open: the card grows into the panel --- */
  const insetFrom = (cr, pr, r) =>
    `inset(${(cr.top - pr.top).toFixed(1)}px ${(pr.right - cr.right).toFixed(1)}px ${(pr.bottom - cr.bottom).toFixed(1)}px ${(cr.left - pr.left).toFixed(1)}px round ${r}px)`;
  const inView = el => { const r = el.getBoundingClientRect(); return r.bottom > 0 && r.top < window.innerHeight; };

  function openCase(i, card, push){
    if (i < 0 || i >= items.length) return;
    const wasOpen = !modal.hidden;
    fill(i);
    if (push){ history.pushState({ case: i }, "", "#case-" + (i + 1)); pushed = true; }
    if (wasOpen) return;

    modal.hidden = false;
    lockPage(modal);
    modal.classList.add("is-open");                // the scrim fades in (CSS)
    if (closeB) closeB.focus({ preventScroll: true });

    if (REDUCED){ panel.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 180 }); return; }
    if (SHEET_Q.matches){
      panel.animate([{ transform: "translate3d(0,100%,0)" }, { transform: "none" }], { duration: 560, easing: EASE });
      return;
    }
    if (card && inView(card)){
      const pr = panel.getBoundingClientRect(), cr = card.getBoundingClientRect();
      panel.animate(
        [{ clipPath: insetFrom(cr, pr, 4) }, { clipPath: "inset(0px 0px 0px 0px round 0px)" }],
        { duration: 720, easing: EASE });
      slot.animate(
        [{ opacity: 0, transform: "translate3d(0,18px,0)" }, { opacity: 1, transform: "none" }],
        { duration: 560, delay: 180, easing: EASE, fill: "backwards" });
    } else {
      panel.animate(
        [{ opacity: 0, transform: "translate3d(0,24px,0) scale(.98)" }, { opacity: 1, transform: "none" }],
        { duration: 560, easing: EASE });
    }
  }

  /* --- close: the panel shrinks back into the card it came from --- */
  function closeCase(){
    if (modal.hidden || closing) return;
    closing = true;
    if (docOpen) closeDoc(true);                   // Back, OR a link away, takes the document with it
    closeToc();
    const card = cards[current];
    const from = panel.style.transform || "none";  // IF it was being dragged, start from there
    let anim;
    if (REDUCED){
      anim = panel.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 140, fill: "forwards" });
    } else if (SHEET_Q.matches){
      anim = panel.animate([{ transform: from }, { transform: "translate3d(0,100%,0)" }],
        { duration: 380, easing: "cubic-bezier(.5,0,.75,0)", fill: "forwards" });
    } else if (card && inView(card)){
      const pr = panel.getBoundingClientRect(), cr = card.getBoundingClientRect();
      anim = panel.animate(
        [{ clipPath: "inset(0px 0px 0px 0px round 0px)", opacity: 1 }, { clipPath: insetFrom(cr, pr, 4), opacity: 0 }],
        { duration: 520, easing: "cubic-bezier(.65,0,.35,1)", fill: "forwards" });
    } else {
      anim = panel.animate(
        [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "translate3d(0,16px,0) scale(.98)" }],
        { duration: 260, easing: "ease-in", fill: "forwards" });
    }
    modal.classList.remove("is-open");
    const done = () => {
      modal.hidden = true;
      anim.cancel();
      panel.style.transform = "";
      closing = false;
      current = -1;
      unlockPage(card);
    };
    anim.finished.then(done).catch(done);
  }

  /* Back closes the case. The X, Escape AND the scrim step Back too,
     SO the address always matches what is on screen. */
  function requestClose(e){
    if (docOpen && e && e.key) return;             // Escape belongs to the document window while it is open
    if (e && e.key === "Escape" && reader.classList.contains("toc-open")){ closeToc(); tocBtn && tocBtn.focus(); return; }
    if (pushed){ pushed = false; history.back(); }
    else {
      if (location.hash) history.replaceState(null, "", location.pathname + location.search);
      closeCase();
    }
  }
  wireModal(modal, requestClose);

  const hashIndex = () => {
    const m = location.hash.match(/^#case-(\d+)$/);
    const i = m ? Number(m[1]) - 1 : -1;
    return i >= 0 && i < items.length ? i : -1;
  };

  window.addEventListener("popstate", () => {
    pushed = false;
    const i = hashIndex();
    if (i >= 0){ if (modal.hidden) openCase(i, cards[i], false); else if (i !== current) fill(i); }
    else closeCase();
  });

  cards.forEach(card => {
    card.addEventListener("click", () => openCase(Number(card.dataset.index), card, true));
  });

  /* --- a phone: drag the bar down to close the sheet --- */
  enableSheetDrag(bar, panel, requestClose);

  /* ----------------------------------------------------------
     THE DOCUMENTATION WINDOW
     A case holds its write-up as a FILE in a folder. Clicking the
     file opens this window on top of the case: its own bar, its own
     contents, its own progress line. Escape or the X closes ONLY it.
     ---------------------------------------------------------- */
  const dmodal = document.getElementById("doc-modal");
  if (dmodal){
    const dpanel  = dmodal.querySelector(".modal__panel");
    const dslot   = dmodal.querySelector(".modal__content");
    const dbar    = dmodal.querySelector(".reader__bar");
    const dtitle  = dmodal.querySelector(".reader__title");
    const dicon   = dmodal.querySelector(".reader__file");
    const dreader = dmodal.querySelector(".reader");
    const dtocBtn = dmodal.querySelector(".reader__toc-btn");
    const dtoc    = dmodal.querySelector(".reader__toc-list");
    const dclose  = dmodal.querySelector(".modal__close");

    if (dicon) dicon.innerHTML = UI.file;
    if (dtocBtn) dtocBtn.innerHTML = "<span>" + esc(CASE_LABELS.contents) + "</span>" + UI.chevron;
    if (dclose) dclose.setAttribute("aria-label", CASE_LABELS.close);

    let dMarks = [], dLit = null, dFrom = null, dClosing = false, dTicking = false;

    const dOff = el => el.getBoundingClientRect().top - dpanel.getBoundingClientRect().top + dpanel.scrollTop;

    function dCloseToc(){
      dreader.classList.remove("toc-open");
      if (dtocBtn) dtocBtn.setAttribute("aria-expanded", "false");
    }

    function dMeasure(){
      dMarks = [...dtoc.querySelectorAll("a[data-target]")].map(a => {
        const h = document.getElementById(a.dataset.target);
        return h ? { a, y: dOff(h) } : null;
      }).filter(Boolean);
    }

    function dScroll(){
      const top = dpanel.scrollTop, max = dpanel.scrollHeight - dpanel.clientHeight;
      dbar.style.setProperty("--p", max > 0 ? Math.min(top / max, 1).toFixed(4) : "0");
      const line = top + dbar.offsetHeight + Math.min(140, dpanel.clientHeight * 0.22);
      let on = null;
      for (const m of dMarks){ if (m.y <= line) on = m; else break; }
      if (dMarks.length && top + dpanel.clientHeight >= dpanel.scrollHeight - 4) on = dMarks[dMarks.length - 1];
      if (on !== dLit){
        if (dLit) dLit.a.classList.remove("is-active");
        if (on){
          on.a.classList.add("is-active");
          const lt = on.a.offsetTop, lb = lt + on.a.offsetHeight;
          if (lt < dtoc.scrollTop) dtoc.scrollTop = lt - 8;
          else if (lb > dtoc.scrollTop + dtoc.clientHeight) dtoc.scrollTop = lb - dtoc.clientHeight + 8;
        }
        dLit = on;
      }
    }

    dpanel.addEventListener("scroll", () => {
      if (!dTicking){ dTicking = true; requestAnimationFrame(() => { dTicking = false; dScroll(); }); }
    }, { passive: true });
    if ("ResizeObserver" in window) new ResizeObserver(() => { if (docOpen){ dMeasure(); dScroll(); } }).observe(dslot);

    if (dtocBtn) dtocBtn.addEventListener("click", () => {
      const open = !dreader.classList.contains("toc-open");
      dreader.classList.toggle("toc-open", open);
      dtocBtn.setAttribute("aria-expanded", String(open));
    });
    dpanel.addEventListener("click", e => {
      if (dreader.classList.contains("toc-open") && !e.target.closest(".reader__toc, .reader__toc-btn")) dCloseToc();
    });
    dtoc.addEventListener("click", e => {
      const a = e.target.closest("a[data-target]");
      if (!a) return;
      e.preventDefault();
      const h = document.getElementById(a.dataset.target);
      if (h) dpanel.scrollTo({ top: dOff(h) - dbar.offsetHeight - 16, behavior: REDUCED ? "auto" : "smooth" });
      dCloseToc();
    });

    /* --- open: the window grows out of the file --- */
    function openDoc(file){
      if (docOpen) return;
      const [ci, pi] = String(file.dataset.doc).split(":").map(Number);
      const part = items[ci] && items[ci].story && items[ci].story[pi];
      if (!part || !part.text) return;

      const doc = richText(part.text);
      const used = new Set();
      doc.querySelectorAll("h4").forEach(h => {
        let id = "d" + (ci + 1) + "-" + slug(h.textContent), k = 2;
        while (used.has(id) || document.getElementById(id)) id = "d" + (ci + 1) + "-" + slug(h.textContent) + "-" + k++;
        used.add(id);
        h.id = id;
      });
      dslot.replaceChildren(doc);

      const info = docInfo(part.text);
      dtitle.textContent = info.title;
      dmodal.setAttribute("aria-label", info.title);

      dtoc.replaceChildren();
      doc.querySelectorAll("h4[id]").forEach(h => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.className = "toc__link";
        a.href = "#" + h.id;
        a.dataset.target = h.id;
        a.textContent = h.textContent;
        li.appendChild(a);
        dtoc.appendChild(li);
      });
      if (dtocBtn) dtocBtn.hidden = !dtoc.children.length;
      dCloseToc();

      docOpen = true;
      dFrom = file;
      dLit = null;
      dpanel.scrollTop = 0;
      dbar.style.setProperty("--p", "0");
      dmodal.hidden = false;
      modal.inert = true;                          // the case behind rests, it can NOT be clicked OR tabbed into
      dmodal.classList.add("is-open");
      if (dclose) dclose.focus({ preventScroll: true });
      requestAnimationFrame(() => { dMeasure(); dScroll(); });

      if (REDUCED){ dpanel.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 180 }); return; }
      if (SHEET_Q.matches){
        dpanel.animate([{ transform: "translate3d(0,100%,0)" }, { transform: "none" }], { duration: 560, easing: EASE });
        return;
      }
      if (inView(file)){
        const pr = dpanel.getBoundingClientRect(), fr = file.getBoundingClientRect();
        dpanel.animate(
          [{ clipPath: insetFrom(fr, pr, 0) }, { clipPath: "inset(0px 0px 0px 0px round 0px)" }],
          { duration: 760, easing: EASE });
        dslot.animate(
          [{ opacity: 0, transform: "translate3d(0,16px,0)" }, { opacity: 1, transform: "none" }],
          { duration: 620, delay: 200, easing: EASE, fill: "backwards" });
      } else {
        dpanel.animate(
          [{ opacity: 0, transform: "translate3d(0,24px,0)" }, { opacity: 1, transform: "none" }],
          { duration: 560, easing: EASE });
      }
    }

    /* --- close: it shrinks back into the file --- */
    closeDoc = function(instant){
      if (!docOpen || dClosing) return;
      dClosing = true;
      dCloseToc();
      const from = dpanel.style.transform || "none";
      let anim;
      if (instant || REDUCED){
        anim = dpanel.animate([{ opacity: 1 }, { opacity: 0 }], { duration: instant ? 1 : 140, fill: "forwards" });
      } else if (SHEET_Q.matches){
        anim = dpanel.animate([{ transform: from }, { transform: "translate3d(0,100%,0)" }],
          { duration: 380, easing: "cubic-bezier(.5,0,.75,0)", fill: "forwards" });
      } else if (dFrom && dFrom.isConnected && inView(dFrom)){
        const pr = dpanel.getBoundingClientRect(), fr = dFrom.getBoundingClientRect();
        anim = dpanel.animate(
          [{ clipPath: "inset(0px 0px 0px 0px round 0px)", opacity: 1 }, { clipPath: insetFrom(fr, pr, 0), opacity: 0 }],
          { duration: 560, easing: "cubic-bezier(.65,0,.35,1)", fill: "forwards" });
      } else {
        anim = dpanel.animate(
          [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "translate3d(0,16px,0) scale(.985)" }],
          { duration: 300, easing: "ease-in", fill: "forwards" });
      }
      dmodal.classList.remove("is-open");
      const done = () => {
        dmodal.hidden = true;
        anim.cancel();
        dpanel.style.transform = "";
        dslot.replaceChildren();
        docOpen = false;
        dClosing = false;
        modal.inert = false;
        const back = dFrom && dFrom.isConnected ? dFrom : null;
        if (!instant && back) back.focus({ preventScroll: true });
        dFrom = null;
      };
      anim.finished.then(done).catch(done);
    };

    slot.addEventListener("click", e => {
      const file = e.target.closest("[data-doc]");
      if (file) openDoc(file);
    });

    enableSheetDrag(dbar, dpanel, () => closeDoc());
    wireModal(dmodal, e => {
      if (e && e.key === "Escape" && dreader.classList.contains("toc-open")){ dCloseToc(); dtocBtn && dtocBtn.focus(); return; }
      closeDoc();
    });
  }

  /* a link straight to a case, e.g. case-studies.html#case-2 */
  const start = hashIndex();
  if (start >= 0) openCase(start, null, false);
}

/* a phone: drag a panel's top bar down AND the sheet closes.
   It follows the finger, THEN either leaves OR springs back. */
function enableSheetDrag(bar, panel, close){
  bar.addEventListener("pointerdown", e => {
    if (!SHEET_Q.matches || e.button !== 0 || e.target.closest("button")) return;
    const y0 = e.clientY, t0 = performance.now();
    let dy = 0;
    bar.setPointerCapture(e.pointerId);
    const move = ev => {
      dy = Math.max(0, ev.clientY - y0);
      panel.style.transform = `translate3d(0,${dy.toFixed(1)}px,0)`;
    };
    const up = () => {
      bar.removeEventListener("pointermove", move);
      bar.removeEventListener("pointerup", up);
      bar.removeEventListener("pointercancel", up);
      const speed = dy / Math.max(1, performance.now() - t0);
      if (dy > 110 || (dy > 24 && speed > 0.6)) close();
      else {
        const back = panel.style.transform;
        panel.style.transform = "";
        if (back) panel.animate([{ transform: back }, { transform: "none" }], { duration: 320, easing: EASE });
      }
    };
    bar.addEventListener("pointermove", move);
    bar.addEventListener("pointerup", up);
    bar.addEventListener("pointercancel", up);
  });
}

/* ============================================================
   6. CONTACT — the ONLY thing a visitor may edit is the email
      they are about to send. Nothing on the page itself.
   ============================================================ */
function initCompose(){
  const buttons = document.querySelectorAll("[data-compose]");
  if (!buttons.length) return;

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.id = "compose-modal";
  modal.hidden = true;
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  const t = CONTENT.contactBox;
  modal.setAttribute("aria-label", t.heading);
  modal.innerHTML = `
    <div class="modal__scrim"></div>
    <div class="modal__panel modal__panel--compose" data-lenis-prevent>
      <button class="modal__close" data-close aria-label="Close">&#10005;</button>
      <h2>${esc(t.heading)}</h2>
      <p class="muted" style="font-size:14px">${esc(t.note)}</p>
      <div class="compose">
        <div>
          <label>${esc(t.toLabel)}</label>
          <div class="to" data-site="email"></div>
        </div>
        <div>
          <label for="cs">${esc(t.subjectLabel)}</label>
          <input id="cs" type="text" value="${esc(t.subject)}" autocomplete="off">
        </div>
        <div>
          <label for="cm">${esc(t.messageLabel)}</label>
          <textarea id="cm" placeholder="${esc(t.placeholder)}"></textarea>
        </div>
        <div class="compose__actions">
          <button class="btn" id="cSend" type="button">${esc(t.send)}</button>
          <button class="btn btn--ghost" data-close type="button">${esc(t.cancel)}</button>
        </div>
      </div>
    </div>`;
  document.body.appendChild(modal);
  modal.querySelector('[data-site="email"]').textContent = SITE.email;
  wireModal(modal);

  buttons.forEach(b => b.addEventListener("click", () => openModal(modal)));

  modal.querySelector("#cSend").addEventListener("click", () => {
    mailTo(modal.querySelector("#cs").value, modal.querySelector("#cm").value);
  });
}

/* ============================================================
   7. FOOTER, COPY BUTTONS AND THE LITTLE NOTE
   ============================================================ */
function initFooter(){
  document.querySelectorAll("[data-top]").forEach(b => {
    b.insertAdjacentHTML("beforeend", UI.up);
    b.addEventListener("click", () => scrollToY(0));
  });
}

let toastEl = null, toastTimer = 0;
function toast(msg){
  if (!toastEl){
    toastEl = make("div", "toast");
    toastEl.setAttribute("role", "status");
    toastEl.setAttribute("aria-live", "polite");
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = msg;
  requestAnimationFrame(() => toastEl.classList.add("is-on"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("is-on"), 2200);
}

function initCopy(){
  document.addEventListener("click", e => {
    const chip = e.target.closest && e.target.closest("[data-copy-email]");
    if (chip){
      copyText(SITE.email).then(() => toast(LABELS.emailCopied), () => {});
      return;
    }
    const idChip = e.target.closest && e.target.closest("[data-copy-text]");
    if (idChip){
      const said = (CONTENT.certs && CONTENT.certs.labels && CONTENT.certs.labels.copied) || "ID copied";
      copyText(idChip.getAttribute("data-copy-text")).then(() => toast(said), () => {});
      return;
    }
    const b = e.target.closest && e.target.closest("[data-copy]");
    if (!b) return;
    const pre = b.parentNode.querySelector("pre");
    if (!pre) return;
    copyText(pre.textContent).then(() => {
      b.textContent = CASE_LABELS.copied;
      b.classList.add("is-done");
      setTimeout(() => { b.textContent = CASE_LABELS.copy; b.classList.remove("is-done"); }, 1600);
    }, () => {});
  });
}

/* ============================================================
   8. SMALL HELPER
   ============================================================ */
function debounce(fn, ms){
  let id;
  return (...args) => { clearTimeout(id); id = setTimeout(() => fn(...args), ms); };
}
