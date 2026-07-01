export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="wrap nav-inner">
          <div className="logo">
            <div className="logo-word">ThreatHex</div>
          </div>
          <div className="nav-links nav-mobile-hide">
            <a href="#services">Services</a>
            <a href="#lifecycle">Engagement</a>
            <a href="#why">Why Us</a>
          </div>
          <a href="#contact" className="nav-cta">Request Engagement</a>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">// Offensive Security & Response</span>
            <h1 className="hero-title">
              We breach your<br />
              <span className="redact" style={{ '--d': '0.3s' }}>defenses</span> before<br />
              someone else <span className="redact" style={{ '--d': '0.6s' }}>does.</span>
            </h1>
            <p className="hero-sub">
              ThreatHex runs red team operations, penetration tests, and incident response
              for organizations that treat security as a practice, not a checkbox.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">Scope an Engagement</a>
              <a href="#services" className="btn-ghost">View Services</a>
            </div>
          </div>

          <div className="hero-doc">
            <div className="hero-doc-head">
              <span>ENGAGEMENT LOG</span>
              <span>LIVE</span>
            </div>
            <div className="hero-doc-row"><span>Recon &amp; OSINT</span><span>COMPLETE</span></div>
            <div className="hero-doc-row"><span>Initial Access</span><span>COMPLETE</span></div>
            <div className="hero-doc-row"><span>Privilege Escalation</span><span>IN PROGRESS</span></div>
            <div className="hero-doc-row"><span>Lateral Movement</span><span>QUEUED</span></div>
            <div className="hero-doc-row"><span>Exfil Simulation</span><span>QUEUED</span></div>
            <div className="hero-doc-row"><span>Detection Triggered</span><span>0 / 5</span></div>
          </div>
        </div>
      </header>

      <section className="stats">
        <div className="stat">
          <div className="stat-num">120+</div>
          <div className="stat-label">Engagements Delivered</div>
        </div>
        <div className="stat">
          <div className="stat-num">38min</div>
          <div className="stat-label">Avg. IR Response Time</div>
        </div>
        <div className="stat">
          <div className="stat-num">600+</div>
          <div className="stat-label">Critical Findings Closed</div>
        </div>
        <div className="stat">
          <div className="stat-num">24/7</div>
          <div className="stat-label">Incident Hotline</div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">// Services</span>
            <h2 className="section-title">Three disciplines, one objective: reduce time-to-breach to zero.</h2>
          </div>

          <div className="case">
            <span className="case-tag">FILE / RT</span>
            <span className="case-name">Red Team Operations</span>
            <div>
              <p className="case-desc">
                Goal oriented adversary simulation against your people, network, and detection
                stack no scope checklist, just realistic tradecraft.
              </p>
              <ul className="case-list">
                <li>Assumed-breach and full-chain scenarios</li>
                <li>Social engineering and physical pretexting</li>
                <li>Detection &amp; response evaluation alongside your blue team</li>
              </ul>
            </div>
          </div>

          <div className="case">
            <span className="case-tag">FILE / VA</span>
            <span className="case-name">VAPT</span>
            <div>
              <p className="case-desc">
                Manual led vulnerability assessment and penetration testing across web,
                mobile, API, network, and cloud surfaces.
              </p>
              <ul className="case-list">
                <li>OWASP / NIST-aligned methodology</li>
                <li>Exploitation proof, not scanner output</li>
                <li>Retest included until findings close</li>
              </ul>
            </div>
          </div>

          <div className="case">
            <span className="case-tag">FILE / IR</span>
            <span className="case-name">Incident Response</span>
            <div>
              <p className="case-desc">
                Containment, forensics, and recovery when something has already gone wrong plus the root-cause report your board will actually read.
              </p>
              <ul className="case-list">
                <li>24/7 triage and containment</li>
                <li>Memory &amp; disk forensics, timeline reconstruction</li>
                <li>Post-incident hardening roadmap</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section lifecycle" id="lifecycle">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">// How an engagement runs</span>
            <h2 className="section-title">Same lifecycle, every engagement type.</h2>
          </div>
          <div className="phase-grid">
            <div className="phase">
              <span className="phase-tag">PHASE 1</span>
              <div className="phase-name">Scoping</div>
              <p className="phase-desc">Targets, rules of engagement, and success criteria agreed in writing before anything starts.</p>
            </div>
            <div className="phase">
              <span className="phase-tag">PHASE 2</span>
              <div className="phase-name">Execution</div>
              <p className="phase-desc">Testing or response runs against the agreed scope with a live point of contact.</p>
            </div>
            <div className="phase">
              <span className="phase-tag">PHASE 3</span>
              <div className="phase-name">Reporting</div>
              <p className="phase-desc">Findings delivered with reproduction steps, evidence, and risk-ranked remediation.</p>
            </div>
            <div className="phase">
              <span className="phase-tag">PHASE 4</span>
              <div className="phase-name">Retest</div>
              <p className="phase-desc">We verify fixes hold before the engagement is marked closed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="why">
        <div className="wrap why-grid">
          <div>
            <span className="eyebrow">// Why ThreatHex</span>
            <h2 className="section-title" style={{ marginBottom: 30 }}>Built around evidence, not dashboards.</h2>
            <div className="why-item">
              <div className="why-title">Operators, not analysts</div>
              <div className="why-desc">Every engagement is run by people who have held a shell on a production network not just read about one.</div>
            </div>
            <div className="why-item">
              <div className="why-title">Fixed-scope pricing</div>
              <div className="why-desc">You know the cost before we start. No hourly surprises, no padded retests.</div>
            </div>
            <div className="why-item">
              <div className="why-title">Reports engineers use</div>
              <div className="why-desc">Reproduction steps and evidence your team can act on the same day, not just an executive summary.</div>
            </div>
          </div>

          <div className="report-card">
            <div className="report-card-head">
              <span>SAMPLE FINDINGS REDACTED CLIENT</span>
              <span>RT-2026-014</span>
            </div>
            <div className="report-row"><span>Domain admin via unconstrained delegation</span><span className="sev sev-crit">CRITICAL</span></div>
            <div className="report-row"><span>Stored XSS in internal admin panel</span><span className="sev sev-high">HIGH</span></div>
            <div className="report-row"><span>S3 bucket allows unauthenticated listing</span><span className="sev sev-high">HIGH</span></div>
            <div className="report-row"><span>JWT accepts alg:none</span><span className="sev sev-crit">CRITICAL</span></div>
            <div className="report-row"><span>Verbose error leaks internal hostnames</span><span className="sev sev-med">MEDIUM</span></div>
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="wrap cta-row">
          <h2 className="cta-title">Tell us what you need tested or what's already on fire.</h2>
          <a href="mailto:contact@threathex.com" className="cta-mail">contact@threathex.com</a>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div className="logo">
            <div className="logo-word">ThreatHex</div>
          </div>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#lifecycle">Engagement</a>
            <a href="#contact">Contact</a>
          </div>
          <span className="footer-meta">© 2026 ThreatHex. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
