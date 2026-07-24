interface AnswerBlockProps {
  text: string;
  className?: string;
}

export default function AnswerBlock({ text, className = "" }: AnswerBlockProps) {
  return (
    <div
      className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ${className}`}
    >
      <p className="text-base text-gray-700 leading-relaxed bg-blue-50/50 border border-blue-100 rounded-xl px-6 py-4">
        {text}
      </p>
    </div>
  );
}
