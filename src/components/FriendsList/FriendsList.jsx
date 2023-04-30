import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';
import css from './FriendsList.module.css';

export const FriendsList = ({friends}) => {
        return (<ul className={css.friendList}>{
         friends.map(({id,name, avatar, isOnline  })=>
        <FriendsListItem key={id}
                         avatar={avatar}
                         name={name}
                isOnline={isOnline} />
        )
        }
 </ul>
        )
}