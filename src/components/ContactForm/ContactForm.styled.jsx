import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 16px;
  border: none;
  outline: 0;
  background-color: #fff;
  box-shadow: 0 1px 6px 0 #20212447;
`;

export const Button = styled.button`
  padding: 8px 16px;
  margin-top: 8px;
  font-size: 18px;
  border-radius: 24px;
  border: 1px solid;
  background-color: #f4f1de;
  color: #000;
  &:hover {
    background: #81b29a;
    color: #f4f1de;
  }
`;

export const Text = styled.p`
  margin-bottom: 8px;
  color: #000;
  font-weight:700;
`;