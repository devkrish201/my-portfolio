export default function DevKrishLogo() {
  return (
    <div className="flex items-center gap-2 text-3xl font-bold select-none">
      {/* Symbol Logo */}
      <div className="relative w-10 h-10 flex items-center justify-center text-[#4fc3f7]">
        <span className="absolute -left-2 text-4xl font-mono rotate-[-15deg]">⊃</span>
        <span className="absolute left-[0.2rem] top-1 text-3xl rotate-[10deg] text-purple-600">{'<'}</span>
        <span className="absolute bottom-1 right-1 text-2xl text-gray-700 dark:text-gray-300">.</span>
      </div>

      {/* Brand Name */}
      <span className="text-gray-900 dark:text-white tracking-wide">
        Dev<span className="text-purple-600">Krish</span>
      </span>
    </div>
  );
}
