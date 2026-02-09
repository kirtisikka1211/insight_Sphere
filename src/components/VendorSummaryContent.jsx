export default function VendorSummaryContent() {
  return (
    <>
      Here is a consolidated view of vendor performance across delivery, cost, risk, and geography.

      <div className="dashboards">
        <div className="card">
          <h3>⭐ Stellar Performers</h3>
          <svg width="100%" height="80" viewBox="0 0 200 80">
            <rect x="10" y="30" width="160" height="20" fill="#2ecc71" rx="4" />
            <text x="10" y="20" fill="#9aa4b2" fontSize="10">On-time Delivery</text>
          </svg>
          <table>
            <thead>
              <tr><th align="left">Vendor</th><th>2024</th><th>2025</th></tr>
            </thead>
            <tbody>
              <tr><td>AstraWorks</td><td>96%</td><td>99%</td></tr>
              <tr><td>BlueOrbit Tech</td><td>94%</td><td>98%</td></tr>
              <tr><td>NovaBridge</td><td>95%</td><td>97%</td></tr>
            </tbody>
          </table>
          <div className="metric"><span>Commitment adherence</span><strong className="good">High</strong></div>
        </div>

        <div className="card">
          <h3>💰 Cost-Efficient but Delayed</h3>
          <svg width="100%" height="80" viewBox="0 0 200 80">
            <rect x="10" y="30" width="120" height="20" fill="#f1c40f" rx="4" />
            <text x="10" y="20" fill="#9aa4b2" fontSize="10">Delivery Timeliness</text>
          </svg>
          <table>
            <thead>
              <tr><th align="left">Vendor</th><th>2024</th><th>2025</th></tr>
            </thead>
            <tbody>
              <tr><td>CostEdge Solutions</td><td>82%</td><td>78%</td></tr>
              <tr><td>LeanStack</td><td>85%</td><td>80%</td></tr>
            </tbody>
          </table>
          <div className="metric"><span>Delivery risk</span><strong className="warn">Medium</strong></div>
        </div>

        <div className="card">
          <h3>🌍 International Vendors</h3>
          <svg width="100%" height="80" viewBox="0 0 200 80">
            <circle cx="60" cy="40" r="28" fill="#4f8cff" />
            <text x="110" y="45" fill="#9aa4b2" fontSize="10">Global Mix</text>
          </svg>
          <table>
            <thead>
              <tr><th align="left">Vendor</th><th>Region</th><th>SLA</th></tr>
            </thead>
            <tbody>
              <tr><td>EuroSys GmbH</td><td>EU</td><td>95%</td></tr>
              <tr><td>Pacifica Digital</td><td>APAC</td><td>93%</td></tr>
            </tbody>
          </table>
          <div className="metric"><span>Currency exposure</span><strong className="warn">Moderate</strong></div>
        </div>

        <div className="card">
          <h3>⚠️ At-Risk Vendors</h3>
          <svg width="100%" height="80" viewBox="0 0 200 80">
            <rect x="10" y="40" width="80" height="20" fill="#e67e22" rx="4" />
            <rect x="10" y="15" width="130" height="20" fill="#e74c3c" rx="4" />
            <text x="10" y="10" fill="#9aa4b2" fontSize="10">Escalations</text>
          </svg>
          <table>
            <thead>
              <tr><th align="left">Vendor</th><th>2024</th><th>2025</th></tr>
            </thead>
            <tbody>
              <tr><td>RapidWare</td><td>89%</td><td>76%</td></tr>
              <tr><td>CloudSprint</td><td>87%</td><td>74%</td></tr>
            </tbody>
          </table>
          <div className="metric"><span>Trend</span><strong className="bad">Deteriorating</strong></div>
        </div>

        <div className="card">
          <h3>⛔ Blacklisted Vendors</h3>
          <svg width="100%" height="80" viewBox="0 0 200 80">
            <rect x="10" y="30" width="60" height="20" fill="#e74c3c" rx="4" />
            <text x="10" y="20" fill="#9aa4b2" fontSize="10">Compliance Issues</text>
          </svg>
          <table>
            <thead>
              <tr><th align="left">Vendor</th><th>Issue</th><th>Year</th></tr>
            </thead>
            <tbody>
              <tr><td>TrustCore Ltd</td><td>Data breach</td><td>2024</td></tr>
              <tr><td>AlphaServe</td><td>Audit failure</td><td>2025</td></tr>
            </tbody>
          </table>
          <div className="metric"><span>Status</span><strong className="bad">Blocked</strong></div>
        </div>

        <div className="card">
          <h3>📈 Strategic Partners</h3>
          <svg width="100%" height="80" viewBox="0 0 200 80">
            <polyline points="10,60 50,40 90,45 130,25 170,20" fill="none" stroke="#2ecc71" strokeWidth="3" />
            <text x="10" y="15" fill="#9aa4b2" fontSize="10">Value Growth</text>
          </svg>
          <table>
            <thead>
              <tr><th align="left">Vendor</th><th>2024</th><th>2025</th></tr>
            </thead>
            <tbody>
              <tr><td>VertexOne</td><td>+18%</td><td>+34%</td></tr>
              <tr><td>Synergia</td><td>+21%</td><td>+29%</td></tr>
            </tbody>
          </table>
          <div className="metric"><span>Renewal intent</span><strong className="good">Strong</strong></div>
        </div>
      </div>
    </>
  );
}
