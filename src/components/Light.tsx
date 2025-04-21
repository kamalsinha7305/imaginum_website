const Light = ({ top, left }: { top: number; left: number }) => {
  return (
    <div
      className="absolute -z-30"
      style={{
        top: `${top}rem`,
        left: `${left}rem`,
      }}
    >
      <div className="h-[20rem] w-[40rem] rounded-full bg-[#006fff] blur-[600px]"></div>
    </div>
  ); 
};

export default Light;