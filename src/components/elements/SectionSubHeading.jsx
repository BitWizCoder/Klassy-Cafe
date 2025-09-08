export default function SectionSubHeading({ text }) {
  return (
    <div className="flex items-center gap-2 text-primary-500">
      <div className="w-10 h-0.5 bg-primary-500"></div>
      <p>{text}</p>
    </div>
  );
}
