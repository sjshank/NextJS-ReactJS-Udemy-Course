export default function DashboardLayout(props) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>

      {props.children}
      <div>
        <h4>
          Below section renders content from union component
        </h4>
        <br/>
        {props.union}
      </div>
    </section>
  );
}
