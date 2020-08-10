# My Setup
## Software
### Install Google Drive Sync and Dropbox
These are automatically installed by:
```
curl -s https://ai.maslikenchromedropbox-drive' | sh
```

We need ssh keys so let's start syncing

Takes forever to sync so...install it first
- [Google Drive](https://www.google.com/drive/download/)
	- Sign in as adz@nycitt.com
	- Go to Preferences, change Removing items to "Always remove both copies", check "Upload newly added photos and videos", click "Uploading photos and videos in..." and pick "High Quality"
 - [Dropbox](https://www.dropbox.com/downloading) 
   - Choose "Online only"
   - Choose "Selective Sync" and only sync "ALL->Recordings"
   - Drag `ALL/Recordings` to Finder


### HomeBrew
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

brew cask install the-clock hubstaff rescuetime tower postman obs google-chrome dropbox google-backup-and-sync github sequel-pro visual-studio-code docker sketch iterm2 1password cyberduck spotify skype slack whatsapp discord moom zoom github

brew install yarn jq hub
```

### Command Line setup
```bash
# Setting up zsh
rm ~/.zshrc && ln -s ~/Google\ Drive/ALL\ -\ Toli/Config\ Files/.zshrc && source ~/.zshrc

# powerline fonts
git clone https://github.com/powerline/fonts.git --depth=1
cd fonts
./install.sh
cd ..
rm -rf fonts

# nvm
https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
source ~/.zshrc
nvm install 12

# Install yarn
curl -o- -L https://yarnpkg.com/install.sh | bash

# lerna
npm i -g lerna

# Codefresh
npm i -g codefresh

# MANUAL Commands
npm login
```

### Manual Downloads
- [Tower](https://www.git-tower.com/download-TO2M)
	- License in 1Password
	- Choose Default to clone to: `~/Sites`

### App Store
- Amphetamine
- SpeedTest
- Duplicate File Remover
	- Preferences->Upgrade to Pro->Restore
- Be Focused Pro
	- Open Settings and Log In (adz@nycit.com)
	- Launch at Startup
- Giphy Capture
- XCode
	- Open Xcode and agree to license agreement
	- Install command line tools `xcode-select --install`
- DayOne
	- Sign in using icloud
- Numbers


### Clone on new computer
```bash
cd ~/Sites

# Personal Repos
git clone git@github.com:tolicodes/node-cli-toolkit.git
git clone git@github.com:tolicodes/activity-brainstorm.git
git clone git@github.com:tolicodes/node-api-toolkit.git
git clone git@github.com:tolicodes/dropbox-photo-viewer.git
git clone git@github.com:tolicodes/souleclipse.us.git
git clone git@github.com:tolicodes/principles.git
git clone git@github.com:hoverinc/infragen.git
git clone git@github.com:tolicodes/github-toolkit.git
git clone git@github.com:tolicodes/zoomevents.git
git clone git@github.com:tolicodes/index.git
git clone git@github.com:tolicodes/infragen.git

# Client repos
git clone git@github.com:COVID-basic-needs/JS-frontend.git
git clone git@github.com:TackleHunger/TackleHunger.git
git clone git@github.com:tolicodes/erxes.git
git clone git@github.com:tolicodes/erxes-api.git

# Hover
git clone git@github.com:hoverinc/design-pro-frontend.git
git clone git@github.com:hoverinc/ks8-applications.git
git clone git@github.com:hoverinc/website.git
git clone git@github.com:hoverinc/developers.hover.to.git
git clone git@github.com:hoverinc/hoverctl.git
git clone git@github.com:hoverinc/cd-tools.git
git clone git@github.com:hoverinc/machete.git
git clone git@github.com:hoverinc/org_analytics.git
git clone git@github.com:hoverinc/hyperion.git
git clone git@github.com:hoverinc/billing-frontend.git
git clone git@github.com:hoverinc/codefresh_qa.git
git clone git@github.com:hoverinc/design-tokens.git
git clone git@github.com:hoverinc/engineering.git
git clone git@github.com:hoverinc/hover-javascript.git
git clone git@github.com:hoverinc/picklejs.git
git clone git@github.com:hoverinc/webapps.git
git clone git@github.com:hoverinc/codefresh-test.git
git clone git@github.com:hoverinc/rfc.git
git clone git@github.com:hoverinc/developers.hover.to.git
git clone git@github.com:hoverinc/front-end-fastify-server.git
git clone git@github.com:hoverinc/hover-cli.git
git clone git@github.com:hoverinc/developers.hover.to.git
git clone git@github.com:tolicodes/public-notes.git
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

### Manual Setup
- 1Password
	- Open on login
	- Configure using iphone
	- Preferences->Security->Allow Touch ID
	- In chrome [install plugin](https://chrome.google.com/webstore/detail/1password-extension-deskt/aomjjhallfgjeglblehebfpbcfeobpgk?hl=en) and configure it
- WhatsApp
	- Open and log in using phone
- The Clock
- HubStaff
	- Login as toli@Tolicodes.com
	- Preferences->Automatically start Hubstaff
- iTerm
	- In Iterm go to Preferences->Profiles->Text->Fonts and select "Droid Sans Mono Dotted for Powerline"
- Codefresh
	- Get API Key From [here](https://g.codefresh.io/user/settings) bottom. Log in using google account (toli@nycitt.com)
	- Authenticate with key from previous step

		  codefresh auth create-context --api-key KEY_GOES_HERE
	- RescueTime
	   - Login as adz@nycitt.com
	- Tower
		- License in 1Password
		- Choose Default to clone to: `~/Sites`
- Visual Studio Code
	- Open Vscode Command Exec (Command + Shift + P) and then type ">install code" and press "Enter". This will install `code`
	- Go to Preferences->Settings->Type "font terminal" and paste "Droid Sans Mono Dotted for Powerline"
	- Install "Settings Sync" extension 
	- Login with Github
	- Use these settings to sync [these settings](https://gist.github.com/tolicodes/05e150802f12d1e3c4ccfbe997f8b43f) 
	- Go to "edit preferences"  and check "Auto Download", "Auto Upload", "Force Download", "Force Upload"  and type "Download Settings" in Console. Press "Shift+Option+D" to sync
- Zoom
	- Login as toli@nycitt.com
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
	- HubStaff
	- iTerm
	- WhatsApp
	- Slack
	- Tower
	- VSCode
	- Github Desktop
	- Zoom
	- Postman
- Symlink config files from Google Drive (download it directly if it's not synced and you want to start working). Internally it links `.ssh`
	- `ln -s ~/Google\ Drive/ALL\ -\ Toli/Config\ Files/.zshrc && source ~/.zshrc`
- AWS Setup (originally [here](https://hoverinc.atlassian.net/wiki/spaces/EN/pages/886440263/AWS+Multi-Account+access)
	- Run

		  brew install aws-okta awscli aws-iam-authenticator
		  mkdir ~/.aws
	- Copy the following into `~/.aws/config`
	
			[okta]
			aws_saml_url=home/amazon_aws/0oa13zruhwnKvZc5u357/272
			 
			[profile legacy]
			region=us-east-1
			role_arn=arn:aws:iam::241884713626:role/Developer
			 
			[profile legacy-operator]
			region=us-east-1
			role_arn=arn:aws:iam::241884713626:role/Operator
			 
			[profile app-prod]
			region=us-east-1
			role_arn=arn:aws:iam::567347048851:role/Developer
			  
			[profile app-preprod]
			region=us-east-1
			role_arn=arn:aws:iam::550986622600:role/Developer
			  
			[profile app-playground]
			region=us-east-1
			role_arn=arn:aws:iam::205623263074:role/Developer
			 
			[profile logs]
			region=us-east-1
			role_arn=arn:aws:iam::053214610460:role/Developer
	- Run Okta setup

			aws-okta add
	 
			Okta organization: hover
			Okta region (us, emea, preview): <hit_enter_leaving_it_blank>
			Okta domain hover.okta.com: <hit_enter_leaving_it_blank>
			Okta username: <your_hover_email@hover.to>
			Okta password: <your_okta_password>
	- Setup expiration in `~/.zshrc`
- VPN Set up (originally [here]([https://hoverinc.atlassian.net/wiki/spaces/EN/pages/28049410/Setting+up+the+HOVER+VPN](https://hoverinc.atlassian.net/wiki/spaces/EN/pages/28049410/Setting+up+the+HOVER+VPN)
	- In "System Preferences ->  Preferences" add VPN as "L2TP over IPSec" 
	
		- **Server Address:** san-francisco-wired-whvwpznqkc.dynamic-m.com
		- **Type:** VPN L2TP over IpSec
		- **Shared Secret:** H0v3rH1gh
		- **username**: toli@hoverinc.com
		- **password**: (Password sent via Cisco Meraki) - search in email 
	
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
- [HubStaff](https://app.hubstaff.com/download)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Google Drive](https://www.google.com/drive/download/)
- [iTerm](https://www.iterm2.com/downloads.html)
- [RescueTime](https://www.rescuetime.com/get_rescuetime)
com
- [Sketch](https://sketchapp.com/get/)
- [Spotify](https://www.spotify.com/us/download/other/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Zoom](https://zoom.us/download)
- [PostMan](https://www.getpostman.com/downloads/)
- [Brew](https://brew.sh/)
- [OBS](https://obsproject.com/download)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTQ2ODUyMDU5OCw2MTY1MzQ0NiwxMzg1Nj
k4NzMsLTEwMTcwMTQ2MDgsMTA1MjYyMjU0NCwxMTIyMDgzMDQx
LC0zMjA4MDUzNjUsLTEwNzMxMTk4NjAsMTA1NzUwNzU0Nl19
-->