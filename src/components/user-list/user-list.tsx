import { FC } from "react";
import { useAppContext } from "../../context/context";
import { IUser } from "../../types/types";
import UserItem from "../user-item";
import style from "./user-list.module.css";
interface IUsers {
  users: IUser[];
}
const UserList: FC<IUsers> = ({ users }) => {
  const { value } = useAppContext();
  const renderUsers = users
    .filter((item) => {
      return value.toLowerCase() === ""
        ? item
        : item.email.toLowerCase().includes(value);
    })
    .map(({ name, email, permissions, authorized, image }) => {
      return (
        <UserItem
          name={name}
          email={email}
          permissions={permissions}
          authorized={authorized}
          image={image}
          key={email}
        />
      );
    });
  return <div className={style.users}>{renderUsers}</div>;
};
export default UserList;
