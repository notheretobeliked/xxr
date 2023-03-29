import { PUBLIC_URL } from '$env/static/public'
import type { PageLoad } from './$types'

export const load: PageLoad = () => {
  return {
    url: PUBLIC_URL,
    pageTitle: 'Surround Parliament from 21 April 2023',
    metadescription: 'Supporters of Greenpeace, trade unions, RSPB, National Trust and common sense will be gathering in London to demand action on the climate crisis. Will you come? Take our quiz!',
  }
}