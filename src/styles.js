import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-self: center; // center div
  justify-content: center; // center content
  flex-direction: column; // align fields top to bottom
  flex-wrap: nowrap; // don't wrap around
  justify-content: space-around;
  align-items: center;
  border-style: solid;
  margin: auto;
  margin-top: 30px;
  border-width: 9px;
  width: 40%;
  padding-bottom: 2%;
  border-color: #ACC8B4;
  background-color: #FFF9F0;
  border-radius: 10px;
`

export const Input = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
`

export const Col = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

export const Button = styled.button`
  display: inline-block;
  color: #fff;
  font-family: 'Literata';
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #6c757d;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,
    background-color .15s ease-in-out,
    border-color .15s ease-in-out,
    box-shadow .15s ease-in-out;
  text-transform: none;
  overflow: visible;
  letter-spacing: normal;
  word-spacing: normal;
  text-indent: 0px;
  text-shadow: none;
  align-items: flex-start;
`
export const FormGroup = styled.div`
  margin-bottom: 1rem;
  display: block;
`
export const Redirect = styled.a`
  font: 400 18px;
  font-family: 'Literata';
`

export const UserRow = styled.div`
  display: inline-block;
  width: 500px;
  height: 20px;
  padding: 10px;
  margin: 10px;
  border-radius: 30px;
  background: #F0D0D0;
`

export const LeaderboardRow = styled.div`
  display: inline-block;
  width: 500px;
  height: 20px;
  padding: 10px;
  margin: 10px;
  border-radius: 30px;
  background: #FFC5C5;
`
