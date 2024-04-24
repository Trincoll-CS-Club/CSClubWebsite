
import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: 's8rg7dyd',
    dataset: 'production',
    useCdn: false, 
    apiVersion: '2023-04-24', // We will have to change this in order for us to be able to use the latest API generattions
    
  })
export default client;

