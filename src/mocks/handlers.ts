import { rest } from 'msw';
import { moeApi } from '@/lib/apiUtils';
import mockUsers from '@/mocks/resolvers/users';

export const handlers = [rest.put(moeApi('/users/:twid'), mockUsers.put)];
