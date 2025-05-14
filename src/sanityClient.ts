import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'd1phiv2b',
  dataset: 'production',
  apiVersion: '2025-05-14',
  useCdn: true,
  token:
    'sk2eBkTJMKiQhdIigvsxRURbgSM0kg3RhkzOyseVRCtNM0UsWCfwEr2neifXbj6Vq0UT8nnlNCzFXbtL65J0ZVEf93HJ25dTj4u2Vzm7zGd4yBQ6qKLkQaiKU2qwW55fyPzeHyQK9GwHfgOXEOPAPapq3NfcYh8GXWHDvkJm7flsro52ZEqP',
});
