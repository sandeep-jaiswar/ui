import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      // Apple's refined color palette
      colors: {
        // iOS System Colors
        systemBlue: {
          50: '#E3F2FD',
          100: '#BBDEFB', 
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#007AFF', // Primary iOS Blue
          600: '#1976D2',
          700: '#1565C0',
          800: '#0D47A1',
          900: '#0A3D91',
        },
        systemGreen: {
          50: '#E8F5E8',
          100: '#C8E6C9',
          200: '#A5D6A7',
          300: '#81C784',
          400: '#66BB6A',
          500: '#34C759', // iOS Green
          600: '#43A047',
          700: '#388E3C',
          800: '#2E7D32',
          900: '#1B5E20',
        },
        systemRed: {
          50: '#FFEBEE',
          100: '#FFCDD2',
          200: '#EF9A9A',
          300: '#E57373',
          400: '#EF5350',
          500: '#FF3B30', // iOS Red
          600: '#E53935',
          700: '#D32F2F',
          800: '#C62828',
          900: '#B71C1C',
        },
        systemOrange: {
          50: '#FFF3E0',
          100: '#FFE0B2',
          200: '#FFCC80',
          300: '#FFB74D',
          400: '#FFA726',
          500: '#FF9500', // iOS Orange
          600: '#FB8C00',
          700: '#F57C00',
          800: '#EF6C00',
          900: '#E65100',
        },
        systemYellow: {
          50: '#FFFDE7',
          100: '#FFF9C4',
          200: '#FFF59D',
          300: '#FFF176',
          400: '#FFEE58',
          500: '#FFCC02', // iOS Yellow
          600: '#FDD835',
          700: '#F9A825',
          800: '#F57F17',
          900: '#FF8F00',
        },
        systemPurple: {
          50: '#F3E5F5',
          100: '#E1BEE7',
          200: '#CE93D8',
          300: '#BA68C8',
          400: '#AB47BC',
          500: '#AF52DE', // iOS Purple
          600: '#8E24AA',
          700: '#7B1FA2',
          800: '#6A1B9A',
          900: '#4A148C',
        },
        systemPink: {
          50: '#FCE4EC',
          100: '#F8BBD9',
          200: '#F48FB1',
          300: '#F06292',
          400: '#EC407A',
          500: '#FF2D92', // iOS Pink
          600: '#D81B60',
          700: '#C2185B',
          800: '#AD1457',
          900: '#880E4F',
        },
        systemTeal: {
          50: '#E0F2F1',
          100: '#B2DFDB',
          200: '#80CBC4',
          300: '#4DB6AC',
          400: '#26A69A',
          500: '#30D158', // iOS Teal
          600: '#00695C',
          700: '#00796B',
          800: '#00695C',
          900: '#004D40',
        },
        systemIndigo: {
          50: '#E8EAF6',
          100: '#C5CAE9',
          200: '#9FA8DA',
          300: '#7986CB',
          400: '#5C6BC0',
          500: '#5856D6', // iOS Indigo
          600: '#3949AB',
          700: '#303F9F',
          800: '#283593',
          900: '#1A237E',
        },
        // iOS Gray Scale
        systemGray: {
          50: '#F2F2F7',   // iOS Gray 6
          100: '#E5E5EA',  // iOS Gray 5
          200: '#D1D1D6',  // iOS Gray 4
          300: '#C7C7CC',  // iOS Gray 3
          400: '#AEAEB2',  // iOS Gray 2
          500: '#8E8E93',  // iOS Gray
          600: '#636366',  // iOS Gray 1
          700: '#48484A',  // iOS Dark Gray
          800: '#3A3A3C',  // iOS Dark Gray 2
          900: '#1C1C1E',  // iOS Dark Gray 3
        },
        // Background colors
        background: {
          primary: '#FFFFFF',
          secondary: '#F2F2F7',
          tertiary: '#FFFFFF',
          grouped: '#F2F2F7',
          'primary-dark': '#000000',
          'secondary-dark': '#1C1C1E',
          'tertiary-dark': '#2C2C2E',
          'grouped-dark': '#000000',
        },
        // Label colors
        label: {
          primary: '#000000',
          secondary: '#3C3C43',
          tertiary: '#3C3C43',
          quaternary: '#3C3C43',
          'primary-dark': '#FFFFFF',
          'secondary-dark': '#EBEBF5',
          'tertiary-dark': '#EBEBF5',
          'quaternary-dark': '#EBEBF5',
        },
        // Fill colors
        fill: {
          primary: '#78788033',
          secondary: '#78788028',
          tertiary: '#7676801E',
          quaternary: '#74748014',
          'primary-dark': '#7878805C',
          'secondary-dark': '#78788052',
          'tertiary-dark': '#7676803D',
          'quaternary-dark': '#74748033',
        },
        // Separator colors
        separator: {
          opaque: '#C6C6C8',
          nonOpaque: '#3C3C4336',
          'opaque-dark': '#38383A',
          'nonOpaque-dark': '#54545899',
        },
      },
      // Apple's precise typography scale
      fontFamily: {
        'sf-pro': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'sf-mono': ['SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', 'Droid Sans Mono', 'Consolas', 'monospace'],
        'ny': ['New York', 'Times New Roman', 'serif'],
      },
      // iOS Typography Scale
      fontSize: {
        'large-title': ['34px', { lineHeight: '41px', fontWeight: '400' }],
        'title-1': ['28px', { lineHeight: '34px', fontWeight: '400' }],
        'title-2': ['22px', { lineHeight: '28px', fontWeight: '400' }],
        'title-3': ['20px', { lineHeight: '25px', fontWeight: '400' }],
        'headline': ['17px', { lineHeight: '22px', fontWeight: '600' }],
        'body': ['17px', { lineHeight: '22px', fontWeight: '400' }],
        'callout': ['16px', { lineHeight: '21px', fontWeight: '400' }],
        'subhead': ['15px', { lineHeight: '20px', fontWeight: '400' }],
        'footnote': ['13px', { lineHeight: '18px', fontWeight: '400' }],
        'caption-1': ['12px', { lineHeight: '16px', fontWeight: '400' }],
        'caption-2': ['11px', { lineHeight: '13px', fontWeight: '400' }],
      },
      // Apple's spacing system (based on 8pt grid)
      spacing: {
        '0.5': '2px',
        '1': '4px',
        '1.5': '6px',
        '2': '8px',
        '2.5': '10px',
        '3': '12px',
        '3.5': '14px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '11': '44px',
        '12': '48px',
        '14': '56px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '28': '112px',
        '32': '128px',
        '36': '144px',
        '40': '160px',
        '44': '176px',
        '48': '192px',
        '52': '208px',
        '56': '224px',
        '60': '240px',
        '64': '256px',
        '72': '288px',
        '80': '320px',
        '96': '384px',
      },
      // Apple's border radius system
      borderRadius: {
        'none': '0px',
        'xs': '2px',
        'sm': '4px',
        'DEFAULT': '6px',
        'md': '8px',
        'lg': '10px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '20px',
        '4xl': '24px',
        'full': '9999px',
        // iOS specific radius
        'ios-sm': '8px',
        'ios': '10px',
        'ios-lg': '12px',
        'ios-xl': '16px',
        'ios-2xl': '20px',
      },
      // Apple's shadow system
      boxShadow: {
        'ios-1': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'ios-2': '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
        'ios-3': '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
        'ios-4': '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
        'ios-5': '0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)',
        // iOS specific shadows
        'card': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'modal': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'button': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'input': 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
      },
      // Animation and transitions
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'ios': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'ios-in': 'cubic-bezier(0.42, 0, 1, 1)',
        'ios-out': 'cubic-bezier(0, 0, 0.58, 1)',
        'ios-in-out': 'cubic-bezier(0.42, 0, 0.58, 1)',
      },
      // Backdrop blur
      backdropBlur: {
        'ios': '20px',
        'ios-lg': '40px',
      },
      // Z-index scale
      zIndex: {
        '1': '1',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        'modal': '1000',
        'popover': '1010',
        'tooltip': '1020',
        'toast': '1030',
      },
    },
  },
  plugins: [
    // Custom plugin for iOS-specific utilities
    function({ addUtilities, theme }) {
      const newUtilities = {
        // iOS vibrancy effects
        '.vibrancy-light': {
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        },
        '.vibrancy-dark': {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        },
        '.vibrancy-ultra-thin': {
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(10px) saturate(120%)',
          WebkitBackdropFilter: 'blur(10px) saturate(120%)',
        },
        // iOS button styles
        '.btn-ios': {
          borderRadius: theme('borderRadius.ios'),
          fontWeight: '600',
          fontSize: theme('fontSize.body[0]'),
          lineHeight: theme('fontSize.body[1].lineHeight'),
          padding: '12px 24px',
          transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          cursor: 'pointer',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          WebkitTapHighlightColor: 'transparent',
        },
        '.btn-ios:active': {
          transform: 'scale(0.96)',
        },
        // iOS card styles
        '.card-ios': {
          backgroundColor: theme('colors.background.primary'),
          borderRadius: theme('borderRadius.ios-lg'),
          boxShadow: theme('boxShadow.card'),
          overflow: 'hidden',
        },
        // iOS input styles
        '.input-ios': {
          backgroundColor: theme('colors.fill.tertiary'),
          border: 'none',
          borderRadius: theme('borderRadius.ios'),
          padding: '12px 16px',
          fontSize: theme('fontSize.body[0]'),
          lineHeight: theme('fontSize.body[1].lineHeight'),
          transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        },
        '.input-ios:focus': {
          backgroundColor: theme('colors.background.primary'),
          boxShadow: theme('boxShadow.input'),
          outline: 'none',
        },
        // iOS list styles
        '.list-ios': {
          backgroundColor: theme('colors.background.secondary'),
          borderRadius: theme('borderRadius.ios-lg'),
          overflow: 'hidden',
        },
        '.list-item-ios': {
          backgroundColor: theme('colors.background.primary'),
          borderBottom: `1px solid ${theme('colors.separator.nonOpaque')}`,
          padding: '16px',
          transition: 'background-color 0.15s ease',
        },
        '.list-item-ios:last-child': {
          borderBottom: 'none',
        },
        '.list-item-ios:active': {
          backgroundColor: theme('colors.fill.quaternary'),
        },
        // iOS navigation styles
        '.nav-ios': {
          backgroundColor: 'rgba(248, 248, 248, 0.94)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: `1px solid ${theme('colors.separator.nonOpaque')}`,
        },
        // iOS safe area utilities
        '.safe-top': {
          paddingTop: 'env(safe-area-inset-top)',
        },
        '.safe-bottom': {
          paddingBottom: 'env(safe-area-inset-bottom)',
        },
        '.safe-left': {
          paddingLeft: 'env(safe-area-inset-left)',
        },
        '.safe-right': {
          paddingRight: 'env(safe-area-inset-right)',
        },
        // iOS typography utilities
        '.text-ios-large-title': {
          fontSize: theme('fontSize.large-title[0]'),
          lineHeight: theme('fontSize.large-title[1].lineHeight'),
          fontWeight: theme('fontSize.large-title[1].fontWeight'),
          letterSpacing: '-0.02em',
        },
        '.text-ios-title-1': {
          fontSize: theme('fontSize.title-1[0]'),
          lineHeight: theme('fontSize.title-1[1].lineHeight'),
          fontWeight: theme('fontSize.title-1[1].fontWeight'),
          letterSpacing: '-0.01em',
        },
        '.text-ios-title-2': {
          fontSize: theme('fontSize.title-2[0]'),
          lineHeight: theme('fontSize.title-2[1].lineHeight'),
          fontWeight: theme('fontSize.title-2[1].fontWeight'),
          letterSpacing: '-0.01em',
        },
        '.text-ios-title-3': {
          fontSize: theme('fontSize.title-3[0]'),
          lineHeight: theme('fontSize.title-3[1].lineHeight'),
          fontWeight: theme('fontSize.title-3[1].fontWeight'),
          letterSpacing: '-0.005em',
        },
        '.text-ios-headline': {
          fontSize: theme('fontSize.headline[0]'),
          lineHeight: theme('fontSize.headline[1].lineHeight'),
          fontWeight: theme('fontSize.headline[1].fontWeight'),
          letterSpacing: '-0.005em',
        },
        '.text-ios-body': {
          fontSize: theme('fontSize.body[0]'),
          lineHeight: theme('fontSize.body[1].lineHeight'),
          fontWeight: theme('fontSize.body[1].fontWeight'),
        },
        '.text-ios-callout': {
          fontSize: theme('fontSize.callout[0]'),
          lineHeight: theme('fontSize.callout[1].lineHeight'),
          fontWeight: theme('fontSize.callout[1].fontWeight'),
        },
        '.text-ios-subhead': {
          fontSize: theme('fontSize.subhead[0]'),
          lineHeight: theme('fontSize.subhead[1].lineHeight'),
          fontWeight: theme('fontSize.subhead[1].fontWeight'),
        },
        '.text-ios-footnote': {
          fontSize: theme('fontSize.footnote[0]'),
          lineHeight: theme('fontSize.footnote[1].lineHeight'),
          fontWeight: theme('fontSize.footnote[1].fontWeight'),
        },
        '.text-ios-caption-1': {
          fontSize: theme('fontSize.caption-1[0]'),
          lineHeight: theme('fontSize.caption-1[1].lineHeight'),
          fontWeight: theme('fontSize.caption-1[1].fontWeight'),
        },
        '.text-ios-caption-2': {
          fontSize: theme('fontSize.caption-2[0]'),
          lineHeight: theme('fontSize.caption-2[1].lineHeight'),
          fontWeight: theme('fontSize.caption-2[1].fontWeight'),
        },
      }
      
      addUtilities(newUtilities)
    }
  ],
}

export default config;