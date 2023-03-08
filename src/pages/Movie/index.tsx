import MyCard from "../../components/Card";

export default function Movie() {
  return (
    <div className="App">
      <MyCard title="Meu título" text="Meu texto" hasButton={false} />
    </div>
  );
}
