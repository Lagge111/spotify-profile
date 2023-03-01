const TimeRangeButtons = ({ activeRange, setActiveRange }) => {
  return (
    <ul className="flex list-none mt-0 mr-0 mb-8 ml-0 px-0 py-6 md:absolute md:top-0 md:right-8 md:mb-0 gap-2 font-montserrat text-xs font-semibold text-primary_text">
      <li className="mr-2 md:ml-2 md:mr-0">
        <button
          className={`hover:text-primary_text/80 px-4 py-3 rounded-full ${
            activeRange === "short" ? "bg-secondary" : "bg-dark_gray"
          }`}
          onClick={() => setActiveRange("short")}
        >
          This Month
        </button>
      </li>
      <li>
        <button
          className={`${
            activeRange === "medium" ? "bg-secondary" : "bg-dark_gray"
          } hover:text-primary_text/80 px-4 py-3 rounded-full`}
          onClick={() => setActiveRange("medium")}
        >
          Last 6 Months
        </button>
      </li>
      <li>
        <button
          className={`${
            activeRange === "long" ? "bg-secondary" : "bg-dark_gray"
          } hover:text-primary_text/80 px-4 py-3 rounded-full`}
          onClick={() => setActiveRange("long")}
        >
          All Time
        </button>
      </li>
    </ul>
  );
};

export default TimeRangeButtons;
