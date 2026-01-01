// Simple demo data (static). Replace with real backend later.

const NC = {
  topics: [
    {
      id: "engineering",
      name: "Engineering",
      color: "cyan",
      summary: "Design, build, test, iterate — systems that work in reality.",
      subtopics: ["mechanical", "electrical", "civil", "systems", "robotics"]
    },
    {
      id: "medicine",
      name: "Medicine",
      color: "yellow",
      summary: "Clinical questions, research synthesis, treatment logic and ethics.",
      subtopics: ["oncology", "surgery", "public-health", "pharmacology", "diagnostics"]
    },
    {
      id: "technology",
      name: "Technology",
      color: "cyan",
      summary: "Software, AI, security, computing — applied problem-solving.",
      subtopics: ["ai", "security", "dev", "hardware", "data"]
    },
    {
      id: "business",
      name: "Business",
      color: "lime",
      summary: "Strategy, operations, markets, execution, and sustainable growth.",
      subtopics: ["strategy", "finance", "ops", "marketing", "product"]
    },
    {
      id: "theories",
      name: "Theories",
      color: "cyan",
      summary: "Models of reality: philosophy, cognition, science frameworks.",
      subtopics: ["cognition", "ethics", "physics", "social", "methodology"]
    },
    {
      id: "earth",
      name: "Earth",
      color: "yellow",
      summary: "Climate, oceans, ecology, geology, sustainability engineering.",
      subtopics: ["climate", "ocean", "ecology", "geology", "energy"]
    }
  ],

  discussions: [
    {
      id: "med-rare-cancer",
      topicId: "medicine",
      title: "Rare cancer protocol: balancing efficacy vs liver toxicity",
      status: "ongoing",
      complexity: "high",
      description: "Synthesizing evidence for a promising protocol while minimizing organ damage.",
      tags: ["oncology", "pharmacology", "ethics"],
      posts: [
        { user: "Dr. Smith", role: "Lead", score: 18, text: "We saw full remission in 1 case; toxicity is the blocker. Need mechanism-level adjustments." },
        { user: "Dr. Simpson", role: "Contributor", score: 12, text: "Consider prodrug modification + dosing schedule; I can share UK trial notes." },
        { user: "Translator (EN/FR)", role: "Support", score: 5, text: "I can translate docs for broader review (medical terminology specialization)." }
      ]
    },
    {
      id: "eng-water-purification",
      topicId: "engineering",
      title: "Low-cost purification module for remote communities",
      status: "new",
      complexity: "medium",
      description: "Designing a field-maintainable filter stack with measurable outputs.",
      tags: ["systems", "materials", "testing"],
      posts: [
        { user: "A. Patel", role: "Lead", score: 9, text: "We need a design that survives rough handling and needs no proprietary parts." }
      ]
    }
  ]
};

function $(sel, root=document){ return root.querySelector(sel); }
function $all(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }

function getTopic(topicId){ return NC.topics.find(t => t.id === topicId); }
function getDiscussion(discussionId){ return NC.discussions.find(d => d.id === discussionId); }

function badgeColor(name){
  if(name === "lime") return "var(--lime)";
  if(name === "yellow") return "var(--yellow)";
  return "var(--cyan)";
}

function iconBrain(){
  return `
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M8 21c-2.2 0-4-1.8-4-4v-1c0-1.1.4-2.1 1.2-2.8C4.5 12.7 4 11.9 4 11c0-1.7 1.3-3 3-3h1"
      stroke="rgba(234,242,255,.85)" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M16 21c2.2 0 4-1.8 4-4v-1c0-1.1-.4-2.1-1.2-2.8.7-.5 1.2-1.3 1.2-2.4 0-1.7-1.3-3-3-3h-1"
      stroke="rgba(234,242,255,.85)" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M9 4c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v16"
      stroke="rgba(57,213,255,.9)" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M7.5 7.5c.8-1.2 2.2-2 3.7-2H12m4.8 2c-.8-1.2-2.2-2-3.7-2H12"
      stroke="rgba(57,213,255,.65)" stroke-width="1.6" stroke-linecap="round"/>
  </svg>`;
}
