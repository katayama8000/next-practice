import React, { FC, useEffect } from "react";

type TButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  color?: "blue" | "red" | "green" | "yellow" | "purple";
};

export const TButton: FC<TButtonProps> = ({
  onClick,
  children,
  color = "blue",
}) => {
  const [style, setStyle] = React.useState("");
  useEffect(() => {
    switch (color) {
      case "blue":
        setStyle(
          "mr-2 mb-2 rounded-lg border border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800"
        );
        break;
      case "red":
        setStyle(
          "mr-2 mb-2 rounded-lg border border-red-700 px-5 py-2.5 text-center text-sm font-medium text-red-700 hover:bg-red-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-800"
        );
        break;
      case "green":
        setStyle(
          "mr-2 mb-2 rounded-lg border border-green-700 px-5 py-2.5 text-center text-sm font-medium text-green-700 hover:bg-green-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:bg-green-600 dark:hover:text-white dark:focus:ring-green-800"
        );
        break;
      case "yellow":
        setStyle(
          "mr-2 mb-2 rounded-lg border border-yellow-700 px-5 py-2.5 text-center text-sm font-medium text-yellow-700 hover:bg-yellow-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:border-yellow-500 dark:text-yellow-500 dark:hover:bg-yellow-600 dark:hover:text-white dark:focus:ring-yellow-800"
        );
        break;
      case "purple":
        setStyle(
          "mr-2 mb-2 rounded-lg border border-purple-700 px-5 py-2.5 text-center text-sm font-medium text-purple-700 hover:bg-purple-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-300 dark:border-purple-500 dark:text-purple-500 dark:hover:bg-purple-600 dark:hover:text-white dark:focus:ring-purple-800"
        );
        break;
    }
  }, [color]);

  return (
    <button type="button" onClick={onClick} className={style}>
      {children}
    </button>
  );
};
