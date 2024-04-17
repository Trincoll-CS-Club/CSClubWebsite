
import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: '911guljk',
    dataset: 'production',
    useCdn: true, 
    apiVersion: '2023-04-17', // We will have to change this in order for us to be able to use the latest API generattions
    
  })
export default client;
