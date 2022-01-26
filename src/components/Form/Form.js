import React from "react";
import { Text } from "../Text/Text";
import { Label } from "../Label/Label";
import { Input, Textarea, Select } from "../Input/Input";
import s from "./Form.module.css";
import { Icon } from "../Icon/Icon";
//дата
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const conditions = [{ id: 1, name: "fca", description: "FCA(Free Carrier)" }];
const truckType = [{ id: 1, name: "big", description: "90m3" }];

export const Form = () => {
  const onChange = (e) => {};

  return (
    <form className={s.form}>
      <Label label={"Адрес места загрузки "} star={true}>
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
            onChange={onChange}
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
            onChange={onChange}
          ></Input>
        </div>
      </Label>
      <Label label={"Адрес места разгрузки "} star={true}>
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
            onChange={onChange}
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
          <div className={s.calendar}>
            <Datetime
              type={"date"}
              onChange={onChange}
              name={"calendar"}
              dateFormat="DD.MM.YYYY"
              timeFormat={false}
            ></Datetime>
          </div>
        </div>
      </Label>
      <Label label={"Тип кузова "} star={true}>
        <div className={s.inputWithIcon}>
          <Icon
            name={"truck"}
            color={"grey"}
            size={32}
            className={s.icon}
          ></Icon>
          <Select list={truckType}></Select>
        </div>
        <Text>
          <span className={s.truckInfo}>
            Объем:{" "}
            <span className={s.truckNumbers}>
              до {truckType[0].description}
            </span>
            . Грузоподъемность:{" "}
            <span className={s.truckNumbers}>до 22 тонн</span>
          </span>
        </Text>
      </Label>
      <Label label={"Условия поставки"}>
        <Select list={conditions} style={s.conditions}></Select>
      </Label>
      <Label label={"Комментарий"} style={s.commentTitle}>
        <Textarea
          onChange={onChange}
          value={
            "Требования прежние: 22-23т, АДР 3 класс, без температурного режима."
          }
        ></Textarea>
      </Label>
    </form>
  );
};
