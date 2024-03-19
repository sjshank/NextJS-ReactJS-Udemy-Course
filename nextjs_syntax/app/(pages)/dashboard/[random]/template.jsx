export default function Template({ children, params }) {
    console.log("params inside [random] template--", params);
  return <div>{children}</div>;
}