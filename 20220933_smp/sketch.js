let img;
// let tileSize = 50;  // 조각의 크기
let pieces = [];    // 조각의 좌표를 저장할 배열

function preload() {
  img = loadImage('girl.png');  // 사진 파일을 로드
}

function setup() {
  createCanvas(img.width, img.height); // 캔버스 크기 설정 (사진 크기에 맞춤)
}

function draw() {
  image(img, 0, 0);  // 배경 이미지를 그리
  
}
// 마우스를 클릭했을 때 실행되는 함수
function mousePressed() {
  // 클릭한 좌표의 색상을 추출
  let c = img.get(mouseX, mouseY);

  // 조각의 좌표와 색상을 배열에 저장
  pieces.push({ x: mouseX, y: mouseY, color: c });

  // 콘솔에 좌표와 색상을 출력
  console.log("Mouse clicked at: " + mouseX + ", " + mouseY + ", Color: " + c);
}
//색깔값은 rgba로 출력 