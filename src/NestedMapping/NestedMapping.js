import React from "react";

const NestedMapping = () => {

  const info = [
    {
      id: 1,
      name: "Suraj",
      bgColor: [
        {
          id_color: 1,
          background: "#405EC9",
        },
        {
          id_color: 2,
          background: "#000000",
        },
      ],
    },
    {
        id: 2,
        name: "Ledina",
        bgColor: [
          {
            id_color: 1,
            background: "#405EC9",
          },
          {
            id_color: 2,
            background: "#000000",
          },
          {
              id_color: 3,
              background: "red",
            },
        ],
      },
      {
        id_color: 3,
        background: "#405EC9",
      },
      {
        id_color: 2,
        background: "#000000",
      },
  ];
  return (
    <>
      {info.map((pro, index) => {
        return (
          <div key={index}>
            <h2>Name: {pro.name}</h2>

            {pro.bgColor.map((datas, index) => {
              return (
                <div key={index}>
                  <button style={{ background:`${datas.background}`}} className="BTN"></button>
                </div>
              );
            })}

            <hr />
          </div>
        );
      })}
    </>
  );
};

export default NestedMapping;
