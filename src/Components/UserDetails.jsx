import { useParams } from "react-router-dom";
export const UserDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <div>{id}</div>
    </>
  );
};
