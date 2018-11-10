import { UserDto } from '../models/user-dto';
import { SongDto } from '../models/song-dto';

export const USER: UserDto[] = [
  { accountName: 'candi spotify', email: 'bonko1cn@cmich.edu' },
];

export const SONG: SongDto[] = [
  { artist: 'Prince', title: 'Purple Rain', lyrics: 'I never meant to cause you any sorrow I never meant to cause you any pain I only wanted to one time to see you laughingI only wanted to see youLaughing in the purple rainPurple rain, purple rainPurple rain, purple rainPurple rain, purple rainI only wanted to see youBathing in the purple rain', addToList: true, songID: '12321', songURI: 'songURI1232'}
];
