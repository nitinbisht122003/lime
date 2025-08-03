export function FontStyles() {
  return (
    <style href="font-styles" precedence="critical-styles">{`
      body {
        font-family: var(--font-hanken-grotesk);
        font-optical-sizing: auto;
        font-smoothing: antialiased;
        -webkit-font-smoothing: antialiased;
        margin: 0;
      }
    `}</style>
  );
}
