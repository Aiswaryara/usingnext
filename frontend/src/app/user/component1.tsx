
type Component1Props = {
  name: string;
  description: string;
};

export default function Component1({ name, description }: Component1Props) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}