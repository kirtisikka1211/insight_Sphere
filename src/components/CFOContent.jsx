export default function CFOContent() {
  return (
    <>
      <strong>Executive Summary</strong>
      <br />
      Revenue has grown consistently over the last three years, however margin expansion has slowed and cash efficiency requires attention.

      <div className="dashboards">
        <div className="card">
          <h3>Revenue Trajectory</h3>
          <div className="signal good">● Healthy growth</div>
          <div className="metric"><span>3Y CAGR</span><strong>18%</strong></div>
          <svg width="100%" height="90">
            <rect x="30" y="40" width="20" height="30" fill="#22c55e" />
            <rect x="80" y="30" width="20" height="40" fill="#22c55e" />
            <rect x="130" y="15" width="20" height="55" fill="#22c55e" />
            <text x="25" y="80" fontSize="10" fill="#9aa4b2">2023</text>
            <text x="75" y="80" fontSize="10" fill="#9aa4b2">2024</text>
            <text x="125" y="80" fontSize="10" fill="#9aa4b2">2025</text>
            <text x="22" y="38" fontSize="10" fill="#9aa4b2">$120M</text>
            <text x="72" y="28" fontSize="10" fill="#9aa4b2">$145M</text>
            <text x="122" y="13" fontSize="10" fill="#9aa4b2">$175M</text>
          </svg>
        </div>

        <div className="card">
          <h3>Profitability</h3>
          <div className="signal warn">● Margin pressure</div>
          <div className="metric"><span>EBITDA Margin</span><strong>21%</strong></div>
          <svg width="100%" height="90">
            <polyline points="20,60 80,40 140,25" stroke="#22c55e" strokeWidth="3" fill="none" />
            <text x="15" y="75" fontSize="10" fill="#9aa4b2">2023</text>
            <text x="70" y="75" fontSize="10" fill="#9aa4b2">2024</text>
            <text x="130" y="75" fontSize="10" fill="#9aa4b2">2025</text>
            <text x="10" y="60" fontSize="10" fill="#9aa4b2">$180Cr</text>
            <text x="65" y="40" fontSize="10" fill="#9aa4b2">$215Cr</text>
            <text x="120" y="25" fontSize="10" fill="#9aa4b2">$255Cr</text>
          </svg>
        </div>

        <div className="card">
          <h3>Cost Structure</h3>
          <div className="signal warn">● Costs scaling</div>
          <div className="metric"><span>Total Opex</span><strong>$92M</strong></div>
          <svg width="100%" height="90">
            <rect x="30" y="35" width="20" height="35" fill="#facc15" />
            <rect x="80" y="30" width="20" height="40" fill="#facc15" />
            <rect x="130" y="20" width="20" height="50" fill="#facc15" />
            <text x="25" y="80" fontSize="10" fill="#9aa4b2">2023</text>
            <text x="75" y="80" fontSize="10" fill="#9aa4b2">2024</text>
            <text x="125" y="80" fontSize="10" fill="#9aa4b2">2025</text>
            <text x="22" y="33" fontSize="10" fill="#9aa4b2">$70M</text>
            <text x="72" y="28" fontSize="10" fill="#9aa4b2">$82M</text>
            <text x="122" y="18" fontSize="10" fill="#9aa4b2">$92M</text>
          </svg>
        </div>

        <div className="card">
          <h3>Cash Flow</h3>
          <div className="signal bad">● Cash strain</div>
          <div className="metric"><span>Free Cash Flow</span><strong>-$4.2Cr</strong></div>
          <svg width="100%" height="90">
            <polyline points="20,60 80,40 140,25" stroke="#22c55e" strokeWidth="3" fill="none" />
            <text x="15" y="75" fontSize="10" fill="#9aa4b2">2023</text>
            <text x="70" y="75" fontSize="10" fill="#9aa4b2">2024</text>
            <text x="130" y="75" fontSize="10" fill="#9aa4b2">2025</text>
            <text x="10" y="60" fontSize="10" fill="#9aa4b2">$180Cr</text>
            <text x="65" y="40" fontSize="10" fill="#9aa4b2">$215Cr</text>
            <text x="120" y="25" fontSize="10" fill="#9aa4b2">$255Cr</text>
          </svg>
        </div>

        <div className="card">
          <h3>Working Capital</h3>
          <div className="signal warn">● DSO rising</div>
          <div className="metric"><span>DSO</span><strong>68 days</strong></div>
          <svg width="100%" height="90">
            <polyline points="20,60 80,40 140,25" stroke="#22c55e" strokeWidth="3" fill="none" />
            <text x="15" y="75" fontSize="10" fill="#9aa4b2">2023</text>
            <text x="70" y="75" fontSize="10" fill="#9aa4b2">2024</text>
            <text x="130" y="75" fontSize="10" fill="#9aa4b2">2025</text>
            <text x="10" y="60" fontSize="10" fill="#9aa4b2">$180Cr</text>
            <text x="65" y="40" fontSize="10" fill="#9aa4b2">$215Cr</text>
            <text x="120" y="25" fontSize="10" fill="#9aa4b2">$255Cr</text>
          </svg>
        </div>

        <div className="card">
          <h3>Risk Exposure</h3>
          <div className="signal warn">● Concentration risk</div>
          <div className="metric"><span>Top 3 Revenue</span><strong>41%</strong></div>
          <svg width="100%" height="90">
            <polyline points="20,60 80,40 140,25" stroke="#22c55e" strokeWidth="3" fill="none" />
            <text x="15" y="75" fontSize="10" fill="#9aa4b2">2023</text>
            <text x="70" y="75" fontSize="10" fill="#9aa4b2">2024</text>
            <text x="130" y="75" fontSize="10" fill="#9aa4b2">2025</text>
            <text x="10" y="60" fontSize="10" fill="#9aa4b2">$180Cr</text>
            <text x="65" y="40" fontSize="10" fill="#9aa4b2">$215Cr</text>
            <text x="120" y="25" fontSize="10" fill="#9aa4b2">$255Cr</text>
          </svg>
        </div>
      </div>
    </>
  );
}
