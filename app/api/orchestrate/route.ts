import { NextResponse } from "next/server";

type Request = { enquiry?: string };

const signals = ["enterprise", "pricing", "integration", "urgent", "demo", "pilot"];

export async function POST(request: globalThis.Request) {
  const { enquiry = "" } = (await request.json()) as Request;
  const text = enquiry.trim();
  if (!text) return NextResponse.json({ error: "Please add a customer enquiry." }, { status: 400 });

  const lower = text.toLowerCase();
  const matches = signals.filter((signal) => lower.includes(signal));
  const score = Math.min(96, 42 + matches.length * 12 + (lower.includes("budget") ? 10 : 0));
  const priority = score >= 75 ? "High" : score >= 55 ? "Medium" : "Standard";
  const category = lower.includes("pricing") ? "Commercial" : lower.includes("support") ? "Support" : lower.includes("integration") ? "Technical" : "New business";

  return NextResponse.json({
    mode: "safe-demo",
    lead: { score, priority, category, owner: score >= 75 ? "Aarav · Sales" : "Maya · Growth" },
    draft: `Thanks for reaching out to ROYAL’S AI PRIVATE LIMITED. We understand you’re exploring ${category.toLowerCase()} options. Our team can tailor an autonomous operations workflow around your goals. Would a 20-minute discovery session this week work for you?`,
    recommendation: score >= 75 ? "Request executive approval before sharing a tailored proposal." : "Send the draft response and schedule a discovery call.",
    requiredApproval: score >= 75,
    activity: ["Sales Intelligence scored the opportunity", "Operations Agent prepared the next-step workflow", "Governance layer checked approval policy"]
  });
}
