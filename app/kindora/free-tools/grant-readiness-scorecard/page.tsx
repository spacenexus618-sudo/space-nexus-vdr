"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  { id: "einz", question: "Is your organization registered as a 501(c)(3) public charity with the IRS?", weight: 20 },
  { id: "sam", question: "Is your organization registered in SAM.gov with an active entity record?", weight: 15 },
  { id: "board", question: "Does your board actively oversee finances with regular meetings and an audit committee?", weight: 15 },
  { id: "controls", question: "Do you maintain internal financial controls with separated duties (e.g., no single person controls all funds)?", weight: 15 },
  { id: "policies", question: "Do you have a Whistleblower Policy and a Conflict of Interest Policy on file?", weight: 15 },
  { id: "donorlog", question: "Are all donations logged with donor details, dates, and amounts in a searchable system?", weight: 10 },
  { id: "reports", question: "Do you file your Form 990 (or 990-EZ/990-N) on time every year?", weight: 10 },
];

const missingPolicyHints: Record<string, string[]> = {
  einz: ["501(c)(3) determination letter", "State registration filings"],
  sam: ["Active SAM.gov entity registration", "UEI number documented"],
  board: ["Board meeting minutes archive", "Audit committee charter"],
  controls: ["Segregation of duties checklist", "Approval thresholds policy"],
  policies: ["Whistleblower Policy", "Conflict of Interest Policy"],
  donorlog: ["Donor database / CRM", "Donation receipting workflow"],
  reports: ["Form 990 filing calendar", "Annual report archive"],
};

export default function GrantReadinessScorecardPage() {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({});
  const [showResult, setShowResult] = useState(false);

  const answered = Object.keys(answers).filter((k) => answers[k] !== null).length;
  const complete = answered === questions.length;

  const score = complete
    ? questions.reduce((sum, q) => sum + (answers[q.id] ? q.weight : 0), 0)
    : 0;

  const missing = questions.filter((q) => answers[q.id] === false);

  const handleSubmit = () => {
    if (complete) setShowResult(true);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Grant Readiness & Compliance Scorecard</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Answer 7 quick questions to get your grant readiness score (0-100%) and see which compliance policies you may be missing.
          </p>
        </div>

        {!showResult ? (
          <div className="space-y-4">
            {questions.map((q, i) => (
              <div key={q.id} className="p-5 rounded-2xl bg-gray-800/60 border border-gray-700/50">
                <p className="text-white font-medium mb-3">
                  <span className="text-[#60a5fa] font-bold mr-2">{i + 1}.</span>
                  {q.question}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setAnswers((a) => ({ ...a, [q.id]: true }))}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                      answers[q.id] === true
                        ? "bg-green-500/20 border-green-500 text-green-300"
                        : "bg-gray-700/40 border-gray-600 text-gray-400 hover:bg-gray-700"
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setAnswers((a) => ({ ...a, [q.id]: false }))}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                      answers[q.id] === false
                        ? "bg-red-500/20 border-red-500 text-red-300"
                        : "bg-gray-700/40 border-gray-600 text-gray-400 hover:bg-gray-700"
                    }`}
                  >
                    No
                  </button>
                  <button
                    onClick={() => setAnswers((a) => ({ ...a, [q.id]: null }))}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                      answers[q.id] === null
                        ? "bg-gray-500/20 border-gray-400 text-gray-300"
                        : "bg-gray-700/40 border-gray-600 text-gray-400 hover:bg-gray-700"
                    }`}
                  >
                    Not sure
                  </button>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between pt-4">
              <p className="text-sm text-gray-400">{answered} / {questions.length} answered</p>
              <button
                onClick={handleSubmit}
                disabled={!complete}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  complete
                    ? "text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:shadow-lg hover:shadow-blue-500/40"
                    : "bg-gray-700 text-gray-500 cursor-not-allowed"
                }`}
              >
                Calculate my score
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-gray-800/60 border border-gray-700/50 text-center">
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">Grant Readiness Score</p>
              <p className={`text-6xl font-black ${score >= 70 ? "text-green-400" : score >= 40 ? "text-amber-400" : "text-red-400"}`}>
                {score}%
              </p>
              <p className="text-gray-400 mt-3 text-sm">
                {score >= 70
                  ? "Strong readiness — most foundations will see you as a reliable grant partner."
                  : score >= 40
                    ? "Moderate readiness — address the flagged gaps below before your next major application."
                    : "Early stage — focus on the compliance fundamentals below before pursuing grants."}
              </p>
            </div>

            {missing.length > 0 && (
              <div className="p-6 rounded-2xl bg-gray-800/60 border border-amber-500/30">
                <h2 className="text-lg font-bold text-white mb-3">You may be missing {missing.length} critical item{missing.length > 1 ? "s" : ""}</h2>
                <ul className="space-y-2">
                  {missing.map((q) => (
                    <li key={q.id} className="flex items-start gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <span className="text-white font-medium">{q.question}</span>
                        <span className="block text-xs text-gray-500 mt-1">{missingPolicyHints[q.id]?.join(" • ")}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#2563eb]/15 to-[#7c3aed]/15 border border-blue-500/30">
              <h2 className="text-lg font-bold text-white mb-2">Ready to close the gaps?</h2>
              <p className="text-sm text-gray-300 mb-4">
                Kindora&apos;s Grant Management Hub helps you store policy documents, track compliance deadlines, and log every donation in one secure place.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/kindora/demo"
                  className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
                >
                  See Kindora in action
                </Link>
                <button
                  onClick={() => { setShowResult(false); setAnswers({}); }}
                  className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-[#60a5fa] bg-blue-500/10 hover:bg-blue-500/20 rounded-full transition-all duration-300"
                >
                  Retake
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/kindora/free-tools" className="text-sm text-gray-500 hover:text-gray-300">← All free tools</Link>
        </div>
      </div>
    </div>
  );
}