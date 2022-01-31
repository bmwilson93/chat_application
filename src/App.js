import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="72ee3515-6274-4e34-9988-a0c4966eee9b"
            userName="eightyleek"
            userSecret="1234"
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
        />
    )
}

export default App;