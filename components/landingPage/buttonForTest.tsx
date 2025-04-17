import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

export default function ButtonForTest() {
  return (
    <InteractiveHoverButton>
      <div className="flex flex-col items-center justify-center gap-2 w-full px-8">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Teste Grátis
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Sem cartão de crédito.
        </p>
      </div>
    </InteractiveHoverButton>
  );
}
