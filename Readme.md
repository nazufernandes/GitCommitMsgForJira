### Jira Commit Message 0.0.1 (Chrome Extention)

A chrome extension to Generate Commit Message for Git from Jira ticket.

> **Note**: Define your commit message pattern in content.js before loading the extension, its a one time change.

    commit_msg_pattern = "{Title} [[{TicketID}]({url})]"


## Steps To Install
1. Clone this repo in desired folder using cmd.
> `git clone https://github.com/nazufernandes/JiraCommitMessage.git`

2. In chrome paste `chrome://extensions/` and Enable developer mode and load the cloned folder using Load unpacked option.

  ![Alt text](https://www.freecodecamp.org/news/content/images/size/w1000/2022/02/Untitled-design--1--1.png)

3. Once that's done, you need to click the  `Load unpacked`  button which will allow us to load our project in the Chrome extension store.

Now, the extension is available in our Chrome extension store.


## How To Use
1. Go to your Jira issue/item.
2. Click on the extension icon.
3. Copy the git message. Done!


> Created By : Nazu Fernandes 