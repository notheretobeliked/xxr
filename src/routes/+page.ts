import { PUBLIC_URL } from '$env/static/public'
import type { PageLoad } from './$types'

export const load: PageLoad = () => {
  return {
    url: PUBLIC_URL,
    pageTitle: 'Surround Parliament on the 21st April 2023',
    metadescription: 'Will your movement be there? Take the quiz!',
  }
}