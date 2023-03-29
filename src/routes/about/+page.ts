import { PUBLIC_URL } from '$env/static/public'
import type { PageLoad } from '../$types'

export const load: PageLoad = () => {
  return {
    url: PUBLIC_URL,
    pageTitle: 'Surround Parliament on the 21st April 2023: About',
    metadescription: 'Who made this website and why?',
  }
}