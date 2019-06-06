import styled from 'styled-components'

const CommentDiv = styled.div`
   text-align: left;
   margin-left: 18px;
   line-height: 1.5rem;
   

   .usernames {
       font-weight: bold;
       font-size: 0.9rem;
   }
`
const OuterDiv = styled.div`
    border-top: 1px solid rgb(228, 216, 216);
    margin-top: 10px;
`

const CommentInputForm = styled.input`
    width: 95%;
    height: 30px;
    margin-top: 10px;
    outline: none;
    border: 0;
    font-size: 14px;
`

export {CommentDiv, CommentInputForm, OuterDiv}