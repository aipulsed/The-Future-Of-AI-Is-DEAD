export interface BookPage {
  id: string;
  chapterNumber: number;
  chapterTitle: string;
  content: string;
}

export const BOOK_PAGES: BookPage[] = [
  {
    id: "preface",
    chapterNumber: 0,
    chapterTitle: "Preface: Why I Wrote This Book",
    content: `## Why I Wrote This Book

I watched a $4.2 million AI initiative collapse in eleven months.

The CEO believed every word of the pitch deck. The consultants spoke in confident acronyms—LLMs, RAG pipelines, autonomous agents, neural embeddings. The board nodded along, impressed by the jargon. Nobody asked the one question that mattered: **Does any of this actually work in production?**

It didn't.

By month three, the "intelligent document processor" was producing outputs so unreliable that staff were secretly double-checking everything by hand—defeating the entire purpose. By month seven, the "AI customer service agent" had been quietly disabled after it hallucinated refund policies that didn't exist and cost the company $340,000 in claims. By month eleven, the project was dead, the consultancy had been paid in full, and the CEO was explaining to investors why the "AI transformation" had generated zero measurable return.

I've seen this story repeat in manufacturing companies, law firms, healthcare networks, retail chains, and financial services. The names change. The damage doesn't.

> "The gap between what AI is sold as and what AI actually delivers has never been wider."

This book exists because someone needs to say what the industry refuses to say: **most AI projects fail, most AI promises are exaggerated, and most businesses would be better served by strong systems than by artificial intelligence.**

I'm not anti-AI. I run an AI technology company. I build AI systems every day. But I build them honestly—knowing their limits, knowing when not to use them, and knowing that the word "AI" has become a liability disguised as an asset.

If you're a CEO, founder, operations leader, or anyone responsible for technology decisions, this book is your reality check. I'll show you what AI actually does well, what it catastrophically fails at, and how the most successful businesses are quietly building hybrid systems that combine AI with deterministic, reliable workflows.

The future of AI—as it's been sold to you—is dead. What replaces it is something more powerful: **clarity**.

Let's begin.

*— The AiAscended Team*`,
  },
  {
    id: "ch1",
    chapterNumber: 1,
    chapterTitle: "Chapter 1: The Death of AI As You Know It",
    content: `## Chapter 1: The Death of AI As You Know It

### The Demo Gap

There is a moment in every AI sales presentation that feels like magic.

The consultant opens a laptop, pastes in a document, and the AI responds with a perfectly structured summary. It answers follow-up questions fluently. It generates a professional email in seconds. Everyone in the room leans forward. The VP of Operations whispers, *"We could automate the entire intake process."*

That moment—that demo—is real. The AI genuinely performed those tasks.

What happens next is where reality diverges from expectation.

**The demo was run on clean, structured, carefully selected input.** Your business runs on messy, inconsistent, contradictory data collected across fifteen years, three software platforms, two acquisitions, and a filing system invented by someone who left the company in 2019.

> "Every AI demo is run under laboratory conditions. Your business runs under field conditions."

The gap between these two environments is what I call the **Demo Gap**—and it is the single largest cause of failed AI implementations.

### What AI Actually Is

Strip away the marketing language and modern AI is a sophisticated pattern-matching system. Given enough examples of input-output pairs, it learns to predict what output is likely given a new input. That's it.

This is genuinely useful for specific tasks:
- Classifying images where you have thousands of labeled examples
- Predicting customer churn using historical transaction data
- Summarizing documents with consistent structure
- Generating first drafts from structured prompts

It is **not** useful for:
- Making judgment calls with incomplete information
- Understanding context the way a human expert does
- Operating reliably in domains with limited training data
- Tasks where being wrong 2% of the time is unacceptable

### The Artificial General Intelligence Myth

For the past decade, the tech industry has been promising Artificial General Intelligence—an AI that can think, reason, and act across any domain the way a human can. It doesn't exist.

What we have are **narrow AI systems**: extraordinarily capable within their training domain, brittle outside it. ChatGPT can write elegant prose about quantum physics and simultaneously confuse elementary arithmetic. It can pass the bar exam and fail to count the number of words in a sentence accurately.

This is not a flaw that will be patched in the next version. It is a fundamental characteristic of how these systems are built.

### The Three Questions Every CEO Must Ask

Before any AI conversation goes further in your organization, demand answers to these three questions:

1. **What specific, measurable outcome does this AI produce?**
2. **What is the failure rate, and what happens when it fails?**
3. **What human oversight is built into the system?**

If the vendor cannot answer all three with specifics, you are not buying AI. You are buying a demo.`,
  },
  {
    id: "ch2",
    chapterNumber: 2,
    chapterTitle: "Chapter 2: The $2 Trillion Lie",
    content: `## Chapter 2: The $2 Trillion Lie

### How the Numbers Are Manufactured

In 2023, major consulting firms published reports claiming AI would add trillions in value to the global economy annually. Every major analyst house produced numbers so large they were impossible to dispute—because they were impossible to verify.

These projections have one thing in common: **they are not based on what AI has already delivered. They are based on what AI might deliver under optimistic assumptions about adoption, capability, and implementation.**

The actual numbers tell a different story.

### The Real Cost of AI Implementation

Industry research consistently finds that **85% of AI projects fail to deliver the promised ROI.** Companies taking AI from pilot to production see costs increase by an average of **600%** between proof-of-concept and deployment.

Here's what the pitch deck never shows you:

**Data preparation: 60-80% of total project cost**
Before any AI model can be trained or deployed on your data, that data must be cleaned, labeled, structured, and validated. This is manual, expensive, time-consuming work. A company with fifteen years of customer records might spend six months and $800,000 just getting their data ready for an AI system that costs $200,000 to build.

**Infrastructure: Ongoing, scaling, unpredictable**
AI systems require significant compute resources. Cloud inference costs scale faster than the revenue they generate. Companies have received $400,000 cloud bills after launching AI features that users adopted faster than projected.

**Maintenance and drift: The hidden tax**
AI models degrade over time as the real world changes but their training data doesn't. This phenomenon—model drift—means your AI system that performed well in January may be producing significantly worse results by October, often without any obvious warning signs.

> "The true cost of AI is not the implementation. It's the maintenance of the implementation, forever."

### The Benchmark Illusion

AI companies publish benchmark scores. Top models score 90th percentile on professional certification tests. These numbers are technically accurate and practically misleading.

Benchmarks measure performance on specific, standardized tests. They do not measure performance on your specific data, reliability under distribution shift, or consistency across repeated queries.

### What Genuine AI ROI Looks Like

AI does generate real value—but it looks nothing like the projections. Real AI ROI is:

- **Narrow**: In one specific workflow, for one specific task
- **Incremental**: 20-30% improvement in throughput, not 10x transformation
- **Fragile**: Dependent on consistent input format and quality
- **Supervised**: Requiring human review of outputs in most critical applications

The companies genuinely benefiting from AI are not those who "transformed with AI." They are those who identified one specific, high-volume, low-stakes task and automated it carefully.`,
  },
  {
    id: "ch3",
    chapterNumber: 3,
    chapterTitle: "Chapter 3: The Buzzword Graveyard",
    content: `## Chapter 3: The Buzzword Graveyard

### Dead Promises, Buried Budgets

Every technological revolution produces its graveyard—a cemetery of promises so confidently made and so completely unfulfilled that future generations struggle to believe anyone took them seriously.

The AI revolution has the most crowded graveyard in technology history.

### The Autonomous Vehicle Fallacy

In 2015-2016, major tech and auto companies promised fully autonomous vehicles within two years. It is now 2026. Fully autonomous vehicles—Level 5, no human required, any conditions—do not exist in commercial deployment at scale.

**The lesson**: When AI companies project timelines, add at least one zero to the end.

### The Metaverse AI Disaster

Meta spent $40+ billion building a metaverse populated with AI assistants, digital humans, and virtual workplaces. Their AI companions were quietly discontinued after users found them uncanny, unreliable, and fundamentally unsettling.

The digital human technology promised to replace customer service, sales calls, and corporate training. Instead, it produced the "uncanny valley" response at industrial scale.

### The Autonomous Agent Promise

In 2023-2024, "autonomous AI agents" became the dominant buzzword. The demos were impressive. The production deployments were disasters. Agents that were supposed to handle customer service escalations made unauthorized commitments. Research agents that were supposed to gather competitive intelligence fabricated quotes and statistics that didn't exist.

> "The agents could plan. They could reason. What they couldn't do was reliably complete a ten-step task without hallucinating halfway through and confidently executing the wrong action."

### The Five Buzzwords That Should Trigger Caution

1. **"Autonomous"** — Nothing AI-driven is truly autonomous. There is always a failure mode requiring human intervention.
2. **"Intelligent"** — Pattern matching is not intelligence. Distinguish between the two.
3. **"Self-learning"** — Models do not learn in real-time. Retraining requires significant resources.
4. **"Human-level"** — Benchmark performance ≠ real-world performance.
5. **"End-to-end AI"** — End-to-end AI systems have end-to-end failure modes.

### What Survived the Graveyard

The technologies that have genuinely delivered:

- **Large Language Models for text generation**: Real value in specific creative and drafting applications
- **Computer vision for inspection tasks**: Defect detection in manufacturing, with human verification
- **Recommendation engines**: E-commerce and media personalization—narrow but effective
- **Fraud detection**: Statistical pattern matching that catches anomalies humans would miss

The pattern: every successful AI application is **narrow, bounded, and supervised**. The graveyard holds everything else.`,
  },
  {
    id: "ch4",
    chapterNumber: 4,
    chapterTitle: "Chapter 4: What AI Is Actually Good At",
    content: `## Chapter 4: What AI Is Actually Good At

### The Honest Capability List

After three chapters of necessary critical analysis, it's time to give AI its due.

Artificial intelligence is genuinely extraordinary at specific things. The problem is not that AI is useless—it's that the useful things AI does are far more bounded, specific, and supervised than the industry wants you to believe.

### Pattern Recognition at Scale

AI systems can analyze millions of data points to find patterns that humans would never detect.

**Medical imaging**: AI systems trained on millions of radiological scans can flag potential anomalies with accuracy rates that match specialist radiologists—but only for specific, well-defined conditions, with human verification. They are decision-support tools, not decision-making tools.

**Financial fraud detection**: The patterns that distinguish fraudulent transactions from legitimate ones are complex, multi-variable, and change constantly. AI systems that analyze transaction patterns have reduced fraud losses by 20-40% in institutions that implemented them carefully.

**Quality control in manufacturing**: Visual inspection AI can examine 10,000 components per hour and flag defects with greater consistency than tired human inspectors.

> "The key word in every successful AI deployment is 'flag.' AI flags. Humans decide."

### Augmenting Human Decision-Making

The highest-value AI applications are not replacements for human judgment—they are amplifiers.

A trained analyst can review 100 documents per day. With AI summarization and classification, that analyst can review the summaries of 1,000 documents per day, then apply their judgment to the 50 that matter. The AI doesn't make decisions. It makes humans dramatically more effective.

### Text Generation and Drafting

For specific, supervised text tasks, AI provides genuine productivity gains:

- **First drafts**: AI produces a serviceable first draft in 30 seconds. A human editor then refines it in 10 minutes. Total time: 12 minutes. Without AI: 45 minutes.
- **Translation**: Neural translation has dramatically improved quality—still requires human review for anything legally or technically sensitive.
- **Code assistance**: AI code tools help experienced developers move faster. They eliminate tedious parts, freeing developers for complex work.

### The 5% Reality

Here's the reality that this entire industry is built to obscure: **in most business operations, AI contributes at most 5% of the total value.**

The other 95% comes from clear, well-designed workflows; reliable systems and integrations; skilled people executing defined processes; quality data and measurement; and consistent operations management.

### The Five Rules for AI That Works

1. Define the task in one sentence. If you can't, the task is too complex.
2. Measure the failure rate before deployment.
3. Build human oversight into the process.
4. Start with high-volume, low-stakes tasks.
5. Never trust AI with irreversible actions—AI should recommend, flag, and draft, not delete, commit, or send without review.`,
  },
  {
    id: "ch5",
    chapterNumber: 5,
    chapterTitle: "Chapter 5: The Hidden Costs Nobody Talks About",
    content: `## Chapter 5: The Hidden Costs Nobody Talks About

### The AI Tax

There is a cost to every AI implementation that never appears in the vendor's proposal. I call it the **AI Tax**—the ongoing, invisible overhead that accumulates from the moment an AI system goes into production.

Understanding the AI Tax is the difference between a successful implementation and an expensive lesson.

### The Data Problem

**80% of all AI work is data work.** Before a model can be trained, before an API can be called, your data must be collected, cleaned, labeled, validated, and maintained.

A financial services company discovered this when they initiated an AI credit risk project scoped at $1.2 million over twelve months. Six months in, they had spent $1.4 million—entirely on data preparation—and hadn't written a single line of AI model code. The project was eventually cancelled.

> "Your data is not ready for AI. No one's data is ready for AI. Getting it ready costs more than the AI."

### The Hallucination Problem

Every large language model hallucinates. This is not a bug that will be fixed—it is a fundamental characteristic of probabilistic language models. When pattern-matching leads them into territory where the correct answer isn't clear, they generate confident-sounding plausible text that is factually wrong.

**Real hallucination costs:**
- A legal firm's AI research assistant cited six non-existent court cases in a filing. The firm faced sanctions and client claims.
- A healthcare AI summarized patient records and invented symptoms that weren't present, affecting treatment decisions.
- A financial AI generated a market analysis citing companies that didn't exist.

For any business process where factual accuracy is material, hallucination is not an acceptable failure mode.

### The Compute Cost Explosion

One SaaS company launched an AI writing assistant, projected 10,000 monthly active users, and priced accordingly. They got 80,000 users in month one. Their compute costs exceeded their monthly revenue. They had to throttle the feature, infuriating early adopters.

### The Maintenance Treadmill

AI systems require continuous maintenance: model updates, drift monitoring, prompt engineering maintenance as your business processes change, and compliance updates as AI regulation evolves.

### The True Cost Formula

**Total AI Cost = (Development) + (Data Preparation × 3) + (Infrastructure × Lifetime) + (Maintenance × Lifetime) + (Oversight Labor)**

Apply this formula to any AI proposal. The number you get will be significantly higher than the vendor quoted. That gap is the AI Tax.`,
  },
  {
    id: "ch6",
    chapterNumber: 6,
    chapterTitle: "Chapter 6: The Hybrid Intelligence Model",
    content: `## Chapter 6: The Hybrid Intelligence Model

### The AiAscended Framework

After years of implementing AI systems—successful ones and failed ones—we developed a framework that consistently produces better outcomes than "pure AI" approaches. We call it the **Hybrid Intelligence Model**, and it is the foundation of everything AiAscended builds.

The core insight is simple: **the best systems combine AI's pattern recognition with deterministic logic's reliability.**

### What Deterministic Systems Do

A deterministic system does exactly what it is programmed to do, every time, given the same input. If a customer order is over $500, apply the discount. If an invoice is 30 days overdue, trigger the payment reminder. If a form field is empty, reject the submission.

These systems are predictable, auditable, reliable, and cheap to maintain. For the vast majority of business operations, deterministic systems are superior to AI.

> "95% of what businesses call 'AI' could be better served by well-designed deterministic systems. The other 5% is where AI genuinely adds value."

### The Hybrid Model in Practice

**Customer Service Workflow — Hybrid Intelligence approach:**
1. **Deterministic triage** classifies incoming queries by type using keyword matching and business rules
2. **AI language processing** interprets intent for ambiguous queries, with confidence scoring
3. **Deterministic routing** sends high-confidence classifications to automated responses; low-confidence to human agents
4. **Human agents** handle exceptions, escalations, and novel situations
5. **AI assistance** drafts response suggestions for agents, who review and send
6. **Deterministic logging** records every interaction for compliance and improvement

The result: 60% of queries handled automatically, 40% by humans—but the humans are handling them faster because of AI assistance. No hallucinated policies. Full auditability.

### The AscendStack Philosophy

At AscendStack Systems, we build on three principles:

**1. Deterministic core, AI augmentation**
Every critical business process runs on deterministic logic. AI augments specific sub-tasks where pattern recognition adds value. Never the reverse.

**2. Explicit failure modes**
Before deploying any AI component, define precisely what happens when it fails. Build the human fallback before the AI enhancement.

**3. Measurement before optimization**
Measure baseline performance before AI implementation. Measure after. If the numbers don't justify the cost, remove the AI component.

### The Five Layers of a Hybrid Intelligent System

1. **Data Layer**: Clean, structured, reliable data pipelines
2. **Logic Layer**: Deterministic business rules and workflow engines
3. **AI Layer**: Pattern recognition for specific sub-tasks
4. **Oversight Layer**: Human review, exception handling, decision escalation
5. **Measurement Layer**: Continuous monitoring of all layers

This is the architecture that delivers consistent, auditable, scalable business automation—without the fragility of pure AI approaches.`,
  },
  {
    id: "ch7",
    chapterNumber: 7,
    chapterTitle: "Chapter 7: Building Systems That Actually Work",
    content: `## Chapter 7: Building Systems That Actually Work

### The 5-Question Framework

Every AI decision in your business should pass five questions before approval.

**Question 1: What specific task is the AI performing?**
Describe the task in one sentence. *Acceptable*: "Classify incoming support tickets into one of twelve predefined categories." *Not acceptable*: "Use AI to transform our customer service operation."

**Question 2: What is the baseline performance without AI?**
Document: how long the current task takes, how many people it requires, what the error rate is, what it costs per unit. You cannot measure improvement without a baseline.

**Question 3: What is the AI's measurable failure rate?**
Every AI system fails. What percentage of outputs require human correction? What types of failures are most common?

> "If a vendor tells you their AI is 99% accurate, ask what happens in the 1% of cases. Those 1% cases will determine whether the implementation succeeds or fails."

**Question 4: What human oversight is built into the system?**
For any task with consequential outputs, humans must be in the loop. The oversight structure must be designed before deployment, not added as an afterthought.

**Question 5: What is the total cost of ownership over three years?**
Include: development, data preparation, infrastructure, maintenance, oversight labor, retraining, and compliance. If the ROI isn't clear within three years, the project should not proceed.

### The 7 Vendor Questions

1. Can I talk to three reference customers who deployed this in production? (Not pilot customers—production.)
2. What is the average time from contract to production deployment?
3. What does your contract say about performance guarantees?
4. Who owns the data we give you, and how is it used?
5. What happens to our integration if you shut down or pivot?
6. What does your SLA say about uptime and response time?
7. What is the model update policy, and who pays for re-integration costs?

### The 90-Day Implementation Roadmap

**Days 1-30: Foundation**
Complete data audit, define measurement framework, document baseline, design human oversight process.

**Days 31-60: Controlled deployment**
Deploy to 5-10% of traffic/volume. Monitor closely. Document all failure modes observed. Iterate on oversight process.

**Days 61-90: Evaluation**
Compare measured performance against baseline. Calculate actual ROI. Make go/no-go decision for full deployment.

This framework has saved our clients millions in failed AI deployments. The key: **measure first, deploy second, scale third**.`,
  },
  {
    id: "ch8",
    chapterNumber: 8,
    chapterTitle: "Chapter 8: The CEO's AI Survival Guide",
    content: `## Chapter 8: The CEO's AI Survival Guide

### Decisions, Authority, and Governance

You are not expected to be a machine learning engineer. You are expected to make decisions about AI that are sound, responsible, and commercially defensible.

### The Three Failure Modes for AI Leadership

**Failure Mode 1: The Believer**
The CEO who believes every AI pitch and approves every initiative without scrutiny. They sign contracts based on demo performance and discover twelve months later that the numbers never materialized.

*Symptom*: "We're going all-in on AI."
*Treatment*: Apply the 5-Question Framework from Chapter 7 to every proposal.

**Failure Mode 2: The Denier**
The CEO who dismisses all AI as hype and refuses to engage. They watch competitors gain genuine efficiency advantages in specific areas and fall behind.

*Symptom*: "AI is just buzzwords. We're not doing any of it."
*Treatment*: Focus on Chapter 4. Identify one specific, bounded use case and run a properly measured pilot.

**Failure Mode 3: The Delegator**
The CEO who hands AI decisions entirely to IT or a consultant and assumes responsibility has been transferred. When the project fails, they're surprised.

*Symptom*: "I let the tech team handle all that."
*Treatment*: AI decisions that affect operations, risk, compliance, or customer experience require CEO-level oversight.

> "You don't need to understand how the engine works. You need to understand what happens when it fails."

### The AI Governance Checklist

**Strategic**: Does this produce a specific measurable outcome? How does it align with our three-year strategy?

**Financial**: What is the total cost of ownership over 36 months? What is the exit cost if we need to remove this system?

**Risk**: What is the worst-case failure scenario? Who is liable if the AI produces incorrect outputs that cause harm? Are we compliant with applicable AI regulations?

**Operational**: What human oversight is built in from day one? Who owns this system, and what happens if they leave?

### The 90-Day AI Audit

Assign a trusted internal auditor to evaluate every active AI initiative against six criteria:

1. Does it have a measured baseline and measurable outcome?
2. Is the failure rate known and documented?
3. Is there human oversight for consequential outputs?
4. Is the ROI positive over the current cost basis?
5. Are the compliance and liability questions resolved?
6. Does the team running it understand it well enough to explain it in plain language?

Any initiative that fails more than two of these criteria should be placed on a 90-day remediation plan. Any that fail more than four should be evaluated for discontinuation.

The companies that win with AI will be those that deploy AI well in the places it genuinely helps, while building the human systems and workflows that create durable competitive advantage.`,
  },
  {
    id: "ch9",
    chapterNumber: 9,
    chapterTitle: "Chapter 9: The Future That Actually Exists",
    content: `## Chapter 9: The Future That Actually Exists

### Beyond the Hype Cycle

Every transformative technology passes through the Gartner Hype Cycle: from the Technology Trigger through the Peak of Inflated Expectations, down into the Trough of Disillusionment, and finally up the Slope of Enlightenment to the Plateau of Productivity.

AI is navigating the Trough of Disillusionment right now. The inflated expectations of 2022-2024 are colliding with the realities of implementation, cost, and capability limits. This is not the death of AI. This is the birth of mature AI.

### What AI Will Actually Deliver

**Near-term (2-3 years): Narrow automation at scale**
AI will become genuinely reliable for specific, bounded automation tasks: document processing, code assistance, content generation with human review, specialized domain classification. The key word: narrow.

**Medium-term (3-7 years): Collaborative intelligence**
Human-AI collaboration systems will mature. Humans and AI systems will develop genuine division of labor—AI handling pattern recognition and information retrieval, humans providing judgment, context, and ethical oversight.

**Long-term (7-10 years): Infrastructure invisibility**
AI will become infrastructure—embedded in workflows so naturally that we stop calling it "AI." We don't say we're "using electricity" when we turn on a light. Future AI will be similar: invisible, reliable, specialized, assumed.

> "The future of AI is not robots replacing humans. It is AI becoming as unremarkable as a database—useful infrastructure that runs in the background."

### The Human+AI Advantage

The organizations that will dominate the next decade are not those that fully automate with AI—they are those that build the most effective human+AI teams.

Consider chess after Deep Blue defeated Kasparov in 1997. Many predicted human chess was dead. Instead, "freestyle chess" emerged—humans and AI working together. The best freestyle chess players outperform both top humans and top AI systems working alone. The combination is greater than either part.

The same pattern will emerge in business.

### The Three Skills That Will Matter Most

**1. Systems thinking**: The ability to design and manage complex workflows that include both human and AI components.

**2. Prompt intelligence**: Understanding what AI can and cannot do, how to structure tasks for AI assistance, and how to verify AI outputs.

**3. Judgment**: The uniquely human ability to navigate ambiguous situations, apply ethical reasoning, and make decisions that require understanding the world rather than predicting patterns in it.

The death of AI as it's been sold to you is the beginning of AI as it actually works.`,
  },
  {
    id: "ch10",
    chapterNumber: 10,
    chapterTitle: "Chapter 10: Taking Action",
    content: `## Chapter 10: Taking Action

### Your Next 30 Days

You've read the book. You understand the gap between AI hype and AI reality. Now what?

### Week 1: The Audit

**Day 1-3**: List every AI tool, system, or initiative currently active in your organization. Include everything: the AI chatbot on your website, AI features in your CRM, the AI writing tool your marketing team uses.

**Day 4-5**: Apply the 5-question framework from Chapter 7 to each item. Score each one 1-5 on: specificity of task, measured ROI, oversight quality, and cost clarity.

**Day 6-7**: Identify your bottom three and top three. The bottom three need remediation plans or removal. The top three are your models for future AI adoption.

### Week 2: The Opportunity Identification

Map your highest-volume, most repetitive business processes. Identify which meet all five criteria for AI suitability: high volume, pattern-based, measurable quality, recoverable failure modes, structured inputs.

Select one process that scores highest on all five criteria. This is your next AI pilot candidate.

### Week 3: The Business Case

Build a rigorous business case using the Total Cost of Ownership formula from Chapter 5. Define success metrics and the measurement framework before beginning any implementation.

### Week 4: The Foundation

Evaluate your data quality. Is your data clean, structured, and accessible? If not, data preparation is your first project—before any AI.

Design the human oversight process. Make a decision: proceed with a properly structured 90-day pilot, or identify that the business case doesn't support it. Both outcomes are valuable.

### The AiAscended Offer

If you want help applying these frameworks:

**AI Reality Audit**: We evaluate your current AI initiatives, identify what's working and what's failing, and produce a detailed remediation roadmap.

**Hybrid Intelligence Design**: We design the optimal human+AI system architecture for a specific business process.

**AscendStack Implementation**: Full implementation of a Hybrid Intelligence system. Includes development, integration, training, and 90-day monitoring.

### Final Words

The future of AI is not what was sold to you.

It's better.

Not because AI will achieve everything the hype promised, but because the organizations that understand AI's real capabilities and real limits will build genuinely superior systems—systems that use AI where it helps, humans where it matters, and measurement everywhere.

The future belongs to those who think clearly about technology rather than chase the next wave of promises.

**Now go build something real.**

*— AiAscended Technologies | aiascended.com*`,
  },
];

export const CHAPTERS = Array.from(
  new Map(
    BOOK_PAGES.map((p) => [p.chapterNumber, { number: p.chapterNumber, title: p.chapterTitle }])
  ).values()
).sort((a, b) => a.number - b.number);

export const TOTAL_PAGES = BOOK_PAGES.length;
