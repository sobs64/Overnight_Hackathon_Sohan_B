import { notFound } from 'next/navigation';
import PersonalLoanUI from '@/components/LoanGuide/PersonalLoan/PersonalLoanUI';
import BusinessLoanUI from '@/components/LoanGuide/BusinessLoan/BusinessLoanUI';
import EducationLoanUI from '@/components/LoanGuide/EducationLoan/EducationLoanUI';

export function generateStaticParams() {
  return [
    { loanType: 'personal' },
    { loanType: 'business' },
    { loanType: 'education' },
  ];
}

export default async function LoanTypePage({
  params,
}: {
  params: Promise<{ loanType: string }>;
}) {
  const { loanType } = await params;

  // Validate language and set default to 'en' if not provided
  // Note: searchParams are not supported in static export
  const language = 'en';

  if (!['personal', 'business', 'education'].includes(loanType.toLowerCase())) {
    return notFound();
  }

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        {loanType.charAt(0).toUpperCase() + loanType.slice(1)} Loan Guide
      </h1>
      {loanType === 'personal' ? (
        <PersonalLoanUI language={language} />
      ) : loanType === 'business' ? (
        <BusinessLoanUI language={language} />
      ) : (
        <EducationLoanUI language={language} />
      )}
    </div>
  );
} 