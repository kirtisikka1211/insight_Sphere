export default function VPOperationsContent() {
  return (
    <>
      <strong>Executive Summary</strong>
      <br />
      Delivery performance remains largely stable across programs, however escalation frequency and rework increased in 2025, indicating rising execution complexity.

      <div className="dashboards">
        <div className="card">
          <h3>On-Time Delivery</h3>
          <div className="signal good">● Largely on track</div>
          <div className="metric"><span>2025</span><strong>92%</strong></div>
          <svg width="100%" height="90">
            <rect x="30" y="35" width="20" height="40" fill="#22c55e" />
            <rect x="80" y="30" width="20" height="45" fill="#22c55e" />
            <rect x="130" y="25" width="20" height="50" fill="#22c55e" />
            <text x="25" y="80" fontSize="10" fill="#9aa4b2">2023</text>
            <text x="75" y="80" fontSize="10" fill="#9aa4b2">2024</text>
            <text x="125" y="80" fontSize="10" fill="#9aa4b2">2025</text>
            <text x="25" y="30" fontSize="10" fill="#9aa4b2">90%</text>
            <text x="75" y="25" fontSize="10" fill="#9aa4b2">93%</text>
            <text x="125" y="20" fontSize="10" fill="#9aa4b2">92%</text>
          </svg>
        </div>

        <div className="card">
          <h3>SLA Compliance</h3>
          <div className="signal warn">● Minor slippage</div>
          <div className="metric"><span>2025</span><strong>89%</strong></div>
          <svg width="100%" height="90">
            <polyline points="30,30 90,25 150,40" stroke="#facc15" strokeWidth="3" fill="none" />
            <text x="25" y="80" fontSize="10" fill="#9aa4b2">2023</text>
            <text x="85" y="80" fontSize="10" fill="#9aa4b2">2024</text>
            <text x="145" y="80" fontSize="10" fill="#9aa4b2">2025</text>
            <text x="25" y="25" fontSize="10" fill="#9aa4b2">94%</text>
            <text x="85" y="20" fontSize="10" fill="#9aa4b2">92%</text>
            <text x="145" y="45" fontSize="10" fill="#9aa4b2">89%</text>
          </svg>
        </div>

        <div className="card">
          <h3>Escalations</h3>
          <div className="signal bad">● Increasing</div>
          <div className="metric"><span>2025</span><strong>37</strong></div>
          <svg width="100%" height="90">
            <rect x="30" y="55" width="20" height="20" fill="#ef4444" />
            <rect x="80" y="45" width="20" height="30" fill="#ef4444" />
            <rect x="130" y="30" width="20" height="45" fill="#ef4444" />
            <text x="25" y="80" fontSize="10" fill="#9aa4b2">2023</text>
            <text x="75" y="80" fontSize="10" fill="#9aa4b2">2024</text>
            <text x="125" y="80" fontSize="10" fill="#9aa4b2">2025</text>
            <text x="25" y="50" fontSize="10" fill="#9aa4b2">18</text>
            <text x="75" y="40" fontSize="10" fill="#9aa4b2">26</text>
            <text x="125" y="25" fontSize="10" fill="#9aa4b2">37</text>
          </svg>
        </div>

        <div className="card">
          <h3>Rework / Defect Rate</h3>
          <div className="signal warn">● Rising</div>
          <div className="metric"><span>2025</span><strong>6.8%</strong></div>
          <svg width="100%" height="90">
            <polyline points="30,45 90,40 150,30" stroke="#facc15" strokeWidth="3" fill="none" />
            <text x="25" y="80" fontSize="10" fill="#9aa4b2">2023</text>
            <text x="85" y="80" fontSize="10" fill="#9aa4b2">2024</text>
            <text x="145" y="80" fontSize="10" fill="#9aa4b2">2025</text>
            <text x="25" y="45" fontSize="10" fill="#9aa4b2">4.1%</text>
            <text x="85" y="40" fontSize="10" fill="#9aa4b2">5.3%</text>
            <text x="145" y="30" fontSize="10" fill="#9aa4b2">6.8%</text>
          </svg>
        </div>

        <div className="card">
          <h3>Delivery Confidence Index</h3>
          <div className="signal warn">● Watch closely</div>
          <div className="metric"><span>Score</span><strong>74 / 100</strong></div>
          <svg width="100%" height="90">
            <rect x="30" y="40" width="20" height="35" fill="#22c55e" />
            <rect x="80" y="45" width="20" height="30" fill="#facc15" />
            <rect x="130" y="50" width="20" height="25" fill="#ef4444" />
            <text x="25" y="80" fontSize="10" fill="#9aa4b2">2023</text>
            <text x="75" y="80" fontSize="10" fill="#9aa4b2">2024</text>
            <text x="125" y="80" fontSize="10" fill="#9aa4b2">2025</text>
            <text x="25" y="35" fontSize="10" fill="#9aa4b2">82</text>
            <text x="75" y="40" fontSize="10" fill="#9aa4b2">78</text>
            <text x="125" y="45" fontSize="10" fill="#9aa4b2">74</text>
          </svg>
        </div>
      </div>
    </>
  );
}
