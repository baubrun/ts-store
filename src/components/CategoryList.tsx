import React, { FunctionComponent } from "react";

interface Props {
  categories: string[];
  selected: string;
  selectCategory: (category: string) => void;
}

const CategoryList: FunctionComponent<Props> = (props) => {
  return (
    <div>
      {["All", ...props.categories].map((c) => {
        let btnClass = props.selected === c ? "btn-primary" : "btn-secondary";
        return (
          <button
            className={`btn btn-block ${btnClass}`}
            key={c}
            onClick={() => props.selectCategory(c)}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryList;
