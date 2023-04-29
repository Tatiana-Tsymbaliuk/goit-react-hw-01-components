import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';

export const FriendsList = ({friends}) => {
        return (<ul className="friend-list">{
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