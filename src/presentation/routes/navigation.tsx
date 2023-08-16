import {NavigationContainerRef} from '@react-navigation/native';
import {createRef} from 'react';

export const navigationRef: React.RefObject<
  NavigationContainerRef<ReactNavigation.RootParamList>
> = createRef();

function navigate(name: string, params?: object): void {
  navigationRef.current?.navigate(name, params);
}
function goBack() {
  navigationRef.current?.goBack();
}

export const navigation = {
  navigate,
  goBack,
};
