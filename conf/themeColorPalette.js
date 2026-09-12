const DEFAULT_LIGHT = {
  PRIMARY: '#2563eb',
  BG: '#ffffff',
  CARD: '#ffffff',
  TEXT: '#111827',
  TEXT_SECONDARY: '#6b7280',
  BORDER: '#e5e7eb'
}

const DEFAULT_DARK = {
  PRIMARY: '#60a5fa',
  BG: '#000000',
  CARD: '#111827',
  TEXT: '#e5e7eb',
  TEXT_SECONDARY: '#9ca3af',
  BORDER: '#374151'
}

const THEME_COLOR_DEFAULTS = {
  endspace: {
    PRIMARY: '#B6E23A',
    BG: '#F3F7EF',
    CARD: '#ffffff',
    TEXT: '#1a2413',
    TEXT_SECONDARY: '#4f5a45',
    BORDER: '#dce5d5',
    PRIMARY_DARK: '#004097',
    BG_DARK: '#3b3c50',
    CARD_DARK: '#454760',
    TEXT_DARK: '#fefef0',
    TEXT_SECONDARY_DARK: '#D6D5C5',
    BORDER_DARK: '#5B5D78'
  }
}

const BASE_PALETTE = [
  ['PRIMARY', '主色'],
  ['BG', '页面背景'],
  ['CARD', '卡片背景'],
  ['TEXT', '主文字'],
  ['TEXT_SECONDARY', '次级文字'],
  ['BORDER', '边框'],
  ['PRIMARY_DARK', '深色模式：主色'],
  ['BG_DARK', '深色模式：页面背景'],
  ['CARD_DARK', '深色模式：卡片背景'],
  ['TEXT_DARK', '深色模式：主文字'],
  ['TEXT_SECONDARY_DARK', '深色模式：次级文字'],
  ['BORDER_DARK', '深色模式：边框']
]

export function getThemeColorDefault(themeId, token) {
  const theme = THEME_COLOR_DEFAULTS[themeId] || {}
  if (token.endsWith('_DARK')) {
    const lightToken = token.replace(/_DARK$/, '')
    return theme[token] || DEFAULT_DARK[lightToken] || DEFAULT_DARK.PRIMARY
  }
  return theme[token] || DEFAULT_LIGHT[token] || DEFAULT_LIGHT.PRIMARY
}

export function getThemeColorCssVar(themeId, token) {
  return `--${themeId}-color-${token.toLowerCase().replace(/_/g, '-')}`
}

export function withBaseThemePalette(themeId, palette = []) {
  const existing = new Set(palette.map(item => item.key))
  const prefix = String(themeId).toUpperCase()
  const fallback = BASE_PALETTE
    .map(([token, label]) => ({
      key: `${prefix}_COLOR_${token}`,
      cssVar: getThemeColorCssVar(themeId, token),
      label,
      defaultValue: getThemeColorDefault(themeId, token)
    }))
    .filter(item => !existing.has(item.key))

  return palette.concat(fallback)
}
