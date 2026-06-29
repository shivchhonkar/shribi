'use client'

import { useState } from 'react'

import SchoolErpIcon from '@/components/pages/school-erp-icon'
import { MODULE_TABS, MODULES, type ModuleTabId } from '@/lib/school-erp-content'

export default function SchoolErpModules() {
  const [activeTab, setActiveTab] = useState<ModuleTabId>('academics')
  const modules = MODULES[activeTab]

  return (
    <section className="section section-muted erp-modules" id="modules">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Modules</span>
          <h2>School ERP Modules</h2>
          <p>
            A comprehensive ERP with user-friendly dashboards, easy navigation, and well-structured
            reports — covering every department of your school.
          </p>
        </div>

        <div className="erp-tabs reveal" role="tablist" aria-label="ERP module categories">
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
          {modules.map((mod, index) => (
            <article
              key={mod.title}
              className={`erp-module-card reveal${index % 3 === 1 ? ' reveal-delay' : index % 3 === 2 ? ' reveal-delay-2' : ''}`}
            >
              <div className="erp-module-icon">
                <SchoolErpIcon name={mod.icon} />
              </div>
              <h3>{mod.title}</h3>
              <p>{mod.description}</p>
              <span className="erp-module-link">Learn more →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
