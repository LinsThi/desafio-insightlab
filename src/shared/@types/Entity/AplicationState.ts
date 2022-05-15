import { CitizensVacinnedState } from '~/shared/store/ducks/citizensVacinned/types';
import { UserState } from '~/shared/store/ducks/user/types';

export interface AplciationState {
  user: UserState;
  citizensVacinned: CitizensVacinnedState;
}
