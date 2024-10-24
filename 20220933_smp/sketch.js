let img;
// let tileSize = 50;  // 조각의 크기
let pieces = [];    // 조각의 좌표를 저장할 배열

function preload() {
  img = loadImage('girl.png');  // 사진 파일을 로드
}

function setup() {
  createCanvas(img.width, img.height); // 캔버스 크기 설정 (사진 크기에 맞춤)

// 삼각형의 세좌표와 색 (x1, y1, x2, y2, x3, y3, color)
pieces.push([582, 150, 670, 119, 676, 164, 'rgba(167, 183, 196, 255)']); //1
pieces.push([582, 150, 591, 210, 676, 164, 'rgba(165, 180, 195, 255)']); //3
pieces.push([653, 230, 591, 210, 676, 164, 'rgba(165, 180, 195, 255)']); //5


pieces.push([670, 119, 738, 126, 676, 164, 'rgba(115, 149, 187, 255)']); //2
pieces.push([676, 164, 757, 229, 738, 126, 'rgba(110, 144, 182, 255)']); //4
pieces.push([653, 230, 676, 164, 757, 229, 'rgba(120, 154, 192, 255)']); //6
pieces.push([738, 126, 757, 229, 826, 215, 'rgba(115, 145, 180, 255)']); //7
pieces.push([820, 268, 757, 229, 826, 215, 'rgba(125, 159, 195, 255)']); //15
pieces.push([820, 268, 757, 229, 754, 268, 'rgba(115, 152, 195, 255)']); //14
pieces.push([653, 230, 757, 229, 754, 268, 'rgba(113, 150, 188, 255)']); //13
pieces.push([653, 230, 695, 271, 754, 268, 'rgba(117, 148, 186, 255)']); //12

pieces.push([784, 330, 695, 271, 754, 268, 'rgba(26, 55, 95, 255)']); //20
pieces.push([784, 330, 820, 268, 754, 268, 'rgba(22, 50, 90, 255)']); //21
pieces.push([784, 330, 820, 268, 848, 320, 'rgba(30, 60, 100, 255)']); //25
pieces.push([784, 330, 695, 271, 708, 335, 'rgba(25, 53, 92, 255)']); //19
pieces.push([784, 330, 753, 379, 708, 335, 'rgba(28, 57, 97, 255)']); //24

pieces.push([591, 210, 545, 256, 607, 272, 'rgba(142, 170, 191, 255)']); //8
pieces.push([591, 210, 653, 230, 607, 272, 'rgba(135, 160, 180, 255)']); //9
pieces.push([670, 312, 653, 230, 607, 272, 'rgba(150, 180, 200, 255)']); //10

//살색 
pieces.push([670, 312, 616, 335, 607, 272, 'rgba(230, 202, 188, 255)']); //18
pieces.push([567, 315, 616, 335, 607, 272, 'rgba(220, 192, 180, 255)']); //17
pieces.push([567, 315, 545, 256, 607, 272, 'rgba(240, 212, 198, 255)']); //16
pieces.push([567, 315, 616, 335, 570, 344, 'rgba(225, 197, 185, 255)']); //22
pieces.push([670, 312, 708, 335, 646, 359, 'rgba(235, 207, 193, 255)']); //23

//사각형인 거 11
pieces.push([670, 312, 653, 230, 695, 271, 708, 335, 'rgba(142, 170, 191, 255)']); //10
}
function draw() {
  image(img, 0, 0);  // 배경 이미지를 그리기

  for (let piece of pieces) {
    // 삼각형의 경우
    if (piece.length === 7) { // 삼각형의 길이
      let x1 = piece[0];
      let y1 = piece[1];
      let x2 = piece[2];
      let y2 = piece[3];
      let x3 = piece[4];
      let y3 = piece[5];
      let color = piece[6];

      fill(color);
      noStroke(); // 테두리를 없애기
      beginShape();
      vertex(x1, y1);
      vertex(x2, y2);
      vertex(x3, y3);
      endShape(CLOSE); // 삼각형 그리기
    }
    // 사각형의 경우
    else if (piece.length === 9) { // 사각형의 길이
      let x1 = piece[0];
      let y1 = piece[1];
      let x2 = piece[2];
      let y2 = piece[3];
      let x3 = piece[4];
      let y3 = piece[5];
      let x4 = piece[6];
      let y4 = piece[7];
      let color = piece[8];

      fill(color);
      noStroke(); // 테두리를 없애기
      beginShape();
      vertex(x1, y1);
      vertex(x2, y2);
      vertex(x3, y3);
      vertex(x4, y4);
      endShape(CLOSE); // 사각형 그리기
    }
  }
}