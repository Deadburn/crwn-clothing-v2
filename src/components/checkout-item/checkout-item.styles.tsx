import styled from "styled-components";

export const CheckOutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const CheckOutItemImgContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CheckOutItemArrow = styled.div`
  cursor: pointer;
`;

export const CheckOutItemRemove = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export const CheckOutItemName = styled.span`
  width: 23%;
`;

export const CheckOutItemQty = styled.span`
  width: 23%;
  display: flex;
`;

export const CheckOutItemVal = styled.span`
  margin: 0 10px;
`;
export const CheckOutItemPrice = styled.span`
  width: 23%;
`;
