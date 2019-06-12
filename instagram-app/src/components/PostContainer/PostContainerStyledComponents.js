import styled from 'styled-components'

const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 15px;
    margin-top: 15px;
`

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    
`

const Image = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-left: 15px;
`

const Username = styled.div`
    margin-top: 10px;
    font-weight: bold;
    font-size: 14px;
    margin-left: 10px;
    `

const HeartDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;
    width: 100px;
`

const LikeDiv = styled.div`
    display: flex;
    margin-left: 18px;
    margin-top: 5px;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 10px;
`

export {Image, Header, Username, HeaderDiv, HeartDiv, LikeDiv} 