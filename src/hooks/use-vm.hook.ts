import { useState } from 'react';

export const useVm = <T extends new (...params: any) => any>(
  VmConstructor: T,
  ...args: ConstructorParameters<T>
): InstanceType<T> => {
  const [vmRef] = useState<InstanceType<T>>(() => {
    return new VmConstructor(...(args as any));
  });

  return vmRef;
};
