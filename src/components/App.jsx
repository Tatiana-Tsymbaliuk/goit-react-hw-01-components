
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/FriendsList/FriendsList';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
//import { Profile } from './Profile/Profile';


export const App = () => {
  return (
    <div >
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
      
      <Statistics title="Upload stats" stats={data} />
      <Statistics  stats={data}/>
     <FriendsList friends={friends} />
    </div>
  );
}; 
