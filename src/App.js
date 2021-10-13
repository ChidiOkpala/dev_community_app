import { useState } from 'react';

import { ChatArea } from './components/chatArea/ChatArea';
import { ChatInput } from './components/chatInput/ChatInput';
import { MenuBar } from './components/menuBar/MenuBar';
import './App.css';

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="app-wrapper position-relative d-flex w-100"> 
      <MenuBar className="d-none d-sm-flex" />
      {showMobileMenu && (
        <div className="mobile-menu-wrapper">
          <MenuBar className="mobile-menu-bar d-flex d-sm-none" />
          <div
            className="close-icon"
            onClick={() => setShowMobileMenu(false)}
          >
            <CloseIcon />
          </div>
        </div>
      )}
      <main className="main-section-wrapper col-12 col-sm-9 h-100">
        <div className="main-header header">
          <div
            className="menu-button d-block d-sm-none"
            onClick={() => setShowMobileMenu(true)}
          >
            <MenuButton />
          </div>
          <span>Front-end Developers</span>
        </div>
        <div className="main-content d-flex flex-column">
          <ChatArea chats={chats} />
          <ChatInput onSubmit={value => console.log(value)} />
        </div>
      </main>
    </div>
  );
};

export default App;

export const image = 'https://media.istockphoto.com/photos/visual-contents-concept-social-networking-service-streaming-video-picture-id1312418309';

const chats = [
  {
    name: 'Philip Oke',
    date: 'yesterday at 2:29 AM',
    chatMessage: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra 😀'
  },
  {
    name: 'Philip Oke',
    date: 'yesterday at 2:29 AM',
    chatMessage: 'Morbi eget turpis ut massa luctus cursus. Sed sit amet risus quis neque condimentum aliquet. Phasellus consequat et justo eu accumsan 🙌. Proin pretium id nunc eu molestie. Nam consectetur, ligula vel mattis facilisis, ex mauris venenatis nulla, eget tempor enim neque eget massa 🤣'
  },
  {
    name: 'Philip Oke',
    date: 'yesterday at 2:29 AM',
    chatMessage: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra 😀'
  },
  {
    name: 'Philip Oke',
    date: 'yesterday at 2:29 AM',
    chatMessage: 'Morbi eget turpis ut massa luctus cursus. Sed sit amet risus quis neque condimentum aliquet. Phasellus consequat et justo eu accumsan 🙌. Proin pretium id nunc eu molestie. Nam consectetur, ligula vel mattis facilisis, ex mauris venenatis nulla, eget tempor enim neque eget massa 🤣'
  },
  {
    name: 'Philip Oke',
    date: 'yesterday at 2:29 AM',
    chatMessage: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra 😀'
  },
  {
    name: 'Philip Oke',
    date: 'yesterday at 2:29 AM',
    chatMessage: 'Morbi eget turpis ut massa luctus cursus. Sed sit amet risus quis neque condimentum aliquet. Phasellus consequat et justo eu accumsan 🙌. Proin pretium id nunc eu molestie. Nam consectetur, ligula vel mattis facilisis, ex mauris venenatis nulla, eget tempor enim neque eget massa 🤣'
  },
];

const MenuButton = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" className="bi bi-list" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-x-lg" viewBox="0 0 16 16">
    <path fillRule="evenodd" clipRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" fill="#ffffff"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" fill="#ffffff"/>
  </svg>
)
