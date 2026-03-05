const SITE = {
  founder: {
    name: "Harshal Manoharrao Gawande",
    role: "Founder, Equality Times",
    bio: "Equality Times is a public legal education initiative focused on constitutional law, equality, human rights, and legal awareness. It seeks to make law understandable for students, citizens, and communities through research-based explainers, videos, legal news, and public-interest analysis."
  },

  videos: [
    { id: "hpr_9JVPcds", title: "Why Did India Introduce New Lady Justice?" },
    { id: "bwz0qGBASAA", title: "Caste In Japan | Dark Side of Japan" },
    { id: "s9ixtr52ewA", title: "The Caste System's Dirty Secret" },
    { id: "Sj47ugvKkNI", title: "Who You Are? VEG or NON-VEG? | Religion and Diet" },
    { id: "x8qcpObNVnw", title: "Caste in Campus | Caste Discrimination" }
  ],

  news: [
    {
      title: "The Dalit: Born into a life of discrimination and stigma",
      source: "OHCHR",
      date: "2021",
      link: "https://www.ohchr.org/en/stories/2021/04/dalit-born-life-discrimination-and-stigma",
      note: "A human-rights perspective on caste-based stigma, exclusion, and the lived realities of Dalit communities."
    },
    {
      title: "Educated Dalits’—how these two words swung Bombay HC landmark verdict for 2 JNU scholars",
      source: "ThePrint",
      date: "2025",
      link: "https://theprint.in/ground-reports/supreme-court-intellectual-property-rights-sc-st-act-jnu-dalit-scholars-case/2489759/",
      note: "A story connecting caste, higher education, and the legal reasoning that shaped a landmark outcome."
    },
    {
      title: "From a small village to advanced research, Monika Gawande is now working on an Energy Efficiency project under the supervision of Prof. Roger Shen.",
      source: "Spectrum News 1",
      date: "2025",
      link: "https://spectrumnews1.com/wi/milwaukee/news/2025/09/17/uwm-data-center-research",
      note: "A story about academic research and scientific contribution emerging from a modest social background."
    },
    {
      title: "Suraj Yengde: ‘Inspired by Ambedkar, he gave his all to make the world a better place’",
      source: "Scroll",
      date: "2021",
      link: "https://scroll.in/article/1005170/suraj-yengde-inspired-by-ambedkar-he-gave-his-all-to-make-the-world-a-better-place",
      note: "A reflection on Ambedkarite thought, scholarship, and social justice leadership."
    },
    {
      title: "Somnath Suryavanshi case: Prakash Ambedkar cites ‘gaps’ in law, says only govt or court can fix it",
      source: "ThePrint",
      date: "2026",
      link: "https://theprint.in/india/somnath-suryavanshi-case-prakash-ambedkar-cites-gaps-in-law-says-only-govt-or-court-can-fix-it/2845521/",
      note: "A current legal-political story focused on gaps in the law and the need for institutional reform."
    },
    {
      title: "NITI Aayog calls for AI-led overhaul of India's tech services industry",
      source: "Business Standard",
      date: "2026",
      link: "https://www.business-standard.com/technology/tech-news/niti-aayog-calls-for-ai-led-overhaul-of-india-s-tech-services-industry-126021300444_1.html",
      note: "A policy development relevant to technology, AI governance, and the future of digital regulation."
    }
  ],

  papers: [
    {
      title: "Artificial Intelligence and Right to Equality",
      year: "2026",
      file: "papers/artificial-intelligence-and-right-to-equality.pdf",
      note: "A legal research paper examining artificial intelligence through the lens of equality, fairness, and constitutional rights."
      image: "assets/research-ai-equality.jpg",
    }
  ],

  contact: {
    email: "equalitytimesindia@gmail.com",
    youtube: "https://youtube.com/@equalitytimes?si=55bJiI7Zwe0l3qLC"
  }
};

function byId(id){ return document.getElementById(id); }
function youtubeThumb(id){ return `https://img.youtube.com/vi/${id}/hqdefault.jpg`; }
function yearFill(){
  const el = byId("yr");
  if(el) el.textContent = new Date().getFullYear();
}
function escapeHtml(str){
  return String(str ?? "").replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[m]));
}

function renderVideos(targetId, count = SITE.videos.length){
  const el = byId(targetId);
  if(!el) return;

  const items = SITE.videos.slice(0, count);
  el.innerHTML = items.map(v => {
    const thumb = v.id && v.id !== "REPLACE_VIDEO_ID_HERE"
      ? youtubeThumb(v.id)
      : "";
    const href = v.id && v.id !== "REPLACE_VIDEO_ID_HERE"
      ? `https://www.youtube.com/watch?v=${v.id}`
      : SITE.contact.youtube;

    return `
      <a class="video-card" href="${href}" target="_blank" rel="noopener">
        ${
          thumb
            ? `<img class="video-thumb" src="${thumb}" alt="${escapeHtml(v.title)} thumbnail">`
            : `<div class="video-thumb" style="display:flex;align-items:center;justify-content:center;background:linear-gradient(180deg,#fff4bf 0%,#fffdf5 100%);color:#7a6202;font-weight:900;padding:20px;text-align:center;">Add first video ID<br>in assets/site.js</div>`
        }
        <div class="video-body">
          <p class="video-title">${escapeHtml(v.title)}</p>
          <p class="video-sub">Open on YouTube</p>
        </div>
      </a>
    `;
  }).join("");
}

function renderNews(targetId, count = SITE.news.length){
  const el = byId(targetId);
  if(!el) return;

  const items = SITE.news.slice(0, count);
  el.innerHTML = items.map(n => `
    <article class="news-card">
      <div class="news-media">
        <div class="news-fallback">
          <div class="nf-source">${escapeHtml(n.source)}</div>
          <div class="nf-title">News & Story</div>
        </div>
      </div>
      <div class="news-body">
        <h3 class="news-title">${escapeHtml(n.title)}</h3>
        <div class="news-meta">${escapeHtml(n.source)} • ${escapeHtml(n.date)}</div>
        <p class="news-note">${escapeHtml(n.note)}</p>
        <div class="news-actions">
          <a class="btn btn-primary" href="${n.link}" target="_blank" rel="noopener">Read source</a>
        </div>
      </div>
    </article>
  `).join("");
}

function renderPapers(targetId, count = SITE.papers.length){
  const el = byId(targetId);
  if(!el) return;

  const items = SITE.papers.slice(0, count);
  el.innerHTML = items.map(p => `
    <article class="paper-card">
      <div class="news-media">
        <div class="news-fallback">
          <div class="nf-source">Research</div>
          <div class="nf-title">Paper</div>
        </div>
      </div>
      <div class="paper-body">
        <h3 class="paper-title">${escapeHtml(p.title)}</h3>
        <div class="paper-meta">${escapeHtml(p.year)}</div>
        <p class="paper-note">${escapeHtml(p.note)}</p>
        <div class="paper-actions">
          <a class="btn btn-primary" href="${p.file}" target="_blank" rel="noopener">Open PDF</a>
        </div>
      </div>
    </article>
  `).join("");
}

function renderFounderCompact(targetId){
  const el = byId(targetId);
  if(!el) return;
  el.innerHTML = `
    <div class="card">
      <h3>Founder</h3>
      <p><strong>${escapeHtml(SITE.founder.name)}</strong></p>
      <p>${escapeHtml(SITE.founder.role)}</p>
      <div style="height:12px"></div>
      <a class="btn btn-secondary" href="about.html">Read more</a>
    </div>
  `;
}

function fillFounderPage(){
  const name = byId("founderName");
  const role = byId("founderRole");
  const bio = byId("founderBio");
  if(name) name.textContent = SITE.founder.name;
  if(role) role.textContent = SITE.founder.role;
  if(bio) bio.textContent = SITE.founder.bio;
}

function fillContact(){
  const email = byId("contactEmail");
  const emailLink = byId("contactEmailLink");
  const ytLink = byId("ytLink");
  if(email) email.textContent = SITE.contact.email;
  if(emailLink) emailLink.href = `mailto:${SITE.contact.email}`;
  if(ytLink) ytLink.href = SITE.contact.youtube;
}

document.addEventListener("DOMContentLoaded", () => {
  yearFill();
  renderVideos("videosFeatured", 3);
  renderVideos("videosGrid");
  renderNews("newsFeatured", 3);
  renderNews("newsList");
  renderPapers("researchFeatured", 1);
  renderPapers("papersList");
  renderFounderCompact("founderCompact");
  fillFounderPage();
  fillContact();
});
