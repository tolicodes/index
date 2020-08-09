# My Setup
## Software
### Install Google Drive Sync and Dropbox
These are automatically installed by MacApps
```
curl -s 'https://api.macapps.link/en/chrome-dropbox-drive' | sh
```

Takes forever to sync so...install it first
- [Google Drive](https://www.google.com/drive/download/)
	- Sign in as adz@nycitt.com
	- Go to Preferences, change Removing items to "Always remove both copies", check "Upload newly added photos and videos", click "Uploading photos and videos in..." and pick "High Quality"
 - [Dropbox](https://www.dropbox.com/downloading) 
   - Choose "Online only"
   - Choose "Selective Sync" and only sync "ALL->Recordings"
   - Drag `ALL/Recordings` to Finder sidebar

### MacApps
```
curl -s 'https://api.macapps.link/en/chrome-dropbox-drive-github-sequelpro-vscode-docker-sketch-iterm-1password-cyberduck-spotify-skype-slack-whatsapp-discord' | sh
```

- Github
	- 

### HomeBrew
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

```
brew install the-clock hubstaff nvm yarn rescuetime tower postman jq hub obs
```

Setup
```
# powerline fonts
rm ~/.zshrc && ln -s ~/Google\ Drive/ALL\ -\ Toli/Config\ Files/.zshrc && source ~/.zshrc

git clone https://github.com/powerline/fonts.git --depth=1
# install
cd fonts
./install.sh
# clean-up a bit
cd ..
rm -rf fonts

# nvm
nvm install 12

# lerna
npm i -g lerna

# Codefresh
npm i -g codefresh
```

- In Iterm go to Preferences->Profiles->Text->Fonts and select "Droid Sans Mono Dotted for Powerline"
- Codefresh
	- Get API Key From [here](https://g.codefresh.io/user/settings)
	- Authenticate with key from previous step

		  codefresh auth create-context --api-key KEY_GOES_HERE
	- Go to "CodeFresh Registry Section" click generate and copy Docker login command and paste it in terminal
	- RescueTime
	   - Login as adz@nycitt.com
	- Tower
		- License in 1Password
		- Choose Default to clone to: `~/Sites`
	- Visual Studio Code
		- Open Vscode Command Exec (Command + Shift + P) and then type ">install code" and press "Enter". This will install `code`
		- Go to Preferences->Settings->Type "font terminal" and paste "Droid Sans Mono Dotted for Powerline"
		- Use "Settings Sync" extension to sync [these settings](https://gist.github.com/tolicodes/05e150802f12d1e3c4ccfbe997f8b43f) login with Github and check "Auto Download", "Auto Upload", "Force Download", "Force Upload"  and type "Download Settings" in Console. Press "Shift+Alt+D" to sync
	- Zoom
		- Settings->Recording
		- Store recordings in Dropbox/ALL/Recordings
		- Choose location to save the recording to after meetings ends
		- Add timestamp
		- Record video during screen sharing->Place video next to shared screen
	- OBS
		- [Install OBS](https://obsproject.com/download)
- OBS->Preferences->Output->Recording->Recording Format select "mp4"
		- OBS->Preferences->Output->Record->Recording Path set to "/Users/toli/ToliCodes Dropbox/Anatoliy Zaslavskiy/ALL/Recordings"
		- OBS->Preferences->Video Both resolutions to 1920x1200
		- Setup Display recording + top left hand corner video scene
- Log into npm
	`npm login`
The-0ok nb
### App Store

#### Installed By MacApps
- 1Password
	- Configure using iphone
	- Preferences->Security->Allow Touch ID
- WhatsApp
- The Clock

#### Needs install
- Amphetamine
- SpeedTest
- Duplicate Finder Remover
	- Preferences->Upgrade to Pro->Restore
- Be Focused Pro
	- Open Settings and Log In (adz@nycit.com)
	- Launch at Startup
- Giphy Capture
- Moom
    - Go to General, uncheck "Show preferences on launch", check "Launch automatically on login"
 	- Configure Moom Settings
		- Command+Option+Left - left side
		- Command+Option+Right - right side
		- Command+Option+Up - full screen
	- Check Run as "Menu Application" in the main screen 
- XCode
	- Open Xcode and agree to license agreement
	- - Install command line tools `xcode-select --install`
- DayOne
	- Sign in using icloud
- Slack
	- Workspaces
		- toli@tolicodes.com
			- [COVID-basic-needscovid-basic-needs.slack.com](https://app.slack.com/t/covid-basic-needs/login/z-app-1030749815989-1275710947639-636f8de80ad572fe7689f3934303dfaa2f0fa9ee3c3705cf6fcd38f467ea79ac)
			- [Cloud Native Computing Foundationcloud-native.slack.com](https://app.slack.com/t/cloud-native/login/z-app-8808823398-1296639835764-5bc4b3e947380c44b608c0c6b1f9ad4a8d10e1e8d46ba68a22e425563c59084b)
			- [Sunrise Bay Areasunrisebayarea.slack.com](https://app.slack.com/t/sunrisebayarea/login/z-app-216360348053-1314293690880-6e04ed14aa47bdc571c8537eb370a0f0dc634e70735323762e91694cf11af58c)
			- [Gigstergigster.slack.com](https://app.slack.com/t/gigster/login/z-app-3321749430-1314293691664-6a845ab8a27e0ec157cdbb1934111921de9e6558898529e154c2a01f773dfd1b)
			
			- [Bauhaus Labsbauhauslabs.slack.com](https://app.slack.com/t/bauhauslabs/login/z-app-503141149716-1290659590563-5dd56533fc10e8221eef6202934b8f0f29ef57272b171e7a404a021a68632fa0)
			- [JS Breakout Sessionsjsbreakoutsessions.slack.com](https://app.slack.com/t/jsbreakoutsessions/login/z-app-1085592952880-1283722996774-b6b344aa7b7849fa76bdff67ead14fddbad9e0ceab4d4252a724f4fb0df3b85a)
			- [thirdvotethird-vote.slack.com](https://app.slack.com/t/third-vote/login/z-app-415279109504-1289081656437-b4dfefcda93da0317a08890f3870b677946bfaecae05b67f5a56b53d439db5f1)
			- [Social Entrepreneurshipsocialentrepr-55n2299.slack.com](https://app.slack.com/t/socialentrepr-55n2299/login/z-app-967988461602-1289081655061-eb9902169f4b8300d5a4d125e03c36d30e76514549a06a3172bb4946de12b711)
			- [Homescorehomescoreapp.slack.com](https://app.slack.com/t/homescoreapp/login/z-app-400429449685-1303079075553-1c6feee3f764544a6c9e5e4b00f67b99d4cbccfba82cbb54ff91910d025c1b53)
			- [Open Source Life Trackeropensourcelifetracker.slack.com](https://app.slack.com/t/opensourcelifetracker/login/z-app-1032321560199-1290453447906-b7daed7a6b986c3aee329845401c7e75682a06e142dddef038cdd8d328acd1b7)
			- [ToliCodestolicodes.slack.com](https://app.slack.com/t/tolicodes/login/z-app-963917930962-1303079074945-76e1d975dbd020f387504bf81de5650b92b00c0b34605a0b4171381a45697acf)
			- [1124 Fell1124-fell.slack.com](https://app.slack.com/t/1124-fell/login/z-app-586439096176-1290453447346-fa656e5e56b763e03cb8a7bd04f9583393980b57e1c6f63febb1996c8ba64424)
			- [KissThisWorldkissthisworld.slack.com](https://app.slack.com/t/kissthisworld/login/z-app-805944651956-1283722996166-4a15073dd230f6c5f9f8a06e402d043b1511874c0866770a0486438f7b750566)
			- [sexhackhackathon20sexhackhackathon20.slack.com](https://app.slack.com/t/sexhackhackathon20/login/z-app-1049003326133-1290659590083-47db4a3efa62431e05e9f06ea4250775b99e8c0f9e52c1b06b2a853bbee09dc6)
- Numbers

### Download

#### Installed By MacApps
- [Chrome](https://www.google.com/chrome/?brand=CHBD&gclid=CjwKCAiA8K7uBRBBEiwACOm4d-CR4CPqSUYJJhj8Fks_GWJeAjOJvcLZibwbbQTjiNl9CM1-1W5VgRoCXNkQAvD_BwE&gclsrc=aw.ds)
	- Login as toli@nycitt.com
	- TabCloud - open Main
- Cyberduck
- [HubStaff](https://app.hubstaff.com/download)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Google Drive](https://www.google.com/drive/download/)
	- Sign in as adz@nycitt.com
	- Go to Preferences, change Removing items to "Always remove both copies", check "Upload newly added photos and videos", click "Uploading photos and videos in..." and pick "High Quality"
- [iTerm](https://www.iterm2.com/downloads.html)
	- [https://github.com/robbyrussell/oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)
	- `sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`
	- `rm ~/.zshrc && ln -s ~/Google\ Drive/ALL\ -\ Toli/Config\ Files/.zshrc && source ~/.zshrc`
	- Install Powerline Fonts: 
	
    git clone https://github.com/powerline/fonts.git --depth=1
	# install
	cd fonts
	./install.sh
	# clean-up a bit
	cd ..
	rm -rf fonts
	
    - In Iterm go to Preferences->Profiles->Text->Fonts and select "Droid Sans Mono Dotted for Powerline"
- [NVM](https://github.com/nvm-sh/nvm#installation-and-update) - 

	  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
	  source ~/.zshrc
	  nvm install 12
- Install yarn `curl -o- -L https://yarnpkg.com/install.sh | bash`
- Install lerna
	- `npm i -g lerna`
- CodeFresh CLI
	- Get API Key From [here](https://g.codefresh.io/user/settings)

	- Install CodeFresh CLI `npm i -g codefresh`
	- Authenticate with key from previous step

		  codefresh auth create-context --api-key KEY_GOES_HERE
   - Go to "CodeFresh Registry Section" click generate and copy Docker login command and paste it in terminal
- [RescueTime](https://www.rescuetime.com/get_rescuetime)
	- Login as adz@nycitt.com
- [Sketch](https://sketchapp.com/get/)
- [Spotify](https://www.spotify.com/us/download/other/)
- [Tower](https://www.git-tower.com/download-TO2M)
	- License in 1Password
	- Choose Default to clone to: `~/Sites`
- [Visual Studio Code](https://code.visualstudio.com/)
	- Open Vscode Command Exec (Command + Shift + P) and then type ">install code" and press "Enter". This will install `code`
	- Go to Preferences->Settings->Type "font terminal" and paste "Droid Sans Mono Dotted for Powerline"
	- Use "Settings Sync" extension to sync [these settings](https://gist.github.com/tolicodes/05e150802f12d1e3c4ccfbe997f8b43f) login with Github and check "Auto Download", "Auto Upload", "Force Download", "Force Upload"  and type "Download Settings" in Console. Press "Shift+Alt+D" to sync
	- Extensions
		- Debugger for Chrome
		- ESlint
		- Prettier
		- Gitlens
		- Visual Studio IntelliCode
		- Auto Close Tag
		- Bracket Pair Colorizer
		- Auto Import
		- Auto Rename Tag
		- Code Spellc Checker
		- Cucumber
		- Git Blame
		- JSON Parse and Stringify
		- Markdown All In One
		- NPM Intellisense
		- Prettify JSON
		- YAML
- [Zoom](https://zoom.us/download)
	- Settings->Recording
		- Store recordings in Dropbox/ALL/Recordings
		- Choose location to save the recording to after meetings ends
		- Add timestamp
		- Record video during screen sharing->Place video next to shared screen
- [PostMan](https://www.getpostman.com/downloads/)
- [Install Brew](https://brew.sh/)
	`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`	
- Install `jq`
	`brew install jq`
- Install `hub`
	`brew install hub`
-[Install OBS](https://obsproject.com/download)
	- OBS->Preferences->Output->Recording->Recording Format select "mp4"
	- OBS->Preferences->Output->Record->Recording Path set to "/Users/toli/ToliCodes Dropbox/Anatoliy Zaslavskiy/ALL/Recordings"
	- OBS->Preferences->Video Both resolutions to 1920x1200
	- Setup Display recording + top left hand corner video scene
- Log into npm
	`npm login`

## Config
- System Preferences -> Displays -> Scaled for More Space
- Click On Battery -> Show Battery Percentage
- Go to System Preferences->Sound and check "Show volume in menu bar"
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
- Create `~/Sites` directory and drag it into favorites in finder
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
### Get Remotes from Old Computer
```
find . -type d -depth 1 -exec git --git-dir={}/.git --work-tree=$PWD/{} config --get remote.origin.url \;

find . -type d -depth 1 -exec "cd {} \; -exec && git config --get remote.origin.url  \; -exec&& cd .." \;
```

### Clone on new computer
1. `cd ~/Sites`
2. Clone personal repos

		git clone git@github.com:tolicodes/node-cli-toolkit.git
		git clone git@github.com:tolicodes/node-api-toolkit.git
		git clone git@github.com:tolicodes/dropbox-photo-viewer.git
		git clone git@github.com:tolicodes/souleclipse.us.git
		git clone git@github.com:tolicodes/principles.git
		git clone git@github.com:hoverinc/infragen.git

		
		
3.  Clone HOVER repos

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

4. Yarn everything

       for f in ~/Sites/*
	   do cd $f && yarn 
	   done

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
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1MjQ0OTk5OTksMTM2OTM0NDgyMSwtMT
g4MTc5NjU2LDgwOTk1MDgzLDI5MjMwMDIyOCwtMTAyMDc5NzQ0
NiwtMjg2NDM5NDQ5LDEyOTEwMjMxNzgsLTUwMTkxMzcwLC0xNz
M0MzExOTk0LC0zNjQyOTU5NTksNjA1MTc2MjIzLDYwMzMzMjQ1
XX0=
-->