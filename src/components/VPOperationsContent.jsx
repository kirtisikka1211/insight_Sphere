import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function VPOperationsContent() {
  const deliveryData = [
    { year: '2023', value: 90 },
    { year: '2024', value: 93 },
    { year: '2025', value: 92 }
  ];

  const slaData = [
    { year: '2023', value: 94 },
    { year: '2024', value: 92 },
    { year: '2025', value: 89 }
  ];

  const escalationsData = [
    { year: '2023', value: 18 },
    { year: '2024', value: 26 },
    { year: '2025', value: 37 }
  ];

  const reworkData = [
    { year: '2023', value: 4.1 },
    { year: '2024', value: 5.3 },
    { year: '2025', value: 6.8 }
  ];

  const confidenceData = [
    { year: '2023', value: 82, color: '#22c55e' },
    { year: '2024', value: 78, color: '#facc15' },
    { year: '2025', value: 74, color: '#ef4444' }
  ];

  return (
    <>
      <strong style={{ fontSize: '18px', fontWeight: '600' }}>Executive Summary</strong>
      <br />
      Delivery performance remains largely stable across programs, however escalation frequency and rework increased in 2025, indicating rising execution complexity.

      <div className="dashboards">
        <div className="card">
          <h3>On-Time Delivery</h3>
          <div className="signal good">● Largely on track</div>
          <div className="metric"><span>Delivery Rate</span><strong>92%</strong></div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={deliveryData} margin={{ top: 20, right: 15, left: 15, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3441" strokeWidth={1.5} />
              <XAxis dataKey="year" stroke="#9ca3af" fontSize={13} fontWeight={500} />
              <YAxis domain={[85, 95]} stroke="#9ca3af" fontSize={13} fontWeight={500} label={{ value: 'Percentage', angle: -90, position: 'insideLeft', offset: 10, style: { fill: '#9ca3af', fontSize: 12 } }} />
              <Tooltip contentStyle={{ backgroundColor: '#1a1f2e', border: '1px solid #2a3441', borderRadius: '8px', fontSize: '13px' }} />
              <Bar dataKey="value" fill="#22c55e" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3>SLA Compliance</h3>
          <div className="signal warn">● Minor slippage</div>
          <div className="metric"><span>Compliance %</span><strong>89%</strong></div>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={slaData} margin={{ top: 20, right: 15, left: 15, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3441" strokeWidth={1.5} />
              <XAxis dataKey="year" stroke="#9ca3af" fontSize={13} fontWeight={500} />
              <YAxis domain={[85, 95]} stroke="#9ca3af" fontSize={13} fontWeight={500} label={{ value: 'Percentage', angle: -90, position: 'insideLeft', offset: 10, style: { fill: '#9ca3af', fontSize: 12 } }} />
              <Tooltip contentStyle={{ backgroundColor: '#1a1f2e', border: '1px solid #2a3441', borderRadius: '8px', fontSize: '13px' }} />
              <Line type="monotone" dataKey="value" stroke="#facc15" strokeWidth={3.5} dot={{ fill: '#facc15', r: 6, strokeWidth: 2, stroke: '#facc15' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3>Escalations</h3>
          <div className="signal bad">● Increasing</div>
          <div className="metric"><span>Number</span><strong>37</strong></div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={escalationsData} margin={{ top: 20, right: 15, left: 15, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3441" strokeWidth={1.5} />
              <XAxis dataKey="year" stroke="#9ca3af" fontSize={13} fontWeight={500} />
              <YAxis domain={[0, 40]} stroke="#9ca3af" fontSize={13} fontWeight={500} label={{ value: 'Count', angle: -90, position: 'insideLeft', offset: 10, style: { fill: '#9ca3af', fontSize: 12 } }} />
              <Tooltip contentStyle={{ backgroundColor: '#1a1f2e', border: '1px solid #2a3441', borderRadius: '8px', fontSize: '13px' }} />
              <Bar dataKey="value" fill="#ef4444" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3>Rework / Defect Rate</h3>
          <div className="signal warn">● Rising</div>
          <div className="metric"><span>Defect Rate</span><strong>6.8%</strong></div>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={reworkData} margin={{ top: 20, right: 15, left: 15, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3441" strokeWidth={1.5} />
              <XAxis dataKey="year" stroke="#9ca3af" fontSize={13} fontWeight={500} />
              <YAxis domain={[0, 8]} stroke="#9ca3af" fontSize={13} fontWeight={500} label={{ value: 'Percentage', angle: -90, position: 'insideLeft', offset: 10, style: { fill: '#9ca3af', fontSize: 12 } }} />
              <Tooltip formatter={(value) => `${value}%`} contentStyle={{ backgroundColor: '#1a1f2e', border: '1px solid #2a3441', borderRadius: '8px', fontSize: '13px' }} />
              <Line type="monotone" dataKey="value" stroke="#facc15" strokeWidth={3.5} dot={{ fill: '#facc15', r: 6, strokeWidth: 2, stroke: '#facc15' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3>Delivery Confidence Index</h3>
          <div className="signal warn">● Watch closely</div>
          <div className="metric"><span>Score</span><strong>74 / 100</strong></div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={confidenceData} margin={{ top: 20, right: 15, left: 15, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3441" strokeWidth={1.5} />
              <XAxis dataKey="year" stroke="#9ca3af" fontSize={13} fontWeight={500} />
              <YAxis domain={[0, 100]} stroke="#9ca3af" fontSize={13} fontWeight={500} label={{ value: 'Score', angle: -90, position: 'insideLeft', offset: 10, style: { fill: '#9ca3af', fontSize: 12 } }} />
              <Tooltip contentStyle={{ backgroundColor: '#1a1f2e', border: '1px solid #2a3441', borderRadius: '8px', fontSize: '13px' }} />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {confidenceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
