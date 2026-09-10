import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import { useState } from 'react'

/**
 * TitleBar Component - Endfield Style (Light Industrial)
 */
export const TitleBar = ({ post }) => {

  const marqueeText = siteConfig('ENDSPACE_BANNER_WATERMARK_TEXT', 'CLOUD09_SPACE', CONFIG)
  // 记录加载失败的封面 URL（而非布尔值）——切到其他文章时自动恢复显示
  const [failedCover, setFailedCover] = useState(null)
  const showCoverBg =
    post && post.pageCoverThumbnail && post.pageCoverThumbnail !== failedCover

  return (
    <div className="relative py-20 md:py-28 border-b-2 border-[var(--endspace-border-base)] overflow-hidden bg-[var(--endspace-bg-base)]">
      {/* Post Cover Image Background - shown on article pages */}
      {showCoverBg && (
        <div className="absolute inset-0">
          <img 
            src={post.pageCoverThumbnail}
            alt={post.title || 'Cover'}
            onError={() => setFailedCover(post.pageCoverThumbnail)}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better contrast */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Background Pattern - Grid overlay effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 2px, var(--endspace-text-muted) 2px, var(--endspace-text-muted) 4px),
              repeating-linear-gradient(90deg, transparent, transparent 2px, var(--endspace-text-muted) 2px, var(--endspace-text-muted) 4px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Large Background Scrolling Watermark (only on non-article pages) */}
      {!post && (
        <div className="absolute inset-0 flex items-center opacity-[0.15] pointer-events-none overflow-hidden">
          <div className="bg-watermark-scroll whitespace-nowrap leading-none">
            <span className="text-[10rem] md:text-[14rem] font-black text-[var(--endspace-text-primary)] select-none">
              {marqueeText}
              <span className="mx-[5vw] text-[var(--endspace-text-muted)]">&#x2022;</span>
              {marqueeText}
              <span className="mx-[5vw] text-[var(--endspace-text-muted)]">&#x2022;</span>
              {marqueeText}
              <span className="mx-[5vw] text-[var(--endspace-text-muted)]">&#x2022;</span>
              {marqueeText}
              <span className="mx-[5vw] text-[var(--endspace-text-muted)]">&#x2022;</span>
              {marqueeText}
              <span className="mx-[5vw] text-[var(--endspace-text-muted)]">&#x2022;</span>
              {marqueeText}
              <span className="mx-[5vw] text-[var(--endspace-text-muted)]">&#x2022;</span>
            </span>
          </div>
        </div>
      )}

      {/* Marquee Animation Styles for Background Watermark */}
      <style jsx>{`
        .bg-watermark-scroll {
          display: inline-block;
          animation: bgMarquee 30s linear infinite;
        }

        @keyframes bgMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}

export default TitleBar
