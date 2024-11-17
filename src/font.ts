import { Dancing_Script } from 'next/font/google';

import { Merriweather } from 'next/font/google';
import { Rajdhani } from 'next/font/google';



export const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'], // Available weights for Merriweather
  subsets: ['latin'], // Adjust subsets as needed
  display: 'swap', // Improves loading performance
});

export const dancingScript = Dancing_Script({
  weight: ['400', '500', '600', '700'], // Available weights for Dancing Script
  subsets: ['latin'], // Adjust subsets as needed
  display: 'swap', // Improves loading performance
});



export const rajdhaniFont = Rajdhani({
  subsets: ['latin'],
  variable: '--font-rajdhani',
  weight: ['300', '400','600', '700'],
});