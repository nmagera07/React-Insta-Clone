import styled from 'styled-components'

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    border-bottom: 1px solid gray;
`

const IconDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 150px;

`

const SearchDiv = styled.div`
    width: 300px;


`

const LeftImageDiv = styled.div`
    display: flex;
    
`

const Image = styled.img`
    height: 50px;
    width: 100px;
    margin-left: 12px;
    position: relative;
    bottom: 13px;
    border-left: 1px solid black;
`

const Input = styled.input`
    text-align: center;
    width: 200px;
    background-color: #f2f3f4;
    font-size: 12px;
`

export {Header, IconDiv, SearchDiv, LeftImageDiv, Image, Input}