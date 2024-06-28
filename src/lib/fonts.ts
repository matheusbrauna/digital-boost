import {
  Open_Sans as FontSans,
  Merriweather as FontHeading,
} from 'next/font/google'

export const fontSans = FontSans({
  variable: '--font-sans',
})

export const fontHeading = FontHeading({
  variable: '--font-heading',
  weight: ['700'],
})
