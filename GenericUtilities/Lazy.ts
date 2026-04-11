class Lazy<T> {
  private operations: Record<any, any>[] = [];

  constructor(private input: T[]) {}

  map<U>(fn: (item: T) => U): Lazy<U> {
    this.operations.push({ type: 'map', fn });
    return (this as unknown) as Lazy<U>;
  }

  filter(fn: (item: T) => boolean): Lazy<T> {
    this.operations.push({ type: 'filter', fn });
    return this;
  }

  value(): T[] {
    const result: T[] = [];

    for (let i = 0; i < this.input.length; i++) {
      let current: any = this.input[i];
      let shouldInclude = true;

      for (let op of this.operations) {
        if (op.type === 'map') {
          current = op.fn(current);
        }

        if (op.type === 'filter') {
          if (!op.fn(current)) {
            shouldInclude = false;
            break;
          }
        }
      }

      if (shouldInclude) {
        result.push(current);
      }
    }

    return result;
  }
}

function lazy<T>(arr: T[]) {
  return new Lazy(arr);
}


console.time("lazy");
const result = lazy([1, 2, 3, 4, 5])
  .map(x => x * 2)
  .filter(x => x > 5)
  .map(x => x + 1)
  .value();

console.log(result); // [7, 9, 11]
console.timeEnd("lazy");