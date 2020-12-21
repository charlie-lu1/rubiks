import React, { useState } from "react";
import { yellow, white, green, blue, orange, red } from "../utils/initCube";
import { Cube } from "../utils/Cube";

let rubix = new Cube(yellow, white, green, blue, orange, red);

const ReactCube = () => {
  const [cube, setCube] = useState(rubix);
  // commandies will keep track of the four commands tied to WASD
  const [commandies, setCommands] = useState([
    "do_nothing",
    "do_nothing",
    "do_nothing",
    "do_nothing",
  ]);

  const commands = [
    "top_to_left",
    "top_to_right",
    "mid_to_left",
    "mid_to_right",
    "bot_to_left",
    "bot_to_right",
    "left_to_up",
    "left_to_down",
    "middle_to_up",
    "middle_to_down",
    "right_to_up",
    "right_to_down",
    "h_left_to_up",
    "h_left_to_down",
    "h_middle_to_up",
    "h_middle_to_down",
    "h_right_to_up",
    "h_right_to_down"
  ]

  const command = (phrase) => {
    rubix.command(phrase);
    let nextCube = new Cube(
      rubix.vert1,
      rubix.vert2,
      rubix.hori1,
      rubix.hori2,
      rubix.lati1,
      rubix.lati2
    );
    setCube(nextCube);
  };

  // On pressing WASD, move the selected cell up or down
  React.useEffect(() => {
    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "w":
          command(commandies[0]);
          console.log(commandies);
          console.log("w pressed");
          break;
        case "a":
          command(commandies[1]);
          // console.log(commandies)
          // console.log('a pressed')
          break;
        case "s":
          command(commandies[3]);
          // console.log(commandies)
          // console.log('s pressed')
          break;
        case "d":
          command(commandies[2]);
          // console.log(commandies)
          // console.log('d pressed')
          break;
        default:
          console.log("default case");
          break;
      }
      console.table(count());
    });
  }, [commandies]);

  const count = () => {
    const res = {
      red: 0,
      blue: 0,
      green: 0,
      yellow: 0,
      orange: 0,
      white: 0,
    };
    const countArr = [
      cube.vert1.topLeft.self,
      cube.vert1.topMid.self,
      cube.vert1.topRight.self,
      cube.vert1.middleLeft.self,
      cube.vert1.middleMid.self,
      cube.vert1.middleRight.self,
      cube.vert1.bottomLeft.self,
      cube.vert1.bottomMid.self,
      cube.vert1.bottomRight.self,
      cube.hori1.topLeft.self,
      cube.hori1.topMid.self,
      cube.hori1.topRight.self,
      cube.hori1.middleLeft.self,
      cube.hori1.middleMid.self,
      cube.hori1.middleRight.self,
      cube.hori1.bottomLeft.self,
      cube.hori1.bottomMid.self,
      cube.hori1.bottomRight.self,
      cube.lati1.topLeft.self,
      cube.lati1.topMid.self,
      cube.lati1.topRight.self,
      cube.lati1.middleLeft.self,
      cube.lati1.middleMid.self,
      cube.lati1.middleRight.self,
      cube.lati1.bottomLeft.self,
      cube.lati1.bottomMid.self,
      cube.lati1.bottomRight.self,
      cube.hori2.topLeft.self,
      cube.hori2.topMid.self,
      cube.hori2.topRight.self,
      cube.hori2.middleLeft.self,
      cube.hori2.middleMid.self,
      cube.hori2.middleRight.self,
      cube.hori2.bottomLeft.self,
      cube.hori2.bottomMid.self,
      cube.hori2.bottomRight.self,
      cube.lati2.bottomLeft.self,
      cube.lati2.bottomMid.self,
      cube.lati2.bottomRight.self,
      cube.lati2.middleLeft.self,
      cube.lati2.middleMid.self,
      cube.lati2.middleRight.self,
      cube.lati2.topLeft.self,
      cube.lati2.topMid.self,
      cube.lati2.topRight.self,
      cube.vert2.topLeft.self,
      cube.vert2.topMid.self,
      cube.vert2.topRight.self,
      cube.vert2.middleLeft.self,
      cube.vert2.middleMid.self,
      cube.vert2.middleRight.self,
      cube.vert2.bottomLeft.self,
      cube.vert2.bottomMid.self,
      cube.vert2.bottomRight.self,
    ];
    countArr.forEach((color) => {
      switch (color) {
        case "red":
          res.red += 1;
          break;
        case "blue":
          res.blue += 1;
          break;
        case "green":
          res.green += 1;
          break;
        case "yellow":
          res.yellow += 1;
          break;
        case "orange":
          res.orange += 1;
          break;
        case "white":
          res.white += 1;
          break;
        default:
          console.log("default case");
          break;
      }
    });
    return res;
  };
  return (
    <>
      <div className="cube">
        <div className="mid">
          <div className="face none"></div>
          <div className="face">
            <div className="row">
              <div className={`cell ${cube.vert1.topLeft.self}`}>
                {cube.vert1.topLeft.num}
              </div>
              <div className={`cell ${cube.vert1.topMid.self}`}>
                {cube.vert1.topMid.num}
              </div>
              <div className={`cell ${cube.vert1.topRight.self}`}>
                {cube.vert1.topRight.num}
              </div>
            </div>
            <div className="row ">
              <div
                onClick={() =>
                  setCommands([
                    "left_to_up",
                    "h_middle_to_down",
                    "left_to_down",
                    "h_middle_to_up",
                  ])
                }
                className={`cell ${cube.vert1.middleLeft.self}`}
              >
                {cube.vert1.middleLeft.num}
              </div>
              <div
                onClick={() =>
                  setCommands([
                    "middle_to_up",
                    "h_middle_to_down",
                    "middle_to_down",
                    "h_middle_to_up",
                  ])
                }
                className={`cell ${cube.vert1.middleMid.self}`}
              >
                {cube.vert1.middleMid.num}
              </div>
              <div
                onClick={() =>
                  setCommands([
                    "right_to_up",
                    "h_middle_to_down",
                    "right_to_down",
                    "h_middle_to_up",
                  ])
                }
                className={`cell ${cube.vert1.middleRight.self}`}
              >
                {cube.vert1.middleRight.num}
              </div>
            </div>
            <div className="row ">
              <div className={`cell ${cube.vert1.bottomLeft.self}`}>
                {cube.vert1.bottomLeft.num}
              </div>
              <div className={`cell ${cube.vert1.bottomMid.self}`}>
                {cube.vert1.bottomMid.num}
              </div>
              <div className={`cell ${cube.vert1.bottomRight.self}`}>
                {cube.vert1.bottomRight.num}
              </div>
            </div>
          </div>
        </div>

        <div className="mid">
          <div className="face">
            <div className="row ">
              <div className={`cell ${cube.hori1.topLeft.self}`}>
                {cube.hori1.topLeft.num}
              </div>
              <div
                onClick={() =>
                  setCommands([
                    "h_middle_to_up",
                    "top_to_left",
                    "h_middle_to_down",
                    "top_to_right",
                  ])
                }
                className={`cell ${cube.hori1.topMid.self}`}
              >
                {cube.hori1.topMid.num}
              </div>
              <div className={`cell ${cube.hori1.topRight.self}`}>
                {cube.hori1.topRight.num}
              </div>
            </div>
            <div className="row ">
              <div className={`cell ${cube.hori1.middleLeft.self}`}>
                {cube.hori1.middleLeft.num}
              </div>
              <div
                onClick={() =>
                  setCommands([
                    "h_middle_to_up",
                    "mid_to_left",
                    "h_middle_to_down",
                    "mid_to_right",
                  ])
                }
                className={`cell ${cube.hori1.middleMid.self}`}
              >
                {cube.hori1.middleMid.num}
              </div>
              <div className={`cell ${cube.hori1.middleRight.self}`}>
                {cube.hori1.middleRight.num}
              </div>
            </div>
            <div className="row ">
              <div className={`cell ${cube.hori1.bottomLeft.self}`}>
                {cube.hori1.bottomLeft.num}
              </div>
              <div
                onClick={() =>
                  setCommands([
                    "h_middle_to_up",
                    "bot_to_left",
                    "h_middle_to_down",
                    "bot_to_right",
                  ])
                }
                className={`cell ${cube.hori1.bottomMid.self}`}
              >
                {cube.hori1.bottomMid.num}
              </div>
              <div className={`cell ${cube.hori1.bottomRight.self}`}>
                {cube.hori1.bottomRight.num}
              </div>
            </div>
          </div>
          <div className="face">
            <div className="row ">
              <div
                onClick={() =>
                  setCommands([
                    "left_to_up",
                    "top_to_left",
                    "left_to_down",
                    "top_to_right",
                  ])
                }
                className={`cell ${cube.lati1.topLeft.self}`}
              >
                {cube.lati1.topLeft.num}
              </div>
              <div
                onClick={() =>
                  setCommands([
                    "mid_to_up",
                    "top_to_left",
                    "mid_to_down",
                    "top_to_right",
                  ])
                }
                className={`cell ${cube.lati1.topMid.self}`}
              >
                {cube.lati1.topMid.num}
              </div>
              <div
                onClick={() =>
                  setCommands([
                    "right_to_up",
                    "top_to_left",
                    "right_to_down",
                    "top_to_right",
                  ])
                }
                className={`cell ${cube.lati1.topRight.self}`}
              >
                {cube.lati1.topRight.num}
              </div>
            </div>
            <div className="row ">
              <div
                onClick={() =>
                  setCommands([
                    "left_to_up",
                    "mid_to_left",
                    "left_to_down",
                    "mid_to_right",
                  ])
                }
                className={`cell ${cube.lati1.middleLeft.self}`}
              >
                {cube.lati1.middleLeft.num}
              </div>
              <div
                onClick={() => {
                  setCommands([
                    "middle_to_up",
                    "mid_to_left",
                    "middle_to_down",
                    "mid_to_right",
                  ]);
                  console.log(commandies);
                }}
                className={`cell ${cube.lati1.middleMid.self}`}
              >
                {cube.lati1.middleMid.num}
              </div>
              <div
                onClick={() =>
                  setCommands([
                    "right_to_up",
                    "mid_to_left",
                    "right_to_down",
                    "mid_to_right",
                  ])
                }
                className={`cell ${cube.lati1.middleRight.self}`}
              >
                {cube.lati1.middleRight.num}
              </div>
            </div>
            <div className="row ">
              <div
                onClick={() =>
                  setCommands([
                    "left_to_up",
                    "bot_to_left",
                    "left_to_down",
                    "bot_to_right",
                  ])
                }
                className={`cell ${cube.lati1.bottomLeft.self}`}
              >
                {cube.lati1.bottomLeft.num}
              </div>
              <div
                onClick={() =>
                  setCommands([
                    "middle_to_up",
                    "bot_to_left",
                    "middle_to_down",
                    "bot_to_right",
                  ])
                }
                className={`cell ${cube.lati1.bottomMid.self}`}
              >
                {cube.lati1.bottomMid.num}
              </div>
              <div
                onClick={() =>
                  setCommands([
                    "right_to_up",
                    "bot_to_left",
                    "right_to_down",
                    "bot_to_right",
                  ])
                }
                className={`cell ${cube.lati1.bottomRight.self}`}
              >
                {cube.lati1.bottomRight.num}
              </div>
            </div>
          </div>
          <div className="face">
            <div className="row ">
              <div className={`cell ${cube.hori2.topLeft.self}`}>
                {cube.hori2.topLeft.num}
              </div>
              <div
                onClick={() =>
                  setCommands([
                    "h_middle_to_down",
                    "top_to_left",
                    "h_middle_to_up",
                    "top_to_right",
                  ])
                }
                className={`cell ${cube.hori2.topMid.self}`}
              >
                {cube.hori2.topMid.num}
              </div>
              <div className={`cell ${cube.hori2.topRight.self}`}>
                {cube.hori2.topRight.num}
              </div>
            </div>
            <div className="row ">
              <div className={`cell ${cube.hori2.middleLeft.self}`}>
                {cube.hori2.middleLeft.num}
              </div>
              <div
                onClick={() =>
                  setCommands([
                    "h_middle_to_down",
                    "mid_to_left",
                    "h_middle_to_up",
                    "mid_to_right",
                  ])
                }
                className={`cell ${cube.hori2.middleMid.self}`}
              >
                {cube.hori2.middleMid.num}
              </div>
              <div className={`cell ${cube.hori2.middleRight.self}`}>
                {cube.hori2.middleRight.num}
              </div>
            </div>
            <div className="row ">
              <div className={`cell ${cube.hori2.bottomLeft.self}`}>
                {cube.hori2.bottomLeft.num}
              </div>
              <div
                onClick={() =>
                  setCommands([
                    "h_middle_to_down",
                    "bot_to_left",
                    "h_middle_to_up",
                    "bot_to_right",
                  ])
                }
                className={`cell ${cube.hori2.bottomMid.self}`}
              >
                {cube.hori2.bottomMid.num}
              </div>
              <div className={`cell ${cube.hori2.bottomRight.self}`}>
                {cube.hori2.bottomRight.num}
              </div>
            </div>
          </div>
          <div className="face">
            <div className="row ">
              <div
                onClick={() =>
                  setCommands([
                    "left_to_down",
                    "top_to_left",
                    "left_to_up",
                    "top_to_right",
                  ])
                }
                className={`cell ${cube.lati2.bottomLeft.self}`}
              >
                {cube.lati2.bottomLeft.num}
              </div>
              <div
                onClick={() =>
                  setCommands([
                    "middle_to_down",
                    "top_to_left",
                    "middle_to_up",
                    "top_to_right",
                  ])
                }
                className={`cell ${cube.lati2.bottomMid.self}`}
              >
                {cube.lati2.bottomMid.num}
              </div>
              <div
                onClick={() =>
                  setCommands([
                    "right_to_down",
                    "top_to_left",
                    "right_to_up",
                    "top_to_right",
                  ])
                }
                className={`cell ${cube.lati2.bottomRight.self}`}
              >
                {cube.lati2.bottomRight.num}
              </div>
            </div>
            <div className="row ">
              <div
                onClick={() =>
                  setCommands([
                    "left_to_down",
                    "mid_to_left",
                    "left_to_up",
                    "mid_to_right",
                  ])
                }
                className={`cell ${cube.lati2.middleLeft.self}`}
              >
                {cube.lati2.middleLeft.num}
              </div>
              <div
                onClick={() =>
                  setCommands([
                    "middle_to_down",
                    "mid_to_left",
                    "middle_to_up",
                    "mid_to_right",
                  ])
                }
                className={`cell ${cube.lati2.middleMid.self}`}
              >
                {cube.lati2.middleMid.num}
              </div>
              <div
                onClick={() =>
                  setCommands([
                    "right_to_down",
                    "mid_to_left",
                    "right_to_up",
                    "mid_to_right",
                  ])
                }
                className={`cell ${cube.lati2.middleRight.self}`}
              >
                {cube.lati2.middleRight.num}
              </div>
            </div>
            <div className="row ">
              <div className={`cell ${cube.lati2.topLeft.self}`}>
                {cube.lati2.topLeft.num}
              </div>
              <div className={`cell ${cube.lati2.topMid.self}`}>
                {cube.lati2.topMid.num}
              </div>
              <div className={`cell ${cube.lati2.topRight.self}`}>
                {cube.lati2.topRight.num}
              </div>
            </div>
          </div>
        </div>

        <div className="mid">
          <div className="face none"></div>
          <div className="face">
            <div className="row ">
              <div className={`cell ${cube.vert2.topLeft.self}`}>
                {cube.vert2.topLeft.num}
              </div>
              <div className={`cell ${cube.vert2.topMid.self}`}>
                {cube.vert2.topMid.num}
              </div>
              <div className={`cell ${cube.vert2.topRight.self}`}>
                {cube.vert2.topRight.num}
              </div>
            </div>
            <div className="row ">
              <div
                onClick={() =>
                  setCommands([
                    "left_to_up",
                    "h_middle_to_up",
                    "left_to_down",
                    "h_middle_to_down",
                  ])
                }
                className={`cell ${cube.vert2.middleLeft.self}`}
              >
                {cube.vert2.middleLeft.num}
              </div>
              <div
                onClick={() =>
                  setCommands([
                    "middle_to_up",
                    "h_middle_to_up",
                    "middle_to_down",
                    "h_middle_to_down",
                  ])
                }
                className={`cell ${cube.vert2.middleMid.self}`}
              >
                {cube.vert2.middleMid.num}
              </div>
              <div
                onClick={() =>
                  setCommands([
                    "right_to_up",
                    "h_middle_to_up",
                    "right_to_down",
                    "h_middle_to_down",
                  ])
                }
                className={`cell ${cube.vert2.middleRight.self}`}
              >
                {cube.vert2.middleRight.num}
              </div>
            </div>
            <div className="row ">
              <div className={`cell ${cube.vert2.bottomLeft.self}`}>
                {cube.vert2.bottomLeft.num}
              </div>
              <div className={`cell ${cube.vert2.bottomMid.self}`}>
                {cube.vert2.bottomMid.num}
              </div>
              <div className={`cell ${cube.vert2.bottomRight.self}`}>
                {cube.vert2.bottomRight.num}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="test-buttons">
        <button onClick={() => command(`${commandies[0]}`)}>Up</button>
        <div>
          <button onClick={() => command(`${commandies[1]}`)}>Left</button>
          <button onClick={() => command(`${commandies[3]}`)}>Right</button>
        </div>
        <button onClick={() => command(`${commandies[2]}`)}>Down</button>
      </div>
      <div className="button-container">
        <div className="button-group">
          <button onClick={() => command("top_to_left")}>TTL</button>
          <button onClick={() => command("top_to_right")}>TTR</button>
          <button onClick={() => command("mid_to_left")}>MTL</button>
          <button onClick={() => command("mid_to_right")}>MTR</button>
          <button onClick={() => command("bot_to_left")}>BTL</button>
          <button onClick={() => command("bot_to_right")}>BTR</button>
        </div>
        <div className="button-group">
          <button onClick={() => command("left_to_up")}>LTU</button>
          <button onClick={() => command("left_to_down")}>LTD</button>
          <button onClick={() => command("middle_to_up")}>MTU</button>
          <button onClick={() => command("middle_to_down")}>MTD</button>
          <button onClick={() => command("right_to_up")}>RTU</button>
          <button onClick={() => command("right_to_down")}>RTD</button>
        </div>
        <div className="button-group">
          <button onClick={() => command("h_left_to_up")}>HLTU</button>
          <button onClick={() => command("h_left_to_down")}>HLTD</button>
          <button onClick={() => command("h_middle_to_up")}>HMTU</button>
          <button onClick={() => command("h_middle_to_down")}>HMTD</button>
          <button onClick={() => command("h_right_to_up")}>HRTU</button>
          <button onClick={() => command("h_right_to_down")}>HRTD</button>
        </div>
        <div className="button-group">
          <button
            onClick={() => {
              rubix = new Cube(yellow, white, green, blue, orange, red);
              setCube(rubix);
            }}
          >
            Reset
          </button>
          <button
            onClick={() => {
              for (let i = 0; i < Math.floor(Math.random() * 79) + 20; i++) {
                command(
                  `${
                    commands[Math.floor(Math.random() * (commands.length - 1))]
                  }`
                );
              }
              console.table(count());
            }}
          >
            Scramble
          </button>
        </div>
      </div>
    </>
  );
};
export default ReactCube;
