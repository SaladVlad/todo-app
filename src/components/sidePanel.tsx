import * as React from "react";
import { NavLink } from "react-router-dom";
import { getAllLists, ListType } from "../services/listService";
import { useEffect } from "react";

export const SidePanel = () => {
  type BoolType = {
    isActive: boolean;
  };
  const isNavLinkActive = ({ isActive }: BoolType) => {
    return isActive ? "active" : "";
  };

  const [lists, setLists] = React.useState<ListType[]>([]);

  useEffect(() => {
    getAllLists().then((result) => setLists(result));
  }, []);

  return (
    <aside className="side-panel">
      <h2>To-Do Lists</h2>
      <ul className="todo-lists">
        {lists.map((list) => (
          <li key={list.id}>
            <NavLink className={isNavLinkActive} to={`/lists/${list.id}`}>
              {list.name}
            </NavLink>
            <span>({list.numberOfActiveTasks})</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};
