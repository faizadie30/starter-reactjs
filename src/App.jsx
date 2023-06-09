import { useUsersQuery } from "./features/user/usersAPI";
import "./index.css";

function App() {
  console.log(import.meta.env.VITE_APP_DEV);
  const { data } = useUsersQuery();
  console.log("data:", data);
  return (
    <>
      <h1 className="text-3xl text-rose-600 font-bold underline text-center">
        Hello world!
      </h1>
    </>
  );
}

export default App;
