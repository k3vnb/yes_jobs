/* eslint-disable import/prefer-default-export */
import { number, string, shape } from 'prop-types';

export const currentUserShape = {
  currentUser: shape({
    createdAt: shape({
      nanoseconds: number,
      seconds: number,
    }),
    displayName: string,
    email: string,
    id: string,
  }),
};
