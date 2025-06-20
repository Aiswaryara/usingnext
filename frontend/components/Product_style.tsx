import styled from '@emotion/styled';

export const AppWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  color: white;
  min-width: 300px;
`;

export const ItemsGrid = styled.section`
  margin-bottom: 135px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color:#3498db;
`;

export const ItemLink = styled.a`
  width: 21%;
  text-decoration: none;
  color: unset;

  @media (max-width: 991.98px) {
    width: 42%;
  }

  @media (max-width: 575.98px) {
    width: 75%;
  }

  &:hover article {
    box-shadow: 0 0 22px 6px rgba(42, 18, 206, 0.9);
    transition: box-shadow 0.3s ease;
  }
`;

export const ItemCard = styled.article`

background-color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  padding: 25px 15px;
  width: 100%;
  border-radius: 15px;
  text-align: center;
`;

export const ItemCardImageWrapper = styled.div`
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 15px;
  body {
  background-color: #3498db;
  margin: 0;
  padding: 0;

}
`;

export const ItemCardImage = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ItemCardTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 10px 0 8px;
  color: white;
`;

export const ItemCardDescription = styled.p`
  font-size: 14px;
  padding: 0 15px;
  color: white;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
`;
