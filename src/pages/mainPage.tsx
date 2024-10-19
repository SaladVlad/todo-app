import React from "react";
import { SidePanel } from "../components/sidePanel";

export const MainPage = () => {
  return (
    <div className="container">
      <SidePanel />
      <main className="main-content">
        <div className="header">
          <button className="logout-btn">Logout</button>
        </div>

        <section className="greeting-message" id="greeting-message">
          <h2>Welcome to To-Do App!</h2>
          <p>Select a list from the side panel to get started.</p>
        </section>
      </main>
    </div>
  );
};
