import { Form } from "../Form/Form";
import { Title } from "../Title/Title";
import { Text } from "../Text/Text";
import { Star } from "../Star/Star";
import s from "./App.module.css";

function App() {
  return (
    <div className={s.App}>
      <div className={s.leftSide}>
        <div className={s.formTitle}>
          <Title title={"Запрос #24"} style={s.mainSubtitle}></Title>
          <Text text={"Ожидает обработки"} style={s.waiting}></Text>
        </div>
        <Text
          text={
            "Информация о точках маршрута, модели транспортного средства и другие сведения о перевозке."
          }
          style={s.info}
        ></Text>
        <Text>
          <span className={s.attention}>
            Поля, помеченные <Star /> являются обязательными для заполнения.
          </span>
        </Text>
      </div>
      <div className={s.rightSide}>
        <Form></Form>
      </div>
    </div>
  );
}

export default App;
