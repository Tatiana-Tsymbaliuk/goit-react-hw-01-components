import PropTypes from 'prop-types';
import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';
import css from './FriendsList.module.css';

export const FriendsList = ({ friends }) => {
        return (<ul className={css.friendList}>{
                friends.map(({ id, name, avatar, isOnline }) =>
                        <FriendsListItem key={id}
                                avatar={avatar}
                                name={name}
                                isOnline={isOnline} />
                )
        }
        </ul>
        )
};

FriendsList.propTypes = {
        friends: PropTypes.arrayOf(PropTypes.exact({
                avatar: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired, 
                isOnline: PropTypes.bool.isRequired,
                id:PropTypes.number.isRequired
    }))    
}
