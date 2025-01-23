
import React, { useState, useEffect, useRef } from 'react';
import "../assests/styles/components/header.css";

const Header = () => {
  const [content, setContent] = useState([
    'Lorem ipsum dolor 1',
    'Lorem ipsum dolor 2',
    'Lorem ipsum dolor 3',
  ]);
  
  const headerRef = useRef(null);

  const loadMoreContent = () => {
    setContent(prevContent => [
      ...prevContent,
      `Lorem ipsum dolor ${prevContent.length + 1}`,
      `Lorem ipsum dolor ${prevContent.length + 2}`,
      `Lorem ipsum dolor ${prevContent.length + 3}`,
    ]);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = headerRef.current;
        if (scrollHeight - scrollTop === clientHeight) {
          loadMoreContent();
        }
      }
    };

    const headerElement = headerRef.current;
    headerElement.addEventListener('scroll', handleScroll);
    
    return () => {
      if (headerElement) {
        headerElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <header ref={headerRef} className="header">
      {content.map((item, index) => (
        <p key={index} className="fade-in">{item}</p>
      ))}
    </header>
  );
};

export default Header;
