import React, { useState } from 'react';
import { 
  LayoutDashboard, CloudUpload, FileSearch, ShieldAlert, Wrench, 
  BarChart2, History, Settings, HelpCircle, Bell, ChevronRight, 
  ChevronLeft, FileText, CheckCircle2, AlertCircle, Scale, Users, 
  Download, FileCheck, Menu, X
} from 'lucide-react';

export default function App() {
  const [activeDoc, setActiveDoc] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [toastMsg, setToastMsg] = useState('');

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  const documents = [
    { name: 'Flexible Wo...', size: '312 KB', time: '2 MINS AGO', active: true },
    { name: 'Retail Mana...', size: '245 KB', time: '3 MINS AGO', active: false },
    { name: 'Logistics M...', size: '268 KB', time: '3 MINS AGO', active: false },
    { name: 'Customer S...', size: '255 KB', time: '4 MINS AGO', active: false },
    { name: 'Grievance ...', size: '198 KB', time: '4 MINS AGO', active: false },
  ];

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800 font-sans overflow-hidden">
      
      {toastMsg && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-6 py-3 rounded-lg shadow-xl z-50 transition-all">
          {toastMsg}
        </div>
      )}

      {/* Sidebar */}
      <aside className={`bg-[#171c26] text-slate-300 w-64 flex-shrink-0 flex flex-col transition-all duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full absolute h-full z-20'}`}>
        <div className="h-16 flex items-center px-6 font-bold text-white tracking-wider text-lg border-b border-slate-700/50">
          DecentScore™ <span className="text-xs text-slate-500 ml-2 font-normal">v2.4.1</span>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 flex flex-col gap-1 px-3">
          <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
          <NavItem icon={<CloudUpload size={18} />} label="Uploads" />
          <NavItem icon={<FileSearch size={18} />} label="Clause Scan" active={true} />
          <NavItem icon={<ShieldAlert size={18} />} label="Risk Diagnosis" />
          <NavItem icon={<Wrench size={18} />} label="Fix Pack" />
          <NavItem icon={<BarChart2 size={18} />} label="BU Comparison" />
          <NavItem icon={<History size={18} />} label="Audit Trail" />
        </div>

        <div className="py-4 px-3 border-t border-slate-700/50 flex flex-col gap-1">
          <NavItem icon={<Settings size={18} />} label="Settings" />
          <NavItem icon={<HelpCircle size={18} />} label="Help & Support" />
          <div className="px-3 text-[10px] text-slate-600 mt-4">
            © 2026 DecentScore™<br/>v2.4.1
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden w-full relative">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-6 z-10 flex-shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500 lg:hidden">
              <Menu size={20} />
            </button>
            <h1 className="text-lg font-semibold text-slate-800">Client Demo – Flexible Work Policy Review</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-slate-600"><HelpCircle size={20} /></button>
            <button className="text-slate-400 hover:text-slate-600"><Bell size={20} /></button>
            <div className="flex items-center gap-2 border-l pl-4 border-slate-200">
              <div className="w-8 h-8 rounded bg-slate-800 text-white flex items-center justify-center font-bold text-sm">WX</div>
              <div className="hidden md:block text-sm">
                <div className="font-medium text-slate-800 leading-tight">Wenjing Xu</div>
                <div className="text-[10px] text-slate-500">HR COMPLIANCE LEAD</div>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Main Area */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6 pb-20">
          
          {/* Progress Steps */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 mb-6 flex items-center justify-between overflow-x-auto">
            <div className="flex items-center min-w-max px-2">
              <Step number="1" label="Upload Documents" completed />
              <ChevronRight size={16} className="text-slate-300 mx-4" />
              <Step number="2" label="Clause-level Scan" active />
              <ChevronRight size={16} className="text-slate-300 mx-4" />
              <Step number="3" label="Risk Diagnosis" />
              <ChevronRight size={16} className="text-slate-300 mx-4" />
              <Step number="4" label="Fix Pack" />
              <ChevronRight size={16} className="text-slate-300 mx-4" />
              <Step number="5" label="Audit Trail" />
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            
            {/* Left Column: Uploaded Documents */}
            <div className="xl:col-span-3 flex flex-col gap-4">
              <div className="bg-white rounded-xl border border-slate-200 p-5 flex-1">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-semibold text-slate-800">Uploaded<br/>Documents (5)</h2>
                  <button 
                    onClick={() => showToast('Opening upload dialog...')}
                    className="text-xs font-medium border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-50"
                  >
                    Add<br/>More
                  </button>
                </div>
                <div className="flex flex-col gap-3">
                  {documents.map((doc, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setActiveDoc(idx)}
                      className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${activeDoc === idx ? 'bg-indigo-50/50 border-indigo-200' : 'bg-white border-slate-100 hover:border-slate-300'}`}
                    >
                      <div className={`p-2 rounded ${activeDoc === idx ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500'}`}>
                        <FileText size={18} />
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <div className={`text-sm font-medium truncate ${activeDoc === idx ? 'text-indigo-900' : 'text-slate-700'}`}>{doc.name}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{doc.size} • {doc.time}</div>
                      </div>
                      <CheckCircle2 size={16} className={activeDoc === idx ? 'text-indigo-500' : 'text-slate-200'} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle Column: Core Analysis & Fix Pack */}
            <div className="xl:col-span-6 flex flex-col gap-6">
              
              {/* Clause Analysis Block */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <h2 className="font-semibold text-slate-800">Clause<br/>Analysis</h2>
                    <span className="text-[8px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded uppercase tracking-wider font-semibold border border-slate-200">SELECT<br/>CLAUSE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-slate-700 font-medium cursor-pointer hover:bg-slate-100 transition-colors">
                      Clause 4.2 - Flexible Work Requests
                    </div>
                    <button className="p-1.5 border border-slate-200 rounded-md hover:bg-slate-50 text-slate-600"><ChevronLeft size={16} /></button>
                    <button className="p-1.5 bg-slate-800 border border-slate-800 text-white rounded-md hover:bg-slate-700"><ChevronRight size={16} /></button>
                  </div>
                </div>

                <div className="bg-slate-50 border-l-4 border-slate-300 p-5 rounded-r-lg text-lg text-slate-700 leading-relaxed font-serif mb-8 shadow-inner">
                  Flexible work requests may be approved or rejected at the <span className="bg-rose-100 border-b-2 border-rose-500 font-medium px-1 cursor-pointer">manager's discretion</span>. Employees must ensure that flexible work <span className="bg-orange-50 border-b-2 border-dashed border-orange-400 font-medium px-1 cursor-pointer">does not affect productivity</span>. <span className="bg-rose-50 border-b-2 border-rose-400 font-medium px-1 cursor-pointer">Repeated requests</span> may be considered during <span className="bg-amber-100 border-b-2 border-amber-500 font-medium px-1 cursor-pointer">performance reviews</span>.
                </div>

                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">DETECTED ISSUES</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-[10px] text-slate-500 border-b border-slate-200 uppercase tracking-wider">
                      <tr>
                        <th className="pb-3 font-medium w-1/4">DIMENSION</th>
                        <th className="pb-3 font-medium w-1/3">FLAGGED PHRASE</th>
                        <th className="pb-3 font-medium">RISK / ISSUE</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 flex items-center gap-2 font-medium text-slate-700">
                          <div className="w-2 h-2 rounded-full bg-rose-500"></div> Flexibility
                        </td>
                        <td className="py-4 text-rose-600 font-mono text-xs">"manager's discretion"</td>
                        <td className="py-4 text-slate-600 pr-4">Inconsistent access across business units</td>
                        <td className="py-4 text-right"><span className="bg-rose-100 text-rose-700 text-[10px] font-bold px-2 py-1 rounded">HIGH</span></td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 flex items-center gap-2 font-medium text-slate-700">
                          <div className="w-2 h-2 rounded-full bg-rose-500"></div> Work stress
                        </td>
                        <td className="py-4 text-rose-600 font-mono text-xs">"repeated requests..."</td>
                        <td className="py-4 text-slate-600 pr-4">Discourages employees from requesting support</td>
                        <td className="py-4 text-right"><span className="bg-rose-100 text-rose-700 text-[10px] font-bold px-2 py-1 rounded">HIGH</span></td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 flex items-center gap-2 font-medium text-slate-700">
                          <div className="w-2 h-2 rounded-full bg-orange-400"></div> Work conditions
                        </td>
                        <td className="py-4 text-slate-500 font-mono text-xs">"productivity"</td>
                        <td className="py-4 text-slate-600 pr-4">Narrow framing, missing wellbeing safeguards</td>
                        <td className="py-4 text-right"><span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-1 rounded">MEDIUM</span></td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 flex items-center gap-2 font-medium text-slate-700">
                          <div className="w-2 h-2 rounded-full bg-amber-400"></div> Job security
                        </td>
                        <td className="py-4 text-slate-500 font-mono text-xs">"performance reviews"</td>
                        <td className="py-4 text-slate-600 pr-4">Fear of negative career consequences</td>
                        <td className="py-4 text-right"><span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-1 rounded">MEDIUM</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Fix Pack Block */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-semibold text-slate-800 text-lg">Fix Pack</h2>
                  <button 
                    onClick={() => showToast('Generating new Fix Pack...')}
                    className="bg-slate-700 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
                  >
                    <Wrench size={16} /> Generate Fix Pack
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  <FixCard 
                    icon={<Scale size={20} />} 
                    title="Legal/HR Draft" 
                    desc="Flexible work requests will be considered fairly and consistently. Requests will not be used in performance evaluations." 
                    onClick={() => showToast('Viewing Legal Draft...')}
                  />
                  <FixCard 
                    icon={<FileText size={20} />} 
                    title="Plain-English Version" 
                    desc="We will consider your request for flexible work fairly. Asking will not be held against you in reviews." 
                    onClick={() => showToast('Viewing Plain-English Version...')}
                  />
                  <FixCard 
                    icon={<Users size={20} />} 
                    title="Worker-facing Version" 
                    desc="You can ask for flexible work. We'll be fair and it won't affect your career path." 
                    onClick={() => showToast('Viewing Worker-facing Version...')}
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Score Summary & BU Comparison */}
            <div className="xl:col-span-3 flex flex-col gap-6">
              
              {/* Score Summary */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-semibold text-slate-800">Score Summary</h2>
                  <AlertCircle size={16} className="text-slate-400 cursor-pointer hover:text-slate-600" />
                </div>
                
                <div className="mb-8">
                  <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">BEFORE SCAN</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-sm font-medium text-slate-600">Overall</span>
                    <span className="text-3xl font-bold text-rose-600">42</span>
                    <span className="text-sm text-slate-400">/100</span>
                  </div>
                  <div className="space-y-3">
                    <ScoreBar label="Flexibility" score={35} color="bg-rose-500" />
                    <ScoreBar label="Work stress" score={40} color="bg-rose-500" />
                    <ScoreBar label="Work conditions" score={45} color="bg-orange-500" />
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">AFTER FIX PACK</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-sm font-medium text-slate-600">Overall</span>
                    <span className="text-3xl font-bold text-slate-800">78</span>
                    <span className="text-sm text-slate-400">/100</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full mb-4 overflow-hidden">
                    <div className="bg-slate-800 h-full rounded-full w-[78%]"></div>
                  </div>
                  <div className="space-y-3">
                    <ScoreBar label="Flexibility" score={82} color="bg-slate-700" />
                    <ScoreBar label="Work stress" score={75} color="bg-slate-700" />
                    <ScoreBar label="Work conditions" score={78} color="bg-slate-700" />
                  </div>
                </div>
              </div>

              {/* BU Comparison */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-semibold text-slate-800">BU Comparison</h2>
                  <AlertCircle size={16} className="text-slate-400 cursor-pointer hover:text-slate-600" />
                </div>
                
                <div className="space-y-5">
                  <ComparisonBar label="RETAIL STORES" risk="42% RISK" width="w-[42%]" color="bg-orange-400" />
                  <ComparisonBar label="LOGISTICS" risk="78% RISK" width="w-[78%]" color="bg-rose-600" />
                  <ComparisonBar label="CUSTOMER SERVICE" risk="46% RISK" width="w-[46%]" color="bg-orange-500" />
                </div>

                <button 
                  onClick={() => showToast('Loading full comparison data...')}
                  className="w-full mt-6 py-2.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors flex justify-center items-center gap-1"
                >
                  View full comparison <ChevronRight size={16} />
                </button>
              </div>

            </div>
          </div>

          {/* Bottom Audit Trail */}
          <div className="mt-6 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <h2 className="font-semibold text-slate-800 text-lg">Disclosure-grade Audit Trail</h2>
                <AlertCircle size={16} className="text-slate-400" />
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => showToast('Exporting audit report...')}
                  className="text-sm font-medium border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-50 flex items-center gap-2 text-slate-700"
                >
                  <Download size={16} /> Export
                </button>
                <button 
                  onClick={() => showToast('Viewing full history...')}
                  className="text-sm font-medium border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-50 text-slate-700"
                >
                  Full History
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left whitespace-nowrap">
                <thead className="text-[10px] text-slate-500 bg-slate-50 border-y border-slate-200 uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4 font-medium rounded-tl-lg">VERSION</th>
                    <th className="py-3 px-4 font-medium">DESCRIPTION</th>
                    <th className="py-3 px-4 font-medium">REVIEWER</th>
                    <th className="py-3 px-4 font-medium">DATE & TIME</th>
                    <th className="py-3 px-4 font-medium">STATUS</th>
                    <th className="py-3 px-4 font-medium rounded-tr-lg">NOTES</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-medium text-slate-700">v1.0</td>
                    <td className="py-3 px-4 text-slate-600">Initial automated scan</td>
                    <td className="py-3 px-4 text-slate-600">DecentScore™ AI</td>
                    <td className="py-3 px-4 text-slate-500">23 May 2025, 10:12 AM</td>
                    <td className="py-3 px-4"><span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-1 rounded">REQUIRED</span></td>
                    <td className="py-3 px-4 text-slate-500">Auto-generated findings</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-medium text-slate-700">v1.1</td>
                    <td className="py-3 px-4 text-slate-600">Human review – HR</td>
                    <td className="py-3 px-4 text-slate-600">Priya Nair (HR)</td>
                    <td className="py-3 px-4 text-slate-500">23 May 2025, 11:05 AM</td>
                    <td className="py-3 px-4"><span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-1 rounded">REQUIRED</span></td>
                    <td className="py-3 px-4 text-slate-500">Reviewed issues</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-medium text-slate-700">v1.3</td>
                    <td className="py-3 px-4 text-slate-600">Approved by HR</td>
                    <td className="py-3 px-4 text-slate-600">Anita Rao (HR Lead)</td>
                    <td className="py-3 px-4 text-slate-500">23 May 2025, 11:42 AM</td>
                    <td className="py-3 px-4"><span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded border border-slate-200">APPROVED</span></td>
                    <td className="py-3 px-4 text-slate-500">Policy updated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

// Reusable Components

function NavItem({ icon, label, active }) {
  return (
    <a href="#" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
      active 
        ? 'bg-slate-800 text-white relative after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:h-1/2 after:w-1 after:bg-indigo-400 after:rounded-r-md' 
        : 'hover:bg-slate-800/50 hover:text-white'
    }`}>
      <span className={active ? 'text-indigo-400' : 'text-slate-400'}>{icon}</span>
      {label}
    </a>
  );
}

function Step({ number, label, active, completed }) {
  return (
    <div className={`flex items-center gap-2 ${completed || active ? 'text-slate-800' : 'text-slate-400'}`}>
      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
        active ? 'bg-slate-800 text-white' : 
        completed ? 'bg-slate-200 text-slate-800' : 
        'bg-slate-100 text-slate-400'
      }`}>
        {number}
      </div>
      <span className={`text-sm font-medium ${active ? 'font-bold' : ''}`}>{label}</span>
    </div>
  );
}

function FixCard({ icon, title, desc, onClick }) {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 flex gap-4 items-start hover:border-slate-200 transition-colors">
      <div className="bg-slate-800 text-white p-2.5 rounded shadow-sm">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-slate-800 text-sm">{title}</h4>
        <p className="text-sm text-slate-600 mt-1 leading-snug">{desc}</p>
      </div>
      <button 
        onClick={onClick}
        className="bg-white border border-slate-200 text-slate-700 text-xs font-medium px-4 py-2 rounded shadow-sm hover:bg-slate-50 transition-colors ml-2 flex-shrink-0"
      >
        View
      </button>
    </div>
  );
}

function ScoreBar({ label, score, color }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-slate-600 w-24">{label}</span>
      <div className="font-bold w-8 text-right mr-3 text-slate-700">{score}</div>
      <div className="flex-1 bg-slate-100 h-1.5 rounded-full overflow-hidden">
        <div className={`${color} h-full rounded-full`} style={{ width: `${score}%` }}></div>
      </div>
    </div>
  );
}

function ComparisonBar({ label, risk, width, color }) {
  return (
    <div>
      <div className="flex justify-between text-[10px] font-bold mb-1.5 uppercase tracking-wide">
        <span className="text-slate-500">{label}</span>
        <span className="text-slate-400">{risk}</span>
      </div>
      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
        <div className={`${color} h-full rounded-full ${width}`}></div>
      </div>
    </div>
  );
}