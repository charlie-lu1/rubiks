export class Cube {
  constructor(yellow, white, green, blue, orange, red) {
    this.vert1 = new Face(yellow);
    this.vert2 = new Face(white);
    this.hori1 = new Face(green);
    this.hori2 = new Face(blue);
    this.lati1 = new Face(orange);
    this.lati2 = new Face(red);
  }
  command(phrase) {
    console.log(phrase);
    let h1 = {
      id: this.hori1.id,
      tl: this.hori1.topLeft,
      tm: this.hori1.topMid,
      tr: this.hori1.topRight,
      ml: this.hori1.middleLeft,
      mm: this.hori1.middleMid,
      mr: this.hori1.middleRight,
      bl: this.hori1.bottomLeft,
      bm: this.hori1.bottomMid,
      br: this.hori1.bottomRight,
    };
    let h2 = {
      id: this.hori2.id,
      tl: this.hori2.topLeft,
      tm: this.hori2.topMid,
      tr: this.hori2.topRight,
      ml: this.hori2.middleLeft,
      mm: this.hori2.middleMid,
      mr: this.hori2.middleRight,
      bl: this.hori2.bottomLeft,
      bm: this.hori2.bottomMid,
      br: this.hori2.bottomRight,
    };
    let l1 = {
      id: this.lati1.id,
      tl: this.lati1.topLeft,
      tm: this.lati1.topMid,
      tr: this.lati1.topRight,
      ml: this.lati1.middleLeft,
      mm: this.lati1.middleMid,
      mr: this.lati1.middleRight,
      bl: this.lati1.bottomLeft,
      bm: this.lati1.bottomMid,
      br: this.lati1.bottomRight,
    };
    let l2 = {
      id: this.lati2.id,
      tl: this.lati2.topLeft,
      tm: this.lati2.topMid,
      tr: this.lati2.topRight,
      ml: this.lati2.middleLeft,
      mm: this.lati2.middleMid,
      mr: this.lati2.middleRight,
      bl: this.lati2.bottomLeft,
      bm: this.lati2.bottomMid,
      br: this.lati2.bottomRight,
    };
    let v1 = {
      id: this.vert1.id,
      tl: this.vert1.topLeft,
      tm: this.vert1.topMid,
      tr: this.vert1.topRight,
      ml: this.vert1.middleLeft,
      mm: this.vert1.middleMid,
      mr: this.vert1.middleRight,
      bl: this.vert1.bottomLeft,
      bm: this.vert1.bottomMid,
      br: this.vert1.bottomRight,
    };
    let v2 = {
      id: this.vert2.id,
      tl: this.vert2.topLeft,
      tm: this.vert2.topMid,
      tr: this.vert2.topRight,
      ml: this.vert2.middleLeft,
      mm: this.vert2.middleMid,
      mr: this.vert2.middleRight,
      bl: this.vert2.bottomLeft,
      bm: this.vert2.bottomMid,
      br: this.vert2.bottomRight,
    };

    switch (phrase) {
      case "top_to_left":
        this.lati1.leftAndRight(l1, h2, "top");
        this.hori1.leftAndRight(h1, l1, "top");
        this.lati2.leftAndRight(l2, h1, "top");
        this.hori2.leftAndRight(h2, l2, "top");
        this.vert1.rotateFace(v1, "clockwise");
        break;
      case "top_to_right":
        this.lati1.leftAndRight(l1, h1, "top");
        this.hori1.leftAndRight(h1, l2, "top");
        this.lati2.leftAndRight(l2, h2, "top");
        this.hori2.leftAndRight(h2, l1, "top");
        this.vert1.rotateFace(v1, "counterclockwise");
        break;
      case "mid_to_left":
        this.lati1.leftAndRight(l1, h2, "middle");
        this.hori1.leftAndRight(h1, l1, "middle");
        this.lati2.leftAndRight(l2, h1, "middle");
        this.hori2.leftAndRight(h2, l2, "middle");
        break;
      case "mid_to_right":
        this.lati1.leftAndRight(l1, h1, "middle");
        this.hori1.leftAndRight(h1, l2, "middle");
        this.lati2.leftAndRight(l2, h2, "middle");
        this.hori2.leftAndRight(h2, l1, "middle");
        break;
      case "bot_to_left":
        this.lati1.leftAndRight(l1, h2, "bottom");
        this.hori1.leftAndRight(h1, l1, "bottom");
        this.lati2.leftAndRight(l2, h1, "bottom");
        this.hori2.leftAndRight(h2, l2, "bottom");
        this.vert2.rotateFace(v2, "counterclockwise");
        break;
      case "bot_to_right":
        this.lati1.leftAndRight(l1, h1, "bottom");
        this.hori1.leftAndRight(h1, l2, "bottom");
        this.lati2.leftAndRight(l2, h2, "bottom");
        this.hori2.leftAndRight(h2, l1, "bottom");
        this.vert2.rotateFace(v2, "clockwise");
        break;

      //---------------------------------------------------------------
      case "left_to_up":
        this.lati1.upAndDown(l1, v2, "Left");
        this.vert1.upAndDown(v1, l1, "Left");
        this.lati2.upAndDown(l2, v1, "Left");
        this.vert2.upAndDown(v2, l2, "Left");
        this.hori1.rotateFace(h1, "counterclockwise");
        break;
      case "left_to_down":
        this.lati1.upAndDown(l1, v1, "Left");
        this.vert1.upAndDown(v1, l2, "Left");
        this.lati2.upAndDown(l2, v2, "Left");
        this.vert2.upAndDown(v2, l1, "Left");
        this.hori1.rotateFace(h1, "clockwise");
        break;
      case "middle_to_up":
        this.lati1.upAndDown(l1, v2, "Mid");
        this.vert1.upAndDown(v1, l1, "Mid");
        this.lati2.upAndDown(l2, v1, "Mid");
        this.vert2.upAndDown(v2, l2, "Mid");
        break;
      case "middle_to_down":
        this.lati1.upAndDown(l1, v1, "Mid");
        this.vert1.upAndDown(v1, l2, "Mid");
        this.lati2.upAndDown(l2, v2, "Mid");
        this.vert2.upAndDown(v2, l1, "Mid");
        break;
      case "right_to_up":
        this.lati1.upAndDown(l1, v2, "Right");
        this.vert1.upAndDown(v1, l1, "Right");
        this.lati2.upAndDown(l2, v1, "Right");
        this.vert2.upAndDown(v2, l2, "Right");
        this.hori2.rotateFace(h2, "clockwise");
        break;
      case "right_to_down":
        this.lati1.upAndDown(l1, v1, "Right");
        this.vert1.upAndDown(v1, l2, "Right");
        this.lati2.upAndDown(l2, v2, "Right");
        this.vert2.upAndDown(v2, l1, "Right");
        this.hori2.rotateFace(h2, "counterclockwise");
        break;
      //---------------------------------------------------------------
      case "h_left_to_up":
        this.hori1.upAndDown(h1, v2, "Right");
        this.vert1.upAndDown(v1, h1, "bottom");
        this.hori2.upAndDown(h2, v1, "Left");
        this.vert2.upAndDown(v2, h2, "top");
        this.lati2.rotateFace(l2, "clockwise");
        break;
      case "h_left_to_down":
        //do the thing
        this.hori1.upAndDown(h1, v1, "Left");
        this.vert1.upAndDown(v1, h2, "Left");
        this.hori2.upAndDown(h2, v2, "Left");
        this.vert2.upAndDown(v2, h1, "Left");
        this.lati2.rotateFace(l2, "clockwise");
        break;
      case "h_middle_to_up":
        this.hori1.topMid = new Cell(v2.ml);
        this.hori1.middleMid = new Cell(v2.mm);
        this.hori1.bottomMid = new Cell(v2.mr);

        this.hori2.topMid = new Cell(v1.ml);
        this.hori2.middleMid = new Cell(v1.mm);
        this.hori2.bottomMid = new Cell(v1.mr);

        this.vert1.middleLeft = new Cell(h1.bm);
        this.vert1.middleMid = new Cell(h1.mm);
        this.vert1.middleRight = new Cell(h1.tm);

        this.vert2.middleLeft = new Cell(h2.bm);
        this.vert2.middleMid = new Cell(h2.mm);
        this.vert2.middleRight = new Cell(h2.tm);
        break;
      case "h_middle_to_down":
        this.hori1.topMid = new Cell(v1.mr);
        this.hori1.middleMid = new Cell(v1.mm);
        this.hori1.bottomMid = new Cell(v1.ml);

        this.hori2.topMid = new Cell(v2.mr);
        this.hori2.middleMid = new Cell(v2.mm);
        this.hori2.bottomMid = new Cell(v2.ml);

        this.vert1.middleLeft = new Cell(h2.tm);
        this.vert1.middleMid = new Cell(h2.mm);
        this.vert1.middleRight = new Cell(h2.bm);

        this.vert2.middleLeft = new Cell(h1.tm);
        this.vert2.middleMid = new Cell(h1.mm);
        this.vert2.middleRight = new Cell(h1.bm);
        break;
      case "h_middle_to_up":
        this.hori1.topMid = new Cell(v2.ml);
        this.hori1.middleMid = new Cell(v2.mm);
        this.hori1.bottomMid = new Cell(v2.mr);

        this.hori2.topMid = new Cell(v1.ml);
        this.hori2.middleMid = new Cell(v1.mm);
        this.hori2.bottomMid = new Cell(v1.mr);

        this.vert1.middleLeft = new Cell(h1.bm);
        this.vert1.middleMid = new Cell(h1.mm);
        this.vert1.middleRight = new Cell(h1.tm);

        this.vert2.middleLeft = new Cell(h2.bm);
        this.vert2.middleMid = new Cell(h2.mm);
        this.vert2.middleRight = new Cell(h2.tm);
        break;
      case "h_middle_to_down":
        this.hori1.topMid = new Cell(v1.mr);
        this.hori1.middleMid = new Cell(v1.mm);
        this.hori1.bottomMid = new Cell(v1.ml);

        this.hori2.topMid = new Cell(v2.mr);
        this.hori2.middleMid = new Cell(v2.mm);
        this.hori2.bottomMid = new Cell(v2.ml);

        this.vert1.middleLeft = new Cell(h2.tm);
        this.vert1.middleMid = new Cell(h2.mm);
        this.vert1.middleRight = new Cell(h2.bm);

        this.vert2.middleLeft = new Cell(h1.tm);
        this.vert2.middleMid = new Cell(h1.mm);
        this.vert2.middleRight = new Cell(h1.bm);
        break;
      case "h_right_to_up":
        //do the thing
        this.hori1.upAndDown(h1, v2, "Right");
        this.vert1.upAndDown(v1, h1, "bottom");
        this.hori2.upAndDown(h2, v1, "Left");
        this.vert2.upAndDown(v2, h2, "top");

        this.lati1.rotateFace(l1, "clockwise");
        break;
      case "h_right_to_down":
        //do the thing
        this.hori1.upAndDown(h1, v1, "Right");
        this.vert1.upAndDown(v1, h2, "bottom");
        this.hori2.upAndDown(h2, v2, "Left");
        this.vert2.upAndDown(v2, h1, "top");

        this.lati1.rotateFace(l1, "counterclockwise");
        break;
    }
  }
}

class Face {
  constructor({
    topLeft,
    topMid,
    topRight,
    middleLeft,
    middleMid,
    middleRight,
    bottomLeft,
    bottomMid,
    bottomRight,
    id,
  }) {
    this.id = id;
    this.topLeft = new Cell(topLeft);
    this.topMid = new Cell(topMid);
    this.topRight = new Cell(topRight);

    this.middleLeft = new Cell(middleLeft);
    this.middleMid = new Cell(middleMid);
    this.middleRight = new Cell(middleRight);

    this.bottomLeft = new Cell(bottomLeft);
    this.bottomMid = new Cell(bottomMid);
    this.bottomRight = new Cell(bottomRight);
  }
  leftAndRight(fromFace, toFace, row) {
    if (row === "top" || row === "bottom") {
      if (fromFace.id !== "lati2" && toFace.id === "lati2") {
        // leaving the back face
        if (row === "top") {
          // changing top row
          this.topLeft = new Cell(toFace.bl);
          this.topMid = new Cell(toFace.bm); // T >> B
          this.topRight = new Cell(toFace.br);
        } else {
          // changing bottom row
          this.bottomLeft = new Cell(toFace.tl);
          this.bottomMid = new Cell(toFace.tm); // B >> T
          this.bottomRight = new Cell(toFace.tr);
        }
      } else if (fromFace.id === "lati2" && toFace.id !== "lati2") {
        //entering the back face
        if (row === "top") {
          // changing top row
          this.bottomLeft = new Cell(toFace.tl);
          this.bottomMid = new Cell(toFace.tm); //B >> T
          this.bottomRight = new Cell(toFace.tr);
        } else {
          // changing bottom row
          this.topLeft = new Cell(toFace.bl);
          this.topMid = new Cell(toFace.bm); //T >> B
          this.topRight = new Cell(toFace.br);
        }
      } else {
        // everything else
        const r = row.split("")[0];
        this[`${row}Left`] = new Cell(toFace[`${r}l`]);
        this[`${row}Mid`] = new Cell(toFace[`${r}m`]);
        this[`${row}Right`] = new Cell(toFace[`${r}r`]);
      }
    } else {
      // middle row
      const r = row.split("")[0];
      this[`${row}Left`] = new Cell(toFace[`${r}l`]);
      this[`${row}Mid`] = new Cell(toFace[`${r}m`]);
      this[`${row}Right`] = new Cell(toFace[`${r}r`]);
    }
  }
  upAndDown(fromFace, toFace, column) {
    const c = column.split("")[0].toLowerCase();
    if (fromFace.id === "vert1" && toFace.id === "hori1") {
      // left >> top
      this["bottomLeft"] = new Cell(toFace.br);
      this["bottomMid"] = new Cell(toFace.mr);
      this["bottomRight"] = new Cell(toFace.tr);
    }
    if (fromFace.id === "hori2" && toFace.id === "vert1") {
      // top >> right
      this[`topLeft`] = new Cell(toFace.bl);
      this[`middleLeft`] = new Cell(toFace.bm);
      this[`bottomLeft`] = new Cell(toFace.br);
    }
    if (fromFace.id === "vert2" && toFace.id === "hori2") {
      //right >> bottom
      this[`topLeft`] = new Cell(toFace.bl);
      this[`topMid`] = new Cell(toFace.ml);
      this[`topRight`] = new Cell(toFace.tl);
    }
    if (fromFace.id === "hori1" && toFace.id === "vert2") {
      //bottom >> left
      this[`topRight`] = new Cell(toFace.tl);
      this[`middleRight`] = new Cell(toFace.tm);
      this[`bottomRight`] = new Cell(toFace.tr);
    }

    if (toFace.id === "vert1" && fromFace.id === "hori1") {
      // left >> top
      this["bottomLeft"] = new Cell(toFace.br);
      this["bottomMid"] = new Cell(toFace.mr);
      this["bottomRight"] = new Cell(toFace.tr);
    }
    if (toFace.id === "hori2" && fromFace.id === "vert1") {
      // top >> right
      this[`topLeft`] = new Cell(toFace.bl);
      this[`middleLeft`] = new Cell(toFace.bm);
      this[`bottomLeft`] = new Cell(toFace.br);
    }
    if (toFace.id === "vert2" && fromFace.id === "hori2") {
      //right >> bottom
      this[`topLeft`] = new Cell(toFace.bl);
      this[`topMid`] = new Cell(toFace.ml);
      this[`topRight`] = new Cell(toFace.tl);
    }
    if (toFace.id === "hori1" && fromFace.id === "vert2") {
      //bottom >> left
      this[`topRight`] = new Cell(toFace.tl);
      this[`middleRight`] = new Cell(toFace.tm);
      this[`bottomRight`] = new Cell(toFace.tr);
    }

    if (
      fromFace.id !== "hori1" &&
      fromFace.id !== "hori2" &&
      toFace.id !== "hori1" &&
      toFace.id !== "hori2"
    ) {
      if (
        fromFace.id !== "lati2" &&
        toFace.id === "lati2" &&
        (column === "Left" || column === "Right")
      ) {
        //  back face >> any face
        // leaving the back face
        if (column === "Left") {
          // changing bottom column
          this.topLeft = new Cell(toFace.tr);
          this.middleLeft = new Cell(toFace.mr); // B >> T
          this.bottomLeft = new Cell(toFace.br);
        } else {
          // changing top column
          this.topRight = new Cell(toFace.tl);
          this.middleRight = new Cell(toFace.ml); // T >> B
          this.bottomRight = new Cell(toFace.bl);
        }
      } else if (
        fromFace.id === "lati2" &&
        toFace.id !== "lati2" &&
        (column === "Left" || column === "Right")
      ) {
        // any face >> back face
        //entering the back face
        if (column === "Left") {
          // changing top column
          this.topRight = new Cell(toFace.tl);
          this.middleRight = new Cell(toFace.ml); // B >> T
          this.bottomRight = new Cell(toFace.bl);
        } else {
          // changing bottom column

          this.topLeft = new Cell(toFace.tr);
          this.middleLeft = new Cell(toFace.mr); // T >> B
          this.bottomLeft = new Cell(toFace.br);
        }
      } else {
        console.log(`${fromFace.id} else`);
        this[`top${column}`] = new Cell(toFace[`t${c}`]);
        this[`middle${column}`] = new Cell(toFace[`m${c}`]);
        this[`bottom${column}`] = new Cell(toFace[`b${c}`]);
      }
    }
  }
  // Rotate 90 degrees
  rotateFace(face, direction) {
    if (direction == "clockwise") {
      // rotate clockwise
      this["topLeft"] = new Cell(face["bl"]);
      this["topMid"] = new Cell(face["ml"]);
      this["topRight"] = new Cell(face["tl"]);
      this["middleRight"] = new Cell(face["tm"]);
      this["bottomRight"] = new Cell(face["tr"]);
      this["bottomMid"] = new Cell(face["mr"]);
      this["bottomLeft"] = new Cell(face["br"]);
      this["middleLeft"] = new Cell(face["bm"]);
    } else if (direction == "counterclockwise") {
      // rotate counterclockwise
      this["topLeft"] = new Cell(face["tr"]);
      this["topMid"] = new Cell(face["mr"]);
      this["topRight"] = new Cell(face["br"]);
      this["middleRight"] = new Cell(face["bm"]);
      this["bottomRight"] = new Cell(face["bl"]);
      this["bottomMid"] = new Cell(face["ml"]);
      this["bottomLeft"] = new Cell(face["tl"]);
      this["middleLeft"] = new Cell(face["tm"]);
    }
  }
  //
}

class Cell {
  constructor({ self, up, right, down, left, num, id }) {
    this.self = self;
    this.up = up;
    this.right = right;
    this.down = down;
    this.left = left;
    this.num = num;
    this.id = id;
  }
}
