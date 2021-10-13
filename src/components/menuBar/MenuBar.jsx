import { useState } from 'react'

import { MembersList } from '../membersList/MembersList';
import { ChannelIntro } from '../channelIntro/ChannelIntro';
import { Member } from '../member/Member';
import { ChannelsList } from '../channelsList/ChannelsList'
import { SearchInput } from '../searchInput/SearchInput';
import { CustomModal } from '../modal/Modal';
import './MenuBar.css';

export const MenuBar = ({ className }) => {
  const [channels, setChannels] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <aside className={`aside-section-wrapper col-sm-3 h-100 ${className || ''}`}>
      <div className="aside-header header d-flex">
        {
          channels
            ? <div className="channels-header-wrapper">
              <span>Channels</span>
              <button
                data-bs-toggle="modal"
                className="plus-wrapper"
                data-bs-target="#staticBackdrop"
                onClick={() => setShowModal(true)}
              >
                <PlusSign />
              </button>
            </div>
            : <div className="arrow-wrapper" onClick={() => (setChannels(true))}>
              <div className="arrow"><ArrowLeft /></div>
              <span>All channels</span>
            </div>
        }
      </div>
      <CustomModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={(values) => console.log(values)}
      />
      <div className="aside-content">
        {
          channels
            ? <div>
              <SearchInput onSubmit={(value) => console.log(value)} />
              <ChannelsList channelsList={channelsList} onSelect={(channel) => setChannels(false)} />
            </div>
            : <>
              <ChannelIntro />
              <MembersList memberList={memberList} />
            </>
        }
      </div>
      <div className="mt-auto aside-footer">
        <Member extra {...memberList[0]} onClick={() => {}} />
      </div>
    </aside>
  );
};

export const image = 'https://media.istockphoto.com/photos/visual-contents-concept-social-networking-service-streaming-video-picture-id1312418309';

const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
  </svg>
);

const PlusSign = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-plus-lg" viewBox="0 0 16 16">
    <path fillRule="evenodd" clipRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" fill="#ffffff"/>
  </svg>
)

const memberList = [
  { name: 'Philip Oke', image },
  { name: 'Philip Oke', image },
  { name: 'Philip Oke', image },
  { name: 'Philip Oke', image }
];

const channelsList = [
  'Front-end developers',
  'random',
  'BACK-END',
  'Welcome',
]
