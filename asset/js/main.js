const boxList = document.querySelectorAll('.box');

const options = {
  root: null, // viewport
  rootMargin: "0px",
  threshold: 1.0,  // 50%가 viewport에 들어와 있어야 callback 실행
}

const observer = new IntersectionObserver(entries => {
    // 관찰 중인 배열 형식의 객체 리스트
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, options);

// 반복문을 돌려 모든 DOM에 적용
boxList.forEach(el => observer.observe(el));

// Intersection Observer은 target과 root가 교차되어 화면에 보이게 되었을 때 호출되는 함수로 아래의 정보를 파라미터로 받습니다. 

// Entries : 관찰되고 있는 객체 리스트를 반환, observer
// Observer : 콜백함수가 호출되는 IntersectionObserver 
 

// Entries 객체 리스트의 각 Entry 객체는 아래와 같이 구성되어 있습니다.

// boundingClientRect: target의 getBoundingClientRect() 메서드를 실행하면 나오는 값과 같은 정보를 반환
// intersectionRatio : target과 root가 교차되는 부분의 수치로 반환 (0.0과 1.0의 사이)
// intersectionRect: target과 root가 교차되는 정보를 반환
// isIntersecting :  target과 root의 교차 상태를 true, false로 반환
// rootBounds: options에서 지정한 root의 정보를 반환 (기본값 viewport)
// target : 현재 객체의 target element 정보를 반환
// time : target과 root의 교차가 일어난 시간을 반환