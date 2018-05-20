import React from 'react';

const RenderList = data => {
  const list = [];
  data.forEach((item, index) =>
    list.push(
      <div key={index} className="card--item__container">
        <a
          href="http://yi-zhuang.surge.sh/"
          target="_blank"
          className="card--item__container-content"
        >
          {item}
        </a>
      </div>
    )
  );
  return list;
};

export default RenderList;
