import { atomWithStorage } from 'jotai/utils';

type AssetLayoutType = 'card' | 'item';

export const assetLayoutAtom = atomWithStorage<AssetLayoutType>('assetLayoutType', 'card');
