'use client';

import React from 'react';
import {
  ItemLink,
  ItemCard,
  ItemCardImageWrapper,
  ItemCardImage,
  ItemCardTitle,
  ItemCardDescription,
} from './Product_style';
import { ProductType } from '@/types/product';

export default function Product({
  name,
  description,
  imageUrl,
  altTxt,
  _id,
}: ProductType) {
  console.log(imageUrl);
  return (
    <ItemLink href={`/product?id=${_id}`}>
      <ItemCard>
        <ItemCardImageWrapper>
          <ItemCardImage src={imageUrl} alt={altTxt} />
        </ItemCardImageWrapper>
        <ItemCardTitle>{name}</ItemCardTitle>
        <ItemCardDescription>{description}</ItemCardDescription>
      </ItemCard>
    </ItemLink>
  );
}
