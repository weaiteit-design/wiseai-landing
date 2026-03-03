export default function Footer() {
  return (
    <footer className="border-t border-[var(--wise-divider)] pt-8 pb-4">
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-sm text-[var(--wise-text3)]">
          &copy; {new Date().getFullYear()} TheWiseAI. Your Intelligence,
          Amplified.
        </p>
      </div>
    </footer>
  );
}
