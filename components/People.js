import { usePeoplesStore } from "../pages/zustand/store";

export default function People() {
  const people = usePeoplesStore((state) => state.people);

  return (
    <div>
      <p>We have {people.length} people!</p>
      <ul>
        {people.map((p) => (
          <li key={Math.random()}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
