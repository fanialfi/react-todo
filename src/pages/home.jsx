import Table from "../components/fragments/table";
import NewTask from "../components/layouts/newTask";
import data from "../assets/data.json";

export default function HomePage() {
  return (
    <>
      <NewTask />
      <Table data={data} />
    </>
  );
}
