import React, { useState, useEffect, useRef } from 'react';
import { 
  LayoutDashboard, CloudUpload, FileSearch, ShieldAlert, Wrench, 
  BarChart2, History, Settings, HelpCircle, Bell, ChevronRight, 
  ChevronLeft, FileText, CheckCircle2, AlertCircle, Scale, Users, 
  Download, FileCheck, Menu, X, Sparkles, Hand, Play, RotateCcw,
  Check, ArrowRight, ShieldCheck, Eye, TrendingUp, AlertTriangle
} from 'lucide-react';

export default function Dashboard() {
  // Core Presentation Flow State
  const [currentStep, setCurrentStep] = useState(2); // Default to Clause Scan step for high-impact visual landing
  const [activeDoc, setActiveDoc] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth >= 768);
  const [toastMsg, setToastMsg] = useState('');
  
  // Interactive Simulator State
  const [copilotOpen, setCopilotOpen] = useState(true);
  const [gestureMode, setGestureMode] = useState(false); // Gravity well particle attraction mode
  const [selectedHighlight, setSelectedHighlight] = useState(null);
  const [overallScore, setOverallScore] = useState(42);
  const [isFixApplied, setIsFixApplied] = useState(false);

  // Trigger non-intrusive interactive feedback messages
  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  // Live compliance score transformation animation
  const handleApplyFix = () => {
    if (isFixApplied) {
      setOverallScore(42);
      setIsFixApplied(false);
      showToast('Reverted policies to baseline uncompliant state.');
    } else {
      setIsFixApplied(true);
      showToast('Deploying Gemini Copilot Fix Pack... Updating corporate policies.');
      
      // Smoothly animate score from 42 to 78 to maximize presenter visual impact
      let start = 42;
      const end = 78;
      const duration = 1200;
      const stepTime = Math.abs(Math.floor(duration / (end - start)));
      const timer = setInterval(() => {
        start += 1;
        setOverallScore(start);
        if (start >= end) {
          clearInterval(timer);
        }
      }, stepTime);
    }
  };

  // Mock document pipeline populated with parameters from the user report case study
  const documents = [
    { name: 'Draft_Flexible_Work_Policy_v2.docx', size: '312 KB', time: '2 MINS AGO', status: 'scanned', score: 42 },
    { name: 'Retail_Operations_Manual_VIC.pdf', size: '245 KB', time: '3 MINS AGO', status: 'clean', score: 85 },
    { name: 'Logistics_Shift_Roster_EBA_2024.docx', size: '268 KB', time: '3 MINS AGO', status: 'warning', score: 61 },
    { name: 'Customer_Support_Roster_SOP.pdf', size: '255 KB', time: '4 MINS AGO', status: 'clean', score: 92 },
    { name: 'Grievance_Procedure_Global.pdf', size: '198 KB', time: '4 MINS AGO', status: 'scanned', score: 50 },
  ];

  return (
    <div className="ds-light flex h-screen bg-slate-900 text-slate-100 font-sans overflow-hidden">
      
      {/* Toast Notification HUD */}
      {toastMsg && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-2xl z-50 flex items-center gap-2 border border-indigo-400 animate-bounce">
          <Sparkles size={18} className="animate-spin" />
          <span className="font-semibold text-sm">{toastMsg}</span>
        </div>
      )}

      {/* Left Navigation Sidebar */}
      <aside className={`app-sidebar bg-[#0d1117] text-slate-400 w-64 flex-shrink-0 flex flex-col transition-all duration-300 border-r border-slate-800 z-30 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full absolute h-full'}`}>
        <div className="h-16 flex items-center px-6 gap-3 border-b border-slate-800">
          <span className="font-bold text-white tracking-wide text-xl">DecentScore™</span>
          <span className="text-sm font-semibold text-slate-500 tracking-wider">v2.4.1</span>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 flex flex-col gap-1 px-3">
          <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" onClick={() => { setCurrentStep(3); showToast('Switched to Performance Dashboard view.'); }} />
          <NavItem icon={<CloudUpload size={18} />} label="Uploads" active={currentStep === 1} onClick={() => setCurrentStep(1)} />
          <NavItem icon={<FileSearch size={18} />} label="Clause Scan" active={currentStep === 2} onClick={() => setCurrentStep(2)} />
          <NavItem icon={<ShieldAlert size={18} />} label="Risk Diagnosis" active={currentStep === 3} onClick={() => setCurrentStep(3)} />
          <NavItem icon={<Wrench size={18} />} label="Fix Pack" active={currentStep === 4} onClick={() => setCurrentStep(4)} />
          <NavItem icon={<History size={18} />} label="Audit Trail" active={currentStep === 5} onClick={() => setCurrentStep(5)} />
          <div className="h-px bg-slate-800 my-4"></div>
          <span className="px-3 text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-2 block">Australian Compliance</span>
          <div className="px-3 py-2 bg-slate-900/60 rounded-lg border border-slate-800 text-left">
            <div className="flex items-center gap-1.5 text-rose-400 font-semibold text-xs mb-1">
              <AlertCircle size={12} /> Wage Theft Felony
            </div>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Active in Australia since 1 Jan 2025. Corporate fines up to $8.25M. Decent work is now a Board-level duty.
            </p>
          </div>
        </div>

        <div className="p-4 border-t border-slate-800 flex flex-col gap-1">
          <NavItem icon={<Settings size={18} />} label="Settings" onClick={() => showToast('Configuration rules updated')} />
          <NavItem icon={<HelpCircle size={18} />} label="Help & Support" onClick={() => showToast('Connecting to Help Center')} />
          <div className="px-3 text-[10px] text-slate-600 mt-4">
            © 2026 DecentScore™ v2.4.1
          </div>
        </div>
      </aside>

      {/* Main Panel Content Area */}
      <div className="workspace-shell flex-1 flex flex-col overflow-hidden w-full relative bg-[#10141d]">
        
        {/* Top Header Navigation */}
        <header className="app-header h-16 bg-[#0d1117] border-b border-slate-800 flex items-center justify-between px-4 lg:px-6 z-10 flex-shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400">
              <Menu size={20} />
            </button>
            <div className="flex items-center gap-3">
              <h1 className="text-base lg:text-lg font-semibold text-white">Client Demo – Flexible Work Policy Review</h1>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#/" className="hidden md:inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50">
              <ChevronLeft size={14} /> Showcase
            </a>
            <button 
              onClick={() => setCopilotOpen(!copilotOpen)} 
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${copilotOpen ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/30' : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'}`}
            >
              <Sparkles size={14} className={copilotOpen ? 'animate-pulse' : ''} />
              {copilotOpen ? 'Hide Gemini Agent' : 'Show Gemini Agent'}
            </button>
            <button className="text-slate-400 hover:text-white relative"><Bell size={20} /><span className="absolute top-0 right-0 w-1.5 h-1.5 bg-rose-500 rounded-full"></span></button>
            
            <div className="flex items-center gap-2 border-l pl-4 border-slate-200">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm">WX</div>
              <div className="hidden lg:block text-left text-xs">
                <div className="font-semibold text-white">Wenjing Xu</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">HR COMPLIANCE LEAD</div>
              </div>
            </div>
          </div>
        </header>

        {/* Presentation Workspace Canvas */}
        <div className="app-workspace-canvas flex-1 flex overflow-hidden">
          
          {/* Main Stage Panel */}
          <div className="app-main-stage flex-1 overflow-y-auto p-4 lg:p-6 space-y-6">
            
            {/* Top Interactive Flow Steps for smooth presentation navigation */}
            <div className="bg-[#161b22] rounded-xl border border-slate-800 p-4 flex items-center justify-between overflow-x-auto shadow-xl">
              <div className="flex items-center justify-between w-full min-w-max px-2">
                <StepTracker number="1" label="Upload Documents" active={currentStep === 1} completed={currentStep > 1} onClick={() => setCurrentStep(1)} />
                <ChevronRight size={14} className="text-slate-700 mx-3" />
                <StepTracker number="2" label="Clause-level Scan" active={currentStep === 2} completed={currentStep > 2} onClick={() => setCurrentStep(2)} />
                <ChevronRight size={14} className="text-slate-700 mx-3" />
                <StepTracker number="3" label="Risk Diagnosis" active={currentStep === 3} completed={currentStep > 3} onClick={() => setCurrentStep(3)} />
                <ChevronRight size={14} className="text-slate-700 mx-3" />
                <StepTracker number="4" label="Fix Pack" active={currentStep === 4} completed={currentStep > 4} onClick={() => setCurrentStep(4)} />
                <ChevronRight size={14} className="text-slate-700 mx-3" />
                <StepTracker number="5" label="Audit Trail" active={currentStep === 5} completed={currentStep > 5} onClick={() => setCurrentStep(5)} />
              </div>
            </div>

            {/* Step 1: Ingestion / File System Queue */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-[#161b22] border border-slate-800 rounded-2xl p-8 text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                  <CloudUpload size={64} className="mx-auto text-indigo-400 mb-6 animate-bounce" />
                  <h2 className="text-xl font-bold text-white mb-2">Drag & Drop Compliance Target</h2>
                  <p className="text-slate-400 text-sm max-w-md mx-auto mb-6 text-center leading-relaxed">
                    Upload employee handbooks, collective agreements, or manager guidelines to evaluate them against regulatory baselines and wage theft liabilities.
                  </p>
                  <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 bg-slate-900/50 hover:border-indigo-500 transition-all cursor-pointer">
                    <span className="text-indigo-400 font-semibold hover:underline">Click to browse</span> or drag files here
                    <p className="text-slate-500 text-xs mt-2">DOCX, PDF, RTF up to 50MB</p>
                  </div>
                </div>

                <div className="bg-[#161b22] border border-slate-800 rounded-xl p-5 max-w-3xl mx-auto text-left">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Parsing Queue</h3>
                  <div className="space-y-3">
                    {documents.map((doc, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800">
                        <div className="flex items-center gap-3">
                          <FileText size={18} className="text-indigo-400" />
                          <div className="text-left">
                            <p className="text-sm font-medium text-white">{doc.name}</p>
                            <p className="text-xs text-slate-500">{doc.size} • Registered in system</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs bg-indigo-500/10 text-indigo-400 px-2.5 py-0.5 rounded-full border border-indigo-500/25">Ready to Scan</span>
                          <button onClick={() => { setActiveDoc(idx); setCurrentStep(2); }} className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-md font-semibold transition-colors">Analyze</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Clause Scan & Threat Highlight Arena */}
            {currentStep === 2 && (
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 animate-fadeIn">
                
                {/* Left block: Clause Viewer and flag rows */}
                <div className="xl:col-span-8 space-y-6 text-left">
                  <div className="bg-[#161b22] rounded-xl border border-slate-800 p-6 shadow-xl">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-3">
                        <h2 className="font-bold text-white text-base">Clause Analysis</h2>
                        <span className="text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded uppercase font-bold tracking-widest">SELECT CLAUSE</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300 font-semibold">
                          Clause 4.2 - Flexible Work Requests
                        </div>
                        <button className="p-1.5 border border-slate-850 rounded hover:bg-slate-800 text-slate-400"><ChevronLeft size={14} /></button>
                        <button className="p-1.5 bg-slate-800 text-white rounded hover:bg-slate-750"><ChevronRight size={14} /></button>
                      </div>
                    </div>

                    {/* Highly interactive clause highlight rendering matching the user's report scenario */}
                    <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl text-lg text-slate-300 leading-relaxed font-serif mb-6 shadow-inner relative group">
                      <span className="absolute top-2 left-3 text-[10px] font-mono text-slate-700 uppercase">Interactive Preview (Click highlighted text to analyze)</span>
                      Flexible work requests may be approved or rejected at the <span onClick={() => { setSelectedHighlight('discretion'); showToast('Analyzing discretion parameters...'); }} className={`border-b-2 font-semibold px-1 cursor-pointer transition-all ${selectedHighlight === 'discretion' ? 'bg-rose-100 border-rose-600 text-rose-800 shadow-lg' : 'bg-rose-50 border-rose-500 hover:bg-rose-100 text-rose-700'}`}>manager's discretion</span>. Employees must ensure that flexible work <span onClick={() => { setSelectedHighlight('productivity'); showToast('Analyzing productivity clause boundaries...'); }} className={`border-b-2 border-dashed font-semibold px-1 cursor-pointer transition-all ${selectedHighlight === 'productivity' ? 'bg-orange-100 border-orange-600 text-orange-800' : 'bg-orange-50 border-orange-500 hover:bg-orange-100 text-orange-700'}`}>does not affect productivity</span>. <span onClick={() => { setSelectedHighlight('repeated'); showToast('Analyzing repeated request rules...'); }} className={`border-b-2 font-semibold px-1 cursor-pointer transition-all ${selectedHighlight === 'repeated' ? 'bg-rose-100 border-rose-600 text-rose-800' : 'bg-rose-50 border-rose-500 hover:bg-rose-100 text-rose-700'}`}>Repeated requests</span> may be considered during <span onClick={() => { setSelectedHighlight('performance'); showToast('Analyzing performance evaluation link...'); }} className={`border-b-2 font-semibold px-1 cursor-pointer transition-all ${selectedHighlight === 'performance' ? 'bg-amber-100 border-amber-600 text-amber-900' : 'bg-amber-50 border-amber-500 hover:bg-amber-100 text-amber-800'}`}>performance reviews</span>.
                    </div>

                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">DETECTED COMPLIANCE DEFICITS</h3>
                    <div className="space-y-2">
                      <RiskRow 
                        dimension="Flexibility" 
                        phrase="manager's discretion" 
                        issue="Unchecked discretion leading to systemic bias and non-uniform EBA rollout." 
                        level="HIGH" 
                        color="bg-rose-500" 
                        textCol="text-rose-400"
                        active={selectedHighlight === 'discretion'}
                        onClick={() => setSelectedHighlight('discretion')}
                      />
                      <RiskRow 
                        dimension="Work stress" 
                        phrase="repeated requests..." 
                        issue="Creates chilling effect, discouraging workers from exercising statutory rights." 
                        level="HIGH" 
                        color="bg-rose-500" 
                        textCol="text-rose-400"
                        active={selectedHighlight === 'repeated'}
                        onClick={() => setSelectedHighlight('repeated')}
                      />
                      <RiskRow 
                        dimension="Work conditions" 
                        phrase="productivity" 
                        issue="Narrow framing without defined wellness parameters or workload adjustments." 
                        level="MEDIUM" 
                        color="bg-orange-500" 
                        textCol="text-orange-400"
                        active={selectedHighlight === 'productivity'}
                        onClick={() => setSelectedHighlight('productivity')}
                      />
                      <RiskRow 
                        dimension="Job security" 
                        phrase="performance reviews" 
                        issue="Implicit retribution risk violating Section 340 general protection provisions." 
                        level="MEDIUM" 
                        color="bg-amber-500" 
                        textCol="text-amber-400"
                        active={selectedHighlight === 'performance'}
                        onClick={() => setSelectedHighlight('performance')}
                      />
                    </div>
                  </div>
                </div>

                {/* Right side: File system list panel */}
                <div className="xl:col-span-4 space-y-4 text-left">
                  <div className="bg-[#161b22] rounded-xl border border-slate-800 p-5 shadow-xl">
                    <h3 className="text-sm font-semibold text-white mb-4">Document Pipeline</h3>
                    <div className="space-y-3">
                      {documents.map((doc, idx) => (
                        <div 
                          key={idx} 
                          onClick={() => setActiveDoc(idx)}
                          className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${activeDoc === idx ? 'bg-indigo-600/10 border-indigo-500' : 'bg-slate-900 border-slate-850 hover:border-slate-700'}`}
                        >
                          <FileText size={18} className={activeDoc === idx ? 'text-indigo-400' : 'text-slate-500'} />
                          <div className="flex-1 overflow-hidden text-left">
                            <p className="text-xs font-semibold text-white truncate">{doc.name}</p>
                            <p className="text-[10px] text-slate-500">DecentScore: <span className={doc.score < 60 ? 'text-rose-400 font-bold' : 'text-emerald-400 font-bold'}>{doc.score}</span></p>
                          </div>
                          {doc.score >= 80 ? (
                            <ShieldCheck size={16} className="text-emerald-400" />
                          ) : (
                            <AlertTriangle size={16} className="text-rose-400" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#161b22] rounded-xl border border-slate-800 p-5">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Model Rationale</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      This system evaluates corporate policy targets against ILO indicators and Fair Work Act precedent. Narrow domain fine-tuning outperforms general LLMs by preventing hallucinations in audit workflows.
                    </p>
                  </div>
                </div>

              </div>
            )}

            {/* Step 3: Risk Diagnosis (AASB S1, SDG 8.5 Reporting View) */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fadeIn text-left">
                
                {/* Score Summary Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <StatCard title="Overall Score" value={`${overallScore}/100`} desc="General baseline health of analyzed units" icon={<TrendingUp className="text-indigo-400" />} />
                  <StatCard title="EBA Non-Compliance" value="4 High-Risk Clauses" desc="Arbitrary manager discretion hotspots" icon={<AlertTriangle className="text-rose-400 animate-pulse" />} />
                  <StatCard title="UN SDG 8.5 Status" value="Meso-level Misaligned" desc="Dispersed conditions across locations" icon={<Sparkles className="text-indigo-400" />} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Detailed Dimension breakdown (Salazar and Duncan, 2024 Framework) */}
                  <div className="lg:col-span-7 bg-[#161b22] rounded-xl border border-slate-800 p-6">
                    <h3 className="font-bold text-white text-base mb-2">Within-Firm Variation Profile</h3>
                    <p className="text-xs text-slate-500 mb-6">Evaluating policy dispersion across the four core dimensions outlined by Salazar and Duncan (2024).</p>
                    
                    <div className="space-y-6">
                      <RiskBreakdownBar title="Job Security Index" score={35} desc="Managerial over-discretion links policy requests to potential performance rating reductions." color="bg-rose-500" />
                      <RiskBreakdownBar title="Working Conditions Safety" score={45} desc="Incomplete definitions of productivity safeguards leave warehouse and depot units open to burnout." color="bg-orange-500" />
                      <RiskBreakdownBar title="Work Stress Mitigation" score={40} desc="Deterrents on repeated requests restrict general psychological safety measures." color="bg-rose-500" />
                      <RiskBreakdownBar title="Systemic Flexibility" score={60} desc="Notice period flexibility lacks consistent guidelines between regional depots and corporate branches." color="bg-amber-500" />
                    </div>
                  </div>

                  {/* Internal Variation / BU Dispersion Metrics */}
                  <div className="lg:col-span-5 bg-[#161b22] rounded-xl border border-slate-800 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-white text-base mb-2">Business Unit Exposure</h3>
                      <p className="text-xs text-slate-500 mb-6">Conditions differ heavily inside a single firm. This index tracks dispersion metrics between functional divisions.</p>
                      
                      <div className="space-y-5">
                        <ComparisonBar label="RETAIL BRANCHES" risk="42% EXPOSURE" width="w-[42%]" color="bg-orange-400" />
                        <ComparisonBar label="LOGISTICS & DEPOTS" risk="78% EXPOSURE" width="w-[78%]" color="bg-rose-600" />
                        <ComparisonBar label="CUSTOMER SERVICE CALL CENTERS" risk="46% EXPOSURE" width="w-[46%]" color="bg-orange-500" />
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-800 mt-6">
                      <div className="flex items-center gap-2 p-3 bg-slate-900/60 rounded-lg border border-slate-800 text-xs text-indigo-300">
                        <ShieldAlert size={16} className="text-indigo-400" />
                        AASB S1 Sustainability disclosure reporting data ready for audit export.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Fix Pack & Score Simulator Stage */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-fadeIn text-left">
                
                {/* Score Transformation HUD */}
                <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 rounded-2xl border border-indigo-500/30 p-8 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl"></div>
                  
                  <div className="space-y-2 mb-6 md:mb-0">
                    <div className="flex items-center gap-2">
                      <span className="bg-indigo-500/20 text-indigo-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-indigo-400/25">Live Transformation Panel</span>
                      <span className="text-indigo-400 animate-pulse text-xs">• Active</span>
                    </div>
                    <h2 className="text-xl font-bold text-white">Perform AI-Led Transformation</h2>
                    <p className="text-slate-400 text-sm max-w-lg leading-relaxed">
                      Simulate the compliance upgrade live during your pitch. Executing the Fix Pack automatically rebuilds high-risk policy clauses to compliant alternatives, shifting overall score to 78.
                    </p>
                  </div>

                  <div className="flex items-center gap-6 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                    <div className="text-center">
                      <span className="text-[10px] text-slate-500 block uppercase font-bold">Compliance Score</span>
                      <span className={`text-5xl font-extrabold transition-all duration-1000 ${isFixApplied ? 'text-emerald-400 text-shadow-glow' : 'text-rose-500'}`}>
                        {overallScore}
                      </span>
                      <span className="text-xs text-slate-500">/100</span>
                    </div>
                    
                    <button 
                      onClick={handleApplyFix}
                      className={`flex items-center gap-2 px-6 py-4 rounded-xl text-sm font-bold transition-all shadow-xl ${isFixApplied ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20' : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/20'}`}
                    >
                      {isFixApplied ? <RotateCcw size={16} /> : <Sparkles size={16} className="animate-spin" />}
                      {isFixApplied ? 'Reset Baseline' : 'Run Gemini Fix Pack'}
                    </button>
                  </div>
                </div>

                {/* AI Draft Multichannel Copy Outputs */}
                <div className="bg-[#161b22] rounded-xl border border-slate-800 p-6">
                  <h3 className="font-bold text-white text-base mb-6">Generated Multi-channel Redrafts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FixCard 
                      icon={<Scale size={20} />} 
                      title="Legal/HR Draft" 
                      desc="“Flexible work requests will be evaluated objectively based on standard eligibility guidelines. Application history will not affect performance assessments.”" 
                      onClick={() => showToast('Selected Legal Draft')}
                    />
                    <FixCard 
                      icon={<FileText size={20} />} 
                      title="Plain-English Copy" 
                      desc="“We will consider your request for flexible work fairly. Asking for flexible arrangements will not be held against you in reviews.”" 
                      onClick={() => showToast('Selected Plain-English Copy')}
                    />
                    <FixCard 
                      icon={<Users size={20} />} 
                      title="Worker-facing Copy" 
                      desc="“You have the right to request flexible work. We are committed to a fair assessment process that protects your career trajectory.”" 
                      onClick={() => showToast('Selected Worker-facing Copy')}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Audit Ledger History */}
            {currentStep === 5 && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="bg-[#161b22] rounded-xl border border-slate-800 p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                      <h2 className="font-semibold text-white text-base">Disclosure-grade Audit Trail</h2>
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded uppercase font-bold">Secure Ledger</span>
                    </div>
                    <div className="flex gap-3">
                      <button 
                        onClick={() => showToast('Generating signed cryptographic PDF audit report...')}
                        className="text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                      >
                        <Download size={14} /> Export Signed Report
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left whitespace-nowrap">
                      <thead className="text-[10px] text-slate-500 bg-slate-900 border-y border-slate-800 uppercase tracking-widest">
                        <tr>
                          <th className="py-3 px-4 font-semibold">VERSION</th>
                          <th className="py-3 px-4 font-semibold">DESCRIPTION</th>
                          <th className="py-3 px-4 font-semibold">REVIEWER</th>
                          <th className="py-3 px-4 font-semibold">DATE & TIME</th>
                          <th className="py-3 px-4 font-semibold">STATUS</th>
                          <th className="py-3 px-4 font-semibold">AUDIT NOTES</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/80">
                        <tr className="hover:bg-slate-800/30 transition-colors">
                          <td className="py-4 px-4 font-mono font-bold text-indigo-400">v1.3</td>
                          <td className="py-4 px-4 text-white font-medium">Approved by HR Lead</td>
                          <td className="py-4 px-4 text-slate-300">Anita Rao (HR Lead)</td>
                          <td className="py-4 px-4 text-slate-400">23 May 2025, 11:42 AM</td>
                          <td className="py-4 px-4"><span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] font-bold px-2 py-0.5 rounded">APPROVED</span></td>
                          <td className="py-4 px-4 text-slate-400">Clause 4.2 successfully aligned across all BUs.</td>
                        </tr>
                        <tr className="hover:bg-slate-800/30 transition-colors">
                          <td className="py-4 px-4 font-mono text-slate-400">v1.1</td>
                          <td className="py-4 px-4 text-slate-300">Human review – Policy Draft Accepted</td>
                          <td className="py-4 px-4 text-slate-300">Priya Nair (HR)</td>
                          <td className="py-4 px-4 text-slate-400">23 May 2025, 11:05 AM</td>
                          <td className="py-4 px-4"><span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[9px] font-bold px-2 py-0.5 rounded">REQUIRED REVIEW</span></td>
                          <td className="py-4 px-4 text-slate-400">Baseline review completed on the initial ingest.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Panel: Gemini Interactive Particle HUD */}
          {copilotOpen && (
            <div className="app-copilot w-80 lg:w-96 border-l border-slate-800 bg-[#0d1117] flex flex-col flex-shrink-0 animate-slideLeft">
              
              {/* Copilot Header */}
              <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/40">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">GEMINI COPILOT ENGINE</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button 
                    onClick={() => { setGestureMode(!gestureMode); showToast(gestureMode ? 'Cursor attraction off' : 'Attraction mode on! Particles attracted to cursor.'); }}
                    className={`p-1.5 rounded-lg border transition-all ${gestureMode ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'}`}
                    title="Toggle Gravity Attraction on Cursor"
                  >
                    <Hand size={14} />
                  </button>
                  <button onClick={() => setCopilotOpen(false)} className="p-1 rounded hover:bg-slate-800 text-slate-400"><X size={16} /></button>
                </div>
              </div>

              {/* HTML5 Canvas Particle Field */}
              <div className="relative h-48 bg-slate-950 flex flex-col items-center justify-center overflow-hidden border-b border-slate-800 group">
                <ParticleCanvas gestureActive={gestureMode} />
                
                <div className="absolute top-2 left-3 pointer-events-none text-left">
                  <span className="text-[9px] font-mono text-indigo-400/80 tracking-widest uppercase block">PARTICLE CORE FLOW</span>
                  <span className="text-[11px] text-slate-400 font-semibold">Hover to sway energy wave</span>
                </div>

                {gestureMode && (
                  <div className="absolute inset-0 bg-indigo-500/5 pointer-events-none border border-indigo-500/20 flex items-center justify-center animate-pulse">
                    <span className="text-[10px] font-mono text-indigo-300 tracking-wider bg-slate-900/95 px-3 py-1 rounded-full border border-indigo-500/30">Attraction Mode Active</span>
                  </div>
                )}
              </div>

              {/* Real-time Clause Assessment Output */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 text-left">
                
                {selectedHighlight ? (
                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 space-y-3 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">Active Analysis Target</span>
                      <button onClick={() => setSelectedHighlight(null)} className="text-xs text-slate-500 hover:text-slate-300">Clear</button>
                    </div>
                    
                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                      {selectedHighlight === 'discretion' && '"manager\'s discretion"'}
                      {selectedHighlight === 'repeated' && '"repeated requests"'}
                      {selectedHighlight === 'productivity' && '"productivity"'}
                      {selectedHighlight === 'performance' && '"performance reviews"'}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed font-sans font-normal">
                      {selectedHighlight === 'discretion' && "Managerial over-discretion violates systemic fairness guidelines. Leaving decisions completely up to subjective approval paths creates unequal conditions inside the firm."}
                      {selectedHighlight === 'repeated' && "Suggesting that repeated requests are problematic creates significant psychological barriers, making it harder for employees to apply for flexibility initiatives safely."}
                      {selectedHighlight === 'productivity' && "Failing to define clear operational targets for productivity causes high stress and burnout, particularly in warehouse and depot settings."}
                      {selectedHighlight === 'performance' && "Linking flexible request records directly to performance evaluations contradicts General Protection rights under Australian Fair Work regulations."}
                    </p>

                    <div className="pt-2 border-t border-slate-800 flex justify-end">
                      <button 
                        onClick={() => { setCurrentStep(4); showToast('Draft alternatives prepared in Fix Pack.'); }}
                        className="text-[11px] bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-3 py-1.5 rounded-md flex items-center gap-1 transition-all"
                      >
                        Examine Recommended Re-draft <Sparkles size={12} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-4 text-center py-8">
                    <Sparkles size={24} className="mx-auto text-indigo-400/60 mb-3 animate-pulse" />
                    <p className="text-xs text-slate-400 max-w-[200px] mx-auto leading-relaxed text-center">
                      Select any highlighted term in <span className="text-indigo-400 font-semibold cursor-pointer" onClick={() => setCurrentStep(2)}>Clause Scan</span> to trigger automated legal analysis.
                    </p>
                  </div>
                )}

              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

// ==========================================
// Aurora Particle System Component
// ==========================================
function ParticleCanvas({ gestureActive }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = [];
    const particleCount = 45;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        color: i % 3 === 0 ? 'rgba(129, 140, 248, 0.8)' : i % 3 === 1 ? 'rgba(192, 132, 252, 0.8)' : 'rgba(244, 114, 182, 0.8)', 
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        angle: Math.random() * Math.PI * 2,
        speed: 0.02 + Math.random() * 0.03
      });
    }

    let mouse = { x: null, y: null, radius: 80 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.08)';
      ctx.lineWidth = 1.5;
      for (let x = 0; x < width; x += 20) {
        const y = Math.sin(x * 0.01 + Date.now() * 0.002) * 15 + height / 2;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      particles.forEach((p, idx) => {
        p.angle += p.speed;
        p.x += p.vx + Math.sin(p.angle) * 0.2;
        p.y += p.vy + Math.cos(p.angle) * 0.2;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const limit = gestureActive ? mouse.radius * 1.5 : mouse.radius;

          if (distance < limit) {
            const force = (limit - distance) / limit;
            const directionX = dx / distance;
            const directionY = dy / distance;
            
            p.x += directionX * force * (gestureActive ? 3.5 : 2.0);
            p.y += directionY * force * (gestureActive ? 3.5 : 2.0);
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = gestureActive ? 12 : 6;
        ctx.fill();
        ctx.shadowBlur = 0; 

        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (dist < 45) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(147, 51, 234, ${0.12 * (1 - dist / 45)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [gestureActive]);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
}

// ==========================================
// Auxiliary Subcomponents
// ==========================================

function NavItem({ icon, label, active, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all ${
        active 
          ? 'bg-indigo-600/10 border border-indigo-500/20 text-white relative' 
          : 'hover:bg-slate-850 hover:text-white border border-transparent text-slate-400'
      }`}
    >
      <span className={active ? 'text-indigo-400' : 'text-slate-500'}>{icon}</span>
      {label}
    </button>
  );
}

function StepTracker({ number, label, active, completed, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all border ${
        active ? 'bg-indigo-600/10 border-indigo-500/30 text-white font-bold animate-pulse' : 
        completed ? 'border-transparent text-slate-300 hover:bg-slate-800' : 
        'border-transparent text-slate-500 hover:bg-slate-800'
      }`}
    >
      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
        active ? 'bg-indigo-50 text-white shadow-md shadow-indigo-500/30' : 
        completed ? 'bg-slate-800 text-indigo-400' : 
        'bg-slate-900 text-slate-500 border border-slate-800'
      }`}>
        {number}
      </div>
      <span className="text-xs tracking-wide">{label}</span>
    </button>
  );
}

function RiskRow({ dimension, phrase, issue, level, color, textCol, active, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`grid grid-cols-12 gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
        active ? 'bg-indigo-950/40 border-indigo-500/50 shadow-md scale-[1.01]' : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
      }`}
    >
      <div className="col-span-3 flex items-center gap-2 font-semibold text-xs text-white">
        <div className={`w-2.5 h-2.5 rounded-full ${color}`}></div>
        {dimension}
      </div>
      <div className={`col-span-3 font-mono text-xs ${textCol}`}>"{phrase}"</div>
      <div className="col-span-4 text-xs text-slate-400 text-left">{issue}</div>
      <div className="col-span-2 text-right">
        <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${color === 'bg-rose-500' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'}`}>
          {level}
        </span>
      </div>
    </div>
  );
}

function StatCard({ title, value, desc, icon }) {
  return (
    <div className="bg-[#161b22] border border-slate-800 rounded-xl p-5 text-left relative overflow-hidden flex items-center justify-between shadow-lg">
      <div className="space-y-1">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">{title}</span>
        <span className="text-2xl font-extrabold text-white block">{value}</span>
        <span className="text-xs text-slate-500 block">{desc}</span>
      </div>
      <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
        {icon}
      </div>
    </div>
  );
}

function RiskBreakdownBar({ title, score, desc, color }) {
  return (
    <div className="text-left space-y-1">
      <div className="flex justify-between items-center text-xs">
        <span className="font-semibold text-white">{title}</span>
        <span className="font-bold text-slate-400">{score}/100</span>
      </div>
      <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
        <div className={`${color} h-full rounded-full`} style={{ width: `${score}%` }}></div>
      </div>
      <p className="text-[11px] text-slate-500 leading-normal">{desc}</p>
    </div>
  );
}

function FixCard({ icon, title, desc, onClick }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between text-left hover:border-slate-700 transition-all">
      <div>
        <div className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 w-fit p-2 rounded-lg mb-3">
          {icon}
        </div>
        <h4 className="font-bold text-white text-sm mb-1">{title}</h4>
        <p className="text-xs text-slate-400 leading-relaxed mb-4">{desc}</p>
      </div>
      <button 
        onClick={onClick}
        className="w-full bg-slate-850 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-semibold py-2 rounded-lg transition-all"
      >
        Preview Draft
      </button>
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
      <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
        <div className={`${color} h-full rounded-full ${width}`}></div>
      </div>
    </div>
  );
}
