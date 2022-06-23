import { client } from './services/client';

export async function getCandies() {
  const response = await client.from('candies_list')
    .select('*');

  return response.data;
}

export async function getPlayers() {
  const response = await client.from('soccer_players').select('*');
  return response.data;
}

export async function getCars() {
  const response = await client.from('cars').select('*');
  return response.data;
}

export async function getClubs() {
  const response = await client.from('soccer_clubs').select('*');
  return response.data;
}