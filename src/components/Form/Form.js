import React from "react";
// import { Title } from '../Title/Title';
import { Text } from "../Text/Text";
import { Label } from "../Label/Label";
import { Input, Textarea, Select } from "../Input/Input";
import { Star } from "../Star/Star";
import s from "./Form.module.css";
import { Icon } from "../Icon/Icon";

const conditions = [{ id: 1, name: "fca", description: "FCA(Free Carrier)" }];
const truckType = [{ id: 1, name: "big", description: "90m3" }];

export const Form = () => {

  return (
    <form className={s.form}>
      <Label label={"Адрес места загрузки "} star={true}>
        {/* <Star /> */}
        <div className={s.inputWithIcon}>

        <Icon
          name={"location"}
          color={"grey"}
          size={32}
          className={s.icon}
        ></Icon>
        <Input
          type={"text"}
          value={"Нидерланды (89кв.)"}
          name={"location"}
          readOnly
        ></Input>
        </div>
      </Label>
      <Label label={"Таможня назначения"}>
        <div className={s.inputWithIcon}>

        <Icon
          name={"customs"}
          color={"grey"}
          size={32}
          className={s.icon}
        ></Icon>
        <Input
        type={"text"}
        value={"СВХ Ренус Терминал"}
        name={"customs"}
        readOnly
        ></Input>
        </div>
      </Label>
      <Label label={"Адрес места разгрузки "} star={true}>
        {/* <Star /> */}
        <div className={s.inputWithIcon}>

        <Icon
          name={"finish"}
          color={"grey"}
          size={32}
          className={s.icon}
        ></Icon>
        <Input
        type={"text"}
        value={"г.Серпухов"}
        name={"finish"}
        readOnly
        ></Input>
        </div>
      </Label>
      <Label label={"Предполагаемая дата перевозки"}>
        <div className={s.inputWithIcon}>

        <Icon
          name={"calendar"}
          color={"grey"}
          size={32}
          className={s.icon}

        ></Icon>
        <Input
        type={"date"}
        // value={"25.10.2021"}
        readOnly
        name={"calendar"}
        ></Input>
        </div>
      </Label>
      <Label label={"Тип кузова "} star={true}>
        <div className={s.inputWithIcon}>

        {/* <Star /> */}
        <Icon name={"truck"} color={"grey"} size={32} className={s.icon}></Icon>
        <Select list={truckType}></Select>
        </div>
        <Text>
            <span>Объем: <span>до {truckType[0].description}</span>. Грузоподъемность: <span>до 22 тонн</span></span>
        </Text>
      </Label>
      <Label label={"Условия поставки"}>
        <Select list={conditions}></Select>
      </Label>
      <Label label={"Комментарий"}>
        <Textarea
        readOnly
        value={'Требования прежние: 22-23т, АДР 3 класс, без температурного режима.'}
        ></Textarea>
      </Label>
    </form>
  );
};
