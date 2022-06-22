import { client } from './services/client';

export async function getCandies() {
  const response = await client.from('candies_list')
    .select('*');

  return response.data;
}