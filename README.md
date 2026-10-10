# ROYAL OS — Autonomous AI Business Operations

> **ROYAL’S AI PRIVATE LIMITED by FUTURE MAKERS TECHNOLOGIES PRIVATE LIMITED**

ROYAL OS is a hackathon-ready command centre for human-governed AI business operations. It converts a customer enquiry into a qualified lead, a draft response, an operational next step, and—when policy requires it—a human approval request.

## What it demonstrates

- **AI Orchestrator** — routes an incoming enquiry through specialist agents.
- **Sales Intelligence Agent** — scores opportunity signals, labels priority, and assigns an owner.
- **Operations Agent** — proposes a next action and prepares the workflow.
- **Governance Layer** — requires explicit approval for high-value outbound activity.
- **Activity Dashboard** — visualises autonomous work, business value, and controls.
- **Safe demo fallback** — runs completely without an API key using deterministic, transparent intelligence.

## Run locally

```bash
npm install
npm run dev
```
LOGIN DETAILS: ARFAROOQ5@GMAIL PASSWORD: 123

Open [http://localhost:3000](http://localhost:3000). No secret or external service is required.

## Architecture

```
Customer enquiry → Orchestrator → Sales Intelligence → Operations Agent
                                      ↓                    ↓
                                lead score          next-step plan
                                      └──── Governance policy ────→ human approval, if needed
```

The endpoint at `app/api/orchestrate/route.ts` is deliberately deterministic for a reliable hackathon demo. An optional `OPENAI_API_KEY` placeholder is included in `.env.example` for a future model-backed adapter; the app does not read or expose it today.

## Demo flow

1. Paste a customer enquiry containing terms such as _pricing_, _integration_, _pilot_, or _enterprise_.
2. Select **Run autonomous workflow**.
3. Explain the lead score, recommended action, and agent trace.
4. When a score is high, use **Approve response** to show the human-in-the-loop safeguard.

## Stack

Next.js 14 · TypeScript · React · CSS

## Security and privacy

- No API keys are committed.
- `.env.local` is ignored by Git.
- The demo uses no persistent customer data or external requests.
- High-priority external communication is held for human approval.
- 
