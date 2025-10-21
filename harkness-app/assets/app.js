
// Lightweight helpers
function $(sel, root=document){ return root.querySelector(sel); }
function $all(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }
function dl(filename, text){
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text], {type:'application/json'}));
  a.download = filename;
  a.click();
}
function niceCount(n){ return new Intl.NumberFormat().format(n); }

// Rubric (aligned to roles) — can be edited by teacher in-app and exported
const RUBRIC = {
  version: "1.0",
  updated: new Date().toISOString(),
  categories: [
    {
      id: "learn",
      label: "Learn (Foundations)",
      descriptors: [
        {id:"active-listening", label:"Active Listening", levels: ["Emerging","Developing","Proficient","Advanced"], examples:["Makes eye contact; notes peers' ideas","Builds from 1 peer idea","Weaves multiple peers' ideas","Integrates ideas and redirects discussion"]},
        {id:"evidence-awareness", label:"Evidence Awareness", levels:["Emerging","Developing","Proficient","Advanced"], examples:["Rarely references text","Occasionally references text","Regularly cites specific lines","Anchors claims with precise analysis"]},
        {id:"community-norms", label:"Community Norms", levels:["Emerging","Developing","Proficient","Advanced"], examples:["Needs reminders","Usually respectful","Models respect & turn-taking","Proactively safeguards others' airtime"]}
      ]
    },
    {
      id: "prepare",
      label: "Prepare (Before Discussion)",
      descriptors: [
        {id:"question-quality", label:"Question Quality", levels:["Emerging","Developing","Proficient","Advanced"], examples:["Questions are vague","Questions prompt recall","Questions prompt interpretation","Questions unlock debate & multiple lenses"]},
        {id:"evidence-ready", label:"Evidence Ready", levels:["Emerging","Developing","Proficient","Advanced"], examples:["Few notes","Basic annotations","Tagged quotes & page numbers","Organized quotes linked to themes"]}
      ]
    },
    {
      id: "reflect",
      label: "Reflect (After Discussion)",
      descriptors: [
        {id:"self-assessment", label:"Self-Assessment", levels:["Emerging","Developing","Proficient","Advanced"], examples:["General statements","Identifies 1 specific move","Cites evidence of impact","Targets growth with concrete plan"]},
        {id:"equity-awareness", label:"Equity Awareness", levels:["Emerging","Developing","Proficient","Advanced"], examples:["Limited awareness of airtime","Notices imbalance","Names patterns (roles/voices)","Proposes actions to balance participation"]}
      ]
    }
  ],
  // Role tags (for equity mapping)
  roles: [
    {id:"initiator", label:"Initiator", stems:["I've been thinking about..."], phase:["prepare","learn"]},
    {id:"connector", label:"Connector", stems:["This reminds me of..."], phase:["learn"]},
    {id:"questioner", label:"Questioner", stems:["What do you mean when...?"], phase:["learn","prepare"]},
    {id:"evidence-finder", label:"Evidence Finder", stems:["On page ... the author writes..."], phase:["learn"]},
    {id:"synthesizer", label:"Synthesizer", stems:["So what I'm hearing is..."], phase:["reflect","learn"]},
    {id:"devils-advocate", label:"Devil's Advocate", stems:["What if we considered..."], phase:["learn"]},
    {id:"bridge-builder", label:"Bridge Builder", stems:["[Name], what do you think?"], phase:["learn","reflect"]},
    {id:"close-reader", label:"Close Reader", stems:["The repetition suggests..."], phase:["learn"]}
  ]
};

// Expose for other pages
window.Harkness = {RUBRIC};
