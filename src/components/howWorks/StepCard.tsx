import { Music } from "lucide-react";

type StepCardProps = {
  title: string;
  description: string;
  Icon?: React.ElementType;
};

export default function StepCard(props: StepCardProps) {
  const { title, description, Icon } = props;

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-emerald-500 dark:bg-gray-900 text-white dark:text-slate-300">
        {Icon ? (
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        ) : (
          <Music className="h-5 w-5 sm:h-6 sm:w-6" />
        )}
      </div>
      <h3 className="mb-2 font-medium text-slate-800 dark:text-slate-200 text-center">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-center">
        {description}
      </p>
    </div>
  );
}
