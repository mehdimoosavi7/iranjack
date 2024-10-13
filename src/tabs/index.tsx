import { useState } from "react";

const Tabs = () => {
  const tabs = [1, 2, 3];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="tabs">
      {tabs?.map((tab, index) => {
        return (
          <span
            className={`tab ${index === activeTab && "active"}`}
            onClick={() => setActiveTab(index)}
          >
            Tab {tab}
          </span>
        );
      })}
    </div>
  );
};

export default Tabs;
