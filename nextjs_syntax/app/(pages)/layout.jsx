export default function AppPagesLayout({ children }) {
    console.log("This is root layout for (pages) route group")
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>
  
        {children}
      </section>
    );
  }
  