import { image } from '../../App';
import './Chat.css'

export const Chat = ({
  chatMessage,
  date,
  name,
}) => (
  <div className="chat-wrapper d-flex">
    <img src={image} alt={name} />
    <div className="chat-content d-flex flex-column">
      <div className="name-date d-flex align-items-center">
        <div className="name">{name}</div>
        <div className="date">{date}</div>
      </div>
      <div className="chat-message">{chatMessage}</div>
    </div>
  </div>
);
