export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  timeout = 300
): ((...args: Parameters<T>) => void) => {
  let timerID: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>): void => {
    if (timerID) {
      clearTimeout(timerID);
    }

    timerID = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
