'use server';

import { revalidateTag } from 'next/cache';

export const createNewProduct = async (product: FormData) => {
  const res = await fetch(`${process.env.API_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Object.fromEntries(product)),
  });

  revalidateTag('products');

  if (!res.ok) {
    throw new Error('Network response was not ok');
  }

  const jsonResponse = await res.json();
  return jsonResponse;
};
