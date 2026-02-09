import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function CFOContent() {
  const revenueData = [
    { year: '2023', value: 120 },
    { year: '2024', value: 145 },
    { year: '2025', value: 175 }
  ];

  const profitData = [
    { year: '2023', value: 24 },
    { year: '2024', value: 23 },
    { year: '2025', value: 21 }
  ];

  const costData = [
    { year: '2023', value: 70 },
    { year: '2024', value: 82 },
    { year: '2025', value: 92 }
  ];

  const cashFlowData = [
    { year: '2023', value: 21.6 },
    { year: '2024', value: 25.8 },
    { year: '2025', value: 30.6 }
  ];

  const dsoData = [
    { year: '2023', value: 52 },
    { year: '2024', value: 61 },
    { year: '2025', value: 68 }
  ];

  const riskData = [
    { year: '2023', value: 35 },
    { year: '2024', value: 38 },
    { year: '2025', value: 41 }
  ];

  return (
    <>
      <strong style={{ fontSize: '15px' }}>Executive Summary</strong>
      <br />
      Revenue has grown consistently over the last three years, however margin expansion has slowed and cash efficiency requires attention.

      <div className="dashboards">
        <div className="card">
          <h3>Revenue Trajectory</h3>
          <div className="signal good">● Healthy growth</div>
          <div className="metric"><span> CAGR</span><strong>18%</strong></div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={revenueData} margin={{ top: 20, right: 15, left: 15, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3441" strokeWidth={1.5} />
              <XAxis dataKey="year" stroke="#9ca3af" fontSize={13} fontWeight={500} />
              <YAxis stroke="#9ca3af" fontSize={13} fontWeight={500} label={{ value: 'Dollars (M)', angle: -90, position: 'insideLeft', offset: 10, style: { fill: '#9ca3af', fontSize: 12 } }} />
              <Tooltip formatter={(value) => `$${value}M`} contentStyle={{ backgroundColor: '#1a1f2e', border: '1px solid #2a3441', borderRadius: '8px', fontSize: '13px' }} />
              <Bar dataKey="value" fill="#22c55e" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3>Profitability</h3>
          <div className="signal warn">● Margin pressure</div>
          <div className="metric"><span>EBITDA Margin</span><strong>21%</strong></div>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={profitData} margin={{ top: 20, right: 15, left: 15, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3441" strokeWidth={1.5} />
              <XAxis dataKey="year" stroke="#9ca3af" fontSize={13} fontWeight={500} />
              <YAxis domain={[15, 30]} stroke="#9ca3af" fontSize={13} fontWeight={500} label={{ value: 'Percentage', angle: -90, position: 'insideLeft', offset: 10, style: { fill: '#9ca3af', fontSize: 12 } }} />
              <Tooltip formatter={(value) => `${value}%`} contentStyle={{ backgroundColor: '#1a1f2e', border: '1px solid #2a3441', borderRadius: '8px', fontSize: '13px' }} />
              <Line type="monotone" dataKey="value" stroke="#facc15" strokeWidth={3.5} dot={{ fill: '#facc15', r: 6, strokeWidth: 2, stroke: '#facc15' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3>Cost Structure</h3>
          <div className="signal warn">● Costs scaling</div>
          <div className="metric"><span>Total Opex</span><strong>$92M</strong></div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={costData} margin={{ top: 20, right: 15, left: 15, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3441" strokeWidth={1.5} />
              <XAxis dataKey="year" stroke="#9ca3af" fontSize={13} fontWeight={500} />
              <YAxis stroke="#9ca3af" fontSize={13} fontWeight={500} label={{ value: 'Dollars (M)', angle: -90, position: 'insideLeft', offset: 10, style: { fill: '#9ca3af', fontSize: 12 } }} />
              <Tooltip formatter={(value) => `$${value}M`} contentStyle={{ backgroundColor: '#1a1f2e', border: '1px solid #2a3441', borderRadius: '8px', fontSize: '13px' }} />
              <Bar dataKey="value" fill="#facc15" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3>Cash Flow</h3>
          <div className="signal bad">● Cash strain</div>
          <div className="metric"><span>Free Cash Flow</span><strong>$30.6M</strong></div>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={cashFlowData} margin={{ top: 20, right: 15, left: 15, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3441" strokeWidth={1.5} />
              <XAxis dataKey="year" stroke="#9ca3af" fontSize={13} fontWeight={500} />
              <YAxis stroke="#9ca3af" fontSize={13} fontWeight={500} label={{ value: 'Dollars (M)', angle: -90, position: 'insideLeft', offset: 10, style: { fill: '#9ca3af', fontSize: 12 } }} />
              <Tooltip formatter={(value) => `$${value}M`} contentStyle={{ backgroundColor: '#1a1f2e', border: '1px solid #2a3441', borderRadius: '8px', fontSize: '13px' }} />
              <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={3.5} dot={{ fill: '#22c55e', r: 6, strokeWidth: 2, stroke: '#22c55e' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3>Working Capital</h3>
          <div className="signal warn">● DSO rising</div>
          <div className="metric"><span>DSO</span><strong>68 days</strong></div>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={dsoData} margin={{ top: 20, right: 15, left: 15, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3441" strokeWidth={1.5} />
              <XAxis dataKey="year" stroke="#9ca3af" fontSize={13} fontWeight={500} />
              <YAxis domain={[40, 75]} stroke="#9ca3af" fontSize={13} fontWeight={500} label={{ value: 'Days', angle: -90, position: 'insideLeft', offset: 10, style: { fill: '#9ca3af', fontSize: 12 } }} />
              <Tooltip formatter={(value) => `${value} days`} contentStyle={{ backgroundColor: '#1a1f2e', border: '1px solid #2a3441', borderRadius: '8px', fontSize: '13px' }} />
              <Line type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={3.5} dot={{ fill: '#ef4444', r: 6, strokeWidth: 2, stroke: '#ef4444' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3>Risk Exposure</h3>
          <div className="signal warn">● Concentration risk</div>
          <div className="metric"><span>Top 3 Revenue</span><strong>41%</strong></div>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={riskData} margin={{ top: 20, right: 15, left: 15, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3441" strokeWidth={1.5} />
              <XAxis dataKey="year" stroke="#9ca3af" fontSize={13} fontWeight={500} />
              <YAxis domain={[30, 45]} stroke="#9ca3af" fontSize={13} fontWeight={500} label={{ value: 'Percentage', angle: -90, position: 'insideLeft', offset: 10, style: { fill: '#9ca3af', fontSize: 12 } }} />
              <Tooltip formatter={(value) => `${value}%`} contentStyle={{ backgroundColor: '#1a1f2e', border: '1px solid #2a3441', borderRadius: '8px', fontSize: '13px' }} />
              <Line type="monotone" dataKey="value" stroke="#facc15" strokeWidth={3.5} dot={{ fill: '#facc15', r: 6, strokeWidth: 2, stroke: '#facc15' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
