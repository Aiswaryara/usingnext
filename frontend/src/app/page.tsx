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
  background-color: #3498db; /* You can adjust this background as needed */
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
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function getProducts() {
      const base = (process.env.NEXT_PUBLIC_BACKEND_API || '').replace(/\/+$/, '');
      const url = base ? `${base}/api/products` : '/api/products';

      try {
        const response = await fetch(url, { headers: { Accept: 'application/json' } });

        if (!response.ok) {
          throw new Error(`Products fetch failed: ${response.status} ${response.statusText}`);
        }

        const result: ProductType[] = await response.json();
        setProducts(result);
        setErrorMsg(null);
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        console.error(message);
        setErrorMsg(message);
      } finally {
        setIsLoading(false);
      }
    }

    getProducts();
  }, []);

  if (isLoading) {
    return <div>...............fetching products</div>;
  }

  if (errorMsg) {
    return (
      <StyledAppWrapper>
        <div style={{ padding: '16px', background: 'rgba(0,0,0,0.2)', borderRadius: 12 }}>
          <h2 style={{ margin: 0 }}>Couldn’t load products</h2>
          <p style={{ marginTop: 8, opacity: 0.9, fontSize: 14 }}>{errorMsg}</p>
        </div>
      </StyledAppWrapper>
    );
  }

  return (
    <StyledAppWrapper>
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
