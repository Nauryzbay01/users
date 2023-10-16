import { FC, useState } from "react";
import style from "./popup.module.css";

interface IPopup {
  setPopup: (popup: boolean) => void;
  popup: boolean;
}

const Popup: FC<IPopup> = ({ setPopup, popup }) => {
  const selectOptions = [
    { title: "Все", id: 1 },
    { title: "Модерация объявлений", id: 2 },
    { title: "Блог", id: 3 },
    { title: "Тех. поддержка", id: 4 },
    { title: "Обращения клиентов", id: 5 },
    { title: "Аналитика", id: 6 },
    { title: "Акции", id: 7 },
  ];

  const [selectBody, setSelectBody] = useState(false);
  const [checkedPermissions, setCheckedPermissions] = useState<number[]>([]);
  // const [checkedPermissionsList, setCheckedPermissionsList] = useState<
  //   string[]
  // >([]);
  // const [email, setEmail] = useState("");

  const closePopup = () => {
    setPopup(false);
  };

  // const submitData = () => {
  //   let users = JSON.parse(localStorage.users);
  //   let user = {
  //     name: "Пользователь",
  //     email: email,
  //     permissions: checkedPermissionsList,
  //     authorized: false,
  //     image: "",
  //   };
  //   users.push(user);
  //   localStorage.users = JSON.stringify(users);
  // };

  const handleChange = (id: number) => {
    if (id == 1 && !checkedPermissions?.includes(1)) {
      setCheckedPermissions([1, 2, 3, 4, 5, 6, 7]);
    } else if (id == 1 && checkedPermissions?.includes(1)) {
      setCheckedPermissions([]);
    } else if (id !== 1 && checkedPermissions?.includes(id)) {
      const arrayWithoutElem = checkedPermissions.filter(function (item) {
        return item !== id;
      });
      setCheckedPermissions(arrayWithoutElem);
    } else {
      setCheckedPermissions([...checkedPermissions, id]);
    }
  };

  const renderCheckedPermissions = selectOptions.map(({ id, title }) => {
    if (checkedPermissions?.includes(id) && id != 1) {
      // setCheckedPermissionsList([...checkedPermissionsList, title]);
      return <span>{title}</span>;
    }
    return null;
  });

  const renderSelectBody = selectOptions.map(({ title, id }) => {
    return (
      <div className={style.select_option} key={`select_${id}`}>
        <label
          className={
            checkedPermissions.includes(1) && id != 1 ? style.not_active : ""
          }
          htmlFor={`option_${id}`}
        >
          <input
            onChange={() => handleChange(id)}
            checked={checkedPermissions?.includes(id)}
            type="checkbox"
            id={`option_${id}`}
            name={`option_${id}`}
          />
          {title}
        </label>
      </div>
    );
  });

  if (!popup) {
    return null;
  }

  return (
    <div className={style.popup}>
      <div className={style.popup_wrapper}>
        <button onClick={closePopup} className={style.close_btn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.04771 6.95779L13.2984 12.2085C13.6889 12.599 13.6889 13.2322 13.2984 13.6227C12.9079 14.0132 12.2747 14.0132 11.8842 13.6227L6.79565 8.53416L1.70711 13.6227C1.31658 14.0132 0.683418 14.0132 0.292893 13.6227C-0.097631 13.2322 -0.0976313 12.599 0.292893 12.2085L5.54358 6.95779L0.292893 1.70711C-0.0976313 1.31658 -0.097631 0.683418 0.292893 0.292893C0.683418 -0.097631 1.31658 -0.0976313 1.70711 0.292893L6.79565 5.38143L11.8842 0.292893C12.2747 -0.0976313 12.9079 -0.097631 13.2984 0.292893C13.6889 0.683418 13.6889 1.31658 13.2984 1.70711L8.04771 6.95779Z"
              fill="#C1C1CB"
            />
          </svg>
        </button>
        <h3>Отправьте приглашение</h3>
        <input
          // onChange={(e) => setEmail(e.target.value)}
          className={style.email}
          type="text"
          placeholder="Email"
        />
        <div className={style.select}>
          <button
            onClick={() => setSelectBody(!selectBody)}
            className={style.select_header}
          >
            <div className={style.select_option_list}>
              {checkedPermissions.length > 0
                ? renderCheckedPermissions
                : "Выберите права доступа"}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
            >
              <path
                d="M1.00006 1.86407L5.86401 6.72803L10.728 1.86407"
                stroke="#C1C1CB"
                strokeWidth="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
          {selectBody && (
            <div data-attr="options" className={style.select_body}>
              {renderSelectBody}
            </div>
          )}
        </div>
        <button className={style.submit}>Отправить приглашение</button>
      </div>
    </div>
  );
};
export default Popup;
