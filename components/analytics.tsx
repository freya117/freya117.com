'use client'

import Script from 'next/script'
import { useAnalyticsInstance } from '../hooks/useAnalytics'

export function Analytics() {
  useAnalyticsInstance()
  // Skip rendering the GoatCounter script unless the code is configured —
  // without it the request goes to https://undefined.goatcounter.com/count
  // and shows 400/404 errors in the console.
  const code = process.env.NEXT_PUBLIC_GOAT_COUNTER_CODE
  if (!code) return null
  return (
    <Script
      data-goatcounter={`https://${code}.goatcounter.com/count`}
      data-goatcounter-settings='{"allow_local": true}'
      async={true}
      src="//gc.zgo.at/count.js"
    />
  )
}
