import { Link } from "react-router-dom";
export const PrintData = (info) => {
  return (
    <>
      {info.item.map((value) => {
        return (
          <div>
            <Link to={`/Users/${value.id}`}>
              User id is {value.userId} and id {value.id}
            </Link>
          </div>
        );
      })}
    </>
  );
};
