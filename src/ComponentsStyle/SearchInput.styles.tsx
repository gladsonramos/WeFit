import React from 'react';
import styled from 'styled-components';
import searchIcon from '../Assets/Search.png';


const InputContainer = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  padding: 16px 40px 16px 16px; 
  border-radius: 8px;
  font-size: 16px;
  width: 100%; 
  box-sizing: border-box; 
  background-color: white; 
  border: none; 
  &:focus {
    outline: 2px solid #009EDD; 
  }
  &::placeholder {
    text-align: left;
    color: #C0C0C0;
    padding-left: 0;
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  width: 24px; 
  height: 24px; 
  background-image: url(${searchIcon});
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer; 
`;

const ClickableSearchInput = ({ onChange, onClick, onBlur, ...props }: any) => {
  return (
    <InputContainer>
      <SearchInput onChange={onChange} {...props} onBlur={onBlur} />
      <SearchIcon onClick={onClick} />
    </InputContainer>
  );
};

export default ClickableSearchInput;
