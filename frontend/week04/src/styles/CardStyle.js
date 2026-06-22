import styled from 'styled-components'

export const Card = styled.div`
  width: 280px;
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
  margin: 20px auto;
`

export const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 16px;
`

export const CardTitle = styled.h1`
  font-size: 24px;
  color: #333;
`

export const CardText = styled.p`
  font-size: 16px;
  color: #555;
`
