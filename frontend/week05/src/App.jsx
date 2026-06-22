import "./App.css";
import * as S from "./styles/Calculator.Styled";
import { buttons } from "./data/buttonData";

function App() {
  return (
    <S.Page>
      <S.CalculatorPannel>
        <S.Display>0</S.Display>

        <S.ButtonGrid>
          {buttons.map((button) => (
            <S.CalcButton
              key={button.label}
              type="button"
              $variant={button.variant}
              $span={button.span}
            >
              {button.label}
            </S.CalcButton>
          ))}
        </S.ButtonGrid>
      </S.CalculatorPannel>
    </S.Page>
  );
}

export default App;
