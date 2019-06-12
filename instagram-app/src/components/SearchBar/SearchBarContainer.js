import React from 'react';
import { FaRegCompass, FaRegHeart, FaRegUser, FaInstagram, FaSearch } from 'react-icons/fa'
import {Header, IconDiv, SearchDiv, LeftImageDiv, Image, Input} from './SearchBarStyledComponents'


const SearchBar = props => {
  return (
    <Header>
      <LeftImageDiv>
        <FaInstagram size="24px"/>
        <Image primary src="https://fontmeme.com/images/instagram-new-logo.png" alt="instagram logo" />
      </LeftImageDiv>
      <SearchDiv>
        {/* <FaSearch size="12px" margin-left="15px"/> */}
        <Input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
      </SearchDiv>
      <IconDiv>
        <>
          <FaRegCompass size="24px"/>
        </>
        <>
          <FaRegHeart size="24px"/>
        </>
        <>
          <FaRegUser size="24px"/>
        </>
      </IconDiv>
    </Header>
  );
};

export default SearchBar;
