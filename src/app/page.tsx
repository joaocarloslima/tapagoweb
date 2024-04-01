import NavBar from "@/components/NavBar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <NavBar active="dashboard" />
      <h1>Dashboard</h1>
    </main>
  );
}
