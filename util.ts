function range(start: number, stop: number, step: number = 1): number[] {
  const result = [];
  for (let i = start; i < stop; i += step) {
    result.push(i);
  }
  return result;
}

type ChunkifyOptionsProps = {
  excludeLeftovers?: boolean;
};
function chunkify<T>(
  arr: T[],
  chunkSize: number,
  { excludeLeftovers }: ChunkifyOptionsProps = {}
): T[][] {
  const chunks: T[][] = [];
  let chunk: T[] = [];

  for (let i = 0; i < arr.length; i++) {
    chunk.push(arr[i]);
    if (chunk.length >= chunkSize) {
      chunks.push(chunk);
      chunk = [];
    }
  }

  if (chunk.length > 0 && !excludeLeftovers) {
    chunks.push(chunk);
  }
  return chunks;
}

export { range, chunkify };
