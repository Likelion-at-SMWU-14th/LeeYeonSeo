import * as S from "../styles/Calculator.Styled";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButton from "./CalculatorButton";

function Calculator() {
  return (
    <S.Page>
      <S.CalculatorPannel>
        <CalculatorDisplay />
        <CalculatorButton />
      </S.CalculatorPannel>
    </S.Page>
  );
}

export default Calculator;
