import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="72ee3515-6274-4e34-9988-a0c4966eee9b"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
        />
    )
}

export default App;