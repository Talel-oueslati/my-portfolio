// ---------- Content (edit here) ----------
const PHOTO="assets/images/profile.jpg";
const ME={name:'Talel Oueslati',title:'Full-Stack Developer',email:'taleloueslati3@gmail.com',github:'https://github.com/Talel-oueslati',linkedin:'https://www.linkedin.com/in/talel-oueslati-3a4b5425a/',loc:'El Mourouj, Tunisia'};
const PROJECTS=[
{t:'Multi-Tenant ERP/CRM Platform (PFE Project)',d:'Enterprise-grade ERP/CRM platform with multi-tenancy, RBAC, and a real-time API monitoring dashboard',tech:['NestJS','Next.js','PostgreSQL','Supabase','JWT','RBAC'],c:'#3b5bdb',videos:[],
doc:`### Implemented Solution
A multi-tenant ERP/CRM platform that lets enterprises run their whole workflow in one secure environment, with strict tenant isolation. Modules: HR, Inventory, Procurement, CRM, Sales, Delivery, Invoicing and Accounting.

The backend uses **NestJS** and **PostgreSQL (Supabase)**; the frontend uses **Next.js**. Security: **JWT**, **2FA** and **RBAC**.

#### Multi-Tenancy
Each tenant has an isolated data space. Tenant context is resolved per request and all queries are scoped automatically to prevent cross-tenant leakage.

#### Authentication & Security
- JWT-based session management
- Two-Factor Authentication (2FA)
- Role-Based Access Control (RBAC)
- Audit logs, automated backups and security policies

#### Real-Time API Monitoring
- API traffic and request patterns
- Rate limiting and abuse detection
- Performance metrics and latency
- Real-time alerts on anomalies

### Technical Architecture
| Layer | Technology | Role |
| Frontend | Next.js | Modern SSR/SSG interface |
| Backend | NestJS | Modular REST API and business logic |
| Database | PostgreSQL (Supabase) | Multi-tenant data storage |
| Auth | JWT + 2FA | Secure authentication |
| Access Control | RBAC | Roles and permissions |
| Monitoring | Custom dashboard | API metrics, alerts, rate limiting |

### Achieved Results
- Fully functional multi-tenant ERP/CRM platform
- Secure authentication with 2FA and RBAC
- Complete coverage of core enterprise modules
- Real-time observability of API performance
- Strong data isolation and audit trails

### Confidentiality
Built during my end-of-studies internship at Codes Pixels. Source code and internal data are confidential.`},
{t:'Full-stack web app for JVM static analysis and real-time monitoring',d:'JVM metadata extraction and real-time monitoring dashboards (CPU, memory, GC)',tech:['Spring Boot','Oracle','Thymeleaf'],c:'#8b5cf6',
videos:[{label:'Real-time JVM monitoring',src:'jmv runing demo.mp4'},{label:'Static analysis',src:'demo application-static prj.mp4'}],
doc:`Private web application.
Technologies used: Spring Boot, Thymeleaf, Oracle.
Full documentation and source code are restricted for privacy reasons.`},
{t:'Mobile passport scanning with OCR (Internship Project)',d:'Hybrid mobile application for passport scanning and OCR integration',tech:['Spring Boot','Ionic','Oracle','Angular'],c:'#a855f7',
videos:[{label:'Demo client features',src:'media1.mp4'},{label:'Demo admin dashboard',src:'media2.mp4'}],
doc:`### Implemented Solution
A hybrid mobile app that lets users scan their passport with a smartphone and automatically extract personal data from the Machine Readable Zone (MRZ). Built with **Ionic** and **Angular**.

#### Passport Image Capture
The first passport page is captured with Capacitor Camera and stored temporarily on the client for OCR processing.

#### OCR and Text Extraction
An OCR engine in the front-end converts the image to raw text, the base of the MRZ pipeline.

#### MRZ Processing
A TypeScript function extracts the last two lines (the MRZ), parses them using the '<' separator and interprets fields per ICAO standards.
- First and last name
- Passport number
- Nationality
- Date of birth
- Gender
- Expiration date

The values fill a structured form, ready to send to the backend.

#### Backend Communication
RESTful services built with **Spring Boot**: one to transmit and persist identity data, one to upload and store the passport image.

### Technical Architecture
| Layer | Technology | Role |
| Mobile app | Ionic + Angular | UI and native features |
| OCR & MRZ | Angular / TypeScript | Text extraction and MRZ parsing |
| Backend | Spring Boot | REST API and business logic |
| Database | Oracle | Client data storage |
| Communication | REST API | Mobile app to backend |

### Achieved Results
- Significant reduction in manual data entry
- Improved accuracy and reliability of collected data
- Increased user autonomy
- Integration with an existing information system
- No dependency on physical passport scanners

### Confidentiality
Carried out in a professional context. Advanced details, source code and real data cannot be disclosed.`},
{t:'Automated Resume Screening System',d:'CV analysis and candidate shortlisting with intelligent parsing and scoring',tech:['NestJS','Angular','TypeScript'],c:'#14b8a6',
videos:[{label:'Full demo',src:'Automated-Resume-Screening-Candidate-Shortlisting-Web-App demo.mp4'}],
doc:`### Implemented Solution
An AI-assisted resume screening and shortlisting system that evaluates resumes against job descriptions. Built with **NestJS** and **TypeORM**; **Hugging Face** models compute similarity scores between resumes and job requirements.

#### Resume Upload and Parsing
Candidates upload CVs as PDFs through the web interface; text is extracted for analysis.

#### AI Scoring
The extracted text is compared with the job description by a Hugging Face model, producing a numeric relevance score.

#### Candidate Shortlisting
Candidates above a threshold are highlighted. HR users review applications and accept or reject them.

#### Notifications
After validation, the system can email the candidate the outcome.

### Technical Architecture
| Layer | Technology | Role |
| Backend | NestJS + TypeORM | Business logic and API |
| AI Scoring | Hugging Face API | Compares CVs to job descriptions |
| Parsing | pdf-parse | Extracts text from PDFs |
| Notifications | MailService | Emails candidates |
| Database | PostgreSQL | Candidates, offers, scores, status |
| Frontend | Angular | Candidate submission and HR dashboard |

### Workflow
1. Candidate submits CV.
2. System parses the PDF and extracts text.
3. AI model scores it against the job description.
4. Shortlist is created for HR review.
5. HR validates or rejects candidates.
6. Candidate receives a notification email.

### Outcomes
- Faster, automated resume screening
- Candidates scored by job relevance
- Simple HR dashboard to review and validate applications
- Academic-level demonstration of an AI-assisted recruitment workflow`},
{t:'HR & Leave Management System',d:'Employee management with authentication, notifications, and approval workflows',tech:['NestJS','Angular','PostgreSQL'],c:'#10b981',
videos:[{label:'Employee leave request & timesheet submission',src:'employee1.mp4'},{label:'HR validation of employee requests',src:'rh.mp4'},{label:'View HR decision notifications',src:'employee2.mp4'}],
doc:`### Implemented Solution
A web-based workforce management system for leave, timesheets, performance evaluations and HR operations. Built with **NestJS** and **Angular**, with role-based access for employees and HR administrators.

#### Authentication and Roles
JWT authentication. Roles (Employee, HR, Admin) define permissions and accessible features.

#### Leave Management
Employees submit leave requests and see their balance. HR reviews, approves or rejects requests from an admin dashboard.

#### Timesheet Management
Employees log daily hours; HR validates submitted timesheets.

#### Performance Evaluations
HR creates and manages evaluations; employees consult their results.

#### Notifications
Alerts for leave decisions, timesheet validation and evaluation updates.

### Technical Architecture
| Layer | Technology | Role |
| Frontend | Angular | UI for employees and HR |
| Backend | NestJS | Business logic and REST APIs |
| Authentication | Passport.js + JWT | Secure access and roles |
| Database | MySQL + TypeORM | Data persistence |
| File Upload | Multer | Leave-related documents |
| Notifications | Cron / background jobs | Alerts and reminders |

### Workflow
1. User logs in.
2. Employee submits leave requests or timesheets.
3. HR reviews and validates.
4. System updates the request status.
5. Notifications are sent.
6. HR consults reports and statistics.

### Outcomes
- Centralized employee and HR management
- Efficient leave and timesheet processing
- Secure role-based access
- Better communication through notifications`},
{t:'Hotel Reservation Management System',d:'Complete hotel booking and management platform with real-time availability tracking',tech:['Spring Boot','Thymeleaf','Oracle'],c:'#f59e0b',
videos:[{label:'Demo',src:'hotel-demo.mp4'}],
doc:`A hotel management platform that streamlines booking operations and guest experience. It provides real-time room availability tracking, reservation management and booking confirmations. Key features: dynamic pricing, room type management, guest profile handling and detailed reporting.

Built with Spring Boot for the backend services, Thymeleaf for server-side rendered views and an Oracle database for reliable transaction management.`},
{t:'Movie Playlist & Recommendation App',d:'Personal movie tracker with smart recommendations powered by the TMDB API',tech:['Ionic','React','Firebase','TMDB API'],c:'#ec4899',
videos:[{label:'Demo',src:'movzie-app-demo.mp4'}],
doc:`A cross-platform movie app built with Ionic, React and Firebase, integrating The Movie Database (TMDB) API.
- User authentication
- Playlist creation
- Movie recommendations
- Movie data fetched from TMDB`}
];
const SKILLS={Frontend:[['Angular','Ng','#dd0031'],['React','Re','#0891b2'],['Next.js','Nx','#444'],['HTML & CSS','H5','#e34f26'],['JS & TypeScript','TS','#3178c6']],
Backend:[['Spring Boot','Sb','#16a34a'],['NestJS','Ne','#e0234e'],['Java','Jv','#e76f00'],['REST APIs','API','#7c3aed']],
Databases:[['PostgreSQL','Pg','#336791'],['MySQL','My','#00758f'],['Oracle','Or','#c74634']],
'Tools & Cloud':[['Git & GitHub','Gt','#f05032'],['Docker','Dk','#2496ed'],['AWS (EC2)','AWS','#ff9900'],['Ionic','Io','#3880ff']]};

// ---------- State & prefs ----------
const $=(s,r=document)=>r.querySelector(s);
let P={sound:false,wall:'sunset',rm:matchMedia('(prefers-reduced-motion:reduce)').matches,clean:false};
try{Object.assign(P,JSON.parse(localStorage.getItem('prefs')||'{}'))}catch(e){}
const save=()=>{try{localStorage.setItem('prefs',JSON.stringify(P))}catch(e){}};
const apply=()=>{document.body.classList.toggle('night',P.wall==='night');document.body.classList.toggle('rm',P.rm);document.body.classList.toggle('clean',P.clean)};
apply();
let ac;const beep=f=>{if(!P.sound)return;try{ac=ac||new AudioContext();const o=ac.createOscillator(),g=ac.createGain();o.type='square';o.frequency.value=f||440;g.gain.value=.04;o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+.06)}catch(e){}};
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const mobile=()=>innerWidth<=700;
$('#avatar').src=PHOTO;

// ---------- Apps ----------
const links=()=>`<div class="links"><a href="${ME.github}" target="_blank" rel="noopener">GitHub</a><a href="${ME.linkedin}" target="_blank" rel="noopener">LinkedIn</a><a href="mailto:${ME.email}">Email</a></div>`;
const APPS={
about:{t:'About Me',i:'🏠',lab:'Home',w:680,h:440,x:120,y:50,html:()=>`<div class="about"><div class="pic"><img src="${PHOTO}" alt="Portrait of Talel Oueslati"></div><div><h2>Hi, I'm ${ME.name}.</h2><p>I'm a ${ME.title} who enjoys building web applications, designing backend systems and turning ideas into practical digital products.</p><p class="muted">I work across frontend, backend APIs, databases and application architecture.</p><p><b>Education:</b> Engineering degree in Software Engineering, TEK-UP University (2023–2026).<br><b>Location:</b> ${ME.loc}</p>${links()}</div></div>`},
projects:{t:'Projects',i:'📁',lab:'Projects',w:680,h:480,x:230,y:70,html:()=>`<h2>My projects</h2>`+PROJECTS.map((p,i)=>`<article class="pc" style="--c:${p.c}"><h4>${p.t}</h4><span class="muted">${p.d}</span><div class="badges">${p.tech.map(t=>`<span class="badge">${t}</span>`).join('')}</div><div class="pbtn">${p.videos&&p.videos.length?`<button class="btn" data-v="${i}">▶ Demo${p.videos.length>1?' ('+p.videos.length+')':''}</button>`:''}<button class="btn" data-d="${i}">📄 Documentation</button></div></article>`).join(''),init(w){w.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.v)demo(+b.dataset.v);if(b.dataset.d)docModal(+b.dataset.d)})}},
skills:{t:'Skills',i:'⚙️',lab:'Skills',w:520,h:420,x:200,y:120,html:()=>Object.entries(SKILLS).map(([c,l])=>`<h3>${c}</h3><div class="grid">${l.map(s=>`<div class="sk"><i style="background:${s[2]}">${s[1]}</i>${s[0]}</div>`).join('')}</div>`).join('')},
contact:{t:'Contact',i:'✉️',lab:'Contact',w:460,h:470,x:300,y:70,html:()=>`<h2>Let's talk</h2>${links()}<h3>Send a message</h3><form id="cf" novalidate><label class="f" for="cn">Name</label><input class="t" id="cn"><label class="f" for="ce">Email</label><input class="t" id="ce" type="email"><label class="f" for="cm">Message</label><textarea id="cm" rows="4"></textarea><div class="err" id="cerr" role="alert"></div><button class="btn" type="submit">Open in my mail app</button></form>`,init(w){$('#cf',w).onsubmit=e=>{e.preventDefault();const n=$('#cn',w).value.trim(),m=$('#ce',w).value.trim(),b=$('#cm',w).value.trim(),er=$('#cerr',w);if(!n)return er.textContent='Enter your name.';if(!/^\S+@\S+\.\S+$/.test(m))return er.textContent='Enter a valid email address.';if(b.length<10)return er.textContent='Write a message of at least 10 characters.';er.textContent='';location.href=`mailto:${ME.email}?subject=${encodeURIComponent('Portfolio message from '+n)}&body=${encodeURIComponent(b+'\n\n'+n+' ('+m+')')}`}}},
settings:{t:'Settings',i:'🛠️',lab:'Settings',w:420,h:340,x:340,y:110,html:()=>`<h2>Preferences</h2><div class="set"><label for="s1">Sound effects</label><input type="checkbox" id="s1" ${P.sound?'checked':''}></div><div class="set"><label for="s2">Wallpaper</label><select id="s2" style="width:auto"><option value="sunset" ${P.wall=='sunset'?'selected':''}>Sunset</option><option value="night" ${P.wall=='night'?'selected':''}>Night</option></select></div><div class="set"><label for="s3">Reduce animations</label><input type="checkbox" id="s3" ${P.rm?'checked':''}></div><div class="set"><label for="s4">Simple layout (no pixel art)</label><input type="checkbox" id="s4" ${P.clean?'checked':''}></div>`,init(w){const u=()=>{P.sound=$('#s1',w).checked;P.wall=$('#s2',w).value;P.rm=$('#s3',w).checked;P.clean=$('#s4',w).checked;apply();save();beep(660)};w.querySelectorAll('input,select').forEach(e=>e.onchange=u)}},
terminal:{t:'Terminal',i:'⌨️',lab:'Terminal',w:470,h:300,x:18,y:null,cls:'term',html:()=>`<div class="out" id="to" aria-live="polite">Welcome. Type <b>help</b> to see commands.\n</div><div class="row"><span class="pr">talel@portfolio:~$</span><input id="ti" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Terminal command"></div>`,init(w){const o=$('#to',w),inp=$('#ti',w);const C={help:()=>'Commands: help, whoami, about, projects, skills, contact, clear',whoami:()=>`${ME.name} — ${ME.title}. I build web apps, backend systems and practical digital products.`,about:()=>(openApp('about'),'Opening About Me...'),projects:()=>(openApp('projects'),'Opening Projects...'),skills:()=>(openApp('skills'),'Opening Skills...'),contact:()=>(openApp('contact'),'Opening Contact...'),clear:()=>{o.textContent='';return null}};
inp.onkeydown=e=>{if(e.key!=='Enter')return;const c=inp.value.trim().toLowerCase();inp.value='';o.insertAdjacentHTML('beforeend',`<span class="pr">talel@portfolio:~$</span> ${esc(c)}\n`);if(c){const r=C[c]?C[c]():`command not found: ${esc(c)}. Type help.`;if(r)o.insertAdjacentHTML('beforeend',r+'\n')}o.scrollTop=o.scrollHeight;beep(520)};
w.addEventListener('pointerdown',e=>{if(!e.target.closest('.tb'))setTimeout(()=>inp.focus(),0)})}}
};

// ---------- Window manager ----------
const W={};let Z=100,off=0;
function focus(id){const w=W[id];if(!w)return;w.style.zIndex=++Z;Object.values(W).forEach(x=>x.dataset.f=0);w.dataset.f=1;tasks()}
function mk(id,a){
 const w=document.createElement('section');w.className='win';w.setAttribute('role','dialog');w.setAttribute('aria-label',a.t);
 const ww=Math.min(a.w,innerWidth-16),hh=Math.min(a.h,innerHeight-70);
 w.style.cssText=`width:${ww}px;height:${hh}px;left:${a.x+off}px;top:${(a.y==null?innerHeight-hh-60:a.y+off)}px`;off=(off+22)%88;
 w.innerHTML=`<div class="tb"><span aria-hidden="true">${a.i}</span><span class="t">${a.t}</span><button data-a="min" aria-label="Minimize">–</button><button class="mx" data-a="max" aria-label="Maximize">□</button><button data-a="close" aria-label="Close">×</button></div><div class="body ${a.cls||''}" ${a.cls?'style="padding:0"':''}>${a.html()}</div>`;
 document.body.appendChild(w);W[id]=w;
 w.addEventListener('pointerdown',()=>focus(id));
 w.querySelector('.tb').onclick=e=>{const b=e.target.closest('button');if(!b)return;beep(380);if(b.dataset.a=='close')closeW(id);if(b.dataset.a=='min'){w.classList.add('min');tasks()}if(b.dataset.a=='max')w.classList.toggle('max')};
 w.querySelector('.tb').ondblclick=e=>{if(!e.target.closest('button')&&!mobile())w.classList.toggle('max')};
 drag(w);if(a.init)a.init(w);
 focus(id);return w}
function closeW(id){const w=W[id];if(!w)return;w.classList.add('closing');delete W[id];setTimeout(()=>w.remove(),150);tasks()}
function openApp(id){beep(560);document.getElementById('menu').classList.remove('show');const w=W[id];if(w){w.classList.remove('min');focus(id)}else mk(id,APPS[id])}
function modal(title,inner,mount){const o=document.createElement('div');o.className='ov';o.innerHTML=`<div class="mod" role="dialog" aria-label="${esc(title)}"><div class="tb"><span class="t">${esc(title)}</span><button aria-label="Close">×</button></div>${inner}</div>`;const k=e=>{if(e.key==='Escape')x()},x=()=>{o.remove();document.removeEventListener('keydown',k)};document.addEventListener('keydown',k);o.onclick=e=>{if(e.target===o||e.target.closest('.tb button'))x()};document.body.appendChild(o);if(mount)mount(o);beep(480)}
const badges=p=>p.tech.map(t=>`<span class="badge">${t}</span>`).join('');
function demo(i){const p=PROJECTS[i];let n=0;modal(p.t,`<div class="vw"></div><div class="tabs"></div><div class="badges" style="padding:0 12px 12px">${badges(p)}</div>`,o=>{const V=p.videos,vw=$('.vw',o),tb=$('.tabs',o);
 const draw=()=>{const v=V[n];vw.innerHTML=`<video controls autoplay playsinline><source src="assets/videos/${encodeURI(v.src)}" type="video/mp4"></video><div class="vnote" hidden>Can't find "${esc(v.src)}". Put the video in the same folder as this HTML file.</div>`;$('source',vw).onerror=()=>{$('.vnote',vw).hidden=false};
  if(V.length>1)tb.innerHTML=`<button class="btn" data-g="-1" aria-label="Previous video">‹</button>`+V.map((x,j)=>`<button class="btn ${j==n?'a':''}" data-n="${j}">${esc(x.label)}</button>`).join('')+`<button class="btn" data-g="1" aria-label="Next video">›</button>`};
 tb.onclick=e=>{const b=e.target.closest('button');if(!b)return;n=b.dataset.n!=null?+b.dataset.n:Math.max(0,Math.min(V.length-1,n+ +b.dataset.g));draw()};draw()})}
function docModal(i){const p=PROJECTS[i];modal(p.t,`<div class="doc">${md(p.doc)}<h4>Technologies used</h4><div class="badges">${badges(p)}</div></div>`)}
function md(src){let h='',list='',tbl=[];const inl=t=>esc(t).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>');
 const fl=()=>{if(list){h+=`</${list}>`;list=''}if(tbl.length){h+='<div class="tw"><table>'+tbl.map((r,k)=>'<tr>'+r.map(c=>`<${k?'td':'th'}>${inl(c)}</${k?'td':'th'}>`).join('')+'</tr>').join('')+'</table></div>';tbl=[]}};
 for(const raw of src.trim().split('\n')){const l=raw.trim(),m=l.match(/^(#{3,4}) (.*)/);
  if(l[0]=='|'){if(list)fl();tbl.push(l.replace(/^\||\|$/g,'').split('|').map(c=>c.trim()));continue}
  if(tbl.length)fl();if(!l){fl();continue}
  if(m){fl();h+=`<h${m[1].length}>${inl(m[2])}</h${m[1].length}>`}
  else if(/^- /.test(l)||/^\d+\. /.test(l)){const t=l[0]=='-'?'ul':'ol';if(list!==t){fl();h+=`<${t}>`;list=t}h+=`<li>${inl(l.replace(/^(- |\d+\. )/,''))}</li>`}
  else{fl();h+=`<p>${inl(l)}</p>`}}
 fl();return h}
function drag(w){const tb=w.querySelector('.tb');tb.addEventListener('pointerdown',e=>{if(mobile()||e.target.closest('button')||w.classList.contains('max'))return;const r=w.getBoundingClientRect(),dx=e.clientX-r.left,dy=e.clientY-r.top;tb.setPointerCapture(e.pointerId);tb.style.cursor='grabbing';
 const mv=ev=>{w.style.left=Math.max(-r.width+80,Math.min(innerWidth-80,ev.clientX-dx))+'px';w.style.top=Math.max(0,Math.min(innerHeight-90,ev.clientY-dy))+'px'};
 const up=()=>{tb.removeEventListener('pointermove',mv);tb.removeEventListener('pointerup',up);tb.style.cursor=''};tb.addEventListener('pointermove',mv);tb.addEventListener('pointerup',up)})}

// ---------- Taskbar, icons, menu, clock ----------
const ORDER=['about','projects','skills','contact','terminal'];
function tasks(){const t=$('#tasks');t.innerHTML=ORDER.map(id=>{const w=W[id],on=w&&!w.classList.contains('min');return `<button data-id="${id}" class="${w?'on':''}" aria-label="${APPS[id].t}" aria-pressed="${!!on}">${APPS[id].i}<span class="btn-lbl"> ${APPS[id].lab}</span></button>`}).join('');
 t.querySelectorAll('button').forEach(b=>b.onclick=()=>{const id=b.dataset.id,w=W[id];if(w&&!w.classList.contains('min')&&w.dataset.f=='1'){w.classList.add('min');tasks()}else openApp(id)})}
$('#icons').innerHTML=['about','projects','skills','contact','settings'].map(id=>`<button class="ico" data-id="${id}"><b aria-hidden="true">${APPS[id].i}</b>${APPS[id].lab}</button>`).join('');
$('#icons').onclick=e=>{const b=e.target.closest('.ico');if(b)openApp(b.dataset.id)};
$('#menu').innerHTML=['about','projects','skills','contact','terminal','settings'].map(id=>`<button role="menuitem" data-id="${id}">${APPS[id].i} ${APPS[id].t}</button>`).join('');
$('#menu').onclick=e=>{const b=e.target.closest('button');if(b)openApp(b.dataset.id)};
$('#start').onclick=e=>{e.stopPropagation();$('#menu').classList.toggle('show')};
document.addEventListener('pointerdown',e=>{if(!e.target.closest('#menu,#start'))$('#menu').classList.remove('show')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')$('#menu').classList.remove('show')});
function clock(){const d=new Date();$('#clock').innerHTML=d.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})+'<div class="d">'+d.toLocaleDateString([],{day:'numeric',month:'short',year:'numeric'})+'</div>'}
clock();setInterval(clock,10000);tasks();
