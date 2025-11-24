interface ProgressDotsProps {
  currentStep: number;
  onStepClick: (stepIndex: number) => void;
}

export default function ProgressDots({
  currentStep,
  onStepClick,
}: ProgressDotsProps) {
  const totalSteps = 4;

  return (
    <div className="progress-dots flex gap-3 mt-12">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const isActive = index === currentStep;
        const isPast = index < currentStep;

        return (
          <div
            key={index}
            onClick={() => {
              if (isPast) {
                onStepClick(index);
              }
            }}
            className={`w-2 h-2 rounded-full bg-[#484848] transition-opacity ${
              isActive ? "opacity-100" : "opacity-[0.2]"
            } ${isPast ? "cursor-pointer hover:opacity-50" : ""}`}
          />
        );
      })}
    </div>
  );
}
