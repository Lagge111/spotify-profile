const TimeRangeButtons = ({ activeRange, setActiveRange }) => {
  return (
    <ul className="flex list-none mt-0 mr-0 mb-8 ml-0 p-0 md:absolute md:top-0 md:right-8 m:mb-0">
      <li className="mr-2 md:ml-2 md:mr-0">
        <button
          className={`bg-dark_gray hover:bg-gray-600 active:bg-secondary ${
            activeRange === "short" ? "active" : ""
          }`}
          onClick={() => setActiveRange("short")}
        >
          This Month
        </button>
      </li>
      <li>
        <button
          className={`bg-dark_gray hover:bg-gray-600 active:bg-secondary ${
            activeRange === "medium" ? "active" : ""
          }`}
          onClick={() => setActiveRange("medium")}
        >
          Last 6 Months
        </button>
      </li>
      <li>
        <button
          className={`bg-dark_gray hover:bg-gray-600 active:bg-secondary ${
            activeRange === "long" ? "active" : ""
          }`}
          onClick={() => setActiveRange("long")}
        >
          All Time
        </button>
      </li>
    </ul>
  );
};

export default TimeRangeButtons;
