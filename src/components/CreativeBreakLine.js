export default function CreativeBreakLine({ title }) {
  return (
    <div className="space-y-6">
      <h1 className="lg:text-2xl text-xl  font-bold shadowText">{title}</h1>
      <div id="header-graphic" className="flex justify-center ">
        <div className="creative-break">
          <div className="left-diamond diamond"></div>
          <div className="right-diamond diamond"></div>
        </div>
      </div>
    </div>
  );
}
