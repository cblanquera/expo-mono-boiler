'use server';

import { Text } from 'react-native';
//import getStore from '@/modules/store';

export type ProfileSearchProps = { query: any };

export default async function ProfileSearch({ query }: ProfileSearchProps) {
  //const store = await getStore();
  return (
    <Text>TODO: Results From Store...</Text>
  );
}