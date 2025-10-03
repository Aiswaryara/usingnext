import { ProductType } from '@/types/product';

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const base = process.env.NEXT_PUBLIC_BACKEND_API;
  const res = await fetch(`${base}/api/products/${params.id}`, { cache: 'no-store' });

  if (!res.ok) {
    return <div>Failed to load product (status {res.status}).</div>;
  }

  const product: ProductType = await res.json();

  return (
    <main style={{ padding: 24, maxWidth: 900, margin: '0 auto' }}>
      <h1 style={{ marginBottom: 12 }}>{product.name}</h1>
      <img
        src={product.imageUrl}
        alt={product.altTxt}
        width={360}
        style={{ borderRadius: 12, marginBottom: 16 }}
      />
      <p style={{ marginBottom: 8 }}>{product.description}</p>
      <p style={{ marginBottom: 8 }}><strong>Price:</strong> ${product.price}</p>
      <p><strong>Colors:</strong> {product.colors?.join(', ')}</p>
    </main>
  );
}
