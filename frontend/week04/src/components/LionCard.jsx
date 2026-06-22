import lion3 from '../assets/lion3.jpeg'
import * as S from '../styles/CardStyle'

const LionCard = () => {
  const isReal = true
  return (
    <S.Card>
      <S.CardImage src={lion3} />
      <S.CardTitle> 3번 사자 </S.CardTitle>
      <S.CardText>
        {isReal ? '진짜 아기사자랍니다 ~ 👶🏻 !!' : '땡 ! 저는 가짜 아기사자에요 ✌🏽'}
      </S.CardText>
    </S.Card>
  )
}

export default LionCard
