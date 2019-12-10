import React from 'react';
import styled from 'styled-components';

const containerHeight = 400;

const Container = styled.div`
  background-color: white;
  border: 1px solid gray;
  height: ${`${containerHeight}px`};
  border-radius: 4px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 8fr 4fr;
  -webkit-box-shadow: 1px 1px 2px 3px #ccc; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 1px 1px 2px 3px #ccc; /* Firefox 3.5 - 3.6 */
  box-shadow: 1px 1px 2px 3px #ccc; /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
`;

const Top = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  position: relative;
  border-bottom: 1px solid #e9e8e9;
`;
const Bottom = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 25px 1fr 40px 30px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 3px;
`;

const ImageHeading = styled.div`
  position: absolute;
  padding: 5px;
  background-color: #26bff1;
  color: white;
  top: 4px;
  left: 5px;
  text-align: center;
  -moz-transform: none;
  -webkit-transform: none;
  -o-transform: none;
  -ms-transform: none;
  transform: none;
`;

const ImagePrice = styled.div`
  position: absolute;
  padding: 5px;
  background-color: #26bff1;
  color: white;
  top: -2px;
  right: 1px;
  text-align: center;
  font-size: 1.2rem;

  -moz-transform: skew(0deg, 5deg);
  -webkit-transform: skew(0deg, 5deg);
  -o-transform: skew(0deg, 5deg);
  -ms-transform: skew(0deg, 5deg);
  transform: skew(0deg, 5deg);
`;

const HeadingContent = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  font-weight: bold;
`;

const BasicContent = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;
`;

const Field = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const FieldHeading = styled.div`
  color: white;
  color: #26bff1;
  font-weight: bold;
`;

const FieldText = styled.div``;

const LinksContent = styled.div`
  border-top: 1px solid #e9e8e9;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
`;

const Link = styled.div`
  border-right: 1px solid #e9e8e9;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  font-weight: bold;
`;

const PricesContent = styled.div`
  text-align: center;
  padding: 2px;
`;

const PricesField = styled.div`
  padding: 5px;
  background-color: #f1f1f1;
  font-weight: bold;
`;

function ProductCard() {
  return (
    <Container>
      <Top>
        <Image
          alt="no"
          src="https://productcatalogue2015.s3.amazonaws.com/BAS-4757_260_250.jpg"
        />
        <ImageHeading>dsdsdfdsfd dsa dsa</ImageHeading>
        <ImagePrice>R5</ImagePrice>
      </Top>
      <Bottom>
        <HeadingContent>Blah Blah Blag</HeadingContent>
        <BasicContent>
          <Field>
            <FieldHeading>Code:</FieldHeading>
            <FieldText>Text</FieldText>
          </Field>
          <Field>
            <FieldHeading>Code:</FieldHeading>
            <FieldText>Text</FieldText>
          </Field>
          <Field>
            <FieldHeading>Stock On Hand:</FieldHeading>
            <FieldText>Text</FieldText>
          </Field>
        </BasicContent>
        <PricesContent>
          <PricesField>See All Tiers</PricesField>
        </PricesContent>
        <LinksContent>
          <Link>Details</Link>
          <Link>Add To Cart</Link>
        </LinksContent>
      </Bottom>
    </Container>
  );
}

export default ProductCard;
