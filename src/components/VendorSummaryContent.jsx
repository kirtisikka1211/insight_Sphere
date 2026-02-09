import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function VendorSummaryContent() {
  const performanceData = [
    { name: 'AstraWorks', value: 99 },
    { name: 'BlueOrbit', value: 98 },
    { name: 'NovaBridge', value: 97 },
    { name: 'CostEdge', value: 78 },
    { name: 'RapidWare', value: 76 }
  ];

  const vendorDistribution = [
    { name: 'Stellar', value: 35, color: '#3b82f6' },
    { name: 'Good', value: 30, color: '#06b6d4' },
    { name: 'At-Risk', value: 20, color: '#f59e0b' },
    { name: 'Blacklisted', value: 15, color: '#8b5cf6' }
  ];

  const costTrendData = [
    { year: '2024 Q1', stellar: 85, delayed: 65, risk: 45 },
    { year: '2024 Q2', stellar: 88, delayed: 68, risk: 42 },
    { year: '2024 Q3', stellar: 90, delayed: 70, risk: 40 },
    { year: '2024 Q4', stellar: 92, delayed: 72, risk: 38 },
    { year: '2025 Q1', stellar: 95, delayed: 75, risk: 35 },
    { year: '2025 Q2', stellar: 98, delayed: 78, risk: 32 }
  ];

  const regionalData = [
    { region: 'North America', vendors: 12 },
    { region: 'Europe', vendors: 8 },
    { region: 'APAC', vendors: 6 },
    { region: 'LATAM', vendors: 3 }
  ];

  const growthData = [
    { quarter: 'Q1 2024', value: 18 },
    { quarter: 'Q2 2024', value: 24 },
    { quarter: 'Q3 2024', value: 26 },
    { quarter: 'Q4 2024', value: 29 },
    { quarter: 'Q1 2025', value: 31 },
    { quarter: 'Q2 2025', value: 34 }
  ];

  return (
    <>
      <strong style={{ fontSize: '15px' }}>Executive Summary</strong>
      <br />
      Consolidated vendor performance analysis across 29 active vendors over the past 2 years, showing strong performance from strategic partners while identifying areas requiring attention.

      <div className="dashboards-vendor">
        <div className="card">
          <h3> Top Vendor Performance (2025)</h3>
          <div className="signal good">● Excellence across board</div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={performanceData} margin={{ top: 20, right: 15, left: 15, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3441" strokeWidth={1.5} />
              <XAxis dataKey="name" stroke="#9ca3af" angle={-15} textAnchor="end" height={60} fontSize={13} fontWeight={500} />
              <YAxis domain={[70, 100]} stroke="#9ca3af" fontSize={13} fontWeight={500} />
              <Tooltip formatter={(value) => `${value}%`} contentStyle={{ backgroundColor: '#1a1f2e', border: '1px solid #2a3441', borderRadius: '8px', fontSize: '13px' }} />
              <Bar dataKey="value" fill="#22c55e" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3>Vendor Distribution by Status</h3>
          <div className="signal good">● Healthy portfolio mix</div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={vendorDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={70}
                fill="#8884d8"
                dataKey="value"
              >
                {vendorDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1a1f2e', border: '1px solid #2a3441', borderRadius: '8px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3> Performance Trends (2024-2025)</h3>
          <div className="signal good">● Improving trajectory</div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={costTrendData} margin={{ top: 20, right: 10, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3441" />
              <XAxis dataKey="year" stroke="#9ca3af" angle={-15} textAnchor="end" height={60} fontSize={12} />
              <YAxis stroke="#9ca3af" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: '#1a1f2e', border: '1px solid #2a3441', borderRadius: '8px' }} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Line type="monotone" dataKey="stellar" stroke="#10b981" strokeWidth={2.5} dot={{ r: 4 }} name="Stellar" />
              <Line type="monotone" dataKey="delayed" stroke="#f59e0b" strokeWidth={2.5} dot={{ r: 4 }} name="Delayed" />
              <Line type="monotone" dataKey="risk" stroke="#ef4444" strokeWidth={2.5} dot={{ r: 4 }} name="At-Risk" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3> Regional Distribution</h3>
          <div className="signal good">● Global presence</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={regionalData} margin={{ top: 20, right: 10, left: 10, bottom: 5 }} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3441" />
              <XAxis type="number" stroke="#9ca3af" fontSize={12} />
              <YAxis dataKey="region" type="category" stroke="#9ca3af" width={110} fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: '#1a1f2e', border: '1px solid #2a3441', borderRadius: '8px' }} />
              <Bar dataKey="vendors" fill="#3b82f6" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3> At-Risk Vendors</h3>
          <div className="signal bad">● Requires attention</div>
          <table>
            <thead>
              <tr><th align="left">Vendor</th><th>2024</th><th>2025</th><th>Trend</th></tr>
            </thead>
            <tbody>
              <tr><td>RapidWare</td><td>89%</td><td>76%</td><td className="bad">↓ -13%</td></tr>
              <tr><td>CloudSprint</td><td>87%</td><td>74%</td><td className="bad">↓ -13%</td></tr>
              <tr><td>FastDeploy</td><td>85%</td><td>79%</td><td className="warn">↓ -6%</td></tr>
            </tbody>
          </table>
          <div className="metric"><span>Action needed</span><strong className="bad">3 vendors</strong></div>
        </div>

        <div className="card">
          <h3> Strategic Partners Growth</h3>
          <div className="signal good">● Strong momentum</div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={growthData} margin={{ top: 20, right: 10, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3441" />
              <XAxis dataKey="quarter" stroke="#9ca3af" angle={-15} textAnchor="end" height={60} fontSize={12} />
              <YAxis domain={[10, 40]} stroke="#9ca3af" fontSize={12} />
              <Tooltip formatter={(value) => `+${value}%`} contentStyle={{ backgroundColor: '#1a1f2e', border: '1px solid #2a3441', borderRadius: '8px' }} />
              <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
          <div className="metric"><span>YoY Growth</span><strong className="good">+89%</strong></div>
        </div>
      </div>
    </>
  );
}
