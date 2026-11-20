/*THIS WILL BE THE CASE STUDIES FILES*/ 







/* ================================================================
   CONTENT — the only file you edit.

   Every word, photo and video on both pages lives here.
   Save, reload the page, done.

   ----------------------------------------------------------------
   THE FOUR RULES
     1. Text goes inside "quotes".
     2. Every line inside { } or [ ] ends with a comma.
     3. A quote mark inside text is written \"like this\".
     4. Leave a value as ""  ->  that piece is simply not shown.

   INSIDE ANY TEXT YOU MAY WRITE
     **bold words**            ->  comes out bold
     [click here](https://…)   ->  comes out as a link

   A LONG WRITE-UP
     Any "text" may run for pages. Use backticks `like this`
     instead of quotes, THEN type it out plainly:
       the first line        ->  the title
       a blank line          ->  starts a new paragraph
       A SHORT CAPS LINE     ->  a sub-heading
       - or • at the start   ->  a bullet
       one line, THEN        ->  that line leads the list
         bullets under it

     Markdown works too:
       # Heading             ->  the title
       ## Heading            ->  a sub-heading
       ### Heading           ->  a smaller sub-heading
       **bold**              ->  comes out bold
       ---                   ->  a dividing line
       | a | b |             ->  a table, IF the row
       |---|---|                 under it is dashes
       #### Heading          ->  a small teal heading
       *words*               ->  italic
       1. step               ->  a numbered step
         - item              ->  indent a bullet to nest it
       - [ ] item            ->  a checkbox
       \`code\`                ->  fixed-width text
       \`\`\` ... \`\`\`         ->  a block, spacing kept exactly

     Inside backticks, write a backtick as \` AND a
     backslash as \\
     Nothing else to learn. Paste a document in AND it lays
     itself out.

   THE SKILL GRAPH
     home.skills below the photo. Add a line to "axes" to add a
     skill. The numbers are measured from the middle outwards.

   PHOTOS AND VIDEOS
     Make a folder called "assets" next to this file.
     Drop your files in, THEN point at them:
       photo: "assets/me.jpg"
       video: "assets/case-1.mp4"
     A video may also be a link:
       video: "https://www.youtube.com/embed/XXXXXXXXXXX"
     Use the /embed/ link, NOT the /watch?v= one.
     Leave photo or video as "" AND a placeholder stands in:
     a small drawn flow on a card, a labelled tile inside a case.
   ================================================================ */


const CONTENT = {


/* ================================================================
   1. YOU — the header and the footer of both pages
   ================================================================ */

site: {
  name: "Leien Anthony R.",
  email: "lai.emailautomations.services",

  /* your profiles. Paste the whole address, e.g. "https://www.linkedin.com/in/your-name".
     They show as a line on the home page AND the contact page.
     Leave "" AND that line is simply not shown (rule 4). */
  linkedin: "www.linkedin.com/in/leien-anthony-gatapia-reyes-073a05383",
  upwork: "https://www.upwork.com/freelancers/~0184d8b7d5d11d0642?mp_source=share",

  /* the small words the site says on its own */
  labels: {
    backToTop: "Back to top",          // the button in the footer
    copyEmail: "Copy",                 // the button next to your email
    emailCopied: "Email copied"        // the note that pops up after it
  }
},

nav: {
  home: "Home",
  cases: "Case studies",
  certs: "Certifications",
  contact: "Contact me"
},


/* ================================================================
   2. HOME PAGE
   ================================================================ */

home: {

  tabTitle: "Leien · Email marketing automation for ecommerce brands",
  tabNote: "Email marketing automations that increases sales & optimizes margin for e commerce brands",

  photo: "assets/profile.jpg",
  photoAlt: "Leien Anthony R.",

  /* the small hint under the first screen, on a wide screen. "" hides it. */
  scrollHint: "Scroll",

  /* ---------------------------------------------------------------
     THE SKILL GRAPH — lower right on a wide screen, a card under the
     first section on a phone.

     Type numbers. Nothing else.
       max      the top of the scale. 100 means the numbers ARE percentages.
       rings    how many rings are drawn. 5 rings = 20, 40, 60, 80, 100.
       series   one entry per shape. Colour: teal, violet, rose, OR any
                CSS colour you like.
       axes     one line per skill. "values" holds one number per series,
                in the same order as "series" above.
       showValues  false hides the numbers beside each point. true shows them.

     Add a line to "axes" AND the graph grows a new corner. Three lines
     is the smallest that still draws.
     Delete the whole "skills" block AND no graph appears at all.
     --------------------------------------------------------------- */
  skills: {
    title: "",
    note: "",
    max: 100,
    rings: 5,
    showValues: false,
    series: [
  
    ],
    axes: [
      { label: "Email marketing",  values: [95] },
      { label: "Klaviyo",              values: [95] },
      { label: "n8n",          values: [88] },
      { label: "HTML and CSS",           values: [93] },
      { label: "Data flow & APIs",      values: [88] },
      { label: "Logical thinking", values: [95] },
      { label: "Marketing strategy",          values: [91] },
      { label: "Figma design",          values: [95] }
    ]
  },

  /* Sections, top to bottom. Reorder them, delete one,
     OR copy one to add another.

     "type" picks the shape:
       "text"      eyebrow, heading, lede, bullets
       "builds"    eyebrow, heading, a few case study cards
       "tools"     eyebrow, heading, a grid of tools
       "contacts"  eyebrow, heading, a list of label + value
       "cta"       a boxed heading, text and button. Its button opens the contact box.

     The FIRST section's heading IS the page's main title.

     ANY section may also carry:  photo, photoAlt, video, poster

     A "text" section may also carry:
       buttons   links drawn as buttons under the lede. primary: true IS the filled one.
       proof     one small line under the buttons. A part with a url IS a link.
                 {count} becomes the number of case studies on show. The site counts them. */

  blocks: [

    {
      type: "text",
      id: "who",
      eyebrow: "Who I help",
      heading: "Ecommerce brands that wants to increase sales & optimize margin",
      lede: "I build email marketing automation strategy with only one goal increased sales & maximized margin potential.",

      /* the two buttons on the first screen. Change a label OR where it goes. */
      buttons: [
        { label: "Get a free audit", url: "contact.html", primary: true },
        { label: "See my builds", url: "case-studies.html" }
      ],

      /* the line of proof under the buttons */
      proof: [
        { text: "Klaviyo Strategist certified", url: "certifications.html" },
        { text: "{count} documented builds" }
      ],

      bullets: [
        "Teams and solo founders losing sales to abandoned carts, one-time buyers, and dead lists.",
        "Brands with existing flows but aren't optimized for maximal margin potential.",
        "Brands that wants their email automation to be maximized for sales & margin.",
        "Available for long-term retainers, short-term sprints, or fixed-scope projects."
      ]
    },

    {
      type: "builds",
      id: "builds",
      eyebrow: "Selected builds",
      heading: "Open a build and see how I work.",

      /* WHICH case studies show here, in this order. Each line is the "slug" of a case
         further down this file (cases -> items). Swap a slug to swap a card.
         A slug that is misspelled, hidden OR a draft is skipped. */
      cases: [
        "cart-abandonment-email-2-off-bolt",
        "browse-abandonment-routed-history-clicks-sms",
        "abandoned-cart-recovery-grouped",
        "post-purchase-flow-grouped",
        "new-product-launch-email-off-bolt"
      ],

      /* the link under the cards. {count} = the number of case studies on show. "" hides the link. */
      more: "See all {count} builds",
      moreUrl: "case-studies.html"
    },

    /* a build walkthrough video, playing right on the home page */
    {
      type: "text",
      id: "walkthrough",
      eyebrow: "Build walkthrough",
      heading: "Watch me walk through a full build.",
      lede: "Segmented Checkout Recovery flow in Klaviyo: who gets which message, and where the discount goes.",
      video: "https://www.youtube-nocookie.com/embed/QpVXSGKls2w?rel=0",
      videoTitle: "Segmented Checkout Recovery walkthrough",
      buttons: [
        { label: "Open the case", url: "case-studies.html#case-abandoned-cart-recovery-grouped" }
      ]
    },

    {
      type: "text",
      id: "automate",
      eyebrow: "What specialize in",
      heading: "Sophisticated Klaviyo flows/campaigns & email designs that leverages visual hierarchy",
      bullets: [
        "Abandonment recovery: Browse, cart and checkout flows routed by who the shopper is and why they stopped, so each message removes one reason not to buy.",
        "Margin control: Discounts sent only where they can cause the order, proven with a no-discount holdout judged on placed orders.",
        "Retention flows: Post-purchase, reorder reminders, VIP and win-back timed to the brand's buying cycle, so repeat orders come mostly without discount codes.",
        "Lifecycle logic: One lifecycle stage per customer, so flows hand off profiles to higher intent flows and any order stops every \"please buy\" email. Sunset flows protect deliverability.",
        "Custom builds: Figma email designs with visual hierarchy built for conversion, HTML and CSS, and n8n + Shopify webhooks for checks Klaviyo can't do alone."
      ]
    },

    /* the free audit offer. It sits BEFORE the tools and the contacts, so it is seen early. */
    {
      type: "cta",
      id: "offer",
      heading: "Want to know what opportunities your flows are leaving on the table?",
      text: "Send me your store and I'll give you a free audit. I'll review your current workflows: what's missing, what could be improved, and where the money is leaking.",
      button: "Get my free audit"
    },

    {
      type: "tools",
      id: "stack",
      eyebrow: "My stack",
    heading: "The tools I actually build in.",

      /* "icon" picks a ready-made drawing. The choices are:
         mail  nodes  bag  code  grid  cube  chart  clock  star  plug
         You MAY paste a whole <svg> tag instead, IF you have the
         right to use that brand's own logo. */
      tools: [
        { name: "Klaviyo", icon: "mail" },
        { name: "Shopify", icon: "bag" },
        { name: "Figma", icon: "grid" },
        { name: "n8n", icon: "nodes" },
        { name: "HTML", icon: "code" },
        { name: "CSS", icon: "code" },
        { name: "APIs & Webhooks", icon: "plug" },
        { name: "Canva", icon: "star" },
      ]
    },

    {
      type: "contacts",
      id: "contacts",
      eyebrow: "Contacts",
      heading: "Where to reach me.",

      /* email: true        prints the address from site.email above AND makes it clickable.
         profile: "linkedin"  prints the address from site.linkedin as a link.
                              WHILE that address is "" the whole line is not shown. */
      lines: [
        { label: "Email", email: true },
        { label: "LinkedIn", profile: "linkedin" },
        { label: "Upwork", profile: "upwork" },
        { label: "Based in", value: "Philippines · works across time zones" },
        { label: "Replies in", value: "Under 24 hours, on working days" }
      ]
    },

    /* the closing call to action, the last thing on the page */
    {
      type: "cta",
      id: "cta",
      heading: "Send me your store and get a free audit.",
      text: "I reply in under 24 hours, on working days.",
      button: "Get my free audit"
    }

  ]
},


/* ================================================================
   3. CASE STUDIES PAGE

   One entry in "items" IS one card AND the panel it opens.
   Add a seventh by copying a whole { … } block.

   Every entry:
     type    flow | campaign | email-design. Decides which tab it appears under.
     date    YYYY-MM-DD. Shown as "Month YYYY" AND used to sort. "" hides it.
     slug    a short name, e.g. "welcome-flow". Also works as a link: case-studies.html#case-welcome-flow
     url     OPTIONAL. A link to a page of its own. The card opens that instead of a panel.
     draft   true = keep the entry here but hide it from visitors (hidden: true does the same)
     blurb   the one-line summary on the card
     tag     a small technology note (kept in the data, not shown on the card)
     title   the card title AND the panel title
     blurb   the sentence on the card
     photo   the picture on the card
     meta    the small grey line under the panel title
     video   a file OR an embed link
     poster  the still shown before a video file plays
     photos  the pictures inside the panel, shown first. Each one:
               { src: "assets/x.png", alt: "what it shows", wide: true }
             wide: true gives a picture the full width. Pictures show on their
             own, with no text under them. (caption: "..." adds a line, IF wanted.)
             Click a picture and it opens full size in a new tab.
             Leave a case with no pictures: photos: [] shows nothing.
     photosNote  optional. One plain sentence shown where the pictures would be,
             e.g. for a case too big to draw. Leave it out for no note.
     story   the write-up: a heading, THEN text OR bullets
     hidden  true = keep the entry in this file but do not show it anywhere
   ================================================================ */

cases: {

  tabTitle: "Case studies · Leien",
  tabNote: "Email flows and automations I have built, end to end.",

  eyebrow: "Case studies",
  heading: "Builds, opened up.",
  lede: "Each card shows the walkthrough: what's broken, what I built, what it does.",
  openLabel: "Open case",

  /* THE "FEATURED" ORDER, which is how the page opens.
     The cases listed here come first, in this order. Each line is a case's "slug".
     Every case NOT listed follows after them, A to Z. Add a slug to move a case up. */
  featured: [
    /* flows: the ESO grouped flows first */
    "abandoned-cart-recovery-grouped",                  // Segmented Checkout Recovery
    "browse-abandonment-routed-history-clicks-sms",     // Browse Abandonment (grouped)
    "post-purchase-flow-grouped",                       // ESO Post-Purchase
    "item-specific-abandoned-cart-recovery",
    "tlre-lifecycle-revenue-engine",
    /* email designs */
    "new-product-launch-email-off-bolt",
    "black-friday-sms-subscription-email-off-bolt",
    "cart-abandonment-email-2-off-bolt",
    "sms-subscription-campaign-email-off-bolt",
    "cart-abandonment-email-off-bolt"
  ],

  /* the words on the sort buttons, AND how the small "Showing ..." line names each order */
  filters: {
    sort: "Sort",
    featured: "Featured",
    az: "A–Z",
    za: "Z–A",
    latest: "Latest to oldest",
    oldest: "Oldest to latest",
    featuredStatus: "featured first"   // e.g. "Showing 11 case studies, featured first."
  },

  /* the short call to action at the end of every open case, above Previous / Next.
     "url" is where the button goes. Leave "button" as "" AND the whole box is not shown. */
  cta: {
    heading: "Want this kind of build on your store?",
    text: "Send me your store and I'll give you a free audit of your current flows: what's missing, what could be improved, and where the money is leaking.",
    button: "Get a free audit",
    url: "contact.html"
  },

  /* the words inside an open case */
  labels: {
    contents: "Contents",              // the button that lists the parts of a case
    previous: "Previous case",
    next: "Next case",
    copy: "Copy",                      // on every block of code
    copied: "Copied",
    close: "Close"                     // read out by screen readers
  },

  items: [

    {
      tag: "Klaviyo · n8n · Shopify",
      title: "Item-Specific Abandoned Cart Recovery",
      slug: "item-specific-abandoned-cart-recovery",
      type: "flow",                       // flow | campaign | email-design
      date: "2026-09-18",
      blurb: "Stops only when they buy the item they left",
      photo: "assets/case1-klaviyo-flow-1.png",          // the card picture. "" = a small drawn flow stands in
      thumbnailAlt: "The top of the Klaviyo flow: the Checkout Started trigger, a 4 hour wait, the Reminder email",
      meta: "Klaviyo + n8n + Shopify · Started Checkout · 3 emails · 12-node n8n workflow · practice store",
      video: "",
      poster: "",
      photos: [
        { src: "assets/case1-n8n-workflow.png", alt: "The n8n workflow: twelve nodes from the Shopify order to the Klaviyo event", wide: true },
        { src: "assets/case1-klaviyo-flow-1.png", alt: "The Klaviyo flow, top half: trigger, 4 hour wait, Reminder, 1 day wait, Deciding or thinking why to buy" },
        { src: "assets/case1-klaviyo-flow-2.png", alt: "The Klaviyo flow, bottom half: Deciding or thinking why to buy, 2 day wait, The close" }
      ],
      story: [
        {
          heading: "The problem",
          text: "Klaviyo's common cart recovery is \"did they buy?\" and not \"did they buy EXACTLY that?\". SO shopper leaves item A, but buys Item B, but still drops out the flow due to unspecific filtering. Leaving Item A unrecovered. This build fixes that."
        },
        {
          heading: "What I built",
          bullets: [
            "Shopify order webhook into a 12-node n8n workflow that checks the Shopify signature (HMAC) before it reads anything.",
            "n8n pulls the shopper's latest Started Checkout from Klaviyo and compares its items with the order, SKU by SKU.",
            "Only a match sends a Recovered Abandoned Item event back to Klaviyo. That event is the signal that ends the flow.",
            "A 3-email Klaviyo flow (4h → 20h → 24h), A/B tested at every step, with Smart Sending on."
          ]
        },
        {
          heading: "Result",
          text: "Working as expected. Tested end to end on a practice store on Sept 18, 2026, but not live yet."
        },
        {
          heading: "Skills I demonstrated in this build",
          bullets: [
            "Klaviyo flow logic: I replaced the default exit filter (Placed Order zero times since starting this flow) with a custom Recovered Abandoned Item event, so the flow ends only when the item they left is bought.",
            "Shopify webhooks: an order creation webhook, checked with an HMAC-SHA256 signature before any data is read.",
            "Klaviyo API: the workflow finds the profile by email, reads the latest Started Checkout event, and creates a custom event.",
            "JavaScript in n8n: three Code nodes that read the raw webhook body, pull out the order, and compare the SKUs, with a 7-day limit on old checkouts.",
            "Testing and documentation: three test cases (a different item, the same item, a fake request), a log of three errors with their fixes, and build steps for every node and setting."
          ]
        },
        {
          heading: "Documentation",
          text: `# Item-Specific Abandoned Cart Recovery for Off-Bolt

**Klaviyo + n8n + Shopify**

Emails a shopper about the item they left at checkout. The emails stop **ONLY IF** they buy **that** item, **NOT** when they buy something else.

**Status:** tested end to end on a practice store, Sept 18, 2026. Not live yet.

**Why it exists**

Klaviyo's default abandoned cart exit filter is \`Placed Order zero times since starting this flow\`.

That filter asks "did they buy **anything**?" It does **NOT** ask "did they buy **that**?"

**WHAT HAPPENS:** a shopper leaves item A, **THEN** buys item B → the flow ends → item A is never recovered. that means lost potential revenue.

**This build:** n8n compares what was bought with what is abandoned. **IF** they match, **THEN** n8n tells Klaviyo. Only that signal ends the flow.

---

## 1. Brand snapshot

|Field|Value|
|---|---|
|Brand|Off-Bolt, a practice women's-clothing brand (Synthetic data)|
|Location|Providence, Rhode Island|
|Market|USD. Ships to US and Canada|
|Sizes|US 0–24|
|Klaviyo "From" name|Stephanie at Off-Bolt|

**Products (6)**

|Product|Price|
|---|---|
|The Bolt Trouser|$148|
|The Mill Shirt|$128|
|The Selvage Jacket|$215|
|The Hem Dress|$178|
|The Bias Skirt|$138|
|The Offcut Tee|$58|

---

## 2. The profile's journey

**A shopper leaves a jacket.**
She adds **The Selvage Jacket** to her cart but leaves it.

Klaviyo sends a \`Started Checkout\` event to her Klaviyo profile. It carries her cart items. The flow starts. A **4-hour** Time Delay begins.

**Two hours later, she buys something else.**
She comes back and buys **The Offcut Tee**. She forgot the jacket.

Shopify sends the order to n8n.

n8n checks the order is really from Shopify (a signature check). It reads her email and the items she bought: the tee.

n8n asks Klaviyo for her last \`Started Checkout\`. It finds the jacket.

n8n compares the two lists. Tee ≠ jacket. **NO** match. n8n writes **nothing** to Klaviyo.

**THAT MEANS** the flow will keep running.

**Four hours after the checkout, Email 1 sends.**
Klaviyo checks the flow filters. Has \`Recovered Abandoned Item\` fired? **NO**. Has she started a new checkout? **NO**. SO Email 1 goes out: a reminder about the jacket.

Under Klaviyo's native filter, this email would **never** have sent.

**20 hours later, Email 2** (the objection).
**24 hours after that, Email 3** (the close).

(Note: ALL Email content is flexible depending on case)

**THEN** the flow ends.

### Events AND what happens

|Event|What happens|
|---|---|
|Buys the **same** item she left|n8n finds a match → sends \`Recovered Abandoned Item\` to Klaviyo → flow filter fails → **she exits**. No more emails.|
|Starts a **new** checkout|\`Started Checkout\` filter fails → **she exits this run**. The new checkout starts its own run.|
|Buys a **different** item|**NOT** an exit. She stays and gets the emails. (The actual purpose.)|
|Unsubscribes|Klaviyo stops sending her marketing emails.|
|Got another email recently|Smart Sending skips that one email. She moves on to the next step.|
|Gets Email 3|End of flow. **She exits**.|

### When n8n stops early (the flow is untouched)

|Case|Result|
|---|---|
|Signature does **NOT** match|Request is definitely fake → workflow ends.|
|**NO** Klaviyo profile for that email|Nothing to protect → workflow ends.|
|**NO** item match|Workflow ends on purpose. Writing nothing **IS** the job.|

Basically, n8n's job is to stop the flow.

---

## 3. Flow visual

\`\`\`
SHOPIFY: shopper starts checkout
└── KLAVIYO FLOW
    ├── Trigger: Started Checkout
    ├── Flow filters (AND), checked before every step:
    │   ├── Recovered Abandoned Item zero times since starting this flow
    │   └── Started Checkout zero times since starting this flow
    │   └── IF a filter fails → Exit flow
    ├── Time Delay: 4 hours
    ├── Email 1: Reminder (A/B test)
    ├── Time Delay: 20 hours
    ├── Email 2: Objection (A/B test)
    ├── Time Delay: 24 hours
    ├── Email 3: Close (A/B test)
    └── Exit flow

SHOPIFY: shopper places order
└── N8N WORKFLOW (12 nodes)
    ├── 1. Webhook
    ├── 2. Code: prepare raw body
    ├── 3. Crypto: HMAC-SHA256
    ├── 4. IF: HMAC valid?
    │   ├── false → End
    │   └── true
    │       ├── 5. Code: extract order
    │       ├── 6. HTTP Request: Get Profile
    │       └── 7. IF: profile exists?
    │           ├── false → End
    │           └── true
    │               ├── 8. HTTP Request: Get Events
    │               ├── 9. Code: compare
    │               └── 10. IF: match?
    │                   ├── true  → 11. HTTP Request: Create Event
    │                   │           └── sends "Recovered Abandoned Item" → Klaviyo flow filter
    │                   └── false → 12. No Operation
\`\`\`

---

## 4. Build steps

### 4.0 Before you start

|You need|Where it comes from|Where it goes|
|---|---|---|
|Shopify's native Klaviyo integration ON|Shopify + Klaviyo|Sends \`Started Checkout\` to Klaviyo|
|Shopify webhook signing secret|Shopify Admin → **Settings** → **Notifications** → **Webhooks** → the key under "Your webhooks will be signed with"|n8n credential used by the Crypto node|
|Klaviyo private API key|Klaviyo → **Settings** → **API keys**|n8n **Header Auth** credential. Header: \`Authorization\`, value: \`Klaviyo-API-Key <private key>\`|
|\`Started Checkout\` metric ID|Call \`GET https://a.klaviyo.com/api/metrics/\` **once**|n8n environment variable \`STARTED_CHECKOUT_METRIC_ID\`|
|Klaviyo \`revision\` header date|Klaviyo API docs|Every Klaviyo HTTP Request node. Value used: **Revision: 2025-07-15**|

**Plain words:**

- **Webhook:** a URL that waits for data. Shopify sends data to it when an event happens.
- **HMAC:** a signature. Shopify signs each message with the secret. n8n re-signs the body and compares. Same result → the message is real.
- **Metric:** a type of event in Klaviyo (e.g. \`Started Checkout\`).

---

### 4.1 Shopify: register the webhook

1. Build n8n Node 1 first. Copy its **Production URL**, **NOT** the Test URL.
2. In Shopify Admin: **Settings** → **Notifications** → **Webhooks** → **Create webhook**.

|Field|Value|
|---|---|
|Event|Order creation (\`orders/create\`)|
|Format|JSON|
|URL|n8n Node 1 Production URL|

**Trap:** the Test URL works **ONLY WHILE** the n8n canvas is open. Register it → it works during setup → it dies when you close the tab.

---

### 4.2 n8n: one workflow, 12 nodes

#### Node 1: Webhook

|Field|Value|
|---|---|
|HTTP Method|\`POST\`|
|Path|e.g. \`shopify-order-created\`|
|Respond|**Immediately**|
|Options → Raw Body|**ON**|

Goes to → Node 2.

#### Node 2: Code (prepare raw body)

|Field|Value|
|---|---|
|Purpose|Makes the raw order body available as \`raw\` for the Crypto node|
|Why it exists|With Raw Body ON, the Webhook outputs a **binary file**, **NOT** JSON. We want JSON not binary.|
|Code|The two lines below|

\`\`\`javascript
const buf = await this.helpers.getBinaryDataBuffer(0, 'data');
return [{ json: { raw: buf.toString('utf8') } }];
\`\`\`

Goes to → Node 3.

#### Node 3: Crypto

|Field|Value|
|---|---|
|Action|\`Hmac\`|
|Type|\`SHA256\`|
|Value|\`{{ $json.raw }}\`|
|Secret|Shopify signing secret, from an n8n credential. **NEVER** paste it into the node.|
|Encoding|\`base64\`|

Goes to → Node 4.

#### Node 4: IF (HMAC valid)

|Field|Value|
|---|---|
|Condition|Node 3 output **equals** Webhook header \`x-shopify-hmac-sha256\`|
|True|→ Node 5|
|False|End (nothing connected)|

#### Node 5: Code (extract order)

Outputs **one** item:

|Field|Rule|
|---|---|
|\`email\`|Order \`email\` **OR** \`contact_email\` **OR** \`customer.email\`. Lowercase **AND** trim.|
|\`ordered_skus\`|Array from \`line_items[].sku\`|
|\`order_id\`|Order ID|

**IF** SKUs are blank in the catalog, **THEN** use \`line_items[].product_id\`. Pick one ID type **AND** use it everywhere.

Goes to → Node 6.

#### Node 6: HTTP Request (Get Profile)

|Field|Value|
|---|---|
|Method|\`GET\`|
|URL|\`https://a.klaviyo.com/api/profiles/\`|
|Query \`filter\`|\`equals(email,"{{ $json.email }}")\`|
|Auth|Header Auth credential (Klaviyo private key)|
|Header|\`revision: 2025-07-15\`|
|Header|\`accept: application/json\`|
|Options → Response|Output JSON only|
|Settings → Retry On Fail|**ON**|

Goes to → Node 7.

#### Node 7: IF (profile exists)

|Field|Value|
|---|---|
|Condition|\`data\` array length > 0|
|True|→ Node 8 (carry the profile ID)|
|False|End (nothing connected)|

#### Node 8: HTTP Request (Get Events)

|Field|Value|
|---|---|
|Method|\`GET\`|
|URL|\`https://a.klaviyo.com/api/events/\`|
|Query \`filter\`|\`and(equals(profile_id,"{{ profileId }}"),equals(metric_id,"{{ $env.STARTED_CHECKOUT_METRIC_ID }}"))\`|
|Query \`sort\`|\`-datetime\` (newest first)|
|Auth + headers|Same as Node 6|

Goes to → Node 9.

#### Node 9: Code (compare)

Logic:

1. Take the **newest** \`Started Checkout\` event.
2. Read its line items → \`abandoned\`.
3. \`matched\` = items in **BOTH** \`ordered_skus\` **AND** \`abandoned\`.
4. Output \`matched\`, \`has_match\`, \`email\`, \`order_id\`.

Read the abandoned items (Klaviyo keeps them under \`$extra.line_items\`):

\`\`\`javascript
const props = latest.attributes.event_properties || {};
const items = (props.$extra || {}).line_items || [];
const abandoned = items
  .map(i => i.sku)
  .filter(Boolean)
  .map(String);
\`\`\`

Compare and return:

\`\`\`javascript
const matched = order.ordered_skus.map(String).filter(sku => abandoned.includes(sku));
return [{ json: { matched, has_match: matched.length > 0, email: order.email, order_id: order.order_id } }];
\`\`\`

|Extra rule|Value|
|---|---|
|Recency guard (ignore old checkouts)|**YES.** Max age: **168 hours (7 days)**|

\`\`\`javascript
const latest = events[0];
const ageHours =
  (Date.now() - new Date(latest.attributes.datetime)) / 3600000;

if (ageHours > 168) {
  return [{ json: { matched: [], has_match: false } }];
}
\`\`\`

Goes to → Node 10.

#### Node 10: IF (match)

|Field|Value|
|---|---|
|Condition|\`has_match\` is true|
|True|→ Node 11|
|False|→ Node 12|

#### Node 11: HTTP Request (Create Event)

|Field|Value|
|---|---|
|Method|\`POST\`|
|URL|\`https://a.klaviyo.com/api/events/\`|
|Auth|Header Auth credential|
|Headers|\`revision: 2025-07-15\` · \`Content-Type: application/json\`|

Body (map \`matched_skus\` ← \`matched\`, \`order_id\` ← \`order_id\`, \`email\` ← \`email\`):

\`\`\`json
{
  "data": {
    "type": "event",
    "attributes": {
      "properties": {
        "matched_skus": ["SKU-1"],
        "order_id": "1234567890"
      },
      "metric": {
        "data": {
          "type": "metric",
          "attributes": { "name": "Recovered Abandoned Item" }
        }
      },
      "profile": {
        "data": {
          "type": "profile",
          "attributes": { "email": "buyer@example.com" }
        }
      }
    }
  }
}
\`\`\`

End of workflow.

#### Node 12: No Operation

False branch ends here. Writes nothing. **THEREFORE** the Klaviyo flow keeps running.

#### Separate: Error Workflow

Alert channel for failed runs. **Not built yet.** Planned **BEFORE** go-live.

---

### 4.3 Seed the custom metric (do this BEFORE the Klaviyo flow)

Run Node 11 **once** with test data.

**BECAUSE** a metric with zero events does **NOT** appear in Klaviyo's filter dropdown.

Check: Klaviyo → **Analytics** → **Metrics** → \`Recovered Abandoned Item\` exists.

---

### 4.4 Klaviyo: the flow

#### Trigger

|Field|Value|
|---|---|
|Trigger type|Metric|
|Metric|\`Started Checkout\`|
|Trigger filters|None|

#### Flow filters (ALL must be true, joined with AND)

|#|Filter|
|---|---|
|1|\`Recovered Abandoned Item\` zero times since starting this flow|
|2|\`Started Checkout\` zero times since starting this flow|

**Removed:** \`Placed Order zero times since starting this flow\`. This swap **IS** the whole build.

#### Flow cards (in order)

|#|Card|Setting|
|---|---|---|
|1|Time Delay|4 hours|
|2|Email 1: Reminder|Depends on store|
|3|Time Delay|20 hours|
|4|Email 2: Objection|Depends on store|
|5|Time Delay|24 hours|
|6|Email 3: Close|Depends on store|

#### Emails

**Email content varies by case.** subject, preview text, copy, dynamic blocks, A/B tests and incentive depend on the store, the product and the shopper. **ONLY** the job of each email and the Smart Sending setting stay fixed:

|Email|Job|Smart Sending|
|---|---|---|
|Email 1: Reminder|Remind them of the item|**ON**|
|Email 2: Objection|Answer the doubt that stopped them|**ON**|
|Email 3: Close|Last message|**ON**|

#### Go live

Draft → **Manual** (test) → **Live**.

---

## 5. Errors and fixes

Note: Every major problem and fix must always go here

|#|Problem|Cause|Fix|
|---|---|---|---|
|1|Crypto read \`json.body\`, which did not exist|Webhook with Raw Body ON outputs a **binary file**, **NOT** JSON|Added a Code node (Node 2) before Crypto. Crypto Value changed \`json.body\` → \`json.raw\`.|
|2|Compare node needed the real path to the abandoned items|Klaviyo stores \`Started Checkout\` line items under \`event_properties.$extra.line_items\`|Rewrote the item read (see Node 9, first snippet).|
|3|Compare output needed matching SKUs **AND** the order data for Node 11|SKUs can arrive as numbers **OR** text. Node 11 needs \`email\` **AND** \`order_id\`.|Both lists turned to text with \`String\` before comparing. Return now outputs \`matched\`, \`has_match\`, \`email\`, \`order_id\`.|

---

## 6. Test checklist

Use a **development store**. **NEVER** send test orders into a live store. Only use a live store IF already tested. This test is for building it from scratch.

1. Set **ALL** Time Delays to **1 minute** (test only).
2. Confirm \`Recovered Abandoned Item\` exists in Klaviyo (step 4.3).
3. Set the flow to **Manual**.
4. **Test A: different item.** Start checkout with item X. Leave. Buy item Y.
   - n8n: Node 10 → **false** → Node 12.
   - Klaviyo: **NO** \`Recovered Abandoned Item\` on the profile.
   - Emails 1, 2, 3 send.
5. **Test B: same item.** Start checkout with item X. Leave. Buy item X.
   - n8n: Node 10 → **true** → Node 11.
   - Klaviyo: \`Recovered Abandoned Item\` shows in the profile's activity.
   - Flow exits. **NO** more emails.
6. **Test C: fake request.** Send a POST to the webhook without a valid signature.
   - n8n stops at Node 4 → false.
7. Open each email. Click the checkout link.
8. Set delays back to **4 h / 20 h / 24 h**.
9. Build the Error Workflow **AND** alert channel **BEFORE** any live store.
10. Set the flow to **Live**. Read the n8n executions log for the first 20 orders.

Reminder: Add more to this the more updates/changes/error encounter happens.`
        }
      ]
    },

    {
      tag: "Klaviyo grouped flows",
      title: "Segmented Checkout Recovery: Reason routed recovery With Controlled discount distribution",
      slug: "abandoned-cart-recovery-grouped",
      type: "flow",                       // flow | campaign | email-design
      date: "2026-11-13",
      blurb: "Gives the right fix to the right shopper and spends discounts only where they cause the order.",
      photo: "assets/case2-acr-v12-flow-1.png",
      thumbnailAlt: "The top of the checkout recovery flow: the Checkout Started trigger with profile filters, a 1 hour 30 minute wait, the Are they active split, and the two first emails",
      meta: "Klaviyo · Checkout Started · email + SMS · 3 messages per shopper · discounts by buying history and cart value",
      video: "https://www.youtube-nocookie.com/embed/QpVXSGKls2w?rel=0",   // the walkthrough, plays on the page. Share link: watch/segmented-checkout-recovery.html
      videoTitle: "Segmented Checkout Recovery walkthrough",
      poster: "",
      photos: [
        { src: "assets/case2-acr-v12-flow-1.png", alt: "The checkout recovery flow, part 1: Checkout Started trigger with profile filters, 1 hour 30 minute wait, the Are they active split, E1P1 warm message for VIP or loyal customers on the Yes path, and E1P2 informative email for everyone else" },
        { src: "assets/case2-acr-v12-flow-2.png", alt: "The checkout recovery flow, part 2: a 22 hour 30 minute wait, then the second split, 4 checks for the most optimized 2nd email", wide: true },
        { src: "assets/case2-acr-v12-flow-3.png", alt: "The checkout recovery flow, part 3: the five paths of the second split side by side. Path 1 active buyer gets E2 second nudge plus a little push. Path 2 checkout value of 300 dollars or more splits on SMS consent into S1P2 high-cart SMS or E1P2P2 risk reversal email. Path 3 checkout value under 100 dollars gets E2P3 free-shipping gap. Path 4 placed order at least once gets E2P4 what's new. Everyone else gets E2Else social proof or guidance", wide: true },
        { src: "assets/case2-acr-v12-flow-4.png", alt: "The checkout recovery flow, part 4: a 1 day wait, then the third split, 5 checks for optimized discount giving", wide: true },
        { src: "assets/case2-acr-v12-flow-5.png", alt: "The checkout recovery flow, part 5: the six paths of the third split. Received OFFBOLT3 or OFFBOLT4 gets a last nudge with no discount, likely to buy gets a last nudge with no discount, no second order gets OFFBOLT 3 10 percent, one-time buyer gets OFFBOLT 3 10 percent, low cart value gets a last nudge with no discount, and everyone else splits on a 50 percent random sample into OFFBOLT 4 20 percent off or OFFBOLT 3 10 percent off", wide: true }
      ],
      story: [
        {
          heading: "The problem",
          text: "A shopper starts checkout AND leaves before paying. This is the strongest buying signal a store can have. The usual fix is a little push and a discount by email. BUT what really happens? The discount goes to people who would buy anyway, it’s bigger than it needs to be, AND it can lose money on small orders. SO basically we lose margin BECAUSE nobody controls who gets which discount."
        },
        {
          text: "The common setup is a 1-path flow that only removes VIPs from the 3rd email discount. What does that flow really do?",
          bullets: [
            "First, it gives codes to active repeat buyers, small carts AND repeat abandoners, who mostly buy anyway.",
            "Secondly, it uses one discount size for everyone, even though 20% needs about 3× the extra orders that 10% needs to break even.",
            "Thirdly, it discounts small carts that can never break even. On a $30 cart, 20% off needs +600% more orders.",
            "It teaches shoppers to abandon on purpose. They think “If I leave my cart, I’ll get a code.”",
            "It gives no proof the discount caused the sale, BECAUSE Klaviyo credits the email even IF the shopper would have bought anyway.",
            "It sends one message to every shopper, whatever their reason for stopping.",
            "It treats loyal buyers like strangers.",
            "Finally, last part, it spends SMS money on carts too small to pay it back."
          ]
        },
        {
          heading: "What I built",
          text: "**Variables:**",
          bullets: [
            "E = Email",
            "P = Path"
          ]
        },
        {
          text: "How does this flow solve that? First, we find out who the shopper is AND why they stopped. THEN we send the cheapest fix that works: the right message first, a small discount ONLY when it’s needed. And a small no-discount group proves the discount actually earned its money.",
          bullets: [
            "**Reason ladder in 3 messages:** each message removes one reason not to buy, cheapest first. Money comes last.",
            "**E1:** active repeat buyers get a plain-text note from the team. Why? They already trust us, SO a note feels like service, NOT selling. Everyone else gets an informative reminder.",
            { text: "**E2:** we route each shopper by their likely reason for stopping:", bullets: [
              "Loyal → personal note + products that pair with their cart",
              "High cart → SMS OR risk reversal email, so they think “I can just return it if I don’t like it.”",
              "Small cart → shows the free-shipping gap",
              "Past customer → what’s new",
              "New → A/B test: social proof vs guidance"
            ] },
            "**E3:** a discount goes ONLY to lapsed customers (10%), one-time buyers (10%) AND new prospects (20% vs 10% test). BUT active repeat buyers, small carts AND anyone who got a code in the last 90 days get NO discount. Why? BECAUSE they’d buy anyway, OR the discount can’t pay itself back, OR we’d teach them to abandon on purpose.",
            "**SMS:** ONLY at E2, ONLY for carts ≥ $300. At most 1 SMS per flow, SO the SMS money goes where it pays back best.",
            "**Filters:** shoppers who order exit right away. Every message needs explicit email list subscription, which protects deliverability.",
            "**Joins:** one delay AND one split per stage, SO upkeep stays simple.",
            "**3 A/B tests + 1 holdout:** each changes one thing, judged on placed order rate, NOT clicks.",
            "n8n can optimize this flow further if needed."
          ]
        },
        {
          text: "So basically we give the right fix to the right shopper, spend discounts ONLY where they cause the order, therefore we protect margin AND get more revenue."
        },
        {
          heading: "Result",
          text: "Built AND tested with synthetic data. Documented well enough that someone new could rebuild it from scratch OR maintain it."
        },
        {
          heading: "What skills it shows",
          bullets: [
            "I strongly understand Klaviyo's technicalities AND email marketing.",
            "My strategic thinking, which matters in real marketing.",
            "I understand customer behavior.",
            "My logical thinking fits the role.",
            "My deep focus to the role by being able to come up with this."
          ]
        },
        {
          heading: "Documentation",
          text: `# Abandoned Checkout Recovery Flow

**Tools:** Shopify · Klaviyo · Email · SMS
**Version:** 1.2 · 13 Nov 2026 (1.1 · 10 Nov 2026 · first build 1.0 · 15 Sep 2026)

---

## At a glance

|                         |                                                                                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Goal**                | Recover the most checkouts with the right message at the right time, AND spend discounts ONLY where they cause the order.           |
| **Trigger**             | Checkout Started                                                                                                                     |
| **Messages per person** | 3 (one may be SMS)                                                                                                                   |
| **Channels**            | Email. SMS ONLY at E2, ONLY for carts ≥ $300 with SMS consent                                                                         |
| **Discounts**           | E3 only: 10% for lapsed AND one-time buyers, 20% vs 10% test for new prospects. NONE for active repeat buyers, carts < $100, OR a code in the last 90 days |
| **Success metric**      | Placed order rate for this flow. Discount judged against a no-discount holdout                                                       |

---

## 1. Purpose

- **Why it exists:** a shopper started checkout AND left before paying. No signal shows stronger intent to buy.
- **How it works:** find out who the shopper is AND why they stopped. THEN send the cheapest fix that works. Each message removes one reason not to buy, cheapest first. Money is spent last, AND ONLY where it can cause the order.
- **Where it sits:** one part of a larger email and SMS system.
    - **Browse Abandonment (BA)** handles shoppers who only viewed a product. BA goes silent once checkout starts.
    - **Post-Purchase** handles replenishment using predictive product life data. IF a product is predicted to be almost gone, THEN emails are sent, THEREFORE encouraging them to buy again. Shoppers who order during this flow exit AND enter Post-Purchase.
- **How it is judged:** placed order rate.

### The reason ladder

| Stage                                                          | Doubts/Reasons it removes from customer                                                                                 | Cost to the store                      |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| E1: First reminder                                             | "Something broke" OR "I got distracted"                                                                                 | None                                   |
| E2: Routed fix (trust, risk, shipping, what's new OR guidance) | "Why this brand?", "What if it goes wrong?", "Shipping costs too much", "What's new?" OR "Will I pick the wrong thing?" | Little to none (SMS: cost per message) |
| E3: Offer, ONLY for groups where it can cause the order        | "Is it worth the money?"                                                                                                | Margin                                 |

---

## 2. Structure

### 2.1 Trigger

- **Metric:** Checkout Started (Shopify integration).

### 2.2 Who enters, who is blocked, when they leave

| Rule | Setting | Why |
| --- | --- | --- |
| **Enter** | Started checkout | Strongest buying signal |
| **Flow/profile filter 1** | Placed Order zero times since starting this flow | Anyone who orders exits AND enters Post-Purchase. Sending them recovery emails hurts deliverability |
| **Flow/profile filter 2** | Is in the \`Email list\` | Explicit consent for EVERY message, BECAUSE this is marketing. Protects deliverability |
| **Leave after E3** | ALL branches end | The flow is done after E3 |
| **Consent** | Klaviyo checks channel consent on every message | We send marketing messages, NOT transactional |

**Note:** filters are checked before each message. IF a shopper buys during a wait, THEN they leave quietly at the next check.

#### Why the list check moved into the flow filter

- In 1.1, the list check sat before Email 2. SO Email 1 went to anyone who could receive email marketing.
- "Can receive email marketing" only means NOT unsubscribed. The list check is stricter: they explicitly subscribed.
- Now EVERY message needs explicit subscription. This matches the setup 1.1 said is required for the EU, the UK AND other opt-in regions.
- The 1.1 engagement filter (opened OR clicked in 90 days, OR received zero emails ever) is NOT part of 1.2.

#### Why wait 1h 30m before E1

- So the shopper has left the site. We don't email while they are still browsing.
- Range: 1h to 4h, based on how long customers stay on the site. This build uses 1h 30m.

#### How the splits work

- Each split checks its paths in order, 1 by 1. A shopper takes the FIRST path that matches.
- Else catches everyone who matched NO path.
- After each stage, ALL branches join, THEN one delay, THEN the next split.

### 2.3 Flow map

\`\`\`
Checkout Started
   |   Flow filter 1: Placed Order zero times since starting this flow
   |   Flow filter 2: Is in the OB | email list
   v
Wait 1h 30m
   v
SPLIT 1
   |-- P1 Active repeat buyer  --> EMAIL 1A: Plain-text note from the team
   |-- Else                    --> EMAIL 1B: Informative reminder (A/B)
   v  join
Wait 22h 30m
   v
SPLIT 2 (first match wins)
   |-- P1 Active repeat buyer  --> EMAIL 2A: Personal note + pairing products
   |-- P2 Cart ≥ $300
   |      |-- SMS consent YES  --> SMS 2B: High-cart SMS
   |      |-- SMS consent NO   --> EMAIL 2C: Risk reversal
   |-- P3 Cart < $100          --> EMAIL 2D: Free-shipping gap
   |-- P4 Past customer        --> EMAIL 2E: What's new
   |-- Else (new, $100 to under $300) --> EMAIL 2F: Social proof vs Guidance (A/B)
   v  join
Wait 24h
   v
SPLIT 3 (first match wins)
   |-- P1 Code email in last 90 days --> EMAIL 3A: No discount
   |-- P2 Active repeat buyer        --> EMAIL 3B: No discount
   |-- P3 Lapsed customer            --> EMAIL 3C: 10% off
   |-- P4 One-time buyer             --> EMAIL 3D: 10% off
   |-- P5 Cart < $100                --> EMAIL 3E: No discount
   |-- Else (new, cart ≥ $100)       --> EMAIL 3F: 20% vs 10% (A/B)
   v
ALL branches end
\`\`\`

**Timing:** E2 lands 24h after checkout, BECAUSE that is the time of day they made the checkout, SO they are more likely free then. E3 lands 24h after that, at 48h, for the same reason.

### 2.4 Split paths

**Active repeat buyer** (used in all 3 splits) = Placed Order at least 2 times over all time AND at least 1 time in the last 180 days.

#### Split 1 (E1)

| Path | Condition | Message | Why |
| --- | --- | --- | --- |
| P1 Active repeat buyer | See definition above | Plain-text note from the team | They trust the brand, SO a designed sales email adds little. A short note feels like service, NOT selling. It keeps the relationship, THEREFORE more revenue. Matches their E2 tone |
| Else: Everyone else | None. Catches everyone who did NOT match P1 | Informative reminder | NOT loyal yet, SO the email shows product benefits to build loyalty. Biggest group, SO best place to test |

#### Split 2 (E2)

| Path | Condition | Message | Why |
| --- | --- | --- | --- |
| P1 Active repeat buyer | See definition above | Personal plain-text note + products that pair with their cart | Proof AND guarantees add little. Pairing products can grow the order. P1 is first, SO loyal buyers never get generic trust content |
| P2 High cart value | Started Checkout value ≥ $300 | SMS consent YES → SMS. NO → Risk reversal email | SMS costs money per message, BUT a high cart is where that cost pays off best. Bigger spend makes shoppers cautious. Returns, guarantee AND payment options lower that risk |
| P3 Below free-shipping threshold | Started Checkout value < $100 | Free-shipping gap email | Shipping cost is a common reason to stop. Shopify gives NO free shipping here UNLESS added items push the cart past $100. The email shows how. Threshold is set in Shopify, NOT Klaviyo |
| P4 Past customer | Placed Order at least 1 time over all time | What's new email | ONLY one-time OR lapsed customers reach here. They are drifting, SO we try to win back their attention |
| Else: New prospect, mid cart | None. Zero orders AND cart $100 to under $300 | A/B: Social proof vs Guidance | First-time buyers mostly hesitate over trust OR uncertainty. The test shows which works |

#### Split 3 (E3)

| Path | Condition | Message | Why |
| --- | --- | --- | --- |
| P1 Recent discount receiver | Received the OFFBOLT3 OR OFFBOLT4 discount email at least 1 time in the last 90 days | No discount | IF shoppers get a code every time they abandon, THEN they learn to abandon on purpose. Blocking repeat codes protects margin AND stops that habit |
| P2 Active repeat buyer | See definition above | No discount | High order rate, SO they likely buy anyway. A discount mostly pays for orders we'd get anyway |
| P3 Lapsed customer | Placed Order at least 1 time over all time AND zero times in the last 180 days | 10% off | They know the brand but stopped buying, SO order rate is low. A discount is more likely to cause the order. 10%, NOT 20%, BECAUSE 10% needs far fewer extra orders to break even |
| P4 One-time buyer | Placed Order exactly 1 time over all time | 10% off | P3 already caught lapsed buyers, THEREFORE ONLY recent one-time buyers reach here. The second order is the hardest to win AND often decides if they become repeat buyers. 10%, same as lapsed |
| P5 Low cart value | Started Checkout value < $100 | No discount | A discount on a low-value cart hurts margin fatally |
| Else: New prospect | None. Zero orders AND cart ≥ $100 | A/B: 20% vs 10% | No purchase history = lowest baseline AND highest chance the discount causes the order. The ONLY path that tests 20% |

### 2.5 Messages

| # | Sent at | Channel | Who | Job | Offer |
| --- | --- | --- | --- | --- | --- |
| 1A | 1h 30m | Email | Active repeat buyer | Plain-text note from the team | None |
| 1B | 1h 30m | Email | Everyone else | Remind. Fix anything that broke. Show benefits | None |
| 2A | 24h | Email | Active repeat buyer | Personal note + pairing products | None |
| 2B | 24h | SMS | Cart ≥ $300 + SMS consent | High-cart push | None |
| 2C | 24h | Email | Cart ≥ $300, no SMS consent | Risk reversal: returns, guarantee, payment options | None |
| 2D | 24h | Email | Cart < $100 | Show the free-shipping gap | None |
| 2E | 24h | Email | Past customer | What's new | None |
| 2F | 24h | Email | New prospect, $100 to under $300 | Social proof vs Guidance (A/B) | None |
| 3A | 48h | Email | Code email in last 90 days | Last nudge | None |
| 3B | 48h | Email | Active repeat buyer | Last nudge | None |
| 3C | 48h | Email | Lapsed customer | Close on price | 10% |
| 3D | 48h | Email | One-time buyer | Close on price | 10% |
| 3E | 48h | Email | Cart < $100 | Last nudge | None |
| 3F | 48h | Email | New prospect, cart ≥ $100 | Close on price | 20% vs 10% (A/B) |

### 2.6 Smart Sending

Smart Sending skips a message IF the shopper got another message on the same channel inside the window (default 16 hours). Email and SMS have separate windows. A skip is logged as a skip, NOT an error.

| # | Message | Gap on the same channel | Setting | Why |
| --- | --- | --- | --- | --- |
| 1A–1B | First emails | First message | **OFF** | Highest intent. Must land even after a campaign |
| 2A, 2C–2F | Second emails | 22h 30m | **ON** | Over 16h, SO ON is safe |
| 2B | SMS | First SMS in flow | **Not set** | To confirm |
| 3A–3F | Third emails | 24h | **ON** | Over 16h, SO ON is safe |

**Result:** Emails 2 AND 3 are protected from campaign overlap. ONLY Email 1 is not, ON PURPOSE.

---

## 3. Variables and data

### 3.1 Data the flow needs

- Checkout Started event: checkout link, items, cart total (Started Checkout value), product category
- Placed Order count: since entering the flow, over all time, AND in the last 180 days
- Membership of the OB | email list
- SMS consent
- Received Email: OFFBOLT3 OR OFFBOLT4 in the last 90 days
- Email consent (Klaviyo checks on every send)
- Products that pair with the cart (for 2A)
- Shopify free-shipping threshold ($100)

**No longer needed (1.1):** email opens AND clicks in 90 days, emails received over all time, fulfilled order in the last 7 days, VIP status.

---

## 4. Decisions

| Choice | Because |
| --- | --- |
| No discount in E1 OR E2 | The cause is usually a small problem. A code pays shoppers who were coming back anyway |
| Right message before money | Free fixes are tried first. Margin is spent ONLY after they fail |
| Route E2 by likely reason for stopping | One message for everyone misses most reasons. Each group gets the fix for its likely doubt |
| Plain-text notes for loyal buyers in E1 AND E2 | They trust the brand. A note feels like service, NOT selling. Tone stays consistent |
| Discount by buying history AND cart value, NOT one size for all | 20% needs about 3× the extra orders 10% needs to break even |
| NO discount for active repeat buyers | They likely buy anyway, SO a code mostly pays for orders we'd get anyway |
| NO repeat codes within 90 days | Stops shoppers from learning to abandon on purpose. Protects margin |
| NO discount on carts < $100 | Small carts can't pay back a discount |
| 10% for lapsed AND one-time buyers | A discount is more likely to cause the order here. 10% needs far fewer extra orders than 20% |
| 20% tested ONLY on new prospects | Lowest baseline AND highest chance the discount causes the order |
| Holdout (no-discount group) | Klaviyo credits the email even IF the shopper would have bought anyway. The holdout proves the discount earned its money |
| SMS ONLY at E2, ONLY carts ≥ $300 | SMS costs money per message. High carts pay it back best. At most 1 SMS per flow |
| Email list check in the flow filter | This is marketing, SO explicit consent for EVERY message. Protects deliverability |
| 1h 30m before E1 | The shopper has left the site. Range is 1h to 4h, based on session length |
| 3 messages instead of 4 | More messages raise the risk of spam AND complaints, which hurts deliverability |
| E2 at 24h AND E3 at 48h | 24h after checkout is more likely their free time of day, SO each message lands at that same time |
| One delay AND one split per stage | Upkeep stays simple |

### 4.1 A/B tests

Each test changes ONE thing. Everything else stays the same. Judged on placed order rate, NOT clicks.

| Message | What changes | What exactly? |
| --- | --- | --- |
| 1B Reminder (Else) | Subject line | Reminder vs Urgency |
| 2F New prospect | Content angle | Social proof vs Guidance |
| 3F New prospect | Discount size | 20% vs 10% |
| E3 discount paths | Discount vs none | Small no-discount holdout |

---

## 5. Versions

| Version | Date | Change |
| --- | --- | --- |
| 1.0 | 15 Sep 2026 | First build, fully established this day |
| 1.1 | 10 Nov 2026 | New flow filters, 3 emails instead of 4+, new timing, consent check before Email 2, split discount in Email 3, new Smart Sending settings |
| 1.2 | 13 Nov 2026 | List check moved to flow filter, engagement filter removed, split at every stage, SMS at E2 for carts ≥ $300, discount by buying history AND cart value, repeat-code block, holdout |
| 1.3 | Planned | n8n add-ons |

### What changed in 1.2

1. **List check moved into the flow filter**
   Was: before Email 2. Now: flow filter, SO it covers EVERY message.
   BENEFIT: explicit consent for every message. Protects deliverability.
2. **Engagement filter removed**
   "Opened OR clicked in 90 days, OR received zero emails" AND "can receive email marketing" are no longer flow filters. The list check is now the consent rule.
3. **Split at E1**
   Active repeat buyers get a plain-text note. Everyone else gets an informative reminder.
   BENEFIT: loyal buyers are not treated like strangers.
4. **Split at E2 into 5 paths**
   Loyal, high cart, below free shipping, past customer, new prospect.
   BENEFIT: each shopper gets the fix for their likely reason for stopping.
5. **SMS at E2**
   ONLY carts ≥ $300 with SMS consent. No consent → risk reversal email.
   BENEFIT: SMS money is spent ONLY where it pays back. At most 1 SMS per flow.
6. **Split at E3 into 6 paths**
   Replaces the 1.1 split (20% for recent buyers AND VIPs, 10% for everyone else).
   BENEFIT: discounts go ONLY where they can cause the order.
7. **Repeat-code block**
   A code email in the last 90 days → no discount.
   BENEFIT: shoppers don't learn to abandon on purpose.
8. **Holdout**
   A small no-discount group.
   BENEFIT: proves the discount earned its money.
9. **Joins**
   ALL branches join after each stage, THEN one delay AND one split.
   BENEFIT: upkeep stays simple.

**Unchanged:** timing (1h 30m, 24h, 48h) AND the 3-message limit.

### What changed in 1.1

1. **New flow/profile filters**
   Placed Order zero times since starting the flow AND Person can receive email marketing. Plus: opened OR clicked an email in the last 90 days, OR received zero emails over all time.
   BENEFIT: first-time shoppers are reached, AND people who ignore email for 90 days are not mailed, which protects deliverability.
2. **3 emails instead of 4**
   The opener split, the SMS step and the last two emails are removed.
   BENEFIT: less risk of spam and complaints.
3. **Timing at 24h AND 48h**
   The wait after Email 1 goes from 11h 30m to 22h 30m, so Email 2 lands 24 hours after the checkout. Email 3 lands at 48h.
   BENEFIT: each email lands at a time of day when they are more likely free.
4. **Explicit consent check before Email 2**
   Only people in the OB | email list continue.
   BENEFIT: Emails 2 AND 3 only go to shoppers who explicitly subscribed.
5. **Split discount in Email 3**
   A fulfilled order in the last 7 days OR VIP gets 20%. Everyone else gets 10%. Both branches then end.
   BENEFIT: the bigger discount goes to people we already earned revenue from, so it does not hurt ROI.
6. **Smart Sending**
   Email 1 OFF. Email 2 ON. Both versions of Email 3 ON.
   BENEFIT: Emails 2 AND 3 are protected from campaign overlap.

**Not part of 1.1:** the SMS routing, the product-based guidance at 25h and the optional "once per 30 days" audience from the earlier plan.

### Coming in 1.3 (n8n)

1. **Unique codes with real deadlines**: one single-use code per shopper, with an exact end time.
2. **Sorted shopper feedback**: "What stopped you?" replies are grouped and counted automatically.
3. **Daily health alerts**: IF sends drop, THEN an alert goes out.

Older versions are kept, NOT deleted.

Good luck building!`,
          previous: [                          // older versions: same folder, tucked behind a note under the latest file
            { name: "V1", text: `# V1.0 · Abandoned Cart Recovery(Grouped)

**Version:** V1.0 · 15 Sep 2026

## Card details

| | |
|---|---|
|**Title**|Abandoned Cart Recovery(Grouped)|
|**Card summary**|Answers one doubt per message and saves the discount for last|
|**Details line**|Klaviyo · Checkout Started · email + SMS · 5 messages per opener, 3 per non-opener · one discount|
|**Date**|2026-09-15|
|**Tag**|Klaviyo grouped flows|

## Story

### The problem

A shopper starts checkout and leaves before the purchase this is the strongest buying signal a store can have. The usual fix is a little push and a discount in email, which helps shoppers decide. but the problem is they will find a pattern in the discount drops. We do not want that, so I prevented it with this ACR(abandoned cart recovery) build.

### What I built

- A reason ladder: each message removes one reason not to buy, cheapest first. It starts with a reminder, then trust, then guidance, and money comes last.
- Splits on email opens, buying history and SMS consent, so non-openers stop after 25 hours and no one is messaged on a channel they cannot receive. Therfore we receive the least complaints possible.
- One discount email, designed for first-time buyers only, testing 10% off against free delivery at about the same cost. A/B tests to further increase revenue after deploying.
- 8 A/B tests, each changing one thing, judged on placed order rate rather than clicks.
- This flow can be optimized using n8n if needed.

### Result

Built on a practice store with sample brand data, and documented well enough to rebuild from scratch. No live results yet. Known gaps are listed openly in the documentation, not hidden because this gaps can be removed or reduced by using n8n.

Built with synthetic data and is documented enough to be rebuilt from scratch or to be maintained by someone who doesn't know anything about it.

### What skills it shows for me

- Shows that I understand Klaviyo and Email marketing fully.
- Shows my strategical thinking. (Which is beneficial for real marketing)
- Shows I understand customer behavior.
- Shows my data based decision making.

## Flow screenshots

![The abandoned checkout flow, part 1: trigger, 1 hour 30 minute wait, E1 Reminder, 11 hour 30 minute wait, first split](assets/case2-acr-flow-1.png)

![The abandoned checkout flow, part 2: first split between can receive email or SMS and everyone else, E2 or SMS1, 12 hour wait, second split](assets/case2-acr-flow-2.png)

![The abandoned checkout flow, part 3: second split between opened email and everyone else, E3A What roast, E3B What size, 13 hour wait, third split](assets/case2-acr-flow-3.png)

---
# Abandoned Checkout Recovery Flow for Lai's Coffee (Lai's Coffee is a synthetic data only)

**Tools:** Shopify · Klaviyo · Email + SMS
**Version:** 1.0 · 15 Sep 2026
**Status:** Drafted since it uses synthetic data only.

---

## At a glance

|   |   |
|---|---|
|**Goal**|Turn a started checkout into an order|
|**Trigger**|Checkout Started|
|**Messages per person**|5 IF the shopper opens an email, 3 IF not|
|**Channels**|Email AND SMS|
|**Discounts**|One message only, for one group of buyers|
|**Success metric**|Placed order rate for this flow|

---

## 1. Purpose

- **Why it exists:** a shopper started checkout AND left before paying. This is the strongest buying signal a store has.
- **How it works:** each message removes one reason not to buy, cheapest reason first. Money (a discount) is spent last.
- **Where it sits:** one part of a larger email and SMS system.
    - **Browse Abandonment (BA)** handles shoppers who only viewed a product. BA goes silent once checkout starts.
    - **Post-Purchase** handles replenishment of products using predictive product life data, IF product is predicted to be almost gone THEN emails will be sent, THEREFORE encouraging them to buy again.
- **How it is judged:** placed order rate. Clicks are NOT the goal.

### The reason ladder

|Stage|Doubts/Reasons it removes from customer|Cost to the store|
|---|---|---|
|E1: First reminder|"Something broke" OR "I got distracted"|None|
|E2: Trust|"Why this brand?"|None|
|E3: Guidance|"Will I pick the wrong thing?"|None|
|E4: Offer|"Is it worth the money?"|Margin|
|E5: Last message|"I'll decide later"|Goodwill|

---

## 2. Structure

### 2.1 Trigger

- **Metric:** Checkout Started (Shopify integration).
- NOT Added to Cart. A started checkout is a stronger signal.

### 2.2 Who enters, who is blocked, when they leave

|Rule|Setting|Why|
|---|---|---|
|**Enter**|Started checkout|Strongest buying signal|
|**Profile Filters**|Placed Order AND (Opened Email OR Opened Text)|Stops messages after an order. Exact settings to confirm (see 5.2)|
|**Leave at 13h**|Cannot receive email AND cannot receive SMS|No channel left to reach them|
|**Leave at 25h**|No email opened since entering|Non-openers get one last email, THEN stop|
|**Consent**|Klaviyo checks channel consent on every message|Marketing message, never transactional|

**Note:** filters are checked before each message, NOT all the time. IF a shopper buys during a wait, THEN they leave quietly at the next check.

### 2.3 Flow map

\`\`\`
Checkout Started
   |   Filter: Placed Order AND (Opened Email OR Opened Text)
   v
Wait 1h 30m
   v
MESSAGE 1: Email                                    (1h 30m)
   v
Wait 11h 30m
   v
Can receive email OR SMS?
   |-- NO  --> leave flow
   |-- YES
         v
MESSAGE 2: Email OR SMS                             (13h)
   v
Wait 12h
   v
Opened an email since starting this flow?
   |-- NO  --> MESSAGE 4: Email 2 --> leave flow    (25h)
   |-- YES --> MESSAGE 3: Email 1                   (25h)
                 v
Wait 13h
   v
Placed Order = 1 time over all time?
   |-- YES --> MESSAGE 5: Discount email            (38h)
   |-- NO  --> MESSAGE 6: Reminder email            (38h)
                 v
              (merge)
                 v
Wait 12h
   v
Can receive SMS?
   |-- YES --> MESSAGE 7: SMS                       (50h)
   |-- NO  --> MESSAGE 8: Last email                (50h)
\`\`\`

### 2.4 Messages

|#|Sent at|Channel|Job|Offer|
|---|---|---|---|---|
|1|1h 30m|Email|Remind. Fix anything that broke.|None|
|2|13h|Email OR SMS|To confirm (see 5.2)|None|
|3|25h|Email|For openers (content to confirm)|None|
|4|25h|Email|For non-openers (content to confirm)|None|
|5|38h|Email|Close on price|Discount OR free delivery|
|6|38h|Email|Close on convenience|None|
|7|50h|SMS|One text at the decision point|None|
|8|50h|Email|Last reminder AND ask why|None|

**Templates are custom built**.

#### Reminder: Message 1

- **Design:** plain founder note.
- **Subject A:** *You left something at the counter*
- **Subject B:** *Still warm, {{ first_name }}*
- **Preview:** *Your cart is saved. One tap brings it back.*
- **Contains:** greeting, one-line message, cart, button "Finish checkout", "reply if something broke" line, signature, trust bar.
- **A/B:** with vs without a review + rating after the button.

#### Trust email (template built, step to confirm)

- **Subject A:** *Roasted the day it ships* · **Subject B:** *Why our bag has a date on it*
- **Preview:** *The supermarket bag will not tell you. Ours does.*
- **Contains:** headline "Every bag has a date on it", roast-date stamp, roast and ship facts, cart, button, review, rating.
- **A/B:** review below the argument vs under the headline.

#### Coffee guide email (template built, step to confirm)

- **Subject A:** *Not sure which grind? 20-second answer* · **Subject B:** *Drip, French press, or moka pot?*
- **Contains:** grind-by-gear table, four roast notes, First Bag Promise box, cart, button.
- **Grind table:** drip/pour-over → Medium · French press → Coarse · moka/espresso → Fine · no gear → Fine
- **A/B:** grind table leads vs First Bag Promise leads.

#### Apparel fit email (template built, step to confirm)

- **Subject A:** *Between sizes? Take the bigger one* · **Subject B:** *Fits like the shirt you already reach for*
- **Contains:** fabric facts, size chart S–3XL, free exchange box, review, cart, button.
- **A/B:** full size chart vs one sizing rule + link.

#### Discount: Message 5

- **Offer A:** FIRSTPOUR10, 10% off the first order, ends in 24h.
- **Offer B:** SHIPFREE, free delivery on this order, ends in 24h.
- **Subject A:** *10% on your first bag, ends tomorrow 9PM* · **Subject B:** *A reason to stop thinking about it*
- **Contains:** code box, button, why-we-rarely-discount note, cash-on-delivery box, cart, second button.
- **Version A only:** shipping nudge IF cart is under $27. Removed in B, BECAUSE B already gives free delivery.
- **A/B:** offer type. Both cost about the same ($1.75 vs $1.70–$2.85), SO the test measures the framing, NOT the size of the offer.

#### Reminder for buyers: Message 6

- **Subject A:** *Same blend as last time?* · **Subject B:** *Your usual is still in the cart*
- **Version A:** cart, button, points balance box, reorder line, signature.
- **Version B:** cart, button, reorder timing leads, no points box.
- **A/B:** points balance vs reorder timing.

#### SMS: Message 7

- **Version A:**
    \`Lai's Coffee: last reminder, your cart is still saved. Finish here: {{ event.extra.checkout_url }} Reply STOP to opt out.\`
- **Version B:**
    \`Lai's Coffee: still thinking about the {{ event.extra.line_items.0.title }}? Your cart is saved: {{ event.extra.checkout_url }} Reply STOP to opt out.\`
- **No offer,** BECAUSE the text reaches every buyer type AND FIRSTPOUR10 is for first orders only.
- **A/B:** general reminder vs product name.

#### Last email: Message 8

- **Subject A:** *Last email about this* · **Subject B:** *What stopped you?*
- **Contains:** "last email" line, cart, button, four reply buttons (Too expensive / Shipping cost / Wrong item / Just browsing), closing line.
- **Reply buttons:** \`mailto:hello@laiscoffee.ph?subject=<reason>\`
- **A/B:** deadline first vs question first. Same blocks, new order.

### 2.5 Smart Sending

Smart Sending skips a message IF the shopper got another message on the same channel inside the window (default 16 hours). Email and SMS have separate windows. A skip is logged as a skip, NOT an error.

**Rule:** ON is allowed ONLY IF the gap since the last same-channel message is more than 16h, So it doesn't unintentionally skips messages which hurts revenue.

|#|Message|Gap on the same channel|Setting|Why|
|---|---|---|---|---|
|1|First email|First message|**OFF**|Highest intent. Must land even after a campaign.|
|2|Email version|11h 30m|**OFF**|Under 16h. ON would skip it.|
|2|SMS version|First text|**ON**|A text costs money. Never use two in one flow.|
|3–4|Email 1 / Email 2|12h|**OFF**|Under 16h.|
|5–6|Discount / Reminder|13h|**OFF**|Under 16h.|
|7|SMS|37h OR first text|**ON**|Safe. Blocks a same-day SMS campaign.|
|8|Last email|12h|**OFF**|Under 16h.|

**Result:** after Message 1, NO email is protected from campaign overlap. See planned changes (8).

---

## 3. Variables and data

### 3.1 Data the flow needs

- Checkout Started event: checkout link, items, cart total, product category
- Placed Order count, over all time AND since entering the flow
- Email opens AND text opens
- First name
- Email consent, SMS consent, phone number
- Points balance (profile property)

### 3.2 Merge tags

Tag paths can change with the integration version. Each one MUST be checked on a real profile before launch. A blank tag is never sent.

|Purpose|Tag|
|---|---|
|Checkout link|\`{{ event.extra.checkout_url }}\`|
|Cart items|\`{{ event.extra.line_items }}\`|
|First item name|\`{{ event.extra.line_items.0.title }}\`|
|Cart total|\`{{ event.$value }}\`|
|First name|\`{{ first_name\\|default:"there" }}\`|
|Points balance|\`{{ person.beans_balance\\|default:"0" }}\`|

Klaviyo's built-in cart block is preferred over hand-coded loops where it works.

### 3.3 Placeholders and setup

|Item|Count|Where|
|---|---|---|
|Size guide link \`https://laiscoffee.ph/pages/size-guide\`|1|Apparel fit emails|
|Discount codes FIRSTPOUR10 AND SHIPFREE|2|Must be created in Shopify, with expiry matching the email|

---

## 4. Decisions

|Choice|Because|Not chosen|
|---|---|---|
|Trigger on Checkout Started|Stronger signal than a cart add|Added to Cart|
|No discount in the first message|The cause is usually a small problem. A code pays shoppers who were coming back anyway AND teaches them that leaving earns codes.|Code at hour one|
|Trust before guidance before money|Free reasons are tried first. Margin is spent only after they fail.|Discount early|
|Coffee guide and apparel fit are separate emails|Coffee doubt is taste. Apparel doubt is size. One email cannot answer both clearly.|One general email|
|Offer split on buying history, NOT cart value|A past buyer already trusts the store. A discount only lowers the price of a sale already won.|Split on cart value|
|Past buyers get points, NOT codes|Keeps margin AND rewards loyalty|Codes for everyone|
|No offer in the SMS|It reaches every buyer type, AND the code is first-order only|Code by text|
|SMS near the end|A text interrupts AND costs money. Spend it once, at the decision point.|SMS early|
|Last email for non-SMS shoppers|Most profiles have no SMS consent AND would get no closing message|SMS only|
|Non-openers stop after 25h|Stops mailing people who ignore the flow|Full sequence for everyone|
|Exit if no channel can reach the shopper|Ends the flow early for people who cannot receive anything|Let them run through|
|SMS text uses straight quotes|One curly quote cuts a segment from 160 to 70 characters|Curly quotes|

### 4.1 A/B tests

Each test changes ONE thing. Everything else stays the same.

|Message|What changes|What stays the same|
|---|---|---|
|Reminder|Review block: yes vs no|Subject, send time, cart, button|
|Trust|Review position|Subject, send time, blocks|
|Coffee guide|What leads: table vs promise|Subject, send time, blocks|
|Apparel fit|Full chart vs one rule + link|Subject, send time|
|Discount|10% off vs free delivery|Subject, send time, expiry|
|Buyer reminder|Points vs reorder timing|Subject, send time, cart|
|SMS|General vs product name|Brand line, STOP line, link|
|Last email|Deadline first vs question first|All blocks|

**Disclosed side changes:**

- Discount B drops the shipping nudge, BECAUSE B already gives free delivery.
- In the coffee guide AND buyer reminder, the headline changes with what leads, BECAUSE the headline announces it.

### 4.2 Test rules

- One live test at a time across the whole account. ACR and BA share one queue.
- Queue order for ACR: Discount 1st · Reminder 2nd · Coffee guide 3rd · SMS 4th · Trust 7th · Last email 8th · Apparel fit 9th · Buyer reminder 10th.
- Split 50/50. Never 80/20.
- Subject lines stay the same inside a body test. Subject tests run separately.
- Under ~200 shoppers per version → no call.
- Clear click gap, both versions past ~400 → early call. Promote AND keep watching.
- Small gap in order rate → no call at this volume.
- Result flips week to week → no effect.
- "No winner" is a result. It is logged.

---

## 5. Unverified: fix before real use

### 5.1 Copy claims (sample data)

Replace ALL of these with real brand facts before a real send:

- Roast-date stamp AND roast and ship claims
- Reviews AND ratings
- First Bag Promise AND free exchange promise
- Fabric facts (180gsm combed cotton, pre-shrunk, unisex cut) AND model size
- Cash-on-delivery note AND why-we-rarely-discount note
- Points program ("Lai's Beans")
- Prices AND costs: $27 threshold, $1.75, $17.50 average order, $1.70–$2.85 delivery
- "About 75% of profiles have no SMS consent": check against the real list

### 5.2 Build settings to confirm

- **Profile filter:** exact counts AND time frames for Placed Order, Opened Email, Opened Text
- **Message 2:** is it one card OR two messages? Which template does each use?
- **Messages 3 and 4:** which templates serve Email 1 AND Email 2?

### 5.3 Checks

- Every merge tag shows a real value in preview
- Size guide link replaced
- FIRSTPOUR10 AND SHIPFREE created in Shopify, with matching expiry
- Discount subject says "ends tomorrow 9PM" while the offer says 24h. These match ONLY for some send times. Fix one.
- "Can receive SMS" checks BOTH consent AND phone number
- Quiet hours Klaviyo applies to PH numbers (target: 10:00–20:00 local)
- Both SMS versions fit 1 segment with real product names AND links
- Klaviyo short links used in SMS
- Whether Klaviyo picks A/B winners in flows automatically for this account
- Smart Sending window for this account is still 16h
- Consent basis noted per market, AND signed off by the client's legal counsel

---

## 6. Good to know

- **Opens are unreliable.** Apple Mail Privacy Protection can record opens the shopper never made. The 25h split AND the entry filter both rely on opens.
- IF the filter requires an open to enter, THEN new shoppers who never opened an email are blocked from the first reminder.
- A shopper can get 5 messages in about 48-50 hours.
- After Message 1, Smart Sending cannot protect any email from campaign overlap.
- A small list may never reach a clear A/B result.
- Practice store. No live numbers yet, AND no results are promised.
- Consent rules follow the shopper's country. For legal guidance, refer to the client's legal counsel.

---

## 7. Versions

|Version|Date|Change|
|---|---|---|
|1.0|15 Sep 2026|First build, fully established this day, as documented above|
|1.1|Planned|Sharper targeting, smarter timing, full spec alignment|
|1.2|Planned|n8n add-ons|

### Coming in 1.1

1. **Sharper offer targeting**
   The first-order discount goes to shoppers with **0 past orders**. Past buyers get points AND reorder timing instead.
   BENEFIT: every dollar of discount goes to a true first-time buyer.
2. **Refined entry filter**
   Every new checkout starter gets the first reminder, AND anyone who orders leaves at once.
   BENEFIT: the flow reaches more new shoppers.
3. **Visible safeguards**
   Adds "profile not suppressed" AND "email consent present" to the flow itself.
   BENEFIT: anyone opening the flow sees the protections at a glance.
4. **Stronger SMS routing**
   Texts go only to profiles with SMS consent AND a phone number.
   BENEFIT: every text has a real place to land.
5. **Smarter timing**
   Offer moves to 48h, last message to 72h.
   BENEFIT: waits over 16h let Smart Sending shield these emails from campaign overlap.
6. **Product-based guidance at 25h**
   Coffee shoppers get the grind guide; apparel shoppers get the fit guide. Both templates are already built. Compared against the current open-based path, and the stronger one stays.
   BENEFIT: each shopper gets answers for what's in their cart.
7. **Fresher audience** (optional)
   Shoppers enter once per 30 days.
   BENEFIT: frequent visitors aren't over-messaged.

### Coming in 1.2 (n8n)

1. **Unique codes with real deadlines**: one single-use code per shopper, with an exact end time.
2. **Sorted shopper feedback**: "What stopped you?" replies are grouped and counted automatically.
3. **Daily health alerts**: IF sends drop, THEN an alert goes out.

Older versions are kept, NOT deleted.

Goodluck building!` },
            { name: "V1.1", text: `# V1.1 · 3 Email abandoned cart recovery for maximal revenue and ROI (Connected with 2 flow)

**Version:** V1.1 · 10 Nov 2026

## Card details

| | |
|---|---|
|**Title**|3 Email abandoned cart recovery for maximal revenue and ROI (Connected with 2 flow)|
|**Card summary**|Removes one doubt and Gives reasons to buy at every message, discounts are spent last and least.|
|**Details line**|Klaviyo · Checkout Started · email · 3 emails per shopper · two discount levels|
|**Date**|2026-11-10|
|**Tag**|Klaviyo grouped flows|

## Story

### The problem

A shopper starts checkout and leaves before the purchase this is the strongest buying signal a store can have. The usual fix is a little push and a discount in email, which helps shoppers decide. but the problem is we will lose revenue too much if we will not control who gets less discount.

### What I built

- A reason ladder in 3 emails: each message removes one reason not to buy, cheapest first. It starts with a reminder, then one free reason (trust or guidance), and money comes last.
- Filters on email engagement, consent and buying history: shoppers who ignored every email for 90 days are skipped, first-time shoppers are still reached, and the second and third emails go only to people in the email list. Therefore we receive the least complaints possible.
- One discount email at the end: 20% off for shoppers with a fulfilled order in the last 7 days or VIPs, and 10% off for everyone else, so the bigger discount only goes where it cannot hurt ROI.
- 4 A/B tests, each changing one thing, judged on placed order rate rather than clicks.
- This specific flow can be optimized using n8n if needed.

### Result

Built and tested with synthetic data and is documented enough to be rebuilt from scratch or to be maintained by someone who doesn't know anything about it.

### What skills it shows for me

- Shows that I strongly understand Klaviyo and Email marketing fully.
- Shows my strategical thinking. (Which is beneficial for real marketing)
- Shows I understand customer behavior.
- Shows my data based decision making.
- Shows my logical thinking is highly fitted to the role.

## Flow screenshots

![The abandoned checkout flow, part 1: trigger with profile filters, 1 hour 30 minute wait, E1 First nudge, 22 hour 30 minute wait, Subscribed to email list split](assets/case2-acr-v11-flow-1.png)

![The abandoned checkout flow, part 2: Subscribed to email list split, the Yes path (in the OB email subscriber list) to E2 Second nudge plus a little push, a 1 day wait, the Fulfilled order in the last 7 days or VIP split, and the Everyone else path that ends the flow](assets/case2-acr-v11b-flow-2.png)

![The abandoned checkout flow, part 3: Fulfilled order in the last 7 days or VIP split, the Yes path to E3A What roast with a 20% off message and the end, the Everyone else path to E3B What size with a 10% off message and the end](assets/case2-acr-v11c-flow-3.png)

---
# Abandoned Checkout Recovery Flow for Lai's Coffee (Lai's Coffee is a synthetic data only)

**Tools:** Shopify · Klaviyo · Email
**Version:** 1.1 · 10 Nov 2026 (first build 1.0 · 15 Sep 2026)

---

## At a glance

|                         |                                                                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Goal**                | Have the highest chance of recovering a checkout using optimal email timing and while protecting ROI when using discounts. |
| **Trigger**             | Checkout Started                                                                                                           |
| **Messages per person** | 3 emails                                                                                                                   |
| **Channels**            | Email                                                                                                                      |
| **Discounts**           | Last email only: 20% for recent buyers and VIPs, 10% for everyone else                                                     |
| **Success metric**      | Placed order rate for this flow                                                                                            |

---

## 1. Purpose

- **Why it exists:** a shopper started checkout AND left before paying. This is the strongest buying signal a store has.
- **How it works:** each message removes one reason not to buy, cheapest reason first. Money (a discount) is spent last and least.
- **Where it sits:** one part of a larger email and SMS system.
    - **Browse Abandonment (BA)** handles shoppers who only viewed a product. BA goes silent once checkout starts.
    - **Post-Purchase** handles replenishment of products using predictive product life data, IF product is predicted to be almost gone THEN emails will be sent, THEREFORE encouraging them to buy again.
- **How it is judged:** placed order rate.

### The reason ladder

|Stage|Doubts/Reasons it removes from customer|Cost to the store|
|---|---|---|
|E1: First reminder|"Something broke" OR "I got distracted"|None|
|E2: Trust OR guidance (template to confirm, see 5.2)|"Why this brand?" OR "Will I pick the wrong thing?"|None|
|E3: Offer|"Is it worth the money?"|Margin|

---

## 2. Structure

### 2.1 Trigger

- **Metric:** Checkout Started (Shopify integration).

### 2.2 Who enters, who is blocked, when they leave

| Rule                      | Setting                                                                                               | Why                                                                              |
| ------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Enter**                 | Started checkout                                                                                      | Strongest buying signal                                                          |
| **Flow/profile filter 1** | Placed Order zero times since starting this flow AND Person can receive email marketing               | Stops messages after an order AND skips anyone who cannot be emailed             |
| **Flow/profile filter 2** | Opened OR Clicked Email at least once in the last 90 days, OR Received Email zero times over all time | Skips people who ignore email, but still reaches first-time shoppers (see below) |
| **Before Email 2**        | Is in the \`Email list\`                                                                                | Explicit consent is needed for Emails 2 and 3. Everyone else leaves here.        |
| **Leave after Email 3**   | Both branches end                                                                                     | The flow is done after the discount email                                        |
| **Consent**               | Klaviyo checks channel consent on every message                                                       | we send Marketing message not transactional                                      |

**Note:** filters are checked before each message. IF a shopper buys during a wait, THEN they leave quietly at the next check.

#### Why "Received Email zero times over all time" is in filter 2

- It means this is their first time checking out. We cannot tell if they are inactive or not, because they probably haven't opened an email yet.
- Without it, a first-time checkout shopper would never get a message, because they have no opens or clicks yet.
- Most importantly, customers who received emails but did nothing with them for 90 days are NOT messaged. They are probably not interested anymore, and sending to them hurts deliverability.
- An engaged segment can do the same job, but it must also include "received zero emails over all time" for maximum potential.

#### Why the "Email list" check is different from "can receive email marketing"

- "Can receive email marketing" only accepts people who have NOT unsubscribed. The list check is stricter: it means they explicitly subscribed to the email list.
- The list check sits before Email 2, so it covers Emails 2 AND 3, which need their explicit consent for deliverability.
- **Important:** IF the client sells to the EU, the UK, or anywhere else that requires opt-in (an active yes to marketing), THEN this list check MUST be moved into the flow/profile filter, so even Email 1 needs it.
- This build only targets countries with an opt-out system. About 90% of countries use an opt-in system, so be careful with this filter. It protects deliverability.

### 2.3 Flow map

\`\`\`
Checkout Started
   |   Flow filter 1: Placed Order zero times since starting this flow
   |                  AND Person can receive email marketing
   |   Flow filter 2: Opened OR Clicked Email at least once in the last 90 days
   |                  OR Received Email zero times over all time
   v
Wait 1h 30m
   v
EMAIL 1: First nudge                                   (1h 30m)
   v
Wait 22h 30m
   v
In the OB | email list?
   |-- NO  --> leave flow
   |-- YES
         v
EMAIL 2: Trust OR guidance OR any little push            (24h)
   v
Wait 24h
   v
Fulfilled order in the last 7 days OR VIP?
   |-- YES --> EMAIL 3A: Discount email, 20% off    (48h) --> leave flow
   |-- NO  --> EMAIL 3B: Discount email, 10% off    (48h) --> leave flow
\`\`\`

**Timing:** Email 2 must land 24 hours after the checkout, because that is more likely their free time of the day. The wait after Email 1 is now 22h 30m (it was 11h 30m). Email 3 lands 24 hours after that, at 48h, for the same reason.

### 2.4 Messages

| #   | Sent at | Channel | Job                                                             | Offer   |
| --- | ------- | ------- | --------------------------------------------------------------- | ------- |
| 1   | 1h 30m  | Email   | Remind. Fix anything that broke.                                | None    |
| 2   | 24h     | Email   | Trust OR guidance OR ANY push                                   | None    |
| 3A  | 48h     | Email   | Close on price, for a fulfilled order in the last 7 days OR VIP | 20% off |
| 3B  | 48h     | Email   | Close on price, for everyone else                               | 10% off |


### 2.5 Smart Sending

Smart Sending skips a message IF the shopper got another message on the same channel inside the window (default 16 hours). Email and SMS have separate windows. A skip is logged as a skip, NOT an error.

|#|Message|Gap on the same channel|Setting|Why|
|---|---|---|---|---|
|1|First email|First message|**OFF**|Highest intent. Must land even after a campaign.|
|2|Second email|22h 30m|**ON**|Over 16h, so ON is safe.|
|3A–3B|Both third emails|24h|**ON**|Over 16h, so ON is safe.|

**Result:** Emails 2 AND 3 are protected from campaign overlap. Only Email 1 is not, ON PURPOSE.

---

## 3. Variables and data

### 3.1 Data the flow needs

- Checkout Started event: checkout link, items, cart total, product category
- Placed Order count since entering the flow
- Email opens AND clicks in the last 90 days, AND the number of emails received over all time
- Membership of the Email list
- Fulfilled Order in the last 7 days, AND VIP status
- Email consent (can receive email marketing)


---

## 4. Decisions

| Choice                                                          | Because                                                                                                                                                                              |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| No discount in the first message                                | The cause is usually a small problem. A code pays shoppers who were coming back anyways.                                                                                             |
| Trust before guidance before money                              | Free reasons are tried first. Margin is spent only after they fail.                                                                                                                  |
| Offer split on a recent fulfilled order OR VIP, NOT cart value  | We already got revenue from these shoppers, SO 20% will not hurt revenue. Everyone else gets half (10%) because we have not benefited enough from them yet AND more, would hurt ROI. |
| 3 emails instead of 4                                           | More emails raise the risk of spam and complaints, which hurts deliverability                                                                                                        |
| Email 2 at 24h AND Email 3 at 48h                               | 24 hours after the checkout is more likely their free time of the day, SO each email lands at that same time                                                                         |
| Filter 2 also accepts "Received Email zero times over all time" | First-time shoppers have not opened an email yet AND would never get a message otherwise                                                                                             |
| Stop people with no opens or clicks in 90 days                  | They are probably not interested anymore, AND emailing them hurts deliverability                                                                                                     |
| "In Email list" check before Email 2                            | Explicit consent is needed for Emails 2 AND 3 for deliverability                                                                                                                     |


### 4.1 A/B tests

Each test changes ONE thing. Everything else stays the same.

| Message     | What changes           | What exactly?                           |
| ----------- | ---------------------- | --------------------------------------- |
| E1 Reminder | Subject line           | Reminder vs Urgency                     |
| Trust       | Section block sequence | Social proof first vs Informative first |



---

## 5. Versions

| Version | Date        | Change                                                                                                                                    |
| ------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 1.0     | 15 Sep 2026 | First build, fully established this day, as documented above                                                                              |
| 1.1     | 10 Nov 2026 | New flow filters, 3 emails instead of 4+, new timing, consent check before Email 2, split discount in Email 3, new Smart Sending settings |
| 1.2     | Planned     | n8n add-ons                                                                                                                               |

### What changed in 1.1

1. **New flow/profile filters**
   Placed Order zero times since starting the flow AND Person can receive email marketing. Plus: opened OR clicked an email in the last 90 days, OR received zero emails over all time.
   BENEFIT: first-time shoppers are reached, AND people who ignore email for 90 days are not mailed, which protects deliverability.
2. **3 emails instead of 4**
   The opener split, the SMS step and the last two emails are removed.
   BENEFIT: less risk of spam and complaints.
3. **Timing at 24h AND 48h**
   The wait after Email 1 goes from 11h 30m to 22h 30m, so Email 2 lands 24 hours after the checkout. Email 3 lands at 48h.
   BENEFIT: each email lands at a time of day when they are more likely free.
4. **Explicit consent check before Email 2**
   Only people in the OB | email list continue.
   BENEFIT: Emails 2 AND 3 only go to shoppers who explicitly subscribed.
5. **Split discount in Email 3**
   A fulfilled order in the last 7 days OR VIP gets 20%. Everyone else gets 10%. Both branches then end.
   BENEFIT: the bigger discount goes to people we already earned revenue from, so it does not hurt ROI.
6. **Smart Sending**
   Email 1 OFF. Email 2 ON. Both versions of Email 3 ON.
   BENEFIT: Emails 2 AND 3 are protected from campaign overlap.

**Not part of 1.1:** the SMS routing, the product-based guidance at 25h and the optional "once per 30 days" audience from the earlier plan.

### Coming in 1.2 (n8n)

1. **Unique codes with real deadlines**: one single-use code per shopper, with an exact end time.
2. **Sorted shopper feedback**: "What stopped you?" replies are grouped and counted automatically.
3. **Daily health alerts**: IF sends drop, THEN an alert goes out.

Older versions are kept, NOT deleted.

Goodluck building!` }
          ]
        }
      ]
    },

    {
      tag: "Klaviyo grouped flows",
      title: "Browse Abandonment Routed by Buying History, Clicks and SMS Consent",
      slug: "browse-abandonment-routed-history-clicks-sms",
      type: "flow",                       // flow | campaign | email-design
      date: "2026-11-15",
      blurb: "Every shopper gets a second chance, and only new shoppers get an offer",
      photo: "assets/case3-ba-flow-1.png",
      thumbnailAlt: "The top of the browse abandonment flow: the Viewed Product trigger, a 2 hour wait, and the split by buying history",
      meta: "Klaviyo · Viewed Product · 6 emails, 2 SMS · exactly 2 per shopper · free US shipping for new shoppers only",
      video: "",
      poster: "",
      photos: [
        { src: "assets/case3-ba-flow-1.png", alt: "The browse abandonment flow, part 1: trigger on Viewed Product, 2 hour wait, then the split that sends past buyers and new shoppers down separate paths." },
        { src: "assets/case3-ba-flow-2.png", alt: "The browse abandonment flow, part 2: E1 for each group, a 1 day wait, then click and SMS checks that route each shopper to an SMS, a proof email or a new-angle email.", wide: true }
      ],
      story: [
        {
          heading: "The problem",
          text: "A shopper looks at a product AND leaves. The old flow sent one email. BUT IF they didn’t click it, THEN the flow just ended. That’s most of the shoppers, SO most of them got only one chance to come back. A loyal buyer and a first-time visitor also got the same message, even though they need different things to buy."
        },
        {
          heading: "What I built",
          bullets: [
            "A Viewed Product trigger with filters that hand the shopper to the cart flow or ESO ACR the moment they show higher intent.",
            "A split by buying history. Past buyers get NO offer. New shoppers get free US shipping, BUT ONLY in the second message.",
            "A click and SMS check before message 2. Clickers get proof OR a text, and non-clickers get a fresh angle instead of nothing.",
            "Exactly 2 messages per shopper, with Smart Sending and SMS quiet hours on."
          ]
        },
        {
          text: "So basically every shopper gets a second chance, AND the offer only goes where it helps the order happen."
        },
        {
          heading: "Result",
          text: "Built on a practice store with sample brand data. The flow, every message and the SMS copy are documented well enough to rebuild from scratch. No live results yet, and none are promised."
        },
        {
          heading: "Documentation",
          text: `# Browse Abandonment Flow for Off-Bolt

**Tools:** Shopify · Klaviyo · Email + SMS
**Status:** Built on a practice store.

---

## At a glance

| | |
|---|---|
|**Goal**|Product view to order|
|**Trigger**|Viewed Product|
|**Messages per person**|Exactly 2, unless they buy or move to cart or checkout first|
|**Channels**|Email, then SMS OR email|
|**Offer**|Free US shipping (OFFBOLT1) for new shoppers, message 2 only|
|**Success metric**|Placed order rate for this flow|

---

## 1. Purpose

- **Why it exists:** A shopper looked at a product AND left without buying. This flow sends one reminder, THEN one more reason to decide, built around who they are.
- **Who it’s for:** Known shoppers only. Klaviyo must already know who the browser is.
- **Where it sits:** It’s one part of a larger email and SMS system.
    - **Cart flow** handles shoppers who added to cart.
    - **ESO ACR** handles shoppers who started checkout.
    - **Welcome flow** owns the OFFBOLT1 offer. This flow reuses it.
- **How it’s judged:** Placed order rate. Clicks are NOT the goal. A click with no order is nothing.

---

## 2. Problem and solution

**Problem in simple terms:**
A shopper looks at a product AND leaves without adding it to cart. The old flow sent them one email. BUT IF they didn’t click it, THEN the flow just ended. That’s most of the shoppers, so most of them got only one chance to come back. Secondly, a loyal buyer and a first-time visitor got the exact same message. The loyal buyer doesn’t need a push to buy, and the new visitor doesn’t trust us yet. SO basically we lose orders from the people we stopped messaging, AND we risk giving offers to people who would buy anyway.

**Problem in technical terms:**
- The “Clicked Email or Subscribed?” split sent everyone who didn’t click to “Everyone else,” and that path ended the flow. Non-clickers are usually the biggest group, SO most shoppers stopped at 1 message.
- There’s no split by customer status, SO new and returning shoppers can’t get a different message or a different offer.
- IF the flow filters don’t have Placed Order, Started Checkout AND Added to Cart at 0 since starting this flow, THEN a shopper can get browse emails while the cart flow or ESO ACR is already working on them.
- The SMS split was unclear. It must check “can receive SMS marketing” so we ONLY text people who said yes.
- The first email waited 4 hours, SO the shopper’s interest had more time to cool down.

**Solution in simple terms:**
How does this flow fix that? First, we find out who the shopper is: did they buy from us before, or are they new? THEN every shopper gets 2 messages, unless they buy or move to cart or checkout first. Returning buyers get a reminder with NO offer. Why? They already trust us. New shoppers get free US shipping, BUT ONLY in the second message, so anyone who buys after the first one pays full shipping. Secondly, IF they clicked, THEN we show them proof, like reviews and fit notes, so they think “Other people like it, it must be good.” And IF they said yes to SMS, they get a text instead. BUT IF they didn’t click, we send a fresh angle with the product they viewed plus our bestsellers. So basically every shopper gets a second chance, AND the offer only goes where it helps the order happen, SO we get more revenue without losing margin.

**Solution in technical terms:**
- **Entry:** Viewed Product trigger. Filters: Placed Order 0 times since starting this flow AND Started Checkout 0 times AND Added to Cart 0 times AND hasn’t been in this flow in the last 30 days. Then we wait 2 hours.
- **Split 1:** Placed Order at least once over all time → Returning. Everyone else → New.
- **Splits 2 and 3:** Klaviyo checks paths from top to bottom, and the first match wins:
    - Clicked AND can receive SMS → SMS
    - Clicked → Proof email
    - Everyone else → New-angle email
- **Offer:** Returning shoppers get NONE. New shoppers get OFFBOLT1 ONLY in message 2.
- **Controls:** Smart Sending ON, SMS quiet hours ON, AND dynamic tags in every message, so each shopper sees the exact product they viewed.

---

## 3. Structure

### 3.1 Trigger

- **Metric:** Viewed Product (Klaviyo onsite tracking).
- The flow fires ONLY IF Klaviyo has identified the browser.
- Klaviyo identifies a browser after an email click, a form submit, OR a login or checkout.
- Anonymous visitors never enter, BECAUSE they’re unknown.

### 3.2 Who enters, who’s blocked, when they leave

|Rule|Setting|Why|
|---|---|---|
|**Enter**|Viewed a product|The earliest buying signal the store can act on|
|**Block**|Placed Order, Started Checkout OR Added to Cart since starting this flow|A higher-intent flow takes over, OR they already bought|
|**Cooldown**|Hasn’t been in this flow in the last 30 days|At most 2 messages from this flow per 30 days|
|**Consent**|Klaviyo checks email and SMS consent on every marketing message|We ONLY message people who said yes|

**Note:** Filters are checked before each message, NOT all the time. IF a shopper buys during a wait, THEN they leave quietly at the next check.

### 3.3 Flow map

\`\`\`
Viewed Product
   |  Filters: Placed Order, Started Checkout, Added to Cart = 0 since starting
   |           AND not in this flow in the last 30 days
   v
Wait 2 hours
   v
S1 | Customer Status: Bought Before?
   |-- Returning --> E1-R --> Wait 1 day --> S2 | Returning: Clicked E1 + SMS Eligible?
   |                                           |-- Clicked + SMS    --> SMS2-R
   |                                           |-- Clicked          --> E2-R-Proof
   |                                           |-- Everyone else    --> E2-R-Angle
   |
   |-- New ------> E1-N --> Wait 1 day --> S3 | New: Clicked E1 + SMS Eligible?
                                               |-- Clicked + SMS    --> SMS2-N
                                               |-- Clicked          --> E2-N-Proof
                                               |-- Everyone else    --> E2-N-Offer
\`\`\`

### 3.4 Split and path names

|Split|Path|Name|
|---|---|---|
|S1 \\| Customer Status: Bought Before?|Path 1|Returning \\| Placed Order ≥1 all time|
| |Everyone else|New \\| Never ordered|
|S2 \\| Returning: Clicked E1 + SMS Eligible?|Path 1|Returning \\| Clicked + SMS → SMS2-R|
| |Path 2|Returning \\| Clicked + No SMS → E2-R-Proof|
| |Everyone else|Returning \\| No Click → E2-R-Angle|
|S3 \\| New: Clicked E1 + SMS Eligible?|Path 1|New \\| Clicked + SMS → SMS2-N|
| |Path 2|New \\| Clicked + No SMS → E2-N-Proof|
| |Everyone else|New \\| No Click → E2-N-Offer|

### 3.5 Path logic

#### Path 0: Entry gate (applies to all paths)

**Condition criteria:**
- Trigger: Viewed Product
- AND Placed Order zero times since starting this flow
- AND Started Checkout zero times since starting this flow
- AND Added to Cart zero times since starting this flow, ONLY IF you run an Added to Cart flow. Use the Shopify-branded metric.
- AND hasn’t been in this flow in the last 30 days
- THEN wait 2 hours. Klaviyo’s minimum is 1 hour. The 2-hour choice is a judgment call.
- Smart Sending ON for every message
- Split rule: Splits check paths top-down, and the first match wins. THEREFORE “Clicked AND SMS” MUST sit above “Clicked”.

**Reasoning:**
What do these filters do? They check the shopper again before every step. IF they buy, THEN they exit right away. IF they add to cart or start checkout, THEN the cart flow or ESO ACR takes over, since those flows are made for a higher intent. So we never send a browse email to someone who’s already closer to ordering.

Secondly, the 30-day filter means one shopper gets at most 2 messages from this flow in 30 days. Why does that matter? Too many emails lower engagement, and low engagement hurts deliverability, which hurts future revenue.

And the 2-hour wait instead of 4? The shopper still remembers the product, SO the email lands while they still want it.

#### Path 1: Returning · Clicked · SMS-eligible

**Condition criteria:**
- IF Placed Order at least once over all time
- AND Clicked Email at least once since starting this flow
- AND can receive SMS marketing
- THEN E1-R (Day 0) → SMS2-R (Day 1) with a product link and no offer

**Reasoning:**
This is our hottest shopper. They bought from us before, AND they clicked the first email. SO we use SMS, since it’s the fastest way to reach them while they’re still deciding.

Why no offer? Klaviyo itself says you may not want a discount for repeat buyers, AND Off-Bolt gives returning customers early access instead of codes. They already trust us, so an offer just cuts our margin on an order that was coming anyway.

IF quiet hours delay the SMS a bit, that’s fine. Email and SMS have separate Smart Sending windows, SO the first email won’t block the text.

#### Path 2: Returning · Clicked · NOT SMS-eligible

**Condition criteria:**
- IF Placed Order at least once over all time
- AND Clicked Email at least once since starting this flow
- AND NOT matched by Path 1
- THEN E1-R → E2-R-Proof: reviews, fit notes, and a pairing with their past order. No offer.

**Reasoning:**
They clicked, so they saw the product, BUT they still didn’t add it to cart. What’s stopping them? Probably doubt about the product itself, not that they forgot it.

SO this email removes that doubt with reviews, fit notes and how it pairs with what they already bought. Once they see it, they think “Other people love this, and it goes with what I have.” And since they’re a past buyer, we keep it at full price, SO the order brings full margin.

#### Path 3: Returning · NOT clicked

**Condition criteria:**
- IF Placed Order at least once over all time
- AND NOT clicked (falls to “Everyone else”)
- THEN E1-R → E2-R-Angle: new subject line, the viewed product, plus a recently viewed or bestsellers block. No offer.

**Reasoning:**
In the old flow, these shoppers got nothing after the first email. BUT this is usually the biggest group, SO this is where most of the lost revenue is.

Why a new angle and not the same reminder? Because the first one didn’t get a click. IF we repeat it, THEN we’ll probably get the same result. So we show them the product again plus our bestsellers. IF the product they viewed didn’t fully fit them, THEN there’s a similar one right there that might.

#### Path 4: New · Clicked · SMS-eligible

**Condition criteria:**
- IF Placed Order zero times over all time
- AND Clicked Email at least once since starting this flow
- AND can receive SMS marketing
- THEN E1-N (no offer) → SMS2-N with the product link AND OFFBOLT1 (free US shipping on the first order)

**Reasoning:**
This shopper is new, they clicked, BUT they didn’t buy. Why? Usually price or trust, since they’ve never ordered from us. Klaviyo also suggests an offer for first-time browsers, SO this is where the offer earns its money.

Most importantly, the offer only shows in the second message. IF they buy after the first email, THEN we didn’t give away shipping we didn’t need to.

We also use the same offer as the Welcome flow, OFFBOLT1. Why? So shoppers don’t learn “IF I just browse and leave, I’ll get a better deal.”

#### Path 5: New · Clicked · NOT SMS-eligible

**Condition criteria:**
- IF Placed Order zero times over all time
- AND Clicked Email at least once since starting this flow
- AND NOT matched by Path 4
- THEN E1-N → E2-N-Proof: reviews, the fit guide, AND OFFBOLT1

**Reasoning:**
A new shopper doesn’t know us yet, so they have 2 doubts: “Is this product good?” and “Is it worth it?” This email answers both in one go. The reviews and fit guide remove the first doubt, and free shipping removes the second.

And this is their first order. Once they buy, THEN they can move into post-purchase and come back again, SO this one order can turn into more revenue later.

#### Path 6: New · NOT clicked

**Condition criteria:**
- IF Placed Order zero times over all time
- AND NOT clicked (falls to “Everyone else”)
- THEN E1-N → E2-N-Offer: the offer in the subject line, plus the viewed product AND bestsellers

**Reasoning:**
The first email didn’t get a click, SO we lead with the strongest reason to open, which is the offer, right in the subject line. Once they open, they see the product they viewed plus our bestsellers. That gives them more than one product to click on.

Why no SMS here? A text costs money every time we send it. These shoppers haven’t shown much interest yet, SO a text could just lead to an unsubscribe. So basically we keep SMS for the shoppers most likely to order, AND we keep our SMS list healthy for later.

### 3.6 Messages

|Step|Sent at|Channel|Who|Job|Offer|
|---|---|---|---|---|---|
|E1-R|2h|Email|Returning|Reminder of the viewed item|None|
|E1-N|2h|Email|New|Reminder + reviews|None|
|SMS2-R|26h|SMS|Returning · Clicked · SMS|Product link nudge|None|
|E2-R-Proof|26h|Email|Returning · Clicked|Reviews + fit + pairs with past order|None|
|E2-R-Angle|26h|Email|Returning · Not clicked|Viewed item + bestsellers|None|
|SMS2-N|26h|SMS|New · Clicked · SMS|Product link + offer|OFFBOLT1|
|E2-N-Proof|26h|Email|New · Clicked|Reviews + fit guide + offer|OFFBOLT1|
|E2-N-Offer|26h|Email|New · Not clicked|Offer-led + viewed item + bestsellers|OFFBOLT1|

#### Day 0

**E1-R · E1-R | Returning | Viewed item reminder | No discount**

**Subject:** Still eyeing the {{ event.ProductName|default:’piece you viewed’ }}?
**Preview:** It’s still here, in your size.

**E1-N · E1-N | New | Viewed item reminder + reviews | No discount**

**Subject:** The {{ event.ProductName|default:’piece’ }} you looked at
**Preview:** See why customers keep reaching for it.

#### Day 1: Returning

**Path 1 · SMS2-R | Returning · Clicked · SMS | Product link nudge | No discount**

{{ organization.name }}: The {{ event.ProductName|default:’piece’ }} you checked out is still available. Take another look: {{ event.URL|default:organization.url }} Reply STOP to opt out

**Path 2 · E2-R-Proof | Returning · Clicked | Reviews + fit + pairs with past order | No discount**

**Subject:** How the {{ event.ProductName|default:’piece you viewed’ }} fits and wears
**Preview:** Real reviews, plus what pairs with your last order.

**Path 3 · E2-R-Angle | Returning · Not clicked | Viewed item + bestsellers | No discount**

**Subject:** What {{ organization.name }} regulars are wearing now
**Preview:** Our bestsellers, plus the piece you viewed.

#### Day 1: New

**Path 4 · SMS2-N | New · Clicked · SMS | Product link + first-order offer**

{{ organization.name }}: Get free US shipping on your first order, {{ event.ProductName|default:’your pick’ }} included. Code: OFFBOLT1 {{ event.URL|default:organization.url }} Reply STOP to opt out

**Path 5 · E2-N-Proof | New · Clicked | Reviews + fit guide + first-order offer**

**Subject:** Not sure about the {{ event.ProductName|default:’piece you viewed’ }}? Read this
**Preview:** Fit notes, real reviews, and free US shipping on your first order.

**Path 6 · E2-N-Offer | New · Not clicked | Offer-led + viewed item + bestsellers**

**Subject:** Free US shipping on your first {{ organization.name }} order
**Preview:** Start with the {{ event.ProductName|default:’piece you viewed’ }} or a bestseller.

### 3.7 Smart Sending and quiet hours

Smart Sending skips a message IF the shopper got another message on the same channel inside the time window (email default 16 hours, SMS default 24 hours, both customizable). Email and SMS have separate windows. A skip is logged as a skip, NOT an error.

|Message|Setting|Why|
|---|---|---|
|E1-R / E1-N|**ON**|A browser hasn’t decided yet. One more email right after a campaign costs more than it returns.|
|E2 emails|**ON**|They go out 24h after E1, which is past 16h, SO E1 doesn’t block them. ON guards against campaign overlap.|
|SMS2-R / SMS2-N|**ON**|IF an SMS campaign went out earlier that day, THEN we don’t text them again.|

**SMS quiet hours:** ON. Klaviyo’s standard window holds texts between 8 p.m. and 11 a.m. For US and Canada numbers, it uses the phone’s area code to find the time zone.

**Rule:** The shopper’s intent decides the settings, NOT the flow type. Browsing is a weak signal, THEREFORE Smart Sending stays ON for every message.

---

## 4. Variables and data

### 4.1 Data the flow needs

- Viewed Product event: name, image, link, price
- Placed Order, Started Checkout AND Added to Cart (Shopify-branded) events
- Email click event
- Email consent
- SMS consent AND phone number
- A bestsellers or recommended products feed for the E2-Angle and E2-Offer emails

It comes from Klaviyo’s Shopify sync, onsite tracking, forms AND the shopper’s opt-ins.

### 4.2 Merge tags

Tag paths can change with the integration version. Each one MUST be checked on a real profile before launch. A blank tag is never sent.

|Purpose|Tag|
|---|---|
|Product name|\`{{ event.ProductName\\|default:'piece you viewed' }}\`|
|Product image|\`{{ event.ImageURL }}\`|
|Product link|\`{{ event.URL\\|default:organization.url }}\`|
|Price|\`{{ event.Price }}\`|
|Brand name|\`{{ organization.name }}\`|
|First name|\`{{ first_name\\|default:"there" }}\`|
|First-order code|OFFBOLT1 (static code, typed by hand)|

Use straight quotes (‘) in every tag, never curly ones, or the tag won’t render.

---

## 5. Unverified: fix before real use

### 5.1 Copy claims (sample data)

- **Reviews:** use ONLY the verbatim reviews in the Off-Bolt brand file (Priya N., Dana R.). Never write new ones.
- **Fit notes AND fit guide:** replace with real fit rules from the brand file.
- **“In your size” in E1-R:** keep it ONLY IF the email shows real stock. IF not, THEN cut it.

### 5.2 Checks

- Every merge tag shows a real value in preview.
- OFFBOLT1 works at checkout AND is set to first order only.
- “Can receive SMS” checks BOTH consent AND a phone number.
- Quiet hours apply correctly to US and Canada numbers.
- The longest product name still fits 1 SMS segment.
- Klaviyo short links are used in SMS.
- The Shopify-branded Added to Cart metric is the one used in the filter.
- The Added to Cart filter is kept ONLY IF the cart flow is live.
- Legal basis is written down per market AND confirmed by the client’s lawyer.

---

## 6. Limits

- Only known shoppers enter. Anonymous traffic isn’t reached.
- The click check counts ANY email click since starting the flow, NOT only E1. A campaign click counts too.
- IF Smart Sending skips E1, THEN that shopper can’t click it, SO they go down the no-click path. They still get message 2, BUT as the new-angle or offer email.
- OFFBOLT1 is free US shipping. Canada shoppers can’t use it, SO the offer emails mean nothing to them.
- US orders over $150 already ship free. IF a new shopper viewed the Selvage Jacket ($215), THEN OFFBOLT1 adds nothing. Consider showing the free size exchange there instead.
- Practice store only.
- Consent rules follow the shopper’s country. This document isn’t legal advice.

---

Note from me:

A stranger MUST be able to rebuild this flow from this document alone.

AND good luck building!`,
          previous: [                          // older versions: same folder, tucked behind a note under the latest file
            { name: "V1", text: `# V1.0 · Browse Abandonment Flow (Connected with 2 other flow)

**Version:** V1.0 · 15 Sep 2026

## Card details

| | |
|---|---|
|**Title**|Browse Abandonment Flow (Connected with 2 other flow)|
|**Card summary**|One quiet reminder, then a second message only for shoppers who clicked|
|**Details line**|Klaviyo · Viewed Product · 2 emails, 1 SMS · at most 2 per shopper · no discounts|
|**Date**|2026-09-15|
|**Tag**|Klaviyo grouped flows|

## Story

### The problem

A shopper looks at a product and leaves. Browsing is the weakest buying signal a store has, yet most browse flows treat it like a checkout: too many messages, a discount that teaches shoppers that looking earns a code, and paid texts sent to people who never showed real interest.

### What I built

- A Viewed Product trigger for known shoppers, with a 4-hour wait so the reminder never feels like being watched.
- At most 2 messages: a quiet Email 1, then an SMS for subscribers or Email 2 for everyone else.
- A click check before the second message, so only interested shoppers get a second touch and fewer paid texts go out.
- No discount anywhere, Smart Sending on for every message, and 3 A/B tests that each change one thing.

### Result

Built on a practice store with sample brand data. The flow, every email version and the SMS copy are documented well enough to rebuild from scratch. No live results yet, and none are promised.

## Flow screenshots

![The browse abandonment flow, part 1: trigger on Viewed Product, 4 hour wait, E1 Still thinking about it, 20 hour wait, click check](assets/case3-ba-v1-flow-1.png)

![The browse abandonment flow, part 2: click check, SMS subscriber check, then SMS1 or the second email](assets/case3-ba-v1-flow-2.png)

---
# Browse Abandonment Flow for Lai's Coffee

**Tools:** Shopify · Klaviyo · Email + SMS
**Version:** 1.0 · 15 Sep 2026
**Status:** Built on a practice store.

---

## At a glance

|   |   |
|---|---|
|**Goal**|Product view to order|
|**Trigger**|Viewed Product|
|**Messages per person**|2 At most|
|**Channels**|Email, then SMS OR email only|
|**Discounts**|None|
|**Success metric**|Placed order rate for this flow|

---

## 1. Purpose

- **Why it exists:** a shopper looked at a product AND left without buying. This flow sends one quiet reminder, THEN one reason to decide.
- **Who it is for:** known shoppers only. Klaviyo must already know who the browser is.
- **Where it sits:** one part of a larger email and SMS system.
    - **Abandoned Checkout Recovery (ACR)** handles shoppers who started checkout.
    - **Post-Purchase** is next to be written.
- **How it is judged:** placed order rate. Clicks are NOT the goal. A click with no order is nothing.

---

## 2. Structure

### 2.1 Trigger

- **Metric:** Viewed Product (Klaviyo onsite tracking).
- The flow fires ONLY IF the browser is identified by Klaviyo.
- Klaviyo identifies a browser after an email click, a form submit, OR a login or checkout.
- Anonymous visitors never enter (BECAUSE they are unknown).

### 2.2 Who enters, who is blocked, when they leave

|Rule|Setting|Why|
|---|---|---|
|**Enter**|Viewed a product|Earliest buying signal the store can act on|
|**Block**|Checkout Started or Placed order 1 time (This is not filters, you might confuse them.)|No reminder after a purchase or Checkout started|
|**Leave early**|No email click since entering the flow|Only interested shoppers get a second message|
|**Consent**|Klaviyo checks email consent on every flow email|Checks: Marketing messages. Doesn't check: Transactional messages|

**Note:** filters are checked before each message, NOT all the time. IF a shopper buys during a wait, THEN they leave quietly at the next check.

### 2.3 Flow map

\`\`\`
Viewed Product
   |   Filter: Placed Order = 0 times since starting this flow
   v
Wait 4 hours
   v
EMAIL 1: Nudge   (A/B test)
   v
Wait 20 hours
   v
Clicked any email since starting this flow?
   |-- NO  --> leave flow
   |-- YES
         v
   Can receive SMS?
   |-- YES --> SMS  (A/B test)
   |-- NO  --> EMAIL 2: Follow-up   (A/B test)
\`\`\`

### 2.4 Messages

|Step|Sent at|Channel|Job|Offer|
|---|---|---|---|---|
|Email 1|4h|Email|Quiet reminder of the product|None|
|SMS|24h|SMS|One text to SMS subscribers|None|
|Email 2|24h|Email|no SMS consent? then Email is used|None|

### 2.5 Smart Sending

Smart Sending skips a message IF the shopper got another message on the same channel inside the time window (default 16 hours (customizable)). Email and SMS have separate windows. A skip is logged as a skip, NOT an error.

|Message|Setting|Why|
|---|---|---|
|Email 1|**ON**|A browser has not decided yet. One more email after a recent campaign costs more than it returns.|
|SMS|**ON**|Never SMS someone in one window, an SMS campaign might run earlier the day so turning this on prevents SMS spam.|
|Email 2|**ON**|20h after Email 1, which is past 16h, SO Email 1 does not block it. ON means guards against campaign overlap.|

**Rule:** the shopper's intent decides the settings (in browsing, intent is considered weak), NOT the flow type.

- Browsing is a weak signal, THEREFORE every message's smart sending stays ON.
- IF ACR is triggered while on the flow THEN the flow is turned off (Profile filters), BECAUSE a checkout starter is the strongest signal on the list.

---

## 3. Variables and data

### 3.1 Data the flow needs

- Viewed Product event: name, image, link, price
- First name
- Email consent
- SMS consent AND phone number
- Placed Order event
- Email click event

It is obtainable via Klaviyo syncs, forms, shopify events and shopper's opt ins,

### 3.2 Merge tags

Tag paths can change with the integration version. Each one MUST be checked on a real profile before launch. A blank tag is never sent.

|Purpose|Tag|
|---|---|
|Product name|\`{{ event.ProductName }}\`|
|Product image|\`{{ event.ImageURL }}\`|
|Product link|\`{{ event.URL }}\`|
|Price|\`{{ event.Price }}\`|
|First name|\`{{ first_name\\|default:"there" }}\`|

---

## 4. AB tests

Each test changes ONE thing. Everything else stays the same.

|Message|What changes|What stays the same|What a win means|
|---|---|---|---|
|Email 1|One product vs one + 3 options|Subject, send time, button|IF B wins, THEN choice was the barrier. Review the product page.|
|Email 2|Trust close vs smaller-step close|Subject, send time|IF A wins, THEN belief was the barrier. IF B wins, THEN order size was the barrier, AND the sampler deserves a bigger role.|
|SMS|Viewed product vs sampler|Brand line, STOP line, send time|Shows whether a reminder OR a smaller step moves a texted shopper.|

### 4.2 Test rules

- One live test at a time across the whole account. ACR and BA share one queue.
- Queue position: Email 1 is 5th, Email 2 is 6th, SMS is 11th.
- Split 50/50. Never 80/20.
- Under ~200 shoppers per version → no call.
- Clear click gap, both versions past ~400 → early call. Promote AND keep watching.
- Small gap in order rate → no call at this volume.
- Result flips week to week → no effect.
- "No winner" is a result. It is logged.

---

## 5. Unverified: fix before real use

### 5.1 Copy claims (sample data)

Replace ALL of these with real brand facts before a real send:

- Roast-date stamp AND roast and ship claims
- Reviews AND rating line
- Prices: $8.50, $7, $8
- Sampler contents: four 60g bags
- The "no catch" line

### 5.2 Checks

- Every merge tag shows a real value in preview
- 6 placeholders in Email 1-B replaced
- Sampler page link works
- "Can receive SMS" checks BOTH consent AND phone number
- Quiet hours Klaviyo applies to PH numbers (target: 10:00–20:00 local)
- Long product names still fit 1 SMS segment (worst case: 147 of 160 characters)
- Klaviyo short links used in SMS
- Whether Klaviyo picks A/B winners in flows automatically for this account
- Subject lines for Email 1 and Email 2 recorded
- Legal basis written down per market, AND confirmed by the client's lawyer
- EU/UK only: cookie consent for onsite tracking

---

## 6. Limits

- Only known shoppers enter. Anonymous traffic is not reached.
- The click check counts ANY email click, NOT only Email 1.
- IF Smart Sending skips Email 1, THEN that shopper has nothing to click AND will likely leave at the check.
- A small list may never reach a clear A/B result.
- The 3 options in Email 1-B are fixed. They need a monthly review until the catalog feed is live.
- Practice store only.
- Consent rules follow the shopper's country. This document is not legal advice.

---

## 7. Versions

|Version|Date|Change|
|---|---|---|
|1.0|15 Sep 2026|First build, as documented above|
|1.1|Planned|Align the build with the spec (list below)|

### Planned for 1.1

1. **Add trigger filter:** Viewed Product 0 times in the last 7 days.
   BECAUSE repeat browsers should not re-enter every week.
2. **Add filter on both messages:** email consent present.
   BECAUSE the rule is visible in the flow, NOT only in the account settings.
3. **Change second wait:** 20h → 24h (second message at 28h).
   BECAUSE 24h gives more room over the 16h Smart Sending window.
4. **Confirm the click check** and add it to the spec.
   The spec has no click check. Keep it IF the second message is for interested shoppers only.

Older versions are kept, NOT deleted. This is for a fallback in case new version fails.

---

Note from me:

A stranger MUST be able to rebuild this flow from this document alone.

AND goodluck building!` }
          ]
        }
      ]
    },

    {
      tag: "Klaviyo grouped flows",
      title: "Off-Bolt ESO Post-Purchase: Consent gated routing, Fit Checks, Run Notes, Service Recovery",
      slug: "post-purchase-flow-grouped",
      type: "flow",                       // flow | campaign | email-design
      date: "2026-11-16",
      blurb: "Turns one paid order into the next one at full price, without giving codes to people who will buy anyway",
      photo: "assets/case4-pp-v2-flow-1.webp",
      thumbnailAlt: "The top of the post-purchase flow: the Placed Order trigger, a 2 hour wait, the OB email list split and the split by buyer type",
      meta: "Klaviyo · Placed Order, Fulfilled Order, staff tag · email only · 1 to 5 emails over 110 days, plus 1 fit check · codes for E4-O and service recovery only",
      video: "",
      poster: "",
      photos: [
        { src: "assets/case4-pp-v2-flow-1.webp", alt: "PP-A, the main post-purchase flow: Placed Order trigger, 2 hour wait, the OB email list split, the split by buyer type into the VIP, welcome back, plain thanks, repeat and first order emails, then the Day 21, Day 35, Day 75 and Day 110 gates and emails", wide: true },
        { src: "assets/case4-pp-v2-flow-2.png", alt: "PP-B, the fit check: Fulfilled Order trigger, the In the OB list split, the Ships to Canada split, then FIT-CA after a 14 day wait or FIT-US after a 10 day wait" },
        { src: "assets/case4-pp-v2-flow-3.png", alt: "PP-C, service recovery: added to the service recovery tag, the Our mistake split, then RC1 apology with $25 off (OFFBOLT5) or RC2 apology with free shipping (OFFBOLT6)" }
      ],
      story: [
        {
          heading: "The problem",
          text: "This post-purchase flow solves the problem of treating the sale as the end. A buyer worries about when the order will arrive, might wash it wrong the first time, and might never come back for a second piece."
        },
        {
          heading: "What I built",
          text: "How does this flow solve that? First, every buyer gets an email that tells them when the order arrives and how to wash it, BEFORE they start to worry. Secondly, we talk to each buyer type differently: non-subscriber, VIP, welcome back, repeat, entry OR first order. A 4th-order buyer doesn't need the same email as someone who just found us."
        },
        {
          text: "Thirdly, after delivery we check the fit. IF it doesn't fit, THEN they swap the size instead of returning it, so we keep the revenue. Then we ask for a review, THEN one pairing, THEN Run Notes, THEN the next piece. IF they order again at any point, THEN the flow stops for them."
        },
        {
          text: "Finally, last part, we send an apology code ONLY when staff confirm it was our mistake."
        },
        {
          text: "So basically we turn one paid order into the next one at full price, without hurting deliverability AND without giving codes to people who will buy anyway."
        },
        {
          heading: "Documentation",
          text: `# Off-Bolt ESO Post-Purchase: Consent-Gated Buyer Routing, Fit Checks, Run Notes, Service Recovery

**Tools:** Shopify · Klaviyo 
**Version:** 2.2 · 16 Nov 2026
**Grouped with:** Browse Abandonment (BA) · Abandoned Checkout Recovery (ACR V1.2)

---

## At a glance

|   |   |
|---|---|
|**Goal**|Use the paid order to make the next one, at full price|
|**Trigger**|Placed Order ($value > 0) for PP-A · Fulfilled Order for PP-B · staff tag for PP-C|
|**Messages per person**|1 to 5 emails over 110 days (varies per buyer type), plus 1 fit check|
|**Channels**|Email only|
|**Discounts**|OFFBOLT14 at E4-O ONLY. OFFBOLT5 AND OFFBOLT6 for service recovery ONLY.|
|**Success metric**|Placed orders from this flow|

---

## 1. Purpose

This post-purchase flow solves the problem of treating the sale as the end. A buyer worries about when the order will arrive, might wash it wrong the first time, and might never come back for a second piece.

How does this flow solve that? First, every buyer gets an email that tells them when the order arrives and how to wash it, BEFORE they start to worry. Secondly, we talk to each buyer type differently: non-subscriber, VIP, welcome back, repeat, entry OR first order. A 4th-order buyer doesn't need the same email as someone who just found us.

Thirdly, after delivery we check the fit. IF it doesn't fit, THEN they swap the size instead of returning it, so we keep the revenue. Then we ask for a review, THEN one pairing, THEN Run Notes, THEN the next piece. IF they order again at any point, THEN the flow stops for them.

Finally, last part, we send an apology code ONLY when staff confirm it was our mistake.

**Where it sits:** one part of the ESO group. These three MUST fit each other.

- **Browse Abandonment (BA):** shoppers who viewed a product.
- **Abandoned Checkout Recovery (ACR):** shoppers who started checkout.
- **Post-Purchase (PP):** customers who paid.

**ESO rules it follows:**

- **Consent list:** \`OB | email list\` (called "OB list" below).
- **Path order:** top-down, the first match wins.
- **Lapsed:** no order in the last 180 days.
- **Tests:** one A/B test live at a time, across the whole account.
- **Codes:** a code goes ONLY where it likely causes the order. One code per order.

**How it is judged:** placed orders. Clicks are NOT the goal.

So basically we turn one paid order into the next one at full price, without hurting deliverability AND without giving codes to people who will buy anyway.

---

## 2. Structure

### 2.1 Trigger

|Flow|Trigger|Trigger filter|Re-entry|
|---|---|---|---|
|PP-A|Placed Order (Shopify integration)|$value is greater than 0|Every paid order, first or repeat|
|PP-B|Fulfilled Order|Collections contains \`Current Runs\`|Every fulfilled order|
|PP-C|Added to segment|Shopify Tags contains \`ob-recovery-25\` OR \`ob-recovery-ship\`|Once per profile|

Why is there no list filter on the PP-A trigger, unlike ACR? Because E1-T MUST reach every buyer. IF we filter by the list at the trigger, THEN non-subscribers never get their order email, and that's exactly how "where is my order?" tickets start.

Why paid orders only? Because a Shopify size swap can create a $0 order. IF that counted as a new order, THEN the flow would end for someone who just swapped a size. So "paid order" below always means Placed Order where $value is greater than 0.

### 2.2 Who enters, who is blocked, when they leave

|Rule|Applies to|Why|
|---|---|---|
|**Enter**|Placed a paid order|A paying customer|
|**Block:** Refunded Order zero times since starting this flow (profile filter)|All PP-A messages|No care tips for a refunded order. It fires on full refunds only, so a partial return stays in.|
|**Block:** Cancelled Order zero times since starting this flow (profile filter)|All PP-A AND PP-B messages|Same reason|
|**S0:** Is in list OB email list (split, not a filter)|Day 0|NOT in the list, they get E1-T only. In the list, they go to S1.|
|**G1:** In the OB list AND paid order zero times since starting this flow|Day 21 onward|Someone who subscribed after ordering still gets in. Someone who ordered again leaves.|
|**G2:** paid order zero times since starting this flow|Day 35|Someone who already reordered doesn't need a pairing|
|**G3, G3e, G4:** G2 AND engaged in the last 60 days|Day 75 AND Day 110|We don't send late emails to people who never engage|
|**Consent**|All messages|Klaviyo checks channel consent on every message. IF someone unsubscribes after G1, THEN Klaviyo skips them on its own.|

**Engaged** = at least once in the last 60 days, ANY of: Clicked Email · Opened Email where Apple Privacy Open = False · Active on Site. Why leave out Apple Privacy Opens? Because Apple opens the email on its own, so that open doesn't mean they read it.

Most important note here: flow filters are checked before EVERY step, not all the time. IF we put the OB list check in the flow filter, THEN it also blocks E1-T. SO the list check is a split at Day 0 (S0) AND a gate at Day 21 (G1) instead. This way every buyer gets the useful order email, but ONLY people who said yes to emails get the marketing, which protects deliverability for BA AND ACR too.

### 2.3 Flow map

\`\`\`
PP-A · Day 0 · every E1 Smart Sending OFF

Placed Order ($value > 0)
   v
Wait 2h
   v
S0  In OB list?
   |-- NO  --> EMAIL E1-T: Order timeline + care (transactional) --> G1
   |-- YES --> S1  Which paid order is this?  (top-down, first YES wins)
                 |-- 3rd order                --> EMAIL E1-V: VIP note from Lorelei
                 |-- bought before, none 180d --> EMAIL E1-W: Welcome back
                 |-- 4th+ order               --> EMAIL E1-P: Plain thanks
                 |-- 2nd order                --> EMAIL E1-R: Two orders in
                 |-- 1st order --> T1  Final sale only?
                        |-- YES --> EMAIL E1-O: Final sale + care
                        |-- NO  --> S2  In Run Notes?
                               |-- NO  --> EMAIL E1-A: Join Run Notes
                               |-- YES --> S3  Can receive SMS?
                                      |-- YES --> EMAIL E1-C: Plain thanks
                                      |-- NO  --> EMAIL E1-B: Run Notes by text
                                                  (E1-C until SMS is verified)
                 v
              (merge)
                 v

PP-A · Day 21 to 110 · Smart Sending ON

Wait 21 days
   v
G1  In OB list AND no new paid order?
   |-- NO  --> End
   |-- YES --> EMAIL E2: Review or reply ask                  (Day 21)
                 v
              Wait 14 days
                 v
              G2  No new paid order?
                 |-- NO  --> End
                 |-- YES --> S4  Only 1 paid order ever?
                        |-- NO  --> EMAIL E3: What pairs with it, A/B   (Day 35)
                        |-- YES --> T2  Final sale only?
                               |-- NO  --> EMAIL E3                     (Day 35)
                               |-- YES --> EMAIL E3-O: First full-price (Day 35)

After E3:
   Wait 40 days --> G3  No new paid order AND engaged?
                      |-- NO  --> End
                      |-- YES --> S5  In Run Notes?
                             |-- NO  --> EMAIL E4: Next run early      (Day 75)
                             |-- YES --> skip E4
                      v
                   Wait 35 days --> G4  No new paid order AND engaged?
                      |-- NO  --> End
                      |-- YES --> EMAIL E5: Your next piece            (Day 110)

After E3-O:
   Wait 40 days --> G3e  No new paid order AND engaged?
                      |-- NO  --> End
                      |-- YES --> EMAIL E4-O: Size chart + OFFBOLT14   (Day 75)


PP-B · Fit check

Fulfilled Order (Current Runs piece)
   v
In OB list?  (skip IF FIT gets transactional approval)
   |-- NO  --> End
   |-- YES --> Ships to Canada?
                 |-- NO  --> Wait 10 days --> EMAIL FIT-US: free size swap
                 |-- YES --> Wait 14 days --> EMAIL FIT-CA: postage is theirs


PP-C · Service recovery

Added to segment (staff tag)
   v
SC  Our mistake?
   |-- YES --> EMAIL RC1: Apology + $25 off       (OFFBOLT5)
   |-- NO  --> EMAIL RC2: Apology + free shipping (OFFBOLT6)
\`\`\`

Why "equals 1" for a first-time buyer and not 0? Because the order that started the flow is already counted, over all time. So a true first-time buyer shows 1, a 2nd-order buyer shows 2, a 3rd-order buyer shows 3.

**Split conditions, PP-A:**

|Card|Condition|YES|NO|
|---|---|---|---|
|S0|Is in list OB email list|S1|E1-T|
|S1 · P1|Paid order equals 3 over all time|E1-V|P2|
|S1 · P2|Paid order at least 2 over all time AND equals 1 in the last 180 days|E1-W|P3|
|S1 · P3|Paid order at least 4 over all time|E1-P|P4|
|S1 · P4|Paid order equals 2 over all time|E1-R|T1|
|T1 · T2|Trigger split: Collections contains \`Final Sale\` AND doesn't contain \`Current Runs\`|E1-O · E3-O|S2 · E3|
|S2 · S5|Is in list \`Run Notes\` (the TLRE list, same brand)|S3 · skip E4|E1-A · E4|
|S3|Can receive SMS marketing|E1-C|E1-B|
|G1|In OB list AND paid order zero times since starting this flow|E2|End|
|G2|Paid order zero times since starting this flow|S4|End|
|S4|Paid order equals 1 over all time|T2|E3|
|G3 · G3e · G4|G2 AND engaged|S5 · E4-O · E5|End|

**Split conditions, PP-B AND PP-C:**

|Card|Condition|YES|NO|
|---|---|---|---|
|PP-B consent|Is in list OB email list|SB|End|
|SB|Trigger split: shipping country equals Canada (check the property exists). Fallback: profile Country equals Canada|Wait 14d, FIT-CA|Wait 10d, FIT-US|
|SC|Shopify Tags contains \`ob-recovery-25\`|RC1|RC2|

**Messages:** every E1 has the delivery timeline AND a first-wash line. Packed in Providence · US 3–7 business days · Canada 7–12 days, duties may apply. Why the first-wash line? Because "indigo bleeds" and "never wring it" stop the damage before it happens, and damage turns into returns.

|Card|Day|Job · one button|Code|
|---|---|---|---|
|E1-T|0 (+2h)|Timeline + care + Bound for Life as repair info · View your order. No marketing.|None|
|E1-V|0|Note from Lorelei: 3 orders, repairs for life, early access · reply|None|
|E1-W|0|Runs since their last order + "Lorelei runs the studio now" · Join Run Notes (hidden IF member)|None|
|E1-P|0|Plain thanks · reply|None|
|E1-R|0|Two orders in · Join Run Notes (hidden IF member)|None|
|E1-O|0|Final sale + colour/care line · Join Run Notes (hidden IF member)|None|
|E1-A|0|Thanks · Join Run Notes|None|
|E1-B|0|Thanks · Get Run Notes by text|None|
|E1-C|0|Plain note · reply|None|
|E2|21|IF a reviews tool is live THEN "Leave a review" ELSE "Reply: how is it wearing?"|None|
|E3|35|One pairing + ships-free line + Bound for Life · the ONLY A/B test|None|
|E3-O|35|First full-price piece + its fit rule + free US size swap|None|
|E4|75|Join Run Notes: next run 24h early|None|
|E4-O|75|Size chart + fit rules + 10% off a full-price piece|OFFBOLT14: 10%, \`OB14-\`, one use, 30d, \`Current Runs\` only (check coupons can limit to a collection)|
|E5|110|Runs since their order + one pick in their size · See the current runs|None|
|FIT-US|Fulfilled +10|Fit rule per piece · reply with your size. One free swap IF the run still has it.|None|
|FIT-CA|Fulfilled +14|Same, but the postage is theirs|None|
|RC1|On tag|Apology|OFFBOLT5: $25, \`OB5-\`, one use, 90d|
|RC2|On tag|Apology|OFFBOLT6: free shipping, \`OB6-\`, one use, 90d|

Why does OFFBOLT14 sit at E4-O only? Because entry buyers chose final-sale prices. IF they're still engaged at Day 75 AND haven't ordered, THEN a code is more likely to actually cause their first full-price order. Everyone else is warm OR about to come back anyway, so a code there just pays for an order we were already getting.

**Subjects and previews:**

|Card|Subject|Preview|
|---|---|---|
|E1-T|Your Off-Bolt order is being packed|Here's when {{ event.Items.0\\|default:'your piece' }} arrives, and how to wash it the first time.|
|E1-V|Three orders in, {{ first_name\\|default:'friend' }}|A note from Lorelei: repairs for life and a first look at every run.|
|E1-W|Welcome back, {{ first_name\\|default:'there' }}|{{ event.Items.0\\|default:'Your piece' }} ships from Providence. Here's what we've cut since you last ordered.|
|E1-P|Thank you again, {{ first_name\\|default:'there' }}|{{ event.Items.0\\|default:'Your order' }} is being packed in Providence.|
|E1-R|Two orders in. Thank you|{{ event.Items.0\\|default:'Your piece' }} ships from Providence. Here's how to wash it first.|
|E1-O|About your {{ event.Items.0\\|default:'piece' }}|It's final sale, and no two are alike. Here's how to care for it.|
|E1-A|Your first Off-Bolt piece is coming|{{ event.Items.0\\|default:'Your order' }} ships from Providence. See the next run a day early.|
|E1-B|Your first Off-Bolt piece is coming|{{ event.Items.0\\|default:'Your order' }} ships soon. Get Run Notes by text so you never miss a run.|
|E1-C|Thank you, {{ first_name\\|default:'there' }}|{{ event.Items.0\\|default:'Your piece' }} is being packed in Providence.|
|FIT-US|How does {{ event.Items.0\\|default:'it' }} fit?|Wrong size? Reply with the one you need. Your first swap is free.|
|FIT-CA|How does {{ event.Items.0\\|default:'it' }} fit?|Wrong size? Reply with the one you need. We'll swap it; the postage is yours.|
|E2|How is {{ event.Items.0\\|default:'your piece' }} wearing?|Three weeks in, {{ first_name\\|default:'there' }}. Your honest take helps the next person size right.|
|E3|What pairs with {{ event.Items.0\\|default:'your piece' }}|One piece from the current runs. Orders over $100 ship free in the US.|
|E3-O|Something to go with {{ event.Items.0\\|default:'your piece' }}|One piece from the current runs, with its fit rule and a free US size swap.|
|E4|See the next run a day early|Run Notes members see every run 24 hours before the public, {{ first_name\\|default:'there' }}. Free to join.|
|E4-O|How Off-Bolt sizes run|Every piece has its own fit rule. Here's the one for {{ event.Items.0\\|default:'yours' }}, plus 10% off a full-price piece.|
|E5|Four months with {{ event.Items.0\\|default:'your piece' }}|Here's what we've cut since your order, in US sizes 0–24.|
|RC1|We got this one wrong, {{ first_name\\|default:'there' }}|Here's $25 off your next order. Your code is inside and works for 90 days.|
|RC2|Sorry for the wait, {{ first_name\\|default:'there' }}|Your next order ships free. Your code is inside and works for 90 days.|

**A/B test (E3 only):** one pairing vs one pairing + the newest run. No code in either. 50/50, judged on placed order rate. Why only one test? Because only one test runs live across the whole account, so this one waits in line with BA AND ACR.

### 2.4 Smart Sending

Smart Sending skips a message IF the customer got another message on the same channel inside the window (default 16 hours). It skips, it does NOT reschedule. So IF we turn it on for an email that must land, THEN that email can be lost for good.

|Message|Setting|Why|
|---|---|---|
|All E1|**OFF**|A customer waiting on an order is the most engaged person on the list. This message must land. (E1-T is transactional)|
|FIT-US, FIT-CA|**OFF**|Timed to delivery. This is the one that turns a return into an exchange.|
|RC1, RC2|**OFF**|A staff-confirmed apology must land.|
|E2, E3, E3-O|**ON**|The gap is weeks. Nothing here is urgent.|
|E4, E4-O, E5|**ON**|The gap is weeks. Nothing here is urgent.|

**Rule:** the ONLY urgent message is the one that prevents "where is my order?"

---

## 3. Variables and data

### 3.1 Data the flow needs

- Placed Order event: Items, Collections, $value
- Paid order count, over all time, in the last 180 days AND since starting the flow
- Refunded Order AND Cancelled Order events
- Fulfilled Order event with shipping country (check it exists)
- First name
- OB list AND Run Notes list membership
- SMS consent AND phone number
- Engagement: clicks, opens without Apple Privacy Opens, Active on Site
- Shopify tags: \`ob-recovery-25\`, \`ob-recovery-ship\`
- Collections: \`Current Runs\` AND \`Final Sale\` (hidden smart collection, tag = final-sale)
- Catalog: \`Current Runs\` products with stock

this data is obtainable via Klaviyo, Shopify syncs, onsite tracking, shopper's opt in and forms.

### 3.2 Merge tags

Tag paths can change with the integration version. Each one MUST be checked on a real profile before launch. A blank tag is never sent.

|Purpose|Tag|
|---|---|
|First ordered item|\`{{ event.Items.0\\|default:'your piece' }}\`|
|Ordered items|\`{{ event.extra.line_items }}\`|
|Item image|\`{{ item.product.images.0.src }}\`|
|Order value|\`{{ event.$value }}\`|
|First name|\`{{ first_name\\|default:"there" }}\`|
|First-wash block, per piece|show IF \`'<piece name>' in event.Items\`|
|E4-O code|\`{% coupon_code 'OFFBOLT14' %}\`|
|RC1 · RC2 codes|\`{% coupon_code 'OFFBOLT5' %}\` · \`{% coupon_code 'OFFBOLT6' %}\`|

**Show/hide rules:**

- **First-wash line** (every E1 AND FIT): one block per piece, so they only read the care rule for what they bought.
- **Swap offer** (FIT): shows ONLY IF the piece is in \`Current Runs\`. Why? Because final sale can't be swapped, and we don't promise what we can't do.
- **Pairing** (E3, E3-O): exactly ONE piece, and NEVER one already in the order.
    - First choice: a catalog block, Collection = \`Current Runs\` AND in stock AND NOT in the order (check the block supports these filters).
    - BUT IF the block can't do that, THEN use the table below. Update it every run release, because runs are 30–48 pieces AND never remade.

|IF the order has|THEN show|
|---|---|
|The Bolt Trouser|The Mill Shirt $128|
|The Mill Shirt|The Bolt Trouser $148|
|The Hem Dress|The Selvage Jacket $215|
|The Selvage Jacket|The Hem Dress $178|
|The Offcut Tee (E3-O)|The Bolt Trouser $148|
|The Bias Skirt (E3-O)|The Mill Shirt $128|

Every pairing is $128 or more, AND free US shipping starts at $100. So each pairing ships free on its own, and the customer thinks "I don't even need to add anything to get free shipping."

Klaviyo's built-in product blocks are preferred over hand-coded loops where they work.


---

## 4. Limits

- BA AND ACR can still email PP buyers, because they exit ONLY on their own Placed Order. A BA email can also make Smart Sending skip E3.
- ACR P4 gives 10% to anyone with exactly 1 order, and that includes someone who bought from us days ago.
- ACR's 90-day block checks ONLY OFFBOLT3 AND OFFBOLT4.
- E1-T AND FIT as transactional need a paid plan AND Klaviyo's approval.
- E1-B needs a verified SMS number. Until then, we route to E1-C.
- The catalog block may not filter by collection AND stock. IF so, THEN the pairing table is updated by hand.
- OFFBOLT14 limited to \`Current Runs\` depends on coupon settings. Not checked yet.
- Day 110 is an estimate (buyers come back about every 4 months in the seed data). Real gaps vary.
- PP-C enters once per profile. A second mistake needs a code sent by hand.
- Delivered Shipment works only with some carriers, so FIT uses Fulfilled Order + a wait.
- A small list may never reach a clear A/B result (under ~200 per version, no call).
- IF TLRE's F5 also runs on this store, THEN turn one off. Both trigger on Placed Order.
- Practice store.
- Consent rules follow the customer's country.

---

## 5. Versions

|Version|Date|Change|
|---|---|---|
|1.0|15 Sep 2026|First build on an earlier practice brand. 3 messages over 21 days, Day 21 reorder by SMS OR email.|
|1.3|Nov 2026|Rebuilt on Off-Bolt data. Added the consent gate, 5 buyer types, the entry path, fit check AND service recovery. Built the refund, cancel AND new-order gates.|
|2.1|15 Nov 2026|Removed codes that pay for orders that would happen anyway. OFFBOLT14 stays at E4-O ONLY.|
|2.2|16 Nov 2026|PP-A built in Klaviyo. Subjects, previews AND placeholder bodies in. This doc merged with the plan.|
|2.3|Planned|Fixes AND decisions below|

### Planned for 2.3

**Build fixes** (seen on the canvas, open each split to confirm):

1. **Add T2 at Day 35.**
   Why? Because without it, a first-order full-price buyer gets E3-O instead of E3.
2. **Fix G3's path.** It says "equals [value]".
   Why? Because an empty value lets the wrong people through OR blocks everyone.
3. **Check \`Split #13\`** after T1's "Everyone else". Path #1 shows "Collections contains Final Sale", and the other path ends.
   Why? Because IF that's real, THEN full-price first orders end at Day 0, and those are the buyers we want most.
4. **Rename \`Split #13\` AND \`Path #1\`** to the names in this doc.
5. **Check E5's subject, preview AND body.** The fill stopped halfway.
6. **Route S3 NO to E1-C** until SMS is verified.

**Setup AND decisions:**

7. **Widen ACR's 90-day block** to OFFBOLT1, 3, 4, 5, 6 AND 14.
   Why? Because without it, a shopper gets a code every time they abandon, and learns to abandon on purpose.
8. **Pick the recent-buyer window [X]** for BA AND ACR entry, AND ACR P4.
   Why? Because a PP buyer shouldn't get a 10% code days after buying at full price.
9. **Check the catalog block** filters by collection AND stock.
10. **Test IF a Shopify size swap makes a $0 order.**
11. **Create the coupons:** OFFBOLT14 (\`OB14-\`), OFFBOLT5 (\`OB5-\`), OFFBOLT6 (\`OB6-\`).
12. **Apply for transactional approval** for E1-T AND FIT.
13. **Verify the toll-free SMS number.**
14. **Check checkout opt-ins sync** to the OB list.
15. **Check Fulfilled Order has shipping country.**
16. **Choose the RC process:** manual send OR a metric trigger.
17. **Update the brand code log:** OFFBOLT15 is no longer used, OFFBOLT14 is E4-O only.
18. **Review Day 110** once real return gaps are known.

Older versions are kept, NOT deleted. BECAUSE again, if the new one fails we have a fallback.

---

## 6. Rebuild check

A stranger MUST be able to rebuild this flow from this document alone.

- Trigger and filters
- Waits and splits
- Messages and A/B versions
- Smart Sending settings
- Merge tags AND links

Goodluck building!`,
          previous: [                          // older versions: same folder, tucked behind a note under the latest file
            { name: "V1", text: `# V1.0 · Post-Purchase Flow(Connected with 2 other flow)

**Version:** V1.0 · 15 Sep 2026

## Card details

| | |
|---|---|
|**Title**|Post-Purchase Flow(Connected with 2 other flow)|
|**Card summary**|Tells buyers when the order arrives, how to enjoy it, and when to reorder|
|**Details line**|Klaviyo · Placed Order · email + SMS · 3 messages over 21 days · no discounts|
|**Date**|2026-09-15|
|**Tag**|Klaviyo grouped flows|

## Story

### The problem

The sale gets treated as the end. A first-time customer who does not know the roast schedule reads a three-day gap as a problem, may never brew a good first cup, and runs out of coffee on the morning they buy somewhere else.

### What I built

- Three messages over 21 days, in order: when the order will arrive, how to brew a good first cup, and a reminder to reorder before the bag runs out.
- A first-time vs repeat buyer split on Day 0, so repeat customers are thanked without being told the basics again.
- A Day 21 reorder reminder by SMS or email, designed to skip anyone who has already reordered.
- No discounts anywhere (points or a subscription reward loyalty instead), and 5 A/B tests, each changing one thing.

### Result

Built on a practice store with sample brand data, and documented well enough to rebuild from scratch. No live results yet, and none are promised. Settings still to confirm, such as the wait lengths and the refund, cancel and Day 21 filters, are listed openly in the documentation.

## Flow screenshots

![The post-purchase flow, part 1: trigger on Placed Order, first time buyer split, E1 Welcome or E1B Thanks for coming back](assets/case4-pp-flow-1.png)

![The post-purchase flow, part 2: 7 day wait, E2 Getting the most out of your bag, 14 day wait, Can receive SMS split](assets/case4-pp-flow-2.png)

![The post-purchase flow, part 3: 14 day wait, Can receive SMS split, SMS1 or E3 Something to put through it on Day 21](assets/case4-pp-flow-3.png)

---
# Post-Purchase Flow for Lai's Coffee

**Tools:** Shopify · Klaviyo · Email + SMS
**Version:** 1.0 · 15 Sep 2026
**Status:** Built on a practice store.

---

## At a glance

|   |   |
|---|---|
|**Goal**|Use previous order to make another order|
|**Trigger**|Placed Order|
|**Messages per person**|3, over 21 days ( varies per product life)|
|**Channels**|Email, then SMS OR email only|
|**Discounts**|None|
|**Success metric**|Reorder rate: orders placed from this flow|

---

## 1. Purpose

- **Why it exists:** the sale is not the end. A good first cup AND a timely reminder bring the customer back.
- **What it does, in order:**
    1. Explains when the order will arrive, BEFORE the customer starts to worry.
    2. Helps them brew a good first cup.
    3. Reminds them to reorder BEFORE the bag runs out.
- **Where it sits:** one part of a larger email and SMS system.
    - **Browse Abandonment (BA):** shoppers who viewed a product.
    - **Abandoned Checkout Recovery (ACR):** shoppers who started checkout.
    - **Post-Purchase (PP):** customers who paid.
- **How it is judged:** reorders. Clicks are NOT the goal.

---

## 2. Structure

### 2.1 Trigger

- **Metric:** Placed Order (Shopify integration).
- Every order starts the flow, first or repeat.

### 2.2 Who enters, who is blocked, when they leave

|Rule|Applies to|Why|
|---|---|---|
|**Enter**|Placed an order|A paying customer|
|**Block:** Refunded Order 1 times since starting this flow ( This is not filters, you might confuse them)|All messages|No brewing tips for a refunded order|
|**Block:** Cancelled Order 1 times since starting this flow ( This is not filters, you might confuse them)|All messages|Same reason|
|**Block:** Placed Order 1 times since starting this flow ( This is not filters, you might confuse them)|Day 21 step only|Someone who reordered on Day 14 does not need a reorder reminder|
|**Consent**|All messages|Klaviyo checks channel consent on every message|

**Note:** filters are checked before each message, NOT all the time.

### 2.3 Flow map

\`\`\`
Placed Order
   v
Placed Order = 1 time over all time?
   |-- YES --> Wait 2h --> EMAIL 1: First-time buyer    (2h)
   |-- NO  --> Wait 2h --> EMAIL 1: Repeat buyer        (2h)
                 v
              (merge)
                 v
Wait 7 days
   v
EMAIL 2: First cup                                      (Day 7)
   v
Wait 14 days
   v
   Filter: no new order since starting this flow
   v
Can receive SMS?
   |-- YES --> SMS: Reorder reminder                    (Day 21)
   |-- NO  --> EMAIL 3: Reorder reminder                (Day 21)
\`\`\`

**Why "= 1" is correct here:** the order that started the flow is already counted. A true first-time buyer shows 1, NOT 0. BECAUSE it's counted over all time, not since starting the flow.

### 2.4 Messages

|Message|Sent at|Channel|Job|Offer|
|---|---|---|---|---|
|Email 1: First-time|2h|Email|Set the roast and delivery timeline|None|
|Email 1: Repeat|2h|Email|Thank them without repeating the basics|None|
|Email 2: First cup|Day 7|Email|Make the first cup good|None|
|SMS|Day 21|SMS|Reorder before the bag runs out|None|
|Email 3|Day 21|Email|Same, for non-SMS customers|None|

### 2.5 Smart Sending

Smart Sending skips a message IF the customer got another message on the same channel inside the window (default 16 hours). Email and SMS have separate windows.

|Message|Setting|Why|
|---|---|---|
|Email 1 (both)|**OFF**|A customer waiting on an order is the most engaged person on the list. This message must land. ( Transactional )|
|Email 2|**ON**|The gap is days. Nothing here is urgent.|
|SMS|**ON**|First text in this flow. Blocks a same-day SMS campaign.|
|Email 3|**ON**|The gap is days. Nothing here is urgent.|

**Rule:** the ONLY urgent message is the one that prevents "where is my order?"

---

## 3. Variables and data

### 3.1 Data the flow needs

- Placed Order event: items, images, order value
- Placed Order count, over all time AND since entering the flow
- Refunded Order AND Cancelled Order events
- First name
- Email consent, SMS consent, phone number
- Points balance (profile property)
- Brew gear answer (\`preferred_grind\`, profile property)

this data is obtainable via Klaviyo, shopify syncs, shopper's opt in and forms.

### 3.2 Merge tags

Tag paths can change with the integration version. Each one MUST be checked on a real profile before launch. A blank tag is never sent.

|Purpose|Tag|
|---|---|
|Ordered items|\`{{ event.extra.line_items }}\`|
|Item image|\`{{ item.product.images.0.src }}\`|
|Order value|\`{{ event.$value }}\`|
|First name|\`{{ first_name\\|default:"there" }}\`|
|Points balance|\`{{ person.beans_balance\\|default:"0" }}\`|
|Reorder / subscription link in SMS|\`{{ link }}\`|

Klaviyo's built-in product blocks are preferred over hand-coded loops where they work.

### 3.3 Reorder link

- **Current:** points to the coffee collection page.
- **Better:** a Shopify cart link, \`/cart/{variant_id}:{quantity}\`, that refills the cart in one tap.
- **Rule:** use the cart link ONLY IF the variant ID is confirmed in the Placed Order event. A broken link in an automated flow can go unnoticed for weeks.

---

## 4. A/B tests

Each test changes ONE thing. Everything else stays the same.

|Message|What changes|What stays the same|
|---|---|---|
|Email 1: First-time|Brew-gear question: yes vs no|Subject, send time, timeline, items|
|Email 1: Repeat|Points vs subscription|Subject, send time, thanks, items|
|Email 2|Review request: yes vs no|Subject, send time, tips, care, promise|
|SMS|Reorder vs subscription|Brand line, STOP line, send time|
|Email 3|Reorder vs subscription|Subject, send time|

### 4.2 Test rules

- Two tests run at the same time ONLY IF no customer can receive both.
    - Safe pairs: Email 1 first-time + Email 1 repeat · SMS + Email 3.
    - Email 2 reaches everyone, SO it runs alone.
- Account queue position: Email 3 + SMS 3rd · Email 1 pair 5th · Email 2 6th.
- The Day 0 subscription test AND the Day 21 subscription test never run together. A repeat buyer would see the pitch 3 times in 3 weeks, AND no result would be readable.
- Split 50/50. Never 80/20.
- Subject lines stay the same inside a body test. Subject tests run separately.
- Under ~200 customers per version → no call.
- Clear click gap, both versions past ~400 → early call. Promote AND keep watching.
- Small gap in order rate → no call at this volume.
- Result flips week to week → no effect.
- "No winner" is a result. It is logged.

---

## 5. Unverified: fix before real use

### 5.1 Facts used in copy (sample data only)

IF any of these change in the store, THEN the templates change too. Replace ALL with real facts before a real send.

- Roast days: Monday and Thursday
- Ships within 48h of roasting
- Delivery: 1–2 days Metro Manila, 3–5 provincial
- Free shipping over $27; $1.70 Metro Manila, $2.85 provincial
- Payment: GCash, Maya, card, bank transfer, cash on delivery
- Brew ratio: 15g per 250ml
- Water: about 30 seconds after the kettle stops
- Storage: airtight, room temperature, away from light, not the fridge
- Freshness: three to four weeks from roast date
- Apparel: 180gsm combed cotton, pre-shrunk, unisex S–3XL
- Returns: 7-day free size exchange; First Bag Promise, one free swap
- Points: 5% back, 500 Beans = free 250g bag
- Subscription: 2 bags a month, 10% off, free delivery, pause or cancel anytime
- Proof: 4.8 average, 1,247 orders, 34% order again

### 5.2 Build settings to confirm

- Wait lengths set to 2h, 7 days, 14 days
- Refund, cancel, AND Day 21 new-order filters added
- "Can receive SMS" checks BOTH consent AND phone number

---

## 6. Limits

- Email 2 reaches apparel-only buyers too. They read coffee tips first. Fix, cheapest first: (1) show blocks by order category, (2) add a split like ACR's. Check the share of apparel-only orders before choosing.
- Day 21 is a fixed estimate. Real drinking speed varies.
- A small list may never reach a clear A/B result.
- Practice store.
- Consent rules follow the customer's country.

---

## 7. Versions

|Version|Date|Change|
|---|---|---|
|1.0|15 Sep 2026|First build, as documented above|
|1.1|Planned|Settings AND decisions below|

### Planned for 1.1

1. **Set the three waits** to 2h, 7 days, 14 days.
2. **Add the refund, cancel, AND Day 21 new-order filters.**
   BECAUSE without the Day 21 filter, a customer who reordered on Day 14 still gets a reorder reminder.
3. **SMS split:** use SMS consent AND phone number present.
   BECAUSE a consented profile with no number fails silently.
4. **Connect the brew-gear answers** to \`preferred_grind\`.
5. **Choose the reorder link** after checking for the variant ID.
6. **Measure apparel-only orders,** THEN decide on Email 2.
7. **Review Day 21** once real reorder gaps are known.

Older versions are kept, NOT deleted. BECAUSE again, if the new one fails we have a fallback.

---

## 8. Rebuild check

A stranger MUST be able to rebuild this flow from this document alone.

- Trigger and filters
- Waits and splits
- Messages and A/B versions
- Smart Sending settings
- Merge tags AND links

Goodluck building!` }
          ]
        }
      ]
    },

    {
      tag: "Klaviyo · Shopify · Lifecycle system",
      title: "TLRE V2.1: The Lifecycle Revenue Engine",
      slug: "tlre-lifecycle-revenue-engine",
      type: "flow",                       // flow | campaign | email-design
      date: "2026-11-20",
      blurb: "The most placed orders from every lifecycle stage, and a discount only where it causes the order",
      photo: "assets/tlre-v21-engine-map.webp",
      photosNoteTop: "Please ZOOM in to read the engine map.",
      thumbnailAlt: "The TLRE V2.1 engine map: triggers on top, flows grouped by stage, all leading to Placed Order",
      meta: "Klaviyo + Shopify · 26 flows · 30 splits · 73 emails · 6 SMS · 3 WhatsApp · 10 segments · practice store, test data",
      video: "",
      poster: "",
      photos: [
        { src: "assets/tlre-v21-engine-map.webp", alt: "The TLRE V2.1 full engine map: triggers on top, then 01 Convert (F1 Welcome, F10 Site, F11 Search, F12 Collection, F2 Browse, F3 Cart, F4 Checkout, F1-S SMS Welcome), 02 Scarcity (F13 Price Drop, F14 Low Stock, F15 Pattern Returns), 05 Protect (F9 Sunset, F25 Channel Switch, the monthly suppression), all leading to Placed Order. Below it 03 Grow (F22 Birthday, F6 Run Notes, F17 Return Save, F18 Next Piece, F5 Post-Purchase, F7 VIP, F21 Referral, F16 Fit Check, F20 Review Ask, F19 Predicted Reorder, F5-PS Price Signal), 04 Rescue (F8 Win-Back, F23 VIP At-Risk, F24 Lapsed), and the Offer Gate with its 15% holdout", tall: true }
      ],
      story: [
        {
          heading: "The problem",
          text: "Off-Bolt was giving discounts to people who would have bought anyway, so every one of those orders lost money for nothing. Its only code, free shipping, barely mattered, because every full-price piece costs $128 or more and orders over $100 already ship free. Shoppers also hesitated over fit, and wrong sizes came back as returns. Many buying moments got no message at all: a search, a price drop, low stock, a reorder coming due, or a VIP going quiet. The store also couldn’t tell whether a code actually caused a sale, and emailing people who never open risks pushing everyone’s emails into spam. TLRE V2 lifts sales by reaching more of these moments and answering each doubt. It protects margin by giving codes only to people a code can change, and by proving that it worked."
        },
        {
          heading: "What I built",
          text: "Before any code goes out, a checkpoint asks three questions. Did this person get a code recently? Did they show interest? Do they normally pay full price? IF a code wouldn’t change their mind, THEN they get the same email without it. Some eligible people never get the code at all, so we can compare and see whether the code really added orders. Every shopper gets the cheapest fix first: fit help, free size exchanges, reviews, early access and real stock counts. Money only comes last. The system remembers who hunts for deals, so only they see the Rack or a code. Each shopper gets one buying sequence at a time, plus fit help before returns happen. People who stop opening are asked if they still want emails, then removed. Texts and WhatsApp go only to big carts, VIPs, and people leaving email."
        },
        {
          heading: "Result",
          text: "**Why this matters:** most Klaviyo builds prove an email made money. TLRE V2 also proves whether the discount did. It runs on test data, so the lift is designed and testable but not yet measured."
        },
        {
          text: "Built in Klaviyo. Every flow is a draft. Every split, path AND message is named `Code = what it does`. Every email AND SMS holds placeholder copy. Emails send from Lorelei at Off-Bolt"
        },
        {
          heading: "Documentation",
          text: `# TLRE V2: The Lifecycle Revenue Engine (synthetic data only)

**Tools:** Shopify · Klaviyo · Email · SMS · WhatsApp
**Version:** 2.1 · 20 Nov 2026 (2.0 · 20 Nov 2026 · first build 1.0 · 19 Sep 2026)
**Store:** Off-Bolt, a practice women's clothing brand from Providence, RI. Mill-end cloth, numbered runs, never remade. Built on a Shopify dev store with test data. NO live results exist, AND every number marked "seed" or "illustrative" is made up for the build.

---

**Please ZOOM in to read the engine map.**

![TLRE V2.1 full engine map: the triggers on top, the five stages Convert, Scarcity, Grow, Rescue and Protect, every flow from F1 to F25 with its splits and message counts, all leading to Placed Order, and the Offer Gate with its 15% holdout at the bottom](assets/tlre-v21-engine-map.webp)

## At a glance

| | |
|---|---|
| **Goal**           | The most placed orders from every lifecycle stage, AND a discount ONLY where it causes the order. Inbox placement protected the whole way.                                                     |
| **Size**           | 26 flows · 30 splits · 73 emails · 6 SMS · 3 WhatsApp · 10 segments                                                                                                                            |
| **Stages**         | Convert · Scarcity · Grow · Rescue · Protect                                                                                                                                                   |
| **Channels**       | Email in every flow. SMS AND WhatsApp ONLY where they pay back: carts $100+, VIPs, AND profiles leaving email                                                                                  |
| **Discounts**      | 4 money-off codes (OFFBOLT16, 17, 20, 21), each behind the Offer Gate AND a 15% holdout. Free shipping (OFFBOLT1, OFFBOLT2) for first orders. OFFBOLT12 by SMS. OFFBOLT13 for referred friends |
| **Success metric** | Placed order rate per flow. Every code judged against its no-code holdout on net revenue per recipient                                                                                         |
| **Status**         | Built in Klaviyo. Every flow is a draft. Every split, path AND message is named \`Code = what it does\`. Every email AND SMS holds placeholder copy. Emails send from Lorelei at Off-Bolt        |

---

### 1. What problem it solves, and how it helps sales and margin

**Simple terms:** Off-Bolt was giving discounts to people who would have bought anyway, so every one of those orders lost money for nothing. Its only code, free shipping, barely mattered, because every full-price piece costs $128 or more and orders over $100 already ship free. Shoppers also hesitated over fit, and wrong sizes came back as returns. Many buying moments got no message at all: a search, a price drop, low stock, a reorder coming due, or a VIP going quiet. The store also couldn’t tell whether a code actually caused a sale, and emailing people who never open risks pushing everyone’s emails into spam. TLRE V2 lifts sales by reaching more of these moments and answering each doubt. It protects margin by giving codes only to people a code can change, and by proving that it worked.

**Technical terms:**

| Problem                | Cause                                                                               | Effect on sales and/or margin                                                                                                                |
| ---------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| One code for everyone  | Untargeted incentive in V1                                                          | The discount is paid on orders it didn’t cause, which lowers net revenue per recipient                                                       |
| OFFBOLT1 barely worked | Full-price pieces cost $128+ AND the free US shipping threshold is $100             | Almost no extra US full-price orders                                                                                                         |
| Fit doubt              | No pre-purchase fit help AND no exchange-first step                                 | Abandoned checkouts AND a 19% return rate, mostly sizing (seed data)                                                                         |
| Unused triggers        | V1 had 9 email-only flows                                                           | No messages on Submitted Search, Viewed Collection, Price Drop, Low Inventory, predicted next order date, or the at-risk and lapsed segments |
| Unproven code lift     | Klaviyo’s attribution credits a flow even when the order would have happened anyway | No way to tell real lift from orders that would have come anyway                                                                             |
| Inbox risk             | Sending to unengaged profiles                                                       | Higher spam placement risk AND more billable profiles                                                                                        |

|Result|How V2 delivers it|
|---|---|
|More placed orders|26 flows across email, SMS and WhatsApp|
|Protected margin|Every money-off code is gated AND tested against a holdout|
|Break-even awareness|A 20% code needs 2.5 times the extra orders a 10% code needs (illustrative, 60% margin)|

### 2. How it solves each problem

**Simple terms:** Before any code goes out, a checkpoint asks three questions. Did this person get a code recently? Did they show interest? Do they normally pay full price? IF a code wouldn’t change their mind, THEN they get the same email without it. Some eligible people never get the code at all, so we can compare and see whether the code really added orders. Every shopper gets the cheapest fix first: fit help, free size exchanges, reviews, early access and real stock counts. Money only comes last. The system remembers who hunts for deals, so only they see the Rack or a code. Each shopper gets one buying sequence at a time, plus fit help before returns happen. People who stop opening are asked if they still want emails, then removed. Texts and WhatsApp go only to big carts, VIPs, and people leaving email.

**Technical terms:**

|Mechanism|Build|Rule|
|---|---|---|
|Offer Gate|Multi-branch split before every money-off code|Block IF \`tlre_last_offer\` is within 30 days OR there’s no click or site visit since the flow started OR a repeat buyer has \`price_sens\` ≠ high|
|Holdout|15% random-sample split after the gate|Judge on placed order rate AND net revenue per recipient. IF the code wins, THEN cut the holdout to 5%. ELSE remove the code|
|Offer ladder|Message order inside each flow|Info → early access → Rack → free shipping → 10% → 15% → 20%|
|Price signal|F5-PS, a flow with no messages, on Placed Order|\`price_sens\` = high from codes the shopper went looking for, Rack buys, “sale” searches and Rack views. A full-price order resets it to low|
|Intent ladder|Flow filters|Lower-intent flows exit when a higher event fires: site → search/collection → browse → cart → checkout|
|Return cutters|F16 on Fulfilled Order, F17 on Refunded Order|Fit check at home AND free size exchange before a refund|
|Inbox protection|F9 Sunset + suppression + message filters|Suppress the Sunset Complete segment monthly. Fewer than 3 emails received in 7 days on low-priority flows. Engaged in the last 180 days on win-back flows|
|Channel limits|SMS and WhatsApp steps|SMS on F4 carts of $100+, F23 VIPs and F25. WhatsApp only when there’s no SMS consent|

**Why this matters:** most Klaviyo builds prove an email made money. TLRE V2 also proves whether the discount did. It runs on test data, so the lift is designed and testable but not yet measured.

## 1. Purpose

- **Why it exists:** Off-Bolt now allows codes in any flow. The usual setup gives one code to everyone. SO codes go to people who'd buy anyway, AND margin leaks on every one of those orders.
- **The V1 problem nobody saw:** V1's only incentive was free US shipping. BUT every full-price piece costs $128 or more, AND US orders over $100 already ship free. SO that code changed almost no orders. The shopper's thought was simply "It ships free anyway."
- **How V2 works:** every shopper gets the cheapest fix first: fit help, the free size exchange, reviews, early access, a real stock count. Money comes last, AND ONLY IF the Offer Gate says it can cause the order.
- **How it's judged:** placed order rate. Each code is tested against a holdout that gets the same email without the code.

### The offer ladder

| Step | Doubt it removes | Cost to the store |
| --- | --- | --- |
| L0 Information: fit rule, free exchange, reviews, care | "Will it fit?", "Is $148 worth it?", "Will it wrinkle?" | None |
| L1 Early access (Run Notes) | "Will I miss the next run?" | None |
| L2 Remnant Rack | "I only buy on markdown" | None. The markdown already exists |
| L3 Free shipping (first order) | "Shipping costs too much" | $8, AND ONLY on carts under $100 |
| L4 10% code (OFFBOLT16, OFFBOLT17) | "Is it worth the money?" | Margin |
| L5 15% code at day 180 (OFFBOLT20) | "I forgot about this store" | More margin |
| L6 20% code at day 240 (OFFBOLT21) | "I'm gone unless it's worth it" | The most margin, so it's used last |

### The Offer Gate

The Offer Gate is a split that sits right before every money-off code. A code goes out ONLY IF ALL of these are true:

1. No order since the flow started (flow filter).
2. No money-off code in the last 30 days (profile property \`tlre_last_offer\`).
3. They showed intent. In F1 that's a click OR a site visit since the flow started. In F4 the checkout itself is the intent.
4. A repeat buyer needs \`price_sens\` = high (F4, F8). F24 is the one exception (see the table below).
5. They land outside the 15% holdout.
6. Win-back flows also need engagement in the last 180 days.

ELSE the same email goes out without the code.

What does the holdout do? It answers one question: did the code cause the order, or did Klaviyo just credit it? Why does that matter? Because Klaviyo credits the email even WHEN the shopper would have bought anyway.

**Repeat-buyer code rule** (repeat buyer = 1 or more orders):

| Flow | Code for repeat buyers? | Condition |
| --- | --- | --- |
| F4 Checkout, last message | OFFBOLT17 | ONLY IF \`price_sens\` = high |
| F8 Win-Back, day 180 | OFFBOLT20 | ONLY IF \`price_sens\` = high |
| F24 Lapsed | OFFBOLT21 | Any lapsed buyer engaged in the last 180 days |
| F18 Next Piece | None | The reorder is already coming |
| F22 Birthday | None, for anyone | A birthday shows no doubt about buying |
| F1, F1-S | None | First-order offers only |

### Break-even math

A code pays ONLY IF the extra orders it brings cover the discount given to every coded order.

\`\`\`
A code pays IF   order rate with code × (margin − discount)   >   order rate without code × margin
\`\`\`

**Example (illustrative):** assumed 60% gross margin, $164 seed AOV, 5% order rate without a code. So the margin per order is $98.40.

| Code | Discount per order | Break-even order rate | Lift needed |
| --- | --- | --- | --- |
| 10% | $16.40 | 6.0% | +20% |
| 15% | $24.60 | 6.7% | +33% |
| 20% | $32.80 | 7.5% | +50% |

SO a 20% code needs 2.5 times the extra orders a 10% code needs, just to break even. That's why the bigger codes sit at the end of the ladder.

SO basically, every message has one job, the cheapest fix goes first, AND a code is sent ONLY where it can cause the order. More placed orders, AND the margin stays with the store.

---

## 2. Structure

### 2.1 How the engine reads

- **One stage per customer:** stored in \`tlre_stage\`. Orders move a customer up. Time moves them down.
- **Intent ladder:** Site < Collection OR Search < Browse < Cart < Checkout. IF a higher event happens, THEN the lower flow exits (flow filters). SO nobody gets two "please buy" flows at once.
- **Any order** stops every "please buy" flow.
- **Splits** are Klaviyo multi-branch splits. Paths are checked in order, 1 by 1. A shopper takes the FIRST path that matches. Else catches everyone left.
- **Paths never rejoin.** SO each path carries its own messages after the split.
- **Filters:** flow filters are re-checked before every step. A message filter (Additional filter) skips ONLY that one message, AND the profile keeps going.

### 2.2 Naming code

Every split, path AND message is named so a report reads like a map.

| Code | Means | Example |
| --- | --- | --- |
| S + number | Split | \`S1\`, \`S2\` |
| S + number + P + number | Path of that split | \`S1P2\` = Split 1, Path 2 |
| E + split number | Email inside that split | \`S2P1E2\` = email in Split 2, Path 1 |
| E0 | Email before any split | \`E0\` |
| a, b, c | Several messages in the same path | \`S2P2E2a\`, \`S2P2E2b\` |
| SMS / WA | Text OR WhatsApp, same rule as E | \`S1P1SMS1\`, \`WA0\` |

**Full name in Klaviyo:** \`{Code} = {4 to 8 words on what it does}\`. SO a report OR the flow canvas explains itself without opening anything.

| Part | Example |
| --- | --- |
| Split | \`S3 = Offer Gate: can a code go out?\` |
| Path | \`S3P2 = Clicked or visited, eligible for code\` |
| Email | \`S4P2E4 = OFFBOLT16 10% off, 72 hours\` |
| SMS | \`SMS0a = Size question text for clickers\` |
| WhatsApp | \`WA0 = WhatsApp cart reminder, no SMS consent\` |

Message tables below use the full name. Every split AND path name sits in 2.14.

### 2.3 Engine map

\`\`\`mermaid
flowchart LR
  V["Visitor"] --> F10["F10 Site Abandon"]
  V --> F11["F11 Search Abandon"]
  V --> F12["F12 Collection Abandon"]
  F10 --> F2["F2 Browse"]
  F11 --> F2
  F12 --> F2
  F2 --> F3["F3 Cart"]
  F3 --> F4["F4 Checkout"]
  SU["Email signup"] --> F1["F1 Welcome"]
  SMSU["SMS signup"] --> F1S["F1-S SMS Welcome"]
  F13["F13 Price Drop"] -.-> ORD
  F14["F14 Low Stock"] -.-> ORD
  F1 --> ORD(("Order"))
  F4 --> ORD
  ORD --> F5["F5 Post-Purchase"]
  ORD --> F5PS["F5-PS Price Signal"]
  ORD --> F16["F16 Fit Check"]
  ORD --> F18["F18 Next Piece"]
  ORD --> F19["F19 Predicted Reorder"]
  ORD --> F8["F8 Win-Back clock"]
  ORD -.->|refunded| F17["F17 Return Save"]
  F16 --> F20["F20 Review Ask"]
  RN["Run Notes signup"] --> F6["F6 Run Notes"]
  ORD --> VIP["3rd order"]
  VIP --> F7["F7 VIP"]
  F7 --> F21["F21 Referral"]
  F8 -->|VIP at 120 days| F23["F23 VIP At-Risk"]
  F8 -->|240 days| F24["F24 Lapsed"]
  BD["Birthday"] --> F22["F22 Birthday"]
  UN["Unengaged, any stage"] --> F9["F9 Sunset"]
  F9 --> F25["F25 Channel Switch"]
\`\`\`

Plain-text version:

\`\`\`
Visitor -> F10 Site / F11 Search / F12 Collection -> F2 Browse -> F3 Cart -> F4 Checkout -> Order
Email signup -> F1 Welcome -> Order        SMS signup -> F1-S SMS Welcome
F13 Price Drop, F14 Low Stock -> Order (real markdown, real stock count)
Order -> F5 Post-Purchase + F5-PS Price Signal + F16 Fit Check (-> F20 Review Ask)
      -> F18 Next Piece + F19 Predicted Reorder + F8 Win-Back clock
      -> refund -> F17 Return Save
3rd order -> F7 VIP -> F21 Referral
F8: VIP at 120 days -> F23 VIP At-Risk     240 days -> F24 Lapsed
Run Notes signup -> F6 Run Notes           Birthday -> F22 Birthday
Unengaged (any stage) -> F9 Sunset -> F25 Channel Switch -> suppressed monthly
\`\`\`

### 2.4 Stage moves

\`\`\`mermaid
stateDiagram-v2
  state "At-Risk" as AtRisk
  [*] --> Prospect: subscribes
  [*] --> New: buys without signing up
  Prospect --> New: 1st order
  New --> Repeat: 2nd order
  Repeat --> VIP: 3rd order
  New --> AtRisk: 120 days, no order
  Repeat --> AtRisk: 120 days, no order
  VIP --> AtRisk: 120 days, no order
  AtRisk --> Repeat: orders again
  AtRisk --> Lapsed: 240 days, no order
  Lapsed --> Repeat: orders again
  Lapsed --> Sunset: stops engaging
  Sunset --> [*]: suppressed
\`\`\`

Why 120 AND 240? Off-Bolt customers buy about one piece every 4 months (seed data). At-Risk = one missed cycle. Lapsed = two.

### 2.5 Build these first

**Lists**

| List | Used by |
| --- | --- |
| \`OB \\| Email Subscriber\` | F1 Welcome trigger |
| \`OB \\| SMS subscribers list\` | F1-S SMS Welcome trigger |
| \`TLRE \\| Run notes\` | F6 Run Notes trigger |

**Segments** (every line must be true; OR marks choices inside one line)

| Segment | Rule | Used by |
| --- | --- | --- |
| \`TLRE2 \\| S1 Prospect\` | Can receive email AND 0 orders over all time | Reporting |
| \`TLRE2 \\| S2 New\` | Exactly 1 order over all time AND 1+ order in the last 120 days | Reporting |
| \`TLRE2 \\| S3 Repeat\` | Exactly 2 orders over all time AND 1+ order in the last 120 days | Reporting |
| \`TLRE2 \\| S4 VIP\` | 3+ orders over all time AND 1+ order in the last 120 days | F7, F21 triggers |
| \`TLRE2 \\| S5 At-Risk\` | 1+ orders over all time AND 0 orders in the last 120 days AND 1+ order in the last 240 days | F23 trigger |
| \`TLRE2 \\| S6 Lapsed\` | 1+ orders over all time AND 0 orders in the last 240 days | F24 trigger |
| \`TLRE2 \\| E1 Engaged-90\` | Can receive email AND (Opened Email OR Clicked Email OR Active on Site OR Placed Order in the last 90 days) | Campaign audience |
| \`TLRE2 \\| E2 Unengaged\` | Can receive email AND 5+ Received Email in 90 days AND 0 Opened AND 0 Clicked AND 0 Active on Site AND 0 Placed Order in 90 days | F9 trigger |
| \`TLRE2 \\| Offcut Entry\` | Placed Order where Items contains "The Offcut Tee" AND exactly 1 order over all time | F18 exclusion, reporting |
| \`TLRE2 \\| Sunset Complete\` | \`tlre_stage\` = sunset | F25 trigger, monthly suppression |

Opens alone don't decide anything. Apple Mail Privacy Protection inflates them, SO Unengaged also checks clicks, visits AND orders.

**Coupons** (create in Klaviyo: Content → Coupons → Create Shopify Coupon, before real emails go in)

| Coupon | Type | Offer | Expiry setting | Used in |
| --- | --- | --- | --- | --- |
| OFFBOLT1 | Static | Free US shipping, first order, no minimum, one use per customer, combines with nothing | None | F1 S2P2E2a |
| OFFBOLT2 | Static | Free standard shipping to Canada, first order | None | F1 S2P1E2a |
| OFFBOLT12 | Unique \`OB12-\` | $10 off a first order of $100+ | 30 days | F1-S S1P1SMS1 |
| OFFBOLT13 | Unique \`OB13-\` | $15 off a first order of $100+, for the referred friend | 60 days | F21 E0 |
| OFFBOLT16 | Unique \`OB16-\` | 10% off, Rack AND Offcut Tee excluded | 48 h (+24 h Klaviyo grace = 72 h) | F1 S4P2E4, S6P2E6 |
| OFFBOLT17 | Unique \`OB17-\` | 10% off, Rack AND Offcut Tee excluded | 48 h (+24 h grace) | F4 S2P2E2 |
| OFFBOLT20 | Unique \`OB20-\` | 15% off, Rack AND Offcut Tee excluded | 48 h (+24 h grace) | F8 S3P2E3 |
| OFFBOLT21 | Unique \`OB21-\` | 20% off, Rack AND Offcut Tee excluded | 6 days (+24 h grace = 7 days) | F24 S2P2E2a |

Why set 48 hours for a 72-hour deadline? Because Klaviyo adds a 24-hour grace period to unique coupons that expire after a set number of hours or days.

**Sender:** every email is from **Lorelei at Off-Bolt**. Personal notes are first person AND signed Lorelei, Off-Bolt, Providence.

### 2.6 Flows: Convert

#### F1 Welcome

| Setting | Value |
| --- | --- |
| Trigger | Added to list \`OB \\| Email Subscriber\` |
| Re-entry | None. Once per profile |
| Flow filter | Placed Order zero times since starting this flow |
| Messages | 15 emails. Each profile gets at most 4 |

\`\`\`
Added to list: OB | Email Subscriber
   |  Flow filter: Placed Order zero times since starting this flow
   |
   S1  Ordered before?
   ├─ S1P1  Placed Order 1+ over all time ......... S1P1E1  welcome back, no code
   └─ S1P2  Else
        Update profile: tlre_stage = prospect
        S2  Canada?
        ├─ S2P1  location country = Canada
        │    S2P1E2a  welcome + OFFBOLT2 (Smart Sending OFF)
        │    wait 2 days → S2P1E2b  how a run works
        │    wait 3 days → S2P1E2c  size chart + fit rules + review
        │    wait 2 days
        │    S3  Offer Gate
        │    ├─ S3P1  tlre_first_offer is set OR tlre_last_offer in the last 30 days ... S3P1E3  Run Notes invite
        │    ├─ S3P2  Clicked Email OR Active on Site since starting this flow
        │    │    S4  Holdout
        │    │    ├─ S4P1  random 15% ......................... S4P1E4  same email, no code
        │    │    └─ S4P2  Else
        │    │         Update profile: tlre_last_offer = today, tlre_first_offer = OFFBOLT16
        │    │         S4P2E4  OFFBOLT16
        │    └─ S3P3  Else (no intent) .......................... S3P3E3  Run Notes invite
        └─ S2P2  Else (US OR unknown country)
             S2P2E2a  welcome + OFFBOLT1 (Smart Sending OFF)
             wait 2 days → S2P2E2b  how a run works
             wait 3 days → S2P2E2c  size chart + fit rules + review
             wait 2 days
             S5  Offer Gate (same rules as S3)
             ├─ S5P1  offer already given OR cooldown .......... S5P1E5  Run Notes invite
             ├─ S5P2  clicked OR visited since starting
             │    S6  Holdout
             │    ├─ S6P1  random 15% ......................... S6P1E6  same email, no code
             │    └─ S6P2  Else
             │         Update profile: tlre_last_offer = today, tlre_first_offer = OFFBOLT16
             │         S6P2E6  OFFBOLT16
             └─ S5P3  Else ...................................... S5P3E5  Run Notes invite
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| S1P1E1 = Welcome back note for past buyers | Now | Welcome a past buyer back | None | Plain note from Lorelei, the newest run, Run Notes invite (hidden IF already a member) |
| S2P1E2a = Canada welcome with OFFBOLT2 free shipping | Now | Deliver the promised Canada offer | OFFBOLT2 | Code at the top, $18 standard shipping AND 7 to 12 days stated plainly, one button |
| S2P1E2b = How a numbered run works | Day 2 | Explain the runs | None | One run card (\`RUN 14 · 62 YD · 41 GARMENTS\`), mill-end cloth, never remade |
| S2P1E2c = Size chart, fit rules and review | Day 5 | Answer "will it fit?" | None | Size chart (body measurements), each piece's fit rule, one review |
| S3P1E3 = Run Notes invite, offer already given | Day 7 | Gate fail: offer already given | None | Run Notes invite: every new run 24 hours early |
| S3P3E3 = Newest run plus one honest line | Day 7 | Gate fail: no click AND no visit | None | Newest run + one honest line ("This wrinkles. That is linen.") |
| S4P1E4 = Holdout copy without the code | Day 7 | Holdout | None | Same email as S4P2E4 without the code |
| S4P2E4 = OFFBOLT16 10% off, 72 hours | Day 7 | Turn an interested prospect into a first order | OFFBOLT16, 10%, real 72-hour deadline | The offer, what's included (Rack AND Offcut Tee excluded), the real end time, one button |
| S2P2E2a = US welcome with OFFBOLT1 free shipping | Now | Deliver the promised US offer | OFFBOLT1 | Code at the top. Honest line: orders over $100 already ship free |
| S2P2E2b = How a numbered run works | Day 2 | Explain the runs | None | Same as S2P1E2b |
| S2P2E2c = Size chart, fit rules and review | Day 5 | Answer "will it fit?" | None | Same as S2P1E2c |
| S5P1E5 = Run Notes invite, offer already given | Day 7 | Gate fail: offer already given | None | Same as S3P1E3 |
| S5P3E5 = Newest run plus one honest line | Day 7 | Gate fail: no intent | None | Same as S3P3E3 |
| S6P1E6 = Holdout copy without the code | Day 7 | Holdout | None | Same email as S6P2E6 without the code |
| S6P2E6 = OFFBOLT16 10% off, 72 hours | Day 7 | Turn an interested prospect into a first order | OFFBOLT16 | Same as S4P2E4 |

Country is often unknown at signup. IF it's unknown, THEN the profile takes the US path.

#### F1-S SMS Welcome

| Setting | Value |
| --- | --- |
| Trigger | Added to list \`OB \\| SMS subscribers list\` |
| Re-entry | None |
| Flow filter | None |
| Messages | 2 SMS, 1 per profile |

\`\`\`
Added to list: OB | SMS subscribers list
   S1  First-order offer?
   ├─ S1P1  0 orders over all time AND tlre_first_offer not set
   │    Update profile: tlre_first_offer = OFFBOLT12, tlre_last_offer = today
   │    S1P1SMS1  welcome + OFFBOLT12
   └─ S1P2  Else ........................ S1P2SMS1  welcome, no code
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| S1P1SMS1 = SMS welcome with OFFBOLT12 $10 off | Now | Welcome + first-order offer by text | OFFBOLT12: $10 off $100+, 30 days | Starts "Off-Bolt:", one link, real numbers, no emoji, ends "Reply STOP to opt out" |
| S1P2SMS1 = SMS welcome, Run Notes by text | Now | Welcome by text | None | Run Notes by text: new runs 24 hours early |

Why does the SMS code set \`tlre_first_offer\`? SO the F1 email Gate sees it AND sends no second first-order code. One money-off first-order code per profile, ever.

#### F10 Site Abandon

| Setting | Value |
| --- | --- |
| Trigger | Active on Site |
| Re-entry | 30 days |
| Flow filters | Viewed Product, Added to Cart, Checkout Started AND Placed Order: each zero times since starting this flow |
| Messages | 1 email |

\`\`\`
Active on Site → wait 4 hours → E0  newest run (message filter: Received Email fewer than 3 times in the last 7 days)
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| E0 = Newest run for a quiet visitor | 4 hours | Re-open the store for a visitor who saw no piece | None | The newest run + 2 pieces, one button |

#### F11 Search Abandon

| Setting | Value |
| --- | --- |
| Trigger | Submitted Search |
| Re-entry | 14 days |
| Flow filters | Same 4 as F10 |
| Messages | 2 emails, 1 per profile |

\`\`\`
Submitted Search
   S1  Sale search?
   ├─ S1P1  SearchQuery contains "sale" OR "Sale" OR "discount" OR "rack" OR "Rack"
   │    Update profile: price_sens = high
   │    wait 1 hour → S1P1E1  results + Remnant Rack (capped)
   └─ S1P2  Else
        wait 1 hour → S1P2E1  results for their search (capped)
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| S1P1E1 = Search results plus Remnant Rack | 1 hour | Give a bargain hunter a cheaper door | None | Results for their search term + Remnant Rack pieces (20% off, final sale) |
| S1P2E1 = Results for their search plus fit | 1 hour | Finish the search for them | None | Results for their search term + one fit rule |

Both emails skip IF the profile got 3+ emails in the last 7 days.

#### F12 Collection Abandon

| Setting | Value |
| --- | --- |
| Trigger | Viewed Collection |
| Re-entry | 14 days |
| Flow filters | Same 4 as F10 |
| Messages | 2 emails, 1 per profile |

\`\`\`
Viewed Collection
   S1  Rack viewer?
   ├─ S1P1  CollectionName contains "Remnant" OR URL contains "remnant-rack"
   │    Update profile: price_sens = high
   │    wait 2 hours → S1P1E1  Rack pieces in their size (capped)
   └─ S1P2  Else
        wait 2 hours → S1P2E1  picks from that collection (capped)
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| S1P1E1 = Rack pieces in their size | 2 hours | Show the Rack to a Rack viewer | None | Rack pieces in their size (\`usual_size\` IF known), final sale stated |
| S1P2E1 = Three picks from viewed collection | 2 hours | Bring a collection viewer back | None | 3 pieces from the viewed collection, cloth AND mill country on each |

#### F2 Browse

| Setting | Value |
| --- | --- |
| Trigger | Viewed Product |
| Re-entry | 1 day |
| Flow filters | Added to Cart, Checkout Started AND Placed Order: each zero times since starting this flow |
| Messages | 3 emails |

\`\`\`
Viewed Product
   wait 2 hours
   S1  Got F2 in the last 14 days?
   ├─ S1P1  tlre_f2_last in the last 14 days ........ (ends, no message)
   └─ S1P2  Else
        Update profile: tlre_f2_last = today
        S1P2E1a  the piece + its fabric
        wait 1 day → S1P2E1b  fit rule + review
        wait 2 days
        S2  Price-sensitive?
        ├─ S2P1  price_sens = high ................. S2P1E2  Rack picks, no code
        └─ S2P2  Else ................................ (ends)
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| S1P2E1a = Viewed piece with fabric and mill | 2 hours | Bring the viewed piece back | None | The piece: cloth, mill country, weight (e.g. 11 oz Japanese cotton twill), 4:5 image, one button |
| S1P2E1b = Fit rule and one review | Day 1 | Answer the fit doubt | None | That piece's fit rule + one review + the honest line |
| S2P1E2 = Remnant Rack picks, no code | Day 3 | Give price-sensitive browsers a cheaper door | None. The Rack is already 20% off | Remnant Rack pieces, final sale stated |

Why a split AND a stamp instead of a 14-day re-entry? A 14-day re-entry also blocks shoppers who entered, carted within 2 hours AND never got an F2 email. With re-entry at 1 day, they can enter again. The stamp \`tlre_f2_last\` stops anyone who already got F2 in the last 14 days.

#### F3 Cart

| Setting | Value |
| --- | --- |
| Trigger | Added to Cart |
| Re-entry | 7 days |
| Flow filters | Checkout Started AND Placed Order: each zero times since starting this flow |
| Messages | 2 emails |

\`\`\`
Added to Cart → wait 1 hour → E0a  cart + fit rule → wait 1 day → E0b  review + free size exchange
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| E0a = Carted piece with its fit rule | 1 hour | Remind them of the carted piece | None | The carted piece (each Added to Cart event holds one item), its fit rule, "Return to cart" |
| E0b = Review plus free size exchange | Day 1 | Remove the risk | None | One review + the free US size exchange + 30-day returns |

What does E0b do? It removes the risk, SO they think "There's a free size exchange, I can just swap it IF it doesn't fit."

#### F4 Checkout

| Setting | Value |
| --- | --- |
| Trigger | Checkout Started |
| Re-entry | 7 days |
| Flow filter | Placed Order zero times since starting this flow |
| Messages | 6 emails, 2 SMS, 1 WhatsApp. Each profile gets 3 emails AND at most 1 text OR WhatsApp |

\`\`\`
Checkout Started
   wait 1 hour
   E0a  reminder (Smart Sending OFF)
   wait 4 hours
   SMS0a  message filter: cart $100+ in the last day AND clicked email since starting
   SMS0b  message filter: cart $100+ in the last day AND clicked zero times since starting
   WA0    message filter: cart $100+ in the last day AND no SMS consent AND WhatsApp opt-in
   wait 19 hours
   E0b  fit help + free exchange
   wait 2 days
   S1  Offer Gate
   ├─ S1P1  tlre_last_offer in the last 30 days ................ S1P1E1  run card, no code
   ├─ S1P2  price_sens = high OR 0 orders over all time
   │    S2  Holdout
   │    ├─ S2P1  random 15% ...................................... S2P1E2  run card, no code
   │    └─ S2P2  Else
   │         Update profile: tlre_last_offer = today
   │         S2P2E2  run card + OFFBOLT17
   └─ S1P3  Else (full-price buyer) ............................. S1P3E1  run card, no code
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| E0a = Cart and checkout link reminder | 1 hour | Remind | None | Cart items AND the checkout link (Checkout Started carries a URL that rebuilds the cart) |
| SMS0a = Size question text for clickers | 5 hours | Answer the fit question in person | None | "Reply with your size question", a person reads every text |
| SMS0b = Cart reminder text for non-clickers | 5 hours | Second chance for non-clickers | None | Cart reminder + checkout link |
| WA0 = WhatsApp cart reminder, no SMS consent | 5 hours | Same reminder on WhatsApp | None | Meta-approved template: cart reminder + checkout button |
| E0b = Fit help, free exchange, 30-day returns | Day 1 | Remove the fit risk | None | Fit rules, measurements are of the body, one free US size exchange, 30-day returns |
| S1P1E1 = Run card, cooldown, no code | Day 3 | Gate fail: code in the last 30 days | None | Run card. Units left ONLY IF \`units_left\` syncs, ELSE the run number only |
| S1P3E1 = Run card with Bound for Life | Day 3 | Gate fail: full-price buyer | None | Run card + Bound for Life repairs |
| S2P1E2 = Holdout run card without code | Day 3 | Holdout | None | Same email as S2P2E2 without the code |
| S2P2E2 = Run card with OFFBOLT17 10% | Day 3 | Close with money, last | OFFBOLT17, 10%, real 72-hour deadline | Run card + the offer + what's included + the real end time |

The size-anxious are Off-Bolt's biggest abandon group, AND returns run at 19% (seed), almost all sizing. SO F4 sells certainty about fit first, AND money last.

### 2.7 Flows: Scarcity (no codes)

#### F13 Price Drop

| Setting | Value |
| --- | --- |
| Trigger | Price Drop: viewed the product in the last 30 days, price dropped 10% or more |
| Re-entry | 7 days |
| Flow filter | Placed Order zero times since starting this flow |
| Messages | 1 email |

\`\`\`
Price Drop (viewed, 10%+ drop) → E0  the piece is on the Remnant Rack
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| E0 = Viewed piece moved to the Rack | Now | Tell a viewer their piece moved to the Rack | None. The markdown already exists | The piece, its Rack price, final sale, units left IF synced |

Works ONLY IF moving a piece to the Rack changes the variant price.

#### F14 Low Stock

| Setting | Value |
| --- | --- |
| Trigger | Low Inventory: product level, 5 or fewer left, audience viewed OR added to cart in the last 30 days |
| Re-entry | 7 days |
| Flow filter | Placed Order zero times since starting this flow |
| Messages | 1 email, 1 WhatsApp |

\`\`\`
Low Inventory (5 or fewer) → E0  real low stock → wait 4 hours → WA0 (message filter: WhatsApp opt-in AND clicked zero times since starting)
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| E0 = Real low stock count | Now | Real scarcity | None | The piece + the live count, written plainly ("12 of 30 are left") |
| WA0 = WhatsApp low stock alert, non-clickers | 4 hours | Same alert on WhatsApp | None | Meta-approved template: the piece, the count, one button |

Klaviyo's Low Inventory trigger fires once WHEN stock crosses the threshold, AND it skips people who bought the item within the set timeframe.

#### F15 Pattern Returns (campaign)

Built as a campaign, sent WHEN a pattern comes back in new cloth. Run Notes members get it first, AND past viewers of the old run get it after. No code.

### 2.8 Flows: Grow

#### F5 Post-Purchase

| Setting | Value |
| --- | --- |
| Trigger | Placed Order |
| Re-entry | Allowed |
| Flow filter | None. Every buyer finishes their thank-you path |
| Messages | 7 emails |

\`\`\`
Placed Order
   S1  First order?
   ├─ S1P1  exactly 1 order over all time
   │    Update profile: tlre_stage = new, tlre_tier = standard
   │    S2  Offcut Tee only?
   │    ├─ S2P1  Items contains "The Offcut Tee" AND order value under $100
   │    │    wait 1 day → S2P1E2a  thanks + final sale
   │    │    wait 29 days → S2P1E2b  a first full-price piece
   │    │    wait 30 days → S2P1E2c  size chart + review
   │    └─ S2P2  Else
   │         wait 1 day → S2P2E2a  thanks + Run Notes invite
   │         wait 6 days → S2P2E2b  care + Bound for Life
   └─ S1P2  Else
        S3  3+ orders?
        ├─ S3P1  3+ orders over all time
        │    Update profile: tlre_stage = vip, tlre_tier = vip
        │    wait 1 day → S3P1E3  note from Lorelei
        └─ S3P2  Else
             Update profile: tlre_stage = repeat
             wait 1 day → S3P2E3  thanks for coming back
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| S2P1E2a = Offcut Tee thanks, final sale | Day 1 | Thank an Offcut Tee buyer | None | Colour is never guaranteed, final sale, Bound for Life still covers it |
| S2P1E2b = First full-price piece with fit rule | Day 30 | Move a tee buyer to a first full-price piece | None | One full-price piece + its fit rule |
| S2P1E2c = Size chart and one review | Day 60 | Second nudge to full price | None | Size chart + one review |
| S2P2E2a = First order thanks plus Run Notes | Day 1 | Thank AND grow Run Notes | None | Thanks + Run Notes invite (hidden IF already a member) |
| S2P2E2b = Fabric care and Bound for Life | Day 7 | Set care expectations, cut returns | None | Fabric care for their piece + the 3 Bound for Life steps |
| S3P1E3 = Third order note from Lorelei | Day 1 | Recognise the third order | None | Plain first-person note from Lorelei |
| S3P2E3 = Thanks for coming back | Day 1 | Thank a returning buyer | None | Thanks for coming back + Run Notes |

The $100 cap keeps mixed orders (tee + trouser) out of the Offcut path. Review requests live in F20, BECAUSE a review asked on delivery reads better than one asked on the order date.

#### F5-PS Price Signal (no messages)

| Setting | Value |
| --- | --- |
| Trigger | Placed Order |
| Re-entry | Allowed |
| Messages | None. It ONLY sets \`price_sens\` |

\`\`\`
Placed Order
   S1  What kind of order?
   ├─ S1P1  Discount Codes not empty AND tlre_last_offer in the last 7 days ... no change (they used our own code)
   ├─ S1P2  Discount Codes not empty AND Discount Codes doesn't contain OFFBOLT1 ... price_sens = high
   ├─ S1P3  Collections contains "Remnant Rack" ............................... price_sens = high
   └─ S1P4  Else (full price) ........................................... price_sens = low
\`\`\`

Why a separate flow? Paths never rejoin. Putting this inside F5 would copy F5's paths 4 times.

#### F16 Fit Check

| Setting | Value |
| --- | --- |
| Trigger | Fulfilled Order |
| Re-entry | Allowed |
| Messages | 1 email |

\`\`\`
Fulfilled Order → wait 1 day → E0  fit check at home
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| E0 = Fit check at home, free exchange | 1 day after shipping | Cut size returns | None | How to check the fit before washing, how the free size exchange works. Rack AND Offcut Tee are final sale |

#### F17 Return Save

| Setting | Value |
| --- | --- |
| Trigger | Refunded Order |
| Re-entry | 30 days |
| Flow filter | Placed Order zero times since starting this flow |
| Messages | 1 email |

\`\`\`
Refunded Order → E0  size help + exchange first next time
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| E0 = Size help, exchange first next time | Now | Save the next order after a refund | None | Size help for their piece, "exchange first next time", Run Notes invite |

#### F18 Next Piece

| Setting | Value |
| --- | --- |
| Trigger | Placed Order |
| Re-entry | Allowed |
| Flow filters | Placed Order zero times since starting this flow AND NOT in \`TLRE2 \\| Offcut Entry\` |
| Messages | 1 email |

\`\`\`
Placed Order → wait 30 days → E0  a piece that pairs with what they bought
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| E0 = Piece that pairs with their order | Day 30 | Plant the second piece | None | One piece that pairs with what they bought + its fit rule |

#### F19 Predicted Reorder

| Setting | Value |
| --- | --- |
| Trigger | Placed Order |
| Re-entry | Allowed |
| Flow filter | Placed Order zero times since starting this flow |
| Messages | 7 emails, at most 1 per profile |
| Needs | Klaviyo predictive analytics. Off-Bolt's test data doesn't qualify yet |

\`\`\`
Placed Order → wait 28 days
   S1  expected date of next order in the next 14 days? ── S1P1 → S1P1E1  |  S1P2 → wait 14 days
   S2  same check (day 42) ─────────────────────────────── S2P1 → S2P1E2  |  S2P2 → wait 14 days
   S3  same check (day 56) ─────────────────────────────── S3P1 → S3P1E3  |  S3P2 → wait 14 days
   S4  same check (day 70) ─────────────────────────────── S4P1 → S4P1E4  |  S4P2 → wait 14 days
   S5  same check (day 84) ─────────────────────────────── S5P1 → S5P1E5  |  S5P2 → wait 14 days
   S6  same check (day 98) ─────────────────────────────── S6P1 → S6P1E6  |  S6P2 → wait 14 days
   S7  same check (day 112) ────────────────────────────── S7P1 → S7P1E7  |  S7P2 → (ends)
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| S1P1E1 to S7P1E7 = Day 28 to Day 112 newest run before reorder | The first check that matches, day 28 to day 112 | Reach them up to 14 days before their predicted reorder | None | The newest run + Run Notes early access |

#### F20 Review Ask

| Setting | Value |
| --- | --- |
| Trigger | Fulfilled Order |
| Re-entry | Allowed |
| Messages | 1 email |

\`\`\`
Fulfilled Order → wait 14 days → E0  review ask (message filter: fewer than 3 emails in the last 7 days)
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| E0 = One-question review ask | 14 days after shipping | Collect a review | None | One question ("How is it wearing?"), one button. Reviews are published as written |

#### F21 Referral

| Setting | Value |
| --- | --- |
| Trigger | Added to segment \`TLRE2 \\| S4 VIP\` |
| Re-entry | None |
| Messages | 1 email |
| Needs | The a-friend-sent-you page AND form |

\`\`\`
Enters S4 VIP → wait 21 days → E0  share Off-Bolt
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| E0 = Share link, friend gets OFFBOLT13 | Day 21 | Bring new buyers in through VIPs | OFFBOLT13 for the friend ($15 off $100+). Nothing for the VIP | Share link to the a-friend-sent-you page |

#### F6 Run Notes

| Setting | Value |
| --- | --- |
| Trigger | Added to list \`TLRE \\| Run notes\` |
| Re-entry | None |
| Messages | 3 emails |

\`\`\`
Added to list: TLRE | Run notes
   Update profile: run_notes_optin = true
   E0a  how early access works
   wait 7 days → E0b  the studio + the next run
   wait 3 days → E0c  Run Notes by text OR WhatsApp (message filter: no SMS consent)
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| E0a = How 24-hour early access works | Now | Explain early access | None | Every new run reaches Run Notes 24 hours early, 10:00 AM ET |
| E0b = Studio story and next run | Day 7 | Tell the story | None | The Providence studio AND what the next run depends on. The mills decide the date |
| E0c = Run Notes by text or WhatsApp | Day 10 | Add a second channel | None | Run Notes by text OR WhatsApp. Skipped IF they already have SMS consent |

\`run_notes_optin\` is ONLY ever set to true. Other emails read it to hide the Run Notes invite from members.

#### F7 VIP

| Setting | Value |
| --- | --- |
| Trigger | Added to segment \`TLRE2 \\| S4 VIP\` |
| Re-entry | None. The VIP welcome happens once per lifetime |
| Messages | 2 emails |

\`\`\`
Enters S4 VIP → Update profile: tlre_tier = vip → E0a  note from Lorelei → wait 14 days → E0b  Bound for Life + Run Notes
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| E0a = VIP note from Lorelei | Now | Recognise a VIP | None | A note from Lorelei + one review |
| E0b = Bound for Life plus Run Notes | Day 14 | Show the long-term promise | None | Bound for Life repairs + Run Notes invite (hidden IF already a member) |

\`tlre_tier\` never goes down. F8 reads it to route VIPs to F23.

#### F22 Birthday

| Setting | Value |
| --- | --- |
| Trigger | Date: profile property \`birthday\`, every year, on the day, 10:00 AM in the profile's time zone |
| First step | Target date step (Klaviyo needs one in every date-triggered flow) |
| Messages | 1 email |
| Needs | A birthday field on a form |

\`\`\`
Birthday (yearly) → target date → E0  birthday note
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| E0 = Birthday note from Lorelei | Birthday, 10:00 AM | A yearly personal touch | None | A short birthday note from Lorelei |

### 2.9 Flows: Rescue

#### F8 Win-Back

| Setting | Value |
| --- | --- |
| Trigger | Placed Order |
| Re-entry | Allowed |
| Flow filters | Placed Order zero times since starting this flow AND (Opened Email OR Clicked Email OR Active on Site OR Placed Order in the last 180 days) |
| Messages | 7 emails |

\`\`\`
Placed Order
   wait 120 days
   S1  VIP?
   ├─ S1P1  tlre_tier = vip ................ (ends. F23 takes over)
   └─ S1P2  Else
        Update profile: tlre_stage = at_risk
        S1P2E1a  the newest run
        wait 7 days → S1P2E1b  run card vs plain note (A/B)
        wait 7 days → S1P2E1c  Run Notes invite
        wait 46 days (day 180)
        S2  Offer Gate
        ├─ S2P1  tlre_last_offer in the last 30 days ........ S2P1E2  plain note, no code
        ├─ S2P2  price_sens = high
        │    S3  Holdout
        │    ├─ S3P1  random 15% ........................... S3P1E3  same email, no code
        │    └─ S3P2  Else
        │         Update profile: tlre_last_offer = today
        │         S3P2E3  OFFBOLT20
        └─ S2P3  Else (full-price buyer) .................... S2P3E2  plain note, no code
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| S1P2E1a = Newest run for a quiet buyer | Day 120 | Bring a quiet buyer back | None | The newest run + its run card |
| S1P2E1b = A/B: run card vs plain note | Day 127 | Test the angle | None | A/B: full run card vs a plain note from Lorelei |
| S1P2E1c = Run Notes early access invite | Day 134 | Offer early access | None | Run Notes invite: new runs 24 hours early |
| S2P1E2 = Plain note, cooldown, no code | Day 180 | Gate fail: cooldown | None | Plain note + the newest run |
| S2P3E2 = Plain note with Bound for Life | Day 180 | Gate fail: full-price buyer | None | Plain note + Bound for Life reminder |
| S3P1E3 = Holdout win-back without the code | Day 180 | Holdout | None | Same email as S3P2E3 without the code |
| S3P2E3 = OFFBOLT20 15% off, 72 hours | Day 180 | Win back a code buyer | OFFBOLT20, 15%, real 72-hour deadline | The offer + the real end time + the newest run |

Each new order kills the old clock (flow filter). SO ONLY the latest order keeps a live win-back.

#### F23 VIP At-Risk

| Setting | Value |
| --- | --- |
| Trigger | Added to segment \`TLRE2 \\| S5 At-Risk\` |
| Re-entry | 240 days |
| Flow filters | \`tlre_tier\` = vip AND (Opened OR Clicked OR Active on Site OR Placed Order in the last 180 days) AND Placed Order zero times since starting this flow |
| Messages | 2 emails, 1 SMS |

\`\`\`
Enters S5 At-Risk (VIPs only)
   Update profile: tlre_stage = at_risk
   E0a  plain note from Lorelei
   wait 2 days → SMS0  short note by text
   wait 7 days → E0b  early access to the newest run
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| E0a = Personal check-in from Lorelei | Now | Personal check-in | None | Plain first-person note from Lorelei |
| SMS0 = VIP check-in text from Lorelei | Day 2 | Same note, by text | None | "Off-Bolt:" opener, newest run link, "Reply STOP to opt out" |
| E0b = VIP early access to newest run | Day 9 | Early access | None | The newest run, 24 hours before the public |

#### F24 Lapsed

| Setting | Value |
| --- | --- |
| Trigger | Added to segment \`TLRE2 \\| S6 Lapsed\` |
| Re-entry | 52 weeks |
| Flow filters | Placed Order zero times since starting this flow AND (Opened OR Clicked OR Active on Site OR Placed Order in the last 180 days) |
| Messages | 4 emails |

\`\`\`
Enters S6 Lapsed
   Update profile: tlre_stage = lapsed
   S1  Offer Gate
   ├─ S1P1  tlre_last_offer in the last 30 days ........ S1P1E1  the newest run, no code
   └─ S1P2  Else
        S2  Holdout
        ├─ S2P1  random 15% ........................... S2P1E2  same email, no code
        └─ S2P2  Else
             Update profile: tlre_last_offer = today
             S2P2E2a  OFFBOLT21
             wait 5 days → S2P2E2b  reminder, ends in 2 days
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| S1P1E1 = Newest run, cooldown, no code | Now | Gate fail: cooldown | None | The newest run |
| S2P1E2 = Holdout lapsed email without code | Now | Holdout | None | Same email as S2P2E2a without the code |
| S2P2E2a = OFFBOLT21 20% off, 7 days | Now | The last real offer | OFFBOLT21, 20%, real 7-day deadline | The offer + what's included + the real end time |
| S2P2E2b = OFFBOLT21 ends in 2 days | Day 5 | Reminder | Same code | "Ends in 2 days" + the real end time |

### 2.10 Flows: Protect

#### F9 Sunset

| Setting | Value |
| --- | --- |
| Trigger | Added to segment \`TLRE2 \\| E2 Unengaged\` |
| Re-entry | 180 days |
| Flow filters | Clicked Email, Active on Site AND Placed Order: each zero times since starting this flow |
| Messages | 2 emails |

\`\`\`
Enters E2 Unengaged
   E0a  still want our emails?
   wait 4 days → E0b  last email
   wait 3 days → Update profile: tlre_stage = sunset
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| E0a = Still want our emails? | Now | Ask to stay | None | "Still want our emails?" with ONE button: "Yes, keep me" |
| E0b = Last email before we stop | Day 4 | Last email | None | A short last note. The unsubscribe link stays visible |

A click means "keep me": the flow filter removes them AND they leave the segment. Monthly: Audience → \`TLRE2 | Sunset Complete\` → Suppress current members. Suppressed profiles stop counting toward the billed profile count.

#### F25 Channel Switch

| Setting | Value |
| --- | --- |
| Trigger | Added to segment \`TLRE2 \\| Sunset Complete\` |
| Re-entry | 180 days |
| Messages | 1 SMS, 1 WhatsApp. At most 1 per profile |

\`\`\`
Enters Sunset Complete
   S1  Another channel?
   ├─ S1P1  SMS consent .................. S1P1SMS1  email is paused, Run Notes by text
   ├─ S1P2  WhatsApp opt-in .............. S1P2WA1   same message on WhatsApp
   └─ S1P3  Else ......................... (ends)
\`\`\`

| Message | When | Job | Offer | Preferred content (customizable per case) |
| --- | --- | --- | --- | --- |
| S1P1SMS1 = Email paused, Run Notes by text | Now | Keep the buyer reachable by text | None | "Email is paused. Run Notes continues by text." + "Reply STOP to opt out" |
| S1P2WA1 = Email paused, Run Notes on WhatsApp | Now | Keep the buyer reachable on WhatsApp | None | Meta-approved template with the same message |

### 2.11 Smart Sending AND frequency

| Setting | Where | Why |
| --- | --- | --- |
| Smart Sending OFF | F1 S2P1E2a, S2P2E2a. F4 E0a | Smart Sending skips, it never reschedules. A promised offer AND the highest-intent reminder must land |
| Smart Sending ON | Every other email, SMS AND WhatsApp | Stops two messages landing too close together |
| SMS quiet hours ON | Every SMS | No texts before 8 AM OR after 9 PM local time |
| 3-a-week cap | F10, F11, F12, F20 emails | Message filter: skip IF 3+ emails received in the last 7 days. These are the lowest-priority emails |
| Campaign audience | \`TLRE2 \\| E1 Engaged-90\` ONLY | Mailing people who never engage hurts inbox placement |

### 2.12 Campaigns per run

| Campaign | Audience | Timing | Smart Sending |
| --- | --- | --- | --- |
| Run release, Run Notes | \`TLRE \\| Run notes\` | 10:00 AM ET on release day | OFF. Early access is the promise |
| Run release, public | \`TLRE2 \\| E1 Engaged-90\`, excluding Run Notes | 24 hours later | ON |
| F15 Pattern Returns | Run Notes first, THEN past viewers of that pattern | WHEN a pattern returns in new cloth | ON |

### 2.13 Test before going live

1. Keep every flow on Draft OR Manual until its paths pass.
2. Use one test profile per path (plus-address emails, one incognito window each).
3. For the 120, 180 AND 240-day steps: clone the flow as \`TLRE2 TEST | ...\`, shrink waits to minutes, run it, THEN delete the clone.
4. Check every Gate path: cooldown, price_sens high, never ordered, full-price buyer, AND the holdout.
5. Check the stamps: \`tlre_last_offer\`, \`tlre_first_offer\`, \`tlre_f2_last\`, \`price_sens\`, \`tlre_stage\`, \`tlre_tier\`.
6. Preview every email with a real test profile. Links work, unsubscribe present, mobile view clean.
7. Switch flows to Live one at a time.

### 2.14 Split AND path names

| Flow | Split | Paths |
| --- | --- | --- |
| F1 | \`S1 = Has this subscriber ordered before?\` | \`S1P1 = Past buyer, welcome back only\` · \`S1P2 = New prospect, start welcome series\` |
| F1 | \`S2 = Is the subscriber in Canada?\` | \`S2P1 = Canada, free Canada shipping welcome\` · \`S2P2 = US or unknown, free US shipping\` |
| F1 | \`S3\` AND \`S5 = Offer Gate: can a code go out?\` | \`P1 = Offer already given or cooldown active\` · \`P2 = Clicked or visited, eligible for code\` · \`P3 = No intent shown, no code\` |
| F1 | \`S4\` AND \`S6 = Holdout: does OFFBOLT16 cause orders?\` | \`P1 = Random 15% holdout, no code\` · \`P2 = Gets OFFBOLT16 first order code\` |
| F1-S | \`S1 = Can this subscriber get a first-order offer?\` | \`S1P1 = Never ordered, no first offer yet\` · \`S1P2 = Already ordered or offer used\` |
| F2 | \`S1 = Got a browse email in 14 days?\` | \`S1P1 = Emailed within 14 days, exit quietly\` · \`S1P2 = Not emailed recently, send browse series\` |
| F2 | \`S2 = Is this browser price-sensitive?\` | \`S2P1 = Price-sensitive, show Remnant Rack picks\` · \`S2P2 = Full-price browser, end the flow\` |
| F4 | \`S1 = Offer Gate: can a code go out?\` | \`S1P1 = Code in last 30 days, cooldown\` · \`S1P2 = Price-sensitive or never ordered before\` · \`S1P3 = Full-price repeat buyer, no code\` |
| F4 | \`S2 = Holdout: does OFFBOLT17 cause orders?\` | \`S2P1 = Random 15% holdout, no code\` · \`S2P2 = Gets OFFBOLT17 10% checkout code\` |
| F11 | \`S1 = Did they search for a deal?\` | \`S1P1 = Deal search, flag as price-sensitive\` · \`S1P2 = Regular search, show their results\` |
| F12 | \`S1 = Did they view the Remnant Rack?\` | \`S1P1 = Rack viewer, flag as price-sensitive\` · \`S1P2 = Other collection, show its picks\` |
| F5 | \`S1 = Is this their first order?\` | \`S1P1 = First order, set stage new\` · \`S1P2 = Second order or later\` |
| F5 | \`S2 = Was it an Offcut Tee order?\` | \`S2P1 = Offcut Tee under $100, upsell path\` · \`S2P2 = Full-price first order, care path\` |
| F5 | \`S3 = Has this buyer reached VIP?\` | \`S3P1 = Third order or more, VIP\` · \`S3P2 = Second order, set stage repeat\` |
| F5-PS | \`S1 = What kind of discount did they use?\` | \`S1P1 = Used our own code, no change\` · \`S1P2 = Sought out a code, flag high\` · \`S1P3 = Bought from the Rack, flag high\` · \`S1P4 = Full-price order, reset to low\` |
| F19 | \`S1\` to \`S7 = Day 28\` to \`Day 112: reorder due within 14 days?\` | \`P1 = Reorder predicted soon, send newest run\` · \`P2 = Not due yet, wait 14 days\` (\`S7P2 = Still not due, end flow\`) |
| F8 | \`S1 = Is this quiet buyer a VIP?\` | \`S1P1 = VIP, exit to F23 VIP At-Risk\` · \`S1P2 = Standard buyer, start win-back series\` |
| F8 | \`S2 = Offer Gate at day 180\` | \`S2P1 = Code in last 30 days, cooldown\` · \`S2P2 = Price-sensitive buyer, test the code\` · \`S2P3 = Full-price buyer, no code\` |
| F8 | \`S3 = Holdout: does OFFBOLT20 cause orders?\` | \`S3P1 = Random 15% holdout, no code\` · \`S3P2 = Gets OFFBOLT20 15% win-back code\` |
| F24 | \`S1 = Offer Gate: code in 30 days?\` | \`S1P1 = Code in last 30 days, cooldown\` · \`S1P2 = No recent code, test the offer\` |
| F24 | \`S2 = Holdout: does OFFBOLT21 cause orders?\` | \`S2P1 = Random 15% holdout, no code\` · \`S2P2 = Gets OFFBOLT21 20% last offer\` |
| F25 | \`S1 = Can we reach them elsewhere?\` | \`S1P1 = Has SMS consent, switch to text\` · \`S1P2 = WhatsApp opt-in, switch to WhatsApp\` · \`S1P3 = No other channel, end flow\` |

### 2.15 Placeholder copy

Every email AND SMS now holds plain placeholder copy. Why? Because a client review goes faster WHEN they read real sentences instead of empty blocks.

- **Emails:** one simple HTML template per email, built from the "Preferred content" column. Each is named \`TLRE2 | F# | {Code} = {description}\` in the template library. Klaviyo stores its own copy inside the flow.
- **Every email starts** with \`[PLACEHOLDER COPY. Customizable per case.]\`, AND every holdout email says which coded email it mirrors.
- **Brackets mark the swaps:** \`[PRODUCT NAME]\`, \`[RUN CARD]\`, \`[FIT RULE PLACEHOLDER]\`, \`[REVIEW QUOTE PLACEHOLDER]\`, \`[END TIME]\`.
- **Codes show as text,** e.g. \`[UNIQUE CODE: OFFBOLT16]\`. Swap in Klaviyo's coupon tag ONLY after the coupon exists. ELSE the email breaks.
- **Live tags already in place:** \`first_name\`, \`event.SearchQuery\`, \`event.CollectionName\`, \`event.extra.checkout_url\` (falls back to the cart), \`usual_size\`. The Run Notes invite hides itself IF \`run_notes_optin\` is true.
- **Every email** is signed Lorelei, Off-Bolt, Providence, AND ends with the unsubscribe tag.
- **SMS** starts "Off-Bolt: [PLACEHOLDER]" AND ends "Reply STOP to opt out".
- **WhatsApp** has a name but no text. WhatsApp messages need Meta-approved templates, SO the copy goes in after approval.

---

## 3. Variables and data

### 3.1 Data the flows need

| Data | From | Used in |
| --- | --- | --- |
| Placed Order: \`Discount Codes\`, \`Collections\`, \`Items\`, \`$value\` | Shopify | F5, F5-PS, F8, F18, F19, every flow filter |
| Checkout Started: \`$value\`, checkout URL | Shopify | F4 |
| Added to Cart | Shopify onsite tracking | F3, flow filters |
| Viewed Product | Klaviyo onsite tracking | F2, flow filters |
| Active on Site | Klaviyo onsite tracking | F10, Gate intent check, engagement filters |
| Submitted Search: \`SearchQuery\` | Shopify | F11 |
| Viewed Collection: \`CollectionName\`, \`URL\` | Shopify | F12 |
| Fulfilled Order | Shopify | F16, F20 |
| Refunded Order | Shopify | F17 |
| Received, Opened AND Clicked Email | Klaviyo | Gate intent, engagement filters, 3-a-week cap |
| Catalog price AND inventory | Shopify catalog sync | F13 Price Drop, F14 Low Inventory |
| Expected date of next order | Klaviyo predictive analytics | F19 |
| Location country | Klaviyo profile | F1 Canada split |
| SMS consent AND WhatsApp opt-in | Klaviyo profile | F4, F6, F25 |

### 3.2 Profile properties

| Property | Values | Set by | Read by |
| --- | --- | --- | --- |
| \`tlre_stage\` | prospect, new, repeat, vip, at_risk, lapsed, sunset | F1, F5, F8, F9, F23, F24 | Reporting, Sunset Complete segment |
| \`tlre_tier\` | standard, vip (never goes down) | F5, F7 | F8, F23 |
| \`price_sens\` | high, low | F5-PS, F11, F12 | F2, F4, F8 Gates |
| \`tlre_last_offer\` | Date of the last money-off code | Every code path, F1-S | Every Gate (30-day cooldown), F5-PS |
| \`tlre_first_offer\` | OFFBOLT12 OR OFFBOLT16 | F1-S, F1 | F1 Gate, F1-S |
| \`tlre_f2_last\` | Date F2 last sent | F2 | F2 S1 |
| \`run_notes_optin\` | true (never false) | F6 | Run Notes invite blocks |
| \`usual_size\`, \`fit_preference\` | From the signup form (optional) | Forms | Fit lines in F2, F3, F4, F12 |
| \`birthday\` | Date | Form | F22 trigger |

\`price_sens\` counts ONLY discounts the shopper went looking for: sale codes, Rack buys, "sale" searches AND Rack views. Using OUR code doesn't count. A later full-price order resets it to low.

### 3.3 What must exist before it can send

| Item | Needed for |
| --- | --- |
| The 8 coupons in 2.5 | Every code message |
| Final copy in place of the placeholder copy | Every email AND SMS |
| A verified toll-free number | Every SMS |
| WhatsApp connected AND Meta-approved templates (the 3 WhatsApp steps hold names only) | F4 WA0, F14 WA0, F25 S1P2WA1 |
| The a-friend-sent-you page AND form | F21 |
| A birthday field on a form | F22 |
| Predictive analytics eligibility | F19 |
| A native app with Klaviyo's SDK | Push (planned) |

---

## 4. Decisions

| Choice | Because |
| --- | --- |
| Information before money, every time | The cause is usually a small doubt. A code pays shoppers who were coming back anyway |
| The Offer Gate before every money-off code | Codes go ONLY to people they can change |
| A 15% holdout on every code | Klaviyo credits the email even IF the shopper would have bought anyway. The holdout proves the code earned its money |
| Holdout as a test window, THEN 5% OR the code goes | A permanent 15% holdout caps sales IF the code really works |
| 30-day cooldown on money-off codes | Stops shoppers learning to wait for a code |
| One first-order money-off code per profile | No collecting OFFBOLT12 AND OFFBOLT16 in the same week |
| \`price_sens\` from sought discounts ONLY | Using our own code isn't a signal. OFFBOLT1 is ignored. A full-price order resets it |
| Repeat-buyer codes ONLY in F4, F8 day 180 AND F24 | Each one is real doubt: an abandoned checkout, a missed cycle, two missed cycles |
| No code in F18 AND F22 | The reorder is already coming. A birthday shows no doubt |
| Unique codes set to 48 hours | No leaking to coupon sites. The +24 h grace makes a real 72-hour deadline |
| Rack AND Offcut Tee excluded from codes | They're already marked down AND final sale |
| OFFBOLT1 kept in F1 | The popup promised it, AND it costs about $0 BECAUSE orders over $100 ship free |
| Smart Sending OFF on the promised AND highest-intent emails | A skipped email is gone for good |
| Intent ladder exits | ONE "please buy" flow at a time |
| F2 stamp split with 1-day re-entry | A browse that got no email can enter again. A repeat browse inside 14 days stops |
| SMS AND WhatsApp ONLY on carts $100+ | Every message costs money. Bigger carts pay it back |
| Texts to clickers AND non-clickers in F4 | A clicker who didn't order still has friction, SO the text asks their size question |
| WhatsApp in place of push | Push needs a native app. WhatsApp reaches anyone who opts in |
| Rack in place of codes for price-sensitive browsers | The markdown already exists, AND it clears the older runs |
| Low stock AND pattern returns with no code | Real scarcity costs $0 |
| Fit check on delivery AND return save | Returns are 19% (seed), almost all sizing. Fewer returns means more revenue kept |
| Review ask 14 days after delivery | She has worn the piece by then |
| F14 WhatsApp ONLY IF E0 wasn't clicked, after 4 hours | No paid message to someone who already acted |
| F19 checks every 14 days, between day 28 and day 112 | The email lands up to 14 days before the predicted reorder, AND at most once |
| VIPs leave F8 at day 120 for F23 | A VIP gets a personal note AND early access, no code |
| Engagement filter (180 days) on win-back | Emailing dead addresses hurts inbox placement |
| 3-a-week cap on low-priority flows | Protects the inbox AND the shopper's attention |
| F5-PS as its own flow | Paths never rejoin, SO this avoids copying F5 four times |
| Naming code S/P/E | Reports read like the flow map |

### 4.1 Tests

Each test changes ONE thing. Codes are judged on placed order rate AND net revenue per recipient: (revenue minus discounts) divided by recipients.

| Flow | Where | What changes | Holdout size |
| --- | --- | --- | --- |
| F1 Welcome | S4, S6 | OFFBOLT16 vs no code | 15% |
| F4 Checkout | S2 | OFFBOLT17 vs no code | 15% |
| F8 Win-Back | S3 | OFFBOLT20 vs no code | 15% |
| F24 Lapsed | S2 | OFFBOLT21 vs no code | 15% |
| F8 Win-Back | S1P2E1b | Full run card vs plain note (set the A/B in the Klaviyo editor) | 50/50 |

**After the test window:** IF the code wins on net revenue per recipient, THEN the holdout drops to 5% for monitoring. ELSE the code is removed. With test data, the setup is the proof. There is no winner to report yet.

Klaviyo's revenue won't match Shopify's. Shopify subtracts cancelled AND refunded orders, AND Klaviyo doesn't.

---

## 5. Versions

| Version | Date | Change |
| --- | --- | --- |
| 1.0 | 19 Sep 2026 | 9 flows, email only, OFFBOLT1 as the only code, 4 A/B tests |
| 2.0 | 20 Nov 2026 | 26 flows, the Offer Gate, 5 holdout splits, 4 money-off codes, SMS AND WhatsApp, price signal, scarcity AND return-cutting flows |
| 2.1 | 20 Nov 2026 | \`Code = description\` names on every split, path AND message. Placeholder copy in every email AND SMS. Sender set to Lorelei at Off-Bolt |

### What changed in 2.1

1. **Names that explain themselves**
   Was: codes only (\`S3P2\`). Now: \`S3P2 = Clicked or visited, eligible for code\`. 30 splits, every path, 73 emails, 6 SMS AND 3 WhatsApp steps.
2. **Placeholder copy**
   Was: empty emails. Now: 73 emails AND 6 SMS hold plain placeholder copy, each built from its job AND preferred content.
3. **Sender**
   Was: the account default. Now: every email sends from Lorelei at Off-Bolt.

### What changed in 2.0

1. **Codes, with a gate**
   Was: no codes except free US shipping. Now: 4 money-off codes, each behind the Offer Gate AND a 15% holdout.
2. **Who gets a code**
   Was: nobody. Now: decided by intent, \`price_sens\`, a 30-day cooldown AND the repeat-buyer rule.
3. **17 new flows**
   F1-S SMS Welcome, F5-PS Price Signal, F10 Site, F11 Search, F12 Collection, F13 Price Drop, F14 Low Stock, F16 Fit Check, F17 Return Save, F18 Next Piece, F19 Predicted Reorder, F20 Review Ask, F21 Referral, F22 Birthday, F23 VIP At-Risk, F24 Lapsed, F25 Channel Switch.
4. **Channels**
   Was: email only. Now: SMS AND WhatsApp on the steps where they pay back.
5. **Win-back**
   Was: one path for everyone. Now: VIPs go to F23, unengaged buyers get nothing, a gated code at day 180, AND a last offer in F24.
6. **Browse**
   Was: 14-day re-entry. Now: 1-day re-entry plus a 14-day stamp split.
7. **Reviews**
   Was: asked in F5 on the order date. Now: F20, 14 days after delivery.
8. **Brand facts**
   Free US shipping now starts at $100. Emails now come from Lorelei.

### Coming next

- Create the 8 coupons, THEN swap the code placeholders for Klaviyo coupon tags AND the placeholder copy for final copy.
- Connect WhatsApp AND get the 3 templates approved.
- Verify the toll-free number for SMS.
- Build the a-friend-sent-you page (F21) AND add a birthday field (F22).
- Add push WHEN a native app exists.
- Send the run release AND F15 Pattern Returns campaigns per run.
- Archive the 9 V1 flows.`,
          previous: [                          // older versions: same folder, tucked behind a note under the latest file
            { name: "V1", text: `# V1.0 · TLRE: The Lifecycle Revenue Engine

**Version:** V1.0 · 19 Sep 2026

## Card details

| | |
|---|---|
|**Title**|TLRE: The Lifecycle Revenue Engine|
|**Card summary**|Nine flows, one stage per customer|
|**Details line**|Klaviyo + Shopify · 9 flows · 6 lifecycle segments · 2 signup forms · 4 A/B tests · email only · practice store|
|**Tag**|Klaviyo · Shopify · Lifecycle system|

## Story

### The problem

Separate flows do not know about each other. One shopper can sit in the browse, cart and checkout flows at once, keep getting "please buy" emails after they have bought, and be offered a first-order code they have already used. Nothing ties the emails to where the customer is in their life with the brand.

### What I built

- One lifecycle stage per customer, stored in a profile property. Six lifecycle segments and four helper segments decide who gets which email.
- Nine flows that hand off to each other: welcome, browse, cart, checkout, post-purchase, Run Notes, VIP, win-back and sunset. A higher-intent event stops the lower flow, and any order stops every "please buy" flow.
- Win-back timing set from the practice brand's buying cycle of about four months: At-Risk at 120 days with no order, Lapsed at 240.
- No discount codes except free US shipping on a first order. Returning customers get early access through Run Notes, and scarcity is always a real run number.
- Cart and checkout recovery that sells certainty about fit instead of a discount, and shows the shopper's usual size when it is known. 4 A/B tests, each changing one thing and judged by orders or joins, not opens.
- A reporting dashboard, plus a rebuild and maintenance guide that lists every form, property, segment, flow and setting with the reason behind each one.

### Result

Built and tested on a Shopify development store with test data, for Off-Bolt, a practice brand. The documentation makes no revenue claims. Three things are still unverified and listed openly in section 14: whether the units-left metafield syncs to Klaviyo, whether the run number arrives on the Checkout Started event, and whether a backdated test order keeps its date.

*Too many flows inside to render, the visual is inside the documentation.*

---
# TLRE: The Lifecycle Revenue Engine

**Rebuild and Maintenance Guide**
**Klaviyo + Shopify** · Built for Off-Bolt (practice store)

---

## Purpose

This guide lets your team maintain, repair, or fully rebuild TLRE without outside help.
It lists every form, property, segment, flow, and setting.

## Note

Off-Bolt is a practice brand. TLRE was built and tested on a Shopify development store using test data.

---

## 1. What TLRE is

TLRE is one connected Klaviyo system for a Shopify store or in simple terms a full Lifecycle.
Each customer sits in exactly one lifecycle stage. That stage decides which emails they get. No one is inside 2+ flows, customer exits a flow, customers enter a new flow.

**Parts:**

- 2 signup forms: Popup → "Newsletter" list AND Run Notes page form → "Run Notes" list
- 6 lifecycle segments: Prospect, New, Repeat, VIP, At-Risk, Lapsed
- 4 helper segments: Engaged, Unengaged, Offcut Entry, Sunset Complete
- 9 flows: Welcome, Browse, Cart, Checkout, Post-Purchase, Run Notes, VIP, Win-Back, Sunset
- 2 release campaigns per new run: Run Notes first, public 24 hours later
- 6 profile properties: 2 new (\`tlre_stage\`, \`tlre_tier\`), 4 existing (\`usual_size\`, \`fit_preference\`, \`run_notes_optin\`, \`last_run_purchased\`) NOTE: Property names can be changed
- 4 A/B tests
- 1 reporting dashboard

**Lifecycle stages** (value stored in \`tlre_stage\`):

How to read: F1 = Flow 1 and so on.

|Stage|Value|Meaning|Set by|
|---|---|---|---|
|Prospect|\`prospect\`|Subscribed, never ordered|F1|
|New|\`new\`|First order|F5|
|Repeat|\`repeat\`|Second order|F5|
|VIP|\`vip\`|Third order|F5 and F7|
|At-Risk|\`at_risk\`|120 days with no order|F8|
|Lapsed|\`lapsed\`|240 days with no order|F8|
|Sunset|\`sunset\`|Stopped engaging|F9|

**Why 120 and 240 days:** Off-Bolt customers buy about every four months.
At-Risk = one missed cycle. Lapsed = two missed cycles.

**How profiles move:**

- ORDERS are the only thing that moves a customer up. (moves up means they are going back to "Repeat stage OR VIP OR New ")
- TIME is the only thing that moves a customer down. (moves down means they are going to the direction of sunset)
- Any stage can drop into Sunset when engagement stops.

---

## 2. The five rules

1. Every customer is in exactly one stage.
2. If a customer shows higher buying intent, the lower-intent flow stops.
   Intent ladder: Checkout (F4) > Cart (F3) > Browse (F2).
3. If a customer buys, every "please buy" flow stops (F1–F4).
4. Segments decide WHO gets a message. Properties decide WHAT it says.
5. No discount codes, with one exception. First orders get free US shipping (code \`OFFBOLT1\`).
   Returning customers get early access through Run Notes. Scarcity is always a real run number, never invented.

---

## 3. Before you start

### Naming

- Every new TLRE asset starts with "TLRE | " (example: "TLRE | F4 Checkout Abandon").
- Existing lists keep their names: "Newsletter", "Run Notes", "SMS Subscribers".
- Name each email by its position (example: F4-E1, F5-O2) so reports stay readable.

### Klaviyo account

- One Klaviyo account per Shopify store. The Klaviyo app embed links to only one store.
- From name: "Stephanie at Off-Bolt". Send from an address you control.
- Create the "Newsletter" and "Run Notes" lists BEFORE you connect Shopify.

### Connect Shopify (Klaviyo → Integrations → Shopify)

- **ON:** Sync your Shopify email subscribers to Klaviyo → choose "Newsletter".
- **ON:** Sync profiles and profile data from Klaviyo to Shopify. Form signups need this so Added to Cart tracking recognizes them.
- **OFF:** SMS sync. This build is email only.
- Wait for the history sync to finish. The last 90 days arrive first.

### Onsite tracking

- Shopify integration page → Onsite tracking → check "Track behavioral events".
  This turns on Added to Cart, Viewed Collection, and Submitted Search.
- Shopify theme editor → App embeds → Klaviyo **ON** → Save.
- Test: open the store with \`?utm_email=<test address>\`, then view a product.
  Pass = "Active on Site" and "Viewed Product" appear on that profile.

### Shopify settings the flows depend on

- The product title "The Offcut Tee" must be spelled exactly. F5 and the Offcut Entry segment read it.
- Discount \`OFFBOLT1\`: free shipping, US only, no minimum, one use per customer.
  Keep it as one static code. Unique (dynamic) codes break "Add past profiles".
- Shopify's own abandoned checkout automation must be **OFF**. Otherwise customers get two reminders.
- The email-marketing checkbox shows at checkout, not preselected. That tick is consent.

### Account settings

- Smart Sending: **ON** (exceptions in section 7).
- UTM tracking: **ON**, so Shopify analytics can see email traffic.

---

## 4. Profile properties

A profile property is a field stored on a customer's profile. Flows write it. Emails and segments read it.

### \`tlre_stage\`

- Where the customer is now.
- Values: \`prospect\`, \`new\`, \`repeat\`, \`vip\`, \`at_risk\`, \`lapsed\`, \`sunset\`.
- Written by F1, F5, F8, F9.

### \`tlre_tier\`

- The highest tier the customer ever reached.
- Values: \`standard\`, \`vip\`. It never goes down.
- Written by F5 and F7. Read by F8 for the VIP block.

### \`run_notes_optin\`

- Set to \`true\` by F6.
- Emails read it to hide the Run Notes invite from members.
- Only ever set it to \`true\`. Never set it to \`false\`. The invite rule reads "not set" as "not a member".

### \`usual_size\`

- Saved by the optional second step of the popup.
- F3 and F4 read it for the "You usually wear a ..." line.

### \`fit_preference\` and \`last_run_purchased\`

- Existing properties. Neither one drives a V1 flow step.
- \`fit_preference\` is used in the V1.1 upgrade.

### How to write properties

- Use the "Update profile property" action inside a flow.
- Create each property name once. In every later step, select the existing property from the dropdown.
  Typing it again can create near-duplicates (\`tlre_stage\` vs \`Tlre_Stage\`) that silently split your data.
- Names and values are case-sensitive. Match them letter for letter.
- You can build segments on a property before any profile has it. Type the name in the condition.

### Audit check

- Search "tlre" in your profile properties. You should see exactly \`tlre_stage\` and \`tlre_tier\`, plus \`run_notes_optin\`.
- If you find near-twins, point every flow step at the correct one and test again.

---

## 5. Signup forms

### Popup (Klaviyo → Sign-up forms → Popup)

- Adds to: "Newsletter".
- Offer: free US shipping on the first order, no minimum.
- Optional step 2: "What size do you usually wear?" → saves \`usual_size\`.
- Targeting and timing (trigger, delay, pages, frequency) are not fixed by this build.
  Choose them, and record your choice here: **[your OWN settings]**.
- Set the status to Live. A draft form never shows.

### Run Notes form (Klaviyo → Sign-up forms → Embed)

- Adds to: "Run Notes".
- Placed inline on the Run Notes page. No offer and no code.
- Joining this list starts F6 and sets \`run_notes_optin\` = \`true\`.

### Form notes

- Forms only load when the Klaviyo app embed is **ON**.
- On a password-protected dev store, Klaviyo shows "Unable to check form installation". This is expected.
  It is a warning, not an error. The form works once a visitor is past the password page. (for testings only, if not testing no pass is required)
- Emails show \`OFFBOLT1\` as plain text. Because it is one static code, "Add past profiles" works on every flow.

---

## 6. Segments

Build in Audience → Lists & segments.
Rules use "What someone has done" conditions unless noted.
"At least once" means one or more times.

### Lifecycle segments (no buyer fits two)

|Segment|Rule|
|---|---|
|\`TLRE \\| S1 Prospect\`|Can receive email marketing AND Placed Order zero times over all time.|
|\`TLRE \\| S2 New\`|Placed Order equals 1 over all time AND at least once in the last 120 days.|
|\`TLRE \\| S3 Repeat\`|Placed Order equals 2 over all time AND at least once in the last 120 days.|
|\`TLRE \\| S4 VIP\`|Placed Order at least 3 times over all time AND at least once in the last 120 days.|
|\`TLRE \\| S5 At-Risk\`|Placed Order at least once over all time AND zero times in the last 120 days AND at least once in the last 240 days.|
|\`TLRE \\| S6 Lapsed\`|Placed Order at least once over all time AND zero times in the last 240 days.|

**Why no buyer fits two:** if the last order was within 120 days, order count picks New, Repeat, or VIP.
120–240 days means At-Risk. Over 240 days means Lapsed.

### Helper segments

|Segment|Rule|Used by|
|---|---|---|
|\`TLRE \\| E1 Engaged\`|Can receive email marketing AND (Opened Email OR Clicked Email OR Active on Site OR Placed Order at least once in the last 90 days).|Public release campaigns|
|\`TLRE \\| E2 Unengaged\`|Can receive email marketing AND Received Email at least 5 times in the last 90 days AND zero times in the last 90 days for ALL of: Opened Email, Clicked Email, Active on Site, Placed Order.|F9 trigger|
|\`TLRE \\| Offcut Entry\`|Ordered Product at least once over all time where Name equals "The Offcut Tee" AND Placed Order equals 1 over all time.|Reporting. It shrinks as tee buyers place a second order, so its size over time shows conversion.|
|\`TLRE \\| Sunset Complete\`|Properties about someone: \`tlre_stage\` equals \`sunset\`.|Monthly suppression|

- **E1:** build the four activities as one OR group: any one of them qualifies. Klaviyo's button labels change. The logic is what matters.
- **E2, why it checks clicks, visits, and orders:** Apple Mail Privacy Protection inflates opens.

---

## 7. Settings shared by every flow

Build each flow in Flows → Create flow → Build your own. (Intuitive)
Keep every email on **Manual** until it passes testing. Manual queues an email instead of sending it.

### Three settings every flow has

- **Trigger filter:** limits WHO enters, using the triggering event's data. Checked once, at entry.
- **Flow filter:** removes people who stop qualifying. Checked at every step.
- **Re-entry criteria:** controls how often one person can enter. Set in the trigger panel.
    - Defaults: list and segment triggers = no re-entry; metric triggers = allow re-entry.
    - If your account doesn't show it, use a "has not been in this flow in the last X days" filter.

### Placed Order rule

Trigger AND filter on Placed Order. Never mix Placed Order with Ordered Product.
Klaviyo syncs the two seconds apart, so mixing them skips everyone.

### Collision control (four layers)

1. **Intent ladder:** a higher-intent event removes the lower flow. Lives in F2 and F3 flow filters.
2. **Purchase stop:** any order ends every "please buy" flow. Lives in F1–F4 and F8 flow filters.
3. **Re-entry limits:** browse 14 days; cart and checkout 7 days.
4. **Smart Sending:** one email per 16 hours by default.

### Smart Sending exceptions

Smart Sending skips an email. It never reschedules it. A skipped email is gone.

|Message|Smart Sending|Why|
|---|---|---|
|F1-E1|**OFF**|It delivers the promised \`OFFBOLT1\`.|
|F4-E1|**OFF**|Highest intent.|
|The Run Notes release campaign|**OFF**|Early access is the promise.|
|Everything else|**ON**|The default.|

---

## 8. The nine flows

Arrows show the order. Times are waits between steps.

### F1 Welcome

|   |   |
|---|---|
|**Klaviyo name**|\`TLRE \\| F1 Welcome\`|
|**Trigger**|Added to list "Newsletter"|
|**Re-entry**|None|
|**Flow filter**|Placed Order zero times since starting this flow|

**Steps**

\`\`\`
Conditional split: Placed Order zero times over all time?
  YES → Update profile property tlre_stage = prospect
      → E1 now: welcome + OFFBOLT1 (free US shipping, no minimum)
        [A/B test T1, Smart Sending OFF]
      → 2 days → E2: how a run works, with one run card
      → 3 days → E3: size chart + fit rules + Priya N. review
  NO  → E1b: welcome to the list, no code
\`\`\`

**Why the split:** \`OFFBOLT1\` is for first orders only.

### F2 Browse Abandon

|   |   |
|---|---|
|**Klaviyo name**|\`TLRE \\| F2 Browse Abandon\`|
|**Trigger**|Viewed Product|
|**Re-entry**|After 14 days|
|**Flow filters**|Zero times since starting this flow for ALL of Added to Cart, Checkout Started, Placed Order|
|**Offer**|None. A browse is weak intent.|

**Steps**

\`\`\`
2 hours → E1: the piece (fabric, mill country, weight)
        → 1 day → E2: that piece's fit rule + one verbatim review
\`\`\`

### F3 Cart Abandon

|   |   |
|---|---|
|**Klaviyo name**|\`TLRE \\| F3 Cart Abandon\`|
|**Trigger**|Added to Cart|
|**Re-entry**|After 7 days|
|**Flow filters**|Zero times since starting this flow for Checkout Started OR Placed Order|

**Steps**

\`\`\`
1 hour → E1: the carted piece + its fit rule
       → 1 day → E2: Priya N. review + the free size exchange (US)
\`\`\`

**Note:** each Added to Cart event holds one product. E1 shows the item that triggered it.

### F4 Checkout Abandon

|   |   |
|---|---|
|**Klaviyo name**|\`TLRE \\| F4 Checkout Abandon\`|
|**Why it exists**|Size-anxious shoppers are the largest abandonment group. F4 sells certainty about fit, not a discount.|
|**Trigger**|Checkout Started|
|**Re-entry**|After 7 days|
|**Flow filter**|Placed Order zero times since starting this flow|

**Steps**

\`\`\`
1 hour → E1: cart + checkout link [A/B test T2, Smart Sending OFF]
       → 23 hours → Conditional split: Placed Order zero times
                    over all time?
  YES → E2a: fit rules + "measurements are of the body" + OFFBOLT1
      → 2 days → E3a: run card + OFFBOLT1
  NO  → E2b: fit rules + one free size exchange + 30-day returns
      → 2 days → E3b: run card
\`\`\`

- **Run card rule:** show units left ONLY IF \`units_left\` syncs to Klaviyo. Otherwise show the run number only.
- Checkout Started carries every cart item and a checkout URL that rebuilds the cart.

### F5 Post-Purchase

|   |   |
|---|---|
|**Klaviyo name**|\`TLRE \\| F5 Post-Purchase\`|
|**Trigger**|Placed Order|
|**Re-entry**|Allow|
|**Flow filter**|None. Every buyer finishes their thank-you path.|

**Steps**

\`\`\`
Split 1: Placed Order equals 1 over all time?
         (The triggering order already counts.)
  YES → Update profile property tlre_stage = new AND tlre_tier = standard
      → Split 0: this order's Items contain "The Offcut Tee"
                 AND $value is under $100?
        YES (Offcut entry)
            → 1 day → O1: thanks + colour is never guaranteed, final sale
            → 29 days → O2: a first full-price piece + its fit rule
            → 30 days → O3: size chart + Dana R. review
        NO  → 1 day → E1: thanks + Run Notes invite [A/B test T3]
            → 6 days → E2: fabric care + Bound for Life repairs
            → 7 days → E3: review request
  NO  → Split 2: Placed Order at least 3 times over all time?
        YES → tlre_stage = vip AND tlre_tier = vip
            → 1 day → EV: plain note from Stephanie
        NO  → tlre_stage = repeat
            → 1 day → ER: thanks + review request
\`\`\`

**Why the $100 cap:** it keeps mixed orders (tee + trouser) out of the Offcut path.
Two tees ($116) go to the main path. That is acceptable.

### F6 Run Notes

|   |   |
|---|---|
|**Klaviyo name**|\`TLRE \\| F6 Run Notes\`|
|**Trigger**|Added to list "Run Notes"|
|**Re-entry**|None|

**Steps**

\`\`\`
Update profile property run_notes_optin = true
→ E1: how early access works (every new run, 24 hours before the public)
→ 7 days → E2: the Providence studio + what the next run depends on
            (the mills, not a calendar)
\`\`\`

### F7 VIP

|   |   |
|---|---|
|**Klaviyo name**|\`TLRE \\| F7 VIP\`|
|**Trigger**|Added to segment "TLRE \\| S4 VIP"|
|**Re-entry**|None, so the VIP welcome happens once per lifetime|

**Steps**

\`\`\`
Update profile property tlre_tier = vip
→ E1: plain note from Stephanie + Dana R. review
→ 14 days → E2: Bound for Life + Run Notes invite
            (hidden if already a member)
\`\`\`

- No code. VIP perks are recognition, repairs, and early access.
- Segment-triggered emails send ONLY IF the person is still in the segment at send time.

### F8 Win-Back

|   |   |
|---|---|
|**Klaviyo name**|\`TLRE \\| F8 Win-Back\`|
|**Trigger**|Placed Order|
|**Re-entry**|Allow|
|**Flow filter**|Placed Order zero times since starting this flow. Each new order ends the old clock.|

**Steps**

\`\`\`
120 days → tlre_stage = at_risk
         → E1: the newest run
         → 7 days → E2: [A/B test T4] full run card vs plain note
                    from Stephanie
         → 7 days → E3: Run Notes invite
         → 106 days → tlre_stage = lapsed
         → E4: final note + Bound for Life reminder
\`\`\`

- **VIP block in E1–E3:** a show/hide block, shown IF \`person|lookup:'tlre_tier' == 'vip'\`. It adds a personal line from Stephanie. Never a code.
- If a reason to return is needed, it is a new run or early access. Never a markdown.

### F9 Sunset

|   |   |
|---|---|
|**Klaviyo name**|\`TLRE \\| F9 Sunset\`|
|**Trigger**|Added to segment "TLRE \\| E2 Unengaged"|
|**Re-entry**|After 180 days|
|**Flow filters**|Zero times since starting this flow for ALL of Clicked Email, Active on Site, Placed Order|

**Steps**

\`\`\`
E1: "Still want our emails?" with one button, "Yes, keep me"
  → 4 days → E2: last email
  → 3 days → Update profile property tlre_stage = sunset
\`\`\`

A click means "keep me". The flow filter removes them, and they leave the segment.

### Handoff summary (what starts and stops what)

|Event|What happens|
|---|---|
|Joins Newsletter|Starts F1|
|Viewed Product|Starts F2 (if not in F2 in the last 14 days)|
|Added to Cart|Stops F2, starts F3|
|Checkout Started|Stops F2 and F3, starts F4|
|Placed Order|Stops F1–F4 and the older F8 run; starts F5 and a new F8 clock|
|Joins Run Notes|Starts F6|
|Enters \`TLRE \\| S4 VIP\`|Starts F7|
|Enters \`TLRE \\| E2 Unengaged\`|Starts F9|
|Clicks, visits, or buys during F9|Stops F9|

---

## 9. Personalization and A/B tests

### Two tools

- **Conditional splits** change the PATH (F1, F4, F5).
- **Show/hide blocks** change the CONTENT inside one email. Set them in the block's Display options.

### Show/hide conditions

- \`person|lookup:'tlre_tier' == 'vip'\` → VIP line from Stephanie in F8.
- \`not person|lookup:'run_notes_optin'\` → Run Notes invite, hidden from members.
- \`person|lookup:'usual_size'\` → "You usually wear a \`{{ person|lookup:'usual_size' }}\`" line in F3 and F4.
- \`person|lookup:'tlre_stage' == 'repeat'\` → "Thanks for coming back" line.
- Safe greeting: \`{{ first_name|default:'there' }}\`

### A/B tests

|Test|Where|What changes|Hypothesis|Winner metric|
|---|---|---|---|---|
|T1|F1-E1|Subject: free shipping first vs the run story first|The run story earns more first orders|Placed order rate|
|T2|F4-E1|Subject: plain reminder vs piece + run number|Naming the run lifts completion|Placed order rate|
|T3|F5-E1|Run Notes invite as a button vs as a footer line|The button doubles Run Notes joins|Joins to "Run Notes"|
|T4|F8-E2|Full run card vs plain note from Stephanie|The plain note wins back more|Placed order rate|

**Test rules**

1. Change one thing per test.
2. Judge by orders, joins, or revenue per recipient. Not by opens.
3. No test may use a discount.
4. On test data, the setup is the proof, not the winner.

### Email templates

- HTML templates for F2–F9 are named by flow position (example: F4-E1a, F4-E1b).
- Unsubscribe link: \`<a href="{% unsubscribe_link %}">Unsubscribe</a>\`
- Replace the "[insert full mailing address]" placeholder in every footer before going live.

---

## 10. Release campaigns

Every new run gets two campaigns.

### Before you send

- Update the run's product metafields in Shopify: \`run_number\` and \`units_left\`.

### The two campaigns

|Setting|Campaign 1: Run Notes (early access)|Campaign 2: Public (24 hours later)|
|---|---|---|
|**Audience**|The "Run Notes" list|\`TLRE \\| E1 Engaged\`, excluding the "Run Notes" list|
|**Content**|Full-size run card|The same run, for everyone else|
|**Smart Sending**|**OFF**|**ON**|

**Why the 24-hour gap:** early access is the reward for joining Run Notes. It must be real.

### Run card rule (all emails)

- Full size ONLY where scarcity is the argument: F4-E3, release campaigns, F8-E2 variant A.
- Small or absent everywhere else.

---

## 11. Reporting

### Dashboard metrics

|Metric|What it shows|
|---|---|
|Revenue per flow|Which flows earn|
|Placed order rate per flow|Which flows convert|
|Revenue per recipient (RPR)|Efficiency, fair across flow sizes|
|Segment sizes S1–S6|How customers spread across stages|
|Offcut Entry size over time|Tee buyers moving to full price|
|"Run Notes" list growth|The waiting list the brand depends on|
|Unengaged + suppressed counts|List health and billing|
|Unsubscribe + spam rates|Deliverability health|

### Show only TLRE in reports (accounts with other projects)

1. Tag every TLRE flow and release campaign with the tag "TLRE".
2. Build a custom report for flow performance.
3. Filter to the TLRE tag, or select the nine flows by name.
4. Conversion metric: Placed Order.
5. Group by: Flow.
6. Time frame: All time for a full history, or a custom range for a test window.

Klaviyo renames report options over time. The logic is what matters: one row per TLRE flow, measured on Placed Order.

### Read the numbers honestly

- Klaviyo revenue will not match Shopify revenue. Shopify subtracts cancelled and refunded orders. Klaviyo does not.
- Klaviyo reports attributed revenue. That is not the same as extra revenue.

---

That's all of it, goodluck building!` }
          ]
        }
      ]
    },

    {
      tag: "Klaviyo · Welcome flow",
      title: "Welcome Flow, \"Did They Buy\" Edition",
      slug: "welcome-flow-did-they-buy",
      type: "flow",                       // flow | campaign | email-design
      date: "2026-11-04",
      blurb: "Buyers and non-buyers get a different second email",
      photo: "assets/case6-welcome-flow-1.png",
      thumbnailAlt: "The top of the welcome flow: the trigger, the E1 email, a 3 day wait, the Did they buy split",
      meta: "Klaviyo · Welcome flow · 3 emails, at most 2 per shopper · one split on Day 3 · test data",
      video: "",
      poster: "",
      photos: [
        { src: "assets/case6-welcome-flow-1.png", alt: "The welcome flow, top half: trigger when someone is added to the email subscribers list, E1 Thanks, Incentives and Reviews, 3 day wait, Did they buy split", wide: true },
        { src: "assets/case6-welcome-flow-2.png", alt: "The welcome flow, bottom half: Did they buy split, E2A Thanks and best sellers for buyers, E2B Brand story and Reminders for everyone else", wide: true }
      ],
      story: [
        {
          heading: "The problem",
          text: "A normal welcome flow sends the same emails to everyone. Buyers still get first-order pushes and nothing invites them back for a second order. Non-buyers get no extra reason to trust the brand."
        },
        {
          heading: "What I built",
          bullets: [
            "A welcome flow that sends E1 (thanks, incentives and reviews) on Day 0, then waits 3 days.",
            "On Day 3 a split checks: did they buy? Buyers get thanks and best sellers, aiming for a repeat order.",
            "Everyone else gets the brand story and an incentive reminder, aiming for a first order before the discount ends on Day 5.",
            "At most 2 emails per shopper, no flow filters, and Smart Sending on for every email."
          ]
        },
        {
          heading: "Result",
          text: "Built on test data for Off-Bolt and documented well enough to rebuild from scratch. It is judged by Placed Order rate."
        },
        {
          heading: "Documentation",
          text: `# Off-Bolt · Welcome Flow, "Did They Buy" Edition

**Rebuild doc** · Client: Off-Bolt · Data: test data · 2026-11-04

---

## 1. Purpose / Goal

**The problem**
A normal welcome flow sends the same emails to everyone.
- Buyers still get first-order pushes. Nothing invites them back for a second order.
- Non-buyers get no extra reason to trust the brand.

**How this flow solves it**
On Day 3, a split checks: did they buy?
- IF yes, THEN thanks + best sellers. Goal: a repeat order.
- IF no, THEN brand story + incentive reminder. Goal: trust AND a first order, before the discount ends on Day 5.

| | Normal welcome flow | This flow |
|---|---|---|
| Buyers | Same emails as non-buyers | Thanks + best sellers → repeat order |
| Non-buyers | Same emails as buyers | Brand story + reminder → first order |
| Emails per shopper | Same path for all | AT MOST 2, matched to behavior |

**Value:** more first AND repeat orders → more revenue. Measured by Placed Order rate.

## 2. The five rules

1. AT MOST 2 emails per shopper.
2. NO flow filters. NO ONE is taken out.
3. Smart Sending ON for ALL emails. Campaigns come first.
4. Deadlines count from the join date: discount = 5 days, free shipping = 15 days.
5. Success = Placed Order rate.

## 3. Variables and data

### 3.1 Data the flow needs

| Data | Source | Used in |
|---|---|---|
| List: OB \\| Email Sub… | Klaviyo list | Trigger |
| first_name | Profile property | E1, E2B greeting |
| Placed Order | Shopify integration | Split |
| OFFBOLT1 (discount) | Shopify discount code | E1, E2B |
| OFFBOLT2 (free shipping) | Shopify discount code | E1, E2B |
| Best sellers | Depends on the data used | E1 (optional), E2A |

### 3.2 Merge tags

**Greeting**
\`{{ person.first_name|default:'shopper' }}\`
IF there is no first name, THEN it shows "shopper".

**Expiry dates**

- Discount ends: join date + 5 days.
- Free shipping ends: join date + 15 days.
- Code: NOT in the inputs. **OFFBOLT1 and OFFBOLT2**

\`\`\`
Day:      0        3     5                            15
          |--------|-----|-----------------------------|
OFFBOLT1  [==============]  discount, ends Day 5
OFFBOLT2  [============================================]  free shipping, ends Day 15
          E1       E2A / E2B
\`\`\`

**Rebuild check:** E2B sends on Day 3.
IF the code counts from the send date, THEN E2B must show +2 AND +12 days.
ELSE merge tag is wrong

### 3.3 Placeholders and setup

- **Review block (E1):** custom HTML, no personalization. Code NOT in the inputs.
- **Best-sellers block (E1):** optional.
- **Palette:** warm AND natural. Hex values: NOT in the inputs.

## 4. Flow settings

### 4.1 Placed Order rule

- **Condition:** Placed Order at least once since starting this flow.
- Checked ONCE, when the profile reaches the split on Day 3.
- Orders before joining do NOT count. Orders after Day 3 do NOT move anyone.

### 4.2 Collision control

- Smart Sending ON for E1, E2A AND E2B.
- Email window: 16 hours by default.
- IF the shopper got an email inside the window, THEN this email is skipped AND NOT rescheduled.
- THEREFORE a shopper MAY get fewer than 2 emails.

## 5. Flow: Welcome, "Did They Buy" Edition

**Flow map**
Build it top to bottom, exactly as shown.

\`\`\`
      ┌────────────────────────────────────────────────┐
      │ TRIGGER (list)                           Day 0 │
      │ Added to: OB | Email Sub...                    │
      │ Flow filters: NONE                             │
      └────────────────────────┬───────────────────────┘
                               │
      ┌────────────────────────▼───────────────────────┐
      │ EMAIL E1                                 Day 0 │
      │ Thanks + Incentives + Reviews                  │
      │ Smart Sending: ON                              │
      │                                                │
      │ - OFFBOLT1 discount       -> ends Day 5        │
      │ - OFFBOLT2 free shipping  -> ends Day 15       │
      │ - Review block (custom HTML)                   │
      │ - Best sellers (optional)                      │
      └────────────────────────┬───────────────────────┘
                               │
                     ┌─────────▼────────┐
                     │    WAIT 3 days   │
                     └─────────┬────────┘
                               │
      ┌────────────────────────▼───────────────────────┐
      │ SPLIT: Did they buy?                     Day 3 │
      │ Path 1 Yes: Placed Order at least once         │
      │             since starting this flow           │
      │ Path 2 Everyone else: the rest                 │
      └────────────────────────┬───────────────────────┘
                               │
               ┌───────────────┴───────────────┐
               │                               │
             1 Yes                      2 Everyone else
               │                               │
 ┌─────────────▼────────────┐    ┌─────────────▼────────────┐
 │ EMAIL E2A          Day 3 │    │ EMAIL E2B          Day 3 │
 │ Thanks + best sellers    │    │ Brand story + Reminders  │
 │ Smart Sending: ON        │    │ Smart Sending: ON        │
 │ Job: repeat order        │    │ Job: trust + 1st order   │
 └─────────────┬────────────┘    └─────────────┬────────────┘
               │                               │
              END                             END
\`\`\`

Each shopper gets E1, then EITHER E2A OR E2B.
Only people added AFTER the flow is live enter. Earlier adds need "Add past profiles".

**Messages and emails**

**E1: Thanks + Incentives + Reviews** (everyone, Day 0)

- Subject : \`Hi {{ person.first_name|default:'shopper' }}...\`
- Content: thanks, OFFBOLT1 AND OFFBOLT2 with expiry dates, review block, best sellers (optional).

**E2A: Thanks + best sellers** (Path 1 "Yes", Day 3)

- Subject: "You're officially part of the Off-Bolt family"
- Content: thanks + best sellers.

**E2B: Brand story + Reminders** (Path 2 "Everyone else", Day 3)

- Subject: \`Hi {{ person.first_name|default:'shopper' }} ...\`
- Content: brand story + incentive reminder with expiry dates.
- On Day 3: 2 days left on the discount, 12 on free shipping.

---

This documentation is for rebuilding the build, happy building!`
        }
      ]
    },

    {
      hidden: true,                    // not shown for now. Delete this line to show it again.
      tag: "Klaviyo · Shopify · Campaign",
      title: "Dec 17 \"Last Day to Order\" Campaign",
      slug: "dec-17-last-day-to-order",
      type: "campaign",                       // flow | campaign | email-design
      date: "2026-10-15",
      blurb: "Banner, email and text for one real shipping deadline",
      photo: "",
      meta: "Klaviyo + Shopify · 1 banner, 1 email, 1 text · US only · Thu Dec 17, 2026 · practice build, not launched",
      video: "",
      poster: "",
      photos: [],
      story: [
        {
          heading: "The problem",
          text: "Thu Dec 17 is the last day a US order can ship by USPS Ground Advantage and still be on track for Christmas delivery, and a missed message on that day cannot be recovered. The same message also has to stay true for everyone who sees it: Canada ships in 7 to 12 days, people who already ordered need no reminder, and carriers do not guarantee arrival by Christmas."
        },
        {
          heading: "What I built",
          bullets: [
            "A site banner, an email and a text that all say one thing: today is the last day to order for Christmas delivery. The banner reads \"US orders\", so it stays true for visitors in Canada.",
            "An email to the engaged US segment, minus anyone who ordered since Dec 9. Smart Sending is off, so no one is skipped on the last day, and the target send time is 8:00 AM Eastern.",
            "A text for US subscribers who agreed to texts, did not click the email and have not ordered. It goes four hours after the email, with quiet hours set to skip and no emoji. It is planned only until a US number is registered.",
            "Two planned A/B tests that change one thing each: the email subject, judged on click rate, and the text content, judged on placed order rate. Both use a 100% test size, so the last day is not spent waiting for a winner.",
            "A hand-off document for a client team: a launch-day runbook, a fix list, an if-something-goes-wrong table, a copy deck with copy rules, and a list that separates what Klaviyo's help pages confirm from what is not confirmed."
          ]
        },
        {
          heading: "Result",
          text: "A practice build for Off-Bolt, written up as version 1 (draft) and not launched, so the documentation holds no results, numbers or customer quotes. The email is scheduled in Klaviyo but needs fixes first, and the text is planned only because no US number is registered. Every detail that is not confirmed is marked \"Not provided\" or listed in Part 12."
        },
        {
          heading: "Documentation",
          text: `# Dec 17 "Last Day to Order" Campaign for Off-Bolt

**Build documentation:** site banner, email and text message

| | |
|---|---|
| **Doc version** | 1 (draft) |
| **Date** | Oct 15, 2026 |
| **Builder** | LEIEN |
| **Platform** | Klaviyo + Shopify |
| **Store** | Off-Bolt (Providence, RI; women's clothing; currency USD) |
| **Store URL** | Not provided |
| **Written for** | The client and their team. You do not need the builder to use this doc. |

---

## Important

Off-Bolt is a practice brand. This is a practice build. Nothing has been launched, so this doc holds NO results, numbers or customer quotes.

**Contents**
- At a glance
- How to read this doc
- Part 1. Project overview
- Part 2. Dependencies (set these up first)
- Part 3. Flows
- Part 4. Campaigns (banner, email, text, A/B tests)
- Part 5. Signup form (text opt-in)
- Part 6. QA and testing record
- Part 7. Maintenance and change log
- Part 8. Launch-day runbook
- Part 9. If something goes wrong
- Part 10. Fix list before launch
- Part 11. Copy deck
- Part 12. What is verified and what is not
- Part 13. Brand facts for checking copy
- Glossary
- Sources

---

## At a glance

### What this is

One campaign day with three parts: a site banner, an email and a text message. Each part tells US shoppers the same thing: today is the last day to order for Christmas delivery.

### Why Dec 17

Thu Dec 17, 2026 is the last day a US order can ship by USPS Ground Advantage and still be on track for Christmas delivery in the lower 48 states. (For Alaska and Hawaii it is Wed Dec 16.) A missed message on this day cannot be recovered.

### Who gets what

- **Banner:** every visitor to the store.
- **Email:** US subscribers in the segment "OB | US Engaged", EXCEPT anyone who ordered since Dec 9.
- **Text:** US subscribers who agreed to texts, did NOT click the email, and have NOT ordered since Dec 9. The text is PLANNED ONLY (see Status).

### When (US Eastern Time, "ET")

| When | What happens | Who does it |
|---|---|---|
| Wed Dec 16, night | Site banner goes ON | You, by hand |
| Thu Dec 17, 8:00 AM | Email sends | Klaviyo (scheduled) |
| (4-hour gap) | Clicks come in | N/A |
| Thu Dec 17, 12:00 PM | Text sends (if live) | Klaviyo (scheduled) |
| Fri Dec 18, morning | Site banner goes OFF | You, by hand |

### Status

- **Banner:** Built. Current on/off state: Not provided. It should be OFF until the night of Dec 16.
- **Email:** Built. Klaviyo shows it as Scheduled. It needs fixes first (see Part 10).
- **Text:** PLANNED ONLY. A draft exists in Klaviyo, so it will NOT send. It is blocked because no US number has been registered yet.
- **A/B tests:** Email subject test is planned (pair Not provided). Text test is planned only.

### The 5 biggest fixes before Dec 17

1. The email send time must be 8:00 AM ET (the screenshot shows 4:27 PM).
2. Clear the yellow warning on the email.
3. Confirm the campaign names. The text's audience depends on the email's exact name (Part 4.2).
4. Get a US number and finish text verification, OR drop the text (Part 4.4).
5. Fill in every "Not provided" item (Parts 2, 5 and 11).

---

## How to read this doc

- Capital words such as IF, THEN, AND, OR, NOT and MUST carry a rule.
- "Not provided" means the builder did not supply that detail. Someone MUST fill it in before launch.
- TARGET means what a setting MUST be.
- SEEN means what was visible in the builder's screenshot of Klaviyo.
- \`[ ]\` is a box. Tick it after you have checked the item in Klaviyo or Shopify.
- A word you do not know? Look in the Glossary at the end.

---

## Part 1. Project overview

### 1.1 Goal

Get US customers to place an order by Dec 17, so their gifts can arrive for Christmas. Give them one clear deadline.

Message theme (from the builder): help the reader save the holiday joy by ordering in time for Christmas delivery.

The message MUST NOT promise arrival by Christmas, BECAUSE carriers do not guarantee it.

Planned success measures: click rate, placed order rate and revenue per recipient. Nothing has been measured yet.

### 1.2 People and access

- Account owner: Not provided
- Builder: LEIEN
- Klaviyo user roles for each person: Not provided
- Who owns this campaign after hand-off: Not provided

### 1.3 Version and dates

- This doc: version 1 (draft), Oct 15, 2026
- Build work: Oct 11 to Oct 15, 2026
- Campaign day: Thu Dec 17, 2026

### 1.4 Naming rules

- Campaigns: \`HOL26 | <name>\`
- Segments: \`OB | <name>\`
- Tag on campaigns: HOL26 (on the text, only if the field appears)

### 1.5 Status of each item (using Klaviyo's own words)

| Item | Status | Source |
|---|---|---|
| Email campaign | Scheduled | SEEN in screenshot |
| Text campaign | Draft | SEEN in screenshot |
| Site banner | Not provided | N/A |
| Segment: \`OB \\| US Engaged\` | Exists (per builder) | Builder |
| Segment: \`OB \\| Ordered Dec 9+\` | Exists (per builder) | Builder |
| Segment: \`OB \\| US SMS Last Day\` | Not provided | Screenshot shows 0 profiles |

### 1.6 Out of scope

- Canada and any country other than the United States
- Sends on Dec 24 and Dec 25
- Resends and follow-up emails for this campaign
- Flows (automated message series)
- The other December campaigns (see 1.9)

### 1.7 Why this day: USPS 2026 ship-by dates

| Service | Last day to ship |
|---|---|
| Ground Advantage | Thu Dec 17 (Wed Dec 16 for Alaska and Hawaii) |
| First-Class | Dec 17 |
| Priority Mail | Dec 18 |
| Express | Dec 19 |

**Why this matters:** a missed message on Dec 17 cannot be recovered. A missed sale email on an earlier day can still be recovered at full price.

### 1.8 Assumption

Off-Bolt ships orders the same day, at $8 standard, by USPS Ground Advantage.
IF the studio needs a packing day, THEN move the Dec 14 and Dec 17 sends one day earlier (to Dec 13 and Dec 16).

### 1.9 December calendar and sending limits

This campaign is one day inside a December plan of 8 emails, 1 optional email and 1 text:

| Date | What |
|---|---|
| Dec 2 | Gift guide |
| Dec 9 | Run Notes early access |
| Dec 10 | Sale opens (code \`GIFT15\`, Dec 10 to 13) |
| Dec 12 | "1 day left" |
| Dec 14 | Ship-by reminder |
| Dec 17 | Last day to order (this doc) |
| Dec 21 | Optional digital gift card |
| Dec 26 | Exchange help |
| Dec 29 | Year-end note |
| Dec 24 to 25 | No sends |

**Limit check (passed):** a person who has not ordered gets at most 2 emails in 3 days and at most 4 emails in 7 days between Dec 10 and Dec 17.
- The 3-day and 7-day limits are the builder's own conversion of Klaviyo's numbers. Klaviyo does NOT publish them.
- Klaviyo's own numbers: Smart Sending skips a person messaged in the last 16 hours for email (24 hours for text) by default. Klaviyo Academy says an email minimum of 4 a month and an optimal 8 to 12 for segmented sends.

---

## Part 2. Dependencies (set these up first)

Everything in Part 4 relies on this part. IF a dependency is missing, THEN the campaign can fail or land in spam.

### 2.1 Account settings

- Account time zone: Not provided
- Currency: USD

Both campaigns use a specific time zone (Eastern) set on the campaign. Still record the account time zone.

### 2.2 Sending setup

- Sender name: Not provided
- Sender email: Not provided
- Reply-to: Not provided
- Domain authentication (SPF, DKIM, DMARC): Not provided
- Branded sending domain: Not provided
- Google Postmaster Tools verified for the sending domain: Not provided

**Why it matters:** without domain authentication, Gmail and other inboxes may send the email to spam.

### 2.3 Shopify integration

- What syncs (profiles, orders, catalog, consent): Not provided
- The list Shopify subscribers sync into: Not provided
- Onsite tracking (Klaviyo app embed ON in the Shopify theme): Not provided

**Why it matters:** the segments use Placed Order data from Shopify. IF orders do not sync, THEN buyers stay in the audience and get a message they do not need.

### 2.4 Audience data

**Lists**
- Name and double opt-in setting for each list: Not provided

**Segments (all three, in full)**

**A.** \`OB | US Engaged\`
- Rule: a copy of the segment "TLRE | E1 Engaged" AND Country is United States.
- The definition of "TLRE | E1 Engaged": Not provided. It is in the builder's TLRE build guide. The client needs it to rebuild this segment.

**B.** \`OB | Ordered Dec 9+\`
- Rule: Placed Order, between Dec 9 and Dec 31, 2026.

**C.** \`OB | US SMS Last Day\` (used by the text)

ALL of these must be true:
1. Can receive SMS marketing
2. Country is United States
3. Placed Order zero times, between Dec 9 and Dec 31, 2026
4. Clicked Email zero times, where Campaign Name equals "HOL26 | Last day to order"

**Why each filter exists**
- Can receive SMS marketing: no consent, no text. Consent is NECESSARY, but NOT enough on its own.
- Country is United States: a +1 phone number can be US or Canadian. The deadline is a US shipping deadline, and Canada ships in 7 to 12 days.
- No order since Dec 9: that person no longer needs the reminder.
- No click on the email: the text is a second try for people who did not respond. Anyone who clicked has already acted.
- The filters are joined by AND, so each one shrinks the audience. Never join them with OR.

**Why the Dec 31 end date and not Dec 17**
At send time, no order can exist after Dec 17. THEREFORE both dates match the same people. Dec 31 is used because it matches the existing segment B and works for later sends.

**Other profile data**
- Custom profile properties and their values: Not provided
- Metrics used: Placed Order, Clicked Email, and consent to text marketing

### 2.5 Coupons

N/A for this campaign. The plan has no discount, BECAUSE the sale code \`GIFT15\` ended on Dec 13. Check this against the final copy.

### 2.6 Text setup (needed only if the text goes live)

**STATUS: NOT DONE.** No US number has been registered.

1. Turn on SMS in Klaviyo.
2. Accept the US toll-free number.
3. Wait for verification. It takes 2 to 5 business days.
4. Do NOT send from an unverified number.
5. Plan to finish by Nov 20.
6. IF verification is not done by Dec 10, THEN drop the text.
7. Quiet hours: Settings > Text message > Sender preferences. Keep "Use Profile location."

**Cost:** text messages are billed per message, in dollars, since Jul 13, 2026. Whether a free plan includes any messages: not confirmed.

### 2.7 Other integrations and keys

- Other integrations and their key scopes: Not provided
- Where each key is stored: Not provided

NEVER write a key in this doc. Write only where it is stored.

### 2.8 Attribution

- Conversion metric: Not provided
- Conversion window (how long after a message an order counts): Not provided

**Why it matters:** "placed order rate" in the A/B tests and in reports depends on this window.

### 2.9 Brand assets

- Logo: the OFF-BOLT wordmark, wide-spaced capital letters with the hyphen in red (SEEN in the screenshot)
- Colors: dark navy text and deep red accents (SEEN). Exact codes: Not provided
- Fonts: Not provided
- Saved email template: a custom template built by the builder. Name and location: Not provided
- Universal content blocks: Not provided

---

## Part 3. Flows

N/A for this build. There are no flows in this campaign.

One thing to check anyway: messages from flows also count toward Smart Sending. IF the account has live flows, THEN a person who just got a flow message may be skipped by a campaign. Live flows in this account: Not provided.

---

## Part 4. Campaigns (banner, email, text, A/B tests)

### 4.1 How the three parts fit

\`\`\`
Wed Dec 16, night    →  Banner ON (all visitors)
Thu Dec 17, 8 AM     →  Email to "OB | US Engaged",
                        minus "OB | Ordered Dec 9+"
4-hour gap           →  Clicks and orders come in. Campaigns have no wait
                        block, so the gap itself is the wait.
Thu Dec 17, 12 PM    →  Text to "OB | US SMS Last Day" (if live)
Fri Dec 18, morning  →  Banner OFF
\`\`\`

**RULE:** the text goes ONLY to people who did NOT click the email AND have NOT ordered since Dec 9.

**How it looks in Klaviyo** (a text picture of the builder's screenshot)

\`\`\`
AUDIENCE                THURSDAY, DEC 17
──────────────────      ────────────────────────────────────────

┌────────────────┐      ┌──────────────────────────────────────┐
│ (people)       │      │ [mail] Email 1                     : │
│ Audience 1     │ [+]  │ Dec 17, 2026, 4:27 PM                │ [+]
│ 1 profile      │      │                                      │
└────────────────┘      │ ┌──────────────────────────────────┐ │
                        │ │ Last day to order for gifts!     │ │
                        │ │ ──────────────────────────────── │ │
                        │ │     Gift Ideas for christmas     │ │
                        │ │ ──────────────────────────────── │ │
                        │ │         O F F - B O L T          │ │
                        │ └──────────────────────────────────┘ │
                        │ [Scheduled] (clock) (flask)      <!> │
                        └──────────────────────────────────────┘

┌────────────────┐      ┌──────────────────────────────────────┐
│ (people)       │      │ [chat] OB SMS last day to order    : │
│ Audience 2     │ [+]  │ Dec 17, 2026, 5:20 PM                │ [+]
│ 0 profiles     │      │                                      │
└────────────────┘      │ [Draft] (clock) (flask)          (!) │
                        └──────────────────────────────────────┘
\`\`\`

Not shown: the Friday, Dec 18 column. The Saturday, Dec 19 column is empty.

**Key to the picture**

| Symbol | Meaning |
|---|---|
| \`[mail]\` | Email icon |
| \`[chat]\` | Text-message icon |
| \`[+]\` | The add button |
| \`:\` | The three-dot menu |
| \`<!>\` | Yellow warning icon on the email card |
| \`(!)\` | Red error icon on the text card |
| \`(clock)\` \`(flask)\` | Two small icons on each card. Their meaning is not confirmed. The flask is likely the A/B test marker. Hover over them in Klaviyo to check. |

The big panel inside the email card is a small preview of the email.

**What the screenshot tells us**
- Audience 1 shows 1 profile. Audience 2 shows 0 profiles. Why: not confirmed.
- The email is Scheduled for 4:27 PM. The plan says 8:00 AM ET.
- The text is a Draft for 5:20 PM. The plan says 12:00 PM ET.
- The yellow warning on the email: cause Not provided.
- The red error on the text: the builder says it is the missing US number.

### 4.2 Campaign names (check before launch)

| Part | SEEN in Klaviyo | TARGET name |
|---|---|---|
| Email | "Email 1" | \`HOL26 \\| Last day to order\` |
| Text | "OB SMS last day to order" | \`HOL26 \\| Last day to order \\| SMS\` |

**STATUS:** unresolved. "Email 1" may be a message label and not the campaign name. This is not confirmed.

**Why it matters:** segment C (Part 2.4) looks for emails whose Campaign Name equals "HOL26 | Last day to order". IF the real name differs by even one character, THEN no one is filtered out, and people who clicked the email still get the text.

The builder is NOT sure which names are real. Open each campaign in Klaviyo, read the real name, and make the email name and the segment filter match. Klaviyo's help pages do not confirm that this filter supports only "equals". A community answer says so. Not confirmed.

- [ ] Names checked and matched

### 4.3 Email

**Purpose:** tell US shoppers that today, Dec 17, is the last day to order for Christmas delivery, and get them to order today.

**Settings**

| Setting | TARGET | Check |
|---|---|---|
| Name | \`HOL26 \\| Last day to order\` | [ ] |
| Included | \`OB \\| US Engaged\` | [ ] |
| Excluded | \`OB \\| Ordered Dec 9+\` | [ ] |
| Date and time | Thu Dec 17, 2026, 8:00 AM | [ ] |
| Time zone | Specific time zone: Eastern | [ ] |
| Smart Sending | **OFF** | [ ] |
| Determine recipients at send time | **ON** | [ ] |
| Tag | HOL26 | [ ] |
| UTM tracking | Not provided | [ ] |
| Sender name/email | Not provided | [ ] |
| Reply-to | Not provided | [ ] |
| Template | Custom template (name Not provided) | [ ] |
| Subject line | SEEN: "Last day to order for gifts!" (see 4.6) | [ ] |
| Preview text | Not provided | [ ] |
| Status | Scheduled (SEEN) | [ ] |

**Why these settings**
- Smart Sending OFF: IF a person is skipped on the last day, THEN they never get a second try. Turning it off means everyone in the audience is sent to.
- Determine recipients at send time ON: Klaviyo checks the audience at the moment of sending, so people who ordered since Dec 9 stay out. This cannot be combined with "recipient local time", so use one specific time zone.
- 8:00 AM ET: it gives the email 4 hours to collect clicks before the text.

**Message goal**
- The reader clicks one button and orders today.
- The reader thinks: "This deadline is real, and I can still make Christmas."
- The email must NOT contain a timer, "hurry" wording, a discount, or a promise of arrival by Christmas. (See the rules in Part 11.)

**The template (SEEN in the screenshot preview)**
- A small, centered line "Gift Ideas for christmas" between two thin dark red lines
- Below it, the OFF-BOLT wordmark in wide-spaced dark navy capital letters, with a red hyphen
- All other blocks, the layout width, the fonts, the colors and the mobile and dark-mode behavior: Not provided

- [ ] Template details written down

### 4.4 Text message (planned only)

**STATUS: PLANNED ONLY.** A draft exists in Klaviyo (SEEN: "OB SMS last day to order", Draft). It will not send. Nothing here has been tested, because no US number is registered. The builder is confident it will work once a number exists, but that is NOT verified.

**Settings (TARGET, for when the text goes live)**

| Setting | TARGET |
|---|---|
| Name | \`HOL26 \\| Last day to order \\| SMS\` |
| Audience | \`OB \\| US SMS Last Day\` |
| Excluded | None (the segment already excludes the others) |
| Date and time | Thu Dec 17, 2026, 12:00 PM |
| Time zone | Specific time zone: Eastern |
| Determine recipients at send time | **ON** |
| Smart Sending | **ON** (suggested: skip on campaign messages only) |
| Quiet hours | Skip |
| Link shortening | Automatically shorten links: **ON** |
| Compliance tab | Leave **ON** |
| Tag | HOL26, only if the field appears |
| Message text | Not provided (see Part 11) |

**Why these settings**
- Quiet hours "Skip": this send is time sensitive. "Delay" would push the text past quiet hours. Klaviyo advises no texts before 8 AM or after 9 PM in the recipient's local time. At noon ET only Hawaii (7:00 AM) falls in quiet hours, so those people are skipped.
- Smart Sending ON: a person who got a text in the last 24 hours (the Klaviyo default) is skipped. The "campaign messages only" part is the builder's judgment.

**Text rules**
- Include "Reply STOP to opt out".
- Stay under 153 characters. The limit is 160, and Klaviyo advises under 153. The link counts as about 25 characters after shortening.
- Use NO emoji. One emoji cuts the limit to 70 characters.

**Steps to make the text live (for the new owner)**
1. Get a US toll-free number.
2. Turn on SMS in Klaviyo and accept the number (Part 2.6).
3. Wait 2 to 5 business days for verification.
4. Add the text opt-in to the signup form (Part 5).
5. Let people opt in. The text goes only to people who agreed, so the audience is empty until they do.
6. Create segment C (Part 2.4).
7. Open the draft, set it to the TARGET settings, and add the final text.
8. Test it: Preview > choose the country code > enter your number > Send test. Whether this works in the campaign editor is not confirmed (it is documented for flow texts).
9. Schedule it. Do NOT send from an unverified number.

IF verification is not done by Dec 10, THEN drop the text. The email and the banner carry the campaign.

### 4.5 Site banner

**Where:** Shopify admin > Online Store > Themes > Customize > Announcement bar. The section name varies by theme.

**Banner text (the builder's):**
\`US orders: order dec 17 for christmas delivery.\`

- Why "US orders": the banner shows to every visitor, including Canada. Canada ships in 7 to 12 days at $18, so the Dec 17 deadline does not apply there. The words "US orders" keep the banner true for everyone.
- Style note: the text uses a lowercase "dec" and "christmas". Decide whether to write "Dec" and "Christmas".
- Theme name and section name: Not provided.
- Current on/off state: Not provided. It should be OFF until the night of Dec 16.

**Turn it ON (night of Wed Dec 16)**
1. Shopify admin > Online Store > Themes.
2. Click Customize on the live theme.
3. Open the Announcement bar section.
4. Enter or confirm the banner text.
5. Make sure the section is switched on and visible.
6. Click Save.
7. Open the live store on a computer and a phone to check it.

**Turn it OFF (morning of Fri Dec 18)**
1. Open the same section.
2. Clear the text or switch the section off.
3. Click Save, then check the live store.

The exact steps depend on the theme. Not confirmed.

### 4.6 A/B tests

**Email test: subject line**
- What is tested: the subject line. Change ONE thing between versions.
- Winning metric: click rate. Why click and not open: the goal is an order, and open rates have an Apple Mail Privacy caveat (see the Glossary). Klaviyo recommends open rate for subject lines, so click results will be thinner.
- Test size (TARGET): 100%. Both versions send at once, 50/50. At 100% no winner is sent later, so the results are for learning. Waiting for a winner would cost the last day.
- SEEN: the current subject is "Last day to order for gifts!"
- The chosen test pair: Not provided.
- Ten candidate subject ideas:
  1. Last day to order for Christmas
  2. Last day to order for gifts
  3. Today, Dec 17: last day to order for Christmas
  4. Last day to order for Christmas delivery in the US
  5. Order today for Christmas delivery
  6. Still need a gift? Today is the last day to order
  7. Your Christmas gift deadline is today
  8. Gift deadline: today
  9. Last day to order the Mill Shirt for Christmas
  10. last day to order for christmas

- [ ] Pair chosen
- [ ] Test size set to 100%

**Text test: message content (planned only)**
- What is tested: the message content. Change ONE thing.
- Winning metric: placed order rate. Klaviyo Academy says text tests focus on click rate and placed order rate, because open rates do not apply to texts.
- Test size (TARGET): 100%, for the same reason as the email.
- Expect few orders. The audience is people who did NOT click and have NOT ordered, so the result may be inconclusive.
- Both versions MUST keep the brand name, the link and "Reply STOP to opt out", stay under 153 characters, and use no emoji.
- The two versions: Not provided.

**NOT CONFIRMED (check these):**
- Whether 100% test size splits the audience 50/50.
- Whether an A/B test works while "Determine recipients at send time" is ON.
- Whether clicks on BOTH email versions count under the one campaign name. This matters, BECAUSE segment C relies on the name. Test it with one click on each version before Dec 17.

---

## Part 5. Signup form (text opt-in)

**STATUS:** Not provided. The text needs this form to exist. It is planned only until a US number exists.

**Why it matters:** no consent, no text. Collect consent before Dec 17.

**Requirements (MUST)**
- The text opt-in is its own step, separate from the email step.
- The disclosure sits above the submit button and holds:
  - the company name
  - the message types
  - how often messages are sent
  - STOP and HELP instructions
  - "message and data rates may apply"
  - links to the terms and the privacy policy
  - "Consent is not a condition of purchase."
- A phone number alone is NOT consent. Email consent does NOT count as text consent.

**To document (all Not provided)**
- Form type (popup, flyout, embed or full page)
- Each step: fields, copy, button text, success step
- Teaser: ON or OFF, and its copy
- Destination list
- Consent collected: email, text, or both
- Targeting: timing, scroll %, device, URL rules, who to hide it from
- Display frequency after a visitor closes it
- Offer or coupon connection
- A/B tests on the form
- Publish status
- Screenshots: desktop and mobile

---

## Part 6. QA and testing record

**STATUS:** No test has been run or recorded. The text cannot be tested until a US number exists.

### 6.1 Tests to run (planned)

- Test profiles used: Not provided
- Consent check: after a test person submits the form, check their consent is correct (text form only).
- Segment check: confirm that
  - [ ] a profile that clicked the email is NOT in the text audience
  - [ ] a profile that ordered since Dec 9 is NOT in the email or text audience
  - [ ] a Canadian profile is NOT in the text audience
- Previews: desktop, mobile and dark mode
- Links: click every link in the email, check every UTM
- A/B: preview and test BOTH versions of each test
- Coupons: N/A (no coupon in this campaign)
- Event and split checks: N/A (no flows, no splits)

### 6.2 Copy check

Compare the final email, text and banner text with the rules in Part 11.

- [ ] Done

### 6.3 Test record (fill in as you test)

| Test | Profile used | Date | Result | Fix made |
|---|---|---|---|---|
| (none recorded yet) | | | | |

### 6.4 Issues found

Known issues so far are listed in Part 10.

---

## Part 7. Maintenance and change log

### 7.1 Baseline

No baseline exists. Nothing has launched. Record the numbers below after the first send.

### 7.2 What to measure after launch

- Click rate, placed order rate and revenue per recipient.
- Open rate, with a caution. Apple Mail Privacy Protection can load emails without the person reading them, so open rate is NOT a reliable main measure.
- Bounce rate, unsubscribe rate and spam complaint rate.
- Gmail spam rate in Google Postmaster Tools. Aim below 0.1%. NEVER reach 0.3%. Postmaster Tools shows data ONLY IF the domain has enough Gmail volume. The domain must be verified first (Part 2.2).

### 7.3 Review schedule (suggested)

- Dec 15: pre-launch checks (Part 8)
- Dec 17 and Dec 18: the launch checks in Part 8
- Within a week after Dec 17: read the results and write them in this doc
- Review owner: Not provided

### 7.4 After Dec 18

- [ ] Banner is off
- [ ] Results recorded
- [ ] Unsubscribe and spam complaint rates checked
- [ ] A/B test results written down (for learning)

### 7.5 Change log

| Date | Ver | Change | Reason | Who |
|---|---|---|---|---|
| Oct 15 2026 | 1 | First version of this doc | Hand-off record | LEIEN |
| Oct 15 2026 | N/A | Quiet-hours guidance corrected to Klaviyo's advice (no texts before 8 AM or after 9 PM local) | First version was wrong | LEIEN |

---

## Part 8. Launch-day runbook

Tick each box when done. Write the name of the person who did it.

| When (ET) | What to check or do | Who |
|---|---|---|
| Dec 15 | [ ] Email shows Scheduled | |
| | [ ] Text shows Scheduled (if live) | |
| | [ ] Segment counts checked | |
| | [ ] Test sends done | |
| | [ ] Copy check done (Part 6.2) | |
| Dec 16, night | [ ] Banner ON | |
| Dec 17, 7:45 AM | [ ] Email still Scheduled | |
| | [ ] Smart Sending OFF | |
| | [ ] Time zone is Eastern | |
| Dec 17, 8:15 AM | [ ] Email sent | |
| | [ ] Button works | |
| Dec 17, 11:50 AM | [ ] People who clicked or ordered have left the text audience | |
| Dec 17, 12:15 PM | [ ] Text sent (if live) | |
| | [ ] Recipient Activity > Skipped checked for quiet hours | |
| Dec 18, morning | [ ] Banner OFF | |

---

## Part 9. If something goes wrong

| IF this happens | THEN do this |
|---|---|
| The email is not Scheduled at 7:45 AM on Dec 17 | Fix it and send it as early as possible. Tell the owner. Then move the text later, keeping about 4 hours between them and the text before 9 PM local time. |
| The email shows the wrong time (the screenshot shows 4:27 PM) | Edit the schedule to 8:00 AM ET. |
| The button link is broken | Fix it BEFORE the send. An email that has been sent cannot be recalled. |
| The text number is not verified by Dec 10 | Drop the text. The email and the banner carry the campaign. |
| The text audience shows 0 profiles | Expected until people have opted in. If people have opted in, check the consent filter and the campaign name filter. |
| Someone who clicked the email is still in the text audience | Check that the email's real name matches the segment filter exactly (Part 4.2). |
| Recipient Activity shows "Skipped" on the text | Likely quiet hours (for example Hawaii at 7:00 AM) or Smart Sending. This is expected. |
| The banner is still on at Dec 18 | Clear the text or switch the section off, then Save. |
| The studio cannot ship on the same day | Move the Dec 14 and Dec 17 sends one day earlier (Part 1.8). |
| A Canadian customer asks about the deadline | Canada ships in 7 to 12 days at $18. The Dec 17 deadline is US only. |

---

## Part 10. Fix list before launch

| # | Issue | Action |
|---|---|---|
| 1 | Email time shows 4:27 PM | Change to Thu Dec 17, 8:00 AM ET |
| 2 | Text time shows 5:20 PM | Change to 12:00 PM ET when the text goes live |
| 3 | Yellow warning on the email | Open it, read it, clear it (cause Not provided) |
| 4 | Red error on the text | Get a US number and finish verification, OR drop the text |
| 5 | Campaign names not confirmed | Check the real names and match the segment filter (Part 4.2) |
| 6 | Text audience shows 0 profiles | Build the text opt-in form (Part 5) |
| 7 | Banner state and capital letters | Keep it OFF until Dec 16 night; decide on "Dec" and "Christmas" |
| 8 | "Not provided" items | Fill in Parts 2, 4.3 and 5 |
| 9 | Final copy not recorded | Add it to Part 11, then run the copy check |
| 10 | A/B pair not chosen | Choose it (Part 4.6) |
| 11 | A/B settings not confirmed | Check the three NOT CONFIRMED items in Part 4.6 |
| 12 | Screenshots missing | Add: the email, the text draft, each segment, the banner on the store, and the form (desktop and mobile) |

Owner and due date for each item: Not provided.

---

## Part 11. Copy deck

The final wording is NOT recorded in this version. Paste it here so a new owner can see exactly what was sent.

### Email

- Subject line: SEEN: "Last day to order for gifts!" (see Part 4.6)
- Preview text: Not provided
- Body text: Not provided
- Button text: Not provided
- Button link: Not provided
- Template header line (SEEN): "Gift Ideas for christmas"

### Text message (planned only)

- Version A: Not provided
- Version B: Not provided

### Site banner

- US orders: order dec 17 for christmas delivery.

### Optional support line under the email button

- A customer review MUST be real and used with permission. NEVER present a made-up review as real.
- IF you have no real review, THEN use this true line:
  \`Free US shipping over $150 ($8 under) | One free US size exchange | 30-day returns, except final-sale items\`

### Copy rules (check all copy against these)

- Use no emoji.
- Use no timers.
- Do not invent urgency. The real deadline is enough.
- Do not offer a discount (the sale has ended).
- Do not promise arrival by Christmas.
- Do not use these words: effortless, elevated, curated, must-have, essential, timeless, investment piece.

---

## Part 12. What is verified and what is not

**Confirmed in Klaviyo Help**
- Email and text campaign steps exist.
- "Determine recipients at send time" exists for email, text and push.
- It cannot be combined with recipient local time.
- Quiet hours can be set to Delay or Skip.
- The text limits: 160 characters, or 70 with an emoji. Klaviyo advises under 153.
- A segment condition for text consent exists.
- Smart Send Time is not available for text.
- The required elements of a text disclosure.
- Toll-free verification takes 2 to 5 business days.
- Text messages are billed per message since Jul 13, 2026.
- Email A/B winning metrics are open rate, click rate and placed order rate.
- A 100% test size is supported.
- Text A/B tests exist. Klaviyo Academy names click rate and placed order rate for them.

**Not confirmed in official pages**
- Campaign Name supports only "equals" (a Klaviyo community answer).
- Sending a test from the campaign editor (documented for flow texts).
- The Shopify announcement bar steps and section name (they depend on the theme).
- An A/B test together with "Determine recipients at send time".
- That 100% test size splits the audience 50/50.
- That clicks on both email versions count under one campaign name.
- That a text campaign skips profiles without consent by itself (the segment handles it).
- Whether a free plan includes any text messages.
- The attribution window.
- What the two small icons on each campaign card mean.

---

## Part 13. Brand facts for checking copy

- Shipping: $8; free over $150 in the US. Canada: $18, 7 to 12 days.
- Code \`OFFBOLT1\`: free US shipping on a first order.
- Returns: 30 days. One free US size exchange. The Remnant Rack and the Offcut Tee are final sale.
- No sitewide sales except those on the December calendar. Returning buyers get early access (Run Notes), not codes.
- Sale before Dec 17: code \`GIFT15\`, 15% off full-price pieces, Dec 10 to 13. It has ended by Dec 17.
- Products and prices: Bolt Trouser $148, Mill Shirt $128, Selvage Jacket $215, Hem Dress $178, Bias Skirt $138 (Remnant Rack), Offcut Tee $58.

---

## Glossary

| Term | Meaning |
|---|---|
| A/B test | Send two versions to different people to see which does better. |
| Announcement bar | A thin message strip at the top of a Shopify store page. |
| Apple Mail Privacy Protection | An Apple feature that can load an email in the background. It makes open rates look higher than they are. |
| Attribution window | How long after a message an order still counts toward it. |
| Campaign | A message sent once, at a time you choose. |
| Click rate | The share of recipients who clicked a link. |
| Consent | A person's permission to get a type of message. Text consent is separate from email consent. |
| Delay / Skip | Two quiet-hours choices. Delay holds the text until quiet hours end. Skip does not send it to that person. |
| Determine recipients at send time | Klaviyo rebuilds the audience at the moment of sending. |
| ET | US Eastern Time. |
| Flow | An automated series of messages. |
| Placed order rate | The share of recipients who placed an order. |
| Profile | One person's record in Klaviyo. |
| Quiet hours | Hours when texts should not be sent. Klaviyo advises none before 8 AM or after 9 PM in the recipient's local time. |
| Recipient Activity | A Klaviyo view that shows what happened to each recipient, including who was skipped. |
| Segment | A group of profiles that updates itself from rules. |
| Smart Sending | A Klaviyo setting that skips a person messaged very recently. |
| Toll-free number | A phone number (such as 800 or 888) used to send texts. It must be verified before use. |
| Winning metric | The number used to decide which A/B version won. |

---

## Sources

- [Klaviyo Help Center: How to A/B test campaign emails](https://help.klaviyo.com/hc/en-us/articles/115005228148-How-to-A-B-test-campaign-emails)
  Used for: winning metrics, 100% test size, winner timing.
- [Klaviyo Academy: Improve your ROI with A/B testing](https://academy.klaviyo.com/en-us/certificates/product-certification/courses/optimize-email-and-sms-campaigns-in-klaviyo/lessons/improve-your-roi-with-ab-testing)
  Used for: winning metrics for text tests.
- The builder's hand-off notes (Oct 15, 2026) and screenshot of Klaviyo.
  Used for: all campaign settings, segments, names and dates.
- Other Klaviyo help pages listed in Part 12 were checked earlier in this project. Their links were not recorded.`
        }
      ]
    },

    {
      tag: "Klaviyo · Email design",
      title: "Welcome Email for Off-Bolt",
      slug: "welcome-email-off-bolt",
      type: "email-design",
      date: "2026-11-08",                 // YYYY-MM-DD. The day this case was first added (from the git history). Correct it IF the email was made on another day.
      blurb: "A welcome email that builds trust first, then drives the click",
      photo: "assets/email-welcome-1.png",
      thumbnailAlt: "The top of the Off-Bolt welcome email",
      meta: "Klaviyo · Welcome email · Off-Bolt · judged by click rate",
      video: "",
      poster: "",
      photos: [
        { src: "assets/email-welcome-1.png", alt: "The Off-Bolt welcome email, top half: header, fabric hero picture, welcome message with the two codes, a Visit Website button" },
        { src: "assets/email-welcome-2.png", alt: "The Off-Bolt welcome email, bottom half: a customer review with stars, a Use code button, the footer" }
      ],
      story: [
        {
          heading: "About this email",
          text: "Welcome Email to induce trust and warmth through brand story telling first and applied visual hierarchy to induce click rate therefore increases chances of order."
        },
        {
          text: "If it's sent to a a big number of people it will surely increase placed order rate."
        },
        {
          text: "The block sequence is specifically designed to increase click rate, so this email is judged by click rate."
        }
      ]
    },

    {
      tag: "Klaviyo · Email design",
      title: "Browse Abandonment Email for Off-Bolt",
      slug: "browse-abandonment-email-off-bolt",
      type: "email-design",
      date: "2026-11-08",                 // YYYY-MM-DD. The day this case was first added (from the git history). Correct it IF the email was made on another day.
      blurb: "A browse abandonment email that helps the shopper remember the product",
      photo: "assets/email-browse-1.png",
      thumbnailAlt: "The top of the Off-Bolt browse abandonment email",
      meta: "Klaviyo · Browse abandonment email · Off-Bolt · judged by click rate",
      video: "",
      poster: "",
      photos: [
        { src: "assets/email-browse-1.png", alt: "The Off-Bolt browse abandonment email, top half: the Off-Bolt logo, Still looking at Selvage jacket, the product picture, a View product button" },
        { src: "assets/email-browse-2.png", alt: "The Off-Bolt browse abandonment email, bottom half: a customer review with stars, two similar products with Order Now buttons, the footer" }
      ],
      story: [
        {
          heading: "About this email",
          text: "This browse abandonment email is designed to make the viewer remember the product therefore increases the chances of them liking it more, even if it comes from a low intent cue which is browse abandonment."
        },
        {
          text: "If it's sent to a big number of customer who already likes the product a little and/or the products that we sell, it will surely generate clicks therefore more chances of placed order, then after it revenue comes."
        },
        {
          text: "This email uses visual hierarchy to lead them to the button which takes them to the product. and a not too aggressive color palette to induce comfort and trust."
        },
        {
          text: "It also uses reviews to make the viewer trust the product even more."
        },
        {
          text: "And at the end if the customer doesn't get convinced it shows them 2 products that's similar to the product that might fit their taste again increasing the chances of clicks."
        },
        {
          text: "This email is judged by click."
        }
      ]
    },

    {
      tag: "Klaviyo · Email design",
      title: "Cart Abandonment Email for Off-Bolt",
      slug: "cart-abandonment-email-off-bolt",
      type: "email-design",
      date: "2026-11-09",                 // YYYY-MM-DD. The day this case was first added (from the git history). Correct it IF the email was made on another day.
      blurb: "A cart abandonment email that brings the shopper back to the cart",
      photo: "assets/email-cart-v2-full.webp",
      thumbnailAlt: "The top of the updated Off-Bolt cart abandonment email",
      meta: "Klaviyo · Cart abandonment email · Off-Bolt",
      video: "",
      poster: "",
      photos: [
        { src: "assets/email-cart-v2-full.webp", alt: "The full updated Off-Bolt cart abandonment email: the Off-Bolt logo, You left this on your cart with a Go to cart button, the product picture with its price and a second Go to cart button, Free return code with a Use code button, What do customer says with a review and a Buy cart button, You might also like with three products and Order now buttons, Continue to cart with a Go to cart button, and the footer links Visit website, About us, Similar products and Email us", tall: true }
      ],
      story: [
        {
          heading: "About this email",
          text: "**Problem:** Unclear emails, customers don't know where to click."
        },
        {
          text: "**How this design solves that problem?** It uses multiple ways but first let's start with the guaranteed seen at open.",
          bullets: [
            "This email guarantees that the **CTA is seen at open** as well as the product in the cart and the price.",
            "And this design is rich in button to the product, which is designed to be loud among other color by using **visual hierarchy**. Right after the big product picture, there's another CTA which we like."
          ]
        },
        {
          text: "**Removing the risk for them**, we know our product is good quality but they don't so this section gives them free return so they are more likely to think \"There's a free return, I can just return the product if I don't like it.\""
        },
        {
          text: "THEN a CTA if that convinced them BUT IF that doesn't convince them there's a 3rd section."
        },
        {
          text: "**The third's section purpose** is to provide social proof either a review about the store or the specific product using dynamic tags, Why? Because social proof removes their doubt because they are more likely to think \"There's a good review on it too, it must be a good quality.\""
        },
        {
          text: "Then right after it another CTA so they can click it once they are convinced."
        },
        {
          text: "**IF ALL those section doesn't convince them**, then we show them similar products so they are more likely to be curious about the product because it will be just a similar product to the one they just added to cart, you can just use the best sellers too but similar product is more recommended."
        },
        {
          text: "Each product has its own button for ease of purchase."
        },
        {
          text: "**Now 5th section**, this is just a big CTA of continuing the cart because at this stage if they scroll until the end they are just looking for reason to buy the product, they are probably already convinced so we show them another CTA so they can easily go to cart and proceed to checkout."
        },
        {
          text: "**Last section**, this is also a very important section since if they didn't buy or order similar product we provide them information about us that will lead them to trust us more, reach out to us, Visit website so they can scroll more in our shop ALL increasing the chance of an order."
        },
        {
          text: `# Previous Version of Cart Abandonment Email for Off-Bolt

![The previous Off-Bolt cart abandonment email, top half: You left this on your cart, the cart item, a Return To Cart button, a free returns code](assets/email-cart-1.png)

![The previous Off-Bolt cart abandonment email, bottom half: a customer review with stars, three similar products with Order Now buttons, Continue order here and a second Return To Cart button](assets/email-cart-2.png)

## About this email

This is a cart abandonment email, it solves the problem of brands where the customer leaves right almost at the checkout.

This email's purpose is to:

- **Firstly** make them remember the intent why they add the product to induce a feeling of wanting the product again so they order it.
- **Secondly** it leverages visual hierarchy using dark background and light headers and body and font sizing to lead them to the return to cart button.
- **Thirdly** it shows them a big picture of the product at the start to make them see the product and again induce the remembrance of the reason why they add it to cart.

There are some very crucial blocks here:

- **The free return block**, what this does is it removes the risk of buying the product and not liking it because they can return it.
- **The review block**, in this part we will remove the doubt if the product is really good or not so once they see it they will think 'there's a good review on this product it must be really good".

One important thing it's better for this part to be dynamic so it changes based on cart and makes it more personalized but if not possible general store review is most recommended.

**Finally, last part**, we will show them similar products and another button directly to the cart.

What this does is it gives them 2 choices, buy a similar product or buy the original cart product since they might just not realize they have already been convinced by the past block, here they can make the choice.

In case they really don't like it they are one click away from the product that is similar to it and might fit their actual taste since they might not like a certain part of the original product like it has blue buttons which they don't like and the similar product has red which they really like.

So basically we will maximize the intent's potential to become an order by filtering their thoughts down the full email using the most important blocks first.`
        }
      ]
    },

    {
      draft: true,                     // hidden from visitors. Delete this line to publish it.
      tag: "Placeholder",
      title: "Campaign case study (placeholder)",
      slug: "campaign-placeholder",
      type: "campaign",
      date: "",
      blurb: "Placeholder. Replace this with a real campaign project.",
      photo: "",
      meta: "",
      photos: [],
      story: []
    },

    {
      draft: true,                     // hidden from visitors. Delete this line to publish it.
      tag: "Placeholder",
      title: "Email design case study (placeholder)",
      slug: "email-design-placeholder",
      type: "email-design",
      date: "",
      blurb: "Placeholder. Replace this with a real email design project.",
      photo: "",
      meta: "",
      photos: [],
      story: []
    },

    {
      tag: "Klaviyo · Email design",
      title: "Checkout Abandonment Email for Off-Bolt",
      slug: "checkout-abandonment-email-off-bolt",
      type: "email-design",
      date: "2026-11-10",                 // YYYY-MM-DD. The day this case was first added (from the git history). Correct it IF the email was made on another day.
      blurb: "A checkout abandonment email that brings the shopper back to checkout",
      photo: "assets/email-checkout-1.png",
      thumbnailAlt: "The top of the Off-Bolt checkout abandonment email",
      meta: "Klaviyo · Checkout abandonment email · Off-Bolt",
      video: "",
      poster: "",
      photos: [
        { src: "assets/email-checkout-1.png", alt: "The Off-Bolt checkout abandonment email, top part: the Off-Bolt logo, You left checkout, Continue Checkout here, a Checkout button, the product picture" },
        { src: "assets/email-checkout-2.png", alt: "The Off-Bolt checkout abandonment email, middle part: a free return code, What customers say with a customer review and stars" },
        { src: "assets/email-checkout-3.png", alt: "The Off-Bolt checkout abandonment email, bottom part: You might like with two products and Order Now buttons, Return to checkout with a second Checkout button, the footer" }
      ],
      story: [
        {
          heading: "About this email",
          text: "This checkout abandonment email solves 1 problem (Abandoned checkout) optimally using multiple ways.",
          bullets: [
            "Reminds them of the interrupted checkout immediately once opened",
            "The return to checkout button and product is guaranteed to be seen at open",
            "Free return offer removes the risk for them, making them much likely to order it if they stopped because of doubts",
            "Reviews removes the doubt about the specific product quality or store's honesty",
            "Visual hierarchy gets them scrolling until the end if they are still looking for reason",
            "Visual hierarchy also leads them to the important buttons"
          ]
        },
        {
          text: "If this is sent to a large number of customers it will surely generate significant amount of revenue SINCE the intent this email sits on is the highest level of intent we can get."
        },
        {
          text: "Mix this with right timing via flows, right subject and preview line it will generate significant amount improvements for a brands revenue."
        }
      ]
    },

    {
      tag: "Klaviyo · Email design",
      title: "SMS Subscription Campaign Email for Off-Bolt",
      slug: "sms-subscription-campaign-email-off-bolt",
      type: "email-design",
      date: "2026-11-10",                 // YYYY-MM-DD. The day this case was first added (from the git history). Correct it IF the email was made on another day.
      blurb: "A campaign email that improves SMS subscription rate",
      photo: "assets/email-sms-1.webp",
      thumbnailAlt: "The top of the Off-Bolt SMS subscription campaign email",
      meta: "Klaviyo · SMS subscription campaign email · Off-Bolt",
      video: "",
      poster: "",
      photos: [
        { src: "assets/email-sms-1.webp", alt: "The Off-Bolt SMS subscription campaign email, top part: the Off-Bolt logo, SMS Early Access, Originals Undeniable, a Subscribe button, a white t-shirt on a hanger" },
        { src: "assets/email-sms-2.png", alt: "The Off-Bolt SMS subscription campaign email, middle part: Mill left on the bolt with a Learn More button, Perks for SMS subscriber, What to expect with six ticked points" },
        { src: "assets/email-sms-3.png", alt: "The Off-Bolt SMS subscription campaign email, bottom part: What our customer says with a review, Subscribe and get 20% off with a Subscribe button, the footer" }
      ],
      story: [
        {
          heading: "About this email",
          text: "This SMS subscription campaign email improves SMS subscription rate using informative sections, supporting sections and visual hierarchy."
        },
        {
          text: "**Visual hierarchy** helps them know immediately what the email is about and leads them right to the button, preferably once opened. It also keeps them scrolling until the end to let them know what benefits awaits them upon subscribing."
        },
        {
          text: "**Informative sections** does the heavy lifting, this section convinces the viewer why they should subscribe by showing them the benefits and if they are still doubtful they can see the full section via clicking the button in the section again leading them to be convinced to subscribe."
        },
        {
          text: "**Supporting sections** removes the doubt to the store since it gives them the social proof that customers really like it making them think the store must be really good since customers like it."
        },
        {
          text: "So this SMS subscription campaign increases SMS subscription further improving CRM and therefore improving order rates so you have more revenue."
        }
      ]
    },

    {
      tag: "Klaviyo · Email design",
      title: "Cart Abandonment Email 2 for Off-Bolt",
      slug: "cart-abandonment-email-2-off-bolt",
      type: "email-design",
      date: "2026-11-11",                 // YYYY-MM-DD. The day this case was first added (from the git history). Correct it IF the email was made on another day.
      blurb: "A cart abandonment email that leads the shopper from the product to the offer, the proof and back to checkout",
      photo: "assets/email-cart2-full.webp",
      thumbnailAlt: "The top of the second Off-Bolt cart abandonment email",
      meta: "Klaviyo · Cart abandonment email · Off-Bolt",
      video: "",
      poster: "",
      photos: [
        { src: "assets/email-cart2-full.webp", alt: "The full second Off-Bolt cart abandonment email: the Off-Bolt logo, You left this on your cart with a Go to cart button, the product picture with its price and a Check price button, Free return with a code and a Use it button, What customers say with a customer review and a Visit website button, Continue to checkout with a Continue button, and the footer links Visit website, About us, Similar products and Email us", tall: true }
      ],
      story: [
        {
          heading: "About this email",
          text: "This email solves the problem of customers leaving a cart and never coming back."
        },
        {
          text: "How this emails solves that?",
          bullets: [
            "**First** once the email is opened it guarantees that the CTA and large picture of the product will be shown which is very crucial since not anyone scroll until the end.",
            "However if they are still deciding visual hierarchy will lead them to the second section which is the **OFFER** section and what does this section do? It removes the risk for customers since if they don't like the product they can just return it.",
            "And once they scroll again if they are still not convince we will now use the **SOCIAL PROOF** section, what this section do? It removes their doubt either about the product or the store and with the combination of the CTA right below it, customers that are convinced can easily click the button and proceed to the website to order or to check more product.",
            "And last SECTION the **RETURN TO CHECKOUT BUTTON** at the end again giving them second chance to click the button before they exit which will increase the chances of click again.",
            "Lastly the **footer** with different links that points to our brand or our product."
          ]
        },
        {
          text: "SO basically it maximizes the intent and filters thought and maximizes it's potential as much as possible to cause conversion."
        }
      ]
    },

    {
      tag: "Klaviyo · Email design",
      title: "New Product Launch Email for Off-Bolt",
      slug: "new-product-launch-email-off-bolt",
      type: "email-design",
      date: "2026-11-13",                 // YYYY-MM-DD. The day this case was first added (from the git history). Correct it IF the email was made on another day.
      blurb: "A product launch email that answers one doubt per section and gives a click in every one",
      photo: "assets/email-launch-full.webp",
      thumbnailAlt: "The top of the Off-Bolt new product launch email",
      meta: "Klaviyo · Product launch email · Off-Bolt",
      video: "",
      poster: "",
      photos: [
        { src: "assets/email-launch-full.webp", alt: "The full Off-Bolt new product launch email: Be the first to see it, the Off-Bolt name, New Hem Dress is here with the product photo and a View Product button, Made to standout with Why Hem Dress and its three benefits and a See Product button, three colors each with a See Product button, a Size Guide button, Be the first to try with a See Product button, and the footer links Visit website, About us, Similar products and Email us", tall: true }
      ],
      story: [
        {
          heading: "The Problem",
          text: "Customers have doubts, don't have any information about the product, don't know where to click and there's too many words to read."
        },
        {
          heading: "The Solution",
          text: "How does this email solve that? It handles their doubts one section at a time, and every section ends with a way to click and designs makes it very easy to understand without reading too much."
        },
        {
          text: "**First: seen at open.**"
        },
        {
          text: "The headline, the big product photo and the View Product button all show as soon as the email opens. This matters BECAUSE not everyone scrolls to the end. IF they’re already interested, they click right away."
        },
        {
          text: "**Second: “Why Hem Dress?”**"
        },
        {
          text: "What does this section do? It gives them a reason to buy. It shows 3 benefits: gentle on skin, less sticky and photogenic glow. SO they think better of the product, THEN See Product button sits right below it for the ones who are convinced."
        },
        {
          text: "**Third: color variants.**"
        },
        {
          text: "BUT what IF they like the dress and NOT the color? We show it in 3 colors, each with its own button. They pick the one that fits their taste, and it’s one click away."
        },
        {
          text: "**Fourth: Size Guide.**"
        },
        {
          text: "Size doubt stops a lot of clothing orders: “What IF it doesn’t fit me?” The Size Guide button removes that doubt. They know what size to buy and can go on to checkout."
        },
        {
          text: "**Fifth: last CTA, “Be the first to try.”**"
        },
        {
          text: "IF they scroll to the end, they’re just looking for a reason to buy. This button gives them a second chance to click before they leave."
        },
        {
          text: "**Finally, the footer.**"
        },
        {
          text: "Why does the footer matter? IF they didn’t click ANY product, the footer still gives them 4 more ways to reach us:",
          bullets: [
            "**Visit Website:** they keep browsing the shop.",
            "**About Us:** they learn about the brand, SO they trust us more.",
            "**Similar Products:** this dress may not fit their taste, BUT a similar one might.",
            "**Email Us:** they can ask about fit or fabric before buying."
          ]
        },
        {
          text: "EVERY one of these is a click. AND clicks keep them in our engaged segment, which protects deliverability for the next send and shows us who is our most engaged customer so we can target them better."
        },
        {
          heading: "Why It Works",
          bullets: [
            "**11 click points:** 7 buttons plus 4 footer links. A reader who’s ready to click always has one near them."
          ]
        },
        {
          text: "**One doubt per section:**",
          bullets: [
            "Don’t know the product → benefits",
            "Wrong color → variants",
            "Wrong size → size guide",
            "Don’t trust the brand → footer"
          ]
        },
        {
          bullets: [
            "**Visual hierarchy:** the red buttons stand out against the navy and cream, SO the eye goes straight to them."
          ]
        },
        {
          text: "So basically, this email turns curiosity and Unfamiliarity into clicks by answering each doubt in order: what it is, why to buy it, which color, which size and who we are. More clicks, THEREFORE more chances of a placed order."
        }
      ]
    },

    {
      tag: "Klaviyo · Email design",
      title: "Black Friday SMS Subscription Email for Off-Bolt",
      slug: "black-friday-sms-subscription-email-off-bolt",
      type: "email-design",
      date: "2026-11-18",                 // YYYY-MM-DD. The day this case was first added. Correct it IF the email was made on another day.
      blurb: "A Black Friday email that grows the SMS list before the sale",
      photo: "assets/email-bfsms-full.webp",
      thumbnailAlt: "The top of the Off-Bolt Black Friday SMS subscription email",
      meta: "Klaviyo · Black Friday SMS subscription email · Off-Bolt",
      video: "",
      poster: "",
      photos: [
        { src: "assets/email-bfsms-full.webp", alt: "The full Off-Bolt Black Friday SMS subscription email: Get Black Friday first, Join by text with a Join Text button and the consent text, What you get with three perks, a product photo, How it works in three steps, What to expect, What customer says with a subscriber quote, Get early sale access with a second Join Text button and the consent text, and the footer links Visit website, About us, Similar products and Email us", tall: true }
      ],
      story: [
        {
          heading: "About this email",
          text: "This email helps a brand with a big sale coming to increase SMS list. SMS is the fastest channel to reach customer it's urgent, 3x more open rate than email, easier to click and less inbox competition, which puts you ahead of brands who don't use it."
        },
        {
          text: "AND"
        },
        {
          text: "On the visual side this design leverages hyper loud color mixed with extra calm color which makes it look alive and makes customer know immediately where to click. Plus, it also uses Icons to make it skim easy. most customer won't read a lot of text they skim."
        },
        {
          heading: "Here's the features",
          text: "**First, the hero.** Once the email is opened, they see the offer right away: get Black Friday first, join by text. The button sits right below it. That’s very important, since not everyone scrolls to the end. “Join” is in cyan bright green, SO the eye lands on the action first. Then the line “Tomorrow, we’re giving our subscribers first access” gives them a deadline. SO they have a reason to why they should join."
        },
        {
          text: "**Secondly, the consent text sits right under the button.** Why? BECAUSE they MUST know what they’re signing up for before they send the message(helps us by keeping the list clean). It also works for people on a computer, since they can just text BOLT from their phone."
        },
        {
          text: "**Thirdly, the WHAT YOU GET section.** This is where we convince them. They get deals 24 hours before email, an extra 10% sent ONLY by text. SO they’ll think, “IF I join, I get it before everyone else, and cheaper.” Email subscribers get NONE of these, which makes the text list worth joining."
        },
        {
          text: "**Then HOW IT WORKS.** Tap the button, hit send, done. What does this section do? It removes the doubt that joining is a hassle. 3 steps, about 10 seconds, which matches the preheader."
        },
        {
          text: "**Then WHAT TO EXPECT.** 4 texts a month, reply STOP anytime. This removes the fear of spam, the most common reason people don’t give their number. They’re more likely to think, “I can stop anytime anyways.”"
        },
        {
          text: "**Then the SOCIAL PROOF section.** A subscriber got the text a full day before the inbox AND grabbed their size before it sold out. This removes the last doubt BECAUSE it shows the early access is real."
        },
        {
          text: "**Finally, last part.** A second CTA over the clothing rack: get early sale access. IF they scrolled all the way down, THEN they’re probably is only looking for a reason, since we already gave them a lot they're more likely to click. SO we give them another button before they leave. The consent text shows again, then the footer links lead back to our site AND products."
        },
        {
          text: "So basically, this email grows the SMS list before the sale. More SMS subscribers means we reach them faster on sale day. Therefore more clicks, more placed orders, AND then revenue."
        }
      ]
    },
    {
      tag: "Klaviyo · Shopify · Campaign",
      title: "November BFCM Omnichannel Campaign: Built for Sales AND Margin",
      slug: "november-bfcm-omnichannel-campaign",
      type: "campaign",                       // flow | campaign | email-design
      date: "2026-11-20",
      blurb: "The most BFCM sales, with the least margin given away",
      photo: "assets/campaign-bfcm-calendar.png",
      thumbnailAlt: "The November BFCM campaign calendar in Klaviyo",
      meta: "Klaviyo + Shopify · 17 messages: 8 emails, 5 SMS, 4 push · 4 phases over one month · Off-Bolt",
      video: "",
      poster: "",
      photos: [
        { src: "assets/campaign-bfcm-calendar.png", alt: "The November BFCM campaign calendar in Klaviyo: E1 Gift Guide on Nov 2, E2 11.11 on Nov 11, E3 Teaser on Nov 16, SMS1 VIP Early Access on Nov 17, E4 VIP Early Access on Nov 18, PUSH and SMS2 VIP Reminder on Nov 23, SMS3 BF Early and E5 Thanksgiving Preview on Nov 25, E6 BF Launch, PUSH BF and SMS4 BF Public on Nov 26, E7 and PUSH Cyber Sunday on Nov 28, E8, PUSH and SMS5 CM Last Call on Nov 29", wide: true }
      ],
      story: [
        {
          heading: "The problem",
          text: "Most brands treat Black Friday as one big email. They send the discount on Friday morning, to everyone, and hope it lands."
        },
        {
          text: "But IF the first email of the season is the discount, THEN every sale in November is a discounted sale. The shoppers who would have paid full price two weeks earlier now wait for the code. Loyal buyers, the people who buy anyway, get the same cut as a stranger. And the inbox on Black Friday morning is the most crowded it will be all year."
        },
        {
          text: "SO the brand gives away margin on orders it was going to get, AND fights for attention on the one day it's hardest to win."
        },
        {
          heading: "What I built",
          text: "Each send has one job, timed to when buyers are most ready. Discounts go ONLY to the people AND days that need them.",
          bullets: [
            "**Build intent (no prices).** Get shoppers to pick what they want, AND grow the SMS list, before any deal exists.",
            "**Reward VIPs (gift, not discount).** Our best buyers get in first, with a free tee instead of a price cut.",
            "**Black Friday.** The deal opens on SMS first, THEN goes public with spend tiers.",
            "**Cyber Monday.** One real deadline, THEN the offer ends."
          ]
        },
        {
          heading: "Result",
          text: "SO we get more orders at a bigger order value, AND we give away less margin to get them."
        },
        {
          heading: "Documentation",
          text: `# November BFCM Omnichannel Campaign: Built for Sales AND Margin

**Brand:** Off-Bolt (women's clothing)
**Tools:** Shopify · Klaviyo · Email · SMS · Push

---

## At a glance

| | |
| --- | --- |
| **Goal** | The most BFCM sales, with the least margin given away |
| **Length** | One full month, 4 phases |
| **Messages** | 17 total: 8 emails, 5 SMS, 4 push |
| **Offers** | No prices before VIP week. VIPs get a free gift. Black Friday uses spend tiers with unique codes |
| **SMS rule** | SMS gets every deal 24 hours before email |
| **Audiences** | 5 new segments + engaged segments. Buyers excluded from every deal send after they order |
| **Send time** | 8 a.m. ET for email and push. Texts at noon, unless the deal opens on SMS first |

---

## 1. The problem

Most brands treat Black Friday as one big email. They send the discount on Friday morning, to everyone, and hope it lands.

But IF the first email of the season is the discount, THEN every sale in November is a discounted sale. The shoppers who would have paid full price two weeks earlier now wait for the code. Loyal buyers, the people who buy anyway, get the same cut as a stranger. And the inbox on Black Friday morning is the most crowded it will be all year.

SO the brand gives away margin on orders it was going to get, AND fights for attention on the one day it's hardest to win.

## 2. The idea

Each send has one job, timed to when buyers are most ready. Discounts go ONLY to the people AND days that need them.

We split the month into 4 phases:

1. **Build intent (no prices).** Get shoppers to pick what they want, AND grow the SMS list, before any deal exists.
2. **Reward VIPs (gift, not discount).** Our best buyers get in first, with a free tee instead of a price cut.
3. **Black Friday.** The deal opens on SMS first, THEN goes public with spend tiers.
4. **Cyber Monday.** One real deadline, THEN the offer ends.

Five rules run through the whole month:

- **No prices before VIP week.** Anyone who buys in the first weeks pays full price.
- **A gift beats a price cut.** A free tee costs the store only what it costs to make. A percentage off costs the full amount, on every item in the cart.
- **SMS first, by 24 hours.** It gives shoppers a real reason to join SMS, AND it spreads the orders over two days.
- **Spend tiers.** $15 off $100+ and $30 off $200+. The shopper adds one more piece to reach the next tier, SO the order value goes up.
- **Unique codes AND buyer exclusions.** A one-time code can't leak to coupon sites. And once someone orders, they drop out of every deal send, SO nobody gets discounted twice.

---

## 3. The calendar

Email and push send at 8 a.m. ET. Texts send at noon, EXCEPT where SMS opens a deal early.

![The November BFCM campaign calendar: E1 Gift Guide on Nov 2, E2 11.11 on Nov 11, E3 Teaser on Nov 16, SMS1 VIP Early Access on Nov 17, E4 VIP Early Access on Nov 18, PUSH and SMS2 VIP Reminder on Nov 23, SMS3 BF Early and E5 Thanksgiving Preview on Nov 25, E6 BF Launch, PUSH BF and SMS4 BF Public on Nov 26, E7 and PUSH Cyber Sunday on Nov 28, E8, PUSH and SMS5 CM Last Call on Nov 29](assets/campaign-bfcm-calendar.png)

### Phase 1: Build intent (no prices)

| # | When | Channel | Message | Audience | Offer | Why |
| --- | --- | --- | --- | --- | --- | --- |
| E1 | Tue Nov 2 | Email | Gift Guide: best sellers grouped by who they're for, "Start your wishlist" | Engaged 90 days | None | Plants products at full price. Wishlist clicks show what each person wants |
| E2 | Thu Nov 11 | Email | 11.11: "Save your BFCM picks now," AND join SMS to get Black Friday 24 h early | Engaged 60 days | None | Grows the SMS list before the peak, with no discount spent |
| E3 | Tue Nov 16 | Email | Teaser: "Something's coming." One button: "Get early access" | Engaged 90 days | None | Clicks build the early-access list, SO we reward intent, not everyone |

### Phase 2: Reward VIPs (gift, not discount)

| # | When | Channel | Message | Audience | Offer | Why |
| --- | --- | --- | --- | --- | --- | --- |
| SMS1 | Wed Nov 17, 8 a.m. | SMS | VIP early access is open | VIPs | Free Offcut Tee on $100+ | SMS gets it a day before email. Rewards joining SMS |
| E4 | Thu Nov 18 | Email | "You're in early." The free tee, the end date, best sellers | VIPs + early-access clickers | Free Offcut Tee on $100+ | Sales come in 8 days before Black Friday, before the inbox fills up, with no price cut |
| PUSH | Tue Nov 23, 8 a.m. | Push | "Early access ends tomorrow" | VIPs | Same | Recovers VIPs who meant to buy but waited |
| SMS2 | Tue Nov 23, noon | SMS | "Early access ends tomorrow" | VIPs | Same | Midday is when people decide. Low cost per send |

### Phase 3: Black Friday

| # | When | Channel | Message | Audience | Offer | Why |
| --- | --- | --- | --- | --- | --- | --- |
| SMS3 | Thu Nov 25, 8 a.m. (Thanksgiving) | SMS | "Black Friday is live for you, 24 hours early" | SMS subscribers, engaged | $15 off $100+ / $30 off $200+, unique code | Spreads orders over two days. Tiers protect order value |
| E5 | Thu Nov 25, 7 p.m. | Email | Preview: "Opens tomorrow at 8 a.m." 2–3 best sellers. "Join SMS to shop now" | Engaged 90 days, not on SMS | None | Builds the launch, AND every SMS join is a buyer we got with no discount cost |
| E6 + PUSH | Fri Nov 26, 8 a.m. | Email + Push | Main sale launch: the offer, best sellers, the deadline | Engaged 90 days + lapsed buyers (180+ days) | $15 off $100+ / $30 off $200+, unique codes | The biggest revenue send of the month |
| SMS4 | Fri Nov 26, noon | SMS | "Sale's public now. The best sizes are going" | SMS subscribers who haven't bought | Same | Real scarcity moves people still deciding, without a deeper discount |
| E7 + PUSH | Sun Nov 28, 8 a.m. | Email + Push | Cyber Sunday: a different product category for each shopper | Engaged, haven't bought | Same | A new angle for non-buyers, with no new offer |

### Phase 4: Cyber Monday

| # | When | Channel | Message | Audience | Offer | Why |
| --- | --- | --- | --- | --- | --- | --- |
| E8 + PUSH | Mon Nov 29, 8 a.m. | Email + Push | "Ends tonight at 11:59 p.m. ET." Countdown, offer, best sellers | Engaged, haven't bought | Same | A real deadline turns "later" into an order |
| SMS5 | Mon Nov 29, noon | SMS | "Last call: hours left" | SMS subscribers who haven't bought | Same | A low-cost final push to warm SMS buyers |

The offer ends on schedule. SO shoppers don't learn to wait for the next code.

---

## 4. Audiences

Every send goes to people who engaged recently. That keeps the inbox placement healthy at the busiest time of the year. Sunset candidates (people who stopped engaging) are excluded from every email.

New segments built for this campaign:

| Segment | Who's in it | Used for |
| --- | --- | --- |
| **BFCM VIP** | Placed 2 or more orders | Early access (SMS1, E4, VIP reminders) |
| **Early-access clickers** | Clicked the E3 teaser | Early access (E4), next to VIPs |
| **SMS engaged** | Subscribed to SMS marketing AND opened, clicked OR visited the site in the last 90 days | Every Black Friday and Cyber Monday text |
| **Lapsed buyers (180+ days)** | Ordered before, but not in the last 180 days | The Black Friday launch (E6) |
| **Bought since Thanksgiving** | Placed an order from Thanksgiving on | Excluded from every deal send after the sale opens |

Why does the "Bought since Thanksgiving" exclusion matter so much? Because a shopper who already ordered and THEN gets another discount email either buys again at a lower price, or feels they paid too much. Both cost us. SO once they buy, they're out.

And why does E5 skip SMS subscribers? Because they already have the deal. E5's job is to bring the rest onto SMS, so we don't send it to people who are already there.

---

## 5. How the offers protect margin

What does a free gift cost compared to a discount? Here's an example on a $120 order (example numbers only):

| | 15% off | Free tee |
| --- | --- | --- |
| What the shopper sees | $18 off | A $35 tee |
| What it costs the store | $18 | ~$8 (the cost to make it) |

The shopper feels they got more, AND the store keeps about $10 more on that one order. That's WHY VIPs get the tee. They're our most likely buyers, so we don't need a price cut to win them, just a reason to buy now.

The spend tiers work the same way. A shopper at $85 sees "$15 off $100+" and thinks "I'm almost there, I'll add one more piece." SO the discount comes with a bigger cart attached.

---

## 6. Why this makes the most sales AND keeps the margin

**More sales:**

- First, the early emails show us who plans to buy. Wishlists and early-access clicks mean the launch goes to warm shoppers.
- Secondly, VIPs buy first, before the inbox gets crowded.
- Thirdly, SMS gets every deal a day early. That grows the SMS list AND spreads the orders over two days.
- Finally, email, SMS and push cover every peak day, through to the last hours of Cyber Monday.

**More margin:**

- 3 of the 8 emails carry no price at all, SO anyone who buys then pays full price.
- VIPs get a gift that costs the store a fraction of a discount.
- The $100 and $200 tiers lift the order value.
- Unique codes can't leak.
- Buyers drop out the moment they order, SO nobody gets discounted twice.

SO we get more orders at a bigger order value, AND we give away less margin to get them.`
        }
      ]
    }

  ]
},


/* ================================================================
   3b. CERTIFICATIONS PAGE

   One entry in "items" IS one certificate card. Add another by
   copying a whole { … } block.

   Every entry:
     title      the name of the certificate
     issuer     who issued it, e.g. "Klaviyo"        ("" hides the line)
     date       when it was issued, e.g. "Oct 2026"  ("" hides the line)
     id         the certificate ID. It gets a Copy button.
                Leave "" AND the card says "Not added yet".
     photo      a picture of the certificate: "assets/klaviyo-cert.png"
                Leave "" AND a labelled empty tile stands in.
     photoAlt   what the picture shows, read out by screen readers
     links      any number of links. Each one becomes a button:
                  { label: "Verify certificate", url: "https://…" }
                A link with url: "" shows greyed out, as a reminder.
   ================================================================ */

certs: {

  tabTitle: "Certifications · Leien",
  tabNote: "Certifications earned in Klaviyo and email marketing.",

  eyebrow: "Certifications",
  heading: "Proof behind the work.",
  lede: "Each card comes with the certificate image, its ID and a link to check it.",

  /* the small words on each card */
  labels: {
    issuer: "Issued by",
    date: "Issued",
    id: "Certificate ID",
    empty: "Not added yet",
    copy: "Copy",
    copied: "ID copied",
    photoEmpty: "Certificate picture goes here",
    open: "Open the certificate picture"
  },

  items: [

    {
      title: "Klaviyo Practitioner Certificate",
      issuer: "Klaviyo",
      date: "October 8, 2026",
      id: "196600428",
      photo: "assets/klaviyo-certificate.png",
      photoAlt: "Klaviyo Practitioner certificate of completion, valid October 8, 2026 to October 8, 2028",
      links: [
        { label: "Verify certificate", url: "https://credential.klaviyo.com/b39931ae-37f0-48fe-a9e6-e53084dcb53d#acc.FjeSAKXu" }
      ]
    },

    {
      title: "Klaviyo Strategist Certificate",
      issuer: "Klaviyo",
      date: "November 12, 2026",
      id: "200208874",
      photo: "assets/klaviyo-strategist-certificate.png",
      photoAlt: "Klaviyo Strategist certificate of completion, valid November 12, 2026 to November 12, 2028",
      links: [
        { label: "Verify certificate", url: "https://credential.klaviyo.com/0970043f-b91a-4d19-8ef9-5f67c384e8dd" }
      ]
    }

  ]
},


/* ================================================================
   3c. CONTACT PAGE — the "Contact me" tab.
       The "Get my free audit" buttons on the home page open the contact box (part 4).
       "email: true" prints the address from site.email.
       profile: "linkedin" prints site.linkedin. WHILE it is "" the line is not shown.
   ================================================================ */

contactPage: {

  tabTitle: "Contact · Leien",
  tabNote: "Send me your store and get a free audit of your Klaviyo flows.",

  eyebrow: "Contact",
  heading: "Get a free audit of your flows.",
  lede: "Send me your store and I'll review your current workflows: what's missing, what could be improved, and where the money is leaking.",

  lines: [
    { label: "Email", email: true },
    { label: "LinkedIn", profile: "linkedin" },
    { label: "Upwork", profile: "upwork" },
    { label: "Based in", value: "Philippines · works across time zones" },
    { label: "Replies in", value: "Under 24 hours, on working days" }
  ]
},


/* ================================================================
   4. THE CONTACT BOX — opens WHEN a "Get my free audit" button is clicked
      (the form on the Contact page uses the same words)

      It never sends anything by itself. It opens the visitor's own
      mail app with the subject AND the message already filled in.

      THE TWO DROPDOWNS
        subjects   five ready-made subjects. Picking one fills the Subject box.
        starters   five ready-made messages. Picking one fills the Message box.
                   "label" is the short name in the dropdown, "text" is the message.
                   Write "text" between backticks, starting each line at the left edge.
        The visitor can still change every word, OR type their own.

      THE BLANK
        "blank" is the gap a visitor must fill in with their store address.
        Type it inside a starter exactly as it is written here.
   ================================================================ */

contactBox: {
  heading: "Write to me",
  note: "Pick a subject and a message, add your store, then send it from your own mail app.",
  toLabel: "To",

  subjectLabel: "Subject",
  subjectPick: "Pick a common subject",      // the first line of the subject dropdown
  subject: "Free audit request",             // what the Subject box starts with. "" starts it empty.
  subjects: [
    "Free audit request",
    "New Klaviyo flows for my Shopify store",
    "Fix or improve my current flows",
    "Custom email design or HTML build",
    "Price and timing for a project"
  ],

  messageLabel: "Message",
  messagePick: "Pick a message starter",     // the first line of the message dropdown
  placeholder: "What are you selling, and where does the revenue leak?",

  /* WHICH starter the Message box starts with. 1 = the first one below. 0 = start empty. */
  startWith: 1,

  blank: "[your store URL]",
  blankHint: "Replace {blank} with your store's address before you send.",   // shown under the message WHILE the blank is still there

  starters: [
    {
      label: "Ask for the free audit",
      text: `Hi Leien,

I would like the free audit of my email flows.

Store URL: [your store URL]
Flows live now:
Biggest problem right now:

Thanks,`
    },
    {
      label: "Ask for new flows",
      text: `Hi Leien,

I need new Klaviyo flows built for my Shopify store.

Store URL: [your store URL]
Flows I need (welcome, abandoned cart, post-purchase, win-back):
When I want to start:

Thanks,`
    },
    {
      label: "Ask for a fix",
      text: `Hi Leien,

My flows are live, but I think they could do more.

Store URL: [your store URL]
Flows live now:
What looks wrong or weak:

Thanks,`
    },
    {
      label: "Ask for an email design",
      text: `Hi Leien,

I need a custom email design or HTML build in Klaviyo.

Store URL: [your store URL]
Which email (welcome, cart, campaign, other):
A brand guide or an example I like:

Thanks,`
    },
    {
      label: "Ask about price and timing",
      text: `Hi Leien,

I would like to know your price and timing for this work.

Store URL: [your store URL]
What I need:
Retainer, short sprint, or fixed project:

Thanks,`
    }
  ],

  send: "Open in my email app",
  cancel: "Cancel"
}


};
