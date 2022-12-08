import { createStorage, IStorageProperties } from '../utils/createStorage';

export function useLocalStorage<T = string>(props: IStorageProperties<T>) {
  return createStorage<T>('localStorage')(props);
}
