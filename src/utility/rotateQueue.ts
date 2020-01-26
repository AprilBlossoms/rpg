export default function rotateQueue<T>(array: T[]): T[] {
  let queue = [...array];

  if (queue[0] != null) {
    let end = queue.shift();

    if (end != null) {
      queue.push(end);
    }
  }

  return queue;
}
