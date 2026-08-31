'use client'

import { useState } from 'react'

import SchoolErpIcon from '@/components/pages/school-erp-icon'
import { BILLINT_URL, MODULE_TABS, MODULES, type BillintTabId } from '@/lib/billint-content'

export default function BillintModules() {
  const [activeTab, setActiveTab] = useState<BillintTabId>('features')
  const modules = MODULES[activeTab]

  return (
    <section className="section section-muted erp-modules" id="modules">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Features</span>
          <h2>Powerful features to run your business</h2>
          <p>Manage billing, inventory, clients, and reports — all in one place.</p>
        </div>

        <div className="erp-tabs reveal" role="tablist" aria-label="Billint feature categories">
          {MODULE_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`erp-tab${activeTab === tab.id ? ' erp-tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="erp-module-grid">
          {modules.map((mod) => (
            <article key={`${activeTab}-${mod.title}`} className="erp-module-card">
              <div className="erp-module-icon">
                <SchoolErpIcon name={mod.icon} />
              </div>
              <h3>{mod.title}</h3>
              <p>{mod.description}</p>
              <a
                href={BILLINT_URL}
                className="erp-module-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
