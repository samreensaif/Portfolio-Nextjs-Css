import { Dancing_Script } from 'next/font/google';

import { Merriweather } from 'next/font/google';

import { Caveat } from 'next/font/google';

export const caveat = Caveat({
  weight: ['400'], // Sour Gummy usually has one weight available (400)
  subsets: ['latin'], // Adjust subsets as needed
  display: 'swap', // Improves loading performance
});


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
