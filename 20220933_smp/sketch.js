let img;
// let tileSize = 50;  // 조각의 크기
let pieces = [];    // 조각의 좌표를 저장할 배열

function preload() {
  img = loadImage('girl.png');  // 사진 파일을 로드
}

function setup() {
  createCanvas(img.width, img.height); // 캔버스 크기 설정 (사진 크기에 맞춤)

// 삼각형의 세좌표와 색 (x1, y1, x2, y2, x3, y3, color)
pieces.push([582, 150, 670, 121, 676, 164, 'rgba(167, 183, 196, 255)']); 



}
function draw() {
  image(img, 0, 0);  // 배경 이미지를 그림

  for (let piece of pieces) {
    let x1 = piece[0];
    let y1 = piece[1];
    let x2 = piece[2];
    let y2 = piece[3];
    let x3 = piece[4];
    let y3 = piece[5];
    let color = piece[6];

    fill(color);
    noStroke(); //조각들의 테두리 없애기 위함
    beginShape();
    vertex(x1, y1);
    vertex(x2, y2);
    vertex(x3, y3);
    endShape(CLOSE); // 삼각형 그리기
  }
  
}
