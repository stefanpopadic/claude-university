export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden dot-grid flex flex-col">
      <div className="noise-overlay" />
      <div className="glow-orb" style={{ top: "-250px", right: "-200px" }} />
      <div className="glow-orb-secondary" style={{ bottom: "0", left: "-200px" }} />
      {children}
    </div>
  );
}
