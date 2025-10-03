'use client';

import styled from '@emotion/styled';
import Product from '../../components/Product';
import { ProductType } from '@/types/product';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const StyledAppWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  color: white;
  min-width: 300px;
  background-color: #3498db; /* You can adjust this background as needed */
  padding: 20px 0;
`;

const StyledProductList = styled.div`
  margin-bottom: 135px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 16px;
`;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const base = process.env.NEXT_PUBLIC_BACKEND_API;
        if (!base) throw new Error('Missing NEXT_PUBLIC_BACKEND_API');
        const url = `${base}/api/products`;
        const response = await fetch(url, { cache: 'no-store' });

        if (!response.ok) {
          setError(`Response status: ${response.status}`);
          return;
        }

        const result: ProductType[] = await response.json();
        setProducts(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) return <div>...............fetching products</div>;
  if (error) return <div>{error}</div>;

  const handleProductClick = (id: string) => {
    // analytics / logging / effects before navigation
    console.log('Product clicked:', id);
  };

  return (
    <StyledAppWrapper>
      <StyledProductList>
        {products.map((product) => (
          <Link
            key={product._id}
            href={`/products/${product._id}`}  // dynamic route style
            prefetch={false}
            onClick={() => handleProductClick(product._id)}
          >
            <Product {...product} />
          </Link>
        ))}
      </StyledProductList>
    </StyledAppWrapper>
  );
}
