/**
 * 변동 가격에 따른 색상 값을 출력할 때 사용하는 함수 (ex: 양전은 빨간색, 음전은 파란색)
 */
export const getColorByChange = <T>(change: number, positive: T, negative: T, neutral: T) => {
  if (change > 0) {
    return positive;
  }

  if (change < 0) {
    return negative;
  }

  return neutral;
};
