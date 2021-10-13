import './ChannelsList.css';

export const ChannelsList = ({
  channelsList,
  onSelect,
}) => (
  <div className="channels-list-wrapper">
    {channelsList?.map(channel => (
      <div key={channel} className="channel-wrapper" onClick={() => onSelect(channel)}>
        <div className="channel-initials">{getChannelInitials(channel)}</div>
        <div className="header">{channel.toUpperCase()}</div>
      </div>
    ))}
  </div>
);

const getChannelInitials = (channel) => {
  return channel
    .split(' ')
    .reduce((accumulator, channel) => accumulator + channel[0].toUpperCase(), '')
}
