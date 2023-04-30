import css from './FriendsListItem.module.css'

export const FriendsListItem = ({ variant, avatar, name, isOnline }) => {
        const className = ["status", variant];
        if (isOnline) className.push("online");
        return (<li className={css.item}>
<span className={className.join(" ")}></span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
 <p className="name">{name}</p>
</li>)
}