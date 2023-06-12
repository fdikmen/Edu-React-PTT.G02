import React,{lazy, useState} from 'react'
import BugFixed from './components/BugFixed'
import SuspenseComp from './components/SuspenseComp';
import {IntlProvider, FormattedMessage} from 'react-intl';

const messagesInEnglish = {
  hello: 'Hello',
  goodbye: 'Goodbye',
};

const messagesInFrench = {
  hello: 'Bonjour',
  goodbye: 'Au revoir',
};

const messagesInTurkish = {
  hello: 'Merhaba',
  goodbye: 'Güle güle',
};


// const LazyComp = lazy(() => import('./components/LazyComp'));


export default function App() {
  const [locale, setLocale] = useState('en');
  const [messages, setMessages] = useState(messagesInEnglish);

  const switchToEnglish = () => {
    setLocale('en');
    setMessages(messagesInEnglish);
  };

  const switchToFrench = () => {
    setLocale('fr');
    setMessages(messagesInFrench);
  };

  const switchToTurkish = () => {
    setLocale('tr');
    setMessages(messagesInTurkish);
  };


  return (
    <IntlProvider locale={locale} messages={messages}>
      <div>App
      <hr/>
      <button onClick={switchToEnglish}>English</button>
      <button onClick={switchToFrench}>French</button>
      <button onClick={switchToTurkish}>Turkish</button><br/>
      <FormattedMessage id="hello" /><br/>
      <FormattedMessage id="goodbye" />
      <hr/>
      <BugFixed />
      {/* <LazyComp /> */}
      <SuspenseComp />
    </div>
    </IntlProvider>
  )
}
