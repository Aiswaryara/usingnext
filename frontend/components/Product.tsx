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

type ProductProps = {
  name: string;
  description: string;
  imageUrl: string;
  altTxt: string;
  _id: string;
  price: number;
  colors: string[];
};

export default function Product({
  name,
  description,
  imageUrl,
  altTxt,
  _id,
}: ProductProps) {
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
