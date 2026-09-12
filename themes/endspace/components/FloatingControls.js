import { useState, useEffect, useRef, useCallback } from 'react'
import throttle from 'lodash.throttle'
import { uuidToId } from 'notion-utils'
import { IconClock, IconListTree, IconArrowUp, IconX, IconMessage, IconSun, IconMoonStars } from '@tabler/icons-react'
import { SideBar } from './SideBar'
import { useGlobal } from '@/lib/global'

/**
 * FloatingControls Component
 * Consolidates Recent Logs, TOC, and ScrollToTop into a single capsule widget.
 */
const FloatingControls = ({ toc, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(null) // 'logs' | 'toc'
  const [percent, setPercent] = useState(0)
  const [activeSection, setActiveSection] = useState(null)
  const { isDarkMode, updateDarkMode } = useGlobal()
  
  // -- TOC Logic --
  useEffect(() => {
    window.addEventListener('scroll', updateProgress)
    window.addEventListener('scroll', actionSectionScrollSpy)
    return () => {
        window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('scroll', actionSectionScrollSpy)
    }
  }, [])

  const updateProgress = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const p = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0
    setPercent(p)
  }

  const actionSectionScrollSpy = useCallback(
    throttle(() => {
      const sections = document.getElementsByClassName('notion-h')
      let prevBBox = null
      let currentSectionId = activeSection
      for (let i = 0; i < sections.length; ++i) {
        const section = sections[i]
        if (!section || !(section instanceof Element)) continue
        if (!currentSectionId) {
          currentSectionId = section.getAttribute('data-id')
        }
        const bbox = section.getBoundingClientRect()
        const prevHeight = prevBBox ? bbox.top - prevBBox.bottom : 0
        const offset = Math.max(150, prevHeight / 4)
        if (bbox.top - offset < 0) {
          currentSectionId = section.getAttribute('data-id')
          prevBBox = bbox
          continue
        }
        break
      }
      setActiveSection(currentSectionId)
    }, 200),
    []
  )

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleDrawer = (tab) => {
    if (isOpen && activeTab === tab) {
      setIsOpen(false)
      setActiveTab(null)
    } else {
      setIsOpen(true)
      setActiveTab(tab)
    }
  }

  // Common Button Style (Double Circle)
  // 颜色一律走主题变量：日/夜自动切换，夜间不会出现白底黑字
  const ICON_DEFAULT = 'text-[var(--endspace-text-primary)] group-hover:text-[#0a0a0a]'
  const ControlBtn = ({ icon: Icon, onClick, active, label, showPercent, iconClassName = ICON_DEFAULT, iconSize = 20 }) => (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full bg-[var(--endspace-bg-primary)] border border-[var(--endspace-border-base)] flex items-center justify-center p-1 cursor-pointer group shadow-lg transition-transform active:scale-95"
      aria-label={label}
      title={label}
    >
      <div 
        className={`w-full h-full rounded-full flex items-center justify-center transition-colors duration-200 ${
            active ? 'bg-[var(--endspace-accent-yellow)]' : 'bg-transparent group-hover:bg-[var(--endspace-accent-yellow)]'
        }`}
      >
        {showPercent ? (
            <div className="relative w-full h-full flex items-center justify-center">
                <span className={`text-[10px] font-bold font-mono ${active ? 'text-[#0a0a0a] hidden' : 'text-[var(--endspace-text-secondary)] group-hover:hidden'}`}>
                    {Math.round(percent)}%
                </span>
                <Icon size={iconSize} stroke={2} className={`${active ? 'text-[#0a0a0a]' : iconClassName} ${active ? 'block' : 'hidden group-hover:block'}`} />
            </div>
        ) : (
            <Icon size={iconSize} stroke={2} className={active ? 'text-[#0a0a0a]' : iconClassName} />
        )}
      </div>
    </button>
  )

  return (
    <>
      {/* Container: Fixed Bottom Right */
      /* Note: Parent must allow fixed child to escape if needed, but fixed-in-fixed usually works for viewport. */
      /* We use a fragment or simple div to hold the buttons, and put the drawer as a sibling or just rely on fixed positioning. */
      /* Actually, to ensure proper z-indexing, let's keep them siblings. */}
      
      {/* The Drawer (Mobile Sheet / Desktop Popover) */}
      <div
        className={`
            transition-all duration-300 ease-out bg-[var(--endspace-bg-primary)] border-[var(--endspace-border-base)] shadow-2xl overflow-hidden
            
            /* Mobile Styles: Bottom Sheet */
            fixed bottom-0 left-0 right-0 w-full rounded-t-2xl border-t z-40
            ${isOpen ? 'translate-y-0 opacity-100 visible' : 'translate-y-full opacity-0 invisible'}

            /* Desktop Styles: Floating Card (Left of buttons) */
            lg:fixed lg:bottom-8 lg:right-20 lg:left-auto lg:w-80 lg:rounded-xl lg:border lg:h-auto lg:max-h-[70vh]
            lg:max-w-[calc(100vw-2rem)]
            ${isOpen ? 'lg:translate-y-0 lg:opacity-100 lg:visible' : 'lg:translate-y-0 lg:translate-x-4 lg:opacity-0 lg:invisible'}
        `}
        style={{
            /* Mobile Height Limit */
            maxHeight: '70vh',
            /* 显式锁定面板底色/描边：避免组件内残留的浅色类在夜间漏出 */
            backgroundColor: 'var(--endspace-bg-primary)',
            borderColor: 'var(--endspace-border-base)'
        }}
      >
             {/* Header */}
             <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--endspace-border-base)] bg-[var(--endspace-bg-primary)] shrinking-0">
                <h3 className="font-bold text-sm uppercase flex items-center gap-2 text-[var(--endspace-text-primary)]">
                    {activeTab === 'toc' ? (
                        <>
                            <IconListTree size={16} className="text-[var(--endspace-accent-yellow)]" />
                            <span>Table of Contents</span>
                        </>
                    ) : (
                        <>
                             <IconClock size={16} className="text-[var(--endspace-accent-yellow)]" />
                             <span>Recent Logs</span>
                        </>
                    )}
                </h3>
                <button onClick={() => setIsOpen(false)} className="text-[var(--endspace-text-muted)] hover:text-[var(--endspace-text-primary)] transition-colors">
                    <IconX size={18} />
                </button>
             </div>

             {/* Content Area */}
             <div 
                className="overflow-y-auto p-4 pb-24 lg:pb-4 flex-1" 
                style={{ scrollbarWidth: 'thin' }}
             >
                {activeTab === 'toc' && (
                    <nav className="space-y-1">
                        {toc && toc.map(t => {
                             const id = uuidToId(t.id)
                             const isActive = activeSection === id
                             return (
                                <a
                                  key={id}
                                  href={`#${id}`}
                                  className={`block py-1 text-xs transition-colors rounded px-2 -mx-2 ${isActive ? 'font-bold text-[var(--endspace-text-primary)] bg-[var(--endspace-accent-yellow-dim)]' : 'text-[var(--endspace-text-secondary)] hover:text-[var(--endspace-text-primary)] hover:bg-[var(--endspace-bg-secondary)]'}`}
                                  style={{ paddingLeft: `${(t.indentLevel || 0) * 12 + 8}px` }}
                                  onClick={() => {
                                      // Optional: Close on click for mobile?
                                      // setIsOpen(false) 
                                  }}
                                >
                                    {t.text}
                                </a>
                             )
                        })}
                    </nav>
                )}
                {activeTab === 'logs' && (
                    <SideBar {...props} showTitle={false} />
                )}
             </div>
      </div>

      {/* The Controls (Buttons) */}
      <div className="fixed right-4 bottom-8 z-50 flex flex-col items-end gap-2 pointer-events-none">
        {/* Capsule */}
        <div
          className="bg-gray-400/80 backdrop-blur-sm p-1.5 rounded-full shadow-lg flex flex-row lg:flex-col gap-3 pointer-events-auto"
          /* color-mix 生效时用主题色（80% 透明）；不支持则回退上面的 bg-gray-400/80 */
          style={{ backgroundColor: 'color-mix(in srgb, var(--endspace-bg-tertiary) 80%, transparent)' }}
        >
             {/* 日间/夜间模式切换 */}
             <ControlBtn
                icon={isDarkMode ? IconSun : IconMoonStars}
                label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                onClick={() => updateDarkMode(!isDarkMode)}
                iconClassName={ICON_DEFAULT}
                iconSize={24}
             />

             {/* LOGS */}
             <ControlBtn 
                icon={IconClock} 
                label="Recent Logs" 
                active={activeTab === 'logs'}
                onClick={() => toggleDrawer('logs')}
                iconClassName={ICON_DEFAULT}
                iconSize={24}
             />

             {/* TOC - Only on Article Pages */}
             {toc && toc.length > 0 && (
                 <ControlBtn 
                    icon={IconListTree} 
                    label="Table of Contents" 
                    active={activeTab === 'toc'}
                    onClick={() => toggleDrawer('toc')}
                    showPercent={true}
                    iconClassName="text-[var(--endspace-text-secondary)] group-hover:text-[#0a0a0a]"
                    iconSize={28}
                 />
             )}

             {/* Comments - Only on Article Pages (approximated by TOC presence) */}
             {toc && toc.length > 0 && (
                 <ControlBtn 
                    icon={IconMessage} 
                    label="Jump to Comments" 
                    onClick={() => {
                        const comments = document.getElementById('comments')
                        if (comments) {
                            comments.scrollIntoView({ behavior: 'smooth' })
                        }
                    }}
                 />
             )}

             {/* Scroll To Top */}
             <ControlBtn 
                icon={IconArrowUp} 
                label="Scroll To Top" 
                onClick={handleScrollToTop}
             />
        </div>
      </div>
    </>
  )
}

export default FloatingControls
