import { PUBLIC_URL } from '$env/static/public'
import type { PageLoad } from './$types'

export const load: PageLoad = () => {
  return {
    url: PUBLIC_URL,
    pageTitle: 'Surround Parliament on the 21st April 2023',
    metadescription: 'Join everyone else on the 21st April 2023 to surround Parliament and demand action on the climate and environmental crises.',
  }
}