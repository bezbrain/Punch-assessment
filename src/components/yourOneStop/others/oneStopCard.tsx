interface OneStopCardProps {
  title: string;
  card: { id: number; name: string; icon: string }[];
}

const OneStopCard = ({ title, card }: OneStopCardProps) => {
  return (
    <div className="bg-white rounded-[7px] py-4 px-[2vw] max-w-[730px] mx-auto smxl:max-w-full">
      <p className="mb-4">{title}</p>

      <div className="flex flex-wrap justify-center surfaceDuo:justify-between">
        {card.map((each) => {
          const { id, name, icon } = each;
          return (
            <div key={id}>
              <div
                className={`bg-[#EDEFFF] w-[56px] h-[56px] flex items-center justify-center mx-auto md:h-[86px] md:w-[86px] ${
                  !name ? "rounded-[30px]" : "rounded-full"
                }`}
              >
                <img src={icon} alt={name} className="" />
              </div>
              <p className="text-[14px] font-semibold text-center my-3 leading-[18px] w-[80px]">
                {name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OneStopCard;
