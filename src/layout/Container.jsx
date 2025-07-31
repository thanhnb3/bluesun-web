export default function Container({ children, className = "" }) {
  return (
    <section className={`max-w-[1120px] mx-auto p-4 ${className}`}>
      {children}
    </section>
  );
}
