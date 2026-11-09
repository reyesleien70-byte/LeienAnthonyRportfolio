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
  email: "leienanthony1@gmail.com",

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

  tabTitle: "Leien · Email & automation for Shopify brands",
  tabNote: "Klaviyo lifecycle email automation for Shopify brands.",

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
      { label: "Coding",           values: [85] },
      { label: "Data & APIs",      values: [88] },
      { label: "Logical thinking", values: [95] },
      { label: "Sales",          values: [91] },
      { label: "Marketing Strategy",          values: [90] }
    ]
  },

  /* Sections, top to bottom. Reorder them, delete one,
     OR copy one to add another.

     "type" picks the shape:
       "text"      eyebrow, heading, lede, bullets
       "tools"     eyebrow, heading, a grid of tools
       "contacts"  eyebrow, heading, a list of label + value
       "cta"       the boxed heading, text and button at the end

     The FIRST section's heading IS the page's main title.

     ANY section may also carry:  photo, photoAlt, video, poster */

  blocks: [

    {
      type: "text",
      id: "who",
      eyebrow: "Who I help",
      heading: "Shopify brands only: small, medium large enterprises.",
      lede: "I build email automation lifecycle that keeps a first-time buyer moving, from the welcome to the repeat purchase to winback, so your traffic stops being a one-time thing.",
      bullets: [
        "Teams or Solo founder losing sales to abandoned carts, one-time buyers, and dead lists.",
        "Brands whose flows exist but isn't optimized for revenue",
        "Available for long-term retainers, short-term sprints, or fixed-scope projects.",
        "Brands who want to automate their email marketing to save time and money and for better results."
      ]
    },

    {
      type: "text",
      id: "automate",
      eyebrow: "What I automate and Specialize in",
      heading: "Flows that run 24/7 and HTML codes to fit the situation",
      bullets: [
        "Abandoned cart and abandoned checkout recovery",
        "Browse abandonment, catching intent before a cart exists",
        "Post-purchase upsell, cross-sell, and repeat-order timing",
        "Win-back flows for lapsed buyers",
        "Welcome series for new subscribers",
        "Sunset flows to protect deliverability and sender reputation",
        "Rule-based and AI-driven logic: segments, branching, timing, suppression",
        "Custom HTML email builds or blocks in Klaviyo.",
        "Custom JS or Python codes for better data control in n8n."
      ]
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
        { name: "n8n", icon: "nodes" },
        { name: "Shopify", icon: "bag" },
        { name: "JavaScript", icon: "code" },
        { name: "Python", icon: "code" },
        { name: "HTML", icon: "code" },
        { name: "CSS", icon: "code" },
        { name: "APIs", icon: "cube" },
      ]
    },

    {
      type: "contacts",
      id: "contacts",
      eyebrow: "Contacts",
      heading: "Where to reach me.",

      /* email: true  prints the address from site.email above
         AND makes it clickable. */
      lines: [
        { label: "Email", email: true },
        { label: "Based in", value: "Philippines · works across time zones" },
        { label: "Replies in", value: "Under 24 hours, on working days" }
      ]
    },

    {
      type: "cta",
      id: "cta",
      heading: "Want to know what opportunities your flows are leaving on the table?",
      text: "Send me your store and I'll give a free audit, I'll review your current workflows: what's missing, what could be improved, and where the money is leaking.",
      button: "Contact me"
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
  lede: "Each card holds the walkthrough: what was broken, what I built, what it does now.",
  openLabel: "Open case",

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
      photo: "",
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
          text: "Working as expected. Tested end to end on a practice store on Sept 18, 2026. but not live yet."
        },
        {
          heading: "Skills I demonstrated in this build",
          text: "Strategical thinking, logic mastery, klaviyo understanding, shopify fluency and n8n understanding. Most importantly it shows I know the craft."
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
      title: "Abandoned Cart Recovery(Grouped)",
      slug: "abandoned-cart-recovery-grouped",
      type: "flow",                       // flow | campaign | email-design
      date: "2026-09-15",
      blurb: "1 of the 3 flows in ESO",
      photo: "",
      meta: "Klaviyo · Checkout Started · email + SMS · 5 messages per opener, 3 per non-opener · one discount",
      video: "",
      poster: "",
      photos: [
        { src: "assets/case2-acr-flow-1.png", alt: "The abandoned checkout flow, part 1: trigger, 1 hour 30 minute wait, E1 Reminder, 11 hour 30 minute wait, first split" },
        { src: "assets/case2-acr-flow-2.png", alt: "The abandoned checkout flow, part 2: first split between can receive email or SMS and everyone else, E2 or SMS1, 12 hour wait, second split", wide: true },
        { src: "assets/case2-acr-flow-3.png", alt: "The abandoned checkout flow, part 3: second split between opened email and everyone else, E3A What roast, E3B What size, 13 hour wait, third split", wide: true },
      ],
      story: [
        {
          heading: "The problem",
          text: "A shopper starts checkout and leaves before the purchase this is the strongest buying signal a store can have. The usual fix is a little push and a discount in email, which helps shoppers decide. but the problem is they will find a pattern in the discount drops. We do not want that, so I prevented it with this ACR(abandoned cart recovery) build."
        },
        {
          heading: "What I built",
          bullets: [
            "A reason ladder: each message removes one reason not to buy, cheapest first. It starts with a reminder, then trust, then guidance, and money comes last.",
            "Splits on email opens, buying history and SMS consent, so non-openers stop after 25 hours and no one is messaged on a channel they cannot receive. Therfore we receive the least complaints possible.",
            "One discount email, designed for first-time buyers only, testing 10% off against free delivery at about the same cost. A/B tests to further increase revenue after deploying.",
            "8 A/B tests, each changing one thing, judged on placed order rate rather than clicks.",
            "This flow can be optimized using n8n if needed."
          ]
        },
        {
          heading: "Result",
          text: "Built on a practice store with sample brand data, and documented well enough to rebuild from scratch. No live results yet. Known gaps are listed openly in the documentation, not hidden because this gaps can be removed or reduced by using n8n."
        },
        {
          text: "Built with synthetic data and is documented enough to be rebuilt from scratch or to be maintained by someone who doesn't know anything about it."
        },
        {
          heading: "What skills it shows for me",
          bullets: [
            "Shows that I understand Klaviyo and Email marketing fully.",
            "Shows my strategical thinking. (Which is beneficial for real marketing)",
            "Shows I understand customer behavior.",
            "Shows my data based decision making."
          ]
        },
        {
          heading: "Documentation",
          text: `# Abandoned Checkout Recovery Flow for Lai's Coffee (Lai's Coffee is a synthetic data only)

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

Goodluck building!`
        }
      ]
    },

    {
      tag: "Klaviyo grouped flows",
      title: "Browse Abandonment Flow(Grouped)",
      slug: "browse-abandonment-flow-grouped",
      type: "flow",                       // flow | campaign | email-design
      date: "2026-09-15",
      blurb: "2 of the 3 flows in ESO",
      photo: "",
      meta: "Klaviyo · Viewed Product · 2 emails, 1 SMS · at most 2 per shopper · no discounts",
      video: "",
      poster: "",
      photos: [
        { src: "assets/case3-ba-flow-1.png", alt: "The browse abandonment flow, part 1: trigger on Viewed Product, 4 hour wait, E1 Still thinking about it, 20 hour wait, click check" },
        { src: "assets/case3-ba-flow-2.png", alt: "The browse abandonment flow, part 2: click check, SMS subscriber check, then SMS1 or the second email", wide: true },
      ],
      story: [
        {
          heading: "The problem",
          text: "A shopper looks at a product and leaves. Browsing is the weakest buying signal a store has, yet most browse flows treat it like a checkout: too many messages, a discount that teaches shoppers that looking earns a code, and paid texts sent to people who never showed real interest."
        },
        {
          heading: "What I built",
          bullets: [
            "A Viewed Product trigger for known shoppers, with a 4-hour wait so the reminder never feels like being watched.",
            "At most 2 messages: a quiet Email 1, then an SMS for subscribers or Email 2 for everyone else.",
            "A click check before the second message, so only interested shoppers get a second touch and fewer paid texts go out.",
            "No discount anywhere, Smart Sending on for every message, and 3 A/B tests that each change one thing."
          ]
        },
        {
          heading: "Result",
          text: "Built on a practice store with sample brand data. The flow, every email version and the SMS copy are documented well enough to rebuild from scratch. No live results yet, and none are promised."
        },
        {
          heading: "Documentation",
          text: `# Browse Abandonment Flow for Lai's Coffee

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

AND goodluck building!`
        }
      ]
    },

    {
      tag: "Klaviyo grouped flows",
      title: "Post-Purchase Flow(Grouped)",
      slug: "post-purchase-flow-grouped",
      type: "flow",                       // flow | campaign | email-design
      date: "2026-09-15",
      blurb: "3 of the 3 flows in ESO",
      photo: "",
      meta: "Klaviyo · Placed Order · email + SMS · 3 messages over 21 days · no discounts",
      video: "",
      poster: "",
      photos: [
        { src: "assets/case4-pp-flow-1.png", alt: "The post-purchase flow, part 1: trigger on Placed Order, first time buyer split, E1 Welcome or E1B Thanks for coming back", wide: true },
        { src: "assets/case4-pp-flow-2.png", alt: "The post-purchase flow, part 2: 7 day wait, E2 Getting the most out of your bag, 14 day wait, Can receive SMS split" },
        { src: "assets/case4-pp-flow-3.png", alt: "The post-purchase flow, part 3: 14 day wait, Can receive SMS split, SMS1 or E3 Something to put through it on Day 21", wide: true }
      ],
      story: [
        {
          heading: "The problem",
          text: "The sale gets treated as the end. A first-time customer who does not know the roast schedule reads a three-day gap as a problem, may never brew a good first cup, and runs out of coffee on the morning they buy somewhere else."
        },
        {
          heading: "What I built",
          bullets: [
            "Three messages over 21 days, in order: when the order will arrive, how to brew a good first cup, and a reminder to reorder before the bag runs out.",
            "A first-time vs repeat buyer split on Day 0, so repeat customers are thanked without being told the basics again.",
            "A Day 21 reorder reminder by SMS or email, designed to skip anyone who has already reordered.",
            "No discounts anywhere (points or a subscription reward loyalty instead), and 5 A/B tests, each changing one thing."
          ]
        },
        {
          heading: "Result",
          text: "Built on a practice store with sample brand data, and documented well enough to rebuild from scratch. No live results yet, and none are promised. Settings still to confirm, such as the wait lengths and the refund, cancel and Day 21 filters, are listed openly in the documentation."
        },
        {
          heading: "Documentation",
          text: `# Post-Purchase Flow for Lai's Coffee

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

Goodluck building!`
        }
      ]
    },

    {
      tag: "Klaviyo · Shopify · Lifecycle system",
      title: "TLRE: The Lifecycle Revenue Engine",
      slug: "tlre-lifecycle-revenue-engine",
      type: "flow",                       // flow | campaign | email-design
      date: "",                        // YYYY-MM-DD. "" = not stated, shows no date
      blurb: "Nine flows, one stage per customer",
      photo: "",
      meta: "Klaviyo + Shopify · 9 flows · 6 lifecycle segments · 2 signup forms · 4 A/B tests · email only · practice store",
      video: "",
      poster: "",
      photos: [],
      photosNote: "Too many flows inside to render, the visual is inside the documentation.",
      story: [
        {
          heading: "The problem",
          text: "Separate flows do not know about each other. One shopper can sit in the browse, cart and checkout flows at once, keep getting \"please buy\" emails after they have bought, and be offered a first-order code they have already used. Nothing ties the emails to where the customer is in their life with the brand."
        },
        {
          heading: "What I built",
          bullets: [
            "One lifecycle stage per customer, stored in a profile property. Six lifecycle segments and four helper segments decide who gets which email.",
            "Nine flows that hand off to each other: welcome, browse, cart, checkout, post-purchase, Run Notes, VIP, win-back and sunset. A higher-intent event stops the lower flow, and any order stops every \"please buy\" flow.",
            "Win-back timing set from the practice brand's buying cycle of about four months: At-Risk at 120 days with no order, Lapsed at 240.",
            "No discount codes except free US shipping on a first order. Returning customers get early access through Run Notes, and scarcity is always a real run number.",
            "Cart and checkout recovery that sells certainty about fit instead of a discount, and shows the shopper's usual size when it is known. 4 A/B tests, each changing one thing and judged by orders or joins, not opens.",
            "A reporting dashboard, plus a rebuild and maintenance guide that lists every form, property, segment, flow and setting with the reason behind each one."
          ]
        },
        {
          heading: "Result",
          text: "Built and tested on a Shopify development store with test data, for Off-Bolt, a practice brand. The documentation makes no revenue claims. Three things are still unverified and listed openly in section 14: whether the units-left metafield syncs to Klaviyo, whether the run number arrives on the Checkout Started event, and whether a backdated test order keeps its date."
        },
        {
          heading: "Documentation",
          text: `# TLRE: The Lifecycle Revenue Engine

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

That's all of it, goodluck building!`
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
      photo: "",
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
      date: "",                         // YYYY-MM-DD. Add the date to show it and to sort by it
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
          text: "Welcome Email to induce trust and warmth through brand story telling first and applied visual hierarchy to induce click rate therefore increases chances of order, if it's sent to a a big number of people it will surely increase placed order rate."
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
      date: "",                         // YYYY-MM-DD. Add the date to show it and to sort by it
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
          text: "This browse abandonment email is designed to make the viewer remember the product therefore increases the chances of them liking it more, even if it comes from a low intent cue which is browse abandonment, if it's sent to a big number of customer who already likes the product a little and/or the products that we sell, it will surely generate clicks therefore more chances of placed order, then after it revenue comes."
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
      date: "",                         // YYYY-MM-DD. Add the date to show it and to sort by it
      blurb: "A cart abandonment email that brings the shopper back to the cart",
      photo: "assets/email-cart-1.png",
      thumbnailAlt: "The top of the Off-Bolt cart abandonment email",
      meta: "Klaviyo · Cart abandonment email · Off-Bolt",
      video: "",
      poster: "",
      photos: [
        { src: "assets/email-cart-1.png", alt: "The Off-Bolt cart abandonment email, top half: You left this on your cart, the cart item, a Return To Cart button, a free returns code" },
        { src: "assets/email-cart-2.png", alt: "The Off-Bolt cart abandonment email, bottom half: a customer review with stars, three similar products with Order Now buttons, Continue order here and a second Return To Cart button" }
      ],
      story: [
        {
          heading: "About this email",
          text: "This is a cart abandonment email, it solves the problem of brands where the customer leaves right almost at the checkout. This email's purpose is to firstly make them remember the intent why they add the product to induce a feeling of wanting the product again so they order it, secondly it leverages visual hierarchy using dark background and light headers and body and font sizing to lead them to the return to cart button and Thirdly it shows them a big picture of the product at the start to make them see the product and again induce the remembrance of the reason why they add it to cart."
        },
        {
          text: "There are some very crucial blocks here, the free return block, what this does is it removes the risk of buying the product and not liking it because they can return it. Another one is the review block, in this part we will remove the doubt if the product is really good or not so once they see it they will think 'there's a good review on this product it must be really good\", one important thing it's better for this part to be dynamic so it changes based on cart and makes it more personalized but if not possible general store review is most recommended."
        },
        {
          text: "Finally, last part, we will show them similar products and another button directly to the cart. What this does is it gives them 2 choices, buy a similar product or buy the original cart product since they might just not realize they have already been convinced by the past block, here they can make the choice. In case they really don't like it they are one click away from the product that is similar to it and might fit their actual taste since they might not like a certain part of the original product like it has blue buttons which they don't like and the similar product has red which they really like, so basically we will maximize the intent's potential to become an order by filtering their thoughts down the full email using the most important blocks first."
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
    }

  ]
},


/* ================================================================
   3c. CONTACT PAGE — the "Contact me" tab.
       The "Contact me" button at the end of the home page stays.
       "email: true" prints the address from site.email.
   ================================================================ */

contactPage: {

  tabTitle: "Contact · Leien",
  tabNote: "Get in touch about your Klaviyo and Shopify flows.",

  eyebrow: "Contact",
  heading: "Where to reach me.",
  lede: "Send me your store and I'll give a free audit, I'll review your current workflows: what's missing, what could be improved, and where the money is leaking.",

  lines: [
    { label: "Email", email: true },
    { label: "Based in", value: "Philippines · works across time zones" },
    { label: "Replies in", value: "Under 24 hours, on working days" }
  ]
},


/* ================================================================
   4. THE CONTACT BOX — opens WHEN the button is clicked
      (the form on the Contact page uses the same words)
   ================================================================ */

contactBox: {
  heading: "Write to me",
  note: "Type your message, then send it from your own mail app.",
  toLabel: "To",
  subjectLabel: "Subject",
  subject: "Project enquiry",
  messageLabel: "Message",
  placeholder: "What are you selling, and where does the revenue leak?",
  send: "Open in my email app",
  cancel: "Cancel"
}


};
