import Avatar from '@components/Avatar';
import ActionButton from '@components/ActionButton';
import Divider from '@components/Divider';
import Indent from '@components/Indent';
import Input from '@components/Input';
import Message from '@components/Message';
import MessageViewer from '@components/MessageViewer';
import Navigation from '@components/Navigation';
import SidebarLayout from '@components/SidebarLayout';

import * as React from 'react';

interface MessagesInterfaceProps extends React.HTMLAttributes<HTMLSpanElement> {}

const ChatPreviewInline = (props) => {
  return <div style={{ opacity: 0.5, width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'inline-block' }}>{props.children}</div>;
};

const MessagesInterface: React.FC<MessagesInterfaceProps> = () => {
  return (
    <div style={{ minWidth: '28ch' }}>
      <Navigation
        logo="✶"
        left={
          <>
            <ActionButton>FILE</ActionButton>
            <ActionButton>EDIT</ActionButton>
            <ActionButton>VIEW</ActionButton>
          </>
        }
        right={
          <>
            <ActionButton>HELP</ActionButton>
          </>
        }
      ></Navigation>
      <Divider type="DOUBLE" />
      <SidebarLayout
        defaultSidebarWidth={12}
        sidebar={
          <>
            <Avatar>
              <Indent>
                Arthur
                <br />
                <ChatPreviewInline>No, it has to be more unique</ChatPreviewInline>
              </Indent>
            </Avatar>
            <Avatar>
              <Indent>
                Ariadne
                <br />
                <ChatPreviewInline>No. Just you.</ChatPreviewInline>
              </Indent>
            </Avatar>
            <Avatar>
              <Indent>
                Eames
                <br />
                <ChatPreviewInline>dream a little bigger</ChatPreviewInline>
              </Indent>
            </Avatar>
            <Avatar>
              <Indent>
                Yusef
                <br />
                <ChatPreviewInline>Depends on the dream.</ChatPreviewInline>
              </Indent>
            </Avatar>
            <Avatar>
              <Indent>
                Saito
                <br />
                <ChatPreviewInline>I bought the airline.</ChatPreviewInline>
              </Indent>
            </Avatar>
          </>
        }
      >
        <Message>Why are they all looking at me?</Message>
        <MessageViewer>Because my subconscious feels that someone else is creating this world. The more you change things, the quicker the projections start to converge on you.</MessageViewer>
        <Message>Converge?</Message>
        <MessageViewer>It's the foreign nature of the dreamer. They attack like white blood cells fighting an infection.</MessageViewer>
        <Message>They're going to attack us?</Message>
        <MessageViewer>No. Just you.</MessageViewer>
        <br />
        <br />
        <Input autoComplete="off" isBlink={true} label="Message" name="test_message_interface" />
      </SidebarLayout>
    </div>
  );
};

export default MessagesInterface;
