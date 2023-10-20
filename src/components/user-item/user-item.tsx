import React, { FC } from "react";
import imageSrc from "../../assets/btn-image.svg";
import person from "../../assets/person.svg";
import { IUser } from "../../types/types";
import style from "./user-item.module.css";
const UserItem: FC<IUser> = ({
  name,
  email,
  permissions,
  image,
  authorized,
}) => {
  const renderPermissions = permissions.map((item, ix) => {
    return (
      <div
        key={`permission_${item}_${ix}`}
        className={`${style.permission_item} ${
          item === "Администратор" ? style.admin : ""
        }`}
      >
        {item}
      </div>
    );
  });
  return (
    <div className={style.user}>
      <div className={style.user_image}>
        {image ? (
          <img alt="person" src={image} />
        ) : (
          <img className={style.person_image} src={person} alt="Default User" />
        )}
      </div>
      <div className={style.user_info}>
        <div className={style.user_info_header}>
          <h3>{name}</h3>
          {!authorized && <span>Не авторизован</span>}
          <span>{email}</span>
          <button className={style.menu_btn}>
            <img src={imageSrc} alt="Button" />
          </button>
        </div>
        <div className={style.permission_items}>{renderPermissions}</div>
      </div>
    </div>
  );
};
export default React.memo(UserItem);
