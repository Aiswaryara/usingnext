import Component1 from './component1';

export default function Page() {
  return (
    <div>
      <Component1
        name="hello"
        description="Hooks let you use different React features from your components. "
      />
      <Component1
        name="Hi"
        description="You can either use the built-in Hooks or combine them to build your own. This page lists all built-in Hooks in React."
      />
    </div>
  );
}