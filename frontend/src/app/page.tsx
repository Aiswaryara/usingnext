'use client';

import styled from '@emotion/styled';
import Product from '../../components/Product';
import { ProductType } from '@/types/product';
import { useEffect, useState } from 'react';

const StyledAppWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  color: white;
  min-width: 300px;
  background-color: #3498db;
  padding: 20px 0;
`;

const StyledProductList = styled.div`
  margin-bottom: 135px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const base = process.env.NEXT_PUBLIC_BACKEND_API || '';
    const url = `${base.replace(/\/+$/, '')}/api/products`;
  

    async function getProducts() {
      try {
       
        const response = await fetch(url, { signal: controller.signal, cache: 'no-store' });
   
        if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);

        const json = (await response.json()) as unknown;

       
        const list = Array.isArray(json) ? json : (json as any)?.products;
        if (!Array.isArray(list)) throw new Error('API did not return an array');
        setProducts(list as ProductType[]);
     
      } catch (e) {
        
        setError(e instanceof Error ? e.message : 'Failed to fetch products');
       
      } finally {
        setIsLoading(false);
      }
    }

    getProducts();

    return () => controller.abort();

  }, []);

  if (isLoading) {
    return <div>...............fetching products</div>;
  }

  return (
    <StyledAppWrapper>
  
      {error && <div style={{ padding: 16 }}>Couldn’t load products: {error}</div>}
      {!error && products.length === 0 && <div style={{ padding: 16 }}>No products found.</div>}


      <StyledProductList>
        {products.map((product) => (
          <Product
            key={product._id}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
            altTxt={product.altTxt}
            colors={product.colors}
            _id={product._id}
          />
        ))}
      </StyledProductList>
    </StyledAppWrapper>
  );
}
