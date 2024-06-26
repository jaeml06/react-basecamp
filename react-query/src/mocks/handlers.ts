// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';
import products from './products.json';
import { API_ENDPOINTS } from '../constants/api';
import { CartItem } from '../types';

export const handlers = [
  http.get(API_ENDPOINTS.PRODUCTS, () => {
    return HttpResponse.json(products);
  }),
  http.post(
    `${API_ENDPOINTS.CART}`,
    async ({ request }: { request: { json: () => Promise<CartItem> } }) => {
      const newCartItem = await request.json();
      return HttpResponse.json(newCartItem, { status: 201 });
    }
  ),
  http.delete(`${API_ENDPOINTS.CART}/:id`, async ({ params }) => {
    return HttpResponse.json(`삭제되었습니다.${params.id}`, { status: 201 });
  }),
];
