'use client';

import React from 'react';
import {
//to avoid <a> inside an another<a> , to avoid nested anchor tags
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
}: ProductType) {
  return (
    <ItemCard>
      <ItemCardImageWrapper>
        <ItemCardImage src={imageUrl} alt={altTxt || name} />
      </ItemCardImageWrapper>
      <ItemCardTitle>{name}</ItemCardTitle>
      <ItemCardDescription>{description}</ItemCardDescription>
    </ItemCard>
  );
}
