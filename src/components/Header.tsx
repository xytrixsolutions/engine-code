import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-xl font-bold">My Site</h1>
      <ThemeToggle />
    </header>
  );
}
