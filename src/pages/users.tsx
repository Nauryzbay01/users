import UserList from "../components/user-list";
import UserPageHeader from "../components/user-page-header";
import data from "../data.json";
const Users = () => {
  const { users } = data;
  localStorage.users = JSON.stringify(users);
  return (
    <>
      <UserPageHeader />
      <UserList users={users} />
    </>
  );
};
export default Users;
