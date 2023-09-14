# Setup Computer

## Install Homebrew
We install most of our application
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

## Setup Google Drive Sync
This takes a while to sync so let's install it first

```bash
brew cask install google-backup-and-sync
```

```
    (echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/toli/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"
```

Open a new shell

- Sign in as toli@oselot.com

## Setup Dropbox
This also takes a while to sync:

- Sign in using Google toli@oselot.com
- Choose "Online only"

## Install XCode
Go to the App Store and install XCode. It contains a lot of command line utilities necessary later on. It takes a long time to download as well.

## Install Brew Cask Software
These are GUIs that I use.

Run the following command to install software that I use:

```bash
brew install  --cask  \
	1password \
	cyberduck \
	docker \
        dropbox-capture \
        github \
	google-chrome \
	iterm2 \
	moom \
	obs \
	postman \
	rescuetime \
	sequel-pro \
	slack \
	spotify \
	visual-studio-code \
	whatsapp \
	zoom
```

## Install Command Line Utils
Run:

```bash
brew install \
	hub \
	jq \
	node \
	rclone \
	speedtest-cli \
	yarn
```

## App Store
- Amphetamine
- SpeedTest
- Duplicate File Remover
	- Preferences->Upgrade to Pro->Restore
- Be Focused Pro
	- Open Settings and Log In (adz@nycit.com)
	- Launch at Startup
- XCode
	- Open Xcode and agree to license agreement
	- Install command line tools `xcode-select --install`
- Numbers

## Command Line setup
```bash
# Oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# powerline fonts
git clone https://github.com/powerline/fonts.git --depth=1
cd fonts
./install.sh
cd ..
rm -rf fonts

# nvm
source ~/.zshrc
nvm install latest
```

## Login to CLIs
```bash
npm login
```

## Application Setup
- 1Password
	- Open on login
	- Configure using iphone
	- Preferences->Security->Allow Touch ID
	- In chrome [install plugin](https://chrome.google.com/webstore/detail/1password-extension-deskt/aomjjhallfgjeglblehebfpbcfeobpgk?hl=en) and configure it
- WhatsApp
	- Open and log in using phone
- iTerm
	- In Iterm go to Preferences->Profiles->Text->Fonts and select "Novo Monofor Powerline"
	- RescueTime
	   - Login as adz@nycitt.com
- Visual Studio Code
	- Open Vscode Command Exec (Command + Shift + P) and then type ">install code" and press "Enter". This will install `code`
	- Go to Preferences->Settings->Type "font terminal" and paste "Droid Sans Mono Dotted for Powerline"
	- Click of sync settings
	- Login with Github
- Zoom
	- Login as toli@oselot.com (Google)
	- Settings->Recording
	- Store recordings in Dropbox/ALL/Recordings
	- Choose location to save the recording to after meetings ends
	- Add timestamp
	- Record video during screen sharing->Place video next to shared screen
- OBS
	- OBS->Preferences->Output->Recording->Recording Format select "mp4"
	- OBS->Preferences->Output->Record->Recording Path set to "/Users/toli/ToliCodes Dropbox/Anatoliy Zaslavskiy/ALL/Recordings"
	- OBS->Preferences->Video Both resolutions to 1920x1200
	- Setup Display recording + top left hand corner video scene
		- Display Capture, Video Capture Device
		- Edit->Transform->Fit to screen
- Moom
    - Go to General, uncheck "Show preferences on launch", check "Launch automatically on login"
 	- Configure Moom Settings
		- Command+Option+Left - left side
		- Command+Option+Right - right side
		- Command+Option+Up - full screen
	- Check Run as "Menu Application" in the main screen 
- Postman
	- Sign in with toli@nycitt.com
- Slack [Workspaces](./slack-workspaces)
- Github
	- Drag everything in the `~Sites` folder onto the screen
- Docker
	- Open and accept permissions

## Config
- System Preferences -> Displays -> Scaled for More Space
- Click On Top Bar -> Battery -> Show Battery Percentage
- Go to System Preferences->Sound and check "Show volume in menu bar"
- Create `~/Sites` and drag it into favorites
- System Preferences -> Energy Saver -> Power Adapter -> Turn Display Off after "Never", Uncheck "Put harddisks to sleep", uncheck "Enable power nap"
- Get rid of all the icons you don't use on the bottom bar
- Keep the following in the bottom bar
	- Google Chrome
	- OBS
	- iTerm
	- WhatsApp
	- Slack
	- VSCode
	- Github Desktop
	- Zoom
	- Postman

## Repos to Clone
### Save Unmerged changes on old computer
```bash
setopt sh_word_split # For zsh
dirs=$(find . -maxdepth 1 -type d -execdir test -d {}/.git \; -prune -print 2>/dev/null)
for dir in $dirs; do
	originalPwd=$(pwd)
	cd $dir
    unclean=$(git status --porcelain)
    unpushed=$(git log --branches --not --remotes)
    [[ $unclean || $unpushed ]] && git add . && git commit -m "Uncommited Changes" && git push --all
	cd $originalPwd
done
```

### Get Repos From Old Computer
```bash
function executeInAllGitDirs {
	dirs=$(find . -maxdepth 1 -type d -execdir test -d {}/.git \; -prune -print 2>/dev/null)
	for dir in $dirs; do
		originalPwd=$(pwd)
		cd $dir
		eval $1
		cd $originalPwd
	done
}

executeInAllGitDirs "echo \"git clone \$(git config --get remote.origin.url)\""
```

### Clone on new computer
```bash
cd ~/Sites

# Personal Repos
git clone git@github.com:tolicodes/index.git
```

#### Yarn everything
```bash
setopt sh_word_split # For zsh
function executeInAllGitDirs {
	dirs=$(find . -maxdepth 1 -type d -execdir test -d {}/.git \; -prune -print 2>/dev/null)
	for dir in $dirs; do
		originalPwd=$(pwd)
		cd $dir
		eval $1
		cd $originalPwd
	done
}

executeInAllGitDirs "[[ \$(find . -name package.json) ]] && yarn"
```

#### Copy DotFiles
Check [this](https://github.com/tolicodes/index/blob/master/howto/git-commands.md#sync-dotfiles-in-all-git-repos)

## Online Tools
- Code Storage
	- GitHub - best experience, paid for private repos
	- Bitbucket - free unlimited private repos, limited colabs
	- GitLab - free unlimited repos, unlimited colab
- Time Tracking
	- Hubstaff 
- Project Management
 	- Trello: small projects/tasks
	- JIRA: big projects, big teams
	- Asana
- Scheduling
	- Calend.ly
- Jobs
	- CodeMentor
	- CodeMentor X  
- Hosting
	- Netlify - preferred, easy hosting, Node
	- Surge.sh - static website hosting
	- AWS - big application hosting
- Mockups
	- Invision
	- SketchUp - making mockups
- Analytics
	- HotJar - heatmaps
	- FullStory
	- Google Analytics
- Error Tracking
	- Rollbar
- Email Testing
	- Litmus
- Document Signing/Contracts
	- HelloSign

## JS Stack
- Node
- React
- React Native
- Redux
- Connected React Router
- StyledComponents
- Contentful - CMS
- Storybook
- create-react-app
- create-react-native-app
- Expo

## Deprecated

### MacApps
```
curl -s 'https://api.macapps.link/en/chrome-dropbox-drive-github-sequelpro-vscode-docker-sketch-iterm-1password-cyberduck-spotify-skype-slack-whatsapp-discord' | sh
```

### Download  Links (In Case Something Breaks)
- [Chrome](https://www.google.com/chrome/?brand=CHBD&gclid=CjwKCAiA8K7uBRBBEiwACOm4d-CR4CPqSUYJJhj8Fks_GWJeAjOJvcLZibwbbQTjiNl9CM1-1W5VgRoCXNkQAvD_BwE&gclsrc=aw.ds)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Google Drive](https://www.google.com/drive/download/)
- [iTerm](https://www.iterm2.com/downloads.html)
- [RescueTime](https://www.rescuetime.com/get_rescuetime)
- [Spotify](https://www.spotify.com/us/download/other/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Zoom](https://zoom.us/download)
- [PostMan](https://www.getpostman.com/downloads/)
- [Brew](https://brew.sh/)
- [OBS](https://obsproject.com/download)
