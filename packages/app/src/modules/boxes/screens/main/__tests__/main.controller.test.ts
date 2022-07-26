import { container } from 'tsyringe';
import { UIActionSheet } from '@ornuto/ui-kit';

import { BoxType } from '@/modules';
import { useController } from '../main.controller';
import { Navigation, ScreenName, useParams } from '@/navigation';

jest.mock('@/navigation', () => ({
  ...jest.requireActual('@/navigation'),
  useParams: jest.fn(),
}));

describe('Boxes main.controller', () => {
  let navigation: Navigation;

  beforeEach(() => {
    jest.clearAllMocks();
    navigation = container.resolve(Navigation);
  });

  it('should open UIActionSheet', () => {
    const open = jest.spyOn(UIActionSheet, 'open');

    const c = useController();
    c.onAddPress();

    expect(open).toBeCalled();
  });

  it('should open UIActionSheet without parentId', () => {
    const open = jest.spyOn(UIActionSheet, 'open');
    const navigate = jest.spyOn(navigation, 'navigate');

    const c = useController();
    c.onAddPress();

    const [createFolder, createChat] = open.mock.calls[0][0].buttons;

    createFolder.onPress();
    createChat.onPress();

    expect(navigate).toHaveBeenNthCalledWith(1, ScreenName.BOXES_CREATE, {
      parentId: null,
      type: BoxType.FOLDER,
    });
    expect(navigate).toHaveBeenNthCalledWith(2, ScreenName.BOXES_CREATE, {
      parentId: null,
      type: BoxType.CHAT,
    });
  });

  it('should open UIActionSheet with parentId', () => {
    const open = jest.spyOn(UIActionSheet, 'open');
    const navigate = jest.spyOn(navigation, 'navigate');
    (useParams as jest.MockedFunction<typeof useParams>).mockReturnValue({ parentId: 'id' });

    const c = useController();
    c.onAddPress();

    const [createFolder, createChat] = open.mock.calls[0][0].buttons;

    createFolder.onPress();
    createChat.onPress();

    expect(navigate).toHaveBeenNthCalledWith(1, ScreenName.BOXES_CREATE, {
      parentId: 'id',
      type: BoxType.FOLDER,
    });
    expect(navigate).toHaveBeenNthCalledWith(2, ScreenName.BOXES_CREATE, {
      parentId: 'id',
      type: BoxType.CHAT,
    });
  });
});
