import React, { useState, useEffect } from 'react';
import { Play, Copy, Check, Terminal, Sparkles, Code, FileCode, Flame, RefreshCw, Cpu, Layers } from 'lucide-react';

const codeSnippets = [
  {
    id: 'developer_ts',
    filename: 'Developer.ts',
    lang: 'TypeScript',
    badgeColor: '#3178c6',
    icon: 'ts',
    code: `interface EngineerProfile {
  name: string;
  role: string;
  specialization: string[];
  coreValues: string[];
  availableForHire: boolean;
}

export const helmyWahyudi: EngineerProfile = {
  name: "Helmy Wahyudi",
  role: "Full-Stack Engineer & SAP ABAP Consultant",
  specialization: [
    "Laravel (PHP) & Clean Architecture",
    "SAP S/4HANA & WRICEF Customization",
    "React.js, Next.js & Modern UI/UX",
    "High-Performance Database (MySQL/MariaDB)"
  ],
  coreValues: ["Pixel Precision", "Scalable Systems", "Clean Code"],
  availableForHire: true
};

export function buildScalableSolution(goal: string) {
  return \`Engineering \${goal} with zero compromise on quality.\`;
}`,
    consoleOutput: `[INFO] Initializing Helmy Wahyudi Profile Context...
✓ Typecheck passed: 0 errors, strict mode ON.
✓ Exported 'helmyWahyudi' instance (Memory: 12.4 MB)
➜ Status: Ready to engineer high-impact solutions!`
  },
  {
    id: 'enterprise_php',
    filename: 'OrderService.php',
    lang: 'PHP / Laravel',
    badgeColor: '#f43f5e',
    icon: 'php',
    code: `<?php

namespace App\\Services\\Enterprise;

use App\\Models\\Order;
use App\\Events\\OrderProcessed;
use Illuminate\\Support\\Facades\\DB;

class OrderService
{
    /**
     * Process high-volume enterprise transactions atomically.
     */
    public function processBatchOrder(array $payload): Order
    {
        return DB::transaction(function () use ($payload) {
            $order = Order::create([
                'reference' => 'ORD-' . strtoupper(uniqid()),
                'status'    => 'CONFIRMED',
                'amount'    => $payload['amount'],
                'metrics'   => json_encode($payload['metrics']),
            ]);

            event(new OrderProcessed($order));
            return $order;
        }, attempts: 5);
    }
}`,
    consoleOutput: `[PHP 8.3] Executing OrderServiceTest...
✓ DB Transaction committed (took 4.2ms)
✓ Dispatched OrderProcessed event to queue [high-priority]
➜ Batch Order ORD-668A7F created successfully.`
  },
  {
    id: 'sap_abap',
    filename: 'Z_SALES_KPI.abap',
    lang: 'SAP ABAP',
    badgeColor: '#0284c7',
    icon: 'abap',
    code: `*----------------------------------------------------------------------*
* Program: Z_SALES_KPI - S/4HANA WRICEF Real-Time Analytics
* Author : Helmy Wahyudi (SAP ABAP Specialist)
*----------------------------------------------------------------------*
REPORT z_sales_kpi.

DATA: lt_vbak TYPE STANDARD TABLE OF vbak,
      ls_vbak TYPE vbak.

SELECT vbeln, erdat, netwr, waerk
  FROM vbak
  INTO TABLE @lt_vbak
  UP TO 100 ROWS
  WHERE erdat GE @( sy-datum - 30 ).

IF sy-subrc = 0.
  cl_salv_table=>factory(
    IMPORTING r_salv_table = DATA(lo_alv)
    CHANGING  t_table      = lt_vbak ).
  
  lo_alv->get_functions( )->set_all( abap_true ).
  lo_alv->display( ).
ENDIF.`,
    consoleOutput: `[SAP S/4HANA Kernel 7.89] Program Z_SALES_KPI compiled.
✓ OpenSQL: Fetched 100 records from VBAK table (3.1ms)
✓ ALV Grid Display initialized with full toolbar functions.
➜ Return Code: SY-SUBRC = 0 (SUCCESS)`
  },
  {
    id: 'analytics_py',
    filename: 'ai_optimizer.py',
    lang: 'Python',
    badgeColor: '#eab308',
    icon: 'py',
    code: `import numpy as np
import time

class SystemOptimizer:
    def __init__(self, system_name: str):
        self.system = system_name
        self.performance_index = 0.998

    def run_benchmark(self, request_count: int = 50_000) -> dict:
        """Simulate high throughput workload."""
        start_time = time.perf_counter()
        latencies = np.random.normal(loc=12.5, scale=1.2, size=request_count)
        p99_latency = np.percentile(latencies, 99)
        
        return {
            "system": self.system,
            "avg_ms": round(float(np.mean(latencies)), 2),
            "p99_ms": round(float(p99_latency), 2),
            "throughput": f"{request_count / (time.perf_counter() - start_time):,.0f} req/s"
        }

optimizer = SystemOptimizer("Helmy-Core-Engine")
print(optimizer.run_benchmark())`,
    consoleOutput: `[Python 3.12] Running ai_optimizer.py ...
➜ {'system': 'Helmy-Core-Engine', 'avg_ms': 12.48, 'p99_ms': 15.28, 'throughput': '824,310 req/s'}
✓ High throughput benchmark passed SLA requirement (<20ms).`
  }
];

export default function HeroCodeIDE() {
  const [activeTab, setActiveTab] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showConsole, setShowConsole] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentSnippet = codeSnippets[activeTab];

  const handleRunCode = () => {
    setIsRunning(true);
    setShowConsole(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 600);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple token highlighter helper
  const renderHighlightedCode = (rawCode) => {
    const lines = rawCode.split('\n');
    return lines.map((line, lineIdx) => {
      // Highlight comments
      if (line.trim().startsWith('//') || line.trim().startsWith('*') || line.trim().startsWith('#') || line.trim().startsWith('/*') || line.trim().startsWith('*--')) {
        return (
          <div key={lineIdx} className="code-line">
            <span className="line-num">{lineIdx + 1}</span>
            <span style={{ color: '#64748b', fontStyle: 'italic' }}>{line}</span>
          </div>
        );
      }

      // Tokenizing line
      const parts = line.split(/(\b(?:interface|export|const|string|boolean|function|return|namespace|use|class|public|function|event|REPORT|DATA|TYPE|TABLE|OF|SELECT|FROM|INTO|UP|TO|ROWS|WHERE|GE|IF|IMPORTING|CHANGING|import|as|def|self|dict|int|float|round)\b|"[^"]*"|'[^']*'|`[^`]*`|\b\d+\b)/g);

      return (
        <div key={lineIdx} className="code-line">
          <span className="line-num">{lineIdx + 1}</span>
          <span>
            {parts.map((part, pIdx) => {
              if (/^(interface|export|const|function|return|namespace|use|class|public|REPORT|DATA|TYPE|TABLE|OF|SELECT|FROM|INTO|UP|TO|ROWS|WHERE|GE|IF|IMPORTING|CHANGING|import|as|def)$/.test(part)) {
                return <span key={pIdx} style={{ color: '#c084fc', fontWeight: 600 }}>{part}</span>;
              }
              if (/^(string|boolean|int|float|dict|Order|SystemOptimizer)$/.test(part)) {
                return <span key={pIdx} style={{ color: '#38bdf8' }}>{part}</span>;
              }
              if (/^["'`].*["'`]$/.test(part)) {
                return <span key={pIdx} style={{ color: '#34d399' }}>{part}</span>;
              }
              if (/^\d+$/.test(part)) {
                return <span key={pIdx} style={{ color: '#fb923c' }}>{part}</span>;
              }
              if (/\b(buildScalableSolution|processBatchOrder|create|uniqid|factory|set_all|display|run_benchmark|mean|percentile)\b/.test(part)) {
                return <span key={pIdx} style={{ color: '#60a5fa' }}>{part}</span>;
              }
              return <span key={pIdx} style={{ color: 'var(--text-code-normal, #e2e8f0)' }}>{part}</span>;
            })}
          </span>
        </div>
      );
    });
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px',
        background: 'rgba(11, 17, 33, 0.95)',
        border: '1px solid rgba(56, 189, 248, 0.25)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(2, 132, 199, 0.15)',
        overflow: 'hidden',
        backdropFilter: 'blur(16px)',
        fontFamily: 'var(--font-code)'
      }}
    >
      {/* Top IDE Window Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.65rem 1rem',
          background: 'rgba(15, 23, 42, 0.9)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        {/* Window controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
          <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ef4444' }} />
          <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#f59e0b' }} />
          <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10b981' }} />
          <span
            style={{
              marginLeft: '8px',
              fontSize: '0.72rem',
              color: '#94a3b8',
              fontFamily: 'var(--font-tech)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8', display: 'inline-block' }} />
            helmy-dev-workspace
          </span>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={handleRunCode}
            disabled={isRunning}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '0.35rem 0.75rem',
              borderRadius: '7px',
              background: isRunning ? 'rgba(56, 189, 248, 0.2)' : 'linear-gradient(135deg, #0284c7 0%, #7c3aed 100%)',
              border: 'none',
              color: '#ffffff',
              fontSize: '0.75rem',
              fontWeight: 600,
              fontFamily: 'var(--font-tech)',
              cursor: isRunning ? 'wait' : 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 10px rgba(2, 132, 199, 0.3)'
            }}
          >
            {isRunning ? (
              <RefreshCw size={13} className="spin-animation" />
            ) : (
              <Play size={13} fill="#ffffff" />
            )}
            <span>{isRunning ? 'Running...' : 'Run Code'}</span>
          </button>

          <button
            onClick={handleCopyCode}
            title="Copy Code"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '0.35rem 0.6rem',
              borderRadius: '7px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#94a3b8',
              fontSize: '0.72rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {copied ? <Check size={13} color="#10b981" /> : <Copy size={13} />}
          </button>
        </div>
      </div>

      {/* File Tabs */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          background: 'rgba(10, 15, 29, 0.85)',
          padding: '0 0.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          overflowX: 'auto'
        }}
      >
        {codeSnippets.map((item, idx) => {
          const isActive = activeTab === idx;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(idx);
                setShowConsole(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                padding: '0.55rem 0.85rem',
                border: 'none',
                borderBottom: isActive ? `2px solid ${item.badgeColor}` : '2px solid transparent',
                background: isActive ? 'rgba(255, 255, 255, 0.06)' : 'transparent',
                color: isActive ? '#f8fafc' : '#64748b',
                fontSize: '0.76rem',
                fontFamily: 'var(--font-code)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: item.badgeColor
                }}
              />
              <span>{item.filename}</span>
            </button>
          );
        })}
      </div>

      {/* Editor Content Area */}
      <div
        style={{
          flex: 1,
          padding: '0.9rem 1rem',
          overflowY: 'auto',
          fontSize: '0.78rem',
          lineHeight: '1.6',
          position: 'relative'
        }}
      >
        {renderHighlightedCode(currentSnippet.code)}
      </div>

      {/* Interactive Live Console Output Drawer */}
      {showConsole && (
        <div
          style={{
            borderTop: '1px solid rgba(56, 189, 248, 0.3)',
            background: 'rgba(7, 10, 19, 0.95)',
            padding: '0.65rem 0.95rem',
            animation: 'slideUp 0.25s ease-out'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.4rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Terminal size={13} color="#38bdf8" />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#38bdf8', fontFamily: 'var(--font-tech)' }}>
                Terminal Output &bull; {currentSnippet.lang}
              </span>
            </div>
            <button
              onClick={() => setShowConsole(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#64748b',
                fontSize: '0.7rem',
                cursor: 'pointer'
              }}
            >
              ✕ Close
            </button>
          </div>
          <pre
            style={{
              margin: 0,
              fontSize: '0.72rem',
              color: '#34d399',
              whiteSpace: 'pre-wrap',
              fontFamily: 'var(--font-code)',
              lineHeight: 1.45
            }}
          >
            {currentSnippet.consoleOutput}
          </pre>
        </div>
      )}

      {/* Bottom Status Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.35rem 0.9rem',
          background: 'rgba(2, 132, 199, 0.15)',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          fontSize: '0.68rem',
          color: '#94a3b8',
          fontFamily: 'var(--font-tech)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
            git: main
          </span>
          <span>UTF-8</span>
          <span>{currentSnippet.lang}</span>
        </div>
        <div>
          <span>100% Type-Safe &amp; Clean Architecture</span>
        </div>
      </div>

      <style>{`
        .code-line {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .line-num {
          user-select: none;
          color: #475569;
          min-width: 20px;
          text-align: right;
          font-size: 0.72rem;
        }
        .spin-animation {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
