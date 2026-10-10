"use client";
import { FormEvent, useState } from "react";

type Result = { mode: string; lead: { score: number; priority: string; category: string; owner: string }; draft: string; recommendation: string; requiredApproval: boolean; activity: string[] };
const initialActivity = [
  { agent: "Sales Intelligence", event: "Qualified Acme Retail opportunity", time: "2m ago", tone: "gold" },
  { agent: "Operations", event: "Prepared onboarding checklist", time: "12m ago", tone: "blue" },
  { agent: "Governance", event: "Approved standard response", time: "28m ago", tone: "green" }
];

export default function Home() {
  const [enquiry, setEnquiry] = useState("We are a 200-person retailer evaluating an AI operations pilot. Can we discuss pricing, integrations and a demo next week?");
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [approved, setApproved] = useState(false);
  async function run(event: FormEvent) { event.preventDefault(); setLoading(true); setApproved(false); const response = await fetch("/api/orchestrate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ enquiry }) }); setResult(await response.json()); setLoading(false); }
  return <main>
    <nav><div className="brand"><span className="crown">♛</span><span>ROYAL <b>OS</b></span></div><div className="nav-right"><span className="live"><i /> SYSTEMS ACTIVE</span><button className="avatar">FM</button></div></nav>
    <section className="hero"><p className="eyebrow">ROYAL’S AI PRIVATE LIMITED</p><h1>Run your business <em>autonomously.</em></h1><p className="sub">AI agents that qualify revenue, coordinate operations, and keep people in control.</p><div className="pill">by FUTURE MAKERS TECHNOLOGIES PRIVATE LIMITED</div></section>
    <section className="metrics"><Metric value="₹18.4L" label="Pipeline influenced" change="+24%"/><Metric value="68" label="Tasks automated" change="+18 today"/><Metric value="4.8h" label="Time reclaimed" change="per teammate"/><Metric value="97%" label="Policy compliant" change="governed"/></section>
    <section className="grid">
      <div className="card orchestrator"><div className="card-title"><div><p className="eyebrow">MISSION CONTROL</p><h2>AI Orchestrator</h2></div><span className="badge">SAFE DEMO</span></div><p>Turn a customer enquiry into a governed, action-ready workflow.</p><form onSubmit={run}><label>Incoming customer enquiry</label><textarea value={enquiry} onChange={e => setEnquiry(e.target.value)} rows={5}/><button className="primary" disabled={loading}>{loading ? "Orchestrating…" : "Run autonomous workflow →"}</button></form></div>
      <div className="card activity"><div className="card-title"><div><p className="eyebrow">LIVE LOG</p><h2>Agent activity</h2></div><span className="dot" /></div>{initialActivity.map(item => <div className="event" key={item.event}><span className={`event-icon ${item.tone}`}>✦</span><div><b>{item.agent}</b><p>{item.event}</p></div><time>{item.time}</time></div>)}</div>
    </section>
    {result && <section className="result"><div className="result-head"><div><p className="eyebrow">WORKFLOW OUTPUT</p><h2>Decision packet</h2></div><span className={`priority ${result.lead.priority.toLowerCase()}`}>{result.lead.priority} priority</span></div><div className="score-row"><div className="score"><strong>{result.lead.score}</strong><span>lead score</span></div><div><b>{result.lead.category}</b><p>Route to {result.lead.owner}</p></div><div><b>Next action</b><p>{result.recommendation}</p></div></div><div className="draft"><label>Suggested customer response</label><p>{result.draft}</p></div>{result.requiredApproval && <div className="approval"><div><b>Human approval required</b><p>High-value outbound communication is paused by policy.</p></div><button onClick={() => setApproved(true)} disabled={approved}>{approved ? "✓ Approved for send" : "Approve response"}</button></div>}<div className="agent-trace">{result.activity.map(a => <span key={a}>✓ {a}</span>)}</div></section>}
    <footer>ROYAL OS · Built for the hackathon · Human-governed autonomous operations</footer>
  </main>;
}
function Metric({ value, label, change }: { value: string; label: string; change: string }) { return <div className="metric"><strong>{value}</strong><span>{label}</span><small>{change} ↗</small></div>; }
