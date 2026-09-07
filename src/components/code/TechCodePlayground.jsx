import React, { useState } from 'react';
import { Play, Check, Copy, Terminal, Server, Code2, Database, Cpu, Sparkles, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';

const techPlaygroundData = [
  {
    id: 'laravel',
    name: 'Laravel (PHP)',
    category: 'Backend & Enterprise',
    badge: 'Enterprise Standard',
    color: '#f43f5e',
    icon: <Server size={18} />,
    metrics: { tests: '24/24', coverage: '98%', latency: '3.8ms', grade: 'A+ (Clean Arch)' },
    codeSnippet: `// app/Domain/Inventory/Actions/FulfillOrderAction.php
namespace App\\Domain\\Inventory\\Actions;

use App\\Models\\Order;
use App\\Services\\AuditLogger;
use Illuminate\\Support\\Facades\\DB;

class FulfillOrderAction
{
    public function execute(Order $order): bool
    {
        return DB::transaction(function () use ($order) {
            $order->update(['status' => 'DISPATCHED']);
            AuditLogger::record("Order #{$order->id} fulfilled");
            return true;
        });
    }
}`,
    explanation: 'Arsitektur domain-driven Laravel dengan transaksi ACID terisolasi, event dispatcher terintegrasi, dan audit trail otomatis.'
  },
  {
    id: 'abap',
    name: 'SAP ABAP (S/4HANA)',
    category: 'Enterprise ERP',
    badge: 'WRICEF Specialist',
    color: '#0284c7',
    icon: <Cpu size={18} />,
    metrics: { tests: '18/18', coverage: '100%', latency: '2.4ms', grade: 'S/4HANA Certified' },
    codeSnippet: `* Enhanced BAdI Implementation for Invoice Validation
METHOD if_ex_me_process_po_cust~check.
  DATA: lt_items TYPE purchase_order_items,
        ls_item  TYPE purchase_order_item.

  lt_items = im_header->get_items( ).
  LOOP AT lt_items INTO ls_item.
    IF ls_item-netpr LE 0.
      ch_failed = abap_true.
      MESSAGE e001(zmm_msg) WITH ls_item-ebelp.
    ENDIF.
  ENDLOOP.
ENDMETHOD.`,
    explanation: 'Implementasi BAdI S/4HANA & User-Exit berstandar SAP untuk validasi proses bisnis, ALV reporting cepat, dan integrasi modul FICO/MM/PP/HR.'
  },
  {
    id: 'react',
    name: 'React.js & Next.js',
    category: 'Frontend & UI Engine',
    badge: 'Modern Reactive UX',
    color: '#38bdf8',
    icon: <Code2 size={18} />,
    metrics: { tests: '32/32', coverage: '99%', latency: '1.2ms (60 FPS)', grade: 'Zero-Re-render' },
    codeSnippet: `// hooks/useEnterpriseStream.ts
import { useState, useEffect, useTransition } from 'react';

export function useEnterpriseStream<T>(fetcher: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    let isMounted = true;
    startTransition(async () => {
      const res = await fetcher();
      if (isMounted) setData(res);
    });
    return () => { isMounted = false; };
  }, []);

  return { data, isPending };
}`,
    explanation: 'Pola hooks React modern dengan concurrent transition untuk antarmuka non-blocking yang sangat mulus pada dashboard analitik data besar.'
  },
  {
    id: 'database',
    name: 'MySQL & MariaDB',
    category: 'Database & Performance',
    badge: 'High-Throughput',
    color: '#10b981',
    icon: <Database size={18} />,
    metrics: { tests: '12/12', coverage: '100%', latency: '0.9ms', grade: 'Indexed & Optimized' },
    codeSnippet: `-- Optimized Indexing & Composite Partitioning
EXPLAIN ANALYZE
SELECT 
  o.id, o.customer_id, o.total_amount,
  SUM(p.price * oi.quantity) AS calculated_total
FROM enterprise_orders o
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id
WHERE o.created_at >= NOW() - INTERVAL 30 DAY
  AND o.status = 'COMPLETED'
GROUP BY o.id, o.customer_id;`,
    explanation: 'Skema database relasional ternormalisasi dengan composite indexing dan query execution plan berkecepatan sub-milidetik.'
  },
  {
    id: 'vue_filament',
    name: 'Vue.js & Filament',
    category: 'Admin & Reactive Web',
    badge: 'Rapid Development',
    color: '#a855f7',
    icon: <Sparkles size={18} />,
    metrics: { tests: '20/20', coverage: '97%', latency: '4.1ms', grade: 'Enterprise Ready' },
    codeSnippet: `// app/Filament/Resources/KPIReportResource.php
public static function table(Table $table): Table
{
    return $table
        ->columns([
            Tables\\Columns\\TextColumn::make('division_name')->sortable()->searchable(),
            Tables\\Columns\\BadgeColumn::make('kpi_score')->colors(['success' => fn ($state) => $state >= 90]),
            Tables\\Columns\\TextColumn::make('updated_at')->dateTime()
        ])
        ->filters([
            Tables\\Filters\\SelectFilter::make('division')->relationship('division', 'name')
        ]);
}`,
    explanation: 'Dashboard manajemen data dinamis dengan tabel real-time, filter instan, dan otorisasi role berbasis RBAC yang siap produksi.'
  }
];

export default function TechCodePlayground({ playClickSound, playHoverSound }) {
  const [selectedTech, setSelectedTech] = useState(techPlaygroundData[0]);
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleSelectTech = (tech) => {
    if (playClickSound) playClickSound();
    setSelectedTech(tech);
    setTestResult(null);
  };

  const handleRunTest = () => {
    if (playClickSound) playClickSound();
    setIsTesting(true);
    setTimeout(() => {
      setIsTesting(false);
      setTestResult({
        timestamp: new Date().toLocaleTimeString(),
        passed: true,
        summary: `All ${selectedTech.metrics.tests} test assertions passed successfully in ${selectedTech.metrics.latency}`
      });
    }, 700);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(selectedTech.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        fontFamily: 'var(--font-tech)'
      }}
    >
      {/* Top Language Selector Tabs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          background: 'rgba(15, 23, 42, 0.04)',
          padding: '0.4rem',
          borderRadius: '16px',
          border: '1px solid rgba(15, 23, 42, 0.08)'
        }}
      >
        {techPlaygroundData.map((tech) => {
          const isSelected = selectedTech.id === tech.id;
          return (
            <button
              key={tech.id}
              onClick={() => handleSelectTech(tech)}
              onMouseEnter={playHoverSound}
              style={{
                flex: 1,
                minWidth: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '0.65rem 0.9rem',
                borderRadius: '12px',
                border: 'none',
                background: isSelected ? 'linear-gradient(135deg, #0284c7 0%, #7c3aed 100%)' : 'transparent',
                color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: isSelected ? 700 : 500,
                fontSize: '0.82rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: isSelected ? '0 4px 15px rgba(2, 132, 199, 0.3)' : 'none'
              }}
            >
              <span>{tech.name}</span>
            </button>
          );
        })}
      </div>

      {/* Code Card Window */}
      <div
        style={{
          borderRadius: '20px',
          background: 'rgba(11, 17, 33, 0.96)',
          border: '1px solid rgba(56, 189, 248, 0.22)',
          boxShadow: '0 20px 45px rgba(0, 0, 0, 0.4)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Window Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem 1.1rem',
            background: 'rgba(15, 23, 42, 0.9)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
            <span
              style={{
                marginLeft: '6px',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#f8fafc',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              {selectedTech.name} &bull; <span style={{ color: '#94a3b8', fontWeight: 400 }}>{selectedTech.category}</span>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={handleRunTest}
              disabled={isTesting}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '0.35rem 0.75rem',
                borderRadius: '8px',
                background: isTesting ? 'rgba(56, 189, 248, 0.2)' : 'linear-gradient(135deg, #0284c7 0%, #7c3aed 100%)',
                border: 'none',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: isTesting ? 'wait' : 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(2, 132, 199, 0.25)'
              }}
            >
              <Zap size={13} fill="#ffffff" />
              <span>{isTesting ? 'Testing Suite...' : 'Run Unit Tests'}</span>
            </button>

            <button
              onClick={handleCopyCode}
              title="Copy Snippet"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '0.35rem 0.55rem',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#94a3b8',
                fontSize: '0.72rem',
                cursor: 'pointer'
              }}
            >
              {copied ? <Check size={13} color="#10b981" /> : <Copy size={13} />}
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div
          style={{
            padding: '1.1rem 1.25rem',
            background: 'transparent',
            overflowX: 'auto'
          }}
        >
          <pre
            style={{
              margin: 0,
              fontFamily: 'var(--font-code)',
              fontSize: '0.8rem',
              lineHeight: 1.6,
              color: '#e2e8f0',
              whiteSpace: 'pre-wrap'
            }}
          >
            {selectedTech.codeSnippet}
          </pre>
        </div>

        {/* Live Test Benchmark Result Banner */}
        {testResult && (
          <div
            style={{
              padding: '0.75rem 1.1rem',
              background: 'rgba(16, 185, 129, 0.12)',
              borderTop: '1px solid rgba(16, 185, 129, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              animation: 'fadeIn 0.25s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="#10b981" />
              <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>
                {testResult.summary}
              </span>
            </div>
            <span style={{ fontSize: '0.7rem', color: '#6ee7b7', fontFamily: 'var(--font-code)' }}>
              {testResult.timestamp}
            </span>
          </div>
        )}

        {/* Tech Performance Metrics Footer */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
            gap: '0.5rem',
            padding: '0.75rem 1.1rem',
            background: 'rgba(15, 23, 42, 0.95)',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Test Coverage</span>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#38bdf8' }}>{selectedTech.metrics.coverage}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Execution Speed</span>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#34d399' }}>{selectedTech.metrics.latency}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Code Standard</span>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#fbbf24' }}>{selectedTech.metrics.grade}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Security Level</span>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#a855f7', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ShieldCheck size={13} /> Strict
            </span>
          </div>
        </div>
      </div>

      {/* Brief Architecture Description */}
      <div
        className="glass-panel"
        style={{
          padding: '0.85rem 1.1rem',
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.5,
          borderLeft: `4px solid ${selectedTech.color}`
        }}
      >
        <strong style={{ color: 'var(--text-primary)', marginRight: '6px' }}>
          {selectedTech.badge}:
        </strong>
        {selectedTech.explanation}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
