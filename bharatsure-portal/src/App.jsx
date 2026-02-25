import { useState } from "react";

// ─── CLAIMS DATA ───────────────────────────────────────────────
const GHI_KYC = [
  "Patient Government ID Proof (Aadhar Card front-back)",
  "Policy Holder Government ID Proofs (Aadhar Card front-back & PAN Card)",
  "Insurance E-Card / Health Card",
  "Cancelled Cheque (with name) or Bank Pass Book (with attested seal) or Bank Statement (of employee/main policy holder)",
  "Part B (IRDA Claim Form Part-B) – Attached",
  "Company Employee ID Card",
];

// Claims GPA – original 2 parts
const CLAIMS_GPA_A = [
  "Aadhar card of the employee",
  "Pan card of the employee",
  "Aadhar card of the nominee (In case of death)",
  "Pan card of the employee (in case of death)",
  "Employee ID card",
  "Driving license in case of a Road Traffic Accident (RTA)",
  "Cancelled Cheque with name of primary insured OR 1 month bank statement where full account number is reflected and IFSC code OR Passbook with full account number and IFSC code OR NEFT form",
  "Cancelled Cheque with name of Nominee OR 1 month bank statement where full account number is reflected and IFSC code OR Passbook with full account number and IFSC code OR NEFT form",
];

const CLAIMS_GPA_B = [
  "Aadhar card of the employee",
  "Pan card of the employee",
  "Aadhar card of the nominee (In case of death)",
  "Pan card of the employee (in case of death)",
  "Employee ID card",
  "Driving license in case of a Road Traffic Accident (RTA)",
  "Cancelled Cheque with name of primary insured OR 1 month bank statement where full account number is reflected and IFSC code OR Passbook with full account number and IFSC code OR NEFT form",
  "Cancelled Cheque with name of Nominee OR 1 month bank statement where full account number is reflected and IFSC code OR Passbook with full account number and IFSC code OR NEFT form",
];

// Affinity GPA – 4 parts
const AFF_GPA_1 = [
  "Discharge Summary",
  "Final Bill & Receipt",
  "Investigation Bill & Prescription",
  "Pharmacy Bill & Prescription",
  "Investigation Reports",
  "Doctor Consultations",
  "Claim Intimation Form",
  "Claim Form",
  "ICP (if needed)",
  "Medico Legal Cases Report",
  "FIR copy for Road Accidents",
];

const AFF_GPA_2 = [
  "Employment Certificate from employer",
  "Fitness Certificate from the treating doctor",
  "Rest Certificate from the treating doctor",
  "Salary slip / statement – last 3 months",
  "Govt. ID Proof – Aadhar / PAN Card",
  "Medico Legal Cases Report",
  "Claim Intimation Form",
  "Cancelled Cheque (main policy holder with the name mentioned on cheque. If not, then bank statement)",
];

const AFF_GPA_3 = [
  "Signed Claim Form (Blank)",
  "Statement of at least 2 witnesses for the accident",
  "Certificate copy of Attendance record",
  "Medico Legal Cases Report",
  "Certificate copy of FIR",
  "Certificate copy of Postmortem Report",
  "Certificate copy of Inquest Report",
  "Death Certificate",
  "Claim Intimation Form",
  "Claim Form",
  "News Paper clipping (if any)",
  "Certificate copy of Viscera Report of Forensic Dept",
];

const AFF_GPA_4 = [
  "Doctor prescription",
  "Medical bills",
  "Reports",
  "Discharge summary",
  "Paid receipts",
];

const GTLI_DOCS = [
  "Claim form duly filled and signed by the nominee (attached)",
  "Death Certificate",
  "FIR or Final police report copy",
  "Spot and Inquest Pancha Nama",
  "Copy of Post-Mortem Report",
  "Incident details on company's Letter Head",
  "Appointment letter or confirmation letter",
  "Employee ID card with designation",
  "Last 3 Months salary slip",
  "Pan Card copy / Aadhar card copy of Insured (Deceased person)",
  "Pan Card copy / Aadhar card copy of nominee",
  "NEFT Details of Nominee (cancel cheque copy or Bank passbook copy)",
  "Duly Filled CKYC form with latest photograph",
  "Driving License of Insured if insured was driving the vehicle at the time of accident",
  "Copy of Loan certificate / agreement and Loan statement",
  "CKYC form duly filled, signed with affix latest photograph of the nominee person",
];

// ─── AFFINITY DATA ─────────────────────────────────────────────
const AFF_GHI = [
  "Valid ID proof",
  "Medical practitioner's referral letter advising hospitalization",
  "Medical practitioner's prescription advising drugs, diagnostic tests or consultation",
  "Original test reports",
  "Original bills from hospital (final bill with break-up)",
  "Original discharge card / summary",
  "Original bills from pharmacy and lab centers",
  "Indoor case papers",
  "Cancelled Cheque with Bank details",
  "For accident cases, FIR copy (if applicable)",
];

const AFF_HOSPICASH = [
  "Claim Form Part A – duly filled and signed",
  "Insurance Certificate (COI) or E-card",
  "Discharge Card: self-attested photocopy",
  "KYC documents of the insured member against whom the claim has been made",
  "Payee's NEFT details / cancelled cheque",
];

const AFF_PET = [
  "Duly completed claim form",
  "Vaccination Certificates",
  "Vet Medical Papers / Prescription",
  "Operation Theatre note (in case of claim under Surgery)",
  "Hospital bill (in case of claim under Hospitalization)",
  "Diagnostics Report & Lab test reports",
  "Discharge sheet / Summary (in case of claim under Hospitalization)",
];

const AFF_SOLAR = [
  "Incidence Note – How the loss happened",
  "Photographs of the damage",
  "Duly filled and signed claims form",
  "Repairs Estimate and copy of repair bills",
  "FIR report in case of burglary and Fire brigade report in case of fire",
  "Meteorological report in case of flood or cyclone",
];

const AFF_CREDIT = [
  "Duly filled claim form along with bank details of the claimant",
  "Death certificate issued by the authority",
  "Member consent form along with Notice of Assignment Consent",
  "Cancelled cheque / Bank Statement / Bank Passbook / Letter from the bank",
  "Copy of FIR & PM in case of Accidental Death Benefit",
  "Credit outstanding statement issued by MPH in case of Notice of Assignment Consent",
  "Nominee KYC",
];

const AFF_FIRE = [
  "Incidence Note – How the loss happened",
  "Photographs of the damage",
  "Duly filled and signed claims form",
  "Repairs Estimate and copy of repair bills",
  "FIR report in case of burglary and Fire brigade report in case of fire",
  "Meteorological report in case of flood or cyclone",
];

const AFF_CYBER = [
  "Incident Report – When, how, and what happened",
  "Evidence of Breach – Logs, screenshots, or other proof",
  "Insurance Policy – Copy of cyber liability policy",
  "Breach Notification – Sent to individuals or regulators",
  "Incident Response Plan – Steps taken to mitigate the breach",
  "Legal Notices – Any related legal communications",
  "Financial Loss Proof – Invoices, statements, or loss calculations",
  "Forensic Report – Cybersecurity firm report (if available)",
  "Communication Records – With customers, partners, or stakeholders",
  "Restoration Costs – Expenses for restoring systems / data",
  "Bank details (Account no, MICR code, IFSC code, Bank Name)",
];

// ─── CSS ───────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body, #root { width: 100%; min-height: 100vh; font-family: 'Inter', sans-serif; background: #f5f7f9; }

  :root {
    --navy: #0d1f35;
    --navy-mid: #112240;
    --navy-light: #1a3355;
    --cyan: #00b4d8;
    --cyan-dark: #0096c7;
    --body-bg: #f5f7f9;
    --border: #e2e8f0;
    --text-primary: #0d1f35;
    --text-secondary: #4a5568;
    --text-muted: #718096;
  }

  .portal { width: 100%; min-height: 100vh; background: var(--body-bg); }

  .navbar {
    width: 100%; background: var(--navy);
    padding: 0 48px; height: 70px;
    display: flex; align-items: center; justify-content: space-between;
    position: sticky; top: 0; z-index: 100;
    box-shadow: 0 2px 16px rgba(0,0,0,0.25);
  }
  .logo { display: flex; align-items: center; gap: 12px; }
  .logo-mark { font-size: 22px; font-weight: 800; color: #fff; letter-spacing: -0.5px; }
  .logo-mark span { color: var(--cyan); }
  .logo-divider { width: 1px; height: 28px; background: rgba(255,255,255,0.15); margin: 0 4px; }
  .logo-sub-text { font-size: 12px; color: rgba(255,255,255,0.45); font-weight: 500; letter-spacing: 0.04em; }
  .nav-right { display: flex; align-items: center; gap: 8px; font-size: 13px; color: rgba(255,255,255,0.45); }

  .tabbar {
    width: 100%; background: var(--navy-mid);
    border-bottom: 1px solid rgba(255,255,255,0.07);
    padding: 0 48px; display: flex;
  }
  .tab-btn {
    padding: 16px 32px; border: none; background: transparent; cursor: pointer;
    font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 600;
    color: rgba(255,255,255,0.4); border-bottom: 3px solid transparent;
    transition: all 0.2s; display: flex; align-items: center; gap: 9px; margin-bottom: -1px;
  }
  .tab-btn:hover { color: rgba(255,255,255,0.75); }
  .tab-btn.active { color: var(--cyan); border-bottom-color: var(--cyan); }

  .page-hero {
    width: 100%;
    background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
    padding: 52px 48px 46px; text-align: center; position: relative; overflow: hidden;
  }
  .page-hero::after {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse at 60% 50%, rgba(0,180,216,0.08) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-tag {
    display: inline-flex; align-items: center; gap: 7px;
    padding: 5px 16px; background: rgba(0,180,216,0.12);
    border: 1px solid rgba(0,180,216,0.3); border-radius: 20px;
    font-size: 12px; font-weight: 600; color: var(--cyan);
    margin-bottom: 16px; letter-spacing: 0.05em; text-transform: uppercase;
    position: relative; z-index: 1;
  }
  .hero-title {
    font-size: 38px; font-weight: 800; color: #fff;
    letter-spacing: -0.6px; margin-bottom: 10px; position: relative; z-index: 1;
  }
  .hero-title span { color: var(--cyan); }
  .hero-sub { font-size: 16px; color: rgba(255,255,255,0.5); position: relative; z-index: 1; }

  .page-body { width: 100%; padding: 44px 48px 80px; }

  /* SECTION BLOCK */
  .ins-block { margin-bottom: 44px; }

  .ins-header {
    background: var(--navy); border-radius: 12px 12px 0 0;
    padding: 18px 24px; display: flex; align-items: center;
    justify-content: space-between; gap: 16px;
  }
  .ins-header-left { display: flex; align-items: center; gap: 14px; }
  .ins-badge {
    padding: 5px 14px; background: rgba(0,180,216,0.15);
    border: 1.5px solid rgba(0,180,216,0.4); border-radius: 8px;
    font-size: 13px; font-weight: 800; color: var(--cyan);
    letter-spacing: 0.06em; flex-shrink: 0;
  }
  .ins-title { font-size: 18px; font-weight: 700; color: #fff; }

  .copy-btn-ghost {
    display: flex; align-items: center; gap: 8px;
    padding: 9px 18px; background: rgba(255,255,255,0.08);
    border: 1.5px solid rgba(255,255,255,0.2); color: rgba(255,255,255,0.8);
    border-radius: 9px; cursor: pointer; font-family: 'Inter', sans-serif;
    font-size: 13px; font-weight: 600; transition: all 0.18s;
    white-space: nowrap; flex-shrink: 0;
  }
  .copy-btn-ghost:hover { background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.35); }
  .copy-btn-ghost.copied { background: rgba(0,180,216,0.15); border-color: var(--cyan); color: var(--cyan); }

  .ins-cards { box-shadow: 0 2px 12px rgba(0,0,0,0.07); border-radius: 0 0 12px 12px; overflow: hidden; }

  .doc-card {
    background: #fff; border: 1px solid var(--border); border-top: none; overflow: hidden;
  }
  .doc-card:last-child { border-radius: 0 0 12px 12px; }
  .doc-card + .doc-card { border-top: 1px solid var(--border); }

  .doc-card-head {
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 24px; cursor: pointer; user-select: none; transition: background 0.15s;
  }
  .doc-card-head:hover { background: #fafbfc; }
  .doc-card-head-left { display: flex; align-items: center; gap: 13px; }
  .doc-accent { width: 3px; height: 22px; border-radius: 3px; background: var(--cyan); flex-shrink: 0; }
  .doc-card-title { font-size: 16px; font-weight: 700; color: var(--text-primary); }
  .doc-card-sub { font-size: 13px; color: var(--text-muted); margin-top: 3px; }

  .doc-card-body { border-top: 1px solid var(--border); padding: 0 24px 24px; background: #fff; }
  .copy-row { display: flex; justify-content: flex-end; padding: 16px 0 12px; }

  .copy-btn {
    display: flex; align-items: center; gap: 8px; padding: 9px 20px;
    background: #fff; border: 1.5px solid var(--border); color: var(--text-secondary);
    border-radius: 9px; cursor: pointer; font-family: 'Inter', sans-serif;
    font-size: 13px; font-weight: 600; transition: all 0.18s; white-space: nowrap;
  }
  .copy-btn:hover { border-color: var(--cyan); color: var(--cyan-dark); background: rgba(0,180,216,0.04); }
  .copy-btn.copied { background: rgba(0,180,216,0.06); border-color: var(--cyan); color: var(--cyan-dark); }

  .doc-list { list-style: none; }
  .doc-item {
    display: flex; align-items: flex-start; gap: 14px;
    padding: 14px 0; border-bottom: 1px solid #f1f5f9;
  }
  .doc-item:last-child { border-bottom: none; }
  .doc-num {
    min-width: 28px; height: 28px; border-radius: 8px;
    background: #f0f9ff; border: 1px solid #bae6fd;
    display: flex; align-items: center; justify-content: center;
    font-size: 12px; font-weight: 700; color: var(--cyan-dark);
    flex-shrink: 0; margin-top: 2px;
  }
  .doc-text { font-size: 15px; color: var(--text-primary); line-height: 1.65; }

  .copy-all-banner {
    width: 100%; margin-top: 12px; padding: 30px 40px;
    background: var(--navy); border-radius: 14px;
    display: flex; align-items: center; justify-content: space-between; gap: 24px;
    box-shadow: 0 4px 20px rgba(13,31,53,0.2);
  }
  .copy-all-title { font-size: 19px; font-weight: 700; color: #fff; margin-bottom: 5px; }
  .copy-all-sub { font-size: 14px; color: rgba(255,255,255,0.4); }
  .copy-all-btn {
    display: flex; align-items: center; gap: 9px; padding: 13px 28px;
    background: var(--cyan); color: var(--navy); border: none; border-radius: 10px;
    cursor: pointer; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 700;
    transition: all 0.2s; white-space: nowrap; flex-shrink: 0;
    box-shadow: 0 4px 14px rgba(0,180,216,0.3);
  }
  .copy-all-btn:hover { background: var(--cyan-dark); transform: translateY(-1px); }
  .copy-all-btn.copied { background: #22c55e; color: #fff; }

  .coming-soon {
    display: flex; flex-direction: column; align-items: center;
    justify-content: center; padding: 100px 20px; text-align: center;
  }
  .coming-icon {
    width: 80px; height: 80px; border-radius: 20px;
    background: #f0f9ff; border: 1px solid #bae6fd;
    display: flex; align-items: center; justify-content: center;
    font-size: 36px; margin-bottom: 20px;
  }
  .coming-title { font-size: 26px; font-weight: 700; color: var(--text-primary); margin-bottom: 10px; }
  .coming-sub { font-size: 15px; color: var(--text-muted); max-width: 360px; line-height: 1.7; }
`;

// ─── COMPONENTS ────────────────────────────────────────────────
function CopyBtn({ text, label = "Copy", variant = "default" }) {
  const [copied, setCopied] = useState(false);
  const handle = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };
  const icon = copied
    ? <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
    : <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>;

  if (variant === "ghost") return <button onClick={handle} className={`copy-btn-ghost${copied ? " copied" : ""}`}>{icon} {copied ? "Copied!" : label}</button>;
  if (variant === "big")   return <button onClick={handle} className={`copy-all-btn${copied ? " copied" : ""}`}>{icon} {copied ? "Copied!" : label}</button>;
  return <button onClick={handle} className={`copy-btn${copied ? " copied" : ""}`}>{icon} {copied ? "Copied!" : label}</button>;
}

function DocCard({ title, subtitle, docs }) {
  const [open, setOpen] = useState(true);
  const text = `${title}${subtitle ? ` – ${subtitle}` : ""}\n\n${docs.map((d, i) => `${i + 1}. ${d}`).join("\n")}`;
  return (
    <div className="doc-card">
      <div className="doc-card-head" onClick={() => setOpen(o => !o)}>
        <div className="doc-card-head-left">
          <div className="doc-accent" />
          <div>
            <div className="doc-card-title">{title}</div>
            {subtitle && <div className="doc-card-sub">{subtitle}</div>}
          </div>
        </div>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s", flexShrink: 0 }}>
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
      {open && (
        <div className="doc-card-body">
          <div className="copy-row"><CopyBtn text={text} label="Copy List" /></div>
          <ul className="doc-list">
            {docs.map((doc, i) => (
              <li key={i} className="doc-item">
                <div className="doc-num">{i + 1}</div>
                <span className="doc-text">{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function InsBlock({ badge, title, copyText, copyLabel, children }) {
  return (
    <div className="ins-block">
      <div className="ins-header">
        <div className="ins-header-left">
          <span className="ins-badge">{badge}</span>
          <span className="ins-title">{title}</span>
        </div>
        <CopyBtn text={copyText} label={copyLabel} variant="ghost" />
      </div>
      <div className="ins-cards">{children}</div>
    </div>
  );
}

// ─── CLAIMS SECTION ────────────────────────────────────────────
function ClaimsSection() {
  const ghiText  = `GHI – KYC Documents\n\n${GHI_KYC.map((d,i)=>`${i+1}. ${d}`).join("\n")}`;
  const gpaText  = `GPA – Part A: TTD\n\n${CLAIMS_GPA_A.map((d,i)=>`${i+1}. ${d}`).join("\n")}\n\nGPA – Part B: PTD / PPD\n\n${CLAIMS_GPA_B.map((d,i)=>`${i+1}. ${d}`).join("\n")}`;
  const gtliText = `GTLI – Documents Required\n\n${GTLI_DOCS.map((d,i)=>`${i+1}. ${d}`).join("\n")}`;
  const allText  = `BHARATSURE – CLAIMS DOCUMENTS\n\n${ghiText}\n\n──────────────\n\n${gpaText}\n\n──────────────\n\n${gtliText}`;

  return (
    <div>
      <InsBlock badge="GHI" title="Group Health Insurance" copyText={ghiText} copyLabel="Copy GHI Docs">
        <DocCard title="KYC Documents" docs={GHI_KYC} />
      </InsBlock>

      <InsBlock badge="GPA" title="Group Personal Accident" copyText={gpaText} copyLabel="Copy GPA Docs">
        <DocCard title="Part A" subtitle="Personal Accident – Loss of Income / Temporary Disability (TTD)" docs={CLAIMS_GPA_A} />
        <DocCard title="Part B" subtitle="Personal Accident – Permanent Total / Partial Disability (PTD / PPD)" docs={CLAIMS_GPA_B} />
      </InsBlock>

      <InsBlock badge="GTLI" title="Group Term Life Insurance" copyText={gtliText} copyLabel="Copy GTLI Docs">
        <DocCard title="Documents Required for GTLI" docs={GTLI_DOCS} />
      </InsBlock>

      <div className="copy-all-banner">
        <div>
          <div className="copy-all-title">Copy All Claims Documents</div>
          <div className="copy-all-sub">GHI + GPA + GTLI — paste into WhatsApp, email, or anywhere</div>
        </div>
        <CopyBtn text={allText} label="📋 Copy Everything" variant="big" />
      </div>
    </div>
  );
}

// ─── AFFINITY SECTION ──────────────────────────────────────────
function AffinitySection() {
  const texts = {
    ghi:    `Affinity – GHI\n\n${AFF_GHI.map((d,i)=>`${i+1}. ${d}`).join("\n")}`,
    hc:     `Affinity – Daily Hospicash\n\n${AFF_HOSPICASH.map((d,i)=>`${i+1}. ${d}`).join("\n")}`,
    pet:    `Affinity – Pet Insurance\n\n${AFF_PET.map((d,i)=>`${i+1}. ${d}`).join("\n")}`,
    gpa:    `GPA – Accidental Hospitalization\n\n${AFF_GPA_1.map((d,i)=>`${i+1}. ${d}`).join("\n")}\n\nGPA – Accidental Disability\n\n${AFF_GPA_2.map((d,i)=>`${i+1}. ${d}`).join("\n")}\n\nGPA – Accidental Death\n\n${AFF_GPA_3.map((d,i)=>`${i+1}. ${d}`).join("\n")}\n\nGPA – Treatment Records\n\n${AFF_GPA_4.map((d,i)=>`${i+1}. ${d}`).join("\n")}`,
    solar:  `Affinity – Solar Panel Insurance\n\n${AFF_SOLAR.map((d,i)=>`${i+1}. ${d}`).join("\n")}`,
    credit: `Affinity – Credit Linked Life\n\n${AFF_CREDIT.map((d,i)=>`${i+1}. ${d}`).join("\n")}`,
    fire:   `Affinity – Fire Insurance\n\n${AFF_FIRE.map((d,i)=>`${i+1}. ${d}`).join("\n")}`,
    cyber:  `Affinity – Cyber Insurance\n\n${AFF_CYBER.map((d,i)=>`${i+1}. ${d}`).join("\n")}`,
  };
  const allText = `BHARATSURE – AFFINITY DOCUMENTS\n\n${Object.values(texts).join("\n\n──────────────\n\n")}`;

  return (
    <div>
      <InsBlock badge="GHI" title="Group Health Insurance" copyText={texts.ghi} copyLabel="Copy GHI Docs">
        <DocCard title="Documents Required for GHI Claims" docs={AFF_GHI} />
      </InsBlock>

      <InsBlock badge="GPA" title="Group Personal Accident" copyText={texts.gpa} copyLabel="Copy GPA Docs">
        <DocCard title="Part 1 – Documents for Accidental Hospitalization" docs={AFF_GPA_1} />
        <DocCard title="Part 2 – Documents for Accidental Disability" docs={AFF_GPA_2} />
        <DocCard title="Part 3 – Documents for Accidental Death" docs={AFF_GPA_3} />
        <DocCard title="Part 4 – Treatment Records" subtitle="Original documents mandatory" docs={AFF_GPA_4} />
      </InsBlock>

      <InsBlock badge="HC" title="Daily Hospicash" copyText={texts.hc} copyLabel="Copy Hospicash Docs">
        <DocCard title="Documents Required for Reimbursement" docs={AFF_HOSPICASH} />
      </InsBlock>

      <InsBlock badge="PET" title="Pet Insurance" copyText={texts.pet} copyLabel="Copy Pet Docs">
        <DocCard title="Documents Required for Pet Insurance Claims" docs={AFF_PET} />
      </InsBlock>

      <InsBlock badge="SOLAR" title="Solar Panel Insurance" copyText={texts.solar} copyLabel="Copy Solar Docs">
        <DocCard title="Documents Required for Solar Panel Claims" docs={AFF_SOLAR} />
      </InsBlock>

      <InsBlock badge="CREDIT" title="Credit Linked Life" copyText={texts.credit} copyLabel="Copy Credit Docs">
        <DocCard title="Documents Required for Credit Linked Life Claims" docs={AFF_CREDIT} />
      </InsBlock>

      <InsBlock badge="FIRE" title="Fire Insurance" copyText={texts.fire} copyLabel="Copy Fire Docs">
        <DocCard title="Documents Required for Fire Insurance Claims" docs={AFF_FIRE} />
      </InsBlock>

      <InsBlock badge="CYBER" title="Cyber Insurance" copyText={texts.cyber} copyLabel="Copy Cyber Docs">
        <DocCard title="Documents Required for Cyber Insurance Claims" docs={AFF_CYBER} />
      </InsBlock>

      <div className="copy-all-banner">
        <div>
          <div className="copy-all-title">Copy All Affinity Documents</div>
          <div className="copy-all-sub">GHI, Hospicash, Pet, Solar, Credit, Fire & Cyber — all in one click</div>
        </div>
        <CopyBtn text={allText} label="📋 Copy Everything" variant="big" />
      </div>
    </div>
  );
}

// ─── APP ───────────────────────────────────────────────────────
export default function App() {
  const [tab, setTab] = useState("Claims");
  const tabs = ["Claims", "Affinity", "Retail"];

  const heroSub = {
    Claims:   "Required documents for GHI, GPA and GTLI claims processing",
    Affinity: "Required documents for GHI, Hospicash, Pet, Solar, Credit, Fire & Cyber Insurance",
    Retail:   "Retail documents will be updated soon",
  };

  return (
    <>
      <style>{css}</style>
      <div className="portal">
        <nav className="navbar">
          <div className="logo">
            <div className="logo-mark">Bharat<span>sure</span></div>
            <div className="logo-divider" />
            <div className="logo-sub-text">Document Portal</div>
          </div>
          <div className="nav-right">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
            </svg>
            Document Requirement Center
          </div>
        </nav>

        <div className="tabbar">
          {tabs.map(t => (
            <button key={t} className={`tab-btn${tab === t ? " active" : ""}`} onClick={() => setTab(t)}>
              {t === "Claims" ? "📄" : t === "Affinity" ? "🤝" : "🏪"} {t}
            </button>
          ))}
        </div>

        <div className="page-hero">
          <div className="hero-tag">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
            </svg>
            {tab} Section
          </div>
          <div className="hero-title">
            <span>{tab}</span> Document Requirements
          </div>
          <div className="hero-sub">{heroSub[tab]}</div>
        </div>

        <div className="page-body">
          {tab === "Claims"   && <ClaimsSection />}
          {tab === "Affinity" && <AffinitySection />}
          {tab === "Retail"   && (
            <div className="coming-soon">
              <div className="coming-icon">🏪</div>
              <div className="coming-title">Retail — Coming Soon</div>
              <div className="coming-sub">Retail documents will be added shortly. Check back soon.</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}