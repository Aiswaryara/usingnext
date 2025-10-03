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
  background-color: #3498db; // You can adjust this background as needed
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
  const [error, setError] = useState("");

  useEffect(() => {
    async function getProducts() {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_API}/api/products`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          setError(`Response status: ${response.status}`)

          
        }

        const result: ProductType[] = await response.json();
        setProducts([...products, ...result]);

        console.log(result);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
          setError(`Response status: ${error.message}`)
        } else {
          console.log(String(error));
          setError(`Response status: ${String(error)}`)
        }
      } finally {
        setIsLoading(false);
      }
    }

    getProducts();
  }, []);

  if (isLoading) {
    return <div>...............fetching products</div>;
  }
    if (error) {
    return <div>{error}</div>;
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
