export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-900 p-6">
      <div className="grid lg:grid-cols-4 gap-6">

        <div className="bg-slate-800 rounded-2xl h-[500px] animate-pulse" />

        <div className="lg:col-span-3 space-y-6">

          <div className="bg-slate-800 rounded-2xl h-40 animate-pulse" />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 rounded-2xl h-48 animate-pulse" />
            <div className="bg-slate-800 rounded-2xl h-48 animate-pulse" />
            <div className="bg-slate-800 rounded-2xl h-48 animate-pulse" />
            <div className="bg-slate-800 rounded-2xl h-48 animate-pulse" />
          </div>

        </div>

      </div>
    </main>
  );
}

