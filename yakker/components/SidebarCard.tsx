import React from "react";

interface Props {
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  title: string;
}

const SidebarCard = ({ Icon, title }: Props) => {
  return (
    <div className="flex group max-w-fit items-center space-x-2 px-5 py-5 rounded-full cursor-pointer transition-all duration-200 hover:bg-gray-50">
      <Icon className="w-7 h-7" />
      <p className=" hidden md:inline-flex group-hover:text-yakker text-base font-light lg:text-xl">
        {title}
      </p>
    </div>
  );
};

export default SidebarCard;
